export const id = 206;
export const ids = [206, 207];
export const modules = {
  36069: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => MT,
      reportCappedWasmFailure: () => yT,
      reportUncappedWasmFailure: () => OT,
      reportWasmFailure: () => KT
    });
    var lT = cT(2891);
    const MT = lT.d - 4;

    function KT(TT, kT, cT) {
      (0, lT.e)(TT, kT, cT, !1)
    }

    function OT(TT, kT, cT) {
      (0, lT.e)(TT, kT, cT, !1, 1 / 0)
    }

    function yT(TT, kT, cT) {
      (0, lT.e)(TT, kT, cT, !1, MT)
    }
  },
  36065: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => aT,
      e: () => PT,
      i: () => wT,
      j: () => FT
    });
    var lT = cT(36092),
      MT = cT(3679),
      KT = cT(36108),
      OT = cT(3684),
      yT = cT(36069),
      fT = cT(2884),
      xT = cT(3179),
      IT = cT(3170),
      AT = cT(36077),
      CT = cT(2891),
      jT = cT(36085),
      vT = cT(36089),
      tT = cT(3673);
    let hT = !1;
    const NT = 40;
    var QT = cT(698);
    const ST = "bloxdWasmFailureReported";

    function DT() {
      return "undefined" === typeof WebAssembly
    }

    function aT() {
      return (0, lT.g)()
    }

    function FT() {
      if (DT()) return "this browser has no WebAssembly";
      const TT = (0, MT.n)();
      return "compile" === TT || "instantiate" === TT ? `the core wasm didn't load here (${(0,MT.g)()})` : null
    }
    async function rT(TT) {
      return await (0, KT.f)(KT.e, void 0, TT)
    }

    function PT() {
      DT() || (0, QT.c)((() => {
        rT()
      }))
    }

    function wT() {
      if (DT()) return async () => ((0, fT.g)("unsupported", 0), mT("unsupported", "This browser has no WebAssembly"), !1);
      const TT = {
        reloadFailedDownload: !0
      };
      return rT(TT), async () => {
        var kT;
        const cT = performance.now();
        await rT(TT);
        const lT = (performance.now() - cT) / 1e3;
        if ((0, MT.K)()) return (0, fT.g)("ready", lT), hT || (hT = !0, (0, MT.O)((() => {
          if ("call" !== (0, MT.n)()) return;
          const TT = (0, MT.m)(),
            kT = (0, AT.l)(TT, MT.z, MT.V),
            cT = (0, MT.q)().buffer.byteLength,
            lT = (0, AT.g)(kT.kind, kT.refusedBytes),
            KT = lT ? "alloc_failed" : kT.kind,
            OT = (0, jT.j)(cT),
            yT = lT ? `_r${Math.floor(Math.log2(kT.refusedBytes))}` : "",
            fT = (0, tT.c)();
          null === fT && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const xT = new Error((0, vT.e)(TT, cT, kT));
          if (TT instanceof Error && void 0 !== TT.stack) {
            const kT = TT.stack.split("\n"),
              cT = kT.length > NT ? [...kT.slice(0, NT / 2), ...kT.slice(-NT / 2)] : kT;
            xT.stack = cT.join("\n")
          }(0, CT.e)("wasm_load", xT, `wasm_call_${KT}_${null!==fT&&void 0!==fT?fT:"unnamed"}_m${OT}${yT}`)
        }))), (0, OT.W)(KT.e.url()) && (0, yT.reportCappedWasmFailure)("wasm_load", xT.d.message, xT.d.code), !0;
        const QT = IT.c[null !== (kT = (0, MT.n)()) && void 0 !== kT ? kT : "call"];
        return (0, fT.g)(QT, lT), mT(QT, (0, MT.g)()), !1
      }
    }

    function mT(TT, kT) {
      (0, IT.i)(ST, `Bloxd wasm ${TT}, so the game can't start: ${kT}`, kT, TT)
    }
  },
  36117: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/bloxd_wasm_bg.7e706eaa39701505b511.wasm"
  },
  36104: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/bloxd_wasm_textures_bg.ed3c45a2c71b6bf67ac7.wasm"
  },
  36108: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => bk,
      f: () => zk,
      g: () => Jk
    });
    var lT = {};
    cT.r(lT), cT.d(lT, {
      YI: () => MT,
      EnvelopeKind: () => KT,
      BI: () => OT,
      PhysicsEngine: () => yT,
      WI: () => fT,
      nI: () => xT,
      pI: () => IT,
      iI: () => AT,
      qI: () => CT,
      sI: () => jT,
      TA: () => vT,
      kA: () => tT,
      cA: () => hT,
      lA: () => NT,
      default: () => Pk,
      initSync: () => rk,
      MA: () => QT,
      KA: () => ST,
      OA: () => DT,
      yA: () => aT,
      fA: () => FT,
      xA: () => rT,
      IA: () => PT,
      AA: () => wT,
      CA: () => mT,
      jA: () => bT,
      vA: () => zT,
      tA: () => JT,
      hA: () => oT,
      NA: () => HT,
      QA: () => eT
    });
    class MT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, VT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        Dk.bw2V(TT, 0)
      }
      SA() {
        const TT = Dk.DxWo(this.__wbg_ptr);
        if (TT[2]) throw jk(TT[1]);
        return TT[0] >>> 0
      }
      DA() {
        return Dk.Afya(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const TT = Dk.ENA1();
        return this.__wbg_ptr = TT, VT.register(this, this.__wbg_ptr, this), this
      }
      aA() {
        return Dk.mt92(this.__wbg_ptr) >>> 0
      }
      FA(TT) {
        const kT = Dk.nHnr(this.__wbg_ptr, TT);
        if (kT[2]) throw jk(kT[1]);
        return kT[0] >>> 0
      }
      rA(TT) {
        const kT = Dk.CCBg(this.__wbg_ptr, TT);
        if (kT[2]) throw jk(kT[1]);
        return kT[0] >>> 0
      }
    }
    Symbol.dispose && (MT.prototype[Symbol.dispose] = MT.prototype.free);
    const KT = Object.freeze({
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
    class OT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ET.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        Dk.w7hq(TT, 0)
      }
      mA(TT, kT) {
        const cT = Dk.k6jI(this.__wbg_ptr, TT, kT);
        if (cT[2]) throw jk(cT[1]);
        return cT[0] >>> 0
      }
      bA(TT) {
        const kT = Dk.y4WS(this.__wbg_ptr, TT);
        if (kT[2]) throw jk(kT[1]);
        return kT[0] >>> 0
      }
      zA() {
        Dk.lxj0(this.__wbg_ptr)
      }
      static JA() {
        return Dk.jYkz() >>> 0
      }
      oA() {
        return Dk.O6d5(this.__wbg_ptr) >>> 0
      }
      HA() {
        const TT = Dk.baoB(this.__wbg_ptr);
        return 0 === TT[0] ? void 0 : TT[1]
      }
      eA() {
        return Dk.jujn(this.__wbg_ptr) >>> 0
      }
      VA() {
        return Dk.V38R(this.__wbg_ptr) >>> 0
      }
      static wA() {
        return Dk.q28k() >>> 0
      }
      constructor() {
        const TT = Dk.V8BL();
        return this.__wbg_ptr = TT, ET.register(this, this.__wbg_ptr, this), this
      }
      EA() {
        return Dk.cUqR(this.__wbg_ptr) >>> 0
      }
      ZA() {
        return Dk.npaK(this.__wbg_ptr) >>> 0
      }
      uA() {
        return Dk.hJu2(this.__wbg_ptr) >>> 0
      }
      PA(TT) {
        return Dk.RM3y(this.__wbg_ptr, TT) >>> 0
      }
      reserve(TT, kT) {
        const cT = Dk.rfR9(this.__wbg_ptr, TT, kT);
        if (cT[1]) throw jk(cT[0])
      }
      LA(TT, kT) {
        const cT = xk(TT, Dk.PFWV),
          lT = ak;
        Dk.zYBA(this.__wbg_ptr, cT, lT, kT)
      }
      text() {
        let TT, kT;
        try {
          const cT = Dk.S2ca(this.__wbg_ptr);
          return TT = cT[0], kT = cT[1], qT(cT[0], cT[1])
        } finally {
          Dk.a8Pn(TT, kT, 1)
        }
      }
    }
    Symbol.dispose && (OT.prototype[Symbol.dispose] = OT.prototype.free);
    class yT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ZT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        Dk.C9Dl(TT, 0)
      }
      gA(TT, kT) {
        UT(kT, MT);
        const cT = Dk.jJ9I(this.__wbg_ptr, TT, kT.__wbg_ptr);
        if (cT[2]) throw jk(cT[1]);
        return cT[0] >>> 0
      }
      YA() {
        const TT = Dk.FkxI(this.__wbg_ptr);
        if (TT[1]) throw jk(TT[0])
      }
      iA(TT, kT, cT, lT, MT, KT, OT, yT, xT, IT, AT) {
        UT(TT, fT);
        const CT = Dk.lo5I(this.__wbg_ptr, TT.__wbg_ptr, kT, cT, lT, MT, KT, OT, yT, xT, IT, AT);
        if (CT[2]) throw jk(CT[1]);
        return CT[0]
      }
      qA() {
        const TT = Dk.nHBB(this.__wbg_ptr);
        var kT = YT(TT[0], TT[1]).slice();
        return Dk.a8Pn(TT[0], 8 * TT[1], 8), kT
      }
      sA() {
        return Dk.GmOm(this.__wbg_ptr) >>> 0
      }
      TC() {
        return Dk.Fjsh(this.__wbg_ptr) >>> 0
      }
      kC() {
        return Dk.Rvxg(this.__wbg_ptr) >>> 0
      }
      constructor(TT, kT, cT, lT, MT, KT, OT, yT) {
        const fT = Dk.zuFy(TT, kT, cT, lT, MT, KT, OT, yT);
        if (fT[2]) throw jk(fT[1]);
        return this.__wbg_ptr = fT[0], ZT.register(this, this.__wbg_ptr, this), this
      }
      MC(TT) {
        UT(TT, MT);
        const kT = Dk.oIrj(this.__wbg_ptr, TT.__wbg_ptr);
        if (kT[2]) throw jk(kT[1]);
        return kT[0] >>> 0
      }
      KC(TT) {
        const kT = Dk.UKZm(this.__wbg_ptr, TT);
        if (kT[1]) throw jk(kT[0])
      }
      OC() {
        return Dk.BC2H(this.__wbg_ptr) >>> 0
      }
      resume(TT, kT) {
        UT(TT, fT), UT(kT, MT);
        const cT = Dk.SHUy(this.__wbg_ptr, TT.__wbg_ptr, kT.__wbg_ptr);
        if (cT[2]) throw jk(cT[1]);
        return cT[0] >>> 0
      }
      AC(TT) {
        const kT = Dk.rtFf(this.__wbg_ptr, TT);
        if (kT[1]) throw jk(kT[0])
      }
      vC(TT, kT) {
        UT(kT, MT);
        const cT = Dk.FzbI(this.__wbg_ptr, TT, kT.__wbg_ptr);
        if (cT[1]) throw jk(cT[0])
      }
      NC(TT) {
        const kT = Ak(TT, Dk.PFWV),
          cT = ak,
          lT = Dk.F3gs(this.__wbg_ptr, kT, cT);
        if (lT[1]) throw jk(lT[0])
      }
      WA(TT, kT, cT, lT, MT, KT) {
        const OT = Dk.xFkY(this.__wbg_ptr, TT, kT, cT, lT, MT, KT);
        if (OT[1]) throw jk(OT[0])
      }
      nA(TT, kT, cT, lT) {
        const MT = xk(TT, Dk.PFWV),
          KT = ak,
          OT = Ak(kT, Dk.PFWV),
          yT = ak,
          fT = Ak(cT, Dk.PFWV),
          xT = ak,
          IT = Ak(lT, Dk.PFWV),
          AT = ak,
          CT = Dk.PAiJ(this.__wbg_ptr, MT, KT, OT, yT, fT, xT, IT, AT);
        if (CT[1]) throw jk(CT[0])
      }
      SC(TT, kT) {
        UT(kT, MT);
        const cT = Dk.FXVh(this.__wbg_ptr, TT, kT.__wbg_ptr);
        if (cT[1]) throw jk(cT[0])
      }
      lC(TT, kT, cT) {
        const lT = Dk.FGgH(this.__wbg_ptr, TT, kT, cT);
        if (lT[1]) throw jk(lT[0])
      }
      aC(TT, kT, cT, lT, MT, KT, OT, yT, xT, IT) {
        UT(TT, fT);
        return Dk.NhmY(this.__wbg_ptr, TT.__wbg_ptr, kT, cT, lT, MT, KT, OT, yT, xT, IT)
      }
    }
    Symbol.dispose && (yT.prototype[Symbol.dispose] = yT.prototype.free);
    class fT {
      static __wrap(TT) {
        const kT = Object.create(fT.prototype);
        return kT.__wbg_ptr = TT, uT.register(kT, kT.__wbg_ptr, kT), kT
      }
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, uT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        Dk.qwqn(TT, 0)
      }
      PC(TT) {
        const kT = Dk.vzYw(this.__wbg_ptr, TT);
        if (kT[2]) throw jk(kT[1]);
        return kT[0] >>> 0
      }
      wC(TT, kT, cT) {
        return Dk.yv2E(this.__wbg_ptr, TT, kT, cT)
      }
      mC(TT, kT, cT) {
        return Dk.kOcb(this.__wbg_ptr, TT, kT, cT) >>> 0
      }
      bC(TT, kT, cT, lT) {
        return 0 !== Dk.pTR8(this.__wbg_ptr, TT, kT, cT, lT)
      }
      zC() {
        Dk.VA1u(this.__wbg_ptr)
      }
      oC(TT) {
        const kT = Dk.MOVl(this.__wbg_ptr, TT);
        if (kT[3]) throw jk(kT[2]);
        var cT = WT(kT[0], kT[1]).slice();
        return Dk.a8Pn(kT[0], 1 * kT[1], 1), cT
      }
      evict(TT, kT) {
        return Dk.jFWK(this.__wbg_ptr, TT, kT) >>> 0
      }
      HC() {
        Dk.AM90(this.__wbg_ptr)
      }
      eC(TT, kT, cT) {
        Dk.sprD(this.__wbg_ptr, TT, kT, cT)
      }
      VC(TT) {
        const kT = Dk.phvC(this.__wbg_ptr, TT);
        if (kT[1]) throw jk(kT[0])
      }
      EC() {
        return Dk.O8WZ(this.__wbg_ptr) >>> 0
      }
      ZC() {
        return Dk.Y6ug(this.__wbg_ptr) >>> 0
      }
      uC(TT, kT, cT) {
        Dk.F33I(this.__wbg_ptr, TT, kT, cT)
      }
      XC(TT, kT, cT) {
        Dk.TJ1O(this.__wbg_ptr, TT, kT, cT)
      }
      dC() {
        return Dk.DZH6(this.__wbg_ptr) >>> 0
      }
      LC() {
        return Dk.J0zc(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const TT = Dk.Yrid();
        return this.__wbg_ptr = TT, uT.register(this, this.__wbg_ptr, this), this
      }
      static RC() {
        const TT = Dk.UcTO();
        return fT.__wrap(TT)
      }
      gC() {
        return Dk.aW4Z(this.__wbg_ptr) >>> 0
      }
      UC() {
        return Dk.ipXp(this.__wbg_ptr) >>> 0
      }
      YC(TT, kT, cT, lT) {
        const MT = Dk.esKf(this.__wbg_ptr, TT, kT, cT, lT);
        if (MT[1]) throw jk(MT[0])
      }
      BC() {
        return Dk.jD9n(this.__wbg_ptr) >>> 0
      }
      WC() {
        return Dk.qt4C(this.__wbg_ptr) >>> 0
      }
      nC(TT, kT, cT, lT) {
        Dk.NIah(this.__wbg_ptr, TT, kT, cT, lT)
      }
      pC(TT) {
        Dk.KIC8(this.__wbg_ptr, TT)
      }
      qC(TT, kT, cT, lT, MT) {
        const KT = Ik(kT, Dk.PFWV),
          OT = ak,
          yT = xk(cT, Dk.PFWV),
          fT = ak,
          xT = Ak(lT, Dk.PFWV),
          IT = ak,
          AT = Dk.WsqD(this.__wbg_ptr, TT, KT, OT, yT, fT, xT, IT, MT);
        if (AT[1]) throw jk(AT[0])
      }
      iC(TT, kT, cT, lT) {
        const MT = Ik(TT, Dk.PFWV),
          KT = ak,
          OT = xk(kT, Dk.PFWV),
          yT = ak,
          fT = Ak(cT, Dk.PFWV),
          xT = ak,
          IT = Ik(lT, Dk.PFWV),
          AT = ak,
          CT = Dk.F3uW(this.__wbg_ptr, MT, KT, OT, yT, fT, xT, IT, AT);
        if (CT[1]) throw jk(CT[0])
      }
      Kj(TT) {
        const kT = Ik(TT, Dk.PFWV),
          cT = ak,
          lT = Dk.ubIQ(this.__wbg_ptr, kT, cT);
        if (lT[1]) throw jk(lT[0])
      }
      Oj() {
        return Dk.ArAk(this.__wbg_ptr) >>> 0
      }
      yj(TT) {
        const kT = Dk.Qill(this.__wbg_ptr, TT);
        if (kT[2]) throw jk(kT[1]);
        return kT[0] >>> 0
      }
      steer() {
        return Dk.SoFL(this.__wbg_ptr) >>> 0
      }
      fj() {
        const TT = Dk.rDfG(this.__wbg_ptr);
        var kT = YT(TT[0], TT[1]).slice();
        return Dk.a8Pn(TT[0], 8 * TT[1], 8), kT
      }
      xj() {
        return Dk.EB5n(this.__wbg_ptr) >>> 0
      }
      fC() {
        const TT = Dk.u4w2(this.__wbg_ptr);
        var kT, cT, lT = (kT = TT[0], cT = TT[1], kT >>>= 0, (null !== iT && 0 !== iT.byteLength || (iT = new Int32Array(Dk.memory.buffer)), iT).subarray(kT / 4, kT / 4 + cT)).slice();
        return Dk.a8Pn(TT[0], 4 * TT[1], 4), lT
      }
    }
    Symbol.dispose && (fT.prototype[Symbol.dispose] = fT.prototype.free);
    class xT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, XT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        Dk.djVZ(TT, 0)
      }
      Ij(TT) {
        const kT = xk(TT, Dk.PFWV),
          cT = ak,
          lT = Dk.cKIX(this.__wbg_ptr, kT, cT);
        if (lT[1]) throw jk(lT[0])
      }
      Aj() {
        return Dk.x96t(this.__wbg_ptr) >>> 0
      }
      Cj() {
        return Dk.xUXZ(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const TT = Dk.gM4W();
        return this.__wbg_ptr = TT, XT.register(this, this.__wbg_ptr, this), this
      }
      run(TT, kT) {
        UT(TT, fT);
        const cT = Dk.dBhk(this.__wbg_ptr, TT.__wbg_ptr, kT);
        if (cT[2]) throw jk(cT[1]);
        return cT[0] >>> 0
      }
      jj(TT) {
        const kT = xk(TT, Dk.PFWV),
          cT = ak;
        Dk.s3uW(this.__wbg_ptr, kT, cT)
      }
      vj(TT) {
        const kT = xk(TT, Dk.PFWV),
          cT = ak;
        Dk.spfd(this.__wbg_ptr, kT, cT)
      }
    }
    Symbol.dispose && (xT.prototype[Symbol.dispose] = xT.prototype.free);
    class IT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, dT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        Dk.FTdG(TT, 0)
      }
      hj(TT, kT) {
        const cT = Ik(TT, Dk.PFWV),
          lT = ak;
        return Dk.jPfg(this.__wbg_ptr, cT, lT, kT) >>> 0
      }
      Nj(TT, kT, cT) {
        UT(TT, fT);
        const lT = Ik(cT, Dk.PFWV),
          MT = ak,
          KT = Dk.n5y9(this.__wbg_ptr, TT.__wbg_ptr, kT, lT, MT);
        if (KT[2]) throw jk(KT[1]);
        return KT[0] >>> 0
      }
      tj(TT) {
        return Dk.INxY(this.__wbg_ptr, TT) >>> 0
      }
      constructor() {
        const TT = Dk.ZcLl();
        return this.__wbg_ptr = TT, dT.register(this, this.__wbg_ptr, this), this
      }
      scan(TT, kT) {
        UT(TT, fT);
        const cT = Dk.AZ3q(this.__wbg_ptr, TT.__wbg_ptr, kT);
        if (cT[2]) throw jk(cT[1]);
        return cT[0] >>> 0
      }
      Dj(TT) {
        const kT = Ik(TT, Dk.PFWV),
          cT = ak;
        Dk.NQCI(this.__wbg_ptr, kT, cT)
      }
      Sj() {
        return Dk.aYqP(this.__wbg_ptr) >>> 0
      }
      Qj() {
        return Dk.BTDr(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (IT.prototype[Symbol.dispose] = IT.prototype.free);
    class AT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, LT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        Dk.sFJF(TT, 0)
      }
      Fj(TT) {
        const kT = Dk.YfJx(this.__wbg_ptr, TT);
        if (kT[2]) throw jk(kT[1]);
        return kT[0] >>> 0
      }
      compute(TT, kT, cT, lT) {
        var MT = yk(lT) ? 0 : Ck(lT, Dk.PFWV, Dk.pmx5),
          KT = ak;
        const OT = Dk.JvXs(this.__wbg_ptr, TT, yk(kT) ? Number.MAX_SAFE_INTEGER : kT | 0, cT, MT, KT);
        if (OT[2]) throw jk(OT[1]);
        return OT[0] >>> 0
      }
      Pj(TT) {
        const kT = Ck(TT, Dk.PFWV, Dk.pmx5),
          cT = ak;
        Dk.aGtj(this.__wbg_ptr, kT, cT)
      }
      mj() {
        return Dk.FCwK(this.__wbg_ptr)
      }
      bj(TT) {
        return Dk.HAqp(this.__wbg_ptr, TT) >>> 0
      }
      zj() {
        return Dk.Z7KI(this.__wbg_ptr) >>> 0
      }
      Jj() {
        return Dk.jXxP(this.__wbg_ptr) >>> 0
      }
      oj(TT, kT) {
        const cT = Dk.OkKk(this.__wbg_ptr, TT, kT);
        if (cT[1]) throw jk(cT[0])
      }
      Hj() {
        return Dk.ZUEp(this.__wbg_ptr) >>> 0
      }
      ej() {
        return Dk.NZw7(this.__wbg_ptr) >>> 0
      }
      Gj() {
        return Dk.Abs1(this.__wbg_ptr) >>> 0
      }
      rj(TT, kT, cT) {
        const lT = xk(TT, Dk.PFWV),
          MT = ak,
          KT = xk(kT, Dk.PFWV),
          OT = ak,
          yT = Dk.UjPL(this.__wbg_ptr, lT, MT, KT, OT, cT);
        if (yT[1]) throw jk(yT[0])
      }
      Ej() {
        return Dk.A4KU(this.__wbg_ptr) >>> 0
      }
      mesh(TT, kT, cT, lT, MT) {
        const KT = Dk.ADbJ(this.__wbg_ptr, TT, kT, cT, lT, MT);
        if (KT[2]) throw jk(KT[1]);
        return KT[0] >>> 0
      }
      constructor(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT, IT, AT, CT, jT, vT, tT, hT, NT, QT, ST) {
        const DT = fk(TT, Dk.PFWV),
          aT = ak,
          FT = Ak(kT, Dk.PFWV),
          rT = ak,
          PT = xk(cT, Dk.PFWV),
          wT = ak,
          mT = Ik(lT, Dk.PFWV),
          bT = ak,
          zT = Ik(MT, Dk.PFWV),
          JT = ak,
          oT = xk(KT, Dk.PFWV),
          HT = ak,
          eT = xk(OT, Dk.PFWV),
          GT = ak,
          VT = Ak(yT, Dk.PFWV),
          ET = ak,
          ZT = Ak(fT, Dk.PFWV),
          uT = ak,
          XT = Ik(xT, Dk.PFWV),
          dT = ak;
        var RT = yk(IT) ? 0 : fk(IT, Dk.PFWV),
          gT = ak;
        const UT = xk(AT, Dk.PFWV),
          YT = ak,
          BT = Ik(CT, Dk.PFWV),
          WT = ak;
        var nT = yk(jT) ? 0 : Ik(jT, Dk.PFWV),
          pT = ak;
        const iT = Ak(vT, Dk.PFWV),
          qT = ak,
          sT = Dk.nFoC(DT, aT, FT, rT, PT, wT, mT, bT, zT, JT, oT, HT, eT, GT, VT, ET, ZT, uT, XT, dT, RT, gT, UT, YT, BT, WT, nT, pT, iT, qT, tT, hT, NT, QT, ST);
        if (sT[2]) throw jk(sT[1]);
        return this.__wbg_ptr = sT[0], LT.register(this, this.__wbg_ptr, this), this
      }
      Vj(TT, kT) {
        const cT = xk(TT, Dk.PFWV),
          lT = ak,
          MT = Dk.bv8s(this.__wbg_ptr, cT, lT, kT);
        if (MT[3]) throw jk(MT[2]);
        var KT = WT(MT[0], MT[1]).slice();
        return Dk.a8Pn(MT[0], 1 * MT[1], 1), KT
      }
      Zj(TT) {
        Dk.kZ8W(this.__wbg_ptr, yk(TT) ? 16777215 : TT)
      }
      uj(TT) {
        return Dk.js8M(this.__wbg_ptr, TT) >>> 0
      }
      Lj() {
        return Dk.A6l6(this.__wbg_ptr) >>> 0
      }
      Xj() {
        const TT = Dk.dfX5(this.__wbg_ptr);
        if (TT[2]) throw jk(TT[1]);
        return 0 !== TT[0]
      }
      Rj() {
        return Dk.U159(this.__wbg_ptr) >>> 0
      }
      gj() {
        return Dk.sRQg(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (AT.prototype[Symbol.dispose] = AT.prototype.free);
    class CT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, RT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        Dk.rtKo(TT, 0)
      }
      compute(TT, kT, cT, lT) {
        var MT = yk(lT) ? 0 : Ck(lT, Dk.PFWV, Dk.pmx5),
          KT = ak;
        const OT = Dk.Loup(this.__wbg_ptr, TT, yk(kT) ? Number.MAX_SAFE_INTEGER : kT | 0, cT, MT, KT);
        if (OT[2]) throw jk(OT[1]);
        return OT[0] >>> 0
      }
      Pj(TT) {
        const kT = Ck(TT, Dk.PFWV, Dk.pmx5),
          cT = ak;
        Dk.L0a9(this.__wbg_ptr, kT, cT)
      }
      ej() {
        return Dk.LKUI(this.__wbg_ptr) >>> 0
      }
      Gj() {
        return Dk.Qu74(this.__wbg_ptr) >>> 0
      }
      Uj(TT) {
        const kT = Dk.UCFk(this.__wbg_ptr, TT);
        if (kT[2]) throw jk(kT[1]);
        return kT[0] >>> 0
      }
      constructor(TT, kT, cT, lT, MT, KT) {
        const OT = fk(TT, Dk.PFWV),
          yT = ak,
          fT = Ak(kT, Dk.PFWV),
          xT = ak,
          IT = xk(cT, Dk.PFWV),
          AT = ak,
          CT = Ik(lT, Dk.PFWV),
          jT = ak,
          vT = Dk.ovMI(OT, yT, fT, xT, IT, AT, CT, jT, MT, KT);
        if (vT[2]) throw jk(vT[1]);
        return this.__wbg_ptr = vT[0], RT.register(this, this.__wbg_ptr, this), this
      }
      Lj() {
        return Dk.ymM0(this.__wbg_ptr) >>> 0
      }
      Xj() {
        const TT = Dk.GFp3(this.__wbg_ptr);
        if (TT[2]) throw jk(TT[1]);
        return 0 !== TT[0]
      }
      Rj() {
        return Dk.F0HQ(this.__wbg_ptr) >>> 0
      }
    }

    function jT() {
      const TT = Dk.ljQL();
      var kT = BT(TT[0], TT[1]).slice();
      return Dk.a8Pn(TT[0], 4 * TT[1], 4), kT
    }

    function vT(TT, kT) {
      let cT, lT;
      try {
        const MT = fk(TT, Dk.PFWV),
          KT = ak,
          OT = Ck(kT, Dk.PFWV, Dk.pmx5),
          yT = ak,
          fT = Dk.lHFZ(MT, KT, OT, yT);
        return cT = fT[0], lT = fT[1], qT(fT[0], fT[1])
      } finally {
        Dk.a8Pn(cT, lT, 1)
      }
    }

    function tT() {
      const TT = Dk.CuT7();
      var kT = BT(TT[0], TT[1]).slice();
      return Dk.a8Pn(TT[0], 4 * TT[1], 4), kT
    }

    function hT(TT) {
      return 0 !== Dk.njSY(TT)
    }

    function NT(TT, kT) {
      const cT = Ck(TT, Dk.PFWV, Dk.pmx5),
        lT = ak,
        MT = Dk.GIpJ(cT, lT, kT);
      if (MT[1]) throw jk(MT[0])
    }

    function QT() {
      Dk.mc4D()
    }

    function ST() {
      return Dk.NZnP() >>> 0
    }

    function DT(TT) {
      return 0 !== Dk.rloU(TT)
    }

    function aT(TT) {
      return 0 !== Dk.Nle0(TT)
    }

    function FT(TT) {
      Dk.kyuy(TT)
    }

    function rT() {
      return Dk.jkYa() >>> 0
    }

    function PT() {
      return Dk.Cfqh() >>> 0
    }

    function wT() {
      return 0 !== Dk.h21v()
    }

    function mT() {
      const TT = Dk.LHVt();
      var kT = BT(TT[0], TT[1]).slice();
      return Dk.a8Pn(TT[0], 4 * TT[1], 4), kT
    }

    function bT() {
      const TT = Dk.erIG();
      var kT = BT(TT[0], TT[1]).slice();
      return Dk.a8Pn(TT[0], 4 * TT[1], 4), kT
    }

    function zT() {
      const TT = Dk.kck2();
      var kT = BT(TT[0], TT[1]).slice();
      return Dk.a8Pn(TT[0], 4 * TT[1], 4), kT
    }

    function JT() {
      return Dk.yj09() >>> 0
    }

    function oT() {
      Dk.WnCB()
    }

    function HT() {
      let TT, kT;
      try {
        const cT = Dk.ZdEB();
        return TT = cT[0], kT = cT[1], qT(cT[0], cT[1])
      } finally {
        Dk.a8Pn(TT, kT, 1)
      }
    }

    function eT(TT) {
      Dk.aXLN(gT(TT))
    }

    function GT() {
      return {
        __proto__: null,
        qoGU: {
          __proto__: null,
          ljXP: function(TT, kT) {
            return gT(Error(qT(TT, kT)))
          },
          bxFY: function(TT, kT) {
            throw new Error(qT(TT, kT))
          },
          wrjR: function(TT) {
            Mk(TT).call()
          },
          Pp8D: function(TT, kT) {
            console.error(qT(TT, kT))
          },
          iHQM: function() {
            return performance.now()
          },
          RiTZ: function(TT) {
            jk(TT)
          }
        }
      }
    }
    Symbol.dispose && (CT.prototype[Symbol.dispose] = CT.prototype.free);
    const VT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => Dk.bw2V(TT, 1))),
      ET = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => Dk.w7hq(TT, 1))),
      ZT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => Dk.C9Dl(TT, 1))),
      uT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => Dk.qwqn(TT, 1))),
      XT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => Dk.djVZ(TT, 1))),
      dT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => Dk.FTdG(TT, 1))),
      LT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => Dk.sFJF(TT, 1))),
      RT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => Dk.rtKo(TT, 1)));

    function gT(TT) {
      Ok === Kk.length && Kk.push(Kk.length + 1);
      const kT = Ok;
      return Ok = Kk[kT], Kk[kT] = TT, kT
    }

    function UT(TT, kT) {
      if (!(TT instanceof kT)) throw new Error(`expected instance of ${kT.name}`)
    }

    function YT(TT, kT) {
      return TT >>>= 0, pT().subarray(TT / 8, TT / 8 + kT)
    }

    function BT(TT, kT) {
      return TT >>>= 0, kk().subarray(TT / 4, TT / 4 + kT)
    }

    function WT(TT, kT) {
      return TT >>>= 0, lk().subarray(TT / 1, TT / 1 + kT)
    }
    let nT = null;

    function pT() {
      return null !== nT && 0 !== nT.byteLength || (nT = new Float64Array(Dk.memory.buffer)), nT
    }
    let iT = null;

    function qT(TT, kT) {
      return function(TT, kT) {
        hk += kT, hk >= tk && (vk = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), vk.decode(), hk = kT);
        return vk.decode(lk().subarray(TT, TT + kT))
      }(TT >>> 0, kT)
    }
    let sT = null;
    let Tk = null;

    function kk() {
      return null !== Tk && 0 !== Tk.byteLength || (Tk = new Uint32Array(Dk.memory.buffer)), Tk
    }
    let ck = null;

    function lk() {
      return null !== ck && 0 !== ck.byteLength || (ck = new Uint8Array(Dk.memory.buffer)), ck
    }

    function Mk(TT) {
      return Kk[TT]
    }
    let Kk = new Array(1024).fill(void 0);
    Kk.push(void 0, null, !0, !1);
    let Ok = Kk.length;

    function yk(TT) {
      return void 0 === TT || null === TT
    }

    function fk(TT, kT) {
      const cT = kT(2 * TT.length, 2) >>> 0;
      return (null !== sT && 0 !== sT.byteLength || (sT = new Uint16Array(Dk.memory.buffer)), sT).set(TT, cT / 2), ak = TT.length, cT
    }

    function xk(TT, kT) {
      const cT = kT(4 * TT.length, 4) >>> 0;
      return kk().set(TT, cT / 4), ak = TT.length, cT
    }

    function Ik(TT, kT) {
      const cT = kT(1 * TT.length, 1) >>> 0;
      return lk().set(TT, cT / 1), ak = TT.length, cT
    }

    function Ak(TT, kT) {
      const cT = kT(8 * TT.length, 8) >>> 0;
      return pT().set(TT, cT / 8), ak = TT.length, cT
    }

    function Ck(TT, kT, cT) {
      if (void 0 === cT) {
        const cT = Nk.encode(TT),
          lT = kT(cT.length, 1) >>> 0;
        return lk().subarray(lT, lT + cT.length).set(cT), ak = cT.length, lT
      }
      let lT = TT.length,
        MT = kT(lT, 1) >>> 0;
      const KT = lk();
      let OT = 0;
      for (; OT < lT; OT++) {
        const kT = TT.charCodeAt(OT);
        if (kT > 127) break;
        KT[MT + OT] = kT
      }
      if (OT !== lT) {
        0 !== OT && (TT = TT.slice(OT)), MT = cT(MT, lT, lT = OT + 3 * TT.length, 1) >>> 0;
        const kT = lk().subarray(MT + OT, MT + lT);
        OT += Nk.encodeInto(TT, kT).written, MT = cT(MT, lT, OT, 1) >>> 0
      }
      return ak = OT, MT
    }

    function jk(TT) {
      const kT = Mk(TT);
      return function(TT) {
        TT < 1028 || (Kk[TT] = Ok, Ok = TT)
      }(TT), kT
    }
    let vk = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    vk.decode();
    const tk = 2146435072;
    let hk = 0;
    const Nk = new TextEncoder;
    "encodeInto" in Nk || (Nk.encodeInto = function(TT, kT) {
      const cT = Nk.encode(TT);
      return kT.set(cT), {
        read: TT.length,
        written: cT.length
      }
    });
    let Qk, Sk, Dk, ak = 0;

    function Fk(TT, kT) {
      return Sk = TT, Dk = TT.exports, Qk = kT, nT = null, iT = null, sT = null, Tk = null, ck = null, Dk.yfub(), Dk
    }

    function rk(TT) {
      if (void 0 !== Dk) return Dk;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module: TT
      } = TT) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const kT = GT();
      TT instanceof WebAssembly.Module || (TT = new WebAssembly.Module(TT));
      return Fk(new WebAssembly.Instance(TT, kT), TT)
    }
    async function Pk(TT) {
      if (void 0 !== Dk) return Dk;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module_or_path: TT
      } = TT) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const kT = GT();
      ("string" === typeof TT || "function" === typeof Request && TT instanceof Request || "function" === typeof URL && TT instanceof URL) && (TT = fetch(TT));
      const {
        instance: cT,
        module: lT
      } = await async function(TT, kT) {
        if ("function" === typeof Response && TT instanceof Response) {
          if (!TT.ok) throw new Error(`failed to fetch Wasm: ${TT.status} ${TT.statusText} fetching '${TT.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(TT, kT)
          } catch (cT) {
            if (! function(TT) {
                switch (TT) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(TT.type) || "application/wasm" === TT.headers.get("Content-Type")) throw cT;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", cT)
          }
          const lT = await TT.arrayBuffer();
          return await WebAssembly.instantiate(lT, kT)
        } {
          const cT = await WebAssembly.instantiate(TT, kT);
          return cT instanceof WebAssembly.Instance ? {
            instance: cT,
            module: TT
          } : cT
        }
      }(await TT, kT);
      return Fk(cT, lT)
    }
    var wk = cT(3679),
      mk = cT(36113);
    const bk = {
      name: wk.d,
      url: () => new cT.U(cT(36117)),
      init: Pk,
      bindings: lT
    };

    function zk() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk,
        kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bk,
        cT = arguments.length > 2 ? arguments[2] : void 0;
      return (0, mk.h)(TT, kT, cT)
    }

    function Jk(TT) {
      return (0, wk.F)((() => TT), lT, bk)
    }
  },
  36097: (TT, kT, cT) => {
    function lT(TT, kT) {
      return new Error(`${TT}: ${kT instanceof Error?`${kT.name}: ${kT.message}`:String(kT)}`, {
        cause: kT
      })
    }
    cT.d(kT, {
      d: () => lT
    })
  },
  36092: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT,
      g: () => fT
    });
    var lT = cT(3684),
      MT = cT(6609),
      KT = cT(36097);

    function OT() {
      return new URL(new cT.U(cT(36104)).href, globalThis.location?.href).href
    }
    let yT = null;

    function fT() {
      return yT ??= (async () => (0, lT.J)(new URL(OT()), (0, MT.e)("bloxd_wasm_textures")))().catch((TT => {
        throw (0, KT.d)((0, lT.R)(TT), TT)
      })), yT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);