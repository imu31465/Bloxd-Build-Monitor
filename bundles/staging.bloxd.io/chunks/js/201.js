export const id = 201;
export const ids = [201, 202];
export const modules = {
  35316: (TT, oT, IT) => {
    IT.d(oT, {
      reportCappedWasmFailure: () => WT,
      reportWasmFailure: () => kT
    });
    var iT = IT(2788);
    const zT = iT.e - 4;

    function kT(TT, oT, IT) {
      (0, iT.i)(TT, oT, IT, !1)
    }

    function WT(TT, oT, IT) {
      (0, iT.i)(TT, oT, IT, !1, zT)
    }
  },
  35314: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => cT,
      f: () => rT,
      g: () => AT,
      k: () => KT
    });
    var iT = IT(35323),
      zT = IT(3276),
      kT = IT(35340),
      WT = IT(3280),
      XT = IT(35316),
      BT = IT(2568),
      FT = IT(2801),
      ST = IT(2785),
      DT = IT(690);
    const LT = "bloxdWasmFailureReported";

    function xT() {
      return "undefined" === typeof WebAssembly
    }

    function cT() {
      return (0, iT.d)()
    }

    function KT() {
      if (xT()) return "this browser has no WebAssembly";
      const TT = (0, zT.n)();
      return "compile" === TT || "instantiate" === TT ? `the core wasm didn't load here (${(0,zT.g)()})` : null
    }
    async function MT(TT) {
      return await (0, kT.e)(kT.c, void 0, TT)
    }

    function rT() {
      xT() || (0, DT.b)((() => {
        MT()
      }))
    }

    function AT() {
      if (xT()) return async () => ((0, BT.h)("unsupported", 0), gT("unsupported", "This browser has no WebAssembly"), !1);
      const TT = {
        reloadFailedDownload: !0
      };
      return MT(TT), async () => {
        var oT;
        const IT = performance.now();
        await MT(TT);
        const iT = (performance.now() - IT) / 1e3;
        if ((0, zT.L)()) return (0, BT.h)("ready", iT), (0, WT.U)(kT.c.url()) && (0, XT.reportCappedWasmFailure)("wasm_load", FT.e.message, FT.e.code), !0;
        const DT = ST.e[null !== (oT = (0, zT.n)()) && void 0 !== oT ? oT : "call"];
        return (0, BT.h)(DT, iT), gT(DT, (0, zT.g)()), !1
      }
    }

    function gT(TT, oT) {
      (0, ST.k)(LT, `Bloxd wasm ${TT}, so the game can't start: ${oT}`, oT, TT)
    }
  },
  35347: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/bloxd_wasm_bg.29a91062dd55e53ec18a.wasm"
  },
  35333: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/bloxd_wasm_textures_bg.fb0f513d95c3f1f0e113.wasm"
  },
  35340: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => Eo,
      e: () => fo,
      f: () => Co
    });
    var iT = {};
    IT.r(iT), IT.d(iT, {
      VS: () => zT,
      EnvelopeKind: () => kT,
      TD: () => WT,
      PhysicsEngine: () => XT,
      oD: () => BT,
      iD: () => FT,
      zD: () => ST,
      kD: () => DT,
      WD: () => LT,
      XD: () => xT,
      BD: () => cT,
      FD: () => KT,
      SD: () => MT,
      DD: () => rT,
      default: () => Ro,
      initSync: () => eo,
      LD: () => AT,
      xD: () => gT,
      cD: () => hT,
      KD: () => wT,
      MD: () => mT,
      rD: () => eT,
      AD: () => RT,
      gD: () => uT,
      hD: () => vT,
      wD: () => ET,
      mD: () => fT,
      eD: () => CT,
      RD: () => jT,
      uD: () => JT,
      vD: () => UT
    });
    class zT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, YT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        ho.pOcu(TT, 0)
      }
      ED() {
        const TT = ho.og7n(this.__wbg_ptr);
        if (TT[2]) throw xo(TT[1]);
        return TT[0] >>> 0
      }
      fD() {
        return ho.IyZe(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const TT = ho.ryVv();
        return this.__wbg_ptr = TT, YT.register(this, this.__wbg_ptr, this), this
      }
      CD() {
        return ho.qyWI(this.__wbg_ptr) >>> 0
      }
      jD(TT) {
        const oT = ho.TyqQ(this.__wbg_ptr, TT);
        if (oT[2]) throw xo(oT[1]);
        return oT[0] >>> 0
      }
      JD(TT) {
        const oT = ho.y7Yj(this.__wbg_ptr, TT);
        if (oT[2]) throw xo(oT[1]);
        return oT[0] >>> 0
      }
    }
    Symbol.dispose && (zT.prototype[Symbol.dispose] = zT.prototype.free);
    const kT = Object.freeze({
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
    class WT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, QT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        ho.IkFP(TT, 0)
      }
      YD(TT, oT) {
        const IT = ho.Zw0f(this.__wbg_ptr, TT, oT);
        if (IT[2]) throw xo(IT[1]);
        return IT[0] >>> 0
      }
      QD(TT) {
        const oT = ho.EfBn(this.__wbg_ptr, TT);
        if (oT[2]) throw xo(oT[1]);
        return oT[0] >>> 0
      }
      OD() {
        ho.jocV(this.__wbg_ptr)
      }
      static HD() {
        return ho.sncf() >>> 0
      }
      nD() {
        return ho.pZDk(this.__wbg_ptr) >>> 0
      }
      qD() {
        const TT = ho.igVh(this.__wbg_ptr);
        return 0 === TT[0] ? void 0 : TT[1]
      }
      ZD() {
        return ho.UpTQ(this.__wbg_ptr) >>> 0
      }
      lD() {
        return ho.Ljme(this.__wbg_ptr) >>> 0
      }
      static aD() {
        return ho.Ypxn() >>> 0
      }
      constructor() {
        const TT = ho.W5FX();
        return this.__wbg_ptr = TT, QT.register(this, this.__wbg_ptr, this), this
      }
      sD() {
        return ho.cRAj(this.__wbg_ptr) >>> 0
      }
      tD() {
        return ho.oCox(this.__wbg_ptr) >>> 0
      }
      GD() {
        return ho.zN8g(this.__wbg_ptr) >>> 0
      }
      UD(TT) {
        return ho.MR4n(this.__wbg_ptr, TT) >>> 0
      }
      reserve(TT, oT) {
        const IT = ho.Bst3(this.__wbg_ptr, TT, oT);
        if (IT[1]) throw xo(IT[0])
      }
      yD(TT, oT) {
        const IT = Fo(TT, ho.aJd7),
          iT = wo;
        ho.akDd(this.__wbg_ptr, IT, iT, oT)
      }
      text() {
        let TT, oT;
        try {
          const IT = ho.Gp03(this.__wbg_ptr);
          return TT = IT[0], oT = IT[1], dT(IT[0], IT[1])
        } finally {
          ho.qm1V(TT, oT, 1)
        }
      }
    }
    Symbol.dispose && (WT.prototype[Symbol.dispose] = WT.prototype.free);
    class XT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, OT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        ho.dsmI(TT, 0)
      }
      PD(TT, oT) {
        tT(oT, zT);
        const IT = ho.yEnl(this.__wbg_ptr, TT, oT.__wbg_ptr);
        if (IT[2]) throw xo(IT[1]);
        return IT[0] >>> 0
      }
      VD() {
        const TT = ho.gEjX(this.__wbg_ptr);
        if (TT[1]) throw xo(TT[0])
      }
      zL(TT, oT, IT, iT, zT, kT, WT, XT, FT, ST, DT) {
        tT(TT, BT);
        const LT = ho.QP7I(this.__wbg_ptr, TT.__wbg_ptr, oT, IT, iT, zT, kT, WT, XT, FT, ST, DT);
        if (LT[2]) throw xo(LT[1]);
        return LT[0]
      }
      kL() {
        const TT = ho.q21M(this.__wbg_ptr);
        var oT = GT(TT[0], TT[1]).slice();
        return ho.qm1V(TT[0], 8 * TT[1], 8), oT
      }
      WL() {
        return ho.j5Wm(this.__wbg_ptr) >>> 0
      }
      XL() {
        return ho.lolf(this.__wbg_ptr) >>> 0
      }
      BL() {
        return ho.MOVS(this.__wbg_ptr) >>> 0
      }
      constructor(TT, oT, IT, iT, zT, kT, WT, XT) {
        const BT = ho.Q09P(TT, oT, IT, iT, zT, kT, WT, XT);
        if (BT[2]) throw xo(BT[1]);
        return this.__wbg_ptr = BT[0], OT.register(this, this.__wbg_ptr, this), this
      }
      DL(TT) {
        tT(TT, zT);
        const oT = ho.vVXj(this.__wbg_ptr, TT.__wbg_ptr);
        if (oT[2]) throw xo(oT[1]);
        return oT[0] >>> 0
      }
      LL(TT) {
        const oT = ho.TQ52(this.__wbg_ptr, TT);
        if (oT[1]) throw xo(oT[0])
      }
      xL() {
        return ho.V8xk(this.__wbg_ptr) >>> 0
      }
      resume(TT, oT) {
        tT(TT, BT), tT(oT, zT);
        const IT = ho.zHKm(this.__wbg_ptr, TT.__wbg_ptr, oT.__wbg_ptr);
        if (IT[2]) throw xo(IT[1]);
        return IT[0] >>> 0
      }
      AL(TT) {
        const oT = ho.I3bg(this.__wbg_ptr, TT);
        if (oT[1]) throw xo(oT[0])
      }
      wL(TT, oT) {
        tT(oT, zT);
        const IT = ho.r47k(this.__wbg_ptr, TT, oT.__wbg_ptr);
        if (IT[1]) throw xo(IT[0])
      }
      RL(TT) {
        const oT = Do(TT, ho.aJd7),
          IT = wo,
          iT = ho.IJFQ(this.__wbg_ptr, oT, IT);
        if (iT[1]) throw xo(iT[0])
      }
      oL(TT, oT, IT, iT, zT, kT) {
        const WT = ho.WY5q(this.__wbg_ptr, TT, oT, IT, iT, zT, kT);
        if (WT[1]) throw xo(WT[0])
      }
      IL(TT, oT, IT, iT) {
        const zT = Fo(TT, ho.aJd7),
          kT = wo,
          WT = Do(oT, ho.aJd7),
          XT = wo,
          BT = Do(IT, ho.aJd7),
          FT = wo,
          ST = Do(iT, ho.aJd7),
          DT = wo,
          LT = ho.BXnk(this.__wbg_ptr, zT, kT, WT, XT, BT, FT, ST, DT);
        if (LT[1]) throw xo(LT[0])
      }
      vL(TT, oT) {
        tT(oT, zT);
        const IT = ho.blBe(this.__wbg_ptr, TT, oT.__wbg_ptr);
        if (IT[1]) throw xo(IT[0])
      }
      SL(TT, oT, IT) {
        const iT = ho.TI3b(this.__wbg_ptr, TT, oT, IT);
        if (iT[1]) throw xo(iT[0])
      }
      fL(TT, oT, IT, iT, zT, kT, WT, XT, FT, ST) {
        tT(TT, BT);
        return ho.CDq9(this.__wbg_ptr, TT.__wbg_ptr, oT, IT, iT, zT, kT, WT, XT, FT, ST)
      }
    }
    Symbol.dispose && (XT.prototype[Symbol.dispose] = XT.prototype.free);
    class BT {
      static __wrap(TT) {
        const oT = Object.create(BT.prototype);
        return oT.__wbg_ptr = TT, HT.register(oT, oT.__wbg_ptr, oT), oT
      }
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, HT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        ho.VfdD(TT, 0)
      }
      JL(TT) {
        const oT = ho.bkwv(this.__wbg_ptr, TT);
        if (oT[2]) throw xo(oT[1]);
        return oT[0] >>> 0
      }
      UL(TT, oT, IT) {
        return ho.o88v(this.__wbg_ptr, TT, oT, IT)
      }
      aL(TT, oT, IT) {
        return ho.kkSA(this.__wbg_ptr, TT, oT, IT) >>> 0
      }
      YL(TT, oT, IT, iT) {
        return 0 !== ho.eWrZ(this.__wbg_ptr, TT, oT, IT, iT)
      }
      QL() {
        ho.Mz3w(this.__wbg_ptr)
      }
      HL(TT) {
        const oT = ho.gpMK(this.__wbg_ptr, TT);
        if (oT[3]) throw xo(oT[2]);
        var IT = bT(oT[0], oT[1]).slice();
        return ho.qm1V(oT[0], 1 * oT[1], 1), IT
      }
      evict(TT, oT) {
        return ho.n4Jb(this.__wbg_ptr, TT, oT) >>> 0
      }
      nL() {
        ho.laFY(this.__wbg_ptr)
      }
      qL(TT, oT, IT) {
        ho.UVCc(this.__wbg_ptr, TT, oT, IT)
      }
      ZL(TT) {
        const oT = ho.dFcD(this.__wbg_ptr, TT);
        if (oT[1]) throw xo(oT[0])
      }
      lL() {
        return ho.sII8(this.__wbg_ptr) >>> 0
      }
      sL() {
        return ho.WqXD(this.__wbg_ptr) >>> 0
      }
      tL(TT, oT, IT) {
        ho.Wfxj(this.__wbg_ptr, TT, oT, IT)
      }
      pL(TT, oT, IT) {
        ho.vB8Q(this.__wbg_ptr, TT, oT, IT)
      }
      bL() {
        return ho.aB3H(this.__wbg_ptr) >>> 0
      }
      yL() {
        return ho.Prsu(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const TT = ho.eaLb();
        return this.__wbg_ptr = TT, HT.register(this, this.__wbg_ptr, this), this
      }
      static NL() {
        const TT = ho.Sxgj();
        return BT.__wrap(TT)
      }
      PL() {
        return ho.B3PG(this.__wbg_ptr) >>> 0
      }
      dL() {
        return ho.rLPW(this.__wbg_ptr) >>> 0
      }
      VL(TT, oT, IT, iT) {
        const zT = ho.wh5O(this.__wbg_ptr, TT, oT, IT, iT);
        if (zT[1]) throw xo(zT[0])
      }
      Tx() {
        return ho.oq35(this.__wbg_ptr) >>> 0
      }
      Ix() {
        return ho.Xa5r(this.__wbg_ptr) >>> 0
      }
      ix(TT, oT, IT, iT) {
        ho.ruLs(this.__wbg_ptr, TT, oT, IT, iT)
      }
      zx(TT) {
        ho.Nusx(this.__wbg_ptr, TT)
      }
      Wx(TT, oT, IT, iT, zT) {
        const kT = So(oT, ho.aJd7),
          WT = wo,
          XT = Fo(IT, ho.aJd7),
          BT = wo,
          FT = Do(iT, ho.aJd7),
          ST = wo,
          DT = ho.dWPY(this.__wbg_ptr, TT, kT, WT, XT, BT, FT, ST, zT);
        if (DT[1]) throw xo(DT[0])
      }
      kx(TT, oT, IT, iT) {
        const zT = So(TT, ho.aJd7),
          kT = wo,
          WT = Fo(oT, ho.aJd7),
          XT = wo,
          BT = Do(IT, ho.aJd7),
          FT = wo,
          ST = So(iT, ho.aJd7),
          DT = wo,
          LT = ho.YDOw(this.__wbg_ptr, zT, kT, WT, XT, BT, FT, ST, DT);
        if (LT[1]) throw xo(LT[0])
      }
      Lx(TT) {
        const oT = So(TT, ho.aJd7),
          IT = wo,
          iT = ho.PyRE(this.__wbg_ptr, oT, IT);
        if (iT[1]) throw xo(iT[0])
      }
      Kx() {
        return ho.N4Jp(this.__wbg_ptr) >>> 0
      }
      Mx(TT) {
        const oT = ho.R39v(this.__wbg_ptr, TT);
        if (oT[2]) throw xo(oT[1]);
        return oT[0] >>> 0
      }
      steer() {
        return ho.gzEz(this.__wbg_ptr) >>> 0
      }
      Ax() {
        const TT = ho.xX4v(this.__wbg_ptr);
        var oT = GT(TT[0], TT[1]).slice();
        return ho.qm1V(TT[0], 8 * TT[1], 8), oT
      }
      gx() {
        return ho.s1XI(this.__wbg_ptr) >>> 0
      }
      KL() {
        const TT = ho.TtCU(this.__wbg_ptr);
        var oT, IT, iT = (oT = TT[0], IT = TT[1], oT >>>= 0, (null !== PT && 0 !== PT.byteLength || (PT = new Int32Array(ho.memory.buffer)), PT).subarray(oT / 4, oT / 4 + IT)).slice();
        return ho.qm1V(TT[0], 4 * TT[1], 4), iT
      }
    }
    Symbol.dispose && (BT.prototype[Symbol.dispose] = BT.prototype.free);
    class FT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, nT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        ho.jCEM(TT, 0)
      }
      hx(TT) {
        const oT = Fo(TT, ho.aJd7),
          IT = wo,
          iT = ho.DRga(this.__wbg_ptr, oT, IT);
        if (iT[1]) throw xo(iT[0])
      }
      wx() {
        return ho.ozEM(this.__wbg_ptr) >>> 0
      }
      mx() {
        return ho.wzYh(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const TT = ho.AR7g();
        return this.__wbg_ptr = TT, nT.register(this, this.__wbg_ptr, this), this
      }
      run(TT, oT) {
        tT(TT, BT);
        const IT = ho.ZUFg(this.__wbg_ptr, TT.__wbg_ptr, oT);
        if (IT[2]) throw xo(IT[1]);
        return IT[0] >>> 0
      }
      Rx(TT) {
        const oT = Fo(TT, ho.aJd7),
          IT = wo;
        ho.bdNG(this.__wbg_ptr, oT, IT)
      }
      vx(TT) {
        const oT = Fo(TT, ho.aJd7),
          IT = wo;
        ho.fMPP(this.__wbg_ptr, oT, IT)
      }
    }
    Symbol.dispose && (FT.prototype[Symbol.dispose] = FT.prototype.free);
    class ST {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, qT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        ho.iNEc(TT, 0)
      }
      Cx(TT, oT) {
        const IT = So(TT, ho.aJd7),
          iT = wo;
        return ho.TbRc(this.__wbg_ptr, IT, iT, oT) >>> 0
      }
      jx(TT, oT, IT) {
        tT(TT, BT);
        const iT = So(IT, ho.aJd7),
          zT = wo,
          kT = ho.sFoN(this.__wbg_ptr, TT.__wbg_ptr, oT, iT, zT);
        if (kT[2]) throw xo(kT[1]);
        return kT[0] >>> 0
      }
      Ex(TT) {
        return ho.NbhR(this.__wbg_ptr, TT) >>> 0
      }
      constructor() {
        const TT = ho.NWGP();
        return this.__wbg_ptr = TT, qT.register(this, this.__wbg_ptr, this), this
      }
      scan(TT, oT) {
        tT(TT, BT);
        const IT = ho.dssw(this.__wbg_ptr, TT.__wbg_ptr, oT);
        if (IT[2]) throw xo(IT[1]);
        return IT[0] >>> 0
      }
      Yx(TT) {
        const oT = So(TT, ho.aJd7),
          IT = wo;
        ho.U94i(this.__wbg_ptr, oT, IT)
      }
      Ux() {
        return ho.hV5J(this.__wbg_ptr) >>> 0
      }
      Jx() {
        return ho.uBiF(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (ST.prototype[Symbol.dispose] = ST.prototype.free);
    class DT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ZT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        ho.K6Ai(TT, 0)
      }
      Ox(TT) {
        const oT = ho.duZm(this.__wbg_ptr, TT);
        if (oT[2]) throw xo(oT[1]);
        return oT[0] >>> 0
      }
      compute(TT, oT, IT, iT) {
        var zT = Xo(iT) ? 0 : Lo(iT, ho.aJd7, ho.uPUG),
          kT = wo;
        const WT = ho.Gwgh(this.__wbg_ptr, TT, Xo(oT) ? Number.MAX_SAFE_INTEGER : oT | 0, IT, zT, kT);
        if (WT[2]) throw xo(WT[1]);
        return WT[0] >>> 0
      }
      nx(TT) {
        const oT = Lo(TT, ho.aJd7, ho.uPUG),
          IT = wo;
        ho.QvVh(this.__wbg_ptr, oT, IT)
      }
      Zx() {
        return ho.yLFq(this.__wbg_ptr)
      }
      lx(TT) {
        return ho.kiAH(this.__wbg_ptr, TT) >>> 0
      }
      sx() {
        return ho.q5X2(this.__wbg_ptr) >>> 0
      }
      tx() {
        return ho.ILoR(this.__wbg_ptr) >>> 0
      }
      Gx(TT, oT) {
        const IT = ho.iUEd(this.__wbg_ptr, TT, oT);
        if (IT[1]) throw xo(IT[0])
      }
      bx() {
        return ho.xy74(this.__wbg_ptr) >>> 0
      }
      yx() {
        return ho.zFLV(this.__wbg_ptr) >>> 0
      }
      Nx() {
        return ho.VYFA(this.__wbg_ptr) >>> 0
      }
      Hx(TT, oT, IT) {
        const iT = Fo(TT, ho.aJd7),
          zT = wo,
          kT = Fo(oT, ho.aJd7),
          WT = wo,
          XT = ho.zG9Q(this.__wbg_ptr, iT, zT, kT, WT, IT);
        if (XT[1]) throw xo(XT[0])
      }
      Vx() {
        return ho.UtVe(this.__wbg_ptr) >>> 0
      }
      mesh(TT, oT, IT, iT, zT) {
        const kT = ho.RyXs(this.__wbg_ptr, TT, oT, IT, iT, zT);
        if (kT[2]) throw xo(kT[1]);
        return kT[0] >>> 0
      }
      constructor(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT, ST, DT, LT, xT, cT, KT, MT, rT, AT, gT) {
        const hT = Bo(TT, ho.aJd7),
          wT = wo,
          mT = Do(oT, ho.aJd7),
          eT = wo,
          RT = Fo(IT, ho.aJd7),
          uT = wo,
          vT = So(iT, ho.aJd7),
          ET = wo,
          fT = So(zT, ho.aJd7),
          CT = wo,
          jT = Fo(kT, ho.aJd7),
          JT = wo,
          UT = Fo(WT, ho.aJd7),
          aT = wo,
          YT = Do(XT, ho.aJd7),
          QT = wo,
          OT = Do(BT, ho.aJd7),
          HT = wo,
          nT = So(FT, ho.aJd7),
          qT = wo;
        var lT = Xo(ST) ? 0 : Bo(ST, ho.aJd7),
          sT = wo;
        const tT = Fo(DT, ho.aJd7),
          GT = wo,
          pT = So(LT, ho.aJd7),
          bT = wo;
        var yT = Xo(xT) ? 0 : So(xT, ho.aJd7),
          NT = wo;
        const PT = Do(cT, ho.aJd7),
          dT = wo,
          VT = ho.QiT4(hT, wT, mT, eT, RT, uT, vT, ET, fT, CT, jT, JT, UT, aT, YT, QT, OT, HT, nT, qT, lT, sT, tT, GT, pT, bT, yT, NT, PT, dT, KT, MT, rT, AT, gT);
        if (VT[2]) throw xo(VT[1]);
        return this.__wbg_ptr = VT[0], ZT.register(this, this.__wbg_ptr, this), this
      }
      Px(TT, oT) {
        const IT = Fo(TT, ho.aJd7),
          iT = wo,
          zT = ho.obhc(this.__wbg_ptr, IT, iT, oT);
        if (zT[3]) throw xo(zT[2]);
        var kT = bT(zT[0], zT[1]).slice();
        return ho.qm1V(zT[0], 1 * zT[1], 1), kT
      }
      Tc(TT) {
        ho.r7jV(this.__wbg_ptr, Xo(TT) ? 16777215 : TT)
      }
      oc(TT) {
        return ho.I9YI(this.__wbg_ptr, TT) >>> 0
      }
      zc() {
        return ho.mbng(this.__wbg_ptr) >>> 0
      }
      Ic() {
        const TT = ho.ljFj(this.__wbg_ptr);
        if (TT[2]) throw xo(TT[1]);
        return 0 !== TT[0]
      }
      kc() {
        return ho.Mxyp(this.__wbg_ptr) >>> 0
      }
      Wc() {
        return ho.XlSQ(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (DT.prototype[Symbol.dispose] = DT.prototype.free);
    class LT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, lT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        ho.yQjy(TT, 0)
      }
      compute(TT, oT, IT, iT) {
        var zT = Xo(iT) ? 0 : Lo(iT, ho.aJd7, ho.uPUG),
          kT = wo;
        const WT = ho.KIWg(this.__wbg_ptr, TT, Xo(oT) ? Number.MAX_SAFE_INTEGER : oT | 0, IT, zT, kT);
        if (WT[2]) throw xo(WT[1]);
        return WT[0] >>> 0
      }
      nx(TT) {
        const oT = Lo(TT, ho.aJd7, ho.uPUG),
          IT = wo;
        ho.J2Nk(this.__wbg_ptr, oT, IT)
      }
      yx() {
        return ho.hS2p(this.__wbg_ptr) >>> 0
      }
      Nx() {
        return ho.t0Ox(this.__wbg_ptr) >>> 0
      }
      Xc(TT) {
        const oT = ho.tftT(this.__wbg_ptr, TT);
        if (oT[2]) throw xo(oT[1]);
        return oT[0] >>> 0
      }
      constructor(TT, oT, IT, iT, zT, kT) {
        const WT = Bo(TT, ho.aJd7),
          XT = wo,
          BT = Do(oT, ho.aJd7),
          FT = wo,
          ST = Fo(IT, ho.aJd7),
          DT = wo,
          LT = So(iT, ho.aJd7),
          xT = wo,
          cT = ho.Zts6(WT, XT, BT, FT, ST, DT, LT, xT, zT, kT);
        if (cT[2]) throw xo(cT[1]);
        return this.__wbg_ptr = cT[0], lT.register(this, this.__wbg_ptr, this), this
      }
      zc() {
        return ho.KJ62(this.__wbg_ptr) >>> 0
      }
      Ic() {
        const TT = ho.smFZ(this.__wbg_ptr);
        if (TT[2]) throw xo(TT[1]);
        return 0 !== TT[0]
      }
      kc() {
        return ho.Apwh(this.__wbg_ptr) >>> 0
      }
    }

    function xT() {
      const TT = ho.R317();
      var oT = pT(TT[0], TT[1]).slice();
      return ho.qm1V(TT[0], 4 * TT[1], 4), oT
    }

    function cT(TT, oT) {
      let IT, iT;
      try {
        const zT = Bo(TT, ho.aJd7),
          kT = wo,
          WT = Lo(oT, ho.aJd7, ho.uPUG),
          XT = wo,
          BT = ho.cjIu(zT, kT, WT, XT);
        return IT = BT[0], iT = BT[1], dT(BT[0], BT[1])
      } finally {
        ho.qm1V(IT, iT, 1)
      }
    }

    function KT() {
      const TT = ho.I5o1();
      var oT = pT(TT[0], TT[1]).slice();
      return ho.qm1V(TT[0], 4 * TT[1], 4), oT
    }

    function MT(TT) {
      return 0 !== ho.YXTb(TT)
    }

    function rT(TT, oT) {
      const IT = Lo(TT, ho.aJd7, ho.uPUG),
        iT = wo,
        zT = ho.V1bq(IT, iT, oT);
      if (zT[1]) throw xo(zT[0])
    }

    function AT() {
      ho.GjjH()
    }

    function gT() {
      return ho.Q9lF() >>> 0
    }

    function hT(TT) {
      return 0 !== ho.l1aK(TT)
    }

    function wT(TT) {
      return 0 !== ho.SK7F(TT)
    }

    function mT(TT) {
      ho.sfch(TT)
    }

    function eT() {
      return ho.oeLs() >>> 0
    }

    function RT() {
      return ho.pw0r() >>> 0
    }

    function uT() {
      return 0 !== ho.mbWi()
    }

    function vT() {
      const TT = ho.ng8z();
      var oT = pT(TT[0], TT[1]).slice();
      return ho.qm1V(TT[0], 4 * TT[1], 4), oT
    }

    function ET() {
      const TT = ho.uj93();
      var oT = pT(TT[0], TT[1]).slice();
      return ho.qm1V(TT[0], 4 * TT[1], 4), oT
    }

    function fT() {
      const TT = ho.uYzn();
      var oT = pT(TT[0], TT[1]).slice();
      return ho.qm1V(TT[0], 4 * TT[1], 4), oT
    }

    function CT() {
      return ho.g1nf() >>> 0
    }

    function jT() {
      ho.MkN9()
    }

    function JT() {
      let TT, oT;
      try {
        const IT = ho.G7Z3();
        return TT = IT[0], oT = IT[1], dT(IT[0], IT[1])
      } finally {
        ho.qm1V(TT, oT, 1)
      }
    }

    function UT(TT) {
      ho.ApPQ(sT(TT))
    }

    function aT() {
      return {
        __proto__: null,
        YEEE: {
          __proto__: null,
          kauh: function(TT, oT) {
            return sT(Error(dT(TT, oT)))
          },
          igOw: function(TT, oT) {
            throw new Error(dT(TT, oT))
          },
          S12R: function(TT) {
            zo(TT).call()
          },
          zBKg: function(TT, oT) {
            console.error(dT(TT, oT))
          },
          b31T: function() {
            return performance.now()
          },
          M9vZ: function(TT) {
            xo(TT)
          }
        }
      }
    }
    Symbol.dispose && (LT.prototype[Symbol.dispose] = LT.prototype.free);
    const YT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => ho.pOcu(TT, 1))),
      QT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => ho.IkFP(TT, 1))),
      OT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => ho.dsmI(TT, 1))),
      HT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => ho.VfdD(TT, 1))),
      nT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => ho.jCEM(TT, 1))),
      qT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => ho.iNEc(TT, 1))),
      ZT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => ho.K6Ai(TT, 1))),
      lT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => ho.yQjy(TT, 1)));

    function sT(TT) {
      Wo === ko.length && ko.push(ko.length + 1);
      const oT = Wo;
      return Wo = ko[oT], ko[oT] = TT, oT
    }

    function tT(TT, oT) {
      if (!(TT instanceof oT)) throw new Error(`expected instance of ${oT.name}`)
    }

    function GT(TT, oT) {
      return TT >>>= 0, NT().subarray(TT / 8, TT / 8 + oT)
    }

    function pT(TT, oT) {
      return TT >>>= 0, oo().subarray(TT / 4, TT / 4 + oT)
    }

    function bT(TT, oT) {
      return TT >>>= 0, io().subarray(TT / 1, TT / 1 + oT)
    }
    let yT = null;

    function NT() {
      return null !== yT && 0 !== yT.byteLength || (yT = new Float64Array(ho.memory.buffer)), yT
    }
    let PT = null;

    function dT(TT, oT) {
      return function(TT, oT) {
        Mo += oT, Mo >= Ko && (co = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), co.decode(), Mo = oT);
        return co.decode(io().subarray(TT, TT + oT))
      }(TT >>> 0, oT)
    }
    let VT = null;
    let To = null;

    function oo() {
      return null !== To && 0 !== To.byteLength || (To = new Uint32Array(ho.memory.buffer)), To
    }
    let Io = null;

    function io() {
      return null !== Io && 0 !== Io.byteLength || (Io = new Uint8Array(ho.memory.buffer)), Io
    }

    function zo(TT) {
      return ko[TT]
    }
    let ko = new Array(1024).fill(void 0);
    ko.push(void 0, null, !0, !1);
    let Wo = ko.length;

    function Xo(TT) {
      return void 0 === TT || null === TT
    }

    function Bo(TT, oT) {
      const IT = oT(2 * TT.length, 2) >>> 0;
      return (null !== VT && 0 !== VT.byteLength || (VT = new Uint16Array(ho.memory.buffer)), VT).set(TT, IT / 2), wo = TT.length, IT
    }

    function Fo(TT, oT) {
      const IT = oT(4 * TT.length, 4) >>> 0;
      return oo().set(TT, IT / 4), wo = TT.length, IT
    }

    function So(TT, oT) {
      const IT = oT(1 * TT.length, 1) >>> 0;
      return io().set(TT, IT / 1), wo = TT.length, IT
    }

    function Do(TT, oT) {
      const IT = oT(8 * TT.length, 8) >>> 0;
      return NT().set(TT, IT / 8), wo = TT.length, IT
    }

    function Lo(TT, oT, IT) {
      if (void 0 === IT) {
        const IT = ro.encode(TT),
          iT = oT(IT.length, 1) >>> 0;
        return io().subarray(iT, iT + IT.length).set(IT), wo = IT.length, iT
      }
      let iT = TT.length,
        zT = oT(iT, 1) >>> 0;
      const kT = io();
      let WT = 0;
      for (; WT < iT; WT++) {
        const oT = TT.charCodeAt(WT);
        if (oT > 127) break;
        kT[zT + WT] = oT
      }
      if (WT !== iT) {
        0 !== WT && (TT = TT.slice(WT)), zT = IT(zT, iT, iT = WT + 3 * TT.length, 1) >>> 0;
        const oT = io().subarray(zT + WT, zT + iT);
        WT += ro.encodeInto(TT, oT).written, zT = IT(zT, iT, WT, 1) >>> 0
      }
      return wo = WT, zT
    }

    function xo(TT) {
      const oT = zo(TT);
      return function(TT) {
        TT < 1028 || (ko[TT] = Wo, Wo = TT)
      }(TT), oT
    }
    let co = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    co.decode();
    const Ko = 2146435072;
    let Mo = 0;
    const ro = new TextEncoder;
    "encodeInto" in ro || (ro.encodeInto = function(TT, oT) {
      const IT = ro.encode(TT);
      return oT.set(IT), {
        read: TT.length,
        written: IT.length
      }
    });
    let Ao, go, ho, wo = 0;

    function mo(TT, oT) {
      return go = TT, ho = TT.exports, Ao = oT, yT = null, PT = null, VT = null, To = null, Io = null, ho.e1qd(), ho
    }

    function eo(TT) {
      if (void 0 !== ho) return ho;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module: TT
      } = TT) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const oT = aT();
      TT instanceof WebAssembly.Module || (TT = new WebAssembly.Module(TT));
      return mo(new WebAssembly.Instance(TT, oT), TT)
    }
    async function Ro(TT) {
      if (void 0 !== ho) return ho;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module_or_path: TT
      } = TT) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const oT = aT();
      ("string" === typeof TT || "function" === typeof Request && TT instanceof Request || "function" === typeof URL && TT instanceof URL) && (TT = fetch(TT));
      const {
        instance: IT,
        module: iT
      } = await async function(TT, oT) {
        if ("function" === typeof Response && TT instanceof Response) {
          if (!TT.ok) throw new Error(`failed to fetch Wasm: ${TT.status} ${TT.statusText} fetching '${TT.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(TT, oT)
          } catch (IT) {
            if (! function(TT) {
                switch (TT) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(TT.type) || "application/wasm" === TT.headers.get("Content-Type")) throw IT;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", IT)
          }
          const iT = await TT.arrayBuffer();
          return await WebAssembly.instantiate(iT, oT)
        } {
          const IT = await WebAssembly.instantiate(TT, oT);
          return IT instanceof WebAssembly.Instance ? {
            instance: IT,
            module: TT
          } : IT
        }
      }(await TT, oT);
      return mo(IT, iT)
    }
    var uo = IT(3276),
      vo = IT(35343);
    const Eo = {
      name: uo.d,
      url: () => new IT.U(IT(35347)),
      init: Ro,
      bindings: iT
    };

    function fo() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eo,
        oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Eo,
        IT = arguments.length > 2 ? arguments[2] : void 0;
      return (0, vo.h)(TT, oT, IT)
    }

    function Co(TT) {
      return (0, uo.G)((() => TT), iT, Eo)
    }
  },
  35331: (TT, oT, IT) => {
    function iT(TT, oT) {
      return new Error(`${TT}: ${oT instanceof Error?`${oT.name}: ${oT.message}`:String(oT)}`, {
        cause: oT
      })
    }
    IT.d(oT, {
      c: () => iT
    })
  },
  35323: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT,
      d: () => BT
    });
    var iT = IT(3280),
      zT = IT(6123),
      kT = IT(35331);

    function WT() {
      return new URL(new IT.U(IT(35333)).href, globalThis.location?.href).href
    }
    let XT = null;

    function BT() {
      return XT ??= (async () => (0, iT.J)(new URL(WT()), (0, zT.c)("bloxd_wasm_textures")))().catch((TT => {
        throw (0, kT.c)((0, iT.N)(TT), TT)
      })), XT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);