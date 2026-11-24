export const id = 214;
export const ids = [214];
export const modules = {
  41008: (tt, et, Vt) => {
    function Ot(tt, et, Vt) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(tt, et).getContext("2d", Vt);
      const Ot = document.createElement("canvas");
      return Ot.width = tt, Ot.height = et, Ot.getContext("2d", Vt)
    }

    function qt(tt, et) {
      return tt.getContext("2d", et)
    }
    Vt.d(et, {
      b: () => qt,
      e: () => Ot
    })
  },
  40967: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => dt
    });
    const Ot = 1 << 20,
      qt = 1 << 21,
      Dt = 1024,
      mt = 2048;

    function dt(tt, et, Vt) {
      const dt = tt + Ot,
        jt = et + Dt,
        Ht = Vt + Ot;
      return dt < 0 || dt >= qt || Ht < 0 || Ht >= qt || jt < 0 || jt >= mt ? -1 : (dt * qt + Ht) * mt + jt
    }
  },
  40960: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot,
      e: () => mt,
      f: () => qt,
      i: () => Dt,
      l: () => Xt,
      n: () => Ht,
      q: () => jt,
      t: () => dt
    });
    Vt(3533);
    Vt(40967);

    function Ot(tt) {}

    function qt(tt) {}

    function Dt(tt) {}

    function mt(tt) {}

    function dt(tt) {}

    function jt(tt, et, Vt) {}

    function Ht(tt) {}

    function Xt(tt) {}
  },
  40952: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => bt,
      e: () => ft,
      f: () => Bt,
      i: () => St,
      l: () => It,
      p: () => Pt,
      s: () => Mt,
      w: () => yt,
      A: () => Nt,
      B: () => Wt,
      C: () => Ut,
      E: () => ut,
      F: () => Gt,
      J: () => Yt,
      L: () => Zt,
      O: () => Ft
    });
    var Ot = Vt(4960),
      qt = Vt(40831),
      Dt = (Vt(40960), Vt(17));
    class mt {
      constructor(tt, et) {
        this.memory = tt, this.access = et, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.uQ = 0, this.u32 = new Dt.k(0), this.f32 = new Dt.i(0), this.u8 = new Dt.e(0), this.dataView = new Dt.j(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.uQ = this.access.uQ(), this.buffer = (0, Dt.M)(this.memory()), this.u32 = new Dt.k(this.buffer, this.ptr, this.uQ >>> 2), this.f32 = new Dt.i(this.buffer, this.ptr, this.uQ >>> 2), this.u8 = new Dt.e(this.buffer, this.ptr, this.uQ), this.dataView = new Dt.j(this.buffer, this.ptr, this.uQ)
      }
      ensureViews() {
        (0, Dt.M)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(tt) {
        return !!this.fits(tt) || (this.dropped++, !1)
      }
      fits(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const Vt = et + tt;
        return Vt <= this.uQ || Vt <= Ot.Xc && 0 !== this.access.reserve(Vt) && (this.refresh(), Vt <= this.uQ)
      }
      consume(tt) {
        const et = this.cursor - tt;
        et > 0 && tt > 0 && (this.ensureViews(), this.u8.copyWithin(0, tt, this.cursor)), this.cursor = et > 0 ? et : 0
      }
      writeRecord(tt, et, Vt, qt, Dt) {
        if (!this.room(Ot.Cb)) return !1;
        const mt = this.cursor >>> 2;
        return this.u32[mt] = 65535 & tt | (65535 & et) << 16, this.f32[mt + 1] = Vt, this.f32[mt + 2] = qt, this.u32[mt + 3] = Dt >>> 0, this.cursor += Ot.Cb, !0
      }
      writeOptions(tt, et) {
        const Vt = et.byteLength,
          qt = Ot.Cb + (0, Ot.Fe)(Vt);
        if (!this.fits(qt)) return !1;
        const Dt = this.cursor,
          mt = Dt >>> 2;
        this.u32[mt] = Ot.Fb.Options, this.u32[mt + 1] = Vt, this.u32[mt + 2] = 0, this.u32[mt + 3] = tt >>> 0;
        const dt = Dt + Ot.Cb;
        return this.u8.set(et, dt), this.u8.fill(0, dt + Vt, Dt + qt), this.cursor += qt, !0
      }
      writeWorkerRecord(tt, et, Vt, qt, Dt, mt) {
        const dt = mt.byteLength,
          jt = Ot.Vd + (0, Ot.Fe)(dt);
        if (dt > Ot.Sd) return this.dropped++, !1;
        if (!this.room(jt)) return !1;
        const Ht = this.cursor,
          Xt = Ht >>> 2;
        this.u32[Xt] = tt >>> 0, this.u32[Xt + 1] = 65535 & et | (65535 & Vt) << 16, this.u32[Xt + 2] = qt >>> 0, this.u32[Xt + 3] = Dt >>> 0, this.u32[Xt + 4] = dt;
        const Qt = Ht + Ot.Vd;
        return this.u8.set(mt, Qt), this.u8.fill(0, Qt + dt, Ht + jt), this.cursor += jt, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(tt, et) {
        return this.writeNet(Ot.kc.Frame, tt, et)
      }
      writeOpen(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Ot.kc.Open, tt, jt(et))
      }
      writeClose(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Ot.kc.Close, tt, jt(et))
      }
      writeNet(tt, et, Vt) {
        const qt = Vt.byteLength,
          Dt = Ot.ic + (0, Ot.Fe)(qt);
        if (qt > Ot.bc) return this.dropped++, !1;
        if (!this.room(Dt)) return !1;
        const mt = this.cursor;
        this.u32[mt >>> 2] = qt, this.u32[1 + (mt >>> 2)] = (0, Ot.Ae)(tt, et);
        const dt = mt + Ot.ic;
        return this.u8.set(Vt, dt), this.u8.fill(0, dt + qt, mt + Dt), this.cursor += Dt, !0
      }
      XE(tt, et, Vt) {
        const qt = Ot.q + (0, Ot.Fe)(Vt);
        if (!this.room(qt)) return -1;
        const Dt = this.cursor;
        this.u32[Dt >>> 2] = 65535 & tt | (65535 & et) << 16, this.u32[1 + (Dt >>> 2)] = Vt;
        const mt = Dt + Ot.q;
        return this.u8.fill(0, mt, Dt + qt), this.cursor += qt, mt
      }
      growForCmd(tt) {
        return this.fits(Ot.q + (0, Ot.Fe)(tt), 0)
      }
      writeCmd(tt, et, Vt) {
        const Ot = this.XE(tt, et, Vt.byteLength);
        return !(Ot < 0) && (this.u8.set(Vt, Ot), !0)
      }
      copyWritten(tt, et) {
        return this.ensureViews(), this.u8.slice(tt, tt + et)
      }
    }
    const dt = new Dt.e(0);

    function jt(tt) {
      if (0 === tt) return dt;
      const et = new Dt.e(Ot.ec);
      for (let Vt = 0; Vt < Ot.ec; Vt++) et[Vt] = tt >>> 8 * Vt & 255;
      return et
    }
    class Ht {
      constructor(tt, et) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new mt(et, {
          ptr: () => tt.kQ(),
          uQ: () => tt.wmt(),
          reserve: et => tt.Wmt(et)
        }), this.net = new mt(et, {
          ptr: () => tt.Kmt(),
          uQ: () => tt.umt(),
          reserve: et => tt.Smt(et)
        }), this.worker = new mt(et, {
          ptr: () => tt.gmt(),
          uQ: () => tt.Tmt(),
          reserve: et => tt.cmt(et)
        }), this.cmd = new mt(et, {
          ptr: () => tt.qmt(),
          uQ: () => tt.Vmt(),
          reserve: et => tt.Omt(et)
        })
      }
      reset(tt, et, Vt) {
        this.input.consume(tt), this.worker.consume(et), this.cmd.consume(Vt)
      }
    }
    var Xt = Vt(36507),
      Qt = Vt(2465),
      lt = Vt(4958),
      Et = Vt(40971);
    const ft = "coreFrame",
      wt = "fatalStatus",
      yt = "otherCall",
      Nt = "coreRings",
      Mt = "netIn",
      bt = "abi",
      Jt = "netOut",
      Ct = "workerOut",
      ut = "worldgenHost",
      Kt = "eventWalker",
      ht = "netEvent",
      vt = "envEvent",
      Wt = "sharedTables",
      St = "inputAction",
      ct = "frameSends",
      Rt = new Set([Kt, ht, vt, ct, St, Wt]),
      It = "wasmMemory",
      Pt = "meshHost";

    function Zt(tt, et) {
      tt.forEachWorkerOut(((Vt, qt, Dt) => {
        if ((0, Ot.ve)(Vt)) try {
          var mt;
          null === (mt = et.worldgen) || void 0 === mt || mt.take(Vt, Dt)
        } catch (jt) {
          tt.crash(ut, jt)
        } else try {
          var dt;
          null === (dt = et.mesh) || void 0 === dt || dt.take(Vt, qt, Dt)
        } catch (jt) {
          tt.crash(Pt, jt)
        }
      }))
    }
    const Lt = 1048576;

    function Ft(tt, et) {
      let Vt = !1;
      const Ot = () => {
        Vt = !1, et()
      };
      return () => {
        !Vt && tt.cursor >= Lt && (Vt = !0, queueMicrotask(Ot))
      }
    }
    const kt = new Set([wt, yt, ut, Pt]);

    function Gt(tt) {
      return Rt.has(tt.site) ? tt.error instanceof WebAssembly.RuntimeError || (0, qt.k)(tt.error) : !kt.has(tt.site) && tt.error instanceof Error
    }
    const zt = "events",
      ot = [],
      rt = "debugLog",
      Ut = "terrainTextures",
      At = "sunShadowTextures",
      it = new TextDecoder;

    function Yt(tt, et) {
      const {
        site: Vt,
        error: qt,
        header: Dt
      } = tt, mt = Dt ? (0, Ot.qe)(Dt.lastError) : "noFrame", dt = `CORE-${Vt===wt?mt:Vt}`, jt = null === qt || void 0 === qt ? "" : ` ${(0,Xt.j)(qt)}`, Ht = {
        site: Vt,
        wasmBuild: et.wasm,
        clientVersion: et.client
      };
      return Dt && (Ht.status = String(Dt.status), Ht.lastError = mt, Ht.lastErrorCode = String(Dt.lastError), Ht.lastErrorDetail = String(Dt.lastErrorDetail), Ht.errorCount = String(Dt.errorCount), Ht.frameIndex = String(Dt.frameIndex), Ht.tickIndex = String(Dt.tickIndex)), {
        code: dt,
        message: `core ${Vt}, last error ${mt};${jt}`,
        details: Ht
      }
    }
    class Bt {
      constructor(tt, et, Vt) {
        this.core = tt, this.memory = et, this.handlers = Vt, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: ot,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new Ht(tt, et)
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
      framePaces(tt) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.Qmt(tt)
        } catch (et) {
          return this.crash(ft, et), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(tt, et) {
        var Vt;
        let Dt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: mt,
          net: dt,
          worker: jt,
          cmd: Ht
        } = this.rings, Xt = dt.cursor, Qt = et && !this.drawsHeld;
        let yt = Ot.Q.Fatal;
        const Nt = mt.cursor,
          bt = jt.cursor,
          Jt = Ht.cursor;
        let Ct, ut = null;
        const vt = this.handlers.onSends;
        try {
          const et = (Qt ? Ot.mb.Draws : 0) | (Dt ? Ot.mb.NetAll : 0) | (vt ? Ot.mb.StopForSends : 0);
          yt = (0, Et.e)((() => {
            let Vt = this.core.frame(tt, Nt, dt.cursor, bt, et, Jt);
            for (; Vt === Ot.yd && vt;) {
              var qt;
              if (Ct ??= null === (qt = this.gameHost) || void 0 === qt ? void 0 : qt.takeFault(), void 0 === Ct && !this.takeSends(vt)) return Ot.Q.Fatal;
              Vt = this.core.oy()
            }
            return Vt
          }))
        } catch (it) {
          ut = {
            error: it
          }
        }
        Ct ??= null === (Vt = this.gameHost) || void 0 === Vt ? void 0 : Vt.takeFault();
        const Wt = this.stopped || null !== ut || void 0 !== Ct;
        this.rings.reset(Wt ? mt.cursor : Nt, Wt ? jt.cursor : bt, Wt ? Ht.cursor : Jt);
        const St = null === ut && void 0 === Ct,
          ct = St && !this.stopped && yt === Ot.Q.Fatal && 0 === this.core.QE(),
          Rt = St && !ct ? this.headerView() : null,
          It = ct ? {
            ...null !== (Pt = this.lastHeader) && void 0 !== Pt ? Pt : (0, Ot.Ge)(new Uint32Array(Ot.qb)),
            status: Ot.Q.Fatal,
            lastError: Ot.M.CoreBusy,
            lastErrorDetail: 0
          } : null === Rt ? null : (0, Ot.Ge)(Rt);
        var Pt;
        null !== It && (this.lastHeader = It);
        const Zt = null !== It && yt !== Ot.Q.Fatal,
          Lt = Zt && null !== Rt ? Rt[Ot.sb.NetInKept] : 0,
          Ft = Zt && Lt <= Xt && Lt % 4 === 0 ? Lt : null;
        var kt, Gt;
        null !== It && null !== Ft && yt === Ot.Q.Errors && (null === (kt = (Gt = this.handlers).onErrors) || void 0 === kt || kt.call(Gt, It));
        const zt = null === Ft ? ot : this.readEvents(Xt);
        if (dt.consume(Xt - (null !== Ft && void 0 !== Ft ? Ft : 0)), this.netKept = null !== Ft && void 0 !== Ft ? Ft : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== ut) return this.crash(ft, void 0 === Ct || Ct instanceof qt.d ? ut.error : Ct), !1;
        if (void 0 !== Ct || null === It) return this.crashOn(ft, Ct), !1;
        if (ct) return this.crash(wt, null), !1;
        const rt = this.headerView()[Ot.sb.FrameDraw];
        if (this.lastFrameKind = (0, lt.e)(Qt, rt), yt === Ot.Q.Fatal) return this.crash(wt, null), !1;
        if (null === Ft) return this.crash(Mt, `the core kept ${Lt} of ${Xt} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const tt = this.frameEvents,
            et = this.headerView();
          tt.ptr = et[Ot.sb.EventsPtr], tt.len = et[Ot.sb.EventsLen], tt.net = zt, tt.kind = this.lastFrameKind;
          try {
            this.eventWalker(tt)
          } catch (it) {
            return this.crashOn(Kt, it), !1
          }
          return this.handEnvEvents()
        }
        for (const Ot of zt) {
          if (this.stopped) return !1;
          try {
            var Ut, At;
            null === (Ut = (At = this.handlers).onNetEvent) || void 0 === Ut || Ut.call(At, Ot)
          } catch (it) {
            return this.crashOn(ht, it), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const Dt of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var tt, et;
            null === (tt = (et = this.handlers).onReconnectGrace) || void 0 === tt || tt.call(et, Dt)
          } catch (qt) {
            return this.crashOn(ht, qt), !1
          }
        }
        for (const Dt of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var Vt, Ot;
            null === (Vt = (Ot = this.handlers).onEnvEvent) || void 0 === Vt || Vt.call(Ot, Dt)
          } catch (qt) {
            return this.crashOn(vt, qt), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(tt) {
        this.eventWalker = tt
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: tt
        } = this.rings;
        try {
          const et = this.unsentUiPrefs;
          et && tt.writeRecord(Ot.Fb.UiPrefs, 0, et.nametagCutDistance, 0, (0, Ot.Ke)(et)) && (this.unsentUiPrefs = null);
          const Vt = this.unsentEnvPrefs;
          Vt && tt.writeRecord(Ot.Fb.EnvPrefs, (0, Ot.ue)(Vt), Vt.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const qt = this.unsentLookPrefs;
          qt && tt.writeRecord(Ot.Fb.Sensitivity, 0, qt.mouse, qt.touch, (0, Qt.i)(qt.fovPercent)) && (this.unsentLookPrefs = null);
          let Dt = 0;
          for (const {
              aux: Ot,
              payload: mt
            }
            of this.unsentOptions) {
            if (!tt.writeOptions(Ot, mt)) {
              if (tt.cursor > 0) break;
              this.optionsDropped++
            }
            Dt++
          }
          Dt > 0 && this.unsentOptions.splice(0, Dt)
        } catch (et) {
          return this.crash(Nt, et), !1
        }
        return !0
      }
      setHoldDraws(tt) {
        this.drawsHeld = tt
      }
      setUiPrefs(tt) {
        this.unsentUiPrefs = {
          ...tt
        }
      }
      setEnvPrefs(tt) {
        this.unsentEnvPrefs = {
          ...tt
        }
      }
      setLookPrefs(tt) {
        this.unsentLookPrefs = {
          ...tt
        }
      }
      queueOptions(tt, et) {
        return !this.isStopped && (et.byteLength > Ot.nc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: tt,
          payload: et
        }), !0))
      }
      setChunkCap(tt) {
        return this.callCore("setChunkCap", null, (et => et.Fmt(tt)))
      }
      shedMemory(tt) {
        const et = this.callCore("shedMemory", null, (et => et.Amt(tt)));
        return 0 === et ? null : et
      }
      addDistanceInUse() {
        const tt = this.callCore("addDistanceInUse", null, (tt => tt.pDt()));
        return 0 === tt ? null : tt
      }
      setChunkAddDistance(tt, et) {
        return this.callCore("setChunkAddDistance", !1, (Vt => Vt.Lmt(tt, et)))
      }
      setGameHost(tt) {
        return this.callCore("setGameHost", !1, (et => (et.Xmt(tt), this.gameHost = tt, !0)))
      }
      setAntiCheatProbes(tt) {
        return this.callCore("setAntiCheatProbes", !1, (et => et.Pmt(tt)))
      }
      setAmbientOcclusion(tt) {
        this.callCore("setAmbientOcclusion", void 0, (et => {
          et.Imt(tt)
        }))
      }
      setPoseLod(tt) {
        this.callCore("setPoseLod", void 0, (et => {
          et.Gmt(tt)
        }))
      }
      setDebugLog(tt, et) {
        this.callCore(rt, void 0, (Vt => {
          Vt.Ly(tt, et)
        }))
      }
      takeDebugLog(tt) {
        return this.callCore(rt, [], (et => et.Fy(tt)))
      }
      setTextureLayers(tt) {
        return this.callCore("setTextureLayers", !1, (et => et.Umt(tt)))
      }
      setBlockColours(tt) {
        let {
          blocks: et,
          counts: Vt,
          values: Ot
        } = tt;
        return this.callCore("setBlockColours", !1, (tt => tt.SOt(et, Vt, Ot)))
      }
      terrainTextureNames() {
        return this.callCore(Ut, [], (tt => tt.xmt()))
      }
      setTerrainTextures(tt, et, Vt, Ot) {
        return this.callCore(Ut, !1, (qt => qt.rmt(tt, Vt, et, Ot)))
      }
      setShaderPack(tt, et, Vt, Ot, qt, Dt) {
        return this.callCore("setShaderPack", !1, (mt => {
          var dt, jt;
          return null !== (dt = null === (jt = mt.rOt) || void 0 === jt ? void 0 : jt.call(mt, tt, et, Vt, Ot, qt, Dt)) && void 0 !== dt && dt
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(At, null, (tt => {
          var et, Vt;
          return null !== (et = null === (Vt = tt.imt) || void 0 === Vt ? void 0 : Vt.call(tt)) && void 0 !== et ? et : null
        }))
      }
      setSunShadowTexture(tt, et, Vt, Ot, qt) {
        this.callCore(At, void 0, (Dt => {
          var mt;
          null === (mt = Dt.omt) || void 0 === mt || mt.call(Dt, tt, et, Vt, Ot, qt)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(At, [], (tt => {
          var et, Vt;
          return null !== (et = null === (Vt = tt.Bmt) || void 0 === Vt ? void 0 : Vt.call(tt)) && void 0 !== et ? et : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(At, null, (tt => {
          var et, Vt;
          return null !== (et = null === (Vt = tt.Ymt) || void 0 === Vt ? void 0 : Vt.call(tt)) && void 0 !== et ? et : null
        }))
      }
      callCore(tt, et, Vt) {
        if (this.stopped) return et;
        try {
          return Vt(this.core)
        } catch (Ot) {
          return this.crash(tt, Ot), et
        }
      }
      readEvents(tt) {
        this.netOffsets.length = 0;
        const et = this.headerView(),
          Vt = et[Ot.sb.EventsPtr],
          qt = et[Ot.sb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === qt) return ot;
        const Dt = [],
          mt = this.memory().buffer;
        if (Vt % 4 !== 0 || Vt + qt > mt.byteLength) return this.crash(zt, `events of ${qt} bytes at ${Vt} outside ${mt.byteLength} bytes of memory`), ot;
        const dt = new DataView(mt, Vt, qt),
          jt = this.rings.net,
          Ht = (et, Vt) => et + Vt <= tt ? jt.copyWritten(et, Vt) : null;
        let Xt = 0;
        for (; Xt < qt;) {
          const tt = Xt + Ot.bb,
            et = tt <= qt ? dt.getUint32(Xt, !0) : -1,
            jt = et >>> 16;
          if (et < 0 || jt > qt - tt) return this.crash(zt, `event record at ${Xt} overruns its ${qt} bytes`), ot;
          const St = 65535 & et,
            ct = et => dt.getUint32(tt + 4 * et, !0);
          if (St === Ot.db.RawMessage) {
            const tt = jt >= Ot.Yc.BYTES ? 65535 & ct(1) : -1,
              et = tt === Ot.Yc.STRING_TYPE,
              Vt = jt === (et ? Ot.Yc.STRING_TYPE_BYTES : Ot.Yc.BYTES) ? Ht(ct(2), ct(3)) : null,
              qt = et && Vt ? Ht(ct(4), ct(5)) : null;
            if (!Vt || et && !qt) return this.crash(zt, `RawMessage at ${Xt} of ${jt} bytes names bytes outside net-in`), ot;
            this.netOffsets.push(Xt), Dt.push({
              type: "message",
              conn: ct(0),
              kX: tt,
              payloadKind: ct(1) >>> 16,
              payload: Vt,
              stringType: qt ? it.decode(qt) : null
            })
          } else if (St === Ot.db.CoreErrors) {
            var Qt, lt;
            const tt = jt >= 4 ? ct(0) : -1;
            if (tt < 0 || tt > Ot.K.PAIRS_MAX || jt !== 4 * (Ot.K.FIXED_WORDS + Ot.K.PAIR_WORDS * tt)) return this.crash(zt, `CoreErrors at ${Xt} of ${jt} bytes`), ot;
            const et = [];
            for (let Vt = 0; Vt < tt; Vt++) et.push({
              code: ct(1 + 2 * Vt),
              detail: ct(2 + 2 * Vt)
            });
            null === (Qt = (lt = this.handlers).onCoreErrors) || void 0 === Qt || Qt.call(lt, et, ct(1 + 2 * tt))
          } else if (St === Ot.db.RenderReload) {
            var Et, ft;
            if (jt !== Ot.hd.BYTES) return this.crash(zt, `RenderReload at ${Xt} of ${jt} bytes`), ot;
            null === (Et = (ft = this.handlers).onRenderReload) || void 0 === Et || Et.call(ft, ct(0), ct(1), ct(2))
          } else if (St === Ot.db.JoinPreloadEnded) {
            var wt, yt;
            if (jt !== Ot.Kb.BYTES) return this.crash(zt, `JoinPreloadEnded at ${Xt} of ${jt} bytes`), ot;
            null === (wt = (yt = this.handlers).onJoinPreloadEnded) || void 0 === wt || wt.call(yt, {
              chunks: ct(Ot.Kb.CHUNKS),
              bytes: ct(Ot.Kb.BYTES_HELD),
              asked: ct(Ot.Kb.ASKED),
              replaced: ct(Ot.Kb.REPLACED),
              dropped: ct(Ot.Kb.DROPPED)
            })
          } else if (St === Ot.db.Images) {
            var Nt, Mt;
            null === (Nt = (Mt = this.handlers).onImages) || void 0 === Nt || Nt.call(Mt, new Uint8Array(mt.slice(Vt + tt, Vt + tt + jt)))
          } else if (St === Ot.db.ModelRequests)
            for (let Vt = 0; Vt < jt >>> 2; Vt++) {
              var bt, Jt;
              null === (bt = (Jt = this.handlers).onModelRequest) || void 0 === bt || bt.call(Jt, ct(Vt))
            } else if (St === Ot.db.ModelTaken) {
              var Ct, ut;
              if (jt < 4) return this.crash(zt, `ModelTaken at ${Xt} of ${jt} bytes`), ot;
              const tt = new Uint32Array((jt >>> 2) - 1);
              for (let et = 0; et < tt.length; et++) tt[et] = ct(1 + et);
              null === (Ct = (ut = this.handlers).onModelTaken) || void 0 === Ct || Ct.call(ut, ct(0), tt)
            } else if (St === Ot.db.TerrainTexturesWanted) {
            var Kt, ht;
            if (0 !== jt) return this.crash(zt, `TerrainTexturesWanted at ${Xt} of ${jt} bytes`), ot;
            null === (Kt = (ht = this.handlers).onTerrainTexturesWanted) || void 0 === Kt || Kt.call(ht)
          } else if (St === Ot.db.KeepAliveDue) {
            var vt, Wt;
            if (jt > Ot.Lb) return this.crash(zt, `KeepAliveDue at ${Xt} of ${jt} bytes`), ot;
            null === (vt = (Wt = this.handlers).onKeepAlive) || void 0 === vt || vt.call(Wt, new Uint8Array(mt, Vt + tt, jt).slice())
          } else if (St === Ot.db.ConnectionState) {
            if (jt !== Ot.s) return this.crash(zt, `ConnectionState at ${Xt} of ${jt} bytes`), ot;
            this.netOffsets.push(Xt), Dt.push({
              type: "connection",
              conn: ct(0),
              phase: ct(1),
              code: 0 | ct(2)
            })
          } else if (St === Ot.db.EnvLighting || St === Ot.db.SkyImages) {
            if (jt !== (St === Ot.db.EnvLighting ? Ot.Z : Ot.Bd)) return this.crash(zt, `event ${St} at ${Xt} of ${jt} bytes`), ot;
            this.envEvents.push({
              kind: St,
              payload: new Uint8Array(mt.slice(Vt + tt, Vt + tt + jt))
            })
          } else if (St === Ot.db.ReconnectGrace) {
            if (jt !== Ot.Dc) return this.crash(zt, `ReconnectGrace at ${Xt} of ${jt} bytes`), ot;
            const tt = ct(2);
            this.graceEvents.push({
              conn: ct(0),
              graceMs: ct(1),
              sessionBased: 0 !== (tt & Ot.Zc.SessionBased),
              replayOffer: 0 !== (tt & Ot.Zc.ReplayOffer)
            })
          }
          Xt = tt + (0, Ot.Fe)(jt)
        }
        return Dt
      }
      takeSends(tt) {
        this.atSendsStop = !0;
        try {
          tt()
        } catch (et) {
          this.crashOn(ct, et)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(tt) {
        this.forEachOut(Jt, "net-out", Ot.sb.NetOutPtr, Ot.sb.NetOutLen, Ot.ic, 0, ((et, Vt, qt, Dt) => {
          const mt = (0, Ot.ze)(Vt);
          mt === Ot.kc.Frame ? tt((0, Ot.ye)(Vt), qt) : this.crash(Jt, `net-out record at ${Dt} is kind ${mt}, not a frame`)
        }))
      }
      forEachWorkerOut(tt) {
        this.forEachOut(Ct, "worker-out", Ot.sb.WorkerOutPtr, Ot.sb.WorkerOutLen, Ot.Rd, 4, ((et, Vt, qt, Dt) => {
          const mt = 255 & et,
            dt = mt === Ot.he.Init ? this.initOf(qt, Dt) : qt;
          null !== dt && tt(mt, et >>> 8 & 16777215, dt)
        }))
      }
      initOf(tt, et) {
        const Vt = this.memory().buffer;
        if (tt.byteLength !== Ot.vb) return this.crash(Ct, `worker-out Init record at ${et} is ${tt.byteLength} bytes, not a view`), null;
        const qt = new DataView(tt.buffer, tt.byteOffset, Ot.vb),
          Dt = qt.getUint32(0, !0),
          mt = qt.getUint32(4, !0);
        return Dt + mt > Vt.byteLength ? (this.crash(Ct, `worker-out Init record at ${et} names ${mt} bytes at ${Dt} outside ${Vt.byteLength} bytes of memory`), null) : new Uint8Array(Vt, Dt, mt)
      }
      forEachOut(tt, et, Vt, qt, Dt, mt, dt) {
        if (!this.headerReadable()) return;
        const jt = this.headerView(),
          Ht = jt[Vt],
          Xt = jt[qt];
        if (0 === Xt) return;
        const Qt = this.memory().buffer;
        if (Ht % 4 !== 0 || Ht + Xt > Qt.byteLength) return void this.crash(tt, `${et} of ${Xt} bytes at ${Ht} outside ${Qt.byteLength} bytes of memory`);
        const lt = new DataView(Qt, Ht, Xt);
        let Et = 0;
        for (; Et < Xt;) {
          const Vt = Et + Dt,
            qt = Vt <= Xt ? lt.getUint32(Et + mt, !0) : -1;
          if (qt < 0 || qt > Xt - Vt) return void this.crash(tt, `${et} record at ${Et} overruns its ${Xt} bytes`);
          if (dt(lt.getUint32(Et, !0), lt.getUint32(Et + 4, !0), new Uint8Array(Qt, Ht + Vt, qt), Et), this.stopped) return;
          Et = Vt + (0, Ot.Fe)(qt)
        }
      }
      forEachEvent(tt) {
        if (this.stopped || null === this.lastHeader) return;
        const et = this.headerView(),
          Vt = et[Ot.sb.EventsPtr],
          qt = et[Ot.sb.EventsLen];
        if (0 === qt) return;
        const Dt = this.memory().buffer;
        if (Vt % 4 !== 0 || Vt + qt > Dt.byteLength) return void this.crash(zt, `events of ${qt} bytes at ${Vt} outside ${Dt.byteLength} bytes of memory`);
        const mt = new DataView(Dt, Vt, qt);
        let dt = 0;
        for (; dt < qt;) {
          const et = dt + Ot.bb,
            Vt = et <= qt ? mt.getUint32(dt, !0) : -1,
            Dt = Vt >>> 16;
          if (Vt < 0 || Dt > qt - et) return void this.crash(zt, `event record at ${dt} overruns its ${qt} bytes`);
          tt(65535 & Vt, mt, et, Dt), dt = et + (0, Ot.Fe)(Dt)
        }
      }
      crashOn(tt, et) {
        et instanceof qt.d ? this.crash(zt, et.message) : this.crash(tt, et)
      }
      crash(tt, et) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: tt,
          error: et,
          header: this.lastHeader
        }))
      }
      headerWord(tt) {
        return this.headerReadable() ? this.headerView()[tt] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(tt) {
        const et = this.loadCountWords();
        return null !== et && (tt.chunksReceived = et[Ot.Vb.ChunksReceived], tt.chunksCancelled = this.headerView()[Ot.sb.ChunksCancelled], tt.chunksStored = et[Ot.Vb.ChunksStored], tt.jobsSent = et[Ot.Vb.JobsSent], tt.jobsDone = et[Ot.Vb.JobsDone], tt.jobsInFlight = et[Ot.Vb.JobsInFlight], tt.workersLive = et[Ot.Vb.WorkersLive], tt.workersRetired = et[Ot.Vb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var tt, et;
        const Vt = null !== (tt = null === (et = this.loadCountWords()) || void 0 === et ? void 0 : et[Ot.Vb.ViewQueuedPrograms]) && void 0 !== tt ? tt : 0;
        return 0 === Vt ? null : Vt - 1
      }
      readFirstViewWait(tt, et) {
        const Vt = this.loadCountWords();
        return null === Vt ? null : [Vt[Ot.Vb.FirstViewLinkMs], Vt[Ot.Vb.FirstViewTerrainMs], Vt[Ot.Vb.FirstViewHeldMs], Vt[Ot.Vb.FirstViewOtherMs], Vt[Ot.Vb.FirstViewGaps], Vt[Ot.Vb.FirstViewGapMs], tt, et]
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const tt = this.core.Zy();
        if (0 === tt) return null;
        const et = this.memory().buffer;
        return et !== this.loadCountsBuffer && (this.loadCountsBuffer = et, this.loadCounts = new Uint32Array(et, tt, Ot.Ob)), this.loadCounts
      }
      headerView() {
        const tt = this.memory().buffer;
        return tt !== this.headerBuffer && (this.headerBuffer = tt, this.header = new Uint32Array(tt, this.core.QE(), Ot.qb)), this.header
      }
    }
  },
  40971: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      e: () => Dt
    });
    var Ot = Vt(4851);
    let qt = null;

    function Dt(tt) {
      qt = {
        scanned: !1
      };
      try {
        return tt()
      } finally {
        qt = null
      }
    }

    function mt() {
      const tt = qt;
      if (null === tt) return (0, Ot.h)();
      const et = (0, Ot.h)(!tt.scanned);
      return tt.scanned = !0, et
    }
  },
  41022: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot
    });
    const Ot = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  41037: (tt, et, Vt) => {
    function Ot() {
      return Vt(41044)
    }

    function qt() {
      return Vt(41053)
    }

    function Dt(tt) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(tt)
    }
    Vt.d(et, {
      c: () => Dt,
      d: () => Ot,
      g: () => qt
    })
  },
  36507: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => dt,
      e: () => Ht,
      i: () => mt,
      j: () => Qt
    });
    var Ot = Vt(36489),
      qt = Vt(17);
    const Dt = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function mt(tt) {
      if (tt instanceof WebAssembly.RuntimeError) return !0;
      const et = tt instanceof Error ? tt.stack : void 0;
      return "string" === typeof et && Dt.test(et)
    }

    function dt(tt, et, Vt) {
      var qt;
      const mt = tt instanceof Error ? tt.name : "thrown",
        dt = (tt instanceof Error && null !== (qt = tt.stack) && void 0 !== qt ? qt : "").split("\n").filter((tt => Dt.test(tt))).slice(0, 8).map((tt => tt.trim())),
        jt = null === et ? "wasm memory unknown" : `wasm memory ${Math.round(et/2**20)} MB`,
        Ht = null === Vt.panic ? "" : `, panic: ${(0,Ot.e)(Vt.panic)}`,
        Xt = `${mt}: ${tt instanceof Error?tt.message:String(tt)}`;
      return `${(0,Ot.j)(Vt.kind,Vt.refusedBytes)} ${Xt} (${jt})${Ht}${dt.length>0?` | ${dt.join(" < ")}`:""}`
    }
    const jt = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function Ht(tt) {
      var et;
      let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(tt instanceof Error) || !jt.test(tt.message)) return {};
      if (!("detached" in Vt)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, qt.$)(null === (et = (0, qt.Q)(Vt, "detached")) || void 0 === et ? void 0 : et.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const Xt = 500;

    function Qt(tt) {
      let et = "[object Object]";
      try {
        et = String(tt)
      } catch {}
      if ("[object Object]" !== et) return et;
      try {
        var Vt, Ot;
        return null !== (Vt = null === (Ot = JSON.stringify(tt)) || void 0 === Ot ? void 0 : Ot.slice(0, Xt)) && void 0 !== Vt ? Vt : et
      } catch {
        return et
      }
    }
  },
  41044: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  41053: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36489: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot,
      d: () => Dt,
      e: () => jt,
      h: () => mt,
      j: () => qt
    });
    const Ot = /^alloc_failed (\d+) bytes$/;

    function qt(tt, et) {
      return Dt(tt, et) ? `trap=alloc_failed ${et} bytes` : `trap=${tt}`
    }

    function Dt(tt, et) {
      return "unreachable" === tt && et > 0
    }

    function mt(tt, et, Vt) {
      const Ot = function(tt) {
        return tt instanceof WebAssembly.RuntimeError ? /unreachable/i.test(tt.message) ? "unreachable" : /out of bounds/i.test(tt.message) ? "out_of_bounds" : "runtime_error" : (tt instanceof RangeError || tt instanceof Error && "InternalError" === tt.name) && /call stack|recursion/i.test(tt.message) ? "stack_overflow" : "js_error"
      }(tt);
      if ("unreachable" !== Ot) return {
        kind: Ot,
        panic: null,
        refusedBytes: 0
      };
      const qt = et(),
        Dt = Vt();
      return {
        kind: Ot,
        panic: Dt > 0 ? null : qt,
        refusedBytes: Dt
      }
    }
    const dt = 300;

    function jt(tt) {
      return tt.replace(/\s*\n\s*/g, " / ").slice(0, dt)
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);