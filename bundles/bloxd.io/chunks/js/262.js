export const id = 262;
export const ids = [262];
export const modules = {
  40564: (uu, Ru, yu) => {
    function Eu(uu, Ru, yu) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(uu, Ru).getContext("2d", yu);
      const Eu = document.createElement("canvas");
      return Eu.width = uu, Eu.height = Ru, Eu.getContext("2d", yu)
    }

    function Ku(uu, Ru) {
      return uu.getContext("2d", Ru)
    }
    yu.d(Ru, {
      c: () => Ku,
      f: () => Eu
    })
  },
  40480: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Hu,
      e: () => Su,
      f: () => Pu,
      i: () => Mu,
      j: () => Gu,
      l: () => Uu,
      n: () => ju,
      o: () => Tu,
      q: () => Wu,
      t: () => Du,
      u: () => Fu,
      x: () => Cu,
      z: () => gu,
      B: () => hu,
      E: () => nu,
      H: () => tu
    });
    var Eu = yu(4562),
      Ku = yu(40223),
      Qu = (yu(40374), yu(13));
    class mu {
      constructor(uu, Ru) {
        this.memory = uu, this.access = Ru, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.Nr = 0, this.u32 = new Qu.m(0), this.f32 = new Qu.f(0), this.u8 = new Qu.e(0), this.dataView = new Qu.j(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.Nr = this.access.Nr(), this.buffer = (0, Qu.I)(this.memory()), this.u32 = new Qu.m(this.buffer, this.ptr, this.Nr >>> 2), this.f32 = new Qu.f(this.buffer, this.ptr, this.Nr >>> 2), this.u8 = new Qu.e(this.buffer, this.ptr, this.Nr), this.dataView = new Qu.j(this.buffer, this.ptr, this.Nr)
      }
      ensureViews() {
        (0, Qu.I)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(uu) {
        return !!this.fits(uu) || (this.dropped++, !1)
      }
      fits(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const yu = Ru + uu;
        return yu <= this.Nr || yu <= Eu.Gc && 0 !== this.access.reserve(yu) && (this.refresh(), yu <= this.Nr)
      }
      consume(uu) {
        const Ru = this.cursor - uu;
        Ru > 0 && uu > 0 && (this.ensureViews(), this.u8.copyWithin(0, uu, this.cursor)), this.cursor = Ru > 0 ? Ru : 0
      }
      writeRecord(uu, Ru, yu, Ku, Qu) {
        if (!this.room(Eu.vb)) return !1;
        const mu = this.cursor >>> 2;
        return this.u32[mu] = 65535 & uu | (65535 & Ru) << 16, this.f32[mu + 1] = yu, this.f32[mu + 2] = Ku, this.u32[mu + 3] = Qu >>> 0, this.cursor += Eu.vb, !0
      }
      writeOptions(uu, Ru) {
        const yu = Ru.byteLength,
          Ku = Eu.vb + (0, Eu.he)(yu);
        if (!this.fits(Ku)) return !1;
        const Qu = this.cursor,
          mu = Qu >>> 2;
        this.u32[mu] = Eu.yb.Options, this.u32[mu + 1] = yu, this.u32[mu + 2] = 0, this.u32[mu + 3] = uu >>> 0;
        const Ju = Qu + Eu.vb;
        return this.u8.set(Ru, Ju), this.u8.fill(0, Ju + yu, Qu + Ku), this.cursor += Ku, !0
      }
      writeWorkerRecord(uu, Ru, yu, Ku, Qu, mu) {
        const Ju = mu.byteLength,
          Nu = Eu.zd + (0, Eu.he)(Ju);
        if (Ju > Eu.yd) return this.dropped++, !1;
        if (!this.room(Nu)) return !1;
        const Xu = this.cursor,
          Vu = Xu >>> 2;
        this.u32[Vu] = uu >>> 0, this.u32[Vu + 1] = 65535 & Ru | (65535 & yu) << 16, this.u32[Vu + 2] = Ku >>> 0, this.u32[Vu + 3] = Qu >>> 0, this.u32[Vu + 4] = Ju;
        const ru = Xu + Eu.zd;
        return this.u8.set(mu, ru), this.u8.fill(0, ru + Ju, Xu + Nu), this.cursor += Nu, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(uu, Ru) {
        return this.writeNet(Eu.Tb.Frame, uu, Ru)
      }
      writeOpen(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Eu.Tb.Open, uu, Nu(Ru))
      }
      writeClose(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Eu.Tb.Close, uu, Nu(Ru))
      }
      writeNet(uu, Ru, yu) {
        const Ku = yu.byteLength,
          Qu = Eu.Sb + (0, Eu.he)(Ku);
        if (Ku > Eu.Mb) return this.dropped++, !1;
        if (!this.room(Qu)) return !1;
        const mu = this.cursor;
        this.u32[mu >>> 2] = Ku, this.u32[1 + (mu >>> 2)] = (0, Eu.be)(uu, Ru);
        const Ju = mu + Eu.Sb;
        return this.u8.set(yu, Ju), this.u8.fill(0, Ju + Ku, mu + Qu), this.cursor += Qu, !0
      }
      Kx(uu, Ru, yu) {
        const Ku = Eu.w + (0, Eu.he)(yu);
        if (!this.room(Ku)) return -1;
        const Qu = this.cursor;
        this.u32[Qu >>> 2] = 65535 & uu | (65535 & Ru) << 16, this.u32[1 + (Qu >>> 2)] = yu;
        const mu = Qu + Eu.w;
        return this.u8.fill(0, mu, Qu + Ku), this.cursor += Ku, mu
      }
      growForCmd(uu) {
        return this.fits(Eu.w + (0, Eu.he)(uu), 0)
      }
      writeCmd(uu, Ru, yu) {
        const Eu = this.Kx(uu, Ru, yu.byteLength);
        return !(Eu < 0) && (this.u8.set(yu, Eu), !0)
      }
      copyWritten(uu, Ru) {
        return this.ensureViews(), this.u8.slice(uu, uu + Ru)
      }
    }
    const Ju = new Qu.e(0);

    function Nu(uu) {
      if (0 === uu) return Ju;
      const Ru = new Qu.e(Eu.Pb);
      for (let yu = 0; yu < Eu.Pb; yu++) Ru[yu] = uu >>> 8 * yu & 255;
      return Ru
    }
    class Xu {
      constructor(uu, Ru) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new mu(Ru, {
          ptr: () => uu.kr(),
          Nr: () => uu.vQu(),
          reserve: Ru => uu.Nmu(Ru)
        }), this.net = new mu(Ru, {
          ptr: () => uu.Qmu(),
          Nr: () => uu.Kmu(),
          reserve: Ru => uu.Xmu(Ru)
        }), this.worker = new mu(Ru, {
          ptr: () => uu.Umu(),
          Nr: () => uu.Gmu(),
          reserve: Ru => uu.Vmu(Ru)
        }), this.cmd = new mu(Ru, {
          ptr: () => uu.wQu(),
          Nr: () => uu.zQu(),
          reserve: Ru => uu.FQu(Ru)
        })
      }
      reset(uu) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(uu)
      }
    }
    var Vu = yu(36176),
      ru = yu(2312),
      Bu = yu(4558),
      xu = yu(40487);
    const Su = "coreFrame",
      pu = "fatalStatus",
      Tu = "otherCall",
      Wu = "coreRings",
      ju = "netIn",
      Hu = "abi",
      du = "netOut",
      bu = "workerOut",
      Cu = "worldgenHost",
      ku = "eventWalker",
      eu = "netEvent",
      Au = "envEvent",
      Du = "sharedTables",
      Mu = "inputAction",
      Iu = new Set([ku, eu, Au, Mu, Du]),
      Gu = "wasmMemory",
      Uu = "meshHost";

    function nu(uu, Ru) {
      uu.forEachWorkerOut(((yu, Ku, Qu) => {
        if ((0, Eu.Wd)(yu)) try {
          var mu;
          null === (mu = Ru.worldgen) || void 0 === mu || mu.take(yu, Qu)
        } catch (Nu) {
          uu.crash(Cu, Nu)
        } else try {
          var Ju;
          null === (Ju = Ru.mesh) || void 0 === Ju || Ju.take(yu, Ku, Qu)
        } catch (Nu) {
          uu.crash(Uu, Nu)
        }
      }))
    }
    const su = 1048576;

    function tu(uu, Ru) {
      let yu = !1;
      const Eu = () => {
        yu = !1, Ru()
      };
      return () => {
        !yu && uu.cursor >= su && (yu = !0, queueMicrotask(Eu))
      }
    }
    const lu = new Set([pu, Tu, Cu, Uu]);

    function gu(uu) {
      return Iu.has(uu.site) ? uu.error instanceof WebAssembly.RuntimeError || (0, Ku.k)(uu.error) : !lu.has(uu.site) && uu.error instanceof Error
    }
    const cu = "events",
      Lu = [],
      zu = "debugLog",
      Fu = "terrainTextures",
      wu = "sunShadowTextures",
      Zu = new TextDecoder;

    function hu(uu, Ru) {
      const {
        site: yu,
        error: Ku,
        header: Qu
      } = uu, mu = Qu ? (0, Eu.Ud)(Qu.lastError) : "noFrame", Ju = `CORE-${yu===pu?mu:yu}`, Nu = null === Ku || void 0 === Ku ? "" : ` ${(0,Vu.k)(Ku)}`, Xu = {
        site: yu,
        wasmBuild: Ru.wasm,
        clientVersion: Ru.client
      };
      return Qu && (Xu.status = String(Qu.status), Xu.lastError = mu, Xu.lastErrorCode = String(Qu.lastError), Xu.lastErrorDetail = String(Qu.lastErrorDetail), Xu.errorCount = String(Qu.errorCount), Xu.frameIndex = String(Qu.frameIndex), Xu.tickIndex = String(Qu.tickIndex)), {
        code: Ju,
        message: `core ${yu}, last error ${mu};${Nu}`,
        details: Xu
      }
    }
    class Pu {
      constructor(uu, Ru, yu) {
        this.core = uu, this.memory = Ru, this.handlers = yu, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: Lu,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new Xu(uu, Ru)
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
          return this.core.oQu(uu)
        } catch (Ru) {
          return this.crash(Su, Ru), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(uu, Ru) {
        var yu;
        let Qu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: mu,
          net: Ju,
          worker: Nu,
          cmd: Xu
        } = this.rings, Vu = Ju.cursor, ru = Ru && !this.drawsHeld;
        let Tu = Eu.Q.Fatal;
        const Wu = Xu.cursor;
        let Hu = null;
        try {
          const Ru = (ru ? Eu.jb.Draws : 0) | (Qu ? Eu.jb.NetAll : 0);
          Tu = (0, xu.f)((() => this.core.frame(uu, mu.cursor, Ju.cursor, Nu.cursor, Ru, Wu)))
        } catch (lu) {
          Hu = {
            error: lu
          }
        }
        const du = null === (yu = this.gameHost) || void 0 === yu ? void 0 : yu.takeFault();
        this.rings.reset(this.stopped || null !== Hu || void 0 !== du ? Xu.cursor : Wu);
        const bu = null === Hu && void 0 === du ? this.headerView() : null,
          Cu = null === bu ? null : (0, Eu.ke)(bu);
        null !== Cu && (this.lastHeader = Cu);
        const Au = null !== Cu && Tu !== Eu.Q.Fatal,
          Du = Au && null !== bu ? bu[Eu.qb.NetInKept] : 0,
          Mu = Au && Du <= Vu && Du % 4 === 0 ? Du : null;
        var Iu, Gu;
        null !== Cu && null !== Mu && Tu === Eu.Q.Errors && (null === (Iu = (Gu = this.handlers).onErrors) || void 0 === Iu || Iu.call(Gu, Cu));
        const Uu = null === Mu ? Lu : this.readEvents(Vu);
        if (Ju.consume(Vu - (null !== Mu && void 0 !== Mu ? Mu : 0)), this.netKept = null !== Mu && void 0 !== Mu ? Mu : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== Hu) return this.crash(Su, void 0 === du || du instanceof Ku.c ? Hu.error : du), !1;
        if (void 0 !== du || null === Cu) return this.crashOn(Su, du), !1;
        const nu = this.headerView()[Eu.qb.FrameDraw];
        if (this.lastFrameKind = (0, Bu.d)(ru, nu), Tu === Eu.Q.Fatal) return this.crash(pu, null), !1;
        if (null === Mu) return this.crash(ju, `the core kept ${Du} of ${Vu} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const uu = this.frameEvents,
            Ru = this.headerView();
          uu.ptr = Ru[Eu.qb.EventsPtr], uu.len = Ru[Eu.qb.EventsLen], uu.net = Uu, uu.kind = this.lastFrameKind;
          try {
            this.eventWalker(uu)
          } catch (lu) {
            return this.crashOn(ku, lu), !1
          }
          return this.handEnvEvents()
        }
        for (const Eu of Uu) {
          if (this.stopped) return !1;
          try {
            var su, tu;
            null === (su = (tu = this.handlers).onNetEvent) || void 0 === su || su.call(tu, Eu)
          } catch (lu) {
            return this.crashOn(eu, lu), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const Qu of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var uu, Ru;
            null === (uu = (Ru = this.handlers).onReconnectGrace) || void 0 === uu || uu.call(Ru, Qu)
          } catch (Ku) {
            return this.crashOn(eu, Ku), !1
          }
        }
        for (const Qu of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var yu, Eu;
            null === (yu = (Eu = this.handlers).onEnvEvent) || void 0 === yu || yu.call(Eu, Qu)
          } catch (Ku) {
            return this.crashOn(Au, Ku), !1
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
          const Ru = this.unsentUiPrefs;
          Ru && uu.writeRecord(Eu.yb.UiPrefs, 0, Ru.nametagCutDistance, 0, (0, Eu.oe)(Ru)) && (this.unsentUiPrefs = null);
          const yu = this.unsentEnvPrefs;
          yu && uu.writeRecord(Eu.yb.EnvPrefs, (0, Eu.Vd)(yu), yu.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const Ku = this.unsentLookPrefs;
          Ku && uu.writeRecord(Eu.yb.Sensitivity, 0, Ku.mouse, Ku.touch, (0, ru.m)(Ku.fovPercent)) && (this.unsentLookPrefs = null);
          let Qu = 0;
          for (const {
              aux: Eu,
              payload: mu
            }
            of this.unsentOptions) {
            if (!uu.writeOptions(Eu, mu)) {
              if (uu.cursor > 0) break;
              this.optionsDropped++
            }
            Qu++
          }
          Qu > 0 && this.unsentOptions.splice(0, Qu)
        } catch (Ru) {
          return this.crash(Wu, Ru), !1
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
      queueOptions(uu, Ru) {
        return !this.isStopped && (Ru.byteLength > Eu.Wb.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: uu,
          payload: Ru
        }), !0))
      }
      setChunkCap(uu) {
        return this.callCore("setChunkCap", null, (Ru => Ru.Tmu(uu)))
      }
      shedMemory(uu) {
        const Ru = this.callCore("shedMemory", null, (Ru => Ru.kmu(uu)));
        return 0 === Ru ? null : Ru
      }
      addDistanceInUse() {
        const uu = this.callCore("addDistanceInUse", null, (uu => uu.tQu()));
        return 0 === uu ? null : uu
      }
      setChunkAddDistance(uu, Ru) {
        return this.callCore("setChunkAddDistance", !1, (yu => yu.pmu(uu, Ru)))
      }
      setGameHost(uu) {
        return this.callCore("setGameHost", !1, (Ru => (Ru.YQu(uu), this.gameHost = uu, !0)))
      }
      setAntiCheatProbes(uu) {
        return this.callCore("setAntiCheatProbes", !1, (Ru => Ru.xmu(uu)))
      }
      setAmbientOcclusion(uu) {
        this.callCore("setAmbientOcclusion", void 0, (Ru => {
          Ru.Bmu(uu)
        }))
      }
      setPoseLod(uu) {
        this.callCore("setPoseLod", void 0, (Ru => {
          Ru.jmu(uu)
        }))
      }
      setDebugLog(uu, Ru) {
        this.callCore(zu, void 0, (yu => {
          yu.DT(uu, Ru)
        }))
      }
      takeDebugLog(uu) {
        return this.callCore(zu, [], (Ru => Ru.MT(uu)))
      }
      setTextureLayers(uu) {
        return this.callCore("setTextureLayers", !1, (Ru => Ru.Cmu(uu)))
      }
      setBlockColours(uu) {
        let {
          blocks: Ru,
          counts: yu,
          values: Eu
        } = uu;
        return this.callCore("setBlockColours", !1, (uu => uu.pEu(Ru, yu, Eu)))
      }
      terrainTextureNames() {
        return this.callCore(Fu, [], (uu => uu.Imu()))
      }
      setTerrainTextures(uu, Ru, yu, Eu) {
        return this.callCore(Fu, !1, (Ku => Ku.bmu(uu, yu, Ru, Eu)))
      }
      setShaderPack(uu, Ru, yu, Eu, Ku, Qu) {
        return this.callCore("setShaderPack", !1, (mu => {
          var Ju, Nu;
          return null !== (Ju = null === (Nu = mu.IEu) || void 0 === Nu ? void 0 : Nu.call(mu, uu, Ru, yu, Eu, Ku, Qu)) && void 0 !== Ju && Ju
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(wu, null, (uu => {
          var Ru, yu;
          return null !== (Ru = null === (yu = uu.emu) || void 0 === yu ? void 0 : yu.call(uu)) && void 0 !== Ru ? Ru : null
        }))
      }
      setSunShadowTexture(uu, Ru, yu, Eu, Ku) {
        this.callCore(wu, void 0, (Qu => {
          var mu;
          null === (mu = Qu.dmu) || void 0 === mu || mu.call(Qu, uu, Ru, yu, Eu, Ku)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(wu, [], (uu => {
          var Ru, yu;
          return null !== (Ru = null === (yu = uu.Dmu) || void 0 === yu ? void 0 : yu.call(uu)) && void 0 !== Ru ? Ru : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(wu, null, (uu => {
          var Ru, yu;
          return null !== (Ru = null === (yu = uu.Amu) || void 0 === yu ? void 0 : yu.call(uu)) && void 0 !== Ru ? Ru : null
        }))
      }
      callCore(uu, Ru, yu) {
        if (this.stopped) return Ru;
        try {
          return yu(this.core)
        } catch (Eu) {
          return this.crash(uu, Eu), Ru
        }
      }
      readEvents(uu) {
        this.netOffsets.length = 0;
        const Ru = this.headerView(),
          yu = Ru[Eu.qb.EventsPtr],
          Ku = Ru[Eu.qb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === Ku) return Lu;
        const Qu = [],
          mu = this.memory().buffer;
        if (yu % 4 !== 0 || yu + Ku > mu.byteLength) return this.crash(cu, `events of ${Ku} bytes at ${yu} outside ${mu.byteLength} bytes of memory`), Lu;
        const Ju = new DataView(mu, yu, Ku),
          Nu = this.rings.net,
          Xu = (Ru, yu) => Ru + yu <= uu ? Nu.copyWritten(Ru, yu) : null;
        let Vu = 0;
        for (; Vu < Ku;) {
          const uu = Vu + Eu.Y,
            Ru = uu <= Ku ? Ju.getUint32(Vu, !0) : -1,
            Nu = Ru >>> 16;
          if (Ru < 0 || Nu > Ku - uu) return this.crash(cu, `event record at ${Vu} overruns its ${Ku} bytes`), Lu;
          const Au = 65535 & Ru,
            Du = Ru => Ju.getUint32(uu + 4 * Ru, !0);
          if (Au === Eu.ab.RawMessage) {
            const uu = Nu >= Eu.Ic.BYTES ? 65535 & Du(1) : -1,
              Ru = uu === Eu.Ic.STRING_TYPE,
              yu = Nu === (Ru ? Eu.Ic.STRING_TYPE_BYTES : Eu.Ic.BYTES) ? Xu(Du(2), Du(3)) : null,
              Ku = Ru && yu ? Xu(Du(4), Du(5)) : null;
            if (!yu || Ru && !Ku) return this.crash(cu, `RawMessage at ${Vu} of ${Nu} bytes names bytes outside net-in`), Lu;
            this.netOffsets.push(Vu), Qu.push({
              type: "message",
              conn: Du(0),
              Dm: uu,
              payloadKind: Du(1) >>> 16,
              payload: yu,
              stringType: Ku ? Zu.decode(Ku) : null
            })
          } else if (Au === Eu.ab.CoreErrors) {
            var ru, Bu;
            const uu = Nu >= 4 ? Du(0) : -1;
            if (uu < 0 || uu > Eu.K.PAIRS_MAX || Nu !== 4 * (Eu.K.FIXED_WORDS + Eu.K.PAIR_WORDS * uu)) return this.crash(cu, `CoreErrors at ${Vu} of ${Nu} bytes`), Lu;
            const Ru = [];
            for (let yu = 0; yu < uu; yu++) Ru.push({
              code: Du(1 + 2 * yu),
              detail: Du(2 + 2 * yu)
            });
            null === (ru = (Bu = this.handlers).onCoreErrors) || void 0 === ru || ru.call(Bu, Ru, Du(1 + 2 * uu))
          } else if (Au === Eu.ab.RenderReload) {
            var xu, Su;
            if (Nu !== Eu.Uc.BYTES) return this.crash(cu, `RenderReload at ${Vu} of ${Nu} bytes`), Lu;
            null === (xu = (Su = this.handlers).onRenderReload) || void 0 === xu || xu.call(Su, Du(0), Du(1), Du(2))
          } else if (Au === Eu.ab.Images) {
            var pu, Tu;
            null === (pu = (Tu = this.handlers).onImages) || void 0 === pu || pu.call(Tu, new Uint8Array(mu.slice(yu + uu, yu + uu + Nu)))
          } else if (Au === Eu.ab.ModelRequests)
            for (let yu = 0; yu < Nu >>> 2; yu++) {
              var Wu, ju;
              null === (Wu = (ju = this.handlers).onModelRequest) || void 0 === Wu || Wu.call(ju, Du(yu))
            } else if (Au === Eu.ab.ModelTaken) {
              var Hu, du;
              if (Nu < 4) return this.crash(cu, `ModelTaken at ${Vu} of ${Nu} bytes`), Lu;
              const uu = new Uint32Array((Nu >>> 2) - 1);
              for (let Ru = 0; Ru < uu.length; Ru++) uu[Ru] = Du(1 + Ru);
              null === (Hu = (du = this.handlers).onModelTaken) || void 0 === Hu || Hu.call(du, Du(0), uu)
            } else if (Au === Eu.ab.TerrainTexturesWanted) {
            var bu, Cu;
            if (0 !== Nu) return this.crash(cu, `TerrainTexturesWanted at ${Vu} of ${Nu} bytes`), Lu;
            null === (bu = (Cu = this.handlers).onTerrainTexturesWanted) || void 0 === bu || bu.call(Cu)
          } else if (Au === Eu.ab.KeepAliveDue) {
            var ku, eu;
            if (Nu > Eu.Cb) return this.crash(cu, `KeepAliveDue at ${Vu} of ${Nu} bytes`), Lu;
            null === (ku = (eu = this.handlers).onKeepAlive) || void 0 === ku || ku.call(eu, new Uint8Array(mu, yu + uu, Nu).slice())
          } else if (Au === Eu.ab.ConnectionState) {
            if (Nu !== Eu.z) return this.crash(cu, `ConnectionState at ${Vu} of ${Nu} bytes`), Lu;
            this.netOffsets.push(Vu), Qu.push({
              type: "connection",
              conn: Du(0),
              phase: Du(1),
              code: 0 | Du(2)
            })
          } else if (Au === Eu.ab.EnvLighting || Au === Eu.ab.SkyImages) {
            if (Nu !== (Au === Eu.ab.EnvLighting ? Eu.U : Eu.jd)) return this.crash(cu, `event ${Au} at ${Vu} of ${Nu} bytes`), Lu;
            this.envEvents.push({
              kind: Au,
              payload: new Uint8Array(mu.slice(yu + uu, yu + uu + Nu))
            })
          } else if (Au === Eu.ab.ReconnectGrace) {
            if (Nu !== Eu.fc) return this.crash(cu, `ReconnectGrace at ${Vu} of ${Nu} bytes`), Lu;
            const uu = Du(2);
            this.graceEvents.push({
              conn: Du(0),
              graceMs: Du(1),
              sessionBased: 0 !== (uu & Eu.Mc.SessionBased),
              replayOffer: 0 !== (uu & Eu.Mc.ReplayOffer)
            })
          }
          Vu = uu + (0, Eu.he)(Nu)
        }
        return Qu
      }
      forEachNetOut(uu) {
        this.forEachOut(du, "net-out", Eu.qb.NetOutPtr, Eu.qb.NetOutLen, Eu.Sb, 0, ((Ru, yu, Ku, Qu) => {
          const mu = (0, Eu.Zd)(yu);
          mu === Eu.Tb.Frame ? uu((0, Eu.Yd)(yu), Ku) : this.crash(du, `net-out record at ${Qu} is kind ${mu}, not a frame`)
        }))
      }
      forEachWorkerOut(uu) {
        this.forEachOut(bu, "worker-out", Eu.qb.WorkerOutPtr, Eu.qb.WorkerOutLen, Eu.xd, 4, ((Ru, yu, Ku, Qu) => {
          const mu = 255 & Ru,
            Ju = mu === Eu.Jd.Init ? this.initOf(Ku, Qu) : Ku;
          null !== Ju && uu(mu, Ru >>> 8 & 16777215, Ju)
        }))
      }
      initOf(uu, Ru) {
        const yu = this.memory().buffer;
        if (uu.byteLength !== Eu.sb) return this.crash(bu, `worker-out Init record at ${Ru} is ${uu.byteLength} bytes, not a view`), null;
        const Ku = new DataView(uu.buffer, uu.byteOffset, Eu.sb),
          Qu = Ku.getUint32(0, !0),
          mu = Ku.getUint32(4, !0);
        return Qu + mu > yu.byteLength ? (this.crash(bu, `worker-out Init record at ${Ru} names ${mu} bytes at ${Qu} outside ${yu.byteLength} bytes of memory`), null) : new Uint8Array(yu, Qu, mu)
      }
      forEachOut(uu, Ru, yu, Ku, Qu, mu, Ju) {
        if (this.stopped || null === this.lastHeader) return;
        const Nu = this.headerView(),
          Xu = Nu[yu],
          Vu = Nu[Ku];
        if (0 === Vu) return;
        const ru = this.memory().buffer;
        if (Xu % 4 !== 0 || Xu + Vu > ru.byteLength) return void this.crash(uu, `${Ru} of ${Vu} bytes at ${Xu} outside ${ru.byteLength} bytes of memory`);
        const Bu = new DataView(ru, Xu, Vu);
        let xu = 0;
        for (; xu < Vu;) {
          const yu = xu + Qu,
            Ku = yu <= Vu ? Bu.getUint32(xu + mu, !0) : -1;
          if (Ku < 0 || Ku > Vu - yu) return void this.crash(uu, `${Ru} record at ${xu} overruns its ${Vu} bytes`);
          if (Ju(Bu.getUint32(xu, !0), Bu.getUint32(xu + 4, !0), new Uint8Array(ru, Xu + yu, Ku), xu), this.stopped) return;
          xu = yu + (0, Eu.he)(Ku)
        }
      }
      forEachEvent(uu) {
        if (this.stopped || null === this.lastHeader) return;
        const Ru = this.headerView(),
          yu = Ru[Eu.qb.EventsPtr],
          Ku = Ru[Eu.qb.EventsLen];
        if (0 === Ku) return;
        const Qu = this.memory().buffer;
        if (yu % 4 !== 0 || yu + Ku > Qu.byteLength) return void this.crash(cu, `events of ${Ku} bytes at ${yu} outside ${Qu.byteLength} bytes of memory`);
        const mu = new DataView(Qu, yu, Ku);
        let Ju = 0;
        for (; Ju < Ku;) {
          const Ru = Ju + Eu.Y,
            yu = Ru <= Ku ? mu.getUint32(Ju, !0) : -1,
            Qu = yu >>> 16;
          if (yu < 0 || Qu > Ku - Ru) return void this.crash(cu, `event record at ${Ju} overruns its ${Ku} bytes`);
          uu(65535 & yu, mu, Ru, Qu), Ju = Ru + (0, Eu.he)(Qu)
        }
      }
      crashOn(uu, Ru) {
        Ru instanceof Ku.c ? this.crash(cu, Ru.message) : this.crash(uu, Ru)
      }
      crash(uu, Ru) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: uu,
          error: Ru,
          header: this.lastHeader
        }))
      }
      headerWord(uu) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[uu]
      }
      headerView() {
        const uu = this.memory().buffer;
        return uu !== this.headerBuffer && (this.headerBuffer = uu, this.header = new Uint32Array(uu, this.core.Qx(), Eu.nb)), this.header
      }
    }
  },
  40487: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu,
      f: () => Qu
    });
    var Eu = yu(4470);
    let Ku = null;

    function Qu(uu) {
      Ku = {
        scanned: !1
      };
      try {
        return uu()
      } finally {
        Ku = null
      }
    }

    function mu() {
      const uu = Ku;
      if (null === uu) return (0, Eu.d)();
      const Ru = (0, Eu.d)(!uu.scanned);
      return uu.scanned = !0, Ru
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);