export const id = 212;
export const ids = [212, 213];
export const modules = {
  36341: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      CAPPED_COUNTS_VISIT_CAP: () => MT,
      reportCappedWasmFailure: () => HT,
      reportUncappedWasmFailure: () => nT,
      reportWasmCrash: () => zT,
      reportWasmFailure: () => gT
    });
    var WT = mT(3068);

    function zT(TT) {
      (0, WT.reportClientError)("wasm_load", TT.message, TT.code)
    }
    const MT = WT.e - 4;

    function gT(TT, UT, mT) {
      (0, WT.reportClientError)(TT, UT, mT, !1)
    }

    function nT(TT, UT, mT) {
      (0, WT.reportClientError)(TT, UT, mT, !1, 1 / 0)
    }

    function HT(TT, UT, mT) {
      (0, WT.reportClientError)(TT, UT, mT, !1, MT)
    }
  },
  36333: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => bT,
      f: () => YT,
      i: () => JT,
      k: () => OT
    });
    var WT = mT(36363),
      zT = mT(2992),
      MT = mT(36381),
      gT = mT(3001),
      nT = mT(36341),
      HT = mT(3058),
      kT = mT(3342),
      jT = mT(3336),
      lT = mT(36349),
      LT = mT(3068),
      pT = mT(36356),
      BT = mT(36358),
      ZT = mT(3800);
    let cT = !1;
    const vT = 40;
    var fT = mT(3679);
    const qT = "bloxdWasmFailureReported";

    function iT() {
      return "undefined" === typeof WebAssembly
    }

    function bT() {
      return (0, WT.f)()
    }

    function OT() {
      if (iT()) return "this browser has no WebAssembly";
      const TT = (0, zT.s)();
      return "compile" === TT || "instantiate" === TT ? `the core wasm didn't load here (${(0,zT.h)()})` : null
    }
    async function eT(TT) {
      return await (0, MT.e)(MT.c, void 0, TT)
    }

    function YT() {
      iT() || (0, fT.e)((() => {
        eT()
      }))
    }

    function JT() {
      if (iT()) return async () => ((0, HT.h)("unsupported", 0), xT("unsupported", "This browser has no WebAssembly"), !1);
      const TT = {
        reloadFailedDownload: !0
      };
      return eT(TT), async () => {
        var UT;
        const mT = performance.now();
        await eT(TT);
        const WT = (performance.now() - mT) / 1e3;
        if ((0, zT.Q)()) return (0, HT.h)("ready", WT), cT || (cT = !0, (0, zT.U)((() => {
          if ("call" !== (0, zT.s)()) return;
          const TT = (0, zT.o)(),
            UT = (0, lT.o)(TT, zT.F, zT.bb),
            mT = (0, zT.u)().buffer.byteLength,
            WT = (0, lT.h)(UT.kind, UT.refusedBytes),
            MT = WT ? "alloc_failed" : UT.kind,
            gT = (0, pT.e)(mT),
            nT = WT ? `_r${Math.floor(Math.log2(UT.refusedBytes))}` : "",
            HT = (0, ZT.c)();
          null === HT && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const kT = new Error((0, BT.d)(TT, mT, UT));
          if (TT instanceof Error && void 0 !== TT.stack) {
            const UT = TT.stack.split("\n"),
              mT = UT.length > vT ? [...UT.slice(0, vT / 2), ...UT.slice(-vT / 2)] : UT;
            kT.stack = mT.join("\n")
          }(0, LT.reportClientError)("wasm_load", kT, `wasm_call_${MT}_${null!==HT&&void 0!==HT?HT:"unnamed"}_m${gT}${nT}`)
        }))), (0, gT.U)(MT.c.url()) && (0, nT.reportCappedWasmFailure)("wasm_load", kT.e.message, kT.e.code), !0;
        const fT = jT.d[null !== (UT = (0, zT.s)()) && void 0 !== UT ? UT : "call"];
        return (0, HT.h)(fT, WT), xT(fT, (0, zT.h)()), !1
      }
    }

    function xT(TT, UT) {
      (0, jT.g)(qT, `Bloxd wasm ${TT}, so the game can't start: ${UT}`, UT, TT)
    }
  },
  36358: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => nT,
      e: () => kT,
      i: () => gT,
      k: () => lT
    });
    var WT = mT(36349),
      zT = mT(11);
    const MT = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function gT(TT) {
      if (TT instanceof WebAssembly.RuntimeError) return !0;
      const UT = TT instanceof Error ? TT.stack : void 0;
      return "string" === typeof UT && MT.test(UT)
    }

    function nT(TT, UT, mT) {
      var zT;
      const gT = TT instanceof Error ? TT.name : "thrown",
        nT = (TT instanceof Error && null !== (zT = TT.stack) && void 0 !== zT ? zT : "").split("\n").filter((TT => MT.test(TT))).slice(0, 8).map((TT => TT.trim())),
        HT = null === UT ? "wasm memory unknown" : `wasm memory ${Math.round(UT/2**20)} MB`,
        kT = null === mT.panic ? "" : `, panic: ${(0,WT.k)(mT.panic)}`,
        jT = `${gT}: ${TT instanceof Error?TT.message:String(TT)}`;
      return `${(0,WT.p)(mT.kind,mT.refusedBytes)} ${jT} (${HT})${kT}${nT.length>0?` | ${nT.join(" < ")}`:""}`
    }
    const HT = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function kT(TT) {
      var UT;
      let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(TT instanceof Error) || !HT.test(TT.message)) return {};
      if (!("detached" in mT)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, zT.W)(null === (UT = (0, zT.P)(mT, "detached")) || void 0 === UT ? void 0 : UT.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const jT = 500;

    function lT(TT) {
      let UT = "[object Object]";
      try {
        UT = String(TT)
      } catch {}
      if ("[object Object]" !== UT) return UT;
      try {
        var mT, WT;
        return null !== (mT = null === (WT = JSON.stringify(TT)) || void 0 === WT ? void 0 : WT.slice(0, jT)) && void 0 !== mT ? mT : UT
      } catch {
        return UT
      }
    }
  },
  36402: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/bloxd_wasm_bg.e3fc1f9db38ebfa3cee2.wasm"
  },
  36378: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/bloxd_wasm_textures_bg.005344a8c46aaea9e473.wasm"
  },
  36388: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      Kj: () => WT,
      EnvelopeKind: () => zT,
      Sj: () => MT,
      PhysicsEngine: () => gT,
      Gj: () => nT,
      Nj: () => HT,
      Ej: () => kT,
      hj: () => jT,
      Dj: () => lT,
      oj: () => LT,
      Aj: () => pT,
      Rj: () => BT,
      Tl: () => ZT,
      Ul: () => cT,
      default: () => eU,
      initSync: () => OU,
      ml: () => vT,
      Wl: () => fT,
      zl: () => qT,
      Ml: () => iT,
      gl: () => bT,
      nl: () => OT,
      Hl: () => eT,
      kl: () => YT,
      jl: () => JT,
      ll: () => xT,
      Ll: () => dT,
      pl: () => wT,
      Bl: () => tT,
      Zl: () => aT,
      cl: () => yT
    });
    class WT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, IT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        qU.CyMd(TT, 0)
      }
      vl() {
        const TT = qU.EO4r(this.__wbg_ptr);
        if (TT[2]) throw LU(TT[1]);
        return TT[0] >>> 0
      }
      fl() {
        return qU.DgFQ(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const TT = qU.vkMh();
        return this.__wbg_ptr = TT, IT.register(this, this.__wbg_ptr, this), this
      }
      ql() {
        return qU.jgFR(this.__wbg_ptr) >>> 0
      }
      il(TT) {
        const UT = qU.cK3P(this.__wbg_ptr, TT);
        if (UT[2]) throw LU(UT[1]);
        return UT[0] >>> 0
      }
      bl(TT) {
        const UT = qU.GuqM(this.__wbg_ptr, TT);
        if (UT[2]) throw LU(UT[1]);
        return UT[0] >>> 0
      }
    }
    Symbol.dispose && (WT.prototype[Symbol.dispose] = WT.prototype.free);
    const zT = Object.freeze({
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
    class MT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, QT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        qU.WVeG(TT, 0)
      }
      Yl(TT, UT) {
        const mT = qU.RRhJ(this.__wbg_ptr, TT, UT);
        if (mT[2]) throw LU(mT[1]);
        return mT[0] >>> 0
      }
      Jl(TT) {
        const UT = qU.Gi6z(this.__wbg_ptr, TT);
        if (UT[2]) throw LU(UT[1]);
        return UT[0] >>> 0
      }
      xl() {
        qU.LIZu(this.__wbg_ptr)
      }
      static dl() {
        return qU.uvYL() >>> 0
      }
      wl() {
        return qU.vXN6(this.__wbg_ptr) >>> 0
      }
      tl() {
        const TT = qU.jbLp(this.__wbg_ptr);
        return 0 === TT[0] ? void 0 : TT[1]
      }
      al() {
        return qU.P1Ix(this.__wbg_ptr) >>> 0
      }
      yl() {
        return qU.OHHh(this.__wbg_ptr) >>> 0
      }
      static el() {
        return qU.Gr23() >>> 0
      }
      constructor() {
        const TT = qU.ammi();
        return this.__wbg_ptr = TT, QT.register(this, this.__wbg_ptr, this), this
      }
      Xl() {
        return qU.bsjl(this.__wbg_ptr) >>> 0
      }
      Il() {
        return qU.ekTb(this.__wbg_ptr) >>> 0
      }
      Ql() {
        return qU.ytWt(this.__wbg_ptr) >>> 0
      }
      Ol(TT) {
        return qU.TZCo(this.__wbg_ptr, TT) >>> 0
      }
      reserve(TT, UT) {
        const mT = qU.TUzr(this.__wbg_ptr, TT, UT);
        if (mT[1]) throw LU(mT[0])
      }
      Pl(TT, UT) {
        const mT = HU(TT, qU.yNf7),
          WT = iU;
        qU.Ew8X(this.__wbg_ptr, mT, WT, UT)
      }
      text() {
        let TT, UT;
        try {
          const mT = qU.tAJ4(this.__wbg_ptr);
          return TT = mT[0], UT = mT[1], oT(mT[0], mT[1])
        } finally {
          qU.nGE7(TT, UT, 1)
        }
      }
    }
    Symbol.dispose && (MT.prototype[Symbol.dispose] = MT.prototype.free);
    class gT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, sT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        qU.xwh1(TT, 0)
      }
      ul(TT, UT) {
        KT(UT, WT);
        const mT = qU.xSaf(this.__wbg_ptr, TT, UT.__wbg_ptr);
        if (mT[2]) throw LU(mT[1]);
        return mT[0] >>> 0
      }
      rl() {
        const TT = qU.RwB0(this.__wbg_ptr);
        if (TT[1]) throw LU(TT[0])
      }
      El(TT, UT, mT, WT, zT, MT, gT, HT, kT, jT, lT) {
        KT(TT, nT);
        const LT = qU.YJFi(this.__wbg_ptr, TT.__wbg_ptr, UT, mT, WT, zT, MT, gT, HT, kT, jT, lT);
        if (LT[2]) throw LU(LT[1]);
        return LT[0]
      }
      hl() {
        const TT = qU.CFCs(this.__wbg_ptr);
        var UT = ST(TT[0], TT[1]).slice();
        return qU.nGE7(TT[0], 8 * TT[1], 8), UT
      }
      Dl() {
        return qU.mPom(this.__wbg_ptr) >>> 0
      }
      ol() {
        return qU.eIPi(this.__wbg_ptr) >>> 0
      }
      Al() {
        return qU.N62Q(this.__wbg_ptr) >>> 0
      }
      constructor(TT, UT, mT, WT, zT, MT, gT, nT) {
        const HT = qU.KIOy(TT, UT, mT, WT, zT, MT, gT, nT);
        if (HT[2]) throw LU(HT[1]);
        return this.__wbg_ptr = HT[0], sT.register(this, this.__wbg_ptr, this), this
      }
      UL(TT) {
        KT(TT, WT);
        const UT = qU.AlG3(this.__wbg_ptr, TT.__wbg_ptr);
        if (UT[2]) throw LU(UT[1]);
        return UT[0] >>> 0
      }
      mL(TT) {
        const UT = qU.uTX9(this.__wbg_ptr, TT);
        if (UT[1]) throw LU(UT[0])
      }
      WL() {
        return qU.efu7(this.__wbg_ptr) >>> 0
      }
      resume(TT, UT) {
        KT(TT, nT), KT(UT, WT);
        const mT = qU.tuGh(this.__wbg_ptr, TT.__wbg_ptr, UT.__wbg_ptr);
        if (mT[2]) throw LU(mT[1]);
        return mT[0] >>> 0
      }
      HL(TT) {
        const UT = qU.dI7k(this.__wbg_ptr, TT);
        if (UT[1]) throw LU(UT[0])
      }
      lL(TT, UT) {
        KT(UT, WT);
        const mT = qU.mkdu(this.__wbg_ptr, TT, UT.__wbg_ptr);
        if (mT[1]) throw LU(mT[0])
      }
      BL(TT) {
        const UT = jU(TT, qU.yNf7),
          mT = iU,
          WT = qU.IoKX(this.__wbg_ptr, UT, mT);
        if (WT[1]) throw LU(WT[0])
      }
      Sl(TT, UT, mT, WT, zT, MT) {
        const gT = qU.iY7B(this.__wbg_ptr, TT, UT, mT, WT, zT, MT);
        if (gT[1]) throw LU(gT[0])
      }
      Gl(TT, UT, mT, WT) {
        const zT = HU(TT, qU.yNf7),
          MT = iU,
          gT = jU(UT, qU.yNf7),
          nT = iU,
          HT = jU(mT, qU.yNf7),
          kT = iU,
          jT = jU(WT, qU.yNf7),
          lT = iU,
          LT = qU.Eef0(this.__wbg_ptr, zT, MT, gT, nT, HT, kT, jT, lT);
        if (LT[1]) throw LU(LT[0])
      }
      cL(TT, UT) {
        KT(UT, WT);
        const mT = qU.zuMl(this.__wbg_ptr, TT, UT.__wbg_ptr);
        if (mT[1]) throw LU(mT[0])
      }
      TL(TT, UT, mT) {
        const WT = qU.czLv(this.__wbg_ptr, TT, UT, mT);
        if (WT[1]) throw LU(WT[0])
      }
      fL(TT, UT, mT, WT, zT, MT, gT, HT, kT, jT) {
        KT(TT, nT);
        return qU.EsGA(this.__wbg_ptr, TT.__wbg_ptr, UT, mT, WT, zT, MT, gT, HT, kT, jT)
      }
    }
    Symbol.dispose && (gT.prototype[Symbol.dispose] = gT.prototype.free);
    class nT {
      static __wrap(TT) {
        const UT = Object.create(nT.prototype);
        return UT.__wbg_ptr = TT, FT.register(UT, UT.__wbg_ptr, UT), UT
      }
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, FT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        qU.PZki(TT, 0)
      }
      bL(TT) {
        const UT = qU.NnBs(this.__wbg_ptr, TT);
        if (UT[2]) throw LU(UT[1]);
        return UT[0] >>> 0
      }
      OL(TT, UT, mT) {
        return qU.Dvl4(this.__wbg_ptr, TT, UT, mT)
      }
      eL(TT, UT, mT) {
        return qU.ku1b(this.__wbg_ptr, TT, UT, mT) >>> 0
      }
      YL(TT, UT, mT, WT) {
        return 0 !== qU.JgzX(this.__wbg_ptr, TT, UT, mT, WT)
      }
      JL() {
        qU.ztiw(this.__wbg_ptr)
      }
      dL(TT) {
        const UT = qU.OtgA(this.__wbg_ptr, TT);
        if (UT[3]) throw LU(UT[2]);
        var mT = NT(UT[0], UT[1]).slice();
        return qU.nGE7(UT[0], 1 * UT[1], 1), mT
      }
      evict(TT, UT) {
        return qU.oXbG(this.__wbg_ptr, TT, UT) >>> 0
      }
      wL() {
        qU.CtFb(this.__wbg_ptr)
      }
      tL(TT, UT, mT) {
        qU.KKMx(this.__wbg_ptr, TT, UT, mT)
      }
      aL(TT) {
        const UT = qU.wPYV(this.__wbg_ptr, TT);
        if (UT[1]) throw LU(UT[0])
      }
      yL() {
        return qU.czaz(this.__wbg_ptr) >>> 0
      }
      XL() {
        return qU.VZFZ(this.__wbg_ptr) >>> 0
      }
      IL(TT, UT, mT) {
        qU.GQrM(this.__wbg_ptr, TT, UT, mT)
      }
      QL(TT, UT, mT) {
        qU.jCYa(this.__wbg_ptr, TT, UT, mT)
      }
      sL() {
        return qU.yEEA(this.__wbg_ptr) >>> 0
      }
      FL() {
        return qU.uCOX(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const TT = qU.ThwY();
        return this.__wbg_ptr = TT, FT.register(this, this.__wbg_ptr, this), this
      }
      static PL() {
        const TT = qU.TFuv();
        return nT.__wrap(TT)
      }
      VL() {
        return qU.TI3e(this.__wbg_ptr) >>> 0
      }
      uL() {
        return qU.SteV(this.__wbg_ptr) >>> 0
      }
      CL(TT, UT, mT, WT) {
        const zT = qU.luWa(this.__wbg_ptr, TT, UT, mT, WT);
        if (zT[1]) throw LU(zT[0])
      }
      rL() {
        return qU.oT8M(this.__wbg_ptr) >>> 0
      }
      KL() {
        return qU.V5Bk(this.__wbg_ptr) >>> 0
      }
      SL(TT, UT, mT, WT) {
        qU.BfBW(this.__wbg_ptr, TT, UT, mT, WT)
      }
      NL(TT) {
        qU.qZdw(this.__wbg_ptr, TT)
      }
      hL(TT, UT, mT, WT, zT) {
        const MT = kU(UT, qU.yNf7),
          gT = iU,
          nT = HU(mT, qU.yNf7),
          HT = iU,
          kT = jU(WT, qU.yNf7),
          jT = iU,
          lT = qU.j0gV(this.__wbg_ptr, TT, MT, gT, nT, HT, kT, jT, zT);
        if (lT[1]) throw LU(lT[0])
      }
      EL(TT, UT, mT, WT) {
        const zT = kU(TT, qU.yNf7),
          MT = iU,
          gT = HU(UT, qU.yNf7),
          nT = iU,
          HT = jU(mT, qU.yNf7),
          kT = iU,
          jT = kU(WT, qU.yNf7),
          lT = iU,
          LT = qU.wP5B(this.__wbg_ptr, zT, MT, gT, nT, HT, kT, jT, lT);
        if (LT[1]) throw LU(LT[0])
      }
      Up(TT) {
        const UT = kU(TT, qU.yNf7),
          mT = iU,
          WT = qU.KLtm(this.__wbg_ptr, UT, mT);
        if (WT[1]) throw LU(WT[0])
      }
      mp() {
        return qU.CObo(this.__wbg_ptr) >>> 0
      }
      Wp(TT) {
        const UT = qU.FLSb(this.__wbg_ptr, TT);
        if (UT[2]) throw LU(UT[1]);
        return UT[0] >>> 0
      }
      steer() {
        return qU.Lm6X(this.__wbg_ptr) >>> 0
      }
      zp() {
        const TT = qU.sVlV(this.__wbg_ptr);
        var UT = ST(TT[0], TT[1]).slice();
        return qU.nGE7(TT[0], 8 * TT[1], 8), UT
      }
      Mp() {
        return qU.xkOZ(this.__wbg_ptr) >>> 0
      }
      ML() {
        const TT = qU.xe5w(this.__wbg_ptr);
        var UT, mT, WT = (UT = TT[0], mT = TT[1], UT >>>= 0, (null !== DT && 0 !== DT.byteLength || (DT = new Int32Array(qU.memory.buffer)), DT).subarray(UT / 4, UT / 4 + mT)).slice();
        return qU.nGE7(TT[0], 4 * TT[1], 4), WT
      }
    }
    Symbol.dispose && (nT.prototype[Symbol.dispose] = nT.prototype.free);
    class HT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, PT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        qU.WQO9(TT, 0)
      }
      np(TT) {
        const UT = HU(TT, qU.yNf7),
          mT = iU,
          WT = qU.K8Ld(this.__wbg_ptr, UT, mT);
        if (WT[1]) throw LU(WT[0])
      }
      Hp() {
        return qU.tQrP(this.__wbg_ptr) >>> 0
      }
      kp() {
        return qU.TBBw(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const TT = qU.T7ZT();
        return this.__wbg_ptr = TT, PT.register(this, this.__wbg_ptr, this), this
      }
      run(TT, UT) {
        KT(TT, nT);
        const mT = qU.TKZu(this.__wbg_ptr, TT.__wbg_ptr, UT);
        if (mT[2]) throw LU(mT[1]);
        return mT[0] >>> 0
      }
      jp(TT) {
        const UT = HU(TT, qU.yNf7),
          mT = iU;
        qU.XOcs(this.__wbg_ptr, UT, mT)
      }
      lp(TT) {
        const UT = HU(TT, qU.yNf7),
          mT = iU;
        qU.GTFB(this.__wbg_ptr, UT, mT)
      }
    }
    Symbol.dispose && (HT.prototype[Symbol.dispose] = HT.prototype.free);
    class kT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, VT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        qU.UHln(TT, 0)
      }
      Bp(TT, UT) {
        const mT = kU(TT, qU.yNf7),
          WT = iU;
        return qU.tHGV(this.__wbg_ptr, mT, WT, UT) >>> 0
      }
      Zp(TT, UT, mT) {
        KT(TT, nT);
        const WT = kU(mT, qU.yNf7),
          zT = iU,
          MT = qU.srce(this.__wbg_ptr, TT.__wbg_ptr, UT, WT, zT);
        if (MT[2]) throw LU(MT[1]);
        return MT[0] >>> 0
      }
      Lp(TT) {
        return qU.sxsz(this.__wbg_ptr, TT) >>> 0
      }
      constructor() {
        const TT = qU.bgKY();
        return this.__wbg_ptr = TT, VT.register(this, this.__wbg_ptr, this), this
      }
      scan(TT, UT) {
        KT(TT, nT);
        const mT = qU.zWoV(this.__wbg_ptr, TT.__wbg_ptr, UT);
        if (mT[2]) throw LU(mT[1]);
        return mT[0] >>> 0
      }
      qp(TT) {
        const UT = kU(TT, qU.yNf7),
          mT = iU;
        qU.xoHY(this.__wbg_ptr, UT, mT)
      }
      vp() {
        return qU.FLK4(this.__wbg_ptr) >>> 0
      }
      cp() {
        return qU.OMdR(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (kT.prototype[Symbol.dispose] = kT.prototype.free);
    class jT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, uT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        qU.R3rb(TT, 0)
      }
      bp(TT) {
        const UT = qU.KuKA(this.__wbg_ptr, TT);
        if (UT[2]) throw LU(UT[1]);
        return UT[0] >>> 0
      }
      compute(TT, UT, mT, WT) {
        var zT = gU(WT) ? 0 : lU(WT, qU.yNf7, qU.USpa),
          MT = iU;
        const gT = qU.ckSz(this.__wbg_ptr, TT, gU(UT) ? Number.MAX_SAFE_INTEGER : UT | 0, mT, zT, MT);
        if (gT[2]) throw LU(gT[1]);
        return gT[0] >>> 0
      }
      Yp(TT) {
        const UT = lU(TT, qU.yNf7, qU.USpa),
          mT = iU;
        qU.JvAw(this.__wbg_ptr, UT, mT)
      }
      xp() {
        return qU.EoH8(this.__wbg_ptr)
      }
      dp(TT) {
        return qU.iArR(this.__wbg_ptr, TT) >>> 0
      }
      wp() {
        return qU.g3zy(this.__wbg_ptr) >>> 0
      }
      tp() {
        return qU.kDRR(this.__wbg_ptr) >>> 0
      }
      ap(TT, UT) {
        const mT = qU.KQln(this.__wbg_ptr, TT, UT);
        if (mT[1]) throw LU(mT[0])
      }
      yp() {
        return qU.z27c(this.__wbg_ptr) >>> 0
      }
      Xp() {
        return qU.e7P8(this.__wbg_ptr) >>> 0
      }
      Ip() {
        return qU.df4T(this.__wbg_ptr) >>> 0
      }
      Op(TT, UT, mT) {
        const WT = HU(TT, qU.yNf7),
          zT = iU,
          MT = HU(UT, qU.yNf7),
          gT = iU,
          nT = qU.bzC0(this.__wbg_ptr, WT, zT, MT, gT, mT);
        if (nT[1]) throw LU(nT[0])
      }
      sp() {
        return qU.aZyz(this.__wbg_ptr) >>> 0
      }
      mesh(TT, UT, mT, WT, zT) {
        const MT = qU.Ncmp(this.__wbg_ptr, TT, UT, mT, WT, zT);
        if (MT[2]) throw LU(MT[1]);
        return MT[0] >>> 0
      }
      constructor(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT, jT, lT, LT, pT, BT, ZT, cT, vT, fT, qT) {
        const iT = nU(TT, qU.yNf7),
          bT = iU,
          OT = jU(UT, qU.yNf7),
          eT = iU,
          YT = HU(mT, qU.yNf7),
          JT = iU,
          xT = kU(WT, qU.yNf7),
          dT = iU,
          wT = kU(zT, qU.yNf7),
          tT = iU,
          aT = HU(MT, qU.yNf7),
          yT = iU,
          XT = HU(gT, qU.yNf7),
          IT = iU,
          QT = jU(nT, qU.yNf7),
          sT = iU,
          FT = jU(HT, qU.yNf7),
          PT = iU,
          VT = kU(kT, qU.yNf7),
          CT = iU;
        var rT = gU(jT) ? 0 : nU(jT, qU.yNf7),
          KT = iU;
        const ST = HU(lT, qU.yNf7),
          GT = iU,
          NT = kU(LT, qU.yNf7),
          ET = iU;
        var hT = gU(pT) ? 0 : kU(pT, qU.yNf7),
          DT = iU;
        const oT = jU(BT, qU.yNf7),
          AT = iU,
          RT = qU.uepC(iT, bT, OT, eT, YT, JT, xT, dT, wT, tT, aT, yT, XT, IT, QT, sT, FT, PT, VT, CT, rT, KT, ST, GT, NT, ET, hT, DT, oT, AT, ZT, cT, vT, fT, qT);
        if (RT[2]) throw LU(RT[1]);
        return this.__wbg_ptr = RT[0], uT.register(this, this.__wbg_ptr, this), this
      }
      Qp(TT, UT) {
        const mT = HU(TT, qU.yNf7),
          WT = iU,
          zT = qU.oBoj(this.__wbg_ptr, mT, WT, UT);
        if (zT[3]) throw LU(zT[2]);
        var MT = NT(zT[0], zT[1]).slice();
        return qU.nGE7(zT[0], 1 * zT[1], 1), MT
      }
      Fp(TT) {
        qU.dI3H(this.__wbg_ptr, gU(TT) ? 16777215 : TT)
      }
      Pp(TT) {
        return qU.a0T0(this.__wbg_ptr, TT) >>> 0
      }
      Cp() {
        return qU.gP3f(this.__wbg_ptr) >>> 0
      }
      Vp() {
        const TT = qU.qyiN(this.__wbg_ptr);
        if (TT[2]) throw LU(TT[1]);
        return 0 !== TT[0]
      }
      rp() {
        return qU.xHHR(this.__wbg_ptr) >>> 0
      }
      Kp() {
        return qU.GIK3(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (jT.prototype[Symbol.dispose] = jT.prototype.free);
    class lT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, CT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        qU.YOco(TT, 0)
      }
      compute(TT, UT, mT, WT) {
        var zT = gU(WT) ? 0 : lU(WT, qU.yNf7, qU.USpa),
          MT = iU;
        const gT = qU.dlLa(this.__wbg_ptr, TT, gU(UT) ? Number.MAX_SAFE_INTEGER : UT | 0, mT, zT, MT);
        if (gT[2]) throw LU(gT[1]);
        return gT[0] >>> 0
      }
      Yp(TT) {
        const UT = lU(TT, qU.yNf7, qU.USpa),
          mT = iU;
        qU.TIP3(this.__wbg_ptr, UT, mT)
      }
      Xp() {
        return qU.PWvW(this.__wbg_ptr) >>> 0
      }
      Ip() {
        return qU.YnRi(this.__wbg_ptr) >>> 0
      }
      Sp(TT) {
        const UT = qU.V0oG(this.__wbg_ptr, TT);
        if (UT[2]) throw LU(UT[1]);
        return UT[0] >>> 0
      }
      constructor(TT, UT, mT, WT, zT, MT) {
        const gT = nU(TT, qU.yNf7),
          nT = iU,
          HT = jU(UT, qU.yNf7),
          kT = iU,
          jT = HU(mT, qU.yNf7),
          lT = iU,
          LT = kU(WT, qU.yNf7),
          pT = iU,
          BT = qU.Hr1c(gT, nT, HT, kT, jT, lT, LT, pT, zT, MT);
        if (BT[2]) throw LU(BT[1]);
        return this.__wbg_ptr = BT[0], CT.register(this, this.__wbg_ptr, this), this
      }
      Cp() {
        return qU.DDiq(this.__wbg_ptr) >>> 0
      }
      Vp() {
        const TT = qU.bvxr(this.__wbg_ptr);
        if (TT[2]) throw LU(TT[1]);
        return 0 !== TT[0]
      }
      rp() {
        return qU.WRXh(this.__wbg_ptr) >>> 0
      }
    }

    function LT() {
      const TT = qU.jhlR();
      var UT = GT(TT[0], TT[1]).slice();
      return qU.nGE7(TT[0], 4 * TT[1], 4), UT
    }

    function pT(TT, UT) {
      let mT, WT;
      try {
        const zT = nU(TT, qU.yNf7),
          MT = iU,
          gT = lU(UT, qU.yNf7, qU.USpa),
          nT = iU,
          HT = qU.epXB(zT, MT, gT, nT);
        return mT = HT[0], WT = HT[1], oT(HT[0], HT[1])
      } finally {
        qU.nGE7(mT, WT, 1)
      }
    }

    function BT() {
      const TT = qU.oTtq();
      var UT = GT(TT[0], TT[1]).slice();
      return qU.nGE7(TT[0], 4 * TT[1], 4), UT
    }

    function ZT(TT) {
      return 0 !== qU.GC4a(TT)
    }

    function cT(TT, UT) {
      const mT = lU(TT, qU.yNf7, qU.USpa),
        WT = iU,
        zT = qU.Pegu(mT, WT, UT);
      if (zT[1]) throw LU(zT[0])
    }

    function vT() {
      qU.OJ3D()
    }

    function fT() {
      return qU.OLZa() >>> 0
    }

    function qT(TT) {
      return 0 !== qU.rVpp(TT)
    }

    function iT(TT) {
      return 0 !== qU.toUd(TT)
    }

    function bT(TT) {
      qU.HJiM(TT)
    }

    function OT() {
      return qU.mZGZ() >>> 0
    }

    function eT() {
      return qU.n593() >>> 0
    }

    function YT() {
      return 0 !== qU.KCUA()
    }

    function JT() {
      const TT = qU.Q4ec();
      var UT = GT(TT[0], TT[1]).slice();
      return qU.nGE7(TT[0], 4 * TT[1], 4), UT
    }

    function xT() {
      const TT = qU.B2Mi();
      var UT = GT(TT[0], TT[1]).slice();
      return qU.nGE7(TT[0], 4 * TT[1], 4), UT
    }

    function dT() {
      const TT = qU.kqXI();
      var UT = GT(TT[0], TT[1]).slice();
      return qU.nGE7(TT[0], 4 * TT[1], 4), UT
    }

    function wT() {
      return qU.aQA0() >>> 0
    }

    function tT() {
      qU.tI0G()
    }

    function aT() {
      let TT, UT;
      try {
        const mT = qU.UMhC();
        return TT = mT[0], UT = mT[1], oT(mT[0], mT[1])
      } finally {
        qU.nGE7(TT, UT, 1)
      }
    }

    function yT(TT) {
      qU.AcfZ(rT(TT))
    }

    function XT() {
      return {
        __proto__: null,
        BYOW: {
          __proto__: null,
          g0n2: function(TT, UT) {
            return rT(Error(oT(TT, UT)))
          },
          RyJM: function(TT, UT) {
            throw new Error(oT(TT, UT))
          },
          psFw: function(TT) {
            WU(TT).call()
          },
          w9hc: function(TT, UT) {
            console.error(oT(TT, UT))
          },
          FN8h: function() {
            return performance.now()
          },
          VdTu: function(TT) {
            LU(TT)
          }
        }
      }
    }
    Symbol.dispose && (lT.prototype[Symbol.dispose] = lT.prototype.free);
    const IT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => qU.CyMd(TT, 1))),
      QT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => qU.WVeG(TT, 1))),
      sT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => qU.xwh1(TT, 1))),
      FT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => qU.PZki(TT, 1))),
      PT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => qU.WQO9(TT, 1))),
      VT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => qU.UHln(TT, 1))),
      uT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => qU.R3rb(TT, 1))),
      CT = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((TT => qU.YOco(TT, 1)));

    function rT(TT) {
      MU === zU.length && zU.push(zU.length + 1);
      const UT = MU;
      return MU = zU[UT], zU[UT] = TT, UT
    }

    function KT(TT, UT) {
      if (!(TT instanceof UT)) throw new Error(`expected instance of ${UT.name}`)
    }

    function ST(TT, UT) {
      return TT >>>= 0, hT().subarray(TT / 8, TT / 8 + UT)
    }

    function GT(TT, UT) {
      return TT >>>= 0, TU().subarray(TT / 4, TT / 4 + UT)
    }

    function NT(TT, UT) {
      return TT >>>= 0, mU().subarray(TT / 1, TT / 1 + UT)
    }
    let ET = null;

    function hT() {
      return null !== ET && 0 !== ET.byteLength || (ET = new Float64Array(qU.memory.buffer)), ET
    }
    let DT = null;

    function oT(TT, UT) {
      return function(TT, UT) {
        ZU += UT, ZU >= BU && (pU = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), pU.decode(), ZU = UT);
        return pU.decode(mU().subarray(TT, TT + UT))
      }(TT >>> 0, UT)
    }
    let AT = null;
    let RT = null;

    function TU() {
      return null !== RT && 0 !== RT.byteLength || (RT = new Uint32Array(qU.memory.buffer)), RT
    }
    let UU = null;

    function mU() {
      return null !== UU && 0 !== UU.byteLength || (UU = new Uint8Array(qU.memory.buffer)), UU
    }

    function WU(TT) {
      return zU[TT]
    }
    let zU = new Array(1024).fill(void 0);
    zU.push(void 0, null, !0, !1);
    let MU = zU.length;

    function gU(TT) {
      return void 0 === TT || null === TT
    }

    function nU(TT, UT) {
      const mT = UT(2 * TT.length, 2) >>> 0;
      return (null !== AT && 0 !== AT.byteLength || (AT = new Uint16Array(qU.memory.buffer)), AT).set(TT, mT / 2), iU = TT.length, mT
    }

    function HU(TT, UT) {
      const mT = UT(4 * TT.length, 4) >>> 0;
      return TU().set(TT, mT / 4), iU = TT.length, mT
    }

    function kU(TT, UT) {
      const mT = UT(1 * TT.length, 1) >>> 0;
      return mU().set(TT, mT / 1), iU = TT.length, mT
    }

    function jU(TT, UT) {
      const mT = UT(8 * TT.length, 8) >>> 0;
      return hT().set(TT, mT / 8), iU = TT.length, mT
    }

    function lU(TT, UT, mT) {
      if (void 0 === mT) {
        const mT = cU.encode(TT),
          WT = UT(mT.length, 1) >>> 0;
        return mU().subarray(WT, WT + mT.length).set(mT), iU = mT.length, WT
      }
      let WT = TT.length,
        zT = UT(WT, 1) >>> 0;
      const MT = mU();
      let gT = 0;
      for (; gT < WT; gT++) {
        const UT = TT.charCodeAt(gT);
        if (UT > 127) break;
        MT[zT + gT] = UT
      }
      if (gT !== WT) {
        0 !== gT && (TT = TT.slice(gT)), zT = mT(zT, WT, WT = gT + 3 * TT.length, 1) >>> 0;
        const UT = mU().subarray(zT + gT, zT + WT);
        gT += cU.encodeInto(TT, UT).written, zT = mT(zT, WT, gT, 1) >>> 0
      }
      return iU = gT, zT
    }

    function LU(TT) {
      const UT = WU(TT);
      return function(TT) {
        TT < 1028 || (zU[TT] = MU, MU = TT)
      }(TT), UT
    }
    let pU = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    pU.decode();
    const BU = 2146435072;
    let ZU = 0;
    const cU = new TextEncoder;
    "encodeInto" in cU || (cU.encodeInto = function(TT, UT) {
      const mT = cU.encode(TT);
      return UT.set(mT), {
        read: TT.length,
        written: mT.length
      }
    });
    let vU, fU, qU, iU = 0;

    function bU(TT, UT) {
      return fU = TT, qU = TT.exports, vU = UT, ET = null, DT = null, AT = null, RT = null, UU = null, qU.HGGZ(), qU
    }

    function OU(TT) {
      if (void 0 !== qU) return qU;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module: TT
      } = TT) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const UT = XT();
      TT instanceof WebAssembly.Module || (TT = new WebAssembly.Module(TT));
      return bU(new WebAssembly.Instance(TT, UT), TT)
    }
    async function eU(TT) {
      if (void 0 !== qU) return qU;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module_or_path: TT
      } = TT) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const UT = XT();
      ("string" === typeof TT || "function" === typeof Request && TT instanceof Request || "function" === typeof URL && TT instanceof URL) && (TT = fetch(TT));
      const {
        instance: mT,
        module: WT
      } = await async function(TT, UT) {
        if ("function" === typeof Response && TT instanceof Response) {
          if (!TT.ok) throw new Error(`failed to fetch Wasm: ${TT.status} ${TT.statusText} fetching '${TT.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(TT, UT)
          } catch (mT) {
            if (! function(TT) {
                switch (TT) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(TT.type) || "application/wasm" === TT.headers.get("Content-Type")) throw mT;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", mT)
          }
          const WT = await TT.arrayBuffer();
          return await WebAssembly.instantiate(WT, UT)
        } {
          const mT = await WebAssembly.instantiate(TT, UT);
          return mT instanceof WebAssembly.Instance ? {
            instance: mT,
            module: TT
          } : mT
        }
      }(await TT, UT);
      return bU(mT, WT)
    }
  },
  36381: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT,
      e: () => nT,
      h: () => HT
    });
    var WT = mT(36388),
      zT = mT(2992),
      MT = mT(36394);
    const gT = {
      name: zT.b,
      url: () => new mT.U(mT(36402)),
      init: WT.default,
      bindings: WT
    };

    function nT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT,
        UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gT,
        mT = arguments.length > 2 ? arguments[2] : void 0;
      return (0, MT.h)(TT, UT, mT)
    }

    function HT(TT) {
      return (0, zT.L)((() => TT), WT, gT)
    }
  },
  36371: (TT, UT, mT) => {
    function WT(TT, UT) {
      return new Error(`${TT}: ${UT instanceof Error?`${UT.name}: ${UT.message}`:String(UT)}`, {
        cause: UT
      })
    }
    mT.d(UT, {
      c: () => WT
    })
  },
  36363: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT,
      f: () => HT
    });
    var WT = mT(3001),
      zT = mT(6688),
      MT = mT(36371);

    function gT() {
      return new URL(new mT.U(mT(36378)).href, globalThis.location?.href).href
    }
    let nT = null;

    function HT() {
      return nT ??= (async () => (0, WT.I)(new URL(gT()), (0, zT.b)("bloxd_wasm_textures")))().catch((TT => {
        throw (0, MT.c)((0, WT.P)(TT), TT)
      })), nT
    }
  },
  36349: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT,
      h: () => MT,
      k: () => HT,
      o: () => gT,
      p: () => zT
    });
    const WT = /^alloc_failed (\d+) bytes$/;

    function zT(TT, UT) {
      return MT(TT, UT) ? `trap=alloc_failed ${UT} bytes` : `trap=${TT}`
    }

    function MT(TT, UT) {
      return "unreachable" === TT && UT > 0
    }

    function gT(TT, UT, mT) {
      const WT = function(TT) {
        return TT instanceof WebAssembly.RuntimeError ? /unreachable/i.test(TT.message) ? "unreachable" : /out of bounds/i.test(TT.message) ? "out_of_bounds" : "runtime_error" : (TT instanceof RangeError || TT instanceof Error && "InternalError" === TT.name) && /call stack|recursion/i.test(TT.message) ? "stack_overflow" : "js_error"
      }(TT);
      if ("unreachable" !== WT) return {
        kind: WT,
        panic: null,
        refusedBytes: 0
      };
      const zT = UT(),
        MT = mT();
      return {
        kind: WT,
        panic: MT > 0 ? null : zT,
        refusedBytes: MT
      }
    }
    const nT = 300;

    function HT(TT) {
      return TT.replace(/\s*\n\s*/g, " / ").slice(0, nT)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);