export const id = 214;
export const ids = [214];
export const modules = {
  41062: (uu, Eu, ju) => {
    function su(uu, Eu, ju) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(uu, Eu).getContext("2d", ju);
      const su = document.createElement("canvas");
      return su.width = uu, su.height = Eu, su.getContext("2d", ju)
    }

    function Uu(uu, Eu) {
      return uu.getContext("2d", Eu)
    }
    ju.d(Eu, {
      e: () => Uu,
      i: () => su
    })
  },
  41020: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => lu
    });
    const su = 1 << 20,
      Uu = 1 << 21,
      Zu = 1024,
      Xu = 2048;

    function lu(uu, Eu, ju) {
      const lu = uu + su,
        qu = Eu + Zu,
        fu = ju + su;
      return lu < 0 || lu >= Uu || fu < 0 || fu >= Uu || qu < 0 || qu >= Xu ? -1 : (lu * Uu + fu) * Xu + qu
    }
  },
  41017: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su,
      h: () => Xu,
      i: () => Uu,
      j: () => Zu,
      l: () => Cu,
      m: () => fu,
      o: () => qu,
      q: () => lu
    });
    ju(3653);
    ju(41020);

    function su(uu) {}

    function Uu(uu) {}

    function Zu(uu) {}

    function Xu(uu) {}

    function lu(uu) {}

    function qu(uu, Eu, ju) {}

    function fu(uu) {}

    function Cu(uu) {}
  },
  41011: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Mu,
      e: () => Ou,
      h: () => xu,
      j: () => Pu,
      l: () => mu,
      m: () => vu,
      q: () => gu,
      r: () => hu,
      s: () => Du,
      w: () => au,
      y: () => Fu,
      A: () => pu,
      B: () => iu,
      C: () => tu,
      E: () => Ku,
      F: () => ru
    });
    var su = ju(4970),
      Uu = ju(40897),
      Zu = (ju(41017), ju(13));
    class Xu {
      constructor(uu, Eu) {
        this.memory = uu, this.access = Eu, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.Mb = 0, this.u32 = new Zu.k(0), this.f32 = new Zu.f(0), this.u8 = new Zu.d(0), this.dataView = new Zu.i(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.Mb = this.access.Mb(), this.buffer = (0, Zu.J)(this.memory()), this.u32 = new Zu.k(this.buffer, this.ptr, this.Mb >>> 2), this.f32 = new Zu.f(this.buffer, this.ptr, this.Mb >>> 2), this.u8 = new Zu.d(this.buffer, this.ptr, this.Mb), this.dataView = new Zu.i(this.buffer, this.ptr, this.Mb)
      }
      ensureViews() {
        (0, Zu.J)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(uu) {
        return !!this.fits(uu) || (this.dropped++, !1)
      }
      fits(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const ju = Eu + uu;
        return ju <= this.Mb || ju <= su.Lc && 0 !== this.access.reserve(ju) && (this.refresh(), ju <= this.Mb)
      }
      consume(uu) {
        const Eu = this.cursor - uu;
        Eu > 0 && uu > 0 && (this.ensureViews(), this.u8.copyWithin(0, uu, this.cursor)), this.cursor = Eu > 0 ? Eu : 0
      }
      writeRecord(uu, Eu, ju, Uu, Zu) {
        if (!this.room(su.pb)) return !1;
        const Xu = this.cursor >>> 2;
        return this.u32[Xu] = 65535 & uu | (65535 & Eu) << 16, this.f32[Xu + 1] = ju, this.f32[Xu + 2] = Uu, this.u32[Xu + 3] = Zu >>> 0, this.cursor += su.pb, !0
      }
      writeOptions(uu, Eu) {
        const ju = Eu.byteLength,
          Uu = su.pb + (0, su.xe)(ju);
        if (!this.fits(Uu)) return !1;
        const Zu = this.cursor,
          Xu = Zu >>> 2;
        this.u32[Xu] = su.sb.Options, this.u32[Xu + 1] = ju, this.u32[Xu + 2] = 0, this.u32[Xu + 3] = uu >>> 0;
        const lu = Zu + su.pb;
        return this.u8.set(Eu, lu), this.u8.fill(0, lu + ju, Zu + Uu), this.cursor += Uu, !0
      }
      writeWorkerRecord(uu, Eu, ju, Uu, Zu, Xu) {
        const lu = Xu.byteLength,
          qu = su.Qd + (0, su.xe)(lu);
        if (lu > su.Md) return this.dropped++, !1;
        if (!this.room(qu)) return !1;
        const fu = this.cursor,
          Cu = fu >>> 2;
        this.u32[Cu] = uu >>> 0, this.u32[Cu + 1] = 65535 & Eu | (65535 & ju) << 16, this.u32[Cu + 2] = Uu >>> 0, this.u32[Cu + 3] = Zu >>> 0, this.u32[Cu + 4] = lu;
        const bu = fu + su.Qd;
        return this.u8.set(Xu, bu), this.u8.fill(0, bu + lu, fu + qu), this.cursor += qu, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(uu, Eu) {
        return this.writeNet(su.ac.Frame, uu, Eu)
      }
      writeOpen(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(su.ac.Open, uu, qu(Eu))
      }
      writeClose(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(su.ac.Close, uu, qu(Eu))
      }
      writeNet(uu, Eu, ju) {
        const Uu = ju.byteLength,
          Zu = su._b + (0, su.xe)(Uu);
        if (Uu > su.Xb) return this.dropped++, !1;
        if (!this.room(Zu)) return !1;
        const Xu = this.cursor;
        this.u32[Xu >>> 2] = Uu, this.u32[1 + (Xu >>> 2)] = (0, su.se)(uu, Eu);
        const lu = Xu + su._b;
        return this.u8.set(ju, lu), this.u8.fill(0, lu + Uu, Xu + Zu), this.cursor += Zu, !0
      }
      NN(uu, Eu, ju) {
        const Uu = su.s + (0, su.xe)(ju);
        if (!this.room(Uu)) return -1;
        const Zu = this.cursor;
        this.u32[Zu >>> 2] = 65535 & uu | (65535 & Eu) << 16, this.u32[1 + (Zu >>> 2)] = ju;
        const Xu = Zu + su.s;
        return this.u8.fill(0, Xu, Zu + Uu), this.cursor += Uu, Xu
      }
      growForCmd(uu) {
        return this.fits(su.s + (0, su.xe)(uu), 0)
      }
      writeCmd(uu, Eu, ju) {
        const su = this.NN(uu, Eu, ju.byteLength);
        return !(su < 0) && (this.u8.set(ju, su), !0)
      }
      copyWritten(uu, Eu) {
        return this.ensureViews(), this.u8.slice(uu, uu + Eu)
      }
    }
    const lu = new Zu.d(0);

    function qu(uu) {
      if (0 === uu) return lu;
      const Eu = new Zu.d(su.Yb);
      for (let ju = 0; ju < su.Yb; ju++) Eu[ju] = uu >>> 8 * ju & 255;
      return Eu
    }
    class fu {
      constructor(uu, Eu) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new Xu(Eu, {
          ptr: () => uu.ib(),
          Mb: () => uu.FZu(),
          reserve: Eu => uu.RZu(Eu)
        }), this.net = new Xu(Eu, {
          ptr: () => uu.nZu(),
          Mb: () => uu.AZu(),
          reserve: Eu => uu.uXu(Eu)
        }), this.worker = new Xu(Eu, {
          ptr: () => uu.GXu(),
          Mb: () => uu.eXu(),
          reserve: Eu => uu.EXu(Eu)
        }), this.cmd = new Xu(Eu, {
          ptr: () => uu.vZu(),
          Mb: () => uu.kZu(),
          reserve: Eu => uu.mZu(Eu)
        })
      }
      reset(uu, Eu, ju) {
        this.input.consume(uu), this.worker.consume(Eu), this.cmd.consume(ju)
      }
    }
    var Cu = ju(36684),
      bu = ju(2519),
      cu = ju(4965),
      Nu = ju(41025);
    const Ou = "coreFrame",
      Yu = "fatalStatus",
      hu = "otherCall",
      Du = "coreRings",
      gu = "netIn",
      Mu = "abi",
      eu = "netOut",
      Gu = "workerOut",
      pu = "worldgenHost",
      wu = "eventWalker",
      Ju = "netEvent",
      du = "envEvent",
      au = "sharedTables",
      Pu = "inputAction",
      ou = "frameSends",
      ku = new Set([wu, Ju, du, ou, Pu, au]),
      mu = "wasmMemory",
      vu = "meshHost";

    function Ku(uu, Eu) {
      uu.forEachWorkerOut(((ju, Uu, Zu) => {
        if ((0, su.je)(ju)) try {
          var Xu;
          null === (Xu = Eu.worldgen) || void 0 === Xu || Xu.take(ju, Zu)
        } catch (qu) {
          uu.crash(pu, qu)
        } else try {
          var lu;
          null === (lu = Eu.mesh) || void 0 === lu || lu.take(ju, Uu, Zu)
        } catch (qu) {
          uu.crash(vu, qu)
        }
      }))
    }
    const Vu = 1048576;

    function ru(uu, Eu) {
      let ju = !1;
      const su = () => {
        ju = !1, Eu()
      };
      return () => {
        !ju && uu.cursor >= Vu && (ju = !0, queueMicrotask(su))
      }
    }
    const Qu = new Set([Yu, hu, pu, vu]);

    function iu(uu) {
      return ku.has(uu.site) ? uu.error instanceof WebAssembly.RuntimeError || (0, Uu.l)(uu.error) : !Qu.has(uu.site) && uu.error instanceof Error
    }
    const Wu = "events",
      Su = [],
      Iu = "debugLog",
      Fu = "terrainTextures",
      Bu = "sunShadowTextures",
      Lu = new TextDecoder;

    function tu(uu, Eu) {
      const {
        site: ju,
        error: Uu,
        header: Zu
      } = uu, Xu = Zu ? (0, su.he)(Zu.lastError) : "noFrame", lu = `CORE-${ju===Yu?Xu:ju}`, qu = null === Uu || void 0 === Uu ? "" : ` ${(0,Cu.j)(Uu)}`, fu = {
        site: ju,
        wasmBuild: Eu.wasm,
        clientVersion: Eu.client
      };
      return Zu && (fu.status = String(Zu.status), fu.lastError = Xu, fu.lastErrorCode = String(Zu.lastError), fu.lastErrorDetail = String(Zu.lastErrorDetail), fu.errorCount = String(Zu.errorCount), fu.frameIndex = String(Zu.frameIndex), fu.tickIndex = String(Zu.tickIndex)), {
        code: lu,
        message: `core ${ju}, last error ${Xu};${qu}`,
        details: fu
      }
    }
    class xu {
      constructor(uu, Eu, ju) {
        this.core = uu, this.memory = Eu, this.handlers = ju, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: Su,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new fu(uu, Eu)
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
      framePaces(uu) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.WZu(uu)
        } catch (Eu) {
          return this.crash(Ou, Eu), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(uu, Eu) {
        var ju;
        let Zu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: Xu,
          net: lu,
          worker: qu,
          cmd: fu
        } = this.rings, Cu = lu.cursor, bu = Eu && !this.drawsHeld;
        let hu = su.F.Fatal;
        const Du = Xu.cursor,
          Mu = qu.cursor,
          eu = fu.cursor;
        let Gu, pu = null;
        const du = this.handlers.onSends;
        try {
          const Eu = (bu ? su.ab.Draws : 0) | (Zu ? su.ab.NetAll : 0) | (du ? su.ab.StopForSends : 0);
          hu = (0, Nu.h)((() => {
            let ju = this.core.frame(uu, Du, lu.cursor, Mu, Eu, eu);
            for (; ju === su.pd && du;) {
              var Uu;
              if (Gu ??= null === (Uu = this.gameHost) || void 0 === Uu ? void 0 : Uu.takeFault(), void 0 === Gu && !this.takeSends(du)) return su.F.Fatal;
              ju = this.core.Qh()
            }
            return ju
          }))
        } catch (Lu) {
          pu = {
            error: Lu
          }
        }
        Gu ??= null === (ju = this.gameHost) || void 0 === ju ? void 0 : ju.takeFault();
        const au = this.stopped || null !== pu || void 0 !== Gu;
        this.rings.reset(au ? Xu.cursor : Du, au ? qu.cursor : Mu, au ? fu.cursor : eu);
        const Pu = null === pu && void 0 === Gu,
          ou = Pu && !this.stopped && hu === su.F.Fatal && 0 === this.core.ON(),
          ku = Pu && !ou ? this.headerView() : null,
          mu = ou ? {
            ...null !== (vu = this.lastHeader) && void 0 !== vu ? vu : (0, su.ze)(new Uint32Array(su.eb)),
            status: su.F.Fatal,
            lastError: su.D.CoreBusy,
            lastErrorDetail: 0
          } : null === ku ? null : (0, su.ze)(ku);
        var vu;
        null !== mu && (this.lastHeader = mu);
        const Ku = null !== mu && hu !== su.F.Fatal,
          Vu = Ku && null !== ku ? ku[su.hb.NetInKept] : 0,
          ru = Ku && Vu <= Cu && Vu % 4 === 0 ? Vu : null;
        var Qu, iu;
        null !== mu && null !== ru && hu === su.F.Errors && (null === (Qu = (iu = this.handlers).onErrors) || void 0 === Qu || Qu.call(iu, mu));
        const Wu = null === ru ? Su : this.readEvents(Cu);
        if (lu.consume(Cu - (null !== ru && void 0 !== ru ? ru : 0)), this.netKept = null !== ru && void 0 !== ru ? ru : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== pu) return this.crash(Ou, void 0 === Gu || Gu instanceof Uu.e ? pu.error : Gu), !1;
        if (void 0 !== Gu || null === mu) return this.crashOn(Ou, Gu), !1;
        if (ou) return this.crash(Yu, null), !1;
        const Iu = this.headerView()[su.hb.FrameDraw];
        if (this.lastFrameKind = (0, cu.h)(bu, Iu), hu === su.F.Fatal) return this.crash(Yu, null), !1;
        if (null === ru) return this.crash(gu, `the core kept ${Vu} of ${Cu} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const uu = this.frameEvents,
            Eu = this.headerView();
          uu.ptr = Eu[su.hb.EventsPtr], uu.len = Eu[su.hb.EventsLen], uu.net = Wu, uu.kind = this.lastFrameKind;
          try {
            this.eventWalker(uu)
          } catch (Lu) {
            return this.crashOn(wu, Lu), !1
          }
          return this.handEnvEvents()
        }
        for (const su of Wu) {
          if (this.stopped) return !1;
          try {
            var Fu, Bu;
            null === (Fu = (Bu = this.handlers).onNetEvent) || void 0 === Fu || Fu.call(Bu, su)
          } catch (Lu) {
            return this.crashOn(Ju, Lu), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const Zu of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var uu, Eu;
            null === (uu = (Eu = this.handlers).onReconnectGrace) || void 0 === uu || uu.call(Eu, Zu)
          } catch (Uu) {
            return this.crashOn(Ju, Uu), !1
          }
        }
        for (const Zu of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var ju, su;
            null === (ju = (su = this.handlers).onEnvEvent) || void 0 === ju || ju.call(su, Zu)
          } catch (Uu) {
            return this.crashOn(du, Uu), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(uu) {
        this.eventWalker = uu
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: uu
        } = this.rings;
        try {
          const Eu = this.unsentUiPrefs;
          Eu && uu.writeRecord(su.sb.UiPrefs, 0, Eu.nametagCutDistance, 0, (0, su.Ae)(Eu)) && (this.unsentUiPrefs = null);
          const ju = this.unsentEnvPrefs;
          ju && uu.writeRecord(su.sb.EnvPrefs, (0, su.ie)(ju), ju.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const Uu = this.unsentLookPrefs;
          Uu && uu.writeRecord(su.sb.Sensitivity, 0, Uu.mouse, Uu.touch, (0, bu.i)(Uu.fovPercent)) && (this.unsentLookPrefs = null);
          let Zu = 0;
          for (const {
              aux: su,
              payload: Xu
            }
            of this.unsentOptions) {
            if (!uu.writeOptions(su, Xu)) {
              if (uu.cursor > 0) break;
              this.optionsDropped++
            }
            Zu++
          }
          Zu > 0 && this.unsentOptions.splice(0, Zu)
        } catch (Eu) {
          return this.crash(Du, Eu), !1
        }
        return !0
      }
      setHoldDraws(uu) {
        this.drawsHeld = uu
      }
      setUiPrefs(uu) {
        this.unsentUiPrefs = {
          ...uu
        }
      }
      setEnvPrefs(uu) {
        this.unsentEnvPrefs = {
          ...uu
        }
      }
      setLookPrefs(uu) {
        this.unsentLookPrefs = {
          ...uu
        }
      }
      queueOptions(uu, Eu) {
        return !this.isStopped && (Eu.byteLength > su.dc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: uu,
          payload: Eu
        }), !0))
      }
      setChunkCap(uu) {
        return this.callCore("setChunkCap", null, (Eu => Eu.lXu(uu)))
      }
      shedMemory(uu) {
        const Eu = this.callCore("shedMemory", null, (Eu => Eu.OXu(uu)));
        return 0 === Eu ? null : Eu
      }
      addDistanceInUse() {
        const uu = this.callCore("addDistanceInUse", null, (uu => uu.JZu()));
        return 0 === uu ? null : uu
      }
      setChunkAddDistance(uu, Eu) {
        return this.callCore("setChunkAddDistance", !1, (ju => ju.XXu(uu, Eu)))
      }
      setGameHost(uu) {
        return this.callCore("setGameHost", !1, (Eu => (Eu.iZu(uu), this.gameHost = uu, !0)))
      }
      setAntiCheatProbes(uu) {
        return this.callCore("setAntiCheatProbes", !1, (Eu => Eu.UXu(uu)))
      }
      setAmbientOcclusion(uu) {
        this.callCore("setAmbientOcclusion", void 0, (Eu => {
          Eu.sXu(uu)
        }))
      }
      setPoseLod(uu) {
        this.callCore("setPoseLod", void 0, (Eu => {
          Eu.fXu(uu)
        }))
      }
      setDebugLog(uu, Eu) {
        this.callCore(Iu, void 0, (ju => {
          ju.kh(uu, Eu)
        }))
      }
      takeDebugLog(uu) {
        return this.callCore(Iu, [], (Eu => Eu.mh(uu)))
      }
      setTextureLayers(uu) {
        return this.callCore("setTextureLayers", !1, (Eu => Eu.NXu(uu)))
      }
      setBlockColours(uu) {
        let {
          blocks: Eu,
          counts: ju,
          values: su
        } = uu;
        return this.callCore("setBlockColours", !1, (uu => uu.Zsu(Eu, ju, su)))
      }
      terrainTextureNames() {
        return this.callCore(Fu, [], (uu => uu.MXu()))
      }
      setTerrainTextures(uu, Eu, ju, su) {
        return this.callCore(Fu, !1, (Uu => Uu.cXu(uu, ju, Eu, su)))
      }
      setShaderPack(uu, Eu, ju, su, Uu, Zu) {
        return this.callCore("setShaderPack", !1, (Xu => {
          var lu, qu;
          return null !== (lu = null === (qu = Xu.gsu) || void 0 === qu ? void 0 : qu.call(Xu, uu, Eu, ju, su, Uu, Zu)) && void 0 !== lu && lu
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(Bu, null, (uu => {
          var Eu, ju;
          return null !== (Eu = null === (ju = uu.YXu) || void 0 === ju ? void 0 : ju.call(uu)) && void 0 !== Eu ? Eu : null
        }))
      }
      setSunShadowTexture(uu, Eu, ju, su, Uu) {
        this.callCore(Bu, void 0, (Zu => {
          var Xu;
          null === (Xu = Zu.bXu) || void 0 === Xu || Xu.call(Zu, uu, Eu, ju, su, Uu)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(Bu, [], (uu => {
          var Eu, ju;
          return null !== (Eu = null === (ju = uu.DXu) || void 0 === ju ? void 0 : ju.call(uu)) && void 0 !== Eu ? Eu : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(Bu, null, (uu => {
          var Eu, ju;
          return null !== (Eu = null === (ju = uu.hXu) || void 0 === ju ? void 0 : ju.call(uu)) && void 0 !== Eu ? Eu : null
        }))
      }
      callCore(uu, Eu, ju) {
        if (this.stopped) return Eu;
        try {
          return ju(this.core)
        } catch (su) {
          return this.crash(uu, su), Eu
        }
      }
      readEvents(uu) {
        this.netOffsets.length = 0;
        const Eu = this.headerView(),
          ju = Eu[su.hb.EventsPtr],
          Uu = Eu[su.hb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === Uu) return Su;
        const Zu = [],
          Xu = this.memory().buffer;
        if (ju % 4 !== 0 || ju + Uu > Xu.byteLength) return this.crash(Wu, `events of ${Uu} bytes at ${ju} outside ${Xu.byteLength} bytes of memory`), Su;
        const lu = new DataView(Xu, ju, Uu),
          qu = this.rings.net,
          fu = (Eu, ju) => Eu + ju <= uu ? qu.copyWritten(Eu, ju) : null;
        let Cu = 0;
        for (; Cu < Uu;) {
          const uu = Cu + su.R,
            Eu = uu <= Uu ? lu.getUint32(Cu, !0) : -1,
            qu = Eu >>> 16;
          if (Eu < 0 || qu > Uu - uu) return this.crash(Wu, `event record at ${Cu} overruns its ${Uu} bytes`), Su;
          const Pu = 65535 & Eu,
            ou = Eu => lu.getUint32(uu + 4 * Eu, !0);
          if (Pu === su.T.RawMessage) {
            const uu = qu >= su.Mc.BYTES ? 65535 & ou(1) : -1,
              Eu = uu === su.Mc.STRING_TYPE,
              ju = qu === (Eu ? su.Mc.STRING_TYPE_BYTES : su.Mc.BYTES) ? fu(ou(2), ou(3)) : null,
              Uu = Eu && ju ? fu(ou(4), ou(5)) : null;
            if (!ju || Eu && !Uu) return this.crash(Wu, `RawMessage at ${Cu} of ${qu} bytes names bytes outside net-in`), Su;
            this.netOffsets.push(Cu), Zu.push({
              type: "message",
              conn: ou(0),
              VC: uu,
              payloadKind: ou(1) >>> 16,
              payload: ju,
              stringType: Uu ? Lu.decode(Uu) : null
            })
          } else if (Pu === su.T.CoreErrors) {
            var bu, cu;
            const uu = qu >= 4 ? ou(0) : -1;
            if (uu < 0 || uu > su.B.PAIRS_MAX || qu !== 4 * (su.B.FIXED_WORDS + su.B.PAIR_WORDS * uu)) return this.crash(Wu, `CoreErrors at ${Cu} of ${qu} bytes`), Su;
            const Eu = [];
            for (let ju = 0; ju < uu; ju++) Eu.push({
              code: ou(1 + 2 * ju),
              detail: ou(2 + 2 * ju)
            });
            null === (bu = (cu = this.handlers).onCoreErrors) || void 0 === bu || bu.call(cu, Eu, ou(1 + 2 * uu))
          } else if (Pu === su.T.RenderReload) {
            var Nu, Ou;
            if (qu !== su.Zc.BYTES) return this.crash(Wu, `RenderReload at ${Cu} of ${qu} bytes`), Su;
            null === (Nu = (Ou = this.handlers).onRenderReload) || void 0 === Nu || Nu.call(Ou, ou(0), ou(1), ou(2))
          } else if (Pu === su.T.JoinPreloadEnded) {
            var Yu, hu;
            if (qu !== su.Ab.BYTES) return this.crash(Wu, `JoinPreloadEnded at ${Cu} of ${qu} bytes`), Su;
            null === (Yu = (hu = this.handlers).onJoinPreloadEnded) || void 0 === Yu || Yu.call(hu, {
              chunks: ou(su.Ab.CHUNKS),
              bytes: ou(su.Ab.BYTES_HELD),
              asked: ou(su.Ab.ASKED),
              replaced: ou(su.Ab.REPLACED),
              dropped: ou(su.Ab.DROPPED)
            })
          } else if (Pu === su.T.Images) {
            var Du, gu;
            null === (Du = (gu = this.handlers).onImages) || void 0 === Du || Du.call(gu, new Uint8Array(Xu.slice(ju + uu, ju + uu + qu)))
          } else if (Pu === su.T.ModelRequests)
            for (let ju = 0; ju < qu >>> 2; ju++) {
              var Mu, eu;
              null === (Mu = (eu = this.handlers).onModelRequest) || void 0 === Mu || Mu.call(eu, ou(ju))
            } else if (Pu === su.T.ModelTaken) {
              var Gu, pu;
              if (qu < 4) return this.crash(Wu, `ModelTaken at ${Cu} of ${qu} bytes`), Su;
              const uu = new Uint32Array((qu >>> 2) - 1);
              for (let Eu = 0; Eu < uu.length; Eu++) uu[Eu] = ou(1 + Eu);
              null === (Gu = (pu = this.handlers).onModelTaken) || void 0 === Gu || Gu.call(pu, ou(0), uu)
            } else if (Pu === su.T.TerrainTexturesWanted) {
            var wu, Ju;
            if (0 !== qu) return this.crash(Wu, `TerrainTexturesWanted at ${Cu} of ${qu} bytes`), Su;
            null === (wu = (Ju = this.handlers).onTerrainTexturesWanted) || void 0 === wu || wu.call(Ju)
          } else if (Pu === su.T.KeepAliveDue) {
            var du, au;
            if (qu > su.Db) return this.crash(Wu, `KeepAliveDue at ${Cu} of ${qu} bytes`), Su;
            null === (du = (au = this.handlers).onKeepAlive) || void 0 === du || du.call(au, new Uint8Array(Xu, ju + uu, qu).slice())
          } else if (Pu === su.T.ConnectionState) {
            if (qu !== su.t) return this.crash(Wu, `ConnectionState at ${Cu} of ${qu} bytes`), Su;
            this.netOffsets.push(Cu), Zu.push({
              type: "connection",
              conn: ou(0),
              phase: ou(1),
              code: 0 | ou(2)
            })
          } else if (Pu === su.T.EnvLighting || Pu === su.T.SkyImages) {
            if (qu !== (Pu === su.T.EnvLighting ? su.N : su.xd)) return this.crash(Wu, `event ${Pu} at ${Cu} of ${qu} bytes`), Su;
            this.envEvents.push({
              kind: Pu,
              payload: new Uint8Array(Xu.slice(ju + uu, ju + uu + qu))
            })
          } else if (Pu === su.T.ReconnectGrace) {
            if (qu !== su.sc) return this.crash(Wu, `ReconnectGrace at ${Cu} of ${qu} bytes`), Su;
            const uu = ou(2);
            this.graceEvents.push({
              conn: ou(0),
              graceMs: ou(1),
              sessionBased: 0 !== (uu & su.Nc.SessionBased),
              replayOffer: 0 !== (uu & su.Nc.ReplayOffer)
            })
          }
          Cu = uu + (0, su.xe)(qu)
        }
        return Zu
      }
      takeSends(uu) {
        this.atSendsStop = !0;
        try {
          uu()
        } catch (Eu) {
          this.crashOn(ou, Eu)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(uu) {
        this.forEachOut(eu, "net-out", su.hb.NetOutPtr, su.hb.NetOutLen, su._b, 0, ((Eu, ju, Uu, Zu) => {
          const Xu = (0, su.oe)(ju);
          Xu === su.ac.Frame ? uu((0, su.ne)(ju), Uu) : this.crash(eu, `net-out record at ${Zu} is kind ${Xu}, not a frame`)
        }))
      }
      forEachWorkerOut(uu) {
        this.forEachOut(Gu, "worker-out", su.hb.WorkerOutPtr, su.hb.WorkerOutLen, su.Kd, 4, ((Eu, ju, Uu, Zu) => {
          const Xu = 255 & Eu,
            lu = Xu === su.Zd.Init ? this.initOf(Uu, Zu) : Uu;
          null !== lu && uu(Xu, Eu >>> 8 & 16777215, lu)
        }))
      }
      initOf(uu, Eu) {
        const ju = this.memory().buffer;
        if (uu.byteLength !== su.kb) return this.crash(Gu, `worker-out Init record at ${Eu} is ${uu.byteLength} bytes, not a view`), null;
        const Uu = new DataView(uu.buffer, uu.byteOffset, su.kb),
          Zu = Uu.getUint32(0, !0),
          Xu = Uu.getUint32(4, !0);
        return Zu + Xu > ju.byteLength ? (this.crash(Gu, `worker-out Init record at ${Eu} names ${Xu} bytes at ${Zu} outside ${ju.byteLength} bytes of memory`), null) : new Uint8Array(ju, Zu, Xu)
      }
      forEachOut(uu, Eu, ju, Uu, Zu, Xu, lu) {
        if (!this.headerReadable()) return;
        const qu = this.headerView(),
          fu = qu[ju],
          Cu = qu[Uu];
        if (0 === Cu) return;
        const bu = this.memory().buffer;
        if (fu % 4 !== 0 || fu + Cu > bu.byteLength) return void this.crash(uu, `${Eu} of ${Cu} bytes at ${fu} outside ${bu.byteLength} bytes of memory`);
        const cu = new DataView(bu, fu, Cu);
        let Nu = 0;
        for (; Nu < Cu;) {
          const ju = Nu + Zu,
            Uu = ju <= Cu ? cu.getUint32(Nu + Xu, !0) : -1;
          if (Uu < 0 || Uu > Cu - ju) return void this.crash(uu, `${Eu} record at ${Nu} overruns its ${Cu} bytes`);
          if (lu(cu.getUint32(Nu, !0), cu.getUint32(Nu + 4, !0), new Uint8Array(bu, fu + ju, Uu), Nu), this.stopped) return;
          Nu = ju + (0, su.xe)(Uu)
        }
      }
      forEachEvent(uu) {
        if (this.stopped || null === this.lastHeader) return;
        const Eu = this.headerView(),
          ju = Eu[su.hb.EventsPtr],
          Uu = Eu[su.hb.EventsLen];
        if (0 === Uu) return;
        const Zu = this.memory().buffer;
        if (ju % 4 !== 0 || ju + Uu > Zu.byteLength) return void this.crash(Wu, `events of ${Uu} bytes at ${ju} outside ${Zu.byteLength} bytes of memory`);
        const Xu = new DataView(Zu, ju, Uu);
        let lu = 0;
        for (; lu < Uu;) {
          const Eu = lu + su.R,
            ju = Eu <= Uu ? Xu.getUint32(lu, !0) : -1,
            Zu = ju >>> 16;
          if (ju < 0 || Zu > Uu - Eu) return void this.crash(Wu, `event record at ${lu} overruns its ${Uu} bytes`);
          uu(65535 & ju, Xu, Eu, Zu), lu = Eu + (0, su.xe)(Zu)
        }
      }
      crashOn(uu, Eu) {
        Eu instanceof Uu.e ? this.crash(Wu, Eu.message) : this.crash(uu, Eu)
      }
      crash(uu, Eu) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: uu,
          error: Eu,
          header: this.lastHeader
        }))
      }
      headerWord(uu) {
        return this.headerReadable() ? this.headerView()[uu] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(uu) {
        const Eu = this.loadCountWords();
        return null !== Eu && (uu.chunksReceived = Eu[su.Mb.ChunksReceived], uu.chunksCancelled = this.headerView()[su.hb.ChunksCancelled], uu.chunksStored = Eu[su.Mb.ChunksStored], uu.jobsSent = Eu[su.Mb.JobsSent], uu.jobsDone = Eu[su.Mb.JobsDone], uu.jobsInFlight = Eu[su.Mb.JobsInFlight], uu.workersLive = Eu[su.Mb.WorkersLive], uu.workersRetired = Eu[su.Mb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var uu, Eu;
        const ju = null !== (uu = null === (Eu = this.loadCountWords()) || void 0 === Eu ? void 0 : Eu[su.Mb.ViewQueuedPrograms]) && void 0 !== uu ? uu : 0;
        return 0 === ju ? null : ju - 1
      }
      readFirstViewWait(uu, Eu) {
        const ju = this.loadCountWords();
        return null === ju ? null : [ju[su.Mb.FirstViewLinkMs], ju[su.Mb.FirstViewTerrainMs], ju[su.Mb.FirstViewHeldMs], ju[su.Mb.FirstViewOtherMs], ju[su.Mb.FirstViewGaps], ju[su.Mb.FirstViewGapMs], uu, Eu]
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const uu = this.core.oh();
        if (0 === uu) return null;
        const Eu = this.memory().buffer;
        return Eu !== this.loadCountsBuffer && (this.loadCountsBuffer = Eu, this.loadCounts = new Uint32Array(Eu, uu, su.Fb)), this.loadCounts
      }
      headerView() {
        const uu = this.memory().buffer;
        return uu !== this.headerBuffer && (this.headerBuffer = uu, this.header = new Uint32Array(uu, this.core.ON(), su.eb)), this.header
      }
    }
  },
  41025: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Xu,
      h: () => Zu
    });
    var su = ju(4874);
    let Uu = null;

    function Zu(uu) {
      Uu = {
        scanned: !1
      };
      try {
        return uu()
      } finally {
        Uu = null
      }
    }

    function Xu() {
      const uu = Uu;
      if (null === uu) return (0, su.f)();
      const Eu = (0, su.f)(!uu.scanned);
      return uu.scanned = !0, Eu
    }
  },
  41072: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    const su = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  41083: (uu, Eu, ju) => {
    function su() {
      return ju(41086)
    }

    function Uu() {
      return ju(41090)
    }

    function Zu(uu) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(uu)
    }
    ju.d(Eu, {
      b: () => Zu,
      f: () => su,
      j: () => Uu
    })
  },
  36684: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => lu,
      f: () => fu,
      h: () => Xu,
      j: () => bu
    });
    var su = ju(36670),
      Uu = ju(13);
    const Zu = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Xu(uu) {
      if (uu instanceof WebAssembly.RuntimeError) return !0;
      const Eu = uu instanceof Error ? uu.stack : void 0;
      return "string" === typeof Eu && Zu.test(Eu)
    }

    function lu(uu, Eu, ju) {
      var Uu;
      const Xu = uu instanceof Error ? uu.name : "thrown",
        lu = (uu instanceof Error && null !== (Uu = uu.stack) && void 0 !== Uu ? Uu : "").split("\n").filter((uu => Zu.test(uu))).slice(0, 8).map((uu => uu.trim())),
        qu = null === Eu ? "wasm memory unknown" : `wasm memory ${Math.round(Eu/2**20)} MB`,
        fu = null === ju.panic ? "" : `, panic: ${(0,su.i)(ju.panic)}`,
        Cu = `${Xu}: ${uu instanceof Error?uu.message:String(uu)}`;
      return `${(0,su.n)(ju.kind,ju.refusedBytes)} ${Cu} (${qu})${fu}${lu.length>0?` | ${lu.join(" < ")}`:""}`
    }
    const qu = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function fu(uu) {
      var Eu;
      let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(uu instanceof Error) || !qu.test(uu.message)) return {};
      if (!("detached" in ju)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, Uu.T)(null === (Eu = (0, Uu.N)(ju, "detached")) || void 0 === Eu ? void 0 : Eu.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const Cu = 500;

    function bu(uu) {
      let Eu = "[object Object]";
      try {
        Eu = String(uu)
      } catch {}
      if ("[object Object]" !== Eu) return Eu;
      try {
        var ju, su;
        return null !== (ju = null === (su = JSON.stringify(uu)) || void 0 === su ? void 0 : su.slice(0, Cu)) && void 0 !== ju ? ju : Eu
      } catch {
        return Eu
      }
    }
  },
  41086: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  41090: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36670: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su,
      h: () => Zu,
      i: () => qu,
      j: () => Xu,
      n: () => Uu
    });
    const su = /^alloc_failed (\d+) bytes$/;

    function Uu(uu, Eu) {
      return Zu(uu, Eu) ? `trap=alloc_failed ${Eu} bytes` : `trap=${uu}`
    }

    function Zu(uu, Eu) {
      return "unreachable" === uu && Eu > 0
    }

    function Xu(uu, Eu, ju) {
      const su = function(uu) {
        return uu instanceof WebAssembly.RuntimeError ? /unreachable/i.test(uu.message) ? "unreachable" : /out of bounds/i.test(uu.message) ? "out_of_bounds" : "runtime_error" : (uu instanceof RangeError || uu instanceof Error && "InternalError" === uu.name) && /call stack|recursion/i.test(uu.message) ? "stack_overflow" : "js_error"
      }(uu);
      if ("unreachable" !== su) return {
        kind: su,
        panic: null,
        refusedBytes: 0
      };
      const Uu = Eu(),
        Zu = ju();
      return {
        kind: su,
        panic: Zu > 0 ? null : Uu,
        refusedBytes: Zu
      }
    }
    const lu = 300;

    function qu(uu) {
      return uu.replace(/\s*\n\s*/g, " / ").slice(0, lu)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);