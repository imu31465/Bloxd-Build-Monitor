export const id = 210;
export const ids = [210];
export const modules = {
  40825: (kk, Fk, Ik) => {
    function Xk(kk, Fk, Ik) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(kk, Fk).getContext("2d", Ik);
      const Xk = document.createElement("canvas");
      return Xk.width = kk, Xk.height = Fk, Xk.getContext("2d", Ik)
    }

    function Tk(kk, Fk) {
      return kk.getContext("2d", Fk)
    }
    Ik.d(Fk, {
      d: () => Tk,
      g: () => Xk
    })
  },
  40781: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => lk
    });
    const Xk = 1 << 20,
      Tk = 1 << 21,
      ik = 1024,
      yk = 2048;

    function lk(kk, Fk, Ik) {
      const lk = kk + Xk,
        ak = Fk + ik,
        qk = Ik + Xk;
      return lk < 0 || lk >= Tk || qk < 0 || qk >= Tk || ak < 0 || ak >= yk ? -1 : (lk * Tk + qk) * yk + ak
    }
  },
  40779: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk,
      g: () => yk,
      i: () => Tk,
      j: () => ik,
      k: () => Lk,
      l: () => qk,
      m: () => ak,
      o: () => lk
    });
    Ik(3403);
    Ik(40781);

    function Xk(kk) {}

    function Tk(kk) {}

    function ik(kk) {}

    function yk(kk) {}

    function lk(kk) {}

    function ak(kk, Fk, Ik) {}

    function qk(kk) {}

    function Lk(kk) {}
  },
  40776: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Pk,
      f: () => ek,
      i: () => Ak,
      k: () => Ek,
      l: () => Gk,
      m: () => pk,
      n: () => xk,
      q: () => Hk,
      r: () => Jk,
      t: () => vk,
      v: () => fk,
      x: () => sk,
      B: () => Ck,
      E: () => Yk,
      F: () => uk,
      I: () => Rk
    });
    var Xk = Ik(4797),
      Tk = Ik(40641),
      ik = (Ik(40779), Ik(15));
    class yk {
      constructor(kk, Fk) {
        this.memory = kk, this.access = Fk, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.St = 0, this.u32 = new ik.j(0), this.f32 = new ik.f(0), this.u8 = new ik.b(0), this.dataView = new ik.g(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.St = this.access.St(), this.buffer = (0, ik.F)(this.memory()), this.u32 = new ik.j(this.buffer, this.ptr, this.St >>> 2), this.f32 = new ik.f(this.buffer, this.ptr, this.St >>> 2), this.u8 = new ik.b(this.buffer, this.ptr, this.St), this.dataView = new ik.g(this.buffer, this.ptr, this.St)
      }
      ensureViews() {
        (0, ik.F)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(kk) {
        return !!this.fits(kk) || (this.dropped++, !1)
      }
      fits(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const Ik = Fk + kk;
        return Ik <= this.St || Ik <= Xk.Lc && 0 !== this.access.reserve(Ik) && (this.refresh(), Ik <= this.St)
      }
      consume(kk) {
        const Fk = this.cursor - kk;
        Fk > 0 && kk > 0 && (this.ensureViews(), this.u8.copyWithin(0, kk, this.cursor)), this.cursor = Fk > 0 ? Fk : 0
      }
      writeRecord(kk, Fk, Ik, Tk, ik) {
        if (!this.room(Xk.pb)) return !1;
        const yk = this.cursor >>> 2;
        return this.u32[yk] = 65535 & kk | (65535 & Fk) << 16, this.f32[yk + 1] = Ik, this.f32[yk + 2] = Tk, this.u32[yk + 3] = ik >>> 0, this.cursor += Xk.pb, !0
      }
      writeOptions(kk, Fk) {
        const Ik = Fk.byteLength,
          Tk = Xk.pb + (0, Xk.pe)(Ik);
        if (!this.fits(Tk)) return !1;
        const ik = this.cursor,
          yk = ik >>> 2;
        this.u32[yk] = Xk.rb.Options, this.u32[yk + 1] = Ik, this.u32[yk + 2] = 0, this.u32[yk + 3] = kk >>> 0;
        const lk = ik + Xk.pb;
        return this.u8.set(Fk, lk), this.u8.fill(0, lk + Ik, ik + Tk), this.cursor += Tk, !0
      }
      writeWorkerRecord(kk, Fk, Ik, Tk, ik, yk) {
        const lk = yk.byteLength,
          ak = Xk.Ld + (0, Xk.pe)(lk);
        if (lk > Xk.Hd) return this.dropped++, !1;
        if (!this.room(ak)) return !1;
        const qk = this.cursor,
          Lk = qk >>> 2;
        this.u32[Lk] = kk >>> 0, this.u32[Lk + 1] = 65535 & Fk | (65535 & Ik) << 16, this.u32[Lk + 2] = Tk >>> 0, this.u32[Lk + 3] = ik >>> 0, this.u32[Lk + 4] = lk;
        const tk = qk + Xk.Ld;
        return this.u8.set(yk, tk), this.u8.fill(0, tk + lk, qk + ak), this.cursor += ak, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(kk, Fk) {
        return this.writeNet(Xk.Wb.Frame, kk, Fk)
      }
      writeOpen(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Xk.Wb.Open, kk, ak(Fk))
      }
      writeClose(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Xk.Wb.Close, kk, ak(Fk))
      }
      writeNet(kk, Fk, Ik) {
        const Tk = Ik.byteLength,
          ik = Xk.Tb + (0, Xk.pe)(Tk);
        if (Tk > Xk.Ob) return this.dropped++, !1;
        if (!this.room(ik)) return !1;
        const yk = this.cursor;
        this.u32[yk >>> 2] = Tk, this.u32[1 + (yk >>> 2)] = (0, Xk.he)(kk, Fk);
        const lk = yk + Xk.Tb;
        return this.u8.set(Ik, lk), this.u8.fill(0, lk + Tk, yk + ik), this.cursor += ik, !0
      }
      Hj(kk, Fk, Ik) {
        const Tk = Xk.t + (0, Xk.pe)(Ik);
        if (!this.room(Tk)) return -1;
        const ik = this.cursor;
        this.u32[ik >>> 2] = 65535 & kk | (65535 & Fk) << 16, this.u32[1 + (ik >>> 2)] = Ik;
        const yk = ik + Xk.t;
        return this.u8.fill(0, yk, ik + Tk), this.cursor += Tk, yk
      }
      growForCmd(kk) {
        return this.fits(Xk.t + (0, Xk.pe)(kk), 0)
      }
      writeCmd(kk, Fk, Ik) {
        const Xk = this.Hj(kk, Fk, Ik.byteLength);
        return !(Xk < 0) && (this.u8.set(Ik, Xk), !0)
      }
      copyWritten(kk, Fk) {
        return this.ensureViews(), this.u8.slice(kk, kk + Fk)
      }
    }
    const lk = new ik.b(0);

    function ak(kk) {
      if (0 === kk) return lk;
      const Fk = new ik.b(Xk.Sb);
      for (let Ik = 0; Ik < Xk.Sb; Ik++) Fk[Ik] = kk >>> 8 * Ik & 255;
      return Fk
    }
    class qk {
      constructor(kk, Fk) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new yk(Fk, {
          ptr: () => kk.ct(),
          St: () => kk.nik(),
          reserve: Fk => kk.Bik(Fk)
        }), this.net = new yk(Fk, {
          ptr: () => kk.Nik(),
          St: () => kk.Cik(),
          reserve: Fk => kk.dik(Fk)
        }), this.worker = new yk(Fk, {
          ptr: () => kk.eyk(),
          St: () => kk.jyk(),
          reserve: Fk => kk.Yik(Fk)
        }), this.cmd = new yk(Fk, {
          ptr: () => kk.Qik(),
          St: () => kk.Pik(),
          reserve: Fk => kk.Kik(Fk)
        })
      }
      reset(kk, Fk, Ik) {
        this.input.consume(kk), this.worker.consume(Fk), this.cmd.consume(Ik)
      }
    }
    var Lk = Ik(36249),
      tk = Ik(2338),
      Zk = Ik(4794),
      jk = Ik(40787);
    const ek = "coreFrame",
      wk = "fatalStatus",
      Hk = "otherCall",
      Jk = "coreRings",
      xk = "netIn",
      Pk = "abi",
      Kk = "netOut",
      Qk = "workerOut",
      sk = "worldgenHost",
      Vk = "eventWalker",
      zk = "netEvent",
      Sk = "envEvent",
      vk = "sharedTables",
      Ek = "inputAction",
      Ok = "frameSends",
      nk = new Set([Vk, zk, Sk, Ok, Ek, vk]),
      Gk = "wasmMemory",
      pk = "meshHost";

    function uk(kk, Fk) {
      kk.forEachWorkerOut(((Ik, Tk, ik) => {
        if ((0, Xk.ce)(Ik)) try {
          var yk;
          null === (yk = Fk.worldgen) || void 0 === yk || yk.take(Ik, ik)
        } catch (ak) {
          kk.crash(sk, ak)
        } else try {
          var lk;
          null === (lk = Fk.mesh) || void 0 === lk || lk.take(Ik, Tk, ik)
        } catch (ak) {
          kk.crash(pk, ak)
        }
      }))
    }
    const bk = 1048576;

    function Rk(kk, Fk) {
      let Ik = !1;
      const Xk = () => {
        Ik = !1, Fk()
      };
      return () => {
        !Ik && kk.cursor >= bk && (Ik = !0, queueMicrotask(Xk))
      }
    }
    const Uk = new Set([wk, Hk, sk, pk]);

    function Ck(kk) {
      return nk.has(kk.site) ? kk.error instanceof WebAssembly.RuntimeError || (0, Tk.g)(kk.error) : !Uk.has(kk.site) && kk.error instanceof Error
    }
    const Nk = "events",
      ck = [],
      Wk = "debugLog",
      fk = "terrainTextures",
      Bk = "sunShadowTextures",
      dk = new TextDecoder;

    function Yk(kk, Fk) {
      const {
        site: Ik,
        error: Tk,
        header: ik
      } = kk, yk = ik ? (0, Xk.ae)(ik.lastError) : "noFrame", lk = `CORE-${Ik===wk?yk:Ik}`, ak = null === Tk || void 0 === Tk ? "" : ` ${(0,Lk.j)(Tk)}`, qk = {
        site: Ik,
        wasmBuild: Fk.wasm,
        clientVersion: Fk.client
      };
      return ik && (qk.status = String(ik.status), qk.lastError = yk, qk.lastErrorCode = String(ik.lastError), qk.lastErrorDetail = String(ik.lastErrorDetail), qk.errorCount = String(ik.errorCount), qk.frameIndex = String(ik.frameIndex), qk.tickIndex = String(ik.tickIndex)), {
        code: lk,
        message: `core ${Ik}, last error ${yk};${ak}`,
        details: qk
      }
    }
    class Ak {
      constructor(kk, Fk, Ik) {
        this.core = kk, this.memory = Fk, this.handlers = Ik, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: ck,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new qk(kk, Fk)
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
      framePaces(kk) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.vik(kk)
        } catch (Fk) {
          return this.crash(ek, Fk), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(kk, Fk) {
        var Ik;
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: yk,
          net: lk,
          worker: ak,
          cmd: qk
        } = this.rings, Lk = lk.cursor, tk = Fk && !this.drawsHeld;
        let Hk = Xk.O.Fatal;
        const Jk = yk.cursor,
          Pk = ak.cursor,
          Kk = qk.cursor;
        let Qk, sk = null;
        const Sk = this.handlers.onSends;
        try {
          const Fk = (tk ? Xk.$.Draws : 0) | (ik ? Xk.$.NetAll : 0) | (Sk ? Xk.$.StopForSends : 0);
          Hk = (0, jk.d)((() => {
            let Ik = this.core.frame(kk, Jk, lk.cursor, Pk, Fk, Kk);
            for (; Ik === Xk.ld && Sk;) {
              var Tk;
              if (Qk ??= null === (Tk = this.gameHost) || void 0 === Tk ? void 0 : Tk.takeFault(), void 0 === Qk && !this.takeSends(Sk)) return Xk.O.Fatal;
              Ik = this.core.bH()
            }
            return Ik
          }))
        } catch (dk) {
          sk = {
            error: dk
          }
        }
        Qk ??= null === (Ik = this.gameHost) || void 0 === Ik ? void 0 : Ik.takeFault();
        const vk = this.stopped || null !== sk || void 0 !== Qk;
        this.rings.reset(vk ? yk.cursor : Jk, vk ? ak.cursor : Pk, vk ? qk.cursor : Kk);
        const Ek = null === sk && void 0 === Qk,
          Ok = Ek && !this.stopped && Hk === Xk.O.Fatal && 0 === this.core.Jj(),
          nk = Ek && !Ok ? this.headerView() : null,
          Gk = Ok ? {
            ...null !== (pk = this.lastHeader) && void 0 !== pk ? pk : (0, Xk.se)(new Uint32Array(Xk.db)),
            status: Xk.O.Fatal,
            lastError: Xk.N.CoreBusy,
            lastErrorDetail: 0
          } : null === nk ? null : (0, Xk.se)(nk);
        var pk;
        null !== Gk && (this.lastHeader = Gk);
        const uk = null !== Gk && Hk !== Xk.O.Fatal,
          bk = uk && null !== nk ? nk[Xk.eb.NetInKept] : 0,
          Rk = uk && bk <= Lk && bk % 4 === 0 ? bk : null;
        var Uk, Ck;
        null !== Gk && null !== Rk && Hk === Xk.O.Errors && (null === (Uk = (Ck = this.handlers).onErrors) || void 0 === Uk || Uk.call(Ck, Gk));
        const Nk = null === Rk ? ck : this.readEvents(Lk);
        if (lk.consume(Lk - (null !== Rk && void 0 !== Rk ? Rk : 0)), this.netKept = null !== Rk && void 0 !== Rk ? Rk : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== sk) return this.crash(ek, void 0 === Qk || Qk instanceof Tk.b ? sk.error : Qk), !1;
        if (void 0 !== Qk || null === Gk) return this.crashOn(ek, Qk), !1;
        if (Ok) return this.crash(wk, null), !1;
        const Wk = this.headerView()[Xk.eb.FrameDraw];
        if (this.lastFrameKind = (0, Zk.e)(tk, Wk), Hk === Xk.O.Fatal) return this.crash(wk, null), !1;
        if (null === Rk) return this.crash(xk, `the core kept ${bk} of ${Lk} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const kk = this.frameEvents,
            Fk = this.headerView();
          kk.ptr = Fk[Xk.eb.EventsPtr], kk.len = Fk[Xk.eb.EventsLen], kk.net = Nk, kk.kind = this.lastFrameKind;
          try {
            this.eventWalker(kk)
          } catch (dk) {
            return this.crashOn(Vk, dk), !1
          }
          return this.handEnvEvents()
        }
        for (const Xk of Nk) {
          if (this.stopped) return !1;
          try {
            var fk, Bk;
            null === (fk = (Bk = this.handlers).onNetEvent) || void 0 === fk || fk.call(Bk, Xk)
          } catch (dk) {
            return this.crashOn(zk, dk), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const ik of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var kk, Fk;
            null === (kk = (Fk = this.handlers).onReconnectGrace) || void 0 === kk || kk.call(Fk, ik)
          } catch (Tk) {
            return this.crashOn(zk, Tk), !1
          }
        }
        for (const ik of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var Ik, Xk;
            null === (Ik = (Xk = this.handlers).onEnvEvent) || void 0 === Ik || Ik.call(Xk, ik)
          } catch (Tk) {
            return this.crashOn(Sk, Tk), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(kk) {
        this.eventWalker = kk
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: kk
        } = this.rings;
        try {
          const Fk = this.unsentUiPrefs;
          Fk && kk.writeRecord(Xk.rb.UiPrefs, 0, Fk.nametagCutDistance, 0, (0, Xk.ue)(Fk)) && (this.unsentUiPrefs = null);
          const Ik = this.unsentEnvPrefs;
          Ik && kk.writeRecord(Xk.rb.EnvPrefs, (0, Xk.be)(Ik), Ik.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const Tk = this.unsentLookPrefs;
          Tk && kk.writeRecord(Xk.rb.Sensitivity, 0, Tk.mouse, Tk.touch, (0, tk.h)(Tk.fovPercent)) && (this.unsentLookPrefs = null);
          let ik = 0;
          for (const {
              aux: Xk,
              payload: yk
            }
            of this.unsentOptions) {
            if (!kk.writeOptions(Xk, yk)) {
              if (kk.cursor > 0) break;
              this.optionsDropped++
            }
            ik++
          }
          ik > 0 && this.unsentOptions.splice(0, ik)
        } catch (Fk) {
          return this.crash(Jk, Fk), !1
        }
        return !0
      }
      setHoldDraws(kk) {
        this.drawsHeld = kk
      }
      setUiPrefs(kk) {
        this.unsentUiPrefs = {
          ...kk
        }
      }
      setEnvPrefs(kk) {
        this.unsentEnvPrefs = {
          ...kk
        }
      }
      setLookPrefs(kk) {
        this.unsentLookPrefs = {
          ...kk
        }
      }
      queueOptions(kk, Fk) {
        return !this.isStopped && (Fk.byteLength > Xk.Zb.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: kk,
          payload: Fk
        }), !0))
      }
      setChunkCap(kk) {
        return this.callCore("setChunkCap", null, (Fk => Fk.Mik(kk)))
      }
      shedMemory(kk) {
        const Fk = this.callCore("shedMemory", null, (Fk => Fk.lyk(kk)));
        return 0 === Fk ? null : Fk
      }
      addDistanceInUse() {
        const kk = this.callCore("addDistanceInUse", null, (kk => kk.eik()));
        return 0 === kk ? null : kk
      }
      setChunkAddDistance(kk, Fk) {
        return this.callCore("setChunkAddDistance", !1, (Ik => Ik.Dik(kk, Fk)))
      }
      setGameHost(kk) {
        return this.callCore("setGameHost", !1, (Fk => (Fk.oik(kk), this.gameHost = kk, !0)))
      }
      setAntiCheatProbes(kk) {
        return this.callCore("setAntiCheatProbes", !1, (Fk => Fk.hik(kk)))
      }
      setAmbientOcclusion(kk) {
        this.callCore("setAmbientOcclusion", void 0, (Fk => {
          Fk.mik(kk)
        }))
      }
      setPoseLod(kk) {
        this.callCore("setPoseLod", void 0, (Fk => {
          Fk.Fyk(kk)
        }))
      }
      setDebugLog(kk, Fk) {
        this.callCore(Wk, void 0, (Ik => {
          Ik.OH(kk, Fk)
        }))
      }
      takeDebugLog(kk) {
        return this.callCore(Wk, [], (Fk => Fk.nH(kk)))
      }
      setTextureLayers(kk) {
        return this.callCore("setTextureLayers", !1, (Fk => Fk.yyk(kk)))
      }
      setBlockColours(kk) {
        let {
          blocks: Fk,
          counts: Ik,
          values: Xk
        } = kk;
        return this.callCore("setBlockColours", !1, (kk => kk.hIk(Fk, Ik, Xk)))
      }
      terrainTextureNames() {
        return this.callCore(fk, [], (kk => kk.Zyk()))
      }
      setTerrainTextures(kk, Fk, Ik, Xk) {
        return this.callCore(fk, !1, (Tk => Tk.Tyk(kk, Ik, Fk, Xk)))
      }
      setShaderPack(kk, Fk, Ik, Xk, Tk, ik) {
        return this.callCore("setShaderPack", !1, (yk => {
          var lk, ak;
          return null !== (lk = null === (ak = yk.aXk) || void 0 === ak ? void 0 : ak.call(yk, kk, Fk, Ik, Xk, Tk, ik)) && void 0 !== lk && lk
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(Bk, null, (kk => {
          var Fk, Ik;
          return null !== (Fk = null === (Ik = kk.ayk) || void 0 === Ik ? void 0 : Ik.call(kk)) && void 0 !== Fk ? Fk : null
        }))
      }
      setSunShadowTexture(kk, Fk, Ik, Xk, Tk) {
        this.callCore(Bk, void 0, (ik => {
          var yk;
          null === (yk = ik.Xyk) || void 0 === yk || yk.call(ik, kk, Fk, Ik, Xk, Tk)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(Bk, [], (kk => {
          var Fk, Ik;
          return null !== (Fk = null === (Ik = kk.Lyk) || void 0 === Ik ? void 0 : Ik.call(kk)) && void 0 !== Fk ? Fk : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(Bk, null, (kk => {
          var Fk, Ik;
          return null !== (Fk = null === (Ik = kk.qyk) || void 0 === Ik ? void 0 : Ik.call(kk)) && void 0 !== Fk ? Fk : null
        }))
      }
      callCore(kk, Fk, Ik) {
        if (this.stopped) return Fk;
        try {
          return Ik(this.core)
        } catch (Xk) {
          return this.crash(kk, Xk), Fk
        }
      }
      readEvents(kk) {
        this.netOffsets.length = 0;
        const Fk = this.headerView(),
          Ik = Fk[Xk.eb.EventsPtr],
          Tk = Fk[Xk.eb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === Tk) return ck;
        const ik = [],
          yk = this.memory().buffer;
        if (Ik % 4 !== 0 || Ik + Tk > yk.byteLength) return this.crash(Nk, `events of ${Tk} bytes at ${Ik} outside ${yk.byteLength} bytes of memory`), ck;
        const lk = new DataView(yk, Ik, Tk),
          ak = this.rings.net,
          qk = (Fk, Ik) => Fk + Ik <= kk ? ak.copyWritten(Fk, Ik) : null;
        let Lk = 0;
        for (; Lk < Tk;) {
          const kk = Lk + Xk.W,
            Fk = kk <= Tk ? lk.getUint32(Lk, !0) : -1,
            ak = Fk >>> 16;
          if (Fk < 0 || ak > Tk - kk) return this.crash(Nk, `event record at ${Lk} overruns its ${Tk} bytes`), ck;
          const Ek = 65535 & Fk,
            Ok = Fk => lk.getUint32(kk + 4 * Fk, !0);
          if (Ek === Xk.X.RawMessage) {
            const kk = ak >= Xk.Mc.BYTES ? 65535 & Ok(1) : -1,
              Fk = kk === Xk.Mc.STRING_TYPE,
              Ik = ak === (Fk ? Xk.Mc.STRING_TYPE_BYTES : Xk.Mc.BYTES) ? qk(Ok(2), Ok(3)) : null,
              Tk = Fk && Ik ? qk(Ok(4), Ok(5)) : null;
            if (!Ik || Fk && !Tk) return this.crash(Nk, `RawMessage at ${Lk} of ${ak} bytes names bytes outside net-in`), ck;
            this.netOffsets.push(Lk), ik.push({
              type: "message",
              conn: Ok(0),
              oq: kk,
              payloadKind: Ok(1) >>> 16,
              payload: Ik,
              stringType: Tk ? dk.decode(Tk) : null
            })
          } else if (Ek === Xk.X.CoreErrors) {
            var tk, Zk;
            const kk = ak >= 4 ? Ok(0) : -1;
            if (kk < 0 || kk > Xk.L.PAIRS_MAX || ak !== 4 * (Xk.L.FIXED_WORDS + Xk.L.PAIR_WORDS * kk)) return this.crash(Nk, `CoreErrors at ${Lk} of ${ak} bytes`), ck;
            const Fk = [];
            for (let Ik = 0; Ik < kk; Ik++) Fk.push({
              code: Ok(1 + 2 * Ik),
              detail: Ok(2 + 2 * Ik)
            });
            null === (tk = (Zk = this.handlers).onCoreErrors) || void 0 === tk || tk.call(Zk, Fk, Ok(1 + 2 * kk))
          } else if (Ek === Xk.X.RenderReload) {
            var jk, ek;
            if (ak !== Xk.Xc.BYTES) return this.crash(Nk, `RenderReload at ${Lk} of ${ak} bytes`), ck;
            null === (jk = (ek = this.handlers).onRenderReload) || void 0 === jk || jk.call(ek, Ok(0), Ok(1), Ok(2))
          } else if (Ek === Xk.X.JoinPreloadEnded) {
            var wk, Hk;
            if (ak !== Xk.yb.BYTES) return this.crash(Nk, `JoinPreloadEnded at ${Lk} of ${ak} bytes`), ck;
            null === (wk = (Hk = this.handlers).onJoinPreloadEnded) || void 0 === wk || wk.call(Hk, {
              chunks: Ok(Xk.yb.CHUNKS),
              bytes: Ok(Xk.yb.BYTES_HELD),
              asked: Ok(Xk.yb.ASKED),
              replaced: Ok(Xk.yb.REPLACED),
              dropped: Ok(Xk.yb.DROPPED)
            })
          } else if (Ek === Xk.X.Images) {
            var Jk, xk;
            null === (Jk = (xk = this.handlers).onImages) || void 0 === Jk || Jk.call(xk, new Uint8Array(yk.slice(Ik + kk, Ik + kk + ak)))
          } else if (Ek === Xk.X.ModelRequests)
            for (let Ik = 0; Ik < ak >>> 2; Ik++) {
              var Pk, Kk;
              null === (Pk = (Kk = this.handlers).onModelRequest) || void 0 === Pk || Pk.call(Kk, Ok(Ik))
            } else if (Ek === Xk.X.ModelTaken) {
              var Qk, sk;
              if (ak < 4) return this.crash(Nk, `ModelTaken at ${Lk} of ${ak} bytes`), ck;
              const kk = new Uint32Array((ak >>> 2) - 1);
              for (let Fk = 0; Fk < kk.length; Fk++) kk[Fk] = Ok(1 + Fk);
              null === (Qk = (sk = this.handlers).onModelTaken) || void 0 === Qk || Qk.call(sk, Ok(0), kk)
            } else if (Ek === Xk.X.TerrainTexturesWanted) {
            var Vk, zk;
            if (0 !== ak) return this.crash(Nk, `TerrainTexturesWanted at ${Lk} of ${ak} bytes`), ck;
            null === (Vk = (zk = this.handlers).onTerrainTexturesWanted) || void 0 === Vk || Vk.call(zk)
          } else if (Ek === Xk.X.KeepAliveDue) {
            var Sk, vk;
            if (ak > Xk.zb) return this.crash(Nk, `KeepAliveDue at ${Lk} of ${ak} bytes`), ck;
            null === (Sk = (vk = this.handlers).onKeepAlive) || void 0 === Sk || Sk.call(vk, new Uint8Array(yk, Ik + kk, ak).slice())
          } else if (Ek === Xk.X.ConnectionState) {
            if (ak !== Xk.u) return this.crash(Nk, `ConnectionState at ${Lk} of ${ak} bytes`), ck;
            this.netOffsets.push(Lk), ik.push({
              type: "connection",
              conn: Ok(0),
              phase: Ok(1),
              code: 0 | Ok(2)
            })
          } else if (Ek === Xk.X.EnvLighting || Ek === Xk.X.SkyImages) {
            if (ak !== (Ek === Xk.X.EnvLighting ? Xk.U : Xk.rd)) return this.crash(Nk, `event ${Ek} at ${Lk} of ${ak} bytes`), ck;
            this.envEvents.push({
              kind: Ek,
              payload: new Uint8Array(yk.slice(Ik + kk, Ik + kk + ak))
            })
          } else if (Ek === Xk.X.ReconnectGrace) {
            if (ak !== Xk.qc) return this.crash(Nk, `ReconnectGrace at ${Lk} of ${ak} bytes`), ck;
            const kk = Ok(2);
            this.graceEvents.push({
              conn: Ok(0),
              graceMs: Ok(1),
              sessionBased: 0 !== (kk & Xk.Nc.SessionBased),
              replayOffer: 0 !== (kk & Xk.Nc.ReplayOffer)
            })
          }
          Lk = kk + (0, Xk.pe)(ak)
        }
        return ik
      }
      takeSends(kk) {
        this.atSendsStop = !0;
        try {
          kk()
        } catch (Fk) {
          this.crashOn(Ok, Fk)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(kk) {
        this.forEachOut(Kk, "net-out", Xk.eb.NetOutPtr, Xk.eb.NetOutLen, Xk.Tb, 0, ((Fk, Ik, Tk, ik) => {
          const yk = (0, Xk.fe)(Ik);
          yk === Xk.Wb.Frame ? kk((0, Xk.de)(Ik), Tk) : this.crash(Kk, `net-out record at ${ik} is kind ${yk}, not a frame`)
        }))
      }
      forEachWorkerOut(kk) {
        this.forEachOut(Qk, "worker-out", Xk.eb.WorkerOutPtr, Xk.eb.WorkerOutLen, Xk.Gd, 4, ((Fk, Ik, Tk, ik) => {
          const yk = 255 & Fk,
            lk = yk === Xk.Sd.Init ? this.initOf(Tk, ik) : Tk;
          null !== lk && kk(yk, Fk >>> 8 & 16777215, lk)
        }))
      }
      initOf(kk, Fk) {
        const Ik = this.memory().buffer;
        if (kk.byteLength !== Xk.ib) return this.crash(Qk, `worker-out Init record at ${Fk} is ${kk.byteLength} bytes, not a view`), null;
        const Tk = new DataView(kk.buffer, kk.byteOffset, Xk.ib),
          ik = Tk.getUint32(0, !0),
          yk = Tk.getUint32(4, !0);
        return ik + yk > Ik.byteLength ? (this.crash(Qk, `worker-out Init record at ${Fk} names ${yk} bytes at ${ik} outside ${Ik.byteLength} bytes of memory`), null) : new Uint8Array(Ik, ik, yk)
      }
      forEachOut(kk, Fk, Ik, Tk, ik, yk, lk) {
        if (!this.headerReadable()) return;
        const ak = this.headerView(),
          qk = ak[Ik],
          Lk = ak[Tk];
        if (0 === Lk) return;
        const tk = this.memory().buffer;
        if (qk % 4 !== 0 || qk + Lk > tk.byteLength) return void this.crash(kk, `${Fk} of ${Lk} bytes at ${qk} outside ${tk.byteLength} bytes of memory`);
        const Zk = new DataView(tk, qk, Lk);
        let jk = 0;
        for (; jk < Lk;) {
          const Ik = jk + ik,
            Tk = Ik <= Lk ? Zk.getUint32(jk + yk, !0) : -1;
          if (Tk < 0 || Tk > Lk - Ik) return void this.crash(kk, `${Fk} record at ${jk} overruns its ${Lk} bytes`);
          if (lk(Zk.getUint32(jk, !0), Zk.getUint32(jk + 4, !0), new Uint8Array(tk, qk + Ik, Tk), jk), this.stopped) return;
          jk = Ik + (0, Xk.pe)(Tk)
        }
      }
      forEachEvent(kk) {
        if (this.stopped || null === this.lastHeader) return;
        const Fk = this.headerView(),
          Ik = Fk[Xk.eb.EventsPtr],
          Tk = Fk[Xk.eb.EventsLen];
        if (0 === Tk) return;
        const ik = this.memory().buffer;
        if (Ik % 4 !== 0 || Ik + Tk > ik.byteLength) return void this.crash(Nk, `events of ${Tk} bytes at ${Ik} outside ${ik.byteLength} bytes of memory`);
        const yk = new DataView(ik, Ik, Tk);
        let lk = 0;
        for (; lk < Tk;) {
          const Fk = lk + Xk.W,
            Ik = Fk <= Tk ? yk.getUint32(lk, !0) : -1,
            ik = Ik >>> 16;
          if (Ik < 0 || ik > Tk - Fk) return void this.crash(Nk, `event record at ${lk} overruns its ${Tk} bytes`);
          kk(65535 & Ik, yk, Fk, ik), lk = Fk + (0, Xk.pe)(ik)
        }
      }
      crashOn(kk, Fk) {
        Fk instanceof Tk.b ? this.crash(Nk, Fk.message) : this.crash(kk, Fk)
      }
      crash(kk, Fk) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: kk,
          error: Fk,
          header: this.lastHeader
        }))
      }
      headerWord(kk) {
        return this.headerReadable() ? this.headerView()[kk] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(kk) {
        const Fk = this.loadCountWords();
        return null !== Fk && (kk.chunksReceived = Fk[Xk.Jb.ChunksReceived], kk.chunksCancelled = this.headerView()[Xk.eb.ChunksCancelled], kk.chunksStored = Fk[Xk.Jb.ChunksStored], kk.jobsSent = Fk[Xk.Jb.JobsSent], kk.jobsDone = Fk[Xk.Jb.JobsDone], kk.jobsInFlight = Fk[Xk.Jb.JobsInFlight], kk.workersLive = Fk[Xk.Jb.WorkersLive], kk.workersRetired = Fk[Xk.Jb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var kk, Fk;
        const Ik = null !== (kk = null === (Fk = this.loadCountWords()) || void 0 === Fk ? void 0 : Fk[Xk.Jb.ViewQueuedPrograms]) && void 0 !== kk ? kk : 0;
        return 0 === Ik ? null : Ik - 1
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const kk = this.core.EH();
        if (0 === kk) return null;
        const Fk = this.memory().buffer;
        return Fk !== this.loadCountsBuffer && (this.loadCountsBuffer = Fk, this.loadCounts = new Uint32Array(Fk, kk, Xk.Bb)), this.loadCounts
      }
      headerView() {
        const kk = this.memory().buffer;
        return kk !== this.headerBuffer && (this.headerBuffer = kk, this.header = new Uint32Array(kk, this.core.Jj(), Xk.db)), this.header
      }
    }
  },
  40787: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk,
      d: () => ik
    });
    var Xk = Ik(4692);
    let Tk = null;

    function ik(kk) {
      Tk = {
        scanned: !1
      };
      try {
        return kk()
      } finally {
        Tk = null
      }
    }

    function yk() {
      const kk = Tk;
      if (null === kk) return (0, Xk.f)();
      const Fk = (0, Xk.f)(!kk.scanned);
      return kk.scanned = !0, Fk
    }
  },
  40834: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk
    });
    const Xk = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40852: (kk, Fk, Ik) => {
    function Xk() {
      return Ik(40860)
    }

    function Tk() {
      return Ik(40868)
    }

    function ik(kk) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(kk)
    }
    Ik.d(Fk, {
      e: () => ik,
      h: () => Xk,
      i: () => Tk
    })
  },
  36249: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => lk,
      d: () => qk,
      g: () => yk,
      j: () => tk
    });
    var Xk = Ik(36236),
      Tk = Ik(15);
    const ik = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function yk(kk) {
      if (kk instanceof WebAssembly.RuntimeError) return !0;
      const Fk = kk instanceof Error ? kk.stack : void 0;
      return "string" === typeof Fk && ik.test(Fk)
    }

    function lk(kk, Fk, Ik) {
      var Tk;
      const yk = kk instanceof Error ? kk.name : "thrown",
        lk = (kk instanceof Error && null !== (Tk = kk.stack) && void 0 !== Tk ? Tk : "").split("\n").filter((kk => ik.test(kk))).slice(0, 8).map((kk => kk.trim())),
        ak = null === Fk ? "wasm memory unknown" : `wasm memory ${Math.round(Fk/2**20)} MB`,
        qk = null === Ik.panic ? "" : `, panic: ${(0,Xk.k)(Ik.panic)}`,
        Lk = `${yk}: ${kk instanceof Error?kk.message:String(kk)}`;
      return `${(0,Xk.q)(Ik.kind,Ik.refusedBytes)} ${Lk} (${ak})${qk}${lk.length>0?` | ${lk.join(" < ")}`:""}`
    }
    const ak = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function qk(kk) {
      var Fk;
      let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(kk instanceof Error) || !ak.test(kk.message)) return {};
      if (!("detached" in Ik)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, Tk.P)(null === (Fk = (0, Tk.L)(Ik, "detached")) || void 0 === Fk ? void 0 : Fk.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const Lk = 500;

    function tk(kk) {
      let Fk = "[object Object]";
      try {
        Fk = String(kk)
      } catch {}
      if ("[object Object]" !== Fk) return Fk;
      try {
        var Ik, Xk;
        return null !== (Ik = null === (Xk = JSON.stringify(kk)) || void 0 === Xk ? void 0 : Xk.slice(0, Lk)) && void 0 !== Ik ? Ik : Fk
      } catch {
        return Fk
      }
    }
  },
  40860: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40868: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36236: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk,
      g: () => ik,
      k: () => ak,
      m: () => yk,
      q: () => Tk
    });
    const Xk = /^alloc_failed (\d+) bytes$/;

    function Tk(kk, Fk) {
      return ik(kk, Fk) ? `trap=alloc_failed ${Fk} bytes` : `trap=${kk}`
    }

    function ik(kk, Fk) {
      return "unreachable" === kk && Fk > 0
    }

    function yk(kk, Fk, Ik) {
      const Xk = function(kk) {
        return kk instanceof WebAssembly.RuntimeError ? /unreachable/i.test(kk.message) ? "unreachable" : /out of bounds/i.test(kk.message) ? "out_of_bounds" : "runtime_error" : (kk instanceof RangeError || kk instanceof Error && "InternalError" === kk.name) && /call stack|recursion/i.test(kk.message) ? "stack_overflow" : "js_error"
      }(kk);
      if ("unreachable" !== Xk) return {
        kind: Xk,
        panic: null,
        refusedBytes: 0
      };
      const Tk = Fk(),
        ik = Ik();
      return {
        kind: Xk,
        panic: ik > 0 ? null : Tk,
        refusedBytes: ik
      }
    }
    const lk = 300;

    function ak(kk) {
      return kk.replace(/\s*\n\s*/g, " / ").slice(0, lk)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);