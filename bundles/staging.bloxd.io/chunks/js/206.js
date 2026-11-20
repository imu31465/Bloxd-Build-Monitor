export const id = 206;
export const ids = [206, 207];
export const modules = {
  35883: (UU, RU, gU) => {
    gU.d(RU, {
      reportCappedWasmFailure: () => PU,
      reportWasmFailure: () => EU
    });
    var tU = gU(2927);
    const pU = tU.c - 4;

    function EU(UU, RU, gU) {
      (0, tU.e)(UU, RU, gU, !1)
    }

    function PU(UU, RU, gU) {
      (0, tU.e)(UU, RU, gU, !1, pU)
    }
  },
  35877: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => fU,
      h: () => IU,
      j: () => JU,
      m: () => xU
    });
    var tU = gU(35891),
      pU = gU(3372),
      EU = gU(35908),
      PU = gU(3377),
      TU = gU(35883),
      qU = gU(2659),
      KU = gU(2942),
      cU = gU(2923),
      GU = gU(35886),
      jU = gU(2927),
      uU = gU(35889);
    let CU = !1;
    const hU = 40;
    var QU = gU(668);
    const eU = "bloxdWasmFailureReported";

    function WU() {
      return "undefined" === typeof WebAssembly
    }

    function fU() {
      return (0, tU.h)()
    }

    function xU() {
      if (WU()) return "this browser has no WebAssembly";
      const UU = (0, pU.q)();
      return "compile" === UU || "instantiate" === UU ? `the core wasm didn't load here (${(0,pU.l)()})` : null
    }
    async function mU(UU) {
      return await (0, EU.f)(EU.d, void 0, UU)
    }

    function IU() {
      WU() || (0, QU.e)((() => {
        mU()
      }))
    }

    function JU() {
      if (WU()) return async () => ((0, qU.i)("unsupported", 0), wU("unsupported", "This browser has no WebAssembly"), !1);
      const UU = {
        reloadFailedDownload: !0
      };
      return mU(UU), async () => {
        var RU;
        const gU = performance.now();
        await mU(UU);
        const tU = (performance.now() - gU) / 1e3;
        if ((0, pU.L)()) return (0, qU.i)("ready", tU), CU || (CU = !0, (0, pU.O)((() => {
          if ("call" !== (0, pU.q)()) return;
          const UU = (0, pU.o)(),
            RU = (0, GU.m)(UU, pU.C, pU.X),
            gU = (0, pU.u)().buffer.byteLength,
            tU = (0, GU.h)(RU.kind, RU.refusedBytes) ? "alloc_failed" : RU.kind,
            EU = 2 ** Math.floor(Math.log2(Math.max(1, gU / 2 ** 20))),
            PU = new Error((0, uU.d)(UU, gU, RU));
          if (UU instanceof Error && void 0 !== UU.stack) {
            const RU = UU.stack.split("\n"),
              gU = RU.length > hU ? [...RU.slice(0, hU / 2), ...RU.slice(-hU / 2)] : RU;
            PU.stack = gU.join("\n")
          }(0, jU.e)("wasm_load", PU, `wasm_call_${tU}_m${EU}`)
        }))), (0, PU.P)(EU.d.url()) && (0, TU.reportCappedWasmFailure)("wasm_load", KU.c.message, KU.c.code), !0;
        const QU = cU.d[null !== (RU = (0, pU.q)()) && void 0 !== RU ? RU : "call"];
        return (0, qU.i)(QU, tU), wU(QU, (0, pU.l)()), !1
      }
    }

    function wU(UU, RU) {
      (0, cU.j)(eU, `Bloxd wasm ${UU}, so the game can't start: ${RU}`, RU, UU)
    }
  },
  35915: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/bloxd_wasm_bg.10224b1de5734714e318.wasm"
  },
  35900: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/bloxd_wasm_textures_bg.d415906978fe93cc9059.wasm"
  },
  35908: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => oR,
      f: () => ZR,
      g: () => aR
    });
    var tU = {};
    gU.r(tU), gU.d(tU, {
      Hc: () => pU,
      EnvelopeKind: () => EU,
      Sc: () => PU,
      PhysicsEngine: () => TU,
      sc: () => qU,
      yc: () => KU,
      kc: () => cU,
      Fc: () => GU,
      Ac: () => jU,
      zc: () => uU,
      Mc: () => CU,
      Dc: () => hU,
      Lc: () => QU,
      Nc: () => eU,
      default: () => wR,
      initSync: () => JR,
      lc: () => WU,
      Oc: () => fU,
      UG: () => xU,
      gG: () => mU,
      tG: () => IU,
      pG: () => JU,
      EG: () => wU,
      PG: () => nU,
      TG: () => bU,
      qG: () => oU,
      KG: () => ZU,
      cG: () => aU,
      GG: () => YU,
      jG: () => BU,
      uG: () => VU
    });
    class pU {
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, XU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        xR.uSkk(UU, 0)
      }
      CG() {
        const UU = xR.rez2(this.__wbg_ptr);
        if (UU[2]) throw uR(UU[1]);
        return UU[0] >>> 0
      }
      hG() {
        return xR.G8HH(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const UU = xR.qjDo();
        return this.__wbg_ptr = UU, XU.register(this, this.__wbg_ptr, this), this
      }
      QG() {
        return xR.K9oe(this.__wbg_ptr) >>> 0
      }
      eG(UU) {
        const RU = xR.tEqM(this.__wbg_ptr, UU);
        if (RU[2]) throw uR(RU[1]);
        return RU[0] >>> 0
      }
      WG(UU) {
        const RU = xR.dsxF(this.__wbg_ptr, UU);
        if (RU[2]) throw uR(RU[1]);
        return RU[0] >>> 0
      }
    }
    Symbol.dispose && (pU.prototype[Symbol.dispose] = pU.prototype.free);
    const EU = Object.freeze({
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
    class PU {
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, vU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        xR.PM05(UU, 0)
      }
      mG(UU, RU) {
        const gU = xR.jp0K(this.__wbg_ptr, UU, RU);
        if (gU[2]) throw uR(gU[1]);
        return gU[0] >>> 0
      }
      IG(UU) {
        const RU = xR.o4h9(this.__wbg_ptr, UU);
        if (RU[2]) throw uR(RU[1]);
        return RU[0] >>> 0
      }
      JG() {
        xR.KIJp(this.__wbg_ptr)
      }
      static wG() {
        return xR.JUCm() >>> 0
      }
      nG() {
        return xR.npYo(this.__wbg_ptr) >>> 0
      }
      bG() {
        const UU = xR.HQJj(this.__wbg_ptr);
        return 0 === UU[0] ? void 0 : UU[1]
      }
      oG() {
        return xR.A7qv(this.__wbg_ptr) >>> 0
      }
      ZG() {
        return xR.elgB(this.__wbg_ptr) >>> 0
      }
      static xG() {
        return xR.Odi1() >>> 0
      }
      constructor() {
        const UU = xR.Hm6f();
        return this.__wbg_ptr = UU, vU.register(this, this.__wbg_ptr, this), this
      }
      aG() {
        return xR.gQVV(this.__wbg_ptr) >>> 0
      }
      YG() {
        return xR.Th7b(this.__wbg_ptr) >>> 0
      }
      BG() {
        return xR.S7Go(this.__wbg_ptr) >>> 0
      }
      fG(UU) {
        return xR.jjl4(this.__wbg_ptr, UU) >>> 0
      }
      reserve(UU, RU) {
        const gU = xR.V0gn(this.__wbg_ptr, UU, RU);
        if (gU[1]) throw uR(gU[0])
      }
      XG(UU, RU) {
        const gU = KR(UU, xR.pTUl),
          tU = mR;
        xR.UeIS(this.__wbg_ptr, gU, tU, RU)
      }
      text() {
        let UU, RU;
        try {
          const gU = xR.gvUl(this.__wbg_ptr);
          return UU = gU[0], RU = gU[1], lU(gU[0], gU[1])
        } finally {
          xR.jZyw(UU, RU, 1)
        }
      }
    }
    Symbol.dispose && (PU.prototype[Symbol.dispose] = PU.prototype.free);
    class TU {
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, dU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        xR.tzK4(UU, 0)
      }
      dG(UU, RU) {
        iU(RU, pU);
        const gU = xR.BMRf(this.__wbg_ptr, UU, RU.__wbg_ptr);
        if (gU[2]) throw uR(gU[1]);
        return gU[0] >>> 0
      }
      SG() {
        const UU = xR.IPmC(this.__wbg_ptr);
        if (UU[1]) throw uR(UU[0])
      }
      iG(UU, RU, gU, tU, pU, EU, PU, TU, KU, cU, GU) {
        iU(UU, qU);
        const jU = xR.ARf4(this.__wbg_ptr, UU.__wbg_ptr, RU, gU, tU, pU, EU, PU, TU, KU, cU, GU);
        if (jU[2]) throw uR(jU[1]);
        return jU[0]
      }
      AG() {
        const UU = xR.g6aG(this.__wbg_ptr);
        var RU = AU(UU[0], UU[1]).slice();
        return xR.jZyw(UU[0], 8 * UU[1], 8), RU
      }
      zG() {
        return xR.woik(this.__wbg_ptr) >>> 0
      }
      MG() {
        return xR.rFrD(this.__wbg_ptr) >>> 0
      }
      DG() {
        return xR.Ap8L(this.__wbg_ptr) >>> 0
      }
      constructor(UU, RU, gU, tU, pU, EU, PU, TU) {
        const qU = xR.DVBc(UU, RU, gU, tU, pU, EU, PU, TU);
        if (qU[2]) throw uR(qU[1]);
        return this.__wbg_ptr = qU[0], dU.register(this, this.__wbg_ptr, this), this
      }
      lG(UU) {
        iU(UU, pU);
        const RU = xR.MjwJ(this.__wbg_ptr, UU.__wbg_ptr);
        if (RU[2]) throw uR(RU[1]);
        return RU[0] >>> 0
      }
      OG(UU) {
        const RU = xR.WolV(this.__wbg_ptr, UU);
        if (RU[1]) throw uR(RU[0])
      }
      Uj() {
        return xR.tPef(this.__wbg_ptr) >>> 0
      }
      resume(UU, RU) {
        iU(UU, qU), iU(RU, pU);
        const gU = xR.tkHu(this.__wbg_ptr, UU.__wbg_ptr, RU.__wbg_ptr);
        if (gU[2]) throw uR(gU[1]);
        return gU[0] >>> 0
      }
      Ej(UU) {
        const RU = xR.ktYW(this.__wbg_ptr, UU);
        if (RU[1]) throw uR(RU[0])
      }
      qj(UU, RU) {
        iU(RU, pU);
        const gU = xR.fmy2(this.__wbg_ptr, UU, RU.__wbg_ptr);
        if (gU[1]) throw uR(gU[0])
      }
      jj(UU) {
        const RU = GR(UU, xR.pTUl),
          gU = mR,
          tU = xR.pWa0(this.__wbg_ptr, RU, gU);
        if (tU[1]) throw uR(tU[0])
      }
      yG(UU, RU, gU, tU, pU, EU) {
        const PU = xR.IPDY(this.__wbg_ptr, UU, RU, gU, tU, pU, EU);
        if (PU[1]) throw uR(PU[0])
      }
      kG(UU, RU, gU, tU) {
        const pU = KR(UU, xR.pTUl),
          EU = mR,
          PU = GR(RU, xR.pTUl),
          TU = mR,
          qU = GR(gU, xR.pTUl),
          KU = mR,
          cU = GR(tU, xR.pTUl),
          GU = mR,
          jU = xR.He28(this.__wbg_ptr, pU, EU, PU, TU, qU, KU, cU, GU);
        if (jU[1]) throw uR(jU[0])
      }
      Cj(UU, RU) {
        iU(RU, pU);
        const gU = xR.ytq4(this.__wbg_ptr, UU, RU.__wbg_ptr);
        if (gU[1]) throw uR(gU[0])
      }
      NG(UU, RU, gU) {
        const tU = xR.JIQU(this.__wbg_ptr, UU, RU, gU);
        if (tU[1]) throw uR(tU[0])
      }
      Qj(UU, RU, gU, tU, pU, EU, PU, TU, KU, cU) {
        iU(UU, qU);
        return xR.UQFJ(this.__wbg_ptr, UU.__wbg_ptr, RU, gU, tU, pU, EU, PU, TU, KU, cU)
      }
    }
    Symbol.dispose && (TU.prototype[Symbol.dispose] = TU.prototype.free);
    class qU {
      static __wrap(UU) {
        const RU = Object.create(qU.prototype);
        return RU.__wbg_ptr = UU, HU.register(RU, RU.__wbg_ptr, RU), RU
      }
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, HU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        xR.SNqV(UU, 0)
      }
      fj(UU) {
        const RU = xR.NpGS(this.__wbg_ptr, UU);
        if (RU[2]) throw uR(RU[1]);
        return RU[0] >>> 0
      }
      xj(UU, RU, gU) {
        return xR.Zt3y(this.__wbg_ptr, UU, RU, gU)
      }
      mj(UU, RU, gU) {
        return xR.OrMY(this.__wbg_ptr, UU, RU, gU) >>> 0
      }
      Ij(UU, RU, gU, tU) {
        return 0 !== xR.tQE0(this.__wbg_ptr, UU, RU, gU, tU)
      }
      Jj() {
        xR.tAO7(this.__wbg_ptr)
      }
      nj(UU) {
        const RU = xR.Zsmw(this.__wbg_ptr, UU);
        if (RU[3]) throw uR(RU[2]);
        var gU = MU(RU[0], RU[1]).slice();
        return xR.jZyw(RU[0], 1 * RU[1], 1), gU
      }
      evict(UU, RU) {
        return xR.tula(this.__wbg_ptr, UU, RU) >>> 0
      }
      bj() {
        xR.BlhT(this.__wbg_ptr)
      }
      oj(UU, RU, gU) {
        xR.k7nW(this.__wbg_ptr, UU, RU, gU)
      }
      Zj(UU) {
        const RU = xR.jucJ(this.__wbg_ptr, UU);
        if (RU[1]) throw uR(RU[0])
      }
      aj() {
        return xR.c9ZT(this.__wbg_ptr) >>> 0
      }
      Yj() {
        return xR.OI6t(this.__wbg_ptr) >>> 0
      }
      Bj(UU, RU, gU) {
        xR.eFgo(this.__wbg_ptr, UU, RU, gU)
      }
      Vj(UU, RU, gU) {
        xR.BG5v(this.__wbg_ptr, UU, RU, gU)
      }
      rj() {
        return xR.Fd9d(this.__wbg_ptr) >>> 0
      }
      Xj() {
        return xR.K4Xm(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const UU = xR.mjlG();
        return this.__wbg_ptr = UU, HU.register(this, this.__wbg_ptr, this), this
      }
      static vj() {
        const UU = xR.Opjw();
        return qU.__wrap(UU)
      }
      Hj() {
        return xR.KnuA(this.__wbg_ptr) >>> 0
      }
      Sj() {
        return xR.i0ni(this.__wbg_ptr) >>> 0
      }
      sj(UU, RU, gU, tU) {
        const pU = xR.ZzoA(this.__wbg_ptr, UU, RU, gU, tU);
        if (pU[1]) throw uR(pU[0])
      }
      yj() {
        return xR.xCGB(this.__wbg_ptr) >>> 0
      }
      kj() {
        return xR.IUPt(this.__wbg_ptr) >>> 0
      }
      Fj(UU, RU, gU, tU) {
        xR.QshJ(this.__wbg_ptr, UU, RU, gU, tU)
      }
      ij(UU) {
        xR.vNSo(this.__wbg_ptr, UU)
      }
      zj(UU, RU, gU, tU, pU) {
        const EU = cR(RU, xR.pTUl),
          PU = mR,
          TU = KR(gU, xR.pTUl),
          qU = mR,
          KU = GR(tU, xR.pTUl),
          cU = mR,
          GU = xR.vrHo(this.__wbg_ptr, UU, EU, PU, TU, qU, KU, cU, pU);
        if (GU[1]) throw uR(GU[0])
      }
      Aj(UU, RU, gU, tU) {
        const pU = cR(UU, xR.pTUl),
          EU = mR,
          PU = KR(RU, xR.pTUl),
          TU = mR,
          qU = GR(gU, xR.pTUl),
          KU = mR,
          cU = cR(tU, xR.pTUl),
          GU = mR,
          jU = xR.O0jE(this.__wbg_ptr, pU, EU, PU, TU, qU, KU, cU, GU);
        if (jU[1]) throw uR(jU[0])
      }
      Oj(UU) {
        const RU = cR(UU, xR.pTUl),
          gU = mR,
          tU = xR.QEXB(this.__wbg_ptr, RU, gU);
        if (tU[1]) throw uR(tU[0])
      }
      Uu() {
        return xR.lNdR(this.__wbg_ptr) >>> 0
      }
      Ru(UU) {
        const RU = xR.eRj7(this.__wbg_ptr, UU);
        if (RU[2]) throw uR(RU[1]);
        return RU[0] >>> 0
      }
      steer() {
        return xR.tFWa(this.__wbg_ptr) >>> 0
      }
      gu() {
        const UU = xR.QAQu(this.__wbg_ptr);
        var RU = AU(UU[0], UU[1]).slice();
        return xR.jZyw(UU[0], 8 * UU[1], 8), RU
      }
      tu() {
        return xR.jKPG(this.__wbg_ptr) >>> 0
      }
      gj() {
        const UU = xR.lZnm(this.__wbg_ptr);
        var RU, gU, tU = (RU = UU[0], gU = UU[1], RU >>>= 0, (null !== NU && 0 !== NU.byteLength || (NU = new Int32Array(xR.memory.buffer)), NU).subarray(RU / 4, RU / 4 + gU)).slice();
        return xR.jZyw(UU[0], 4 * UU[1], 4), tU
      }
    }
    Symbol.dispose && (qU.prototype[Symbol.dispose] = qU.prototype.free);
    class KU {
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, SU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        xR.Z9ao(UU, 0)
      }
      pu(UU) {
        const RU = KR(UU, xR.pTUl),
          gU = mR,
          tU = xR.qVmQ(this.__wbg_ptr, RU, gU);
        if (tU[1]) throw uR(tU[0])
      }
      Eu() {
        return xR.eTFB(this.__wbg_ptr) >>> 0
      }
      Pu() {
        return xR.VSs6(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const UU = xR.Qa57();
        return this.__wbg_ptr = UU, SU.register(this, this.__wbg_ptr, this), this
      }
      run(UU, RU) {
        iU(UU, qU);
        const gU = xR.knd1(this.__wbg_ptr, UU.__wbg_ptr, RU);
        if (gU[2]) throw uR(gU[1]);
        return gU[0] >>> 0
      }
      Tu(UU) {
        const RU = KR(UU, xR.pTUl),
          gU = mR;
        xR.fIYf(this.__wbg_ptr, RU, gU)
      }
      qu(UU) {
        const RU = KR(UU, xR.pTUl),
          gU = mR;
        xR.lYVc(this.__wbg_ptr, RU, gU)
      }
    }
    Symbol.dispose && (KU.prototype[Symbol.dispose] = KU.prototype.free);
    class cU {
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, sU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        xR.UOLs(UU, 0)
      }
      cu(UU, RU) {
        const gU = cR(UU, xR.pTUl),
          tU = mR;
        return xR.NhK3(this.__wbg_ptr, gU, tU, RU) >>> 0
      }
      Gu(UU, RU, gU) {
        iU(UU, qU);
        const tU = cR(gU, xR.pTUl),
          pU = mR,
          EU = xR.VVp6(this.__wbg_ptr, UU.__wbg_ptr, RU, tU, pU);
        if (EU[2]) throw uR(EU[1]);
        return EU[0] >>> 0
      }
      Ku(UU) {
        return xR.GYrc(this.__wbg_ptr, UU) >>> 0
      }
      constructor() {
        const UU = xR.KAgN();
        return this.__wbg_ptr = UU, sU.register(this, this.__wbg_ptr, this), this
      }
      scan(UU, RU) {
        iU(UU, qU);
        const gU = xR.Dh7n(this.__wbg_ptr, UU.__wbg_ptr, RU);
        if (gU[2]) throw uR(gU[1]);
        return gU[0] >>> 0
      }
      Cu(UU) {
        const RU = cR(UU, xR.pTUl),
          gU = mR;
        xR.gADB(this.__wbg_ptr, RU, gU)
      }
      uu() {
        return xR.kMJS(this.__wbg_ptr) >>> 0
      }
      ju() {
        return xR.Hsxn(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (cU.prototype[Symbol.dispose] = cU.prototype.free);
    class GU {
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, yU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        xR.A4EY(UU, 0)
      }
      eu(UU) {
        const RU = xR.Umfx(this.__wbg_ptr, UU);
        if (RU[2]) throw uR(RU[1]);
        return RU[0] >>> 0
      }
      compute(UU, RU, gU, tU) {
        var pU = TR(tU) ? 0 : jR(tU, xR.pTUl, xR.Psq3),
          EU = mR;
        const PU = xR.axtf(this.__wbg_ptr, UU, TR(RU) ? Number.MAX_SAFE_INTEGER : RU | 0, gU, pU, EU);
        if (PU[2]) throw uR(PU[1]);
        return PU[0] >>> 0
      }
      fu(UU) {
        const RU = jR(UU, xR.pTUl, xR.Psq3),
          gU = mR;
        xR.PzRw(this.__wbg_ptr, RU, gU)
      }
      mu() {
        return xR.qIOk(this.__wbg_ptr)
      }
      Iu(UU) {
        return xR.ImZZ(this.__wbg_ptr, UU) >>> 0
      }
      Ju() {
        return xR.RSn2(this.__wbg_ptr) >>> 0
      }
      wu() {
        return xR.N9wi(this.__wbg_ptr) >>> 0
      }
      nu(UU, RU) {
        const gU = xR.mJ6V(this.__wbg_ptr, UU, RU);
        if (gU[1]) throw uR(gU[0])
      }
      ou() {
        return xR.ECkI(this.__wbg_ptr) >>> 0
      }
      Zu() {
        return xR.iZPT(this.__wbg_ptr) >>> 0
      }
      au() {
        return xR.gnGC(this.__wbg_ptr) >>> 0
      }
      Wu(UU, RU, gU) {
        const tU = KR(UU, xR.pTUl),
          pU = mR,
          EU = KR(RU, xR.pTUl),
          PU = mR,
          TU = xR.hcMn(this.__wbg_ptr, tU, pU, EU, PU, gU);
        if (TU[1]) throw uR(TU[0])
      }
      Bu() {
        return xR.m6L0(this.__wbg_ptr) >>> 0
      }
      mesh(UU, RU, gU, tU, pU) {
        const EU = xR.xJat(this.__wbg_ptr, UU, RU, gU, tU, pU);
        if (EU[2]) throw uR(EU[1]);
        return EU[0] >>> 0
      }
      constructor(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU, cU, GU, jU, uU, CU, hU, QU, eU, WU, fU) {
        const xU = qR(UU, xR.pTUl),
          mU = mR,
          IU = GR(RU, xR.pTUl),
          JU = mR,
          wU = KR(gU, xR.pTUl),
          nU = mR,
          bU = cR(tU, xR.pTUl),
          oU = mR,
          ZU = cR(pU, xR.pTUl),
          aU = mR,
          YU = KR(EU, xR.pTUl),
          BU = mR,
          VU = KR(PU, xR.pTUl),
          rU = mR,
          XU = GR(TU, xR.pTUl),
          vU = mR,
          dU = GR(qU, xR.pTUl),
          HU = mR,
          SU = cR(KU, xR.pTUl),
          sU = mR;
        var kU = TR(cU) ? 0 : qR(cU, xR.pTUl),
          FU = mR;
        const iU = KR(GU, xR.pTUl),
          AU = mR,
          zU = cR(jU, xR.pTUl),
          MU = mR;
        var DU = TR(uU) ? 0 : cR(uU, xR.pTUl),
          LU = mR;
        const NU = GR(CU, xR.pTUl),
          lU = mR,
          OU = xR.tyMk(xU, mU, IU, JU, wU, nU, bU, oU, ZU, aU, YU, BU, VU, rU, XU, vU, dU, HU, SU, sU, kU, FU, iU, AU, zU, MU, DU, LU, NU, lU, hU, QU, eU, WU, fU);
        if (OU[2]) throw uR(OU[1]);
        return this.__wbg_ptr = OU[0], yU.register(this, this.__wbg_ptr, this), this
      }
      Yu(UU, RU) {
        const gU = KR(UU, xR.pTUl),
          tU = mR,
          pU = xR.JIaV(this.__wbg_ptr, gU, tU, RU);
        if (pU[3]) throw uR(pU[2]);
        var EU = MU(pU[0], pU[1]).slice();
        return xR.jZyw(pU[0], 1 * pU[1], 1), EU
      }
      Vu(UU) {
        xR.BNkL(this.__wbg_ptr, TR(UU) ? 16777215 : UU)
      }
      ru(UU) {
        return xR.xrfr(this.__wbg_ptr, UU) >>> 0
      }
      vu() {
        return xR.SJvR(this.__wbg_ptr) >>> 0
      }
      Xu() {
        const UU = xR.Nkjl(this.__wbg_ptr);
        if (UU[2]) throw uR(UU[1]);
        return 0 !== UU[0]
      }
      Hu() {
        return xR.zrxo(this.__wbg_ptr) >>> 0
      }
      Su() {
        return xR.siiG(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (GU.prototype[Symbol.dispose] = GU.prototype.free);
    class jU {
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, kU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        xR.Qojn(UU, 0)
      }
      compute(UU, RU, gU, tU) {
        var pU = TR(tU) ? 0 : jR(tU, xR.pTUl, xR.Psq3),
          EU = mR;
        const PU = xR.ZeBD(this.__wbg_ptr, UU, TR(RU) ? Number.MAX_SAFE_INTEGER : RU | 0, gU, pU, EU);
        if (PU[2]) throw uR(PU[1]);
        return PU[0] >>> 0
      }
      fu(UU) {
        const RU = jR(UU, xR.pTUl, xR.Psq3),
          gU = mR;
        xR.Wd5w(this.__wbg_ptr, RU, gU)
      }
      Zu() {
        return xR.q58d(this.__wbg_ptr) >>> 0
      }
      au() {
        return xR.GYP6(this.__wbg_ptr) >>> 0
      }
      yu(UU) {
        const RU = xR.dx9q(this.__wbg_ptr, UU);
        if (RU[2]) throw uR(RU[1]);
        return RU[0] >>> 0
      }
      constructor(UU, RU, gU, tU, pU, EU) {
        const PU = qR(UU, xR.pTUl),
          TU = mR,
          qU = GR(RU, xR.pTUl),
          KU = mR,
          cU = KR(gU, xR.pTUl),
          GU = mR,
          jU = cR(tU, xR.pTUl),
          uU = mR,
          CU = xR.DHWV(PU, TU, qU, KU, cU, GU, jU, uU, pU, EU);
        if (CU[2]) throw uR(CU[1]);
        return this.__wbg_ptr = CU[0], kU.register(this, this.__wbg_ptr, this), this
      }
      vu() {
        return xR.okSd(this.__wbg_ptr) >>> 0
      }
      Xu() {
        const UU = xR.OBhk(this.__wbg_ptr);
        if (UU[2]) throw uR(UU[1]);
        return 0 !== UU[0]
      }
      Hu() {
        return xR.E6Q2(this.__wbg_ptr) >>> 0
      }
    }

    function uU() {
      const UU = xR.os3S();
      var RU = zU(UU[0], UU[1]).slice();
      return xR.jZyw(UU[0], 4 * UU[1], 4), RU
    }

    function CU(UU, RU) {
      let gU, tU;
      try {
        const pU = qR(UU, xR.pTUl),
          EU = mR,
          PU = jR(RU, xR.pTUl, xR.Psq3),
          TU = mR,
          qU = xR.fYMY(pU, EU, PU, TU);
        return gU = qU[0], tU = qU[1], lU(qU[0], qU[1])
      } finally {
        xR.jZyw(gU, tU, 1)
      }
    }

    function hU() {
      const UU = xR.dB2T();
      var RU = zU(UU[0], UU[1]).slice();
      return xR.jZyw(UU[0], 4 * UU[1], 4), RU
    }

    function QU(UU) {
      return 0 !== xR.TPvv(UU)
    }

    function eU(UU, RU) {
      const gU = jR(UU, xR.pTUl, xR.Psq3),
        tU = mR,
        pU = xR.LBDO(gU, tU, RU);
      if (pU[1]) throw uR(pU[0])
    }

    function WU() {
      xR.iM45()
    }

    function fU() {
      return xR.rv2l() >>> 0
    }

    function xU(UU) {
      return 0 !== xR.By0Q(UU)
    }

    function mU(UU) {
      return 0 !== xR.uA6I(UU)
    }

    function IU(UU) {
      xR.KD3i(UU)
    }

    function JU() {
      return xR.pTN6() >>> 0
    }

    function wU() {
      return xR.Cpfp() >>> 0
    }

    function nU() {
      return 0 !== xR.N6l0()
    }

    function bU() {
      const UU = xR.T1ZB();
      var RU = zU(UU[0], UU[1]).slice();
      return xR.jZyw(UU[0], 4 * UU[1], 4), RU
    }

    function oU() {
      const UU = xR.KakV();
      var RU = zU(UU[0], UU[1]).slice();
      return xR.jZyw(UU[0], 4 * UU[1], 4), RU
    }

    function ZU() {
      const UU = xR.SbxZ();
      var RU = zU(UU[0], UU[1]).slice();
      return xR.jZyw(UU[0], 4 * UU[1], 4), RU
    }

    function aU() {
      return xR.Oyea() >>> 0
    }

    function YU() {
      xR.wB2O()
    }

    function BU() {
      let UU, RU;
      try {
        const gU = xR.kJmR();
        return UU = gU[0], RU = gU[1], lU(gU[0], gU[1])
      } finally {
        xR.jZyw(UU, RU, 1)
      }
    }

    function VU(UU) {
      xR.Kscv(FU(UU))
    }

    function rU() {
      return {
        __proto__: null,
        Pkdp: {
          __proto__: null,
          v3Ry: function(UU, RU) {
            return FU(Error(lU(UU, RU)))
          },
          HIr3: function(UU, RU) {
            throw new Error(lU(UU, RU))
          },
          As6E: function(UU) {
            pR(UU).call()
          },
          rQUl: function(UU, RU) {
            console.error(lU(UU, RU))
          },
          Dm8n: function() {
            return performance.now()
          },
          oXVM: function(UU) {
            uR(UU)
          }
        }
      }
    }
    Symbol.dispose && (jU.prototype[Symbol.dispose] = jU.prototype.free);
    const XU = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((UU => xR.uSkk(UU, 1))),
      vU = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((UU => xR.PM05(UU, 1))),
      dU = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((UU => xR.tzK4(UU, 1))),
      HU = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((UU => xR.SNqV(UU, 1))),
      SU = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((UU => xR.Z9ao(UU, 1))),
      sU = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((UU => xR.UOLs(UU, 1))),
      yU = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((UU => xR.A4EY(UU, 1))),
      kU = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((UU => xR.Qojn(UU, 1)));

    function FU(UU) {
      PR === ER.length && ER.push(ER.length + 1);
      const RU = PR;
      return PR = ER[RU], ER[RU] = UU, RU
    }

    function iU(UU, RU) {
      if (!(UU instanceof RU)) throw new Error(`expected instance of ${RU.name}`)
    }

    function AU(UU, RU) {
      return UU >>>= 0, LU().subarray(UU / 8, UU / 8 + RU)
    }

    function zU(UU, RU) {
      return UU >>>= 0, RR().subarray(UU / 4, UU / 4 + RU)
    }

    function MU(UU, RU) {
      return UU >>>= 0, tR().subarray(UU / 1, UU / 1 + RU)
    }
    let DU = null;

    function LU() {
      return null !== DU && 0 !== DU.byteLength || (DU = new Float64Array(xR.memory.buffer)), DU
    }
    let NU = null;

    function lU(UU, RU) {
      return function(UU, RU) {
        QR += RU, QR >= hR && (CR = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), CR.decode(), QR = RU);
        return CR.decode(tR().subarray(UU, UU + RU))
      }(UU >>> 0, RU)
    }
    let OU = null;
    let UR = null;

    function RR() {
      return null !== UR && 0 !== UR.byteLength || (UR = new Uint32Array(xR.memory.buffer)), UR
    }
    let gR = null;

    function tR() {
      return null !== gR && 0 !== gR.byteLength || (gR = new Uint8Array(xR.memory.buffer)), gR
    }

    function pR(UU) {
      return ER[UU]
    }
    let ER = new Array(1024).fill(void 0);
    ER.push(void 0, null, !0, !1);
    let PR = ER.length;

    function TR(UU) {
      return void 0 === UU || null === UU
    }

    function qR(UU, RU) {
      const gU = RU(2 * UU.length, 2) >>> 0;
      return (null !== OU && 0 !== OU.byteLength || (OU = new Uint16Array(xR.memory.buffer)), OU).set(UU, gU / 2), mR = UU.length, gU
    }

    function KR(UU, RU) {
      const gU = RU(4 * UU.length, 4) >>> 0;
      return RR().set(UU, gU / 4), mR = UU.length, gU
    }

    function cR(UU, RU) {
      const gU = RU(1 * UU.length, 1) >>> 0;
      return tR().set(UU, gU / 1), mR = UU.length, gU
    }

    function GR(UU, RU) {
      const gU = RU(8 * UU.length, 8) >>> 0;
      return LU().set(UU, gU / 8), mR = UU.length, gU
    }

    function jR(UU, RU, gU) {
      if (void 0 === gU) {
        const gU = eR.encode(UU),
          tU = RU(gU.length, 1) >>> 0;
        return tR().subarray(tU, tU + gU.length).set(gU), mR = gU.length, tU
      }
      let tU = UU.length,
        pU = RU(tU, 1) >>> 0;
      const EU = tR();
      let PU = 0;
      for (; PU < tU; PU++) {
        const RU = UU.charCodeAt(PU);
        if (RU > 127) break;
        EU[pU + PU] = RU
      }
      if (PU !== tU) {
        0 !== PU && (UU = UU.slice(PU)), pU = gU(pU, tU, tU = PU + 3 * UU.length, 1) >>> 0;
        const RU = tR().subarray(pU + PU, pU + tU);
        PU += eR.encodeInto(UU, RU).written, pU = gU(pU, tU, PU, 1) >>> 0
      }
      return mR = PU, pU
    }

    function uR(UU) {
      const RU = pR(UU);
      return function(UU) {
        UU < 1028 || (ER[UU] = PR, PR = UU)
      }(UU), RU
    }
    let CR = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    CR.decode();
    const hR = 2146435072;
    let QR = 0;
    const eR = new TextEncoder;
    "encodeInto" in eR || (eR.encodeInto = function(UU, RU) {
      const gU = eR.encode(UU);
      return RU.set(gU), {
        read: UU.length,
        written: gU.length
      }
    });
    let WR, fR, xR, mR = 0;

    function IR(UU, RU) {
      return fR = UU, xR = UU.exports, WR = RU, DU = null, NU = null, OU = null, UR = null, gR = null, xR.Lr6C(), xR
    }

    function JR(UU) {
      if (void 0 !== xR) return xR;
      void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
        module: UU
      } = UU) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const RU = rU();
      UU instanceof WebAssembly.Module || (UU = new WebAssembly.Module(UU));
      return IR(new WebAssembly.Instance(UU, RU), UU)
    }
    async function wR(UU) {
      if (void 0 !== xR) return xR;
      void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
        module_or_path: UU
      } = UU) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const RU = rU();
      ("string" === typeof UU || "function" === typeof Request && UU instanceof Request || "function" === typeof URL && UU instanceof URL) && (UU = fetch(UU));
      const {
        instance: gU,
        module: tU
      } = await async function(UU, RU) {
        if ("function" === typeof Response && UU instanceof Response) {
          if (!UU.ok) throw new Error(`failed to fetch Wasm: ${UU.status} ${UU.statusText} fetching '${UU.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(UU, RU)
          } catch (gU) {
            if (! function(UU) {
                switch (UU) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(UU.type) || "application/wasm" === UU.headers.get("Content-Type")) throw gU;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", gU)
          }
          const tU = await UU.arrayBuffer();
          return await WebAssembly.instantiate(tU, RU)
        } {
          const gU = await WebAssembly.instantiate(UU, RU);
          return gU instanceof WebAssembly.Instance ? {
            instance: gU,
            module: UU
          } : gU
        }
      }(await UU, RU);
      return IR(gU, tU)
    }
    var nR = gU(3372),
      bR = gU(35912);
    const oR = {
      name: nR.e,
      url: () => new gU.U(gU(35915)),
      init: wR,
      bindings: tU
    };

    function ZR() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oR,
        RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oR,
        gU = arguments.length > 2 ? arguments[2] : void 0;
      return (0, bR.f)(UU, RU, gU)
    }

    function aR(UU) {
      return (0, nR.G)((() => UU), tU, oR)
    }
  },
  35893: (UU, RU, gU) => {
    function tU(UU, RU) {
      return new Error(`${UU}: ${RU instanceof Error?`${RU.name}: ${RU.message}`:String(RU)}`, {
        cause: RU
      })
    }
    gU.d(RU, {
      b: () => tU
    })
  },
  35891: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU,
      h: () => qU
    });
    var tU = gU(3377),
      pU = gU(6297),
      EU = gU(35893);

    function PU() {
      return new URL(new gU.U(gU(35900)).href, globalThis.location?.href).href
    }
    let TU = null;

    function qU() {
      return TU ??= (async () => (0, tU.D)(new URL(PU()), (0, pU.b)("bloxd_wasm_textures")))().catch((UU => {
        throw (0, EU.b)((0, tU.K)(UU), UU)
      })), TU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);