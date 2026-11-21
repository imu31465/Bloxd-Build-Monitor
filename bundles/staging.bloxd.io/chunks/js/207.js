export const id = 207;
export const ids = [207, 208];
export const modules = {
  35924: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      reportCappedWasmFailure: () => kQ,
      reportUncappedWasmFailure: () => DQ,
      reportWasmFailure: () => oQ
    });
    var LQ = wQ(2860);
    const qQ = LQ.b - 4;

    function oQ(QQ, FQ, wQ) {
      (0, LQ.f)(QQ, FQ, wQ, !1)
    }

    function DQ(QQ, FQ, wQ) {
      (0, LQ.f)(QQ, FQ, wQ, !1, 1 / 0)
    }

    function kQ(QQ, FQ, wQ) {
      (0, LQ.f)(QQ, FQ, wQ, !1, qQ)
    }
  },
  35917: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => cQ,
      f: () => iQ,
      i: () => WQ,
      k: () => CQ
    });
    var LQ = wQ(35946),
      qQ = wQ(2809),
      oQ = wQ(35958),
      DQ = wQ(2811),
      kQ = wQ(35924),
      vQ = wQ(2852),
      mQ = wQ(3115),
      uQ = wQ(3110),
      HQ = wQ(35929),
      bQ = wQ(2860),
      YQ = wQ(35938),
      xQ = wQ(35943),
      AQ = wQ(3583);
    let tQ = !1;
    const eQ = 40;
    var MQ = wQ(685);
    const GQ = "bloxdWasmFailureReported";

    function pQ() {
      return "undefined" === typeof WebAssembly
    }

    function cQ() {
      return (0, LQ.f)()
    }

    function CQ() {
      if (pQ()) return "this browser has no WebAssembly";
      const QQ = (0, qQ.p)();
      return "compile" === QQ || "instantiate" === QQ ? `the core wasm didn't load here (${(0,qQ.j)()})` : null
    }
    async function SQ(QQ) {
      return await (0, oQ.c)(oQ.b, void 0, QQ)
    }

    function iQ() {
      pQ() || (0, MQ.d)((() => {
        SQ()
      }))
    }

    function WQ() {
      if (pQ()) return async () => ((0, vQ.j)("unsupported", 0), RQ("unsupported", "This browser has no WebAssembly"), !1);
      const QQ = {
        reloadFailedDownload: !0
      };
      return SQ(QQ), async () => {
        var FQ;
        const wQ = performance.now();
        await SQ(QQ);
        const LQ = (performance.now() - wQ) / 1e3;
        if ((0, qQ.I)()) return (0, vQ.j)("ready", LQ), tQ || (tQ = !0, (0, qQ.O)((() => {
          if ("call" !== (0, qQ.p)()) return;
          const QQ = (0, qQ.n)(),
            FQ = (0, HQ.m)(QQ, qQ.D, qQ.U),
            wQ = (0, qQ.t)().buffer.byteLength,
            LQ = (0, HQ.g)(FQ.kind, FQ.refusedBytes),
            oQ = LQ ? "alloc_failed" : FQ.kind,
            DQ = (0, YQ.i)(wQ),
            kQ = LQ ? `_r${Math.floor(Math.log2(FQ.refusedBytes))}` : "",
            vQ = (0, AQ.c)();
          null === vQ && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const mQ = new Error((0, xQ.b)(QQ, wQ, FQ));
          if (QQ instanceof Error && void 0 !== QQ.stack) {
            const FQ = QQ.stack.split("\n"),
              wQ = FQ.length > eQ ? [...FQ.slice(0, eQ / 2), ...FQ.slice(-eQ / 2)] : FQ;
            mQ.stack = wQ.join("\n")
          }(0, bQ.f)("wasm_load", mQ, `wasm_call_${oQ}_${null!==vQ&&void 0!==vQ?vQ:"unnamed"}_m${DQ}${kQ}`)
        }))), (0, DQ.bb)(oQ.b.url()) && (0, kQ.reportCappedWasmFailure)("wasm_load", mQ.c.message, mQ.c.code), !0;
        const MQ = uQ.b[null !== (FQ = (0, qQ.p)()) && void 0 !== FQ ? FQ : "call"];
        return (0, vQ.j)(MQ, LQ), RQ(MQ, (0, qQ.j)()), !1
      }
    }

    function RQ(QQ, FQ) {
      (0, uQ.f)(GQ, `Bloxd wasm ${QQ}, so the game can't start: ${FQ}`, FQ, QQ)
    }
  },
  35965: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/bloxd_wasm_bg.80cf7a9d2c5f9fd62bf3.wasm"
  },
  35956: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/bloxd_wasm_textures_bg.61b5ac2f80ff09b15c5a.wasm"
  },
  35958: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => OF,
      c: () => sF,
      e: () => rF
    });
    var LQ = {};
    wQ.r(LQ), wQ.d(LQ, {
      Vu: () => qQ,
      EnvelopeKind: () => oQ,
      hu: () => DQ,
      PhysicsEngine: () => kQ,
      Ju: () => vQ,
      Eu: () => mQ,
      nu: () => uQ,
      gu: () => HQ,
      Pu: () => bQ,
      Zu: () => YQ,
      yu: () => xQ,
      Bu: () => AQ,
      QH: () => tQ,
      FH: () => eQ,
      default: () => iF,
      initSync: () => SF,
      wH: () => MQ,
      LH: () => GQ,
      qH: () => pQ,
      oH: () => cQ,
      DH: () => CQ,
      kH: () => SQ,
      vH: () => iQ,
      mH: () => WQ,
      uH: () => RQ,
      HH: () => OQ,
      bH: () => sQ,
      YH: () => rQ,
      xH: () => IQ,
      AH: () => UQ,
      tH: () => NQ
    });
    class qQ {
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, KQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        pF.VuCs(QQ, 0)
      }
      eH() {
        const QQ = pF.kdUB(this.__wbg_ptr);
        if (QQ[2]) throw YF(QQ[1]);
        return QQ[0] >>> 0
      }
      MH() {
        return pF.gvvz(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const QQ = pF.ory2();
        return this.__wbg_ptr = QQ, KQ.register(this, this.__wbg_ptr, this), this
      }
      GH() {
        return pF.XgRn(this.__wbg_ptr) >>> 0
      }
      pH(QQ) {
        const FQ = pF.ZVL8(this.__wbg_ptr, QQ);
        if (FQ[2]) throw YF(FQ[1]);
        return FQ[0] >>> 0
      }
      cH(QQ) {
        const FQ = pF.dxMK(this.__wbg_ptr, QQ);
        if (FQ[2]) throw YF(FQ[1]);
        return FQ[0] >>> 0
      }
    }
    Symbol.dispose && (qQ.prototype[Symbol.dispose] = qQ.prototype.free);
    const oQ = Object.freeze({
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
    class DQ {
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, zQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        pF.QpT8(QQ, 0)
      }
      iH(QQ, FQ) {
        const wQ = pF.XXHg(this.__wbg_ptr, QQ, FQ);
        if (wQ[2]) throw YF(wQ[1]);
        return wQ[0] >>> 0
      }
      WH(QQ) {
        const FQ = pF.qieB(this.__wbg_ptr, QQ);
        if (FQ[2]) throw YF(FQ[1]);
        return FQ[0] >>> 0
      }
      RH() {
        pF.Fk5B(this.__wbg_ptr)
      }
      static OH() {
        return pF.WmHV() >>> 0
      }
      sH() {
        return pF.T1w5(this.__wbg_ptr) >>> 0
      }
      rH() {
        const QQ = pF.bLbW(this.__wbg_ptr);
        return 0 === QQ[0] ? void 0 : QQ[1]
      }
      IH() {
        return pF.pDor(this.__wbg_ptr) >>> 0
      }
      UH() {
        return pF.Y9PT(this.__wbg_ptr) >>> 0
      }
      static SH() {
        return pF.TiXL() >>> 0
      }
      constructor() {
        const QQ = pF.qEm7();
        return this.__wbg_ptr = QQ, zQ.register(this, this.__wbg_ptr, this), this
      }
      NH() {
        return pF.f6v9(this.__wbg_ptr) >>> 0
      }
      TH() {
        return pF.XgwW(this.__wbg_ptr) >>> 0
      }
      KH() {
        return pF.Bz40(this.__wbg_ptr) >>> 0
      }
      CH(QQ) {
        return pF.IzRe(this.__wbg_ptr, QQ) >>> 0
      }
      reserve(QQ, FQ) {
        const wQ = pF.B9bW(this.__wbg_ptr, QQ, FQ);
        if (wQ[1]) throw YF(wQ[0])
      }
      jH(QQ, FQ) {
        const wQ = mF(QQ, pF.QDi7),
          LQ = cF;
        pF.KHFz(this.__wbg_ptr, wQ, LQ, FQ)
      }
      text() {
        let QQ, FQ;
        try {
          const wQ = pF.vzEs(this.__wbg_ptr);
          return QQ = wQ[0], FQ = wQ[1], BQ(wQ[0], wQ[1])
        } finally {
          pF.yQdd(QQ, FQ, 1)
        }
      }
    }
    Symbol.dispose && (DQ.prototype[Symbol.dispose] = DQ.prototype.free);
    class kQ {
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, lQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        pF.samZ(QQ, 0)
      }
      XH(QQ, FQ) {
        JQ(FQ, qQ);
        const wQ = pF.canJ(this.__wbg_ptr, QQ, FQ.__wbg_ptr);
        if (wQ[2]) throw YF(wQ[1]);
        return wQ[0] >>> 0
      }
      VH() {
        const QQ = pF.P3PO(this.__wbg_ptr);
        if (QQ[1]) throw YF(QQ[0])
      }
      gH(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, mQ, uQ, HQ) {
        JQ(QQ, vQ);
        const bQ = pF.kO0N(this.__wbg_ptr, QQ.__wbg_ptr, FQ, wQ, LQ, qQ, oQ, DQ, kQ, mQ, uQ, HQ);
        if (bQ[2]) throw YF(bQ[1]);
        return bQ[0]
      }
      PH() {
        const QQ = pF.DgpY(this.__wbg_ptr);
        var FQ = EQ(QQ[0], QQ[1]).slice();
        return pF.yQdd(QQ[0], 8 * QQ[1], 8), FQ
      }
      ZH() {
        return pF.OEtS(this.__wbg_ptr) >>> 0
      }
      yH() {
        return pF.p0n4(this.__wbg_ptr) >>> 0
      }
      BH() {
        return pF.VPwo(this.__wbg_ptr) >>> 0
      }
      constructor(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
        const vQ = pF.fVFf(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ);
        if (vQ[2]) throw YF(vQ[1]);
        return this.__wbg_ptr = vQ[0], lQ.register(this, this.__wbg_ptr, this), this
      }
      Fb(QQ) {
        JQ(QQ, qQ);
        const FQ = pF.YpzH(this.__wbg_ptr, QQ.__wbg_ptr);
        if (FQ[2]) throw YF(FQ[1]);
        return FQ[0] >>> 0
      }
      Lb(QQ) {
        const FQ = pF.XkLJ(this.__wbg_ptr, QQ);
        if (FQ[1]) throw YF(FQ[0])
      }
      qb() {
        return pF.E0em(this.__wbg_ptr) >>> 0
      }
      resume(QQ, FQ) {
        JQ(QQ, vQ), JQ(FQ, qQ);
        const wQ = pF.irUX(this.__wbg_ptr, QQ.__wbg_ptr, FQ.__wbg_ptr);
        if (wQ[2]) throw YF(wQ[1]);
        return wQ[0] >>> 0
      }
      Hb(QQ) {
        const FQ = pF.pYO0(this.__wbg_ptr, QQ);
        if (FQ[1]) throw YF(FQ[0])
      }
      xb(QQ, FQ) {
        JQ(FQ, qQ);
        const wQ = pF.xlmr(this.__wbg_ptr, QQ, FQ.__wbg_ptr);
        if (wQ[1]) throw YF(wQ[0])
      }
      eb(QQ) {
        const FQ = HF(QQ, pF.QDi7),
          wQ = cF,
          LQ = pF.VfdY(this.__wbg_ptr, FQ, wQ);
        if (LQ[1]) throw YF(LQ[0])
      }
      JH(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = pF.zIPD(this.__wbg_ptr, QQ, FQ, wQ, LQ, qQ, oQ);
        if (DQ[1]) throw YF(DQ[0])
      }
      EH(QQ, FQ, wQ, LQ) {
        const qQ = mF(QQ, pF.QDi7),
          oQ = cF,
          DQ = HF(FQ, pF.QDi7),
          kQ = cF,
          vQ = HF(wQ, pF.QDi7),
          mQ = cF,
          uQ = HF(LQ, pF.QDi7),
          HQ = cF,
          bQ = pF.uTan(this.__wbg_ptr, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ);
        if (bQ[1]) throw YF(bQ[0])
      }
      Gb(QQ, FQ) {
        JQ(FQ, qQ);
        const wQ = pF.wMX5(this.__wbg_ptr, QQ, FQ.__wbg_ptr);
        if (wQ[1]) throw YF(wQ[0])
      }
      Qb(QQ, FQ, wQ) {
        const LQ = pF.qPts(this.__wbg_ptr, QQ, FQ, wQ);
        if (LQ[1]) throw YF(LQ[0])
      }
      cb(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, mQ, uQ) {
        JQ(QQ, vQ);
        return pF.i11V(this.__wbg_ptr, QQ.__wbg_ptr, FQ, wQ, LQ, qQ, oQ, DQ, kQ, mQ, uQ)
      }
    }
    Symbol.dispose && (kQ.prototype[Symbol.dispose] = kQ.prototype.free);
    class vQ {
      static __wrap(QQ) {
        const FQ = Object.create(vQ.prototype);
        return FQ.__wbg_ptr = QQ, jQ.register(FQ, FQ.__wbg_ptr, FQ), FQ
      }
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, jQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        pF.y0I1(QQ, 0)
      }
      ib(QQ) {
        const FQ = pF.D7O4(this.__wbg_ptr, QQ);
        if (FQ[2]) throw YF(FQ[1]);
        return FQ[0] >>> 0
      }
      Wb(QQ, FQ, wQ) {
        return pF.tM5x(this.__wbg_ptr, QQ, FQ, wQ)
      }
      Rb(QQ, FQ, wQ) {
        return pF.uM97(this.__wbg_ptr, QQ, FQ, wQ) >>> 0
      }
      Ob(QQ, FQ, wQ, LQ) {
        return 0 !== pF.s7px(this.__wbg_ptr, QQ, FQ, wQ, LQ)
      }
      sb() {
        pF.vydX(this.__wbg_ptr)
      }
      Ib(QQ) {
        const FQ = pF.OVdz(this.__wbg_ptr, QQ);
        if (FQ[3]) throw YF(FQ[2]);
        var wQ = gQ(FQ[0], FQ[1]).slice();
        return pF.yQdd(FQ[0], 1 * FQ[1], 1), wQ
      }
      evict(QQ, FQ) {
        return pF.wB06(this.__wbg_ptr, QQ, FQ) >>> 0
      }
      Ub() {
        pF.Orjr(this.__wbg_ptr)
      }
      Nb(QQ, FQ, wQ) {
        pF.dVZu(this.__wbg_ptr, QQ, FQ, wQ)
      }
      Tb(QQ) {
        const FQ = pF.XxGK(this.__wbg_ptr, QQ);
        if (FQ[1]) throw YF(FQ[0])
      }
      Kb() {
        return pF.JuOL(this.__wbg_ptr) >>> 0
      }
      zb() {
        return pF.cdSH(this.__wbg_ptr) >>> 0
      }
      lb(QQ, FQ, wQ) {
        pF.KKCa(this.__wbg_ptr, QQ, FQ, wQ)
      }
      jb(QQ, FQ, wQ) {
        pF.y2gi(this.__wbg_ptr, QQ, FQ, wQ)
      }
      ab() {
        return pF.oO66(this.__wbg_ptr) >>> 0
      }
      Xb() {
        return pF.plIP(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const QQ = pF.BxnL();
        return this.__wbg_ptr = QQ, jQ.register(this, this.__wbg_ptr, this), this
      }
      static fb() {
        const QQ = pF.LUBn();
        return vQ.__wrap(QQ)
      }
      Vb() {
        return pF.ZTsO(this.__wbg_ptr) >>> 0
      }
      hb() {
        return pF.bwbU(this.__wbg_ptr) >>> 0
      }
      Jb(QQ, FQ, wQ, LQ) {
        const qQ = pF.Tt31(this.__wbg_ptr, QQ, FQ, wQ, LQ);
        if (qQ[1]) throw YF(qQ[0])
      }
      Eb() {
        return pF.uMiS(this.__wbg_ptr) >>> 0
      }
      nb() {
        return pF.XTPB(this.__wbg_ptr) >>> 0
      }
      gb(QQ, FQ, wQ, LQ) {
        pF.kl62(this.__wbg_ptr, QQ, FQ, wQ, LQ)
      }
      Pb(QQ) {
        pF.sJFq(this.__wbg_ptr, QQ)
      }
      yb(QQ, FQ, wQ, LQ, qQ) {
        const oQ = uF(FQ, pF.QDi7),
          DQ = cF,
          kQ = mF(wQ, pF.QDi7),
          vQ = cF,
          mQ = HF(LQ, pF.QDi7),
          uQ = cF,
          HQ = pF.ARO7(this.__wbg_ptr, QQ, oQ, DQ, kQ, vQ, mQ, uQ, qQ);
        if (HQ[1]) throw YF(HQ[0])
      }
      Zb(QQ, FQ, wQ, LQ) {
        const qQ = uF(QQ, pF.QDi7),
          oQ = cF,
          DQ = mF(FQ, pF.QDi7),
          kQ = cF,
          vQ = HF(wQ, pF.QDi7),
          mQ = cF,
          uQ = uF(LQ, pF.QDi7),
          HQ = cF,
          bQ = pF.O9eE(this.__wbg_ptr, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ);
        if (bQ[1]) throw YF(bQ[0])
      }
      qY(QQ) {
        const FQ = uF(QQ, pF.QDi7),
          wQ = cF,
          LQ = pF.fvaj(this.__wbg_ptr, FQ, wQ);
        if (LQ[1]) throw YF(LQ[0])
      }
      oY() {
        return pF.zWaa(this.__wbg_ptr) >>> 0
      }
      DY(QQ) {
        const FQ = pF.nqSc(this.__wbg_ptr, QQ);
        if (FQ[2]) throw YF(FQ[1]);
        return FQ[0] >>> 0
      }
      steer() {
        return pF.n0yP(this.__wbg_ptr) >>> 0
      }
      kY() {
        const QQ = pF.vtLz(this.__wbg_ptr);
        var FQ = EQ(QQ[0], QQ[1]).slice();
        return pF.yQdd(QQ[0], 8 * QQ[1], 8), FQ
      }
      vY() {
        return pF.WNX5(this.__wbg_ptr) >>> 0
      }
      Db() {
        const QQ = pF.e2Mo(this.__wbg_ptr);
        var FQ, wQ, LQ = (FQ = QQ[0], wQ = QQ[1], FQ >>>= 0, (null !== yQ && 0 !== yQ.byteLength || (yQ = new Int32Array(pF.memory.buffer)), yQ).subarray(FQ / 4, FQ / 4 + wQ)).slice();
        return pF.yQdd(QQ[0], 4 * QQ[1], 4), LQ
      }
    }
    Symbol.dispose && (vQ.prototype[Symbol.dispose] = vQ.prototype.free);
    class mQ {
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, aQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        pF.UjQi(QQ, 0)
      }
      mY(QQ) {
        const FQ = mF(QQ, pF.QDi7),
          wQ = cF,
          LQ = pF.xo5R(this.__wbg_ptr, FQ, wQ);
        if (LQ[1]) throw YF(LQ[0])
      }
      uY() {
        return pF.O2C6(this.__wbg_ptr) >>> 0
      }
      HY() {
        return pF.by2H(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const QQ = pF.aIfd();
        return this.__wbg_ptr = QQ, aQ.register(this, this.__wbg_ptr, this), this
      }
      run(QQ, FQ) {
        JQ(QQ, vQ);
        const wQ = pF.V9Vp(this.__wbg_ptr, QQ.__wbg_ptr, FQ);
        if (wQ[2]) throw YF(wQ[1]);
        return wQ[0] >>> 0
      }
      bY(QQ) {
        const FQ = mF(QQ, pF.QDi7),
          wQ = cF;
        pF.ctg3(this.__wbg_ptr, FQ, wQ)
      }
      YY(QQ) {
        const FQ = mF(QQ, pF.QDi7),
          wQ = cF;
        pF.gbxH(this.__wbg_ptr, FQ, wQ)
      }
    }
    Symbol.dispose && (mQ.prototype[Symbol.dispose] = mQ.prototype.free);
    class uQ {
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, XQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        pF.Rfko(QQ, 0)
      }
      AY(QQ, FQ) {
        const wQ = uF(QQ, pF.QDi7),
          LQ = cF;
        return pF.WZ8d(this.__wbg_ptr, wQ, LQ, FQ) >>> 0
      }
      tY(QQ, FQ, wQ) {
        JQ(QQ, vQ);
        const LQ = uF(wQ, pF.QDi7),
          qQ = cF,
          oQ = pF.J2PA(this.__wbg_ptr, QQ.__wbg_ptr, FQ, LQ, qQ);
        if (oQ[2]) throw YF(oQ[1]);
        return oQ[0] >>> 0
      }
      xY(QQ) {
        return pF.WNCB(this.__wbg_ptr, QQ) >>> 0
      }
      constructor() {
        const QQ = pF.Te51();
        return this.__wbg_ptr = QQ, XQ.register(this, this.__wbg_ptr, this), this
      }
      scan(QQ, FQ) {
        JQ(QQ, vQ);
        const wQ = pF.ZrTg(this.__wbg_ptr, QQ.__wbg_ptr, FQ);
        if (wQ[2]) throw YF(wQ[1]);
        return wQ[0] >>> 0
      }
      GY(QQ) {
        const FQ = uF(QQ, pF.QDi7),
          wQ = cF;
        pF.XxVF(this.__wbg_ptr, FQ, wQ)
      }
      MY() {
        return pF.zqsn(this.__wbg_ptr) >>> 0
      }
      eY() {
        return pF.uWGx(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (uQ.prototype[Symbol.dispose] = uQ.prototype.free);
    class HQ {
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, fQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        pF.c3rs(QQ, 0)
      }
      cY(QQ) {
        const FQ = pF.C5Rc(this.__wbg_ptr, QQ);
        if (FQ[2]) throw YF(FQ[1]);
        return FQ[0] >>> 0
      }
      compute(QQ, FQ, wQ, LQ) {
        var qQ = kF(LQ) ? 0 : bF(LQ, pF.QDi7, pF.faz4),
          oQ = cF;
        const DQ = pF.RolW(this.__wbg_ptr, QQ, kF(FQ) ? Number.MAX_SAFE_INTEGER : FQ | 0, wQ, qQ, oQ);
        if (DQ[2]) throw YF(DQ[1]);
        return DQ[0] >>> 0
      }
      SY(QQ) {
        const FQ = bF(QQ, pF.QDi7, pF.faz4),
          wQ = cF;
        pF.PesK(this.__wbg_ptr, FQ, wQ)
      }
      WY() {
        return pF.Xiwb(this.__wbg_ptr)
      }
      RY(QQ) {
        return pF.E3HQ(this.__wbg_ptr, QQ) >>> 0
      }
      OY() {
        return pF.nx5d(this.__wbg_ptr) >>> 0
      }
      sY() {
        return pF.CDIt(this.__wbg_ptr) >>> 0
      }
      rY(QQ, FQ) {
        const wQ = pF.Dlat(this.__wbg_ptr, QQ, FQ);
        if (wQ[1]) throw YF(wQ[0])
      }
      IY() {
        return pF.CpFc(this.__wbg_ptr) >>> 0
      }
      UY() {
        return pF.uaLb(this.__wbg_ptr) >>> 0
      }
      NY() {
        return pF.SwfB(this.__wbg_ptr) >>> 0
      }
      CY(QQ, FQ, wQ) {
        const LQ = mF(QQ, pF.QDi7),
          qQ = cF,
          oQ = mF(FQ, pF.QDi7),
          DQ = cF,
          kQ = pF.nG0b(this.__wbg_ptr, LQ, qQ, oQ, DQ, wQ);
        if (kQ[1]) throw YF(kQ[0])
      }
      KY() {
        return pF.d9B6(this.__wbg_ptr) >>> 0
      }
      mesh(QQ, FQ, wQ, LQ, qQ) {
        const oQ = pF.WcpF(this.__wbg_ptr, QQ, FQ, wQ, LQ, qQ);
        if (oQ[2]) throw YF(oQ[1]);
        return oQ[0] >>> 0
      }
      constructor(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ, MQ, GQ) {
        const pQ = vF(QQ, pF.QDi7),
          cQ = cF,
          CQ = HF(FQ, pF.QDi7),
          SQ = cF,
          iQ = mF(wQ, pF.QDi7),
          WQ = cF,
          RQ = uF(LQ, pF.QDi7),
          OQ = cF,
          sQ = uF(qQ, pF.QDi7),
          rQ = cF,
          IQ = mF(oQ, pF.QDi7),
          UQ = cF,
          NQ = mF(DQ, pF.QDi7),
          TQ = cF,
          KQ = HF(kQ, pF.QDi7),
          zQ = cF,
          lQ = HF(vQ, pF.QDi7),
          jQ = cF,
          aQ = uF(mQ, pF.QDi7),
          XQ = cF;
        var VQ = kF(uQ) ? 0 : vF(uQ, pF.QDi7),
          hQ = cF;
        const JQ = mF(HQ, pF.QDi7),
          EQ = cF,
          nQ = uF(bQ, pF.QDi7),
          gQ = cF;
        var PQ = kF(YQ) ? 0 : uF(YQ, pF.QDi7),
          ZQ = cF;
        const yQ = HF(xQ, pF.QDi7),
          BQ = cF,
          dQ = pF.bqZi(pQ, cQ, CQ, SQ, iQ, WQ, RQ, OQ, sQ, rQ, IQ, UQ, NQ, TQ, KQ, zQ, lQ, jQ, aQ, XQ, VQ, hQ, JQ, EQ, nQ, gQ, PQ, ZQ, yQ, BQ, AQ, tQ, eQ, MQ, GQ);
        if (dQ[2]) throw YF(dQ[1]);
        return this.__wbg_ptr = dQ[0], fQ.register(this, this.__wbg_ptr, this), this
      }
      TY(QQ, FQ) {
        const wQ = mF(QQ, pF.QDi7),
          LQ = cF,
          qQ = pF.rKA3(this.__wbg_ptr, wQ, LQ, FQ);
        if (qQ[3]) throw YF(qQ[2]);
        var oQ = gQ(qQ[0], qQ[1]).slice();
        return pF.yQdd(qQ[0], 1 * qQ[1], 1), oQ
      }
      zY(QQ) {
        pF.TMwT(this.__wbg_ptr, kF(QQ) ? 16777215 : QQ)
      }
      lY(QQ) {
        return pF.E7ud(this.__wbg_ptr, QQ) >>> 0
      }
      aY() {
        return pF.sOFB(this.__wbg_ptr) >>> 0
      }
      jY() {
        const QQ = pF.L0jX(this.__wbg_ptr);
        if (QQ[2]) throw YF(QQ[1]);
        return 0 !== QQ[0]
      }
      XY() {
        return pF.zw63(this.__wbg_ptr) >>> 0
      }
      fY() {
        return pF.gkip(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (HQ.prototype[Symbol.dispose] = HQ.prototype.free);
    class bQ {
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, VQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        pF.nRhE(QQ, 0)
      }
      compute(QQ, FQ, wQ, LQ) {
        var qQ = kF(LQ) ? 0 : bF(LQ, pF.QDi7, pF.faz4),
          oQ = cF;
        const DQ = pF.WIj2(this.__wbg_ptr, QQ, kF(FQ) ? Number.MAX_SAFE_INTEGER : FQ | 0, wQ, qQ, oQ);
        if (DQ[2]) throw YF(DQ[1]);
        return DQ[0] >>> 0
      }
      SY(QQ) {
        const FQ = bF(QQ, pF.QDi7, pF.faz4),
          wQ = cF;
        pF.YVS4(this.__wbg_ptr, FQ, wQ)
      }
      UY() {
        return pF.v1XL(this.__wbg_ptr) >>> 0
      }
      NY() {
        return pF.kmBv(this.__wbg_ptr) >>> 0
      }
      VY(QQ) {
        const FQ = pF.H7kO(this.__wbg_ptr, QQ);
        if (FQ[2]) throw YF(FQ[1]);
        return FQ[0] >>> 0
      }
      constructor(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = vF(QQ, pF.QDi7),
          kQ = cF,
          vQ = HF(FQ, pF.QDi7),
          mQ = cF,
          uQ = mF(wQ, pF.QDi7),
          HQ = cF,
          bQ = uF(LQ, pF.QDi7),
          YQ = cF,
          xQ = pF.u1dw(DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, qQ, oQ);
        if (xQ[2]) throw YF(xQ[1]);
        return this.__wbg_ptr = xQ[0], VQ.register(this, this.__wbg_ptr, this), this
      }
      aY() {
        return pF.pDez(this.__wbg_ptr) >>> 0
      }
      jY() {
        const QQ = pF.IIBx(this.__wbg_ptr);
        if (QQ[2]) throw YF(QQ[1]);
        return 0 !== QQ[0]
      }
      XY() {
        return pF.IAK1(this.__wbg_ptr) >>> 0
      }
    }

    function YQ() {
      const QQ = pF.Zh6E();
      var FQ = nQ(QQ[0], QQ[1]).slice();
      return pF.yQdd(QQ[0], 4 * QQ[1], 4), FQ
    }

    function xQ(QQ, FQ) {
      let wQ, LQ;
      try {
        const qQ = vF(QQ, pF.QDi7),
          oQ = cF,
          DQ = bF(FQ, pF.QDi7, pF.faz4),
          kQ = cF,
          vQ = pF.rPfG(qQ, oQ, DQ, kQ);
        return wQ = vQ[0], LQ = vQ[1], BQ(vQ[0], vQ[1])
      } finally {
        pF.yQdd(wQ, LQ, 1)
      }
    }

    function AQ() {
      const QQ = pF.ymIA();
      var FQ = nQ(QQ[0], QQ[1]).slice();
      return pF.yQdd(QQ[0], 4 * QQ[1], 4), FQ
    }

    function tQ(QQ) {
      return 0 !== pF.gYT2(QQ)
    }

    function eQ(QQ, FQ) {
      const wQ = bF(QQ, pF.QDi7, pF.faz4),
        LQ = cF,
        qQ = pF.kfwW(wQ, LQ, FQ);
      if (qQ[1]) throw YF(qQ[0])
    }

    function MQ() {
      pF.nzeI()
    }

    function GQ() {
      return pF.IEvF() >>> 0
    }

    function pQ(QQ) {
      return 0 !== pF.bpsQ(QQ)
    }

    function cQ(QQ) {
      return 0 !== pF.qUVd(QQ)
    }

    function CQ(QQ) {
      pF.rLzz(QQ)
    }

    function SQ() {
      return pF.ck2d() >>> 0
    }

    function iQ() {
      return pF.K9V8() >>> 0
    }

    function WQ() {
      return 0 !== pF.Ga2p()
    }

    function RQ() {
      const QQ = pF.RcHc();
      var FQ = nQ(QQ[0], QQ[1]).slice();
      return pF.yQdd(QQ[0], 4 * QQ[1], 4), FQ
    }

    function OQ() {
      const QQ = pF.WdY0();
      var FQ = nQ(QQ[0], QQ[1]).slice();
      return pF.yQdd(QQ[0], 4 * QQ[1], 4), FQ
    }

    function sQ() {
      const QQ = pF.tvK3();
      var FQ = nQ(QQ[0], QQ[1]).slice();
      return pF.yQdd(QQ[0], 4 * QQ[1], 4), FQ
    }

    function rQ() {
      return pF.yNds() >>> 0
    }

    function IQ() {
      pF.ooSo()
    }

    function UQ() {
      let QQ, FQ;
      try {
        const wQ = pF.G4rd();
        return QQ = wQ[0], FQ = wQ[1], BQ(wQ[0], wQ[1])
      } finally {
        pF.yQdd(QQ, FQ, 1)
      }
    }

    function NQ(QQ) {
      pF.C26r(hQ(QQ))
    }

    function TQ() {
      return {
        __proto__: null,
        yAdS: {
          __proto__: null,
          Tz4p: function(QQ, FQ) {
            return hQ(Error(BQ(QQ, FQ)))
          },
          OWEB: function(QQ, FQ) {
            throw new Error(BQ(QQ, FQ))
          },
          ZdN9: function(QQ) {
            qF(QQ).call()
          },
          nt5i: function(QQ, FQ) {
            console.error(BQ(QQ, FQ))
          },
          RAJ3: function() {
            return performance.now()
          },
          Zc2r: function(QQ) {
            YF(QQ)
          }
        }
      }
    }
    Symbol.dispose && (bQ.prototype[Symbol.dispose] = bQ.prototype.free);
    const KQ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((QQ => pF.VuCs(QQ, 1))),
      zQ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((QQ => pF.QpT8(QQ, 1))),
      lQ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((QQ => pF.samZ(QQ, 1))),
      jQ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((QQ => pF.y0I1(QQ, 1))),
      aQ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((QQ => pF.UjQi(QQ, 1))),
      XQ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((QQ => pF.Rfko(QQ, 1))),
      fQ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((QQ => pF.c3rs(QQ, 1))),
      VQ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((QQ => pF.nRhE(QQ, 1)));

    function hQ(QQ) {
      DF === oF.length && oF.push(oF.length + 1);
      const FQ = DF;
      return DF = oF[FQ], oF[FQ] = QQ, FQ
    }

    function JQ(QQ, FQ) {
      if (!(QQ instanceof FQ)) throw new Error(`expected instance of ${FQ.name}`)
    }

    function EQ(QQ, FQ) {
      return QQ >>>= 0, ZQ().subarray(QQ / 8, QQ / 8 + FQ)
    }

    function nQ(QQ, FQ) {
      return QQ >>>= 0, FF().subarray(QQ / 4, QQ / 4 + FQ)
    }

    function gQ(QQ, FQ) {
      return QQ >>>= 0, LF().subarray(QQ / 1, QQ / 1 + FQ)
    }
    let PQ = null;

    function ZQ() {
      return null !== PQ && 0 !== PQ.byteLength || (PQ = new Float64Array(pF.memory.buffer)), PQ
    }
    let yQ = null;

    function BQ(QQ, FQ) {
      return function(QQ, FQ) {
        tF += FQ, tF >= AF && (xF = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), xF.decode(), tF = FQ);
        return xF.decode(LF().subarray(QQ, QQ + FQ))
      }(QQ >>> 0, FQ)
    }
    let dQ = null;
    let QF = null;

    function FF() {
      return null !== QF && 0 !== QF.byteLength || (QF = new Uint32Array(pF.memory.buffer)), QF
    }
    let wF = null;

    function LF() {
      return null !== wF && 0 !== wF.byteLength || (wF = new Uint8Array(pF.memory.buffer)), wF
    }

    function qF(QQ) {
      return oF[QQ]
    }
    let oF = new Array(1024).fill(void 0);
    oF.push(void 0, null, !0, !1);
    let DF = oF.length;

    function kF(QQ) {
      return void 0 === QQ || null === QQ
    }

    function vF(QQ, FQ) {
      const wQ = FQ(2 * QQ.length, 2) >>> 0;
      return (null !== dQ && 0 !== dQ.byteLength || (dQ = new Uint16Array(pF.memory.buffer)), dQ).set(QQ, wQ / 2), cF = QQ.length, wQ
    }

    function mF(QQ, FQ) {
      const wQ = FQ(4 * QQ.length, 4) >>> 0;
      return FF().set(QQ, wQ / 4), cF = QQ.length, wQ
    }

    function uF(QQ, FQ) {
      const wQ = FQ(1 * QQ.length, 1) >>> 0;
      return LF().set(QQ, wQ / 1), cF = QQ.length, wQ
    }

    function HF(QQ, FQ) {
      const wQ = FQ(8 * QQ.length, 8) >>> 0;
      return ZQ().set(QQ, wQ / 8), cF = QQ.length, wQ
    }

    function bF(QQ, FQ, wQ) {
      if (void 0 === wQ) {
        const wQ = eF.encode(QQ),
          LQ = FQ(wQ.length, 1) >>> 0;
        return LF().subarray(LQ, LQ + wQ.length).set(wQ), cF = wQ.length, LQ
      }
      let LQ = QQ.length,
        qQ = FQ(LQ, 1) >>> 0;
      const oQ = LF();
      let DQ = 0;
      for (; DQ < LQ; DQ++) {
        const FQ = QQ.charCodeAt(DQ);
        if (FQ > 127) break;
        oQ[qQ + DQ] = FQ
      }
      if (DQ !== LQ) {
        0 !== DQ && (QQ = QQ.slice(DQ)), qQ = wQ(qQ, LQ, LQ = DQ + 3 * QQ.length, 1) >>> 0;
        const FQ = LF().subarray(qQ + DQ, qQ + LQ);
        DQ += eF.encodeInto(QQ, FQ).written, qQ = wQ(qQ, LQ, DQ, 1) >>> 0
      }
      return cF = DQ, qQ
    }

    function YF(QQ) {
      const FQ = qF(QQ);
      return function(QQ) {
        QQ < 1028 || (oF[QQ] = DF, DF = QQ)
      }(QQ), FQ
    }
    let xF = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    xF.decode();
    const AF = 2146435072;
    let tF = 0;
    const eF = new TextEncoder;
    "encodeInto" in eF || (eF.encodeInto = function(QQ, FQ) {
      const wQ = eF.encode(QQ);
      return FQ.set(wQ), {
        read: QQ.length,
        written: wQ.length
      }
    });
    let MF, GF, pF, cF = 0;

    function CF(QQ, FQ) {
      return GF = QQ, pF = QQ.exports, MF = FQ, PQ = null, yQ = null, dQ = null, QF = null, wF = null, pF.mm7T(), pF
    }

    function SF(QQ) {
      if (void 0 !== pF) return pF;
      void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
        module: QQ
      } = QQ) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const FQ = TQ();
      QQ instanceof WebAssembly.Module || (QQ = new WebAssembly.Module(QQ));
      return CF(new WebAssembly.Instance(QQ, FQ), QQ)
    }
    async function iF(QQ) {
      if (void 0 !== pF) return pF;
      void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
        module_or_path: QQ
      } = QQ) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const FQ = TQ();
      ("string" === typeof QQ || "function" === typeof Request && QQ instanceof Request || "function" === typeof URL && QQ instanceof URL) && (QQ = fetch(QQ));
      const {
        instance: wQ,
        module: LQ
      } = await async function(QQ, FQ) {
        if ("function" === typeof Response && QQ instanceof Response) {
          if (!QQ.ok) throw new Error(`failed to fetch Wasm: ${QQ.status} ${QQ.statusText} fetching '${QQ.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(QQ, FQ)
          } catch (wQ) {
            if (! function(QQ) {
                switch (QQ) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(QQ.type) || "application/wasm" === QQ.headers.get("Content-Type")) throw wQ;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", wQ)
          }
          const LQ = await QQ.arrayBuffer();
          return await WebAssembly.instantiate(LQ, FQ)
        } {
          const wQ = await WebAssembly.instantiate(QQ, FQ);
          return wQ instanceof WebAssembly.Instance ? {
            instance: wQ,
            module: QQ
          } : wQ
        }
      }(await QQ, FQ);
      return CF(wQ, LQ)
    }
    var WF = wQ(2809),
      RF = wQ(35962);
    const OF = {
      name: WF.e,
      url: () => new wQ.U(wQ(35965)),
      init: iF,
      bindings: LQ
    };

    function sF() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OF,
        FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OF,
        wQ = arguments.length > 2 ? arguments[2] : void 0;
      return (0, RF.l)(QQ, FQ, wQ)
    }

    function rF(QQ) {
      return (0, WF.F)((() => QQ), LQ, OF)
    }
  },
  35951: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      return new Error(`${QQ}: ${FQ instanceof Error?`${FQ.name}: ${FQ.message}`:String(FQ)}`, {
        cause: FQ
      })
    }
    wQ.d(FQ, {
      b: () => LQ
    })
  },
  35946: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ,
      f: () => vQ
    });
    var LQ = wQ(2811),
      qQ = wQ(6446),
      oQ = wQ(35951);

    function DQ() {
      return new URL(new wQ.U(wQ(35956)).href, globalThis.location?.href).href
    }
    let kQ = null;

    function vQ() {
      return kQ ??= (async () => (0, LQ.R)(new URL(DQ()), (0, qQ.e)("bloxd_wasm_textures")))().catch((QQ => {
        throw (0, oQ.b)((0, LQ.X)(QQ), QQ)
      })), kQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);