export const id = 212;
export const ids = [212, 213];
export const modules = {
  36337: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      CAPPED_COUNTS_VISIT_CAP: () => dB,
      reportCappedWasmFailure: () => uB,
      reportUncappedWasmFailure: () => NB,
      reportWasmCrash: () => nB,
      reportWasmFailure: () => IB
    });
    var QB = zB(3036);

    function nB(BB) {
      (0, QB.reportClientError)("wasm_load", BB.message, BB.code)
    }
    const dB = QB.c - 4;

    function IB(BB, jB, zB) {
      (0, QB.reportClientError)(BB, jB, zB, !1)
    }

    function NB(BB, jB, zB) {
      (0, QB.reportClientError)(BB, jB, zB, !1, 1 / 0)
    }

    function uB(BB, jB, zB) {
      (0, QB.reportClientError)(BB, jB, zB, !1, dB)
    }
  },
  36334: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => tB,
      f: () => EB,
      i: () => iB,
      l: () => SB
    });
    var QB = zB(36351),
      nB = zB(2967),
      dB = zB(36373),
      IB = zB(2974),
      NB = zB(36337),
      uB = zB(3028),
      UB = zB(3334),
      aB = zB(3325),
      pB = zB(36340),
      rB = zB(3036),
      sB = zB(36344),
      JB = zB(36347),
      mB = zB(3814);
    let yB = !1;
    const kB = 40;
    var GB = zB(3673);
    const LB = "bloxdWasmFailureReported";

    function gB() {
      return "undefined" === typeof WebAssembly
    }

    function tB() {
      return (0, QB.f)()
    }

    function SB() {
      if (gB()) return "this browser has no WebAssembly";
      const BB = (0, nB.q)();
      return "compile" === BB || "instantiate" === BB ? `the core wasm didn't load here (${(0,nB.i)()})` : null
    }
    async function MB(BB) {
      return await (0, dB.f)(dB.d, void 0, BB)
    }

    function EB() {
      gB() || (0, GB.c)((() => {
        MB()
      }))
    }

    function iB() {
      if (gB()) return async () => ((0, uB.k)("unsupported", 0), qB("unsupported", "This browser has no WebAssembly"), !1);
      const BB = {
        reloadFailedDownload: !0
      };
      return MB(BB), async () => {
        var jB;
        const zB = performance.now();
        await MB(BB);
        const QB = (performance.now() - zB) / 1e3;
        if ((0, nB.K)()) return (0, uB.k)("ready", QB), yB || (yB = !0, (0, nB.M)((() => {
          if ("call" !== (0, nB.q)()) return;
          const BB = (0, nB.m)(),
            jB = (0, pB.m)(BB, nB.F, nB.T),
            zB = (0, nB.t)().buffer.byteLength,
            QB = (0, pB.h)(jB.kind, jB.refusedBytes),
            dB = QB ? "alloc_failed" : jB.kind,
            IB = (0, sB.i)(zB),
            NB = QB ? `_r${Math.floor(Math.log2(jB.refusedBytes))}` : "",
            uB = (0, mB.d)();
          null === uB && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const UB = new Error((0, JB.e)(BB, zB, jB));
          if (BB instanceof Error && void 0 !== BB.stack) {
            const jB = BB.stack.split("\n"),
              zB = jB.length > kB ? [...jB.slice(0, kB / 2), ...jB.slice(-kB / 2)] : jB;
            UB.stack = zB.join("\n")
          }(0, rB.reportClientError)("wasm_load", UB, `wasm_call_${dB}_${null!==uB&&void 0!==uB?uB:"unnamed"}_m${IB}${NB}`)
        }))), (0, IB.Q)(dB.d.url()) && (0, NB.reportCappedWasmFailure)("wasm_load", UB.d.message, UB.d.code), !0;
        const GB = aB.b[null !== (jB = (0, nB.q)()) && void 0 !== jB ? jB : "call"];
        return (0, uB.k)(GB, QB), qB(GB, (0, nB.i)()), !1
      }
    }

    function qB(BB, jB) {
      (0, aB.g)(LB, `Bloxd wasm ${BB}, so the game can't start: ${jB}`, jB, BB)
    }
  },
  36347: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => NB,
      i: () => UB,
      l: () => IB,
      m: () => pB
    });
    var QB = zB(36340),
      nB = zB(12);
    const dB = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function IB(BB) {
      if (BB instanceof WebAssembly.RuntimeError) return !0;
      const jB = BB instanceof Error ? BB.stack : void 0;
      return "string" === typeof jB && dB.test(jB)
    }

    function NB(BB, jB, zB) {
      var nB;
      const IB = BB instanceof Error ? BB.name : "thrown",
        NB = (BB instanceof Error && null !== (nB = BB.stack) && void 0 !== nB ? nB : "").split("\n").filter((BB => dB.test(BB))).slice(0, 8).map((BB => BB.trim())),
        uB = null === jB ? "wasm memory unknown" : `wasm memory ${Math.round(jB/2**20)} MB`,
        UB = null === zB.panic ? "" : `, panic: ${(0,QB.k)(zB.panic)}`,
        aB = `${IB}: ${BB instanceof Error?BB.message:String(BB)}`;
      return `${(0,QB.o)(zB.kind,zB.refusedBytes)} ${aB} (${uB})${UB}${NB.length>0?` | ${NB.join(" < ")}`:""}`
    }
    const uB = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function UB(BB) {
      var jB;
      let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(BB instanceof Error) || !uB.test(BB.message)) return {};
      if (!("detached" in zB)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, nB.eb)(null === (jB = (0, nB.X)(zB, "detached")) || void 0 === jB ? void 0 : jB.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const aB = 500;

    function pB(BB) {
      let jB = "[object Object]";
      try {
        jB = String(BB)
      } catch {}
      if ("[object Object]" !== jB) return jB;
      try {
        var zB, QB;
        return null !== (zB = null === (QB = JSON.stringify(BB)) || void 0 === QB ? void 0 : QB.slice(0, aB)) && void 0 !== zB ? zB : jB
      } catch {
        return jB
      }
    }
  },
  36389: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/bloxd_wasm_bg.d2cec8caa5b8b2a6c029.wasm"
  },
  36366: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/bloxd_wasm_textures_bg.9b9f4e284704a061a0e5.wasm"
  },
  36380: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      Ka: () => QB,
      EnvelopeKind: () => nB,
      Ca: () => dB,
      PhysicsEngine: () => IB,
      ca: () => NB,
      ba: () => uB,
      va: () => UB,
      Ra: () => aB,
      Oa: () => pB,
      Bp: () => rB,
      jp: () => sB,
      zp: () => JB,
      Qp: () => mB,
      np: () => yB,
      default: () => Mj,
      initSync: () => Sj,
      dp: () => kB,
      Ip: () => GB,
      Np: () => LB,
      Up: () => gB,
      ap: () => tB,
      rp: () => SB,
      sp: () => MB,
      Jp: () => EB,
      mp: () => iB,
      yp: () => qB,
      kp: () => fB,
      Gp: () => oB,
      Lp: () => HB,
      tp: () => DB,
      Sp: () => FB
    });
    class QB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, VB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        Lj.MGu3(BB, 0)
      }
      Mp() {
        const BB = Lj.gUfA(this.__wbg_ptr);
        if (BB[2]) throw rj(BB[1]);
        return BB[0] >>> 0
      }
      Ep() {
        return Lj.GXU7(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const BB = Lj.Pmf0();
        return this.__wbg_ptr = BB, VB.register(this, this.__wbg_ptr, this), this
      }
      ip() {
        return Lj.JjCJ(this.__wbg_ptr) >>> 0
      }
      qp(BB) {
        const jB = Lj.hNJm(this.__wbg_ptr, BB);
        if (jB[2]) throw rj(jB[1]);
        return jB[0] >>> 0
      }
      Hp(BB) {
        const jB = Lj.vHUl(this.__wbg_ptr, BB);
        if (jB[2]) throw rj(jB[1]);
        return jB[0] >>> 0
      }
    }
    Symbol.dispose && (QB.prototype[Symbol.dispose] = QB.prototype.free);
    const nB = Object.freeze({
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
    class dB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, hB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        Lj.G0WK(BB, 0)
      }
      Yp(BB, jB) {
        const zB = Lj.gCGi(this.__wbg_ptr, BB, jB);
        if (zB[2]) throw rj(zB[1]);
        return zB[0] >>> 0
      }
      Vp(BB) {
        const jB = Lj.Xchm(this.__wbg_ptr, BB);
        if (jB[2]) throw rj(jB[1]);
        return jB[0] >>> 0
      }
      hp() {
        Lj.fldI(this.__wbg_ptr)
      }
      static Xp() {
        return Lj.B3jG() >>> 0
      }
      Zp() {
        return Lj.Ingp(this.__wbg_ptr) >>> 0
      }
      Ap() {
        const BB = Lj.jka9(this.__wbg_ptr);
        return 0 === BB[0] ? void 0 : BB[1]
      }
      Tp() {
        return Lj.xd5U(this.__wbg_ptr) >>> 0
      }
      Pp() {
        return Lj.xYru(this.__wbg_ptr) >>> 0
      }
      static Fp() {
        return Lj.pqTa() >>> 0
      }
      constructor() {
        const BB = Lj.a8xV();
        return this.__wbg_ptr = BB, hB.register(this, this.__wbg_ptr, this), this
      }
      Wp() {
        return Lj.YpAY(this.__wbg_ptr) >>> 0
      }
      lp() {
        return Lj.b0N6(this.__wbg_ptr) >>> 0
      }
      wp() {
        return Lj.EZvZ(this.__wbg_ptr) >>> 0
      }
      Dp(BB) {
        return Lj.JuTL(this.__wbg_ptr, BB) >>> 0
      }
      reserve(BB, jB) {
        const zB = Lj.qFsn(this.__wbg_ptr, BB, jB);
        if (zB[1]) throw rj(zB[0])
      }
      Cp(BB, jB) {
        const zB = uj(BB, Lj.XQV9),
          QB = gj;
        Lj.DVGE(this.__wbg_ptr, zB, QB, jB)
      }
      text() {
        let BB, jB;
        try {
          const zB = Lj.qVoY(this.__wbg_ptr);
          return BB = zB[0], jB = zB[1], vB(zB[0], zB[1])
        } finally {
          Lj.aFMC(BB, jB, 1)
        }
      }
    }
    Symbol.dispose && (dB.prototype[Symbol.dispose] = dB.prototype.free);
    class IB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, XB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        Lj.aCC0(BB, 0)
      }
      bp(BB, jB) {
        lB(jB, QB);
        const zB = Lj.fhVG(this.__wbg_ptr, BB, jB.__wbg_ptr);
        if (zB[2]) throw rj(zB[1]);
        return zB[0] >>> 0
      }
      Rp() {
        const BB = Lj.jW2D(this.__wbg_ptr);
        if (BB[1]) throw rj(BB[0])
      }
      Qr(BB, jB, zB, QB, nB, dB, IB, uB, UB, aB, pB) {
        lB(BB, NB);
        const rB = Lj.rNri(this.__wbg_ptr, BB.__wbg_ptr, jB, zB, QB, nB, dB, IB, uB, UB, aB, pB);
        if (rB[2]) throw rj(rB[1]);
        return rB[0]
      }
      nr() {
        const BB = Lj.Kkqs(this.__wbg_ptr);
        var jB = wB(BB[0], BB[1]).slice();
        return Lj.aFMC(BB[0], 8 * BB[1], 8), jB
      }
      dr() {
        return Lj.sGQV(this.__wbg_ptr) >>> 0
      }
      Ir() {
        return Lj.UxHJ(this.__wbg_ptr) >>> 0
      }
      Nr() {
        return Lj.rW6x(this.__wbg_ptr) >>> 0
      }
      constructor(BB, jB, zB, QB, nB, dB, IB, NB) {
        const uB = Lj.nV5R(BB, jB, zB, QB, nB, dB, IB, NB);
        if (uB[2]) throw rj(uB[1]);
        return this.__wbg_ptr = uB[0], XB.register(this, this.__wbg_ptr, this), this
      }
      ar(BB) {
        lB(BB, QB);
        const jB = Lj.mGhd(this.__wbg_ptr, BB.__wbg_ptr);
        if (jB[2]) throw rj(jB[1]);
        return jB[0] >>> 0
      }
      rr(BB) {
        const jB = Lj.smOW(this.__wbg_ptr, BB);
        if (jB[1]) throw rj(jB[0])
      }
      sr() {
        return Lj.ESIg(this.__wbg_ptr) >>> 0
      }
      resume(BB, jB) {
        lB(BB, NB), lB(jB, QB);
        const zB = Lj.OscU(this.__wbg_ptr, BB.__wbg_ptr, jB.__wbg_ptr);
        if (zB[2]) throw rj(zB[1]);
        return zB[0] >>> 0
      }
      Gr(BB) {
        const jB = Lj.jV9E(this.__wbg_ptr, BB);
        if (jB[1]) throw rj(jB[0])
      }
      Sr(BB, jB) {
        lB(jB, QB);
        const zB = Lj.qXUp(this.__wbg_ptr, BB, jB.__wbg_ptr);
        if (zB[1]) throw rj(zB[0])
      }
      ir(BB) {
        const jB = aj(BB, Lj.XQV9),
          zB = gj,
          QB = Lj.fSS8(this.__wbg_ptr, jB, zB);
        if (QB[1]) throw rj(QB[0])
      }
      Br(BB, jB, zB, QB, nB, dB) {
        const IB = Lj.RL6m(this.__wbg_ptr, BB, jB, zB, QB, nB, dB);
        if (IB[1]) throw rj(IB[0])
      }
      jr(BB, jB, zB, QB) {
        const nB = uj(BB, Lj.XQV9),
          dB = gj,
          IB = aj(jB, Lj.XQV9),
          NB = gj,
          uB = aj(zB, Lj.XQV9),
          UB = gj,
          aB = aj(QB, Lj.XQV9),
          pB = gj,
          rB = Lj.SEof(this.__wbg_ptr, nB, dB, IB, NB, uB, UB, aB, pB);
        if (rB[1]) throw rj(rB[0])
      }
      Hr(BB, jB) {
        lB(jB, QB);
        const zB = Lj.mD9A(this.__wbg_ptr, BB, jB.__wbg_ptr);
        if (zB[1]) throw rj(zB[0])
      }
      Ur(BB, jB, zB) {
        const QB = Lj.OyFv(this.__wbg_ptr, BB, jB, zB);
        if (QB[1]) throw rj(QB[0])
      }
      Fr(BB, jB, zB, QB, nB, dB, IB, uB, UB, aB) {
        lB(BB, NB);
        return Lj.yhYF(this.__wbg_ptr, BB.__wbg_ptr, jB, zB, QB, nB, dB, IB, uB, UB, aB)
      }
    }
    Symbol.dispose && (IB.prototype[Symbol.dispose] = IB.prototype.free);
    class NB {
      static __wrap(BB) {
        const jB = Object.create(NB.prototype);
        return jB.__wbg_ptr = BB, ZB.register(jB, jB.__wbg_ptr, jB), jB
      }
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ZB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        Lj.hNIH(BB, 0)
      }
      hr(BB) {
        const jB = Lj.jx5m(this.__wbg_ptr, BB);
        if (jB[2]) throw rj(jB[1]);
        return jB[0] >>> 0
      }
      Xr(BB, jB, zB) {
        return Lj.WQzN(this.__wbg_ptr, BB, jB, zB)
      }
      Zr(BB, jB, zB) {
        return Lj.dna9(this.__wbg_ptr, BB, jB, zB) >>> 0
      }
      Ar(BB, jB, zB, QB) {
        return 0 !== Lj.mnJ1(this.__wbg_ptr, BB, jB, zB, QB)
      }
      Tr() {
        Lj.RUNZ(this.__wbg_ptr)
      }
      Wr(BB) {
        const jB = Lj.NrhS(this.__wbg_ptr, BB);
        if (jB[3]) throw rj(jB[2]);
        var zB = KB(jB[0], jB[1]).slice();
        return Lj.aFMC(jB[0], 1 * jB[1], 1), zB
      }
      evict(BB, jB) {
        return Lj.wyrT(this.__wbg_ptr, BB, jB) >>> 0
      }
      er() {
        Lj.elCq(this.__wbg_ptr)
      }
      lr(BB, jB, zB) {
        Lj.qpMc(this.__wbg_ptr, BB, jB, zB)
      }
      wr(BB) {
        const jB = Lj.EEer(this.__wbg_ptr, BB);
        if (jB[1]) throw rj(jB[0])
      }
      Kr() {
        return Lj.LAVv(this.__wbg_ptr) >>> 0
      }
      Cr() {
        return Lj.qShZ(this.__wbg_ptr) >>> 0
      }
      br(BB, jB, zB) {
        Lj.WGUi(this.__wbg_ptr, BB, jB, zB)
      }
      vr(BB, jB, zB) {
        Lj.HzJm(this.__wbg_ptr, BB, jB, zB)
      }
      Rr() {
        return Lj.SZw3(this.__wbg_ptr) >>> 0
      }
      Or() {
        return Lj.iZdJ(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const BB = Lj.Q42X();
        return this.__wbg_ptr = BB, ZB.register(this, this.__wbg_ptr, this), this
      }
      static Bs() {
        const BB = Lj.FZW5();
        return NB.__wrap(BB)
      }
      zs() {
        return Lj.SIww(this.__wbg_ptr) >>> 0
      }
      Qs() {
        return Lj.fXvJ(this.__wbg_ptr) >>> 0
      }
      ns(BB, jB, zB, QB) {
        const nB = Lj.a2J9(this.__wbg_ptr, BB, jB, zB, QB);
        if (nB[1]) throw rj(nB[0])
      }
      ds() {
        return Lj.DPLv(this.__wbg_ptr) >>> 0
      }
      Is() {
        return Lj.BaMM(this.__wbg_ptr) >>> 0
      }
      Ns(BB, jB, zB, QB) {
        Lj.d7pc(this.__wbg_ptr, BB, jB, zB, QB)
      }
      Us(BB) {
        Lj.K2BN(this.__wbg_ptr, BB)
      }
      ys(BB, jB, zB, QB, nB) {
        const dB = Uj(jB, Lj.XQV9),
          IB = gj,
          NB = uj(zB, Lj.XQV9),
          uB = gj,
          UB = aj(QB, Lj.XQV9),
          aB = gj,
          pB = Lj.ffrb(this.__wbg_ptr, BB, dB, IB, NB, uB, UB, aB, nB);
        if (pB[1]) throw rj(pB[0])
      }
      ss(BB, jB, zB, QB) {
        const nB = Uj(BB, Lj.XQV9),
          dB = gj,
          IB = uj(jB, Lj.XQV9),
          NB = gj,
          uB = aj(zB, Lj.XQV9),
          UB = gj,
          aB = Uj(QB, Lj.XQV9),
          pB = gj,
          rB = Lj.rD42(this.__wbg_ptr, nB, dB, IB, NB, uB, UB, aB, pB);
        if (rB[1]) throw rj(rB[0])
      }
      Es(BB) {
        const jB = Uj(BB, Lj.XQV9),
          zB = gj,
          QB = Lj.XLYJ(this.__wbg_ptr, jB, zB);
        if (QB[1]) throw rj(QB[0])
      }
      qs() {
        return Lj.Vc9l(this.__wbg_ptr) >>> 0
      }
      fs(BB) {
        const jB = Lj.nkrB(this.__wbg_ptr, BB);
        if (jB[2]) throw rj(jB[1]);
        return jB[0] >>> 0
      }
      steer() {
        return Lj.SB3a(this.__wbg_ptr) >>> 0
      }
      os() {
        const BB = Lj.xCMj(this.__wbg_ptr);
        var jB = wB(BB[0], BB[1]).slice();
        return Lj.aFMC(BB[0], 8 * BB[1], 8), jB
      }
      Hs() {
        return Lj.mbim(this.__wbg_ptr) >>> 0
      }
      mr() {
        const BB = Lj.wkaY(this.__wbg_ptr);
        var jB, zB, QB = (jB = BB[0], zB = BB[1], jB >>>= 0, (null !== bB && 0 !== bB.byteLength || (bB = new Int32Array(Lj.memory.buffer)), bB).subarray(jB / 4, jB / 4 + zB)).slice();
        return Lj.aFMC(BB[0], 4 * BB[1], 4), QB
      }
    }
    Symbol.dispose && (NB.prototype[Symbol.dispose] = NB.prototype.free);
    class uB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, AB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        Lj.tkBC(BB, 0)
      }
      Ds(BB) {
        const jB = uj(BB, Lj.XQV9),
          zB = gj,
          QB = Lj.JEan(this.__wbg_ptr, jB, zB);
        if (QB[1]) throw rj(QB[0])
      }
      Fs() {
        return Lj.kfbY(this.__wbg_ptr) >>> 0
      }
      Ys() {
        return Lj.jWjd(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const BB = Lj.fk7q();
        return this.__wbg_ptr = BB, AB.register(this, this.__wbg_ptr, this), this
      }
      run(BB, jB) {
        lB(BB, NB);
        const zB = Lj.vixF(this.__wbg_ptr, BB.__wbg_ptr, jB);
        if (zB[2]) throw rj(zB[1]);
        return zB[0] >>> 0
      }
      Vs(BB) {
        const jB = uj(BB, Lj.XQV9),
          zB = gj;
        Lj.khgu(this.__wbg_ptr, jB, zB)
      }
      hs(BB) {
        const jB = uj(BB, Lj.XQV9),
          zB = gj;
        Lj.g9CB(this.__wbg_ptr, jB, zB)
      }
    }
    Symbol.dispose && (uB.prototype[Symbol.dispose] = uB.prototype.free);
    class UB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, TB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        Lj.gVFP(BB, 0)
      }
      Zs(BB, jB) {
        const zB = Uj(BB, Lj.XQV9),
          QB = gj;
        return Lj.dYFo(this.__wbg_ptr, zB, QB, jB) >>> 0
      }
      Ts(BB, jB, zB) {
        lB(BB, NB);
        const QB = Uj(zB, Lj.XQV9),
          nB = gj,
          dB = Lj.waAJ(this.__wbg_ptr, BB.__wbg_ptr, jB, QB, nB);
        if (dB[2]) throw rj(dB[1]);
        return dB[0] >>> 0
      }
      Xs(BB) {
        return Lj.upWI(this.__wbg_ptr, BB) >>> 0
      }
      constructor() {
        const BB = Lj.xEHD();
        return this.__wbg_ptr = BB, TB.register(this, this.__wbg_ptr, this), this
      }
      scan(BB, jB) {
        lB(BB, NB);
        const zB = Lj.vlgf(this.__wbg_ptr, BB.__wbg_ptr, jB);
        if (zB[2]) throw rj(zB[1]);
        return zB[0] >>> 0
      }
      es(BB) {
        const jB = Uj(BB, Lj.XQV9),
          zB = gj;
        Lj.C8Y1(this.__wbg_ptr, jB, zB)
      }
      Ws() {
        return Lj.AzkB(this.__wbg_ptr) >>> 0
      }
      Ps() {
        return Lj.R9re(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (UB.prototype[Symbol.dispose] = UB.prototype.free);
    class aB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, PB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        Lj.gTdB(BB, 0)
      }
      ws(BB) {
        const jB = Lj.g7xn(this.__wbg_ptr, BB);
        if (jB[2]) throw rj(jB[1]);
        return jB[0] >>> 0
      }
      compute(BB, jB, zB, QB) {
        var nB = Ij(QB) ? 0 : pj(QB, Lj.XQV9, Lj.SrN4),
          dB = gj;
        const IB = Lj.e4OJ(this.__wbg_ptr, BB, Ij(jB) ? Number.MAX_SAFE_INTEGER : jB | 0, zB, nB, dB);
        if (IB[2]) throw rj(IB[1]);
        return IB[0] >>> 0
      }
      Ks(BB) {
        const jB = pj(BB, Lj.XQV9, Lj.SrN4),
          zB = gj;
        Lj.yLaP(this.__wbg_ptr, jB, zB)
      }
      bs() {
        return Lj.yIjE(this.__wbg_ptr)
      }
      Rs(BB) {
        return Lj.SAgf(this.__wbg_ptr, BB) >>> 0
      }
      Os() {
        return Lj.Zr5B(this.__wbg_ptr) >>> 0
      }
      BJ() {
        return Lj.RHux(this.__wbg_ptr) >>> 0
      }
      jJ(BB, jB) {
        const zB = Lj.rZ6L(this.__wbg_ptr, BB, jB);
        if (zB[1]) throw rj(zB[0])
      }
      zJ() {
        return Lj.oOEU(this.__wbg_ptr) >>> 0
      }
      QJ() {
        return Lj.Z3NE(this.__wbg_ptr) >>> 0
      }
      nJ() {
        return Lj.apvv(this.__wbg_ptr) >>> 0
      }
      xs(BB, jB, zB) {
        const QB = uj(BB, Lj.XQV9),
          nB = gj,
          dB = uj(jB, Lj.XQV9),
          IB = gj,
          NB = Lj.U3ei(this.__wbg_ptr, QB, nB, dB, IB, zB);
        if (NB[1]) throw rj(NB[0])
      }
      IJ() {
        return Lj.gjYo(this.__wbg_ptr) >>> 0
      }
      mesh(BB, jB, zB, QB, nB) {
        const dB = Lj.ct6R(this.__wbg_ptr, BB, jB, zB, QB, nB);
        if (dB[2]) throw rj(dB[1]);
        return dB[0] >>> 0
      }
      constructor(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB, aB, pB, rB, sB, JB, mB, yB, kB, GB, LB) {
        const gB = Nj(BB, Lj.XQV9),
          tB = gj,
          SB = aj(jB, Lj.XQV9),
          MB = gj,
          EB = uj(zB, Lj.XQV9),
          iB = gj,
          qB = Uj(QB, Lj.XQV9),
          fB = gj,
          oB = Uj(nB, Lj.XQV9),
          HB = gj,
          DB = uj(dB, Lj.XQV9),
          FB = gj,
          YB = uj(IB, Lj.XQV9),
          VB = gj,
          hB = aj(NB, Lj.XQV9),
          XB = gj,
          ZB = aj(uB, Lj.XQV9),
          AB = gj,
          TB = Uj(UB, Lj.XQV9),
          WB = gj;
        var eB = Ij(aB) ? 0 : Nj(aB, Lj.XQV9),
          lB = gj;
        const wB = uj(pB, Lj.XQV9),
          xB = gj,
          KB = Uj(rB, Lj.XQV9),
          CB = gj;
        var cB = Ij(sB) ? 0 : Uj(sB, Lj.XQV9),
          bB = gj;
        const vB = aj(JB, Lj.XQV9),
          RB = gj,
          OB = Lj.v6MF(gB, tB, SB, MB, EB, iB, qB, fB, oB, HB, DB, FB, YB, VB, hB, XB, ZB, AB, TB, WB, eB, lB, wB, xB, KB, CB, cB, bB, vB, RB, mB, yB, kB, GB, LB);
        if (OB[2]) throw rj(OB[1]);
        return this.__wbg_ptr = OB[0], PB.register(this, this.__wbg_ptr, this), this
      }
      dJ(BB, jB) {
        const zB = uj(BB, Lj.XQV9),
          QB = gj,
          nB = Lj.MrcU(this.__wbg_ptr, zB, QB, jB);
        if (nB[3]) throw rj(nB[2]);
        var dB = KB(nB[0], nB[1]).slice();
        return Lj.aFMC(nB[0], 1 * nB[1], 1), dB
      }
      NJ(BB) {
        Lj.xGOo(this.__wbg_ptr, Ij(BB) ? 16777215 : BB)
      }
      uJ(BB) {
        return Lj.H3Mp(this.__wbg_ptr, BB) >>> 0
      }
      aJ() {
        return Lj.ayPX(this.__wbg_ptr) >>> 0
      }
      UJ() {
        const BB = Lj.ETTO(this.__wbg_ptr);
        if (BB[2]) throw rj(BB[1]);
        return 0 !== BB[0]
      }
      pJ() {
        return Lj.wIic(this.__wbg_ptr) >>> 0
      }
      rJ() {
        return Lj.miQl(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (aB.prototype[Symbol.dispose] = aB.prototype.free);
    class pB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, WB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        Lj.m8oZ(BB, 0)
      }
      compute(BB, jB, zB, QB) {
        var nB = Ij(QB) ? 0 : pj(QB, Lj.XQV9, Lj.SrN4),
          dB = gj;
        const IB = Lj.BOSH(this.__wbg_ptr, BB, Ij(jB) ? Number.MAX_SAFE_INTEGER : jB | 0, zB, nB, dB);
        if (IB[2]) throw rj(IB[1]);
        return IB[0] >>> 0
      }
      Ks(BB) {
        const jB = pj(BB, Lj.XQV9, Lj.SrN4),
          zB = gj;
        Lj.p4Ia(this.__wbg_ptr, jB, zB)
      }
      QJ() {
        return Lj.nWOD(this.__wbg_ptr) >>> 0
      }
      nJ() {
        return Lj.yKh3(this.__wbg_ptr) >>> 0
      }
      sJ(BB) {
        const jB = Lj.xAFD(this.__wbg_ptr, BB);
        if (jB[2]) throw rj(jB[1]);
        return jB[0] >>> 0
      }
      constructor(BB, jB, zB, QB, nB, dB) {
        const IB = Nj(BB, Lj.XQV9),
          NB = gj,
          uB = aj(jB, Lj.XQV9),
          UB = gj,
          aB = uj(zB, Lj.XQV9),
          pB = gj,
          rB = Uj(QB, Lj.XQV9),
          sB = gj,
          JB = Lj.tl9S(IB, NB, uB, UB, aB, pB, rB, sB, nB, dB);
        if (JB[2]) throw rj(JB[1]);
        return this.__wbg_ptr = JB[0], WB.register(this, this.__wbg_ptr, this), this
      }
      aJ() {
        return Lj.wlrA(this.__wbg_ptr) >>> 0
      }
      UJ() {
        const BB = Lj.qjds(this.__wbg_ptr);
        if (BB[2]) throw rj(BB[1]);
        return 0 !== BB[0]
      }
      pJ() {
        return Lj.PKO2(this.__wbg_ptr) >>> 0
      }
    }

    function rB() {
      const BB = Lj.xqga();
      var jB = xB(BB[0], BB[1]).slice();
      return Lj.aFMC(BB[0], 4 * BB[1], 4), jB
    }

    function sB(BB, jB) {
      let zB, QB;
      try {
        const nB = Nj(BB, Lj.XQV9),
          dB = gj,
          IB = pj(jB, Lj.XQV9, Lj.SrN4),
          NB = gj,
          uB = Lj.vWBC(nB, dB, IB, NB);
        return zB = uB[0], QB = uB[1], vB(uB[0], uB[1])
      } finally {
        Lj.aFMC(zB, QB, 1)
      }
    }

    function JB() {
      const BB = Lj.aqk4();
      var jB = xB(BB[0], BB[1]).slice();
      return Lj.aFMC(BB[0], 4 * BB[1], 4), jB
    }

    function mB(BB) {
      return 0 !== Lj.hzQ6(BB)
    }

    function yB(BB, jB) {
      const zB = pj(BB, Lj.XQV9, Lj.SrN4),
        QB = gj,
        nB = Lj.omlE(zB, QB, jB);
      if (nB[1]) throw rj(nB[0])
    }

    function kB() {
      Lj.xpsB()
    }

    function GB() {
      return Lj.GcDc() >>> 0
    }

    function LB(BB) {
      return 0 !== Lj.bU5J(BB)
    }

    function gB(BB) {
      return 0 !== Lj.ZgAf(BB)
    }

    function tB(BB) {
      Lj.cUvp(BB)
    }

    function SB() {
      return Lj.mYPX() >>> 0
    }

    function MB() {
      return Lj.gAzc() >>> 0
    }

    function EB() {
      return 0 !== Lj.afHz()
    }

    function iB() {
      const BB = Lj.lLM2();
      var jB = xB(BB[0], BB[1]).slice();
      return Lj.aFMC(BB[0], 4 * BB[1], 4), jB
    }

    function qB() {
      const BB = Lj.unBf();
      var jB = xB(BB[0], BB[1]).slice();
      return Lj.aFMC(BB[0], 4 * BB[1], 4), jB
    }

    function fB() {
      const BB = Lj.FlBA();
      var jB = xB(BB[0], BB[1]).slice();
      return Lj.aFMC(BB[0], 4 * BB[1], 4), jB
    }

    function oB() {
      return Lj.Elru() >>> 0
    }

    function HB() {
      Lj.OTV6()
    }

    function DB() {
      let BB, jB;
      try {
        const zB = Lj.Bjzu();
        return BB = zB[0], jB = zB[1], vB(zB[0], zB[1])
      } finally {
        Lj.aFMC(BB, jB, 1)
      }
    }

    function FB(BB) {
      Lj.LfXS(eB(BB))
    }

    function YB() {
      return {
        __proto__: null,
        G73z: {
          __proto__: null,
          OIBL: function(BB, jB) {
            return eB(Error(vB(BB, jB)))
          },
          MQey: function(BB, jB) {
            throw new Error(vB(BB, jB))
          },
          wNPt: function(BB) {
            Qj(BB).call()
          },
          I5Ev: function(BB, jB) {
            console.error(vB(BB, jB))
          },
          ZEDf: function() {
            return performance.now()
          },
          dxrH: function(BB) {
            rj(BB)
          }
        }
      }
    }
    Symbol.dispose && (pB.prototype[Symbol.dispose] = pB.prototype.free);
    const VB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => Lj.MGu3(BB, 1))),
      hB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => Lj.G0WK(BB, 1))),
      XB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => Lj.aCC0(BB, 1))),
      ZB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => Lj.hNIH(BB, 1))),
      AB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => Lj.tkBC(BB, 1))),
      TB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => Lj.gVFP(BB, 1))),
      PB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => Lj.gTdB(BB, 1))),
      WB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => Lj.m8oZ(BB, 1)));

    function eB(BB) {
      dj === nj.length && nj.push(nj.length + 1);
      const jB = dj;
      return dj = nj[jB], nj[jB] = BB, jB
    }

    function lB(BB, jB) {
      if (!(BB instanceof jB)) throw new Error(`expected instance of ${jB.name}`)
    }

    function wB(BB, jB) {
      return BB >>>= 0, cB().subarray(BB / 8, BB / 8 + jB)
    }

    function xB(BB, jB) {
      return BB >>>= 0, Bj().subarray(BB / 4, BB / 4 + jB)
    }

    function KB(BB, jB) {
      return BB >>>= 0, zj().subarray(BB / 1, BB / 1 + jB)
    }
    let CB = null;

    function cB() {
      return null !== CB && 0 !== CB.byteLength || (CB = new Float64Array(Lj.memory.buffer)), CB
    }
    let bB = null;

    function vB(BB, jB) {
      return function(BB, jB) {
        mj += jB, mj >= Jj && (sj = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), sj.decode(), mj = jB);
        return sj.decode(zj().subarray(BB, BB + jB))
      }(BB >>> 0, jB)
    }
    let RB = null;
    let OB = null;

    function Bj() {
      return null !== OB && 0 !== OB.byteLength || (OB = new Uint32Array(Lj.memory.buffer)), OB
    }
    let jj = null;

    function zj() {
      return null !== jj && 0 !== jj.byteLength || (jj = new Uint8Array(Lj.memory.buffer)), jj
    }

    function Qj(BB) {
      return nj[BB]
    }
    let nj = new Array(1024).fill(void 0);
    nj.push(void 0, null, !0, !1);
    let dj = nj.length;

    function Ij(BB) {
      return void 0 === BB || null === BB
    }

    function Nj(BB, jB) {
      const zB = jB(2 * BB.length, 2) >>> 0;
      return (null !== RB && 0 !== RB.byteLength || (RB = new Uint16Array(Lj.memory.buffer)), RB).set(BB, zB / 2), gj = BB.length, zB
    }

    function uj(BB, jB) {
      const zB = jB(4 * BB.length, 4) >>> 0;
      return Bj().set(BB, zB / 4), gj = BB.length, zB
    }

    function Uj(BB, jB) {
      const zB = jB(1 * BB.length, 1) >>> 0;
      return zj().set(BB, zB / 1), gj = BB.length, zB
    }

    function aj(BB, jB) {
      const zB = jB(8 * BB.length, 8) >>> 0;
      return cB().set(BB, zB / 8), gj = BB.length, zB
    }

    function pj(BB, jB, zB) {
      if (void 0 === zB) {
        const zB = yj.encode(BB),
          QB = jB(zB.length, 1) >>> 0;
        return zj().subarray(QB, QB + zB.length).set(zB), gj = zB.length, QB
      }
      let QB = BB.length,
        nB = jB(QB, 1) >>> 0;
      const dB = zj();
      let IB = 0;
      for (; IB < QB; IB++) {
        const jB = BB.charCodeAt(IB);
        if (jB > 127) break;
        dB[nB + IB] = jB
      }
      if (IB !== QB) {
        0 !== IB && (BB = BB.slice(IB)), nB = zB(nB, QB, QB = IB + 3 * BB.length, 1) >>> 0;
        const jB = zj().subarray(nB + IB, nB + QB);
        IB += yj.encodeInto(BB, jB).written, nB = zB(nB, QB, IB, 1) >>> 0
      }
      return gj = IB, nB
    }

    function rj(BB) {
      const jB = Qj(BB);
      return function(BB) {
        BB < 1028 || (nj[BB] = dj, dj = BB)
      }(BB), jB
    }
    let sj = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    sj.decode();
    const Jj = 2146435072;
    let mj = 0;
    const yj = new TextEncoder;
    "encodeInto" in yj || (yj.encodeInto = function(BB, jB) {
      const zB = yj.encode(BB);
      return jB.set(zB), {
        read: BB.length,
        written: zB.length
      }
    });
    let kj, Gj, Lj, gj = 0;

    function tj(BB, jB) {
      return Gj = BB, Lj = BB.exports, kj = jB, CB = null, bB = null, RB = null, OB = null, jj = null, Lj.TjtS(), Lj
    }

    function Sj(BB) {
      if (void 0 !== Lj) return Lj;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module: BB
      } = BB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const jB = YB();
      BB instanceof WebAssembly.Module || (BB = new WebAssembly.Module(BB));
      return tj(new WebAssembly.Instance(BB, jB), BB)
    }
    async function Mj(BB) {
      if (void 0 !== Lj) return Lj;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module_or_path: BB
      } = BB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const jB = YB();
      ("string" === typeof BB || "function" === typeof Request && BB instanceof Request || "function" === typeof URL && BB instanceof URL) && (BB = fetch(BB));
      const {
        instance: zB,
        module: QB
      } = await async function(BB, jB) {
        if ("function" === typeof Response && BB instanceof Response) {
          if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(BB, jB)
          } catch (zB) {
            if (! function(BB) {
                switch (BB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(BB.type) || "application/wasm" === BB.headers.get("Content-Type")) throw zB;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", zB)
          }
          const QB = await BB.arrayBuffer();
          return await WebAssembly.instantiate(QB, jB)
        } {
          const zB = await WebAssembly.instantiate(BB, jB);
          return zB instanceof WebAssembly.Instance ? {
            instance: zB,
            module: BB
          } : zB
        }
      }(await BB, jB);
      return tj(zB, QB)
    }
  },
  36373: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB,
      f: () => NB,
      i: () => uB
    });
    var QB = zB(36380),
      nB = zB(2967),
      dB = zB(36387);
    const IB = {
      name: nB.d,
      url: () => new zB.U(zB(36389)),
      init: QB.default,
      bindings: QB
    };

    function NB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB,
        jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : IB,
        zB = arguments.length > 2 ? arguments[2] : void 0;
      return (0, dB.i)(BB, jB, zB)
    }

    function uB(BB) {
      return (0, nB.H)((() => BB), QB, IB)
    }
  },
  36360: (BB, jB, zB) => {
    function QB(BB, jB) {
      return new Error(`${BB}: ${jB instanceof Error?`${jB.name}: ${jB.message}`:String(jB)}`, {
        cause: jB
      })
    }
    zB.d(jB, {
      b: () => QB
    })
  },
  36351: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB,
      f: () => uB
    });
    var QB = zB(2974),
      nB = zB(6578),
      dB = zB(36360);

    function IB() {
      return new URL(new zB.U(zB(36366)).href, globalThis.location?.href).href
    }
    let NB = null;

    function uB() {
      return NB ??= (async () => (0, QB.I)(new URL(IB()), (0, nB.b)("bloxd_wasm_textures")))().catch((BB => {
        throw (0, dB.b)((0, QB.M)(BB), BB)
      })), NB
    }
  },
  36340: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB,
      h: () => dB,
      k: () => uB,
      m: () => IB,
      o: () => nB
    });
    const QB = /^alloc_failed (\d+) bytes$/;

    function nB(BB, jB) {
      return dB(BB, jB) ? `trap=alloc_failed ${jB} bytes` : `trap=${BB}`
    }

    function dB(BB, jB) {
      return "unreachable" === BB && jB > 0
    }

    function IB(BB, jB, zB) {
      const QB = function(BB) {
        return BB instanceof WebAssembly.RuntimeError ? /unreachable/i.test(BB.message) ? "unreachable" : /out of bounds/i.test(BB.message) ? "out_of_bounds" : "runtime_error" : (BB instanceof RangeError || BB instanceof Error && "InternalError" === BB.name) && /call stack|recursion/i.test(BB.message) ? "stack_overflow" : "js_error"
      }(BB);
      if ("unreachable" !== QB) return {
        kind: QB,
        panic: null,
        refusedBytes: 0
      };
      const nB = jB(),
        dB = zB();
      return {
        kind: QB,
        panic: dB > 0 ? null : nB,
        refusedBytes: dB
      }
    }
    const NB = 300;

    function uB(BB) {
      return BB.replace(/\s*\n\s*/g, " / ").slice(0, NB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);