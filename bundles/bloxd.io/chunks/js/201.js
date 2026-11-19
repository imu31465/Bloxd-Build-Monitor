export const id = 201;
export const ids = [201, 202];
export const modules = {
  35731: (YY, rY, DY) => {
    DY.d(rY, {
      reportCappedWasmFailure: () => RY,
      reportWasmFailure: () => IY
    });
    var FY = DY(2817);
    const AY = FY.b - 4;

    function IY(YY, rY, DY) {
      (0, FY.e)(YY, rY, DY, !1)
    }

    function RY(YY, rY, DY) {
      (0, FY.e)(YY, rY, DY, !1, AY)
    }
  },
  35725: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => yY,
      d: () => WY,
      h: () => EY,
      k: () => QY
    });
    var FY = DY(35734),
      AY = DY(3312),
      IY = DY(35747),
      RY = DY(3316),
      OY = DY(35731),
      gY = DY(2589),
      aY = DY(2834),
      vY = DY(2812),
      uY = DY(713);
    const sY = "bloxdWasmFailureReported";

    function iY() {
      return "undefined" === typeof WebAssembly
    }

    function yY() {
      return (0, FY.g)()
    }

    function QY() {
      if (iY()) return "this browser has no WebAssembly";
      const YY = (0, AY.r)();
      return "compile" === YY || "instantiate" === YY ? `the core wasm didn't load here (${(0,AY.i)()})` : null
    }
    async function oY(YY) {
      return await (0, IY.g)(IY.c, void 0, YY)
    }

    function WY() {
      iY() || (0, uY.d)((() => {
        oY()
      }))
    }

    function EY() {
      if (iY()) return async () => ((0, gY.f)("unsupported", 0), mY("unsupported", "This browser has no WebAssembly"), !1);
      const YY = {
        reloadFailedDownload: !0
      };
      return oY(YY), async () => {
        var rY;
        const DY = performance.now();
        await oY(YY);
        const FY = (performance.now() - DY) / 1e3;
        if ((0, AY.Q)()) return (0, gY.f)("ready", FY), (0, RY.L)(IY.c.url()) && (0, OY.reportCappedWasmFailure)("wasm_load", aY.b.message, aY.b.code), !0;
        const uY = vY.c[null !== (rY = (0, AY.r)()) && void 0 !== rY ? rY : "call"];
        return (0, gY.f)(uY, FY), mY(uY, (0, AY.i)()), !1
      }
    }

    function mY(YY, rY) {
      (0, vY.g)(sY, `Bloxd wasm ${YY}, so the game can't start: ${rY}`, rY, YY)
    }
  },
  35755: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/bloxd_wasm_bg.52c77c7fd2bf4e8aae98.wasm"
  },
  35742: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/bloxd_wasm_textures_bg.acdf6176fc2ed1b0954f.wasm"
  },
  35747: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => cr,
      g: () => Kr,
      i: () => Hr
    });
    var FY = {};
    DY.r(FY), DY.d(FY, {
      zv: () => AY,
      EnvelopeKind: () => IY,
      Zv: () => RY,
      PhysicsEngine: () => OY,
      Cv: () => gY,
      fv: () => aY,
      jv: () => vY,
      hv: () => uY,
      Jv: () => sY,
      Mv: () => iY,
      wv: () => yY,
      bv: () => QY,
      Xv: () => oY,
      qv: () => WY,
      default: () => er,
      initSync: () => Tr,
      kv: () => EY,
      Gv: () => mY,
      xv: () => VY,
      nv: () => SY,
      Pv: () => lY,
      Uv: () => TY,
      Lv: () => eY,
      tv: () => NY,
      Yu: () => BY,
      ru: () => cY,
      Du: () => KY,
      Fu: () => HY,
      Au: () => zY,
      Iu: () => ZY,
      Ru: () => CY
    });
    class AY {
      __destroy_into_raw() {
        const YY = this.__wbg_ptr;
        return this.__wbg_ptr = 0, jY.unregister(this), YY
      }
      free() {
        const YY = this.__destroy_into_raw();
        Vr.ZLJL(YY, 0)
      }
      Ou() {
        const YY = Vr.o50F(this.__wbg_ptr);
        if (YY[2]) throw ir(YY[1]);
        return YY[0] >>> 0
      }
      gu() {
        return Vr.zSP3(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const YY = Vr.Gx9E();
        return this.__wbg_ptr = YY, jY.register(this, this.__wbg_ptr, this), this
      }
      au() {
        return Vr.VkT8(this.__wbg_ptr) >>> 0
      }
      vu(YY) {
        const rY = Vr.pSfq(this.__wbg_ptr, YY);
        if (rY[2]) throw ir(rY[1]);
        return rY[0] >>> 0
      }
      uu(YY) {
        const rY = Vr.IENT(this.__wbg_ptr, YY);
        if (rY[2]) throw ir(rY[1]);
        return rY[0] >>> 0
      }
    }
    Symbol.dispose && (AY.prototype[Symbol.dispose] = AY.prototype.free);
    const IY = Object.freeze({
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
    class RY {
      __destroy_into_raw() {
        const YY = this.__wbg_ptr;
        return this.__wbg_ptr = 0, hY.unregister(this), YY
      }
      free() {
        const YY = this.__destroy_into_raw();
        Vr.YmRO(YY, 0)
      }
      Qu(YY, rY) {
        const DY = Vr.sPt0(this.__wbg_ptr, YY, rY);
        if (DY[2]) throw ir(DY[1]);
        return DY[0] >>> 0
      }
      ou(YY) {
        const rY = Vr.bPsL(this.__wbg_ptr, YY);
        if (rY[2]) throw ir(rY[1]);
        return rY[0] >>> 0
      }
      Wu() {
        Vr.HttI(this.__wbg_ptr)
      }
      static Eu() {
        return Vr.DS6z() >>> 0
      }
      mu() {
        return Vr.YHvj(this.__wbg_ptr) >>> 0
      }
      Vu() {
        const YY = Vr.CSBj(this.__wbg_ptr);
        return 0 === YY[0] ? void 0 : YY[1]
      }
      Su() {
        return Vr.CtLF(this.__wbg_ptr) >>> 0
      }
      lu() {
        return Vr.r3Zz(this.__wbg_ptr) >>> 0
      }
      static yu() {
        return Vr.afmj() >>> 0
      }
      constructor() {
        const YY = Vr.Rf4d();
        return this.__wbg_ptr = YY, hY.register(this, this.__wbg_ptr, this), this
      }
      Tu() {
        return Vr.VcQp(this.__wbg_ptr) >>> 0
      }
      eu() {
        return Vr.DjNK(this.__wbg_ptr) >>> 0
      }
      Nu() {
        return Vr.JSmd(this.__wbg_ptr) >>> 0
      }
      iu(YY) {
        return Vr.wsp9(this.__wbg_ptr, YY) >>> 0
      }
      reserve(YY, rY) {
        const DY = Vr.Vdrd(this.__wbg_ptr, YY, rY);
        if (DY[1]) throw ir(DY[0])
      }
      Ku(YY, rY) {
        const DY = ar(YY, Vr.CSOe),
          FY = Sr;
        Vr.uH1x(this.__wbg_ptr, DY, FY, rY)
      }
      text() {
        let YY, rY;
        try {
          const DY = Vr.vENx(this.__wbg_ptr);
          return YY = DY[0], rY = DY[1], LY(DY[0], DY[1])
        } finally {
          Vr.CVNm(YY, rY, 1)
        }
      }
    }
    Symbol.dispose && (RY.prototype[Symbol.dispose] = RY.prototype.free);
    class OY {
      __destroy_into_raw() {
        const YY = this.__wbg_ptr;
        return this.__wbg_ptr = 0, dY.unregister(this), YY
      }
      free() {
        const YY = this.__destroy_into_raw();
        Vr.KeH8(YY, 0)
      }
      zu(YY, rY) {
        pY(rY, AY);
        const DY = Vr.Q4BK(this.__wbg_ptr, YY, rY.__wbg_ptr);
        if (DY[2]) throw ir(DY[1]);
        return DY[0] >>> 0
      }
      Cu() {
        const YY = Vr.nNHV(this.__wbg_ptr);
        if (YY[1]) throw ir(YY[0])
      }
      wu(YY, rY, DY, FY, AY, IY, RY, OY, aY, vY, uY) {
        pY(YY, gY);
        const sY = Vr.OkK0(this.__wbg_ptr, YY.__wbg_ptr, rY, DY, FY, AY, IY, RY, OY, aY, vY, uY);
        if (sY[2]) throw ir(sY[1]);
        return sY[0]
      }
      Xu() {
        const YY = Vr.nM42(this.__wbg_ptr);
        var rY = kY(YY[0], YY[1]).slice();
        return Vr.CVNm(YY[0], 8 * YY[1], 8), rY
      }
      qu() {
        return Vr.XrSG(this.__wbg_ptr) >>> 0
      }
      pu() {
        return Vr.hVzB(this.__wbg_ptr) >>> 0
      }
      ku() {
        return Vr.OfcJ(this.__wbg_ptr) >>> 0
      }
      constructor(YY, rY, DY, FY, AY, IY, RY, OY) {
        const gY = Vr.FKEP(YY, rY, DY, FY, AY, IY, RY, OY);
        if (gY[2]) throw ir(gY[1]);
        return this.__wbg_ptr = gY[0], dY.register(this, this.__wbg_ptr, this), this
      }
      nu(YY) {
        pY(YY, AY);
        const rY = Vr.niRs(this.__wbg_ptr, YY.__wbg_ptr);
        if (rY[2]) throw ir(rY[1]);
        return rY[0] >>> 0
      }
      Pu(YY) {
        const rY = Vr.kcVq(this.__wbg_ptr, YY);
        if (rY[1]) throw ir(rY[0])
      }
      Uu() {
        return Vr.au6S(this.__wbg_ptr) >>> 0
      }
      resume(YY, rY) {
        pY(YY, gY), pY(rY, AY);
        const DY = Vr.wFt2(this.__wbg_ptr, YY.__wbg_ptr, rY.__wbg_ptr);
        if (DY[2]) throw ir(DY[1]);
        return DY[0] >>> 0
      }
      Fs(YY) {
        const rY = Vr.jVdc(this.__wbg_ptr, YY);
        if (rY[1]) throw ir(rY[0])
      }
      Os(YY, rY) {
        pY(rY, AY);
        const DY = Vr.L9Zk(this.__wbg_ptr, YY, rY.__wbg_ptr);
        if (DY[1]) throw ir(DY[0])
      }
      Qs(YY) {
        const rY = ur(YY, Vr.CSOe),
          DY = Sr,
          FY = Vr.K8Iy(this.__wbg_ptr, rY, DY);
        if (FY[1]) throw ir(FY[0])
      }
      ju(YY, rY, DY, FY, AY, IY) {
        const RY = Vr.GnKF(this.__wbg_ptr, YY, rY, DY, FY, AY, IY);
        if (RY[1]) throw ir(RY[0])
      }
      Ju(YY, rY, DY, FY) {
        const AY = ar(YY, Vr.CSOe),
          IY = Sr,
          RY = ur(rY, Vr.CSOe),
          OY = Sr,
          gY = ur(DY, Vr.CSOe),
          aY = Sr,
          vY = ur(FY, Vr.CSOe),
          uY = Sr,
          sY = Vr.ji5K(this.__wbg_ptr, AY, IY, RY, OY, gY, aY, vY, uY);
        if (sY[1]) throw ir(sY[0])
      }
      Ws(YY, rY) {
        pY(rY, AY);
        const DY = Vr.Zqxg(this.__wbg_ptr, YY, rY.__wbg_ptr);
        if (DY[1]) throw ir(DY[0])
      }
      xu(YY, rY, DY) {
        const FY = Vr.S13s(this.__wbg_ptr, YY, rY, DY);
        if (FY[1]) throw ir(FY[0])
      }
      Vs(YY, rY, DY, FY, AY, IY, RY, OY, aY, vY) {
        pY(YY, gY);
        return Vr.yLpm(this.__wbg_ptr, YY.__wbg_ptr, rY, DY, FY, AY, IY, RY, OY, aY, vY)
      }
    }
    Symbol.dispose && (OY.prototype[Symbol.dispose] = OY.prototype.free);
    class gY {
      static __wrap(YY) {
        const rY = Object.create(gY.prototype);
        return rY.__wbg_ptr = YY, JY.register(rY, rY.__wbg_ptr, rY), rY
      }
      __destroy_into_raw() {
        const YY = this.__wbg_ptr;
        return this.__wbg_ptr = 0, JY.unregister(this), YY
      }
      free() {
        const YY = this.__destroy_into_raw();
        Vr.JmDd(YY, 0)
      }
      Ts(YY) {
        const rY = Vr.pRsH(this.__wbg_ptr, YY);
        if (rY[2]) throw ir(rY[1]);
        return rY[0] >>> 0
      }
      es(YY, rY, DY) {
        return Vr.nHFW(this.__wbg_ptr, YY, rY, DY)
      }
      Ns(YY, rY, DY) {
        return Vr.oj9F(this.__wbg_ptr, YY, rY, DY) >>> 0
      }
      Bs(YY, rY, DY, FY) {
        return 0 !== Vr.z83B(this.__wbg_ptr, YY, rY, DY, FY)
      }
      Ks() {
        Vr.m0SC(this.__wbg_ptr)
      }
      zs(YY) {
        const rY = Vr.CehP(this.__wbg_ptr, YY);
        if (rY[3]) throw ir(rY[2]);
        var DY = xY(rY[0], rY[1]).slice();
        return Vr.CVNm(rY[0], 1 * rY[1], 1), DY
      }
      evict(YY, rY) {
        return Vr.wVny(this.__wbg_ptr, YY, rY) >>> 0
      }
      Zs() {
        Vr.B1Nx(this.__wbg_ptr)
      }
      Cs(YY, rY, DY) {
        Vr.GLRT(this.__wbg_ptr, YY, rY, DY)
      }
      fs(YY) {
        const rY = Vr.R3OO(this.__wbg_ptr, YY);
        if (rY[1]) throw ir(rY[0])
      }
      hs() {
        return Vr.NvOL(this.__wbg_ptr) >>> 0
      }
      ds() {
        return Vr.HNjH(this.__wbg_ptr) >>> 0
      }
      Ms(YY, rY, DY) {
        Vr.IB93(this.__wbg_ptr, YY, rY, DY)
      }
      Xs(YY, rY, DY) {
        Vr.emQo(this.__wbg_ptr, YY, rY, DY)
      }
      qs() {
        return Vr.Acrf(this.__wbg_ptr) >>> 0
      }
      Gs() {
        return Vr.RCvS(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const YY = Vr.UyYN();
        return this.__wbg_ptr = YY, JY.register(this, this.__wbg_ptr, this), this
      }
      static xs() {
        const YY = Vr.Ly3G();
        return gY.__wrap(YY)
      }
      Ps() {
        return Vr.hTH1(this.__wbg_ptr) >>> 0
      }
      Us() {
        return Vr.tldX(this.__wbg_ptr) >>> 0
      }
      Ls(YY, rY, DY, FY) {
        const AY = Vr.D5iP(this.__wbg_ptr, YY, rY, DY, FY);
        if (AY[1]) throw ir(AY[0])
      }
      Yi() {
        return Vr.MeVV(this.__wbg_ptr) >>> 0
      }
      Di() {
        return Vr.rdUY(this.__wbg_ptr) >>> 0
      }
      Fi(YY, rY, DY, FY) {
        Vr.YQVN(this.__wbg_ptr, YY, rY, DY, FY)
      }
      Ai(YY) {
        Vr.prYw(this.__wbg_ptr, YY)
      }
      Ri(YY, rY, DY, FY, AY) {
        const IY = vr(rY, Vr.CSOe),
          RY = Sr,
          OY = ar(DY, Vr.CSOe),
          gY = Sr,
          aY = ur(FY, Vr.CSOe),
          vY = Sr,
          uY = Vr.tCCf(this.__wbg_ptr, YY, IY, RY, OY, gY, aY, vY, AY);
        if (uY[1]) throw ir(uY[0])
      }
      Ii(YY, rY, DY, FY) {
        const AY = vr(YY, Vr.CSOe),
          IY = Sr,
          RY = ar(rY, Vr.CSOe),
          OY = Sr,
          gY = ur(DY, Vr.CSOe),
          aY = Sr,
          vY = vr(FY, Vr.CSOe),
          uY = Sr,
          sY = Vr.HmYp(this.__wbg_ptr, AY, IY, RY, OY, gY, aY, vY, uY);
        if (sY[1]) throw ir(sY[0])
      }
      ii(YY) {
        const rY = vr(YY, Vr.CSOe),
          DY = Sr,
          FY = Vr.lbQJ(this.__wbg_ptr, rY, DY);
        if (FY[1]) throw ir(FY[0])
      }
      yi() {
        return Vr.uUm3(this.__wbg_ptr) >>> 0
      }
      Qi(YY) {
        const rY = Vr.gTUg(this.__wbg_ptr, YY);
        if (rY[2]) throw ir(rY[1]);
        return rY[0] >>> 0
      }
      steer() {
        return Vr.qhcz(this.__wbg_ptr) >>> 0
      }
      oi() {
        const YY = Vr.kxvn(this.__wbg_ptr);
        var rY = kY(YY[0], YY[1]).slice();
        return Vr.CVNm(YY[0], 8 * YY[1], 8), rY
      }
      Wi() {
        return Vr.hv3K(this.__wbg_ptr) >>> 0
      }
      tu() {
        const YY = Vr.OPxT(this.__wbg_ptr);
        var rY, DY, FY = (rY = YY[0], DY = YY[1], rY >>>= 0, (null !== UY && 0 !== UY.byteLength || (UY = new Int32Array(Vr.memory.buffer)), UY).subarray(rY / 4, rY / 4 + DY)).slice();
        return Vr.CVNm(YY[0], 4 * YY[1], 4), FY
      }
    }
    Symbol.dispose && (gY.prototype[Symbol.dispose] = gY.prototype.free);
    class aY {
      __destroy_into_raw() {
        const YY = this.__wbg_ptr;
        return this.__wbg_ptr = 0, MY.unregister(this), YY
      }
      free() {
        const YY = this.__destroy_into_raw();
        Vr.YMtV(YY, 0)
      }
      Ei(YY) {
        const rY = ar(YY, Vr.CSOe),
          DY = Sr,
          FY = Vr.AXZ9(this.__wbg_ptr, rY, DY);
        if (FY[1]) throw ir(FY[0])
      }
      mi() {
        return Vr.XW3P(this.__wbg_ptr) >>> 0
      }
      Vi() {
        return Vr.GvsH(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const YY = Vr.AxyP();
        return this.__wbg_ptr = YY, MY.register(this, this.__wbg_ptr, this), this
      }
      run(YY, rY) {
        pY(YY, gY);
        const DY = Vr.B3A5(this.__wbg_ptr, YY.__wbg_ptr, rY);
        if (DY[2]) throw ir(DY[1]);
        return DY[0] >>> 0
      }
      Si(YY) {
        const rY = ar(YY, Vr.CSOe),
          DY = Sr;
        Vr.JXcw(this.__wbg_ptr, rY, DY)
      }
      li(YY) {
        const rY = ar(YY, Vr.CSOe),
          DY = Sr;
        Vr.U9Gw(this.__wbg_ptr, rY, DY)
      }
    }
    Symbol.dispose && (aY.prototype[Symbol.dispose] = aY.prototype.free);
    class vY {
      __destroy_into_raw() {
        const YY = this.__wbg_ptr;
        return this.__wbg_ptr = 0, wY.unregister(this), YY
      }
      free() {
        const YY = this.__destroy_into_raw();
        Vr.uRTl(YY, 0)
      }
      Ni(YY, rY) {
        const DY = vr(YY, Vr.CSOe),
          FY = Sr;
        return Vr.yNJ8(this.__wbg_ptr, DY, FY, rY) >>> 0
      }
      Bi(YY, rY, DY) {
        pY(YY, gY);
        const FY = vr(DY, Vr.CSOe),
          AY = Sr,
          IY = Vr.VT2P(this.__wbg_ptr, YY.__wbg_ptr, rY, FY, AY);
        if (IY[2]) throw ir(IY[1]);
        return IY[0] >>> 0
      }
      Ti(YY) {
        return Vr.NIlh(this.__wbg_ptr, YY) >>> 0
      }
      constructor() {
        const YY = Vr.U1wC();
        return this.__wbg_ptr = YY, wY.register(this, this.__wbg_ptr, this), this
      }
      scan(YY, rY) {
        pY(YY, gY);
        const DY = Vr.hHbm(this.__wbg_ptr, YY.__wbg_ptr, rY);
        if (DY[2]) throw ir(DY[1]);
        return DY[0] >>> 0
      }
      zi(YY) {
        const rY = vr(YY, Vr.CSOe),
          DY = Sr;
        Vr.Wqvh(this.__wbg_ptr, rY, DY)
      }
      Hi() {
        return Vr.cucw(this.__wbg_ptr) >>> 0
      }
      Ki() {
        return Vr.TshD(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (vY.prototype[Symbol.dispose] = vY.prototype.free);
    class uY {
      __destroy_into_raw() {
        const YY = this.__wbg_ptr;
        return this.__wbg_ptr = 0, bY.unregister(this), YY
      }
      free() {
        const YY = this.__destroy_into_raw();
        Vr.fsRb(YY, 0)
      }
      Ci(YY) {
        const rY = Vr.feKB(this.__wbg_ptr, YY);
        if (rY[2]) throw ir(rY[1]);
        return rY[0] >>> 0
      }
      compute(YY, rY, DY, FY) {
        var AY = Or(FY) ? 0 : sr(FY, Vr.CSOe, Vr.enEq),
          IY = Sr;
        const RY = Vr.yBbj(this.__wbg_ptr, YY, Or(rY) ? Number.MAX_SAFE_INTEGER : rY | 0, DY, AY, IY);
        if (RY[2]) throw ir(RY[1]);
        return RY[0] >>> 0
      }
      Ji(YY) {
        const rY = sr(YY, Vr.CSOe, Vr.enEq),
          DY = Sr;
        Vr.s2iX(this.__wbg_ptr, rY, DY)
      }
      bi() {
        return Vr.HLD0(this.__wbg_ptr)
      }
      Xi(YY) {
        return Vr.s29E(this.__wbg_ptr, YY) >>> 0
      }
      qi() {
        return Vr.gUmC(this.__wbg_ptr) >>> 0
      }
      ki() {
        return Vr.ApYb(this.__wbg_ptr) >>> 0
      }
      Gi(YY, rY) {
        const DY = Vr.klX4(this.__wbg_ptr, YY, rY);
        if (DY[1]) throw ir(DY[0])
      }
      xi() {
        return Vr.Fak3(this.__wbg_ptr) >>> 0
      }
      ni() {
        return Vr.JeDH(this.__wbg_ptr) >>> 0
      }
      Pi() {
        return Vr.G94K(this.__wbg_ptr) >>> 0
      }
      ji(YY, rY, DY) {
        const FY = ar(YY, Vr.CSOe),
          AY = Sr,
          IY = ar(rY, Vr.CSOe),
          RY = Sr,
          OY = Vr.hsgp(this.__wbg_ptr, FY, AY, IY, RY, DY);
        if (OY[1]) throw ir(OY[0])
      }
      Li() {
        return Vr.eFBH(this.__wbg_ptr) >>> 0
      }
      mesh(YY, rY, DY, FY, AY) {
        const IY = Vr.pri6(this.__wbg_ptr, YY, rY, DY, FY, AY);
        if (IY[2]) throw ir(IY[1]);
        return IY[0] >>> 0
      }
      constructor(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY, vY, uY, sY, iY, yY, QY, oY, WY, EY, mY) {
        const VY = gr(YY, Vr.CSOe),
          SY = Sr,
          lY = ur(rY, Vr.CSOe),
          TY = Sr,
          eY = ar(DY, Vr.CSOe),
          NY = Sr,
          BY = vr(FY, Vr.CSOe),
          cY = Sr,
          KY = vr(AY, Vr.CSOe),
          HY = Sr,
          zY = ar(IY, Vr.CSOe),
          ZY = Sr,
          CY = ar(RY, Vr.CSOe),
          fY = Sr,
          jY = ur(OY, Vr.CSOe),
          hY = Sr,
          dY = ur(gY, Vr.CSOe),
          JY = Sr,
          MY = vr(aY, Vr.CSOe),
          wY = Sr;
        var XY = Or(vY) ? 0 : gr(vY, Vr.CSOe),
          qY = Sr;
        const pY = ar(uY, Vr.CSOe),
          kY = Sr,
          GY = vr(sY, Vr.CSOe),
          xY = Sr;
        var nY = Or(iY) ? 0 : vr(iY, Vr.CSOe),
          PY = Sr;
        const UY = ur(yY, Vr.CSOe),
          LY = Sr,
          tY = Vr.Ibz6(VY, SY, lY, TY, eY, NY, BY, cY, KY, HY, zY, ZY, CY, fY, jY, hY, dY, JY, MY, wY, XY, qY, pY, kY, GY, xY, nY, PY, UY, LY, QY, oY, WY, EY, mY);
        if (tY[2]) throw ir(tY[1]);
        return this.__wbg_ptr = tY[0], bY.register(this, this.__wbg_ptr, this), this
      }
      Ui(YY, rY) {
        const DY = ar(YY, Vr.CSOe),
          FY = Sr,
          AY = Vr.lyNn(this.__wbg_ptr, DY, FY, rY);
        if (AY[3]) throw ir(AY[2]);
        var IY = xY(AY[0], AY[1]).slice();
        return Vr.CVNm(AY[0], 1 * AY[1], 1), IY
      }
      Yy(YY) {
        Vr.dol5(this.__wbg_ptr, Or(YY) ? 16777215 : YY)
      }
      Dy(YY) {
        return Vr.bvHm(this.__wbg_ptr, YY) >>> 0
      }
      Ay() {
        return Vr.SIgR(this.__wbg_ptr) >>> 0
      }
      Fy() {
        const YY = Vr.eW64(this.__wbg_ptr);
        if (YY[2]) throw ir(YY[1]);
        return 0 !== YY[0]
      }
      Iy() {
        return Vr.diMx(this.__wbg_ptr) >>> 0
      }
      Ry() {
        return Vr.HjIb(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (uY.prototype[Symbol.dispose] = uY.prototype.free);
    class sY {
      __destroy_into_raw() {
        const YY = this.__wbg_ptr;
        return this.__wbg_ptr = 0, XY.unregister(this), YY
      }
      free() {
        const YY = this.__destroy_into_raw();
        Vr.e8BZ(YY, 0)
      }
      compute(YY, rY, DY, FY) {
        var AY = Or(FY) ? 0 : sr(FY, Vr.CSOe, Vr.enEq),
          IY = Sr;
        const RY = Vr.x8sy(this.__wbg_ptr, YY, Or(rY) ? Number.MAX_SAFE_INTEGER : rY | 0, DY, AY, IY);
        if (RY[2]) throw ir(RY[1]);
        return RY[0] >>> 0
      }
      Ji(YY) {
        const rY = sr(YY, Vr.CSOe, Vr.enEq),
          DY = Sr;
        Vr.usgX(this.__wbg_ptr, rY, DY)
      }
      ni() {
        return Vr.YE8m(this.__wbg_ptr) >>> 0
      }
      Pi() {
        return Vr.B2YV(this.__wbg_ptr) >>> 0
      }
      Oy(YY) {
        const rY = Vr.pcRi(this.__wbg_ptr, YY);
        if (rY[2]) throw ir(rY[1]);
        return rY[0] >>> 0
      }
      constructor(YY, rY, DY, FY, AY, IY) {
        const RY = gr(YY, Vr.CSOe),
          OY = Sr,
          gY = ur(rY, Vr.CSOe),
          aY = Sr,
          vY = ar(DY, Vr.CSOe),
          uY = Sr,
          sY = vr(FY, Vr.CSOe),
          iY = Sr,
          yY = Vr.G3Z2(RY, OY, gY, aY, vY, uY, sY, iY, AY, IY);
        if (yY[2]) throw ir(yY[1]);
        return this.__wbg_ptr = yY[0], XY.register(this, this.__wbg_ptr, this), this
      }
      Ay() {
        return Vr.n3Xd(this.__wbg_ptr) >>> 0
      }
      Fy() {
        const YY = Vr.EGCZ(this.__wbg_ptr);
        if (YY[2]) throw ir(YY[1]);
        return 0 !== YY[0]
      }
      Iy() {
        return Vr.wGtP(this.__wbg_ptr) >>> 0
      }
    }

    function iY() {
      const YY = Vr.hGHO();
      var rY = GY(YY[0], YY[1]).slice();
      return Vr.CVNm(YY[0], 4 * YY[1], 4), rY
    }

    function yY(YY, rY) {
      let DY, FY;
      try {
        const AY = gr(YY, Vr.CSOe),
          IY = Sr,
          RY = sr(rY, Vr.CSOe, Vr.enEq),
          OY = Sr,
          gY = Vr.RxYi(AY, IY, RY, OY);
        return DY = gY[0], FY = gY[1], LY(gY[0], gY[1])
      } finally {
        Vr.CVNm(DY, FY, 1)
      }
    }

    function QY() {
      const YY = Vr.rOaD();
      var rY = GY(YY[0], YY[1]).slice();
      return Vr.CVNm(YY[0], 4 * YY[1], 4), rY
    }

    function oY(YY) {
      return 0 !== Vr.HOpn(YY)
    }

    function WY(YY, rY) {
      const DY = sr(YY, Vr.CSOe, Vr.enEq),
        FY = Sr,
        AY = Vr.SHt4(DY, FY, rY);
      if (AY[1]) throw ir(AY[0])
    }

    function EY() {
      Vr.sKiG()
    }

    function mY() {
      return Vr.I9y8() >>> 0
    }

    function VY(YY) {
      return 0 !== Vr.tr6m(YY)
    }

    function SY(YY) {
      return 0 !== Vr.IB7O(YY)
    }

    function lY(YY) {
      Vr.i585(YY)
    }

    function TY() {
      return Vr.au8t() >>> 0
    }

    function eY() {
      return Vr.thtW() >>> 0
    }

    function NY() {
      return 0 !== Vr.RM2V()
    }

    function BY() {
      const YY = Vr.upo1();
      var rY = GY(YY[0], YY[1]).slice();
      return Vr.CVNm(YY[0], 4 * YY[1], 4), rY
    }

    function cY() {
      const YY = Vr.QSPb();
      var rY = GY(YY[0], YY[1]).slice();
      return Vr.CVNm(YY[0], 4 * YY[1], 4), rY
    }

    function KY() {
      const YY = Vr.ANn5();
      var rY = GY(YY[0], YY[1]).slice();
      return Vr.CVNm(YY[0], 4 * YY[1], 4), rY
    }

    function HY() {
      return Vr.qDIH() >>> 0
    }

    function zY() {
      Vr.GCN5()
    }

    function ZY() {
      let YY, rY;
      try {
        const DY = Vr.rfUj();
        return YY = DY[0], rY = DY[1], LY(DY[0], DY[1])
      } finally {
        Vr.CVNm(YY, rY, 1)
      }
    }

    function CY(YY) {
      Vr.Bmbf(qY(YY))
    }

    function fY() {
      return {
        __proto__: null,
        juTM: {
          __proto__: null,
          Jtb5: function(YY, rY) {
            return qY(Error(LY(YY, rY)))
          },
          dYst: function(YY, rY) {
            throw new Error(LY(YY, rY))
          },
          LwdJ: function(YY) {
            Ar(YY).call()
          },
          QNON: function(YY, rY) {
            console.error(LY(YY, rY))
          },
          FnsU: function() {
            return performance.now()
          },
          Ubkj: function(YY) {
            ir(YY)
          }
        }
      }
    }
    Symbol.dispose && (sY.prototype[Symbol.dispose] = sY.prototype.free);
    const jY = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((YY => Vr.ZLJL(YY, 1))),
      hY = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((YY => Vr.YmRO(YY, 1))),
      dY = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((YY => Vr.KeH8(YY, 1))),
      JY = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((YY => Vr.JmDd(YY, 1))),
      MY = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((YY => Vr.YMtV(YY, 1))),
      wY = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((YY => Vr.uRTl(YY, 1))),
      bY = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((YY => Vr.fsRb(YY, 1))),
      XY = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((YY => Vr.e8BZ(YY, 1)));

    function qY(YY) {
      Rr === Ir.length && Ir.push(Ir.length + 1);
      const rY = Rr;
      return Rr = Ir[rY], Ir[rY] = YY, rY
    }

    function pY(YY, rY) {
      if (!(YY instanceof rY)) throw new Error(`expected instance of ${rY.name}`)
    }

    function kY(YY, rY) {
      return YY >>>= 0, PY().subarray(YY / 8, YY / 8 + rY)
    }

    function GY(YY, rY) {
      return YY >>>= 0, rr().subarray(YY / 4, YY / 4 + rY)
    }

    function xY(YY, rY) {
      return YY >>>= 0, Fr().subarray(YY / 1, YY / 1 + rY)
    }
    let nY = null;

    function PY() {
      return null !== nY && 0 !== nY.byteLength || (nY = new Float64Array(Vr.memory.buffer)), nY
    }
    let UY = null;

    function LY(YY, rY) {
      return function(YY, rY) {
        or += rY, or >= Qr && (yr = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), yr.decode(), or = rY);
        return yr.decode(Fr().subarray(YY, YY + rY))
      }(YY >>> 0, rY)
    }
    let tY = null;
    let Yr = null;

    function rr() {
      return null !== Yr && 0 !== Yr.byteLength || (Yr = new Uint32Array(Vr.memory.buffer)), Yr
    }
    let Dr = null;

    function Fr() {
      return null !== Dr && 0 !== Dr.byteLength || (Dr = new Uint8Array(Vr.memory.buffer)), Dr
    }

    function Ar(YY) {
      return Ir[YY]
    }
    let Ir = new Array(1024).fill(void 0);
    Ir.push(void 0, null, !0, !1);
    let Rr = Ir.length;

    function Or(YY) {
      return void 0 === YY || null === YY
    }

    function gr(YY, rY) {
      const DY = rY(2 * YY.length, 2) >>> 0;
      return (null !== tY && 0 !== tY.byteLength || (tY = new Uint16Array(Vr.memory.buffer)), tY).set(YY, DY / 2), Sr = YY.length, DY
    }

    function ar(YY, rY) {
      const DY = rY(4 * YY.length, 4) >>> 0;
      return rr().set(YY, DY / 4), Sr = YY.length, DY
    }

    function vr(YY, rY) {
      const DY = rY(1 * YY.length, 1) >>> 0;
      return Fr().set(YY, DY / 1), Sr = YY.length, DY
    }

    function ur(YY, rY) {
      const DY = rY(8 * YY.length, 8) >>> 0;
      return PY().set(YY, DY / 8), Sr = YY.length, DY
    }

    function sr(YY, rY, DY) {
      if (void 0 === DY) {
        const DY = Wr.encode(YY),
          FY = rY(DY.length, 1) >>> 0;
        return Fr().subarray(FY, FY + DY.length).set(DY), Sr = DY.length, FY
      }
      let FY = YY.length,
        AY = rY(FY, 1) >>> 0;
      const IY = Fr();
      let RY = 0;
      for (; RY < FY; RY++) {
        const rY = YY.charCodeAt(RY);
        if (rY > 127) break;
        IY[AY + RY] = rY
      }
      if (RY !== FY) {
        0 !== RY && (YY = YY.slice(RY)), AY = DY(AY, FY, FY = RY + 3 * YY.length, 1) >>> 0;
        const rY = Fr().subarray(AY + RY, AY + FY);
        RY += Wr.encodeInto(YY, rY).written, AY = DY(AY, FY, RY, 1) >>> 0
      }
      return Sr = RY, AY
    }

    function ir(YY) {
      const rY = Ar(YY);
      return function(YY) {
        YY < 1028 || (Ir[YY] = Rr, Rr = YY)
      }(YY), rY
    }
    let yr = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    yr.decode();
    const Qr = 2146435072;
    let or = 0;
    const Wr = new TextEncoder;
    "encodeInto" in Wr || (Wr.encodeInto = function(YY, rY) {
      const DY = Wr.encode(YY);
      return rY.set(DY), {
        read: YY.length,
        written: DY.length
      }
    });
    let Er, mr, Vr, Sr = 0;

    function lr(YY, rY) {
      return mr = YY, Vr = YY.exports, Er = rY, nY = null, UY = null, tY = null, Yr = null, Dr = null, Vr.QMTD(), Vr
    }

    function Tr(YY) {
      if (void 0 !== Vr) return Vr;
      void 0 !== YY && (Object.getPrototypeOf(YY) === Object.prototype ? ({
        module: YY
      } = YY) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const rY = fY();
      YY instanceof WebAssembly.Module || (YY = new WebAssembly.Module(YY));
      return lr(new WebAssembly.Instance(YY, rY), YY)
    }
    async function er(YY) {
      if (void 0 !== Vr) return Vr;
      void 0 !== YY && (Object.getPrototypeOf(YY) === Object.prototype ? ({
        module_or_path: YY
      } = YY) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const rY = fY();
      ("string" === typeof YY || "function" === typeof Request && YY instanceof Request || "function" === typeof URL && YY instanceof URL) && (YY = fetch(YY));
      const {
        instance: DY,
        module: FY
      } = await async function(YY, rY) {
        if ("function" === typeof Response && YY instanceof Response) {
          if (!YY.ok) throw new Error(`failed to fetch Wasm: ${YY.status} ${YY.statusText} fetching '${YY.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(YY, rY)
          } catch (DY) {
            if (! function(YY) {
                switch (YY) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(YY.type) || "application/wasm" === YY.headers.get("Content-Type")) throw DY;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", DY)
          }
          const FY = await YY.arrayBuffer();
          return await WebAssembly.instantiate(FY, rY)
        } {
          const DY = await WebAssembly.instantiate(YY, rY);
          return DY instanceof WebAssembly.Instance ? {
            instance: DY,
            module: YY
          } : DY
        }
      }(await YY, rY);
      return lr(DY, FY)
    }
    var Nr = DY(3312),
      Br = DY(35750);
    const cr = {
      name: Nr.b,
      url: () => new DY.U(DY(35755)),
      init: er,
      bindings: FY
    };

    function Kr() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cr,
        rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cr,
        DY = arguments.length > 2 ? arguments[2] : void 0;
      return (0, Br.h)(YY, rY, DY)
    }

    function Hr(YY) {
      return (0, Nr.N)((() => YY), FY, cr)
    }
  },
  35739: (YY, rY, DY) => {
    function FY(YY, rY) {
      return new Error(`${YY}: ${rY instanceof Error?`${rY.name}: ${rY.message}`:String(rY)}`, {
        cause: rY
      })
    }
    DY.d(rY, {
      d: () => FY
    })
  },
  35734: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY,
      g: () => gY
    });
    var FY = DY(3316),
      AY = DY(6185),
      IY = DY(35739);

    function RY() {
      return new URL(new DY.U(DY(35742)).href, globalThis.location?.href).href
    }
    let OY = null;

    function gY() {
      return OY ??= (async () => (0, FY.C)(new URL(RY()), (0, AY.d)("bloxd_wasm_textures")))().catch((YY => {
        throw (0, IY.d)((0, FY.E)(YY), YY)
      })), OY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);