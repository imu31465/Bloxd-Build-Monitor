export const id = 267;
export const ids = [267];
export const modules = {
  40400: (kk, ek, ik) => {
    function Dk(kk, ek, ik) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(kk, ek).getContext("2d", ik);
      const Dk = document.createElement("canvas");
      return Dk.width = kk, Dk.height = ek, Dk.getContext("2d", ik)
    }

    function fk(kk, ek) {
      return kk.getContext("2d", ek)
    }
    ik.d(ek, {
      c: () => fk,
      f: () => Dk
    })
  },
  40364: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => rk
    });
    const Dk = 1 << 20,
      fk = 1 << 21,
      Sk = 1024,
      bk = 2048;

    function rk(kk, ek, ik) {
      const rk = kk + Dk,
        Pk = ek + Sk,
        mk = ik + Dk;
      return rk < 0 || rk >= fk || mk < 0 || mk >= fk || Pk < 0 || Pk >= bk ? -1 : (rk * fk + mk) * bk + Pk
    }
  },
  40358: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk,
      f: () => bk,
      g: () => fk,
      j: () => Sk,
      m: () => Mk,
      n: () => mk,
      p: () => Pk,
      q: () => rk
    });
    ik(3421);
    ik(40364);

    function Dk(kk) {}

    function fk(kk) {}

    function Sk(kk) {}

    function bk(kk) {}

    function rk(kk) {}

    function Pk(kk, ek, ik) {}

    function mk(kk) {}

    function Mk(kk) {}
  },
  40350: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => yk,
      e: () => Uk,
      g: () => Zk,
      j: () => Vk,
      k: () => qk,
      n: () => Ik,
      o: () => pk,
      s: () => wk,
      t: () => lk,
      u: () => dk,
      w: () => Xk,
      x: () => Ck,
      B: () => hk,
      D: () => Tk,
      E: () => zk,
      I: () => vk
    });
    var Dk = ik(4735),
      fk = ik(40221),
      Sk = (ik(40358), ik(11));
    class bk {
      constructor(kk, ek) {
        this.memory = kk, this.access = ek, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.vK = 0, this.u32 = new Sk.i(0), this.f32 = new Sk.g(0), this.u8 = new Sk.c(0), this.dataView = new Sk.h(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.vK = this.access.vK(), this.buffer = (0, Sk.E)(this.memory()), this.u32 = new Sk.i(this.buffer, this.ptr, this.vK >>> 2), this.f32 = new Sk.g(this.buffer, this.ptr, this.vK >>> 2), this.u8 = new Sk.c(this.buffer, this.ptr, this.vK), this.dataView = new Sk.h(this.buffer, this.ptr, this.vK)
      }
      ensureViews() {
        (0, Sk.E)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(kk) {
        return !!this.fits(kk) || (this.dropped++, !1)
      }
      fits(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const ik = ek + kk;
        return ik <= this.vK || ik <= Dk.Wc && 0 !== this.access.reserve(ik) && (this.refresh(), ik <= this.vK)
      }
      consume(kk) {
        const ek = this.cursor - kk;
        ek > 0 && kk > 0 && (this.ensureViews(), this.u8.copyWithin(0, kk, this.cursor)), this.cursor = ek > 0 ? ek : 0
      }
      writeRecord(kk, ek, ik, fk, Sk) {
        if (!this.room(Dk.Fb)) return !1;
        const bk = this.cursor >>> 2;
        return this.u32[bk] = 65535 & kk | (65535 & ek) << 16, this.f32[bk + 1] = ik, this.f32[bk + 2] = fk, this.u32[bk + 3] = Sk >>> 0, this.cursor += Dk.Fb, !0
      }
      writeOptions(kk, ek) {
        const ik = ek.byteLength,
          fk = Dk.Fb + (0, Dk.Ie)(ik);
        if (!this.fits(fk)) return !1;
        const Sk = this.cursor,
          bk = Sk >>> 2;
        this.u32[bk] = Dk.Hb.Options, this.u32[bk + 1] = ik, this.u32[bk + 2] = 0, this.u32[bk + 3] = kk >>> 0;
        const rk = Sk + Dk.Fb;
        return this.u8.set(ek, rk), this.u8.fill(0, rk + ik, Sk + fk), this.cursor += fk, !0
      }
      writeWorkerRecord(kk, ek, ik, fk, Sk, bk) {
        const rk = bk.byteLength,
          Pk = Dk.Wd + (0, Dk.Ie)(rk);
        if (rk > Dk.Td) return this.dropped++, !1;
        if (!this.room(Pk)) return !1;
        const mk = this.cursor,
          Mk = mk >>> 2;
        this.u32[Mk] = kk >>> 0, this.u32[Mk + 1] = 65535 & ek | (65535 & ik) << 16, this.u32[Mk + 2] = fk >>> 0, this.u32[Mk + 3] = Sk >>> 0, this.u32[Mk + 4] = rk;
        const Kk = mk + Dk.Wd;
        return this.u8.set(bk, Kk), this.u8.fill(0, Kk + rk, mk + Pk), this.cursor += Pk, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(kk, ek) {
        return this.writeNet(Dk.lc.Frame, kk, ek)
      }
      writeOpen(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Dk.lc.Open, kk, Pk(ek))
      }
      writeClose(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Dk.lc.Close, kk, Pk(ek))
      }
      writeNet(kk, ek, ik) {
        const fk = ik.byteLength,
          Sk = Dk.ic + (0, Dk.Ie)(fk);
        if (fk > Dk.dc) return this.dropped++, !1;
        if (!this.room(Sk)) return !1;
        const bk = this.cursor;
        this.u32[bk >>> 2] = fk, this.u32[1 + (bk >>> 2)] = (0, Dk.Ae)(kk, ek);
        const rk = bk + Dk.ic;
        return this.u8.set(ik, rk), this.u8.fill(0, rk + fk, bk + Sk), this.cursor += Sk, !0
      }
      tn(kk, ek, ik) {
        const fk = Dk.z + (0, Dk.Ie)(ik);
        if (!this.room(fk)) return -1;
        const Sk = this.cursor;
        this.u32[Sk >>> 2] = 65535 & kk | (65535 & ek) << 16, this.u32[1 + (Sk >>> 2)] = ik;
        const bk = Sk + Dk.z;
        return this.u8.fill(0, bk, Sk + fk), this.cursor += fk, bk
      }
      growForCmd(kk) {
        return this.fits(Dk.z + (0, Dk.Ie)(kk), 0)
      }
      writeCmd(kk, ek, ik) {
        const Dk = this.tn(kk, ek, ik.byteLength);
        return !(Dk < 0) && (this.u8.set(ik, Dk), !0)
      }
      copyWritten(kk, ek) {
        return this.ensureViews(), this.u8.slice(kk, kk + ek)
      }
    }
    const rk = new Sk.c(0);

    function Pk(kk) {
      if (0 === kk) return rk;
      const ek = new Sk.c(Dk.fc);
      for (let ik = 0; ik < Dk.fc; ik++) ek[ik] = kk >>> 8 * ik & 255;
      return ek
    }
    class mk {
      constructor(kk, ek) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new bk(ek, {
          ptr: () => kk.GK(),
          vK: () => kk.USk(),
          reserve: ek => kk.sSk(ek)
        }), this.net = new bk(ek, {
          ptr: () => kk.CSk(),
          vK: () => kk.LSk(),
          reserve: ek => kk.dSk(ek)
        }), this.worker = new bk(ek, {
          ptr: () => kk.gSk(),
          vK: () => kk.OSk(),
          reserve: ek => kk.VSk(ek)
        }), this.cmd = new bk(ek, {
          ptr: () => kk.SSk(),
          vK: () => kk.DSk(),
          reserve: ek => kk.fSk(ek)
        })
      }
      reset(kk, ek, ik) {
        this.input.consume(kk), this.worker.consume(ek), this.cmd.consume(ik)
      }
    }
    var Mk = ik(35843),
      Kk = ik(2395),
      xk = ik(4728),
      nk = ik(40369);
    const Uk = "coreFrame",
      Hk = "fatalStatus",
      wk = "otherCall",
      lk = "coreRings",
      pk = "netIn",
      yk = "abi",
      Yk = "netOut",
      Lk = "workerOut",
      Ck = "worldgenHost",
      Ak = "eventWalker",
      jk = "netEvent",
      sk = "envEvent",
      dk = "sharedTables",
      Vk = "inputAction",
      Fk = "frameSends",
      uk = new Set([Ak, jk, sk, Fk, Vk, dk]),
      qk = "wasmMemory",
      Ik = "meshHost";

    function zk(kk, ek) {
      kk.forEachWorkerOut(((ik, fk, Sk) => {
        if ((0, Dk.pe)(ik)) try {
          var bk;
          null === (bk = ek.worldgen) || void 0 === bk || bk.take(ik, Sk)
        } catch (Pk) {
          kk.crash(Ck, Pk)
        } else try {
          var rk;
          null === (rk = ek.mesh) || void 0 === rk || rk.take(ik, fk, Sk)
        } catch (Pk) {
          kk.crash(Ik, Pk)
        }
      }))
    }
    const Qk = 1048576;

    function vk(kk, ek) {
      let ik = !1;
      const Dk = () => {
        ik = !1, ek()
      };
      return () => {
        !ik && kk.cursor >= Qk && (ik = !0, queueMicrotask(Dk))
      }
    }
    const Ek = new Set([Hk, wk, Ck, Ik]);

    function hk(kk) {
      return uk.has(kk.site) ? kk.error instanceof WebAssembly.RuntimeError || (0, fk.k)(kk.error) : !Ek.has(kk.site) && kk.error instanceof Error
    }
    const ak = "events",
      Wk = [],
      tk = "debugLog",
      Xk = "terrainTextures",
      Bk = "sunShadowTextures",
      ck = new TextDecoder;

    function Tk(kk, ek) {
      const {
        site: ik,
        error: fk,
        header: Sk
      } = kk, bk = Sk ? (0, Dk.le)(Sk.lastError) : "noFrame", rk = `CORE-${ik===Hk?bk:ik}`, Pk = null === fk || void 0 === fk ? "" : ` ${(0,Mk.j)(fk)}`, mk = {
        site: ik,
        wasmBuild: ek.wasm,
        clientVersion: ek.client
      };
      return Sk && (mk.status = String(Sk.status), mk.lastError = bk, mk.lastErrorCode = String(Sk.lastError), mk.lastErrorDetail = String(Sk.lastErrorDetail), mk.errorCount = String(Sk.errorCount), mk.frameIndex = String(Sk.frameIndex), mk.tickIndex = String(Sk.tickIndex)), {
        code: rk,
        message: `core ${ik}, last error ${bk};${Pk}`,
        details: mk
      }
    }
    class Zk {
      constructor(kk, ek, ik) {
        this.core = kk, this.memory = ek, this.handlers = ik, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: Wk,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new mk(kk, ek)
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
          return this.core.KSk(kk)
        } catch (ek) {
          return this.crash(Uk, ek), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(kk, ek) {
        var ik;
        let Sk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: bk,
          net: rk,
          worker: Pk,
          cmd: mk
        } = this.rings, Mk = rk.cursor, Kk = ek && !this.drawsHeld;
        let wk = Dk.T.Fatal;
        const lk = bk.cursor,
          yk = Pk.cursor,
          Yk = mk.cursor;
        let Lk, Ck = null;
        const sk = this.handlers.onSends;
        try {
          const ek = (Kk ? Dk.pb.Draws : 0) | (Sk ? Dk.pb.NetAll : 0) | (sk ? Dk.pb.StopForSends : 0);
          wk = (0, nk.g)((() => {
            let ik = this.core.frame(kk, lk, rk.cursor, yk, ek, Yk);
            for (; ik === Dk.zd && sk;) {
              var fk;
              if (Lk ??= null === (fk = this.gameHost) || void 0 === fk ? void 0 : fk.takeFault(), void 0 === Lk && !this.takeSends(sk)) return Dk.T.Fatal;
              ik = this.core.Nw()
            }
            return ik
          }))
        } catch (tk) {
          Ck = {
            error: tk
          }
        }
        Lk ??= null === (ik = this.gameHost) || void 0 === ik ? void 0 : ik.takeFault();
        const dk = this.stopped || null !== Ck || void 0 !== Lk;
        this.rings.reset(dk ? bk.cursor : lk, dk ? Pk.cursor : yk, dk ? mk.cursor : Yk);
        const Vk = null === Ck && void 0 === Lk ? this.headerView() : null,
          Fk = null === Vk ? null : (0, Dk.Me)(Vk);
        null !== Fk && (this.lastHeader = Fk);
        const uk = null !== Fk && wk !== Dk.T.Fatal,
          qk = uk && null !== Vk ? Vk[Dk.ub.NetInKept] : 0,
          Ik = uk && qk <= Mk && qk % 4 === 0 ? qk : null;
        var zk, Qk;
        null !== Fk && null !== Ik && wk === Dk.T.Errors && (null === (zk = (Qk = this.handlers).onErrors) || void 0 === zk || zk.call(Qk, Fk));
        const vk = null === Ik ? Wk : this.readEvents(Mk);
        if (rk.consume(Mk - (null !== Ik && void 0 !== Ik ? Ik : 0)), this.netKept = null !== Ik && void 0 !== Ik ? Ik : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== Ck) return this.crash(Uk, void 0 === Lk || Lk instanceof fk.c ? Ck.error : Lk), !1;
        if (void 0 !== Lk || null === Fk) return this.crashOn(Uk, Lk), !1;
        const Ek = this.headerView()[Dk.ub.FrameDraw];
        if (this.lastFrameKind = (0, xk.g)(Kk, Ek), wk === Dk.T.Fatal) return this.crash(Hk, null), !1;
        if (null === Ik) return this.crash(pk, `the core kept ${qk} of ${Mk} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const kk = this.frameEvents,
            ek = this.headerView();
          kk.ptr = ek[Dk.ub.EventsPtr], kk.len = ek[Dk.ub.EventsLen], kk.net = vk, kk.kind = this.lastFrameKind;
          try {
            this.eventWalker(kk)
          } catch (tk) {
            return this.crashOn(Ak, tk), !1
          }
          return this.handEnvEvents()
        }
        for (const Dk of vk) {
          if (this.stopped) return !1;
          try {
            var hk, ak;
            null === (hk = (ak = this.handlers).onNetEvent) || void 0 === hk || hk.call(ak, Dk)
          } catch (tk) {
            return this.crashOn(jk, tk), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const Sk of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var kk, ek;
            null === (kk = (ek = this.handlers).onReconnectGrace) || void 0 === kk || kk.call(ek, Sk)
          } catch (fk) {
            return this.crashOn(jk, fk), !1
          }
        }
        for (const Sk of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var ik, Dk;
            null === (ik = (Dk = this.handlers).onEnvEvent) || void 0 === ik || ik.call(Dk, Sk)
          } catch (fk) {
            return this.crashOn(sk, fk), !1
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
          const ek = this.unsentUiPrefs;
          ek && kk.writeRecord(Dk.Hb.UiPrefs, 0, ek.nametagCutDistance, 0, (0, Dk.Qe)(ek)) && (this.unsentUiPrefs = null);
          const ik = this.unsentEnvPrefs;
          ik && kk.writeRecord(Dk.Hb.EnvPrefs, (0, Dk.ne)(ik), ik.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const fk = this.unsentLookPrefs;
          fk && kk.writeRecord(Dk.Hb.Sensitivity, 0, fk.mouse, fk.touch, (0, Kk.k)(fk.fovPercent)) && (this.unsentLookPrefs = null);
          let Sk = 0;
          for (const {
              aux: Dk,
              payload: bk
            }
            of this.unsentOptions) {
            if (!kk.writeOptions(Dk, bk)) {
              if (kk.cursor > 0) break;
              this.optionsDropped++
            }
            Sk++
          }
          Sk > 0 && this.unsentOptions.splice(0, Sk)
        } catch (ek) {
          return this.crash(lk, ek), !1
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
      queueOptions(kk, ek) {
        return !this.isStopped && (ek.byteLength > Dk.sc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: kk,
          payload: ek
        }), !0))
      }
      setChunkCap(kk) {
        return this.callCore("setChunkCap", null, (ek => ek.QSk(kk)))
      }
      shedMemory(kk) {
        const ek = this.callCore("shedMemory", null, (ek => ek.XSk(kk)));
        return 0 === ek ? null : ek
      }
      addDistanceInUse() {
        const kk = this.callCore("addDistanceInUse", null, (kk => kk.Rfk()));
        return 0 === kk ? null : kk
      }
      setChunkAddDistance(kk, ek) {
        return this.callCore("setChunkAddDistance", !1, (ik => ik.zSk(kk, ek)))
      }
      setGameHost(kk) {
        return this.callCore("setGameHost", !1, (ek => (ek.MSk(kk), this.gameHost = kk, !0)))
      }
      setAntiCheatProbes(kk) {
        return this.callCore("setAntiCheatProbes", !1, (ek => ek.qSk(kk)))
      }
      setAmbientOcclusion(kk) {
        this.callCore("setAmbientOcclusion", void 0, (ek => {
          ek.uSk(kk)
        }))
      }
      setPoseLod(kk) {
        this.callCore("setPoseLod", void 0, (ek => {
          ek.ESk(kk)
        }))
      }
      setDebugLog(kk, ek) {
        this.callCore(tk, void 0, (ik => {
          ik.ow(kk, ek)
        }))
      }
      takeDebugLog(kk) {
        return this.callCore(tk, [], (ek => ek.Zw(kk)))
      }
      setTextureLayers(kk) {
        return this.callCore("setTextureLayers", !1, (ek => ek.tSk(kk)))
      }
      setBlockColours(kk) {
        let {
          blocks: ek,
          counts: ik,
          values: Dk
        } = kk;
        return this.callCore("setBlockColours", !1, (kk => kk.Qik(ek, ik, Dk)))
      }
      terrainTextureNames() {
        return this.callCore(Xk, [], (kk => kk.ZSk()))
      }
      setTerrainTextures(kk, ek, ik, Dk) {
        return this.callCore(Xk, !1, (fk => fk.WSk(kk, ik, ek, Dk)))
      }
      setShaderPack(kk, ek, ik, Dk, fk, Sk) {
        return this.callCore("setShaderPack", !1, (bk => {
          var rk, Pk;
          return null !== (rk = null === (Pk = bk.Oik) || void 0 === Pk ? void 0 : Pk.call(bk, kk, ek, ik, Dk, fk, Sk)) && void 0 !== rk && rk
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(Bk, null, (kk => {
          var ek, ik;
          return null !== (ek = null === (ik = kk.BSk) || void 0 === ik ? void 0 : ik.call(kk)) && void 0 !== ek ? ek : null
        }))
      }
      setSunShadowTexture(kk, ek, ik, Dk, fk) {
        this.callCore(Bk, void 0, (Sk => {
          var bk;
          null === (bk = Sk.aSk) || void 0 === bk || bk.call(Sk, kk, ek, ik, Dk, fk)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(Bk, [], (kk => {
          var ek, ik;
          return null !== (ek = null === (ik = kk.TSk) || void 0 === ik ? void 0 : ik.call(kk)) && void 0 !== ek ? ek : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(Bk, null, (kk => {
          var ek, ik;
          return null !== (ek = null === (ik = kk.cSk) || void 0 === ik ? void 0 : ik.call(kk)) && void 0 !== ek ? ek : null
        }))
      }
      callCore(kk, ek, ik) {
        if (this.stopped) return ek;
        try {
          return ik(this.core)
        } catch (Dk) {
          return this.crash(kk, Dk), ek
        }
      }
      readEvents(kk) {
        this.netOffsets.length = 0;
        const ek = this.headerView(),
          ik = ek[Dk.ub.EventsPtr],
          fk = ek[Dk.ub.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === fk) return Wk;
        const Sk = [],
          bk = this.memory().buffer;
        if (ik % 4 !== 0 || ik + fk > bk.byteLength) return this.crash(ak, `events of ${fk} bytes at ${ik} outside ${bk.byteLength} bytes of memory`), Wk;
        const rk = new DataView(bk, ik, fk),
          Pk = this.rings.net,
          mk = (ek, ik) => ek + ik <= kk ? Pk.copyWritten(ek, ik) : null;
        let Mk = 0;
        for (; Mk < fk;) {
          const kk = Mk + Dk.eb,
            ek = kk <= fk ? rk.getUint32(Mk, !0) : -1,
            Pk = ek >>> 16;
          if (ek < 0 || Pk > fk - kk) return this.crash(ak, `event record at ${Mk} overruns its ${fk} bytes`), Wk;
          const Vk = 65535 & ek,
            Fk = ek => rk.getUint32(kk + 4 * ek, !0);
          if (Vk === Dk.ib.RawMessage) {
            const kk = Pk >= Dk.Xc.BYTES ? 65535 & Fk(1) : -1,
              ek = kk === Dk.Xc.STRING_TYPE,
              ik = Pk === (ek ? Dk.Xc.STRING_TYPE_BYTES : Dk.Xc.BYTES) ? mk(Fk(2), Fk(3)) : null,
              fk = ek && ik ? mk(Fk(4), Fk(5)) : null;
            if (!ik || ek && !fk) return this.crash(ak, `RawMessage at ${Mk} of ${Pk} bytes names bytes outside net-in`), Wk;
            this.netOffsets.push(Mk), Sk.push({
              type: "message",
              conn: Fk(0),
              hM: kk,
              payloadKind: Fk(1) >>> 16,
              payload: ik,
              stringType: fk ? ck.decode(fk) : null
            })
          } else if (Vk === Dk.ib.CoreErrors) {
            var Kk, xk;
            const kk = Pk >= 4 ? Fk(0) : -1;
            if (kk < 0 || kk > Dk.L.PAIRS_MAX || Pk !== 4 * (Dk.L.FIXED_WORDS + Dk.L.PAIR_WORDS * kk)) return this.crash(ak, `CoreErrors at ${Mk} of ${Pk} bytes`), Wk;
            const ek = [];
            for (let ik = 0; ik < kk; ik++) ek.push({
              code: Fk(1 + 2 * ik),
              detail: Fk(2 + 2 * ik)
            });
            null === (Kk = (xk = this.handlers).onCoreErrors) || void 0 === Kk || Kk.call(xk, ek, Fk(1 + 2 * kk))
          } else if (Vk === Dk.ib.RenderReload) {
            var nk, Uk;
            if (Pk !== Dk.kd.BYTES) return this.crash(ak, `RenderReload at ${Mk} of ${Pk} bytes`), Wk;
            null === (nk = (Uk = this.handlers).onRenderReload) || void 0 === nk || nk.call(Uk, Fk(0), Fk(1), Fk(2))
          } else if (Vk === Dk.ib.JoinPreloadEnded) {
            var Hk, wk;
            if (Pk !== Dk.Lb.BYTES) return this.crash(ak, `JoinPreloadEnded at ${Mk} of ${Pk} bytes`), Wk;
            null === (Hk = (wk = this.handlers).onJoinPreloadEnded) || void 0 === Hk || Hk.call(wk, {
              chunks: Fk(Dk.Lb.CHUNKS),
              bytes: Fk(Dk.Lb.BYTES_HELD),
              asked: Fk(Dk.Lb.ASKED),
              replaced: Fk(Dk.Lb.REPLACED),
              dropped: Fk(Dk.Lb.DROPPED)
            })
          } else if (Vk === Dk.ib.Images) {
            var lk, pk;
            null === (lk = (pk = this.handlers).onImages) || void 0 === lk || lk.call(pk, new Uint8Array(bk.slice(ik + kk, ik + kk + Pk)))
          } else if (Vk === Dk.ib.ModelRequests)
            for (let ik = 0; ik < Pk >>> 2; ik++) {
              var yk, Yk;
              null === (yk = (Yk = this.handlers).onModelRequest) || void 0 === yk || yk.call(Yk, Fk(ik))
            } else if (Vk === Dk.ib.ModelTaken) {
              var Lk, Ck;
              if (Pk < 4) return this.crash(ak, `ModelTaken at ${Mk} of ${Pk} bytes`), Wk;
              const kk = new Uint32Array((Pk >>> 2) - 1);
              for (let ek = 0; ek < kk.length; ek++) kk[ek] = Fk(1 + ek);
              null === (Lk = (Ck = this.handlers).onModelTaken) || void 0 === Lk || Lk.call(Ck, Fk(0), kk)
            } else if (Vk === Dk.ib.TerrainTexturesWanted) {
            var Ak, jk;
            if (0 !== Pk) return this.crash(ak, `TerrainTexturesWanted at ${Mk} of ${Pk} bytes`), Wk;
            null === (Ak = (jk = this.handlers).onTerrainTexturesWanted) || void 0 === Ak || Ak.call(jk)
          } else if (Vk === Dk.ib.KeepAliveDue) {
            var sk, dk;
            if (Pk > Dk.Mb) return this.crash(ak, `KeepAliveDue at ${Mk} of ${Pk} bytes`), Wk;
            null === (sk = (dk = this.handlers).onKeepAlive) || void 0 === sk || sk.call(dk, new Uint8Array(bk, ik + kk, Pk).slice())
          } else if (Vk === Dk.ib.ConnectionState) {
            if (Pk !== Dk.C) return this.crash(ak, `ConnectionState at ${Mk} of ${Pk} bytes`), Wk;
            this.netOffsets.push(Mk), Sk.push({
              type: "connection",
              conn: Fk(0),
              phase: Fk(1),
              code: 0 | Fk(2)
            })
          } else if (Vk === Dk.ib.EnvLighting || Vk === Dk.ib.SkyImages) {
            if (Pk !== (Vk === Dk.ib.EnvLighting ? Dk.bb : Dk.Cd)) return this.crash(ak, `event ${Vk} at ${Mk} of ${Pk} bytes`), Wk;
            this.envEvents.push({
              kind: Vk,
              payload: new Uint8Array(bk.slice(ik + kk, ik + kk + Pk))
            })
          } else if (Vk === Dk.ib.ReconnectGrace) {
            if (Pk !== Dk.Hc) return this.crash(ak, `ReconnectGrace at ${Mk} of ${Pk} bytes`), Wk;
            const kk = Fk(2);
            this.graceEvents.push({
              conn: Fk(0),
              graceMs: Fk(1),
              sessionBased: 0 !== (kk & Dk.Zc.SessionBased),
              replayOffer: 0 !== (kk & Dk.Zc.ReplayOffer)
            })
          }
          Mk = kk + (0, Dk.Ie)(Pk)
        }
        return Sk
      }
      takeSends(kk) {
        this.atSendsStop = !0;
        try {
          kk()
        } catch (ek) {
          this.crashOn(Fk, ek)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(kk) {
        this.forEachOut(Yk, "net-out", Dk.ub.NetOutPtr, Dk.ub.NetOutLen, Dk.ic, 0, ((ek, ik, fk, Sk) => {
          const bk = (0, Dk.xe)(ik);
          bk === Dk.lc.Frame ? kk((0, Dk.te)(ik), fk) : this.crash(Yk, `net-out record at ${Sk} is kind ${bk}, not a frame`)
        }))
      }
      forEachWorkerOut(kk) {
        this.forEachOut(Lk, "worker-out", Dk.ub.WorkerOutPtr, Dk.ub.WorkerOutLen, Dk.Sd, 4, ((ek, ik, fk, Sk) => {
          const bk = 255 & ek,
            rk = bk === Dk.ge.Init ? this.initOf(fk, Sk) : fk;
          null !== rk && kk(bk, ek >>> 8 & 16777215, rk)
        }))
      }
      initOf(kk, ek) {
        const ik = this.memory().buffer;
        if (kk.byteLength !== Dk.yb) return this.crash(Lk, `worker-out Init record at ${ek} is ${kk.byteLength} bytes, not a view`), null;
        const fk = new DataView(kk.buffer, kk.byteOffset, Dk.yb),
          Sk = fk.getUint32(0, !0),
          bk = fk.getUint32(4, !0);
        return Sk + bk > ik.byteLength ? (this.crash(Lk, `worker-out Init record at ${ek} names ${bk} bytes at ${Sk} outside ${ik.byteLength} bytes of memory`), null) : new Uint8Array(ik, Sk, bk)
      }
      forEachOut(kk, ek, ik, fk, Sk, bk, rk) {
        if (!this.headerReadable()) return;
        const Pk = this.headerView(),
          mk = Pk[ik],
          Mk = Pk[fk];
        if (0 === Mk) return;
        const Kk = this.memory().buffer;
        if (mk % 4 !== 0 || mk + Mk > Kk.byteLength) return void this.crash(kk, `${ek} of ${Mk} bytes at ${mk} outside ${Kk.byteLength} bytes of memory`);
        const xk = new DataView(Kk, mk, Mk);
        let nk = 0;
        for (; nk < Mk;) {
          const ik = nk + Sk,
            fk = ik <= Mk ? xk.getUint32(nk + bk, !0) : -1;
          if (fk < 0 || fk > Mk - ik) return void this.crash(kk, `${ek} record at ${nk} overruns its ${Mk} bytes`);
          if (rk(xk.getUint32(nk, !0), xk.getUint32(nk + 4, !0), new Uint8Array(Kk, mk + ik, fk), nk), this.stopped) return;
          nk = ik + (0, Dk.Ie)(fk)
        }
      }
      forEachEvent(kk) {
        if (this.stopped || null === this.lastHeader) return;
        const ek = this.headerView(),
          ik = ek[Dk.ub.EventsPtr],
          fk = ek[Dk.ub.EventsLen];
        if (0 === fk) return;
        const Sk = this.memory().buffer;
        if (ik % 4 !== 0 || ik + fk > Sk.byteLength) return void this.crash(ak, `events of ${fk} bytes at ${ik} outside ${Sk.byteLength} bytes of memory`);
        const bk = new DataView(Sk, ik, fk);
        let rk = 0;
        for (; rk < fk;) {
          const ek = rk + Dk.eb,
            ik = ek <= fk ? bk.getUint32(rk, !0) : -1,
            Sk = ik >>> 16;
          if (ik < 0 || Sk > fk - ek) return void this.crash(ak, `event record at ${rk} overruns its ${fk} bytes`);
          kk(65535 & ik, bk, ek, Sk), rk = ek + (0, Dk.Ie)(Sk)
        }
      }
      crashOn(kk, ek) {
        ek instanceof fk.c ? this.crash(ak, ek.message) : this.crash(kk, ek)
      }
      crash(kk, ek) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: kk,
          error: ek,
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
        const ek = this.loadCountWords();
        return null !== ek && (kk.chunksReceived = ek[Dk.Xb.ChunksReceived], kk.chunksCancelled = this.headerView()[Dk.ub.ChunksCancelled], kk.chunksStored = ek[Dk.Xb.ChunksStored], kk.jobsSent = ek[Dk.Xb.JobsSent], kk.jobsDone = ek[Dk.Xb.JobsDone], kk.jobsInFlight = ek[Dk.Xb.JobsInFlight], kk.workersLive = ek[Dk.Xb.WorkersLive], kk.workersRetired = ek[Dk.Xb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var kk, ek;
        const ik = null !== (kk = null === (ek = this.loadCountWords()) || void 0 === ek ? void 0 : ek[Dk.Xb.ViewQueuedPrograms]) && void 0 !== kk ? kk : 0;
        return 0 === ik ? null : ik - 1
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const kk = this.core.Tw();
        if (0 === kk) return null;
        const ek = this.memory().buffer;
        return ek !== this.loadCountsBuffer && (this.loadCountsBuffer = ek, this.loadCounts = new Uint32Array(ek, kk, Dk.Ob)), this.loadCounts
      }
      headerView() {
        const kk = this.memory().buffer;
        return kk !== this.headerBuffer && (this.headerBuffer = kk, this.header = new Uint32Array(kk, this.core.Xn(), Dk.tb)), this.header
      }
    }
  },
  40369: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk,
      g: () => Sk
    });
    var Dk = ik(4629);
    let fk = null;

    function Sk(kk) {
      fk = {
        scanned: !1
      };
      try {
        return kk()
      } finally {
        fk = null
      }
    }

    function bk() {
      const kk = fk;
      if (null === kk) return (0, Dk.c)();
      const ek = (0, Dk.c)(!kk.scanned);
      return kk.scanned = !0, ek
    }
  },
  40415: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk
    });
    const Dk = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  40434: (kk, ek, ik) => {
    function Dk() {
      return ik(40440)
    }

    function fk() {
      return ik(40447)
    }

    function Sk(kk) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(kk)
    }
    ik.d(ek, {
      e: () => Sk,
      i: () => Dk,
      j: () => fk
    })
  },
  40440: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  40447: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);