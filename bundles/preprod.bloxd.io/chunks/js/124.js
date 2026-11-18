export const id = 124;
export const ids = [124, 191];
export const modules = {
  35103: (yb, bb, Wy) => {
    Wy.d(bb, {
      reportCappedWasmFailure: () => Zy,
      reportWasmFailure: () => fy
    });
    var Uy = Wy(2539);
    const hy = Uy.b - 4;

    function fy(yb, bb, Wy) {
      (0, Uy.c)(yb, bb, Wy, !1)
    }

    function Zy(yb, bb, Wy) {
      (0, Uy.c)(yb, bb, Wy, !1, hy)
    }
  },
  35095: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => sy,
      g: () => ly,
      k: () => mb,
      n: () => Sy
    });
    var Uy = Wy(35107),
      hy = Wy(2995),
      fy = Wy(35128),
      Zy = Wy(3004),
      cb = Wy(35103),
      Py = Wy(2308),
      oy = Wy(2559),
      By = Wy(2534),
      Ky = Wy(2878);
    const ey = "bloxdWasmFailureReported";

    function qb() {
      return "undefined" === typeof WebAssembly
    }

    function sy() {
      return (0, Uy.e)()
    }

    function Sy() {
      if (qb()) return "this browser has no WebAssembly";
      const yb = (0, hy.s)();
      return "compile" === yb || "instantiate" === yb ? `the core wasm didn't load here (${(0,hy.k)()})` : null
    }
    async function Ey(yb) {
      return await (0, fy.h)(fy.d, void 0, yb)
    }

    function ly() {
      qb() || (0, Ky.e)((() => {
        Ey()
      }))
    }

    function mb() {
      if (qb()) return async () => ((0, Py.h)("unsupported", 0), Cy("unsupported", "This browser has no WebAssembly"), !1);
      const yb = {
        reloadFailedDownload: !0
      };
      return Ey(yb), async () => {
        var bb;
        const Wy = performance.now();
        await Ey(yb);
        const Uy = (performance.now() - Wy) / 1e3;
        if ((0, hy.P)()) return (0, Py.h)("ready", Uy), (0, Zy.H)(fy.d.url()) && (0, cb.reportCappedWasmFailure)("wasm_load", oy.d.message, oy.d.code), !0;
        const Ky = By.c[null !== (bb = (0, hy.s)()) && void 0 !== bb ? bb : "call"];
        return (0, Py.h)(Ky, Uy), Cy(Ky, (0, hy.k)()), !1
      }
    }

    function Cy(yb, bb) {
      (0, By.g)(ey, `Bloxd wasm ${yb}, so the game can't start: ${bb}`, bb, yb)
    }
  },
  35141: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bloxd_wasm_bg.69c8a3e3126810afa471.wasm"
  },
  35122: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bloxd_wasm_textures_bg.939c2eca8dbd9ed487f1.wasm"
  },
  35132: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => ey,
      h: () => By
    });
    var Uy = Wy(2995),
      hy = Wy(3004),
      fy = Wy(3006),
      Zy = Wy(5876),
      cb = Wy(5885);
    let Py = null,
      oy = !1;

    function By(yb, bb, Wy) {
      return null === Py ? Py = Ky(yb, bb) : yb !== Py.build ? console.warn(`Bloxd wasm: ${yb.name} was asked for after ${Py.build.name} started loading, which this thread keeps`) : bb.name !== Py.workers.name && console.warn(`Bloxd wasm: ${bb.name} was asked for workers after ${Py.workers.name}, which this thread keeps`), Wy?.reloadFailedDownload && !oy && (0, Uy.Z)() && (oy = !0, Py = Ky(Py.build, Py.workers)), Py.loaded
    }

    function Ky(yb, bb) {
      const Wy = (0, Uy.G)((async () => {
        (0, cb.D)();
        const Wy = qb(yb),
          Uy = bb.name === yb.name ? Wy : qb(bb);
        await (0, fy.f)([Wy, Uy]);
        const hy = await Wy,
          Zy = await Uy;
        return (0, cb.D)(), {
          module: hy,
          workerModule: Zy
        }
      }), yb);
      return {
        build: yb,
        workers: bb,
        loaded: Wy
      }
    }
    async function ey(yb) {
      return qb(yb)
    }

    function qb(yb) {
      return (0, hy.z)(yb.url(), (0, Zy.c)(yb.name))
    }
  },
  35128: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => vW,
      h: () => iW,
      i: () => Mb
    });
    var Uy = {};
    Wy.r(Uy), Wy.d(Uy, {
      bb: () => hy,
      EnvelopeKind: () => fy,
      Wy: () => Zy,
      PhysicsEngine: () => cb,
      Uy: () => Py,
      hy: () => oy,
      Zy: () => By,
      cb: () => Ky,
      Py: () => ey,
      Ky: () => qb,
      ey: () => sy,
      qb: () => Sy,
      sy: () => Ey,
      Sy: () => ly,
      default: () => Gb,
      initSync: () => gW,
      Ey: () => mb,
      ly: () => Cy,
      Cy: () => Ty,
      Ty: () => Vy,
      Vy: () => Jy,
      Jy: () => gb,
      gb: () => Gy,
      Gy: () => Oy,
      Oy: () => Ry,
      Ry: () => vb,
      ib: () => ib,
      My: () => My,
      Yy: () => Yy,
      Xy: () => Xy,
      ny: () => ny
    });
    class hy {
      __destroy_into_raw() {
        const yb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, rb.unregister(this), yb
      }
      free() {
        const yb = this.__destroy_into_raw();
        Tb.dFM7(yb, 0)
      }
      rb() {
        const yb = Tb.LxtD(this.__wbg_ptr);
        if (yb[2]) throw qW(yb[1]);
        return yb[0] >>> 0
      }
      Hy() {
        return Tb.xwL2(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const yb = Tb.TpMl();
        return this.__wbg_ptr = yb, rb.register(this, this.__wbg_ptr, this), this
      }
      ab() {
        return Tb.HH8R(this.__wbg_ptr) >>> 0
      }
      Fy(yb) {
        const bb = Tb.rZDc(this.__wbg_ptr, yb);
        if (bb[2]) throw qW(bb[1]);
        return bb[0] >>> 0
      }
      py(yb) {
        const bb = Tb.wqPm(this.__wbg_ptr, yb);
        if (bb[2]) throw qW(bb[1]);
        return bb[0] >>> 0
      }
    }
    Symbol.dispose && (hy.prototype[Symbol.dispose] = hy.prototype.free);
    const fy = Object.freeze({
      Js: 0,
      0: "Js",
      Error: 1,
      1: "Error",
      LeaveRoom: 2,
      2: "LeaveRoom",
      RoomState: 3,
      3: "RoomState",
      RoomStatePatch: 4,
      4: "RoomStatePatch",
      RoomDataNone: 5,
      5: "RoomDataNone",
      RoomDataBin: 6,
      6: "RoomDataBin",
      RoomDataBytes: 7,
      7: "RoomDataBytes",
      Ignored: 8,
      8: "Ignored",
      StringType: 16,
      16: "StringType"
    });
    class Zy {
      __destroy_into_raw() {
        const yb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Hy.unregister(this), yb
      }
      free() {
        const yb = this.__destroy_into_raw();
        Tb.JaFk(yb, 0)
      }
      jb(yb, bb) {
        const Wy = Tb.b0ty(this.__wbg_ptr, yb, bb);
        if (Wy[2]) throw qW(Wy[1]);
        return Wy[0] >>> 0
      }
      Dy(yb) {
        const bb = Tb.cgLK(this.__wbg_ptr, yb);
        if (bb[2]) throw qW(bb[1]);
        return bb[0] >>> 0
      }
      tb() {
        Tb.JqiW(this.__wbg_ptr)
      }
      static wy() {
        return Tb.OqXK() >>> 0
      }
      kb() {
        return Tb.pFai(this.__wbg_ptr) >>> 0
      }
      Ny() {
        const yb = Tb.rmEG(this.__wbg_ptr);
        return 0 === yb[0] ? void 0 : yb[1]
      }
      zb() {
        return Tb.JXdc(this.__wbg_ptr) >>> 0
      }
      Iy() {
        return Tb.OfXB(this.__wbg_ptr) >>> 0
      }
      static Qy() {
        return Tb.hDPD() >>> 0
      }
      constructor() {
        const yb = Tb.rnfW();
        return this.__wbg_ptr = yb, Hy.register(this, this.__wbg_ptr, this), this
      }
      xb() {
        return Tb.e6o0(this.__wbg_ptr) >>> 0
      }
      Ay() {
        return Tb.CoWN(this.__wbg_ptr) >>> 0
      }
      yW() {
        return Tb.G1Vv(this.__wbg_ptr) >>> 0
      }
      Ly(yb) {
        return Tb.CAv4(this.__wbg_ptr, yb) >>> 0
      }
      reserve(yb, bb) {
        const Wy = Tb.a4wm(this.__wbg_ptr, yb, bb);
        if (Wy[1]) throw qW(Wy[0])
      }
      Ub(yb, bb) {
        const Wy = ob(yb, Tb.mDbt),
          Uy = Vb;
        Tb.xvud(this.__wbg_ptr, Wy, Uy, bb)
      }
      text() {
        let yb, bb;
        try {
          const Wy = Tb.c02k(this.__wbg_ptr);
          return yb = Wy[0], bb = Wy[1], Ay(Wy[0], Wy[1])
        } finally {
          Tb.SOdA(yb, bb, 1)
        }
      }
    }
    Symbol.dispose && (Zy.prototype[Symbol.dispose] = Zy.prototype.free);
    class cb {
      __destroy_into_raw() {
        const yb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ab.unregister(this), yb
      }
      free() {
        const yb = this.__destroy_into_raw();
        Tb.WB8T(yb, 0)
      }
      fb(yb, bb) {
        tb(bb, hy);
        const Wy = Tb.BhBV(this.__wbg_ptr, yb, bb.__wbg_ptr);
        if (Wy[2]) throw qW(Wy[1]);
        return Wy[0] >>> 0
      }
      cW() {
        const yb = Tb.xRN7(this.__wbg_ptr);
        if (yb[1]) throw qW(yb[0])
      }
      eb(yb, bb, Wy, Uy, hy, fy, Zy, cb, oy, By, Ky) {
        tb(yb, Py);
        const ey = Tb.K2Q6(this.__wbg_ptr, yb.__wbg_ptr, bb, Wy, Uy, hy, fy, Zy, cb, oy, By, Ky);
        if (ey[2]) throw qW(ey[1]);
        return ey[0]
      }
      qW() {
        const yb = Tb.xwsu(this.__wbg_ptr);
        var bb = wy(yb[0], yb[1]).slice();
        return Tb.SOdA(yb[0], 8 * yb[1], 8), bb
      }
      sb() {
        return Tb.QkRF(this.__wbg_ptr) >>> 0
      }
      Sb() {
        return Tb.oPug(this.__wbg_ptr) >>> 0
      }
      Eb() {
        return Tb.IHED(this.__wbg_ptr) >>> 0
      }
      constructor(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
        const Py = Tb.MRvJ(yb, bb, Wy, Uy, hy, fy, Zy, cb);
        if (Py[2]) throw qW(Py[1]);
        return this.__wbg_ptr = Py[0], ab.register(this, this.__wbg_ptr, this), this
      }
      Cb(yb) {
        tb(yb, hy);
        const bb = Tb.M8a2(this.__wbg_ptr, yb.__wbg_ptr);
        if (bb[2]) throw qW(bb[1]);
        return bb[0] >>> 0
      }
      Tb(yb) {
        const bb = Tb.dAZM(this.__wbg_ptr, yb);
        if (bb[1]) throw qW(bb[0])
      }
      Vb() {
        return Tb.dqyv(this.__wbg_ptr) >>> 0
      }
      resume(yb, bb) {
        tb(yb, Py), tb(bb, hy);
        const Wy = Tb.cgQX(this.__wbg_ptr, yb.__wbg_ptr, bb.__wbg_ptr);
        if (Wy[2]) throw qW(Wy[1]);
        return Wy[0] >>> 0
      }
      Rb(yb) {
        const bb = Tb.SSbO(this.__wbg_ptr, yb);
        if (bb[1]) throw qW(bb[0])
      }
      Mb(yb, bb) {
        tb(bb, hy);
        const Wy = Tb.KWck(this.__wbg_ptr, yb, bb.__wbg_ptr);
        if (Wy[1]) throw qW(Wy[0])
      }
      nb(yb) {
        const bb = Kb(yb, Tb.mDbt),
          Wy = Vb,
          Uy = Tb.klOV(this.__wbg_ptr, bb, Wy);
        if (Uy[1]) throw qW(Uy[0])
      }
      ob(yb, bb, Wy, Uy, hy, fy) {
        const Zy = Tb.kGjk(this.__wbg_ptr, yb, bb, Wy, Uy, hy, fy);
        if (Zy[1]) throw qW(Zy[0])
      }
      Bb(yb, bb, Wy, Uy) {
        const hy = ob(yb, Tb.mDbt),
          fy = Vb,
          Zy = Kb(bb, Tb.mDbt),
          cb = Vb,
          Py = Kb(Wy, Tb.mDbt),
          oy = Vb,
          By = Kb(Uy, Tb.mDbt),
          Ky = Vb,
          ey = Tb.AUuB(this.__wbg_ptr, hy, fy, Zy, cb, Py, oy, By, Ky);
        if (ey[1]) throw qW(ey[0])
      }
      rW(yb, bb) {
        tb(bb, hy);
        const Wy = Tb.QhQ3(this.__wbg_ptr, yb, bb.__wbg_ptr);
        if (Wy[1]) throw qW(Wy[0])
      }
      mW(yb, bb, Wy) {
        const Uy = Tb.gzMt(this.__wbg_ptr, yb, bb, Wy);
        if (Uy[1]) throw qW(Uy[0])
      }
      aW(yb, bb, Wy, Uy, hy, fy, Zy, cb, oy, By) {
        tb(yb, Py);
        return Tb.I8cV(this.__wbg_ptr, yb.__wbg_ptr, bb, Wy, Uy, hy, fy, Zy, cb, oy, By)
      }
    }
    Symbol.dispose && (cb.prototype[Symbol.dispose] = cb.prototype.free);
    class Py {
      static __wrap(yb) {
        const bb = Object.create(Py.prototype);
        return bb.__wbg_ptr = yb, Fy.register(bb, bb.__wbg_ptr, bb), bb
      }
      __destroy_into_raw() {
        const yb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Fy.unregister(this), yb
      }
      free() {
        const yb = this.__destroy_into_raw();
        Tb.Zboa(yb, 0)
      }
      Lb(yb) {
        const bb = Tb.cCmG(this.__wbg_ptr, yb);
        if (bb[2]) throw qW(bb[1]);
        return bb[0] >>> 0
      }
      Qb(yb, bb, Wy) {
        return Tb.cEo6(this.__wbg_ptr, yb, bb, Wy)
      }
      jW(yb, bb, Wy) {
        return Tb.VhAz(this.__wbg_ptr, yb, bb, Wy) >>> 0
      }
      Db(yb, bb, Wy, Uy) {
        return 0 !== Tb.v2I4(this.__wbg_ptr, yb, bb, Wy, Uy)
      }
      tW() {
        Tb.Q3uc(this.__wbg_ptr)
      }
      zW(yb) {
        const bb = Tb.rabm(this.__wbg_ptr, yb);
        if (bb[3]) throw qW(bb[2]);
        var Wy = Ny(bb[0], bb[1]).slice();
        return Tb.SOdA(bb[0], 1 * bb[1], 1), Wy
      }
      evict(yb, bb) {
        return Tb.XV6q(this.__wbg_ptr, yb, bb) >>> 0
      }
      Ib() {
        Tb.sPqU(this.__wbg_ptr)
      }
      xW(yb, bb, Wy) {
        Tb.qzma(this.__wbg_ptr, yb, bb, Wy)
      }
      Ab(yb) {
        const bb = Tb.leeo(this.__wbg_ptr, yb);
        if (bb[1]) throw qW(bb[0])
      }
      yU() {
        return Tb.RIiD(this.__wbg_ptr) >>> 0
      }
      bU() {
        return Tb.NqEe(this.__wbg_ptr) >>> 0
      }
      WW(yb, bb, Wy) {
        Tb.iPP4(this.__wbg_ptr, yb, bb, Wy)
      }
      UW(yb, bb, Wy) {
        Tb.ppuK(this.__wbg_ptr, yb, bb, Wy)
      }
      hW() {
        return Tb.NyEA(this.__wbg_ptr) >>> 0
      }
      fW() {
        return Tb.Cnz7(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const yb = Tb.koLS();
        return this.__wbg_ptr = yb, Fy.register(this, this.__wbg_ptr, this), this
      }
      static ZW() {
        const yb = Tb.WITS();
        return Py.__wrap(yb)
      }
      cU() {
        return Tb.Cyij(this.__wbg_ptr) >>> 0
      }
      PW() {
        return Tb.rTWM(this.__wbg_ptr) >>> 0
      }
      oW(yb, bb, Wy, Uy) {
        const hy = Tb.lkTX(this.__wbg_ptr, yb, bb, Wy, Uy);
        if (hy[1]) throw qW(hy[0])
      }
      BW() {
        return Tb.GFCe(this.__wbg_ptr) >>> 0
      }
      KW() {
        return Tb.cqE0(this.__wbg_ptr) >>> 0
      }
      eW(yb, bb, Wy, Uy) {
        Tb.qaI4(this.__wbg_ptr, yb, bb, Wy, Uy)
      }
      qU(yb) {
        Tb.txCD(this.__wbg_ptr, yb)
      }
      SW(yb, bb, Wy, Uy, hy) {
        const fy = Bb(bb, Tb.mDbt),
          Zy = Vb,
          cb = ob(Wy, Tb.mDbt),
          Py = Vb,
          oy = Kb(Uy, Tb.mDbt),
          By = Vb,
          Ky = Tb.i79X(this.__wbg_ptr, yb, fy, Zy, cb, Py, oy, By, hy);
        if (Ky[1]) throw qW(Ky[0])
      }
      sW(yb, bb, Wy, Uy) {
        const hy = Bb(yb, Tb.mDbt),
          fy = Vb,
          Zy = ob(bb, Tb.mDbt),
          cb = Vb,
          Py = Kb(Wy, Tb.mDbt),
          oy = Vb,
          By = Bb(Uy, Tb.mDbt),
          Ky = Vb,
          ey = Tb.DAYv(this.__wbg_ptr, hy, fy, Zy, cb, Py, oy, By, Ky);
        if (ey[1]) throw qW(ey[0])
      }
      JW(yb) {
        const bb = Bb(yb, Tb.mDbt),
          Wy = Vb,
          Uy = Tb.Gx95(this.__wbg_ptr, bb, Wy);
        if (Uy[1]) throw qW(Uy[0])
      }
      gU() {
        return Tb.XLLL(this.__wbg_ptr) >>> 0
      }
      GW(yb) {
        const bb = Tb.ZJVG(this.__wbg_ptr, yb);
        if (bb[2]) throw qW(bb[1]);
        return bb[0] >>> 0
      }
      steer() {
        return Tb.RfWX(this.__wbg_ptr) >>> 0
      }
      OW() {
        const yb = Tb.lxAm(this.__wbg_ptr);
        var bb = wy(yb[0], yb[1]).slice();
        return Tb.SOdA(yb[0], 8 * yb[1], 8), bb
      }
      RW() {
        return Tb.outT(this.__wbg_ptr) >>> 0
      }
      gW() {
        const yb = Tb.k2tx(this.__wbg_ptr);
        var bb, Wy, Uy = (bb = yb[0], Wy = yb[1], bb >>>= 0, (null !== xb && 0 !== xb.byteLength || (xb = new Int32Array(Tb.memory.buffer)), xb).subarray(bb / 4, bb / 4 + Wy)).slice();
        return Tb.SOdA(yb[0], 4 * yb[1], 4), Uy
      }
    }
    Symbol.dispose && (Py.prototype[Symbol.dispose] = Py.prototype.free);
    class oy {
      __destroy_into_raw() {
        const yb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, py.unregister(this), yb
      }
      free() {
        const yb = this.__destroy_into_raw();
        Tb.pL0e(yb, 0)
      }
      vU(yb) {
        const bb = ob(yb, Tb.mDbt),
          Wy = Vb,
          Uy = Tb.jD9c(this.__wbg_ptr, bb, Wy);
        if (Uy[1]) throw qW(Uy[0])
      }
      iU() {
        return Tb.xJQ8(this.__wbg_ptr) >>> 0
      }
      MW() {
        return Tb.WJyI(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const yb = Tb.op5f();
        return this.__wbg_ptr = yb, py.register(this, this.__wbg_ptr, this), this
      }
      run(yb, bb) {
        tb(yb, Py);
        const Wy = Tb.CASP(this.__wbg_ptr, yb.__wbg_ptr, bb);
        if (Wy[2]) throw qW(Wy[1]);
        return Wy[0] >>> 0
      }
      YW(yb) {
        const bb = ob(yb, Tb.mDbt),
          Wy = Vb;
        Tb.YnzI(this.__wbg_ptr, bb, Wy)
      }
      XW(yb) {
        const bb = ob(yb, Tb.mDbt),
          Wy = Vb;
        Tb.CDNi(this.__wbg_ptr, bb, Wy)
      }
    }
    Symbol.dispose && (oy.prototype[Symbol.dispose] = oy.prototype.free);
    class By {
      __destroy_into_raw() {
        const yb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Ly.unregister(this), yb
      }
      free() {
        const yb = this.__destroy_into_raw();
        Tb.e89H(yb, 0)
      }
      uW(yb, bb) {
        const Wy = Bb(yb, Tb.mDbt),
          Uy = Vb;
        return Tb.NTPD(this.__wbg_ptr, Wy, Uy, bb) >>> 0
      }
      rU(yb, bb, Wy) {
        tb(yb, Py);
        const Uy = Bb(Wy, Tb.mDbt),
          hy = Vb,
          fy = Tb.aogU(this.__wbg_ptr, yb.__wbg_ptr, bb, Uy, hy);
        if (fy[2]) throw qW(fy[1]);
        return fy[0] >>> 0
      }
      nW(yb) {
        return Tb.bjKi(this.__wbg_ptr, yb) >>> 0
      }
      constructor() {
        const yb = Tb.wbjy();
        return this.__wbg_ptr = yb, Ly.register(this, this.__wbg_ptr, this), this
      }
      scan(yb, bb) {
        tb(yb, Py);
        const Wy = Tb.cVGQ(this.__wbg_ptr, yb.__wbg_ptr, bb);
        if (Wy[2]) throw qW(Wy[1]);
        return Wy[0] >>> 0
      }
      FW(yb) {
        const bb = Bb(yb, Tb.mDbt),
          Wy = Vb;
        Tb.FUrV(this.__wbg_ptr, bb, Wy)
      }
      aU() {
        return Tb.D341(this.__wbg_ptr) >>> 0
      }
      HW() {
        return Tb.UZ5D(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (By.prototype[Symbol.dispose] = By.prototype.free);
    class Ky {
      __destroy_into_raw() {
        const yb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Qy.unregister(this), yb
      }
      free() {
        const yb = this.__destroy_into_raw();
        Tb.Azuk(yb, 0)
      }
      LW(yb) {
        const bb = Tb.YW1b(this.__wbg_ptr, yb);
        if (bb[2]) throw qW(bb[1]);
        return bb[0] >>> 0
      }
      compute(yb, bb, Wy, Uy) {
        var hy = cW(Uy) ? 0 : eb(Uy, Tb.mDbt, Tb.RbPP),
          fy = Vb;
        const Zy = Tb.HgBr(this.__wbg_ptr, yb, cW(bb) ? Number.MAX_SAFE_INTEGER : bb | 0, Wy, hy, fy);
        if (Zy[2]) throw qW(Zy[1]);
        return Zy[0] >>> 0
      }
      jU(yb) {
        const bb = eb(yb, Tb.mDbt, Tb.RbPP),
          Wy = Vb;
        Tb.CsUx(this.__wbg_ptr, bb, Wy)
      }
      tU() {
        return Tb.qI44(this.__wbg_ptr)
      }
      wW(yb) {
        return Tb.uXE1(this.__wbg_ptr, yb) >>> 0
      }
      kU() {
        return Tb.dtTE(this.__wbg_ptr) >>> 0
      }
      NW() {
        return Tb.gfyX(this.__wbg_ptr) >>> 0
      }
      zU(yb, bb) {
        const Wy = Tb.nnWK(this.__wbg_ptr, yb, bb);
        if (Wy[1]) throw qW(Wy[0])
      }
      xU() {
        return Tb.n56b(this.__wbg_ptr) >>> 0
      }
      AW() {
        return Tb.aOXI(this.__wbg_ptr) >>> 0
      }
      dW() {
        return Tb.wIxP(this.__wbg_ptr) >>> 0
      }
      QW(yb, bb, Wy) {
        const Uy = ob(yb, Tb.mDbt),
          hy = Vb,
          fy = ob(bb, Tb.mDbt),
          Zy = Vb,
          cb = Tb.V77L(this.__wbg_ptr, Uy, hy, fy, Zy, Wy);
        if (cb[1]) throw qW(cb[0])
      }
      bh() {
        return Tb.BFYL(this.__wbg_ptr) >>> 0
      }
      mesh(yb, bb, Wy, Uy, hy) {
        const fy = Tb.B5Kr(this.__wbg_ptr, yb, bb, Wy, Uy, hy);
        if (fy[2]) throw qW(fy[1]);
        return fy[0] >>> 0
      }
      constructor(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By, Ky, ey, qb, sy, Sy, Ey, ly, mb, Cy) {
        const Ty = Pb(yb, Tb.mDbt),
          Vy = Vb,
          Jy = Kb(bb, Tb.mDbt),
          gb = Vb,
          Gy = ob(Wy, Tb.mDbt),
          Oy = Vb,
          Ry = Bb(Uy, Tb.mDbt),
          vb = Vb,
          ib = Bb(hy, Tb.mDbt),
          My = Vb,
          Yy = ob(fy, Tb.mDbt),
          Xy = Vb,
          ny = ob(Zy, Tb.mDbt),
          uy = Vb,
          rb = Kb(cb, Tb.mDbt),
          Hy = Vb,
          ab = Kb(Py, Tb.mDbt),
          Fy = Vb,
          py = Bb(oy, Tb.mDbt),
          Ly = Vb;
        var jb = cW(By) ? 0 : Pb(By, Tb.mDbt),
          Dy = Vb;
        const tb = ob(Ky, Tb.mDbt),
          wy = Vb,
          kb = Bb(ey, Tb.mDbt),
          Ny = Vb;
        var zb = cW(qb) ? 0 : Bb(qb, Tb.mDbt),
          Iy = Vb;
        const xb = Kb(sy, Tb.mDbt),
          Ay = Vb,
          dy = Tb.In3H(Ty, Vy, Jy, gb, Gy, Oy, Ry, vb, ib, My, Yy, Xy, ny, uy, rb, Hy, ab, Fy, py, Ly, jb, Dy, tb, wy, kb, Ny, zb, Iy, xb, Ay, Sy, Ey, ly, mb, Cy);
        if (dy[2]) throw qW(dy[1]);
        return this.__wbg_ptr = dy[0], Qy.register(this, this.__wbg_ptr, this), this
      }
      yh(yb, bb) {
        const Wy = ob(yb, Tb.mDbt),
          Uy = Vb,
          hy = Tb.mLzd(this.__wbg_ptr, Wy, Uy, bb);
        if (hy[3]) throw qW(hy[2]);
        var fy = Ny(hy[0], hy[1]).slice();
        return Tb.SOdA(hy[0], 1 * hy[1], 1), fy
      }
      WU(yb) {
        Tb.mxkt(this.__wbg_ptr, cW(yb) ? 16777215 : yb)
      }
      UU(yb) {
        return Tb.td1W(this.__wbg_ptr, yb) >>> 0
      }
      fU() {
        return Tb.m0f0(this.__wbg_ptr) >>> 0
      }
      hU() {
        const yb = Tb.gqdY(this.__wbg_ptr);
        if (yb[2]) throw qW(yb[1]);
        return 0 !== yb[0]
      }
      ZU() {
        return Tb.Wy9e(this.__wbg_ptr) >>> 0
      }
      PU() {
        return Tb.Rsag(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Ky.prototype[Symbol.dispose] = Ky.prototype.free);
    class ey {
      __destroy_into_raw() {
        const yb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, jb.unregister(this), yb
      }
      free() {
        const yb = this.__destroy_into_raw();
        Tb.Dqs1(yb, 0)
      }
      compute(yb, bb, Wy, Uy) {
        var hy = cW(Uy) ? 0 : eb(Uy, Tb.mDbt, Tb.RbPP),
          fy = Vb;
        const Zy = Tb.QHMi(this.__wbg_ptr, yb, cW(bb) ? Number.MAX_SAFE_INTEGER : bb | 0, Wy, hy, fy);
        if (Zy[2]) throw qW(Zy[1]);
        return Zy[0] >>> 0
      }
      jU(yb) {
        const bb = eb(yb, Tb.mDbt, Tb.RbPP),
          Wy = Vb;
        Tb.KNs7(this.__wbg_ptr, bb, Wy)
      }
      AW() {
        return Tb.vEN3(this.__wbg_ptr) >>> 0
      }
      dW() {
        return Tb.bcvW(this.__wbg_ptr) >>> 0
      }
      oU(yb) {
        const bb = Tb.H9Fb(this.__wbg_ptr, yb);
        if (bb[2]) throw qW(bb[1]);
        return bb[0] >>> 0
      }
      constructor(yb, bb, Wy, Uy, hy, fy) {
        const Zy = Pb(yb, Tb.mDbt),
          cb = Vb,
          Py = Kb(bb, Tb.mDbt),
          oy = Vb,
          By = ob(Wy, Tb.mDbt),
          Ky = Vb,
          ey = Bb(Uy, Tb.mDbt),
          qb = Vb,
          sy = Tb.AVOQ(Zy, cb, Py, oy, By, Ky, ey, qb, hy, fy);
        if (sy[2]) throw qW(sy[1]);
        return this.__wbg_ptr = sy[0], jb.register(this, this.__wbg_ptr, this), this
      }
      fU() {
        return Tb.OBZI(this.__wbg_ptr) >>> 0
      }
      hU() {
        const yb = Tb.nMAi(this.__wbg_ptr);
        if (yb[2]) throw qW(yb[1]);
        return 0 !== yb[0]
      }
      ZU() {
        return Tb.x47D(this.__wbg_ptr) >>> 0
      }
    }

    function qb() {
      const yb = Tb.peDp();
      var bb = kb(yb[0], yb[1]).slice();
      return Tb.SOdA(yb[0], 4 * yb[1], 4), bb
    }

    function sy(yb, bb) {
      let Wy, Uy;
      try {
        const hy = Pb(yb, Tb.mDbt),
          fy = Vb,
          Zy = eb(bb, Tb.mDbt, Tb.RbPP),
          cb = Vb,
          Py = Tb.Qsly(hy, fy, Zy, cb);
        return Wy = Py[0], Uy = Py[1], Ay(Py[0], Py[1])
      } finally {
        Tb.SOdA(Wy, Uy, 1)
      }
    }

    function Sy() {
      const yb = Tb.HHSF();
      var bb = kb(yb[0], yb[1]).slice();
      return Tb.SOdA(yb[0], 4 * yb[1], 4), bb
    }

    function Ey(yb) {
      return 0 !== Tb.Y4ZZ(yb)
    }

    function ly(yb, bb) {
      const Wy = eb(yb, Tb.mDbt, Tb.RbPP),
        Uy = Vb,
        hy = Tb.WS58(Wy, Uy, bb);
      if (hy[1]) throw qW(hy[0])
    }

    function mb() {
      Tb.OqJH()
    }

    function Cy() {
      return Tb.cIp5() >>> 0
    }

    function Ty(yb) {
      return 0 !== Tb.NfC9(yb)
    }

    function Vy(yb) {
      return 0 !== Tb.qYbu(yb)
    }

    function Jy(yb) {
      Tb.Ylr0(yb)
    }

    function gb() {
      return Tb.qMq2() >>> 0
    }

    function Gy() {
      return Tb.JHpH() >>> 0
    }

    function Oy() {
      return 0 !== Tb.pejQ()
    }

    function Ry() {
      const yb = Tb.OnF9();
      var bb = kb(yb[0], yb[1]).slice();
      return Tb.SOdA(yb[0], 4 * yb[1], 4), bb
    }

    function vb() {
      const yb = Tb.hEOh();
      var bb = kb(yb[0], yb[1]).slice();
      return Tb.SOdA(yb[0], 4 * yb[1], 4), bb
    }

    function ib() {
      const yb = Tb.d1Kn();
      var bb = kb(yb[0], yb[1]).slice();
      return Tb.SOdA(yb[0], 4 * yb[1], 4), bb
    }

    function My() {
      return Tb.xSAx() >>> 0
    }

    function Yy() {
      Tb.RMj8()
    }

    function Xy() {
      let yb, bb;
      try {
        const Wy = Tb.Iz7U();
        return yb = Wy[0], bb = Wy[1], Ay(Wy[0], Wy[1])
      } finally {
        Tb.SOdA(yb, bb, 1)
      }
    }

    function ny(yb) {
      Tb.qR5u(Dy(yb))
    }

    function uy() {
      return {
        __proto__: null,
        FZRc: {
          __proto__: null,
          DPBh: function(yb, bb) {
            return Dy(Error(Ay(yb, bb)))
          },
          VWpX: function(yb, bb) {
            throw new Error(Ay(yb, bb))
          },
          cHqI: function(yb) {
            hb(yb).call()
          },
          zqRR: function(yb, bb) {
            console.error(Ay(yb, bb))
          },
          i56w: function() {
            return performance.now()
          },
          lX9t: function(yb) {
            qW(yb)
          }
        }
      }
    }
    Symbol.dispose && (ey.prototype[Symbol.dispose] = ey.prototype.free);
    const rb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((yb => Tb.dFM7(yb, 1))),
      Hy = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((yb => Tb.JaFk(yb, 1))),
      ab = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((yb => Tb.WB8T(yb, 1))),
      Fy = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((yb => Tb.Zboa(yb, 1))),
      py = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((yb => Tb.pL0e(yb, 1))),
      Ly = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((yb => Tb.e89H(yb, 1))),
      Qy = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((yb => Tb.Azuk(yb, 1))),
      jb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((yb => Tb.Dqs1(yb, 1)));

    function Dy(yb) {
      Zb === fb.length && fb.push(fb.length + 1);
      const bb = Zb;
      return Zb = fb[bb], fb[bb] = yb, bb
    }

    function tb(yb, bb) {
      if (!(yb instanceof bb)) throw new Error(`expected instance of ${bb.name}`)
    }

    function wy(yb, bb) {
      return yb >>>= 0, Iy().subarray(yb / 8, yb / 8 + bb)
    }

    function kb(yb, bb) {
      return yb >>>= 0, bW().subarray(yb / 4, yb / 4 + bb)
    }

    function Ny(yb, bb) {
      return yb >>>= 0, Ub().subarray(yb / 1, yb / 1 + bb)
    }
    let zb = null;

    function Iy() {
      return null !== zb && 0 !== zb.byteLength || (zb = new Float64Array(Tb.memory.buffer)), zb
    }
    let xb = null;

    function Ay(yb, bb) {
      return function(yb, bb) {
        Eb += bb, Eb >= Sb && (sb = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), sb.decode(), Eb = bb);
        return sb.decode(Ub().subarray(yb, yb + bb))
      }(yb >>> 0, bb)
    }
    let dy = null;
    let yW = null;

    function bW() {
      return null !== yW && 0 !== yW.byteLength || (yW = new Uint32Array(Tb.memory.buffer)), yW
    }
    let Wb = null;

    function Ub() {
      return null !== Wb && 0 !== Wb.byteLength || (Wb = new Uint8Array(Tb.memory.buffer)), Wb
    }

    function hb(yb) {
      return fb[yb]
    }
    let fb = new Array(1024).fill(void 0);
    fb.push(void 0, null, !0, !1);
    let Zb = fb.length;

    function cW(yb) {
      return void 0 === yb || null === yb
    }

    function Pb(yb, bb) {
      const Wy = bb(2 * yb.length, 2) >>> 0;
      return (null !== dy && 0 !== dy.byteLength || (dy = new Uint16Array(Tb.memory.buffer)), dy).set(yb, Wy / 2), Vb = yb.length, Wy
    }

    function ob(yb, bb) {
      const Wy = bb(4 * yb.length, 4) >>> 0;
      return bW().set(yb, Wy / 4), Vb = yb.length, Wy
    }

    function Bb(yb, bb) {
      const Wy = bb(1 * yb.length, 1) >>> 0;
      return Ub().set(yb, Wy / 1), Vb = yb.length, Wy
    }

    function Kb(yb, bb) {
      const Wy = bb(8 * yb.length, 8) >>> 0;
      return Iy().set(yb, Wy / 8), Vb = yb.length, Wy
    }

    function eb(yb, bb, Wy) {
      if (void 0 === Wy) {
        const Wy = lb.encode(yb),
          Uy = bb(Wy.length, 1) >>> 0;
        return Ub().subarray(Uy, Uy + Wy.length).set(Wy), Vb = Wy.length, Uy
      }
      let Uy = yb.length,
        hy = bb(Uy, 1) >>> 0;
      const fy = Ub();
      let Zy = 0;
      for (; Zy < Uy; Zy++) {
        const bb = yb.charCodeAt(Zy);
        if (bb > 127) break;
        fy[hy + Zy] = bb
      }
      if (Zy !== Uy) {
        0 !== Zy && (yb = yb.slice(Zy)), hy = Wy(hy, Uy, Uy = Zy + 3 * yb.length, 1) >>> 0;
        const bb = Ub().subarray(hy + Zy, hy + Uy);
        Zy += lb.encodeInto(yb, bb).written, hy = Wy(hy, Uy, Zy, 1) >>> 0
      }
      return Vb = Zy, hy
    }

    function qW(yb) {
      const bb = hb(yb);
      return function(yb) {
        yb < 1028 || (fb[yb] = Zb, Zb = yb)
      }(yb), bb
    }
    let sb = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    sb.decode();
    const Sb = 2146435072;
    let Eb = 0;
    const lb = new TextEncoder;
    "encodeInto" in lb || (lb.encodeInto = function(yb, bb) {
      const Wy = lb.encode(yb);
      return bb.set(Wy), {
        read: yb.length,
        written: Wy.length
      }
    });
    let mW, Cb, Tb, Vb = 0;

    function Jb(yb, bb) {
      return Cb = yb, Tb = yb.exports, mW = bb, zb = null, xb = null, dy = null, yW = null, Wb = null, Tb.gSfe(), Tb
    }

    function gW(yb) {
      if (void 0 !== Tb) return Tb;
      void 0 !== yb && (Object.getPrototypeOf(yb) === Object.prototype ? ({
        module: yb
      } = yb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const bb = uy();
      yb instanceof WebAssembly.Module || (yb = new WebAssembly.Module(yb));
      return Jb(new WebAssembly.Instance(yb, bb), yb)
    }
    async function Gb(yb) {
      if (void 0 !== Tb) return Tb;
      void 0 !== yb && (Object.getPrototypeOf(yb) === Object.prototype ? ({
        module_or_path: yb
      } = yb) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const bb = uy();
      ("string" === typeof yb || "function" === typeof Request && yb instanceof Request || "function" === typeof URL && yb instanceof URL) && (yb = fetch(yb));
      const {
        instance: Wy,
        module: Uy
      } = await async function(yb, bb) {
        if ("function" === typeof Response && yb instanceof Response) {
          if (!yb.ok) throw new Error(`failed to fetch Wasm: ${yb.status} ${yb.statusText} fetching '${yb.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(yb, bb)
          } catch (Wy) {
            if (! function(yb) {
                switch (yb) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(yb.type) || "application/wasm" === yb.headers.get("Content-Type")) throw Wy;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Wy)
          }
          const Uy = await yb.arrayBuffer();
          return await WebAssembly.instantiate(Uy, bb)
        } {
          const Wy = await WebAssembly.instantiate(yb, bb);
          return Wy instanceof WebAssembly.Instance ? {
            instance: Wy,
            module: yb
          } : Wy
        }
      }(await yb, bb);
      return Jb(Wy, Uy)
    }
    var Ob = Wy(2995),
      Rb = Wy(35132);
    const vW = {
      name: Ob.c,
      url: () => new Wy.U(Wy(35141)),
      init: Gb,
      sU: Uy
    };

    function iW() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vW,
        bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vW,
        Wy = arguments.length > 2 ? arguments[2] : void 0;
      return (0, Rb.h)(yb, bb, Wy)
    }

    function Mb(yb) {
      return (0, Ob.K)((() => yb), Uy, vW)
    }
  },
  5876: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy
    });
    var Uy = Wy(3004);
    const hy = {
      bloxd_wasm: () => "e989db87a5f557ada4026e67d4a47376d430f543eee7f32e573c5d2b0032769c",
      bloxd_wasm_client: () => "8d612fbb1f0fe61d983b3bb2556fca3c1e0e6e782fc4ff198ebb3ba8107630a1",
      bloxd_wasm_workers: () => "cbab96479f2e9d4b565163fbfed0a59652418d0ac96c6e003d25c290e07d4914",
      bloxd_wasm_models: () => "cc3b97b02887fd959e6aac8c92ca5a5dfadcad1b80974004972b3a75c05d019a",
      bloxd_wasm_webgpu: () => "f3096279c3044b96be48162245d6e2e7da73e95228a85108b38562687782c907",
      bloxd_wasm_webgl: () => "d1cf22f5f978b51ac1b571ba29da08f1047b0873e044e89ec4676008d8fb7dbe",
      bloxd_wasm_webgl1: () => "4f03aae37dd37be5853f99a485338b001156b35ae47408243bd7f398d9dadad0",
      bloxd_wasm_replay: () => "3a65742f81727412c93734593748664778ee7e0f880fb5b4fe95355c282b47f8",
      bloxd_wasm_recorder: () => "bdd92d3bc5cb3b7a56800dfdad0945608d21aaed71ba700787eff7a8f099dcb8",
      bloxd_wasm_anim: () => "fa451e940fd7a94a9f64df816befb028036aee037b6fddac4025b8a26ccc6baa",
      bloxd_wasm_textures: () => "a73fa025fa307732d8ccf3d5ffb9a75731ee9d6cc37337ca3de332d06d5f932c",
      bloxd_wasm_shader_pack: () => "f3b46e3e760a1ee4ffe1e8533bd7ea8910dfaab4ac6a38d16a2f09b79c3a124d"
    };
    var fy = Wy(5885);

    function Zy(yb) {
      const bb = Object.prototype.hasOwnProperty.call(hy, yb) ? hy[yb]() : void 0;
      if (void 0 !== bb) return {
        sha256: bb,
        onMismatch: fy.z
      };
      throw new Uy.f(`${yb} has no release digest, so this build refuses it`)
    }
  },
  35115: (yb, bb, Wy) => {
    function Uy(yb, bb) {
      return new Error(`${yb}: ${bb instanceof Error?`${bb.name}: ${bb.message}`:String(bb)}`, {
        cause: bb
      })
    }
    Wy.d(bb, {
      b: () => Uy
    })
  },
  35107: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy,
      e: () => Py
    });
    var Uy = Wy(3004),
      hy = Wy(5876),
      fy = Wy(35115);

    function Zy() {
      return new URL(new Wy.U(Wy(35122)).href, globalThis.location?.href).href
    }
    let cb = null;

    function Py() {
      return cb ??= (async () => (0, Uy.z)(new URL(Zy()), (0, hy.c)("bloxd_wasm_textures")))().catch((yb => {
        throw (0, fy.b)((0, Uy.F)(yb), yb)
      })), cb
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);