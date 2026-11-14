export const id = 118;
export const ids = [118, 187];
export const modules = {
  34598: (WW, RW, MW) => {
    MW.d(RW, {
      reportCappedWasmFailure: () => AW,
      reportWasmFailure: () => zR
    });
    var wW = MW(2361);
    const CW = wW.d - 4;

    function zR(WW, RW, MW) {
      (0, wW.e)(WW, RW, MW, !1)
    }

    function AW(WW, RW, MW) {
      (0, wW.e)(WW, RW, MW, !1, CW)
    }
  },
  34591: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => gR,
      e: () => JW,
      g: () => PW,
      j: () => iR
    });
    var wW = MW(34600),
      CW = MW(2793),
      zR = MW(34622),
      AW = MW(2801),
      bR = MW(34598),
      yR = MW(2209),
      NW = MW(2374),
      eW = MW(2355),
      BW = MW(2675);
    const tR = "bloxdWasmFailureReported";

    function TW() {
      return "undefined" === typeof WebAssembly
    }

    function gR() {
      return (0, wW.g)()
    }

    function iR() {
      if (TW()) return "this browser has no WebAssembly";
      const WW = (0, CW.v)();
      return "compile" === WW || "instantiate" === WW ? `the core wasm didn't load here (${(0,CW.m)()})` : null
    }
    async function YW(WW) {
      return await (0, zR.e)(zR.d, void 0, WW)
    }

    function JW() {
      TW() || (0, BW.b)((() => {
        YW()
      }))
    }

    function PW() {
      if (TW()) return async () => ((0, yR.g)("unsupported", 0), IW("unsupported", "This browser has no WebAssembly"), !1);
      const WW = {
        reloadFailedDownload: !0
      };
      return YW(WW), async () => {
        var RW;
        const MW = performance.now();
        await YW(WW);
        const wW = (performance.now() - MW) / 1e3;
        if ((0, CW._)()) return (0, yR.g)("ready", wW), (0, AW.w)(zR.d.url()) && (0, bR.reportCappedWasmFailure)("wasm_load", NW.b.message, NW.b.code), !0;
        const BW = eW.c[null !== (RW = (0, CW.v)()) && void 0 !== RW ? RW : "call"];
        return (0, yR.g)(BW, wW), IW(BW, (0, CW.m)()), !1
      }
    }

    function IW(WW, RW) {
      (0, eW.k)(tR, `Bloxd wasm ${WW}, so the game can't start: ${RW}`, RW, WW)
    }
  },
  34640: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bloxd_wasm_bg.6565d61f51f24313e588.wasm"
  },
  34613: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bloxd_wasm_textures_bg.5e8881131275bbf99bf2.wasm"
  },
  34631: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => tR,
      c: () => eW
    });
    var wW = MW(2793),
      CW = MW(2801),
      zR = MW(2803),
      AW = MW(5629),
      bR = MW(5631);
    let yR = null,
      NW = !1;

    function eW(WW, RW, MW) {
      return null === yR ? yR = BW(WW, RW) : WW !== yR.build ? console.warn(`Bloxd wasm: ${WW.name} was asked for after ${yR.build.name} started loading, which this thread keeps`) : RW.name !== yR.workers.name && console.warn(`Bloxd wasm: ${RW.name} was asked for workers after ${yR.workers.name}, which this thread keeps`), MW?.reloadFailedDownload && !NW && (0, wW.lb)() && (NW = !0, yR = BW(yR.build, yR.workers)), yR.loaded
    }

    function BW(WW, RW) {
      const MW = (0, wW.T)((async () => {
        (0, bR.t)();
        const MW = TW(WW),
          wW = RW.name === WW.name ? MW : TW(RW);
        await (0, zR.g)([MW, wW]);
        const CW = await MW,
          AW = await wW;
        return (0, bR.t)(), {
          module: CW,
          workerModule: AW
        }
      }), WW);
      return {
        build: WW,
        workers: RW,
        loaded: MW
      }
    }
    async function tR(WW) {
      return TW(WW)
    }

    function TW(WW) {
      return (0, CW.p)(WW.url(), (0, AW.e)(WW.name))
    }
  },
  34622: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => XR,
      e: () => jM,
      h: () => kM
    });
    var wW = {};
    MW.r(wW), MW.d(wW, {
      RW: () => CW,
      EnvelopeKind: () => zR,
      MW: () => AW,
      PhysicsEngine: () => bR,
      wW: () => yR,
      zR: () => NW,
      AW: () => eW,
      bR: () => BW,
      yR: () => tR,
      NW: () => TW,
      eW: () => gR,
      BW: () => iR,
      tR: () => YW,
      TW: () => JW,
      default: () => QR,
      initSync: () => fR,
      gR: () => PW,
      iR: () => IW,
      YW: () => oW,
      JW: () => lW,
      PW: () => FW,
      IW: () => fW,
      oW: () => QW,
      lW: () => rR,
      FW: () => cR,
      fW: () => XW,
      QW: () => jR,
      rR: () => kR,
      cR: () => aR,
      XW: () => sW,
      jR: () => dW
    });
    class CW {
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, hW.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        oR.ktqv(WW, 0)
      }
      kR() {
        const WW = oR.Eugq(this.__wbg_ptr);
        if (WW[2]) throw TR(WW[1]);
        return WW[0] >>> 0
      }
      aR() {
        return oR.WYuD(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const WW = oR.FbSn();
        return this.__wbg_ptr = WW, hW.register(this, this.__wbg_ptr, this), this
      }
      sW() {
        return oR.UaWH(this.__wbg_ptr) >>> 0
      }
      dW(WW) {
        const RW = oR.gtI5(this.__wbg_ptr, WW);
        if (RW[2]) throw TR(RW[1]);
        return RW[0] >>> 0
      }
      pW(WW) {
        const RW = oR.PxOF(this.__wbg_ptr, WW);
        if (RW[2]) throw TR(RW[1]);
        return RW[0] >>> 0
      }
    }
    Symbol.dispose && (CW.prototype[Symbol.dispose] = CW.prototype.free);
    const zR = Object.freeze({
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
    class AW {
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, UW.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        oR.c9t4(WW, 0)
      }
      EW(WW, RW) {
        const MW = oR.tGZQ(this.__wbg_ptr, WW, RW);
        if (MW[2]) throw TR(MW[1]);
        return MW[0] >>> 0
      }
      VW(WW) {
        const RW = oR.dtT2(this.__wbg_ptr, WW);
        if (RW[2]) throw TR(RW[1]);
        return RW[0] >>> 0
      }
      mR() {
        oR.mH6W(this.__wbg_ptr)
      }
      static xR() {
        return oR.CaUf() >>> 0
      }
      vR() {
        return oR.Npsk(this.__wbg_ptr) >>> 0
      }
      KW() {
        const WW = oR.SAas(this.__wbg_ptr);
        return 0 === WW[0] ? void 0 : WW[1]
      }
      uW() {
        return oR.jiJw(this.__wbg_ptr) >>> 0
      }
      OW() {
        return oR.JHCo(this.__wbg_ptr) >>> 0
      }
      static UW() {
        return oR.lnOx() >>> 0
      }
      constructor() {
        const WW = oR.j03b();
        return this.__wbg_ptr = WW, UW.register(this, this.__wbg_ptr, this), this
      }
      nW() {
        return oR.r3DS(this.__wbg_ptr) >>> 0
      }
      GW() {
        return oR.wfd9(this.__wbg_ptr) >>> 0
      }
      LW() {
        return oR.elaa(this.__wbg_ptr) >>> 0
      }
      hW(WW) {
        return oR.qyaX(this.__wbg_ptr, WW) >>> 0
      }
      reserve(WW, RW) {
        const MW = oR.QyWa(this.__wbg_ptr, WW, RW);
        if (MW[1]) throw TR(MW[0])
      }
      qR(WW, RW) {
        const MW = NR(WW, oR.mBkS),
          wW = lR;
        oR.VpRW(this.__wbg_ptr, MW, wW, RW)
      }
      text() {
        let WW, RW;
        try {
          const MW = oR.RIQO(this.__wbg_ptr);
          return WW = MW[0], RW = MW[1], ZW(MW[0], MW[1])
        } finally {
          oR.K7gD(WW, RW, 1)
        }
      }
    }
    Symbol.dispose && (AW.prototype[Symbol.dispose] = AW.prototype.free);
    class bR {
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, EW.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        oR.MU3Q(WW, 0)
      }
      SW(WW, RW) {
        OW(RW, CW);
        const MW = oR.t4DI(this.__wbg_ptr, WW, RW.__wbg_ptr);
        if (MW[2]) throw TR(MW[1]);
        return MW[0] >>> 0
      }
      RR() {
        const WW = oR.JZvY(this.__wbg_ptr);
        if (WW[1]) throw TR(WW[0])
      }
      AR(WW, RW, MW, wW, CW, zR, AW, bR, NW, eW, BW) {
        OW(WW, yR);
        const tR = oR.xdIL(this.__wbg_ptr, WW.__wbg_ptr, RW, MW, wW, CW, zR, AW, bR, NW, eW, BW);
        if (tR[2]) throw TR(tR[1]);
        return tR[0]
      }
      bM() {
        const WW = oR.xMAB(this.__wbg_ptr);
        var RW = nW(WW[0], WW[1]).slice();
        return oR.K7gD(WW[0], 8 * WW[1], 8), RW
      }
      yM() {
        return oR.dXTV(this.__wbg_ptr) >>> 0
      }
      NR() {
        return oR.ouSC(this.__wbg_ptr) >>> 0
      }
      eR() {
        return oR.K2or(this.__wbg_ptr) >>> 0
      }
      constructor(WW, RW, MW, wW, CW, zR, AW, bR) {
        const yR = oR.e3PS(WW, RW, MW, wW, CW, zR, AW, bR);
        if (yR[2]) throw TR(yR[1]);
        return this.__wbg_ptr = yR[0], EW.register(this, this.__wbg_ptr, this), this
      }
      TR(WW) {
        OW(WW, CW);
        const RW = oR.ezJc(this.__wbg_ptr, WW.__wbg_ptr);
        if (RW[2]) throw TR(RW[1]);
        return RW[0] >>> 0
      }
      gM(WW) {
        const RW = oR.Jovb(this.__wbg_ptr, WW);
        if (RW[1]) throw TR(RW[0])
      }
      iM() {
        return oR.ocaG(this.__wbg_ptr) >>> 0
      }
      resume(WW, RW) {
        OW(WW, yR), OW(RW, CW);
        const MW = oR.qL8z(this.__wbg_ptr, WW.__wbg_ptr, RW.__wbg_ptr);
        if (MW[2]) throw TR(MW[1]);
        return MW[0] >>> 0
      }
      oR(WW) {
        const RW = oR.JgIp(this.__wbg_ptr, WW);
        if (RW[1]) throw TR(RW[0])
      }
      fR(WW, RW) {
        OW(RW, CW);
        const MW = oR.bvEF(this.__wbg_ptr, WW, RW.__wbg_ptr);
        if (MW[1]) throw TR(MW[0])
      }
      cM(WW) {
        const RW = BR(WW, oR.mBkS),
          MW = lR,
          wW = oR.XlKU(this.__wbg_ptr, RW, MW);
        if (wW[1]) throw TR(wW[0])
      }
      wR(WW, RW, MW, wW, CW, zR) {
        const AW = oR.CxLF(this.__wbg_ptr, WW, RW, MW, wW, CW, zR);
        if (AW[1]) throw TR(AW[0])
      }
      CR(WW, RW, MW, wW) {
        const CW = NR(WW, oR.mBkS),
          zR = lR,
          AW = BR(RW, oR.mBkS),
          bR = lR,
          yR = BR(MW, oR.mBkS),
          NW = lR,
          eW = BR(wW, oR.mBkS),
          BW = lR,
          tR = oR.S9i8(this.__wbg_ptr, CW, zR, AW, bR, yR, NW, eW, BW);
        if (tR[1]) throw TR(tR[0])
      }
      jM(WW, RW) {
        OW(RW, CW);
        const MW = oR.AAmT(this.__wbg_ptr, WW, RW.__wbg_ptr);
        if (MW[1]) throw TR(MW[0])
      }
      tM(WW, RW, MW) {
        const wW = oR.Ez0y(this.__wbg_ptr, WW, RW, MW);
        if (wW[1]) throw TR(wW[0])
      }
      aM(WW, RW, MW, wW, CW, zR, AW, bR, NW, eW) {
        OW(WW, yR);
        return oR.DxNN(this.__wbg_ptr, WW.__wbg_ptr, RW, MW, wW, CW, zR, AW, bR, NW, eW)
      }
    }
    Symbol.dispose && (bR.prototype[Symbol.dispose] = bR.prototype.free);
    class yR {
      static __wrap(WW) {
        const RW = Object.create(yR.prototype);
        return RW.__wbg_ptr = WW, VW.register(RW, RW.__wbg_ptr, RW), RW
      }
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, VW.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        oR.gHWq(WW, 0)
      }
      pR(WW) {
        const RW = oR.YIWf(this.__wbg_ptr, WW);
        if (RW[2]) throw TR(RW[1]);
        return RW[0] >>> 0
      }
      hR(WW, RW, MW) {
        return oR.DjaT(this.__wbg_ptr, WW, RW, MW)
      }
      UR(WW, RW, MW) {
        return oR.wzxV(this.__wbg_ptr, WW, RW, MW) >>> 0
      }
      ER(WW, RW, MW, wW) {
        return 0 !== oR.K2Jb(this.__wbg_ptr, WW, RW, MW, wW)
      }
      VR() {
        oR.HFIS(this.__wbg_ptr)
      }
      vM(WW) {
        const RW = oR.mkj7(this.__wbg_ptr, WW);
        if (RW[3]) throw TR(RW[2]);
        var MW = LW(RW[0], RW[1]).slice();
        return oR.K7gD(RW[0], 1 * RW[1], 1), MW
      }
      evict(WW, RW) {
        return oR.VYqn(this.__wbg_ptr, WW, RW) >>> 0
      }
      KR() {
        oR.N8EC(this.__wbg_ptr)
      }
      uR(WW, RW, MW) {
        oR.NL3w(this.__wbg_ptr, WW, RW, MW)
      }
      nR(WW) {
        const RW = oR.PPFR(this.__wbg_ptr, WW);
        if (RW[1]) throw TR(RW[0])
      }
      GR() {
        return oR.lcTI(this.__wbg_ptr) >>> 0
      }
      LR() {
        return oR.pJ5o(this.__wbg_ptr) >>> 0
      }
      HR(WW, RW, MW) {
        oR.Jm3p(this.__wbg_ptr, WW, RW, MW)
      }
      DR(WW, RW, MW) {
        oR.rsf7(this.__wbg_ptr, WW, RW, MW)
      }
      qM() {
        return oR.keyg(this.__wbg_ptr) >>> 0
      }
      ZR() {
        return oR.YbjQ(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const WW = oR.dx2Y();
        return this.__wbg_ptr = WW, VW.register(this, this.__wbg_ptr, this), this
      }
      static SR() {
        const WW = oR.bNoC();
        return yR.__wrap(WW)
      }
      WM() {
        return oR.lbfU(this.__wbg_ptr) >>> 0
      }
      RM() {
        return oR.uPQw(this.__wbg_ptr) >>> 0
      }
      MM(WW, RW, MW, wW) {
        const CW = oR.NdLZ(this.__wbg_ptr, WW, RW, MW, wW);
        if (CW[1]) throw TR(CW[0])
      }
      wM() {
        return oR.QOGs(this.__wbg_ptr) >>> 0
      }
      CM() {
        return oR.wopU(this.__wbg_ptr) >>> 0
      }
      zw(WW, RW, MW, wW) {
        oR.KIdq(this.__wbg_ptr, WW, RW, MW, wW)
      }
      AM(WW) {
        oR.kVbQ(this.__wbg_ptr, WW)
      }
      yw(WW, RW, MW, wW, CW) {
        const zR = eR(RW, oR.mBkS),
          AW = lR,
          bR = NR(MW, oR.mBkS),
          yR = lR,
          NW = BR(wW, oR.mBkS),
          eW = lR,
          BW = oR.lzzp(this.__wbg_ptr, WW, zR, AW, bR, yR, NW, eW, CW);
        if (BW[1]) throw TR(BW[0])
      }
      bw(WW, RW, MW, wW) {
        const CW = eR(WW, oR.mBkS),
          zR = lR,
          AW = NR(RW, oR.mBkS),
          bR = lR,
          yR = BR(MW, oR.mBkS),
          NW = lR,
          eW = eR(wW, oR.mBkS),
          BW = lR,
          tR = oR.OZ4g(this.__wbg_ptr, CW, zR, AW, bR, yR, NW, eW, BW);
        if (tR[1]) throw TR(tR[0])
      }
      gw(WW) {
        const RW = eR(WW, oR.mBkS),
          MW = lR,
          wW = oR.YEus(this.__wbg_ptr, RW, MW);
        if (wW[1]) throw TR(wW[0])
      }
      iw() {
        return oR.iaAP(this.__wbg_ptr) >>> 0
      }
      YM(WW) {
        const RW = oR.dDBS(this.__wbg_ptr, WW);
        if (RW[2]) throw TR(RW[1]);
        return RW[0] >>> 0
      }
      steer() {
        return oR.MpJB(this.__wbg_ptr) >>> 0
      }
      JM() {
        const WW = oR.qqsE(this.__wbg_ptr);
        var RW = nW(WW[0], WW[1]).slice();
        return oR.K7gD(WW[0], 8 * WW[1], 8), RW
      }
      PM() {
        return oR.GkRx(this.__wbg_ptr) >>> 0
      }
      JR() {
        const WW = oR.yWuE(this.__wbg_ptr);
        var RW, MW, wW = (RW = WW[0], MW = WW[1], RW >>>= 0, (null !== qR && 0 !== qR.byteLength || (qR = new Int32Array(oR.memory.buffer)), qR).subarray(RW / 4, RW / 4 + MW)).slice();
        return oR.K7gD(WW[0], 4 * WW[1], 4), wW
      }
    }
    Symbol.dispose && (yR.prototype[Symbol.dispose] = yR.prototype.free);
    class NW {
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, mR.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        oR.y7cK(WW, 0)
      }
      IM(WW) {
        const RW = NR(WW, oR.mBkS),
          MW = lR,
          wW = oR.r2OG(this.__wbg_ptr, RW, MW);
        if (wW[1]) throw TR(wW[0])
      }
      oM() {
        return oR.cRw6(this.__wbg_ptr) >>> 0
      }
      lM() {
        return oR.l4bm(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const WW = oR.ltzG();
        return this.__wbg_ptr = WW, mR.register(this, this.__wbg_ptr, this), this
      }
      run(WW, RW) {
        OW(WW, yR);
        const MW = oR.AEzK(this.__wbg_ptr, WW.__wbg_ptr, RW);
        if (MW[2]) throw TR(MW[1]);
        return MW[0] >>> 0
      }
      FM(WW) {
        const RW = NR(WW, oR.mBkS),
          MW = lR;
        oR.FHQp(this.__wbg_ptr, RW, MW)
      }
      fM(WW) {
        const RW = NR(WW, oR.mBkS),
          MW = lR;
        oR.jUb3(this.__wbg_ptr, RW, MW)
      }
    }
    Symbol.dispose && (NW.prototype[Symbol.dispose] = NW.prototype.free);
    class eW {
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, xR.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        oR.d4VG(WW, 0)
      }
      rw(WW, RW) {
        const MW = eR(WW, oR.mBkS),
          wW = lR;
        return oR.fusy(this.__wbg_ptr, MW, wW, RW) >>> 0
      }
      cwW(WW, RW, MW) {
        OW(WW, yR);
        const wW = eR(MW, oR.mBkS),
          CW = lR,
          zR = oR.H9TX(this.__wbg_ptr, WW.__wbg_ptr, RW, wW, CW);
        if (zR[2]) throw TR(zR[1]);
        return zR[0] >>> 0
      }
      QM(WW) {
        return oR.I4ks(this.__wbg_ptr, WW) >>> 0
      }
      constructor() {
        const WW = oR.kiev();
        return this.__wbg_ptr = WW, xR.register(this, this.__wbg_ptr, this), this
      }
      scan(WW, RW) {
        OW(WW, yR);
        const MW = oR.ovMj(this.__wbg_ptr, WW.__wbg_ptr, RW);
        if (MW[2]) throw TR(MW[1]);
        return MW[0] >>> 0
      }
      kw(WW) {
        const RW = eR(WW, oR.mBkS),
          MW = lR;
        oR.yAFm(this.__wbg_ptr, RW, MW)
      }
      jw() {
        return oR.guR8(this.__wbg_ptr) >>> 0
      }
      XM() {
        return oR.vC64(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (eW.prototype[Symbol.dispose] = eW.prototype.free);
    class BW {
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, vR.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        oR.RfCn(WW, 0)
      }
      sM(WW) {
        const RW = oR.z0Un(this.__wbg_ptr, WW);
        if (RW[2]) throw TR(RW[1]);
        return RW[0] >>> 0
      }
      compute(WW, RW, MW, wW) {
        var CW = bM(wW) ? 0 : tM(wW, oR.mBkS, oR.SMjR),
          zR = lR;
        const AW = oR.qz5G(this.__wbg_ptr, WW, bM(RW) ? Number.MAX_SAFE_INTEGER : RW | 0, MW, CW, zR);
        if (AW[2]) throw TR(AW[1]);
        return AW[0] >>> 0
      }
      pM(WW) {
        const RW = tM(WW, oR.mBkS, oR.SMjR),
          MW = lR;
        oR.fJix(this.__wbg_ptr, RW, MW)
      }
      hM() {
        return oR.O58i(this.__wbg_ptr)
      }
      UM(WW) {
        return oR.Zqpw(this.__wbg_ptr, WW) >>> 0
      }
      EM() {
        return oR.zXRj(this.__wbg_ptr) >>> 0
      }
      VM() {
        return oR.Ap92(this.__wbg_ptr) >>> 0
      }
      mw(WW, RW) {
        const MW = oR.WF1o(this.__wbg_ptr, WW, RW);
        if (MW[1]) throw TR(MW[0])
      }
      KM() {
        return oR.T8eL(this.__wbg_ptr) >>> 0
      }
      uM() {
        return oR.efiE(this.__wbg_ptr) >>> 0
      }
      OM() {
        return oR.kssC(this.__wbg_ptr) >>> 0
      }
      dM(WW, RW, MW) {
        const wW = NR(WW, oR.mBkS),
          CW = lR,
          zR = NR(RW, oR.mBkS),
          AW = lR,
          bR = oR.iBqg(this.__wbg_ptr, wW, CW, zR, AW, MW);
        if (bR[1]) throw TR(bR[0])
      }
      GM() {
        return oR.i9kE(this.__wbg_ptr) >>> 0
      }
      mesh(WW, RW, MW, wW, CW) {
        const zR = oR.wi2m(this.__wbg_ptr, WW, RW, MW, wW, CW);
        if (zR[2]) throw TR(zR[1]);
        return zR[0] >>> 0
      }
      constructor(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW, eW, BW, tR, TW, gR, iR, YW, JW, PW, IW) {
        const oW = yM(WW, oR.mBkS),
          lW = lR,
          FW = BR(RW, oR.mBkS),
          fW = lR,
          QW = NR(MW, oR.mBkS),
          rR = lR,
          cR = eR(wW, oR.mBkS),
          XW = lR,
          jR = eR(CW, oR.mBkS),
          kR = lR,
          aR = NR(zR, oR.mBkS),
          sW = lR,
          dW = NR(AW, oR.mBkS),
          pW = lR,
          hW = BR(bR, oR.mBkS),
          UW = lR,
          EW = BR(yR, oR.mBkS),
          VW = lR,
          mR = eR(NW, oR.mBkS),
          xR = lR;
        var KW = bM(eW) ? 0 : yM(eW, oR.mBkS),
          uW = lR;
        const OW = NR(BW, oR.mBkS),
          nW = lR,
          GW = eR(tR, oR.mBkS),
          LW = lR;
        var HW = bM(TW) ? 0 : eR(TW, oR.mBkS),
          DW = lR;
        const qR = BR(gR, oR.mBkS),
          ZW = lR,
          SW = oR.GH3Q(oW, lW, FW, fW, QW, rR, cR, XW, jR, kR, aR, sW, dW, pW, hW, UW, EW, VW, mR, xR, KW, uW, OW, nW, GW, LW, HW, DW, qR, ZW, iR, YW, JW, PW, IW);
        if (SW[2]) throw TR(SW[1]);
        return this.__wbg_ptr = SW[0], vR.register(this, this.__wbg_ptr, this), this
      }
      nM(WW, RW) {
        const MW = NR(WW, oR.mBkS),
          wW = lR,
          CW = oR.BHLf(this.__wbg_ptr, MW, wW, RW);
        if (CW[3]) throw TR(CW[2]);
        var zR = LW(CW[0], CW[1]).slice();
        return oR.K7gD(CW[0], 1 * CW[1], 1), zR
      }
      LM(WW) {
        oR.e1xV(this.__wbg_ptr, bM(WW) ? 16777215 : WW)
      }
      HM(WW) {
        return oR.Uvz6(this.__wbg_ptr, WW) >>> 0
      }
      qw() {
        return oR.xBS7(this.__wbg_ptr) >>> 0
      }
      DM() {
        const WW = oR.G38V(this.__wbg_ptr);
        if (WW[2]) throw TR(WW[1]);
        return 0 !== WW[0]
      }
      ZM() {
        return oR.Mi0V(this.__wbg_ptr) >>> 0
      }
      SM() {
        return oR.IRI0(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (BW.prototype[Symbol.dispose] = BW.prototype.free);
    class tR {
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, KW.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        oR.eTA3(WW, 0)
      }
      compute(WW, RW, MW, wW) {
        var CW = bM(wW) ? 0 : tM(wW, oR.mBkS, oR.SMjR),
          zR = lR;
        const AW = oR.kbXv(this.__wbg_ptr, WW, bM(RW) ? Number.MAX_SAFE_INTEGER : RW | 0, MW, CW, zR);
        if (AW[2]) throw TR(AW[1]);
        return AW[0] >>> 0
      }
      pM(WW) {
        const RW = tM(WW, oR.mBkS, oR.SMjR),
          MW = lR;
        oR.CaIB(this.__wbg_ptr, RW, MW)
      }
      uM() {
        return oR.ojj5(this.__wbg_ptr) >>> 0
      }
      OM() {
        return oR.edcW(this.__wbg_ptr) >>> 0
      }
      Ww(WW) {
        const RW = oR.xfh1(this.__wbg_ptr, WW);
        if (RW[2]) throw TR(RW[1]);
        return RW[0] >>> 0
      }
      constructor(WW, RW, MW, wW, CW, zR) {
        const AW = yM(WW, oR.mBkS),
          bR = lR,
          yR = BR(RW, oR.mBkS),
          NW = lR,
          eW = NR(MW, oR.mBkS),
          BW = lR,
          tR = eR(wW, oR.mBkS),
          TW = lR,
          gR = oR.NS4c(AW, bR, yR, NW, eW, BW, tR, TW, CW, zR);
        if (gR[2]) throw TR(gR[1]);
        return this.__wbg_ptr = gR[0], KW.register(this, this.__wbg_ptr, this), this
      }
      qw() {
        return oR.n1CF(this.__wbg_ptr) >>> 0
      }
      DM() {
        const WW = oR.FKNj(this.__wbg_ptr);
        if (WW[2]) throw TR(WW[1]);
        return 0 !== WW[0]
      }
      ZM() {
        return oR.z78Q(this.__wbg_ptr) >>> 0
      }
    }

    function TW() {
      const WW = oR.oyNW();
      var RW = GW(WW[0], WW[1]).slice();
      return oR.K7gD(WW[0], 4 * WW[1], 4), RW
    }

    function gR(WW, RW) {
      let MW, wW;
      try {
        const CW = yM(WW, oR.mBkS),
          zR = lR,
          AW = tM(RW, oR.mBkS, oR.SMjR),
          bR = lR,
          yR = oR.BNsK(CW, zR, AW, bR);
        return MW = yR[0], wW = yR[1], ZW(yR[0], yR[1])
      } finally {
        oR.K7gD(MW, wW, 1)
      }
    }

    function iR() {
      const WW = oR.yWhI();
      var RW = GW(WW[0], WW[1]).slice();
      return oR.K7gD(WW[0], 4 * WW[1], 4), RW
    }

    function YW(WW) {
      return 0 !== oR.SFA5(WW)
    }

    function JW(WW, RW) {
      const MW = tM(WW, oR.mBkS, oR.SMjR),
        wW = lR,
        CW = oR.bONe(MW, wW, RW);
      if (CW[1]) throw TR(CW[0])
    }

    function PW() {
      oR.UILX()
    }

    function IW() {
      return oR.ijiU() >>> 0
    }

    function oW(WW) {
      return 0 !== oR.JCWu(WW)
    }

    function lW(WW) {
      return 0 !== oR.vxNu(WW)
    }

    function FW(WW) {
      oR.W22z(WW)
    }

    function fW() {
      return oR.zqSA() >>> 0
    }

    function QW() {
      return oR.lTO4() >>> 0
    }

    function rR() {
      return 0 !== oR.YA0k()
    }

    function cR() {
      const WW = oR.HTD4();
      var RW = GW(WW[0], WW[1]).slice();
      return oR.K7gD(WW[0], 4 * WW[1], 4), RW
    }

    function XW() {
      const WW = oR.hWr1();
      var RW = GW(WW[0], WW[1]).slice();
      return oR.K7gD(WW[0], 4 * WW[1], 4), RW
    }

    function jR() {
      const WW = oR.sNgD();
      var RW = GW(WW[0], WW[1]).slice();
      return oR.K7gD(WW[0], 4 * WW[1], 4), RW
    }

    function kR() {
      return oR.QUrJ() >>> 0
    }

    function aR() {
      oR.rM5l()
    }

    function sW() {
      let WW, RW;
      try {
        const MW = oR.fic2();
        return WW = MW[0], RW = MW[1], ZW(MW[0], MW[1])
      } finally {
        oR.K7gD(WW, RW, 1)
      }
    }

    function dW(WW) {
      oR.rJ4A(uW(WW))
    }

    function pW() {
      return {
        __proto__: null,
        RcFR: {
          __proto__: null,
          p6f0: function(WW, RW) {
            return uW(Error(ZW(WW, RW)))
          },
          eYqt: function(WW, RW) {
            throw new Error(ZW(WW, RW))
          },
          igsX: function(WW) {
            CR(WW).call()
          },
          P7C1: function(WW, RW) {
            console.error(ZW(WW, RW))
          },
          UBIT: function() {
            return performance.now()
          },
          umuG: function(WW) {
            TR(WW)
          }
        }
      }
    }
    Symbol.dispose && (tR.prototype[Symbol.dispose] = tR.prototype.free);
    const hW = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((WW => oR.ktqv(WW, 1))),
      UW = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((WW => oR.c9t4(WW, 1))),
      EW = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((WW => oR.MU3Q(WW, 1))),
      VW = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((WW => oR.gHWq(WW, 1))),
      mR = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((WW => oR.y7cK(WW, 1))),
      xR = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((WW => oR.d4VG(WW, 1))),
      vR = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((WW => oR.RfCn(WW, 1))),
      KW = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((WW => oR.eTA3(WW, 1)));

    function uW(WW) {
      AR === zM.length && zM.push(zM.length + 1);
      const RW = AR;
      return AR = zM[RW], zM[RW] = WW, RW
    }

    function OW(WW, RW) {
      if (!(WW instanceof RW)) throw new Error(`expected instance of ${RW.name}`)
    }

    function nW(WW, RW) {
      return WW >>>= 0, DW().subarray(WW / 8, WW / 8 + RW)
    }

    function GW(WW, RW) {
      return WW >>>= 0, RR().subarray(WW / 4, WW / 4 + RW)
    }

    function LW(WW, RW) {
      return WW >>>= 0, wR().subarray(WW / 1, WW / 1 + RW)
    }
    let HW = null;

    function DW() {
      return null !== HW && 0 !== HW.byteLength || (HW = new Float64Array(oR.memory.buffer)), HW
    }
    let qR = null;

    function ZW(WW, RW) {
      return function(WW, RW) {
        YR += RW, YR >= iM && (gM = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), gM.decode(), YR = RW);
        return gM.decode(wR().subarray(WW, WW + RW))
      }(WW >>> 0, RW)
    }
    let SW = null;
    let WR = null;

    function RR() {
      return null !== WR && 0 !== WR.byteLength || (WR = new Uint32Array(oR.memory.buffer)), WR
    }
    let MR = null;

    function wR() {
      return null !== MR && 0 !== MR.byteLength || (MR = new Uint8Array(oR.memory.buffer)), MR
    }

    function CR(WW) {
      return zM[WW]
    }
    let zM = new Array(1024).fill(void 0);
    zM.push(void 0, null, !0, !1);
    let AR = zM.length;

    function bM(WW) {
      return void 0 === WW || null === WW
    }

    function yM(WW, RW) {
      const MW = RW(2 * WW.length, 2) >>> 0;
      return (null !== SW && 0 !== SW.byteLength || (SW = new Uint16Array(oR.memory.buffer)), SW).set(WW, MW / 2), lR = WW.length, MW
    }

    function NR(WW, RW) {
      const MW = RW(4 * WW.length, 4) >>> 0;
      return RR().set(WW, MW / 4), lR = WW.length, MW
    }

    function eR(WW, RW) {
      const MW = RW(1 * WW.length, 1) >>> 0;
      return wR().set(WW, MW / 1), lR = WW.length, MW
    }

    function BR(WW, RW) {
      const MW = RW(8 * WW.length, 8) >>> 0;
      return DW().set(WW, MW / 8), lR = WW.length, MW
    }

    function tM(WW, RW, MW) {
      if (void 0 === MW) {
        const MW = JR.encode(WW),
          wW = RW(MW.length, 1) >>> 0;
        return wR().subarray(wW, wW + MW.length).set(MW), lR = MW.length, wW
      }
      let wW = WW.length,
        CW = RW(wW, 1) >>> 0;
      const zR = wR();
      let AW = 0;
      for (; AW < wW; AW++) {
        const RW = WW.charCodeAt(AW);
        if (RW > 127) break;
        zR[CW + AW] = RW
      }
      if (AW !== wW) {
        0 !== AW && (WW = WW.slice(AW)), CW = MW(CW, wW, wW = AW + 3 * WW.length, 1) >>> 0;
        const RW = wR().subarray(CW + AW, CW + wW);
        AW += JR.encodeInto(WW, RW).written, CW = MW(CW, wW, AW, 1) >>> 0
      }
      return lR = AW, CW
    }

    function TR(WW) {
      const RW = CR(WW);
      return function(WW) {
        WW < 1028 || (zM[WW] = AR, AR = WW)
      }(WW), RW
    }
    let gM = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    gM.decode();
    const iM = 2146435072;
    let YR = 0;
    const JR = new TextEncoder;
    "encodeInto" in JR || (JR.encodeInto = function(WW, RW) {
      const MW = JR.encode(WW);
      return RW.set(MW), {
        read: WW.length,
        written: MW.length
      }
    });
    let PR, IR, oR, lR = 0;

    function FR(WW, RW) {
      return IR = WW, oR = WW.exports, PR = RW, HW = null, qR = null, SW = null, WR = null, MR = null, oR.OMs7(), oR
    }

    function fR(WW) {
      if (void 0 !== oR) return oR;
      void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
        module: WW
      } = WW) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const RW = pW();
      WW instanceof WebAssembly.Module || (WW = new WebAssembly.Module(WW));
      return FR(new WebAssembly.Instance(WW, RW), WW)
    }
    async function QR(WW) {
      if (void 0 !== oR) return oR;
      void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
        module_or_path: WW
      } = WW) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const RW = pW();
      ("string" === typeof WW || "function" === typeof Request && WW instanceof Request || "function" === typeof URL && WW instanceof URL) && (WW = fetch(WW));
      const {
        instance: MW,
        module: wW
      } = await async function(WW, RW) {
        if ("function" === typeof Response && WW instanceof Response) {
          if (!WW.ok) throw new Error(`failed to fetch Wasm: ${WW.status} ${WW.statusText} fetching '${WW.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(WW, RW)
          } catch (MW) {
            if (! function(WW) {
                switch (WW) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(WW.type) || "application/wasm" === WW.headers.get("Content-Type")) throw MW;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", MW)
          }
          const wW = await WW.arrayBuffer();
          return await WebAssembly.instantiate(wW, RW)
        } {
          const MW = await WebAssembly.instantiate(WW, RW);
          return MW instanceof WebAssembly.Instance ? {
            instance: MW,
            module: WW
          } : MW
        }
      }(await WW, RW);
      return FR(MW, wW)
    }
    var rM = MW(2793),
      cM = MW(34631);
    const XR = {
      name: rM.e,
      url: () => new MW.U(MW(34640)),
      init: QR,
      zC: wW
    };

    function jM() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XR,
        RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XR,
        MW = arguments.length > 2 ? arguments[2] : void 0;
      return (0, cM.c)(WW, RW, MW)
    }

    function kM(WW) {
      return (0, rM.X)((() => WW), wW, XR)
    }
  },
  5629: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW
    });
    var wW = MW(2801);
    const CW = {
      bloxd_wasm: () => "203c21aa685dc02d7135644abbcd3b43a006a971312aadf6b579e5c0912ba5f7",
      bloxd_wasm_client: () => "a77ff3d7010d2eb8b76b633277c458a02aa69d73a6b7b0f61b4b56c179565d82",
      bloxd_wasm_workers: () => "8f412dfdd4f30dbd2d7737bcfcbe48d8a44b2a8da10bfb2ae1b7e29d51125437",
      bloxd_wasm_models: () => "a2c24e83a17a8ea51d6d551a71c56cb26ce4162026e1cbbb094de7dc563c2466",
      bloxd_wasm_webgpu: () => "03136cbb4279f6e19dbdc7a6b27a89a1e9dbcfb41906d617400c1b8098a140cb",
      bloxd_wasm_webgl: () => "4b1a25494c2ed4cf220a7bb9a10b8c6844ff1f76c23929d2be00a88620743abd",
      bloxd_wasm_webgl1: () => "52bf789737e0035155091501532e60c5bb14c4059bdcbfb7216afa8b3715b02c",
      bloxd_wasm_replay: () => "1f5392d4ced29d91bff7aeba499f106661213b56c971b192288c4811b41cd07d",
      bloxd_wasm_recorder: () => "1fac86a86643ebd2010f3fe11c6a8cc2c6566f8162e97196ae75675bc3261673",
      bloxd_wasm_anim: () => "64cb5cc983adf707988a6c6507854d48955c50f80be9775c4150614da93910d2",
      bloxd_wasm_textures: () => "80b1e00de8cbc353671c67c9ae46a7c22ba4eb45364a0d4e33added505ec03be",
      bloxd_wasm_shader_pack: () => "13dad2e0aefbfe2a4f35d53d1b0b8cf2c467c8940e7540c4c139f66d272dac12"
    };
    var zR = MW(5631);

    function AW(WW) {
      const RW = Object.prototype.hasOwnProperty.call(CW, WW) ? CW[WW]() : void 0;
      if (void 0 !== RW) return {
        sha256: RW,
        onMismatch: zR.p
      };
      throw new wW.f(`${WW} has no release digest, so this build refuses it`)
    }
  },
  34609: (WW, RW, MW) => {
    function wW(WW, RW) {
      return new Error(`${WW}: ${RW instanceof Error?`${RW.name}: ${RW.message}`:String(RW)}`, {
        cause: RW
      })
    }
    MW.d(RW, {
      c: () => wW
    })
  },
  34600: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW,
      g: () => yR
    });
    var wW = MW(2801),
      CW = MW(5629),
      zR = MW(34609);

    function AW() {
      return new URL(new MW.U(MW(34613)).href, globalThis.location?.href).href
    }
    let bR = null;

    function yR() {
      return bR ??= (async () => (0, wW.p)(new URL(AW()), (0, CW.e)("bloxd_wasm_textures")))().catch((WW => {
        throw (0, zR.c)((0, wW.s)(WW), WW)
      })), bR
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);