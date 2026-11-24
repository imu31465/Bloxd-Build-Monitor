export const id = 214;
export const ids = [214];
export const modules = {
  41014: (pp, ip, cp) => {
    function Op(pp, ip, cp) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(pp, ip).getContext("2d", cp);
      const Op = document.createElement("canvas");
      return Op.width = pp, Op.height = ip, Op.getContext("2d", cp)
    }

    function op(pp, ip) {
      return pp.getContext("2d", ip)
    }
    cp.d(ip, {
      c: () => op,
      e: () => Op
    })
  },
  40978: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => xp
    });
    const Op = 1 << 20,
      op = 1 << 21,
      Ip = 1024,
      Sp = 2048;

    function xp(pp, ip, cp) {
      const xp = pp + Op,
        Lp = ip + Ip,
        Yp = cp + Op;
      return xp < 0 || xp >= op || Yp < 0 || Yp >= op || Lp < 0 || Lp >= Sp ? -1 : (xp * op + Yp) * Sp + Lp
    }
  },
  40976: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op,
      f: () => Sp,
      j: () => op,
      k: () => Ip,
      l: () => Dp,
      n: () => Yp,
      r: () => Lp,
      v: () => xp
    });
    cp(3572);
    cp(40978);

    function Op(pp) {}

    function op(pp) {}

    function Ip(pp) {}

    function Sp(pp) {}

    function xp(pp) {}

    function Lp(pp, ip, cp) {}

    function Yp(pp) {}

    function Dp(pp) {}
  },
  40967: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Hp,
      e: () => yp,
      h: () => Gp,
      i: () => Mp,
      k: () => Xp,
      l: () => lp,
      m: () => tp,
      p: () => wp,
      s: () => vp,
      u: () => qp,
      y: () => ap,
      A: () => jp,
      C: () => Tp,
      F: () => gp,
      J: () => Qp,
      N: () => Bp
    });
    var Op = cp(4903),
      op = cp(40842),
      Ip = (cp(40976), cp(10));
    class Sp {
      constructor(pp, ip) {
        this.memory = pp, this.access = ip, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.TA = 0, this.u32 = new Ip.l(0), this.f32 = new Ip.g(0), this.u8 = new Ip.c(0), this.dataView = new Ip.h(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.TA = this.access.TA(), this.buffer = (0, Ip.J)(this.memory()), this.u32 = new Ip.l(this.buffer, this.ptr, this.TA >>> 2), this.f32 = new Ip.g(this.buffer, this.ptr, this.TA >>> 2), this.u8 = new Ip.c(this.buffer, this.ptr, this.TA), this.dataView = new Ip.h(this.buffer, this.ptr, this.TA)
      }
      ensureViews() {
        (0, Ip.J)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(pp) {
        return !!this.fits(pp) || (this.dropped++, !1)
      }
      fits(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const cp = ip + pp;
        return cp <= this.TA || cp <= Op.Gc && 0 !== this.access.reserve(cp) && (this.refresh(), cp <= this.TA)
      }
      consume(pp) {
        const ip = this.cursor - pp;
        ip > 0 && pp > 0 && (this.ensureViews(), this.u8.copyWithin(0, pp, this.cursor)), this.cursor = ip > 0 ? ip : 0
      }
      writeRecord(pp, ip, cp, op, Ip) {
        if (!this.room(Op.sb)) return !1;
        const Sp = this.cursor >>> 2;
        return this.u32[Sp] = 65535 & pp | (65535 & ip) << 16, this.f32[Sp + 1] = cp, this.f32[Sp + 2] = op, this.u32[Sp + 3] = Ip >>> 0, this.cursor += Op.sb, !0
      }
      writeOptions(pp, ip) {
        const cp = ip.byteLength,
          op = Op.sb + (0, Op.ue)(cp);
        if (!this.fits(op)) return !1;
        const Ip = this.cursor,
          Sp = Ip >>> 2;
        this.u32[Sp] = Op.wb.Options, this.u32[Sp + 1] = cp, this.u32[Sp + 2] = 0, this.u32[Sp + 3] = pp >>> 0;
        const xp = Ip + Op.sb;
        return this.u8.set(ip, xp), this.u8.fill(0, xp + cp, Ip + op), this.cursor += op, !0
      }
      writeWorkerRecord(pp, ip, cp, op, Ip, Sp) {
        const xp = Sp.byteLength,
          Lp = Op.Nd + (0, Op.ue)(xp);
        if (xp > Op.Jd) return this.dropped++, !1;
        if (!this.room(Lp)) return !1;
        const Yp = this.cursor,
          Dp = Yp >>> 2;
        this.u32[Dp] = pp >>> 0, this.u32[Dp + 1] = 65535 & ip | (65535 & cp) << 16, this.u32[Dp + 2] = op >>> 0, this.u32[Dp + 3] = Ip >>> 0, this.u32[Dp + 4] = xp;
        const Ap = Yp + Op.Nd;
        return this.u8.set(Sp, Ap), this.u8.fill(0, Ap + xp, Yp + Lp), this.cursor += Lp, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(pp, ip) {
        return this.writeNet(Op._b.Frame, pp, ip)
      }
      writeOpen(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Op._b.Open, pp, Lp(ip))
      }
      writeClose(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Op._b.Close, pp, Lp(ip))
      }
      writeNet(pp, ip, cp) {
        const op = cp.byteLength,
          Ip = Op.Zb + (0, Op.ue)(op);
        if (op > Op.Ub) return this.dropped++, !1;
        if (!this.room(Ip)) return !1;
        const Sp = this.cursor;
        this.u32[Sp >>> 2] = op, this.u32[1 + (Sp >>> 2)] = (0, Op.me)(pp, ip);
        const xp = Sp + Op.Zb;
        return this.u8.set(cp, xp), this.u8.fill(0, xp + op, Sp + Ip), this.cursor += Ip, !0
      }
      mW(pp, ip, cp) {
        const op = Op.u + (0, Op.ue)(cp);
        if (!this.room(op)) return -1;
        const Ip = this.cursor;
        this.u32[Ip >>> 2] = 65535 & pp | (65535 & ip) << 16, this.u32[1 + (Ip >>> 2)] = cp;
        const Sp = Ip + Op.u;
        return this.u8.fill(0, Sp, Ip + op), this.cursor += op, Sp
      }
      growForCmd(pp) {
        return this.fits(Op.u + (0, Op.ue)(pp), 0)
      }
      writeCmd(pp, ip, cp) {
        const Op = this.mW(pp, ip, cp.byteLength);
        return !(Op < 0) && (this.u8.set(cp, Op), !0)
      }
      copyWritten(pp, ip) {
        return this.ensureViews(), this.u8.slice(pp, pp + ip)
      }
    }
    const xp = new Ip.c(0);

    function Lp(pp) {
      if (0 === pp) return xp;
      const ip = new Ip.c(Op.Yb);
      for (let cp = 0; cp < Op.Yb; cp++) ip[cp] = pp >>> 8 * cp & 255;
      return ip
    }
    class Yp {
      constructor(pp, ip) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new Sp(ip, {
          ptr: () => pp.VA(),
          TA: () => pp.eSp(),
          reserve: ip => pp.lSp(ip)
        }), this.net = new Sp(ip, {
          ptr: () => pp.CSp(),
          TA: () => pp.MSp(),
          reserve: ip => pp.QSp(ip)
        }), this.worker = new Sp(ip, {
          ptr: () => pp.cxp(),
          TA: () => pp.ixp(),
          reserve: ip => pp.JSp(ip)
        }), this.cmd = new Sp(ip, {
          ptr: () => pp.ASp(),
          TA: () => pp.YSp(),
          reserve: ip => pp.DSp(ip)
        })
      }
      reset(pp, ip, cp) {
        this.input.consume(pp), this.worker.consume(ip), this.cmd.consume(cp)
      }
    }
    var Dp = cp(36484),
      Ap = cp(2463),
      Pp = cp(4895),
      Wp = cp(40984);
    const yp = "coreFrame",
      Up = "fatalStatus",
      wp = "otherCall",
      vp = "coreRings",
      tp = "netIn",
      Hp = "abi",
      dp = "netOut",
      ep = "workerOut",
      jp = "worldgenHost",
      kp = "eventWalker",
      mp = "netEvent",
      Rp = "envEvent",
      qp = "sharedTables",
      Mp = "inputAction",
      Cp = "frameSends",
      Ep = new Set([kp, mp, Rp, Cp, Mp, qp]),
      Xp = "wasmMemory",
      lp = "meshHost";

    function Qp(pp, ip) {
      pp.forEachWorkerOut(((cp, op, Ip) => {
        if ((0, Op.ee)(cp)) try {
          var Sp;
          null === (Sp = ip.worldgen) || void 0 === Sp || Sp.take(cp, Ip)
        } catch (Lp) {
          pp.crash(jp, Lp)
        } else try {
          var xp;
          null === (xp = ip.mesh) || void 0 === xp || xp.take(cp, op, Ip)
        } catch (Lp) {
          pp.crash(lp, Lp)
        }
      }))
    }
    const Jp = 1048576;

    function Bp(pp, ip) {
      let cp = !1;
      const Op = () => {
        cp = !1, ip()
      };
      return () => {
        !cp && pp.cursor >= Jp && (cp = !0, queueMicrotask(Op))
      }
    }
    const Np = new Set([Up, wp, jp, lp]);

    function Tp(pp) {
      return Ep.has(pp.site) ? pp.error instanceof WebAssembly.RuntimeError || (0, op.g)(pp.error) : !Np.has(pp.site) && pp.error instanceof Error
    }
    const fp = "events",
      bp = [],
      hp = "debugLog",
      ap = "terrainTextures",
      np = "sunShadowTextures",
      Fp = new TextDecoder;

    function gp(pp, ip) {
      const {
        site: cp,
        error: op,
        header: Ip
      } = pp, Sp = Ip ? (0, Op._d)(Ip.lastError) : "noFrame", xp = `CORE-${cp===Up?Sp:cp}`, Lp = null === op || void 0 === op ? "" : ` ${(0,Dp.h)(op)}`, Yp = {
        site: cp,
        wasmBuild: ip.wasm,
        clientVersion: ip.client
      };
      return Ip && (Yp.status = String(Ip.status), Yp.lastError = Sp, Yp.lastErrorCode = String(Ip.lastError), Yp.lastErrorDetail = String(Ip.lastErrorDetail), Yp.errorCount = String(Ip.errorCount), Yp.frameIndex = String(Ip.frameIndex), Yp.tickIndex = String(Ip.tickIndex)), {
        code: xp,
        message: `core ${cp}, last error ${Sp};${Lp}`,
        details: Yp
      }
    }
    class Gp {
      constructor(pp, ip, cp) {
        this.core = pp, this.memory = ip, this.handlers = cp, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = null, this.loadCounts = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: bp,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new Yp(pp, ip)
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
      framePaces(pp) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.tSp(pp)
        } catch (ip) {
          return this.crash(yp, ip), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(pp, ip) {
        var cp;
        let Ip = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: Sp,
          net: xp,
          worker: Lp,
          cmd: Yp
        } = this.rings, Dp = xp.cursor, Ap = ip && !this.drawsHeld;
        let wp = Op.P.Fatal;
        const vp = Sp.cursor,
          Hp = Lp.cursor,
          dp = Yp.cursor;
        let ep, jp = null;
        const Rp = this.handlers.onSends;
        try {
          const ip = (Ap ? Op.hb.Draws : 0) | (Ip ? Op.hb.NetAll : 0) | (Rp ? Op.hb.StopForSends : 0);
          wp = (0, Wp.e)((() => {
            let cp = this.core.frame(pp, vp, xp.cursor, Hp, ip, dp);
            for (; cp === Op.nd && Rp;) {
              var op;
              if (ep ??= null === (op = this.gameHost) || void 0 === op ? void 0 : op.takeFault(), void 0 === ep && !this.takeSends(Rp)) return Op.P.Fatal;
              cp = this.core.Zw()
            }
            return cp
          }))
        } catch (Fp) {
          jp = {
            error: Fp
          }
        }
        ep ??= null === (cp = this.gameHost) || void 0 === cp ? void 0 : cp.takeFault();
        const qp = this.stopped || null !== jp || void 0 !== ep;
        this.rings.reset(qp ? Sp.cursor : vp, qp ? Lp.cursor : Hp, qp ? Yp.cursor : dp);
        const Mp = null === jp && void 0 === ep,
          Cp = Mp && !this.stopped && wp === Op.P.Fatal && 0 === this.core.RW(),
          Ep = Mp && !Cp ? this.headerView() : null,
          Xp = Cp ? {
            ...null !== (lp = this.lastHeader) && void 0 !== lp ? lp : (0, Op.ve)(new Uint32Array(Op.lb)),
            status: Op.P.Fatal,
            lastError: Op.M.CoreBusy,
            lastErrorDetail: 0
          } : null === Ep ? null : (0, Op.ve)(Ep);
        var lp;
        null !== Xp && (this.lastHeader = Xp);
        const Qp = null !== Xp && wp !== Op.P.Fatal,
          Jp = Qp && null !== Ep ? Ep[Op.nb.NetInKept] : 0,
          Bp = Qp && Jp <= Dp && Jp % 4 === 0 ? Jp : null;
        var Np, Tp;
        null !== Xp && null !== Bp && wp === Op.P.Errors && (null === (Np = (Tp = this.handlers).onErrors) || void 0 === Np || Np.call(Tp, Xp));
        const fp = null === Bp ? bp : this.readEvents(Dp);
        if (xp.consume(Dp - (null !== Bp && void 0 !== Bp ? Bp : 0)), this.netKept = null !== Bp && void 0 !== Bp ? Bp : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== jp) return this.crash(yp, void 0 === ep || ep instanceof op.b ? jp.error : ep), !1;
        if (void 0 !== ep || null === Xp) return this.crashOn(yp, ep), !1;
        if (Cp) return this.crash(Up, null), !1;
        const hp = this.headerView()[Op.nb.FrameDraw];
        if (this.lastFrameKind = (0, Pp.f)(Ap, hp), wp === Op.P.Fatal) return this.crash(Up, null), !1;
        if (null === Bp) return this.crash(tp, `the core kept ${Jp} of ${Dp} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const pp = this.frameEvents,
            ip = this.headerView();
          pp.ptr = ip[Op.nb.EventsPtr], pp.len = ip[Op.nb.EventsLen], pp.net = fp, pp.kind = this.lastFrameKind;
          try {
            this.eventWalker(pp)
          } catch (Fp) {
            return this.crashOn(kp, Fp), !1
          }
          return this.handEnvEvents()
        }
        for (const Op of fp) {
          if (this.stopped) return !1;
          try {
            var ap, np;
            null === (ap = (np = this.handlers).onNetEvent) || void 0 === ap || ap.call(np, Op)
          } catch (Fp) {
            return this.crashOn(mp, Fp), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const Ip of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var pp, ip;
            null === (pp = (ip = this.handlers).onReconnectGrace) || void 0 === pp || pp.call(ip, Ip)
          } catch (op) {
            return this.crashOn(mp, op), !1
          }
        }
        for (const Ip of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var cp, Op;
            null === (cp = (Op = this.handlers).onEnvEvent) || void 0 === cp || cp.call(Op, Ip)
          } catch (op) {
            return this.crashOn(Rp, op), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(pp) {
        this.eventWalker = pp
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: pp
        } = this.rings;
        try {
          const ip = this.unsentUiPrefs;
          ip && pp.writeRecord(Op.wb.UiPrefs, 0, ip.nametagCutDistance, 0, (0, Op.we)(ip)) && (this.unsentUiPrefs = null);
          const cp = this.unsentEnvPrefs;
          cp && pp.writeRecord(Op.wb.EnvPrefs, (0, Op.ce)(cp), cp.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const op = this.unsentLookPrefs;
          op && pp.writeRecord(Op.wb.Sensitivity, 0, op.mouse, op.touch, (0, Ap.n)(op.fovPercent)) && (this.unsentLookPrefs = null);
          let Ip = 0;
          for (const {
              aux: Op,
              payload: Sp
            }
            of this.unsentOptions) {
            if (!pp.writeOptions(Op, Sp)) {
              if (pp.cursor > 0) break;
              this.optionsDropped++
            }
            Ip++
          }
          Ip > 0 && this.unsentOptions.splice(0, Ip)
        } catch (ip) {
          return this.crash(vp, ip), !1
        }
        return !0
      }
      setHoldDraws(pp) {
        this.drawsHeld = pp
      }
      setUiPrefs(pp) {
        this.unsentUiPrefs = {
          ...pp
        }
      }
      setEnvPrefs(pp) {
        this.unsentEnvPrefs = {
          ...pp
        }
      }
      setLookPrefs(pp) {
        this.unsentLookPrefs = {
          ...pp
        }
      }
      queueOptions(pp, ip) {
        return !this.isStopped && (ip.byteLength > Op.cc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: pp,
          payload: ip
        }), !0))
      }
      setChunkCap(pp) {
        return this.callCore("setChunkCap", null, (ip => ip.hSp(pp)))
      }
      shedMemory(pp) {
        const ip = this.callCore("shedMemory", null, (ip => ip.ZSp(pp)));
        return 0 === ip ? null : ip
      }
      addDistanceInUse() {
        const pp = this.callCore("addDistanceInUse", null, (pp => pp.oSp()));
        return 0 === pp ? null : pp
      }
      setChunkAddDistance(pp, ip) {
        return this.callCore("setChunkAddDistance", !1, (cp => cp.bSp(pp, ip)))
      }
      setGameHost(pp) {
        return this.callCore("setGameHost", !1, (ip => (ip.vSp(pp), this.gameHost = pp, !0)))
      }
      setAntiCheatProbes(pp) {
        return this.callCore("setAntiCheatProbes", !1, (ip => ip.TSp(pp)))
      }
      setAmbientOcclusion(pp) {
        this.callCore("setAmbientOcclusion", void 0, (ip => {
          ip.NSp(pp)
        }))
      }
      setPoseLod(pp) {
        this.callCore("setPoseLod", void 0, (ip => {
          ip.nSp(pp)
        }))
      }
      setDebugLog(pp, ip) {
        this.callCore(hp, void 0, (cp => {
          cp.nw(pp, ip)
        }))
      }
      takeDebugLog(pp) {
        return this.callCore(hp, [], (ip => ip.Fw(pp)))
      }
      setTextureLayers(pp) {
        return this.callCore("setTextureLayers", !1, (ip => ip.rSp(pp)))
      }
      setBlockColours(pp) {
        let {
          blocks: ip,
          counts: cp,
          values: Op
        } = pp;
        return this.callCore("setBlockColours", !1, (pp => pp.ROp(ip, cp, Op)))
      }
      terrainTextureNames() {
        return this.callCore(ap, [], (pp => pp.pxp()))
      }
      setTerrainTextures(pp, ip, cp, Op) {
        return this.callCore(ap, !1, (op => op.GSp(pp, cp, ip, Op)))
      }
      setShaderPack(pp, ip, cp, Op, op, Ip) {
        return this.callCore("setShaderPack", !1, (Sp => {
          var xp, Lp;
          return null !== (xp = null === (Lp = Sp.fOp) || void 0 === Lp ? void 0 : Lp.call(Sp, pp, ip, cp, Op, op, Ip)) && void 0 !== xp && xp
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(np, null, (pp => {
          var ip, cp;
          return null !== (ip = null === (cp = pp.zSp) || void 0 === cp ? void 0 : cp.call(pp)) && void 0 !== ip ? ip : null
        }))
      }
      setSunShadowTexture(pp, ip, cp, Op, op) {
        this.callCore(np, void 0, (Ip => {
          var Sp;
          null === (Sp = Ip.gSp) || void 0 === Sp || Sp.call(Ip, pp, ip, cp, Op, op)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(np, [], (pp => {
          var ip, cp;
          return null !== (ip = null === (cp = pp.KSp) || void 0 === cp ? void 0 : cp.call(pp)) && void 0 !== ip ? ip : []
        }))
      }
      sunShadowsHeld() {
        return this.callCore(np, null, (pp => {
          var ip, cp;
          return null !== (ip = null === (cp = pp.sSp) || void 0 === cp ? void 0 : cp.call(pp)) && void 0 !== ip ? ip : null
        }))
      }
      callCore(pp, ip, cp) {
        if (this.stopped) return ip;
        try {
          return cp(this.core)
        } catch (Op) {
          return this.crash(pp, Op), ip
        }
      }
      readEvents(pp) {
        this.netOffsets.length = 0;
        const ip = this.headerView(),
          cp = ip[Op.nb.EventsPtr],
          op = ip[Op.nb.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === op) return bp;
        const Ip = [],
          Sp = this.memory().buffer;
        if (cp % 4 !== 0 || cp + op > Sp.byteLength) return this.crash(fp, `events of ${op} bytes at ${cp} outside ${Sp.byteLength} bytes of memory`), bp;
        const xp = new DataView(Sp, cp, op),
          Lp = this.rings.net,
          Yp = (ip, cp) => ip + cp <= pp ? Lp.copyWritten(ip, cp) : null;
        let Dp = 0;
        for (; Dp < op;) {
          const pp = Dp + Op.$,
            ip = pp <= op ? xp.getUint32(Dp, !0) : -1,
            Lp = ip >>> 16;
          if (ip < 0 || Lp > op - pp) return this.crash(fp, `event record at ${Dp} overruns its ${op} bytes`), bp;
          const Mp = 65535 & ip,
            Cp = ip => xp.getUint32(pp + 4 * ip, !0);
          if (Mp === Op.bb.RawMessage) {
            const pp = Lp >= Op.Jc.BYTES ? 65535 & Cp(1) : -1,
              ip = pp === Op.Jc.STRING_TYPE,
              cp = Lp === (ip ? Op.Jc.STRING_TYPE_BYTES : Op.Jc.BYTES) ? Yp(Cp(2), Cp(3)) : null,
              op = ip && cp ? Yp(Cp(4), Cp(5)) : null;
            if (!cp || ip && !op) return this.crash(fp, `RawMessage at ${Dp} of ${Lp} bytes names bytes outside net-in`), bp;
            this.netOffsets.push(Dp), Ip.push({
              type: "message",
              conn: Cp(0),
              VD: pp,
              payloadKind: Cp(1) >>> 16,
              payload: cp,
              stringType: op ? Fp.decode(op) : null
            })
          } else if (Mp === Op.bb.CoreErrors) {
            var Ap, Pp;
            const pp = Lp >= 4 ? Cp(0) : -1;
            if (pp < 0 || pp > Op.J.PAIRS_MAX || Lp !== 4 * (Op.J.FIXED_WORDS + Op.J.PAIR_WORDS * pp)) return this.crash(fp, `CoreErrors at ${Dp} of ${Lp} bytes`), bp;
            const ip = [];
            for (let cp = 0; cp < pp; cp++) ip.push({
              code: Cp(1 + 2 * cp),
              detail: Cp(2 + 2 * cp)
            });
            null === (Ap = (Pp = this.handlers).onCoreErrors) || void 0 === Ap || Ap.call(Pp, ip, Cp(1 + 2 * pp))
          } else if (Mp === Op.bb.RenderReload) {
            var Wp, yp;
            if (Lp !== Op.Yc.BYTES) return this.crash(fp, `RenderReload at ${Dp} of ${Lp} bytes`), bp;
            null === (Wp = (yp = this.handlers).onRenderReload) || void 0 === Wp || Wp.call(yp, Cp(0), Cp(1), Cp(2))
          } else if (Mp === Op.bb.JoinPreloadEnded) {
            var Up, wp;
            if (Lp !== Op.Db.BYTES) return this.crash(fp, `JoinPreloadEnded at ${Dp} of ${Lp} bytes`), bp;
            null === (Up = (wp = this.handlers).onJoinPreloadEnded) || void 0 === Up || Up.call(wp, {
              chunks: Cp(Op.Db.CHUNKS),
              bytes: Cp(Op.Db.BYTES_HELD),
              asked: Cp(Op.Db.ASKED),
              replaced: Cp(Op.Db.REPLACED),
              dropped: Cp(Op.Db.DROPPED)
            })
          } else if (Mp === Op.bb.Images) {
            var vp, tp;
            null === (vp = (tp = this.handlers).onImages) || void 0 === vp || vp.call(tp, new Uint8Array(Sp.slice(cp + pp, cp + pp + Lp)))
          } else if (Mp === Op.bb.ModelRequests)
            for (let cp = 0; cp < Lp >>> 2; cp++) {
              var Hp, dp;
              null === (Hp = (dp = this.handlers).onModelRequest) || void 0 === Hp || Hp.call(dp, Cp(cp))
            } else if (Mp === Op.bb.ModelTaken) {
              var ep, jp;
              if (Lp < 4) return this.crash(fp, `ModelTaken at ${Dp} of ${Lp} bytes`), bp;
              const pp = new Uint32Array((Lp >>> 2) - 1);
              for (let ip = 0; ip < pp.length; ip++) pp[ip] = Cp(1 + ip);
              null === (ep = (jp = this.handlers).onModelTaken) || void 0 === ep || ep.call(jp, Cp(0), pp)
            } else if (Mp === Op.bb.TerrainTexturesWanted) {
            var kp, mp;
            if (0 !== Lp) return this.crash(fp, `TerrainTexturesWanted at ${Dp} of ${Lp} bytes`), bp;
            null === (kp = (mp = this.handlers).onTerrainTexturesWanted) || void 0 === kp || kp.call(mp)
          } else if (Mp === Op.bb.KeepAliveDue) {
            var Rp, qp;
            if (Lp > Op.Fb) return this.crash(fp, `KeepAliveDue at ${Dp} of ${Lp} bytes`), bp;
            null === (Rp = (qp = this.handlers).onKeepAlive) || void 0 === Rp || Rp.call(qp, new Uint8Array(Sp, cp + pp, Lp).slice())
          } else if (Mp === Op.bb.ConnectionState) {
            if (Lp !== Op.w) return this.crash(fp, `ConnectionState at ${Dp} of ${Lp} bytes`), bp;
            this.netOffsets.push(Dp), Ip.push({
              type: "connection",
              conn: Cp(0),
              phase: Cp(1),
              code: 0 | Cp(2)
            })
          } else if (Mp === Op.bb.EnvLighting || Mp === Op.bb.SkyImages) {
            if (Lp !== (Mp === Op.bb.EnvLighting ? Op.Y : Op.qd)) return this.crash(fp, `event ${Mp} at ${Dp} of ${Lp} bytes`), bp;
            this.envEvents.push({
              kind: Mp,
              payload: new Uint8Array(Sp.slice(cp + pp, cp + pp + Lp))
            })
          } else if (Mp === Op.bb.ReconnectGrace) {
            if (Lp !== Op.sc) return this.crash(fp, `ReconnectGrace at ${Dp} of ${Lp} bytes`), bp;
            const pp = Cp(2);
            this.graceEvents.push({
              conn: Cp(0),
              graceMs: Cp(1),
              sessionBased: 0 !== (pp & Op.Mc.SessionBased),
              replayOffer: 0 !== (pp & Op.Mc.ReplayOffer)
            })
          }
          Dp = pp + (0, Op.ue)(Lp)
        }
        return Ip
      }
      takeSends(pp) {
        this.atSendsStop = !0;
        try {
          pp()
        } catch (ip) {
          this.crashOn(Cp, ip)
        } finally {
          this.atSendsStop = !1
        }
        return !this.stopped
      }
      forEachNetOut(pp) {
        this.forEachOut(dp, "net-out", Op.nb.NetOutPtr, Op.nb.NetOutLen, Op.Zb, 0, ((ip, cp, op, Ip) => {
          const Sp = (0, Op.ie)(cp);
          Sp === Op._b.Frame ? pp((0, Op.he)(cp), op) : this.crash(dp, `net-out record at ${Ip} is kind ${Sp}, not a frame`)
        }))
      }
      forEachWorkerOut(pp) {
        this.forEachOut(ep, "worker-out", Op.nb.WorkerOutPtr, Op.nb.WorkerOutLen, Op.Gd, 4, ((ip, cp, op, Ip) => {
          const Sp = 255 & ip,
            xp = Sp === Op.Wd.Init ? this.initOf(op, Ip) : op;
          null !== xp && pp(Sp, ip >>> 8 & 16777215, xp)
        }))
      }
      initOf(pp, ip) {
        const cp = this.memory().buffer;
        if (pp.byteLength !== Op.qb) return this.crash(ep, `worker-out Init record at ${ip} is ${pp.byteLength} bytes, not a view`), null;
        const op = new DataView(pp.buffer, pp.byteOffset, Op.qb),
          Ip = op.getUint32(0, !0),
          Sp = op.getUint32(4, !0);
        return Ip + Sp > cp.byteLength ? (this.crash(ep, `worker-out Init record at ${ip} names ${Sp} bytes at ${Ip} outside ${cp.byteLength} bytes of memory`), null) : new Uint8Array(cp, Ip, Sp)
      }
      forEachOut(pp, ip, cp, op, Ip, Sp, xp) {
        if (!this.headerReadable()) return;
        const Lp = this.headerView(),
          Yp = Lp[cp],
          Dp = Lp[op];
        if (0 === Dp) return;
        const Ap = this.memory().buffer;
        if (Yp % 4 !== 0 || Yp + Dp > Ap.byteLength) return void this.crash(pp, `${ip} of ${Dp} bytes at ${Yp} outside ${Ap.byteLength} bytes of memory`);
        const Pp = new DataView(Ap, Yp, Dp);
        let Wp = 0;
        for (; Wp < Dp;) {
          const cp = Wp + Ip,
            op = cp <= Dp ? Pp.getUint32(Wp + Sp, !0) : -1;
          if (op < 0 || op > Dp - cp) return void this.crash(pp, `${ip} record at ${Wp} overruns its ${Dp} bytes`);
          if (xp(Pp.getUint32(Wp, !0), Pp.getUint32(Wp + 4, !0), new Uint8Array(Ap, Yp + cp, op), Wp), this.stopped) return;
          Wp = cp + (0, Op.ue)(op)
        }
      }
      forEachEvent(pp) {
        if (this.stopped || null === this.lastHeader) return;
        const ip = this.headerView(),
          cp = ip[Op.nb.EventsPtr],
          op = ip[Op.nb.EventsLen];
        if (0 === op) return;
        const Ip = this.memory().buffer;
        if (cp % 4 !== 0 || cp + op > Ip.byteLength) return void this.crash(fp, `events of ${op} bytes at ${cp} outside ${Ip.byteLength} bytes of memory`);
        const Sp = new DataView(Ip, cp, op);
        let xp = 0;
        for (; xp < op;) {
          const ip = xp + Op.$,
            cp = ip <= op ? Sp.getUint32(xp, !0) : -1,
            Ip = cp >>> 16;
          if (cp < 0 || Ip > op - ip) return void this.crash(fp, `event record at ${xp} overruns its ${op} bytes`);
          pp(65535 & cp, Sp, ip, Ip), xp = ip + (0, Op.ue)(Ip)
        }
      }
      crashOn(pp, ip) {
        ip instanceof op.b ? this.crash(fp, ip.message) : this.crash(pp, ip)
      }
      crash(pp, ip) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: pp,
          error: ip,
          header: this.lastHeader
        }))
      }
      headerWord(pp) {
        return this.headerReadable() ? this.headerView()[pp] : 0
      }
      headerReadable() {
        return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
      }
      readLoadCounts(pp) {
        const ip = this.loadCountWords();
        return null !== ip && (pp.chunksReceived = ip[Op.Mb.ChunksReceived], pp.chunksCancelled = this.headerView()[Op.nb.ChunksCancelled], pp.chunksStored = ip[Op.Mb.ChunksStored], pp.jobsSent = ip[Op.Mb.JobsSent], pp.jobsDone = ip[Op.Mb.JobsDone], pp.jobsInFlight = ip[Op.Mb.JobsInFlight], pp.workersLive = ip[Op.Mb.WorkersLive], pp.workersRetired = ip[Op.Mb.WorkersRetired], !0)
      }
      readViewQueuedPrograms() {
        var pp, ip;
        const cp = null !== (pp = null === (ip = this.loadCountWords()) || void 0 === ip ? void 0 : ip[Op.Mb.ViewQueuedPrograms]) && void 0 !== pp ? pp : 0;
        return 0 === cp ? null : cp - 1
      }
      readFirstViewWait(pp, ip) {
        const cp = this.loadCountWords();
        return null === cp ? null : [cp[Op.Mb.FirstViewLinkMs], cp[Op.Mb.FirstViewTerrainMs], cp[Op.Mb.FirstViewHeldMs], cp[Op.Mb.FirstViewOtherMs], cp[Op.Mb.FirstViewGaps], cp[Op.Mb.FirstViewGapMs], pp, ip]
      }
      loadCountWords() {
        if (this.stopped || null === this.lastHeader) return null;
        const pp = this.core.aw();
        if (0 === pp) return null;
        const ip = this.memory().buffer;
        return ip !== this.loadCountsBuffer && (this.loadCountsBuffer = ip, this.loadCounts = new Uint32Array(ip, pp, Op.Hb)), this.loadCounts
      }
      headerView() {
        const pp = this.memory().buffer;
        return pp !== this.headerBuffer && (this.headerBuffer = pp, this.header = new Uint32Array(pp, this.core.RW(), Op.lb)), this.header
      }
    }
  },
  40984: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp,
      e: () => Ip
    });
    var Op = cp(4791);
    let op = null;

    function Ip(pp) {
      op = {
        scanned: !1
      };
      try {
        return pp()
      } finally {
        op = null
      }
    }

    function Sp() {
      const pp = op;
      if (null === pp) return (0, Op.f)();
      const ip = (0, Op.f)(!pp.scanned);
      return pp.scanned = !0, ip
    }
  },
  41025: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op
    });
    const Op = {
      webgpu: "rust_webgpu",
      webgl: "rust_webgl2",
      webgl1: "rust_webgl1"
    }
  },
  41046: (pp, ip, cp) => {
    function Op() {
      return cp(41049)
    }

    function op() {
      return cp(41055)
    }

    function Ip(pp) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(pp)
    }
    cp.d(ip, {
      e: () => Ip,
      f: () => Op,
      j: () => op
    })
  },
  36484: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp,
      d: () => Yp,
      e: () => Sp,
      h: () => Ap
    });
    var Op = cp(36472),
      op = cp(10);
    const Ip = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Sp(pp) {
      if (pp instanceof WebAssembly.RuntimeError) return !0;
      const ip = pp instanceof Error ? pp.stack : void 0;
      return "string" === typeof ip && Ip.test(ip)
    }

    function xp(pp, ip, cp) {
      var op;
      const Sp = pp instanceof Error ? pp.name : "thrown",
        xp = (pp instanceof Error && null !== (op = pp.stack) && void 0 !== op ? op : "").split("\n").filter((pp => Ip.test(pp))).slice(0, 8).map((pp => pp.trim())),
        Lp = null === ip ? "wasm memory unknown" : `wasm memory ${Math.round(ip/2**20)} MB`,
        Yp = null === cp.panic ? "" : `, panic: ${(0,Op.j)(cp.panic)}`,
        Dp = `${Sp}: ${pp instanceof Error?pp.message:String(pp)}`;
      return `${(0,Op.q)(cp.kind,cp.refusedBytes)} ${Dp} (${Lp})${Yp}${xp.length>0?` | ${xp.join(" < ")}`:""}`
    }
    const Lp = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function Yp(pp) {
      var ip;
      let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(pp instanceof Error) || !Lp.test(pp.message)) return {};
      if (!("detached" in cp)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, op.V)(null === (ip = (0, op.N)(cp, "detached")) || void 0 === ip ? void 0 : ip.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const Dp = 500;

    function Ap(pp) {
      let ip = "[object Object]";
      try {
        ip = String(pp)
      } catch {}
      if ("[object Object]" !== ip) return ip;
      try {
        var cp, Op;
        return null !== (cp = null === (Op = JSON.stringify(pp)) || void 0 === Op ? void 0 : Op.slice(0, Dp)) && void 0 !== cp ? cp : ip
      } catch {
        return ip
      }
    }
  },
  41049: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  41055: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  },
  36472: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op,
      h: () => Ip,
      j: () => Lp,
      n: () => Sp,
      q: () => op
    });
    const Op = /^alloc_failed (\d+) bytes$/;

    function op(pp, ip) {
      return Ip(pp, ip) ? `trap=alloc_failed ${ip} bytes` : `trap=${pp}`
    }

    function Ip(pp, ip) {
      return "unreachable" === pp && ip > 0
    }

    function Sp(pp, ip, cp) {
      const Op = function(pp) {
        return pp instanceof WebAssembly.RuntimeError ? /unreachable/i.test(pp.message) ? "unreachable" : /out of bounds/i.test(pp.message) ? "out_of_bounds" : "runtime_error" : (pp instanceof RangeError || pp instanceof Error && "InternalError" === pp.name) && /call stack|recursion/i.test(pp.message) ? "stack_overflow" : "js_error"
      }(pp);
      if ("unreachable" !== Op) return {
        kind: Op,
        panic: null,
        refusedBytes: 0
      };
      const op = ip(),
        Ip = cp();
      return {
        kind: Op,
        panic: Ip > 0 ? null : op,
        refusedBytes: Ip
      }
    }
    const xp = 300;

    function Lp(pp) {
      return pp.replace(/\s*\n\s*/g, " / ").slice(0, xp)
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);