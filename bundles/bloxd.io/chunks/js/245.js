export const id = 245;
export const ids = [245];
export const modules = {
  37613: (rr, Sr, Qr) => {
    function Zr(rr, Sr, Qr) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(rr, Sr).getContext("2d", Qr);
      const Zr = document.createElement("canvas");
      return Zr.width = rr, Zr.height = Sr, Zr.getContext("2d", Qr)
    }

    function Wr(rr, Sr) {
      return rr.getContext("2d", Sr)
    }
    Qr.d(Sr, {
      d: () => Wr,
      g: () => Zr
    })
  },
  42593: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir
    });
    const Zr = 1 << 20,
      Wr = 1 << 21,
      ar = 1024,
      jr = 2048;

    function Ir(rr, Sr, Qr) {
      const Ir = rr + Zr,
        fr = Sr + ar,
        Er = Qr + Zr;
      return Ir < 0 || Ir >= Wr || Er < 0 || Er >= Wr || fr < 0 || fr >= jr ? -1 : (Ir * Wr + Er) * jr + fr
    }
  },
  42589: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr,
      g: () => jr,
      i: () => Wr,
      j: () => ar,
      k: () => pr,
      m: () => Er,
      p: () => fr,
      t: () => Ir
    });
    Qr(4699);
    Qr(42593);

    function Zr(rr) {}

    function Wr(rr) {}

    function ar(rr) {}

    function jr(rr) {}

    function Ir(rr) {}

    function fr(rr, Sr, Qr) {}

    function Er(rr) {}

    function pr(rr) {}
  },
  42627: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => nr,
      f: () => Ur,
      g: () => br,
      k: () => Lr,
      n: () => cr,
      q: () => Pr,
      u: () => Hr,
      x: () => Yr,
      B: () => hr,
      E: () => zr,
      G: () => Or,
      J: () => Vr,
      M: () => yr,
      O: () => Mr,
      R: () => or,
      S: () => qr,
      W: () => gr
    });
    var Zr = Qr(5610),
      Wr = Qr(42500),
      ar = (Qr(42589), Qr(13));
    class jr {
      constructor(rr, Sr) {
        this.memory = rr, this.access = Sr, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.sx = 0, this.u32 = new ar.m(0), this.f32 = new ar.f(0), this.u8 = new ar.c(0), this.dataView = new ar.j(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.sx = this.access.sx(), this.buffer = (0, ar.J)(this.memory()), this.u32 = new ar.m(this.buffer, this.ptr, this.sx >>> 2), this.f32 = new ar.f(this.buffer, this.ptr, this.sx >>> 2), this.u8 = new ar.c(this.buffer, this.ptr, this.sx), this.dataView = new ar.j(this.buffer, this.ptr, this.sx)
      }
      ensureViews() {
        (0, ar.J)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(rr) {
        return !!this.fits(rr) || (this.dropped++, !1)
      }
      fits(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const Qr = Sr + rr;
        return Qr <= this.sx || Qr <= Zr.Pc && 0 !== this.access.reserve(Qr) && (this.refresh(), Qr <= this.sx)
      }
      consume(rr) {
        const Sr = this.cursor - rr;
        Sr > 0 && rr > 0 && (this.ensureViews(), this.u8.copyWithin(0, rr, this.cursor)), this.cursor = Sr > 0 ? Sr : 0
      }
      writeRecord(rr, Sr, Qr, Wr, ar) {
        if (!this.room(Zr.tb)) return !1;
        const jr = this.cursor >>> 2;
        return this.u32[jr] = 65535 & rr | (65535 & Sr) << 16, this.f32[jr + 1] = Qr, this.f32[jr + 2] = Wr, this.u32[jr + 3] = ar >>> 0, this.cursor += Zr.tb, !0
      }
      writeOptions(rr, Sr) {
        const Qr = Sr.byteLength,
          Wr = Zr.tb + (0, Zr.Ke)(Qr);
        if (!this.fits(Wr)) return !1;
        const ar = this.cursor,
          jr = ar >>> 2;
        this.u32[jr] = Zr.xb.Options, this.u32[jr + 1] = Qr, this.u32[jr + 2] = 0, this.u32[jr + 3] = rr >>> 0;
        const Ir = ar + Zr.tb;
        return this.u8.set(Sr, Ir), this.u8.fill(0, Ir + Qr, ar + Wr), this.cursor += Wr, !0
      }
      writeWorkerRecord(rr, Sr, Qr, Wr, ar, jr) {
        const Ir = jr.byteLength,
          fr = Zr.be + (0, Zr.Ke)(Ir);
        if (Ir > Zr.Zd) return this.dropped++, !1;
        if (!this.room(fr)) return !1;
        const Er = this.cursor,
          pr = Er >>> 2;
        this.u32[pr] = rr >>> 0, this.u32[pr + 1] = 65535 & Sr | (65535 & Qr) << 16, this.u32[pr + 2] = Wr >>> 0, this.u32[pr + 3] = ar >>> 0, this.u32[pr + 4] = Ir;
        const xr = Er + Zr.be;
        return this.u8.set(jr, xr), this.u8.fill(0, xr + Ir, Er + fr), this.cursor += fr, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(rr, Sr) {
        return this.writeNet(Zr.dc.Frame, rr, Sr)
      }
      writeOpen(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Zr.dc.Open, rr, fr(Sr))
      }
      writeClose(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Zr.dc.Close, rr, fr(Sr))
      }
      writeNet(rr, Sr, Qr) {
        const Wr = Qr.byteLength,
          ar = Zr.cc + (0, Zr.Ke)(Wr);
        if (Wr > Zr.Yb) return this.dropped++, !1;
        if (!this.room(ar)) return !1;
        const jr = this.cursor;
        this.u32[jr >>> 2] = Wr, this.u32[1 + (jr >>> 2)] = (0, Zr.Ge)(rr, Sr);
        const Ir = jr + Zr.cc;
        return this.u8.set(Qr, Ir), this.u8.fill(0, Ir + Wr, jr + ar), this.cursor += ar, !0
      }
      Yx(rr, Sr, Qr) {
        const Wr = Zr.t + (0, Zr.Ke)(Qr);
        if (!this.room(Wr)) return -1;
        const ar = this.cursor;
        this.u32[ar >>> 2] = 65535 & rr | (65535 & Sr) << 16, this.u32[1 + (ar >>> 2)] = Qr;
        const jr = ar + Zr.t;
        return this.u8.fill(0, jr, ar + Wr), this.cursor += Wr, jr
      }
      growForCmd(rr) {
        return this.fits(Zr.t + (0, Zr.Ke)(rr), 0)
      }
      writeCmd(rr, Sr, Qr) {
        const Zr = this.Yx(rr, Sr, Qr.byteLength);
        return !(Zr < 0) && (this.u8.set(Qr, Zr), !0)
      }
      copyWritten(rr, Sr) {
        return this.ensureViews(), this.u8.slice(rr, rr + Sr)
      }
    }
    const Ir = new ar.c(0);

    function fr(rr) {
      if (0 === rr) return Ir;
      const Sr = new ar.c(Zr.ac);
      for (let Qr = 0; Qr < Zr.ac; Qr++) Sr[Qr] = rr >>> 8 * Qr & 255;
      return Sr
    }
    class Er {
      constructor(rr, Sr) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new jr(Sr, {
          ptr: () => rr.Nm(),
          sx: () => rr.yIr(),
          reserve: Sr => rr.gIr(Sr)
        }), this.net = new jr(Sr, {
          ptr: () => rr.PIr(),
          sx: () => rr.XIr(),
          reserve: Sr => rr.CIr(Sr)
        }), this.worker = new jr(Sr, {
          ptr: () => rr.Zfr(),
          sx: () => rr.Qfr(),
          reserve: Sr => rr.MIr(Sr)
        }), this.cmd = new jr(Sr, {
          ptr: () => rr.mIr(),
          sx: () => rr.pIr(),
          reserve: Sr => rr.xIr(Sr)
        })
      }
      reset(rr, Sr, Qr) {
        this.input.consume(rr), this.worker.consume(Sr), this.cmd.consume(Qr)
      }
    }
    var pr = Qr(37529),
      xr = Qr(3378),
      mr = Qr(5604),
      Nr = Qr(42635);
    const Ur = "coreFrame",
      tr = "fatalStatus",
      hr = "otherCall",
      zr = "coreRings",
      Yr = "netIn",
      nr = "abi",
      er = "netOut",
      Kr = "workerOut",
      yr = "worldgenHost",
      Br = "eventWalker",
      Tr = "netEvent",
      vr = "envEvent",
      Or = "sharedTables",
      Lr = "inputAction",
      lr = "frameSends",
      Xr = new Set([Br, Tr, vr, lr, Lr, Or]),
      Pr = "wasmMemory",
      Hr = "meshHost";

    function qr(rr, Sr) {
      rr.forEachWorkerOut(((Qr, Wr, ar) => {
        if ((0, Zr.Ae)(Qr)) try {
          var jr;
          null === (jr = Sr.worldgen) || void 0 === jr || jr.take(Qr, ar)
        } catch (fr) {
          rr.crash(yr, fr)
        } else try {
          var Ir;
          null === (Ir = Sr.mesh) || void 0 === Ir || Ir.take(Qr, Wr, ar)
        } catch (fr) {
          rr.crash(Hr, fr)
        }
      }))
    }
    const Rr = 1048576;

    function gr(rr, Sr) {
      let Qr = !1;
      const Zr = () => {
        Qr = !1, Sr()
      };
      return () => {
        !Qr && rr.cursor >= Rr && (Qr = !0, queueMicrotask(Zr))
      }
    }
    const Cr = new Set([tr, hr, yr, Hr]);

    function Mr(rr) {
      return Xr.has(rr.site) ? rr.error instanceof WebAssembly.RuntimeError || (0, Wr.i)(rr.error) : !Cr.has(rr.site) && rr.error instanceof Error
    }
    const Gr = "events",
      kr = [],
      Ar = "debugLog",
      Vr = "terrainTextures",
      ir = "sunShadowTextures",
      wr = "joinWarm",
      cr = {
        Home: 0,
        Play: 1,
        Joined: 2
      },
      Fr = new TextDecoder;

    function or(rr, Sr) {
      const {
        site: Qr,
        error: Wr,
        header: ar
      } = rr, jr = ar ? (0, Zr.te)(ar.lastError) : "noFrame", Ir = `CORE-${Qr===tr?jr:Qr}`, fr = null === Wr || void 0 === Wr ? "" : ` ${(0,pr.l)(Wr)}`, Er = {
        site: Qr,
        wasmBuild: Sr.wasm,
        clientVersion: Sr.client
      };
      return ar && (Er.status = String(ar.status), Er.lastError = jr, Er.lastErrorCode = String(ar.lastError), Er.lastErrorDetail = String(ar.lastErrorDetail), Er.errorCount = String(ar.errorCount), Er.frameIndex = String(ar.frameIndex), Er.tickIndex = String(ar.tickIndex)), {
        code: Ir,
        message: `core ${Qr}, last error ${jr};${fr}`,
        details: Er
      }
    }
    class br {
      constructor(rr, Sr, Qr) {
        this.core = rr, this.memory = Sr, this.handlers = Qr, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: kr,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new Er(rr, Sr)
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
      framePaces(rr) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.nIr(rr)
        } catch (Sr) {
          return this.crash(Ur, Sr), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(rr, Sr) {
        var Qr;
        let ar = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: jr,
          net: Ir,
          worker: fr,
          cmd: Er
        } = this.rings, pr = Ir.cursor, xr = Sr && !this.drawsHeld;
        let hr = Zr.L.Fatal;
        const zr = jr.cursor,
          nr = fr.cursor,
          er = Er.cursor;
        let Kr, yr = null;
        const vr = this.handlers.onSends;
        try {
          const Sr = (xr ? Zr.gb.Draws : 0) | (ar ? Zr.gb.NetAll : 0) | (vr ? Zr.gb.StopForSends : 0);
          hr = (0, Nr.g)((() => {
            let Qr = this.core.frame(rr, zr, Ir.cursor, nr, Sr, er);
            for (; Qr === Zr.Ad && vr;) {
              var Wr;
              if (Kr ??= null === (Wr = this.gameHost) || void 0 === Wr ? void 0 : Wr.takeFault(), void 0 === Kr && !this.takeSends(vr)) return Zr.L.Fatal;
              Qr = this.core.pz()
            }
            return Qr
          }))
        } catch (wr) {
          yr = {
            error: wr
          }
        }
        Kr ??= null === (Qr = this.gameHost) || void 0 === Qr ? void 0 : Qr.takeFault();
        const Or = this.stopped || null !== yr || void 0 !== Kr;
        this.rings.reset(Or ? jr.cursor : zr, Or ? fr.cursor : nr, Or ? Er.cursor : er);
        const Lr = null === yr && void 0 === Kr,
          lr = Lr && !this.stopped && hr === Zr.L.Fatal && 0 === this.core.kN(),
          Xr = Lr && !lr ? this.headerView() : null,
          Pr = lr ? {
            ...null !== (Hr = this.lastHeader) && void 0 !== Hr ? Hr : (0, Zr.Me)(new Uint32Array(Zr.lb)),
            status: Zr.L.Fatal,
            lastError: Zr.J.CoreBusy,
            lastErrorDetail: 0
          } : null === Xr ? null : (0, Zr.Me)(Xr);
        var Hr;
        null !== Pr && (this.lastHeader = Pr);
        const qr = null !== Pr && hr !== Zr.L.Fatal,
          Rr = qr && null !== Xr ? Xr[Zr.mb.NetInKept] : 0,
          gr = qr && Rr <= pr && Rr % 4 === 0 ? Rr : null;
        var Cr, Mr;
        null !== Pr && null !== gr && hr === Zr.L.Errors && (null === (Cr = (Mr = this.handlers).onErrors) || void 0 === Cr || Cr.call(Mr, Pr));
        const Gr = null === gr ? kr : this.readEvents(pr);
        if (Ir.consume(pr - (null !== gr && void 0 !== gr ? gr : 0)), this.netKept = null !== gr && void 0 !== gr ? gr : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== yr) return this.crash(Ur, void 0 === Kr || Kr instanceof Wr.d ? yr.error : Kr), !1;
        if (void 0 !== Kr || null === Pr) return this.crashOn(Ur, Kr), !1;
        if (lr) return this.crash(tr, null), !1;
        const Ar = this.headerView()[Zr.mb.FrameDraw];
        if (this.lastFrameKind = (0, mr.e)(xr, Ar), hr === Zr.L.Fatal) return this.crash(tr, null), !1;
        if (null === gr) return this.crash(Yr, `the core kept ${Rr} of ${pr} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const rr = this.frameEvents,
            Sr = this.headerView();
          rr.ptr = Sr[Zr.mb.EventsPtr], rr.len = Sr[Zr.mb.EventsLen], rr.net = Gr, rr.kind = this.lastFrameKind;
          try {
            this.eventWalker(rr)
          } catch (wr) {
            return this.crashOn(Br, wr), !1
          }
          return this.handEnvEvents()
        }
        for (const Zr of Gr) {
          if (this.stopped) return !1;
          try {
            var Vr, ir;
            null === (Vr = (ir = this.handlers).onNetEvent) || void 0 === Vr || Vr.call(ir, Zr)
          } catch (wr) {
            return this.crashOn(Tr, wr), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const ar of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var rr, Sr;
            null === (rr = (Sr = this.handlers).onReconnectGrace) || void 0 === rr || rr.call(Sr, ar)
          } catch (Wr) {
            return this.crashOn(Tr, Wr), !1
          }
        }
        for (const ar of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var Qr, Zr;
            null === (Qr = (Zr = this.handlers).onEnvEvent) || void 0 === Qr || Qr.call(Zr, ar)
          } catch (Wr) {
            return this.crashOn(vr, Wr), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(rr) {
        this.eventWalker = rr
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: rr
        } = this.rings;
        try {
          const Sr = this.unsentUiPrefs;
          Sr && rr.writeRecord(Zr.xb.UiPrefs, 0, Sr.nametagCutDistance, 0, (0, Zr.Qe)(Sr)) && (this.unsentUiPrefs = null);
          const Qr = this.unsentEnvPrefs;
          Qr && rr.writeRecord(Zr.xb.EnvPrefs, (0, Zr.xe)(Qr), Qr.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const Wr = this.unsentLookPrefs;
          Wr && rr.writeRecord(Zr.xb.Sensitivity, 0, Wr.mouse, Wr.touch, (0, xr.m)(Wr.fovPercent)) && (this.unsentLookPrefs = null);
          let ar = 0;
          for (const {
              aux: Zr,
              payload: jr
            }
            of this.unsentOptions) {
            if (!rr.writeOptions(Zr, jr)) {
              if (rr.cursor > 0) break;
              this.optionsDropped++
            }
            ar++
          }
          ar > 0 && this.unsentOptions.splice(0, ar)
        } catch (Sr) {
          return this.crash(zr, Sr), !1
        }
        return !0
      }
      setHoldDraws(rr) {
        this.drawsHeld = rr
      }
      setUiPrefs(rr) {
        this.unsentUiPrefs = {
          ...rr
        }
      }
      setEnvPrefs(rr) {
        this.unsentEnvPrefs = {
          ...rr
        }
      }
      setLookPrefs(rr) {
        this.unsentLookPrefs = {
          ...rr
        }
      }
      queueOptions(rr, Sr) {
        return !this.isStopped && (Sr.byteLength > Zr.jc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: rr,
          payload: Sr
        }), !0))
      }
      setChunkCap(rr) {
        return this.callCore("setChunkCap", null, (Sr => Sr.wIr(rr)))
      }
      shedMemory(rr) {
        const Sr = this.callCore("shedMemory", null, (Sr => Sr.DIr(rr)));
        return 0 === Sr ? null : Sr
      }
      releaseLeftGame() {
        this.callCore("releaseLeftGame", void 0, (rr => {
          rr.RIr()
        }))
      }
      addDistanceInUse() {
        const rr = this.callCore("addDistanceInUse", null, (rr => rr.aIr()));
        return 0 === rr ? null : rr
      }
      setChunkAddDistance(rr, Sr) {
        return this.callCore("setChunkAddDistance", !1, (Qr => Qr.iIr(rr, Sr)))
      }
      setGameHost(rr) {
        return this.callCore("setGameHost", !1, (Sr => (Sr.YIr(rr), this.gameHost = rr, !0)))
      }
      setAntiCheatProbes(rr) {
        return this.callCore("setAntiCheatProbes", !1, (Sr => Sr.AIr(rr)))
      }
      setAmbientOcclusion(rr) {
        this.callCore("setAmbientOcclusion", void 0, (Sr => {
          Sr.kIr(rr)
        }))
      }
      setPoseLod(rr) {
        this.callCore("setPoseLod", void 0, (Sr => {
          Sr.FIr(rr)
        }))
      }
      setDebugLog(rr, Sr) {
        this.callCore(Ar, void 0, (Qr => {
          Qr.az(rr, Sr)
        }))
      }
      takeDebugLog(rr) {
        return this.callCore(Ar, [], (Sr => Sr.jz(rr)))
      }
      setTextureLayers(rr) {
        return this.callCore("setTextureLayers", !1, (Sr => Sr.JIr(rr)))
      }
      setBlockColours(rr) {
        let {
          blocks: Sr,
          counts: Qr,
          values: Zr
        } = rr;
        return this.callCore("setBlockColours", !1, (rr => rr.GZr(Sr, Qr, Zr)))
      }
      terrainTextureNames() {
        return this.callCore(Vr, [], (rr => rr.Sfr()))
      }
      setTerrainTextures(rr, Sr, Qr, Zr) {
        return this.callCore(Vr, !1, (Wr => Wr.bIr(rr, Qr, Sr, Zr)))
      }
      setShaderPack(rr, Sr, Qr, Zr, Wr, ar) {
        return this.callCore("setShaderPack", !1, (jr => {
          var Ir, fr;
          return null !== (Ir = null === (fr = jr.DZr) || void 0 === fr ? void 0 : fr.call(jr, rr, Sr, Qr, Zr, Wr, ar)) && void 0 !== Ir && Ir
        }))
      }
      warmBeforeJoin(rr, Sr) {
        this.callCore(wr, void 0, (Qr => {
          var Zr;
          null === (Zr = Qr.zIr) || void 0 === Zr || Zr.call(Qr, rr, Sr)
        }))
      }
      firstViewTerrainCodes() {
        return this.callCore(wr, null, (rr => {
          var Sr, Qr;
          return null !== (Sr = null === (Qr = rr.AZr) || void 0 === Qr ? void 0 : Qr.call(rr)) && void 0 !== Sr ? Sr : null
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(ir, null, (rr => {
          var Sr, Qr;
          return null !== (Sr = null === (Qr = rr.dIr) || void 0 === Qr ? void 0 : Qr.call(rr)) && void 0 !== Sr ? Sr : null
        }))
      }
      setSunShadowTexture(rr, Sr, Qr, Zr, Wr) {
        this.callCore(ir, void 0, (ar => {
          var jr;
          null === (jr = ar.oIr) || void 0 === jr || jr.call(ar, rr, Sr, Qr, Zr, Wr)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(ir, [], (rr => {
          var Sr, Qr;
          return null !== (Sr = null === (Qr = rr.uIr) || void 0 === Qr ? void 0 : Qr.call(rr)) && void 0 !== Sr ? Sr : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(ir, null, (rr => {
          var Sr, Qr;
          return null !== (Sr = null === (Qr = rr.sIr) || void 0 === Qr ? void 0 : Qr.call(rr)) && void 0 !== Sr ? Sr : null
        }))
      }
      callCore(rr, Sr, Qr) {
        if (this.stopped) return Sr;
        try {
          return Qr(this.core)
        } catch (Zr) {
          return this.crash(rr, Zr), Sr
        }
      }
      readEvents(rr) {
        this.netOffsets.length = 0;
        const Sr = this.headerView(),
          Qr = Sr[Zr.mb.EventsPtr],
          Wr = Sr[Zr.mb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === Wr) return kr;
        const ar = [],
          jr = this.memory().buffer;
        if (Qr % 4 !== 0 || Qr + Wr > jr.byteLength) return this.crash(Gr, `events of ${Wr} bytes at ${Qr} outside ${jr.byteLength} bytes of memory`), kr;
        const Ir = new DataView(jr, Qr, Wr),
          fr = this.rings.net,
          Er = (Sr, Qr) => Sr + Qr <= rr ? fr.copyWritten(Sr, Qr) : null;
        let pr = 0;
        for (; pr < Wr;) {
          const rr = pr + Zr.Y,
            Sr = rr <= Wr ? Ir.getUint32(pr, !0) : -1,
            fr = Sr >>> 16;
          if (Sr < 0 || fr > Wr - rr) return this.crash(Gr, `event record at ${pr} overruns its ${Wr} bytes`), kr;
          const Lr = 65535 & Sr,
            lr = Sr => Ir.getUint32(rr + 4 * Sr, !0);
          if (Lr === Zr.$.RawMessage) {
            const rr = fr >= Zr.Sc.BYTES ? 65535 & lr(1) : -1,
              Sr = rr === Zr.Sc.STRING_TYPE,
              Qr = fr === (Sr ? Zr.Sc.STRING_TYPE_BYTES : Zr.Sc.BYTES) ? Er(lr(2), lr(3)) : null,
              Wr = Sr && Qr ? Er(lr(4), lr(5)) : null;
            if (!Qr || Sr && !Wr) return this.crash(Gr, `RawMessage at ${pr} of ${fr} bytes names bytes outside net-in`), kr;
            this.netOffsets.push(pr), ar.push({
              type: "message",
              conn: lr(0),
              xj: rr,
              payloadKind: lr(1) >>> 16,
              payload: Qr,
              stringType: Wr ? Fr.decode(Wr) : null
            })
          } else if (Lr === Zr.$.CoreErrors) {
            var xr, mr;
            const rr = fr >= 4 ? lr(0) : -1;
            if (rr < 0 || rr > Zr.H.PAIRS_MAX || fr !== 4 * (Zr.H.FIXED_WORDS + Zr.H.PAIR_WORDS * rr)) return this.crash(Gr, `CoreErrors at ${pr} of ${fr} bytes`), kr;
            const Sr = [];
            for (let Qr = 0; Qr < rr; Qr++) Sr.push({
              code: lr(1 + 2 * Qr),
              detail: lr(2 + 2 * Qr)
            });
            null === (xr = (mr = this.handlers).onCoreErrors) || void 0 === xr || xr.call(mr, Sr, lr(1 + 2 * rr))
          } else if (Lr === Zr.$.RenderReload) {
            var Nr, Ur;
            if (fr !== Zr.fd.BYTES) return this.crash(Gr, `RenderReload at ${pr} of ${fr} bytes`), kr;
            null === (Nr = (Ur = this.handlers).onRenderReload) || void 0 === Nr || Nr.call(Ur, lr(0), lr(1), lr(2))
          } else if (Lr === Zr.$.JoinPreloadEnded) {
            var tr, hr;
            if (fr !== Zr.Bb.BYTES) return this.crash(Gr, `JoinPreloadEnded at ${pr} of ${fr} bytes`), kr;
            null === (tr = (hr = this.handlers).onJoinPreloadEnded) || void 0 === tr || tr.call(hr, {
              chunks: lr(Zr.Bb.CHUNKS),
              bytes: lr(Zr.Bb.BYTES_HELD),
              asked: lr(Zr.Bb.ASKED),
              replaced: lr(Zr.Bb.REPLACED),
              dropped: lr(Zr.Bb.DROPPED)
            })
          } else if (Lr === Zr.$.Images) {
            var zr, Yr;
            null === (zr = (Yr = this.handlers).onImages) || void 0 === zr || zr.call(Yr, new Uint8Array(jr.slice(Qr + rr, Qr + rr + fr)))
          } else if (Lr === Zr.$.ModelRequests)
            for (let Qr = 0; Qr < fr >>> 2; Qr++) {
              var nr, er;
              null === (nr = (er = this.handlers).onModelRequest) || void 0 === nr || nr.call(er, lr(Qr))
            } else if (Lr === Zr.$.ModelTaken) {
              var Kr, yr;
              if (fr < 4) return this.crash(Gr, `ModelTaken at ${pr} of ${fr} bytes`), kr;
              const rr = new Uint32Array((fr >>> 2) - 1);
              for (let Sr = 0; Sr < rr.length; Sr++) rr[Sr] = lr(1 + Sr);
              null === (Kr = (yr = this.handlers).onModelTaken) || void 0 === Kr || Kr.call(yr, lr(0), rr)
            } else if (Lr === Zr.$.TerrainTexturesWanted) {
            var Br, Tr;
            if (0 !== fr) return this.crash(Gr, `TerrainTexturesWanted at ${pr} of ${fr} bytes`), kr;
            null === (Br = (Tr = this.handlers).onTerrainTexturesWanted) || void 0 === Br || Br.call(Tr)
          } else if (Lr === Zr.$.KeepAliveDue) {
            var vr, Or;
            if (fr > Zr.Cb) return this.crash(Gr, `KeepAliveDue at ${pr} of ${fr} bytes`), kr;
            null === (vr = (Or = this.handlers).onKeepAlive) || void 0 === vr || vr.call(Or, new Uint8Array(jr, Qr + rr, fr).slice())
          } else if (Lr === Zr.$.ConnectionState) {
            if (fr !== Zr.x) return this.crash(Gr, `ConnectionState at ${pr} of ${fr} bytes`), kr;
            this.netOffsets.push(pr), ar.push({
              type: "connection",
              conn: lr(0),
              phase: lr(1),
              code: 0 | lr(2)
            })
          } else if (Lr === Zr.$.EnvLighting || Lr === Zr.$.SkyImages) {
            if (fr !== (Lr === Zr.$.EnvLighting ? Zr.U : Zr.Hd)) return this.crash(Gr, `event ${Lr} at ${pr} of ${fr} bytes`), kr;
            this.envEvents.push({
              kind: Lr,
              payload: new Uint8Array(jr.slice(Qr + rr, Qr + rr + fr))
            })
          } else if (Lr === Zr.$.ReconnectGrace) {
            if (fr !== Zr.xc) return this.crash(Gr, `ReconnectGrace at ${pr} of ${fr} bytes`), kr;
            const rr = lr(2);
            this.graceEvents.push({
              conn: lr(0),
              graceMs: lr(1),
              sessionBased: 0 !== (rr & Zr.Wc.SessionBased),
              replayOffer: 0 !== (rr & Zr.Wc.ReplayOffer)
            })
          }
          pr = rr + (0, Zr.Ke)(fr)
        }
        return ar
      }
      takeSends(rr) {
        this.atSendsStop = !0;
        try {
          rr()
        } catch (Sr) {
          this.crashOn(lr, Sr)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(rr) {
        this.forEachOut(er, "net-out", Zr.mb.NetOutPtr, Zr.mb.NetOutLen, Zr.cc, 0, ((Sr, Qr, Wr, ar) => {
          const jr = (0, Zr.Ee)(Qr);
          jr === Zr.dc.Frame ? rr((0, Zr.Be)(Qr), Wr) : this.crash(er, `net-out record at ${ar} is kind ${jr}, not a frame`)
        }))
      }
      forEachWorkerOut(rr) {
        this.forEachOut(Kr, "worker-out", Zr.mb.WorkerOutPtr, Zr.mb.WorkerOutLen, Zr.Vd, 4, ((Sr, Qr, Wr, ar) => {
          const jr = 255 & Sr,
            Ir = jr === Zr.me.Init ? this.initOf(Wr, ar) : Wr;
          null !== Ir && rr(jr, Sr >>> 8 & 16777215, Ir)
        }))
      }
      initOf(rr, Sr) {
        const Qr = this.memory().buffer;
        if (rr.byteLength !== Zr.qb) return this.crash(Kr, `worker-out Init record at ${Sr} is ${rr.byteLength} bytes, not a view`), null;
        const Wr = new DataView(rr.buffer, rr.byteOffset, Zr.qb),
          ar = Wr.getUint32(0, !0),
          jr = Wr.getUint32(4, !0);
        return ar + jr > Qr.byteLength ? (this.crash(Kr, `worker-out Init record at ${Sr} names ${jr} bytes at ${ar} outside ${Qr.byteLength} bytes of memory`), null) : new Uint8Array(Qr, ar, jr)
      }
      forEachOut(rr, Sr, Qr, Wr, ar, jr, Ir) {
        if (!this.headerReadable()) return;
        const fr = this.headerView(),
          Er = fr[Qr],
          pr = fr[Wr];
        if (0 === pr) return;
        const xr = this.memory().buffer;
        if (Er % 4 !== 0 || Er + pr > xr.byteLength) return void this.crash(rr, `${Sr} of ${pr} bytes at ${Er} outside ${xr.byteLength} bytes of memory`);
        const mr = new DataView(xr, Er, pr);
        let Nr = 0;
        for (; Nr < pr;) {
          const Qr = Nr + ar,
            Wr = Qr <= pr ? mr.getUint32(Nr + jr, !0) : -1;
          if (Wr < 0 || Wr > pr - Qr) return void this.crash(rr, `${Sr} record at ${Nr} overruns its ${pr} bytes`);
          if (Ir(mr.getUint32(Nr, !0), mr.getUint32(Nr + 4, !0), new Uint8Array(xr, Er + Qr, Wr), Nr), this.stopped) return;
          Nr = Qr + (0, Zr.Ke)(Wr)
        }
      }
      forEachEvent(rr) {
        if (this.stopped || null === this.lastHeader) return;
        const Sr = this.headerView(),
          Qr = Sr[Zr.mb.EventsPtr],
          Wr = Sr[Zr.mb.EventsLen];
        if (0 === Wr) return;
        const ar = this.memory().buffer;
        if (Qr % 4 !== 0 || Qr + Wr > ar.byteLength) return void this.crash(Gr, `events of ${Wr} bytes at ${Qr} outside ${ar.byteLength} bytes of memory`);
        const jr = new DataView(ar, Qr, Wr);
        let Ir = 0;
        for (; Ir < Wr;) {
          const Sr = Ir + Zr.Y,
            Qr = Sr <= Wr ? jr.getUint32(Ir, !0) : -1,
            ar = Qr >>> 16;
          if (Qr < 0 || ar > Wr - Sr) return void this.crash(Gr, `event record at ${Ir} overruns its ${Wr} bytes`);
          rr(65535 & Qr, jr, Sr, ar), Ir = Sr + (0, Zr.Ke)(ar)
        }
      }
      crashOn(rr, Sr) {
        Sr instanceof Wr.d ? this.crash(Gr, Sr.message) : this.crash(rr, Sr)
      }
      crash(rr, Sr) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: rr,
          error: Sr,
          header: this.lastHeader
        }))
      }
      headerWord(rr) {
        return this.headerReadable() ? this.headerView()[rr] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(rr) {
        const Sr = this.loadCountWords();
        return null !== Sr && (rr.chunksReceived = Sr[Zr.Ob.ChunksReceived], rr.chunksCancelled = this.headerView()[Zr.mb.ChunksCancelled], rr.chunksStored = Sr[Zr.Ob.ChunksStored], rr.jobsSent = Sr[Zr.Ob.JobsSent], rr.jobsDone = Sr[Zr.Ob.JobsDone], rr.jobsInFlight = Sr[Zr.Ob.JobsInFlight], rr.workersLive = Sr[Zr.Ob.WorkersLive], rr.workersRetired = Sr[Zr.Ob.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var rr, Sr;
        const Qr = null !== (rr = null === (Sr = this.loadCountWords()) || void 0 === Sr ? void 0 : Sr[Zr.Ob.ViewQueuedPrograms]) && void 0 !== rr ? rr : 0;
        return 0 === Qr ? null : Qr - 1
      }
      readFirstViewWait(rr, Sr) {
        const Qr = this.loadCountWords();
        return null === Qr ? null : [Qr[Zr.Ob.FirstViewLinkMs], Qr[Zr.Ob.FirstViewTerrainMs], Qr[Zr.Ob.FirstViewHeldMs], Qr[Zr.Ob.FirstViewOtherMs], Qr[Zr.Ob.FirstViewGaps], Qr[Zr.Ob.FirstViewGapMs], rr, Sr]
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const rr = this.core.Wz();
        if (0 === rr) return null;
        const Sr = this.memory().buffer;
        return Sr !== this.loadCountsBuffer && (this.loadCountsBuffer = Sr, this.loadCounts = new Uint32Array(Sr, rr, Zr.Fb)), this.loadCounts
      }
      headerView() {
        const rr = this.memory().buffer;
        return rr !== this.headerBuffer && (this.headerBuffer = rr, this.header = new Uint32Array(rr, this.core.kN(), Zr.lb)), this.header
      }
    }
  },
  42635: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr,
      g: () => ar
    });
    var Zr = Qr(5498);
    let Wr = null;

    function ar(rr) {
      Wr = {
        scanned: !1
      };
      try {
        return rr()
      } finally {
        Wr = null
      }
    }

    function jr() {
      const rr = Wr;
      if (null === rr) return (0, Zr.h)();
      const Sr = (0, Zr.h)(!rr.scanned);
      return rr.scanned = !0, Sr
    }
  },
  42707: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr
    });
    const Zr = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  37748: (rr, Sr, Qr) => {
    function Zr() {
      return Qr(37757)
    }

    function Wr() {
      return Qr(37760)
    }

    function ar(rr) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(rr)
    }
    Qr.d(Sr, {
      b: () => ar,
      c: () => Zr,
      e: () => Wr
    })
  },
  37757: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37760: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);