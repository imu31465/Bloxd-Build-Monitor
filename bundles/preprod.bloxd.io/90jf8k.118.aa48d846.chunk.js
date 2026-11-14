export const id = 118;
export const ids = [118, 187];
export const modules = {
  34886: (FF, WF, SF) => {
    SF.d(WF, {
      reportCappedWasmFailure: () => hF,
      reportWasmFailure: () => uF
    });
    var CF = SF(2418);
    const AF = CF.e - 4;

    function uF(FF, WF, SF) {
      (0, CF.h)(FF, WF, SF, !1)
    }

    function hF(FF, WF, SF) {
      (0, CF.h)(FF, WF, SF, !1, AF)
    }
  },
  34877: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => QF,
      c: () => tW,
      d: () => TF,
      g: () => rW
    });
    var CF = SF(34892),
      AF = SF(2903),
      uF = SF(34915),
      hF = SF(2906),
      bW = SF(34886),
      dF = SF(2252),
      PF = SF(2441),
      RF = SF(2413),
      iW = SF(2765);
    const eF = "bloxdWasmFailureReported";

    function EF() {
      return "undefined" === typeof WebAssembly
    }

    function QF() {
      return (0, CF.f)()
    }

    function rW() {
      if (EF()) return "this browser has no WebAssembly";
      const FF = (0, AF.t)();
      return "compile" === FF || "instantiate" === FF ? `the core wasm didn't load here (${(0,AF.j)()})` : null
    }
    async function gW(FF) {
      return await (0, uF.f)(uF.c, void 0, FF)
    }

    function tW() {
      EF() || (0, iW.c)((() => {
        gW()
      }))
    }

    function TF() {
      if (EF()) return async () => ((0, dF.h)("unsupported", 0), aW("unsupported", "This browser has no WebAssembly"), !1);
      const FF = {
        reloadFailedDownload: !0
      };
      return gW(FF), async () => {
        var WF;
        const SF = performance.now();
        await gW(FF);
        const CF = (performance.now() - SF) / 1e3;
        if ((0, AF.P)()) return (0, dF.h)("ready", CF), (0, hF.G)(uF.c.url()) && (0, bW.reportCappedWasmFailure)("wasm_load", PF.e.message, PF.e.code), !0;
        const iW = RF.c[null !== (WF = (0, AF.t)()) && void 0 !== WF ? WF : "call"];
        return (0, dF.h)(iW, CF), aW(iW, (0, AF.j)()), !1
      }
    }

    function aW(FF, WF) {
      (0, RF.i)(eF, `Bloxd wasm ${FF}, so the game can't start: ${WF}`, WF, FF)
    }
  },
  34923: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/bloxd_wasm_bg.cac969b93ca31ed3134b.wasm"
  },
  34906: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/bloxd_wasm_textures_bg.2ee0b434d787525e028a.wasm"
  },
  34921: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => eF,
      i: () => RF
    });
    var CF = SF(2903),
      AF = SF(2906),
      uF = SF(2911),
      hF = SF(5592),
      bW = SF(5597);
    let dF = null,
      PF = !1;

    function RF(FF, WF, SF) {
      return null === dF ? dF = iW(FF, WF) : FF !== dF.build ? console.warn(`Bloxd wasm: ${FF.name} was asked for after ${dF.build.name} started loading, which this thread keeps`) : WF.name !== dF.workers.name && console.warn(`Bloxd wasm: ${WF.name} was asked for workers after ${dF.workers.name}, which this thread keeps`), SF?.reloadFailedDownload && !PF && (0, CF.Z)() && (PF = !0, dF = iW(dF.build, dF.workers)), dF.loaded
    }

    function iW(FF, WF) {
      const SF = (0, CF.K)((async () => {
        (0, bW.y)();
        const SF = EF(FF),
          CF = WF.name === FF.name ? SF : EF(WF);
        await (0, uF.g)([SF, CF]);
        const AF = await SF,
          hF = await CF;
        return (0, bW.y)(), {
          module: AF,
          workerModule: hF
        }
      }), FF);
      return {
        build: FF,
        workers: WF,
        loaded: SF
      }
    }
    async function eF(FF) {
      return EF(FF)
    }

    function EF(FF) {
      return (0, AF.w)(FF.url(), (0, hF.c)(FF.name))
    }
  },
  34915: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => OW,
      f: () => xS,
      j: () => ZW
    });
    var CF = {};
    SF.r(CF), SF.d(CF, {
      WF: () => AF,
      EnvelopeKind: () => uF,
      SF: () => hF,
      PhysicsEngine: () => bW,
      CF: () => dF,
      AF: () => PF,
      uF: () => RF,
      hF: () => iW,
      bW: () => eF,
      dF: () => EF,
      PF: () => QF,
      RF: () => rW,
      iW: () => gW,
      eF: () => tW,
      default: () => DW,
      initSync: () => NW,
      EF: () => TF,
      QF: () => aW,
      rW: () => kW,
      gW: () => qW,
      tW: () => VF,
      TF: () => NF,
      aW: () => DF,
      kW: () => LF,
      qW: () => mW,
      VF: () => OF,
      NF: () => xW,
      DF: () => ZF,
      LF: () => oF,
      mW: () => YF,
      OF: () => MF
    });
    class AF {
      __destroy_into_raw() {
        const FF = this.__wbg_ptr;
        return this.__wbg_ptr = 0, GF.unregister(this), FF
      }
      free() {
        const FF = this.__destroy_into_raw();
        kS.nFU9(FF, 0)
      }
      xW() {
        const FF = kS.mAlf(this.__wbg_ptr);
        if (FF[2]) throw EW(FF[1]);
        return FF[0] >>> 0
      }
      ZF() {
        return kS.s13G(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const FF = kS.NmAE();
        return this.__wbg_ptr = FF, GF.register(this, this.__wbg_ptr, this), this
      }
      oF() {
        return kS.V0GJ(this.__wbg_ptr) >>> 0
      }
      YF(FF) {
        const WF = kS.zUTY(this.__wbg_ptr, FF);
        if (WF[2]) throw EW(WF[1]);
        return WF[0] >>> 0
      }
      MF(FF) {
        const WF = kS.Oibp(this.__wbg_ptr, FF);
        if (WF[2]) throw EW(WF[1]);
        return WF[0] >>> 0
      }
    }
    Symbol.dispose && (AF.prototype[Symbol.dispose] = AF.prototype.free);
    const uF = Object.freeze({
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
    class hF {
      __destroy_into_raw() {
        const FF = this.__wbg_ptr;
        return this.__wbg_ptr = 0, zW.unregister(this), FF
      }
      free() {
        const FF = this.__destroy_into_raw();
        kS.Wkdq(FF, 0)
      }
      zW(FF, WF) {
        const SF = kS.pXXx(this.__wbg_ptr, FF, WF);
        if (SF[2]) throw EW(SF[1]);
        return SF[0] >>> 0
      }
      IF(FF) {
        const WF = kS.ohA8(this.__wbg_ptr, FF);
        if (WF[2]) throw EW(WF[1]);
        return WF[0] >>> 0
      }
      fF() {
        kS.w8Ly(this.__wbg_ptr)
      }
      static yW() {
        return kS.WsdA() >>> 0
      }
      sF() {
        return kS.AQqn(this.__wbg_ptr) >>> 0
      }
      nF() {
        const FF = kS.ljTU(this.__wbg_ptr);
        return 0 === FF[0] ? void 0 : FF[1]
      }
      HF() {
        return kS.s2DE(this.__wbg_ptr) >>> 0
      }
      KF() {
        return kS.GMOa(this.__wbg_ptr) >>> 0
      }
      static GF() {
        return kS.dKWv() >>> 0
      }
      constructor() {
        const FF = kS.Rybx();
        return this.__wbg_ptr = FF, zW.register(this, this.__wbg_ptr, this), this
      }
      wF() {
        return kS.q6UU(this.__wbg_ptr) >>> 0
      }
      XF() {
        return kS.c5fL(this.__wbg_ptr) >>> 0
      }
      UF() {
        return kS.bDb4(this.__wbg_ptr) >>> 0
      }
      cW(FF) {
        return kS.VS2n(this.__wbg_ptr, FF) >>> 0
      }
      reserve(FF, WF) {
        const SF = kS.n2CG(this.__wbg_ptr, FF, WF);
        if (SF[1]) throw EW(SF[0])
      }
      vW(FF, WF) {
        const SF = PW(FF, kS.Kvxk),
          CF = qS;
        kS.gM4v(this.__wbg_ptr, SF, CF, WF)
      }
      text() {
        let FF, WF;
        try {
          const SF = kS.pqrF(this.__wbg_ptr);
          return FF = SF[0], WF = SF[1], pF(SF[0], SF[1])
        } finally {
          kS.HLZN(FF, WF, 1)
        }
      }
    }
    Symbol.dispose && (hF.prototype[Symbol.dispose] = hF.prototype.free);
    class bW {
      __destroy_into_raw() {
        const FF = this.__wbg_ptr;
        return this.__wbg_ptr = 0, IF.unregister(this), FF
      }
      free() {
        const FF = this.__destroy_into_raw();
        kS.GhVT(FF, 0)
      }
      pF(FF, WF) {
        wF(WF, AF);
        const SF = kS.X14O(this.__wbg_ptr, FF, WF.__wbg_ptr);
        if (SF[2]) throw EW(SF[1]);
        return SF[0] >>> 0
      }
      FW() {
        const FF = kS.Fjcu(this.__wbg_ptr);
        if (FF[1]) throw EW(FF[0])
      }
      hW(FF, WF, SF, CF, AF, uF, hF, bW, PF, RF, iW) {
        wF(FF, dF);
        const eF = kS.m265(this.__wbg_ptr, FF.__wbg_ptr, WF, SF, CF, AF, uF, hF, bW, PF, RF, iW);
        if (eF[2]) throw EW(eF[1]);
        return eF[0]
      }
      bS() {
        const FF = kS.dtib(this.__wbg_ptr);
        var WF = XF(FF[0], FF[1]).slice();
        return kS.HLZN(FF[0], 8 * FF[1], 8), WF
      }
      dW() {
        return kS.ykyR(this.__wbg_ptr) >>> 0
      }
      PW() {
        return kS.l99b(this.__wbg_ptr) >>> 0
      }
      RW() {
        return kS.poGf(this.__wbg_ptr) >>> 0
      }
      constructor(FF, WF, SF, CF, AF, uF, hF, bW) {
        const dF = kS.DybC(FF, WF, SF, CF, AF, uF, hF, bW);
        if (dF[2]) throw EW(dF[1]);
        return this.__wbg_ptr = dF[0], IF.register(this, this.__wbg_ptr, this), this
      }
      EW(FF) {
        wF(FF, AF);
        const WF = kS.S8sU(this.__wbg_ptr, FF.__wbg_ptr);
        if (WF[2]) throw EW(WF[1]);
        return WF[0] >>> 0
      }
      QW(FF) {
        const WF = kS.zaBl(this.__wbg_ptr, FF);
        if (WF[1]) throw EW(WF[0])
      }
      rS() {
        return kS.PW3G(this.__wbg_ptr) >>> 0
      }
      resume(FF, WF) {
        wF(FF, dF), wF(WF, AF);
        const SF = kS.NERT(this.__wbg_ptr, FF.__wbg_ptr, WF.__wbg_ptr);
        if (SF[2]) throw EW(SF[1]);
        return SF[0] >>> 0
      }
      kS(FF) {
        const WF = kS.rQGT(this.__wbg_ptr, FF);
        if (WF[1]) throw EW(WF[0])
      }
      NW(FF, WF) {
        wF(WF, AF);
        const SF = kS.yNqy(this.__wbg_ptr, FF, WF.__wbg_ptr);
        if (SF[1]) throw EW(SF[0])
      }
      mS(FF) {
        const WF = iS(FF, kS.Kvxk),
          SF = qS,
          CF = kS.oWKy(this.__wbg_ptr, WF, SF);
        if (CF[1]) throw EW(CF[0])
      }
      SW(FF, WF, SF, CF, AF, uF) {
        const hF = kS.H9V3(this.__wbg_ptr, FF, WF, SF, CF, AF, uF);
        if (hF[1]) throw EW(hF[0])
      }
      AW(FF, WF, SF, CF) {
        const AF = PW(FF, kS.Kvxk),
          uF = qS,
          hF = iS(WF, kS.Kvxk),
          bW = qS,
          dF = iS(SF, kS.Kvxk),
          PF = qS,
          RF = iS(CF, kS.Kvxk),
          iW = qS,
          eF = kS.kwfa(this.__wbg_ptr, AF, uF, hF, bW, dF, PF, RF, iW);
        if (eF[1]) throw EW(eF[0])
      }
      xS(FF, WF) {
        wF(WF, AF);
        const SF = kS.kuPI(this.__wbg_ptr, FF, WF.__wbg_ptr);
        if (SF[1]) throw EW(SF[0])
      }
      eW(FF, WF, SF) {
        const CF = kS.tNbi(this.__wbg_ptr, FF, WF, SF);
        if (CF[1]) throw EW(CF[0])
      }
      oW(FF, WF, SF, CF, AF, uF, hF, bW, PF, RF) {
        wF(FF, dF);
        return kS.gKrl(this.__wbg_ptr, FF.__wbg_ptr, WF, SF, CF, AF, uF, hF, bW, PF, RF)
      }
    }
    Symbol.dispose && (bW.prototype[Symbol.dispose] = bW.prototype.free);
    class dF {
      static __wrap(FF) {
        const WF = Object.create(dF.prototype);
        return WF.__wbg_ptr = FF, fF.register(WF, WF.__wbg_ptr, WF), WF
      }
      __destroy_into_raw() {
        const FF = this.__wbg_ptr;
        return this.__wbg_ptr = 0, fF.unregister(this), FF
      }
      free() {
        const FF = this.__destroy_into_raw();
        kS.YdYs(FF, 0)
      }
      cS(FF) {
        const WF = kS.cDin(this.__wbg_ptr, FF);
        if (WF[2]) throw EW(WF[1]);
        return WF[0] >>> 0
      }
      GW(FF, WF, SF) {
        return kS.Ba1W(this.__wbg_ptr, FF, WF, SF)
      }
      zS(FF, WF, SF) {
        return kS.YQN5(this.__wbg_ptr, FF, WF, SF) >>> 0
      }
      IW(FF, WF, SF, CF) {
        return 0 !== kS.TeOB(this.__wbg_ptr, FF, WF, SF, CF)
      }
      fW() {
        kS.tzFF(this.__wbg_ptr)
      }
      nW(FF) {
        const WF = kS.DfFr(this.__wbg_ptr, FF);
        if (WF[3]) throw EW(WF[2]);
        var SF = BF(WF[0], WF[1]).slice();
        return kS.HLZN(WF[0], 1 * WF[1], 1), SF
      }
      evict(FF, WF) {
        return kS.SGGI(this.__wbg_ptr, FF, WF) >>> 0
      }
      HW() {
        kS.fMzP(this.__wbg_ptr)
      }
      KW(FF, WF, SF) {
        kS.VBXU(this.__wbg_ptr, FF, WF, SF)
      }
      wW(FF) {
        const WF = kS.IsrO(this.__wbg_ptr, FF);
        if (WF[1]) throw EW(WF[0])
      }
      XW() {
        return kS.gZBP(this.__wbg_ptr) >>> 0
      }
      UW() {
        return kS.zSet(this.__wbg_ptr) >>> 0
      }
      BW(FF, WF, SF) {
        kS.lpfb(this.__wbg_ptr, FF, WF, SF)
      }
      jS(FF, WF, SF) {
        kS.BfYw(this.__wbg_ptr, FF, WF, SF)
      }
      vS() {
        return kS.E478(this.__wbg_ptr) >>> 0
      }
      JW() {
        return kS.FpS5(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const FF = kS.HPLz();
        return this.__wbg_ptr = FF, fF.register(this, this.__wbg_ptr, this), this
      }
      static pW() {
        const FF = kS.bWJN();
        return dF.__wrap(FF)
      }
      lW() {
        return kS.Kcyq(this.__wbg_ptr) >>> 0
      }
      FS() {
        return kS.bFkz(this.__wbg_ptr) >>> 0
      }
      WS(FF, WF, SF, CF) {
        const AF = kS.PcD2(this.__wbg_ptr, FF, WF, SF, CF);
        if (AF[1]) throw EW(AF[0])
      }
      SS() {
        return kS.tkMJ(this.__wbg_ptr) >>> 0
      }
      CS() {
        return kS.ucfW(this.__wbg_ptr) >>> 0
      }
      AS(FF, WF, SF, CF) {
        kS.H83Y(this.__wbg_ptr, FF, WF, SF, CF)
      }
      uS(FF) {
        kS.l040(this.__wbg_ptr, FF)
      }
      bC(FF, WF, SF, CF, AF) {
        const uF = RW(WF, kS.Kvxk),
          hF = qS,
          bW = PW(SF, kS.Kvxk),
          dF = qS,
          PF = iS(CF, kS.Kvxk),
          RF = qS,
          iW = kS.Dahh(this.__wbg_ptr, FF, uF, hF, bW, dF, PF, RF, AF);
        if (iW[1]) throw EW(iW[0])
      }
      hS(FF, WF, SF, CF) {
        const AF = RW(FF, kS.Kvxk),
          uF = qS,
          hF = PW(WF, kS.Kvxk),
          bW = qS,
          dF = iS(SF, kS.Kvxk),
          PF = qS,
          RF = RW(CF, kS.Kvxk),
          iW = qS,
          eF = kS.KHPx(this.__wbg_ptr, AF, uF, hF, bW, dF, PF, RF, iW);
        if (eF[1]) throw EW(eF[0])
      }
      ES(FF) {
        const WF = RW(FF, kS.Kvxk),
          SF = qS,
          CF = kS.era1(this.__wbg_ptr, WF, SF);
        if (CF[1]) throw EW(CF[0])
      }
      QS() {
        return kS.fZ9s(this.__wbg_ptr) >>> 0
      }
      rC(FF) {
        const WF = kS.q1qO(this.__wbg_ptr, FF);
        if (WF[2]) throw EW(WF[1]);
        return WF[0] >>> 0
      }
      steer() {
        return kS.ifyU(this.__wbg_ptr) >>> 0
      }
      gC() {
        const FF = kS.Tl5a(this.__wbg_ptr);
        var WF = XF(FF[0], FF[1]).slice();
        return kS.HLZN(FF[0], 8 * FF[1], 8), WF
      }
      tC() {
        return kS.kS73(this.__wbg_ptr) >>> 0
      }
      tS() {
        const FF = kS.fnaN(this.__wbg_ptr);
        var WF, SF, CF = (WF = FF[0], SF = FF[1], WF >>>= 0, (null !== JF && 0 !== JF.byteLength || (JF = new Int32Array(kS.memory.buffer)), JF).subarray(WF / 4, WF / 4 + SF)).slice();
        return kS.HLZN(FF[0], 4 * FF[1], 4), CF
      }
    }
    Symbol.dispose && (dF.prototype[Symbol.dispose] = dF.prototype.free);
    class PF {
      __destroy_into_raw() {
        const FF = this.__wbg_ptr;
        return this.__wbg_ptr = 0, yW.unregister(this), FF
      }
      free() {
        const FF = this.__destroy_into_raw();
        kS.RBT9(FF, 0)
      }
      aC(FF) {
        const WF = PW(FF, kS.Kvxk),
          SF = qS,
          CF = kS.k1NY(this.__wbg_ptr, WF, SF);
        if (CF[1]) throw EW(CF[0])
      }
      kC() {
        return kS.s8dd(this.__wbg_ptr) >>> 0
      }
      qC() {
        return kS.xBtN(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const FF = kS.HGeb();
        return this.__wbg_ptr = FF, yW.register(this, this.__wbg_ptr, this), this
      }
      run(FF, WF) {
        wF(FF, dF);
        const SF = kS.lRc7(this.__wbg_ptr, FF.__wbg_ptr, WF);
        if (SF[2]) throw EW(SF[1]);
        return SF[0] >>> 0
      }
      VS(FF) {
        const WF = PW(FF, kS.Kvxk),
          SF = qS;
        kS.P9Jy(this.__wbg_ptr, WF, SF)
      }
      NS(FF) {
        const WF = PW(FF, kS.Kvxk),
          SF = qS;
        kS.Ibx5(this.__wbg_ptr, WF, SF)
      }
    }
    Symbol.dispose && (PF.prototype[Symbol.dispose] = PF.prototype.free);
    class RF {
      __destroy_into_raw() {
        const FF = this.__wbg_ptr;
        return this.__wbg_ptr = 0, sF.unregister(this), FF
      }
      free() {
        const FF = this.__destroy_into_raw();
        kS.NxcH(FF, 0)
      }
      LS(FF, WF) {
        const SF = RW(FF, kS.Kvxk),
          CF = qS;
        return kS.WdHH(this.__wbg_ptr, SF, CF, WF) >>> 0
      }
      mC(FF, WF, SF) {
        wF(FF, dF);
        const CF = RW(SF, kS.Kvxk),
          AF = qS,
          uF = kS.EtOa(this.__wbg_ptr, FF.__wbg_ptr, WF, CF, AF);
        if (uF[2]) throw EW(uF[1]);
        return uF[0] >>> 0
      }
      DS(FF) {
        return kS.c53O(this.__wbg_ptr, FF) >>> 0
      }
      constructor() {
        const FF = kS.PmUL();
        return this.__wbg_ptr = FF, sF.register(this, this.__wbg_ptr, this), this
      }
      scan(FF, WF) {
        wF(FF, dF);
        const SF = kS.s3Kv(this.__wbg_ptr, FF.__wbg_ptr, WF);
        if (SF[2]) throw EW(SF[1]);
        return SF[0] >>> 0
      }
      ZS(FF) {
        const WF = RW(FF, kS.Kvxk),
          SF = qS;
        kS.JwwH(this.__wbg_ptr, WF, SF)
      }
      xC() {
        return kS.K2bo(this.__wbg_ptr) >>> 0
      }
      OS() {
        return kS.f18M(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (RF.prototype[Symbol.dispose] = RF.prototype.free);
    class iW {
      __destroy_into_raw() {
        const FF = this.__wbg_ptr;
        return this.__wbg_ptr = 0, nF.unregister(this), FF
      }
      free() {
        const FF = this.__destroy_into_raw();
        kS.anap(FF, 0)
      }
      YS(FF) {
        const WF = kS.Tyec(this.__wbg_ptr, FF);
        if (WF[2]) throw EW(WF[1]);
        return WF[0] >>> 0
      }
      compute(FF, WF, SF, CF) {
        var AF = bS(CF) ? 0 : eW(CF, kS.Kvxk, kS.CHPd),
          uF = qS;
        const hF = kS.NPFN(this.__wbg_ptr, FF, bS(WF) ? Number.MAX_SAFE_INTEGER : WF | 0, SF, AF, uF);
        if (hF[2]) throw EW(hF[1]);
        return hF[0] >>> 0
      }
      cC(FF) {
        const WF = eW(FF, kS.Kvxk, kS.CHPd),
          SF = qS;
        kS.LtYA(this.__wbg_ptr, WF, SF)
      }
      GS() {
        return kS.VLp1(this.__wbg_ptr)
      }
      zC(FF) {
        return kS.FxXd(this.__wbg_ptr, FF) >>> 0
      }
      IS() {
        return kS.BZdU(this.__wbg_ptr) >>> 0
      }
      fS() {
        return kS.M90a(this.__wbg_ptr) >>> 0
      }
      yC(FF, WF) {
        const SF = kS.nGSE(this.__wbg_ptr, FF, WF);
        if (SF[1]) throw EW(SF[0])
      }
      nS() {
        return kS.qLYl(this.__wbg_ptr) >>> 0
      }
      HS() {
        return kS.rHYE(this.__wbg_ptr) >>> 0
      }
      KS() {
        return kS.M7tl(this.__wbg_ptr) >>> 0
      }
      MS(FF, WF, SF) {
        const CF = PW(FF, kS.Kvxk),
          AF = qS,
          uF = PW(WF, kS.Kvxk),
          hF = qS,
          bW = kS.Yvfm(this.__wbg_ptr, CF, AF, uF, hF, SF);
        if (bW[1]) throw EW(bW[0])
      }
      XS() {
        return kS.E16Z(this.__wbg_ptr) >>> 0
      }
      mesh(FF, WF, SF, CF, AF) {
        const uF = kS.FdTt(this.__wbg_ptr, FF, WF, SF, CF, AF);
        if (uF[2]) throw EW(uF[1]);
        return uF[0] >>> 0
      }
      constructor(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF, RF, iW, eF, EF, QF, rW, gW, tW, TF, aW) {
        const kW = dW(FF, kS.Kvxk),
          qW = qS,
          VF = iS(WF, kS.Kvxk),
          NF = qS,
          DF = PW(SF, kS.Kvxk),
          LF = qS,
          mW = RW(CF, kS.Kvxk),
          OF = qS,
          xW = RW(AF, kS.Kvxk),
          ZF = qS,
          oF = PW(uF, kS.Kvxk),
          YF = qS,
          MF = PW(hF, kS.Kvxk),
          cW = qS,
          GF = iS(bW, kS.Kvxk),
          zW = qS,
          IF = iS(dF, kS.Kvxk),
          fF = qS,
          yW = RW(PF, kS.Kvxk),
          sF = qS;
        var HF = bS(RF) ? 0 : dW(RF, kS.Kvxk),
          KF = qS;
        const wF = PW(iW, kS.Kvxk),
          XF = qS,
          UF = RW(eF, kS.Kvxk),
          BF = qS;
        var jW = bS(EF) ? 0 : RW(EF, kS.Kvxk),
          vW = qS;
        const JF = iS(QF, kS.Kvxk),
          pF = qS,
          lF = kS.aGIs(kW, qW, VF, NF, DF, LF, mW, OF, xW, ZF, oF, YF, MF, cW, GF, zW, IF, fF, yW, sF, HF, KF, wF, XF, UF, BF, jW, vW, JF, pF, rW, gW, tW, TF, aW);
        if (lF[2]) throw EW(lF[1]);
        return this.__wbg_ptr = lF[0], nF.register(this, this.__wbg_ptr, this), this
      }
      wS(FF, WF) {
        const SF = PW(FF, kS.Kvxk),
          CF = qS,
          AF = kS.txZH(this.__wbg_ptr, SF, CF, WF);
        if (AF[3]) throw EW(AF[2]);
        var uF = BF(AF[0], AF[1]).slice();
        return kS.HLZN(AF[0], 1 * AF[1], 1), uF
      }
      US(FF) {
        kS.GnKH(this.__wbg_ptr, bS(FF) ? 16777215 : FF)
      }
      BS(FF) {
        return kS.yYbS(this.__wbg_ptr, FF) >>> 0
      }
      vC() {
        return kS.F5Ye(this.__wbg_ptr) >>> 0
      }
      jC() {
        const FF = kS.tES4(this.__wbg_ptr);
        if (FF[2]) throw EW(FF[1]);
        return 0 !== FF[0]
      }
      pS() {
        return kS.zGD4(this.__wbg_ptr) >>> 0
      }
      lS() {
        return kS.Xp4Y(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (iW.prototype[Symbol.dispose] = iW.prototype.free);
    class eF {
      __destroy_into_raw() {
        const FF = this.__wbg_ptr;
        return this.__wbg_ptr = 0, HF.unregister(this), FF
      }
      free() {
        const FF = this.__destroy_into_raw();
        kS.ayPm(FF, 0)
      }
      compute(FF, WF, SF, CF) {
        var AF = bS(CF) ? 0 : eW(CF, kS.Kvxk, kS.CHPd),
          uF = qS;
        const hF = kS.ZrFL(this.__wbg_ptr, FF, bS(WF) ? Number.MAX_SAFE_INTEGER : WF | 0, SF, AF, uF);
        if (hF[2]) throw EW(hF[1]);
        return hF[0] >>> 0
      }
      cC(FF) {
        const WF = eW(FF, kS.Kvxk, kS.CHPd),
          SF = qS;
        kS.g0IU(this.__wbg_ptr, WF, SF)
      }
      HS() {
        return kS.CBMc(this.__wbg_ptr) >>> 0
      }
      KS() {
        return kS.UWMr(this.__wbg_ptr) >>> 0
      }
      FC(FF) {
        const WF = kS.KQMp(this.__wbg_ptr, FF);
        if (WF[2]) throw EW(WF[1]);
        return WF[0] >>> 0
      }
      constructor(FF, WF, SF, CF, AF, uF) {
        const hF = dW(FF, kS.Kvxk),
          bW = qS,
          dF = iS(WF, kS.Kvxk),
          PF = qS,
          RF = PW(SF, kS.Kvxk),
          iW = qS,
          eF = RW(CF, kS.Kvxk),
          EF = qS,
          QF = kS.D1NS(hF, bW, dF, PF, RF, iW, eF, EF, AF, uF);
        if (QF[2]) throw EW(QF[1]);
        return this.__wbg_ptr = QF[0], HF.register(this, this.__wbg_ptr, this), this
      }
      vC() {
        return kS.m83O(this.__wbg_ptr) >>> 0
      }
      jC() {
        const FF = kS.DJdq(this.__wbg_ptr);
        if (FF[2]) throw EW(FF[1]);
        return 0 !== FF[0]
      }
      pS() {
        return kS.A2Xl(this.__wbg_ptr) >>> 0
      }
    }

    function EF() {
      const FF = kS.GnnD();
      var WF = UF(FF[0], FF[1]).slice();
      return kS.HLZN(FF[0], 4 * FF[1], 4), WF
    }

    function QF(FF, WF) {
      let SF, CF;
      try {
        const AF = dW(FF, kS.Kvxk),
          uF = qS,
          hF = eW(WF, kS.Kvxk, kS.CHPd),
          bW = qS,
          dF = kS.DDhy(AF, uF, hF, bW);
        return SF = dF[0], CF = dF[1], pF(dF[0], dF[1])
      } finally {
        kS.HLZN(SF, CF, 1)
      }
    }

    function rW() {
      const FF = kS.yrbu();
      var WF = UF(FF[0], FF[1]).slice();
      return kS.HLZN(FF[0], 4 * FF[1], 4), WF
    }

    function gW(FF) {
      return 0 !== kS.HZRg(FF)
    }

    function tW(FF, WF) {
      const SF = eW(FF, kS.Kvxk, kS.CHPd),
        CF = qS,
        AF = kS.nccj(SF, CF, WF);
      if (AF[1]) throw EW(AF[0])
    }

    function TF() {
      kS.dEdg()
    }

    function aW() {
      return kS.SWY4() >>> 0
    }

    function kW(FF) {
      return 0 !== kS.na18(FF)
    }

    function qW(FF) {
      return 0 !== kS.cI8s(FF)
    }

    function VF(FF) {
      kS.r9p8(FF)
    }

    function NF() {
      return kS.lDhT() >>> 0
    }

    function DF() {
      return kS.Ouyv() >>> 0
    }

    function LF() {
      return 0 !== kS.shTb()
    }

    function mW() {
      const FF = kS.d1z5();
      var WF = UF(FF[0], FF[1]).slice();
      return kS.HLZN(FF[0], 4 * FF[1], 4), WF
    }

    function OF() {
      const FF = kS.MUNA();
      var WF = UF(FF[0], FF[1]).slice();
      return kS.HLZN(FF[0], 4 * FF[1], 4), WF
    }

    function xW() {
      const FF = kS.oJpH();
      var WF = UF(FF[0], FF[1]).slice();
      return kS.HLZN(FF[0], 4 * FF[1], 4), WF
    }

    function ZF() {
      return kS.GAuG() >>> 0
    }

    function oF() {
      kS.l7uN()
    }

    function YF() {
      let FF, WF;
      try {
        const SF = kS.g4QJ();
        return FF = SF[0], WF = SF[1], pF(SF[0], SF[1])
      } finally {
        kS.HLZN(FF, WF, 1)
      }
    }

    function MF(FF) {
      kS.NKtD(KF(FF))
    }

    function cW() {
      return {
        __proto__: null,
        JHNl: {
          __proto__: null,
          bX3s: function(FF, WF) {
            return KF(Error(pF(FF, WF)))
          },
          Kmne: function(FF, WF) {
            throw new Error(pF(FF, WF))
          },
          LuJT: function(FF) {
            AW(FF).call()
          },
          hfBu: function(FF, WF) {
            console.error(pF(FF, WF))
          },
          StmE: function() {
            return performance.now()
          },
          pAtr: function(FF) {
            EW(FF)
          }
        }
      }
    }
    Symbol.dispose && (eF.prototype[Symbol.dispose] = eF.prototype.free);
    const GF = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((FF => kS.nFU9(FF, 1))),
      zW = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((FF => kS.Wkdq(FF, 1))),
      IF = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((FF => kS.GhVT(FF, 1))),
      fF = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((FF => kS.YdYs(FF, 1))),
      yW = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((FF => kS.RBT9(FF, 1))),
      sF = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((FF => kS.NxcH(FF, 1))),
      nF = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((FF => kS.anap(FF, 1))),
      HF = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((FF => kS.ayPm(FF, 1)));

    function KF(FF) {
      hW === uW.length && uW.push(uW.length + 1);
      const WF = hW;
      return hW = uW[WF], uW[WF] = FF, WF
    }

    function wF(FF, WF) {
      if (!(FF instanceof WF)) throw new Error(`expected instance of ${WF.name}`)
    }

    function XF(FF, WF) {
      return FF >>>= 0, vW().subarray(FF / 8, FF / 8 + WF)
    }

    function UF(FF, WF) {
      return FF >>>= 0, WW().subarray(FF / 4, FF / 4 + WF)
    }

    function BF(FF, WF) {
      return FF >>>= 0, CW().subarray(FF / 1, FF / 1 + WF)
    }
    let jW = null;

    function vW() {
      return null !== jW && 0 !== jW.byteLength || (jW = new Float64Array(kS.memory.buffer)), jW
    }
    let JF = null;

    function pF(FF, WF) {
      return function(FF, WF) {
        gS += WF, gS >= rS && (QW = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), QW.decode(), gS = WF);
        return QW.decode(CW().subarray(FF, FF + WF))
      }(FF >>> 0, WF)
    }
    let lF = null;
    let FW = null;

    function WW() {
      return null !== FW && 0 !== FW.byteLength || (FW = new Uint32Array(kS.memory.buffer)), FW
    }
    let SW = null;

    function CW() {
      return null !== SW && 0 !== SW.byteLength || (SW = new Uint8Array(kS.memory.buffer)), SW
    }

    function AW(FF) {
      return uW[FF]
    }
    let uW = new Array(1024).fill(void 0);
    uW.push(void 0, null, !0, !1);
    let hW = uW.length;

    function bS(FF) {
      return void 0 === FF || null === FF
    }

    function dW(FF, WF) {
      const SF = WF(2 * FF.length, 2) >>> 0;
      return (null !== lF && 0 !== lF.byteLength || (lF = new Uint16Array(kS.memory.buffer)), lF).set(FF, SF / 2), qS = FF.length, SF
    }

    function PW(FF, WF) {
      const SF = WF(4 * FF.length, 4) >>> 0;
      return WW().set(FF, SF / 4), qS = FF.length, SF
    }

    function RW(FF, WF) {
      const SF = WF(1 * FF.length, 1) >>> 0;
      return CW().set(FF, SF / 1), qS = FF.length, SF
    }

    function iS(FF, WF) {
      const SF = WF(8 * FF.length, 8) >>> 0;
      return vW().set(FF, SF / 8), qS = FF.length, SF
    }

    function eW(FF, WF, SF) {
      if (void 0 === SF) {
        const SF = tS.encode(FF),
          CF = WF(SF.length, 1) >>> 0;
        return CW().subarray(CF, CF + SF.length).set(SF), qS = SF.length, CF
      }
      let CF = FF.length,
        AF = WF(CF, 1) >>> 0;
      const uF = CW();
      let hF = 0;
      for (; hF < CF; hF++) {
        const WF = FF.charCodeAt(hF);
        if (WF > 127) break;
        uF[AF + hF] = WF
      }
      if (hF !== CF) {
        0 !== hF && (FF = FF.slice(hF)), AF = SF(AF, CF, CF = hF + 3 * FF.length, 1) >>> 0;
        const WF = CW().subarray(AF + hF, AF + CF);
        hF += tS.encodeInto(FF, WF).written, AF = SF(AF, CF, hF, 1) >>> 0
      }
      return qS = hF, AF
    }

    function EW(FF) {
      const WF = AW(FF);
      return function(FF) {
        FF < 1028 || (uW[FF] = hW, hW = FF)
      }(FF), WF
    }
    let QW = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    QW.decode();
    const rS = 2146435072;
    let gS = 0;
    const tS = new TextEncoder;
    "encodeInto" in tS || (tS.encodeInto = function(FF, WF) {
      const SF = tS.encode(FF);
      return WF.set(SF), {
        read: FF.length,
        written: SF.length
      }
    });
    let TW, aS, kS, qS = 0;

    function VW(FF, WF) {
      return aS = FF, kS = FF.exports, TW = WF, jW = null, JF = null, lF = null, FW = null, SW = null, kS.IBMO(), kS
    }

    function NW(FF) {
      if (void 0 !== kS) return kS;
      void 0 !== FF && (Object.getPrototypeOf(FF) === Object.prototype ? ({
        module: FF
      } = FF) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const WF = cW();
      FF instanceof WebAssembly.Module || (FF = new WebAssembly.Module(FF));
      return VW(new WebAssembly.Instance(FF, WF), FF)
    }
    async function DW(FF) {
      if (void 0 !== kS) return kS;
      void 0 !== FF && (Object.getPrototypeOf(FF) === Object.prototype ? ({
        module_or_path: FF
      } = FF) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const WF = cW();
      ("string" === typeof FF || "function" === typeof Request && FF instanceof Request || "function" === typeof URL && FF instanceof URL) && (FF = fetch(FF));
      const {
        instance: SF,
        module: CF
      } = await async function(FF, WF) {
        if ("function" === typeof Response && FF instanceof Response) {
          if (!FF.ok) throw new Error(`failed to fetch Wasm: ${FF.status} ${FF.statusText} fetching '${FF.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(FF, WF)
          } catch (SF) {
            if (! function(FF) {
                switch (FF) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(FF.type) || "application/wasm" === FF.headers.get("Content-Type")) throw SF;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", SF)
          }
          const CF = await FF.arrayBuffer();
          return await WebAssembly.instantiate(CF, WF)
        } {
          const SF = await WebAssembly.instantiate(FF, WF);
          return SF instanceof WebAssembly.Instance ? {
            instance: SF,
            module: FF
          } : SF
        }
      }(await FF, WF);
      return VW(SF, CF)
    }
    var LW = SF(2903),
      mS = SF(34921);
    const OW = {
      name: LW.e,
      url: () => new SF.U(SF(34923)),
      init: DW,
      uC: CF
    };

    function xS() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OW,
        WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OW,
        SF = arguments.length > 2 ? arguments[2] : void 0;
      return (0, mS.i)(FF, WF, SF)
    }

    function ZW(FF) {
      return (0, LW.N)((() => FF), CF, OW)
    }
  },
  5592: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF
    });
    var CF = SF(2906);
    const AF = {
      bloxd_wasm: () => "efcb444ad55054c75697ffc5686b17c1e3eb879bb002e111d264400e5de1a7ef",
      bloxd_wasm_client: () => "65255c90568b92887cb7530f65eed7c264bd4d50f08bc9bc108e00e98823fda1",
      bloxd_wasm_workers: () => "2cf8c5bb27543bd4c7dd6eabc3ff93edf11951f5cdb3a91906a467fc555106a3",
      bloxd_wasm_models: () => "a35d9de38e3cf77c5e0fd6302e8d6441c7b74c8d7bbbc2107b391ee98e2a8705",
      bloxd_wasm_webgpu: () => "4651122938542673b8d1bb5182e5a3e9ea54388c7db91adaeb4e878c90357e28",
      bloxd_wasm_webgl: () => "2da9697d5fa07af2fa6a6c154de5747af69b0b82f9d43c42e23748cb38e5d792",
      bloxd_wasm_webgl1: () => "3291109b80221408283e1499ae815394058938b8c353b9666d4b000ec38111b5",
      bloxd_wasm_replay: () => "fbae3a18b4e1534e284a9b41c64ea1f4ca46295ede9f96f6f2eb289bfbc00eb7",
      bloxd_wasm_recorder: () => "4da07565cbac43c165e972a237929edb5cb5009240c5c6feb67a3d80d0a13d20",
      bloxd_wasm_anim: () => "92ff8c8ca8cb8ec6f988da657ebcbaa7cc34b2565776af355950e873d8dba0ec",
      bloxd_wasm_textures: () => "87d7ce2c083790ea891ab410fab82340e4cae9ea4816c1f40ed5a2411f277fef",
      bloxd_wasm_shader_pack: () => "0618b025e02df188195cc584c0eaec51b0034deee6589ca394e966c72f4d3bfa"
    };
    var uF = SF(5597);

    function hF(FF) {
      const WF = Object.prototype.hasOwnProperty.call(AF, FF) ? AF[FF]() : void 0;
      if (void 0 !== WF) return {
        sha256: WF,
        onMismatch: uF.x
      };
      throw new CF.g(`${FF} has no release digest, so this build refuses it`)
    }
  },
  34899: (FF, WF, SF) => {
    function CF(FF, WF) {
      return new Error(`${FF}: ${WF instanceof Error?`${WF.name}: ${WF.message}`:String(WF)}`, {
        cause: WF
      })
    }
    SF.d(WF, {
      d: () => CF
    })
  },
  34892: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF,
      f: () => dF
    });
    var CF = SF(2906),
      AF = SF(5592),
      uF = SF(34899);

    function hF() {
      return new URL(new SF.U(SF(34906)).href, globalThis.location?.href).href
    }
    let bW = null;

    function dF() {
      return bW ??= (async () => (0, CF.w)(new URL(hF()), (0, AF.c)("bloxd_wasm_textures")))().catch((FF => {
        throw (0, uF.d)((0, CF.C)(FF), FF)
      })), bW
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);