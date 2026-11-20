export const id = 206;
export const ids = [206, 207];
export const modules = {
  36003: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      reportCappedWasmFailure: () => Xk,
      reportWasmFailure: () => ak
    });
    var Rk = Bk(3037);
    const tk = Rk.c - 4;

    function ak(kk, Fk, Bk) {
      (0, Rk.g)(kk, Fk, Bk, !1)
    }

    function Xk(kk, Fk, Bk) {
      (0, Rk.g)(kk, Fk, Bk, !1, tk)
    }
  },
  35996: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ik,
      f: () => Ok,
      h: () => Ek,
      l: () => Yk
    });
    var Rk = Bk(36025),
      tk = Bk(3502),
      ak = Bk(36043),
      Xk = Bk(3506),
      bk = Bk(36003),
      wk = Bk(2745),
      dk = Bk(3052),
      sk = Bk(3029),
      Vk = Bk(36011),
      Jk = Bk(3037),
      Ak = Bk(36019),
      ek = Bk(3495);
    let yk = !1;
    const fk = 40;
    var mk = Bk(672);
    const Wk = "bloxdWasmFailureReported";

    function vk() {
      return "undefined" === typeof WebAssembly
    }

    function ik() {
      return (0, Rk.e)()
    }

    function Yk() {
      if (vk()) return "this browser has no WebAssembly";
      const kk = (0, tk.i)();
      return "compile" === kk || "instantiate" === kk ? `the core wasm didn't load here (${(0,tk.e)()})` : null
    }
    async function Lk(kk) {
      return await (0, ak.g)(ak.c, void 0, kk)
    }

    function Ok() {
      vk() || (0, mk.e)((() => {
        Lk()
      }))
    }

    function Ek() {
      if (vk()) return async () => ((0, wk.j)("unsupported", 0), Sk("unsupported", "This browser has no WebAssembly"), !1);
      const kk = {
        reloadFailedDownload: !0
      };
      return Lk(kk), async () => {
        var Fk;
        const Bk = performance.now();
        await Lk(kk);
        const Rk = (performance.now() - Bk) / 1e3;
        if ((0, tk.N)()) return (0, wk.j)("ready", Rk), yk || (yk = !0, (0, tk.T)((() => {
          if ("call" !== (0, tk.i)()) return;
          const kk = (0, tk.g)(),
            Fk = (0, Vk.j)(kk, tk.C, tk.Z),
            Bk = (0, tk.p)().buffer.byteLength,
            Rk = (0, Vk.e)(Fk.kind, Fk.refusedBytes),
            ak = Rk ? "alloc_failed" : Fk.kind,
            Xk = 2 ** Math.floor(Math.log2(Math.max(1, Bk / 2 ** 20))),
            bk = Rk ? `_r${Math.floor(Math.log2(Fk.refusedBytes))}` : "",
            wk = (0, ek.d)();
          null === wk && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const dk = new Error((0, Ak.e)(kk, Bk, Fk));
          if (kk instanceof Error && void 0 !== kk.stack) {
            const Fk = kk.stack.split("\n"),
              Bk = Fk.length > fk ? [...Fk.slice(0, fk / 2), ...Fk.slice(-fk / 2)] : Fk;
            dk.stack = Bk.join("\n")
          }(0, Jk.g)("wasm_load", dk, `wasm_call_${ak}_${null!==wk&&void 0!==wk?wk:"unnamed"}_m${Xk}${bk}`)
        }))), (0, Xk.T)(ak.c.url()) && (0, bk.reportCappedWasmFailure)("wasm_load", dk.b.message, dk.b.code), !0;
        const mk = sk.e[null !== (Fk = (0, tk.i)()) && void 0 !== Fk ? Fk : "call"];
        return (0, wk.j)(mk, Rk), Sk(mk, (0, tk.e)()), !1
      }
    }

    function Sk(kk, Fk) {
      (0, sk.i)(Wk, `Bloxd wasm ${kk}, so the game can't start: ${Fk}`, Fk, kk)
    }
  },
  36048: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/bloxd_wasm_bg.81c29ee852313fd2ec29.wasm"
  },
  36039: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/bloxd_wasm_textures_bg.6d93a3e9494be0739d0f.wasm"
  },
  36043: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => HF,
      g: () => uF,
      h: () => MF
    });
    var Rk = {};
    Bk.r(Rk), Bk.d(Rk, {
      mV: () => tk,
      EnvelopeKind: () => ak,
      WV: () => Xk,
      PhysicsEngine: () => bk,
      vV: () => wk,
      iV: () => dk,
      YV: () => sk,
      oV: () => Vk,
      LV: () => Jk,
      OV: () => Ak,
      EV: () => ek,
      SV: () => yk,
      NV: () => fk,
      HV: () => mk,
      default: () => EF,
      initSync: () => OF,
      uV: () => Wk,
      MV: () => vk,
      gV: () => ik,
      UV: () => Yk,
      cV: () => Lk,
      GV: () => Ok,
      TV: () => Ek,
      rV: () => Sk,
      DV: () => Nk,
      zV: () => Hk,
      PV: () => uk,
      hV: () => Mk,
      qV: () => gk,
      CV: () => Uk,
      ZV: () => ck
    });
    class tk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Tk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        YF.PDDg(kk, 0)
      }
      pV() {
        const kk = YF.TgHt(this.__wbg_ptr);
        if (kk[2]) throw eF(kk[1]);
        return kk[0] >>> 0
      }
      KV() {
        return YF.tWq5(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const kk = YF.Z4Pd();
        return this.__wbg_ptr = kk, Tk.register(this, this.__wbg_ptr, this), this
      }
      xV() {
        return YF.alsd(this.__wbg_ptr) >>> 0
      }
      jV(kk) {
        const Fk = YF.x0pZ(this.__wbg_ptr, kk);
        if (Fk[2]) throw eF(Fk[1]);
        return Fk[0] >>> 0
      }
      lV(kk) {
        const Fk = YF.xUVs(this.__wbg_ptr, kk);
        if (Fk[2]) throw eF(Fk[1]);
        return Fk[0] >>> 0
      }
    }
    Symbol.dispose && (tk.prototype[Symbol.dispose] = tk.prototype.free);
    const ak = Object.freeze({
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
    class Xk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, rk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        YF.ShgV(kk, 0)
      }
      QV(kk, Fk) {
        const Bk = YF.luSB(this.__wbg_ptr, kk, Fk);
        if (Bk[2]) throw eF(Bk[1]);
        return Bk[0] >>> 0
      }
      kJ(kk) {
        const Fk = YF.nbLy(this.__wbg_ptr, kk);
        if (Fk[2]) throw eF(Fk[1]);
        return Fk[0] >>> 0
      }
      FJ() {
        YF.b6rz(this.__wbg_ptr)
      }
      static BJ() {
        return YF.x0oW() >>> 0
      }
      RJ() {
        return YF.QboB(this.__wbg_ptr) >>> 0
      }
      tJ() {
        const kk = YF.qkfE(this.__wbg_ptr);
        return 0 === kk[0] ? void 0 : kk[1]
      }
      aJ() {
        return YF.nWNS(this.__wbg_ptr) >>> 0
      }
      XJ() {
        return YF.CKBp(this.__wbg_ptr) >>> 0
      }
      static IV() {
        return YF.QCdR() >>> 0
      }
      constructor() {
        const kk = YF.Y7NZ();
        return this.__wbg_ptr = kk, rk.register(this, this.__wbg_ptr, this), this
      }
      bJ() {
        return YF.CPkq(this.__wbg_ptr) >>> 0
      }
      wJ() {
        return YF.I2aj(this.__wbg_ptr) >>> 0
      }
      dJ() {
        return YF.qzDl(this.__wbg_ptr) >>> 0
      }
      nV(kk) {
        return YF.Hntk(this.__wbg_ptr, kk) >>> 0
      }
      reserve(kk, Fk) {
        const Bk = YF.Nw4Y(this.__wbg_ptr, kk, Fk);
        if (Bk[1]) throw eF(Bk[0])
      }
      JJ(kk, Fk) {
        const Bk = sF(kk, YF.HS6a),
          Rk = oF;
        YF.U8Qp(this.__wbg_ptr, Bk, Rk, Fk)
      }
      text() {
        let kk, Fk;
        try {
          const Bk = YF.aneW(this.__wbg_ptr);
          return kk = Bk[0], Fk = Bk[1], Qk(Bk[0], Bk[1])
        } finally {
          YF.ur3r(kk, Fk, 1)
        }
      }
    }
    Symbol.dispose && (Xk.prototype[Symbol.dispose] = Xk.prototype.free);
    class bk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Dk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        YF.YQCn(kk, 0)
      }
      eJ(kk, Fk) {
        pk(Fk, tk);
        const Bk = YF.niBJ(this.__wbg_ptr, kk, Fk.__wbg_ptr);
        if (Bk[2]) throw eF(Bk[1]);
        return Bk[0] >>> 0
      }
      fJ() {
        const kk = YF.TII5(this.__wbg_ptr);
        if (kk[1]) throw eF(kk[0])
      }
      YJ(kk, Fk, Bk, Rk, tk, ak, Xk, bk, dk, sk, Vk) {
        pk(kk, wk);
        const Jk = YF.T8pI(this.__wbg_ptr, kk.__wbg_ptr, Fk, Bk, Rk, tk, ak, Xk, bk, dk, sk, Vk);
        if (Jk[2]) throw eF(Jk[1]);
        return Jk[0]
      }
      oJ() {
        const kk = YF.bUME(this.__wbg_ptr);
        var Fk = Kk(kk[0], kk[1]).slice();
        return YF.ur3r(kk[0], 8 * kk[1], 8), Fk
      }
      LJ() {
        return YF.vCRI(this.__wbg_ptr) >>> 0
      }
      OJ() {
        return YF.dD7u(this.__wbg_ptr) >>> 0
      }
      EJ() {
        return YF.LBZD(this.__wbg_ptr) >>> 0
      }
      constructor(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
        const wk = YF.d3sl(kk, Fk, Bk, Rk, tk, ak, Xk, bk);
        if (wk[2]) throw eF(wk[1]);
        return this.__wbg_ptr = wk[0], Dk.register(this, this.__wbg_ptr, this), this
      }
      HJ(kk) {
        pk(kk, tk);
        const Fk = YF.scsW(this.__wbg_ptr, kk.__wbg_ptr);
        if (Fk[2]) throw eF(Fk[1]);
        return Fk[0] >>> 0
      }
      uJ(kk) {
        const Fk = YF.ugkF(this.__wbg_ptr, kk);
        if (Fk[1]) throw eF(Fk[0])
      }
      MJ() {
        return YF.HWnh(this.__wbg_ptr) >>> 0
      }
      resume(kk, Fk) {
        pk(kk, wk), pk(Fk, tk);
        const Bk = YF.yWGE(this.__wbg_ptr, kk.__wbg_ptr, Fk.__wbg_ptr);
        if (Bk[2]) throw eF(Bk[1]);
        return Bk[0] >>> 0
      }
      TJ(kk) {
        const Fk = YF.mN7K(this.__wbg_ptr, kk);
        if (Fk[1]) throw eF(Fk[0])
      }
      zJ(kk, Fk) {
        pk(Fk, tk);
        const Bk = YF.cD5F(this.__wbg_ptr, kk, Fk.__wbg_ptr);
        if (Bk[1]) throw eF(Bk[0])
      }
      qJ(kk) {
        const Fk = JF(kk, YF.HS6a),
          Bk = oF,
          Rk = YF.sZRG(this.__wbg_ptr, Fk, Bk);
        if (Rk[1]) throw eF(Rk[0])
      }
      WJ(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = YF.neha(this.__wbg_ptr, kk, Fk, Bk, Rk, tk, ak);
        if (Xk[1]) throw eF(Xk[0])
      }
      vJ(kk, Fk, Bk, Rk) {
        const tk = sF(kk, YF.HS6a),
          ak = oF,
          Xk = JF(Fk, YF.HS6a),
          bk = oF,
          wk = JF(Bk, YF.HS6a),
          dk = oF,
          sk = JF(Rk, YF.HS6a),
          Vk = oF,
          Jk = YF.gltz(this.__wbg_ptr, tk, ak, Xk, bk, wk, dk, sk, Vk);
        if (Jk[1]) throw eF(Jk[0])
      }
      ZJ(kk, Fk) {
        pk(Fk, tk);
        const Bk = YF.fLLI(this.__wbg_ptr, kk, Fk.__wbg_ptr);
        if (Bk[1]) throw eF(Bk[0])
      }
      NJ(kk, Fk, Bk) {
        const Rk = YF.B96s(this.__wbg_ptr, kk, Fk, Bk);
        if (Rk[1]) throw eF(Rk[0])
      }
      KJ(kk, Fk, Bk, Rk, tk, ak, Xk, bk, dk, sk) {
        pk(kk, wk);
        return YF.jDys(this.__wbg_ptr, kk.__wbg_ptr, Fk, Bk, Rk, tk, ak, Xk, bk, dk, sk)
      }
    }
    Symbol.dispose && (bk.prototype[Symbol.dispose] = bk.prototype.free);
    class wk {
      static __wrap(kk) {
        const Fk = Object.create(wk.prototype);
        return Fk.__wbg_ptr = kk, zk.register(Fk, Fk.__wbg_ptr, Fk), Fk
      }
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, zk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        YF.AmsD(kk, 0)
      }
      lJ(kk) {
        const Fk = YF.zRza(this.__wbg_ptr, kk);
        if (Fk[2]) throw eF(Fk[1]);
        return Fk[0] >>> 0
      }
      nJ(kk, Fk, Bk) {
        return YF.OguB(this.__wbg_ptr, kk, Fk, Bk)
      }
      IJ(kk, Fk, Bk) {
        return YF.Cd3z(this.__wbg_ptr, kk, Fk, Bk) >>> 0
      }
      QJ(kk, Fk, Bk, Rk) {
        return 0 !== YF.OS9Z(this.__wbg_ptr, kk, Fk, Bk, Rk)
      }
      kA() {
        YF.uwd3(this.__wbg_ptr)
      }
      BA(kk) {
        const Fk = YF.feo8(this.__wbg_ptr, kk);
        if (Fk[3]) throw eF(Fk[2]);
        var Bk = jk(Fk[0], Fk[1]).slice();
        return YF.ur3r(Fk[0], 1 * Fk[1], 1), Bk
      }
      evict(kk, Fk) {
        return YF.Wy4U(this.__wbg_ptr, kk, Fk) >>> 0
      }
      RA() {
        YF.RMa3(this.__wbg_ptr)
      }
      tA(kk, Fk, Bk) {
        YF.IAhZ(this.__wbg_ptr, kk, Fk, Bk)
      }
      aA(kk) {
        const Fk = YF.pY7t(this.__wbg_ptr, kk);
        if (Fk[1]) throw eF(Fk[0])
      }
      XA() {
        return YF.Uozh(this.__wbg_ptr) >>> 0
      }
      bA() {
        return YF.lORC(this.__wbg_ptr) >>> 0
      }
      wA(kk, Fk, Bk) {
        YF.Z9dR(this.__wbg_ptr, kk, Fk, Bk)
      }
      dA(kk, Fk, Bk) {
        YF.Z5es(this.__wbg_ptr, kk, Fk, Bk)
      }
      sA() {
        return YF.XGpQ(this.__wbg_ptr) >>> 0
      }
      VA() {
        return YF.HAxn(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const kk = YF.ZBSR();
        return this.__wbg_ptr = kk, zk.register(this, this.__wbg_ptr, this), this
      }
      static JA() {
        const kk = YF.dHyn();
        return wk.__wrap(kk)
      }
      AA() {
        return YF.yIJ6(this.__wbg_ptr) >>> 0
      }
      eA() {
        return YF.RnBh(this.__wbg_ptr) >>> 0
      }
      yA(kk, Fk, Bk, Rk) {
        const tk = YF.O2al(this.__wbg_ptr, kk, Fk, Bk, Rk);
        if (tk[1]) throw eF(tk[0])
      }
      fA() {
        return YF.MhYK(this.__wbg_ptr) >>> 0
      }
      mA() {
        return YF.Strv(this.__wbg_ptr) >>> 0
      }
      WA(kk, Fk, Bk, Rk) {
        YF.PmYU(this.__wbg_ptr, kk, Fk, Bk, Rk)
      }
      vA(kk) {
        YF.l3hG(this.__wbg_ptr, kk)
      }
      YA(kk, Fk, Bk, Rk, tk) {
        const ak = VF(Fk, YF.HS6a),
          Xk = oF,
          bk = sF(Bk, YF.HS6a),
          wk = oF,
          dk = JF(Rk, YF.HS6a),
          sk = oF,
          Vk = YF.XGzD(this.__wbg_ptr, kk, ak, Xk, bk, wk, dk, sk, tk);
        if (Vk[1]) throw eF(Vk[0])
      }
      iA(kk, Fk, Bk, Rk) {
        const tk = VF(kk, YF.HS6a),
          ak = oF,
          Xk = sF(Fk, YF.HS6a),
          bk = oF,
          wk = JF(Bk, YF.HS6a),
          dk = oF,
          sk = VF(Rk, YF.HS6a),
          Vk = oF,
          Jk = YF.kOiL(this.__wbg_ptr, tk, ak, Xk, bk, wk, dk, sk, Vk);
        if (Jk[1]) throw eF(Jk[0])
      }
      NA(kk) {
        const Fk = VF(kk, YF.HS6a),
          Bk = oF,
          Rk = YF.QCRh(this.__wbg_ptr, Fk, Bk);
        if (Rk[1]) throw eF(Rk[0])
      }
      HA() {
        return YF.aday(this.__wbg_ptr) >>> 0
      }
      uA(kk) {
        const Fk = YF.rhqp(this.__wbg_ptr, kk);
        if (Fk[2]) throw eF(Fk[1]);
        return Fk[0] >>> 0
      }
      steer() {
        return YF.s9Fz(this.__wbg_ptr) >>> 0
      }
      MA() {
        const kk = YF.XVw5(this.__wbg_ptr);
        var Fk = Kk(kk[0], kk[1]).slice();
        return YF.ur3r(kk[0], 8 * kk[1], 8), Fk
      }
      gA() {
        return YF.r7Du(this.__wbg_ptr) >>> 0
      }
      UJ() {
        const kk = YF.SYeT(this.__wbg_ptr);
        var Fk, Bk, Rk = (Fk = kk[0], Bk = kk[1], Fk >>>= 0, (null !== Ik && 0 !== Ik.byteLength || (Ik = new Int32Array(YF.memory.buffer)), Ik).subarray(Fk / 4, Fk / 4 + Bk)).slice();
        return YF.ur3r(kk[0], 4 * kk[1], 4), Rk
      }
    }
    Symbol.dispose && (wk.prototype[Symbol.dispose] = wk.prototype.free);
    class dk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Pk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        YF.VuKe(kk, 0)
      }
      UA(kk) {
        const Fk = sF(kk, YF.HS6a),
          Bk = oF,
          Rk = YF.mJid(this.__wbg_ptr, Fk, Bk);
        if (Rk[1]) throw eF(Rk[0])
      }
      cA() {
        return YF.oJ5E(this.__wbg_ptr) >>> 0
      }
      TA() {
        return YF.u1xS(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const kk = YF.HSDK();
        return this.__wbg_ptr = kk, Pk.register(this, this.__wbg_ptr, this), this
      }
      run(kk, Fk) {
        pk(kk, wk);
        const Bk = YF.iSa9(this.__wbg_ptr, kk.__wbg_ptr, Fk);
        if (Bk[2]) throw eF(Bk[1]);
        return Bk[0] >>> 0
      }
      rA(kk) {
        const Fk = sF(kk, YF.HS6a),
          Bk = oF;
        YF.wI6b(this.__wbg_ptr, Fk, Bk)
      }
      DA(kk) {
        const Fk = sF(kk, YF.HS6a),
          Bk = oF;
        YF.KMGD(this.__wbg_ptr, Fk, Bk)
      }
    }
    Symbol.dispose && (dk.prototype[Symbol.dispose] = dk.prototype.free);
    class sk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, hk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        YF.jHX3(kk, 0)
      }
      PA(kk, Fk) {
        const Bk = VF(kk, YF.HS6a),
          Rk = oF;
        return YF.HKPr(this.__wbg_ptr, Bk, Rk, Fk) >>> 0
      }
      hA(kk, Fk, Bk) {
        pk(kk, wk);
        const Rk = VF(Bk, YF.HS6a),
          tk = oF,
          ak = YF.dc0X(this.__wbg_ptr, kk.__wbg_ptr, Fk, Rk, tk);
        if (ak[2]) throw eF(ak[1]);
        return ak[0] >>> 0
      }
      zA(kk) {
        return YF.Y9Sd(this.__wbg_ptr, kk) >>> 0
      }
      constructor() {
        const kk = YF.Kezp();
        return this.__wbg_ptr = kk, hk.register(this, this.__wbg_ptr, this), this
      }
      scan(kk, Fk) {
        pk(kk, wk);
        const Bk = YF.AoR2(this.__wbg_ptr, kk.__wbg_ptr, Fk);
        if (Bk[2]) throw eF(Bk[1]);
        return Bk[0] >>> 0
      }
      ZA(kk) {
        const Fk = VF(kk, YF.HS6a),
          Bk = oF;
        YF.rdyd(this.__wbg_ptr, Fk, Bk)
      }
      CA() {
        return YF.XrBy(this.__wbg_ptr) >>> 0
      }
      qA() {
        return YF.EDde(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (sk.prototype[Symbol.dispose] = sk.prototype.free);
    class Vk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, qk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        YF.HUIC(kk, 0)
      }
      KA(kk) {
        const Fk = YF.dLin(this.__wbg_ptr, kk);
        if (Fk[2]) throw eF(Fk[1]);
        return Fk[0] >>> 0
      }
      compute(kk, Fk, Bk, Rk) {
        var tk = wF(Rk) ? 0 : AF(Rk, YF.HS6a, YF.ZvfG),
          ak = oF;
        const Xk = YF.kdmn(this.__wbg_ptr, kk, wF(Fk) ? Number.MAX_SAFE_INTEGER : Fk | 0, Bk, tk, ak);
        if (Xk[2]) throw eF(Xk[1]);
        return Xk[0] >>> 0
      }
      jA(kk) {
        const Fk = AF(kk, YF.HS6a, YF.ZvfG),
          Bk = oF;
        YF.Rt6c(this.__wbg_ptr, Fk, Bk)
      }
      nA() {
        return YF.ys1g(this.__wbg_ptr)
      }
      IA(kk) {
        return YF.J0dr(this.__wbg_ptr, kk) >>> 0
      }
      QA() {
        return YF.Fstg(this.__wbg_ptr) >>> 0
      }
      ke() {
        return YF.vYdt(this.__wbg_ptr) >>> 0
      }
      Fe(kk, Fk) {
        const Bk = YF.s4y4(this.__wbg_ptr, kk, Fk);
        if (Bk[1]) throw eF(Bk[0])
      }
      Be() {
        return YF.moAM(this.__wbg_ptr) >>> 0
      }
      te() {
        return YF.ns3s(this.__wbg_ptr) >>> 0
      }
      ae() {
        return YF.Ntfm(this.__wbg_ptr) >>> 0
      }
      xA(kk, Fk, Bk) {
        const Rk = sF(kk, YF.HS6a),
          tk = oF,
          ak = sF(Fk, YF.HS6a),
          Xk = oF,
          bk = YF.FLsB(this.__wbg_ptr, Rk, tk, ak, Xk, Bk);
        if (bk[1]) throw eF(bk[0])
      }
      de() {
        return YF.Rt77(this.__wbg_ptr) >>> 0
      }
      mesh(kk, Fk, Bk, Rk, tk) {
        const ak = YF.BmGh(this.__wbg_ptr, kk, Fk, Bk, Rk, tk);
        if (ak[2]) throw eF(ak[1]);
        return ak[0] >>> 0
      }
      constructor(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk, Vk, Jk, Ak, ek, yk, fk, mk, Wk, vk) {
        const ik = dF(kk, YF.HS6a),
          Yk = oF,
          Lk = JF(Fk, YF.HS6a),
          Ok = oF,
          Ek = sF(Bk, YF.HS6a),
          Sk = oF,
          Nk = VF(Rk, YF.HS6a),
          Hk = oF,
          uk = VF(tk, YF.HS6a),
          Mk = oF,
          gk = sF(ak, YF.HS6a),
          Uk = oF,
          ck = sF(Xk, YF.HS6a),
          Gk = oF,
          Tk = JF(bk, YF.HS6a),
          rk = oF,
          Dk = JF(wk, YF.HS6a),
          zk = oF,
          Pk = VF(dk, YF.HS6a),
          hk = oF;
        var Ck = wF(sk) ? 0 : dF(sk, YF.HS6a),
          Zk = oF;
        const pk = sF(Vk, YF.HS6a),
          Kk = oF,
          xk = VF(Jk, YF.HS6a),
          jk = oF;
        var lk = wF(Ak) ? 0 : VF(Ak, YF.HS6a),
          nk = oF;
        const Ik = JF(ek, YF.HS6a),
          Qk = oF,
          kF = YF.aF87(ik, Yk, Lk, Ok, Ek, Sk, Nk, Hk, uk, Mk, gk, Uk, ck, Gk, Tk, rk, Dk, zk, Pk, hk, Ck, Zk, pk, Kk, xk, jk, lk, nk, Ik, Qk, yk, fk, mk, Wk, vk);
        if (kF[2]) throw eF(kF[1]);
        return this.__wbg_ptr = kF[0], qk.register(this, this.__wbg_ptr, this), this
      }
      Xe(kk, Fk) {
        const Bk = sF(kk, YF.HS6a),
          Rk = oF,
          tk = YF.P8TB(this.__wbg_ptr, Bk, Rk, Fk);
        if (tk[3]) throw eF(tk[2]);
        var ak = jk(tk[0], tk[1]).slice();
        return YF.ur3r(tk[0], 1 * tk[1], 1), ak
      }
      se(kk) {
        YF.B33Z(this.__wbg_ptr, wF(kk) ? 16777215 : kk)
      }
      Ve(kk) {
        return YF.ynvJ(this.__wbg_ptr, kk) >>> 0
      }
      Ae() {
        return YF.gri3(this.__wbg_ptr) >>> 0
      }
      Je() {
        const kk = YF.A5Es(this.__wbg_ptr);
        if (kk[2]) throw eF(kk[1]);
        return 0 !== kk[0]
      }
      ee() {
        return YF.Lbho(this.__wbg_ptr) >>> 0
      }
      ye() {
        return YF.lidJ(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Vk.prototype[Symbol.dispose] = Vk.prototype.free);
    class Jk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Ck.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        YF.WPah(kk, 0)
      }
      compute(kk, Fk, Bk, Rk) {
        var tk = wF(Rk) ? 0 : AF(Rk, YF.HS6a, YF.ZvfG),
          ak = oF;
        const Xk = YF.ioyO(this.__wbg_ptr, kk, wF(Fk) ? Number.MAX_SAFE_INTEGER : Fk | 0, Bk, tk, ak);
        if (Xk[2]) throw eF(Xk[1]);
        return Xk[0] >>> 0
      }
      jA(kk) {
        const Fk = AF(kk, YF.HS6a, YF.ZvfG),
          Bk = oF;
        YF.zhWQ(this.__wbg_ptr, Fk, Bk)
      }
      te() {
        return YF.OOT8(this.__wbg_ptr) >>> 0
      }
      ae() {
        return YF.SkIs(this.__wbg_ptr) >>> 0
      }
      fe(kk) {
        const Fk = YF.Q0DP(this.__wbg_ptr, kk);
        if (Fk[2]) throw eF(Fk[1]);
        return Fk[0] >>> 0
      }
      constructor(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = dF(kk, YF.HS6a),
          bk = oF,
          wk = JF(Fk, YF.HS6a),
          dk = oF,
          sk = sF(Bk, YF.HS6a),
          Vk = oF,
          Jk = VF(Rk, YF.HS6a),
          Ak = oF,
          ek = YF.v8bs(Xk, bk, wk, dk, sk, Vk, Jk, Ak, tk, ak);
        if (ek[2]) throw eF(ek[1]);
        return this.__wbg_ptr = ek[0], Ck.register(this, this.__wbg_ptr, this), this
      }
      Ae() {
        return YF.LjnE(this.__wbg_ptr) >>> 0
      }
      Je() {
        const kk = YF.mrfN(this.__wbg_ptr);
        if (kk[2]) throw eF(kk[1]);
        return 0 !== kk[0]
      }
      ee() {
        return YF.YuJO(this.__wbg_ptr) >>> 0
      }
    }

    function Ak() {
      const kk = YF.F9vG();
      var Fk = xk(kk[0], kk[1]).slice();
      return YF.ur3r(kk[0], 4 * kk[1], 4), Fk
    }

    function ek(kk, Fk) {
      let Bk, Rk;
      try {
        const tk = dF(kk, YF.HS6a),
          ak = oF,
          Xk = AF(Fk, YF.HS6a, YF.ZvfG),
          bk = oF,
          wk = YF.V1QL(tk, ak, Xk, bk);
        return Bk = wk[0], Rk = wk[1], Qk(wk[0], wk[1])
      } finally {
        YF.ur3r(Bk, Rk, 1)
      }
    }

    function yk() {
      const kk = YF.sfpj();
      var Fk = xk(kk[0], kk[1]).slice();
      return YF.ur3r(kk[0], 4 * kk[1], 4), Fk
    }

    function fk(kk) {
      return 0 !== YF.ViYZ(kk)
    }

    function mk(kk, Fk) {
      const Bk = AF(kk, YF.HS6a, YF.ZvfG),
        Rk = oF,
        tk = YF.ghCT(Bk, Rk, Fk);
      if (tk[1]) throw eF(tk[0])
    }

    function Wk() {
      YF.gD03()
    }

    function vk() {
      return YF.ZJDT() >>> 0
    }

    function ik(kk) {
      return 0 !== YF.DUZr(kk)
    }

    function Yk(kk) {
      return 0 !== YF.DDWU(kk)
    }

    function Lk(kk) {
      YF.LaOB(kk)
    }

    function Ok() {
      return YF.at0o() >>> 0
    }

    function Ek() {
      return YF.BpZM() >>> 0
    }

    function Sk() {
      return 0 !== YF.S7Vd()
    }

    function Nk() {
      const kk = YF.UgyX();
      var Fk = xk(kk[0], kk[1]).slice();
      return YF.ur3r(kk[0], 4 * kk[1], 4), Fk
    }

    function Hk() {
      const kk = YF.IGE0();
      var Fk = xk(kk[0], kk[1]).slice();
      return YF.ur3r(kk[0], 4 * kk[1], 4), Fk
    }

    function uk() {
      const kk = YF.MTCP();
      var Fk = xk(kk[0], kk[1]).slice();
      return YF.ur3r(kk[0], 4 * kk[1], 4), Fk
    }

    function Mk() {
      return YF.spTp() >>> 0
    }

    function gk() {
      YF.oPZo()
    }

    function Uk() {
      let kk, Fk;
      try {
        const Bk = YF.z6Ry();
        return kk = Bk[0], Fk = Bk[1], Qk(Bk[0], Bk[1])
      } finally {
        YF.ur3r(kk, Fk, 1)
      }
    }

    function ck(kk) {
      YF.gbTg(Zk(kk))
    }

    function Gk() {
      return {
        __proto__: null,
        fevT: {
          __proto__: null,
          p7rS: function(kk, Fk) {
            return Zk(Error(Qk(kk, Fk)))
          },
          NnWO: function(kk, Fk) {
            throw new Error(Qk(kk, Fk))
          },
          KbUW: function(kk) {
            aF(kk).call()
          },
          lAL8: function(kk, Fk) {
            console.error(Qk(kk, Fk))
          },
          rUW1: function() {
            return performance.now()
          },
          uX8k: function(kk) {
            eF(kk)
          }
        }
      }
    }
    Symbol.dispose && (Jk.prototype[Symbol.dispose] = Jk.prototype.free);
    const Tk = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => YF.PDDg(kk, 1))),
      rk = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => YF.ShgV(kk, 1))),
      Dk = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => YF.YQCn(kk, 1))),
      zk = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => YF.AmsD(kk, 1))),
      Pk = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => YF.VuKe(kk, 1))),
      hk = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => YF.jHX3(kk, 1))),
      qk = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => YF.HUIC(kk, 1))),
      Ck = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => YF.WPah(kk, 1)));

    function Zk(kk) {
      bF === XF.length && XF.push(XF.length + 1);
      const Fk = bF;
      return bF = XF[Fk], XF[Fk] = kk, Fk
    }

    function pk(kk, Fk) {
      if (!(kk instanceof Fk)) throw new Error(`expected instance of ${Fk.name}`)
    }

    function Kk(kk, Fk) {
      return kk >>>= 0, nk().subarray(kk / 8, kk / 8 + Fk)
    }

    function xk(kk, Fk) {
      return kk >>>= 0, BF().subarray(kk / 4, kk / 4 + Fk)
    }

    function jk(kk, Fk) {
      return kk >>>= 0, tF().subarray(kk / 1, kk / 1 + Fk)
    }
    let lk = null;

    function nk() {
      return null !== lk && 0 !== lk.byteLength || (lk = new Float64Array(YF.memory.buffer)), lk
    }
    let Ik = null;

    function Qk(kk, Fk) {
      return function(kk, Fk) {
        mF += Fk, mF >= fF && (yF = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), yF.decode(), mF = Fk);
        return yF.decode(tF().subarray(kk, kk + Fk))
      }(kk >>> 0, Fk)
    }
    let kF = null;
    let FF = null;

    function BF() {
      return null !== FF && 0 !== FF.byteLength || (FF = new Uint32Array(YF.memory.buffer)), FF
    }
    let RF = null;

    function tF() {
      return null !== RF && 0 !== RF.byteLength || (RF = new Uint8Array(YF.memory.buffer)), RF
    }

    function aF(kk) {
      return XF[kk]
    }
    let XF = new Array(1024).fill(void 0);
    XF.push(void 0, null, !0, !1);
    let bF = XF.length;

    function wF(kk) {
      return void 0 === kk || null === kk
    }

    function dF(kk, Fk) {
      const Bk = Fk(2 * kk.length, 2) >>> 0;
      return (null !== kF && 0 !== kF.byteLength || (kF = new Uint16Array(YF.memory.buffer)), kF).set(kk, Bk / 2), oF = kk.length, Bk
    }

    function sF(kk, Fk) {
      const Bk = Fk(4 * kk.length, 4) >>> 0;
      return BF().set(kk, Bk / 4), oF = kk.length, Bk
    }

    function VF(kk, Fk) {
      const Bk = Fk(1 * kk.length, 1) >>> 0;
      return tF().set(kk, Bk / 1), oF = kk.length, Bk
    }

    function JF(kk, Fk) {
      const Bk = Fk(8 * kk.length, 8) >>> 0;
      return nk().set(kk, Bk / 8), oF = kk.length, Bk
    }

    function AF(kk, Fk, Bk) {
      if (void 0 === Bk) {
        const Bk = WF.encode(kk),
          Rk = Fk(Bk.length, 1) >>> 0;
        return tF().subarray(Rk, Rk + Bk.length).set(Bk), oF = Bk.length, Rk
      }
      let Rk = kk.length,
        tk = Fk(Rk, 1) >>> 0;
      const ak = tF();
      let Xk = 0;
      for (; Xk < Rk; Xk++) {
        const Fk = kk.charCodeAt(Xk);
        if (Fk > 127) break;
        ak[tk + Xk] = Fk
      }
      if (Xk !== Rk) {
        0 !== Xk && (kk = kk.slice(Xk)), tk = Bk(tk, Rk, Rk = Xk + 3 * kk.length, 1) >>> 0;
        const Fk = tF().subarray(tk + Xk, tk + Rk);
        Xk += WF.encodeInto(kk, Fk).written, tk = Bk(tk, Rk, Xk, 1) >>> 0
      }
      return oF = Xk, tk
    }

    function eF(kk) {
      const Fk = aF(kk);
      return function(kk) {
        kk < 1028 || (XF[kk] = bF, bF = kk)
      }(kk), Fk
    }
    let yF = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    yF.decode();
    const fF = 2146435072;
    let mF = 0;
    const WF = new TextEncoder;
    "encodeInto" in WF || (WF.encodeInto = function(kk, Fk) {
      const Bk = WF.encode(kk);
      return Fk.set(Bk), {
        read: kk.length,
        written: Bk.length
      }
    });
    let vF, iF, YF, oF = 0;

    function LF(kk, Fk) {
      return iF = kk, YF = kk.exports, vF = Fk, lk = null, Ik = null, kF = null, FF = null, RF = null, YF.ClOp(), YF
    }

    function OF(kk) {
      if (void 0 !== YF) return YF;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module: kk
      } = kk) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Fk = Gk();
      kk instanceof WebAssembly.Module || (kk = new WebAssembly.Module(kk));
      return LF(new WebAssembly.Instance(kk, Fk), kk)
    }
    async function EF(kk) {
      if (void 0 !== YF) return YF;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module_or_path: kk
      } = kk) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Fk = Gk();
      ("string" === typeof kk || "function" === typeof Request && kk instanceof Request || "function" === typeof URL && kk instanceof URL) && (kk = fetch(kk));
      const {
        instance: Bk,
        module: Rk
      } = await async function(kk, Fk) {
        if ("function" === typeof Response && kk instanceof Response) {
          if (!kk.ok) throw new Error(`failed to fetch Wasm: ${kk.status} ${kk.statusText} fetching '${kk.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(kk, Fk)
          } catch (Bk) {
            if (! function(kk) {
                switch (kk) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(kk.type) || "application/wasm" === kk.headers.get("Content-Type")) throw Bk;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Bk)
          }
          const Rk = await kk.arrayBuffer();
          return await WebAssembly.instantiate(Rk, Fk)
        } {
          const Bk = await WebAssembly.instantiate(kk, Fk);
          return Bk instanceof WebAssembly.Instance ? {
            instance: Bk,
            module: kk
          } : Bk
        }
      }(await kk, Fk);
      return LF(Bk, Rk)
    }
    var SF = Bk(3502),
      NF = Bk(36046);
    const HF = {
      name: SF.b,
      url: () => new Bk.U(Bk(36048)),
      init: EF,
      bindings: Rk
    };

    function uF() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HF,
        Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HF,
        Bk = arguments.length > 2 ? arguments[2] : void 0;
      return (0, NF.f)(kk, Fk, Bk)
    }

    function MF(kk) {
      return (0, SF.G)((() => kk), Rk, HF)
    }
  },
  36033: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      return new Error(`${kk}: ${Fk instanceof Error?`${Fk.name}: ${Fk.message}`:String(Fk)}`, {
        cause: Fk
      })
    }
    Bk.d(Fk, {
      c: () => Rk
    })
  },
  36025: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Xk,
      e: () => wk
    });
    var Rk = Bk(3506),
      tk = Bk(6325),
      ak = Bk(36033);

    function Xk() {
      return new URL(new Bk.U(Bk(36039)).href, globalThis.location?.href).href
    }
    let bk = null;

    function wk() {
      return bk ??= (async () => (0, Rk.J)(new URL(Xk()), (0, tk.d)("bloxd_wasm_textures")))().catch((kk => {
        throw (0, ak.c)((0, Rk.P)(kk), kk)
      })), bk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);