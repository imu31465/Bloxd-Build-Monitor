export const id = 263;
export const ids = [263];
export const modules = {
  40417: (bb, ub, hb) => {
    function Bb(bb, ub, hb) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(bb, ub).getContext("2d", hb);
      const Bb = document.createElement("canvas");
      return Bb.width = bb, Bb.height = ub, Bb.getContext("2d", hb)
    }

    function Ob(bb, ub) {
      return bb.getContext("2d", ub)
    }
    hb.d(ub, {
      c: () => Ob,
      g: () => Bb
    })
  },
  40351: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Kb,
      e: () => Xb,
      g: () => yb,
      k: () => xb,
      m: () => gb,
      o: () => ib,
      s: () => lb,
      t: () => ob,
      v: () => Ab,
      w: () => Db,
      y: () => Ib,
      z: () => db,
      A: () => Nb,
      E: () => Eb,
      H: () => vb,
      I: () => Jb
    });
    var Bb = hb(4555),
      Ob = hb(40095),
      Gb = (hb(40238), hb(6));
    class Ub {
      constructor(bb, ub) {
        this.memory = bb, this.access = ub, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.LH = 0, this.u32 = new Gb.m(0), this.f32 = new Gb.e(0), this.u8 = new Gb.c(0), this.dataView = new Gb.i(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.LH = this.access.LH(), this.buffer = (0, Gb.E)(this.memory()), this.u32 = new Gb.m(this.buffer, this.ptr, this.LH >>> 2), this.f32 = new Gb.e(this.buffer, this.ptr, this.LH >>> 2), this.u8 = new Gb.c(this.buffer, this.ptr, this.LH), this.dataView = new Gb.i(this.buffer, this.ptr, this.LH)
      }
      ensureViews() {
        (0, Gb.E)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(bb) {
        return !!this.fits(bb) || (this.dropped++, !1)
      }
      fits(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const hb = ub + bb;
        return hb <= this.LH || hb <= Bb.vc && 0 !== this.access.reserve(hb) && (this.refresh(), hb <= this.LH)
      }
      consume(bb) {
        const ub = this.cursor - bb;
        ub > 0 && bb > 0 && (this.ensureViews(), this.u8.copyWithin(0, bb, this.cursor)), this.cursor = ub > 0 ? ub : 0
      }
      writeRecord(bb, ub, hb, Ob, Gb) {
        if (!this.room(Bb.kb)) return !1;
        const Ub = this.cursor >>> 2;
        return this.u32[Ub] = 65535 & bb | (65535 & ub) << 16, this.f32[Ub + 1] = hb, this.f32[Ub + 2] = Ob, this.u32[Ub + 3] = Gb >>> 0, this.cursor += Bb.kb, !0
      }
      writeOptions(bb, ub) {
        const hb = ub.byteLength,
          Ob = Bb.kb + (0, Bb.Xd)(hb);
        if (!this.fits(Ob)) return !1;
        const Gb = this.cursor,
          Ub = Gb >>> 2;
        this.u32[Ub] = Bb.mb.Options, this.u32[Ub + 1] = hb, this.u32[Ub + 2] = 0, this.u32[Ub + 3] = bb >>> 0;
        const Lb = Gb + Bb.kb;
        return this.u8.set(ub, Lb), this.u8.fill(0, Lb + hb, Gb + Ob), this.cursor += Ob, !0
      }
      writeWorkerRecord(bb, ub, hb, Ob, Gb, Ub) {
        const Lb = Ub.byteLength,
          Yb = Bb.vd + (0, Bb.Xd)(Lb);
        if (Lb > Bb.td) return this.dropped++, !1;
        if (!this.room(Yb)) return !1;
        const Sb = this.cursor,
          ab = Sb >>> 2;
        this.u32[ab] = bb >>> 0, this.u32[ab + 1] = 65535 & ub | (65535 & hb) << 16, this.u32[ab + 2] = Ob >>> 0, this.u32[ab + 3] = Gb >>> 0, this.u32[ab + 4] = Lb;
        const Hb = Sb + Bb.vd;
        return this.u8.set(Ub, Hb), this.u8.fill(0, Hb + Lb, Sb + Yb), this.cursor += Yb, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(bb, ub) {
        return this.writeNet(Bb.Mb.Frame, bb, ub)
      }
      writeOpen(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Bb.Mb.Open, bb, Yb(ub))
      }
      writeClose(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Bb.Mb.Close, bb, Yb(ub))
      }
      writeNet(bb, ub, hb) {
        const Ob = hb.byteLength,
          Gb = Bb.Ib + (0, Bb.Xd)(Ob);
        if (Ob > Bb.Db) return this.dropped++, !1;
        if (!this.room(Gb)) return !1;
        const Ub = this.cursor;
        this.u32[Ub >>> 2] = Ob, this.u32[1 + (Ub >>> 2)] = (0, Bb.Ud)(bb, ub);
        const Lb = Ub + Bb.Ib;
        return this.u8.set(hb, Lb), this.u8.fill(0, Lb + Ob, Ub + Gb), this.cursor += Gb, !0
      }
      kw(bb, ub, hb) {
        const Ob = Bb.q + (0, Bb.Xd)(hb);
        if (!this.room(Ob)) return -1;
        const Gb = this.cursor;
        this.u32[Gb >>> 2] = 65535 & bb | (65535 & ub) << 16, this.u32[1 + (Gb >>> 2)] = hb;
        const Ub = Gb + Bb.q;
        return this.u8.fill(0, Ub, Gb + Ob), this.cursor += Ob, Ub
      }
      growForCmd(bb) {
        return this.fits(Bb.q + (0, Bb.Xd)(bb), 0)
      }
      writeCmd(bb, ub, hb) {
        const Bb = this.kw(bb, ub, hb.byteLength);
        return !(Bb < 0) && (this.u8.set(hb, Bb), !0)
      }
      copyWritten(bb, ub) {
        return this.ensureViews(), this.u8.slice(bb, bb + ub)
      }
    }
    const Lb = new Gb.c(0);

    function Yb(bb) {
      if (0 === bb) return Lb;
      const ub = new Gb.c(Bb.Fb);
      for (let hb = 0; hb < Bb.Fb; hb++) ub[hb] = bb >>> 8 * hb & 255;
      return ub
    }
    class Sb {
      constructor(bb, ub) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new Ub(ub, {
          ptr: () => bb.WH(),
          LH: () => bb.sGb(),
          reserve: ub => bb.kGb(ub)
        }), this.net = new Ub(ub, {
          ptr: () => bb.VGb(),
          LH: () => bb.yGb(),
          reserve: ub => bb.TGb(ub)
        }), this.worker = new Ub(ub, {
          ptr: () => bb.AUb(),
          LH: () => bb.oUb(),
          reserve: ub => bb.cGb(ub)
        }), this.cmd = new Ub(ub, {
          ptr: () => bb.xGb(),
          LH: () => bb.nGb(),
          reserve: ub => bb.DGb(ub)
        })
      }
      reset(bb) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(bb)
      }
    }
    var ab = hb(35925),
      Hb = hb(2276),
      wb = hb(4547),
      Zb = hb(40356);
    const Xb = "coreFrame",
      pb = "fatalStatus",
      ob = "otherCall",
      Ab = "coreRings",
      lb = "netIn",
      Kb = "abi",
      Wb = "netOut",
      Cb = "workerOut",
      db = "worldgenHost",
      rb = "eventWalker",
      jb = "netEvent",
      nb = "envEvent",
      Db = "sharedTables",
      xb = "inputAction",
      zb = new Set([rb, jb, nb, xb, Db]),
      gb = "wasmMemory",
      ib = "meshHost";

    function vb(bb, ub) {
      bb.forEachWorkerOut(((hb, Ob, Gb) => {
        if ((0, Bb.Od)(hb)) try {
          var Ub;
          null === (Ub = ub.worldgen) || void 0 === Ub || Ub.take(hb, Gb)
        } catch (Yb) {
          bb.crash(db, Yb)
        } else try {
          var Lb;
          null === (Lb = ub.mesh) || void 0 === Lb || Lb.take(hb, Ob, Gb)
        } catch (Yb) {
          bb.crash(ib, Yb)
        }
      }))
    }
    const tb = 1048576;

    function Jb(bb, ub) {
      let hb = !1;
      const Bb = () => {
        hb = !1, ub()
      };
      return () => {
        !hb && bb.cursor >= tb && (hb = !0, queueMicrotask(Bb))
      }
    }
    const eb = new Set([pb, ob, db, ib]);

    function Nb(bb) {
      return zb.has(bb.site) ? bb.error instanceof WebAssembly.RuntimeError || (0, Ob.m)(bb.error) : !eb.has(bb.site) && bb.error instanceof Error
    }
    const sb = "events",
      Mb = [],
      mb = "debugLog",
      Ib = "terrainTextures",
      Pb = "sunShadowTextures",
      qb = new TextDecoder;

    function Eb(bb, ub) {
      const {
        site: hb,
        error: Ob,
        header: Gb
      } = bb, Ub = Gb ? (0, Bb.Md)(Gb.lastError) : "noFrame", Lb = `CORE-${hb===pb?Ub:hb}`, Yb = null === Ob || void 0 === Ob ? "" : ` ${(0,ab.l)(Ob)}`, Sb = {
        site: hb,
        wasmBuild: ub.wasm,
        clientVersion: ub.client
      };
      return Gb && (Sb.status = String(Gb.status), Sb.lastError = Ub, Sb.lastErrorCode = String(Gb.lastError), Sb.lastErrorDetail = String(Gb.lastErrorDetail), Sb.errorCount = String(Gb.errorCount), Sb.frameIndex = String(Gb.frameIndex), Sb.tickIndex = String(Gb.tickIndex)), {
        code: Lb,
        message: `core ${hb}, last error ${Ub};${Yb}`,
        details: Sb
      }
    }
    class yb {
      constructor(bb, ub, hb) {
        this.core = bb, this.memory = ub, this.handlers = hb, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: Mb,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new Sb(bb, ub)
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
          return this.core.JGb(bb)
        } catch (ub) {
          return this.crash(Xb, ub), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(bb, ub) {
        var hb;
        let Gb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: Ub,
          net: Lb,
          worker: Yb,
          cmd: Sb
        } = this.rings, ab = Lb.cursor, Hb = ub && !this.drawsHeld;
        let ob = Bb.M.Fatal;
        const Ab = Sb.cursor;
        let Kb = null;
        try {
          const ub = (Hb ? Bb._.Draws : 0) | (Gb ? Bb._.NetAll : 0);
          ob = (0, Zb.d)((() => this.core.frame(bb, Ub.cursor, Lb.cursor, Yb.cursor, ub, Ab)))
        } catch (eb) {
          Kb = {
            error: eb
          }
        }
        const Wb = null === (hb = this.gameHost) || void 0 === hb ? void 0 : hb.takeFault();
        this.rings.reset(this.stopped || null !== Kb || void 0 !== Wb ? Sb.cursor : Ab);
        const Cb = null === Kb && void 0 === Wb ? this.headerView() : null,
          db = null === Cb ? null : (0, Bb._d)(Cb);
        null !== db && (this.lastHeader = db);
        const nb = null !== db && ob !== Bb.M.Fatal,
          Db = nb && null !== Cb ? Cb[Bb.eb.NetInKept] : 0,
          xb = nb && Db <= ab && Db % 4 === 0 ? Db : null;
        var zb, gb;
        null !== db && null !== xb && ob === Bb.M.Errors && (null === (zb = (gb = this.handlers).onErrors) || void 0 === zb || zb.call(gb, db));
        const ib = null === xb ? Mb : this.readEvents(ab);
        if (Lb.consume(ab - (null !== xb && void 0 !== xb ? xb : 0)), this.netKept = null !== xb && void 0 !== xb ? xb : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== Kb) return this.crash(Xb, void 0 === Wb || Wb instanceof Ob.d ? Kb.error : Wb), !1;
        if (void 0 !== Wb || null === db) return this.crashOn(Xb, Wb), !1;
        const vb = this.headerView()[Bb.eb.FrameDraw];
        if (this.lastFrameKind = (0, wb.h)(Hb, vb), ob === Bb.M.Fatal) return this.crash(pb, null), !1;
        if (null === xb) return this.crash(lb, `the core kept ${Db} of ${ab} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const bb = this.frameEvents,
            ub = this.headerView();
          bb.ptr = ub[Bb.eb.EventsPtr], bb.len = ub[Bb.eb.EventsLen], bb.net = ib, bb.kind = this.lastFrameKind;
          try {
            this.eventWalker(bb)
          } catch (eb) {
            return this.crashOn(rb, eb), !1
          }
          return this.handEnvEvents()
        }
        for (const Bb of ib) {
          if (this.stopped) return !1;
          try {
            var tb, Jb;
            null === (tb = (Jb = this.handlers).onNetEvent) || void 0 === tb || tb.call(Jb, Bb)
          } catch (eb) {
            return this.crashOn(jb, eb), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const Gb of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var bb, ub;
            null === (bb = (ub = this.handlers).onReconnectGrace) || void 0 === bb || bb.call(ub, Gb)
          } catch (Ob) {
            return this.crashOn(jb, Ob), !1
          }
        }
        for (const Gb of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var hb, Bb;
            null === (hb = (Bb = this.handlers).onEnvEvent) || void 0 === hb || hb.call(Bb, Gb)
          } catch (Ob) {
            return this.crashOn(nb, Ob), !1
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
          const ub = this.unsentUiPrefs;
          ub && bb.writeRecord(Bb.mb.UiPrefs, 0, ub.nametagCutDistance, 0, (0, Bb.ce)(ub)) && (this.unsentUiPrefs = null);
          const hb = this.unsentEnvPrefs;
          hb && bb.writeRecord(Bb.mb.EnvPrefs, (0, Bb.Nd)(hb), hb.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const Ob = this.unsentLookPrefs;
          Ob && bb.writeRecord(Bb.mb.Sensitivity, 0, Ob.mouse, Ob.touch, (0, Hb.m)(Ob.fovPercent)) && (this.unsentLookPrefs = null);
          let Gb = 0;
          for (const {
              aux: Bb,
              payload: Ub
            }
            of this.unsentOptions) {
            if (!bb.writeOptions(Bb, Ub)) {
              if (bb.cursor > 0) break;
              this.optionsDropped++
            }
            Gb++
          }
          Gb > 0 && this.unsentOptions.splice(0, Gb)
        } catch (ub) {
          return this.crash(Ab, ub), !1
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
      queueOptions(bb, ub) {
        return !this.isStopped && (ub.byteLength > Bb.Qb.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: bb,
          payload: ub
        }), !0))
      }
      setChunkCap(bb) {
        return this.callCore("setChunkCap", null, (ub => ub.BUb(bb)))
      }
      shedMemory(bb) {
        const ub = this.callCore("shedMemory", null, (ub => ub.aUb(bb)));
        return 0 === ub ? null : ub
      }
      addDistanceInUse() {
        const bb = this.callCore("addDistanceInUse", null, (bb => bb.WGb()));
        return 0 === bb ? null : bb
      }
      setChunkAddDistance(bb, ub) {
        return this.callCore("setChunkAddDistance", !1, (hb => hb.hUb(bb, ub)))
      }
      setGameHost(bb) {
        return this.callCore("setGameHost", !1, (ub => (ub.tGb(bb), this.gameHost = bb, !0)))
      }
      setAntiCheatProbes(bb) {
        return this.callCore("setAntiCheatProbes", !1, (ub => ub.bUb(bb)))
      }
      setAmbientOcclusion(bb) {
        this.callCore("setAmbientOcclusion", void 0, (ub => {
          ub.RGb(bb)
        }))
      }
      setPoseLod(bb) {
        this.callCore("setPoseLod", void 0, (ub => {
          ub.GUb(bb)
        }))
      }
      setDebugLog(bb, ub) {
        this.callCore(mb, void 0, (hb => {
          hb.po(bb, ub)
        }))
      }
      takeDebugLog(bb) {
        return this.callCore(mb, [], (ub => ub.oo(bb)))
      }
      setTextureLayers(bb) {
        return this.callCore("setTextureLayers", !1, (ub => ub.SUb(bb)))
      }
      setBlockColours(bb) {
        let {
          blocks: ub,
          counts: hb,
          values: Bb
        } = bb;
        return this.callCore("setBlockColours", !1, (bb => bb.BBb(ub, hb, Bb)))
      }
      terrainTextureNames() {
        return this.callCore(Ib, [], (bb => bb.pUb()))
      }
      setTerrainTextures(bb, ub, hb, Bb) {
        return this.callCore(Ib, !1, (Ob => Ob.YUb(bb, hb, ub, Bb)))
      }
      setShaderPack(bb, ub, hb, Bb, Ob, Gb) {
        return this.callCore("setShaderPack", !1, (Ub => {
          var Lb, Yb;
          return null !== (Lb = null === (Yb = Ub.oBb) || void 0 === Yb ? void 0 : Yb.call(Ub, bb, ub, hb, Bb, Ob, Gb)) && void 0 !== Lb && Lb
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(Pb, null, (bb => {
          var ub, hb;
          return null !== (ub = null === (hb = bb.HUb) || void 0 === hb ? void 0 : hb.call(bb)) && void 0 !== ub ? ub : null
        }))
      }
      setSunShadowTexture(bb, ub, hb, Bb, Ob) {
        this.callCore(Pb, void 0, (Gb => {
          var Ub;
          null === (Ub = Gb.LUb) || void 0 === Ub || Ub.call(Gb, bb, ub, hb, Bb, Ob)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(Pb, [], (bb => {
          var ub, hb;
          return null !== (ub = null === (hb = bb.ZUb) || void 0 === hb ? void 0 : hb.call(bb)) && void 0 !== ub ? ub : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(Pb, null, (bb => {
          var ub, hb;
          return null !== (ub = null === (hb = bb.wUb) || void 0 === hb ? void 0 : hb.call(bb)) && void 0 !== ub ? ub : null
        }))
      }
      callCore(bb, ub, hb) {
        if (this.stopped) return ub;
        try {
          return hb(this.core)
        } catch (Bb) {
          return this.crash(bb, Bb), ub
        }
      }
      readEvents(bb) {
        this.netOffsets.length = 0;
        const ub = this.headerView(),
          hb = ub[Bb.eb.EventsPtr],
          Ob = ub[Bb.eb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === Ob) return Mb;
        const Gb = [],
          Ub = this.memory().buffer;
        if (hb % 4 !== 0 || hb + Ob > Ub.byteLength) return this.crash(sb, `events of ${Ob} bytes at ${hb} outside ${Ub.byteLength} bytes of memory`), Mb;
        const Lb = new DataView(Ub, hb, Ob),
          Yb = this.rings.net,
          Sb = (ub, hb) => ub + hb <= bb ? Yb.copyWritten(ub, hb) : null;
        let ab = 0;
        for (; ab < Ob;) {
          const bb = ab + Bb.U,
            ub = bb <= Ob ? Lb.getUint32(ab, !0) : -1,
            Yb = ub >>> 16;
          if (ub < 0 || Yb > Ob - bb) return this.crash(sb, `event record at ${ab} overruns its ${Ob} bytes`), Mb;
          const nb = 65535 & ub,
            Db = ub => Lb.getUint32(bb + 4 * ub, !0);
          if (nb === Bb.V.RawMessage) {
            const bb = Yb >= Bb.wc.BYTES ? 65535 & Db(1) : -1,
              ub = bb === Bb.wc.STRING_TYPE,
              hb = Yb === (ub ? Bb.wc.STRING_TYPE_BYTES : Bb.wc.BYTES) ? Sb(Db(2), Db(3)) : null,
              Ob = ub && hb ? Sb(Db(4), Db(5)) : null;
            if (!hb || ub && !Ob) return this.crash(sb, `RawMessage at ${ab} of ${Yb} bytes names bytes outside net-in`), Mb;
            this.netOffsets.push(ab), Gb.push({
              type: "message",
              conn: Db(0),
              XS: bb,
              payloadKind: Db(1) >>> 16,
              payload: hb,
              stringType: Ob ? qb.decode(Ob) : null
            })
          } else if (nb === Bb.V.CoreErrors) {
            var Hb, wb;
            const bb = Yb >= 4 ? Db(0) : -1;
            if (bb < 0 || bb > Bb.H.PAIRS_MAX || Yb !== 4 * (Bb.H.FIXED_WORDS + Bb.H.PAIR_WORDS * bb)) return this.crash(sb, `CoreErrors at ${ab} of ${Yb} bytes`), Mb;
            const ub = [];
            for (let hb = 0; hb < bb; hb++) ub.push({
              code: Db(1 + 2 * hb),
              detail: Db(2 + 2 * hb)
            });
            null === (Hb = (wb = this.handlers).onCoreErrors) || void 0 === Hb || Hb.call(wb, ub, Db(1 + 2 * bb))
          } else if (nb === Bb.V.RenderReload) {
            var Zb, Xb;
            if (Yb !== Bb.Jc.BYTES) return this.crash(sb, `RenderReload at ${ab} of ${Yb} bytes`), Mb;
            null === (Zb = (Xb = this.handlers).onRenderReload) || void 0 === Zb || Zb.call(Xb, Db(0), Db(1), Db(2))
          } else if (nb === Bb.V.Images) {
            var pb, ob;
            null === (pb = (ob = this.handlers).onImages) || void 0 === pb || pb.call(ob, new Uint8Array(Ub.slice(hb + bb, hb + bb + Yb)))
          } else if (nb === Bb.V.ModelRequests)
            for (let hb = 0; hb < Yb >>> 2; hb++) {
              var Ab, lb;
              null === (Ab = (lb = this.handlers).onModelRequest) || void 0 === Ab || Ab.call(lb, Db(hb))
            } else if (nb === Bb.V.ModelTaken) {
              var Kb, Wb;
              if (Yb < 4) return this.crash(sb, `ModelTaken at ${ab} of ${Yb} bytes`), Mb;
              const bb = new Uint32Array((Yb >>> 2) - 1);
              for (let ub = 0; ub < bb.length; ub++) bb[ub] = Db(1 + ub);
              null === (Kb = (Wb = this.handlers).onModelTaken) || void 0 === Kb || Kb.call(Wb, Db(0), bb)
            } else if (nb === Bb.V.TerrainTexturesWanted) {
            var Cb, db;
            if (0 !== Yb) return this.crash(sb, `TerrainTexturesWanted at ${ab} of ${Yb} bytes`), Mb;
            null === (Cb = (db = this.handlers).onTerrainTexturesWanted) || void 0 === Cb || Cb.call(db)
          } else if (nb === Bb.V.KeepAliveDue) {
            var rb, jb;
            if (Yb > Bb.tb) return this.crash(sb, `KeepAliveDue at ${ab} of ${Yb} bytes`), Mb;
            null === (rb = (jb = this.handlers).onKeepAlive) || void 0 === rb || rb.call(jb, new Uint8Array(Ub, hb + bb, Yb).slice())
          } else if (nb === Bb.V.ConnectionState) {
            if (Yb !== Bb.s) return this.crash(sb, `ConnectionState at ${ab} of ${Yb} bytes`), Mb;
            this.netOffsets.push(ab), Gb.push({
              type: "connection",
              conn: Db(0),
              phase: Db(1),
              code: 0 | Db(2)
            })
          } else if (nb === Bb.V.EnvLighting || nb === Bb.V.SkyImages) {
            if (Yb !== (nb === Bb.V.EnvLighting ? Bb.S : Bb.$c)) return this.crash(sb, `event ${nb} at ${ab} of ${Yb} bytes`), Mb;
            this.envEvents.push({
              kind: nb,
              payload: new Uint8Array(Ub.slice(hb + bb, hb + bb + Yb))
            })
          } else if (nb === Bb.V.ReconnectGrace) {
            if (Yb !== Bb.hc) return this.crash(sb, `ReconnectGrace at ${ab} of ${Yb} bytes`), Mb;
            const bb = Db(2);
            this.graceEvents.push({
              conn: Db(0),
              graceMs: Db(1),
              sessionBased: 0 !== (bb & Bb.zc.SessionBased),
              replayOffer: 0 !== (bb & Bb.zc.ReplayOffer)
            })
          }
          ab = bb + (0, Bb.Xd)(Yb)
        }
        return Gb
      }
      forEachNetOut(bb) {
        this.forEachOut(Wb, "net-out", Bb.eb.NetOutPtr, Bb.eb.NetOutLen, Bb.Ib, 0, ((ub, hb, Ob, Gb) => {
          const Ub = (0, Bb.Td)(hb);
          Ub === Bb.Mb.Frame ? bb((0, Bb.Rd)(hb), Ob) : this.crash(Wb, `net-out record at ${Gb} is kind ${Ub}, not a frame`)
        }))
      }
      forEachWorkerOut(bb) {
        this.forEachOut(Cb, "worker-out", Bb.eb.WorkerOutPtr, Bb.eb.WorkerOutLen, Bb.qd, 4, ((ub, hb, Ob, Gb) => {
          const Ub = 255 & ub,
            Lb = Ub === Bb.Gd.Init ? this.initOf(Ob, Gb) : Ob;
          null !== Lb && bb(Ub, ub >>> 8 & 16777215, Lb)
        }))
      }
      initOf(bb, ub) {
        const hb = this.memory().buffer;
        if (bb.byteLength !== Bb.fb) return this.crash(Cb, `worker-out Init record at ${ub} is ${bb.byteLength} bytes, not a view`), null;
        const Ob = new DataView(bb.buffer, bb.byteOffset, Bb.fb),
          Gb = Ob.getUint32(0, !0),
          Ub = Ob.getUint32(4, !0);
        return Gb + Ub > hb.byteLength ? (this.crash(Cb, `worker-out Init record at ${ub} names ${Ub} bytes at ${Gb} outside ${hb.byteLength} bytes of memory`), null) : new Uint8Array(hb, Gb, Ub)
      }
      forEachOut(bb, ub, hb, Ob, Gb, Ub, Lb) {
        if (this.stopped || null === this.lastHeader) return;
        const Yb = this.headerView(),
          Sb = Yb[hb],
          ab = Yb[Ob];
        if (0 === ab) return;
        const Hb = this.memory().buffer;
        if (Sb % 4 !== 0 || Sb + ab > Hb.byteLength) return void this.crash(bb, `${ub} of ${ab} bytes at ${Sb} outside ${Hb.byteLength} bytes of memory`);
        const wb = new DataView(Hb, Sb, ab);
        let Zb = 0;
        for (; Zb < ab;) {
          const hb = Zb + Gb,
            Ob = hb <= ab ? wb.getUint32(Zb + Ub, !0) : -1;
          if (Ob < 0 || Ob > ab - hb) return void this.crash(bb, `${ub} record at ${Zb} overruns its ${ab} bytes`);
          if (Lb(wb.getUint32(Zb, !0), wb.getUint32(Zb + 4, !0), new Uint8Array(Hb, Sb + hb, Ob), Zb), this.stopped) return;
          Zb = hb + (0, Bb.Xd)(Ob)
        }
      }
      forEachEvent(bb) {
        if (this.stopped || null === this.lastHeader) return;
        const ub = this.headerView(),
          hb = ub[Bb.eb.EventsPtr],
          Ob = ub[Bb.eb.EventsLen];
        if (0 === Ob) return;
        const Gb = this.memory().buffer;
        if (hb % 4 !== 0 || hb + Ob > Gb.byteLength) return void this.crash(sb, `events of ${Ob} bytes at ${hb} outside ${Gb.byteLength} bytes of memory`);
        const Ub = new DataView(Gb, hb, Ob);
        let Lb = 0;
        for (; Lb < Ob;) {
          const ub = Lb + Bb.U,
            hb = ub <= Ob ? Ub.getUint32(Lb, !0) : -1,
            Gb = hb >>> 16;
          if (hb < 0 || Gb > Ob - ub) return void this.crash(sb, `event record at ${Lb} overruns its ${Ob} bytes`);
          bb(65535 & hb, Ub, ub, Gb), Lb = ub + (0, Bb.Xd)(Gb)
        }
      }
      crashOn(bb, ub) {
        ub instanceof Ob.d ? this.crash(sb, ub.message) : this.crash(bb, ub)
      }
      crash(bb, ub) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: bb,
          error: ub,
          header: this.lastHeader
        }))
      }
      headerWord(bb) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[bb]
      }
      readLoadCounts(bb) {
        if (this.stopped || null === this.lastHeader) return !1;
        const ub = this.core.Xo();
        if (0 === ub) return !1;
        const hb = this.memory().buffer;
        hb !== this.loadCountsBuffer && (this.loadCountsBuffer = hb, this.loadCounts = new Uint32Array(hb, ub, Bb.wb));
        const Ob = this.loadCounts;
        return bb.chunksReceived = Ob[Bb.Ab.ChunksReceived], bb.chunksCancelled = this.headerView()[Bb.eb.ChunksCancelled], bb.chunksStored = Ob[Bb.Ab.ChunksStored], bb.jobsSent = Ob[Bb.Ab.JobsSent], bb.jobsDone = Ob[Bb.Ab.JobsDone], bb.jobsInFlight = Ob[Bb.Ab.JobsInFlight], bb.workersLive = Ob[Bb.Ab.WorkersLive], bb.workersRetired = Ob[Bb.Ab.WorkersRetired], !0
      }
      headerView() {
        const bb = this.memory().buffer;
        return bb !== this.headerBuffer && (this.headerBuffer = bb, this.header = new Uint32Array(bb, this.core.Tw(), Bb.bb)), this.header
      }
    }
  },
  40356: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub,
      d: () => Gb
    });
    var Bb = hb(4466);
    let Ob = null;

    function Gb(bb) {
      Ob = {
        scanned: !1
      };
      try {
        return bb()
      } finally {
        Ob = null
      }
    }

    function Ub() {
      const bb = Ob;
      if (null === bb) return (0, Bb.f)();
      const ub = (0, Bb.f)(!bb.scanned);
      return bb.scanned = !0, ub
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);