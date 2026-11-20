export const id = 262;
export const ids = [262];
export const modules = {
  40101: (bb, ab, Ub) => {
    function Ab(bb, ab, Ub) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(bb, ab).getContext("2d", Ub);
      const Ab = document.createElement("canvas");
      return Ab.width = bb, Ab.height = ab, Ab.getContext("2d", Ub)
    }

    function Mb(bb, ab) {
      return bb.getContext("2d", ab)
    }
    Ub.d(ab, {
      c: () => Mb,
      f: () => Ab
    })
  },
  40032: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Db,
      d: () => jb,
      e: () => sb,
      h: () => Wb,
      l: () => Ib,
      m: () => db,
      n: () => Zb,
      o: () => kb,
      q: () => yb,
      u: () => Nb,
      v: () => ob,
      x: () => ib,
      z: () => qb,
      A: () => wb,
      E: () => Fb,
      H: () => Gb
    });
    var Ab = Ub(4479),
      Mb = Ub(39764),
      Tb = (Ub(39921), Ub(10));
    class Eb {
      constructor(bb, ab) {
        this.memory = bb, this.access = ab, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.PL = 0, this.u32 = new Tb.l(0), this.f32 = new Tb.g(0), this.u8 = new Tb.c(0), this.dataView = new Tb.j(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.PL = this.access.PL(), this.buffer = (0, Tb.J)(this.memory()), this.u32 = new Tb.l(this.buffer, this.ptr, this.PL >>> 2), this.f32 = new Tb.g(this.buffer, this.ptr, this.PL >>> 2), this.u8 = new Tb.c(this.buffer, this.ptr, this.PL), this.dataView = new Tb.j(this.buffer, this.ptr, this.PL)
      }
      ensureViews() {
        (0, Tb.J)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(bb) {
        return !!this.fits(bb) || (this.dropped++, !1)
      }
      fits(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const Ub = ab + bb;
        return Ub <= this.PL || Ub <= Ab.xc && 0 !== this.access.reserve(Ub) && (this.refresh(), Ub <= this.PL)
      }
      consume(bb) {
        const ab = this.cursor - bb;
        ab > 0 && bb > 0 && (this.ensureViews(), this.u8.copyWithin(0, bb, this.cursor)), this.cursor = ab > 0 ? ab : 0
      }
      writeRecord(bb, ab, Ub, Mb, Tb) {
        if (!this.room(Ab.ob)) return !1;
        const Eb = this.cursor >>> 2;
        return this.u32[Eb] = 65535 & bb | (65535 & ab) << 16, this.f32[Eb + 1] = Ub, this.f32[Eb + 2] = Mb, this.u32[Eb + 3] = Tb >>> 0, this.cursor += Ab.ob, !0
      }
      writeOptions(bb, ab) {
        const Ub = ab.byteLength,
          Mb = Ab.ob + (0, Ab.ae)(Ub);
        if (!this.fits(Mb)) return !1;
        const Tb = this.cursor,
          Eb = Tb >>> 2;
        this.u32[Eb] = Ab.rb.Options, this.u32[Eb + 1] = Ub, this.u32[Eb + 2] = 0, this.u32[Eb + 3] = bb >>> 0;
        const Yb = Tb + Ab.ob;
        return this.u8.set(ab, Yb), this.u8.fill(0, Yb + Ub, Tb + Mb), this.cursor += Mb, !0
      }
      writeWorkerRecord(bb, ab, Ub, Mb, Tb, Eb) {
        const Yb = Eb.byteLength,
          Bb = Ab.td + (0, Ab.ae)(Yb);
        if (Yb > Ab.sd) return this.dropped++, !1;
        if (!this.room(Bb)) return !1;
        const eb = this.cursor,
          vb = eb >>> 2;
        this.u32[vb] = bb >>> 0, this.u32[vb + 1] = 65535 & ab | (65535 & Ub) << 16, this.u32[vb + 2] = Mb >>> 0, this.u32[vb + 3] = Tb >>> 0, this.u32[vb + 4] = Yb;
        const Lb = eb + Ab.td;
        return this.u8.set(Eb, Lb), this.u8.fill(0, Lb + Yb, eb + Bb), this.cursor += Bb, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(bb, ab) {
        return this.writeNet(Ab.Mb.Frame, bb, ab)
      }
      writeOpen(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Ab.Mb.Open, bb, Bb(ab))
      }
      writeClose(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Ab.Mb.Close, bb, Bb(ab))
      }
      writeNet(bb, ab, Ub) {
        const Mb = Ub.byteLength,
          Tb = Ab.Lb + (0, Ab.ae)(Mb);
        if (Mb > Ab.Hb) return this.dropped++, !1;
        if (!this.room(Tb)) return !1;
        const Eb = this.cursor;
        this.u32[Eb >>> 2] = Mb, this.u32[1 + (Eb >>> 2)] = (0, Ab.Vd)(bb, ab);
        const Yb = Eb + Ab.Lb;
        return this.u8.set(Ub, Yb), this.u8.fill(0, Yb + Mb, Eb + Tb), this.cursor += Tb, !0
      }
      bX(bb, ab, Ub) {
        const Mb = Ab.p + (0, Ab.ae)(Ub);
        if (!this.room(Mb)) return -1;
        const Tb = this.cursor;
        this.u32[Tb >>> 2] = 65535 & bb | (65535 & ab) << 16, this.u32[1 + (Tb >>> 2)] = Ub;
        const Eb = Tb + Ab.p;
        return this.u8.fill(0, Eb, Tb + Mb), this.cursor += Mb, Eb
      }
      growForCmd(bb) {
        return this.fits(Ab.p + (0, Ab.ae)(bb), 0)
      }
      writeCmd(bb, ab, Ub) {
        const Ab = this.bX(bb, ab, Ub.byteLength);
        return !(Ab < 0) && (this.u8.set(Ub, Ab), !0)
      }
      copyWritten(bb, ab) {
        return this.ensureViews(), this.u8.slice(bb, bb + ab)
      }
    }
    const Yb = new Tb.c(0);

    function Bb(bb) {
      if (0 === bb) return Yb;
      const ab = new Tb.c(Ab.Kb);
      for (let Ub = 0; Ub < Ab.Kb; Ub++) ab[Ub] = bb >>> 8 * Ub & 255;
      return ab
    }
    class eb {
      constructor(bb, ab) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new Eb(ab, {
          ptr: () => bb.pL(),
          PL: () => bb.BTb(),
          reserve: ab => bb.DTb(ab)
        }), this.net = new Eb(ab, {
          ptr: () => bb.kTb(),
          PL: () => bb.RTb(),
          reserve: ab => bb.zTb(ab)
        }), this.worker = new Eb(ab, {
          ptr: () => bb.tTb(),
          PL: () => bb.lTb(),
          reserve: ab => bb.xTb(ab)
        }), this.cmd = new Eb(ab, {
          ptr: () => bb.SMb(),
          PL: () => bb.JMb(),
          reserve: ab => bb.nMb(ab)
        })
      }
      reset(bb) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(bb)
      }
    }
    var vb = Ub(35745),
      Lb = Ub(2260),
      Pb = Ub(4477),
      Xb = Ub(40036);
    const jb = "coreFrame",
      Rb = "fatalStatus",
      kb = "otherCall",
      yb = "coreRings",
      Zb = "netIn",
      Db = "abi",
      zb = "netOut",
      xb = "workerOut",
      ib = "worldgenHost",
      fb = "eventWalker",
      mb = "netEvent",
      pb = "envEvent",
      Nb = "sharedTables",
      Wb = "inputAction",
      Hb = new Set([fb, mb, pb, Wb, Nb]),
      Ib = "wasmMemory",
      db = "meshHost";

    function Fb(bb, ab) {
      bb.forEachWorkerOut(((Ub, Mb, Tb) => {
        if ((0, Ab.Qd)(Ub)) try {
          var Eb;
          null === (Eb = ab.worldgen) || void 0 === Eb || Eb.take(Ub, Tb)
        } catch (Bb) {
          bb.crash(ib, Bb)
        } else try {
          var Yb;
          null === (Yb = ab.mesh) || void 0 === Yb || Yb.take(Ub, Mb, Tb)
        } catch (Bb) {
          bb.crash(db, Bb)
        }
      }))
    }
    const hb = 1048576;

    function Gb(bb, ab) {
      let Ub = !1;
      const Ab = () => {
        Ub = !1, ab()
      };
      return () => {
        !Ub && bb.cursor >= hb && (Ub = !0, queueMicrotask(Ab))
      }
    }
    const Qb = new Set([Rb, kb, ib, db]);

    function qb(bb) {
      return Hb.has(bb.site) ? bb.error instanceof WebAssembly.RuntimeError || (0, Mb.k)(bb.error) : !Qb.has(bb.site) && bb.error instanceof Error
    }
    const ub = "events",
      rb = [],
      Kb = "debugLog",
      ob = "terrainTextures",
      lb = "sunShadowTextures",
      tb = new TextDecoder;

    function wb(bb, ab) {
      const {
        site: Ub,
        error: Mb,
        header: Tb
      } = bb, Eb = Tb ? (0, Ab.Jd)(Tb.lastError) : "noFrame", Yb = `CORE-${Ub===Rb?Eb:Ub}`, Bb = null === Mb || void 0 === Mb ? "" : ` ${(0,vb.e)(Mb)}`, eb = {
        site: Ub,
        wasmBuild: ab.wasm,
        clientVersion: ab.client
      };
      return Tb && (eb.status = String(Tb.status), eb.lastError = Eb, eb.lastErrorCode = String(Tb.lastError), eb.lastErrorDetail = String(Tb.lastErrorDetail), eb.errorCount = String(Tb.errorCount), eb.frameIndex = String(Tb.frameIndex), eb.tickIndex = String(Tb.tickIndex)), {
        code: Yb,
        message: `core ${Ub}, last error ${Eb};${Bb}`,
        details: eb
      }
    }
    class sb {
      constructor(bb, ab, Ub) {
        this.core = bb, this.memory = ab, this.handlers = Ub, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: rb,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new eb(bb, ab)
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
          return this.core.TTb(bb)
        } catch (ab) {
          return this.crash(jb, ab), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(bb, ab) {
        var Ub;
        let Tb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: Eb,
          net: Yb,
          worker: Bb,
          cmd: eb
        } = this.rings, vb = Yb.cursor, Lb = ab && !this.drawsHeld;
        let kb = Ab.I.Fatal;
        const yb = eb.cursor;
        let Db = null;
        try {
          const ab = (Lb ? Ab._.Draws : 0) | (Tb ? Ab._.NetAll : 0);
          kb = (0, Xb.g)((() => this.core.frame(bb, Eb.cursor, Yb.cursor, Bb.cursor, ab, yb)))
        } catch (Qb) {
          Db = {
            error: Qb
          }
        }
        const zb = null === (Ub = this.gameHost) || void 0 === Ub ? void 0 : Ub.takeFault();
        this.rings.reset(this.stopped || null !== Db || void 0 !== zb ? eb.cursor : yb);
        const xb = null === Db && void 0 === zb ? this.headerView() : null,
          ib = null === xb ? null : (0, Ab.be)(xb);
        null !== ib && (this.lastHeader = ib);
        const pb = null !== ib && kb !== Ab.I.Fatal,
          Nb = pb && null !== xb ? xb[Ab.gb.NetInKept] : 0,
          Wb = pb && Nb <= vb && Nb % 4 === 0 ? Nb : null;
        var Hb, Ib;
        null !== ib && null !== Wb && kb === Ab.I.Errors && (null === (Hb = (Ib = this.handlers).onErrors) || void 0 === Hb || Hb.call(Ib, ib));
        const db = null === Wb ? rb : this.readEvents(vb);
        if (Yb.consume(vb - (null !== Wb && void 0 !== Wb ? Wb : 0)), this.netKept = null !== Wb && void 0 !== Wb ? Wb : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== Db) return this.crash(jb, void 0 === zb || zb instanceof Mb.e ? Db.error : zb), !1;
        if (void 0 !== zb || null === ib) return this.crashOn(jb, zb), !1;
        const Fb = this.headerView()[Ab.gb.FrameDraw];
        if (this.lastFrameKind = (0, Pb.f)(Lb, Fb), kb === Ab.I.Fatal) return this.crash(Rb, null), !1;
        if (null === Wb) return this.crash(Zb, `the core kept ${Nb} of ${vb} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const bb = this.frameEvents,
            ab = this.headerView();
          bb.ptr = ab[Ab.gb.EventsPtr], bb.len = ab[Ab.gb.EventsLen], bb.net = db, bb.kind = this.lastFrameKind;
          try {
            this.eventWalker(bb)
          } catch (Qb) {
            return this.crashOn(fb, Qb), !1
          }
          return this.handEnvEvents()
        }
        for (const Ab of db) {
          if (this.stopped) return !1;
          try {
            var hb, Gb;
            null === (hb = (Gb = this.handlers).onNetEvent) || void 0 === hb || hb.call(Gb, Ab)
          } catch (Qb) {
            return this.crashOn(mb, Qb), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const Tb of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var bb, ab;
            null === (bb = (ab = this.handlers).onReconnectGrace) || void 0 === bb || bb.call(ab, Tb)
          } catch (Mb) {
            return this.crashOn(mb, Mb), !1
          }
        }
        for (const Tb of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var Ub, Ab;
            null === (Ub = (Ab = this.handlers).onEnvEvent) || void 0 === Ub || Ub.call(Ab, Tb)
          } catch (Mb) {
            return this.crashOn(pb, Mb), !1
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
          const ab = this.unsentUiPrefs;
          ab && bb.writeRecord(Ab.rb.UiPrefs, 0, ab.nametagCutDistance, 0, (0, Ab.ce)(ab)) && (this.unsentUiPrefs = null);
          const Ub = this.unsentEnvPrefs;
          Ub && bb.writeRecord(Ab.rb.EnvPrefs, (0, Ab.Md)(Ub), Ub.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const Mb = this.unsentLookPrefs;
          Mb && bb.writeRecord(Ab.rb.Sensitivity, 0, Mb.mouse, Mb.touch, (0, Lb.f)(Mb.fovPercent)) && (this.unsentLookPrefs = null);
          let Tb = 0;
          for (const {
              aux: Ab,
              payload: Eb
            }
            of this.unsentOptions) {
            if (!bb.writeOptions(Ab, Eb)) {
              if (bb.cursor > 0) break;
              this.optionsDropped++
            }
            Tb++
          }
          Tb > 0 && this.unsentOptions.splice(0, Tb)
        } catch (ab) {
          return this.crash(yb, ab), !1
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
      queueOptions(bb, ab) {
        return !this.isStopped && (ab.byteLength > Ab.Qb.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: bb,
          payload: ab
        }), !0))
      }
      setChunkCap(bb) {
        return this.callCore("setChunkCap", null, (ab => ab.WTb(bb)))
      }
      shedMemory(bb) {
        const ab = this.callCore("shedMemory", null, (ab => ab.QTb(bb)));
        return 0 === ab ? null : ab
      }
      addDistanceInUse() {
        const bb = this.callCore("addDistanceInUse", null, (bb => bb.gMb()));
        return 0 === bb ? null : bb
      }
      setChunkAddDistance(bb, ab) {
        return this.callCore("setChunkAddDistance", !1, (Ub => Ub.NTb(bb, ab)))
      }
      setGameHost(bb) {
        return this.callCore("setGameHost", !1, (ab => (ab.MTb(bb), this.gameHost = bb, !0)))
      }
      setAntiCheatProbes(bb) {
        return this.callCore("setAntiCheatProbes", !1, (ab => ab.mTb(bb)))
      }
      setAmbientOcclusion(bb) {
        this.callCore("setAmbientOcclusion", void 0, (ab => {
          ab.fTb(bb)
        }))
      }
      setPoseLod(bb) {
        this.callCore("setPoseLod", void 0, (ab => {
          ab.ITb(bb)
        }))
      }
      setDebugLog(bb, ab) {
        this.callCore(Kb, void 0, (Ub => {
          Ub.Ek(bb, ab)
        }))
      }
      takeDebugLog(bb) {
        return this.callCore(Kb, [], (ab => ab.Yk(bb)))
      }
      setTextureLayers(bb) {
        return this.callCore("setTextureLayers", !1, (ab => ab.GTb(bb)))
      }
      setBlockColours(bb) {
        let {
          blocks: ab,
          counts: Ub,
          values: Ab
        } = bb;
        return this.callCore("setBlockColours", !1, (bb => bb.pUb(ab, Ub, Ab)))
      }
      terrainTextureNames() {
        return this.callCore(ob, [], (bb => bb.oTb()))
      }
      setTerrainTextures(bb, ab, Ub, Ab) {
        return this.callCore(ob, !1, (Mb => Mb.hTb(bb, Ub, ab, Ab)))
      }
      setShaderPack(bb, ab, Ub, Ab, Mb, Tb) {
        return this.callCore("setShaderPack", !1, (Eb => {
          var Yb, Bb;
          return null !== (Yb = null === (Bb = Eb.KUb) || void 0 === Bb ? void 0 : Bb.call(Eb, bb, ab, Ub, Ab, Mb, Tb)) && void 0 !== Yb && Yb
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(lb, null, (bb => {
          var ab, Ub;
          return null !== (ab = null === (Ub = bb.qTb) || void 0 === Ub ? void 0 : Ub.call(bb)) && void 0 !== ab ? ab : null
        }))
      }
      setSunShadowTexture(bb, ab, Ub, Ab, Mb) {
        this.callCore(lb, void 0, (Tb => {
          var Eb;
          null === (Eb = Tb.FTb) || void 0 === Eb || Eb.call(Tb, bb, ab, Ub, Ab, Mb)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(lb, [], (bb => {
          var ab, Ub;
          return null !== (ab = null === (Ub = bb.rTb) || void 0 === Ub ? void 0 : Ub.call(bb)) && void 0 !== ab ? ab : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(lb, null, (bb => {
          var ab, Ub;
          return null !== (ab = null === (Ub = bb.uTb) || void 0 === Ub ? void 0 : Ub.call(bb)) && void 0 !== ab ? ab : null
        }))
      }
      callCore(bb, ab, Ub) {
        if (this.stopped) return ab;
        try {
          return Ub(this.core)
        } catch (Ab) {
          return this.crash(bb, Ab), ab
        }
      }
      readEvents(bb) {
        this.netOffsets.length = 0;
        const ab = this.headerView(),
          Ub = ab[Ab.gb.EventsPtr],
          Mb = ab[Ab.gb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === Mb) return rb;
        const Tb = [],
          Eb = this.memory().buffer;
        if (Ub % 4 !== 0 || Ub + Mb > Eb.byteLength) return this.crash(ub, `events of ${Mb} bytes at ${Ub} outside ${Eb.byteLength} bytes of memory`), rb;
        const Yb = new DataView(Eb, Ub, Mb),
          Bb = this.rings.net,
          eb = (ab, Ub) => ab + Ub <= bb ? Bb.copyWritten(ab, Ub) : null;
        let vb = 0;
        for (; vb < Mb;) {
          const bb = vb + Ab.R,
            ab = bb <= Mb ? Yb.getUint32(vb, !0) : -1,
            Bb = ab >>> 16;
          if (ab < 0 || Bb > Mb - bb) return this.crash(ub, `event record at ${vb} overruns its ${Mb} bytes`), rb;
          const pb = 65535 & ab,
            Nb = ab => Yb.getUint32(bb + 4 * ab, !0);
          if (pb === Ab.V.RawMessage) {
            const bb = Bb >= Ab.zc.BYTES ? 65535 & Nb(1) : -1,
              ab = bb === Ab.zc.STRING_TYPE,
              Ub = Bb === (ab ? Ab.zc.STRING_TYPE_BYTES : Ab.zc.BYTES) ? eb(Nb(2), Nb(3)) : null,
              Mb = ab && Ub ? eb(Nb(4), Nb(5)) : null;
            if (!Ub || ab && !Mb) return this.crash(ub, `RawMessage at ${vb} of ${Bb} bytes names bytes outside net-in`), rb;
            this.netOffsets.push(vb), Tb.push({
              type: "message",
              conn: Nb(0),
              fE: bb,
              payloadKind: Nb(1) >>> 16,
              payload: Ub,
              stringType: Mb ? tb.decode(Mb) : null
            })
          } else if (pb === Ab.V.CoreErrors) {
            var Lb, Pb;
            const bb = Bb >= 4 ? Nb(0) : -1;
            if (bb < 0 || bb > Ab.G.PAIRS_MAX || Bb !== 4 * (Ab.G.FIXED_WORDS + Ab.G.PAIR_WORDS * bb)) return this.crash(ub, `CoreErrors at ${vb} of ${Bb} bytes`), rb;
            const ab = [];
            for (let Ub = 0; Ub < bb; Ub++) ab.push({
              code: Nb(1 + 2 * Ub),
              detail: Nb(2 + 2 * Ub)
            });
            null === (Lb = (Pb = this.handlers).onCoreErrors) || void 0 === Lb || Lb.call(Pb, ab, Nb(1 + 2 * bb))
          } else if (pb === Ab.V.RenderReload) {
            var Xb, jb;
            if (Bb !== Ab.Pc.BYTES) return this.crash(ub, `RenderReload at ${vb} of ${Bb} bytes`), rb;
            null === (Xb = (jb = this.handlers).onRenderReload) || void 0 === Xb || Xb.call(jb, Nb(0), Nb(1), Nb(2))
          } else if (pb === Ab.V.Images) {
            var Rb, kb;
            null === (Rb = (kb = this.handlers).onImages) || void 0 === Rb || Rb.call(kb, new Uint8Array(Eb.slice(Ub + bb, Ub + bb + Bb)))
          } else if (pb === Ab.V.ModelRequests)
            for (let Ub = 0; Ub < Bb >>> 2; Ub++) {
              var yb, Zb;
              null === (yb = (Zb = this.handlers).onModelRequest) || void 0 === yb || yb.call(Zb, Nb(Ub))
            } else if (pb === Ab.V.ModelTaken) {
              var Db, zb;
              if (Bb < 4) return this.crash(ub, `ModelTaken at ${vb} of ${Bb} bytes`), rb;
              const bb = new Uint32Array((Bb >>> 2) - 1);
              for (let ab = 0; ab < bb.length; ab++) bb[ab] = Nb(1 + ab);
              null === (Db = (zb = this.handlers).onModelTaken) || void 0 === Db || Db.call(zb, Nb(0), bb)
            } else if (pb === Ab.V.TerrainTexturesWanted) {
            var xb, ib;
            if (0 !== Bb) return this.crash(ub, `TerrainTexturesWanted at ${vb} of ${Bb} bytes`), rb;
            null === (xb = (ib = this.handlers).onTerrainTexturesWanted) || void 0 === xb || xb.call(ib)
          } else if (pb === Ab.V.KeepAliveDue) {
            var fb, mb;
            if (Bb > Ab.vb) return this.crash(ub, `KeepAliveDue at ${vb} of ${Bb} bytes`), rb;
            null === (fb = (mb = this.handlers).onKeepAlive) || void 0 === fb || fb.call(mb, new Uint8Array(Eb, Ub + bb, Bb).slice())
          } else if (pb === Ab.V.ConnectionState) {
            if (Bb !== Ab.t) return this.crash(ub, `ConnectionState at ${vb} of ${Bb} bytes`), rb;
            this.netOffsets.push(vb), Tb.push({
              type: "connection",
              conn: Nb(0),
              phase: Nb(1),
              code: 0 | Nb(2)
            })
          } else if (pb === Ab.V.EnvLighting || pb === Ab.V.SkyImages) {
            if (Bb !== (pb === Ab.V.EnvLighting ? Ab.P : Ab.cd)) return this.crash(ub, `event ${pb} at ${vb} of ${Bb} bytes`), rb;
            this.envEvents.push({
              kind: pb,
              payload: new Uint8Array(Eb.slice(Ub + bb, Ub + bb + Bb))
            })
          } else if (pb === Ab.V.ReconnectGrace) {
            if (Bb !== Ab.fc) return this.crash(ub, `ReconnectGrace at ${vb} of ${Bb} bytes`), rb;
            const bb = Nb(2);
            this.graceEvents.push({
              conn: Nb(0),
              graceMs: Nb(1),
              sessionBased: 0 !== (bb & Ab.Dc.SessionBased),
              replayOffer: 0 !== (bb & Ab.Dc.ReplayOffer)
            })
          }
          vb = bb + (0, Ab.ae)(Bb)
        }
        return Tb
      }
      forEachNetOut(bb) {
        this.forEachOut(zb, "net-out", Ab.gb.NetOutPtr, Ab.gb.NetOutLen, Ab.Lb, 0, ((ab, Ub, Mb, Tb) => {
          const Eb = (0, Ab.Td)(Ub);
          Eb === Ab.Mb.Frame ? bb((0, Ab.Rd)(Ub), Mb) : this.crash(zb, `net-out record at ${Tb} is kind ${Eb}, not a frame`)
        }))
      }
      forEachWorkerOut(bb) {
        this.forEachOut(xb, "worker-out", Ab.gb.WorkerOutPtr, Ab.gb.WorkerOutLen, Ab.od, 4, ((ab, Ub, Mb, Tb) => {
          const Eb = 255 & ab,
            Yb = Eb === Ab.Dd.Init ? this.initOf(Mb, Tb) : Mb;
          null !== Yb && bb(Eb, ab >>> 8 & 16777215, Yb)
        }))
      }
      initOf(bb, ab) {
        const Ub = this.memory().buffer;
        if (bb.byteLength !== Ab.ib) return this.crash(xb, `worker-out Init record at ${ab} is ${bb.byteLength} bytes, not a view`), null;
        const Mb = new DataView(bb.buffer, bb.byteOffset, Ab.ib),
          Tb = Mb.getUint32(0, !0),
          Eb = Mb.getUint32(4, !0);
        return Tb + Eb > Ub.byteLength ? (this.crash(xb, `worker-out Init record at ${ab} names ${Eb} bytes at ${Tb} outside ${Ub.byteLength} bytes of memory`), null) : new Uint8Array(Ub, Tb, Eb)
      }
      forEachOut(bb, ab, Ub, Mb, Tb, Eb, Yb) {
        if (this.stopped || null === this.lastHeader) return;
        const Bb = this.headerView(),
          eb = Bb[Ub],
          vb = Bb[Mb];
        if (0 === vb) return;
        const Lb = this.memory().buffer;
        if (eb % 4 !== 0 || eb + vb > Lb.byteLength) return void this.crash(bb, `${ab} of ${vb} bytes at ${eb} outside ${Lb.byteLength} bytes of memory`);
        const Pb = new DataView(Lb, eb, vb);
        let Xb = 0;
        for (; Xb < vb;) {
          const Ub = Xb + Tb,
            Mb = Ub <= vb ? Pb.getUint32(Xb + Eb, !0) : -1;
          if (Mb < 0 || Mb > vb - Ub) return void this.crash(bb, `${ab} record at ${Xb} overruns its ${vb} bytes`);
          if (Yb(Pb.getUint32(Xb, !0), Pb.getUint32(Xb + 4, !0), new Uint8Array(Lb, eb + Ub, Mb), Xb), this.stopped) return;
          Xb = Ub + (0, Ab.ae)(Mb)
        }
      }
      forEachEvent(bb) {
        if (this.stopped || null === this.lastHeader) return;
        const ab = this.headerView(),
          Ub = ab[Ab.gb.EventsPtr],
          Mb = ab[Ab.gb.EventsLen];
        if (0 === Mb) return;
        const Tb = this.memory().buffer;
        if (Ub % 4 !== 0 || Ub + Mb > Tb.byteLength) return void this.crash(ub, `events of ${Mb} bytes at ${Ub} outside ${Tb.byteLength} bytes of memory`);
        const Eb = new DataView(Tb, Ub, Mb);
        let Yb = 0;
        for (; Yb < Mb;) {
          const ab = Yb + Ab.R,
            Ub = ab <= Mb ? Eb.getUint32(Yb, !0) : -1,
            Tb = Ub >>> 16;
          if (Ub < 0 || Tb > Mb - ab) return void this.crash(ub, `event record at ${Yb} overruns its ${Mb} bytes`);
          bb(65535 & Ub, Eb, ab, Tb), Yb = ab + (0, Ab.ae)(Tb)
        }
      }
      crashOn(bb, ab) {
        ab instanceof Mb.e ? this.crash(ub, ab.message) : this.crash(bb, ab)
      }
      crash(bb, ab) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: bb,
          error: ab,
          header: this.lastHeader
        }))
      }
      headerWord(bb) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[bb]
      }
      headerView() {
        const bb = this.memory().buffer;
        return bb !== this.headerBuffer && (this.headerBuffer = bb, this.header = new Uint32Array(bb, this.core.aX(), Ab.cb)), this.header
      }
    }
  },
  40036: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb,
      g: () => Tb
    });
    var Ab = Ub(4376);
    let Mb = null;

    function Tb(bb) {
      Mb = {
        scanned: !1
      };
      try {
        return bb()
      } finally {
        Mb = null
      }
    }

    function Eb() {
      const bb = Mb;
      if (null === bb) return (0, Ab.h)();
      const ab = (0, Ab.h)(!bb.scanned);
      return bb.scanned = !0, ab
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);