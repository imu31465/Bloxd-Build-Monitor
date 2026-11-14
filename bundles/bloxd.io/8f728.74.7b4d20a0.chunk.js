export const id = 74;
export const ids = [74];
export const modules = {
  38950: (cB, Bc, nc) => {
    function Vc(cB, Bc, nc) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(cB, Bc).getContext("2d", nc);
      const Vc = document.createElement("canvas");
      return Vc.width = cB, Vc.height = Bc, Vc.getContext("2d", nc)
    }

    function Ic(cB, Bc) {
      return cB.getContext("2d", Bc)
    }
    nc.d(Bc, {
      b: () => Ic,
      f: () => Vc
    })
  },
  38733: (cB, Bc, nc) => {
    nc.d(Bc, {
      A: () => Dc,
      B: () => vB,
      E: () => xB,
      I: () => Ec,
      K: () => Zc,
      O: () => Nc,
      Q: () => bB,
      T: () => Jc,
      W: () => Fc,
      Y: () => Cc,
      e: () => jB,
      f: () => Wc,
      i: () => gB,
      l: () => Rc,
      o: () => Uc,
      p: () => Lc,
      t: () => oc,
      w: () => Qc
    });
    var Vc = nc(1226),
      Ic = nc(35),
      rB = nc(1142),
      uc = nc(1927),
      sc = nc(3866),
      Mc = nc(3828);
    let Pc, qB = !1,
      Oc = !1,
      Tc = !1,
      fc = !1;
    const mB = 1300,
      ec = 3e3;
    let tB = 0,
      Sc = !1,
      yB = !1,
      zB = 0;
    const pc = 2;
    let hc = !1,
      aB = !1;
    const lc = new Set,
      Yc = new Set;

    function Lc() {
      return qB
    }

    function gB() {
      return yB
    }

    function Uc() {
      return aB
    }

    function bB() {
      return (0, rB.r)() && !aB
    }

    function Zc(cB) {
      let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (cB !== aB) {
        aB = cB;
        for (const cB of [...Yc]) cB(aB);
        Bc && Fc()
      }
    }

    function Qc(cB) {
      return Yc.add(cB), () => {
        Yc.delete(cB)
      }
    }

    function Cc() {
      (0, sc.h)(uc.x.Menu, (0, rB.r)() ? 0 : uc.x.Menu)
    }

    function vB() {
      yB = !1, zB = 0, Cc(), Fc()
    }

    function Dc(cB) {
      return lc.add(cB), () => {
        lc.delete(cB)
      }
    }

    function Nc(cB) {
      Oc = !1, cB !== qB && (qB = cB, fc = !1, clearTimeout(Pc), Tc = !qB && hc, qB ? (Sc = !1, yB = !1, zB = 0) : bB() && !hc && (yB = !0), hc = !1, qB && !bB() && Kc(), dc(), Tc && Fc())
    }

    function Ec(cB) {
      cB !== Sc && (Sc = cB, cB || Fc())
    }

    function oc() {
      Oc = !1, fc || !0 !== Xc() || (fc = !0, clearTimeout(Pc), Pc = setTimeout(wc, mB))
    }

    function Wc() {
      return (!Oc || performance.now() - tB > ec) && (Oc = (0, Mc.M)().lockPointer(), tB = performance.now()), Oc
    }

    function wc() {
      kB() && Hc() && Wc()
    }

    function kB() {
      return bB() && !qB && !Sc && !(0, Vc.f)()
    }

    function Xc() {
      var cB;
      return "undefined" === typeof navigator || null === (cB = navigator.userActivation) || void 0 === cB ? void 0 : cB.isActive
    }

    function Hc() {
      return Tc && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Xc()
    }

    function Fc() {
      bB() ? kB() && !yB && Hc() && Wc() : qB && !hc && Kc()
    }

    function Jc() {
      yB ? navigator.vendor.startsWith("Apple") ? iB() : zB = pc : Fc()
    }

    function jB() {
      zB > 0 && 0 === --zB && iB()
    }

    function Rc() {
      zB = 0
    }

    function iB() {
      kB() && !0 === Xc() && Wc()
    }

    function Kc() {
      hc = !0, (0, Mc.M)().unlockPointer()
    }

    function xB() {
      Oc = !1, Tc = !1, fc = !1, clearTimeout(Pc), Sc = !1, yB = !1, zB = 0, hc = !1;
      const cB = qB;
      qB = !1, cB && dc()
    }

    function dc() {
      for (const cB of [...lc]) cB(qB);
      Ic.i.Vu("pointerLockUpdate", qB)
    }
  },
  38696: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Tc,
      d: () => sc,
      h: () => Oc,
      k: () => Pc,
      o: () => uc,
      q: () => qB,
      r: () => Mc
    });
    let Vc = null,
      Ic = null,
      rB = null;

    function uc(cB) {
      Vc = cB
    }

    function sc() {
      return Vc
    }

    function Mc(cB) {
      Ic = cB
    }

    function Pc() {
      return Ic
    }

    function qB(cB) {
      rB = cB
    }

    function Oc() {
      return rB
    }

    function Tc() {
      var cB, Bc;
      return !0 === (null === (cB = Ic) || void 0 === cB || null === (Bc = cB.currentViewer) || void 0 === Bc ? void 0 : Bc.inPlayback)
    }
  },
  38883: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc
    });
    const Vc = {
      stop: () => Vc,
      fade: () => Vc,
      rate: () => Vc,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Vc,
      setPannerAttr: () => Vc,
      setPosition: () => Vc
    }
  },
  38890: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => yB,
      g: () => fc,
      h: () => Hc,
      j: () => gB,
      m: () => bB,
      q: () => Zc,
      t: () => Sc,
      v: () => ec,
      w: () => tB,
      A: () => Lc,
      E: () => Wc,
      H: () => hc,
      L: () => Nc,
      P: () => Xc,
      T: () => Qc,
      X: () => vB
    });
    var Vc = nc(3838),
      Ic = nc(38647),
      rB = nc(11);
    class uc {
      constructor(cB, Bc) {
        this.memory = cB, this.access = Bc, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.Qc = 0, this.u32 = new rB.l(0), this.f32 = new rB.f(0), this.u8 = new rB.d(0), this.dataView = new rB.j(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.Qc = this.access.Qc(), this.buffer = (0, rB.F)(this.memory()), this.u32 = new rB.l(this.buffer, this.ptr, this.Qc >>> 2), this.f32 = new rB.f(this.buffer, this.ptr, this.Qc >>> 2), this.u8 = new rB.d(this.buffer, this.ptr, this.Qc), this.dataView = new rB.j(this.buffer, this.ptr, this.Qc)
      }
      ensureViews() {
        (0, rB.F)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(cB) {
        return !!this.fits(cB) || (this.dropped++, !1)
      }
      fits(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const nc = Bc + cB;
        return nc <= this.Qc || nc <= Vc.gc && 0 !== this.access.reserve(nc) && (this.refresh(), nc <= this.Qc)
      }
      consume(cB) {
        const Bc = this.cursor - cB;
        Bc > 0 && cB > 0 && (this.ensureViews(), this.u8.copyWithin(0, cB, this.cursor)), this.cursor = Bc > 0 ? Bc : 0
      }
      writeRecord(cB, Bc, nc, Ic, rB) {
        if (!this.room(Vc.gb)) return !1;
        const uc = this.cursor >>> 2;
        return this.u32[uc] = 65535 & cB | (65535 & Bc) << 16, this.f32[uc + 1] = nc, this.f32[uc + 2] = Ic, this.u32[uc + 3] = rB >>> 0, this.cursor += Vc.gb, !0
      }
      writeOptions(cB, Bc) {
        const nc = Bc.byteLength,
          Ic = Vc.gb + (0, Vc.Ld)(nc);
        if (!this.fits(Ic)) return !1;
        const rB = this.cursor,
          uc = rB >>> 2;
        this.u32[uc] = Vc.jb.Options, this.u32[uc + 1] = nc, this.u32[uc + 2] = 0, this.u32[uc + 3] = cB >>> 0;
        const sc = rB + Vc.gb;
        return this.u8.set(Bc, sc), this.u8.fill(0, sc + nc, rB + Ic), this.cursor += Ic, !0
      }
      writeWorkerRecord(cB, Bc, nc, Ic, rB) {
        const uc = rB.byteLength,
          sc = Vc._c + (0, Vc.Ld)(uc);
        if (uc > Vc.Yc) return this.dropped++, !1;
        if (!this.room(sc)) return !1;
        const Mc = this.cursor,
          Pc = Mc >>> 2;
        this.u32[Pc] = cB >>> 0, this.u32[Pc + 1] = 65535 & Bc | (65535 & nc) << 16, this.u32[Pc + 2] = Ic >>> 0, this.u32[Pc + 3] = uc;
        const qB = Mc + Vc._c;
        return this.u8.set(rB, qB), this.u8.fill(0, qB + uc, Mc + sc), this.cursor += sc, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(cB, Bc) {
        return this.writeNet(Vc.Cb.Frame, cB, Bc)
      }
      writeOpen(cB) {
        return this.writeNet(Vc.Cb.Open, cB, sc)
      }
      writeClose(cB) {
        return this.writeNet(Vc.Cb.Close, cB, sc)
      }
      writeNet(cB, Bc, nc) {
        const Ic = nc.byteLength,
          rB = Vc.Ab + (0, Vc.Ld)(Ic);
        if (Ic > Vc.zb) return this.dropped++, !1;
        if (!this.room(rB)) return !1;
        const uc = this.cursor;
        this.u32[uc >>> 2] = Ic, this.u32[1 + (uc >>> 2)] = (0, Vc.Fd)(cB, Bc);
        const sc = uc + Vc.Ab;
        return this.u8.set(nc, sc), this.u8.fill(0, sc + Ic, uc + rB), this.cursor += rB, !0
      }
      Ln(cB, Bc, nc) {
        const Ic = Vc.r + (0, Vc.Ld)(nc);
        if (!this.room(Ic)) return -1;
        const rB = this.cursor;
        this.u32[rB >>> 2] = 65535 & cB | (65535 & Bc) << 16, this.u32[1 + (rB >>> 2)] = nc;
        const uc = rB + Vc.r;
        return this.u8.fill(0, uc, rB + Ic), this.cursor += Ic, uc
      }
      growForCmd(cB) {
        return this.fits(Vc.r + (0, Vc.Ld)(cB), 0)
      }
      writeCmd(cB, Bc, nc) {
        const Vc = this.Ln(cB, Bc, nc.byteLength);
        return !(Vc < 0) && (this.u8.set(nc, Vc), !0)
      }
      copyWritten(cB, Bc) {
        return this.ensureViews(), this.u8.slice(cB, cB + Bc)
      }
    }
    const sc = new rB.d(0);
    class Mc {
      constructor(cB, Bc) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new uc(Bc, {
          ptr: () => cB.Jc(),
          Qc: () => cB.mfc(),
          reserve: Bc => cB.gfc(Bc)
        }), this.net = new uc(Bc, {
          ptr: () => cB.lTc(),
          Qc: () => cB.afc(),
          reserve: Bc => cB.UTc(Bc)
        }), this.worker = new uc(Bc, {
          ptr: () => cB.ifc(),
          Qc: () => cB.RTc(),
          reserve: Bc => cB.bfc(Bc)
        }), this.cmd = new uc(Bc, {
          ptr: () => cB.rfc(),
          Qc: () => cB.VTc(),
          reserve: Bc => cB.ITc(Bc)
        })
      }
      reset(cB) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(cB)
      }
    }
    var Pc = nc(38814),
      qB = nc(1934),
      Oc = nc(3835),
      Tc = nc(38892);
    const fc = "coreFrame",
      mB = "fatalStatus",
      ec = "otherCall",
      tB = "coreRings",
      Sc = "netIn",
      yB = "abi",
      zB = "netOut",
      pc = "workerOut",
      hc = "worldgenHost",
      aB = "eventWalker",
      lc = "netEvent",
      Yc = "envEvent",
      Lc = "sharedTables",
      gB = "inputAction",
      Uc = new Set([aB, lc, Yc, gB, Lc]),
      bB = "wasmMemory",
      Zc = "meshHost";

    function Qc(cB, Bc) {
      cB.forEachWorkerOut(((nc, Ic, rB) => {
        if ((0, Vc.wd)(nc)) try {
          var uc;
          null === (uc = Bc.worldgen) || void 0 === uc || uc.take(nc, rB)
        } catch (Mc) {
          cB.crash(hc, Mc)
        } else try {
          var sc;
          null === (sc = Bc.mesh) || void 0 === sc || sc.take(nc, Ic, rB)
        } catch (Mc) {
          cB.crash(Zc, Mc)
        }
      }))
    }
    const Cc = 1048576;

    function vB(cB, Bc) {
      let nc = !1;
      const Vc = () => {
        nc = !1, Bc()
      };
      return () => {
        !nc && cB.cursor >= Cc && (nc = !0, queueMicrotask(Vc))
      }
    }
    const Dc = new Set([mB, ec, hc, Zc]);

    function Nc(cB) {
      return Uc.has(cB.site) ? cB.error instanceof WebAssembly.RuntimeError || (0, Ic.r)(cB.error) : !Dc.has(cB.site) && cB.error instanceof Error
    }
    const Ec = "events",
      oc = [],
      Wc = "terrainTextures",
      wc = "sunShadowTextures",
      kB = new TextDecoder;

    function Xc(cB, Bc) {
      const {
        site: nc,
        error: Ic,
        header: rB
      } = cB, uc = rB ? (0, Vc.sd)(rB.lastError) : "noFrame", sc = `CORE-${nc===mB?uc:nc}`, Mc = null === Ic || void 0 === Ic ? "" : ` ${(0,Pc.e)(Ic)}`, qB = {
        site: nc,
        wasmBuild: Bc.wasm,
        clientVersion: Bc.client
      };
      return rB && (qB.status = String(rB.status), qB.lastError = uc, qB.lastErrorCode = String(rB.lastError), qB.lastErrorDetail = String(rB.lastErrorDetail), qB.errorCount = String(rB.errorCount), qB.frameIndex = String(rB.frameIndex), qB.tickIndex = String(rB.tickIndex)), {
        code: sc,
        message: `core ${nc}, last error ${uc};${Mc}`,
        details: qB
      }
    }
    class Hc {
      constructor(cB, Bc, nc) {
        this.core = cB, this.memory = Bc, this.handlers = nc, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: oc,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new Mc(cB, Bc)
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
      framePaces(cB) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.OTc(cB)
        } catch (Bc) {
          return this.crash(fc, Bc), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(cB, Bc) {
        var nc;
        let rB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: uc,
          net: sc,
          worker: Mc,
          cmd: Pc
        } = this.rings, qB = sc.cursor, ec = Bc && !this.drawsHeld;
        let tB = Vc.J.Fatal;
        const yB = Pc.cursor;
        let zB = null;
        try {
          const Bc = (ec ? Vc.Z.Draws : 0) | (rB ? Vc.Z.NetAll : 0);
          tB = (0, Tc.d)((() => this.core.frame(cB, uc.cursor, sc.cursor, Mc.cursor, Bc, yB)))
        } catch (Dc) {
          zB = {
            error: Dc
          }
        }
        const pc = null === (nc = this.gameHost) || void 0 === nc ? void 0 : nc.takeFault();
        this.rings.reset(this.stopped || null !== zB || void 0 !== pc ? Pc.cursor : yB);
        const hc = null === zB && void 0 === pc ? this.headerView() : null,
          Yc = null === hc ? null : (0, Vc.Md)(hc);
        null !== Yc && (this.lastHeader = Yc);
        const Lc = null !== Yc && tB !== Vc.J.Fatal,
          gB = Lc && null !== hc ? hc[Vc.cb.NetInKept] : 0,
          Uc = Lc && gB <= qB && gB % 4 === 0 ? gB : null;
        var bB, Zc;
        null !== Yc && null !== Uc && tB === Vc.J.Errors && (null === (bB = (Zc = this.handlers).onErrors) || void 0 === bB || bB.call(Zc, Yc));
        const Qc = null === Uc ? oc : this.readEvents(qB);
        if (sc.consume(qB - (null !== Uc && void 0 !== Uc ? Uc : 0)), this.netKept = null !== Uc && void 0 !== Uc ? Uc : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== zB) return this.crash(fc, void 0 === pc || pc instanceof Ic.d ? zB.error : pc), !1;
        if (void 0 !== pc || null === Yc) return this.crashOn(fc, pc), !1;
        if (this.lastFrameKind = (0, Oc.e)(ec, this.headerView()[Vc.cb.FrameDraw]), tB === Vc.J.Fatal) return this.crash(mB, null), !1;
        if (null === Uc) return this.crash(Sc, `the core kept ${gB} of ${qB} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const cB = this.frameEvents,
            Bc = this.headerView();
          cB.ptr = Bc[Vc.cb.EventsPtr], cB.len = Bc[Vc.cb.EventsLen], cB.net = Qc, cB.kind = this.lastFrameKind;
          try {
            this.eventWalker(cB)
          } catch (Dc) {
            return this.crashOn(aB, Dc), !1
          }
          return this.handEnvEvents()
        }
        for (const Vc of Qc) {
          if (this.stopped) return !1;
          try {
            var Cc, vB;
            null === (Cc = (vB = this.handlers).onNetEvent) || void 0 === Cc || Cc.call(vB, Vc)
          } catch (Dc) {
            return this.crashOn(lc, Dc), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const Vc of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var cB, Bc;
            null === (cB = (Bc = this.handlers).onEnvEvent) || void 0 === cB || cB.call(Bc, Vc)
          } catch (nc) {
            return this.crashOn(Yc, nc), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(cB) {
        this.eventWalker = cB
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: cB
        } = this.rings;
        try {
          const Bc = this.unsentUiPrefs;
          Bc && cB.writeRecord(Vc.jb.UiPrefs, 0, Bc.nametagCutDistance, 0, (0, Vc.Nd)(Bc)) && (this.unsentUiPrefs = null);
          const nc = this.unsentEnvPrefs;
          nc && cB.writeRecord(Vc.jb.EnvPrefs, (0, Vc.ud)(nc), nc.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const Ic = this.unsentLookPrefs;
          Ic && cB.writeRecord(Vc.jb.Sensitivity, 0, Ic.mouse, Ic.touch, (0, qB.i)(Ic.fovPercent)) && (this.unsentLookPrefs = null);
          let rB = 0;
          for (const {
              aux: Vc,
              payload: uc
            }
            of this.unsentOptions) {
            if (!cB.writeOptions(Vc, uc)) {
              if (cB.cursor > 0) break;
              this.optionsDropped++
            }
            rB++
          }
          rB > 0 && this.unsentOptions.splice(0, rB)
        } catch (Bc) {
          return this.crash(tB, Bc), !1
        }
        return !0
      }
      setHoldDraws(cB) {
        this.drawsHeld = cB
      }
      setUiPrefs(cB) {
        this.unsentUiPrefs = {
          ...cB
        }
      }
      setEnvPrefs(cB) {
        this.unsentEnvPrefs = {
          ...cB
        }
      }
      setLookPrefs(cB) {
        this.unsentLookPrefs = {
          ...cB
        }
      }
      queueOptions(cB, Bc) {
        Bc.byteLength > Vc.Gb.PayloadMaxBytes ? this.optionsDropped++ : this.unsentOptions.push({
          aux: cB,
          payload: Bc
        })
      }
      setChunkCap(cB) {
        return this.callCore("setChunkCap", null, (Bc => Bc.NTc(cB)))
      }
      shedMemory(cB) {
        const Bc = this.callCore("shedMemory", null, (Bc => Bc.XTc(cB)));
        return 0 === Bc ? null : Bc
      }
      addDistanceInUse() {
        const cB = this.callCore("addDistanceInUse", null, (cB => cB.AOc()));
        return 0 === cB ? null : cB
      }
      setChunkAddDistance(cB, Bc) {
        return this.callCore("setChunkAddDistance", !1, (nc => nc.DTc(cB, Bc)))
      }
      setGameHost(cB) {
        return this.callCore("setGameHost", !1, (Bc => (Bc.qfc(cB), this.gameHost = cB, !0)))
      }
      setAntiCheatProbes(cB) {
        return this.callCore("setAntiCheatProbes", !1, (Bc => Bc.CTc(cB)))
      }
      setAmbientOcclusion(cB) {
        this.callCore("setAmbientOcclusion", void 0, (Bc => {
          Bc.QTc(cB)
        }))
      }
      setPoseLod(cB) {
        this.callCore("setPoseLod", void 0, (Bc => {
          Bc.oTc(cB)
        }))
      }
      setTextureLayers(cB) {
        return this.callCore("setTextureLayers", !1, (Bc => Bc.kfc(cB)))
      }
      setBlockColours(cB) {
        let {
          blocks: Bc,
          counts: nc,
          values: Vc
        } = cB;
        return this.callCore("setBlockColours", !1, (cB => cB.NPc(Bc, nc, Vc)))
      }
      terrainTextureNames() {
        return this.callCore(Wc, [], (cB => cB.jfc()))
      }
      setTerrainTextures(cB, Bc, nc) {
        return this.callCore(Wc, !1, (Vc => Vc.DPc(cB, Bc, nc)))
      }
      setShaderPack(cB, Bc, nc, Vc, Ic, rB) {
        return this.callCore("setShaderPack", !1, (uc => {
          var sc, Mc;
          return null !== (sc = null === (Mc = uc.XPc) || void 0 === Mc ? void 0 : Mc.call(uc, cB, Bc, nc, Vc, Ic, rB)) && void 0 !== sc && sc
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(wc, null, (cB => {
          var Bc, nc;
          return null !== (Bc = null === (nc = cB.HTc) || void 0 === nc ? void 0 : nc.call(cB)) && void 0 !== Bc ? Bc : null
        }))
      }
      setSunShadowTexture(cB, Bc, nc, Vc, Ic) {
        this.callCore(wc, void 0, (rB => {
          var uc;
          null === (uc = rB.wTc) || void 0 === uc || uc.call(rB, cB, Bc, nc, Vc, Ic)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(wc, [], (cB => {
          var Bc, nc;
          return null !== (Bc = null === (nc = cB.FTc) || void 0 === nc ? void 0 : nc.call(cB)) && void 0 !== Bc ? Bc : []
        }))
      }
      callCore(cB, Bc, nc) {
        if (this.stopped) return Bc;
        try {
          return nc(this.core)
        } catch (Vc) {
          return this.crash(cB, Vc), Bc
        }
      }
      readEvents(cB) {
        this.netOffsets.length = 0;
        const Bc = this.headerView(),
          nc = Bc[Vc.cb.EventsPtr],
          Ic = Bc[Vc.cb.EventsLen];
        if (this.envEvents.length = 0, 0 === Ic) return oc;
        const rB = [],
          uc = this.memory().buffer;
        if (nc % 4 !== 0 || nc + Ic > uc.byteLength) return this.crash(Ec, `events of ${Ic} bytes at ${nc} outside ${uc.byteLength} bytes of memory`), oc;
        const sc = new DataView(uc, nc, Ic),
          Mc = this.rings.net,
          Pc = (Bc, nc) => Bc + nc <= cB ? Mc.copyWritten(Bc, nc) : null;
        let qB = 0;
        for (; qB < Ic;) {
          const cB = qB + Vc.R,
            Bc = cB <= Ic ? sc.getUint32(qB, !0) : -1,
            Mc = Bc >>> 16;
          if (Bc < 0 || Mc > Ic - cB) return this.crash(Ec, `event record at ${qB} overruns its ${Ic} bytes`), oc;
          const Lc = 65535 & Bc,
            gB = Bc => sc.getUint32(cB + 4 * Bc, !0);
          if (Lc === Vc.T.RawMessage) {
            const cB = Mc >= Vc.hc.BYTES ? 65535 & gB(1) : -1,
              Bc = cB === Vc.hc.STRING_TYPE,
              nc = Mc === (Bc ? Vc.hc.STRING_TYPE_BYTES : Vc.hc.BYTES) ? Pc(gB(2), gB(3)) : null,
              Ic = Bc && nc ? Pc(gB(4), gB(5)) : null;
            if (!nc || Bc && !Ic) return this.crash(Ec, `RawMessage at ${qB} of ${Mc} bytes names bytes outside net-in`), oc;
            this.netOffsets.push(qB), rB.push({
              type: "message",
              conn: gB(0),
              Uu: cB,
              payloadKind: gB(1) >>> 16,
              payload: nc,
              stringType: Ic ? kB.decode(Ic) : null
            })
          } else if (Lc === Vc.T.CoreErrors) {
            var Oc, Tc;
            const cB = Mc >= 4 ? gB(0) : -1;
            if (cB < 0 || cB > Vc.D.PAIRS_MAX || Mc !== 4 * (Vc.D.FIXED_WORDS + Vc.D.PAIR_WORDS * cB)) return this.crash(Ec, `CoreErrors at ${qB} of ${Mc} bytes`), oc;
            const Bc = [];
            for (let nc = 0; nc < cB; nc++) Bc.push({
              code: gB(1 + 2 * nc),
              detail: gB(2 + 2 * nc)
            });
            null === (Oc = (Tc = this.handlers).onCoreErrors) || void 0 === Oc || Oc.call(Tc, Bc, gB(1 + 2 * cB))
          } else if (Lc === Vc.T.RenderReload) {
            var fc, mB;
            if (Mc !== Vc.oc.BYTES) return this.crash(Ec, `RenderReload at ${qB} of ${Mc} bytes`), oc;
            null === (fc = (mB = this.handlers).onRenderReload) || void 0 === fc || fc.call(mB, gB(0), gB(1))
          } else if (Lc === Vc.T.Images) {
            var ec, tB;
            null === (ec = (tB = this.handlers).onImages) || void 0 === ec || ec.call(tB, new Uint8Array(uc.slice(nc + cB, nc + cB + Mc)))
          } else if (Lc === Vc.T.ModelRequests)
            for (let nc = 0; nc < Mc >>> 2; nc++) {
              var Sc, yB;
              null === (Sc = (yB = this.handlers).onModelRequest) || void 0 === Sc || Sc.call(yB, gB(nc))
            } else if (Lc === Vc.T.ModelTaken) {
              var zB, pc;
              if (Mc < 4) return this.crash(Ec, `ModelTaken at ${qB} of ${Mc} bytes`), oc;
              const cB = new Uint32Array((Mc >>> 2) - 1);
              for (let Bc = 0; Bc < cB.length; Bc++) cB[Bc] = gB(1 + Bc);
              null === (zB = (pc = this.handlers).onModelTaken) || void 0 === zB || zB.call(pc, gB(0), cB)
            } else if (Lc === Vc.T.TerrainTexturesWanted) {
            var hc, aB;
            if (0 !== Mc) return this.crash(Ec, `TerrainTexturesWanted at ${qB} of ${Mc} bytes`), oc;
            null === (hc = (aB = this.handlers).onTerrainTexturesWanted) || void 0 === hc || hc.call(aB)
          } else if (Lc === Vc.T.KeepAliveDue) {
            var lc, Yc;
            if (Mc > Vc.nb) return this.crash(Ec, `KeepAliveDue at ${qB} of ${Mc} bytes`), oc;
            null === (lc = (Yc = this.handlers).onKeepAlive) || void 0 === lc || lc.call(Yc, new Uint8Array(uc, nc + cB, Mc).slice())
          } else if (Lc === Vc.T.ConnectionState) {
            if (Mc !== Vc.v) return this.crash(Ec, `ConnectionState at ${qB} of ${Mc} bytes`), oc;
            this.netOffsets.push(qB), rB.push({
              type: "connection",
              conn: gB(0),
              phase: gB(1),
              code: 0 | gB(2)
            })
          } else if (Lc === Vc.T.EnvLighting || Lc === Vc.T.SkyImages) {
            if (Mc !== (Lc === Vc.T.EnvLighting ? Vc.N : Vc.Ec)) return this.crash(Ec, `event ${Lc} at ${qB} of ${Mc} bytes`), oc;
            this.envEvents.push({
              kind: Lc,
              payload: new Uint8Array(uc.slice(nc + cB, nc + cB + Mc))
            })
          }
          qB = cB + (0, Vc.Ld)(Mc)
        }
        return rB
      }
      forEachNetOut(cB) {
        this.forEachOut(zB, "net-out", Vc.cb.NetOutPtr, Vc.cb.NetOutLen, Vc.Ab, 0, ((Bc, nc, Ic, rB) => {
          const uc = (0, Vc.Bd)(nc);
          uc === Vc.Cb.Frame ? cB((0, Vc.xd)(nc), Ic) : this.crash(zB, `net-out record at ${rB} is kind ${uc}, not a frame`)
        }))
      }
      forEachWorkerOut(cB) {
        this.forEachOut(pc, "worker-out", Vc.cb.WorkerOutPtr, Vc.cb.WorkerOutLen, Vc.Vc, 4, ((Bc, nc, Ic, rB) => {
          const uc = 255 & Bc,
            sc = uc === Vc.ld.Init ? this.initOf(Ic, rB) : Ic;
          null !== sc && cB(uc, Bc >>> 8 & 16777215, sc)
        }))
      }
      initOf(cB, Bc) {
        const nc = this.memory().buffer;
        if (cB.byteLength !== Vc.db) return this.crash(pc, `worker-out Init record at ${Bc} is ${cB.byteLength} bytes, not a view`), null;
        const Ic = new DataView(cB.buffer, cB.byteOffset, Vc.db),
          rB = Ic.getUint32(0, !0),
          uc = Ic.getUint32(4, !0);
        return rB + uc > nc.byteLength ? (this.crash(pc, `worker-out Init record at ${Bc} names ${uc} bytes at ${rB} outside ${nc.byteLength} bytes of memory`), null) : new Uint8Array(nc, rB, uc)
      }
      forEachOut(cB, Bc, nc, Ic, rB, uc, sc) {
        if (this.stopped || null === this.lastHeader) return;
        const Mc = this.headerView(),
          Pc = Mc[nc],
          qB = Mc[Ic];
        if (0 === qB) return;
        const Oc = this.memory().buffer;
        if (Pc % 4 !== 0 || Pc + qB > Oc.byteLength) return void this.crash(cB, `${Bc} of ${qB} bytes at ${Pc} outside ${Oc.byteLength} bytes of memory`);
        const Tc = new DataView(Oc, Pc, qB);
        let fc = 0;
        for (; fc < qB;) {
          const nc = fc + rB,
            Ic = nc <= qB ? Tc.getUint32(fc + uc, !0) : -1;
          if (Ic < 0 || Ic > qB - nc) return void this.crash(cB, `${Bc} record at ${fc} overruns its ${qB} bytes`);
          if (sc(Tc.getUint32(fc, !0), Tc.getUint32(fc + 4, !0), new Uint8Array(Oc, Pc + nc, Ic), fc), this.stopped) return;
          fc = nc + (0, Vc.Ld)(Ic)
        }
      }
      forEachEvent(cB) {
        if (this.stopped || null === this.lastHeader) return;
        const Bc = this.headerView(),
          nc = Bc[Vc.cb.EventsPtr],
          Ic = Bc[Vc.cb.EventsLen];
        if (0 === Ic) return;
        const rB = this.memory().buffer;
        if (nc % 4 !== 0 || nc + Ic > rB.byteLength) return void this.crash(Ec, `events of ${Ic} bytes at ${nc} outside ${rB.byteLength} bytes of memory`);
        const uc = new DataView(rB, nc, Ic);
        let sc = 0;
        for (; sc < Ic;) {
          const Bc = sc + Vc.R,
            nc = Bc <= Ic ? uc.getUint32(sc, !0) : -1,
            rB = nc >>> 16;
          if (nc < 0 || rB > Ic - Bc) return void this.crash(Ec, `event record at ${sc} overruns its ${Ic} bytes`);
          cB(65535 & nc, uc, Bc, rB), sc = Bc + (0, Vc.Ld)(rB)
        }
      }
      crashOn(cB, Bc) {
        Bc instanceof Ic.d ? this.crash(Ec, Bc.message) : this.crash(cB, Bc)
      }
      crash(cB, Bc) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: cB,
          error: Bc,
          header: this.lastHeader
        }))
      }
      headerWord(cB) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[cB]
      }
      headerView() {
        const cB = this.memory().buffer;
        return cB !== this.headerBuffer && (this.headerBuffer = cB, this.header = new Uint32Array(cB, this.core.gV(), Vc.bb)), this.header
      }
    }
  },
  3855: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Mc,
      f: () => rB,
      j: () => sc
    });
    var Vc = nc(1927),
      Ic = nc(3857);

    function rB(cB) {
      let {
        action: Bc,
        flags: nc
      } = cB;
      return "mid-fire" === Bc && 0 !== (nc & Vc.d.AltLeftClick)
    }
    const uc = new Set;

    function sc(cB) {
      return uc.add(cB), () => {
        uc.delete(cB)
      }
    }

    function Mc(cB) {
      const Bc = Ic.e[255 & cB];
      if (void 0 === Bc) return;
      const nc = cB >>> 8 & 255,
        rB = {
          action: Bc,
          down: 0 !== (nc & Vc.d.Down),
          flags: nc,
          press: cB >>> 16
        };
      for (const Vc of uc) Vc(rB)
    }
  },
  38977: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => qB,
      h: () => Pc,
      l: () => Mc
    });
    var Vc = nc(3846),
      Ic = nc(1927),
      rB = nc(3866);
    let uc = !1,
      sc = !1;

    function Mc(cB) {
      uc = !0;
      try {
        cB()
      } finally {
        uc = !1
      }
    }

    function Pc(cB, Bc) {
      if (uc) return !1;
      switch (cB) {
        case Vc.w.MouseDown:
        case Vc.w.MouseUp:
        case Vc.w.TouchStart:
        case Vc.w.TouchEnd:
        case Vc.w.TouchCancel:
        case Vc.w.TouchButton:
          return !0;
        case Vc.w.KeyDown:
        case Vc.w.KeyUp:
          return 0 === (Bc & Ic.e.Repeat) && !(0, rB.e)(document.activeElement);
        default:
          return !1
      }
    }

    function qB(cB) {
      sc || (sc = !0, queueMicrotask((() => {
        sc = !1, cB()
      })))
    }
  },
  39031: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc
    });
    const Vc = 2e3
  },
  38892: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc,
      d: () => rB
    });
    var Vc = nc(5599);
    let Ic = null;

    function rB(cB) {
      Ic = {
        scanned: !1
      };
      try {
        return cB()
      } finally {
        Ic = null
      }
    }

    function uc() {
      const cB = Ic;
      if (null === cB) return (0, Vc.g)();
      const Bc = (0, Vc.g)(!cB.scanned);
      return cB.scanned = !0, Bc
    }
  },
  38970: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => fc,
      i: () => sc,
      m: () => Oc,
      n: () => Tc,
      p: () => mB
    });
    var Vc = nc(27),
      Ic = nc(35),
      rB = nc(2208),
      uc = nc(8157);

    function sc() {
      var cB;
      const Bc = (nc = Vc.d.get("clientEscMenuOptions"), Ic = (0, rB.j)(), {
        sampleCount: nc.antiAliasing ? 4 : 1,
        n: (0, rB.s)(nc.pixelScale, Ic),
        pixelated: (0, rB.o)(nc.pixelSmoothing)
      });
      var nc, Ic;
      return Bc.sampleCount > 1 && (0, uc.d)() && (Bc.sampleCount = 1), Bc.n = null !== (cB = (0, uc.m)()) && void 0 !== cB ? cB : Bc.n, Bc
    }
    let Mc = null;
    const Pc = new Set;

    function qB() {
      if (null === Mc) {
        const cB = document.createElement("div");
        cB.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", cB.setAttribute("aria-hidden", "true"), document.body.append(cB), Mc = new rB.e(cB, (() => {
          for (const cB of Pc) cB()
        }))
      }
      return Mc
    }

    function Oc(cB) {
      const Bc = (0, rB.j)(),
        [nc, Vc] = qB().size(Bc);
      return (0, rB.g)(nc, Vc, Bc, cB.n)
    }

    function Tc(cB) {
      const Bc = (0, rB.j)(),
        [nc, Vc] = qB().size(Bc);
      if (nc <= 0 || Vc <= 0) return null;
      const Ic = (0, rB.g)(nc, Vc, Bc, sc().n);
      return (0, rB.f)(cB, Ic), Ic
    }

    function fc(cB, Bc) {
      cB.style.imageRendering = (0, rB.z)(Bc.pixelated)
    }

    function mB(cB, Bc) {
      const nc = (0, Ic.m)("appManagerUpdated|clientEscMenuOptions", (() => {
          fc(cB, sc()), Bc()
        })),
        Vc = (0, uc.w)(Bc);
      return qB(), Pc.add(Bc), () => {
        nc(), Vc(), Pc.delete(Bc)
      }
    }
  },
  39037: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc,
      c: () => rB,
      e: () => Ic
    });
    let Vc = null;

    function Ic(cB) {
      Vc = cB
    }

    function rB(cB) {
      Vc === cB && (Vc = null)
    }

    function uc() {
      var cB;
      null === (cB = Vc) || void 0 === cB || cB()
    }
  },
  39004: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic,
      g: () => Pc,
      h: () => rB,
      k: () => Oc,
      n: () => qB,
      p: () => Tc
    });
    var Vc = nc(2876);
    class Ic extends Error {
      constructor(cB, Bc, nc) {
        super(`${"fetch"===cB?"fetching":"decoding"} ${Bc} failed`, nc), this.stage = cB, this.source = Bc, this.name = "ShellImageError"
      }
    }
    async function rB(cB) {
      let Bc, nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vc.x,
        rB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof cB) try {
        Bc = await nc(cB)
      } catch (uc) {
        throw new Ic("fetch", cB, {
          cause: uc
        })
      } else Bc = cB;
      try {
        const cB = new Blob([Bc.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(cB, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: rB
        })
      } catch (uc) {
        throw new Ic("decode", "string" === typeof cB ? cB : `${Bc.byteLength} bytes`, {
          cause: uc
        })
      }
    }
    let uc = null;
    const sc = new Map;
    let Mc = 1;

    function Pc(cB) {
      if (uc = cB, null !== cB) {
        for (const [Bc, nc] of sc) cB.QPc(Bc, nc);
        sc.clear()
      }
    }

    function qB(cB) {
      const Bc = Mc++;
      return uc ? uc.QPc(Bc, cB) : sc.set(Bc, cB), Bc
    }
    async function Oc(cB, Bc, nc) {
      const Vc = await rB(cB, Bc, nc);
      return {
        id: qB(Vc),
        width: Vc.width,
        height: Vc.height
      }
    }

    function Tc(cB) {
      var Bc;
      const nc = sc.get(cB);
      if (nc) return nc.close(), void sc.delete(cB);
      null === (Bc = uc) || void 0 === Bc || Bc.CPc(cB)
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);