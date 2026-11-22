export const id = 211;
export const ids = [211, 212];
export const modules = {
  35829: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      CAPPED_COUNTS_VISIT_CAP: () => Sk,
      reportCappedWasmFailure: () => Pk,
      reportUncappedWasmFailure: () => rk,
      reportWasmCrash: () => fk,
      reportWasmFailure: () => bk
    });
    var Dk = ik(2866);

    function fk(kk) {
      (0, Dk.reportClientError)("wasm_load", kk.message, kk.code)
    }
    const Sk = Dk.b - 4;

    function bk(kk, ek, ik) {
      (0, Dk.reportClientError)(kk, ek, ik, !1)
    }

    function rk(kk, ek, ik) {
      (0, Dk.reportClientError)(kk, ek, ik, !1, 1 / 0)
    }

    function Pk(kk, ek, ik) {
      (0, Dk.reportClientError)(kk, ek, ik, !1, Sk)
    }
  },
  35822: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Lk,
      f: () => jk,
      h: () => sk,
      l: () => Ck
    });
    var Dk = ik(35851),
      fk = ik(2821),
      Sk = ik(35866),
      bk = ik(2823),
      rk = ik(35829),
      Pk = ik(2855),
      mk = ik(3194),
      Mk = ik(3190),
      Kk = ik(35836),
      xk = ik(2866),
      nk = ik(35841),
      Uk = ik(35843),
      Hk = ik(3661);
    let wk = !1;
    const lk = 40;
    var pk = ik(672);
    const yk = "bloxdWasmFailureReported";

    function Yk() {
      return "undefined" === typeof WebAssembly
    }

    function Lk() {
      return (0, Dk.d)()
    }

    function Ck() {
      if (Yk()) return "this browser has no WebAssembly";
      const kk = (0, fk.t)();
      return "compile" === kk || "instantiate" === kk ? `the core wasm didn't load here (${(0,fk.k)()})` : null
    }
    async function Ak(kk) {
      return await (0, Sk.d)(Sk.b, void 0, kk)
    }

    function jk() {
      Yk() || (0, pk.d)((() => {
        Ak()
      }))
    }

    function sk() {
      if (Yk()) return async () => ((0, Pk.j)("unsupported", 0), dk("unsupported", "This browser has no WebAssembly"), !1);
      const kk = {
        reloadFailedDownload: !0
      };
      return Ak(kk), async () => {
        var ek;
        const ik = performance.now();
        await Ak(kk);
        const Dk = (performance.now() - ik) / 1e3;
        if ((0, fk.S)()) return (0, Pk.j)("ready", Dk), wk || (wk = !0, (0, fk.Z)((() => {
          if ("call" !== (0, fk.t)()) return;
          const kk = (0, fk.r)(),
            ek = (0, Kk.h)(kk, fk.J, fk.gb),
            ik = (0, fk.A)().buffer.byteLength,
            Dk = (0, Kk.f)(ek.kind, ek.refusedBytes),
            Sk = Dk ? "alloc_failed" : ek.kind,
            bk = (0, nk.k)(ik),
            rk = Dk ? `_r${Math.floor(Math.log2(ek.refusedBytes))}` : "",
            Pk = (0, Hk.e)();
          null === Pk && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const mk = new Error((0, Uk.d)(kk, ik, ek));
          if (kk instanceof Error && void 0 !== kk.stack) {
            const ek = kk.stack.split("\n"),
              ik = ek.length > lk ? [...ek.slice(0, lk / 2), ...ek.slice(-lk / 2)] : ek;
            mk.stack = ik.join("\n")
          }(0, xk.reportClientError)("wasm_load", mk, `wasm_call_${Sk}_${null!==Pk&&void 0!==Pk?Pk:"unnamed"}_m${bk}${rk}`)
        }))), (0, bk.V)(Sk.b.url()) && (0, rk.reportCappedWasmFailure)("wasm_load", mk.d.message, mk.d.code), !0;
        const pk = Mk.d[null !== (ek = (0, fk.t)()) && void 0 !== ek ? ek : "call"];
        return (0, Pk.j)(pk, Dk), dk(pk, (0, fk.k)()), !1
      }
    }

    function dk(kk, ek) {
      (0, Mk.i)(yk, `Bloxd wasm ${kk}, so the game can't start: ${ek}`, ek, kk)
    }
  },
  35887: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/bloxd_wasm_bg.48b33a82574c7dba5df8.wasm"
  },
  35858: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/bloxd_wasm_textures_bg.f53ae115f07fdd6feab3.wasm"
  },
  35873: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      bK: () => Dk,
      EnvelopeKind: () => fk,
      rK: () => Sk,
      PhysicsEngine: () => bk,
      PK: () => rk,
      mK: () => Pk,
      MK: () => mk,
      KK: () => Mk,
      xK: () => Kk,
      nK: () => xk,
      UK: () => nk,
      HK: () => Uk,
      wK: () => Hk,
      lK: () => wk,
      default: () => je,
      initSync: () => Ae,
      pK: () => lk,
      yK: () => pk,
      YK: () => yk,
      LK: () => Yk,
      CK: () => Lk,
      AK: () => Ck,
      jK: () => Ak,
      sK: () => jk,
      dK: () => sk,
      VK: () => dk,
      FK: () => Vk,
      uK: () => Fk,
      qK: () => uk,
      IK: () => qk,
      zK: () => Ik
    });
    class Dk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Qk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        Ye.AfaT(kk, 0)
      }
      QK() {
        const kk = Ye.iXV6(this.__wbg_ptr);
        if (kk[2]) throw ne(kk[1]);
        return kk[0] >>> 0
      }
      vK() {
        return Ye.tNHU(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const kk = Ye.VyPS();
        return this.__wbg_ptr = kk, Qk.register(this, this.__wbg_ptr, this), this
      }
      EK() {
        return Ye.MWXS(this.__wbg_ptr) >>> 0
      }
      hK(kk) {
        const ek = Ye.zPQe(this.__wbg_ptr, kk);
        if (ek[2]) throw ne(ek[1]);
        return ek[0] >>> 0
      }
      aK(kk) {
        const ek = Ye.Jn8C(this.__wbg_ptr, kk);
        if (ek[2]) throw ne(ek[1]);
        return ek[0] >>> 0
      }
    }
    Symbol.dispose && (Dk.prototype[Symbol.dispose] = Dk.prototype.free);
    const fk = Object.freeze({
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
    class Sk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, vk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        Ye.tumD(kk, 0)
      }
      XK(kk, ek) {
        const ik = Ye.ds8B(this.__wbg_ptr, kk, ek);
        if (ik[2]) throw ne(ik[1]);
        return ik[0] >>> 0
      }
      BK(kk) {
        const ek = Ye.mtr2(this.__wbg_ptr, kk);
        if (ek[2]) throw ne(ek[1]);
        return ek[0] >>> 0
      }
      cK() {
        Ye.rzPW(this.__wbg_ptr)
      }
      static TK() {
        return Ye.TKRp() >>> 0
      }
      oK() {
        return Ye.JVZ6(this.__wbg_ptr) >>> 0
      }
      ZK() {
        const kk = Ye.LPjm(this.__wbg_ptr);
        return 0 === kk[0] ? void 0 : kk[1]
      }
      gK() {
        return Ye.Q5fH(this.__wbg_ptr) >>> 0
      }
      GK() {
        return Ye.D0eo(this.__wbg_ptr) >>> 0
      }
      static tK() {
        return Ye.siKk() >>> 0
      }
      constructor() {
        const kk = Ye.tSHD();
        return this.__wbg_ptr = kk, vk.register(this, this.__wbg_ptr, this), this
      }
      NK() {
        return Ye.XlHm(this.__wbg_ptr) >>> 0
      }
      RK() {
        return Ye.SgbT(this.__wbg_ptr) >>> 0
      }
      JK() {
        return Ye.e2XZ(this.__wbg_ptr) >>> 0
      }
      WK(kk) {
        return Ye.wYYa(this.__wbg_ptr, kk) >>> 0
      }
      reserve(kk, ek) {
        const ik = Ye.RMAs(this.__wbg_ptr, kk, ek);
        if (ik[1]) throw ne(ik[0])
      }
      Dx(kk, ek) {
        const ik = me(kk, Ye.VZBX),
          Dk = Le;
        Ye.GTub(this.__wbg_ptr, ik, Dk, ek)
      }
      text() {
        let kk, ek;
        try {
          const ik = Ye.aX7z(this.__wbg_ptr);
          return kk = ik[0], ek = ik[1], Rk(ik[0], ik[1])
        } finally {
          Ye.YmUR(kk, ek, 1)
        }
      }
    }
    Symbol.dispose && (Sk.prototype[Symbol.dispose] = Sk.prototype.free);
    class bk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Ek.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        Ye.JrZq(kk, 0)
      }
      bx(kk, ek) {
        ck(ek, Dk);
        const ik = Ye.aReC(this.__wbg_ptr, kk, ek.__wbg_ptr);
        if (ik[2]) throw ne(ik[1]);
        return ik[0] >>> 0
      }
      mx() {
        const kk = Ye.rlhL(this.__wbg_ptr);
        if (kk[1]) throw ne(kk[0])
      }
      Hx(kk, ek, ik, Dk, fk, Sk, bk, Pk, mk, Mk, Kk) {
        ck(kk, rk);
        const xk = Ye.XVa3(this.__wbg_ptr, kk.__wbg_ptr, ek, ik, Dk, fk, Sk, bk, Pk, mk, Mk, Kk);
        if (xk[2]) throw ne(xk[1]);
        return xk[0]
      }
      wx() {
        const kk = Ye.jL9v(this.__wbg_ptr);
        var ek = Tk(kk[0], kk[1]).slice();
        return Ye.YmUR(kk[0], 8 * kk[1], 8), ek
      }
      lx() {
        return Ye.CT3j(this.__wbg_ptr) >>> 0
      }
      yx() {
        return Ye.twW6(this.__wbg_ptr) >>> 0
      }
      Yx() {
        return Ye.U1iq(this.__wbg_ptr) >>> 0
      }
      constructor(kk, ek, ik, Dk, fk, Sk, bk, rk) {
        const Pk = Ye.NZ5K(kk, ek, ik, Dk, fk, Sk, bk, rk);
        if (Pk[2]) throw ne(Pk[1]);
        return this.__wbg_ptr = Pk[0], Ek.register(this, this.__wbg_ptr, this), this
      }
      Ax(kk) {
        ck(kk, Dk);
        const ek = Ye.Ortg(this.__wbg_ptr, kk.__wbg_ptr);
        if (ek[2]) throw ne(ek[1]);
        return ek[0] >>> 0
      }
      jx(kk) {
        const ek = Ye.S6zT(this.__wbg_ptr, kk);
        if (ek[1]) throw ne(ek[0])
      }
      sx() {
        return Ye.SEny(this.__wbg_ptr) >>> 0
      }
      resume(kk, ek) {
        ck(kk, rk), ck(ek, Dk);
        const ik = Ye.NpeD(this.__wbg_ptr, kk.__wbg_ptr, ek.__wbg_ptr);
        if (ik[2]) throw ne(ik[1]);
        return ik[0] >>> 0
      }
      zx(kk) {
        const ek = Ye.FRM4(this.__wbg_ptr, kk);
        if (ek[1]) throw ne(ek[0])
      }
      Ex(kk, ek) {
        ck(ek, Dk);
        const ik = Ye.Xu8s(this.__wbg_ptr, kk, ek.__wbg_ptr);
        if (ik[1]) throw ne(ik[0])
      }
      tx(kk) {
        const ek = Ke(kk, Ye.VZBX),
          ik = Le,
          Dk = Ye.MCF8(this.__wbg_ptr, ek, ik);
        if (Dk[1]) throw ne(Dk[0])
      }
      Kx(kk, ek, ik, Dk, fk, Sk) {
        const bk = Ye.vsN4(this.__wbg_ptr, kk, ek, ik, Dk, fk, Sk);
        if (bk[1]) throw ne(bk[0])
      }
      nx(kk, ek, ik, Dk) {
        const fk = me(kk, Ye.VZBX),
          Sk = Le,
          bk = Ke(ek, Ye.VZBX),
          rk = Le,
          Pk = Ke(ik, Ye.VZBX),
          mk = Le,
          Mk = Ke(Dk, Ye.VZBX),
          Kk = Le,
          xk = Ye.lVIT(this.__wbg_ptr, fk, Sk, bk, rk, Pk, mk, Mk, Kk);
        if (xk[1]) throw ne(xk[0])
      }
      Bx(kk, ek) {
        ck(ek, Dk);
        const ik = Ye.MzR8(this.__wbg_ptr, kk, ek.__wbg_ptr);
        if (ik[1]) throw ne(ik[0])
      }
      Cx(kk, ek, ik) {
        const Dk = Ye.z2x0(this.__wbg_ptr, kk, ek, ik);
        if (Dk[1]) throw ne(Dk[0])
      }
      Zx(kk, ek, ik, Dk, fk, Sk, bk, Pk, mk, Mk) {
        ck(kk, rk);
        return Ye.FVxW(this.__wbg_ptr, kk.__wbg_ptr, ek, ik, Dk, fk, Sk, bk, Pk, mk, Mk)
      }
    }
    Symbol.dispose && (bk.prototype[Symbol.dispose] = bk.prototype.free);
    class rk {
      static __wrap(kk) {
        const ek = Object.create(rk.prototype);
        return ek.__wbg_ptr = kk, hk.register(ek, ek.__wbg_ptr, ek), ek
      }
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, hk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        Ye.n7gr(kk, 0)
      }
      Gx(kk) {
        const ek = Ye.g5rb(this.__wbg_ptr, kk);
        if (ek[2]) throw ne(ek[1]);
        return ek[0] >>> 0
      }
      Nx(kk, ek, ik) {
        return Ye.j0CZ(this.__wbg_ptr, kk, ek, ik)
      }
      Rx(kk, ek, ik) {
        return Ye.H45n(this.__wbg_ptr, kk, ek, ik) >>> 0
      }
      Jx(kk, ek, ik, Dk) {
        return 0 !== Ye.D861(this.__wbg_ptr, kk, ek, ik, Dk)
      }
      kn() {
        Ye.N3s1(this.__wbg_ptr)
      }
      Dn(kk) {
        const ek = Ye.ebfl(this.__wbg_ptr, kk);
        if (ek[3]) throw ne(ek[2]);
        var ik = Ok(ek[0], ek[1]).slice();
        return Ye.YmUR(ek[0], 1 * ek[1], 1), ik
      }
      evict(kk, ek) {
        return Ye.y2R4(this.__wbg_ptr, kk, ek) >>> 0
      }
      fn() {
        Ye.r60o(this.__wbg_ptr)
      }
      Sn(kk, ek, ik) {
        Ye.IhPN(this.__wbg_ptr, kk, ek, ik)
      }
      bn(kk) {
        const ek = Ye.Tib9(this.__wbg_ptr, kk);
        if (ek[1]) throw ne(ek[0])
      }
      rn() {
        return Ye.DfuR(this.__wbg_ptr) >>> 0
      }
      Pn() {
        return Ye.mtsM(this.__wbg_ptr) >>> 0
      }
      mn(kk, ek, ik) {
        Ye.hPhG(this.__wbg_ptr, kk, ek, ik)
      }
      Mn(kk, ek, ik) {
        Ye.RKMs(this.__wbg_ptr, kk, ek, ik)
      }
      Kn() {
        return Ye.hRtd(this.__wbg_ptr) >>> 0
      }
      xn() {
        return Ye.hcBl(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const kk = Ye.RQyd();
        return this.__wbg_ptr = kk, hk.register(this, this.__wbg_ptr, this), this
      }
      static nn() {
        const kk = Ye.niVi();
        return rk.__wrap(kk)
      }
      Un() {
        return Ye.hJtP(this.__wbg_ptr) >>> 0
      }
      Hn() {
        return Ye.K5HR(this.__wbg_ptr) >>> 0
      }
      pn(kk, ek, ik, Dk) {
        const fk = Ye.wVVU(this.__wbg_ptr, kk, ek, ik, Dk);
        if (fk[1]) throw ne(fk[0])
      }
      yn() {
        return Ye.Z4sM(this.__wbg_ptr) >>> 0
      }
      Yn() {
        return Ye.JuaE(this.__wbg_ptr) >>> 0
      }
      Ln(kk, ek, ik, Dk) {
        Ye.TZTT(this.__wbg_ptr, kk, ek, ik, Dk)
      }
      Cn(kk) {
        Ye.S0Ad(this.__wbg_ptr, kk)
      }
      sn(kk, ek, ik, Dk, fk) {
        const Sk = Me(ek, Ye.VZBX),
          bk = Le,
          rk = me(ik, Ye.VZBX),
          Pk = Le,
          mk = Ke(Dk, Ye.VZBX),
          Mk = Le,
          Kk = Ye.LtqR(this.__wbg_ptr, kk, Sk, bk, rk, Pk, mk, Mk, fk);
        if (Kk[1]) throw ne(Kk[0])
      }
      jn(kk, ek, ik, Dk) {
        const fk = Me(kk, Ye.VZBX),
          Sk = Le,
          bk = me(ek, Ye.VZBX),
          rk = Le,
          Pk = Ke(ik, Ye.VZBX),
          mk = Le,
          Mk = Me(Dk, Ye.VZBX),
          Kk = Le,
          xk = Ye.OzRj(this.__wbg_ptr, fk, Sk, bk, rk, Pk, mk, Mk, Kk);
        if (xk[1]) throw ne(xk[0])
      }
      Qn(kk) {
        const ek = Me(kk, Ye.VZBX),
          ik = Le,
          Dk = Ye.dntW(this.__wbg_ptr, ek, ik);
        if (Dk[1]) throw ne(Dk[0])
      }
      vn() {
        return Ye.bktd(this.__wbg_ptr) >>> 0
      }
      En(kk) {
        const ek = Ye.l6LP(this.__wbg_ptr, kk);
        if (ek[2]) throw ne(ek[1]);
        return ek[0] >>> 0
      }
      steer() {
        return Ye.eagS(this.__wbg_ptr) >>> 0
      }
      hn() {
        const kk = Ye.rKNN(this.__wbg_ptr);
        var ek = Tk(kk[0], kk[1]).slice();
        return Ye.YmUR(kk[0], 8 * kk[1], 8), ek
      }
      Wn() {
        return Ye.AVCL(this.__wbg_ptr) >>> 0
      }
      Fx() {
        const kk = Ye.wg9N(this.__wbg_ptr);
        var ek, ik, Dk = (ek = kk[0], ik = kk[1], ek >>>= 0, (null !== Nk && 0 !== Nk.byteLength || (Nk = new Int32Array(Ye.memory.buffer)), Nk).subarray(ek / 4, ek / 4 + ik)).slice();
        return Ye.YmUR(kk[0], 4 * kk[1], 4), Dk
      }
    }
    Symbol.dispose && (rk.prototype[Symbol.dispose] = rk.prototype.free);
    class Pk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ak.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        Ye.ew3r(kk, 0)
      }
      tn(kk) {
        const ek = me(kk, Ye.VZBX),
          ik = Le,
          Dk = Ye.jeGR(this.__wbg_ptr, ek, ik);
        if (Dk[1]) throw ne(Dk[0])
      }
      Xn() {
        return Ye.FxGP(this.__wbg_ptr) >>> 0
      }
      Bn() {
        return Ye.jC7d(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const kk = Ye.rFZj();
        return this.__wbg_ptr = kk, ak.register(this, this.__wbg_ptr, this), this
      }
      run(kk, ek) {
        ck(kk, rk);
        const ik = Ye.bXMR(this.__wbg_ptr, kk.__wbg_ptr, ek);
        if (ik[2]) throw ne(ik[1]);
        return ik[0] >>> 0
      }
      cn(kk) {
        const ek = me(kk, Ye.VZBX),
          ik = Le;
        Ye.LlcN(this.__wbg_ptr, ek, ik)
      }
      Tn(kk) {
        const ek = me(kk, Ye.VZBX),
          ik = Le;
        Ye.yPs7(this.__wbg_ptr, ek, ik)
      }
    }
    Symbol.dispose && (Pk.prototype[Symbol.dispose] = Pk.prototype.free);
    class mk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Wk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        Ye.DUce(kk, 0)
      }
      gn(kk, ek) {
        const ik = Me(kk, Ye.VZBX),
          Dk = Le;
        return Ye.c5sK(this.__wbg_ptr, ik, Dk, ek) >>> 0
      }
      Gn(kk, ek, ik) {
        ck(kk, rk);
        const Dk = Me(ik, Ye.VZBX),
          fk = Le,
          Sk = Ye.XsVM(this.__wbg_ptr, kk.__wbg_ptr, ek, Dk, fk);
        if (Sk[2]) throw ne(Sk[1]);
        return Sk[0] >>> 0
      }
      Zn(kk) {
        return Ye.PI0I(this.__wbg_ptr, kk) >>> 0
      }
      constructor() {
        const kk = Ye.O8PJ();
        return this.__wbg_ptr = kk, Wk.register(this, this.__wbg_ptr, this), this
      }
      scan(kk, ek) {
        ck(kk, rk);
        const ik = Ye.NgEc(this.__wbg_ptr, kk.__wbg_ptr, ek);
        if (ik[2]) throw ne(ik[1]);
        return ik[0] >>> 0
      }
      Jn(kk) {
        const ek = Me(kk, Ye.VZBX),
          ik = Le;
        Ye.dRIB(this.__wbg_ptr, ek, ik)
      }
      Rn() {
        return Ye.b9fV(this.__wbg_ptr) >>> 0
      }
      Nn() {
        return Ye.vTzy(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (mk.prototype[Symbol.dispose] = mk.prototype.free);
    class Mk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, tk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        Ye.Grnd(kk, 0)
      }
      eU(kk) {
        const ek = Ye.ToZL(this.__wbg_ptr, kk);
        if (ek[2]) throw ne(ek[1]);
        return ek[0] >>> 0
      }
      compute(kk, ek, ik, Dk) {
        var fk = re(Dk) ? 0 : xe(Dk, Ye.VZBX, Ye.GGs5),
          Sk = Le;
        const bk = Ye.zqMq(this.__wbg_ptr, kk, re(ek) ? Number.MAX_SAFE_INTEGER : ek | 0, ik, fk, Sk);
        if (bk[2]) throw ne(bk[1]);
        return bk[0] >>> 0
      }
      DU(kk) {
        const ek = xe(kk, Ye.VZBX, Ye.GGs5),
          ik = Le;
        Ye.C86o(this.__wbg_ptr, ek, ik)
      }
      SU() {
        return Ye.a9wf(this.__wbg_ptr)
      }
      bU(kk) {
        return Ye.Urs3(this.__wbg_ptr, kk) >>> 0
      }
      rU() {
        return Ye.kP6K(this.__wbg_ptr) >>> 0
      }
      PU() {
        return Ye.gCZb(this.__wbg_ptr) >>> 0
      }
      mU(kk, ek) {
        const ik = Ye.KPgQ(this.__wbg_ptr, kk, ek);
        if (ik[1]) throw ne(ik[0])
      }
      MU() {
        return Ye.OZfT(this.__wbg_ptr) >>> 0
      }
      KU() {
        return Ye.OXer(this.__wbg_ptr) >>> 0
      }
      xU() {
        return Ye.kIdy(this.__wbg_ptr) >>> 0
      }
      iU(kk, ek, ik) {
        const Dk = me(kk, Ye.VZBX),
          fk = Le,
          Sk = me(ek, Ye.VZBX),
          bk = Le,
          rk = Ye.s0SS(this.__wbg_ptr, Dk, fk, Sk, bk, ik);
        if (rk[1]) throw ne(rk[0])
      }
      UU() {
        return Ye.byg9(this.__wbg_ptr) >>> 0
      }
      mesh(kk, ek, ik, Dk, fk) {
        const Sk = Ye.XS0Z(this.__wbg_ptr, kk, ek, ik, Dk, fk);
        if (Sk[2]) throw ne(Sk[1]);
        return Sk[0] >>> 0
      }
      constructor(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk, lk, pk, yk) {
        const Yk = Pe(kk, Ye.VZBX),
          Lk = Le,
          Ck = Ke(ek, Ye.VZBX),
          Ak = Le,
          jk = me(ik, Ye.VZBX),
          sk = Le,
          dk = Me(Dk, Ye.VZBX),
          Vk = Le,
          Fk = Me(fk, Ye.VZBX),
          uk = Le,
          qk = me(Sk, Ye.VZBX),
          Ik = Le,
          zk = me(bk, Ye.VZBX),
          Qk = Le,
          vk = Ke(rk, Ye.VZBX),
          Ek = Le,
          hk = Ke(Pk, Ye.VZBX),
          ak = Le,
          Wk = Me(mk, Ye.VZBX),
          Xk = Le;
        var Bk = re(Mk) ? 0 : Pe(Mk, Ye.VZBX),
          ck = Le;
        const Tk = me(Kk, Ye.VZBX),
          Zk = Le,
          Ok = Me(xk, Ye.VZBX),
          gk = Le;
        var Gk = re(nk) ? 0 : Me(nk, Ye.VZBX),
          Nk = Le;
        const Rk = Ke(Uk, Ye.VZBX),
          Jk = Le,
          ke = Ye.IyyQ(Yk, Lk, Ck, Ak, jk, sk, dk, Vk, Fk, uk, qk, Ik, zk, Qk, vk, Ek, hk, ak, Wk, Xk, Bk, ck, Tk, Zk, Ok, gk, Gk, Nk, Rk, Jk, Hk, wk, lk, pk, yk);
        if (ke[2]) throw ne(ke[1]);
        return this.__wbg_ptr = ke[0], tk.register(this, this.__wbg_ptr, this), this
      }
      nU(kk, ek) {
        const ik = me(kk, Ye.VZBX),
          Dk = Le,
          fk = Ye.gbFv(this.__wbg_ptr, ik, Dk, ek);
        if (fk[3]) throw ne(fk[2]);
        var Sk = Ok(fk[0], fk[1]).slice();
        return Ye.YmUR(fk[0], 1 * fk[1], 1), Sk
      }
      HU(kk) {
        Ye.qbgP(this.__wbg_ptr, re(kk) ? 16777215 : kk)
      }
      wU(kk) {
        return Ye.q7GY(this.__wbg_ptr, kk) >>> 0
      }
      pU() {
        return Ye.Cymp(this.__wbg_ptr) >>> 0
      }
      lU() {
        const kk = Ye.GLvy(this.__wbg_ptr);
        if (kk[2]) throw ne(kk[1]);
        return 0 !== kk[0]
      }
      yU() {
        return Ye.OwqV(this.__wbg_ptr) >>> 0
      }
      YU() {
        return Ye.rYTU(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Mk.prototype[Symbol.dispose] = Mk.prototype.free);
    class Kk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Xk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        Ye.VQNk(kk, 0)
      }
      compute(kk, ek, ik, Dk) {
        var fk = re(Dk) ? 0 : xe(Dk, Ye.VZBX, Ye.GGs5),
          Sk = Le;
        const bk = Ye.GXVm(this.__wbg_ptr, kk, re(ek) ? Number.MAX_SAFE_INTEGER : ek | 0, ik, fk, Sk);
        if (bk[2]) throw ne(bk[1]);
        return bk[0] >>> 0
      }
      DU(kk) {
        const ek = xe(kk, Ye.VZBX, Ye.GGs5),
          ik = Le;
        Ye.A2tv(this.__wbg_ptr, ek, ik)
      }
      KU() {
        return Ye.BoMw(this.__wbg_ptr) >>> 0
      }
      xU() {
        return Ye.laj4(this.__wbg_ptr) >>> 0
      }
      LU(kk) {
        const ek = Ye.n5Ez(this.__wbg_ptr, kk);
        if (ek[2]) throw ne(ek[1]);
        return ek[0] >>> 0
      }
      constructor(kk, ek, ik, Dk, fk, Sk) {
        const bk = Pe(kk, Ye.VZBX),
          rk = Le,
          Pk = Ke(ek, Ye.VZBX),
          mk = Le,
          Mk = me(ik, Ye.VZBX),
          Kk = Le,
          xk = Me(Dk, Ye.VZBX),
          nk = Le,
          Uk = Ye.x2OI(bk, rk, Pk, mk, Mk, Kk, xk, nk, fk, Sk);
        if (Uk[2]) throw ne(Uk[1]);
        return this.__wbg_ptr = Uk[0], Xk.register(this, this.__wbg_ptr, this), this
      }
      pU() {
        return Ye.vp1W(this.__wbg_ptr) >>> 0
      }
      lU() {
        const kk = Ye.aTxj(this.__wbg_ptr);
        if (kk[2]) throw ne(kk[1]);
        return 0 !== kk[0]
      }
      yU() {
        return Ye.uB5f(this.__wbg_ptr) >>> 0
      }
    }

    function xk() {
      const kk = Ye.FKJS();
      var ek = Zk(kk[0], kk[1]).slice();
      return Ye.YmUR(kk[0], 4 * kk[1], 4), ek
    }

    function nk(kk, ek) {
      let ik, Dk;
      try {
        const fk = Pe(kk, Ye.VZBX),
          Sk = Le,
          bk = xe(ek, Ye.VZBX, Ye.GGs5),
          rk = Le,
          Pk = Ye.jeIJ(fk, Sk, bk, rk);
        return ik = Pk[0], Dk = Pk[1], Rk(Pk[0], Pk[1])
      } finally {
        Ye.YmUR(ik, Dk, 1)
      }
    }

    function Uk() {
      const kk = Ye.LM59();
      var ek = Zk(kk[0], kk[1]).slice();
      return Ye.YmUR(kk[0], 4 * kk[1], 4), ek
    }

    function Hk(kk) {
      return 0 !== Ye.GvQl(kk)
    }

    function wk(kk, ek) {
      const ik = xe(kk, Ye.VZBX, Ye.GGs5),
        Dk = Le,
        fk = Ye.XYsO(ik, Dk, ek);
      if (fk[1]) throw ne(fk[0])
    }

    function lk() {
      Ye.JCge()
    }

    function pk() {
      return Ye.pK1w() >>> 0
    }

    function yk(kk) {
      return 0 !== Ye.byuw(kk)
    }

    function Yk(kk) {
      return 0 !== Ye.TYtG(kk)
    }

    function Lk(kk) {
      Ye.yqNK(kk)
    }

    function Ck() {
      return Ye.Zvst() >>> 0
    }

    function Ak() {
      return Ye.yS1r() >>> 0
    }

    function jk() {
      return 0 !== Ye.AK9i()
    }

    function sk() {
      const kk = Ye.McrE();
      var ek = Zk(kk[0], kk[1]).slice();
      return Ye.YmUR(kk[0], 4 * kk[1], 4), ek
    }

    function dk() {
      const kk = Ye.GC1R();
      var ek = Zk(kk[0], kk[1]).slice();
      return Ye.YmUR(kk[0], 4 * kk[1], 4), ek
    }

    function Vk() {
      const kk = Ye.T7V6();
      var ek = Zk(kk[0], kk[1]).slice();
      return Ye.YmUR(kk[0], 4 * kk[1], 4), ek
    }

    function Fk() {
      return Ye.jVji() >>> 0
    }

    function uk() {
      Ye.BF8F()
    }

    function qk() {
      let kk, ek;
      try {
        const ik = Ye.d9tS();
        return kk = ik[0], ek = ik[1], Rk(ik[0], ik[1])
      } finally {
        Ye.YmUR(kk, ek, 1)
      }
    }

    function Ik(kk) {
      Ye.OGuX(Bk(kk))
    }

    function zk() {
      return {
        __proto__: null,
        wBUE: {
          __proto__: null,
          lQ7u: function(kk, ek) {
            return Bk(Error(Rk(kk, ek)))
          },
          QyEz: function(kk, ek) {
            throw new Error(Rk(kk, ek))
          },
          rwQM: function(kk) {
            fe(kk).call()
          },
          HiLW: function(kk, ek) {
            console.error(Rk(kk, ek))
          },
          zgE6: function() {
            return performance.now()
          },
          eRmQ: function(kk) {
            ne(kk)
          }
        }
      }
    }
    Symbol.dispose && (Kk.prototype[Symbol.dispose] = Kk.prototype.free);
    const Qk = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => Ye.AfaT(kk, 1))),
      vk = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => Ye.tumD(kk, 1))),
      Ek = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => Ye.JrZq(kk, 1))),
      hk = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => Ye.n7gr(kk, 1))),
      ak = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => Ye.ew3r(kk, 1))),
      Wk = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => Ye.DUce(kk, 1))),
      tk = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => Ye.Grnd(kk, 1))),
      Xk = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => Ye.VQNk(kk, 1)));

    function Bk(kk) {
      be === Se.length && Se.push(Se.length + 1);
      const ek = be;
      return be = Se[ek], Se[ek] = kk, ek
    }

    function ck(kk, ek) {
      if (!(kk instanceof ek)) throw new Error(`expected instance of ${ek.name}`)
    }

    function Tk(kk, ek) {
      return kk >>>= 0, Gk().subarray(kk / 8, kk / 8 + ek)
    }

    function Zk(kk, ek) {
      return kk >>>= 0, ee().subarray(kk / 4, kk / 4 + ek)
    }

    function Ok(kk, ek) {
      return kk >>>= 0, De().subarray(kk / 1, kk / 1 + ek)
    }
    let gk = null;

    function Gk() {
      return null !== gk && 0 !== gk.byteLength || (gk = new Float64Array(Ye.memory.buffer)), gk
    }
    let Nk = null;

    function Rk(kk, ek) {
      return function(kk, ek) {
        we += ek, we >= He && (Ue = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Ue.decode(), we = ek);
        return Ue.decode(De().subarray(kk, kk + ek))
      }(kk >>> 0, ek)
    }
    let Jk = null;
    let ke = null;

    function ee() {
      return null !== ke && 0 !== ke.byteLength || (ke = new Uint32Array(Ye.memory.buffer)), ke
    }
    let ie = null;

    function De() {
      return null !== ie && 0 !== ie.byteLength || (ie = new Uint8Array(Ye.memory.buffer)), ie
    }

    function fe(kk) {
      return Se[kk]
    }
    let Se = new Array(1024).fill(void 0);
    Se.push(void 0, null, !0, !1);
    let be = Se.length;

    function re(kk) {
      return void 0 === kk || null === kk
    }

    function Pe(kk, ek) {
      const ik = ek(2 * kk.length, 2) >>> 0;
      return (null !== Jk && 0 !== Jk.byteLength || (Jk = new Uint16Array(Ye.memory.buffer)), Jk).set(kk, ik / 2), Le = kk.length, ik
    }

    function me(kk, ek) {
      const ik = ek(4 * kk.length, 4) >>> 0;
      return ee().set(kk, ik / 4), Le = kk.length, ik
    }

    function Me(kk, ek) {
      const ik = ek(1 * kk.length, 1) >>> 0;
      return De().set(kk, ik / 1), Le = kk.length, ik
    }

    function Ke(kk, ek) {
      const ik = ek(8 * kk.length, 8) >>> 0;
      return Gk().set(kk, ik / 8), Le = kk.length, ik
    }

    function xe(kk, ek, ik) {
      if (void 0 === ik) {
        const ik = le.encode(kk),
          Dk = ek(ik.length, 1) >>> 0;
        return De().subarray(Dk, Dk + ik.length).set(ik), Le = ik.length, Dk
      }
      let Dk = kk.length,
        fk = ek(Dk, 1) >>> 0;
      const Sk = De();
      let bk = 0;
      for (; bk < Dk; bk++) {
        const ek = kk.charCodeAt(bk);
        if (ek > 127) break;
        Sk[fk + bk] = ek
      }
      if (bk !== Dk) {
        0 !== bk && (kk = kk.slice(bk)), fk = ik(fk, Dk, Dk = bk + 3 * kk.length, 1) >>> 0;
        const ek = De().subarray(fk + bk, fk + Dk);
        bk += le.encodeInto(kk, ek).written, fk = ik(fk, Dk, bk, 1) >>> 0
      }
      return Le = bk, fk
    }

    function ne(kk) {
      const ek = fe(kk);
      return function(kk) {
        kk < 1028 || (Se[kk] = be, be = kk)
      }(kk), ek
    }
    let Ue = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Ue.decode();
    const He = 2146435072;
    let we = 0;
    const le = new TextEncoder;
    "encodeInto" in le || (le.encodeInto = function(kk, ek) {
      const ik = le.encode(kk);
      return ek.set(ik), {
        read: kk.length,
        written: ik.length
      }
    });
    let pe, ye, Ye, Le = 0;

    function Ce(kk, ek) {
      return ye = kk, Ye = kk.exports, pe = ek, gk = null, Nk = null, Jk = null, ke = null, ie = null, Ye.Kum7(), Ye
    }

    function Ae(kk) {
      if (void 0 !== Ye) return Ye;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module: kk
      } = kk) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ek = zk();
      kk instanceof WebAssembly.Module || (kk = new WebAssembly.Module(kk));
      return Ce(new WebAssembly.Instance(kk, ek), kk)
    }
    async function je(kk) {
      if (void 0 !== Ye) return Ye;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module_or_path: kk
      } = kk) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ek = zk();
      ("string" === typeof kk || "function" === typeof Request && kk instanceof Request || "function" === typeof URL && kk instanceof URL) && (kk = fetch(kk));
      const {
        instance: ik,
        module: Dk
      } = await async function(kk, ek) {
        if ("function" === typeof Response && kk instanceof Response) {
          if (!kk.ok) throw new Error(`failed to fetch Wasm: ${kk.status} ${kk.statusText} fetching '${kk.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(kk, ek)
          } catch (ik) {
            if (! function(kk) {
                switch (kk) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(kk.type) || "application/wasm" === kk.headers.get("Content-Type")) throw ik;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ik)
          }
          const Dk = await kk.arrayBuffer();
          return await WebAssembly.instantiate(Dk, ek)
        } {
          const ik = await WebAssembly.instantiate(kk, ek);
          return ik instanceof WebAssembly.Instance ? {
            instance: ik,
            module: kk
          } : ik
        }
      }(await kk, ek);
      return Ce(ik, Dk)
    }
  },
  35866: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk,
      d: () => rk,
      e: () => Pk
    });
    var Dk = ik(35873),
      fk = ik(2821),
      Sk = ik(35878);
    const bk = {
      name: fk.e,
      url: () => new ik.U(ik(35887)),
      init: Dk.default,
      bindings: Dk
    };

    function rk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk,
        ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bk,
        ik = arguments.length > 2 ? arguments[2] : void 0;
      return (0, Sk.j)(kk, ek, ik)
    }

    function Pk(kk) {
      return (0, fk.N)((() => kk), Dk, bk)
    }
  },
  35853: (kk, ek, ik) => {
    function Dk(kk, ek) {
      return new Error(`${kk}: ${ek instanceof Error?`${ek.name}: ${ek.message}`:String(ek)}`, {
        cause: ek
      })
    }
    ik.d(ek, {
      d: () => Dk
    })
  },
  35851: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk,
      d: () => Pk
    });
    var Dk = ik(2823),
      fk = ik(6459),
      Sk = ik(35853);

    function bk() {
      return new URL(new ik.U(ik(35858)).href, globalThis.location?.href).href
    }
    let rk = null;

    function Pk() {
      return rk ??= (async () => (0, Dk.I)(new URL(bk()), (0, fk.d)("bloxd_wasm_textures")))().catch((kk => {
        throw (0, Sk.d)((0, Dk.N)(kk), kk)
      })), rk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);