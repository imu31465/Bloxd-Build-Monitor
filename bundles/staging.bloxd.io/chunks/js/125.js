export const id = 125;
export const ids = [125, 192];
export const modules = {
  35414: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      reportCappedWasmFailure: () => XJ,
      reportWasmFailure: () => eJ
    });
    var FJ = ZJ(2710);
    const UJ = FJ.d - 4;

    function eJ(JJ, cJ, ZJ) {
      (0, FJ.h)(JJ, cJ, ZJ, !1)
    }

    function XJ(JJ, cJ, ZJ) {
      (0, FJ.h)(JJ, cJ, ZJ, !1, UJ)
    }
  },
  35405: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => nJ,
      c: () => xJ,
      f: () => rJ,
      j: () => GJ
    });
    var FJ = ZJ(35417),
      UJ = ZJ(3178),
      eJ = ZJ(35436),
      XJ = ZJ(3183),
      AJ = ZJ(35414),
      qJ = ZJ(2484),
      jJ = ZJ(2731),
      YJ = ZJ(2702),
      hJ = ZJ(3059);
    const DJ = "bloxdWasmFailureReported";

    function sJ() {
      return "undefined" === typeof WebAssembly
    }

    function nJ() {
      return (0, FJ.f)()
    }

    function GJ() {
      if (sJ()) return "this browser has no WebAssembly";
      const JJ = (0, UJ.r)();
      return "compile" === JJ || "instantiate" === JJ ? `the core wasm didn't load here (${(0,UJ.j)()})` : null
    }
    async function fJ(JJ) {
      return await (0, eJ.f)(eJ.d, void 0, JJ)
    }

    function xJ() {
      sJ() || (0, hJ.e)((() => {
        fJ()
      }))
    }

    function rJ() {
      if (sJ()) return async () => ((0, qJ.i)("unsupported", 0), vJ("unsupported", "This browser has no WebAssembly"), !1);
      const JJ = {
        reloadFailedDownload: !0
      };
      return fJ(JJ), async () => {
        var cJ;
        const ZJ = performance.now();
        await fJ(JJ);
        const FJ = (performance.now() - ZJ) / 1e3;
        if ((0, UJ.P)()) return (0, qJ.i)("ready", FJ), (0, XJ.S)(eJ.d.url()) && (0, AJ.reportCappedWasmFailure)("wasm_load", jJ.e.message, jJ.e.code), !0;
        const hJ = YJ.d[null !== (cJ = (0, UJ.r)()) && void 0 !== cJ ? cJ : "call"];
        return (0, qJ.i)(hJ, FJ), vJ(hJ, (0, UJ.j)()), !1
      }
    }

    function vJ(JJ, cJ) {
      (0, YJ.h)(DJ, `Bloxd wasm ${JJ}, so the game can't start: ${cJ}`, cJ, JJ)
    }
  },
  35452: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/bloxd_wasm_bg.d6cb02368a1f50c0df7d.wasm"
  },
  35428: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/bloxd_wasm_textures_bg.91449dd66a7e88721c00.wasm"
  },
  35441: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => DJ,
      i: () => YJ
    });
    var FJ = ZJ(3178),
      UJ = ZJ(3190),
      eJ = ZJ(5963),
      XJ = ZJ(5971),
      AJ = ZJ(35447);
    let qJ = null,
      jJ = !1;

    function YJ(JJ, cJ, ZJ) {
      return null === qJ ? qJ = hJ(JJ, cJ, ZJ?.priority) : JJ !== qJ.build ? console.warn(`Bloxd wasm: ${JJ.name} was asked for after ${qJ.build.name} started loading, which this thread keeps`) : cJ.name !== qJ.workers.name && console.warn(`Bloxd wasm: ${cJ.name} was asked for workers after ${qJ.workers.name}, which this thread keeps`), ZJ?.reloadFailedDownload && !jJ && (0, FJ.X)() && (jJ = !0, qJ = hJ(qJ.build, qJ.workers)), qJ.loaded
    }

    function hJ(JJ, cJ, ZJ) {
      const eJ = (0, FJ.H)((async () => {
        (0, XJ.u)();
        const FJ = sJ(JJ, ZJ),
          eJ = cJ.name === JJ.name ? FJ : sJ(cJ, ZJ);
        await (0, UJ.f)([FJ, eJ]);
        const AJ = await FJ,
          qJ = await eJ;
        return (0, XJ.u)(), {
          module: AJ,
          workerModule: qJ
        }
      }), JJ);
      return {
        build: JJ,
        workers: cJ,
        loaded: eJ
      }
    }
    async function DJ(JJ) {
      return sJ(JJ)
    }

    function sJ(JJ, cJ) {
      return (0, AJ.c)(JJ, (0, eJ.e)(JJ.name), cJ)
    }
  },
  35436: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => Ic,
      f: () => Mc,
      g: () => bc
    });
    var FJ = {};
    ZJ.r(FJ), ZJ.d(FJ, {
      WY: () => UJ,
      EnvelopeKind: () => eJ,
      gY: () => XJ,
      PhysicsEngine: () => AJ,
      HY: () => qJ,
      PY: () => jJ,
      kY: () => YJ,
      pY: () => hJ,
      dY: () => DJ,
      zY: () => sJ,
      NY: () => nJ,
      OY: () => GJ,
      TY: () => fJ,
      CY: () => xJ,
      default: () => Kc,
      initSync: () => Vc,
      uY: () => rJ,
      iY: () => vJ,
      RY: () => mJ,
      LY: () => QJ,
      aY: () => EJ,
      BY: () => VJ,
      tY: () => KJ,
      oY: () => yJ,
      lY: () => SJ,
      Jh: () => IJ,
      Zh: () => MJ,
      Fh: () => bJ,
      Uh: () => wJ,
      eh: () => WJ,
      Xh: () => gJ
    });
    class UJ {
      __destroy_into_raw() {
        const JJ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, PJ.unregister(this), JJ
      }
      free() {
        const JJ = this.__destroy_into_raw();
        mc.b8CL(JJ, 0)
      }
      Ah() {
        const JJ = mc.Akzp(this.__wbg_ptr);
        if (JJ[2]) throw sc(JJ[1]);
        return JJ[0] >>> 0
      }
      qh() {
        return mc.skNI(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const JJ = mc.Raxv();
        return this.__wbg_ptr = JJ, PJ.register(this, this.__wbg_ptr, this), this
      }
      jh() {
        return mc.RTqK(this.__wbg_ptr) >>> 0
      }
      Yh(JJ) {
        const cJ = mc.dDSE(this.__wbg_ptr, JJ);
        if (cJ[2]) throw sc(cJ[1]);
        return cJ[0] >>> 0
      }
      hh(JJ) {
        const cJ = mc.bDgb(this.__wbg_ptr, JJ);
        if (cJ[2]) throw sc(cJ[1]);
        return cJ[0] >>> 0
      }
    }
    Symbol.dispose && (UJ.prototype[Symbol.dispose] = UJ.prototype.free);
    const eJ = Object.freeze({
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
    class XJ {
      __destroy_into_raw() {
        const JJ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, kJ.unregister(this), JJ
      }
      free() {
        const JJ = this.__destroy_into_raw();
        mc.BFf0(JJ, 0)
      }
      nh(JJ, cJ) {
        const ZJ = mc.g2v6(this.__wbg_ptr, JJ, cJ);
        if (ZJ[2]) throw sc(ZJ[1]);
        return ZJ[0] >>> 0
      }
      Gh(JJ) {
        const cJ = mc.sS0S(this.__wbg_ptr, JJ);
        if (cJ[2]) throw sc(cJ[1]);
        return cJ[0] >>> 0
      }
      xh() {
        mc.pvEy(this.__wbg_ptr)
      }
      static rh() {
        return mc.id8F() >>> 0
      }
      mh() {
        return mc.K0Un(this.__wbg_ptr) >>> 0
      }
      Qh() {
        const JJ = mc.adq0(this.__wbg_ptr);
        return 0 === JJ[0] ? void 0 : JJ[1]
      }
      Eh() {
        return mc.CUS4(this.__wbg_ptr) >>> 0
      }
      Vh() {
        return mc.qOQw(this.__wbg_ptr) >>> 0
      }
      static sh() {
        return mc.VChA() >>> 0
      }
      constructor() {
        const JJ = mc.ZCYM();
        return this.__wbg_ptr = JJ, kJ.register(this, this.__wbg_ptr, this), this
      }
      Kh() {
        return mc.IF5D(this.__wbg_ptr) >>> 0
      }
      yh() {
        return mc.usr7(this.__wbg_ptr) >>> 0
      }
      Sh() {
        return mc.VzC9(this.__wbg_ptr) >>> 0
      }
      Dh(JJ) {
        return mc.Z3w0(this.__wbg_ptr, JJ) >>> 0
      }
      reserve(JJ, cJ) {
        const ZJ = mc.ch8C(this.__wbg_ptr, JJ, cJ);
        if (ZJ[1]) throw sc(ZJ[0])
      }
      bh(JJ, cJ) {
        const ZJ = jc(JJ, mc.P3EW),
          FJ = Qc;
        mc.GU3m(this.__wbg_ptr, ZJ, FJ, cJ)
      }
      text() {
        let JJ, cJ;
        try {
          const ZJ = mc.hq0T(this.__wbg_ptr);
          return JJ = ZJ[0], cJ = ZJ[1], oJ(ZJ[0], ZJ[1])
        } finally {
          mc.DGph(JJ, cJ, 1)
        }
      }
    }
    Symbol.dispose && (XJ.prototype[Symbol.dispose] = XJ.prototype.free);
    class AJ {
      __destroy_into_raw() {
        const JJ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, pJ.unregister(this), JJ
      }
      free() {
        const JJ = this.__destroy_into_raw();
        mc.YuqN(JJ, 0)
      }
      gh(JJ, cJ) {
        uJ(cJ, UJ);
        const ZJ = mc.kjAs(this.__wbg_ptr, JJ, cJ.__wbg_ptr);
        if (ZJ[2]) throw sc(ZJ[1]);
        return ZJ[0] >>> 0
      }
      Ph() {
        const JJ = mc.A4hV(this.__wbg_ptr);
        if (JJ[1]) throw sc(JJ[0])
      }
      Nh(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, jJ, YJ, hJ) {
        uJ(JJ, qJ);
        const DJ = mc.JH1T(this.__wbg_ptr, JJ.__wbg_ptr, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, jJ, YJ, hJ);
        if (DJ[2]) throw sc(DJ[1]);
        return DJ[0]
      }
      Oh() {
        const JJ = mc.uFOv(this.__wbg_ptr);
        var cJ = iJ(JJ[0], JJ[1]).slice();
        return mc.DGph(JJ[0], 8 * JJ[1], 8), cJ
      }
      Th() {
        return mc.rx80(this.__wbg_ptr) >>> 0
      }
      Ch() {
        return mc.wasp(this.__wbg_ptr) >>> 0
      }
      uh() {
        return mc.IR9V(this.__wbg_ptr) >>> 0
      }
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
        const qJ = mc.eEuk(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ);
        if (qJ[2]) throw sc(qJ[1]);
        return this.__wbg_ptr = qJ[0], pJ.register(this, this.__wbg_ptr, this), this
      }
      Lh(JJ) {
        uJ(JJ, UJ);
        const cJ = mc.dpGv(this.__wbg_ptr, JJ.__wbg_ptr);
        if (cJ[2]) throw sc(cJ[1]);
        return cJ[0] >>> 0
      }
      ah(JJ) {
        const cJ = mc.culY(this.__wbg_ptr, JJ);
        if (cJ[1]) throw sc(cJ[0])
      }
      Bh() {
        return mc.YTqn(this.__wbg_ptr) >>> 0
      }
      resume(JJ, cJ) {
        uJ(JJ, qJ), uJ(cJ, UJ);
        const ZJ = mc.bwer(this.__wbg_ptr, JJ.__wbg_ptr, cJ.__wbg_ptr);
        if (ZJ[2]) throw sc(ZJ[1]);
        return ZJ[0] >>> 0
      }
      FD(JJ) {
        const cJ = mc.nuRc(this.__wbg_ptr, JJ);
        if (cJ[1]) throw sc(cJ[0])
      }
      XD(JJ, cJ) {
        uJ(cJ, UJ);
        const ZJ = mc.ICVJ(this.__wbg_ptr, JJ, cJ.__wbg_ptr);
        if (ZJ[1]) throw sc(ZJ[0])
      }
      jD(JJ) {
        const cJ = hc(JJ, mc.P3EW),
          ZJ = Qc,
          FJ = mc.fkZB(this.__wbg_ptr, cJ, ZJ);
        if (FJ[1]) throw sc(FJ[0])
      }
      ph(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = mc.UF1t(this.__wbg_ptr, JJ, cJ, ZJ, FJ, UJ, eJ);
        if (XJ[1]) throw sc(XJ[0])
      }
      dh(JJ, cJ, ZJ, FJ) {
        const UJ = jc(JJ, mc.P3EW),
          eJ = Qc,
          XJ = hc(cJ, mc.P3EW),
          AJ = Qc,
          qJ = hc(ZJ, mc.P3EW),
          jJ = Qc,
          YJ = hc(FJ, mc.P3EW),
          hJ = Qc,
          DJ = mc.fYNO(this.__wbg_ptr, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ);
        if (DJ[1]) throw sc(DJ[0])
      }
      hD(JJ, cJ) {
        uJ(cJ, UJ);
        const ZJ = mc.tHCS(this.__wbg_ptr, JJ, cJ.__wbg_ptr);
        if (ZJ[1]) throw sc(ZJ[0])
      }
      Rh(JJ, cJ, ZJ) {
        const FJ = mc.qOUh(this.__wbg_ptr, JJ, cJ, ZJ);
        if (FJ[1]) throw sc(FJ[0])
      }
      sD(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, jJ, YJ) {
        uJ(JJ, qJ);
        return mc.RPmI(this.__wbg_ptr, JJ.__wbg_ptr, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, jJ, YJ)
      }
    }
    Symbol.dispose && (AJ.prototype[Symbol.dispose] = AJ.prototype.free);
    class qJ {
      static __wrap(JJ) {
        const cJ = Object.create(qJ.prototype);
        return cJ.__wbg_ptr = JJ, dJ.register(cJ, cJ.__wbg_ptr, cJ), cJ
      }
      __destroy_into_raw() {
        const JJ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, dJ.unregister(this), JJ
      }
      free() {
        const JJ = this.__destroy_into_raw();
        mc.jwdK(JJ, 0)
      }
      fD(JJ) {
        const cJ = mc.Yvcx(this.__wbg_ptr, JJ);
        if (cJ[2]) throw sc(cJ[1]);
        return cJ[0] >>> 0
      }
      xD(JJ, cJ, ZJ) {
        return mc.SP17(this.__wbg_ptr, JJ, cJ, ZJ)
      }
      rD(JJ, cJ, ZJ) {
        return mc.NT3H(this.__wbg_ptr, JJ, cJ, ZJ) >>> 0
      }
      vD(JJ, cJ, ZJ, FJ) {
        return 0 !== mc.zsw3(this.__wbg_ptr, JJ, cJ, ZJ, FJ)
      }
      mD() {
        mc.yoWg(this.__wbg_ptr)
      }
      ED(JJ) {
        const cJ = mc.eQHQ(this.__wbg_ptr, JJ);
        if (cJ[3]) throw sc(cJ[2]);
        var ZJ = LJ(cJ[0], cJ[1]).slice();
        return mc.DGph(cJ[0], 1 * cJ[1], 1), ZJ
      }
      evict(JJ, cJ) {
        return mc.S8rl(this.__wbg_ptr, JJ, cJ) >>> 0
      }
      VD() {
        mc.cTES(this.__wbg_ptr)
      }
      KD(JJ, cJ, ZJ) {
        mc.pu5E(this.__wbg_ptr, JJ, cJ, ZJ)
      }
      yD(JJ) {
        const cJ = mc.kf9O(this.__wbg_ptr, JJ);
        if (cJ[1]) throw sc(cJ[0])
      }
      SD() {
        return mc.Ews0(this.__wbg_ptr) >>> 0
      }
      MD() {
        return mc.R4sb(this.__wbg_ptr) >>> 0
      }
      bD(JJ, cJ, ZJ) {
        mc.FygS(this.__wbg_ptr, JJ, cJ, ZJ)
      }
      wD(JJ, cJ, ZJ) {
        mc.NLeB(this.__wbg_ptr, JJ, cJ, ZJ)
      }
      WD() {
        return mc.mJTC(this.__wbg_ptr) >>> 0
      }
      gD() {
        return mc.z2kH(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const JJ = mc.c5x5();
        return this.__wbg_ptr = JJ, dJ.register(this, this.__wbg_ptr, this), this
      }
      static HD() {
        const JJ = mc.LPzD();
        return qJ.__wrap(JJ)
      }
      PD() {
        return mc.i46m(this.__wbg_ptr) >>> 0
      }
      kD() {
        return mc.oF1X(this.__wbg_ptr) >>> 0
      }
      pD(JJ, cJ, ZJ, FJ) {
        const UJ = mc.m6fX(this.__wbg_ptr, JJ, cJ, ZJ, FJ);
        if (UJ[1]) throw sc(UJ[0])
      }
      dD() {
        return mc.fTXD(this.__wbg_ptr) >>> 0
      }
      zD() {
        return mc.FF1y(this.__wbg_ptr) >>> 0
      }
      ND(JJ, cJ, ZJ, FJ) {
        mc.q0uT(this.__wbg_ptr, JJ, cJ, ZJ, FJ)
      }
      OD(JJ) {
        mc.fuc6(this.__wbg_ptr, JJ)
      }
      CD(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = Yc(cJ, mc.P3EW),
          XJ = Qc,
          AJ = jc(ZJ, mc.P3EW),
          qJ = Qc,
          jJ = hc(FJ, mc.P3EW),
          YJ = Qc,
          hJ = mc.EPYr(this.__wbg_ptr, JJ, eJ, XJ, AJ, qJ, jJ, YJ, UJ);
        if (hJ[1]) throw sc(hJ[0])
      }
      TD(JJ, cJ, ZJ, FJ) {
        const UJ = Yc(JJ, mc.P3EW),
          eJ = Qc,
          XJ = jc(cJ, mc.P3EW),
          AJ = Qc,
          qJ = hc(ZJ, mc.P3EW),
          jJ = Qc,
          YJ = Yc(FJ, mc.P3EW),
          hJ = Qc,
          DJ = mc.hlCq(this.__wbg_ptr, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ);
        if (DJ[1]) throw sc(DJ[0])
      }
      BD(JJ) {
        const cJ = Yc(JJ, mc.P3EW),
          ZJ = Qc,
          FJ = mc.g8Qo(this.__wbg_ptr, cJ, ZJ);
        if (FJ[1]) throw sc(FJ[0])
      }
      tD() {
        return mc.HgkB(this.__wbg_ptr) >>> 0
      }
      oD(JJ) {
        const cJ = mc.apUo(this.__wbg_ptr, JJ);
        if (cJ[2]) throw sc(cJ[1]);
        return cJ[0] >>> 0
      }
      steer() {
        return mc.gKOs(this.__wbg_ptr) >>> 0
      }
      lD() {
        const JJ = mc.t4CX(this.__wbg_ptr);
        var cJ = iJ(JJ[0], JJ[1]).slice();
        return mc.DGph(JJ[0], 8 * JJ[1], 8), cJ
      }
      Zs() {
        return mc.Bsut(this.__wbg_ptr) >>> 0
      }
      JD() {
        const JJ = mc.X1J8(this.__wbg_ptr);
        var cJ, ZJ, FJ = (cJ = JJ[0], ZJ = JJ[1], cJ >>>= 0, (null !== tJ && 0 !== tJ.byteLength || (tJ = new Int32Array(mc.memory.buffer)), tJ).subarray(cJ / 4, cJ / 4 + ZJ)).slice();
        return mc.DGph(JJ[0], 4 * JJ[1], 4), FJ
      }
    }
    Symbol.dispose && (qJ.prototype[Symbol.dispose] = qJ.prototype.free);
    class jJ {
      __destroy_into_raw() {
        const JJ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, zJ.unregister(this), JJ
      }
      free() {
        const JJ = this.__destroy_into_raw();
        mc.l0uB(JJ, 0)
      }
      Fs(JJ) {
        const cJ = jc(JJ, mc.P3EW),
          ZJ = Qc,
          FJ = mc.AXwt(this.__wbg_ptr, cJ, ZJ);
        if (FJ[1]) throw sc(FJ[0])
      }
      Us() {
        return mc.Em3O(this.__wbg_ptr) >>> 0
      }
      es() {
        return mc.oFFP(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const JJ = mc.nKNa();
        return this.__wbg_ptr = JJ, zJ.register(this, this.__wbg_ptr, this), this
      }
      run(JJ, cJ) {
        uJ(JJ, qJ);
        const ZJ = mc.bzlb(this.__wbg_ptr, JJ.__wbg_ptr, cJ);
        if (ZJ[2]) throw sc(ZJ[1]);
        return ZJ[0] >>> 0
      }
      Xs(JJ) {
        const cJ = jc(JJ, mc.P3EW),
          ZJ = Qc;
        mc.Nl7G(this.__wbg_ptr, cJ, ZJ)
      }
      qs(JJ) {
        const cJ = jc(JJ, mc.P3EW),
          ZJ = Qc;
        mc.ky3r(this.__wbg_ptr, cJ, ZJ)
      }
    }
    Symbol.dispose && (jJ.prototype[Symbol.dispose] = jJ.prototype.free);
    class YJ {
      __destroy_into_raw() {
        const JJ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, NJ.unregister(this), JJ
      }
      free() {
        const JJ = this.__destroy_into_raw();
        mc.KhUs(JJ, 0)
      }
      hs(JJ, cJ) {
        const ZJ = Yc(JJ, mc.P3EW),
          FJ = Qc;
        return mc.DOyv(this.__wbg_ptr, ZJ, FJ, cJ) >>> 0
      }
      Ds(JJ, cJ, ZJ) {
        uJ(JJ, qJ);
        const FJ = Yc(ZJ, mc.P3EW),
          UJ = Qc,
          eJ = mc.yIJU(this.__wbg_ptr, JJ.__wbg_ptr, cJ, FJ, UJ);
        if (eJ[2]) throw sc(eJ[1]);
        return eJ[0] >>> 0
      }
      Ys(JJ) {
        return mc.Dudg(this.__wbg_ptr, JJ) >>> 0
      }
      constructor() {
        const JJ = mc.wHbP();
        return this.__wbg_ptr = JJ, NJ.register(this, this.__wbg_ptr, this), this
      }
      scan(JJ, cJ) {
        uJ(JJ, qJ);
        const ZJ = mc.RkqI(this.__wbg_ptr, JJ.__wbg_ptr, cJ);
        if (ZJ[2]) throw sc(ZJ[1]);
        return ZJ[0] >>> 0
      }
      xs(JJ) {
        const cJ = Yc(JJ, mc.P3EW),
          ZJ = Qc;
        mc.Q5gd(this.__wbg_ptr, cJ, ZJ)
      }
      fs() {
        return mc.Htj6(this.__wbg_ptr) >>> 0
      }
      Gs() {
        return mc.xNtC(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (YJ.prototype[Symbol.dispose] = YJ.prototype.free);
    class hJ {
      __destroy_into_raw() {
        const JJ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, OJ.unregister(this), JJ
      }
      free() {
        const JJ = this.__destroy_into_raw();
        mc.yfQg(JJ, 0)
      }
      Es(JJ) {
        const cJ = mc.zfGv(this.__wbg_ptr, JJ);
        if (cJ[2]) throw sc(cJ[1]);
        return cJ[0] >>> 0
      }
      compute(JJ, cJ, ZJ, FJ) {
        var UJ = Ac(FJ) ? 0 : Dc(FJ, mc.P3EW, mc.sxx3),
          eJ = Qc;
        const XJ = mc.GAxm(this.__wbg_ptr, JJ, Ac(cJ) ? Number.MAX_SAFE_INTEGER : cJ | 0, ZJ, UJ, eJ);
        if (XJ[2]) throw sc(XJ[1]);
        return XJ[0] >>> 0
      }
      Ks(JJ) {
        const cJ = Dc(JJ, mc.P3EW, mc.sxx3),
          ZJ = Qc;
        mc.EgOq(this.__wbg_ptr, cJ, ZJ)
      }
      Ss() {
        return mc.h3X9(this.__wbg_ptr)
      }
      Is(JJ) {
        return mc.czEk(this.__wbg_ptr, JJ) >>> 0
      }
      Ms() {
        return mc.lsui(this.__wbg_ptr) >>> 0
      }
      Ws() {
        return mc.PSZs(this.__wbg_ptr) >>> 0
      }
      gs(JJ, cJ) {
        const ZJ = mc.mej4(this.__wbg_ptr, JJ, cJ);
        if (ZJ[1]) throw sc(ZJ[0])
      }
      Hs() {
        return mc.swam(this.__wbg_ptr) >>> 0
      }
      Ps() {
        return mc.KU0w(this.__wbg_ptr) >>> 0
      }
      ds() {
        return mc.ZkED(this.__wbg_ptr) >>> 0
      }
      Vs(JJ, cJ, ZJ) {
        const FJ = jc(JJ, mc.P3EW),
          UJ = Qc,
          eJ = jc(cJ, mc.P3EW),
          XJ = Qc,
          AJ = mc.aZMd(this.__wbg_ptr, FJ, UJ, eJ, XJ, ZJ);
        if (AJ[1]) throw sc(AJ[0])
      }
      Ns() {
        return mc.lXAR(this.__wbg_ptr) >>> 0
      }
      mesh(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = mc.fg4O(this.__wbg_ptr, JJ, cJ, ZJ, FJ, UJ);
        if (eJ[2]) throw sc(eJ[1]);
        return eJ[0] >>> 0
      }
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ, rJ, vJ) {
        const mJ = qc(JJ, mc.P3EW),
          QJ = Qc,
          EJ = hc(cJ, mc.P3EW),
          VJ = Qc,
          KJ = jc(ZJ, mc.P3EW),
          yJ = Qc,
          SJ = Yc(FJ, mc.P3EW),
          IJ = Qc,
          MJ = Yc(UJ, mc.P3EW),
          bJ = Qc,
          wJ = jc(eJ, mc.P3EW),
          WJ = Qc,
          gJ = jc(XJ, mc.P3EW),
          HJ = Qc,
          PJ = hc(AJ, mc.P3EW),
          kJ = Qc,
          pJ = hc(qJ, mc.P3EW),
          dJ = Qc,
          zJ = Yc(jJ, mc.P3EW),
          NJ = Qc;
        var TJ = Ac(YJ) ? 0 : qc(YJ, mc.P3EW),
          CJ = Qc;
        const uJ = jc(hJ, mc.P3EW),
          iJ = Qc,
          RJ = Yc(DJ, mc.P3EW),
          LJ = Qc;
        var aJ = Ac(sJ) ? 0 : Yc(sJ, mc.P3EW),
          BJ = Qc;
        const tJ = hc(nJ, mc.P3EW),
          oJ = Qc,
          lJ = mc.ykzU(mJ, QJ, EJ, VJ, KJ, yJ, SJ, IJ, MJ, bJ, wJ, WJ, gJ, HJ, PJ, kJ, pJ, dJ, zJ, NJ, TJ, CJ, uJ, iJ, RJ, LJ, aJ, BJ, tJ, oJ, GJ, fJ, xJ, rJ, vJ);
        if (lJ[2]) throw sc(lJ[1]);
        return this.__wbg_ptr = lJ[0], OJ.register(this, this.__wbg_ptr, this), this
      }
      zs(JJ, cJ) {
        const ZJ = jc(JJ, mc.P3EW),
          FJ = Qc,
          UJ = mc.v9aH(this.__wbg_ptr, ZJ, FJ, cJ);
        if (UJ[3]) throw sc(UJ[2]);
        var eJ = LJ(UJ[0], UJ[1]).slice();
        return mc.DGph(UJ[0], 1 * UJ[1], 1), eJ
      }
      Os(JJ) {
        mc.mYGY(this.__wbg_ptr, Ac(JJ) ? 16777215 : JJ)
      }
      Ts(JJ) {
        return mc.eCL0(this.__wbg_ptr, JJ) >>> 0
      }
      Rs() {
        return mc.tGVN(this.__wbg_ptr) >>> 0
      }
      Cs() {
        const JJ = mc.fWou(this.__wbg_ptr);
        if (JJ[2]) throw sc(JJ[1]);
        return 0 !== JJ[0]
      }
      Ls() {
        return mc.bOXy(this.__wbg_ptr) >>> 0
      }
      Bs() {
        return mc.dJOv(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (hJ.prototype[Symbol.dispose] = hJ.prototype.free);
    class DJ {
      __destroy_into_raw() {
        const JJ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, TJ.unregister(this), JJ
      }
      free() {
        const JJ = this.__destroy_into_raw();
        mc.jVsj(JJ, 0)
      }
      compute(JJ, cJ, ZJ, FJ) {
        var UJ = Ac(FJ) ? 0 : Dc(FJ, mc.P3EW, mc.sxx3),
          eJ = Qc;
        const XJ = mc.VaoS(this.__wbg_ptr, JJ, Ac(cJ) ? Number.MAX_SAFE_INTEGER : cJ | 0, ZJ, UJ, eJ);
        if (XJ[2]) throw sc(XJ[1]);
        return XJ[0] >>> 0
      }
      Ks(JJ) {
        const cJ = Dc(JJ, mc.P3EW, mc.sxx3),
          ZJ = Qc;
        mc.Q2fa(this.__wbg_ptr, cJ, ZJ)
      }
      Ps() {
        return mc.IpQ1(this.__wbg_ptr) >>> 0
      }
      ds() {
        return mc.O4iq(this.__wbg_ptr) >>> 0
      }
      os(JJ) {
        const cJ = mc.nM5M(this.__wbg_ptr, JJ);
        if (cJ[2]) throw sc(cJ[1]);
        return cJ[0] >>> 0
      }
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = qc(JJ, mc.P3EW),
          AJ = Qc,
          qJ = hc(cJ, mc.P3EW),
          jJ = Qc,
          YJ = jc(ZJ, mc.P3EW),
          hJ = Qc,
          DJ = Yc(FJ, mc.P3EW),
          sJ = Qc,
          nJ = mc.ZQQC(XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, UJ, eJ);
        if (nJ[2]) throw sc(nJ[1]);
        return this.__wbg_ptr = nJ[0], TJ.register(this, this.__wbg_ptr, this), this
      }
      Rs() {
        return mc.Ypzg(this.__wbg_ptr) >>> 0
      }
      Cs() {
        const JJ = mc.QPOF(this.__wbg_ptr);
        if (JJ[2]) throw sc(JJ[1]);
        return 0 !== JJ[0]
      }
      Ls() {
        return mc.ObTi(this.__wbg_ptr) >>> 0
      }
    }

    function sJ() {
      const JJ = mc.lOAp();
      var cJ = RJ(JJ[0], JJ[1]).slice();
      return mc.DGph(JJ[0], 4 * JJ[1], 4), cJ
    }

    function nJ(JJ, cJ) {
      let ZJ, FJ;
      try {
        const UJ = qc(JJ, mc.P3EW),
          eJ = Qc,
          XJ = Dc(cJ, mc.P3EW, mc.sxx3),
          AJ = Qc,
          qJ = mc.bqU9(UJ, eJ, XJ, AJ);
        return ZJ = qJ[0], FJ = qJ[1], oJ(qJ[0], qJ[1])
      } finally {
        mc.DGph(ZJ, FJ, 1)
      }
    }

    function GJ() {
      const JJ = mc.ER1z();
      var cJ = RJ(JJ[0], JJ[1]).slice();
      return mc.DGph(JJ[0], 4 * JJ[1], 4), cJ
    }

    function fJ(JJ) {
      return 0 !== mc.f75l(JJ)
    }

    function xJ(JJ, cJ) {
      const ZJ = Dc(JJ, mc.P3EW, mc.sxx3),
        FJ = Qc,
        UJ = mc.gNX0(ZJ, FJ, cJ);
      if (UJ[1]) throw sc(UJ[0])
    }

    function rJ() {
      mc.xXmN()
    }

    function vJ() {
      return mc.YvdD() >>> 0
    }

    function mJ(JJ) {
      return 0 !== mc.vplG(JJ)
    }

    function QJ(JJ) {
      return 0 !== mc.zq4M(JJ)
    }

    function EJ(JJ) {
      mc.TDbF(JJ)
    }

    function VJ() {
      return mc.qOOL() >>> 0
    }

    function KJ() {
      return mc.XLay() >>> 0
    }

    function yJ() {
      return 0 !== mc.OYbv()
    }

    function SJ() {
      const JJ = mc.bCNv();
      var cJ = RJ(JJ[0], JJ[1]).slice();
      return mc.DGph(JJ[0], 4 * JJ[1], 4), cJ
    }

    function IJ() {
      const JJ = mc.bZva();
      var cJ = RJ(JJ[0], JJ[1]).slice();
      return mc.DGph(JJ[0], 4 * JJ[1], 4), cJ
    }

    function MJ() {
      const JJ = mc.U82G();
      var cJ = RJ(JJ[0], JJ[1]).slice();
      return mc.DGph(JJ[0], 4 * JJ[1], 4), cJ
    }

    function bJ() {
      return mc.bkO9() >>> 0
    }

    function wJ() {
      mc.p1SM()
    }

    function WJ() {
      let JJ, cJ;
      try {
        const ZJ = mc.dJkk();
        return JJ = ZJ[0], cJ = ZJ[1], oJ(ZJ[0], ZJ[1])
      } finally {
        mc.DGph(JJ, cJ, 1)
      }
    }

    function gJ(JJ) {
      mc.Coif(CJ(JJ))
    }

    function HJ() {
      return {
        __proto__: null,
        QRHq: {
          __proto__: null,
          btiL: function(JJ, cJ) {
            return CJ(Error(oJ(JJ, cJ)))
          },
          pQjc: function(JJ, cJ) {
            throw new Error(oJ(JJ, cJ))
          },
          hVOW: function(JJ) {
            Uc(JJ).call()
          },
          R2m4: function(JJ, cJ) {
            console.error(oJ(JJ, cJ))
          },
          iL7n: function() {
            return performance.now()
          },
          EiBK: function(JJ) {
            sc(JJ)
          }
        }
      }
    }
    Symbol.dispose && (DJ.prototype[Symbol.dispose] = DJ.prototype.free);
    const PJ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((JJ => mc.b8CL(JJ, 1))),
      kJ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((JJ => mc.BFf0(JJ, 1))),
      pJ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((JJ => mc.YuqN(JJ, 1))),
      dJ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((JJ => mc.jwdK(JJ, 1))),
      zJ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((JJ => mc.l0uB(JJ, 1))),
      NJ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((JJ => mc.KhUs(JJ, 1))),
      OJ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((JJ => mc.yfQg(JJ, 1))),
      TJ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((JJ => mc.jVsj(JJ, 1)));

    function CJ(JJ) {
      Xc === ec.length && ec.push(ec.length + 1);
      const cJ = Xc;
      return Xc = ec[cJ], ec[cJ] = JJ, cJ
    }

    function uJ(JJ, cJ) {
      if (!(JJ instanceof cJ)) throw new Error(`expected instance of ${cJ.name}`)
    }

    function iJ(JJ, cJ) {
      return JJ >>>= 0, BJ().subarray(JJ / 8, JJ / 8 + cJ)
    }

    function RJ(JJ, cJ) {
      return JJ >>>= 0, cc().subarray(JJ / 4, JJ / 4 + cJ)
    }

    function LJ(JJ, cJ) {
      return JJ >>>= 0, Fc().subarray(JJ / 1, JJ / 1 + cJ)
    }
    let aJ = null;

    function BJ() {
      return null !== aJ && 0 !== aJ.byteLength || (aJ = new Float64Array(mc.memory.buffer)), aJ
    }
    let tJ = null;

    function oJ(JJ, cJ) {
      return function(JJ, cJ) {
        fc += cJ, fc >= Gc && (nc = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), nc.decode(), fc = cJ);
        return nc.decode(Fc().subarray(JJ, JJ + cJ))
      }(JJ >>> 0, cJ)
    }
    let lJ = null;
    let Jc = null;

    function cc() {
      return null !== Jc && 0 !== Jc.byteLength || (Jc = new Uint32Array(mc.memory.buffer)), Jc
    }
    let Zc = null;

    function Fc() {
      return null !== Zc && 0 !== Zc.byteLength || (Zc = new Uint8Array(mc.memory.buffer)), Zc
    }

    function Uc(JJ) {
      return ec[JJ]
    }
    let ec = new Array(1024).fill(void 0);
    ec.push(void 0, null, !0, !1);
    let Xc = ec.length;

    function Ac(JJ) {
      return void 0 === JJ || null === JJ
    }

    function qc(JJ, cJ) {
      const ZJ = cJ(2 * JJ.length, 2) >>> 0;
      return (null !== lJ && 0 !== lJ.byteLength || (lJ = new Uint16Array(mc.memory.buffer)), lJ).set(JJ, ZJ / 2), Qc = JJ.length, ZJ
    }

    function jc(JJ, cJ) {
      const ZJ = cJ(4 * JJ.length, 4) >>> 0;
      return cc().set(JJ, ZJ / 4), Qc = JJ.length, ZJ
    }

    function Yc(JJ, cJ) {
      const ZJ = cJ(1 * JJ.length, 1) >>> 0;
      return Fc().set(JJ, ZJ / 1), Qc = JJ.length, ZJ
    }

    function hc(JJ, cJ) {
      const ZJ = cJ(8 * JJ.length, 8) >>> 0;
      return BJ().set(JJ, ZJ / 8), Qc = JJ.length, ZJ
    }

    function Dc(JJ, cJ, ZJ) {
      if (void 0 === ZJ) {
        const ZJ = xc.encode(JJ),
          FJ = cJ(ZJ.length, 1) >>> 0;
        return Fc().subarray(FJ, FJ + ZJ.length).set(ZJ), Qc = ZJ.length, FJ
      }
      let FJ = JJ.length,
        UJ = cJ(FJ, 1) >>> 0;
      const eJ = Fc();
      let XJ = 0;
      for (; XJ < FJ; XJ++) {
        const cJ = JJ.charCodeAt(XJ);
        if (cJ > 127) break;
        eJ[UJ + XJ] = cJ
      }
      if (XJ !== FJ) {
        0 !== XJ && (JJ = JJ.slice(XJ)), UJ = ZJ(UJ, FJ, FJ = XJ + 3 * JJ.length, 1) >>> 0;
        const cJ = Fc().subarray(UJ + XJ, UJ + FJ);
        XJ += xc.encodeInto(JJ, cJ).written, UJ = ZJ(UJ, FJ, XJ, 1) >>> 0
      }
      return Qc = XJ, UJ
    }

    function sc(JJ) {
      const cJ = Uc(JJ);
      return function(JJ) {
        JJ < 1028 || (ec[JJ] = Xc, Xc = JJ)
      }(JJ), cJ
    }
    let nc = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    nc.decode();
    const Gc = 2146435072;
    let fc = 0;
    const xc = new TextEncoder;
    "encodeInto" in xc || (xc.encodeInto = function(JJ, cJ) {
      const ZJ = xc.encode(JJ);
      return cJ.set(ZJ), {
        read: JJ.length,
        written: ZJ.length
      }
    });
    let rc, vc, mc, Qc = 0;

    function Ec(JJ, cJ) {
      return vc = JJ, mc = JJ.exports, rc = cJ, aJ = null, tJ = null, lJ = null, Jc = null, Zc = null, mc.mSYH(), mc
    }

    function Vc(JJ) {
      if (void 0 !== mc) return mc;
      void 0 !== JJ && (Object.getPrototypeOf(JJ) === Object.prototype ? ({
        module: JJ
      } = JJ) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const cJ = HJ();
      JJ instanceof WebAssembly.Module || (JJ = new WebAssembly.Module(JJ));
      return Ec(new WebAssembly.Instance(JJ, cJ), JJ)
    }
    async function Kc(JJ) {
      if (void 0 !== mc) return mc;
      void 0 !== JJ && (Object.getPrototypeOf(JJ) === Object.prototype ? ({
        module_or_path: JJ
      } = JJ) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const cJ = HJ();
      ("string" === typeof JJ || "function" === typeof Request && JJ instanceof Request || "function" === typeof URL && JJ instanceof URL) && (JJ = fetch(JJ));
      const {
        instance: ZJ,
        module: FJ
      } = await async function(JJ, cJ) {
        if ("function" === typeof Response && JJ instanceof Response) {
          if (!JJ.ok) throw new Error(`failed to fetch Wasm: ${JJ.status} ${JJ.statusText} fetching '${JJ.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(JJ, cJ)
          } catch (ZJ) {
            if (! function(JJ) {
                switch (JJ) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(JJ.type) || "application/wasm" === JJ.headers.get("Content-Type")) throw ZJ;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ZJ)
          }
          const FJ = await JJ.arrayBuffer();
          return await WebAssembly.instantiate(FJ, cJ)
        } {
          const ZJ = await WebAssembly.instantiate(JJ, cJ);
          return ZJ instanceof WebAssembly.Instance ? {
            instance: ZJ,
            module: JJ
          } : ZJ
        }
      }(await JJ, cJ);
      return Ec(ZJ, FJ)
    }
    var yc = ZJ(3178),
      Sc = ZJ(35441);
    const Ic = {
      name: yc.e,
      url: () => new ZJ.U(ZJ(35452)),
      init: Kc,
      Zn: FJ
    };

    function Mc() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ic,
        cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ic,
        ZJ = arguments.length > 2 ? arguments[2] : void 0;
      return (0, Sc.i)(JJ, cJ, ZJ)
    }

    function bc(JJ) {
      return (0, yc.I)((() => JJ), FJ, Ic)
    }
  },
  5963: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ
    });
    var FJ = ZJ(3183);
    const UJ = {
      bloxd_wasm: () => "523d3e5949bf2a4753ef5ca2a73400ebb345835b7971369ead2f990b98be43ec",
      bloxd_wasm_client: () => "d4cb36df94a07de19e42eeffa0530f0524c7d89d6cd225e6e3040a8fe33cb61f",
      bloxd_wasm_workers: () => "b13b723c21ff4be0aa4bb62ce03a9989f6e3a955e9dbcbcab4ce4af24b202aca",
      bloxd_wasm_models: () => "f6812c5c938dcbac86f88041ffced930fe9d08400f719159d23aa9e3370f1e40",
      bloxd_wasm_webgpu: () => "e406b84c9505f7a02226339b21c94d9a9039f99b240ba6ea17b3503c03394d97",
      bloxd_wasm_webgl: () => "31e54300aadfdf39d9adf46e78a03ba62332faca6c028e444167fa4ad879a305",
      bloxd_wasm_webgl1: () => "eabb7ee7c8fbfb9be543faab1ff74311865cfd0aa56a6ee1f3f14d03e5ae7d24",
      bloxd_wasm_replay: () => "4f3a9b06c75077dd5f30c00cad61978d804090ee39979df7a1cfbfc9252724da",
      bloxd_wasm_recorder: () => "27d0a05e493ac60b3abbc822d35e07432c9fd8fda5fab082d13b04b57a84627e",
      bloxd_wasm_anim: () => "df3ee160579d661f445b2f411e354890d481e89dda8265b662e7e3f787cf6236",
      bloxd_wasm_textures: () => "1fc5f5b691e5b407d47f375467e6fd9d0f10cb030443922e1b8b25cd186e7173",
      bloxd_wasm_shader_pack: () => "749cb76383a9de0896958e82b823c3a4f9479f89c71e25be0da5c1167b8eeea1"
    };
    var eJ = ZJ(5971);

    function XJ(JJ) {
      const cJ = Object.prototype.hasOwnProperty.call(UJ, JJ) ? UJ[JJ]() : void 0;
      if (void 0 !== cJ) return {
        sha256: cJ,
        onMismatch: eJ.t
      };
      throw new FJ.j(`${JJ} has no release digest, so this build refuses it`)
    }
  },
  35425: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ) {
      return new Error(`${JJ}: ${cJ instanceof Error?`${cJ.name}: ${cJ.message}`:String(cJ)}`, {
        cause: cJ
      })
    }
    ZJ.d(cJ, {
      d: () => FJ
    })
  },
  35417: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ,
      f: () => qJ
    });
    var FJ = ZJ(3183),
      UJ = ZJ(5963),
      eJ = ZJ(35425);

    function XJ() {
      return new URL(new ZJ.U(ZJ(35428)).href, globalThis.location?.href).href
    }
    let AJ = null;

    function qJ() {
      return AJ ??= (async () => (0, FJ.H)(new URL(XJ()), (0, UJ.e)("bloxd_wasm_textures")))().catch((JJ => {
        throw (0, eJ.d)((0, FJ.O)(JJ), JJ)
      })), AJ
    }
  },
  35447: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => fJ,
      c: () => xJ
    });
    var FJ = ZJ(3183),
      UJ = ZJ(3190),
      eJ = ZJ(5971);
    const XJ = ".zst.bin",
      AJ = Reflect.apply,
      qJ = ArrayBuffer,
      jJ = "undefined" === typeof Response ? void 0 : Response,
      YJ = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      hJ = function() {
        let JJ;
        void 0 !== YJ && new YJ({
          __proto__: null,
          start(cJ) {
            const {
              enqueue: ZJ,
              close: FJ,
              error: UJ
            } = Object.getPrototypeOf(cJ);
            JJ = {
              enqueue: ZJ,
              close: FJ,
              error: UJ
            }
          }
        }, {
          __proto__: null
        });
        return JJ
      }(),
      DJ = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== hJ && (0, eJ.g)(jJ, "Response", !0) && (0, eJ.g)(YJ, "ReadableStream", !0) && (0, eJ.g)(hJ.enqueue, "enqueue") && (0, eJ.g)(hJ.close, "close") && (0, eJ.g)(hJ.error, "error") && (0, eJ.g)(FJ.Y, "body") && (0, eJ.g)(FJ.Q, "getReader") && (0, eJ.g)(FJ.X, "read")
        } catch {
          return !1
        }
      }();
    let sJ = !1;

    function nJ(JJ) {
      for (const cJ of "bloxd_wasm_webgpu:4943446,bloxd_wasm_webgl:5219211,bloxd_wasm_webgl1:4722370,bloxd_wasm_workers:196044,bloxd_wasm_models:312534,bloxd_wasm_client:3645615"?.split(",") ?? []) {
        const [ZJ, FJ] = cJ.split(":");
        if (ZJ === JJ) {
          const JJ = Number(FJ);
          return Number.isInteger(JJ) && JJ > 0 ? JJ : void 0
        }
      }
    }

    function GJ(JJ) {
      const cJ = nJ(JJ.name);
      if (void 0 !== cJ && DJ && !sJ) return {
        href: `${JJ.url().href}${XJ}`,
        length: cJ
      }
    }

    function fJ(JJ) {
      return GJ(JJ)?.href ?? JJ.url().href
    }

    function xJ(JJ, cJ, eJ) {
      const XJ = JJ.url(),
        DJ = GJ(JJ);
      return void 0 !== DJ ? async function(JJ, cJ, eJ, XJ) {
        let {
          href: DJ,
          length: nJ
        } = cJ;
        try {
          return await (0, FJ.bb)(DJ, ((JJ, cJ, GJ) => async function(JJ, cJ, eJ, XJ, DJ, nJ, GJ) {
            const fJ = new qJ(cJ);
            let xJ;
            rJ ??= (0, FJ.W)(ZJ.e(60).then((() => ZJ(39858))));
            try {
              xJ = await fetch(JJ, void 0 === GJ ? {
                signal: eJ
              } : {
                signal: eJ,
                priority: GJ
              })
            } catch (PJ) {
              throw new Error(`Fetching ${JJ} failed: ${mJ(PJ)}`)
            }
            const {
              ok: QJ,
              status: EJ,
              body: VJ
            } = function(JJ, cJ) {
              try {
                const {
                  ok: JJ,
                  status: ZJ
                } = cJ;
                return {
                  ok: JJ,
                  status: ZJ,
                  body: AJ(FJ.Y, cJ, [])
                }
              } catch {
                throw new Error(`${JJ} came in a response a page script made`)
              }
            }(JJ, xJ);
            if (!QJ) throw new Error(`Fetching ${JJ} failed: HTTP ${EJ}`);
            XJ();
            const {
              reader: KJ,
              controller: yJ,
              compiled: SJ
            } = function(JJ, cJ) {
              let ZJ;
              try {
                let JJ;
                ZJ = AJ(FJ.Q, cJ, []);
                const UJ = new YJ({
                    __proto__: null,
                    start(cJ) {
                      JJ = cJ
                    }
                  }, {
                    __proto__: null
                  }),
                  eJ = new jJ(UJ, {
                    __proto__: null,
                    headers: {
                      __proto__: null,
                      "Content-Type": "application/wasm"
                    }
                  });
                return {
                  reader: ZJ,
                  controller: JJ,
                  compiled: (0, FJ.W)((0, FJ.B)((0, FJ.eb)(eJ)))
                }
              } catch (PJ) {
                throw void 0 !== ZJ && vJ(ZJ), new Error(`${JJ} could not be streamed into a compile: ${mJ(PJ)}`)
              }
            }(JJ, VJ), {
              enqueue: IJ,
              close: MJ,
              error: bJ
            } = hJ, wJ = JJ => {
              try {
                AJ(bJ, yJ, [JJ])
              } catch {} finally {
                vJ(KJ)
              }
            };
            eJ.addEventListener("abort", (() => {
              wJ(new Error(`${JJ} stalled`))
            }), {
              once: !0
            });
            let WJ = !1;
            (0, UJ.v)(SJ, (() => {}), (() => {
              WJ = !0, vJ(KJ)
            }));
            let gJ = 0;
            try {
              let ZJ;
              try {
                ZJ = await rJ
              } catch (PJ) {
                throw sJ = !0, new Error(`The zstd decoder did not load: ${mJ(PJ)}`)
              }
              const {
                ZstdFrameDecoder: UJ
              } = ZJ, eJ = new UJ(cJ);
              for (; !eJ.done && !WJ;) {
                let cJ;
                try {
                  cJ = await AJ(FJ.X, KJ, [])
                } catch (PJ) {
                  throw new Error(`Downloading ${JJ} failed: ${mJ(PJ)}`)
                }
                if (cJ.done || WJ) break;
                XJ();
                try {
                  eJ.push(cJ.value)
                } catch (PJ) {
                  throw new Error(`${JJ} did not decode: ${mJ(PJ)}`)
                }
                const {
                  output: ZJ,
                  decoded: UJ
                } = eJ;
                if (null !== ZJ && UJ !== gJ) {
                  AJ(FJ.ab, new FJ.m(fJ), [ZJ.subarray(gJ, UJ), gJ]);
                  try {
                    AJ(IJ, yJ, [new FJ.m(fJ, gJ, UJ - gJ)])
                  } catch {
                    WJ = !0
                  }
                  gJ = UJ
                }
              }
              if (DJ(), WJ) throw await SJ, new Error(`${JJ}'s compile stopped reading before its end`);
              if (!eJ.done) throw new Error(`${JJ} ended before its module did`);
              vJ(KJ);
              try {
                AJ(MJ, yJ, [])
              } catch {}
            } catch (PJ) {
              throw wJ(PJ), PJ
            }
            const HJ = await SJ;
            void 0 !== nJ && await (0, FJ.x)(JJ, new FJ.m(fJ), {
              sha256: nJ.sha256,
              onMismatch: () => {}
            });
            return HJ
          }(DJ, nJ, JJ, cJ, GJ, eJ, XJ)))
        } catch (fJ) {
          console.warn(`${mJ(fJ)}: loading ${JJ.href} instead`)
        }
        const GJ = await (0, FJ.H)(JJ, eJ, {
          hideThen: !0,
          priority: XJ
        });
        return GJ
      }(XJ, DJ, cJ, eJ): (0, FJ.H)(XJ, cJ, {
        hideThen: void 0 !== nJ(JJ.name),
        priority: eJ
      })
    }
    let rJ = null;

    function vJ(JJ) {
      try {
        (0, FJ.W)(JJ.cancel())
      } catch {}
    }

    function mJ(JJ) {
      return JJ instanceof Error ? JJ.message : String(JJ)
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);