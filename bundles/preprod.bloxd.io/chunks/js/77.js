export const id = 77;
export const ids = [77];
export const modules = {
  39490: (yb, bb, Wy) => {
    function Uy(yb, bb, Wy) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(yb, bb).getContext("2d", Wy);
      const Uy = document.createElement("canvas");
      return Uy.width = yb, Uy.height = bb, Uy.getContext("2d", Wy)
    }

    function hy(yb, bb) {
      return yb.getContext("2d", bb)
    }
    Wy.d(bb, {
      d: () => hy,
      g: () => Uy
    })
  },
  39219: (yb, bb, Wy) => {
    Wy.d(bb, {
      C: () => Iy,
      D: () => Hy,
      E: () => My,
      H: () => rb,
      J: () => ib,
      K: () => tb,
      N: () => Dy,
      R: () => Xy,
      e: () => wy,
      g: () => Fy,
      j: () => Ry,
      k: () => kb,
      o: () => vb,
      r: () => Oy,
      s: () => ab,
      u: () => Yy,
      v: () => uy,
      y: () => ny
    });
    var Uy = Wy(1239),
      hy = Wy(23),
      fy = Wy(1145),
      Zy = Wy(1977),
      cb = Wy(4022),
      Py = Wy(3991);
    let oy, By = !1,
      Ky = !1,
      ey = !1,
      qb = !1;
    const sy = 1300,
      Sy = 3e3;
    let Ey = 0,
      ly = !1,
      mb = !1,
      Cy = 0;
    const Ty = 2;
    let Vy = !1,
      Jy = !1;
    const gb = new Set,
      Gy = new Set;

    function Oy() {
      return By
    }

    function Ry() {
      return mb
    }

    function vb() {
      return Jy
    }

    function ib() {
      return (0, fy.l)() && !Jy
    }

    function My(yb) {
      let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (yb !== Jy) {
        Jy = yb;
        for (const yb of [...Gy]) yb(Jy);
        bb && Dy()
      }
    }

    function Yy(yb) {
      return Gy.add(yb), () => {
        Gy.delete(yb)
      }
    }

    function Xy() {
      (0, cb.h)(Zy.v.Menu, (0, fy.l)() ? 0 : Zy.v.Menu)
    }

    function ny() {
      mb = !1, Cy = 0, Xy(), Dy()
    }

    function uy(yb) {
      return gb.add(yb), () => {
        gb.delete(yb)
      }
    }

    function rb(yb) {
      Ky = !1, yb !== By && (By = yb, qb = !1, clearTimeout(oy), ey = !By && Vy, By ? (ly = !1, mb = !1, Cy = 0) : ib() && !Vy && (mb = !0), Vy = !1, By && !ib() && zb(), xb(), ey && Dy())
    }

    function Hy(yb) {
      yb !== ly && (ly = yb, yb || Dy())
    }

    function ab() {
      Ky = !1, qb || !0 !== Qy() || (qb = !0, clearTimeout(oy), oy = setTimeout(py, sy))
    }

    function Fy() {
      return (!Ky || performance.now() - Ey > Sy) && (Ky = (0, Py.M)().lockPointer(), Ey = performance.now()), Ky
    }

    function py() {
      Ly() && jb() && Fy()
    }

    function Ly() {
      return ib() && !By && !ly && !(0, Uy.f)()
    }

    function Qy() {
      var yb;
      return "undefined" === typeof navigator || null === (yb = navigator.userActivation) || void 0 === yb ? void 0 : yb.isActive
    }

    function jb() {
      return ey && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Qy()
    }

    function Dy() {
      ib() ? Ly() && !mb && jb() && Fy() : By && !Vy && zb()
    }

    function tb() {
      mb ? navigator.vendor.startsWith("Apple") ? Ny() : Cy = Ty : Dy()
    }

    function wy() {
      Cy > 0 && 0 === --Cy && Ny()
    }

    function kb() {
      Cy = 0
    }

    function Ny() {
      Ly() && !0 === Qy() && Fy()
    }

    function zb() {
      Vy = !0, (0, Py.M)().unlockPointer()
    }

    function Iy() {
      Ky = !1, ey = !1, qb = !1, clearTimeout(oy), ly = !1, mb = !1, Cy = 0, Vy = !1;
      const yb = By;
      By = !1, yb && xb()
    }

    function xb() {
      for (const yb of [...gb]) yb(By);
      hy.g.EZ("pointerLockUpdate", By)
    }
  },
  39192: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => ey,
      g: () => cb,
      h: () => Ky,
      l: () => oy,
      m: () => Zy,
      n: () => By,
      o: () => Py
    });
    let Uy = null,
      hy = null,
      fy = null;

    function Zy(yb) {
      Uy = yb
    }

    function cb() {
      return Uy
    }

    function Py(yb) {
      hy = yb
    }

    function oy() {
      return hy
    }

    function By(yb) {
      fy = yb
    }

    function Ky() {
      return fy
    }

    function ey() {
      var yb, bb;
      return !0 === (null === (yb = hy) || void 0 === yb || null === (bb = yb.currentViewer) || void 0 === bb ? void 0 : bb.inPlayback)
    }
  },
  39399: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy
    });
    const Uy = {
      stop: () => Uy,
      fade: () => Uy,
      rate: () => Uy,
      getVolume: () => 0,
      getRelativeVolume: () => 0,
      setRelativeVolume: () => Uy,
      setPannerAttr: () => Uy,
      setPosition: () => Uy
    }
  },
  39408: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Cy,
      e: () => sy,
      g: () => tb,
      i: () => vb,
      j: () => My,
      k: () => Yy,
      o: () => mb,
      s: () => Ey,
      t: () => ly,
      x: () => Ry,
      B: () => Ly,
      F: () => Jy,
      H: () => Hy,
      L: () => Dy,
      M: () => Xy,
      O: () => uy
    });
    var Uy = Wy(3996),
      hy = Wy(39156),
      fy = Wy(7);
    class Zy {
      constructor(yb, bb) {
        this.memory = yb, this.access = bb, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.Hy = 0, this.u32 = new fy.o(0), this.f32 = new fy.g(0), this.u8 = new fy.c(0), this.dataView = new fy.k(new ArrayBuffer(0)), this.refresh()
      }
      refresh() {
        this.ptr = this.access.ptr(), this.Hy = this.access.Hy(), this.buffer = (0, fy.J)(this.memory()), this.u32 = new fy.o(this.buffer, this.ptr, this.Hy >>> 2), this.f32 = new fy.g(this.buffer, this.ptr, this.Hy >>> 2), this.u8 = new fy.c(this.buffer, this.ptr, this.Hy), this.dataView = new fy.k(this.buffer, this.ptr, this.Hy)
      }
      ensureViews() {
        (0, fy.J)(this.memory()) !== this.buffer && this.refresh()
      }
      get view() {
        return this.ensureViews(), this.dataView
      }
      room(yb) {
        return !!this.fits(yb) || (this.dropped++, !1)
      }
      fits(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.cursor;
        this.ensureViews();
        const Wy = bb + yb;
        return Wy <= this.Hy || Wy <= Uy.rc && 0 !== this.access.reserve(Wy) && (this.refresh(), Wy <= this.Hy)
      }
      consume(yb) {
        const bb = this.cursor - yb;
        bb > 0 && yb > 0 && (this.ensureViews(), this.u8.copyWithin(0, yb, this.cursor)), this.cursor = bb > 0 ? bb : 0
      }
      writeRecord(yb, bb, Wy, hy, fy) {
        if (!this.room(Uy.fb)) return !1;
        const Zy = this.cursor >>> 2;
        return this.u32[Zy] = 65535 & yb | (65535 & bb) << 16, this.f32[Zy + 1] = Wy, this.f32[Zy + 2] = hy, this.u32[Zy + 3] = fy >>> 0, this.cursor += Uy.fb, !0
      }
      writeOptions(yb, bb) {
        const Wy = bb.byteLength,
          hy = Uy.fb + (0, Uy.Wd)(Wy);
        if (!this.fits(hy)) return !1;
        const fy = this.cursor,
          Zy = fy >>> 2;
        this.u32[Zy] = Uy.hb.Options, this.u32[Zy + 1] = Wy, this.u32[Zy + 2] = 0, this.u32[Zy + 3] = yb >>> 0;
        const cb = fy + Uy.fb;
        return this.u8.set(bb, cb), this.u8.fill(0, cb + Wy, fy + hy), this.cursor += hy, !0
      }
      writeWorkerRecord(yb, bb, Wy, hy, fy) {
        const Zy = fy.byteLength,
          cb = Uy.nd + (0, Uy.Wd)(Zy);
        if (Zy > Uy.kd) return this.dropped++, !1;
        if (!this.room(cb)) return !1;
        const Py = this.cursor,
          oy = Py >>> 2;
        this.u32[oy] = yb >>> 0, this.u32[oy + 1] = 65535 & bb | (65535 & Wy) << 16, this.u32[oy + 2] = hy >>> 0, this.u32[oy + 3] = Zy;
        const By = Py + Uy.nd;
        return this.u8.set(fy, By), this.u8.fill(0, By + Zy, Py + cb), this.cursor += cb, !0
      }
      written() {
        return this.ensureViews(), this.u8.subarray(0, this.cursor)
      }
      writeFrame(yb, bb) {
        return this.writeNet(Uy.Fb.Frame, yb, bb)
      }
      writeOpen(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Uy.Fb.Open, yb, Py(bb))
      }
      writeClose(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.writeNet(Uy.Fb.Close, yb, Py(bb))
      }
      writeNet(yb, bb, Wy) {
        const hy = Wy.byteLength,
          fy = Uy.Db + (0, Uy.Wd)(hy);
        if (hy > Uy.xb) return this.dropped++, !1;
        if (!this.room(fy)) return !1;
        const Zy = this.cursor;
        this.u32[Zy >>> 2] = hy, this.u32[1 + (Zy >>> 2)] = (0, Uy.Sd)(yb, bb);
        const cb = Zy + Uy.Db;
        return this.u8.set(Wy, cb), this.u8.fill(0, cb + hy, Zy + fy), this.cursor += fy, !0
      }
      vU(yb, bb, Wy) {
        const hy = Uy.o + (0, Uy.Wd)(Wy);
        if (!this.room(hy)) return -1;
        const fy = this.cursor;
        this.u32[fy >>> 2] = 65535 & yb | (65535 & bb) << 16, this.u32[1 + (fy >>> 2)] = Wy;
        const Zy = fy + Uy.o;
        return this.u8.fill(0, Zy, fy + hy), this.cursor += hy, Zy
      }
      growForCmd(yb) {
        return this.fits(Uy.o + (0, Uy.Wd)(yb), 0)
      }
      writeCmd(yb, bb, Wy) {
        const Uy = this.vU(yb, bb, Wy.byteLength);
        return !(Uy < 0) && (this.u8.set(Wy, Uy), !0)
      }
      copyWritten(yb, bb) {
        return this.ensureViews(), this.u8.slice(yb, yb + bb)
      }
    }
    const cb = new fy.c(0);

    function Py(yb) {
      if (0 === yb) return cb;
      const bb = new fy.c(Uy.zb);
      for (let Wy = 0; Wy < Uy.zb; Wy++) bb[Wy] = yb >>> 8 * Wy & 255;
      return bb
    }
    class oy {
      constructor(yb, bb) {
        this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new Zy(bb, {
          ptr: () => yb.Iy(),
          Hy: () => yb.Mey(),
          reserve: bb => yb.jqy(bb)
        }), this.net = new Zy(bb, {
          ptr: () => yb.pey(),
          Hy: () => yb.Fey(),
          reserve: bb => yb.Dey(bb)
        }), this.worker = new Zy(bb, {
          ptr: () => yb.Kqy(),
          Hy: () => yb.Bqy(),
          reserve: bb => yb.tqy(bb)
        }), this.cmd = new Zy(bb, {
          ptr: () => yb.Tey(),
          Hy: () => yb.mqy(),
          reserve: bb => yb.Cey(bb)
        })
      }
      reset(yb) {
        this.input.cursor = 0, this.worker.cursor = 0, this.cmd.consume(yb)
      }
    }
    var By = Wy(39307),
      Ky = Wy(1983),
      ey = Wy(3994),
      qb = Wy(39415);
    const sy = "coreFrame",
      Sy = "fatalStatus",
      Ey = "otherCall",
      ly = "coreRings",
      mb = "netIn",
      Cy = "abi",
      Ty = "netOut",
      Vy = "workerOut",
      Jy = "worldgenHost",
      gb = "eventWalker",
      Gy = "netEvent",
      Oy = "envEvent",
      Ry = "sharedTables",
      vb = "inputAction",
      ib = new Set([gb, Gy, Oy, vb, Ry]),
      My = "wasmMemory",
      Yy = "meshHost";

    function Xy(yb, bb) {
      yb.forEachWorkerOut(((Wy, hy, fy) => {
        if ((0, Uy.Md)(Wy)) try {
          var Zy;
          null === (Zy = bb.worldgen) || void 0 === Zy || Zy.take(Wy, fy)
        } catch (Py) {
          yb.crash(Jy, Py)
        } else try {
          var cb;
          null === (cb = bb.mesh) || void 0 === cb || cb.take(Wy, hy, fy)
        } catch (Py) {
          yb.crash(Yy, Py)
        }
      }))
    }
    const ny = 1048576;

    function uy(yb, bb) {
      let Wy = !1;
      const Uy = () => {
        Wy = !1, bb()
      };
      return () => {
        !Wy && yb.cursor >= ny && (Wy = !0, queueMicrotask(Uy))
      }
    }
    const rb = new Set([Sy, Ey, Jy, Yy]);

    function Hy(yb) {
      return ib.has(yb.site) ? yb.error instanceof WebAssembly.RuntimeError || (0, hy.q)(yb.error) : !rb.has(yb.site) && yb.error instanceof Error
    }
    const ab = "events",
      Fy = [],
      py = "TUy",
      Ly = "terrainTextures",
      Qy = "sunShadowTextures",
      jb = new TextDecoder;

    function Dy(yb, bb) {
      const {
        site: Wy,
        error: hy,
        header: fy
      } = yb, Zy = fy ? (0, Uy.Jd)(fy.lastError) : "noFrame", cb = `CORE-${Wy===Sy?Zy:Wy}`, Py = null === hy || void 0 === hy ? "" : ` ${(0,By.f)(hy)}`, oy = {
        site: Wy,
        wasmBuild: bb.wasm,
        clientVersion: bb.client
      };
      return fy && (oy.status = String(fy.status), oy.lastError = Zy, oy.lastErrorCode = String(fy.lastError), oy.lastErrorDetail = String(fy.lastErrorDetail), oy.errorCount = String(fy.errorCount), oy.frameIndex = String(fy.frameIndex), oy.tickIndex = String(fy.tickIndex)), {
        code: cb,
        message: `core ${Wy}, last error ${Zy};${Py}`,
        details: oy
      }
    }
    class tb {
      constructor(yb, bb, Wy) {
        this.core = yb, this.memory = bb, this.handlers = Wy, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.unsentUiPrefs = null, this.eventWalker = null, this.netOffsets = [], this.frameEvents = {
          ptr: 0,
          len: 0,
          net: Fy,
          netOffsets: this.netOffsets,
          kind: "none"
        }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.rings = new oy(yb, bb)
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
      framePaces(yb) {
        if (this.stopped || this.drawsHeld) return !1;
        try {
          return this.core.Rey(yb)
        } catch (bb) {
          return this.crash(sy, bb), !1
        }
      }
      get isStopped() {
        return this.stopped
      }
      frame(yb, bb) {
        var Wy;
        let fy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.stopped) return !1;
        if (!this.writePendingInput()) return !1;
        const {
          input: Zy,
          net: cb,
          worker: Py,
          cmd: oy
        } = this.rings, By = cb.cursor, Ky = bb && !this.drawsHeld;
        let Ey = Uy.G.Fatal;
        const ly = oy.cursor;
        let Cy = null;
        try {
          const bb = (Ky ? Uy.R.Draws : 0) | (fy ? Uy.R.NetAll : 0);
          Ey = (0, qb.i)((() => this.core.frame(yb, Zy.cursor, cb.cursor, Py.cursor, bb, ly)))
        } catch (uy) {
          Cy = {
            error: uy
          }
        }
        const Ty = null === (Wy = this.gameHost) || void 0 === Wy ? void 0 : Wy.takeFault();
        this.rings.reset(this.stopped || null !== Cy || void 0 !== Ty ? oy.cursor : ly);
        const Vy = null === Cy && void 0 === Ty ? this.headerView() : null,
          Jy = null === Vy ? null : (0, Uy.Yd)(Vy);
        null !== Jy && (this.lastHeader = Jy);
        const Oy = null !== Jy && Ey !== Uy.G.Fatal,
          Ry = Oy && null !== Vy ? Vy[Uy._.NetInKept] : 0,
          vb = Oy && Ry <= By && Ry % 4 === 0 ? Ry : null;
        var ib, My;
        null !== Jy && null !== vb && Ey === Uy.G.Errors && (null === (ib = (My = this.handlers).onErrors) || void 0 === ib || ib.call(My, Jy));
        const Yy = null === vb ? Fy : this.readEvents(By);
        if (cb.consume(By - (null !== vb && void 0 !== vb ? vb : 0)), this.netKept = null !== vb && void 0 !== vb ? vb : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== Cy) return this.crash(sy, void 0 === Ty || Ty instanceof hy.b ? Cy.error : Ty), !1;
        if (void 0 !== Ty || null === Jy) return this.crashOn(sy, Ty), !1;
        if (this.lastFrameKind = (0, ey.c)(Ky, this.headerView()[Uy._.FrameDraw]), Ey === Uy.G.Fatal) return this.crash(Sy, null), !1;
        if (null === vb) return this.crash(mb, `the core kept ${Ry} of ${By} net-in bytes`), !1;
        if (this.eventWalker) {
          if (this.stopped) return !1;
          const yb = this.frameEvents,
            bb = this.headerView();
          yb.ptr = bb[Uy._.EventsPtr], yb.len = bb[Uy._.EventsLen], yb.net = Yy, yb.kind = this.lastFrameKind;
          try {
            this.eventWalker(yb)
          } catch (uy) {
            return this.crashOn(gb, uy), !1
          }
          return this.handEnvEvents()
        }
        for (const Uy of Yy) {
          if (this.stopped) return !1;
          try {
            var Xy, ny;
            null === (Xy = (ny = this.handlers).onNetEvent) || void 0 === Xy || Xy.call(ny, Uy)
          } catch (uy) {
            return this.crashOn(Gy, uy), !1
          }
        }
        return this.handEnvEvents()
      }
      handEnvEvents() {
        for (const fy of this.graceEvents) {
          if (this.stopped) return !1;
          try {
            var yb, bb;
            null === (yb = (bb = this.handlers).onReconnectGrace) || void 0 === yb || yb.call(bb, fy)
          } catch (hy) {
            return this.crashOn(Gy, hy), !1
          }
        }
        for (const fy of this.envEvents) {
          if (this.stopped) return !1;
          try {
            var Wy, Uy;
            null === (Wy = (Uy = this.handlers).onEnvEvent) || void 0 === Wy || Wy.call(Uy, fy)
          } catch (hy) {
            return this.crashOn(Oy, hy), !1
          }
        }
        return !this.stopped
      }
      setEventWalker(yb) {
        this.eventWalker = yb
      }
      writePendingInput() {
        if (this.stopped) return !1;
        const {
          input: yb
        } = this.rings;
        try {
          const bb = this.unsentUiPrefs;
          bb && yb.writeRecord(Uy.hb.UiPrefs, 0, bb.nametagCutDistance, 0, (0, Uy.Zd)(bb)) && (this.unsentUiPrefs = null);
          const Wy = this.unsentEnvPrefs;
          Wy && yb.writeRecord(Uy.hb.EnvPrefs, (0, Uy.Ld)(Wy), Wy.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
          const hy = this.unsentLookPrefs;
          hy && yb.writeRecord(Uy.hb.Sensitivity, 0, hy.mouse, hy.touch, (0, Ky.h)(hy.fovPercent)) && (this.unsentLookPrefs = null);
          let fy = 0;
          for (const {
              aux: Uy,
              payload: Zy
            }
            of this.unsentOptions) {
            if (!yb.writeOptions(Uy, Zy)) {
              if (yb.cursor > 0) break;
              this.optionsDropped++
            }
            fy++
          }
          fy > 0 && this.unsentOptions.splice(0, fy)
        } catch (bb) {
          return this.crash(ly, bb), !1
        }
        return !0
      }
      setHoldDraws(yb) {
        this.drawsHeld = yb
      }
      setUiPrefs(yb) {
        this.unsentUiPrefs = {
          ...yb
        }
      }
      setEnvPrefs(yb) {
        this.unsentEnvPrefs = {
          ...yb
        }
      }
      setLookPrefs(yb) {
        this.unsentLookPrefs = {
          ...yb
        }
      }
      queueOptions(yb, bb) {
        return !this.isStopped && (bb.byteLength > Uy.Nb.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
          aux: yb,
          payload: bb
        }), !0))
      }
      setChunkCap(yb) {
        return this.callCore("setChunkCap", null, (bb => bb.xqy(yb)))
      }
      shedMemory(yb) {
        const bb = this.callCore("shedMemory", null, (bb => bb.hqy(yb)));
        return 0 === bb ? null : bb
      }
      addDistanceInUse() {
        const yb = this.callCore("addDistanceInUse", null, (yb => yb.qqy()));
        return 0 === yb ? null : yb
      }
      setChunkAddDistance(yb, bb) {
        return this.callCore("setChunkAddDistance", !1, (Wy => Wy.Iey(yb, bb)))
      }
      setGameHost(yb) {
        return this.callCore("setGameHost", !1, (bb => (bb.Oey(yb), this.gameHost = yb, !0)))
      }
      setAntiCheatProbes(yb) {
        return this.callCore("setAntiCheatProbes", !1, (bb => bb.Ney(yb)))
      }
      setAmbientOcclusion(yb) {
        this.callCore("setAmbientOcclusion", void 0, (bb => {
          bb.kqy(yb)
        }))
      }
      setPoseLod(yb) {
        this.callCore("setPoseLod", void 0, (bb => {
          bb.ysy(yb)
        }))
      }
      setLookDebug(yb) {
        this.callCore(py, void 0, (bb => {
          bb.dey(yb)
        }))
      }
      takeLookDebug() {
        return this.callCore(py, [], (yb => yb.Zqy()))
      }
      setTextureLayers(yb) {
        return this.callCore("setTextureLayers", !1, (bb => bb.Uqy(yb)))
      }
      setBlockColours(yb) {
        let {
          blocks: bb,
          counts: Wy,
          values: Uy
        } = yb;
        return this.callCore("setBlockColours", !1, (yb => yb.tBy(bb, Wy, Uy)))
      }
      terrainTextureNames() {
        return this.callCore(Ly, [], (yb => yb.oqy()))
      }
      setTerrainTextures(yb, bb, Wy, Uy) {
        return this.callCore(Ly, !1, (hy => hy.Doy(yb, Wy, bb, Uy)))
      }
      setShaderPack(yb, bb, Wy, Uy, hy, fy) {
        return this.callCore("setShaderPack", !1, (Zy => {
          var cb, Py;
          return null !== (cb = null === (Py = Zy.xBy) || void 0 === Py ? void 0 : Py.call(Zy, yb, bb, Wy, Uy, hy, fy)) && void 0 !== cb && cb
        }))
      }
      sunShadowWantedTextures() {
        return this.callCore(Qy, null, (yb => {
          var bb, Wy;
          return null !== (bb = null === (Wy = yb.fqy) || void 0 === Wy ? void 0 : Wy.call(yb)) && void 0 !== bb ? bb : null
        }))
      }
      setSunShadowTexture(yb, bb, Wy, Uy, hy) {
        this.callCore(Qy, void 0, (fy => {
          var Zy;
          null === (Zy = fy.Wqy) || void 0 === Zy || Zy.call(fy, yb, bb, Wy, Uy, hy)
        }))
      }
      takeSunShadowWarnings() {
        return this.callCore(Qy, [], (yb => {
          var bb, Wy;
          return null !== (bb = null === (Wy = yb.csy) || void 0 === Wy ? void 0 : Wy.call(yb)) && void 0 !== bb ? bb : []
        }))
      }
      callCore(yb, bb, Wy) {
        if (this.stopped) return bb;
        try {
          return Wy(this.core)
        } catch (Uy) {
          return this.crash(yb, Uy), bb
        }
      }
      readEvents(yb) {
        this.netOffsets.length = 0;
        const bb = this.headerView(),
          Wy = bb[Uy._.EventsPtr],
          hy = bb[Uy._.EventsLen];
        if (this.envEvents.length = 0, this.graceEvents.length = 0, 0 === hy) return Fy;
        const fy = [],
          Zy = this.memory().buffer;
        if (Wy % 4 !== 0 || Wy + hy > Zy.byteLength) return this.crash(ab, `events of ${hy} bytes at ${Wy} outside ${Zy.byteLength} bytes of memory`), Fy;
        const cb = new DataView(Zy, Wy, hy),
          Py = this.rings.net,
          oy = (bb, Wy) => bb + Wy <= yb ? Py.copyWritten(bb, Wy) : null;
        let By = 0;
        for (; By < hy;) {
          const yb = By + Uy.N,
            bb = yb <= hy ? cb.getUint32(By, !0) : -1,
            Py = bb >>> 16;
          if (bb < 0 || Py > hy - yb) return this.crash(ab, `event record at ${By} overruns its ${hy} bytes`), Fy;
          const Oy = 65535 & bb,
            Ry = bb => cb.getUint32(yb + 4 * bb, !0);
          if (Oy === Uy.O.RawMessage) {
            const yb = Py >= Uy.vc.BYTES ? 65535 & Ry(1) : -1,
              bb = yb === Uy.vc.STRING_TYPE,
              Wy = Py === (bb ? Uy.vc.STRING_TYPE_BYTES : Uy.vc.BYTES) ? oy(Ry(2), Ry(3)) : null,
              hy = bb && Wy ? oy(Ry(4), Ry(5)) : null;
            if (!Wy || bb && !hy) return this.crash(ab, `RawMessage at ${By} of ${Py} bytes names bytes outside net-in`), Fy;
            this.netOffsets.push(By), fy.push({
              type: "message",
              conn: Ry(0),
              vc: yb,
              payloadKind: Ry(1) >>> 16,
              payload: Wy,
              stringType: hy ? jb.decode(hy) : null
            })
          } else if (Oy === Uy.O.CoreErrors) {
            var Ky, ey;
            const yb = Py >= 4 ? Ry(0) : -1;
            if (yb < 0 || yb > Uy.C.PAIRS_MAX || Py !== 4 * (Uy.C.FIXED_WORDS + Uy.C.PAIR_WORDS * yb)) return this.crash(ab, `CoreErrors at ${By} of ${Py} bytes`), Fy;
            const bb = [];
            for (let Wy = 0; Wy < yb; Wy++) bb.push({
              code: Ry(1 + 2 * Wy),
              detail: Ry(2 + 2 * Wy)
            });
            null === (Ky = (ey = this.handlers).onCoreErrors) || void 0 === Ky || Ky.call(ey, bb, Ry(1 + 2 * yb))
          } else if (Oy === Uy.O.RenderReload) {
            var qb, sy;
            if (Py !== Uy.Hc.BYTES) return this.crash(ab, `RenderReload at ${By} of ${Py} bytes`), Fy;
            null === (qb = (sy = this.handlers).onRenderReload) || void 0 === qb || qb.call(sy, Ry(0), Ry(1), Ry(2))
          } else if (Oy === Uy.O.Images) {
            var Sy, Ey;
            null === (Sy = (Ey = this.handlers).onImages) || void 0 === Sy || Sy.call(Ey, new Uint8Array(Zy.slice(Wy + yb, Wy + yb + Py)))
          } else if (Oy === Uy.O.ModelRequests)
            for (let Wy = 0; Wy < Py >>> 2; Wy++) {
              var ly, mb;
              null === (ly = (mb = this.handlers).onModelRequest) || void 0 === ly || ly.call(mb, Ry(Wy))
            } else if (Oy === Uy.O.ModelTaken) {
              var Cy, Ty;
              if (Py < 4) return this.crash(ab, `ModelTaken at ${By} of ${Py} bytes`), Fy;
              const yb = new Uint32Array((Py >>> 2) - 1);
              for (let bb = 0; bb < yb.length; bb++) yb[bb] = Ry(1 + bb);
              null === (Cy = (Ty = this.handlers).onModelTaken) || void 0 === Cy || Cy.call(Ty, Ry(0), yb)
            } else if (Oy === Uy.O.TerrainTexturesWanted) {
            var Vy, Jy;
            if (0 !== Py) return this.crash(ab, `TerrainTexturesWanted at ${By} of ${Py} bytes`), Fy;
            null === (Vy = (Jy = this.handlers).onTerrainTexturesWanted) || void 0 === Vy || Vy.call(Jy)
          } else if (Oy === Uy.O.KeepAliveDue) {
            var gb, Gy;
            if (Py > Uy.kb) return this.crash(ab, `KeepAliveDue at ${By} of ${Py} bytes`), Fy;
            null === (gb = (Gy = this.handlers).onKeepAlive) || void 0 === gb || gb.call(Gy, new Uint8Array(Zy, Wy + yb, Py).slice())
          } else if (Oy === Uy.O.ConnectionState) {
            if (Py !== Uy.p) return this.crash(ab, `ConnectionState at ${By} of ${Py} bytes`), Fy;
            this.netOffsets.push(By), fy.push({
              type: "connection",
              conn: Ry(0),
              phase: Ry(1),
              code: 0 | Ry(2)
            })
          } else if (Oy === Uy.O.EnvLighting || Oy === Uy.O.SkyImages) {
            if (Py !== (Oy === Uy.O.EnvLighting ? Uy.J : Uy.Wc)) return this.crash(ab, `event ${Oy} at ${By} of ${Py} bytes`), Fy;
            this.envEvents.push({
              kind: Oy,
              payload: new Uint8Array(Zy.slice(Wy + yb, Wy + yb + Py))
            })
          } else if (Oy === Uy.O.ReconnectGrace) {
            if (Py !== Uy.Zb) return this.crash(ab, `ReconnectGrace at ${By} of ${Py} bytes`), Fy;
            const yb = Ry(2);
            this.graceEvents.push({
              conn: Ry(0),
              graceMs: Ry(1),
              sessionBased: 0 !== (yb & Uy.xc.SessionBased),
              replayOffer: 0 !== (yb & Uy.xc.ReplayOffer)
            })
          }
          By = yb + (0, Uy.Wd)(Py)
        }
        return fy
      }
      forEachNetOut(yb) {
        this.forEachOut(Ty, "net-out", Uy._.NetOutPtr, Uy._.NetOutLen, Uy.Db, 0, ((bb, Wy, hy, fy) => {
          const Zy = (0, Uy.Rd)(Wy);
          Zy === Uy.Fb.Frame ? yb((0, Uy.Nd)(Wy), hy) : this.crash(Ty, `net-out record at ${fy} is kind ${Zy}, not a frame`)
        }))
      }
      forEachWorkerOut(yb) {
        this.forEachOut(Vy, "worker-out", Uy._.WorkerOutPtr, Uy._.WorkerOutLen, Uy.jd, 4, ((bb, Wy, hy, fy) => {
          const Zy = 255 & bb,
            cb = Zy === Uy.Ad.Init ? this.initOf(hy, fy) : hy;
          null !== cb && yb(Zy, bb >>> 8 & 16777215, cb)
        }))
      }
      initOf(yb, bb) {
        const Wy = this.memory().buffer;
        if (yb.byteLength !== Uy.ab) return this.crash(Vy, `worker-out Init record at ${bb} is ${yb.byteLength} bytes, not a view`), null;
        const hy = new DataView(yb.buffer, yb.byteOffset, Uy.ab),
          fy = hy.getUint32(0, !0),
          Zy = hy.getUint32(4, !0);
        return fy + Zy > Wy.byteLength ? (this.crash(Vy, `worker-out Init record at ${bb} names ${Zy} bytes at ${fy} outside ${Wy.byteLength} bytes of memory`), null) : new Uint8Array(Wy, fy, Zy)
      }
      forEachOut(yb, bb, Wy, hy, fy, Zy, cb) {
        if (this.stopped || null === this.lastHeader) return;
        const Py = this.headerView(),
          oy = Py[Wy],
          By = Py[hy];
        if (0 === By) return;
        const Ky = this.memory().buffer;
        if (oy % 4 !== 0 || oy + By > Ky.byteLength) return void this.crash(yb, `${bb} of ${By} bytes at ${oy} outside ${Ky.byteLength} bytes of memory`);
        const ey = new DataView(Ky, oy, By);
        let qb = 0;
        for (; qb < By;) {
          const Wy = qb + fy,
            hy = Wy <= By ? ey.getUint32(qb + Zy, !0) : -1;
          if (hy < 0 || hy > By - Wy) return void this.crash(yb, `${bb} record at ${qb} overruns its ${By} bytes`);
          if (cb(ey.getUint32(qb, !0), ey.getUint32(qb + 4, !0), new Uint8Array(Ky, oy + Wy, hy), qb), this.stopped) return;
          qb = Wy + (0, Uy.Wd)(hy)
        }
      }
      forEachEvent(yb) {
        if (this.stopped || null === this.lastHeader) return;
        const bb = this.headerView(),
          Wy = bb[Uy._.EventsPtr],
          hy = bb[Uy._.EventsLen];
        if (0 === hy) return;
        const fy = this.memory().buffer;
        if (Wy % 4 !== 0 || Wy + hy > fy.byteLength) return void this.crash(ab, `events of ${hy} bytes at ${Wy} outside ${fy.byteLength} bytes of memory`);
        const Zy = new DataView(fy, Wy, hy);
        let cb = 0;
        for (; cb < hy;) {
          const bb = cb + Uy.N,
            Wy = bb <= hy ? Zy.getUint32(cb, !0) : -1,
            fy = Wy >>> 16;
          if (Wy < 0 || fy > hy - bb) return void this.crash(ab, `event record at ${cb} overruns its ${hy} bytes`);
          yb(65535 & Wy, Zy, bb, fy), cb = bb + (0, Uy.Wd)(fy)
        }
      }
      crashOn(yb, bb) {
        bb instanceof hy.b ? this.crash(ab, bb.message) : this.crash(yb, bb)
      }
      crash(yb, bb) {
        this.stopped || (this.stopped = !0, this.handlers.onCrash({
          site: yb,
          error: bb,
          header: this.lastHeader
        }))
      }
      headerWord(yb) {
        return this.stopped || null === this.lastHeader ? 0 : this.headerView()[yb]
      }
      headerView() {
        const yb = this.memory().buffer;
        return yb !== this.headerBuffer && (this.headerBuffer = yb, this.header = new Uint32Array(yb, this.core.iU(), Uy.W)), this.header
      }
    }
  },
  4006: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Py,
      h: () => fy,
      k: () => cb
    });
    var Uy = Wy(1977),
      hy = Wy(4013);

    function fy(yb) {
      let {
        action: bb,
        flags: Wy
      } = yb;
      return "mid-fire" === bb && 0 !== (Wy & Uy.b.AltLeftClick)
    }
    const Zy = new Set;

    function cb(yb) {
      return Zy.add(yb), () => {
        Zy.delete(yb)
      }
    }

    function Py(yb) {
      const bb = hy.b[255 & yb];
      if (void 0 === bb) return;
      const Wy = yb >>> 8 & 255,
        fy = {
          action: bb,
          down: 0 !== (Wy & Uy.b.Down),
          flags: Wy,
          press: yb >>> 16
        };
      for (const Uy of Zy) Uy(fy)
    }
  },
  39510: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => By,
      d: () => oy,
      e: () => Py
    });
    var Uy = Wy(4001),
      hy = Wy(1977),
      fy = Wy(4022);
    let Zy = !1,
      cb = !1;

    function Py(yb) {
      Zy = !0;
      try {
        yb()
      } finally {
        Zy = !1
      }
    }

    function oy(yb, bb) {
      if (Zy) return !1;
      switch (yb) {
        case Uy.z.MouseDown:
        case Uy.z.MouseUp:
        case Uy.z.TouchStart:
        case Uy.z.TouchEnd:
        case Uy.z.TouchCancel:
        case Uy.z.TouchButton:
          return !0;
        case Uy.z.KeyDown:
        case Uy.z.KeyUp:
          return 0 === (bb & hy.d.Repeat) && !(0, fy.g)(document.activeElement);
        default:
          return !1
      }
    }

    function By(yb) {
      cb || (cb = !0, queueMicrotask((() => {
        cb = !1, yb()
      })))
    }
  },
  39543: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Uy
    });
    const Uy = 2e3
  },
  39415: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy,
      i: () => fy
    });
    var Uy = Wy(5885);
    let hy = null;

    function fy(yb) {
      hy = {
        scanned: !1
      };
      try {
        return yb()
      } finally {
        hy = null
      }
    }

    function Zy() {
      const yb = hy;
      if (null === yb) return (0, Uy.g)();
      const bb = (0, Uy.g)(!yb.scanned);
      return yb.scanned = !0, bb
    }
  },
  39508: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => qb,
      g: () => cb,
      j: () => Ky,
      k: () => ey,
      l: () => sy
    });
    var Uy = Wy(19),
      hy = Wy(23),
      fy = Wy(2269),
      Zy = Wy(8385);

    function cb() {
      var yb;
      const bb = (Wy = Uy.d.get("clientEscMenuOptions"), hy = (0, fy.j)(), {
        sampleCount: Wy.antiAliasing ? 4 : 1,
        n: (0, fy.q)(Wy.pixelScale, hy),
        pixelated: (0, fy.p)(Wy.pixelSmoothing)
      });
      var Wy, hy;
      return bb.sampleCount > 1 && (0, Zy.d)() && (bb.sampleCount = 1), bb.n = null !== (yb = (0, Zy.o)()) && void 0 !== yb ? yb : bb.n, bb
    }
    let Py = null;
    const oy = new Set;

    function By() {
      if (null === Py) {
        const yb = document.createElement("div");
        yb.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", yb.setAttribute("aria-hidden", "true"), document.body.append(yb), Py = new fy.b(yb, (() => {
          for (const yb of oy) yb()
        }))
      }
      return Py
    }

    function Ky(yb) {
      const bb = (0, fy.j)(),
        [Wy, Uy] = By().size(bb);
      return (0, fy.h)(Wy, Uy, bb, yb.n)
    }

    function ey(yb) {
      const bb = (0, fy.j)(),
        [Wy, Uy] = By().size(bb);
      if (Wy <= 0 || Uy <= 0) return null;
      const hy = (0, fy.h)(Wy, Uy, bb, cb().n);
      return (0, fy.f)(yb, hy), hy
    }

    function qb(yb, bb) {
      yb.style.imageRendering = (0, fy.z)(bb.pixelated)
    }

    function sy(yb, bb) {
      const Wy = (0, hy.h)("appManagerUpdated|clientEscMenuOptions", (() => {
          qb(yb, cb()), bb()
        })),
        Uy = (0, Zy.y)(bb);
      return By(), oy.add(bb), () => {
        Wy(), Uy(), oy.delete(bb)
      }
    }
  },
  39545: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy,
      f: () => fy,
      h: () => hy
    });
    let Uy = null;

    function hy(yb) {
      Uy = yb
    }

    function fy(yb) {
      Uy === yb && (Uy = null)
    }

    function Zy() {
      var yb;
      null === (yb = Uy) || void 0 === yb || yb()
    }
  },
  39525: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => hy,
      i: () => oy,
      m: () => fy,
      p: () => Ky,
      r: () => By,
      t: () => ey
    });
    var Uy = Wy(3004);
    class hy extends Error {
      constructor(yb, bb, Wy) {
        super(`${"fetch"===yb?"fetching":"decoding"} ${bb} failed`, Wy), this.stage = yb, this.source = bb, this.name = "ShellImageError"
      }
    }
    async function fy(yb) {
      let bb, Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uy.B,
        fy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      if ("string" === typeof yb) try {
        bb = await Wy(yb)
      } catch (Zy) {
        throw new hy("fetch", yb, {
          cause: Zy
        })
      } else bb = yb;
      try {
        const yb = new Blob([bb.slice()], {
          type: "image/png"
        });
        return await createImageBitmap(yb, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none",
          imageOrientation: fy
        })
      } catch (Zy) {
        throw new hy("decode", "string" === typeof yb ? yb : `${bb.byteLength} bytes`, {
          cause: Zy
        })
      }
    }
    let Zy = null;
    const cb = new Map;
    let Py = 1;

    function oy(yb) {
      if (Zy = yb, null !== yb) {
        for (const [bb, Wy] of cb) yb.Loy(bb, Wy);
        cb.clear()
      }
    }

    function By(yb) {
      const bb = Py++;
      return Zy ? Zy.Loy(bb, yb) : cb.set(bb, yb), bb
    }
    async function Ky(yb, bb, Wy) {
      const Uy = await fy(yb, bb, Wy);
      return {
        id: By(Uy),
        width: Uy.width,
        height: Uy.height
      }
    }

    function ey(yb) {
      var bb;
      const Wy = cb.get(yb);
      if (Wy) return Wy.close(), void cb.delete(yb);
      null === (bb = Zy) || void 0 === bb || bb.Qoy(yb)
    }
  },
  39418: (yb, bb, Wy) => {
    function Uy(yb, bb) {
      if (!Object.prototype.hasOwnProperty.call(yb, bb)) throw new TypeError("attempted to use private field on non-instance");
      return yb
    }
    Wy.d(bb, {
      c: () => Uy
    })
  },
  39426: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy
    });
    var Uy = 0;

    function hy(yb) {
      return "__private_" + Uy++ + "_" + yb
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);