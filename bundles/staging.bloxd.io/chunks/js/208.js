export const id = 208;
export const ids = [208, 209];
export const modules = {
  36230: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      CAPPED_COUNTS_VISIT_CAP: () => ik,
      reportCappedWasmFailure: () => ak,
      reportUncappedWasmFailure: () => lk,
      reportWasmCrash: () => Tk,
      reportWasmFailure: () => yk
    });
    var Xk = Ik(2852);

    function Tk(kk) {
      (0, Xk.reportClientError)("wasm_load", kk.message, kk.code)
    }
    const ik = Xk.c - 4;

    function yk(kk, Fk, Ik) {
      (0, Xk.reportClientError)(kk, Fk, Ik, !1)
    }

    function lk(kk, Fk, Ik) {
      (0, Xk.reportClientError)(kk, Fk, Ik, !1, 1 / 0)
    }

    function ak(kk, Fk, Ik) {
      (0, Xk.reportClientError)(kk, Fk, Ik, !1, ik)
    }
  },
  36224: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Qk,
      g: () => zk,
      k: () => Sk,
      l: () => sk
    });
    var Xk = Ik(36257),
      Tk = Ik(2801),
      ik = Ik(36279),
      yk = Ik(2803),
      lk = Ik(36230),
      ak = Ik(2841),
      qk = Ik(3161),
      Lk = Ik(3157),
      tk = Ik(36236),
      Zk = Ik(2852),
      jk = Ik(36245),
      ek = Ik(36249),
      wk = Ik(3652);
    let Hk = !1;
    const Jk = 40;
    var xk = Ik(718);
    const Pk = "bloxdWasmFailureReported";

    function Kk() {
      return "undefined" === typeof WebAssembly
    }

    function Qk() {
      return (0, Xk.g)()
    }

    function sk() {
      if (Kk()) return "this browser has no WebAssembly";
      const kk = (0, Tk.n)();
      return "compile" === kk || "instantiate" === kk ? `the core wasm didn't load here (${(0,Tk.k)()})` : null
    }
    async function Vk(kk) {
      return await (0, ik.f)(ik.e, void 0, kk)
    }

    function zk() {
      Kk() || (0, xk.b)((() => {
        Vk()
      }))
    }

    function Sk() {
      if (Kk()) return async () => ((0, ak.i)("unsupported", 0), vk("unsupported", "This browser has no WebAssembly"), !1);
      const kk = {
        reloadFailedDownload: !0
      };
      return Vk(kk), async () => {
        var Fk;
        const Ik = performance.now();
        await Vk(kk);
        const Xk = (performance.now() - Ik) / 1e3;
        if ((0, Tk.K)()) return (0, ak.i)("ready", Xk), Hk || (Hk = !0, (0, Tk.N)((() => {
          if ("call" !== (0, Tk.n)()) return;
          const kk = (0, Tk.m)(),
            Fk = (0, tk.m)(kk, Tk.A, Tk.S),
            Ik = (0, Tk.r)().buffer.byteLength,
            Xk = (0, tk.g)(Fk.kind, Fk.refusedBytes),
            ik = Xk ? "alloc_failed" : Fk.kind,
            yk = (0, jk.k)(Ik),
            lk = Xk ? `_r${Math.floor(Math.log2(Fk.refusedBytes))}` : "",
            ak = (0, wk.d)();
          null === ak && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const qk = new Error((0, ek.c)(kk, Ik, Fk));
          if (kk instanceof Error && void 0 !== kk.stack) {
            const Fk = kk.stack.split("\n"),
              Ik = Fk.length > Jk ? [...Fk.slice(0, Jk / 2), ...Fk.slice(-Jk / 2)] : Fk;
            qk.stack = Ik.join("\n")
          }(0, Zk.reportClientError)("wasm_load", qk, `wasm_call_${ik}_${null!==ak&&void 0!==ak?ak:"unnamed"}_m${yk}${lk}`)
        }))), (0, yk.R)(ik.e.url()) && (0, lk.reportCappedWasmFailure)("wasm_load", qk.d.message, qk.d.code), !0;
        const xk = Lk.c[null !== (Fk = (0, Tk.n)()) && void 0 !== Fk ? Fk : "call"];
        return (0, ak.i)(xk, Xk), vk(xk, (0, Tk.k)()), !1
      }
    }

    function vk(kk, Fk) {
      (0, Lk.j)(Pk, `Bloxd wasm ${kk}, so the game can't start: ${Fk}`, Fk, kk)
    }
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
  36302: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/bloxd_wasm_bg.cfe04a1f3812df687db1.wasm"
  },
  36270: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/bloxd_wasm_textures_bg.e617a2ed0a23d0e58e22.wasm"
  },
  36288: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      AL: () => Xk,
      EnvelopeKind: () => Tk,
      gL: () => ik,
      PhysicsEngine: () => yk,
      mL: () => lk,
      hL: () => ak,
      rL: () => qk,
      DL: () => Lk,
      ML: () => tk,
      kt: () => Zk,
      Ft: () => jk,
      Xt: () => ek,
      Tt: () => wk,
      yt: () => Hk,
      default: () => zF,
      initSync: () => VF,
      lt: () => Jk,
      qt: () => xk,
      Lt: () => Pk,
      tt: () => Kk,
      Zt: () => Qk,
      jt: () => sk,
      et: () => Vk,
      wt: () => zk,
      Ht: () => Sk,
      Jt: () => vk,
      xt: () => Ek,
      Pt: () => Ok,
      Kt: () => nk,
      Qt: () => Gk,
      Vt: () => pk
    });
    class Xk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, bk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        KF.WOZt(kk, 0)
      }
      zt() {
        const kk = KF.Hagx(this.__wbg_ptr);
        if (kk[2]) throw jF(kk[1]);
        return kk[0] >>> 0
      }
      St() {
        return KF.yspy(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const kk = KF.OomQ();
        return this.__wbg_ptr = kk, bk.register(this, this.__wbg_ptr, this), this
      }
      ot() {
        return KF.bqlG(this.__wbg_ptr) >>> 0
      }
      vt(kk) {
        const Fk = KF.BNFE(this.__wbg_ptr, kk);
        if (Fk[2]) throw jF(Fk[1]);
        return Fk[0] >>> 0
      }
      Et(kk) {
        const Fk = KF.Bcnk(this.__wbg_ptr, kk);
        if (Fk[2]) throw jF(Fk[1]);
        return Fk[0] >>> 0
      }
    }
    Symbol.dispose && (Xk.prototype[Symbol.dispose] = Xk.prototype.free);
    const Tk = Object.freeze({
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
    class ik {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Rk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        KF.Ir5k(kk, 0)
      }
      Gt(kk, Fk) {
        const Ik = KF.LF2H(this.__wbg_ptr, kk, Fk);
        if (Ik[2]) throw jF(Ik[1]);
        return Ik[0] >>> 0
      }
      ut(kk) {
        const Fk = KF.ncRh(this.__wbg_ptr, kk);
        if (Fk[2]) throw jF(Fk[1]);
        return Fk[0] >>> 0
      }
      bt() {
        KF.zQPT(this.__wbg_ptr)
      }
      static Rt() {
        return KF.PBHB() >>> 0
      }
      Ut() {
        return KF.ukBn(this.__wbg_ptr) >>> 0
      }
      Ct() {
        const kk = KF.ZRbE(this.__wbg_ptr);
        return 0 === kk[0] ? void 0 : kk[1]
      }
      Nt() {
        return KF.njVG(this.__wbg_ptr) >>> 0
      }
      ct() {
        return KF.QT29(this.__wbg_ptr) >>> 0
      }
      static nt() {
        return KF.xNKH() >>> 0
      }
      constructor() {
        const kk = KF.BVFI();
        return this.__wbg_ptr = kk, Rk.register(this, this.__wbg_ptr, this), this
      }
      Wt() {
        return KF.SdMH(this.__wbg_ptr) >>> 0
      }
      ft() {
        return KF.e1wk(this.__wbg_ptr) >>> 0
      }
      Bt() {
        return KF.wx9j(this.__wbg_ptr) >>> 0
      }
      Ot(kk) {
        return KF.kLYT(this.__wbg_ptr, kk) >>> 0
      }
      reserve(kk, Fk) {
        const Ik = KF.WRTq(this.__wbg_ptr, kk, Fk);
        if (Ik[1]) throw jF(Ik[0])
      }
      gt(kk, Fk) {
        const Ik = qF(kk, KF.c0zx),
          Xk = QF;
        KF.w5kE(this.__wbg_ptr, Ik, Xk, Fk)
      }
      text() {
        let kk, Fk;
        try {
          const Ik = KF.RLDw(this.__wbg_ptr);
          return kk = Ik[0], Fk = Ik[1], Dk(Ik[0], Ik[1])
        } finally {
          KF.NsFb(kk, Fk, 1)
        }
      }
    }
    Symbol.dispose && (ik.prototype[Symbol.dispose] = ik.prototype.free);
    class yk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Uk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        KF.yGua(kk, 0)
      }
      rt(kk, Fk) {
        dk(Fk, Xk);
        const Ik = KF.J61o(this.__wbg_ptr, kk, Fk.__wbg_ptr);
        if (Ik[2]) throw jF(Ik[1]);
        return Ik[0] >>> 0
      }
      Mt() {
        const kk = KF.Q9kz(this.__wbg_ptr);
        if (kk[1]) throw jF(kk[0])
      }
      TZ(kk, Fk, Ik, Xk, Tk, ik, yk, ak, qk, Lk, tk) {
        dk(kk, lk);
        const Zk = KF.tYE5(this.__wbg_ptr, kk.__wbg_ptr, Fk, Ik, Xk, Tk, ik, yk, ak, qk, Lk, tk);
        if (Zk[2]) throw jF(Zk[1]);
        return Zk[0]
      }
      iZ() {
        const kk = KF.inwU(this.__wbg_ptr);
        var Fk = Yk(kk[0], kk[1]).slice();
        return KF.NsFb(kk[0], 8 * kk[1], 8), Fk
      }
      yZ() {
        return KF.S090(this.__wbg_ptr) >>> 0
      }
      lZ() {
        return KF.Aydn(this.__wbg_ptr) >>> 0
      }
      aZ() {
        return KF.naCW(this.__wbg_ptr) >>> 0
      }
      constructor(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
        const ak = KF.w0uX(kk, Fk, Ik, Xk, Tk, ik, yk, lk);
        if (ak[2]) throw jF(ak[1]);
        return this.__wbg_ptr = ak[0], Uk.register(this, this.__wbg_ptr, this), this
      }
      tZ(kk) {
        dk(kk, Xk);
        const Fk = KF.TbNu(this.__wbg_ptr, kk.__wbg_ptr);
        if (Fk[2]) throw jF(Fk[1]);
        return Fk[0] >>> 0
      }
      ZZ(kk) {
        const Fk = KF.lOiH(this.__wbg_ptr, kk);
        if (Fk[1]) throw jF(Fk[0])
      }
      jZ() {
        return KF.EI88(this.__wbg_ptr) >>> 0
      }
      resume(kk, Fk) {
        dk(kk, lk), dk(Fk, Xk);
        const Ik = KF.BF2U(this.__wbg_ptr, kk.__wbg_ptr, Fk.__wbg_ptr);
        if (Ik[2]) throw jF(Ik[1]);
        return Ik[0] >>> 0
      }
      xZ(kk) {
        const Fk = KF.eWKg(this.__wbg_ptr, kk);
        if (Fk[1]) throw jF(Fk[0])
      }
      QZ(kk, Fk) {
        dk(Fk, Xk);
        const Ik = KF.Axnh(this.__wbg_ptr, kk, Fk.__wbg_ptr);
        if (Ik[1]) throw jF(Ik[0])
      }
      zZ(kk) {
        const Fk = tF(kk, KF.c0zx),
          Ik = QF,
          Xk = KF.Q7qu(this.__wbg_ptr, Fk, Ik);
        if (Xk[1]) throw jF(Xk[0])
      }
      FZ(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = KF.gOrH(this.__wbg_ptr, kk, Fk, Ik, Xk, Tk, ik);
        if (yk[1]) throw jF(yk[0])
      }
      IZ(kk, Fk, Ik, Xk) {
        const Tk = qF(kk, KF.c0zx),
          ik = QF,
          yk = tF(Fk, KF.c0zx),
          lk = QF,
          ak = tF(Ik, KF.c0zx),
          qk = QF,
          Lk = tF(Xk, KF.c0zx),
          tk = QF,
          Zk = KF.qW8P(this.__wbg_ptr, Tk, ik, yk, lk, ak, qk, Lk, tk);
        if (Zk[1]) throw jF(Zk[0])
      }
      oZ(kk, Fk) {
        dk(Fk, Xk);
        const Ik = KF.ZaPW(this.__wbg_ptr, kk, Fk.__wbg_ptr);
        if (Ik[1]) throw jF(Ik[0])
      }
      LZ(kk, Fk, Ik) {
        const Xk = KF.Iy3n(this.__wbg_ptr, kk, Fk, Ik);
        if (Xk[1]) throw jF(Xk[0])
      }
      EZ(kk, Fk, Ik, Xk, Tk, ik, yk, ak, qk, Lk) {
        dk(kk, lk);
        return KF.ezpK(this.__wbg_ptr, kk.__wbg_ptr, Fk, Ik, Xk, Tk, ik, yk, ak, qk, Lk)
      }
    }
    Symbol.dispose && (yk.prototype[Symbol.dispose] = yk.prototype.free);
    class lk {
      static __wrap(kk) {
        const Fk = Object.create(lk.prototype);
        return Fk.__wbg_ptr = kk, Ck.register(Fk, Fk.__wbg_ptr, Fk), Fk
      }
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Ck.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        KF.t4NP(kk, 0)
      }
      pZ(kk) {
        const Fk = KF.BQle(this.__wbg_ptr, kk);
        if (Fk[2]) throw jF(Fk[1]);
        return Fk[0] >>> 0
      }
      uZ(kk, Fk, Ik) {
        return KF.Ke8t(this.__wbg_ptr, kk, Fk, Ik)
      }
      bZ(kk, Fk, Ik) {
        return KF.yXy4(this.__wbg_ptr, kk, Fk, Ik) >>> 0
      }
      RZ(kk, Fk, Ik, Xk) {
        return 0 !== KF.j6bF(this.__wbg_ptr, kk, Fk, Ik, Xk)
      }
      UZ() {
        KF.q9YD(this.__wbg_ptr)
      }
      NZ(kk) {
        const Fk = KF.Fqjg(this.__wbg_ptr, kk);
        if (Fk[3]) throw jF(Fk[2]);
        var Ik = gk(Fk[0], Fk[1]).slice();
        return KF.NsFb(Fk[0], 1 * Fk[1], 1), Ik
      }
      evict(kk, Fk) {
        return KF.x4Lm(this.__wbg_ptr, kk, Fk) >>> 0
      }
      cZ() {
        KF.cmws(this.__wbg_ptr)
      }
      WZ(kk, Fk, Ik) {
        KF.KwCr(this.__wbg_ptr, kk, Fk, Ik)
      }
      fZ(kk) {
        const Fk = KF.J41n(this.__wbg_ptr, kk);
        if (Fk[1]) throw jF(Fk[0])
      }
      BZ() {
        return KF.vHlK(this.__wbg_ptr) >>> 0
      }
      dZ() {
        return KF.HoJY(this.__wbg_ptr) >>> 0
      }
      YZ(kk, Fk, Ik) {
        KF.bhaB(this.__wbg_ptr, kk, Fk, Ik)
      }
      AZ(kk, Fk, Ik) {
        KF.N5qb(this.__wbg_ptr, kk, Fk, Ik)
      }
      gZ() {
        return KF.vBOm(this.__wbg_ptr) >>> 0
      }
      mZ() {
        return KF.D6iK(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const kk = KF.aznP();
        return this.__wbg_ptr = kk, Ck.register(this, this.__wbg_ptr, this), this
      }
      static hZ() {
        const kk = KF.PTRJ();
        return lk.__wrap(kk)
      }
      rZ() {
        return KF.hTXO(this.__wbg_ptr) >>> 0
      }
      DZ() {
        return KF.XUq1(this.__wbg_ptr) >>> 0
      }
      MZ(kk, Fk, Ik, Xk) {
        const Tk = KF.Pwaf(this.__wbg_ptr, kk, Fk, Ik, Xk);
        if (Tk[1]) throw jF(Tk[0])
      }
      kj() {
        return KF.vUep(this.__wbg_ptr) >>> 0
      }
      Fj() {
        return KF.sIcK(this.__wbg_ptr) >>> 0
      }
      Ij(kk, Fk, Ik, Xk) {
        KF.hf8Q(this.__wbg_ptr, kk, Fk, Ik, Xk)
      }
      Xj(kk) {
        KF.I3WL(this.__wbg_ptr, kk)
      }
      ij(kk, Fk, Ik, Xk, Tk) {
        const ik = LF(Fk, KF.c0zx),
          yk = QF,
          lk = qF(Ik, KF.c0zx),
          ak = QF,
          qk = tF(Xk, KF.c0zx),
          Lk = QF,
          tk = KF.JS5u(this.__wbg_ptr, kk, ik, yk, lk, ak, qk, Lk, Tk);
        if (tk[1]) throw jF(tk[0])
      }
      Tj(kk, Fk, Ik, Xk) {
        const Tk = LF(kk, KF.c0zx),
          ik = QF,
          yk = qF(Fk, KF.c0zx),
          lk = QF,
          ak = tF(Ik, KF.c0zx),
          qk = QF,
          Lk = LF(Xk, KF.c0zx),
          tk = QF,
          Zk = KF.IDWb(this.__wbg_ptr, Tk, ik, yk, lk, ak, qk, Lk, tk);
        if (Zk[1]) throw jF(Zk[0])
      }
      tj(kk) {
        const Fk = LF(kk, KF.c0zx),
          Ik = QF,
          Xk = KF.YFOo(this.__wbg_ptr, Fk, Ik);
        if (Xk[1]) throw jF(Xk[0])
      }
      Zj() {
        return KF.x2aF(this.__wbg_ptr) >>> 0
      }
      jj(kk) {
        const Fk = KF.qObR(this.__wbg_ptr, kk);
        if (Fk[2]) throw jF(Fk[1]);
        return Fk[0] >>> 0
      }
      steer() {
        return KF.NF62(this.__wbg_ptr) >>> 0
      }
      ej() {
        const kk = KF.G6Zu(this.__wbg_ptr);
        var Fk = Yk(kk[0], kk[1]).slice();
        return KF.NsFb(kk[0], 8 * kk[1], 8), Fk
      }
      wj() {
        return KF.m2r8(this.__wbg_ptr) >>> 0
      }
      wZ() {
        const kk = KF.IZVi(this.__wbg_ptr);
        var Fk, Ik, Xk = (Fk = kk[0], Ik = kk[1], Fk >>>= 0, (null !== rk && 0 !== rk.byteLength || (rk = new Int32Array(KF.memory.buffer)), rk).subarray(Fk / 4, Fk / 4 + Ik)).slice();
        return KF.NsFb(kk[0], 4 * kk[1], 4), Xk
      }
    }
    Symbol.dispose && (lk.prototype[Symbol.dispose] = lk.prototype.free);
    class ak {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Nk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        KF.e2ff(kk, 0)
      }
      Hj(kk) {
        const Fk = qF(kk, KF.c0zx),
          Ik = QF,
          Xk = KF.JxIu(this.__wbg_ptr, Fk, Ik);
        if (Xk[1]) throw jF(Xk[0])
      }
      Jj() {
        return KF.BZPf(this.__wbg_ptr) >>> 0
      }
      xj() {
        return KF.y3ui(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const kk = KF.xbqC();
        return this.__wbg_ptr = kk, Nk.register(this, this.__wbg_ptr, this), this
      }
      run(kk, Fk) {
        dk(kk, lk);
        const Ik = KF.j4ns(this.__wbg_ptr, kk.__wbg_ptr, Fk);
        if (Ik[2]) throw jF(Ik[1]);
        return Ik[0] >>> 0
      }
      Pj(kk) {
        const Fk = qF(kk, KF.c0zx),
          Ik = QF;
        KF.isqE(this.__wbg_ptr, Fk, Ik)
      }
      Kj(kk) {
        const Fk = qF(kk, KF.c0zx),
          Ik = QF;
        KF.qgPX(this.__wbg_ptr, Fk, Ik)
      }
    }
    Symbol.dispose && (ak.prototype[Symbol.dispose] = ak.prototype.free);
    class qk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ck.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        KF.x4Ds(kk, 0)
      }
      sj(kk, Fk) {
        const Ik = LF(kk, KF.c0zx),
          Xk = QF;
        return KF.daDA(this.__wbg_ptr, Ik, Xk, Fk) >>> 0
      }
      Vj(kk, Fk, Ik) {
        dk(kk, lk);
        const Xk = LF(Ik, KF.c0zx),
          Tk = QF,
          ik = KF.eIHs(this.__wbg_ptr, kk.__wbg_ptr, Fk, Xk, Tk);
        if (ik[2]) throw jF(ik[1]);
        return ik[0] >>> 0
      }
      Qj(kk) {
        return KF.q73U(this.__wbg_ptr, kk) >>> 0
      }
      constructor() {
        const kk = KF.PvVR();
        return this.__wbg_ptr = kk, ck.register(this, this.__wbg_ptr, this), this
      }
      scan(kk, Fk) {
        dk(kk, lk);
        const Ik = KF.PSvE(this.__wbg_ptr, kk.__wbg_ptr, Fk);
        if (Ik[2]) throw jF(Ik[1]);
        return Ik[0] >>> 0
      }
      oj(kk) {
        const Fk = LF(kk, KF.c0zx),
          Ik = QF;
        KF.NS2f(this.__wbg_ptr, Fk, Ik)
      }
      Sj() {
        return KF.VTH1(this.__wbg_ptr) >>> 0
      }
      zj() {
        return KF.gNT6(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (qk.prototype[Symbol.dispose] = qk.prototype.free);
    class Lk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Wk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        KF.SdXN(kk, 0)
      }
      Ej(kk) {
        const Fk = KF.EUXv(this.__wbg_ptr, kk);
        if (Fk[2]) throw jF(Fk[1]);
        return Fk[0] >>> 0
      }
      compute(kk, Fk, Ik, Xk) {
        var Tk = lF(Xk) ? 0 : ZF(Xk, KF.c0zx, KF.asff),
          ik = QF;
        const yk = KF.xsoa(this.__wbg_ptr, kk, lF(Fk) ? Number.MAX_SAFE_INTEGER : Fk | 0, Ik, Tk, ik);
        if (yk[2]) throw jF(yk[1]);
        return yk[0] >>> 0
      }
      nj(kk) {
        const Fk = ZF(kk, KF.c0zx, KF.asff),
          Ik = QF;
        KF.vJME(this.__wbg_ptr, Fk, Ik)
      }
      pj() {
        return KF.dkL3(this.__wbg_ptr)
      }
      uj(kk) {
        return KF.nZUZ(this.__wbg_ptr, kk) >>> 0
      }
      bj() {
        return KF.XZwp(this.__wbg_ptr) >>> 0
      }
      Rj() {
        return KF.frdM(this.__wbg_ptr) >>> 0
      }
      Uj(kk, Fk) {
        const Ik = KF.zD3U(this.__wbg_ptr, kk, Fk);
        if (Ik[1]) throw jF(Ik[0])
      }
      Cj() {
        return KF.VtXg(this.__wbg_ptr) >>> 0
      }
      Nj() {
        return KF.UNsX(this.__wbg_ptr) >>> 0
      }
      Wj() {
        return KF.bAQZ(this.__wbg_ptr) >>> 0
      }
      Oj(kk, Fk, Ik) {
        const Xk = qF(kk, KF.c0zx),
          Tk = QF,
          ik = qF(Fk, KF.c0zx),
          yk = QF,
          lk = KF.mQT6(this.__wbg_ptr, Xk, Tk, ik, yk, Ik);
        if (lk[1]) throw jF(lk[0])
      }
      Bj() {
        return KF.RW7R(this.__wbg_ptr) >>> 0
      }
      mesh(kk, Fk, Ik, Xk, Tk) {
        const ik = KF.HlFe(this.__wbg_ptr, kk, Fk, Ik, Xk, Tk);
        if (ik[2]) throw jF(ik[1]);
        return ik[0] >>> 0
      }
      constructor(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, Zk, jk, ek, wk, Hk, Jk, xk, Pk) {
        const Kk = aF(kk, KF.c0zx),
          Qk = QF,
          sk = tF(Fk, KF.c0zx),
          Vk = QF,
          zk = qF(Ik, KF.c0zx),
          Sk = QF,
          vk = LF(Xk, KF.c0zx),
          Ek = QF,
          Ok = LF(Tk, KF.c0zx),
          nk = QF,
          Gk = qF(ik, KF.c0zx),
          pk = QF,
          uk = qF(yk, KF.c0zx),
          bk = QF,
          Rk = tF(lk, KF.c0zx),
          Uk = QF,
          Ck = tF(ak, KF.c0zx),
          Nk = QF,
          ck = LF(qk, KF.c0zx),
          fk = QF;
        var Bk = lF(Lk) ? 0 : aF(Lk, KF.c0zx),
          dk = QF;
        const Yk = qF(tk, KF.c0zx),
          Ak = QF,
          gk = LF(Zk, KF.c0zx),
          mk = QF;
        var hk = lF(jk) ? 0 : LF(jk, KF.c0zx),
          rk = QF;
        const Dk = tF(ek, KF.c0zx),
          Mk = QF,
          kF = KF.CFWx(Kk, Qk, sk, Vk, zk, Sk, vk, Ek, Ok, nk, Gk, pk, uk, bk, Rk, Uk, Ck, Nk, ck, fk, Bk, dk, Yk, Ak, gk, mk, hk, rk, Dk, Mk, wk, Hk, Jk, xk, Pk);
        if (kF[2]) throw jF(kF[1]);
        return this.__wbg_ptr = kF[0], Wk.register(this, this.__wbg_ptr, this), this
      }
      fj(kk, Fk) {
        const Ik = qF(kk, KF.c0zx),
          Xk = QF,
          Tk = KF.Uw04(this.__wbg_ptr, Ik, Xk, Fk);
        if (Tk[3]) throw jF(Tk[2]);
        var ik = gk(Tk[0], Tk[1]).slice();
        return KF.NsFb(Tk[0], 1 * Tk[1], 1), ik
      }
      Yj(kk) {
        KF.i7q7(this.__wbg_ptr, lF(kk) ? 16777215 : kk)
      }
      Aj(kk) {
        return KF.xCea(this.__wbg_ptr, kk) >>> 0
      }
      mj() {
        return KF.laRp(this.__wbg_ptr) >>> 0
      }
      gj() {
        const kk = KF.WM6h(this.__wbg_ptr);
        if (kk[2]) throw jF(kk[1]);
        return 0 !== kk[0]
      }
      hj() {
        return KF.bVpl(this.__wbg_ptr) >>> 0
      }
      rj() {
        return KF.bbrr(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Lk.prototype[Symbol.dispose] = Lk.prototype.free);
    class tk {
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, fk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        KF.jYe0(kk, 0)
      }
      compute(kk, Fk, Ik, Xk) {
        var Tk = lF(Xk) ? 0 : ZF(Xk, KF.c0zx, KF.asff),
          ik = QF;
        const yk = KF.jZHB(this.__wbg_ptr, kk, lF(Fk) ? Number.MAX_SAFE_INTEGER : Fk | 0, Ik, Tk, ik);
        if (yk[2]) throw jF(yk[1]);
        return yk[0] >>> 0
      }
      nj(kk) {
        const Fk = ZF(kk, KF.c0zx, KF.asff),
          Ik = QF;
        KF.DUS3(this.__wbg_ptr, Fk, Ik)
      }
      Nj() {
        return KF.bqAJ(this.__wbg_ptr) >>> 0
      }
      Wj() {
        return KF.eJ4A(this.__wbg_ptr) >>> 0
      }
      Dj(kk) {
        const Fk = KF.Eu3t(this.__wbg_ptr, kk);
        if (Fk[2]) throw jF(Fk[1]);
        return Fk[0] >>> 0
      }
      constructor(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = aF(kk, KF.c0zx),
          lk = QF,
          ak = tF(Fk, KF.c0zx),
          qk = QF,
          Lk = qF(Ik, KF.c0zx),
          tk = QF,
          Zk = LF(Xk, KF.c0zx),
          jk = QF,
          ek = KF.yqsv(yk, lk, ak, qk, Lk, tk, Zk, jk, Tk, ik);
        if (ek[2]) throw jF(ek[1]);
        return this.__wbg_ptr = ek[0], fk.register(this, this.__wbg_ptr, this), this
      }
      mj() {
        return KF.tjMf(this.__wbg_ptr) >>> 0
      }
      gj() {
        const kk = KF.vcGA(this.__wbg_ptr);
        if (kk[2]) throw jF(kk[1]);
        return 0 !== kk[0]
      }
      hj() {
        return KF.XhCc(this.__wbg_ptr) >>> 0
      }
    }

    function Zk() {
      const kk = KF.YtcO();
      var Fk = Ak(kk[0], kk[1]).slice();
      return KF.NsFb(kk[0], 4 * kk[1], 4), Fk
    }

    function jk(kk, Fk) {
      let Ik, Xk;
      try {
        const Tk = aF(kk, KF.c0zx),
          ik = QF,
          yk = ZF(Fk, KF.c0zx, KF.asff),
          lk = QF,
          ak = KF.FiNk(Tk, ik, yk, lk);
        return Ik = ak[0], Xk = ak[1], Dk(ak[0], ak[1])
      } finally {
        KF.NsFb(Ik, Xk, 1)
      }
    }

    function ek() {
      const kk = KF.t1RI();
      var Fk = Ak(kk[0], kk[1]).slice();
      return KF.NsFb(kk[0], 4 * kk[1], 4), Fk
    }

    function wk(kk) {
      return 0 !== KF.qW9W(kk)
    }

    function Hk(kk, Fk) {
      const Ik = ZF(kk, KF.c0zx, KF.asff),
        Xk = QF,
        Tk = KF.jApg(Ik, Xk, Fk);
      if (Tk[1]) throw jF(Tk[0])
    }

    function Jk() {
      KF.QFEh()
    }

    function xk() {
      return KF.s6zJ() >>> 0
    }

    function Pk(kk) {
      return 0 !== KF.SQcO(kk)
    }

    function Kk(kk) {
      return 0 !== KF.Wb8Y(kk)
    }

    function Qk(kk) {
      KF.Tcu4(kk)
    }

    function sk() {
      return KF.efAr() >>> 0
    }

    function Vk() {
      return KF.Bwq2() >>> 0
    }

    function zk() {
      return 0 !== KF.yHzL()
    }

    function Sk() {
      const kk = KF.iQo0();
      var Fk = Ak(kk[0], kk[1]).slice();
      return KF.NsFb(kk[0], 4 * kk[1], 4), Fk
    }

    function vk() {
      const kk = KF.sspd();
      var Fk = Ak(kk[0], kk[1]).slice();
      return KF.NsFb(kk[0], 4 * kk[1], 4), Fk
    }

    function Ek() {
      const kk = KF.nA2D();
      var Fk = Ak(kk[0], kk[1]).slice();
      return KF.NsFb(kk[0], 4 * kk[1], 4), Fk
    }

    function Ok() {
      return KF.g3eq() >>> 0
    }

    function nk() {
      KF.CuRP()
    }

    function Gk() {
      let kk, Fk;
      try {
        const Ik = KF.IvNp();
        return kk = Ik[0], Fk = Ik[1], Dk(Ik[0], Ik[1])
      } finally {
        KF.NsFb(kk, Fk, 1)
      }
    }

    function pk(kk) {
      KF.EI01(Bk(kk))
    }

    function uk() {
      return {
        __proto__: null,
        q9ge: {
          __proto__: null,
          J0YU: function(kk, Fk) {
            return Bk(Error(Dk(kk, Fk)))
          },
          FhFG: function(kk, Fk) {
            throw new Error(Dk(kk, Fk))
          },
          BgX3: function(kk) {
            TF(kk).call()
          },
          aSB2: function(kk, Fk) {
            console.error(Dk(kk, Fk))
          },
          yoHP: function() {
            return performance.now()
          },
          ofiX: function(kk) {
            jF(kk)
          }
        }
      }
    }
    Symbol.dispose && (tk.prototype[Symbol.dispose] = tk.prototype.free);
    const bk = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => KF.WOZt(kk, 1))),
      Rk = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => KF.Ir5k(kk, 1))),
      Uk = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => KF.yGua(kk, 1))),
      Ck = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => KF.t4NP(kk, 1))),
      Nk = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => KF.e2ff(kk, 1))),
      ck = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => KF.x4Ds(kk, 1))),
      Wk = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => KF.SdXN(kk, 1))),
      fk = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((kk => KF.jYe0(kk, 1)));

    function Bk(kk) {
      yF === iF.length && iF.push(iF.length + 1);
      const Fk = yF;
      return yF = iF[Fk], iF[Fk] = kk, Fk
    }

    function dk(kk, Fk) {
      if (!(kk instanceof Fk)) throw new Error(`expected instance of ${Fk.name}`)
    }

    function Yk(kk, Fk) {
      return kk >>>= 0, hk().subarray(kk / 8, kk / 8 + Fk)
    }

    function Ak(kk, Fk) {
      return kk >>>= 0, FF().subarray(kk / 4, kk / 4 + Fk)
    }

    function gk(kk, Fk) {
      return kk >>>= 0, XF().subarray(kk / 1, kk / 1 + Fk)
    }
    let mk = null;

    function hk() {
      return null !== mk && 0 !== mk.byteLength || (mk = new Float64Array(KF.memory.buffer)), mk
    }
    let rk = null;

    function Dk(kk, Fk) {
      return function(kk, Fk) {
        HF += Fk, HF >= wF && (eF = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), eF.decode(), HF = Fk);
        return eF.decode(XF().subarray(kk, kk + Fk))
      }(kk >>> 0, Fk)
    }
    let Mk = null;
    let kF = null;

    function FF() {
      return null !== kF && 0 !== kF.byteLength || (kF = new Uint32Array(KF.memory.buffer)), kF
    }
    let IF = null;

    function XF() {
      return null !== IF && 0 !== IF.byteLength || (IF = new Uint8Array(KF.memory.buffer)), IF
    }

    function TF(kk) {
      return iF[kk]
    }
    let iF = new Array(1024).fill(void 0);
    iF.push(void 0, null, !0, !1);
    let yF = iF.length;

    function lF(kk) {
      return void 0 === kk || null === kk
    }

    function aF(kk, Fk) {
      const Ik = Fk(2 * kk.length, 2) >>> 0;
      return (null !== Mk && 0 !== Mk.byteLength || (Mk = new Uint16Array(KF.memory.buffer)), Mk).set(kk, Ik / 2), QF = kk.length, Ik
    }

    function qF(kk, Fk) {
      const Ik = Fk(4 * kk.length, 4) >>> 0;
      return FF().set(kk, Ik / 4), QF = kk.length, Ik
    }

    function LF(kk, Fk) {
      const Ik = Fk(1 * kk.length, 1) >>> 0;
      return XF().set(kk, Ik / 1), QF = kk.length, Ik
    }

    function tF(kk, Fk) {
      const Ik = Fk(8 * kk.length, 8) >>> 0;
      return hk().set(kk, Ik / 8), QF = kk.length, Ik
    }

    function ZF(kk, Fk, Ik) {
      if (void 0 === Ik) {
        const Ik = JF.encode(kk),
          Xk = Fk(Ik.length, 1) >>> 0;
        return XF().subarray(Xk, Xk + Ik.length).set(Ik), QF = Ik.length, Xk
      }
      let Xk = kk.length,
        Tk = Fk(Xk, 1) >>> 0;
      const ik = XF();
      let yk = 0;
      for (; yk < Xk; yk++) {
        const Fk = kk.charCodeAt(yk);
        if (Fk > 127) break;
        ik[Tk + yk] = Fk
      }
      if (yk !== Xk) {
        0 !== yk && (kk = kk.slice(yk)), Tk = Ik(Tk, Xk, Xk = yk + 3 * kk.length, 1) >>> 0;
        const Fk = XF().subarray(Tk + yk, Tk + Xk);
        yk += JF.encodeInto(kk, Fk).written, Tk = Ik(Tk, Xk, yk, 1) >>> 0
      }
      return QF = yk, Tk
    }

    function jF(kk) {
      const Fk = TF(kk);
      return function(kk) {
        kk < 1028 || (iF[kk] = yF, yF = kk)
      }(kk), Fk
    }
    let eF = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    eF.decode();
    const wF = 2146435072;
    let HF = 0;
    const JF = new TextEncoder;
    "encodeInto" in JF || (JF.encodeInto = function(kk, Fk) {
      const Ik = JF.encode(kk);
      return Fk.set(Ik), {
        read: kk.length,
        written: Ik.length
      }
    });
    let xF, PF, KF, QF = 0;

    function sF(kk, Fk) {
      return PF = kk, KF = kk.exports, xF = Fk, mk = null, rk = null, Mk = null, kF = null, IF = null, KF.t6qH(), KF
    }

    function VF(kk) {
      if (void 0 !== KF) return KF;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module: kk
      } = kk) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Fk = uk();
      kk instanceof WebAssembly.Module || (kk = new WebAssembly.Module(kk));
      return sF(new WebAssembly.Instance(kk, Fk), kk)
    }
    async function zF(kk) {
      if (void 0 !== KF) return KF;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module_or_path: kk
      } = kk) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Fk = uk();
      ("string" === typeof kk || "function" === typeof Request && kk instanceof Request || "function" === typeof URL && kk instanceof URL) && (kk = fetch(kk));
      const {
        instance: Ik,
        module: Xk
      } = await async function(kk, Fk) {
        if ("function" === typeof Response && kk instanceof Response) {
          if (!kk.ok) throw new Error(`failed to fetch Wasm: ${kk.status} ${kk.statusText} fetching '${kk.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(kk, Fk)
          } catch (Ik) {
            if (! function(kk) {
                switch (kk) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(kk.type) || "application/wasm" === kk.headers.get("Content-Type")) throw Ik;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Ik)
          }
          const Xk = await kk.arrayBuffer();
          return await WebAssembly.instantiate(Xk, Fk)
        } {
          const Ik = await WebAssembly.instantiate(kk, Fk);
          return Ik instanceof WebAssembly.Instance ? {
            instance: Ik,
            module: kk
          } : Ik
        }
      }(await kk, Fk);
      return sF(Ik, Xk)
    }
  },
  36279: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk,
      f: () => lk,
      i: () => ak
    });
    var Xk = Ik(36288),
      Tk = Ik(2801),
      ik = Ik(36297);
    const yk = {
      name: Tk.d,
      url: () => new Ik.U(Ik(36302)),
      init: Xk.default,
      bindings: Xk
    };

    function lk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk,
        Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yk,
        Ik = arguments.length > 2 ? arguments[2] : void 0;
      return (0, ik.h)(kk, Fk, Ik)
    }

    function ak(kk) {
      return (0, Tk.G)((() => kk), Xk, yk)
    }
  },
  36261: (kk, Fk, Ik) => {
    function Xk(kk, Fk) {
      return new Error(`${kk}: ${Fk instanceof Error?`${Fk.name}: ${Fk.message}`:String(Fk)}`, {
        cause: Fk
      })
    }
    Ik.d(Fk, {
      e: () => Xk
    })
  },
  36257: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk,
      g: () => ak
    });
    var Xk = Ik(2803),
      Tk = Ik(6599),
      ik = Ik(36261);

    function yk() {
      return new URL(new Ik.U(Ik(36270)).href, globalThis.location?.href).href
    }
    let lk = null;

    function ak() {
      return lk ??= (async () => (0, Xk.G)(new URL(yk()), (0, Tk.c)("bloxd_wasm_textures")))().catch((kk => {
        throw (0, ik.e)((0, Xk.M)(kk), kk)
      })), lk
    }
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