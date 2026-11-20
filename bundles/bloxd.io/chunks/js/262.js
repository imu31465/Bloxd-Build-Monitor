export const id = 262;
export const ids = [262];
export const modules = {
  40411: (bb, cb, sb) => {
    function kb(bb, cb, sb) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(bb, cb).getContext("2d", sb);
      const kb = document.createElement("canvas");
      return kb.width = bb, kb.height = cb, kb.getContext("2d", sb)
    }

    function Wb(bb, cb) {
      return bb.getContext("2d", cb)
    }
    sb.d(cb, {
      c: () => Wb,
      d: () => kb
    })
  },
  40350: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Nb,
      g: () => mb,
      h: () => rb,
      j: () => Bb,
      k: () => yb,
      n: () => Pb,
      q: () => Cb,
      t: () => Qb,
      x: () => eb,
      A: () => gb,
      C: () => qb,
      E: () => ub,
      I: () => Gb,
      L: () => wb,
      P: () => Db,
      R: () => ib
    });
    var kb = sb(4512),
      Wb = sb(40070),
      ab = (sb(40223), sb(13));
    class Tb {
      constructor(bb, cb) {
        this.memory = bb, this.access = cb, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.GM = 0, this.u32 = new ab.j(0), this.f32 = new ab.g(0), this.u8 = new ab.e(0), this.dataView = new ab.h(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.GM = this.access.GM(), this.buffer = (0, ab.H)(this.memory()), this.u32 = new ab.j(this.buffer, this.ptr, this.GM >>> 2), this.f32 = new ab.g(this.buffer, this.ptr, this.GM >>> 2), this.u8 = new ab.e(this.buffer, this.ptr, this.GM), this.dataView = new ab.h(this.buffer, this.ptr, this.GM)
      }
      ensureViews() {
        (0, ab.H)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(bb) {
        return !!this.fits(bb) || (this.dropped++, !1)
      }
      fits(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const sb = cb + bb;
        return sb <= this.GM || sb <= kb.Nc && 0 !== this.access.reserve(sb) && (this.refresh(), sb <= this.GM)
      }
      consume(bb) {
        const cb = this.cursor - bb;
        cb > 0 && bb > 0 && (this.ensureViews(), this.u8.copyWithin(0, bb, this.cursor)), this.cursor = cb > 0 ? cb : 0
      }
      writeRecord(bb, cb, sb, Wb, ab) {
        if (!this.room(kb.mb)) return !1;
        const Tb = this.cursor >>> 2;
        return this.u32[Tb] = 65535 & bb | (65535 & cb) << 16, this.f32[Tb + 1] = sb, this.f32[Tb + 2] = Wb, this.u32[Tb + 3] = ab >>> 0, this.cursor += kb.mb, !0
      }
      writeOptions(bb, cb) {
        const sb = cb.byteLength,
          Wb = kb.mb + (0, kb.ze)(sb);
        if (!this.fits(Wb)) return !1;
        const ab = this.cursor,
          Tb = ab >>> 2;
        this.u32[Tb] = kb.qb.Options, this.u32[Tb + 1] = sb, this.u32[Tb + 2] = 0, this.u32[Tb + 3] = bb >>> 0;
        const Ub = ab + kb.mb;
        return this.u8.set(cb, Ub), this.u8.fill(0, Ub + sb, ab + Wb), this.cursor += Wb, !0
      }
      writeWorkerRecord(bb, cb, sb, Wb, ab, Tb) {
        const Ub = Tb.byteLength,
          Ib = kb.Sd + (0, kb.ze)(Ub);
        if (Ub > kb.Qd) return this.dropped++, !1;
        if (!this.room(Ib)) return !1;
        const Hb = this.cursor,
          fb = Hb >>> 2;
        this.u32[fb] = bb >>> 0, this.u32[fb + 1] = 65535 & cb | (65535 & sb) << 16, this.u32[fb + 2] = Wb >>> 0, this.u32[fb + 3] = ab >>> 0, this.u32[fb + 4] = Ub;
        const Mb = Hb + kb.Sd;
        return this.u8.set(Tb, Mb), this.u8.fill(0, Mb + Ub, Hb + Ib), this.cursor += Ib, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(bb, cb) {
        return this.writeNet(kb.Xb.Frame, bb, cb)
      }
      writeOpen(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(kb.Xb.Open, bb, Ib(cb))
      }
      writeClose(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(kb.Xb.Close, bb, Ib(cb))
      }
      writeNet(bb, cb, sb) {
        const Wb = sb.byteLength,
          ab = kb.Tb + (0, kb.ze)(Wb);
        if (Wb > kb.Mb) return this.dropped++, !1;
        if (!this.room(ab)) return !1;
        const Tb = this.cursor;
        this.u32[Tb >>> 2] = Wb, this.u32[1 + (Tb >>> 2)] = (0, kb.ve)(bb, cb);
        const Ub = Tb + kb.Tb;
        return this.u8.set(sb, Ub), this.u8.fill(0, Ub + Wb, Tb + ab), this.cursor += ab, !0
      }
      Bn(bb, cb, sb) {
        const Wb = kb.q + (0, kb.ze)(sb);
        if (!this.room(Wb)) return -1;
        const ab = this.cursor;
        this.u32[ab >>> 2] = 65535 & bb | (65535 & cb) << 16, this.u32[1 + (ab >>> 2)] = sb;
        const Tb = ab + kb.q;
        return this.u8.fill(0, Tb, ab + Wb), this.cursor += Wb, Tb
      }
      growForCmd(bb) {
        return this.fits(kb.q + (0, kb.ze)(bb), 0)
      }
      writeCmd(bb, cb, sb) {
        const kb = this.Bn(bb, cb, sb.byteLength);
        return !(kb < 0) && (this.u8.set(sb, kb), !0)
      }
      copyWritten(bb, cb) {
        return this.ensureViews(), this.u8.slice(bb, bb + cb)
      }
    }
    const Ub = new ab.e(0);

    function Ib(bb) {
      if (0 === bb) return Ub;
      const cb = new ab.e(kb.Pb);
      for (let sb = 0; sb < kb.Pb; sb++) cb[sb] = bb >>> 8 * sb & 255;
      return cb
    }
    class Hb {
      constructor(bb, cb) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new Tb(cb, {
          ptr: () => bb.FM(),
          GM: () => bb.Mab(),
          reserve: cb => bb.Jab(cb)
        }), this.net = new Tb(cb, {
          ptr: () => bb.uab(),
          GM: () => bb.Vab(),
          reserve: cb => bb.gab(cb)
        }), this.worker = new Tb(cb, {
          ptr: () => bb.jab(),
          GM: () => bb.Fab(),
          reserve: cb => bb.Bab(cb)
        }), this.cmd = new Tb(cb, {
          ptr: () => bb.pWb(),
          GM: () => bb.xWb(),
          reserve: cb => bb.jWb(cb)
        })
      }
      reset(bb) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(bb)
      }
    }
    var fb = sb(35945),
      Mb = sb(2310),
      Xb = sb(4507),
      nb = sb(40352);
    const mb = "coreFrame",
      lb = "fatalStatus",
      Qb = "otherCall",
      eb = "coreRings",
      Cb = "netIn",
      Nb = "abi",
      Vb = "netOut",
      Lb = "workerOut",
      ub = "worldgenHost",
      Yb = "eventWalker",
      hb = "netEvent",
      Jb = "envEvent",
      gb = "sharedTables",
      Bb = "inputAction",
      tb = new Set([Yb, hb, Jb, Bb, gb]),
      yb = "wasmMemory",
      Pb = "meshHost";

    function Db(bb, cb) {
      bb.forEachWorkerOut(((sb, Wb, ab) => {
        if ((0, kb.ke)(sb)) try {
          var Tb;
          null === (Tb = cb.worldgen) || void 0 === Tb || Tb.take(sb, ab)
        } catch (Ib) {
          bb.crash(ub, Ib)
        } else try {
          var Ub;
          null === (Ub = cb.mesh) || void 0 === Ub || Ub.take(sb, Wb, ab)
        } catch (Ib) {
          bb.crash(Pb, Ib)
        }
      }))
    }
    const Eb = 1048576;

    function ib(bb, cb) {
      let sb = !1;
      const kb = () => {
        sb = !1, cb()
      };
      return () => {
        !sb && bb.cursor >= Eb && (sb = !0, queueMicrotask(kb))
      }
    }
    const Ob = new Set([lb, Qb, ub, Pb]);

    function Gb(bb) {
      return tb.has(bb.site) ? bb.error instanceof WebAssembly.RuntimeError || (0, Wb.p)(bb.error) : !Ob.has(bb.site) && bb.error instanceof Error
    }
    const Kb = "events",
      Zb = [],
      zb = "debugLog",
      qb = "terrainTextures",
      db = "sunShadowTextures",
      Ab = new TextDecoder;

    function wb(bb, cb) {
      const {
        site: sb,
        error: Wb,
        header: ab
      } = bb, Tb = ab ? (0, kb.ge)(ab.lastError) : "noFrame", Ub = `CORE-${sb===lb?Tb:sb}`, Ib = null === Wb || void 0 === Wb ? "" : ` ${(0,fb.h)(Wb)}`, Hb = {
        site: sb,
        wasmBuild: cb.wasm,
        clientVersion: cb.client
      };
      return ab && (Hb.status = String(ab.status), Hb.lastError = Tb, Hb.lastErrorCode = String(ab.lastError), Hb.lastErrorDetail = String(ab.lastErrorDetail), Hb.errorCount = String(ab.errorCount), Hb.frameIndex = String(ab.frameIndex), Hb.tickIndex = String(ab.tickIndex)), {
        code: Ub,
        message: `core ${sb}, last error ${Tb};${Ib}`,
        details: Hb
      }
    }
    class rb {
      constructor(bb, cb, sb) {
        this.core = bb, this.memory = cb, this.handlers = sb, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: Zb,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new Hb(bb, cb)
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
          return this.core.Uab(bb)
        } catch (cb) {
          return this.crash(mb, cb), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(bb, cb) {
        var sb;
        let ab = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: Tb,
          net: Ub,
          worker: Ib,
          cmd: Hb
        } = this.rings, fb = Ub.cursor, Mb = cb && !this.drawsHeld;
        let Qb = kb.F.Fatal;
        const eb = Hb.cursor;
        let Nb = null;
        try {
          const cb = (Mb ? kb._.Draws : 0) | (ab ? kb._.NetAll : 0);
          Qb = (0, nb.g)((() => this.core.frame(bb, Tb.cursor, Ub.cursor, Ib.cursor, cb, eb)))
        } catch (Ob) {
          Nb = {
            error: Ob
          }
        }
        const Vb = null === (sb = this.gameHost) || void 0 === sb ? void 0 : sb.takeFault();
        this.rings.reset(this.stopped || null !== Nb || void 0 !== Vb ? Hb.cursor : eb);
        const Lb = null === Nb && void 0 === Vb ? this.headerView() : null,
          ub = null === Lb ? null : (0, kb.Ce)(Lb);
        null !== ub && (this.lastHeader = ub);
        const Jb = null !== ub && Qb !== kb.F.Fatal,
          gb = Jb && null !== Lb ? Lb[kb.gb.NetInKept] : 0,
          Bb = Jb && gb <= fb && gb % 4 === 0 ? gb : null;
        var tb, yb;
        null !== ub && null !== Bb && Qb === kb.F.Errors && (null === (tb = (yb = this.handlers).onErrors) || void 0 === tb || tb.call(yb, ub));
        const Pb = null === Bb ? Zb : this.readEvents(fb);
        if (Ub.consume(fb - (null !== Bb && void 0 !== Bb ? Bb : 0)), this.netKept = null !== Bb && void 0 !== Bb ? Bb : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== Nb) return this.crash(mb, void 0 === Vb || Vb instanceof Wb.e ? Nb.error : Vb), !1;
        if (void 0 !== Vb || null === ub) return this.crashOn(mb, Vb), !1;
        const Db = this.headerView()[kb.gb.FrameDraw];
        if (this.lastFrameKind = (0, Xb.g)(Mb, Db), Qb === kb.F.Fatal) return this.crash(lb, null), !1;
        if (null === Bb) return this.crash(Cb, `the core kept ${gb} of ${fb} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const bb = this.frameEvents,
            cb = this.headerView();
          bb.ptr = cb[kb.gb.EventsPtr], bb.len = cb[kb.gb.EventsLen], bb.net = Pb, bb.kind = this.lastFrameKind;
          try {
            this.eventWalker(bb)
          } catch (Ob) {
            return this.crashOn(Yb, Ob), !1
          }
          return this.handEnvEvents()
        }
        for (const kb of Pb) {
          if (this.stopped) return !1;
          try {
            var Eb, ib;
            null === (Eb = (ib = this.handlers).onNetEvent) || void 0 === Eb || Eb.call(ib, kb)
          } catch (Ob) {
            return this.crashOn(hb, Ob), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const ab of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var bb, cb;
            null === (bb = (cb = this.handlers).onReconnectGrace) || void 0 === bb || bb.call(cb, ab)
          } catch (Wb) {
            return this.crashOn(hb, Wb), !1
          }
        }
        for (const ab of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var sb, kb;
            null === (sb = (kb = this.handlers).onEnvEvent) || void 0 === sb || sb.call(kb, ab)
          } catch (Wb) {
            return this.crashOn(Jb, Wb), !1
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
          const cb = this.unsentUiPrefs;
          cb && bb.writeRecord(kb.qb.UiPrefs, 0, cb.nametagCutDistance, 0, (0, kb.Fe)(cb)) && (this.unsentUiPrefs = null);
          const sb = this.unsentEnvPrefs;
          sb && bb.writeRecord(kb.qb.EnvPrefs, (0, kb.he)(sb), sb.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const Wb = this.unsentLookPrefs;
          Wb && bb.writeRecord(kb.qb.Sensitivity, 0, Wb.mouse, Wb.touch, (0, Mb.j)(Wb.fovPercent)) && (this.unsentLookPrefs = null);
          let ab = 0;
          for (const {
              aux: kb,
              payload: Tb
            }
            of this.unsentOptions) {
            if (!bb.writeOptions(kb, Tb)) {
              if (bb.cursor > 0) break;
              this.optionsDropped++
            }
            ab++
          }
          ab > 0 && this.unsentOptions.splice(0, ab)
        } catch (cb) {
          return this.crash(eb, cb), !1
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
      queueOptions(bb, cb) {
        return !this.isStopped && (cb.byteLength > kb.cc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: bb,
          payload: cb
        }), !0))
      }
      setChunkCap(bb) {
        return this.callCore("setChunkCap", null, (cb => cb.Gab(bb)))
      }
      shedMemory(bb) {
        const cb = this.callCore("shedMemory", null, (cb => cb.wab(bb)));
        return 0 === cb ? null : cb
      }
      addDistanceInUse() {
        const bb = this.callCore("addDistanceInUse", null, (bb => bb.oWb()));
        return 0 === bb ? null : bb
      }
      setChunkAddDistance(bb, cb) {
        return this.callCore("setChunkAddDistance", !1, (sb => sb.Oab(bb, cb)))
      }
      setGameHost(bb) {
        return this.callCore("setGameHost", !1, (cb => (cb.aab(bb), this.gameHost = bb, !0)))
      }
      setAntiCheatProbes(bb) {
        return this.callCore("setAntiCheatProbes", !1, (cb => cb.Dab(bb)))
      }
      setAmbientOcclusion(bb) {
        this.callCore("setAmbientOcclusion", void 0, (cb => {
          cb.Pab(bb)
        }))
      }
      setPoseLod(bb) {
        this.callCore("setPoseLod", void 0, (cb => {
          cb.Zab(bb)
        }))
      }
      setDebugLog(bb, cb) {
        this.callCore(zb, void 0, (sb => {
          sb.EQ(bb, cb)
        }))
      }
      takeDebugLog(bb) {
        return this.callCore(zb, [], (cb => cb.iQ(bb)))
      }
      setTextureLayers(bb) {
        return this.callCore("setTextureLayers", !1, (cb => cb.Aab(bb)))
      }
      setBlockColours(bb) {
        let {
          blocks: cb,
          counts: sb,
          values: kb
        } = bb;
        return this.callCore("setBlockColours", !1, (bb => bb.hsb(cb, sb, kb)))
      }
      terrainTextureNames() {
        return this.callCore(qb, [], (bb => bb.vab()))
      }
      setTerrainTextures(bb, cb, sb, kb) {
        return this.callCore(qb, !1, (Wb => Wb.dab(bb, sb, cb, kb)))
      }
      setShaderPack(bb, cb, sb, kb, Wb, ab) {
        return this.callCore("setShaderPack", !1, (Tb => {
          var Ub, Ib;
          return null !== (Ub = null === (Ib = Tb.Zsb) || void 0 === Ib ? void 0 : Ib.call(Tb, bb, cb, sb, kb, Wb, ab)) && void 0 !== Ub && Ub
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(db, null, (bb => {
          var cb, sb;
          return null !== (cb = null === (sb = bb.rab) || void 0 === sb ? void 0 : sb.call(bb)) && void 0 !== cb ? cb : null
        }))
      }
      setSunShadowTexture(bb, cb, sb, kb, Wb) {
        this.callCore(db, void 0, (ab => {
          var Tb;
          null === (Tb = ab.qab) || void 0 === Tb || Tb.call(ab, bb, cb, sb, kb, Wb)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(db, [], (bb => {
          var cb, sb;
          return null !== (cb = null === (sb = bb.Sab) || void 0 === sb ? void 0 : sb.call(bb)) && void 0 !== cb ? cb : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(db, null, (bb => {
          var cb, sb;
          return null !== (cb = null === (sb = bb.oab) || void 0 === sb ? void 0 : sb.call(bb)) && void 0 !== cb ? cb : null
        }))
      }
      callCore(bb, cb, sb) {
        if (this.stopped) return cb;
        try {
          return sb(this.core)
        } catch (kb) {
          return this.crash(bb, kb), cb
        }
      }
      readEvents(bb) {
        this.netOffsets.length = 0;
        const cb = this.headerView(),
          sb = cb[kb.gb.EventsPtr],
          Wb = cb[kb.gb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === Wb) return Zb;
        const ab = [],
          Tb = this.memory().buffer;
        if (sb % 4 !== 0 || sb + Wb > Tb.byteLength) return this.crash(Kb, `events of ${Wb} bytes at ${sb} outside ${Tb.byteLength} bytes of memory`), Zb;
        const Ub = new DataView(Tb, sb, Wb),
          Ib = this.rings.net,
          Hb = (cb, sb) => cb + sb <= bb ? Ib.copyWritten(cb, sb) : null;
        let fb = 0;
        for (; fb < Wb;) {
          const bb = fb + kb.M,
            cb = bb <= Wb ? Ub.getUint32(fb, !0) : -1,
            Ib = cb >>> 16;
          if (cb < 0 || Ib > Wb - bb) return this.crash(Kb, `event record at ${fb} overruns its ${Wb} bytes`), Zb;
          const Jb = 65535 & cb,
            gb = cb => Ub.getUint32(bb + 4 * cb, !0);
          if (Jb === kb.P.RawMessage) {
            const bb = Ib >= kb.Pc.BYTES ? 65535 & gb(1) : -1,
              cb = bb === kb.Pc.STRING_TYPE,
              sb = Ib === (cb ? kb.Pc.STRING_TYPE_BYTES : kb.Pc.BYTES) ? Hb(gb(2), gb(3)) : null,
              Wb = cb && sb ? Hb(gb(4), gb(5)) : null;
            if (!sb || cb && !Wb) return this.crash(Kb, `RawMessage at ${fb} of ${Ib} bytes names bytes outside net-in`), Zb;
            this.netOffsets.push(fb), ab.push({
              type: "message",
              conn: gb(0),
              jT: bb,
              payloadKind: gb(1) >>> 16,
              payload: sb,
              stringType: Wb ? Ab.decode(Wb) : null
            })
          } else if (Jb === kb.P.CoreErrors) {
            var Mb, Xb;
            const bb = Ib >= 4 ? gb(0) : -1;
            if (bb < 0 || bb > kb.z.PAIRS_MAX || Ib !== 4 * (kb.z.FIXED_WORDS + kb.z.PAIR_WORDS * bb)) return this.crash(Kb, `CoreErrors at ${fb} of ${Ib} bytes`), Zb;
            const cb = [];
            for (let sb = 0; sb < bb; sb++) cb.push({
              code: gb(1 + 2 * sb),
              detail: gb(2 + 2 * sb)
            });
            null === (Mb = (Xb = this.handlers).onCoreErrors) || void 0 === Mb || Mb.call(Xb, cb, gb(1 + 2 * bb))
          } else if (Jb === kb.P.RenderReload) {
            var nb, mb;
            if (Ib !== kb.cd.BYTES) return this.crash(Kb, `RenderReload at ${fb} of ${Ib} bytes`), Zb;
            null === (nb = (mb = this.handlers).onRenderReload) || void 0 === nb || nb.call(mb, gb(0), gb(1), gb(2))
          } else if (Jb === kb.P.Images) {
            var lb, Qb;
            null === (lb = (Qb = this.handlers).onImages) || void 0 === lb || lb.call(Qb, new Uint8Array(Tb.slice(sb + bb, sb + bb + Ib)))
          } else if (Jb === kb.P.ModelRequests)
            for (let sb = 0; sb < Ib >>> 2; sb++) {
              var eb, Cb;
              null === (eb = (Cb = this.handlers).onModelRequest) || void 0 === eb || eb.call(Cb, gb(sb))
            } else if (Jb === kb.P.ModelTaken) {
              var Nb, Vb;
              if (Ib < 4) return this.crash(Kb, `ModelTaken at ${fb} of ${Ib} bytes`), Zb;
              const bb = new Uint32Array((Ib >>> 2) - 1);
              for (let cb = 0; cb < bb.length; cb++) bb[cb] = gb(1 + cb);
              null === (Nb = (Vb = this.handlers).onModelTaken) || void 0 === Nb || Nb.call(Vb, gb(0), bb)
            } else if (Jb === kb.P.TerrainTexturesWanted) {
            var Lb, ub;
            if (0 !== Ib) return this.crash(Kb, `TerrainTexturesWanted at ${fb} of ${Ib} bytes`), Zb;
            null === (Lb = (ub = this.handlers).onTerrainTexturesWanted) || void 0 === Lb || Lb.call(ub)
          } else if (Jb === kb.P.KeepAliveDue) {
            var Yb, hb;
            if (Ib > kb.vb) return this.crash(Kb, `KeepAliveDue at ${fb} of ${Ib} bytes`), Zb;
            null === (Yb = (hb = this.handlers).onKeepAlive) || void 0 === Yb || Yb.call(hb, new Uint8Array(Tb, sb + bb, Ib).slice())
          } else if (Jb === kb.P.ConnectionState) {
            if (Ib !== kb.r) return this.crash(Kb, `ConnectionState at ${fb} of ${Ib} bytes`), Zb;
            this.netOffsets.push(fb), ab.push({
              type: "connection",
              conn: gb(0),
              phase: gb(1),
              code: 0 | gb(2)
            })
          } else if (Jb === kb.P.EnvLighting || Jb === kb.P.SkyImages) {
            if (Ib !== (Jb === kb.P.EnvLighting ? kb.K : kb.Bd)) return this.crash(Kb, `event ${Jb} at ${fb} of ${Ib} bytes`), Zb;
            this.envEvents.push({
              kind: Jb,
              payload: new Uint8Array(Tb.slice(sb + bb, sb + bb + Ib))
            })
          } else if (Jb === kb.P.ReconnectGrace) {
            if (Ib !== kb.sc) return this.crash(Kb, `ReconnectGrace at ${fb} of ${Ib} bytes`), Zb;
            const bb = gb(2);
            this.graceEvents.push({
              conn: gb(0),
              graceMs: gb(1),
              sessionBased: 0 !== (bb & kb.Tc.SessionBased),
              replayOffer: 0 !== (bb & kb.Tc.ReplayOffer)
            })
          }
          fb = bb + (0, kb.ze)(Ib)
        }
        return ab
      }
      forEachNetOut(bb) {
        this.forEachOut(Vb, "net-out", kb.gb.NetOutPtr, kb.gb.NetOutLen, kb.Tb, 0, ((cb, sb, Wb, ab) => {
          const Tb = (0, kb.se)(sb);
          Tb === kb.Xb.Frame ? bb((0, kb.oe)(sb), Wb) : this.crash(Vb, `net-out record at ${ab} is kind ${Tb}, not a frame`)
        }))
      }
      forEachWorkerOut(bb) {
        this.forEachOut(Lb, "worker-out", kb.gb.WorkerOutPtr, kb.gb.WorkerOutLen, kb.Od, 4, ((cb, sb, Wb, ab) => {
          const Tb = 255 & cb,
            Ub = Tb === kb.$d.Init ? this.initOf(Wb, ab) : Wb;
          null !== Ub && bb(Tb, cb >>> 8 & 16777215, Ub)
        }))
      }
      initOf(bb, cb) {
        const sb = this.memory().buffer;
        if (bb.byteLength !== kb.ib) return this.crash(Lb, `worker-out Init record at ${cb} is ${bb.byteLength} bytes, not a view`), null;
        const Wb = new DataView(bb.buffer, bb.byteOffset, kb.ib),
          ab = Wb.getUint32(0, !0),
          Tb = Wb.getUint32(4, !0);
        return ab + Tb > sb.byteLength ? (this.crash(Lb, `worker-out Init record at ${cb} names ${Tb} bytes at ${ab} outside ${sb.byteLength} bytes of memory`), null) : new Uint8Array(sb, ab, Tb)
      }
      forEachOut(bb, cb, sb, Wb, ab, Tb, Ub) {
        if (this.stopped || null === this.lastHeader) return;
        const Ib = this.headerView(),
          Hb = Ib[sb],
          fb = Ib[Wb];
        if (0 === fb) return;
        const Mb = this.memory().buffer;
        if (Hb % 4 !== 0 || Hb + fb > Mb.byteLength) return void this.crash(bb, `${cb} of ${fb} bytes at ${Hb} outside ${Mb.byteLength} bytes of memory`);
        const Xb = new DataView(Mb, Hb, fb);
        let nb = 0;
        for (; nb < fb;) {
          const sb = nb + ab,
            Wb = sb <= fb ? Xb.getUint32(nb + Tb, !0) : -1;
          if (Wb < 0 || Wb > fb - sb) return void this.crash(bb, `${cb} record at ${nb} overruns its ${fb} bytes`);
          if (Ub(Xb.getUint32(nb, !0), Xb.getUint32(nb + 4, !0), new Uint8Array(Mb, Hb + sb, Wb), nb), this.stopped) return;
          nb = sb + (0, kb.ze)(Wb)
        }
      }
      forEachEvent(bb) {
        if (this.stopped || null === this.lastHeader) return;
        const cb = this.headerView(),
          sb = cb[kb.gb.EventsPtr],
          Wb = cb[kb.gb.EventsLen];
        if (0 === Wb) return;
        const ab = this.memory().buffer;
        if (sb % 4 !== 0 || sb + Wb > ab.byteLength) return void this.crash(Kb, `events of ${Wb} bytes at ${sb} outside ${ab.byteLength} bytes of memory`);
        const Tb = new DataView(ab, sb, Wb);
        let Ub = 0;
        for (; Ub < Wb;) {
          const cb = Ub + kb.M,
            sb = cb <= Wb ? Tb.getUint32(Ub, !0) : -1,
            ab = sb >>> 16;
          if (sb < 0 || ab > Wb - cb) return void this.crash(Kb, `event record at ${Ub} overruns its ${Wb} bytes`);
          bb(65535 & sb, Tb, cb, ab), Ub = cb + (0, kb.ze)(ab)
        }
      }
      crashOn(bb, cb) {
        cb instanceof Wb.e ? this.crash(Kb, cb.message) : this.crash(bb, cb)
      }
      crash(bb, cb) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: bb,
          error: cb,
          header: this.lastHeader
        }))
      }
      headerWord(bb) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[bb]
      }
      headerView() {
        const bb = this.memory().buffer;
        return bb !== this.headerBuffer && (this.headerBuffer = bb, this.header = new Uint32Array(bb, this.core.tn(), kb.cb)), this.header
      }
    }
  },
  40352: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb,
      g: () => ab
    });
    var kb = sb(4425);
    let Wb = null;

    function ab(bb) {
      Wb = {
        scanned: !1
      };
      try {
        return bb()
      } finally {
        Wb = null
      }
    }

    function Tb() {
      const bb = Wb;
      if (null === bb) return (0, kb.f)();
      const cb = (0, kb.f)(!bb.scanned);
      return bb.scanned = !0, cb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);