export const id = 206;
export const ids = [206, 207];
export const modules = {
  35791: (zz, tz, sz) => {
    sz.d(tz, {
      reportCappedWasmFailure: () => Oz,
      reportWasmFailure: () => Xz
    });
    var Fz = sz(2689);
    const Wz = Fz.c - 4;

    function Xz(zz, tz, sz) {
      (0, Fz.f)(zz, tz, sz, !1)
    }

    function Oz(zz, tz, sz) {
      (0, Fz.f)(zz, tz, sz, !1, Wz)
    }
  },
  35784: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Yz,
      i: () => Jz,
      k: () => Iz,
      l: () => xz
    });
    var Fz = sz(35810),
      Wz = sz(3376),
      Xz = sz(35824),
      Oz = sz(3378),
      oz = sz(35791),
      vz = sz(2679),
      Uz = sz(2937),
      Kz = sz(2935),
      uz = sz(35796),
      Nz = sz(2689),
      bz = sz(35800),
      wz = sz(35805),
      Dz = sz(3373);
    let gz = !1;
    const Hz = 40;
    var Bz = sz(668);
    const Pz = "bloxdWasmFailureReported";

    function rz() {
      return "undefined" === typeof WebAssembly
    }

    function Yz() {
      return (0, Fz.i)()
    }

    function xz() {
      if (rz()) return "this browser has no WebAssembly";
      const zz = (0, Wz.u)();
      return "compile" === zz || "instantiate" === zz ? `the core wasm didn't load here (${(0,Wz.j)()})` : null
    }
    async function mz(zz) {
      return await (0, Xz.h)(Xz.d, void 0, zz)
    }

    function Jz() {
      rz() || (0, Bz.d)((() => {
        mz()
      }))
    }

    function Iz() {
      if (rz()) return async () => ((0, vz.h)("unsupported", 0), Cz("unsupported", "This browser has no WebAssembly"), !1);
      const zz = {
        reloadFailedDownload: !0
      };
      return mz(zz), async () => {
        var tz;
        const sz = performance.now();
        await mz(zz);
        const Fz = (performance.now() - sz) / 1e3;
        if ((0, Wz.Y)()) return (0, vz.h)("ready", Fz), gz || (gz = !0, (0, Wz.db)((() => {
          if ("call" !== (0, Wz.u)()) return;
          const zz = (0, Wz.r)(),
            tz = (0, uz.k)(zz, Wz.M, Wz.kb),
            sz = (0, Wz.z)().buffer.byteLength,
            Fz = (0, uz.f)(tz.kind, tz.refusedBytes),
            Xz = Fz ? "alloc_failed" : tz.kind,
            Oz = (0, bz.i)(sz),
            oz = Fz ? `_r${Math.floor(Math.log2(tz.refusedBytes))}` : "",
            vz = (0, Dz.c)();
          null === vz && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const Uz = new Error((0, wz.c)(zz, sz, tz));
          if (zz instanceof Error && void 0 !== zz.stack) {
            const tz = zz.stack.split("\n"),
              sz = tz.length > Hz ? [...tz.slice(0, Hz / 2), ...tz.slice(-Hz / 2)] : tz;
            Uz.stack = sz.join("\n")
          }(0, Nz.f)("wasm_load", Uz, `wasm_call_${Xz}_${null!==vz&&void 0!==vz?vz:"unnamed"}_m${Oz}${oz}`)
        }))), (0, Oz.O)(Xz.d.url()) && (0, oz.reportCappedWasmFailure)("wasm_load", Uz.d.message, Uz.d.code), !0;
        const Bz = Kz.e[null !== (tz = (0, Wz.u)()) && void 0 !== tz ? tz : "call"];
        return (0, vz.h)(Bz, Fz), Cz(Bz, (0, Wz.j)()), !1
      }
    }

    function Cz(zz, tz) {
      (0, Kz.i)(Pz, `Bloxd wasm ${zz}, so the game can't start: ${tz}`, tz, zz)
    }
  },
  35833: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/bloxd_wasm_bg.1376d2e60cbe0105a44a.wasm"
  },
  35822: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/bloxd_wasm_textures_bg.a6c744de1c06be3492c9.wasm"
  },
  35824: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => et,
      h: () => Zt,
      i: () => Gt
    });
    var Fz = {};
    sz.r(Fz), sz.d(Fz, {
      wu: () => Wz,
      EnvelopeKind: () => Xz,
      Du: () => Oz,
      PhysicsEngine: () => oz,
      gu: () => vz,
      Hu: () => Uz,
      Bu: () => Kz,
      Pu: () => uz,
      ru: () => Nz,
      Yu: () => bz,
      xu: () => wz,
      mu: () => Dz,
      Ju: () => gz,
      Iu: () => Hz,
      default: () => Jt,
      initSync: () => mt,
      Cu: () => Bz,
      eu: () => Pz,
      Zu: () => rz,
      Gu: () => Yz,
      Tu: () => xz,
      cu: () => mz,
      ju: () => Jz,
      Au: () => Iz,
      yu: () => Cz,
      Mu: () => ez,
      Qu: () => Zz,
      ku: () => Gz,
      iu: () => Tz,
      Lu: () => cz,
      lu: () => jz
    });
    class Wz {
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, yz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        rt.ZRSp(zz, 0)
      }
      nu() {
        const zz = rt.XKAp(this.__wbg_ptr);
        if (zz[2]) throw bt(zz[1]);
        return zz[0] >>> 0
      }
      au() {
        return rt.mkLa(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const zz = rt.uwlO();
        return this.__wbg_ptr = zz, yz.register(this, this.__wbg_ptr, this), this
      }
      qu() {
        return rt.nSsL(this.__wbg_ptr) >>> 0
      }
      Su(zz) {
        const tz = rt.QQDi(this.__wbg_ptr, zz);
        if (tz[2]) throw bt(tz[1]);
        return tz[0] >>> 0
      }
      Vu(zz) {
        const tz = rt.FslT(this.__wbg_ptr, zz);
        if (tz[2]) throw bt(tz[1]);
        return tz[0] >>> 0
      }
    }
    Symbol.dispose && (Wz.prototype[Symbol.dispose] = Wz.prototype.free);
    const Xz = Object.freeze({
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
    class Oz {
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Mz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        rt.if3H(zz, 0)
      }
      fu(zz, tz) {
        const sz = rt.lIsA(this.__wbg_ptr, zz, tz);
        if (sz[2]) throw bt(sz[1]);
        return sz[0] >>> 0
      }
      Eu(zz) {
        const tz = rt.c7Es(this.__wbg_ptr, zz);
        if (tz[2]) throw bt(tz[1]);
        return tz[0] >>> 0
      }
      zN() {
        rt.vhQe(this.__wbg_ptr)
      }
      static tN() {
        return rt.tEtS() >>> 0
      }
      sN() {
        return rt.ZUGj(this.__wbg_ptr) >>> 0
      }
      FN() {
        const zz = rt.eDUL(this.__wbg_ptr);
        return 0 === zz[0] ? void 0 : zz[1]
      }
      WN() {
        return rt.qLZy(this.__wbg_ptr) >>> 0
      }
      XN() {
        return rt.yi4T(this.__wbg_ptr) >>> 0
      }
      static pu() {
        return rt.xStf() >>> 0
      }
      constructor() {
        const zz = rt.RLcj();
        return this.__wbg_ptr = zz, Mz.register(this, this.__wbg_ptr, this), this
      }
      ON() {
        return rt.cr7c(this.__wbg_ptr) >>> 0
      }
      oN() {
        return rt.LP63(this.__wbg_ptr) >>> 0
      }
      vN() {
        return rt.m1AJ(this.__wbg_ptr) >>> 0
      }
      Ru(zz) {
        return rt.l2Ki(this.__wbg_ptr, zz) >>> 0
      }
      reserve(zz, tz) {
        const sz = rt.frn4(this.__wbg_ptr, zz, tz);
        if (sz[1]) throw bt(sz[0])
      }
      uN(zz, tz) {
        const sz = Ut(zz, rt.Tr0w),
          Fz = Yt;
        rt.h5Gn(this.__wbg_ptr, sz, Fz, tz)
      }
      text() {
        let zz, tz;
        try {
          const sz = rt.G1LL(this.__wbg_ptr);
          return zz = sz[0], tz = sz[1], fz(sz[0], sz[1])
        } finally {
          rt.bNcj(zz, tz, 1)
        }
      }
    }
    Symbol.dispose && (Oz.prototype[Symbol.dispose] = Oz.prototype.free);
    class oz {
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, dz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        rt.yZ2P(zz, 0)
      }
      bN(zz, tz) {
        nz(tz, Wz);
        const sz = rt.EMzJ(this.__wbg_ptr, zz, tz.__wbg_ptr);
        if (sz[2]) throw bt(sz[1]);
        return sz[0] >>> 0
      }
      DN() {
        const zz = rt.VlQe(this.__wbg_ptr);
        if (zz[1]) throw bt(zz[0])
      }
      rN(zz, tz, sz, Fz, Wz, Xz, Oz, oz, Uz, Kz, uz) {
        nz(zz, vz);
        const Nz = rt.N9vQ(this.__wbg_ptr, zz.__wbg_ptr, tz, sz, Fz, Wz, Xz, Oz, oz, Uz, Kz, uz);
        if (Nz[2]) throw bt(Nz[1]);
        return Nz[0]
      }
      YN() {
        const zz = rt.TD8X(this.__wbg_ptr);
        var tz = az(zz[0], zz[1]).slice();
        return rt.bNcj(zz[0], 8 * zz[1], 8), tz
      }
      xN() {
        return rt.dXsX(this.__wbg_ptr) >>> 0
      }
      mN() {
        return rt.oP7S(this.__wbg_ptr) >>> 0
      }
      JN() {
        return rt.GHeJ(this.__wbg_ptr) >>> 0
      }
      constructor(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
        const vz = rt.sBxl(zz, tz, sz, Fz, Wz, Xz, Oz, oz);
        if (vz[2]) throw bt(vz[1]);
        return this.__wbg_ptr = vz[0], dz.register(this, this.__wbg_ptr, this), this
      }
      ZN(zz) {
        nz(zz, Wz);
        const tz = rt.O48P(this.__wbg_ptr, zz.__wbg_ptr);
        if (tz[2]) throw bt(tz[1]);
        return tz[0] >>> 0
      }
      GN(zz) {
        const tz = rt.keQm(this.__wbg_ptr, zz);
        if (tz[1]) throw bt(tz[0])
      }
      TN() {
        return rt.mIeg(this.__wbg_ptr) >>> 0
      }
      resume(zz, tz) {
        nz(zz, vz), nz(tz, Wz);
        const sz = rt.fuM7(this.__wbg_ptr, zz.__wbg_ptr, tz.__wbg_ptr);
        if (sz[2]) throw bt(sz[1]);
        return sz[0] >>> 0
      }
      dN(zz) {
        const tz = rt.jcIb(this.__wbg_ptr, zz);
        if (tz[1]) throw bt(tz[0])
      }
      kN(zz, tz) {
        nz(tz, Wz);
        const sz = rt.uEsm(this.__wbg_ptr, zz, tz.__wbg_ptr);
        if (sz[1]) throw bt(sz[0])
      }
      lN(zz) {
        const tz = ut(zz, rt.Tr0w),
          sz = Yt,
          Fz = rt.e32D(this.__wbg_ptr, tz, sz);
        if (Fz[1]) throw bt(Fz[0])
      }
      HN(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = rt.n9g6(this.__wbg_ptr, zz, tz, sz, Fz, Wz, Xz);
        if (Oz[1]) throw bt(Oz[0])
      }
      BN(zz, tz, sz, Fz) {
        const Wz = Ut(zz, rt.Tr0w),
          Xz = Yt,
          Oz = ut(tz, rt.Tr0w),
          oz = Yt,
          vz = ut(sz, rt.Tr0w),
          Uz = Yt,
          Kz = ut(Fz, rt.Tr0w),
          uz = Yt,
          Nz = rt.qJZW(this.__wbg_ptr, Wz, Xz, Oz, oz, vz, Uz, Kz, uz);
        if (Nz[1]) throw bt(Nz[0])
      }
      aN(zz, tz) {
        nz(tz, Wz);
        const sz = rt.fp4T(this.__wbg_ptr, zz, tz.__wbg_ptr);
        if (sz[1]) throw bt(sz[0])
      }
      eN(zz, tz, sz) {
        const Fz = rt.pZZQ(this.__wbg_ptr, zz, tz, sz);
        if (Fz[1]) throw bt(Fz[0])
      }
      SN(zz, tz, sz, Fz, Wz, Xz, Oz, oz, Uz, Kz) {
        nz(zz, vz);
        return rt.TfvA(this.__wbg_ptr, zz.__wbg_ptr, tz, sz, Fz, Wz, Xz, Oz, oz, Uz, Kz)
      }
    }
    Symbol.dispose && (oz.prototype[Symbol.dispose] = oz.prototype.free);
    class vz {
      static __wrap(zz) {
        const tz = Object.create(vz.prototype);
        return tz.__wbg_ptr = zz, hz.register(tz, tz.__wbg_ptr, tz), tz
      }
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, hz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        rt.ZJub(zz, 0)
      }
      pN(zz) {
        const tz = rt.caoX(this.__wbg_ptr, zz);
        if (tz[2]) throw bt(tz[1]);
        return tz[0] >>> 0
      }
      fN(zz, tz, sz) {
        return rt.bHGb(this.__wbg_ptr, zz, tz, sz)
      }
      EN(zz, tz, sz) {
        return rt.DwiK(this.__wbg_ptr, zz, tz, sz) >>> 0
      }
      zb(zz, tz, sz, Fz) {
        return 0 !== rt.cEuV(this.__wbg_ptr, zz, tz, sz, Fz)
      }
      tb() {
        rt.nFb4(this.__wbg_ptr)
      }
      Fb(zz) {
        const tz = rt.OylM(this.__wbg_ptr, zz);
        if (tz[3]) throw bt(tz[2]);
        var sz = Sz(tz[0], tz[1]).slice();
        return rt.bNcj(tz[0], 1 * tz[1], 1), sz
      }
      evict(zz, tz) {
        return rt.l78m(this.__wbg_ptr, zz, tz) >>> 0
      }
      Wb() {
        rt.tGfK(this.__wbg_ptr)
      }
      Xb(zz, tz, sz) {
        rt.Oki2(this.__wbg_ptr, zz, tz, sz)
      }
      Ob(zz) {
        const tz = rt.fKAJ(this.__wbg_ptr, zz);
        if (tz[1]) throw bt(tz[0])
      }
      ob() {
        return rt.Z4rj(this.__wbg_ptr) >>> 0
      }
      Ub() {
        return rt.QDnf(this.__wbg_ptr) >>> 0
      }
      Kb(zz, tz, sz) {
        rt.IrDv(this.__wbg_ptr, zz, tz, sz)
      }
      ub(zz, tz, sz) {
        rt.WJ3r(this.__wbg_ptr, zz, tz, sz)
      }
      Nb() {
        return rt.KQhM(this.__wbg_ptr) >>> 0
      }
      bb() {
        return rt.SHXj(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const zz = rt.rUI0();
        return this.__wbg_ptr = zz, hz.register(this, this.__wbg_ptr, this), this
      }
      static Db() {
        const zz = rt.gmcq();
        return vz.__wrap(zz)
      }
      gb() {
        return rt.gkHc(this.__wbg_ptr) >>> 0
      }
      Hb() {
        return rt.HYX5(this.__wbg_ptr) >>> 0
      }
      Bb(zz, tz, sz, Fz) {
        const Wz = rt.nWlu(this.__wbg_ptr, zz, tz, sz, Fz);
        if (Wz[1]) throw bt(Wz[0])
      }
      Pb() {
        return rt.k8yD(this.__wbg_ptr) >>> 0
      }
      Yb() {
        return rt.SAhX(this.__wbg_ptr) >>> 0
      }
      xb(zz, tz, sz, Fz) {
        rt.mC3L(this.__wbg_ptr, zz, tz, sz, Fz)
      }
      Jb(zz) {
        rt.amJJ(this.__wbg_ptr, zz)
      }
      Cb(zz, tz, sz, Fz, Wz) {
        const Xz = Kt(tz, rt.Tr0w),
          Oz = Yt,
          oz = Ut(sz, rt.Tr0w),
          vz = Yt,
          Uz = ut(Fz, rt.Tr0w),
          Kz = Yt,
          uz = rt.Vo1W(this.__wbg_ptr, zz, Xz, Oz, oz, vz, Uz, Kz, Wz);
        if (uz[1]) throw bt(uz[0])
      }
      Ib(zz, tz, sz, Fz) {
        const Wz = Kt(zz, rt.Tr0w),
          Xz = Yt,
          Oz = Ut(tz, rt.Tr0w),
          oz = Yt,
          vz = ut(sz, rt.Tr0w),
          Uz = Yt,
          Kz = Kt(Fz, rt.Tr0w),
          uz = Yt,
          Nz = rt.XbCO(this.__wbg_ptr, Wz, Xz, Oz, oz, vz, Uz, Kz, uz);
        if (Nz[1]) throw bt(Nz[0])
      }
      Ab(zz) {
        const tz = Kt(zz, rt.Tr0w),
          sz = Yt,
          Fz = rt.ys2v(this.__wbg_ptr, tz, sz);
        if (Fz[1]) throw bt(Fz[0])
      }
      yb() {
        return rt.ykNL(this.__wbg_ptr) >>> 0
      }
      Mb(zz) {
        const tz = rt.wpmZ(this.__wbg_ptr, zz);
        if (tz[2]) throw bt(tz[1]);
        return tz[0] >>> 0
      }
      steer() {
        return rt.rtrV(this.__wbg_ptr) >>> 0
      }
      Qb() {
        const zz = rt.to0C(this.__wbg_ptr);
        var tz = az(zz[0], zz[1]).slice();
        return rt.bNcj(zz[0], 8 * zz[1], 8), tz
      }
      kb() {
        return rt.ZR5d(this.__wbg_ptr) >>> 0
      }
      jN() {
        const zz = rt.pRAr(this.__wbg_ptr);
        var tz, sz, Fz = (tz = zz[0], sz = zz[1], tz >>>= 0, (null !== pz && 0 !== pz.byteLength || (pz = new Int32Array(rt.memory.buffer)), pz).subarray(tz / 4, tz / 4 + sz)).slice();
        return rt.bNcj(zz[0], 4 * zz[1], 4), Fz
      }
    }
    Symbol.dispose && (vz.prototype[Symbol.dispose] = vz.prototype.free);
    class Uz {
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Qz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        rt.S6dZ(zz, 0)
      }
      ib(zz) {
        const tz = Ut(zz, rt.Tr0w),
          sz = Yt,
          Fz = rt.FpGs(this.__wbg_ptr, tz, sz);
        if (Fz[1]) throw bt(Fz[0])
      }
      Lb() {
        return rt.e2UP(this.__wbg_ptr) >>> 0
      }
      qb() {
        return rt.g9tg(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const zz = rt.szJQ();
        return this.__wbg_ptr = zz, Qz.register(this, this.__wbg_ptr, this), this
      }
      run(zz, tz) {
        nz(zz, vz);
        const sz = rt.RGGp(this.__wbg_ptr, zz.__wbg_ptr, tz);
        if (sz[2]) throw bt(sz[1]);
        return sz[0] >>> 0
      }
      Sb(zz) {
        const tz = Ut(zz, rt.Tr0w),
          sz = Yt;
        rt.emp1(this.__wbg_ptr, tz, sz)
      }
      Vb(zz) {
        const tz = Ut(zz, rt.Tr0w),
          sz = Yt;
        rt.Kuxg(this.__wbg_ptr, tz, sz)
      }
    }
    Symbol.dispose && (Uz.prototype[Symbol.dispose] = Uz.prototype.free);
    class Kz {
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, kz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        rt.yRPq(zz, 0)
      }
      pb(zz, tz) {
        const sz = Kt(zz, rt.Tr0w),
          Fz = Yt;
        return rt.n3In(this.__wbg_ptr, sz, Fz, tz) >>> 0
      }
      fb(zz, tz, sz) {
        nz(zz, vz);
        const Fz = Kt(sz, rt.Tr0w),
          Wz = Yt,
          Xz = rt.B85e(this.__wbg_ptr, zz.__wbg_ptr, tz, Fz, Wz);
        if (Xz[2]) throw bt(Xz[1]);
        return Xz[0] >>> 0
      }
      Rb(zz) {
        return rt.KUC8(this.__wbg_ptr, zz) >>> 0
      }
      constructor() {
        const zz = rt.BBaR();
        return this.__wbg_ptr = zz, kz.register(this, this.__wbg_ptr, this), this
      }
      scan(zz, tz) {
        nz(zz, vz);
        const sz = rt.mnck(this.__wbg_ptr, zz.__wbg_ptr, tz);
        if (sz[2]) throw bt(sz[1]);
        return sz[0] >>> 0
      }
      tw(zz) {
        const tz = Kt(zz, rt.Tr0w),
          sz = Yt;
        rt.Hc8o(this.__wbg_ptr, tz, sz)
      }
      zw() {
        return rt.ilgU(this.__wbg_ptr) >>> 0
      }
      Eb() {
        return rt.iihD(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Kz.prototype[Symbol.dispose] = Kz.prototype.free);
    class uz {
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, iz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        rt.rXJD(zz, 0)
      }
      Fw(zz) {
        const tz = rt.qQkW(this.__wbg_ptr, zz);
        if (tz[2]) throw bt(tz[1]);
        return tz[0] >>> 0
      }
      compute(zz, tz, sz, Fz) {
        var Wz = ot(Fz) ? 0 : Nt(Fz, rt.Tr0w, rt.ohxa),
          Xz = Yt;
        const Oz = rt.w4hQ(this.__wbg_ptr, zz, ot(tz) ? Number.MAX_SAFE_INTEGER : tz | 0, sz, Wz, Xz);
        if (Oz[2]) throw bt(Oz[1]);
        return Oz[0] >>> 0
      }
      Xw(zz) {
        const tz = Nt(zz, rt.Tr0w, rt.ohxa),
          sz = Yt;
        rt.mXzB(this.__wbg_ptr, tz, sz)
      }
      ow() {
        return rt.qg8z(this.__wbg_ptr)
      }
      Uw(zz) {
        return rt.OpWC(this.__wbg_ptr, zz) >>> 0
      }
      Kw() {
        return rt.Ri5O(this.__wbg_ptr) >>> 0
      }
      uw() {
        return rt.Ocxl(this.__wbg_ptr) >>> 0
      }
      Nw(zz, tz) {
        const sz = rt.p3xK(this.__wbg_ptr, zz, tz);
        if (sz[1]) throw bt(sz[0])
      }
      bw() {
        return rt.dXnv(this.__wbg_ptr) >>> 0
      }
      ww() {
        return rt.r79I(this.__wbg_ptr) >>> 0
      }
      Dw() {
        return rt.v0tK(this.__wbg_ptr) >>> 0
      }
      Ww(zz, tz, sz) {
        const Fz = Ut(zz, rt.Tr0w),
          Wz = Yt,
          Xz = Ut(tz, rt.Tr0w),
          Oz = Yt,
          oz = rt.v5kP(this.__wbg_ptr, Fz, Wz, Xz, Oz, sz);
        if (oz[1]) throw bt(oz[0])
      }
      Hw() {
        return rt.WMdV(this.__wbg_ptr) >>> 0
      }
      mesh(zz, tz, sz, Fz, Wz) {
        const Xz = rt.j5tI(this.__wbg_ptr, zz, tz, sz, Fz, Wz);
        if (Xz[2]) throw bt(Xz[1]);
        return Xz[0] >>> 0
      }
      constructor(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz, gz, Hz, Bz, Pz) {
        const rz = vt(zz, rt.Tr0w),
          Yz = Yt,
          xz = ut(tz, rt.Tr0w),
          mz = Yt,
          Jz = Ut(sz, rt.Tr0w),
          Iz = Yt,
          Cz = Kt(Fz, rt.Tr0w),
          ez = Yt,
          Zz = Kt(Wz, rt.Tr0w),
          Gz = Yt,
          Tz = Ut(Xz, rt.Tr0w),
          cz = Yt,
          jz = Ut(Oz, rt.Tr0w),
          Az = Yt,
          yz = ut(oz, rt.Tr0w),
          Mz = Yt,
          dz = ut(vz, rt.Tr0w),
          hz = Yt,
          Qz = Kt(Uz, rt.Tr0w),
          kz = Yt;
        var Lz = ot(Kz) ? 0 : vt(Kz, rt.Tr0w),
          lz = Yt;
        const nz = Ut(uz, rt.Tr0w),
          az = Yt,
          qz = Kt(Nz, rt.Tr0w),
          Sz = Yt;
        var Vz = ot(bz) ? 0 : Kt(bz, rt.Tr0w),
          Rz = Yt;
        const pz = ut(wz, rt.Tr0w),
          fz = Yt,
          Ez = rt.lJob(rz, Yz, xz, mz, Jz, Iz, Cz, ez, Zz, Gz, Tz, cz, jz, Az, yz, Mz, dz, hz, Qz, kz, Lz, lz, nz, az, qz, Sz, Vz, Rz, pz, fz, Dz, gz, Hz, Bz, Pz);
        if (Ez[2]) throw bt(Ez[1]);
        return this.__wbg_ptr = Ez[0], iz.register(this, this.__wbg_ptr, this), this
      }
      gw(zz, tz) {
        const sz = Ut(zz, rt.Tr0w),
          Fz = Yt,
          Wz = rt.VoJZ(this.__wbg_ptr, sz, Fz, tz);
        if (Wz[3]) throw bt(Wz[2]);
        var Xz = Sz(Wz[0], Wz[1]).slice();
        return rt.bNcj(Wz[0], 1 * Wz[1], 1), Xz
      }
      Bw(zz) {
        rt.SHZY(this.__wbg_ptr, ot(zz) ? 16777215 : zz)
      }
      Pw(zz) {
        return rt.WRwo(this.__wbg_ptr, zz) >>> 0
      }
      Yw() {
        return rt.Gin3(this.__wbg_ptr) >>> 0
      }
      rw() {
        const zz = rt.Hmn2(this.__wbg_ptr);
        if (zz[2]) throw bt(zz[1]);
        return 0 !== zz[0]
      }
      xw() {
        return rt.aIAf(this.__wbg_ptr) >>> 0
      }
      mw() {
        return rt.zap7(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (uz.prototype[Symbol.dispose] = uz.prototype.free);
    class Nz {
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Lz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        rt.XEOf(zz, 0)
      }
      compute(zz, tz, sz, Fz) {
        var Wz = ot(Fz) ? 0 : Nt(Fz, rt.Tr0w, rt.ohxa),
          Xz = Yt;
        const Oz = rt.zJUH(this.__wbg_ptr, zz, ot(tz) ? Number.MAX_SAFE_INTEGER : tz | 0, sz, Wz, Xz);
        if (Oz[2]) throw bt(Oz[1]);
        return Oz[0] >>> 0
      }
      Xw(zz) {
        const tz = Nt(zz, rt.Tr0w, rt.ohxa),
          sz = Yt;
        rt.sJUy(this.__wbg_ptr, tz, sz)
      }
      ww() {
        return rt.BI2g(this.__wbg_ptr) >>> 0
      }
      Dw() {
        return rt.tH3U(this.__wbg_ptr) >>> 0
      }
      Jw(zz) {
        const tz = rt.dm58(this.__wbg_ptr, zz);
        if (tz[2]) throw bt(tz[1]);
        return tz[0] >>> 0
      }
      constructor(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = vt(zz, rt.Tr0w),
          oz = Yt,
          vz = ut(tz, rt.Tr0w),
          Uz = Yt,
          Kz = Ut(sz, rt.Tr0w),
          uz = Yt,
          Nz = Kt(Fz, rt.Tr0w),
          bz = Yt,
          wz = rt.Y2sC(Oz, oz, vz, Uz, Kz, uz, Nz, bz, Wz, Xz);
        if (wz[2]) throw bt(wz[1]);
        return this.__wbg_ptr = wz[0], Lz.register(this, this.__wbg_ptr, this), this
      }
      Yw() {
        return rt.BBGG(this.__wbg_ptr) >>> 0
      }
      rw() {
        const zz = rt.Nwj0(this.__wbg_ptr);
        if (zz[2]) throw bt(zz[1]);
        return 0 !== zz[0]
      }
      xw() {
        return rt.DE25(this.__wbg_ptr) >>> 0
      }
    }

    function bz() {
      const zz = rt.nNPR();
      var tz = qz(zz[0], zz[1]).slice();
      return rt.bNcj(zz[0], 4 * zz[1], 4), tz
    }

    function wz(zz, tz) {
      let sz, Fz;
      try {
        const Wz = vt(zz, rt.Tr0w),
          Xz = Yt,
          Oz = Nt(tz, rt.Tr0w, rt.ohxa),
          oz = Yt,
          vz = rt.xgcO(Wz, Xz, Oz, oz);
        return sz = vz[0], Fz = vz[1], fz(vz[0], vz[1])
      } finally {
        rt.bNcj(sz, Fz, 1)
      }
    }

    function Dz() {
      const zz = rt.cMgG();
      var tz = qz(zz[0], zz[1]).slice();
      return rt.bNcj(zz[0], 4 * zz[1], 4), tz
    }

    function gz(zz) {
      return 0 !== rt.dtnc(zz)
    }

    function Hz(zz, tz) {
      const sz = Nt(zz, rt.Tr0w, rt.ohxa),
        Fz = Yt,
        Wz = rt.fFcm(sz, Fz, tz);
      if (Wz[1]) throw bt(Wz[0])
    }

    function Bz() {
      rt.Fu4l()
    }

    function Pz() {
      return rt.AbGC() >>> 0
    }

    function rz(zz) {
      return 0 !== rt.Suyc(zz)
    }

    function Yz(zz) {
      return 0 !== rt.fMCX(zz)
    }

    function xz(zz) {
      rt.hLOJ(zz)
    }

    function mz() {
      return rt.PQW3() >>> 0
    }

    function Jz() {
      return rt.JDcT() >>> 0
    }

    function Iz() {
      return 0 !== rt.rz15()
    }

    function Cz() {
      const zz = rt.IeSf();
      var tz = qz(zz[0], zz[1]).slice();
      return rt.bNcj(zz[0], 4 * zz[1], 4), tz
    }

    function ez() {
      const zz = rt.mTvN();
      var tz = qz(zz[0], zz[1]).slice();
      return rt.bNcj(zz[0], 4 * zz[1], 4), tz
    }

    function Zz() {
      const zz = rt.shbu();
      var tz = qz(zz[0], zz[1]).slice();
      return rt.bNcj(zz[0], 4 * zz[1], 4), tz
    }

    function Gz() {
      return rt.V2AF() >>> 0
    }

    function Tz() {
      rt.WER1()
    }

    function cz() {
      let zz, tz;
      try {
        const sz = rt.k2PT();
        return zz = sz[0], tz = sz[1], fz(sz[0], sz[1])
      } finally {
        rt.bNcj(zz, tz, 1)
      }
    }

    function jz(zz) {
      rt.fpAX(lz(zz))
    }

    function Az() {
      return {
        __proto__: null,
        cqGf: {
          __proto__: null,
          FKag: function(zz, tz) {
            return lz(Error(fz(zz, tz)))
          },
          A5vb: function(zz, tz) {
            throw new Error(fz(zz, tz))
          },
          jCLa: function(zz) {
            Wt(zz).call()
          },
          Ifzd: function(zz, tz) {
            console.error(fz(zz, tz))
          },
          cR8P: function() {
            return performance.now()
          },
          LK6g: function(zz) {
            bt(zz)
          }
        }
      }
    }
    Symbol.dispose && (Nz.prototype[Symbol.dispose] = Nz.prototype.free);
    const yz = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((zz => rt.ZRSp(zz, 1))),
      Mz = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((zz => rt.if3H(zz, 1))),
      dz = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((zz => rt.yZ2P(zz, 1))),
      hz = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((zz => rt.ZJub(zz, 1))),
      Qz = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((zz => rt.S6dZ(zz, 1))),
      kz = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((zz => rt.yRPq(zz, 1))),
      iz = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((zz => rt.rXJD(zz, 1))),
      Lz = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((zz => rt.XEOf(zz, 1)));

    function lz(zz) {
      Ot === Xt.length && Xt.push(Xt.length + 1);
      const tz = Ot;
      return Ot = Xt[tz], Xt[tz] = zz, tz
    }

    function nz(zz, tz) {
      if (!(zz instanceof tz)) throw new Error(`expected instance of ${tz.name}`)
    }

    function az(zz, tz) {
      return zz >>>= 0, Rz().subarray(zz / 8, zz / 8 + tz)
    }

    function qz(zz, tz) {
      return zz >>>= 0, tt().subarray(zz / 4, zz / 4 + tz)
    }

    function Sz(zz, tz) {
      return zz >>>= 0, Ft().subarray(zz / 1, zz / 1 + tz)
    }
    let Vz = null;

    function Rz() {
      return null !== Vz && 0 !== Vz.byteLength || (Vz = new Float64Array(rt.memory.buffer)), Vz
    }
    let pz = null;

    function fz(zz, tz) {
      return function(zz, tz) {
        gt += tz, gt >= Dt && (wt = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), wt.decode(), gt = tz);
        return wt.decode(Ft().subarray(zz, zz + tz))
      }(zz >>> 0, tz)
    }
    let Ez = null;
    let zt = null;

    function tt() {
      return null !== zt && 0 !== zt.byteLength || (zt = new Uint32Array(rt.memory.buffer)), zt
    }
    let st = null;

    function Ft() {
      return null !== st && 0 !== st.byteLength || (st = new Uint8Array(rt.memory.buffer)), st
    }

    function Wt(zz) {
      return Xt[zz]
    }
    let Xt = new Array(1024).fill(void 0);
    Xt.push(void 0, null, !0, !1);
    let Ot = Xt.length;

    function ot(zz) {
      return void 0 === zz || null === zz
    }

    function vt(zz, tz) {
      const sz = tz(2 * zz.length, 2) >>> 0;
      return (null !== Ez && 0 !== Ez.byteLength || (Ez = new Uint16Array(rt.memory.buffer)), Ez).set(zz, sz / 2), Yt = zz.length, sz
    }

    function Ut(zz, tz) {
      const sz = tz(4 * zz.length, 4) >>> 0;
      return tt().set(zz, sz / 4), Yt = zz.length, sz
    }

    function Kt(zz, tz) {
      const sz = tz(1 * zz.length, 1) >>> 0;
      return Ft().set(zz, sz / 1), Yt = zz.length, sz
    }

    function ut(zz, tz) {
      const sz = tz(8 * zz.length, 8) >>> 0;
      return Rz().set(zz, sz / 8), Yt = zz.length, sz
    }

    function Nt(zz, tz, sz) {
      if (void 0 === sz) {
        const sz = Ht.encode(zz),
          Fz = tz(sz.length, 1) >>> 0;
        return Ft().subarray(Fz, Fz + sz.length).set(sz), Yt = sz.length, Fz
      }
      let Fz = zz.length,
        Wz = tz(Fz, 1) >>> 0;
      const Xz = Ft();
      let Oz = 0;
      for (; Oz < Fz; Oz++) {
        const tz = zz.charCodeAt(Oz);
        if (tz > 127) break;
        Xz[Wz + Oz] = tz
      }
      if (Oz !== Fz) {
        0 !== Oz && (zz = zz.slice(Oz)), Wz = sz(Wz, Fz, Fz = Oz + 3 * zz.length, 1) >>> 0;
        const tz = Ft().subarray(Wz + Oz, Wz + Fz);
        Oz += Ht.encodeInto(zz, tz).written, Wz = sz(Wz, Fz, Oz, 1) >>> 0
      }
      return Yt = Oz, Wz
    }

    function bt(zz) {
      const tz = Wt(zz);
      return function(zz) {
        zz < 1028 || (Xt[zz] = Ot, Ot = zz)
      }(zz), tz
    }
    let wt = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    wt.decode();
    const Dt = 2146435072;
    let gt = 0;
    const Ht = new TextEncoder;
    "encodeInto" in Ht || (Ht.encodeInto = function(zz, tz) {
      const sz = Ht.encode(zz);
      return tz.set(sz), {
        read: zz.length,
        written: sz.length
      }
    });
    let Bt, Pt, rt, Yt = 0;

    function xt(zz, tz) {
      return Pt = zz, rt = zz.exports, Bt = tz, Vz = null, pz = null, Ez = null, zt = null, st = null, rt.by7X(), rt
    }

    function mt(zz) {
      if (void 0 !== rt) return rt;
      void 0 !== zz && (Object.getPrototypeOf(zz) === Object.prototype ? ({
        module: zz
      } = zz) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const tz = Az();
      zz instanceof WebAssembly.Module || (zz = new WebAssembly.Module(zz));
      return xt(new WebAssembly.Instance(zz, tz), zz)
    }
    async function Jt(zz) {
      if (void 0 !== rt) return rt;
      void 0 !== zz && (Object.getPrototypeOf(zz) === Object.prototype ? ({
        module_or_path: zz
      } = zz) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const tz = Az();
      ("string" === typeof zz || "function" === typeof Request && zz instanceof Request || "function" === typeof URL && zz instanceof URL) && (zz = fetch(zz));
      const {
        instance: sz,
        module: Fz
      } = await async function(zz, tz) {
        if ("function" === typeof Response && zz instanceof Response) {
          if (!zz.ok) throw new Error(`failed to fetch Wasm: ${zz.status} ${zz.statusText} fetching '${zz.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(zz, tz)
          } catch (sz) {
            if (! function(zz) {
                switch (zz) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(zz.type) || "application/wasm" === zz.headers.get("Content-Type")) throw sz;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", sz)
          }
          const Fz = await zz.arrayBuffer();
          return await WebAssembly.instantiate(Fz, tz)
        } {
          const sz = await WebAssembly.instantiate(zz, tz);
          return sz instanceof WebAssembly.Instance ? {
            instance: sz,
            module: zz
          } : sz
        }
      }(await zz, tz);
      return xt(sz, Fz)
    }
    var It = sz(3376),
      Ct = sz(35828);
    const et = {
      name: It.e,
      url: () => new sz.U(sz(35833)),
      init: Jt,
      bindings: Fz
    };

    function Zt() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : et,
        tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : et,
        sz = arguments.length > 2 ? arguments[2] : void 0;
      return (0, Ct.h)(zz, tz, sz)
    }

    function Gt(zz) {
      return (0, It.T)((() => zz), Fz, et)
    }
  },
  35813: (zz, tz, sz) => {
    function Fz(zz, tz) {
      return new Error(`${zz}: ${tz instanceof Error?`${tz.name}: ${tz.message}`:String(tz)}`, {
        cause: tz
      })
    }
    sz.d(tz, {
      d: () => Fz
    })
  },
  35810: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Oz,
      i: () => vz
    });
    var Fz = sz(3378),
      Wz = sz(6196),
      Xz = sz(35813);

    function Oz() {
      return new URL(new sz.U(sz(35822)).href, globalThis.location?.href).href
    }
    let oz = null;

    function vz() {
      return oz ??= (async () => (0, Fz.E)(new URL(Oz()), (0, Wz.d)("bloxd_wasm_textures")))().catch((zz => {
        throw (0, Xz.d)((0, Fz.K)(zz), zz)
      })), oz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);