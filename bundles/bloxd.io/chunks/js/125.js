export const id = 125;
export const ids = [125, 192];
export const modules = {
  35319: (BB, TB, dB) => {
    dB.d(TB, {
      reportCappedWasmFailure: () => lB,
      reportWasmFailure: () => pB
    });
    var VB = dB(2702);
    const yB = VB.e - 4;

    function pB(BB, TB, dB) {
      (0, VB.i)(BB, TB, dB, !1)
    }

    function lB(BB, TB, dB) {
      (0, VB.i)(BB, TB, dB, !1, yB)
    }
  },
  35311: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => DB,
      h: () => EB,
      k: () => vB,
      l: () => uB
    });
    var VB = dB(35322),
      yB = dB(3211),
      pB = dB(35343),
      lB = dB(3216),
      JB = dB(35319),
      YB = dB(2469),
      gB = dB(2717),
      oB = dB(2698),
      kB = dB(3073);
    const LB = "bloxdWasmFailureReported";

    function OB() {
      return "undefined" === typeof WebAssembly
    }

    function DB() {
      return (0, VB.g)()
    }

    function uB() {
      if (OB()) return "this browser has no WebAssembly";
      const BB = (0, yB.t)();
      return "compile" === BB || "instantiate" === BB ? `the core wasm didn't load here (${(0,yB.k)()})` : null
    }
    async function HB(BB) {
      return await (0, pB.d)(pB.b, void 0, BB)
    }

    function EB() {
      OB() || (0, kB.b)((() => {
        HB()
      }))
    }

    function vB() {
      if (OB()) return async () => ((0, YB.e)("unsupported", 0), mB("unsupported", "This browser has no WebAssembly"), !1);
      const BB = {
        reloadFailedDownload: !0
      };
      return HB(BB), async () => {
        var TB;
        const dB = performance.now();
        await HB(BB);
        const VB = (performance.now() - dB) / 1e3;
        if ((0, yB.R)()) return (0, YB.e)("ready", VB), (0, lB.R)(pB.b.url()) && (0, JB.reportCappedWasmFailure)("wasm_load", gB.d.message, gB.d.code), !0;
        const kB = oB.c[null !== (TB = (0, yB.t)()) && void 0 !== TB ? TB : "call"];
        return (0, YB.e)(kB, VB), mB(kB, (0, yB.k)()), !1
      }
    }

    function mB(BB, TB) {
      (0, oB.g)(LB, `Bloxd wasm ${BB}, so the game can't start: ${TB}`, TB, BB)
    }
  },
  35358: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/bloxd_wasm_bg.83d4d2ae0f6df4b285af.wasm"
  },
  35335: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/bloxd_wasm_textures_bg.1218b8b300c47f90e7ad.wasm"
  },
  35348: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => LB,
      h: () => oB
    });
    var VB = dB(3211),
      yB = dB(3219),
      pB = dB(5953),
      lB = dB(5959),
      JB = dB(35355);
    let YB = null,
      gB = !1;

    function oB(BB, TB, dB) {
      return null === YB ? YB = kB(BB, TB, dB?.priority) : BB !== YB.build ? console.warn(`Bloxd wasm: ${BB.name} was asked for after ${YB.build.name} started loading, which this thread keeps`) : TB.name !== YB.workers.name && console.warn(`Bloxd wasm: ${TB.name} was asked for workers after ${YB.workers.name}, which this thread keeps`), dB?.reloadFailedDownload && !gB && (0, VB.ab)() && (gB = !0, YB = kB(YB.build, YB.workers)), YB.loaded
    }

    function kB(BB, TB, dB) {
      const pB = (0, VB.J)((async () => {
        (0, lB.A)();
        const VB = OB(BB, dB),
          pB = TB.name === BB.name ? VB : OB(TB, dB);
        await (0, yB.d)([VB, pB]);
        const JB = await VB,
          YB = await pB;
        return (0, lB.A)(), {
          module: JB,
          workerModule: YB
        }
      }), BB);
      return {
        build: BB,
        workers: TB,
        loaded: pB
      }
    }
    async function LB(BB) {
      return OB(BB)
    }

    function OB(BB, TB) {
      return (0, JB.d)(BB, (0, pB.c)(BB.name), TB)
    }
  },
  35343: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => wT,
      d: () => UT,
      f: () => FT
    });
    var VB = {};
    dB.r(VB), dB.d(VB, {
      eo: () => yB,
      EnvelopeKind: () => pB,
      Bk: () => lB,
      PhysicsEngine: () => JB,
      Tk: () => YB,
      Vk: () => gB,
      yk: () => oB,
      lk: () => kB,
      Jk: () => LB,
      Yk: () => OB,
      gk: () => DB,
      kk: () => uB,
      Lk: () => HB,
      Ok: () => EB,
      default: () => sT,
      initSync: () => fT,
      Dk: () => vB,
      uk: () => mB,
      Hk: () => iB,
      Ek: () => NB,
      vk: () => tB,
      mk: () => fB,
      ik: () => sB,
      Nk: () => MB,
      tk: () => zB,
      fk: () => wB,
      sk: () => UB,
      Mk: () => FB,
      zk: () => KB,
      wk: () => rB,
      Uk: () => IB
    });
    class yB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, SB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        iT.mHKB(BB, 0)
      }
      Fk() {
        const BB = iT.sWkg(this.__wbg_ptr);
        if (BB[2]) throw OT(BB[1]);
        return BB[0] >>> 0
      }
      Kk() {
        return iT.WMqO(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const BB = iT.pq5v();
        return this.__wbg_ptr = BB, SB.register(this, this.__wbg_ptr, this), this
      }
      rk() {
        return iT.ZI30(this.__wbg_ptr) >>> 0
      }
      Ik(BB) {
        const TB = iT.iz9J(this.__wbg_ptr, BB);
        if (TB[2]) throw OT(TB[1]);
        return TB[0] >>> 0
      }
      Sk(BB) {
        const TB = iT.T9oq(this.__wbg_ptr, BB);
        if (TB[2]) throw OT(TB[1]);
        return TB[0] >>> 0
      }
    }
    Symbol.dispose && (yB.prototype[Symbol.dispose] = yB.prototype.free);
    const pB = Object.freeze({
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
    class lB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, PB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        iT.UIrT(BB, 0)
      }
      Rk(BB, TB) {
        const dB = iT.nALF(this.__wbg_ptr, BB, TB);
        if (dB[2]) throw OT(dB[1]);
        return dB[0] >>> 0
      }
      ak(BB) {
        const TB = iT.zOah(this.__wbg_ptr, BB);
        if (TB[2]) throw OT(TB[1]);
        return TB[0] >>> 0
      }
      Zk() {
        iT.sfkk(this.__wbg_ptr)
      }
      static Xk() {
        return iT.Sx74() >>> 0
      }
      Wk() {
        return iT.OcJh(this.__wbg_ptr) >>> 0
      }
      hk() {
        const BB = iT.GFEM(this.__wbg_ptr);
        return 0 === BB[0] ? void 0 : BB[1]
      }
      Ck() {
        return iT.xvRs(this.__wbg_ptr) >>> 0
      }
      Gk() {
        return iT.uEzX(this.__wbg_ptr) >>> 0
      }
      static Qk() {
        return iT.S7Ni() >>> 0
      }
      constructor() {
        const BB = iT.gT8u();
        return this.__wbg_ptr = BB, PB.register(this, this.__wbg_ptr, this), this
      }
      qk() {
        return iT.VuOL(this.__wbg_ptr) >>> 0
      }
      xk() {
        return iT.w2eH(this.__wbg_ptr) >>> 0
      }
      jk() {
        return iT.vj7t(this.__wbg_ptr) >>> 0
      }
      Pk(BB) {
        return iT.T2fq(this.__wbg_ptr, BB) >>> 0
      }
      reserve(BB, TB) {
        const dB = iT.HGEC(this.__wbg_ptr, BB, TB);
        if (dB[1]) throw OT(dB[0])
      }
      nk(BB, TB) {
        const dB = gT(BB, iT.hTqM),
          VB = NT;
        iT.GQiQ(this.__wbg_ptr, dB, VB, TB)
      }
      text() {
        let BB, TB;
        try {
          const dB = iT.h3D2(this.__wbg_ptr);
          return BB = dB[0], TB = dB[1], nB(dB[0], dB[1])
        } finally {
          iT.Bg8x(BB, TB, 1)
        }
      }
    }
    Symbol.dispose && (lB.prototype[Symbol.dispose] = lB.prototype.free);
    class JB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, QB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        iT.FOkj(BB, 0)
      }
      TL(BB, TB) {
        CB(TB, yB);
        const dB = iT.PKSN(this.__wbg_ptr, BB, TB.__wbg_ptr);
        if (dB[2]) throw OT(dB[1]);
        return dB[0] >>> 0
      }
      VL() {
        const BB = iT.oebK(this.__wbg_ptr);
        if (BB[1]) throw OT(BB[0])
      }
      YL(BB, TB, dB, VB, yB, pB, lB, JB, gB, oB, kB) {
        CB(BB, YB);
        const LB = iT.i1aP(this.__wbg_ptr, BB.__wbg_ptr, TB, dB, VB, yB, pB, lB, JB, gB, oB, kB);
        if (LB[2]) throw OT(LB[1]);
        return LB[0]
      }
      gL() {
        const BB = iT.CNW0(this.__wbg_ptr);
        var TB = GB(BB[0], BB[1]).slice();
        return iT.Bg8x(BB[0], 8 * BB[1], 8), TB
      }
      oL() {
        return iT.exuy(this.__wbg_ptr) >>> 0
      }
      kL() {
        return iT.Wv5L(this.__wbg_ptr) >>> 0
      }
      LL() {
        return iT.gpUB(this.__wbg_ptr) >>> 0
      }
      constructor(BB, TB, dB, VB, yB, pB, lB, JB) {
        const YB = iT.vUX7(BB, TB, dB, VB, yB, pB, lB, JB);
        if (YB[2]) throw OT(YB[1]);
        return this.__wbg_ptr = YB[0], QB.register(this, this.__wbg_ptr, this), this
      }
      uL(BB) {
        CB(BB, yB);
        const TB = iT.P6vQ(this.__wbg_ptr, BB.__wbg_ptr);
        if (TB[2]) throw OT(TB[1]);
        return TB[0] >>> 0
      }
      HL(BB) {
        const TB = iT.WYkW(this.__wbg_ptr, BB);
        if (TB[1]) throw OT(TB[0])
      }
      EL() {
        return iT.ZTfj(this.__wbg_ptr) >>> 0
      }
      resume(BB, TB) {
        CB(BB, YB), CB(TB, yB);
        const dB = iT.FPyh(this.__wbg_ptr, BB.__wbg_ptr, TB.__wbg_ptr);
        if (dB[2]) throw OT(dB[1]);
        return dB[0] >>> 0
      }
      tL(BB) {
        const TB = iT.WBli(this.__wbg_ptr, BB);
        if (TB[1]) throw OT(TB[0])
      }
      ML(BB, TB) {
        CB(TB, yB);
        const dB = iT.SFAM(this.__wbg_ptr, BB, TB.__wbg_ptr);
        if (dB[1]) throw OT(dB[0])
      }
      UL(BB) {
        const TB = kT(BB, iT.hTqM),
          dB = NT,
          VB = iT.U9Fu(this.__wbg_ptr, TB, dB);
        if (VB[1]) throw OT(VB[0])
      }
      pL(BB, TB, dB, VB, yB, pB) {
        const lB = iT.Zw2F(this.__wbg_ptr, BB, TB, dB, VB, yB, pB);
        if (lB[1]) throw OT(lB[0])
      }
      lL(BB, TB, dB, VB) {
        const yB = gT(BB, iT.hTqM),
          pB = NT,
          lB = kT(TB, iT.hTqM),
          JB = NT,
          YB = kT(dB, iT.hTqM),
          gB = NT,
          oB = kT(VB, iT.hTqM),
          kB = NT,
          LB = iT.YZxl(this.__wbg_ptr, yB, pB, lB, JB, YB, gB, oB, kB);
        if (LB[1]) throw OT(LB[0])
      }
      KL(BB, TB) {
        CB(TB, yB);
        const dB = iT.Nsff(this.__wbg_ptr, BB, TB.__wbg_ptr);
        if (dB[1]) throw OT(dB[0])
      }
      DL(BB, TB, dB) {
        const VB = iT.NkS4(this.__wbg_ptr, BB, TB, dB);
        if (VB[1]) throw OT(VB[0])
      }
      IL(BB, TB, dB, VB, yB, pB, lB, JB, gB, oB) {
        CB(BB, YB);
        return iT.T4dZ(this.__wbg_ptr, BB.__wbg_ptr, TB, dB, VB, yB, pB, lB, JB, gB, oB)
      }
    }
    Symbol.dispose && (JB.prototype[Symbol.dispose] = JB.prototype.free);
    class YB {
      static __wrap(BB) {
        const TB = Object.create(YB.prototype);
        return TB.__wbg_ptr = BB, RB.register(TB, TB.__wbg_ptr, TB), TB
      }
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, RB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        iT.Mekz(BB, 0)
      }
      PL(BB) {
        const TB = iT.q9gF(this.__wbg_ptr, BB);
        if (TB[2]) throw OT(TB[1]);
        return TB[0] >>> 0
      }
      QL(BB, TB, dB) {
        return iT.SyAt(this.__wbg_ptr, BB, TB, dB)
      }
      RL(BB, TB, dB) {
        return iT.WGMD(this.__wbg_ptr, BB, TB, dB) >>> 0
      }
      aL(BB, TB, dB, VB) {
        return 0 !== iT.jGDg(this.__wbg_ptr, BB, TB, dB, VB)
      }
      ZL() {
        iT.hBMd(this.__wbg_ptr)
      }
      WL(BB) {
        const TB = iT.yxuK(this.__wbg_ptr, BB);
        if (TB[3]) throw OT(TB[2]);
        var dB = xB(TB[0], TB[1]).slice();
        return iT.Bg8x(TB[0], 1 * TB[1], 1), dB
      }
      evict(BB, TB) {
        return iT.tX4a(this.__wbg_ptr, BB, TB) >>> 0
      }
      hL() {
        iT.AenT(this.__wbg_ptr)
      }
      CL(BB, TB, dB) {
        iT.oMk0(this.__wbg_ptr, BB, TB, dB)
      }
      qL(BB) {
        const TB = iT.LfLu(this.__wbg_ptr, BB);
        if (TB[1]) throw OT(TB[0])
      }
      xL() {
        return iT.tcqA(this.__wbg_ptr) >>> 0
      }
      jL() {
        return iT.WWKW(this.__wbg_ptr) >>> 0
      }
      AL(BB, TB, dB) {
        iT.woUI(this.__wbg_ptr, BB, TB, dB)
      }
      bL(BB, TB, dB) {
        iT.ZbEr(this.__wbg_ptr, BB, TB, dB)
      }
      nL() {
        return iT.Kx3Z(this.__wbg_ptr) >>> 0
      }
      eL() {
        return iT.LVwN(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const BB = iT.qXd1();
        return this.__wbg_ptr = BB, RB.register(this, this.__wbg_ptr, this), this
      }
      static BO() {
        const BB = iT.o9Jd();
        return YB.__wrap(BB)
      }
      dO() {
        return iT.GtiM(this.__wbg_ptr) >>> 0
      }
      VO() {
        return iT.DqqM(this.__wbg_ptr) >>> 0
      }
      yO(BB, TB, dB, VB) {
        const yB = iT.mbBT(this.__wbg_ptr, BB, TB, dB, VB);
        if (yB[1]) throw OT(yB[0])
      }
      pO() {
        return iT.aPAt(this.__wbg_ptr) >>> 0
      }
      lO() {
        return iT.Tr52(this.__wbg_ptr) >>> 0
      }
      JO(BB, TB, dB, VB) {
        iT.L4Dv(this.__wbg_ptr, BB, TB, dB, VB)
      }
      YO(BB) {
        iT.TBHF(this.__wbg_ptr, BB)
      }
      oO(BB, TB, dB, VB, yB) {
        const pB = oT(TB, iT.hTqM),
          lB = NT,
          JB = gT(dB, iT.hTqM),
          YB = NT,
          gB = kT(VB, iT.hTqM),
          oB = NT,
          kB = iT.ho5I(this.__wbg_ptr, BB, pB, lB, JB, YB, gB, oB, yB);
        if (kB[1]) throw OT(kB[0])
      }
      gO(BB, TB, dB, VB) {
        const yB = oT(BB, iT.hTqM),
          pB = NT,
          lB = gT(TB, iT.hTqM),
          JB = NT,
          YB = kT(dB, iT.hTqM),
          gB = NT,
          oB = oT(VB, iT.hTqM),
          kB = NT,
          LB = iT.YQiZ(this.__wbg_ptr, yB, pB, lB, JB, YB, gB, oB, kB);
        if (LB[1]) throw OT(LB[0])
      }
      HO(BB) {
        const TB = oT(BB, iT.hTqM),
          dB = NT,
          VB = iT.zyQE(this.__wbg_ptr, TB, dB);
        if (VB[1]) throw OT(VB[0])
      }
      EO() {
        return iT.S9a5(this.__wbg_ptr) >>> 0
      }
      vO(BB) {
        const TB = iT.ekc0(this.__wbg_ptr, BB);
        if (TB[2]) throw OT(TB[1]);
        return TB[0] >>> 0
      }
      steer() {
        return iT.xW45(this.__wbg_ptr) >>> 0
      }
      mO() {
        const BB = iT.I9dQ(this.__wbg_ptr);
        var TB = GB(BB[0], BB[1]).slice();
        return iT.Bg8x(BB[0], 8 * BB[1], 8), TB
      }
      iO() {
        return iT.Qx59(this.__wbg_ptr) >>> 0
      }
      mL() {
        const BB = iT.gARt(this.__wbg_ptr);
        var TB, dB, VB = (TB = BB[0], dB = BB[1], TB >>>= 0, (null !== bB && 0 !== bB.byteLength || (bB = new Int32Array(iT.memory.buffer)), bB).subarray(TB / 4, TB / 4 + dB)).slice();
        return iT.Bg8x(BB[0], 4 * BB[1], 4), VB
      }
    }
    Symbol.dispose && (YB.prototype[Symbol.dispose] = YB.prototype.free);
    class gB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, aB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        iT.HvIW(BB, 0)
      }
      tO(BB) {
        const TB = gT(BB, iT.hTqM),
          dB = NT,
          VB = iT.VFyw(this.__wbg_ptr, TB, dB);
        if (VB[1]) throw OT(VB[0])
      }
      fO() {
        return iT.ymtw(this.__wbg_ptr) >>> 0
      }
      sO() {
        return iT.hTBy(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const BB = iT.e2b8();
        return this.__wbg_ptr = BB, aB.register(this, this.__wbg_ptr, this), this
      }
      run(BB, TB) {
        CB(BB, YB);
        const dB = iT.CzS5(this.__wbg_ptr, BB.__wbg_ptr, TB);
        if (dB[2]) throw OT(dB[1]);
        return dB[0] >>> 0
      }
      MO(BB) {
        const TB = gT(BB, iT.hTqM),
          dB = NT;
        iT.zudT(this.__wbg_ptr, TB, dB)
      }
      zO(BB) {
        const TB = gT(BB, iT.hTqM),
          dB = NT;
        iT.dJro(this.__wbg_ptr, TB, dB)
      }
    }
    Symbol.dispose && (gB.prototype[Symbol.dispose] = gB.prototype.free);
    class oB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ZB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        iT.QulG(BB, 0)
      }
      UO(BB, TB) {
        const dB = oT(BB, iT.hTqM),
          VB = NT;
        return iT.dVMu(this.__wbg_ptr, dB, VB, TB) >>> 0
      }
      FO(BB, TB, dB) {
        CB(BB, YB);
        const VB = oT(dB, iT.hTqM),
          yB = NT,
          pB = iT.DTCy(this.__wbg_ptr, BB.__wbg_ptr, TB, VB, yB);
        if (pB[2]) throw OT(pB[1]);
        return pB[0] >>> 0
      }
      wO(BB) {
        return iT.TIhB(this.__wbg_ptr, BB) >>> 0
      }
      constructor() {
        const BB = iT.v8w2();
        return this.__wbg_ptr = BB, ZB.register(this, this.__wbg_ptr, this), this
      }
      scan(BB, TB) {
        CB(BB, YB);
        const dB = iT.sXd0(this.__wbg_ptr, BB.__wbg_ptr, TB);
        if (dB[2]) throw OT(dB[1]);
        return dB[0] >>> 0
      }
      IO(BB) {
        const TB = oT(BB, iT.hTqM),
          dB = NT;
        iT.I2iH(this.__wbg_ptr, TB, dB)
      }
      rO() {
        return iT.mLSx(this.__wbg_ptr) >>> 0
      }
      KO() {
        return iT.QIOu(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (oB.prototype[Symbol.dispose] = oB.prototype.free);
    class kB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, XB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        iT.plSl(BB, 0)
      }
      SO(BB) {
        const TB = iT.d8Ye(this.__wbg_ptr, BB);
        if (TB[2]) throw OT(TB[1]);
        return TB[0] >>> 0
      }
      compute(BB, TB, dB, VB) {
        var yB = JT(VB) ? 0 : LT(VB, iT.hTqM, iT.ZG5t),
          pB = NT;
        const lB = iT.UGai(this.__wbg_ptr, BB, JT(TB) ? Number.MAX_SAFE_INTEGER : TB | 0, dB, yB, pB);
        if (lB[2]) throw OT(lB[1]);
        return lB[0] >>> 0
      }
      QO(BB) {
        const TB = LT(BB, iT.hTqM, iT.ZG5t),
          dB = NT;
        iT.ndet(this.__wbg_ptr, TB, dB)
      }
      aO() {
        return iT.dhV9(this.__wbg_ptr)
      }
      ZO(BB) {
        return iT.A4OC(this.__wbg_ptr, BB) >>> 0
      }
      XO() {
        return iT.oBDq(this.__wbg_ptr) >>> 0
      }
      WO() {
        return iT.PS49(this.__wbg_ptr) >>> 0
      }
      hO(BB, TB) {
        const dB = iT.eLe6(this.__wbg_ptr, BB, TB);
        if (dB[1]) throw OT(dB[0])
      }
      CO() {
        return iT.qBCa(this.__wbg_ptr) >>> 0
      }
      GO() {
        return iT.QU8L(this.__wbg_ptr) >>> 0
      }
      qO() {
        return iT.lzVs(this.__wbg_ptr) >>> 0
      }
      PO(BB, TB, dB) {
        const VB = gT(BB, iT.hTqM),
          yB = NT,
          pB = gT(TB, iT.hTqM),
          lB = NT,
          JB = iT.kttQ(this.__wbg_ptr, VB, yB, pB, lB, dB);
        if (JB[1]) throw OT(JB[0])
      }
      jO() {
        return iT.dKdx(this.__wbg_ptr) >>> 0
      }
      mesh(BB, TB, dB, VB, yB) {
        const pB = iT.BKiM(this.__wbg_ptr, BB, TB, dB, VB, yB);
        if (pB[2]) throw OT(pB[1]);
        return pB[0] >>> 0
      }
      constructor(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB, oB, kB, LB, OB, DB, uB, HB, EB, vB, mB) {
        const iB = YT(BB, iT.hTqM),
          NB = NT,
          tB = kT(TB, iT.hTqM),
          fB = NT,
          sB = gT(dB, iT.hTqM),
          MB = NT,
          zB = oT(VB, iT.hTqM),
          wB = NT,
          UB = oT(yB, iT.hTqM),
          FB = NT,
          KB = gT(pB, iT.hTqM),
          rB = NT,
          IB = gT(lB, iT.hTqM),
          cB = NT,
          SB = kT(JB, iT.hTqM),
          PB = NT,
          QB = kT(YB, iT.hTqM),
          RB = NT,
          aB = oT(gB, iT.hTqM),
          ZB = NT;
        var WB = JT(oB) ? 0 : YT(oB, iT.hTqM),
          hB = NT;
        const CB = gT(kB, iT.hTqM),
          GB = NT,
          qB = oT(LB, iT.hTqM),
          xB = NT;
        var jB = JT(OB) ? 0 : oT(OB, iT.hTqM),
          AB = NT;
        const bB = kT(DB, iT.hTqM),
          nB = NT,
          eB = iT.wjAm(iB, NB, tB, fB, sB, MB, zB, wB, UB, FB, KB, rB, IB, cB, SB, PB, QB, RB, aB, ZB, WB, hB, CB, GB, qB, xB, jB, AB, bB, nB, uB, HB, EB, vB, mB);
        if (eB[2]) throw OT(eB[1]);
        return this.__wbg_ptr = eB[0], XB.register(this, this.__wbg_ptr, this), this
      }
      xO(BB, TB) {
        const dB = gT(BB, iT.hTqM),
          VB = NT,
          yB = iT.rVWX(this.__wbg_ptr, dB, VB, TB);
        if (yB[3]) throw OT(yB[2]);
        var pB = xB(yB[0], yB[1]).slice();
        return iT.Bg8x(yB[0], 1 * yB[1], 1), pB
      }
      bO(BB) {
        iT.yCPn(this.__wbg_ptr, JT(BB) ? 16777215 : BB)
      }
      nO(BB) {
        return iT.wdvW(this.__wbg_ptr, BB) >>> 0
      }
      BD() {
        return iT.oOFC(this.__wbg_ptr) >>> 0
      }
      eO() {
        const BB = iT.Z01O(this.__wbg_ptr);
        if (BB[2]) throw OT(BB[1]);
        return 0 !== BB[0]
      }
      TD() {
        return iT.vkgX(this.__wbg_ptr) >>> 0
      }
      dD() {
        return iT.TvfV(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (kB.prototype[Symbol.dispose] = kB.prototype.free);
    class LB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, WB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        iT.U09M(BB, 0)
      }
      compute(BB, TB, dB, VB) {
        var yB = JT(VB) ? 0 : LT(VB, iT.hTqM, iT.ZG5t),
          pB = NT;
        const lB = iT.kiOs(this.__wbg_ptr, BB, JT(TB) ? Number.MAX_SAFE_INTEGER : TB | 0, dB, yB, pB);
        if (lB[2]) throw OT(lB[1]);
        return lB[0] >>> 0
      }
      QO(BB) {
        const TB = LT(BB, iT.hTqM, iT.ZG5t),
          dB = NT;
        iT.JDul(this.__wbg_ptr, TB, dB)
      }
      GO() {
        return iT.PjRA(this.__wbg_ptr) >>> 0
      }
      qO() {
        return iT.te9D(this.__wbg_ptr) >>> 0
      }
      VD(BB) {
        const TB = iT.bte3(this.__wbg_ptr, BB);
        if (TB[2]) throw OT(TB[1]);
        return TB[0] >>> 0
      }
      constructor(BB, TB, dB, VB, yB, pB) {
        const lB = YT(BB, iT.hTqM),
          JB = NT,
          YB = kT(TB, iT.hTqM),
          gB = NT,
          oB = gT(dB, iT.hTqM),
          kB = NT,
          LB = oT(VB, iT.hTqM),
          OB = NT,
          DB = iT.vnXH(lB, JB, YB, gB, oB, kB, LB, OB, yB, pB);
        if (DB[2]) throw OT(DB[1]);
        return this.__wbg_ptr = DB[0], WB.register(this, this.__wbg_ptr, this), this
      }
      BD() {
        return iT.NVzn(this.__wbg_ptr) >>> 0
      }
      eO() {
        const BB = iT.F7vM(this.__wbg_ptr);
        if (BB[2]) throw OT(BB[1]);
        return 0 !== BB[0]
      }
      TD() {
        return iT.mAAE(this.__wbg_ptr) >>> 0
      }
    }

    function OB() {
      const BB = iT.dYYN();
      var TB = qB(BB[0], BB[1]).slice();
      return iT.Bg8x(BB[0], 4 * BB[1], 4), TB
    }

    function DB(BB, TB) {
      let dB, VB;
      try {
        const yB = YT(BB, iT.hTqM),
          pB = NT,
          lB = LT(TB, iT.hTqM, iT.ZG5t),
          JB = NT,
          YB = iT.XWFP(yB, pB, lB, JB);
        return dB = YB[0], VB = YB[1], nB(YB[0], YB[1])
      } finally {
        iT.Bg8x(dB, VB, 1)
      }
    }

    function uB() {
      const BB = iT.oh9j();
      var TB = qB(BB[0], BB[1]).slice();
      return iT.Bg8x(BB[0], 4 * BB[1], 4), TB
    }

    function HB(BB) {
      return 0 !== iT.drZv(BB)
    }

    function EB(BB, TB) {
      const dB = LT(BB, iT.hTqM, iT.ZG5t),
        VB = NT,
        yB = iT.UfqU(dB, VB, TB);
      if (yB[1]) throw OT(yB[0])
    }

    function vB() {
      iT.ckOG()
    }

    function mB() {
      return iT.QZKp() >>> 0
    }

    function iB(BB) {
      return 0 !== iT.RVIA(BB)
    }

    function NB(BB) {
      return 0 !== iT.R6Pt(BB)
    }

    function tB(BB) {
      iT.kmmR(BB)
    }

    function fB() {
      return iT.egNP() >>> 0
    }

    function sB() {
      return iT.kew6() >>> 0
    }

    function MB() {
      return 0 !== iT.BGuw()
    }

    function zB() {
      const BB = iT.fN9M();
      var TB = qB(BB[0], BB[1]).slice();
      return iT.Bg8x(BB[0], 4 * BB[1], 4), TB
    }

    function wB() {
      const BB = iT.X0AN();
      var TB = qB(BB[0], BB[1]).slice();
      return iT.Bg8x(BB[0], 4 * BB[1], 4), TB
    }

    function UB() {
      const BB = iT.ZSBl();
      var TB = qB(BB[0], BB[1]).slice();
      return iT.Bg8x(BB[0], 4 * BB[1], 4), TB
    }

    function FB() {
      return iT.tdPp() >>> 0
    }

    function KB() {
      iT.LTQK()
    }

    function rB() {
      let BB, TB;
      try {
        const dB = iT.xZUQ();
        return BB = dB[0], TB = dB[1], nB(dB[0], dB[1])
      } finally {
        iT.Bg8x(BB, TB, 1)
      }
    }

    function IB(BB) {
      iT.Xh7o(hB(BB))
    }

    function cB() {
      return {
        __proto__: null,
        h3dK: {
          __proto__: null,
          k4aZ: function(BB, TB) {
            return hB(Error(nB(BB, TB)))
          },
          kGv4: function(BB, TB) {
            throw new Error(nB(BB, TB))
          },
          JmI5: function(BB) {
            yT(BB).call()
          },
          BBwt: function(BB, TB) {
            console.error(nB(BB, TB))
          },
          K970: function() {
            return performance.now()
          },
          KWa1: function(BB) {
            OT(BB)
          }
        }
      }
    }
    Symbol.dispose && (LB.prototype[Symbol.dispose] = LB.prototype.free);
    const SB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => iT.mHKB(BB, 1))),
      PB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => iT.UIrT(BB, 1))),
      QB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => iT.FOkj(BB, 1))),
      RB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => iT.Mekz(BB, 1))),
      aB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => iT.HvIW(BB, 1))),
      ZB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => iT.QulG(BB, 1))),
      XB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => iT.plSl(BB, 1))),
      WB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => iT.U09M(BB, 1)));

    function hB(BB) {
      lT === pT.length && pT.push(pT.length + 1);
      const TB = lT;
      return lT = pT[TB], pT[TB] = BB, TB
    }

    function CB(BB, TB) {
      if (!(BB instanceof TB)) throw new Error(`expected instance of ${TB.name}`)
    }

    function GB(BB, TB) {
      return BB >>>= 0, AB().subarray(BB / 8, BB / 8 + TB)
    }

    function qB(BB, TB) {
      return BB >>>= 0, TT().subarray(BB / 4, BB / 4 + TB)
    }

    function xB(BB, TB) {
      return BB >>>= 0, VT().subarray(BB / 1, BB / 1 + TB)
    }
    let jB = null;

    function AB() {
      return null !== jB && 0 !== jB.byteLength || (jB = new Float64Array(iT.memory.buffer)), jB
    }
    let bB = null;

    function nB(BB, TB) {
      return function(BB, TB) {
        HT += TB, HT >= uT && (DT = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), DT.decode(), HT = TB);
        return DT.decode(VT().subarray(BB, BB + TB))
      }(BB >>> 0, TB)
    }
    let eB = null;
    let BT = null;

    function TT() {
      return null !== BT && 0 !== BT.byteLength || (BT = new Uint32Array(iT.memory.buffer)), BT
    }
    let dT = null;

    function VT() {
      return null !== dT && 0 !== dT.byteLength || (dT = new Uint8Array(iT.memory.buffer)), dT
    }

    function yT(BB) {
      return pT[BB]
    }
    let pT = new Array(1024).fill(void 0);
    pT.push(void 0, null, !0, !1);
    let lT = pT.length;

    function JT(BB) {
      return void 0 === BB || null === BB
    }

    function YT(BB, TB) {
      const dB = TB(2 * BB.length, 2) >>> 0;
      return (null !== eB && 0 !== eB.byteLength || (eB = new Uint16Array(iT.memory.buffer)), eB).set(BB, dB / 2), NT = BB.length, dB
    }

    function gT(BB, TB) {
      const dB = TB(4 * BB.length, 4) >>> 0;
      return TT().set(BB, dB / 4), NT = BB.length, dB
    }

    function oT(BB, TB) {
      const dB = TB(1 * BB.length, 1) >>> 0;
      return VT().set(BB, dB / 1), NT = BB.length, dB
    }

    function kT(BB, TB) {
      const dB = TB(8 * BB.length, 8) >>> 0;
      return AB().set(BB, dB / 8), NT = BB.length, dB
    }

    function LT(BB, TB, dB) {
      if (void 0 === dB) {
        const dB = ET.encode(BB),
          VB = TB(dB.length, 1) >>> 0;
        return VT().subarray(VB, VB + dB.length).set(dB), NT = dB.length, VB
      }
      let VB = BB.length,
        yB = TB(VB, 1) >>> 0;
      const pB = VT();
      let lB = 0;
      for (; lB < VB; lB++) {
        const TB = BB.charCodeAt(lB);
        if (TB > 127) break;
        pB[yB + lB] = TB
      }
      if (lB !== VB) {
        0 !== lB && (BB = BB.slice(lB)), yB = dB(yB, VB, VB = lB + 3 * BB.length, 1) >>> 0;
        const TB = VT().subarray(yB + lB, yB + VB);
        lB += ET.encodeInto(BB, TB).written, yB = dB(yB, VB, lB, 1) >>> 0
      }
      return NT = lB, yB
    }

    function OT(BB) {
      const TB = yT(BB);
      return function(BB) {
        BB < 1028 || (pT[BB] = lT, lT = BB)
      }(BB), TB
    }
    let DT = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    DT.decode();
    const uT = 2146435072;
    let HT = 0;
    const ET = new TextEncoder;
    "encodeInto" in ET || (ET.encodeInto = function(BB, TB) {
      const dB = ET.encode(BB);
      return TB.set(dB), {
        read: BB.length,
        written: dB.length
      }
    });
    let vT, mT, iT, NT = 0;

    function tT(BB, TB) {
      return mT = BB, iT = BB.exports, vT = TB, jB = null, bB = null, eB = null, BT = null, dT = null, iT.ZCFe(), iT
    }

    function fT(BB) {
      if (void 0 !== iT) return iT;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module: BB
      } = BB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const TB = cB();
      BB instanceof WebAssembly.Module || (BB = new WebAssembly.Module(BB));
      return tT(new WebAssembly.Instance(BB, TB), BB)
    }
    async function sT(BB) {
      if (void 0 !== iT) return iT;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module_or_path: BB
      } = BB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const TB = cB();
      ("string" === typeof BB || "function" === typeof Request && BB instanceof Request || "function" === typeof URL && BB instanceof URL) && (BB = fetch(BB));
      const {
        instance: dB,
        module: VB
      } = await async function(BB, TB) {
        if ("function" === typeof Response && BB instanceof Response) {
          if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(BB, TB)
          } catch (dB) {
            if (! function(BB) {
                switch (BB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(BB.type) || "application/wasm" === BB.headers.get("Content-Type")) throw dB;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", dB)
          }
          const VB = await BB.arrayBuffer();
          return await WebAssembly.instantiate(VB, TB)
        } {
          const dB = await WebAssembly.instantiate(BB, TB);
          return dB instanceof WebAssembly.Instance ? {
            instance: dB,
            module: BB
          } : dB
        }
      }(await BB, TB);
      return tT(dB, VB)
    }
    var MT = dB(3211),
      zT = dB(35348);
    const wT = {
      name: MT.d,
      url: () => new dB.U(dB(35358)),
      init: sT,
      JD: VB
    };

    function UT() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wT,
        TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wT,
        dB = arguments.length > 2 ? arguments[2] : void 0;
      return (0, zT.h)(BB, TB, dB)
    }

    function FT(BB) {
      return (0, MT.M)((() => BB), VB, wT)
    }
  },
  5953: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB
    });
    var VB = dB(3216);
    const yB = {
      bloxd_wasm: () => "6a2efd5680223ac4664cc3045620a185da94b2f4e06849c44e38e480fc80e38a",
      bloxd_wasm_client: () => "607784131ab158c610f964eeccd0a0852f74d8ce3d4f4aee969d2f319a80e3b6",
      bloxd_wasm_workers: () => "d5276c08ec0e736252a42b7c12c1091036eec7cc17105f167a56c574e34a0505",
      bloxd_wasm_models: () => "92f9285c30a7dd1629d525045b29e9aca6c3d567d620b4834fec4760fd172ddc",
      bloxd_wasm_webgpu: () => "ed656d46a24419edcd62f7bc46fd9a190039bf0f388edff699daa513cf32f6d2",
      bloxd_wasm_webgl: () => "52116128612eeabf26c6510c105a72c4a8c70bb8b756449209899fb860a93f15",
      bloxd_wasm_webgl1: () => "3697a90b61a47ddbbdceb28b1c9caaf73e71aabf414852b8293dc48cb3f6a6a8",
      bloxd_wasm_replay: () => "5464460b78e15b4bb176525399accbb59f863e7383feb54312b177c696166e48",
      bloxd_wasm_recorder: () => "e1fdcb56336c3bc38215a981e4378ac3821b8912419bc7fd948eb1da353324ba",
      bloxd_wasm_anim: () => "74e56eee078a428190364a7d35938aac7810b6b32140848c6b994c19e70e3042",
      bloxd_wasm_textures: () => "4b25ea5144f7ce6b7af54af6beda3d49671ed61aae27771d204b13971136dce5",
      bloxd_wasm_shader_pack: () => "4746bfad07ac1f13f98ece970e8e224d9432f9561a8a4390c6f598c4e17052f5"
    };
    var pB = dB(5959);

    function lB(BB) {
      const TB = Object.prototype.hasOwnProperty.call(yB, BB) ? yB[BB]() : void 0;
      if (void 0 !== TB) return {
        sha256: TB,
        onMismatch: pB.w
      };
      throw new VB.j(`${BB} has no release digest, so this build refuses it`)
    }
  },
  35331: (BB, TB, dB) => {
    function VB(BB, TB) {
      return new Error(`${BB}: ${TB instanceof Error?`${TB.name}: ${TB.message}`:String(TB)}`, {
        cause: TB
      })
    }
    dB.d(TB, {
      c: () => VB
    })
  },
  35322: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB,
      g: () => YB
    });
    var VB = dB(3216),
      yB = dB(5953),
      pB = dB(35331);

    function lB() {
      return new URL(new dB.U(dB(35335)).href, globalThis.location?.href).href
    }
    let JB = null;

    function YB() {
      return JB ??= (async () => (0, VB.G)(new URL(lB()), (0, yB.c)("bloxd_wasm_textures")))().catch((BB => {
        throw (0, pB.c)((0, VB.M)(BB), BB)
      })), JB
    }
  },
  35355: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => HB,
      d: () => EB
    });
    var VB = dB(3216),
      yB = dB(3219),
      pB = dB(5959);
    const lB = ".zst.bin",
      JB = Reflect.apply,
      YB = ArrayBuffer,
      gB = "undefined" === typeof Response ? void 0 : Response,
      oB = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      kB = function() {
        let BB;
        void 0 !== oB && new oB({
          __proto__: null,
          start(TB) {
            const {
              enqueue: dB,
              close: VB,
              error: yB
            } = Object.getPrototypeOf(TB);
            BB = {
              enqueue: dB,
              close: VB,
              error: yB
            }
          }
        }, {
          __proto__: null
        });
        return BB
      }(),
      LB = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== kB && (0, pB.j)(gB, "Response", !0) && (0, pB.j)(oB, "ReadableStream", !0) && (0, pB.j)(kB.enqueue, "enqueue") && (0, pB.j)(kB.close, "close") && (0, pB.j)(kB.error, "error") && (0, pB.j)(VB.Z, "body") && (0, pB.j)(VB.Q, "getReader") && (0, pB.j)(VB.W, "read")
        } catch {
          return !1
        }
      }();
    let OB = !1;

    function DB(BB) {
      for (const TB of "bloxd_wasm_webgpu:4954899,bloxd_wasm_webgl:5221928,bloxd_wasm_webgl1:4725588,bloxd_wasm_workers:196044,bloxd_wasm_models:312534,bloxd_wasm_client:3648335"?.split(",") ?? []) {
        const [dB, VB] = TB.split(":");
        if (dB === BB) {
          const BB = Number(VB);
          return Number.isInteger(BB) && BB > 0 ? BB : void 0
        }
      }
    }

    function uB(BB) {
      const TB = DB(BB.name);
      if (void 0 !== TB && LB && !OB) return {
        href: `${BB.url().href}${lB}`,
        length: TB
      }
    }

    function HB(BB) {
      return uB(BB)?.href ?? BB.url().href
    }

    function EB(BB, TB, pB) {
      const lB = BB.url(),
        LB = uB(BB);
      return void 0 !== LB ? async function(BB, TB, pB, lB) {
        let {
          href: LB,
          length: DB
        } = TB;
        try {
          return await (0, VB.fb)(LB, ((BB, TB, uB) => async function(BB, TB, pB, lB, LB, DB, uB) {
            const HB = new YB(TB);
            let EB;
            vB ??= (0, VB.S)(dB.e(60).then((() => dB(39813))));
            try {
              EB = await fetch(BB, void 0 === uB ? {
                signal: pB
              } : {
                signal: pB,
                priority: uB
              })
            } catch (SB) {
              throw new Error(`Fetching ${BB} failed: ${iB(SB)}`)
            }
            const {
              ok: NB,
              status: tB,
              body: fB
            } = function(BB, TB) {
              try {
                const {
                  ok: BB,
                  status: dB
                } = TB;
                return {
                  ok: BB,
                  status: dB,
                  body: JB(VB.Z, TB, [])
                }
              } catch {
                throw new Error(`${BB} came in a response a page script made`)
              }
            }(BB, EB);
            if (!NB) throw new Error(`Fetching ${BB} failed: HTTP ${tB}`);
            lB();
            const {
              reader: sB,
              controller: MB,
              compiled: zB
            } = function(BB, TB) {
              let dB;
              try {
                let BB;
                dB = JB(VB.Q, TB, []);
                const yB = new oB({
                    __proto__: null,
                    start(TB) {
                      BB = TB
                    }
                  }, {
                    __proto__: null
                  }),
                  pB = new gB(yB, {
                    __proto__: null,
                    headers: {
                      __proto__: null,
                      "Content-Type": "application/wasm"
                    }
                  });
                return {
                  reader: dB,
                  controller: BB,
                  compiled: (0, VB.S)((0, VB.B)((0, VB.jb)(pB)))
                }
              } catch (SB) {
                throw void 0 !== dB && mB(dB), new Error(`${BB} could not be streamed into a compile: ${iB(SB)}`)
              }
            }(BB, fB), {
              enqueue: wB,
              close: UB,
              error: FB
            } = kB, KB = BB => {
              try {
                JB(FB, MB, [BB])
              } catch {} finally {
                mB(sB)
              }
            };
            pB.addEventListener("abort", (() => {
              KB(new Error(`${BB} stalled`))
            }), {
              once: !0
            });
            let rB = !1;
            (0, yB.q)(zB, (() => {}), (() => {
              rB = !0, mB(sB)
            }));
            let IB = 0;
            try {
              let dB;
              try {
                dB = await vB
              } catch (SB) {
                throw OB = !0, new Error(`The zstd decoder did not load: ${iB(SB)}`)
              }
              const {
                ZstdFrameDecoder: yB
              } = dB, pB = new yB(TB);
              for (; !pB.done && !rB;) {
                let TB;
                try {
                  TB = await JB(VB.W, sB, [])
                } catch (SB) {
                  throw new Error(`Downloading ${BB} failed: ${iB(SB)}`)
                }
                if (TB.done || rB) break;
                lB();
                try {
                  pB.push(TB.value)
                } catch (SB) {
                  throw new Error(`${BB} did not decode: ${iB(SB)}`)
                }
                const {
                  output: dB,
                  decoded: yB
                } = pB;
                if (null !== dB && yB !== IB) {
                  JB(VB.bb, new VB.o(HB), [dB.subarray(IB, yB), IB]);
                  try {
                    JB(wB, MB, [new VB.o(HB, IB, yB - IB)])
                  } catch {
                    rB = !0
                  }
                  IB = yB
                }
              }
              if (LB(), rB) throw await zB, new Error(`${BB}'s compile stopped reading before its end`);
              if (!pB.done) throw new Error(`${BB} ended before its module did`);
              mB(sB);
              try {
                JB(UB, MB, [])
              } catch {}
            } catch (SB) {
              throw KB(SB), SB
            }
            const cB = await zB;
            void 0 !== DB && await (0, VB.x)(BB, new VB.o(HB), {
              sha256: DB.sha256,
              onMismatch: () => {}
            });
            return cB
          }(LB, DB, BB, TB, uB, pB, lB)))
        } catch (HB) {
          console.warn(`${iB(HB)}: loading ${BB.href} instead`)
        }
        const uB = await (0, VB.G)(BB, pB, {
          hideThen: !0,
          priority: lB
        });
        return uB
      }(lB, LB, TB, pB): (0, VB.G)(lB, TB, {
        hideThen: void 0 !== DB(BB.name),
        priority: pB
      })
    }
    let vB = null;

    function mB(BB) {
      try {
        (0, VB.S)(BB.cancel())
      } catch {}
    }

    function iB(BB) {
      return BB instanceof Error ? BB.message : String(BB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);