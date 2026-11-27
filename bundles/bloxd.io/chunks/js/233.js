export const id = 233;
export const ids = [233];
export const modules = {
  37049: (ee, ie, He) => {
    function ye(ee, ie, He) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(ee, ie).getContext("2d", He);
      const ye = document.createElement("canvas");
      return ye.width = ee, ye.height = ie, ye.getContext("2d", He)
    }

    function be(ee, ie) {
      return ee.getContext("2d", ie)
    }
    He.d(ie, {
      c: () => be,
      f: () => ye
    })
  },
  41899: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue
    });
    const ye = 1 << 20,
      be = 1 << 21,
      Me = 1024,
      Ke = 2048;

    function Ue(ee, ie, He) {
      const Ue = ee + ye,
        Fe = ie + Me,
        Je = He + ye;
      return Ue < 0 || Ue >= be || Je < 0 || Je >= be || Fe < 0 || Fe >= Ke ? -1 : (Ue * be + Je) * Ke + Fe
    }
  },
  41890: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye,
      c: () => Ke,
      e: () => be,
      h: () => Me,
      j: () => oe,
      k: () => Je,
      n: () => Fe,
      q: () => Ue
    });
    He(3811);
    He(41899);

    function ye(ee) {}

    function be(ee) {}

    function Me(ee) {}

    function Ke(ee) {}

    function Ue(ee) {}

    function Fe(ee, ie, He) {}

    function Je(ee) {}

    function oe(ee) {}
  },
  41887: (ee, ie, He) => {
    He.d(ie, {
      c: () => Be,
      d: () => fe,
      h: () => je,
      i: () => we,
      j: () => Ae,
      m: () => Ye,
      p: () => ze,
      q: () => pe,
      u: () => Xe,
      v: () => Ze,
      w: () => me,
      y: () => Oe,
      A: () => Le,
      E: () => ne,
      F: () => Ve,
      G: () => ce
    });
    var ye = He(5271),
      be = He(41743),
      Me = (He(41890), He(8));
    class Ke {
      constructor(ee, ie) {
        this.memory = ee, this.access = ie, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.bk = 0, this.u32 = new Me.h(0), this.f32 = new Me.d(0), this.u8 = new Me.b(0), this.dataView = new Me.f(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.bk = this.access.bk(), this.buffer = (0, Me.E)(this.memory()), this.u32 = new Me.h(this.buffer, this.ptr, this.bk >>> 2), this.f32 = new Me.d(this.buffer, this.ptr, this.bk >>> 2), this.u8 = new Me.b(this.buffer, this.ptr, this.bk), this.dataView = new Me.f(this.buffer, this.ptr, this.bk)
      }
      ensureViews() {
        (0, Me.E)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(ee) {
        return !!this.fits(ee) || (this.dropped++, !1)
      }
      fits(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const He = ie + ee;
        return He <= this.bk || He <= ye.Ac && 0 !== this.access.reserve(He) && (this.refresh(), He <= this.bk)
      }
      consume(ee) {
        const ie = this.cursor - ee;
        ie > 0 && ee > 0 && (this.ensureViews(), this.u8.copyWithin(0, ee, this.cursor)), this.cursor = ie > 0 ? ie : 0
      }
      writeRecord(ee, ie, He, be, Me) {
        if (!this.room(ye.pb)) return !1;
        const Ke = this.cursor >>> 2;
        return this.u32[Ke] = 65535 & ee | (65535 & ie) << 16, this.f32[Ke + 1] = He, this.f32[Ke + 2] = be, this.u32[Ke + 3] = Me >>> 0, this.cursor += ye.pb, !0
      }
      writeOptions(ee, ie) {
        const He = ie.byteLength,
          be = ye.pb + (0, ye.le)(He);
        if (!this.fits(be)) return !1;
        const Me = this.cursor,
          Ke = Me >>> 2;
        this.u32[Ke] = ye.qb.Options, this.u32[Ke + 1] = He, this.u32[Ke + 2] = 0, this.u32[Ke + 3] = ee >>> 0;
        const Ue = Me + ye.pb;
        return this.u8.set(ie, Ue), this.u8.fill(0, Ue + He, Me + be), this.cursor += be, !0
      }
      writeWorkerRecord(ee, ie, He, be, Me, Ke) {
        const Ue = Ke.byteLength,
          Fe = ye.Bd + (0, ye.le)(Ue);
        if (Ue > ye.zd) return this.dropped++, !1;
        if (!this.room(Fe)) return !1;
        const Je = this.cursor,
          oe = Je >>> 2;
        this.u32[oe] = ee >>> 0, this.u32[oe + 1] = 65535 & ie | (65535 & He) << 16, this.u32[oe + 2] = be >>> 0, this.u32[oe + 3] = Me >>> 0, this.u32[oe + 4] = Ue;
        const Re = Je + ye.Bd;
        return this.u8.set(Ke, Re), this.u8.fill(0, Re + Ue, Je + Fe), this.cursor += Fe, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(ee, ie) {
        return this.writeNet(ye.Ub.Frame, ee, ie)
      }
      writeOpen(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(ye.Ub.Open, ee, Fe(ie))
      }
      writeClose(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(ye.Ub.Close, ee, Fe(ie))
      }
      writeNet(ee, ie, He) {
        const be = He.byteLength,
          Me = ye.Rb + (0, ye.le)(be);
        if (be > ye.Kb) return this.dropped++, !1;
        if (!this.room(Me)) return !1;
        const Ke = this.cursor;
        this.u32[Ke >>> 2] = be, this.u32[1 + (Ke >>> 2)] = (0, ye.ie)(ee, ie);
        const Ue = Ke + ye.Rb;
        return this.u8.set(He, Ue), this.u8.fill(0, Ue + be, Ke + Me), this.cursor += Me, !0
      }
      gR(ee, ie, He) {
        const be = ye.m + (0, ye.le)(He);
        if (!this.room(be)) return -1;
        const Me = this.cursor;
        this.u32[Me >>> 2] = 65535 & ee | (65535 & ie) << 16, this.u32[1 + (Me >>> 2)] = He;
        const Ke = Me + ye.m;
        return this.u8.fill(0, Ke, Me + be), this.cursor += be, Ke
      }
      growForCmd(ee) {
        return this.fits(ye.m + (0, ye.le)(ee), 0)
      }
      writeCmd(ee, ie, He) {
        const ye = this.gR(ee, ie, He.byteLength);
        return !(ye < 0) && (this.u8.set(He, ye), !0)
      }
      copyWritten(ee, ie) {
        return this.ensureViews(), this.u8.slice(ee, ee + ie)
      }
    }
    const Ue = new Me.b(0);

    function Fe(ee) {
      if (0 === ee) return Ue;
      const ie = new Me.b(ye.Ob);
      for (let He = 0; He < ye.Ob; He++) ie[He] = ee >>> 8 * He & 255;
      return ie
    }
    class Je {
      constructor(ee, ie) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new Ke(ie, {
          ptr: () => ee.Bk(),
          bk: () => ee.tUe(),
          reserve: ie => ee.LUe(ie)
        }), this.net = new Ke(ie, {
          ptr: () => ee.aUe(),
          bk: () => ee.VUe(),
          reserve: ie => ee.CUe(ie)
        }), this.worker = new Ke(ie, {
          ptr: () => ee.KFe(),
          bk: () => ee.MFe(),
          reserve: ie => ee.vUe(ie)
        }), this.cmd = new Ke(ie, {
          ptr: () => ee.pUe(),
          bk: () => ee.fUe(),
          reserve: ie => ee.TUe(ie)
        })
      }
      reset(ee, ie, He) {
        this.input.consume(ee), this.worker.consume(ie), this.cmd.consume(He)
      }
    }
    var oe = He(36965),
      Re = He(2495),
      ke = He(5265),
      qe = He(41903);
    const fe = "coreFrame",
      Te = "fatalStatus",
      pe = "otherCall",
      Xe = "coreRings",
      ze = "netIn",
      Be = "abi",
      Ee = "netOut",
      ge = "workerOut",
      Oe = "worldgenHost",
      de = "eventWalker",
      We = "netEvent",
      te = "envEvent",
      Ze = "sharedTables",
      we = "inputAction",
      De = "frameSends",
      Pe = new Set([de, We, te, De, we, Ze]),
      Ae = "wasmMemory",
      Ye = "meshHost";

    function Ve(ee, ie) {
      ee.forEachWorkerOut(((He, be, Me) => {
        if ((0, ye._d)(He)) try {
          var Ke;
          null === (Ke = ie.worldgen) || void 0 === Ke || Ke.take(He, Me)
        } catch (Fe) {
          ee.crash(Oe, Fe)
        } else try {
          var Ue;
          null === (Ue = ie.mesh) || void 0 === Ue || Ue.take(He, be, Me)
        } catch (Fe) {
          ee.crash(Ye, Fe)
        }
      }))
    }
    const ae = 1048576;

    function ce(ee, ie) {
      let He = !1;
      const ye = () => {
        He = !1, ie()
      };
      return () => {
        !He && ee.cursor >= ae && (He = !0, queueMicrotask(ye))
      }
    }
    const xe = new Set([Te, pe, Oe, Ye]);

    function Le(ee) {
      return Pe.has(ee.site) ? ee.error instanceof WebAssembly.RuntimeError || (0, be.i)(ee.error) : !xe.has(ee.site) && ee.error instanceof Error
    }
    const Ce = "events",
      ve = [],
      ue = "debugLog",
      me = "terrainTextures",
      le = "sunShadowTextures",
      Se = new TextDecoder;

    function ne(ee, ie) {
      const {
        site: He,
        error: be,
        header: Me
      } = ee, Ke = Me ? (0, ye.Xd)(Me.lastError) : "noFrame", Ue = `CORE-${He===Te?Ke:He}`, Fe = null === be || void 0 === be ? "" : ` ${(0,oe.n)(be)}`, Je = {
        site: He,
        wasmBuild: ie.wasm,
        clientVersion: ie.client
      };
      return Me && (Je.status = String(Me.status), Je.lastError = Ke, Je.lastErrorCode = String(Me.lastError), Je.lastErrorDetail = String(Me.lastErrorDetail), Je.errorCount = String(Me.errorCount), Je.frameIndex = String(Me.frameIndex), Je.tickIndex = String(Me.tickIndex)), {
        code: Ue,
        message: `core ${He}, last error ${Ke};${Fe}`,
        details: Je
      }
    }
    class je {
      constructor(ee, ie, He) {
        this.core = ee, this.memory = ie, this.handlers = He, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: ve,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new Je(ee, ie)
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
      framePaces(ee) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.OUe(ee)
        } catch (ie) {
          return this.crash(fe, ie), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(ee, ie) {
        var He;
        let Me = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: Ke,
          net: Ue,
          worker: Fe,
          cmd: Je
        } = this.rings, oe = Ue.cursor, Re = ie && !this.drawsHeld;
        let pe = ye.F.Fatal;
        const Xe = Ke.cursor,
          Be = Fe.cursor,
          Ee = Je.cursor;
        let ge, Oe = null;
        const te = this.handlers.onSends;
        try {
          const ie = (Re ? ye._.Draws : 0) | (Me ? ye._.NetAll : 0) | (te ? ye._.StopForSends : 0);
          pe = (0, qe.c)((() => {
            let He = this.core.frame(ee, Xe, Ue.cursor, Be, ie, Ee);
            for (; He === ye.$c && te;) {
              var be;
              if (ge ??= null === (be = this.gameHost) || void 0 === be ? void 0 : be.takeFault(), void 0 === ge && !this.takeSends(te)) return ye.F.Fatal;
              He = this.core.yX()
            }
            return He
          }))
        } catch (Se) {
          Oe = {
            error: Se
          }
        }
        ge ??= null === (He = this.gameHost) || void 0 === He ? void 0 : He.takeFault();
        const Ze = this.stopped || null !== Oe || void 0 !== ge;
        this.rings.reset(Ze ? Ke.cursor : Xe, Ze ? Fe.cursor : Be, Ze ? Je.cursor : Ee);
        const we = null === Oe && void 0 === ge,
          De = we && !this.stopped && pe === ye.F.Fatal && 0 === this.core.nq(),
          Pe = we && !De ? this.headerView() : null,
          Ae = De ? {
            ...null !== (Ye = this.lastHeader) && void 0 !== Ye ? Ye : (0, ye.oe)(new Uint32Array(ye.eb)),
            status: ye.F.Fatal,
            lastError: ye.E.CoreBusy,
            lastErrorDetail: 0
          } : null === Pe ? null : (0, ye.oe)(Pe);
        var Ye;
        null !== Ae && (this.lastHeader = Ae);
        const Ve = null !== Ae && pe !== ye.F.Fatal,
          ae = Ve && null !== Pe ? Pe[ye.ib.NetInKept] : 0,
          ce = Ve && ae <= oe && ae % 4 === 0 ? ae : null;
        var xe, Le;
        null !== Ae && null !== ce && pe === ye.F.Errors && (null === (xe = (Le = this.handlers).onErrors) || void 0 === xe || xe.call(Le, Ae));
        const Ce = null === ce ? ve : this.readEvents(oe);
        if (Ue.consume(oe - (null !== ce && void 0 !== ce ? ce : 0)), this.netKept = null !== ce && void 0 !== ce ? ce : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== Oe) return this.crash(fe, void 0 === ge || ge instanceof be.c ? Oe.error : ge), !1;
        if (void 0 !== ge || null === Ae) return this.crashOn(fe, ge), !1;
        if (De) return this.crash(Te, null), !1;
        const ue = this.headerView()[ye.ib.FrameDraw];
        if (this.lastFrameKind = (0, ke.d)(Re, ue), pe === ye.F.Fatal) return this.crash(Te, null), !1;
        if (null === ce) return this.crash(ze, `the core kept ${ae} of ${oe} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const ee = this.frameEvents,
            ie = this.headerView();
          ee.ptr = ie[ye.ib.EventsPtr], ee.len = ie[ye.ib.EventsLen], ee.net = Ce, ee.kind = this.lastFrameKind;
          try {
            this.eventWalker(ee)
          } catch (Se) {
            return this.crashOn(de, Se), !1
          }
          return this.handEnvEvents()
        }
        for (const ye of Ce) {
          if (this.stopped) return !1;
          try {
            var me, le;
            null === (me = (le = this.handlers).onNetEvent) || void 0 === me || me.call(le, ye)
          } catch (Se) {
            return this.crashOn(We, Se), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const Me of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var ee, ie;
            null === (ee = (ie = this.handlers).onReconnectGrace) || void 0 === ee || ee.call(ie, Me)
          } catch (be) {
            return this.crashOn(We, be), !1
          }
        }
        for (const Me of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var He, ye;
            null === (He = (ye = this.handlers).onEnvEvent) || void 0 === He || He.call(ye, Me)
          } catch (be) {
            return this.crashOn(te, be), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(ee) {
        this.eventWalker = ee
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: ee
        } = this.rings;
        try {
          const ie = this.unsentUiPrefs;
          ie && ee.writeRecord(ye.qb.UiPrefs, 0, ie.nametagCutDistance, 0, (0, ye.se)(ie)) && (this.unsentUiPrefs = null);
          const He = this.unsentEnvPrefs;
          He && ee.writeRecord(ye.qb.EnvPrefs, (0, ye.Yd)(He), He.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const be = this.unsentLookPrefs;
          be && ee.writeRecord(ye.qb.Sensitivity, 0, be.mouse, be.touch, (0, Re.j)(be.fovPercent)) && (this.unsentLookPrefs = null);
          let Me = 0;
          for (const {
              aux: ye,
              payload: Ke
            }
            of this.unsentOptions) {
            if (!ee.writeOptions(ye, Ke)) {
              if (ee.cursor > 0) break;
              this.optionsDropped++
            }
            Me++
          }
          Me > 0 && this.unsentOptions.splice(0, Me)
        } catch (ie) {
          return this.crash(Xe, ie), !1
        }
        return !0
      }
      setHoldDraws(ee) {
        this.drawsHeld = ee
      }
      setUiPrefs(ee) {
        this.unsentUiPrefs = {
          ...ee
        }
      }
      setEnvPrefs(ee) {
        this.unsentEnvPrefs = {
          ...ee
        }
      }
      setLookPrefs(ee) {
        this.unsentLookPrefs = {
          ...ee
        }
      }
      queueOptions(ee, ie) {
        return !this.isStopped && (ie.byteLength > ye.Yb.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: ee,
          payload: ie
        }), !0))
      }
      setChunkCap(ee) {
        return this.callCore("setChunkCap", null, (ie => ie.jUe(ee)))
      }
      shedMemory(ee) {
        const ie = this.callCore("shedMemory", null, (ie => ie.QUe(ee)));
        return 0 === ie ? null : ie
      }
      addDistanceInUse() {
        const ee = this.callCore("addDistanceInUse", null, (ee => ee.JUe()));
        return 0 === ee ? null : ee
      }
      setChunkAddDistance(ee, ie) {
        return this.callCore("setChunkAddDistance", !1, (He => He.nUe(ee, ie)))
      }
      setGameHost(ee) {
        return this.callCore("setGameHost", !1, (ie => (ie.gUe(ee), this.gameHost = ee, !0)))
      }
      setAntiCheatProbes(ee) {
        return this.callCore("setAntiCheatProbes", !1, (ie => ie.lUe(ee)))
      }
      setAmbientOcclusion(ee) {
        this.callCore("setAmbientOcclusion", void 0, (ie => {
          ie.mUe(ee)
        }))
      }
      setPoseLod(ee) {
        this.callCore("setPoseLod", void 0, (ie => {
          ie.IUe(ee)
        }))
      }
      setDebugLog(ee, ie) {
        this.callCore(ue, void 0, (He => {
          He.rp(ee, ie)
        }))
      }
      takeDebugLog(ee) {
        return this.callCore(ue, [], (ie => ie.Qp(ee)))
      }
      setTextureLayers(ee) {
        return this.callCore("setTextureLayers", !1, (ie => ie.rUe(ee)))
      }
      setBlockColours(ee) {
        let {
          blocks: ie,
          counts: He,
          values: ye
        } = ee;
        return this.callCore("setBlockColours", !1, (ee => ee.Sbe(ie, He, ye)))
      }
      terrainTextureNames() {
        return this.callCore(me, [], (ee => ee.bFe()))
      }
      setTerrainTextures(ee, ie, He, ye) {
        return this.callCore(me, !1, (be => be.GUe(ee, He, ie, ye)))
      }
      setShaderPack(ee, ie, He, ye, be, Me) {
        return this.callCore("setShaderPack", !1, (Ke => {
          var Ue, Fe;
          return null !== (Ue = null === (Fe = Ke.iMe) || void 0 === Fe ? void 0 : Fe.call(Ke, ee, ie, He, ye, be, Me)) && void 0 !== Ue && Ue
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(le, null, (ee => {
          var ie, He;
          return null !== (ie = null === (He = ee.eFe) || void 0 === He ? void 0 : He.call(ee)) && void 0 !== ie ? ie : null
        }))
      }
      setSunShadowTexture(ee, ie, He, ye, be) {
        this.callCore(le, void 0, (Me => {
          var Ke;
          null === (Ke = Me.NUe) || void 0 === Ke || Ke.call(Me, ee, ie, He, ye, be)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(le, [], (ee => {
          var ie, He;
          return null !== (ie = null === (He = ee.HFe) || void 0 === He ? void 0 : He.call(ee)) && void 0 !== ie ? ie : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(le, null, (ee => {
          var ie, He;
          return null !== (ie = null === (He = ee.iFe) || void 0 === He ? void 0 : He.call(ee)) && void 0 !== ie ? ie : null
        }))
      }
      callCore(ee, ie, He) {
        if (this.stopped) return ie;
        try {
          return He(this.core)
        } catch (ye) {
          return this.crash(ee, ye), ie
        }
      }
      readEvents(ee) {
        this.netOffsets.length = 0;
        const ie = this.headerView(),
          He = ie[ye.ib.EventsPtr],
          be = ie[ye.ib.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === be) return ve;
        const Me = [],
          Ke = this.memory().buffer;
        if (He % 4 !== 0 || He + be > Ke.byteLength) return this.crash(Ce, `events of ${be} bytes at ${He} outside ${Ke.byteLength} bytes of memory`), ve;
        const Ue = new DataView(Ke, He, be),
          Fe = this.rings.net,
          Je = (ie, He) => ie + He <= ee ? Fe.copyWritten(ie, He) : null;
        let oe = 0;
        for (; oe < be;) {
          const ee = oe + ye.S,
            ie = ee <= be ? Ue.getUint32(oe, !0) : -1,
            Fe = ie >>> 16;
          if (ie < 0 || Fe > be - ee) return this.crash(Ce, `event record at ${oe} overruns its ${be} bytes`), ve;
          const we = 65535 & ie,
            De = ie => Ue.getUint32(ee + 4 * ie, !0);
          if (we === ye.U.RawMessage) {
            const ee = Fe >= ye.Cc.BYTES ? 65535 & De(1) : -1,
              ie = ee === ye.Cc.STRING_TYPE,
              He = Fe === (ie ? ye.Cc.STRING_TYPE_BYTES : ye.Cc.BYTES) ? Je(De(2), De(3)) : null,
              be = ie && He ? Je(De(4), De(5)) : null;
            if (!He || ie && !be) return this.crash(Ce, `RawMessage at ${oe} of ${Fe} bytes names bytes outside net-in`), ve;
            this.netOffsets.push(oe), Me.push({
              type: "message",
              conn: De(0),
              nF: ee,
              payloadKind: De(1) >>> 16,
              payload: He,
              stringType: be ? Se.decode(be) : null
            })
          } else if (we === ye.U.CoreErrors) {
            var Re, ke;
            const ee = Fe >= 4 ? De(0) : -1;
            if (ee < 0 || ee > ye.A.PAIRS_MAX || Fe !== 4 * (ye.A.FIXED_WORDS + ye.A.PAIR_WORDS * ee)) return this.crash(Ce, `CoreErrors at ${oe} of ${Fe} bytes`), ve;
            const ie = [];
            for (let He = 0; He < ee; He++) ie.push({
              code: De(1 + 2 * He),
              detail: De(2 + 2 * He)
            });
            null === (Re = (ke = this.handlers).onCoreErrors) || void 0 === Re || Re.call(ke, ie, De(1 + 2 * ee))
          } else if (we === ye.U.RenderReload) {
            var qe, fe;
            if (Fe !== ye.Pc.BYTES) return this.crash(Ce, `RenderReload at ${oe} of ${Fe} bytes`), ve;
            null === (qe = (fe = this.handlers).onRenderReload) || void 0 === qe || qe.call(fe, De(0), De(1), De(2))
          } else if (we === ye.U.JoinPreloadEnded) {
            var Te, pe;
            if (Fe !== ye.ub.BYTES) return this.crash(Ce, `JoinPreloadEnded at ${oe} of ${Fe} bytes`), ve;
            null === (Te = (pe = this.handlers).onJoinPreloadEnded) || void 0 === Te || Te.call(pe, {
              chunks: De(ye.ub.CHUNKS),
              bytes: De(ye.ub.BYTES_HELD),
              asked: De(ye.ub.ASKED),
              replaced: De(ye.ub.REPLACED),
              dropped: De(ye.ub.DROPPED)
            })
          } else if (we === ye.U.Images) {
            var Xe, ze;
            null === (Xe = (ze = this.handlers).onImages) || void 0 === Xe || Xe.call(ze, new Uint8Array(Ke.slice(He + ee, He + ee + Fe)))
          } else if (we === ye.U.ModelRequests)
            for (let He = 0; He < Fe >>> 2; He++) {
              var Be, Ee;
              null === (Be = (Ee = this.handlers).onModelRequest) || void 0 === Be || Be.call(Ee, De(He))
            } else if (we === ye.U.ModelTaken) {
              var ge, Oe;
              if (Fe < 4) return this.crash(Ce, `ModelTaken at ${oe} of ${Fe} bytes`), ve;
              const ee = new Uint32Array((Fe >>> 2) - 1);
              for (let ie = 0; ie < ee.length; ie++) ee[ie] = De(1 + ie);
              null === (ge = (Oe = this.handlers).onModelTaken) || void 0 === ge || ge.call(Oe, De(0), ee)
            } else if (we === ye.U.TerrainTexturesWanted) {
            var de, We;
            if (0 !== Fe) return this.crash(Ce, `TerrainTexturesWanted at ${oe} of ${Fe} bytes`), ve;
            null === (de = (We = this.handlers).onTerrainTexturesWanted) || void 0 === de || de.call(We)
          } else if (we === ye.U.KeepAliveDue) {
            var te, Ze;
            if (Fe > ye.vb) return this.crash(Ce, `KeepAliveDue at ${oe} of ${Fe} bytes`), ve;
            null === (te = (Ze = this.handlers).onKeepAlive) || void 0 === te || te.call(Ze, new Uint8Array(Ke, He + ee, Fe).slice())
          } else if (we === ye.U.ConnectionState) {
            if (Fe !== ye.o) return this.crash(Ce, `ConnectionState at ${oe} of ${Fe} bytes`), ve;
            this.netOffsets.push(oe), Me.push({
              type: "connection",
              conn: De(0),
              phase: De(1),
              code: 0 | De(2)
            })
          } else if (we === ye.U.EnvLighting || we === ye.U.SkyImages) {
            if (Fe !== (we === ye.U.EnvLighting ? ye.P : ye.bd)) return this.crash(Ce, `event ${we} at ${oe} of ${Fe} bytes`), ve;
            this.envEvents.push({
              kind: we,
              payload: new Uint8Array(Ke.slice(He + ee, He + ee + Fe))
            })
          } else if (we === ye.U.ReconnectGrace) {
            if (Fe !== ye.mc) return this.crash(Ce, `ReconnectGrace at ${oe} of ${Fe} bytes`), ve;
            const ee = De(2);
            this.graceEvents.push({
              conn: De(0),
              graceMs: De(1),
              sessionBased: 0 !== (ee & ye.Ec.SessionBased),
              replayOffer: 0 !== (ee & ye.Ec.ReplayOffer)
            })
          }
          oe = ee + (0, ye.le)(Fe)
        }
        return Me
      }
      takeSends(ee) {
        this.atSendsStop = !0;
        try {
          ee()
        } catch (ie) {
          this.crashOn(De, ie)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(ee) {
        this.forEachOut(Ee, "net-out", ye.ib.NetOutPtr, ye.ib.NetOutLen, ye.Rb, 0, ((ie, He, be, Me) => {
          const Ke = (0, ye.ee)(He);
          Ke === ye.Ub.Frame ? ee((0, ye.ce)(He), be) : this.crash(Ee, `net-out record at ${Me} is kind ${Ke}, not a frame`)
        }))
      }
      forEachWorkerOut(ee) {
        this.forEachOut(ge, "worker-out", ye.ib.WorkerOutPtr, ye.ib.WorkerOutLen, ye.vd, 4, ((ie, He, be, Me) => {
          const Ke = 255 & ie,
            Ue = Ke === ye.Od.Init ? this.initOf(be, Me) : be;
          null !== Ue && ee(Ke, ie >>> 8 & 16777215, Ue)
        }))
      }
      initOf(ee, ie) {
        const He = this.memory().buffer;
        if (ee.byteLength !== ye.lb) return this.crash(ge, `worker-out Init record at ${ie} is ${ee.byteLength} bytes, not a view`), null;
        const be = new DataView(ee.buffer, ee.byteOffset, ye.lb),
          Me = be.getUint32(0, !0),
          Ke = be.getUint32(4, !0);
        return Me + Ke > He.byteLength ? (this.crash(ge, `worker-out Init record at ${ie} names ${Ke} bytes at ${Me} outside ${He.byteLength} bytes of memory`), null) : new Uint8Array(He, Me, Ke)
      }
      forEachOut(ee, ie, He, be, Me, Ke, Ue) {
        if (!this.headerReadable()) return;
        const Fe = this.headerView(),
          Je = Fe[He],
          oe = Fe[be];
        if (0 === oe) return;
        const Re = this.memory().buffer;
        if (Je % 4 !== 0 || Je + oe > Re.byteLength) return void this.crash(ee, `${ie} of ${oe} bytes at ${Je} outside ${Re.byteLength} bytes of memory`);
        const ke = new DataView(Re, Je, oe);
        let qe = 0;
        for (; qe < oe;) {
          const He = qe + Me,
            be = He <= oe ? ke.getUint32(qe + Ke, !0) : -1;
          if (be < 0 || be > oe - He) return void this.crash(ee, `${ie} record at ${qe} overruns its ${oe} bytes`);
          if (Ue(ke.getUint32(qe, !0), ke.getUint32(qe + 4, !0), new Uint8Array(Re, Je + He, be), qe), this.stopped) return;
          qe = He + (0, ye.le)(be)
        }
      }
      forEachEvent(ee) {
        if (this.stopped || null === this.lastHeader) return;
        const ie = this.headerView(),
          He = ie[ye.ib.EventsPtr],
          be = ie[ye.ib.EventsLen];
        if (0 === be) return;
        const Me = this.memory().buffer;
        if (He % 4 !== 0 || He + be > Me.byteLength) return void this.crash(Ce, `events of ${be} bytes at ${He} outside ${Me.byteLength} bytes of memory`);
        const Ke = new DataView(Me, He, be);
        let Ue = 0;
        for (; Ue < be;) {
          const ie = Ue + ye.S,
            He = ie <= be ? Ke.getUint32(Ue, !0) : -1,
            Me = He >>> 16;
          if (He < 0 || Me > be - ie) return void this.crash(Ce, `event record at ${Ue} overruns its ${be} bytes`);
          ee(65535 & He, Ke, ie, Me), Ue = ie + (0, ye.le)(Me)
        }
      }
      crashOn(ee, ie) {
        ie instanceof be.c ? this.crash(Ce, ie.message) : this.crash(ee, ie)
      }
      crash(ee, ie) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: ee,
          error: ie,
          header: this.lastHeader
        }))
      }
      headerWord(ee) {
        return this.headerReadable() ? this.headerView()[ee] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(ee) {
        const ie = this.loadCountWords();
        return null !== ie && (ee.chunksReceived = ie[ye.Cb.ChunksReceived], ee.chunksCancelled = this.headerView()[ye.ib.ChunksCancelled], ee.chunksStored = ie[ye.Cb.ChunksStored], ee.jobsSent = ie[ye.Cb.JobsSent], ee.jobsDone = ie[ye.Cb.JobsDone], ee.jobsInFlight = ie[ye.Cb.JobsInFlight], ee.workersLive = ie[ye.Cb.WorkersLive], ee.workersRetired = ie[ye.Cb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var ee, ie;
        const He = null !== (ee = null === (ie = this.loadCountWords()) || void 0 === ie ? void 0 : ie[ye.Cb.ViewQueuedPrograms]) && void 0 !== ee ? ee : 0;
        return 0 === He ? null : He - 1
      }
      readFirstViewWait(ee, ie) {
        const He = this.loadCountWords();
        return null === He ? null : [He[ye.Cb.FirstViewLinkMs], He[ye.Cb.FirstViewTerrainMs], He[ye.Cb.FirstViewHeldMs], He[ye.Cb.FirstViewOtherMs], He[ye.Cb.FirstViewGaps], He[ye.Cb.FirstViewGapMs], ee, ie]
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const ee = this.core.Gp();
        if (0 === ee) return null;
        const ie = this.memory().buffer;
        return ie !== this.loadCountsBuffer && (this.loadCountsBuffer = ie, this.loadCounts = new Uint32Array(ie, ee, ye.xb)), this.loadCounts
      }
      headerView() {
        const ee = this.memory().buffer;
        return ee !== this.headerBuffer && (this.headerBuffer = ee, this.header = new Uint32Array(ee, this.core.nq(), ye.eb)), this.header
      }
    }
  },
  41903: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke,
      c: () => Me
    });
    var ye = He(5153);
    let be = null;

    function Me(ee) {
      be = {
        scanned: !1
      };
      try {
        return ee()
      } finally {
        be = null
      }
    }

    function Ke() {
      const ee = be;
      if (null === ee) return (0, ye.e)();
      const ie = (0, ye.e)(!ee.scanned);
      return ee.scanned = !0, ie
    }
  },
  41948: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye
    });
    const ye = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  37102: (ee, ie, He) => {
    function ye() {
      return He(37108)
    }

    function be() {
      return He(37116)
    }

    function Me(ee) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(ee)
    }
    He.d(ie, {
      b: () => Me,
      e: () => ye,
      h: () => be
    })
  },
  36965: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue,
      g: () => Je,
      k: () => Ke,
      n: () => Re
    });
    var ye = He(36950),
      be = He(8);
    const Me = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Ke(ee) {
      if (ee instanceof WebAssembly.RuntimeError) return !0;
      const ie = ee instanceof Error ? ee.stack : void 0;
      return "string" === typeof ie && Me.test(ie)
    }

    function Ue(ee, ie, He) {
      var be;
      const Ke = ee instanceof Error ? ee.name : "thrown",
        Ue = (ee instanceof Error && null !== (be = ee.stack) && void 0 !== be ? be : "").split("\n").filter((ee => Me.test(ee))).slice(0, 8).map((ee => ee.trim())),
        Fe = null === ie ? "wasm memory unknown" : `wasm memory ${Math.round(ie/2**20)} MB`,
        Je = null === He.panic ? "" : `, panic: ${(0,ye.i)(He.panic)}`,
        oe = `${Ke}: ${ee instanceof Error?ee.message:String(ee)}`;
      return `${(0,ye.m)(He.kind,He.refusedBytes)} ${oe} (${Fe})${Je}${Ue.length>0?` | ${Ue.join(" < ")}`:""}`
    }
    const Fe = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function Je(ee) {
      var ie;
      let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(ee instanceof Error) || !Fe.test(ee.message)) return {};
      if (!("detached" in He)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, be.S)(null === (ie = (0, be.J)(He, "detached")) || void 0 === ie ? void 0 : ie.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const oe = 500;

    function Re(ee) {
      let ie = "[object Object]";
      try {
        ie = String(ee)
      } catch {}
      if ("[object Object]" !== ie) return ie;
      try {
        var He, ye;
        return null !== (He = null === (ye = JSON.stringify(ee)) || void 0 === ye ? void 0 : ye.slice(0, oe)) && void 0 !== He ? He : ie
      } catch {
        return ie
      }
    }
  },
  37108: (ee, ie, He) => {
    ee.exports = He.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37116: (ee, ie, He) => {
    ee.exports = He.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36950: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye,
      g: () => Me,
      i: () => Fe,
      k: () => Ke,
      m: () => be
    });
    const ye = /^alloc_failed (\d+) bytes$/;

    function be(ee, ie) {
      return Me(ee, ie) ? `trap=alloc_failed ${ie} bytes` : `trap=${ee}`
    }

    function Me(ee, ie) {
      return "unreachable" === ee && ie > 0
    }

    function Ke(ee, ie, He) {
      const ye = function(ee) {
        return ee instanceof WebAssembly.RuntimeError ? /unreachable/i.test(ee.message) ? "unreachable" : /out of bounds/i.test(ee.message) ? "out_of_bounds" : "runtime_error" : (ee instanceof RangeError || ee instanceof Error && "InternalError" === ee.name) && /call stack|recursion/i.test(ee.message) ? "stack_overflow" : "js_error"
      }(ee);
      if ("unreachable" !== ye) return {
        kind: ye,
        panic: null,
        refusedBytes: 0
      };
      const be = ie(),
        Me = He();
      return {
        kind: ye,
        panic: Me > 0 ? null : be,
        refusedBytes: Me
      }
    }
    const Ue = 300;

    function Fe(ee) {
      return ee.replace(/\s*\n\s*/g, " / ").slice(0, Ue)
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);