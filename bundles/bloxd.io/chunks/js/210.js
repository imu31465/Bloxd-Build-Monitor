export const id = 210;
export const ids = [210];
export const modules = {
  40896: (mm, Tm, fm) => {
    function hm(mm, Tm, fm) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(mm, Tm).getContext("2d", fm);
      const hm = document.createElement("canvas");
      return hm.width = mm, hm.height = Tm, hm.getContext("2d", fm)
    }

    function Am(mm, Tm) {
      return mm.getContext("2d", Tm)
    }
    fm.d(Tm, {
      b: () => Am,
      c: () => hm
    })
  },
  40855: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => wm
    });
    const hm = 1 << 20,
      Am = 1 << 21,
      am = 1024,
      xm = 2048;

    function wm(mm, Tm, fm) {
      const wm = mm + hm,
        Dm = Tm + am,
        im = fm + hm;
      return wm < 0 || wm >= Am || im < 0 || im >= Am || Dm < 0 || Dm >= xm ? -1 : (wm * Am + im) * xm + Dm
    }
  },
  40848: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm,
      e: () => xm,
      i: () => Am,
      m: () => am,
      p: () => Rm,
      s: () => im,
      v: () => Dm,
      y: () => wm
    });
    fm(3466);
    fm(40855);

    function hm(mm) {}

    function Am(mm) {}

    function am(mm) {}

    function xm(mm) {}

    function wm(mm) {}

    function Dm(mm, Tm, fm) {}

    function im(mm) {}

    function Rm(mm) {}
  },
  40841: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Im,
      g: () => Om,
      k: () => Lm,
      n: () => km,
      q: () => em,
      r: () => Nm,
      s: () => Vm,
      t: () => qm,
      u: () => jm,
      w: () => Zm,
      y: () => lm,
      B: () => nm,
      F: () => ym,
      I: () => Bm,
      L: () => Gm,
      N: () => Pm
    });
    var hm = fm(4732),
      Am = fm(40716),
      am = (fm(40848), fm(16));
    class xm {
      constructor(mm, Tm) {
        this.memory = mm, this.access = Tm, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.yp = 0, this.u32 = new am.k(0), this.f32 = new am.g(0), this.u8 = new am.c(0), this.dataView = new am.j(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.yp = this.access.yp(), this.buffer = (0, am.G)(this.memory()), this.u32 = new am.k(this.buffer, this.ptr, this.yp >>> 2), this.f32 = new am.g(this.buffer, this.ptr, this.yp >>> 2), this.u8 = new am.c(this.buffer, this.ptr, this.yp), this.dataView = new am.j(this.buffer, this.ptr, this.yp)
      }
      ensureViews() {
        (0, am.G)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(mm) {
        return !!this.fits(mm) || (this.dropped++, !1)
      }
      fits(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const fm = Tm + mm;
        return fm <= this.yp || fm <= hm.Fc && 0 !== this.access.reserve(fm) && (this.refresh(), fm <= this.yp)
      }
      consume(mm) {
        const Tm = this.cursor - mm;
        Tm > 0 && mm > 0 && (this.ensureViews(), this.u8.copyWithin(0, mm, this.cursor)), this.cursor = Tm > 0 ? Tm : 0
      }
      writeRecord(mm, Tm, fm, Am, am) {
        if (!this.room(hm.vb)) return !1;
        const xm = this.cursor >>> 2;
        return this.u32[xm] = 65535 & mm | (65535 & Tm) << 16, this.f32[xm + 1] = fm, this.f32[xm + 2] = Am, this.u32[xm + 3] = am >>> 0, this.cursor += hm.vb, !0
      }
      writeOptions(mm, Tm) {
        const fm = Tm.byteLength,
          Am = hm.vb + (0, hm.te)(fm);
        if (!this.fits(Am)) return !1;
        const am = this.cursor,
          xm = am >>> 2;
        this.u32[xm] = hm.wb.Options, this.u32[xm + 1] = fm, this.u32[xm + 2] = 0, this.u32[xm + 3] = mm >>> 0;
        const wm = am + hm.vb;
        return this.u8.set(Tm, wm), this.u8.fill(0, wm + fm, am + Am), this.cursor += Am, !0
      }
      writeWorkerRecord(mm, Tm, fm, Am, am, xm) {
        const wm = xm.byteLength,
          Dm = hm.Rd + (0, hm.te)(wm);
        if (wm > hm.Nd) return this.dropped++, !1;
        if (!this.room(Dm)) return !1;
        const im = this.cursor,
          Rm = im >>> 2;
        this.u32[Rm] = mm >>> 0, this.u32[Rm + 1] = 65535 & Tm | (65535 & fm) << 16, this.u32[Rm + 2] = Am >>> 0, this.u32[Rm + 3] = am >>> 0, this.u32[Rm + 4] = wm;
        const pm = im + hm.Rd;
        return this.u8.set(xm, pm), this.u8.fill(0, pm + wm, im + Dm), this.cursor += Dm, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(mm, Tm) {
        return this.writeNet(hm._b.Frame, mm, Tm)
      }
      writeOpen(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(hm._b.Open, mm, Dm(Tm))
      }
      writeClose(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(hm._b.Close, mm, Dm(Tm))
      }
      writeNet(mm, Tm, fm) {
        const Am = fm.byteLength,
          am = hm.Xb + (0, hm.te)(Am);
        if (Am > hm.Ub) return this.dropped++, !1;
        if (!this.room(am)) return !1;
        const xm = this.cursor;
        this.u32[xm >>> 2] = Am, this.u32[1 + (xm >>> 2)] = (0, hm.me)(mm, Tm);
        const wm = xm + hm.Xb;
        return this.u8.set(fm, wm), this.u8.fill(0, wm + Am, xm + am), this.cursor += am, !0
      }
      Go(mm, Tm, fm) {
        const Am = hm.v + (0, hm.te)(fm);
        if (!this.room(Am)) return -1;
        const am = this.cursor;
        this.u32[am >>> 2] = 65535 & mm | (65535 & Tm) << 16, this.u32[1 + (am >>> 2)] = fm;
        const xm = am + hm.v;
        return this.u8.fill(0, xm, am + Am), this.cursor += Am, xm
      }
      growForCmd(mm) {
        return this.fits(hm.v + (0, hm.te)(mm), 0)
      }
      writeCmd(mm, Tm, fm) {
        const hm = this.Go(mm, Tm, fm.byteLength);
        return !(hm < 0) && (this.u8.set(fm, hm), !0)
      }
      copyWritten(mm, Tm) {
        return this.ensureViews(), this.u8.slice(mm, mm + Tm)
      }
    }
    const wm = new am.c(0);

    function Dm(mm) {
      if (0 === mm) return wm;
      const Tm = new am.c(hm.Vb);
      for (let fm = 0; fm < hm.Vb; fm++) Tm[fm] = mm >>> 8 * fm & 255;
      return Tm
    }
    class im {
      constructor(mm, Tm) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new xm(Tm, {
          ptr: () => mm.Fp(),
          yp: () => mm.Ham(),
          reserve: Tm => mm.Wam(Tm)
        }), this.net = new xm(Tm, {
          ptr: () => mm.vam(),
          yp: () => mm.Lam(),
          reserve: Tm => mm.Fam(Tm)
        }), this.worker = new xm(Tm, {
          ptr: () => mm.Kxm(),
          yp: () => mm.Ixm(),
          reserve: Tm => mm.mxm(Tm)
        }), this.cmd = new xm(Tm, {
          ptr: () => mm.Jam(),
          yp: () => mm.Qam(),
          reserve: Tm => mm.nam(Tm)
        })
      }
      reset(mm, Tm, fm) {
        this.input.consume(mm), this.worker.consume(Tm), this.cmd.consume(fm)
      }
    }
    var Rm = fm(36363),
      pm = fm(2373),
      Em = fm(4729),
      om = fm(40860);
    const Om = "coreFrame",
      Ym = "fatalStatus",
      qm = "otherCall",
      jm = "coreRings",
      Vm = "netIn",
      Im = "abi",
      Km = "netOut",
      Qm = "workerOut",
      nm = "worldgenHost",
      Jm = "eventWalker",
      cm = "netEvent",
      zm = "envEvent",
      Zm = "sharedTables",
      km = "inputAction",
      bm = "frameSends",
      Sm = new Set([Jm, cm, zm, bm, km, Zm]),
      em = "wasmMemory",
      Nm = "meshHost";

    function Gm(mm, Tm) {
      mm.forEachWorkerOut(((fm, Am, am) => {
        if ((0, hm.ge)(fm)) try {
          var xm;
          null === (xm = Tm.worldgen) || void 0 === xm || xm.take(fm, am)
        } catch (Dm) {
          mm.crash(nm, Dm)
        } else try {
          var wm;
          null === (wm = Tm.mesh) || void 0 === wm || wm.take(fm, Am, am)
        } catch (Dm) {
          mm.crash(Nm, Dm)
        }
      }))
    }
    const Xm = 1048576;

    function Pm(mm, Tm) {
      let fm = !1;
      const hm = () => {
        fm = !1, Tm()
      };
      return () => {
        !fm && mm.cursor >= Xm && (fm = !0, queueMicrotask(hm))
      }
    }
    const Hm = new Set([Ym, qm, nm, Nm]);

    function ym(mm) {
      return Sm.has(mm.site) ? mm.error instanceof WebAssembly.RuntimeError || (0, Am.l)(mm.error) : !Hm.has(mm.site) && mm.error instanceof Error
    }
    const Cm = "events",
      rm = [],
      sm = "debugLog",
      lm = "terrainTextures",
      Mm = "sunShadowTextures",
      um = new TextDecoder;

    function Bm(mm, Tm) {
      const {
        site: fm,
        error: Am,
        header: am
      } = mm, xm = am ? (0, hm.ee)(am.lastError) : "noFrame", wm = `CORE-${fm===Ym?xm:fm}`, Dm = null === Am || void 0 === Am ? "" : ` ${(0,Rm.l)(Am)}`, im = {
        site: fm,
        wasmBuild: Tm.wasm,
        clientVersion: Tm.client
      };
      return am && (im.status = String(am.status), im.lastError = xm, im.lastErrorCode = String(am.lastError), im.lastErrorDetail = String(am.lastErrorDetail), im.errorCount = String(am.errorCount), im.frameIndex = String(am.frameIndex), im.tickIndex = String(am.tickIndex)), {
        code: wm,
        message: `core ${fm}, last error ${xm};${Dm}`,
        details: im
      }
    }
    class Lm {
      constructor(mm, Tm, fm) {
        this.core = mm, this.memory = Tm, this.handlers = fm, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: rm,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new im(mm, Tm)
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
      framePaces(mm) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.Gam(mm)
        } catch (Tm) {
          return this.crash(Om, Tm), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(mm, Tm) {
        var fm;
        let am = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: xm,
          net: wm,
          worker: Dm,
          cmd: im
        } = this.rings, Rm = wm.cursor, pm = Tm && !this.drawsHeld;
        let qm = hm.S.Fatal;
        const jm = xm.cursor,
          Im = Dm.cursor,
          Km = im.cursor;
        let Qm, nm = null;
        const zm = this.handlers.onSends;
        try {
          const Tm = (pm ? hm.db.Draws : 0) | (am ? hm.db.NetAll : 0) | (zm ? hm.db.StopForSends : 0);
          qm = (0, om.e)((() => {
            let fm = this.core.frame(mm, jm, wm.cursor, Im, Tm, Km);
            for (; fm === hm.od && zm;) {
              var Am;
              if (Qm ??= null === (Am = this.gameHost) || void 0 === Am ? void 0 : Am.takeFault(), void 0 === Qm && !this.takeSends(zm)) return hm.S.Fatal;
              fm = this.core.vq()
            }
            return fm
          }))
        } catch (um) {
          nm = {
            error: um
          }
        }
        Qm ??= null === (fm = this.gameHost) || void 0 === fm ? void 0 : fm.takeFault();
        const Zm = this.stopped || null !== nm || void 0 !== Qm;
        this.rings.reset(Zm ? xm.cursor : jm, Zm ? Dm.cursor : Im, Zm ? im.cursor : Km);
        const km = null === nm && void 0 === Qm,
          bm = km && !this.stopped && qm === hm.S.Fatal && 0 === this.core.Xo(),
          Sm = km && !bm ? this.headerView() : null,
          em = bm ? {
            ...null !== (Nm = this.lastHeader) && void 0 !== Nm ? Nm : (0, hm.ve)(new Uint32Array(hm.ib)),
            status: hm.S.Fatal,
            lastError: hm.Q.CoreBusy,
            lastErrorDetail: 0
          } : null === Sm ? null : (0, hm.ve)(Sm);
        var Nm;
        null !== em && (this.lastHeader = em);
        const Gm = null !== em && qm !== hm.S.Fatal,
          Xm = Gm && null !== Sm ? Sm[hm.lb.NetInKept] : 0,
          Pm = Gm && Xm <= Rm && Xm % 4 === 0 ? Xm : null;
        var Hm, ym;
        null !== em && null !== Pm && qm === hm.S.Errors && (null === (Hm = (ym = this.handlers).onErrors) || void 0 === Hm || Hm.call(ym, em));
        const Cm = null === Pm ? rm : this.readEvents(Rm);
        if (wm.consume(Rm - (null !== Pm && void 0 !== Pm ? Pm : 0)), this.netKept = null !== Pm && void 0 !== Pm ? Pm : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== nm) return this.crash(Om, void 0 === Qm || Qm instanceof Am.e ? nm.error : Qm), !1;
        if (void 0 !== Qm || null === em) return this.crashOn(Om, Qm), !1;
        if (bm) return this.crash(Ym, null), !1;
        const sm = this.headerView()[hm.lb.FrameDraw];
        if (this.lastFrameKind = (0, Em.e)(pm, sm), qm === hm.S.Fatal) return this.crash(Ym, null), !1;
        if (null === Pm) return this.crash(Vm, `the core kept ${Xm} of ${Rm} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const mm = this.frameEvents,
            Tm = this.headerView();
          mm.ptr = Tm[hm.lb.EventsPtr], mm.len = Tm[hm.lb.EventsLen], mm.net = Cm, mm.kind = this.lastFrameKind;
          try {
            this.eventWalker(mm)
          } catch (um) {
            return this.crashOn(Jm, um), !1
          }
          return this.handEnvEvents()
        }
        for (const hm of Cm) {
          if (this.stopped) return !1;
          try {
            var lm, Mm;
            null === (lm = (Mm = this.handlers).onNetEvent) || void 0 === lm || lm.call(Mm, hm)
          } catch (um) {
            return this.crashOn(cm, um), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const am of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var mm, Tm;
            null === (mm = (Tm = this.handlers).onReconnectGrace) || void 0 === mm || mm.call(Tm, am)
          } catch (Am) {
            return this.crashOn(cm, Am), !1
          }
        }
        for (const am of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var fm, hm;
            null === (fm = (hm = this.handlers).onEnvEvent) || void 0 === fm || fm.call(hm, am)
          } catch (Am) {
            return this.crashOn(zm, Am), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(mm) {
        this.eventWalker = mm
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: mm
        } = this.rings;
        try {
          const Tm = this.unsentUiPrefs;
          Tm && mm.writeRecord(hm.wb.UiPrefs, 0, Tm.nametagCutDistance, 0, (0, hm.xe)(Tm)) && (this.unsentUiPrefs = null);
          const fm = this.unsentEnvPrefs;
          fm && mm.writeRecord(hm.wb.EnvPrefs, (0, hm.fe)(fm), fm.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const Am = this.unsentLookPrefs;
          Am && mm.writeRecord(hm.wb.Sensitivity, 0, Am.mouse, Am.touch, (0, pm.m)(Am.fovPercent)) && (this.unsentLookPrefs = null);
          let am = 0;
          for (const {
              aux: hm,
              payload: xm
            }
            of this.unsentOptions) {
            if (!mm.writeOptions(hm, xm)) {
              if (mm.cursor > 0) break;
              this.optionsDropped++
            }
            am++
          }
          am > 0 && this.unsentOptions.splice(0, am)
        } catch (Tm) {
          return this.crash(jm, Tm), !1
        }
        return !0
      }
      setHoldDraws(mm) {
        this.drawsHeld = mm
      }
      setUiPrefs(mm) {
        this.unsentUiPrefs = {
          ...mm
        }
      }
      setEnvPrefs(mm) {
        this.unsentEnvPrefs = {
          ...mm
        }
      }
      setLookPrefs(mm) {
        this.unsentLookPrefs = {
          ...mm
        }
      }
      queueOptions(mm, Tm) {
        return !this.isStopped && (Tm.byteLength > hm.cc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: mm,
          payload: Tm
        }), !0))
      }
      setChunkCap(mm) {
        return this.callCore("setChunkCap", null, (Tm => Tm.xxm(mm)))
      }
      shedMemory(mm) {
        const Tm = this.callCore("shedMemory", null, (Tm => Tm.oxm(mm)));
        return 0 === Tm ? null : Tm
      }
      addDistanceInUse() {
        const mm = this.callCore("addDistanceInUse", null, (mm => mm.Yam()));
        return 0 === mm ? null : mm
      }
      setChunkAddDistance(mm, Tm) {
        return this.callCore("setChunkAddDistance", !1, (fm => fm.axm(mm, Tm)))
      }
      setGameHost(mm) {
        return this.callCore("setGameHost", !1, (Tm => (Tm.Nam(mm), this.gameHost = mm, !0)))
      }
      setAntiCheatProbes(mm) {
        return this.callCore("setAntiCheatProbes", !1, (Tm => Tm.hxm(mm)))
      }
      setAmbientOcclusion(mm) {
        this.callCore("setAmbientOcclusion", void 0, (Tm => {
          Tm.fxm(mm)
        }))
      }
      setPoseLod(mm) {
        this.callCore("setPoseLod", void 0, (Tm => {
          Tm.Dxm(mm)
        }))
      }
      setDebugLog(mm, Tm) {
        this.callCore(sm, void 0, (fm => {
          fm.lq(mm, Tm)
        }))
      }
      takeDebugLog(mm) {
        return this.callCore(sm, [], (Tm => Tm.Mq(mm)))
      }
      setTextureLayers(mm) {
        return this.callCore("setTextureLayers", !1, (Tm => Tm.Exm(mm)))
      }
      setBlockColours(mm) {
        let {
          blocks: Tm,
          counts: fm,
          values: hm
        } = mm;
        return this.callCore("setBlockColours", !1, (mm => mm.dfm(Tm, fm, hm)))
      }
      terrainTextureNames() {
        return this.callCore(lm, [], (mm => mm.Vxm()))
      }
      setTerrainTextures(mm, Tm, fm, hm) {
        return this.callCore(lm, !1, (Am => Am.pxm(mm, fm, Tm, hm)))
      }
      setShaderPack(mm, Tm, fm, hm, Am, am) {
        return this.callCore("setShaderPack", !1, (xm => {
          var wm, Dm;
          return null !== (wm = null === (Dm = xm.Dhm) || void 0 === Dm ? void 0 : Dm.call(xm, mm, Tm, fm, hm, Am, am)) && void 0 !== wm && wm
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(Mm, null, (mm => {
          var Tm, fm;
          return null !== (Tm = null === (fm = mm.Oxm) || void 0 === fm ? void 0 : fm.call(mm)) && void 0 !== Tm ? Tm : null
        }))
      }
      setSunShadowTexture(mm, Tm, fm, hm, Am) {
        this.callCore(Mm, void 0, (am => {
          var xm;
          null === (xm = am.Rxm) || void 0 === xm || xm.call(am, mm, Tm, fm, hm, Am)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(Mm, [], (mm => {
          var Tm, fm;
          return null !== (Tm = null === (fm = mm.qxm) || void 0 === fm ? void 0 : fm.call(mm)) && void 0 !== Tm ? Tm : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(Mm, null, (mm => {
          var Tm, fm;
          return null !== (Tm = null === (fm = mm.Yxm) || void 0 === fm ? void 0 : fm.call(mm)) && void 0 !== Tm ? Tm : null
        }))
      }
      callCore(mm, Tm, fm) {
        if (this.stopped) return Tm;
        try {
          return fm(this.core)
        } catch (hm) {
          return this.crash(mm, hm), Tm
        }
      }
      readEvents(mm) {
        this.netOffsets.length = 0;
        const Tm = this.headerView(),
          fm = Tm[hm.lb.EventsPtr],
          Am = Tm[hm.lb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === Am) return rm;
        const am = [],
          xm = this.memory().buffer;
        if (fm % 4 !== 0 || fm + Am > xm.byteLength) return this.crash(Cm, `events of ${Am} bytes at ${fm} outside ${xm.byteLength} bytes of memory`), rm;
        const wm = new DataView(xm, fm, Am),
          Dm = this.rings.net,
          im = (Tm, fm) => Tm + fm <= mm ? Dm.copyWritten(Tm, fm) : null;
        let Rm = 0;
        for (; Rm < Am;) {
          const mm = Rm + hm.X,
            Tm = mm <= Am ? wm.getUint32(Rm, !0) : -1,
            Dm = Tm >>> 16;
          if (Tm < 0 || Dm > Am - mm) return this.crash(Cm, `event record at ${Rm} overruns its ${Am} bytes`), rm;
          const km = 65535 & Tm,
            bm = Tm => wm.getUint32(mm + 4 * Tm, !0);
          if (km === hm.Z.RawMessage) {
            const mm = Dm >= hm.Jc.BYTES ? 65535 & bm(1) : -1,
              Tm = mm === hm.Jc.STRING_TYPE,
              fm = Dm === (Tm ? hm.Jc.STRING_TYPE_BYTES : hm.Jc.BYTES) ? im(bm(2), bm(3)) : null,
              Am = Tm && fm ? im(bm(4), bm(5)) : null;
            if (!fm || Tm && !Am) return this.crash(Cm, `RawMessage at ${Rm} of ${Dm} bytes names bytes outside net-in`), rm;
            this.netOffsets.push(Rm), am.push({
              type: "message",
              conn: bm(0),
              Hi: mm,
              payloadKind: bm(1) >>> 16,
              payload: fm,
              stringType: Am ? um.decode(Am) : null
            })
          } else if (km === hm.Z.CoreErrors) {
            var pm, Em;
            const mm = Dm >= 4 ? bm(0) : -1;
            if (mm < 0 || mm > hm.O.PAIRS_MAX || Dm !== 4 * (hm.O.FIXED_WORDS + hm.O.PAIR_WORDS * mm)) return this.crash(Cm, `CoreErrors at ${Rm} of ${Dm} bytes`), rm;
            const Tm = [];
            for (let fm = 0; fm < mm; fm++) Tm.push({
              code: bm(1 + 2 * fm),
              detail: bm(2 + 2 * fm)
            });
            null === (pm = (Em = this.handlers).onCoreErrors) || void 0 === pm || pm.call(Em, Tm, bm(1 + 2 * mm))
          } else if (km === hm.Z.RenderReload) {
            var om, Om;
            if (Dm !== hm.Wc.BYTES) return this.crash(Cm, `RenderReload at ${Rm} of ${Dm} bytes`), rm;
            null === (om = (Om = this.handlers).onRenderReload) || void 0 === om || om.call(Om, bm(0), bm(1), bm(2))
          } else if (km === hm.Z.JoinPreloadEnded) {
            var Ym, qm;
            if (Dm !== hm.Ab.BYTES) return this.crash(Cm, `JoinPreloadEnded at ${Rm} of ${Dm} bytes`), rm;
            null === (Ym = (qm = this.handlers).onJoinPreloadEnded) || void 0 === Ym || Ym.call(qm, {
              chunks: bm(hm.Ab.CHUNKS),
              bytes: bm(hm.Ab.BYTES_HELD),
              asked: bm(hm.Ab.ASKED),
              replaced: bm(hm.Ab.REPLACED),
              dropped: bm(hm.Ab.DROPPED)
            })
          } else if (km === hm.Z.Images) {
            var jm, Vm;
            null === (jm = (Vm = this.handlers).onImages) || void 0 === jm || jm.call(Vm, new Uint8Array(xm.slice(fm + mm, fm + mm + Dm)))
          } else if (km === hm.Z.ModelRequests)
            for (let fm = 0; fm < Dm >>> 2; fm++) {
              var Im, Km;
              null === (Im = (Km = this.handlers).onModelRequest) || void 0 === Im || Im.call(Km, bm(fm))
            } else if (km === hm.Z.ModelTaken) {
              var Qm, nm;
              if (Dm < 4) return this.crash(Cm, `ModelTaken at ${Rm} of ${Dm} bytes`), rm;
              const mm = new Uint32Array((Dm >>> 2) - 1);
              for (let Tm = 0; Tm < mm.length; Tm++) mm[Tm] = bm(1 + Tm);
              null === (Qm = (nm = this.handlers).onModelTaken) || void 0 === Qm || Qm.call(nm, bm(0), mm)
            } else if (km === hm.Z.TerrainTexturesWanted) {
            var Jm, cm;
            if (0 !== Dm) return this.crash(Cm, `TerrainTexturesWanted at ${Rm} of ${Dm} bytes`), rm;
            null === (Jm = (cm = this.handlers).onTerrainTexturesWanted) || void 0 === Jm || Jm.call(cm)
          } else if (km === hm.Z.KeepAliveDue) {
            var zm, Zm;
            if (Dm > hm.Db) return this.crash(Cm, `KeepAliveDue at ${Rm} of ${Dm} bytes`), rm;
            null === (zm = (Zm = this.handlers).onKeepAlive) || void 0 === zm || zm.call(Zm, new Uint8Array(xm, fm + mm, Dm).slice())
          } else if (km === hm.Z.ConnectionState) {
            if (Dm !== hm.z) return this.crash(Cm, `ConnectionState at ${Rm} of ${Dm} bytes`), rm;
            this.netOffsets.push(Rm), am.push({
              type: "connection",
              conn: bm(0),
              phase: bm(1),
              code: 0 | bm(2)
            })
          } else if (km === hm.Z.EnvLighting || km === hm.Z.SkyImages) {
            if (Dm !== (km === hm.Z.EnvLighting ? hm.W : hm.sd)) return this.crash(Cm, `event ${km} at ${Rm} of ${Dm} bytes`), rm;
            this.envEvents.push({
              kind: km,
              payload: new Uint8Array(xm.slice(fm + mm, fm + mm + Dm))
            })
          } else if (km === hm.Z.ReconnectGrace) {
            if (Dm !== hm.lc) return this.crash(Cm, `ReconnectGrace at ${Rm} of ${Dm} bytes`), rm;
            const mm = bm(2);
            this.graceEvents.push({
              conn: bm(0),
              graceMs: bm(1),
              sessionBased: 0 !== (mm & hm.Kc.SessionBased),
              replayOffer: 0 !== (mm & hm.Kc.ReplayOffer)
            })
          }
          Rm = mm + (0, hm.te)(Dm)
        }
        return am
      }
      takeSends(mm) {
        this.atSendsStop = !0;
        try {
          mm()
        } catch (Tm) {
          this.crashOn(bm, Tm)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(mm) {
        this.forEachOut(Km, "net-out", hm.lb.NetOutPtr, hm.lb.NetOutLen, hm.Xb, 0, ((Tm, fm, Am, am) => {
          const xm = (0, hm.le)(fm);
          xm === hm._b.Frame ? mm((0, hm.ie)(fm), Am) : this.crash(Km, `net-out record at ${am} is kind ${xm}, not a frame`)
        }))
      }
      forEachWorkerOut(mm) {
        this.forEachOut(Qm, "worker-out", hm.lb.WorkerOutPtr, hm.lb.WorkerOutLen, hm.Ld, 4, ((Tm, fm, Am, am) => {
          const xm = 255 & Tm,
            wm = xm === hm._d.Init ? this.initOf(Am, am) : Am;
          null !== wm && mm(xm, Tm >>> 8 & 16777215, wm)
        }))
      }
      initOf(mm, Tm) {
        const fm = this.memory().buffer;
        if (mm.byteLength !== hm.ob) return this.crash(Qm, `worker-out Init record at ${Tm} is ${mm.byteLength} bytes, not a view`), null;
        const Am = new DataView(mm.buffer, mm.byteOffset, hm.ob),
          am = Am.getUint32(0, !0),
          xm = Am.getUint32(4, !0);
        return am + xm > fm.byteLength ? (this.crash(Qm, `worker-out Init record at ${Tm} names ${xm} bytes at ${am} outside ${fm.byteLength} bytes of memory`), null) : new Uint8Array(fm, am, xm)
      }
      forEachOut(mm, Tm, fm, Am, am, xm, wm) {
        if (!this.headerReadable()) return;
        const Dm = this.headerView(),
          im = Dm[fm],
          Rm = Dm[Am];
        if (0 === Rm) return;
        const pm = this.memory().buffer;
        if (im % 4 !== 0 || im + Rm > pm.byteLength) return void this.crash(mm, `${Tm} of ${Rm} bytes at ${im} outside ${pm.byteLength} bytes of memory`);
        const Em = new DataView(pm, im, Rm);
        let om = 0;
        for (; om < Rm;) {
          const fm = om + am,
            Am = fm <= Rm ? Em.getUint32(om + xm, !0) : -1;
          if (Am < 0 || Am > Rm - fm) return void this.crash(mm, `${Tm} record at ${om} overruns its ${Rm} bytes`);
          if (wm(Em.getUint32(om, !0), Em.getUint32(om + 4, !0), new Uint8Array(pm, im + fm, Am), om), this.stopped) return;
          om = fm + (0, hm.te)(Am)
        }
      }
      forEachEvent(mm) {
        if (this.stopped || null === this.lastHeader) return;
        const Tm = this.headerView(),
          fm = Tm[hm.lb.EventsPtr],
          Am = Tm[hm.lb.EventsLen];
        if (0 === Am) return;
        const am = this.memory().buffer;
        if (fm % 4 !== 0 || fm + Am > am.byteLength) return void this.crash(Cm, `events of ${Am} bytes at ${fm} outside ${am.byteLength} bytes of memory`);
        const xm = new DataView(am, fm, Am);
        let wm = 0;
        for (; wm < Am;) {
          const Tm = wm + hm.X,
            fm = Tm <= Am ? xm.getUint32(wm, !0) : -1,
            am = fm >>> 16;
          if (fm < 0 || am > Am - Tm) return void this.crash(Cm, `event record at ${wm} overruns its ${Am} bytes`);
          mm(65535 & fm, xm, Tm, am), wm = Tm + (0, hm.te)(am)
        }
      }
      crashOn(mm, Tm) {
        Tm instanceof Am.e ? this.crash(Cm, Tm.message) : this.crash(mm, Tm)
      }
      crash(mm, Tm) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: mm,
          error: Tm,
          header: this.lastHeader
        }))
      }
      headerWord(mm) {
        return this.headerReadable() ? this.headerView()[mm] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(mm) {
        const Tm = this.loadCountWords();
        return null !== Tm && (mm.chunksReceived = Tm[hm.Mb.ChunksReceived], mm.chunksCancelled = this.headerView()[hm.lb.ChunksCancelled], mm.chunksStored = Tm[hm.Mb.ChunksStored], mm.jobsSent = Tm[hm.Mb.JobsSent], mm.jobsDone = Tm[hm.Mb.JobsDone], mm.jobsInFlight = Tm[hm.Mb.JobsInFlight], mm.workersLive = Tm[hm.Mb.WorkersLive], mm.workersRetired = Tm[hm.Mb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var mm, Tm;
        const fm = null !== (mm = null === (Tm = this.loadCountWords()) || void 0 === Tm ? void 0 : Tm[hm.Mb.ViewQueuedPrograms]) && void 0 !== mm ? mm : 0;
        return 0 === fm ? null : fm - 1
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const mm = this.core.sq();
        if (0 === mm) return null;
        const Tm = this.memory().buffer;
        return Tm !== this.loadCountsBuffer && (this.loadCountsBuffer = Tm, this.loadCounts = new Uint32Array(Tm, mm, hm.Eb)), this.loadCounts
      }
      headerView() {
        const mm = this.memory().buffer;
        return mm !== this.headerBuffer && (this.headerBuffer = mm, this.header = new Uint32Array(mm, this.core.Xo(), hm.ib)), this.header
      }
    }
  },
  40860: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm,
      e: () => am
    });
    var hm = fm(4632);
    let Am = null;

    function am(mm) {
      Am = {
        scanned: !1
      };
      try {
        return mm()
      } finally {
        Am = null
      }
    }

    function xm() {
      const mm = Am;
      if (null === mm) return (0, hm.g)();
      const Tm = (0, hm.g)(!mm.scanned);
      return mm.scanned = !0, Tm
    }
  },
  40913: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm
    });
    const hm = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40931: (mm, Tm, fm) => {
    function hm() {
      return fm(40938)
    }

    function Am() {
      return fm(40943)
    }

    function am(mm) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(mm)
    }
    fm.d(Tm, {
      d: () => am,
      e: () => hm,
      f: () => Am
    })
  },
  36363: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm,
      f: () => im,
      h: () => xm,
      l: () => pm
    });
    var hm = fm(36348),
      Am = fm(16);
    const am = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function xm(mm) {
      if (mm instanceof WebAssembly.RuntimeError) return !0;
      const Tm = mm instanceof Error ? mm.stack : void 0;
      return "string" === typeof Tm && am.test(Tm)
    }

    function wm(mm, Tm, fm) {
      var Am;
      const xm = mm instanceof Error ? mm.name : "thrown",
        wm = (mm instanceof Error && null !== (Am = mm.stack) && void 0 !== Am ? Am : "").split("\n").filter((mm => am.test(mm))).slice(0, 8).map((mm => mm.trim())),
        Dm = null === Tm ? "wasm memory unknown" : `wasm memory ${Math.round(Tm/2**20)} MB`,
        im = null === fm.panic ? "" : `, panic: ${(0,hm.i)(fm.panic)}`,
        Rm = `${xm}: ${mm instanceof Error?mm.message:String(mm)}`;
      return `${(0,hm.q)(fm.kind,fm.refusedBytes)} ${Rm} (${Dm})${im}${wm.length>0?` | ${wm.join(" < ")}`:""}`
    }
    const Dm = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function im(mm) {
      var Tm;
      let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(mm instanceof Error) || !Dm.test(mm.message)) return {};
      if (!("detached" in fm)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, Am.R)(null === (Tm = (0, Am.K)(fm, "detached")) || void 0 === Tm ? void 0 : Tm.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const Rm = 500;

    function pm(mm) {
      let Tm = "[object Object]";
      try {
        Tm = String(mm)
      } catch {}
      if ("[object Object]" !== Tm) return Tm;
      try {
        var fm, hm;
        return null !== (fm = null === (hm = JSON.stringify(mm)) || void 0 === hm ? void 0 : hm.slice(0, Rm)) && void 0 !== fm ? fm : Tm
      } catch {
        return Tm
      }
    }
  },
  40938: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40943: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36348: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm,
      g: () => am,
      i: () => Dm,
      m: () => xm,
      q: () => Am
    });
    const hm = /^alloc_failed (\d+) bytes$/;

    function Am(mm, Tm) {
      return am(mm, Tm) ? `trap=alloc_failed ${Tm} bytes` : `trap=${mm}`
    }

    function am(mm, Tm) {
      return "unreachable" === mm && Tm > 0
    }

    function xm(mm, Tm, fm) {
      const hm = function(mm) {
        return mm instanceof WebAssembly.RuntimeError ? /unreachable/i.test(mm.message) ? "unreachable" : /out of bounds/i.test(mm.message) ? "out_of_bounds" : "runtime_error" : (mm instanceof RangeError || mm instanceof Error && "InternalError" === mm.name) && /call stack|recursion/i.test(mm.message) ? "stack_overflow" : "js_error"
      }(mm);
      if ("unreachable" !== hm) return {
        kind: hm,
        panic: null,
        refusedBytes: 0
      };
      const Am = Tm(),
        am = fm();
      return {
        kind: hm,
        panic: am > 0 ? null : Am,
        refusedBytes: am
      }
    }
    const wm = 300;

    function Dm(mm) {
      return mm.replace(/\s*\n\s*/g, " / ").slice(0, wm)
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);