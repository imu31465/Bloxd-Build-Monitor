export const id = 206;
export const ids = [206, 207];
export const modules = {
  35841: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv,
      reportCappedWasmFailure: () => pv,
      reportUncappedWasmFailure: () => gv,
      reportWasmFailure: () => ev
    });
    var hv = Pv(2715);
    const Sv = hv.c - 4;

    function ev(vv, zv, Pv) {
      (0, hv.e)(vv, zv, Pv, !1)
    }

    function gv(vv, zv, Pv) {
      (0, hv.e)(vv, zv, Pv, !1, 1 / 0)
    }

    function pv(vv, zv, Pv) {
      (0, hv.e)(vv, zv, Pv, !1, Sv)
    }
  },
  35835: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => jv,
      d: () => Yv,
      h: () => nv,
      l: () => fv
    });
    var hv = Pv(35856),
      Sv = Pv(3466),
      ev = Pv(35876),
      gv = Pv(3473),
      pv = Pv(35841),
      dv = Pv(2706),
      Nv = Pv(3002),
      lv = Pv(2996),
      Tv = Pv(35847),
      Wv = Pv(2715),
      wv = Pv(35849),
      av = Pv(35852),
      sv = Pv(3459);
    let Cv = !1;
    const iv = 40;
    var cv = Pv(688);
    const Gv = "bloxdWasmFailureReported";

    function mv() {
      return "undefined" === typeof WebAssembly
    }

    function jv() {
      return (0, hv.e)()
    }

    function fv() {
      if (mv()) return "this browser has no WebAssembly";
      const vv = (0, Sv.p)();
      return "compile" === vv || "instantiate" === vv ? `the core wasm didn't load here (${(0,Sv.j)()})` : null
    }
    async function Fv(vv) {
      return await (0, ev.g)(ev.d, void 0, vv)
    }

    function Yv() {
      mv() || (0, cv.c)((() => {
        Fv()
      }))
    }

    function nv() {
      if (mv()) return async () => ((0, dv.j)("unsupported", 0), Ov("unsupported", "This browser has no WebAssembly"), !1);
      const vv = {
        reloadFailedDownload: !0
      };
      return Fv(vv), async () => {
        var zv;
        const Pv = performance.now();
        await Fv(vv);
        const hv = (performance.now() - Pv) / 1e3;
        if ((0, Sv.O)()) return (0, dv.j)("ready", hv), Cv || (Cv = !0, (0, Sv.Q)((() => {
          if ("call" !== (0, Sv.p)()) return;
          const vv = (0, Sv.o)(),
            zv = (0, Tv.h)(vv, Sv.E, Sv.X),
            Pv = (0, Sv.u)().buffer.byteLength,
            hv = (0, Tv.d)(zv.kind, zv.refusedBytes),
            ev = hv ? "alloc_failed" : zv.kind,
            gv = (0, wv.f)(Pv),
            pv = hv ? `_r${Math.floor(Math.log2(zv.refusedBytes))}` : "",
            dv = (0, sv.c)();
          null === dv && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const Nv = new Error((0, av.d)(vv, Pv, zv));
          if (vv instanceof Error && void 0 !== vv.stack) {
            const zv = vv.stack.split("\n"),
              Pv = zv.length > iv ? [...zv.slice(0, iv / 2), ...zv.slice(-iv / 2)] : zv;
            Nv.stack = Pv.join("\n")
          }(0, Wv.e)("wasm_load", Nv, `wasm_call_${ev}_${null!==dv&&void 0!==dv?dv:"unnamed"}_m${gv}${pv}`)
        }))), (0, gv.Q)(ev.d.url()) && (0, pv.reportCappedWasmFailure)("wasm_load", Nv.c.message, Nv.c.code), !0;
        const cv = lv.b[null !== (zv = (0, Sv.p)()) && void 0 !== zv ? zv : "call"];
        return (0, dv.j)(cv, hv), Ov(cv, (0, Sv.j)()), !1
      }
    }

    function Ov(vv, zv) {
      (0, lv.g)(Gv, `Bloxd wasm ${vv}, so the game can't start: ${zv}`, zv, vv)
    }
  },
  35888: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/bloxd_wasm_bg.0ad1e69a75b1f7fb10b3.wasm"
  },
  35869: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/bloxd_wasm_textures_bg.76a5c861c3c0e6e9a58d.wasm"
  },
  35876: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Dz,
      g: () => Kz,
      h: () => Vz
    });
    var hv = {};
    Pv.r(hv), Pv.d(hv, {
      Bl: () => Sv,
      EnvelopeKind: () => ev,
      Jl: () => gv,
      PhysicsEngine: () => pv,
      El: () => dv,
      ol: () => Nv,
      bl: () => lv,
      rl: () => Tv,
      kl: () => Wv,
      Xl: () => wv,
      ul: () => av,
      vT: () => sv,
      zT: () => Cv,
      PT: () => iv,
      default: () => Yz,
      initSync: () => Fz,
      hT: () => cv,
      ST: () => Gv,
      eT: () => mv,
      gT: () => jv,
      pT: () => fv,
      dT: () => Fv,
      NT: () => Yv,
      lT: () => nv,
      TT: () => Ov,
      WT: () => Dv,
      wT: () => Kv,
      aT: () => Vv,
      sT: () => Uv,
      CT: () => Rv,
      iT: () => xv
    });
    class Sv {
      __destroy_into_raw() {
        const vv = this.__wbg_ptr;
        return this.__wbg_ptr = 0, qv.unregister(this), vv
      }
      free() {
        const vv = this.__destroy_into_raw();
        mz.Gevw(vv, 0)
      }
      cT() {
        const vv = mz.bx2U(this.__wbg_ptr);
        if (vv[2]) throw wz(vv[1]);
        return vv[0] >>> 0
      }
      GT() {
        return mz.nqbD(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const vv = mz.ITpI();
        return this.__wbg_ptr = vv, qv.register(this, this.__wbg_ptr, this), this
      }
      mT() {
        return mz.TuMe(this.__wbg_ptr) >>> 0
      }
      jT(vv) {
        const zv = mz.jkxO(this.__wbg_ptr, vv);
        if (zv[2]) throw wz(zv[1]);
        return zv[0] >>> 0
      }
      fT(vv) {
        const zv = mz.wt7P(this.__wbg_ptr, vv);
        if (zv[2]) throw wz(zv[1]);
        return zv[0] >>> 0
      }
    }
    Symbol.dispose && (Sv.prototype[Symbol.dispose] = Sv.prototype.free);
    const ev = Object.freeze({
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
    class gv {
      __destroy_into_raw() {
        const vv = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Iv.unregister(this), vv
      }
      free() {
        const vv = this.__destroy_into_raw();
        mz.lVRu(vv, 0)
      }
      nT(vv, zv) {
        const Pv = mz.FStZ(this.__wbg_ptr, vv, zv);
        if (Pv[2]) throw wz(Pv[1]);
        return Pv[0] >>> 0
      }
      OT(vv) {
        const zv = mz.KAyu(this.__wbg_ptr, vv);
        if (zv[2]) throw wz(zv[1]);
        return zv[0] >>> 0
      }
      DT() {
        mz.GuoD(this.__wbg_ptr)
      }
      static KT() {
        return mz.PpIA() >>> 0
      }
      VT() {
        return mz.Aa7s(this.__wbg_ptr) >>> 0
      }
      UT() {
        const vv = mz.CvVM(this.__wbg_ptr);
        return 0 === vv[0] ? void 0 : vv[1]
      }
      RT() {
        return mz.AiWD(this.__wbg_ptr) >>> 0
      }
      xT() {
        return mz.IlZf(this.__wbg_ptr) >>> 0
      }
      static YT() {
        return mz.QRPh() >>> 0
      }
      constructor() {
        const vv = mz.O9RF();
        return this.__wbg_ptr = vv, Iv.register(this, this.__wbg_ptr, this), this
      }
      tT() {
        return mz.V0HB(this.__wbg_ptr) >>> 0
      }
      qT() {
        return mz.nQKt(this.__wbg_ptr) >>> 0
      }
      IT() {
        return mz.RjlA(this.__wbg_ptr) >>> 0
      }
      FT(vv) {
        return mz.JsVK(this.__wbg_ptr, vv) >>> 0
      }
      reserve(vv, zv) {
        const Pv = mz.kRNY(this.__wbg_ptr, vv, zv);
        if (Pv[1]) throw wz(Pv[0])
      }
      AT(vv, zv) {
        const Pv = Nz(vv, mz.U7Ro),
          hv = jz;
        mz.cPJk(this.__wbg_ptr, Pv, hv, zv)
      }
      text() {
        let vv, zv;
        try {
          const Pv = mz.xzJA(this.__wbg_ptr);
          return vv = Pv[0], zv = Pv[1], Xv(Pv[0], Pv[1])
        } finally {
          mz.g27U(vv, zv, 1)
        }
      }
    }
    Symbol.dispose && (gv.prototype[Symbol.dispose] = gv.prototype.free);
    class pv {
      __destroy_into_raw() {
        const vv = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Qv.unregister(this), vv
      }
      free() {
        const vv = this.__destroy_into_raw();
        mz.EjMa(vv, 0)
      }
      HT(vv, zv) {
        Bv(zv, Sv);
        const Pv = mz.JAsv(this.__wbg_ptr, vv, zv.__wbg_ptr);
        if (Pv[2]) throw wz(Pv[1]);
        return Pv[0] >>> 0
      }
      yT() {
        const vv = mz.L0AM(this.__wbg_ptr);
        if (vv[1]) throw wz(vv[0])
      }
      bT(vv, zv, Pv, hv, Sv, ev, gv, pv, Nv, lv, Tv) {
        Bv(vv, dv);
        const Wv = mz.U6tl(this.__wbg_ptr, vv.__wbg_ptr, zv, Pv, hv, Sv, ev, gv, pv, Nv, lv, Tv);
        if (Wv[2]) throw wz(Wv[1]);
        return Wv[0]
      }
      rT() {
        const vv = mz.WA2Z(this.__wbg_ptr);
        var zv = Jv(vv[0], vv[1]).slice();
        return mz.g27U(vv[0], 8 * vv[1], 8), zv
      }
      kT() {
        return mz.k55i(this.__wbg_ptr) >>> 0
      }
      XT() {
        return mz.SCov(this.__wbg_ptr) >>> 0
      }
      uT() {
        return mz.meDO(this.__wbg_ptr) >>> 0
      }
      constructor(vv, zv, Pv, hv, Sv, ev, gv, pv) {
        const dv = mz.NYCn(vv, zv, Pv, hv, Sv, ev, gv, pv);
        if (dv[2]) throw wz(dv[1]);
        return this.__wbg_ptr = dv[0], Qv.register(this, this.__wbg_ptr, this), this
      }
      PW(vv) {
        Bv(vv, Sv);
        const zv = mz.mpG5(this.__wbg_ptr, vv.__wbg_ptr);
        if (zv[2]) throw wz(zv[1]);
        return zv[0] >>> 0
      }
      hW(vv) {
        const zv = mz.NV1I(this.__wbg_ptr, vv);
        if (zv[1]) throw wz(zv[0])
      }
      SW() {
        return mz.jfo6(this.__wbg_ptr) >>> 0
      }
      resume(vv, zv) {
        Bv(vv, dv), Bv(zv, Sv);
        const Pv = mz.iIyF(this.__wbg_ptr, vv.__wbg_ptr, zv.__wbg_ptr);
        if (Pv[2]) throw wz(Pv[1]);
        return Pv[0] >>> 0
      }
      NW(vv) {
        const zv = mz.eKbT(this.__wbg_ptr, vv);
        if (zv[1]) throw wz(zv[0])
      }
      WW(vv, zv) {
        Bv(zv, Sv);
        const Pv = mz.rh2q(this.__wbg_ptr, vv, zv.__wbg_ptr);
        if (Pv[1]) throw wz(Pv[0])
      }
      sW(vv) {
        const zv = Tz(vv, mz.U7Ro),
          Pv = jz,
          hv = mz.BXdI(this.__wbg_ptr, zv, Pv);
        if (hv[1]) throw wz(hv[0])
      }
      JT(vv, zv, Pv, hv, Sv, ev) {
        const gv = mz.fqKm(this.__wbg_ptr, vv, zv, Pv, hv, Sv, ev);
        if (gv[1]) throw wz(gv[0])
      }
      ET(vv, zv, Pv, hv) {
        const Sv = Nz(vv, mz.U7Ro),
          ev = jz,
          gv = Tz(zv, mz.U7Ro),
          pv = jz,
          dv = Tz(Pv, mz.U7Ro),
          Nv = jz,
          lv = Tz(hv, mz.U7Ro),
          Tv = jz,
          Wv = mz.depY(this.__wbg_ptr, Sv, ev, gv, pv, dv, Nv, lv, Tv);
        if (Wv[1]) throw wz(Wv[0])
      }
      cW(vv, zv) {
        Bv(zv, Sv);
        const Pv = mz.FufL(this.__wbg_ptr, vv, zv.__wbg_ptr);
        if (Pv[1]) throw wz(Pv[0])
      }
      zW(vv, zv, Pv) {
        const hv = mz.oivS(this.__wbg_ptr, vv, zv, Pv);
        if (hv[1]) throw wz(hv[0])
      }
      mW(vv, zv, Pv, hv, Sv, ev, gv, pv, Nv, lv) {
        Bv(vv, dv);
        return mz.oeuV(this.__wbg_ptr, vv.__wbg_ptr, zv, Pv, hv, Sv, ev, gv, pv, Nv, lv)
      }
    }
    Symbol.dispose && (pv.prototype[Symbol.dispose] = pv.prototype.free);
    class dv {
      static __wrap(vv) {
        const zv = Object.create(dv.prototype);
        return zv.__wbg_ptr = vv, Zv.register(zv, zv.__wbg_ptr, zv), zv
      }
      __destroy_into_raw() {
        const vv = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Zv.unregister(this), vv
      }
      free() {
        const vv = this.__destroy_into_raw();
        mz.nFrC(vv, 0)
      }
      FW(vv) {
        const zv = mz.BjeJ(this.__wbg_ptr, vv);
        if (zv[2]) throw wz(zv[1]);
        return zv[0] >>> 0
      }
      YW(vv, zv, Pv) {
        return mz.kr8A(this.__wbg_ptr, vv, zv, Pv)
      }
      nW(vv, zv, Pv) {
        return mz.iiUY(this.__wbg_ptr, vv, zv, Pv) >>> 0
      }
      OW(vv, zv, Pv, hv) {
        return 0 !== mz.i5TB(this.__wbg_ptr, vv, zv, Pv, hv)
      }
      DW() {
        mz.Xz2D(this.__wbg_ptr)
      }
      VW(vv) {
        const zv = mz.Lwx4(this.__wbg_ptr, vv);
        if (zv[3]) throw wz(zv[2]);
        var Pv = ov(zv[0], zv[1]).slice();
        return mz.g27U(zv[0], 1 * zv[1], 1), Pv
      }
      evict(vv, zv) {
        return mz.lAif(this.__wbg_ptr, vv, zv) >>> 0
      }
      UW() {
        mz.LCHo(this.__wbg_ptr)
      }
      RW(vv, zv, Pv) {
        mz.PKGB(this.__wbg_ptr, vv, zv, Pv)
      }
      xW(vv) {
        const zv = mz.BPMw(this.__wbg_ptr, vv);
        if (zv[1]) throw wz(zv[0])
      }
      tW() {
        return mz.TtNe(this.__wbg_ptr) >>> 0
      }
      qW() {
        return mz.LGuR(this.__wbg_ptr) >>> 0
      }
      IW(vv, zv, Pv) {
        mz.ZMDP(this.__wbg_ptr, vv, zv, Pv)
      }
      QW(vv, zv, Pv) {
        mz.Gbbo(this.__wbg_ptr, vv, zv, Pv)
      }
      ZW() {
        return mz.ksBP(this.__wbg_ptr) >>> 0
      }
      AW() {
        return mz.K9VH(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const vv = mz.RJHv();
        return this.__wbg_ptr = vv, Zv.register(this, this.__wbg_ptr, this), this
      }
      static LW() {
        const vv = mz.KcBv();
        return dv.__wrap(vv)
      }
      HW() {
        return mz.r1K2(this.__wbg_ptr) >>> 0
      }
      MW() {
        return mz.AGy8(this.__wbg_ptr) >>> 0
      }
      yW(vv, zv, Pv, hv) {
        const Sv = mz.WCdf(this.__wbg_ptr, vv, zv, Pv, hv);
        if (Sv[1]) throw wz(Sv[0])
      }
      BW() {
        return mz.hoYa(this.__wbg_ptr) >>> 0
      }
      JW() {
        return mz.yqUY(this.__wbg_ptr) >>> 0
      }
      EW(vv, zv, Pv, hv) {
        mz.a8Sa(this.__wbg_ptr, vv, zv, Pv, hv)
      }
      oW(vv) {
        mz.S4CJ(this.__wbg_ptr, vv)
      }
      rW(vv, zv, Pv, hv, Sv) {
        const ev = lz(zv, mz.U7Ro),
          gv = jz,
          pv = Nz(Pv, mz.U7Ro),
          dv = jz,
          Nv = Tz(hv, mz.U7Ro),
          lv = jz,
          Tv = mz.HQpi(this.__wbg_ptr, vv, ev, gv, pv, dv, Nv, lv, Sv);
        if (Tv[1]) throw wz(Tv[0])
      }
      bW(vv, zv, Pv, hv) {
        const Sv = lz(vv, mz.U7Ro),
          ev = jz,
          gv = Nz(zv, mz.U7Ro),
          pv = jz,
          dv = Tz(Pv, mz.U7Ro),
          Nv = jz,
          lv = lz(hv, mz.U7Ro),
          Tv = jz,
          Wv = mz.YhEk(this.__wbg_ptr, Sv, ev, gv, pv, dv, Nv, lv, Tv);
        if (Wv[1]) throw wz(Wv[0])
      }
      hw(vv) {
        const zv = lz(vv, mz.U7Ro),
          Pv = jz,
          hv = mz.ZR1Y(this.__wbg_ptr, zv, Pv);
        if (hv[1]) throw wz(hv[0])
      }
      Sw() {
        return mz.ar8i(this.__wbg_ptr) >>> 0
      }
      ew(vv) {
        const zv = mz.ktR6(this.__wbg_ptr, vv);
        if (zv[2]) throw wz(zv[1]);
        return zv[0] >>> 0
      }
      steer() {
        return mz.kuoo(this.__wbg_ptr) >>> 0
      }
      gw() {
        const vv = mz.eaTz(this.__wbg_ptr);
        var zv = Jv(vv[0], vv[1]).slice();
        return mz.g27U(vv[0], 8 * vv[1], 8), zv
      }
      pw() {
        return mz.tIFU(this.__wbg_ptr) >>> 0
      }
      gW() {
        const vv = mz.LbZ0(this.__wbg_ptr);
        var zv, Pv, hv = (zv = vv[0], Pv = vv[1], zv >>>= 0, (null !== kv && 0 !== kv.byteLength || (kv = new Int32Array(mz.memory.buffer)), kv).subarray(zv / 4, zv / 4 + Pv)).slice();
        return mz.g27U(vv[0], 4 * vv[1], 4), hv
      }
    }
    Symbol.dispose && (dv.prototype[Symbol.dispose] = dv.prototype.free);
    class Nv {
      __destroy_into_raw() {
        const vv = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Av.unregister(this), vv
      }
      free() {
        const vv = this.__destroy_into_raw();
        mz.WCiQ(vv, 0)
      }
      dw(vv) {
        const zv = Nz(vv, mz.U7Ro),
          Pv = jz,
          hv = mz.PqbI(this.__wbg_ptr, zv, Pv);
        if (hv[1]) throw wz(hv[0])
      }
      Nw() {
        return mz.qwkf(this.__wbg_ptr) >>> 0
      }
      lw() {
        return mz.YkPn(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const vv = mz.ceD1();
        return this.__wbg_ptr = vv, Av.register(this, this.__wbg_ptr, this), this
      }
      run(vv, zv) {
        Bv(vv, dv);
        const Pv = mz.STW7(this.__wbg_ptr, vv.__wbg_ptr, zv);
        if (Pv[2]) throw wz(Pv[1]);
        return Pv[0] >>> 0
      }
      Tw(vv) {
        const zv = Nz(vv, mz.U7Ro),
          Pv = jz;
        mz.YJrX(this.__wbg_ptr, zv, Pv)
      }
      Ww(vv) {
        const zv = Nz(vv, mz.U7Ro),
          Pv = jz;
        mz.I7ZE(this.__wbg_ptr, zv, Pv)
      }
    }
    Symbol.dispose && (Nv.prototype[Symbol.dispose] = Nv.prototype.free);
    class lv {
      __destroy_into_raw() {
        const vv = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Lv.unregister(this), vv
      }
      free() {
        const vv = this.__destroy_into_raw();
        mz.drpF(vv, 0)
      }
      aw(vv, zv) {
        const Pv = lz(vv, mz.U7Ro),
          hv = jz;
        return mz.JloA(this.__wbg_ptr, Pv, hv, zv) >>> 0
      }
      sw(vv, zv, Pv) {
        Bv(vv, dv);
        const hv = lz(Pv, mz.U7Ro),
          Sv = jz,
          ev = mz.Qv4O(this.__wbg_ptr, vv.__wbg_ptr, zv, hv, Sv);
        if (ev[2]) throw wz(ev[1]);
        return ev[0] >>> 0
      }
      ww(vv) {
        return mz.XGWq(this.__wbg_ptr, vv) >>> 0
      }
      constructor() {
        const vv = mz.YkJc();
        return this.__wbg_ptr = vv, Lv.register(this, this.__wbg_ptr, this), this
      }
      scan(vv, zv) {
        Bv(vv, dv);
        const Pv = mz.SYhx(this.__wbg_ptr, vv.__wbg_ptr, zv);
        if (Pv[2]) throw wz(Pv[1]);
        return Pv[0] >>> 0
      }
      Gw(vv) {
        const zv = lz(vv, mz.U7Ro),
          Pv = jz;
        mz.Qll2(this.__wbg_ptr, zv, Pv)
      }
      iw() {
        return mz.Vhvl(this.__wbg_ptr) >>> 0
      }
      Cw() {
        return mz.s8pe(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (lv.prototype[Symbol.dispose] = lv.prototype.free);
    class Tv {
      __destroy_into_raw() {
        const vv = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Hv.unregister(this), vv
      }
      free() {
        const vv = this.__destroy_into_raw();
        mz.MTmJ(vv, 0)
      }
      jw(vv) {
        const zv = mz.WC8B(this.__wbg_ptr, vv);
        if (zv[2]) throw wz(zv[1]);
        return zv[0] >>> 0
      }
      compute(vv, zv, Pv, hv) {
        var Sv = pz(hv) ? 0 : Wz(hv, mz.U7Ro, mz.Y6dG),
          ev = jz;
        const gv = mz.OBOW(this.__wbg_ptr, vv, pz(zv) ? Number.MAX_SAFE_INTEGER : zv | 0, Pv, Sv, ev);
        if (gv[2]) throw wz(gv[1]);
        return gv[0] >>> 0
      }
      Fw(vv) {
        const zv = Wz(vv, mz.U7Ro, mz.Y6dG),
          Pv = jz;
        mz.x83r(this.__wbg_ptr, zv, Pv)
      }
      nw() {
        return mz.cPQF(this.__wbg_ptr)
      }
      Ow(vv) {
        return mz.Jzkh(this.__wbg_ptr, vv) >>> 0
      }
      Dw() {
        return mz.gFNu(this.__wbg_ptr) >>> 0
      }
      Kw() {
        return mz.XzPM(this.__wbg_ptr) >>> 0
      }
      Vw(vv, zv) {
        const Pv = mz.d6KW(this.__wbg_ptr, vv, zv);
        if (Pv[1]) throw wz(Pv[0])
      }
      Uw() {
        return mz.Vyus(this.__wbg_ptr) >>> 0
      }
      Rw() {
        return mz.g6SG(this.__wbg_ptr) >>> 0
      }
      xw() {
        return mz.knQI(this.__wbg_ptr) >>> 0
      }
      fw(vv, zv, Pv) {
        const hv = Nz(vv, mz.U7Ro),
          Sv = jz,
          ev = Nz(zv, mz.U7Ro),
          gv = jz,
          pv = mz.VSG1(this.__wbg_ptr, hv, Sv, ev, gv, Pv);
        if (pv[1]) throw wz(pv[0])
      }
      qw() {
        return mz.jPws(this.__wbg_ptr) >>> 0
      }
      mesh(vv, zv, Pv, hv, Sv) {
        const ev = mz.cupU(this.__wbg_ptr, vv, zv, Pv, hv, Sv);
        if (ev[2]) throw wz(ev[1]);
        return ev[0] >>> 0
      }
      constructor(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv, iv, cv, Gv) {
        const mv = dz(vv, mz.U7Ro),
          jv = jz,
          fv = Tz(zv, mz.U7Ro),
          Fv = jz,
          Yv = Nz(Pv, mz.U7Ro),
          nv = jz,
          Ov = lz(hv, mz.U7Ro),
          Dv = jz,
          Kv = lz(Sv, mz.U7Ro),
          Vv = jz,
          Uv = Nz(ev, mz.U7Ro),
          Rv = jz,
          xv = Nz(gv, mz.U7Ro),
          tv = jz,
          qv = Tz(pv, mz.U7Ro),
          Iv = jz,
          Qv = Tz(dv, mz.U7Ro),
          Zv = jz,
          Av = lz(Nv, mz.U7Ro),
          Lv = jz;
        var Mv = pz(lv) ? 0 : dz(lv, mz.U7Ro),
          yv = jz;
        const Bv = Nz(Tv, mz.U7Ro),
          Jv = jz,
          Ev = lz(Wv, mz.U7Ro),
          ov = jz;
        var bv = pz(wv) ? 0 : lz(wv, mz.U7Ro),
          rv = jz;
        const kv = Tz(av, mz.U7Ro),
          Xv = jz,
          uv = mz.ai16(mv, jv, fv, Fv, Yv, nv, Ov, Dv, Kv, Vv, Uv, Rv, xv, tv, qv, Iv, Qv, Zv, Av, Lv, Mv, yv, Bv, Jv, Ev, ov, bv, rv, kv, Xv, sv, Cv, iv, cv, Gv);
        if (uv[2]) throw wz(uv[1]);
        return this.__wbg_ptr = uv[0], Hv.register(this, this.__wbg_ptr, this), this
      }
      tw(vv, zv) {
        const Pv = Nz(vv, mz.U7Ro),
          hv = jz,
          Sv = mz.L4cF(this.__wbg_ptr, Pv, hv, zv);
        if (Sv[3]) throw wz(Sv[2]);
        var ev = ov(Sv[0], Sv[1]).slice();
        return mz.g27U(Sv[0], 1 * Sv[1], 1), ev
      }
      Iw(vv) {
        mz.HAuW(this.__wbg_ptr, pz(vv) ? 16777215 : vv)
      }
      Qw(vv) {
        return mz.V4W5(this.__wbg_ptr, vv) >>> 0
      }
      Aw() {
        return mz.hQdK(this.__wbg_ptr) >>> 0
      }
      Zw() {
        const vv = mz.ISNh(this.__wbg_ptr);
        if (vv[2]) throw wz(vv[1]);
        return 0 !== vv[0]
      }
      Lw() {
        return mz.XfdE(this.__wbg_ptr) >>> 0
      }
      Hw() {
        return mz.C6vu(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Tv.prototype[Symbol.dispose] = Tv.prototype.free);
    class Wv {
      __destroy_into_raw() {
        const vv = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Mv.unregister(this), vv
      }
      free() {
        const vv = this.__destroy_into_raw();
        mz.W4Lx(vv, 0)
      }
      compute(vv, zv, Pv, hv) {
        var Sv = pz(hv) ? 0 : Wz(hv, mz.U7Ro, mz.Y6dG),
          ev = jz;
        const gv = mz.U7ik(this.__wbg_ptr, vv, pz(zv) ? Number.MAX_SAFE_INTEGER : zv | 0, Pv, Sv, ev);
        if (gv[2]) throw wz(gv[1]);
        return gv[0] >>> 0
      }
      Fw(vv) {
        const zv = Wz(vv, mz.U7Ro, mz.Y6dG),
          Pv = jz;
        mz.VEKQ(this.__wbg_ptr, zv, Pv)
      }
      Rw() {
        return mz.GWqm(this.__wbg_ptr) >>> 0
      }
      xw() {
        return mz.Me7M(this.__wbg_ptr) >>> 0
      }
      Mw(vv) {
        const zv = mz.j0Sl(this.__wbg_ptr, vv);
        if (zv[2]) throw wz(zv[1]);
        return zv[0] >>> 0
      }
      constructor(vv, zv, Pv, hv, Sv, ev) {
        const gv = dz(vv, mz.U7Ro),
          pv = jz,
          dv = Tz(zv, mz.U7Ro),
          Nv = jz,
          lv = Nz(Pv, mz.U7Ro),
          Tv = jz,
          Wv = lz(hv, mz.U7Ro),
          wv = jz,
          av = mz.iYct(gv, pv, dv, Nv, lv, Tv, Wv, wv, Sv, ev);
        if (av[2]) throw wz(av[1]);
        return this.__wbg_ptr = av[0], Mv.register(this, this.__wbg_ptr, this), this
      }
      Aw() {
        return mz.EDbX(this.__wbg_ptr) >>> 0
      }
      Zw() {
        const vv = mz.EEXy(this.__wbg_ptr);
        if (vv[2]) throw wz(vv[1]);
        return 0 !== vv[0]
      }
      Lw() {
        return mz.THmQ(this.__wbg_ptr) >>> 0
      }
    }

    function wv() {
      const vv = mz.QIuP();
      var zv = Ev(vv[0], vv[1]).slice();
      return mz.g27U(vv[0], 4 * vv[1], 4), zv
    }

    function av(vv, zv) {
      let Pv, hv;
      try {
        const Sv = dz(vv, mz.U7Ro),
          ev = jz,
          gv = Wz(zv, mz.U7Ro, mz.Y6dG),
          pv = jz,
          dv = mz.SluM(Sv, ev, gv, pv);
        return Pv = dv[0], hv = dv[1], Xv(dv[0], dv[1])
      } finally {
        mz.g27U(Pv, hv, 1)
      }
    }

    function sv() {
      const vv = mz.JN0d();
      var zv = Ev(vv[0], vv[1]).slice();
      return mz.g27U(vv[0], 4 * vv[1], 4), zv
    }

    function Cv(vv) {
      return 0 !== mz.Mhjb(vv)
    }

    function iv(vv, zv) {
      const Pv = Wz(vv, mz.U7Ro, mz.Y6dG),
        hv = jz,
        Sv = mz.kgrA(Pv, hv, zv);
      if (Sv[1]) throw wz(Sv[0])
    }

    function cv() {
      mz.BjmB()
    }

    function Gv() {
      return mz.pA95() >>> 0
    }

    function mv(vv) {
      return 0 !== mz.R5Yl(vv)
    }

    function jv(vv) {
      return 0 !== mz.gure(vv)
    }

    function fv(vv) {
      mz.Qls7(vv)
    }

    function Fv() {
      return mz.nKlb() >>> 0
    }

    function Yv() {
      return mz.UWLK() >>> 0
    }

    function nv() {
      return 0 !== mz.N9Dt()
    }

    function Ov() {
      const vv = mz.wc4V();
      var zv = Ev(vv[0], vv[1]).slice();
      return mz.g27U(vv[0], 4 * vv[1], 4), zv
    }

    function Dv() {
      const vv = mz.fs3r();
      var zv = Ev(vv[0], vv[1]).slice();
      return mz.g27U(vv[0], 4 * vv[1], 4), zv
    }

    function Kv() {
      const vv = mz.k1Og();
      var zv = Ev(vv[0], vv[1]).slice();
      return mz.g27U(vv[0], 4 * vv[1], 4), zv
    }

    function Vv() {
      return mz.RbAl() >>> 0
    }

    function Uv() {
      mz.w3zu()
    }

    function Rv() {
      let vv, zv;
      try {
        const Pv = mz.Hb0g();
        return vv = Pv[0], zv = Pv[1], Xv(Pv[0], Pv[1])
      } finally {
        mz.g27U(vv, zv, 1)
      }
    }

    function xv(vv) {
      mz.WZDe(yv(vv))
    }

    function tv() {
      return {
        __proto__: null,
        iSKq: {
          __proto__: null,
          KUxe: function(vv, zv) {
            return yv(Error(Xv(vv, zv)))
          },
          Cm5P: function(vv, zv) {
            throw new Error(Xv(vv, zv))
          },
          UeuN: function(vv) {
            Sz(vv).call()
          },
          G9MP: function(vv, zv) {
            console.error(Xv(vv, zv))
          },
          ljFT: function() {
            return performance.now()
          },
          s5UQ: function(vv) {
            wz(vv)
          }
        }
      }
    }
    Symbol.dispose && (Wv.prototype[Symbol.dispose] = Wv.prototype.free);
    const qv = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((vv => mz.Gevw(vv, 1))),
      Iv = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((vv => mz.lVRu(vv, 1))),
      Qv = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((vv => mz.EjMa(vv, 1))),
      Zv = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((vv => mz.nFrC(vv, 1))),
      Av = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((vv => mz.WCiQ(vv, 1))),
      Lv = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((vv => mz.drpF(vv, 1))),
      Hv = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((vv => mz.MTmJ(vv, 1))),
      Mv = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((vv => mz.W4Lx(vv, 1)));

    function yv(vv) {
      gz === ez.length && ez.push(ez.length + 1);
      const zv = gz;
      return gz = ez[zv], ez[zv] = vv, zv
    }

    function Bv(vv, zv) {
      if (!(vv instanceof zv)) throw new Error(`expected instance of ${zv.name}`)
    }

    function Jv(vv, zv) {
      return vv >>>= 0, rv().subarray(vv / 8, vv / 8 + zv)
    }

    function Ev(vv, zv) {
      return vv >>>= 0, zz().subarray(vv / 4, vv / 4 + zv)
    }

    function ov(vv, zv) {
      return vv >>>= 0, hz().subarray(vv / 1, vv / 1 + zv)
    }
    let bv = null;

    function rv() {
      return null !== bv && 0 !== bv.byteLength || (bv = new Float64Array(mz.memory.buffer)), bv
    }
    let kv = null;

    function Xv(vv, zv) {
      return function(vv, zv) {
        Cz += zv, Cz >= sz && (az = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), az.decode(), Cz = zv);
        return az.decode(hz().subarray(vv, vv + zv))
      }(vv >>> 0, zv)
    }
    let uv = null;
    let vz = null;

    function zz() {
      return null !== vz && 0 !== vz.byteLength || (vz = new Uint32Array(mz.memory.buffer)), vz
    }
    let Pz = null;

    function hz() {
      return null !== Pz && 0 !== Pz.byteLength || (Pz = new Uint8Array(mz.memory.buffer)), Pz
    }

    function Sz(vv) {
      return ez[vv]
    }
    let ez = new Array(1024).fill(void 0);
    ez.push(void 0, null, !0, !1);
    let gz = ez.length;

    function pz(vv) {
      return void 0 === vv || null === vv
    }

    function dz(vv, zv) {
      const Pv = zv(2 * vv.length, 2) >>> 0;
      return (null !== uv && 0 !== uv.byteLength || (uv = new Uint16Array(mz.memory.buffer)), uv).set(vv, Pv / 2), jz = vv.length, Pv
    }

    function Nz(vv, zv) {
      const Pv = zv(4 * vv.length, 4) >>> 0;
      return zz().set(vv, Pv / 4), jz = vv.length, Pv
    }

    function lz(vv, zv) {
      const Pv = zv(1 * vv.length, 1) >>> 0;
      return hz().set(vv, Pv / 1), jz = vv.length, Pv
    }

    function Tz(vv, zv) {
      const Pv = zv(8 * vv.length, 8) >>> 0;
      return rv().set(vv, Pv / 8), jz = vv.length, Pv
    }

    function Wz(vv, zv, Pv) {
      if (void 0 === Pv) {
        const Pv = iz.encode(vv),
          hv = zv(Pv.length, 1) >>> 0;
        return hz().subarray(hv, hv + Pv.length).set(Pv), jz = Pv.length, hv
      }
      let hv = vv.length,
        Sv = zv(hv, 1) >>> 0;
      const ev = hz();
      let gv = 0;
      for (; gv < hv; gv++) {
        const zv = vv.charCodeAt(gv);
        if (zv > 127) break;
        ev[Sv + gv] = zv
      }
      if (gv !== hv) {
        0 !== gv && (vv = vv.slice(gv)), Sv = Pv(Sv, hv, hv = gv + 3 * vv.length, 1) >>> 0;
        const zv = hz().subarray(Sv + gv, Sv + hv);
        gv += iz.encodeInto(vv, zv).written, Sv = Pv(Sv, hv, gv, 1) >>> 0
      }
      return jz = gv, Sv
    }

    function wz(vv) {
      const zv = Sz(vv);
      return function(vv) {
        vv < 1028 || (ez[vv] = gz, gz = vv)
      }(vv), zv
    }
    let az = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    az.decode();
    const sz = 2146435072;
    let Cz = 0;
    const iz = new TextEncoder;
    "encodeInto" in iz || (iz.encodeInto = function(vv, zv) {
      const Pv = iz.encode(vv);
      return zv.set(Pv), {
        read: vv.length,
        written: Pv.length
      }
    });
    let cz, Gz, mz, jz = 0;

    function fz(vv, zv) {
      return Gz = vv, mz = vv.exports, cz = zv, bv = null, kv = null, uv = null, vz = null, Pz = null, mz.xUrG(), mz
    }

    function Fz(vv) {
      if (void 0 !== mz) return mz;
      void 0 !== vv && (Object.getPrototypeOf(vv) === Object.prototype ? ({
        module: vv
      } = vv) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const zv = tv();
      vv instanceof WebAssembly.Module || (vv = new WebAssembly.Module(vv));
      return fz(new WebAssembly.Instance(vv, zv), vv)
    }
    async function Yz(vv) {
      if (void 0 !== mz) return mz;
      void 0 !== vv && (Object.getPrototypeOf(vv) === Object.prototype ? ({
        module_or_path: vv
      } = vv) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const zv = tv();
      ("string" === typeof vv || "function" === typeof Request && vv instanceof Request || "function" === typeof URL && vv instanceof URL) && (vv = fetch(vv));
      const {
        instance: Pv,
        module: hv
      } = await async function(vv, zv) {
        if ("function" === typeof Response && vv instanceof Response) {
          if (!vv.ok) throw new Error(`failed to fetch Wasm: ${vv.status} ${vv.statusText} fetching '${vv.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(vv, zv)
          } catch (Pv) {
            if (! function(vv) {
                switch (vv) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(vv.type) || "application/wasm" === vv.headers.get("Content-Type")) throw Pv;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Pv)
          }
          const hv = await vv.arrayBuffer();
          return await WebAssembly.instantiate(hv, zv)
        } {
          const Pv = await WebAssembly.instantiate(vv, zv);
          return Pv instanceof WebAssembly.Instance ? {
            instance: Pv,
            module: vv
          } : Pv
        }
      }(await vv, zv);
      return fz(Pv, hv)
    }
    var nz = Pv(3466),
      Oz = Pv(35885);
    const Dz = {
      name: nz.c,
      url: () => new Pv.U(Pv(35888)),
      init: Yz,
      bindings: hv
    };

    function Kz() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dz,
        zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dz,
        Pv = arguments.length > 2 ? arguments[2] : void 0;
      return (0, Oz.j)(vv, zv, Pv)
    }

    function Vz(vv) {
      return (0, nz.I)((() => vv), hv, Dz)
    }
  },
  35862: (vv, zv, Pv) => {
    function hv(vv, zv) {
      return new Error(`${vv}: ${zv instanceof Error?`${zv.name}: ${zv.message}`:String(zv)}`, {
        cause: zv
      })
    }
    Pv.d(zv, {
      c: () => hv
    })
  },
  35856: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv,
      e: () => dv
    });
    var hv = Pv(3473),
      Sv = Pv(6343),
      ev = Pv(35862);

    function gv() {
      return new URL(new Pv.U(Pv(35869)).href, globalThis.location?.href).href
    }
    let pv = null;

    function dv() {
      return pv ??= (async () => (0, hv.F)(new URL(gv()), (0, Sv.c)("bloxd_wasm_textures")))().catch((vv => {
        throw (0, ev.c)((0, hv.M)(vv), vv)
      })), pv
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);