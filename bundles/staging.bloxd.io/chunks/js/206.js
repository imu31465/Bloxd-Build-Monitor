export const id = 206;
export const ids = [206, 207];
export const modules = {
  35712: (DD, CD, cD) => {
    cD.d(CD, {
      reportCappedWasmFailure: () => fD,
      reportWasmFailure: () => iD
    });
    var ID = cD(3032);
    const pD = ID.e - 4;

    function iD(DD, CD, cD) {
      (0, ID.h)(DD, CD, cD, !1)
    }

    function fD(DD, CD, cD) {
      (0, ID.h)(DD, CD, cD, !1, pD)
    }
  },
  35710: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => tD,
      h: () => vD,
      k: () => ND,
      n: () => ZD
    });
    var ID = cD(35717),
      pD = cD(3525),
      iD = cD(35729),
      fD = cD(3529),
      bD = cD(35712),
      QD = cD(2744),
      wD = cD(3041),
      SD = cD(3026),
      BD = cD(712);
    const yD = "bloxdWasmFailureReported";

    function MD() {
      return "undefined" === typeof WebAssembly
    }

    function tD() {
      return (0, ID.d)()
    }

    function ZD() {
      if (MD()) return "this browser has no WebAssembly";
      const DD = (0, pD.n)();
      return "compile" === DD || "instantiate" === DD ? `the core wasm didn't load here (${(0,pD.g)()})` : null
    }
    async function oD(DD) {
      return await (0, iD.d)(iD.c, void 0, DD)
    }

    function vD() {
      MD() || (0, BD.e)((() => {
        oD()
      }))
    }

    function ND() {
      if (MD()) return async () => ((0, QD.j)("unsupported", 0), gD("unsupported", "This browser has no WebAssembly"), !1);
      const DD = {
        reloadFailedDownload: !0
      };
      return oD(DD), async () => {
        var CD;
        const cD = performance.now();
        await oD(DD);
        const ID = (performance.now() - cD) / 1e3;
        if ((0, pD.F)()) return (0, QD.j)("ready", ID), (0, fD.S)(iD.c.url()) && (0, bD.reportCappedWasmFailure)("wasm_load", wD.d.message, wD.d.code), !0;
        const BD = SD.b[null !== (CD = (0, pD.n)()) && void 0 !== CD ? CD : "call"];
        return (0, QD.j)(BD, ID), gD(BD, (0, pD.g)()), !1
      }
    }

    function gD(DD, CD) {
      (0, SD.i)(yD, `Bloxd wasm ${DD}, so the game can't start: ${CD}`, CD, DD)
    }
  },
  35739: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/bloxd_wasm_bg.be21ecc2095d6a561956.wasm"
  },
  35727: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/bloxd_wasm_textures_bg.433e7a6e17a5527d4648.wasm"
  },
  35729: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => xC,
      d: () => qC,
      e: () => JC
    });
    var ID = {};
    cD.r(ID), cD.d(ID, {
      fB: () => pD,
      EnvelopeKind: () => iD,
      bB: () => fD,
      PhysicsEngine: () => bD,
      QB: () => QD,
      wB: () => wD,
      SB: () => SD,
      BB: () => BD,
      yB: () => yD,
      tB: () => MD,
      ZB: () => tD,
      oB: () => ZD,
      vB: () => oD,
      NB: () => vD,
      default: () => PC,
      initSync: () => OC,
      gB: () => ND,
      XB: () => gD,
      mB: () => XD,
      nB: () => mD,
      OB: () => nD,
      PB: () => OD,
      HB: () => PD,
      UB: () => HD,
      xB: () => UD,
      qB: () => xD,
      JB: () => qD,
      aB: () => JD,
      VB: () => KD,
      zB: () => aD,
      jB: () => VD
    });
    class pD {
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, jD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        XC.aJmr(DD, 0)
      }
      lB() {
        const DD = XC.hlaY(this.__wbg_ptr);
        if (DD[2]) throw MC(DD[1]);
        return DD[0] >>> 0
      }
      LB() {
        return XC.KfaA(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const DD = XC.Ijjm();
        return this.__wbg_ptr = DD, jD.register(this, this.__wbg_ptr, this), this
      }
      TB() {
        return XC.cC5c(this.__wbg_ptr) >>> 0
      }
      GB(DD) {
        const CD = XC.a4eG(this.__wbg_ptr, DD);
        if (CD[2]) throw MC(CD[1]);
        return CD[0] >>> 0
      }
      RB(DD) {
        const CD = XC.zUA8(this.__wbg_ptr, DD);
        if (CD[2]) throw MC(CD[1]);
        return CD[0] >>> 0
      }
    }
    Symbol.dispose && (pD.prototype[Symbol.dispose] = pD.prototype.free);
    const iD = Object.freeze({
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
    class fD {
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, lD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        XC.ctmv(DD, 0)
      }
      YB(DD, CD) {
        const cD = XC.UJyz(this.__wbg_ptr, DD, CD);
        if (cD[2]) throw MC(cD[1]);
        return cD[0] >>> 0
      }
      WB(DD) {
        const CD = XC.q3P9(this.__wbg_ptr, DD);
        if (CD[2]) throw MC(CD[1]);
        return CD[0] >>> 0
      }
      sB() {
        XC.dlrf(this.__wbg_ptr)
      }
      static EB() {
        return XC.i5fK() >>> 0
      }
      eB() {
        return XC.JnWZ(this.__wbg_ptr) >>> 0
      }
      uB() {
        const DD = XC.F1I1(this.__wbg_ptr);
        return 0 === DD[0] ? void 0 : DD[1]
      }
      hB() {
        return XC.w1ze(this.__wbg_ptr) >>> 0
      }
      rB() {
        return XC.JRnH(this.__wbg_ptr) >>> 0
      }
      static dB() {
        return XC.jyJy() >>> 0
      }
      constructor() {
        const DD = XC.gfc5();
        return this.__wbg_ptr = DD, lD.register(this, this.__wbg_ptr, this), this
      }
      AB() {
        return XC.n6Li(this.__wbg_ptr) >>> 0
      }
      FB() {
        return XC.fKlv(this.__wbg_ptr) >>> 0
      }
      Dy() {
        return XC.LUNe(this.__wbg_ptr) >>> 0
      }
      kB(DD) {
        return XC.f8Sx(this.__wbg_ptr, DD) >>> 0
      }
      reserve(DD, CD) {
        const cD = XC.QRd2(this.__wbg_ptr, DD, CD);
        if (cD[1]) throw MC(cD[0])
      }
      py(DD, CD) {
        const cD = wC(DD, XC.rJVW),
          ID = mC;
        XC.OWRP(this.__wbg_ptr, cD, ID, CD)
      }
      text() {
        let DD, CD;
        try {
          const cD = XC.Y090(this.__wbg_ptr);
          return DD = cD[0], CD = cD[1], AD(cD[0], cD[1])
        } finally {
          XC.OFct(DD, CD, 1)
        }
      }
    }
    Symbol.dispose && (fD.prototype[Symbol.dispose] = fD.prototype.free);
    class bD {
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, LD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        XC.VxGt(DD, 0)
      }
      Qy(DD, CD) {
        WD(CD, pD);
        const cD = XC.oWJA(this.__wbg_ptr, DD, CD.__wbg_ptr);
        if (cD[2]) throw MC(cD[1]);
        return cD[0] >>> 0
      }
      Sy() {
        const DD = XC.ydWZ(this.__wbg_ptr);
        if (DD[1]) throw MC(DD[0])
      }
      vy(DD, CD, cD, ID, pD, iD, fD, bD, wD, SD, BD) {
        WD(DD, QD);
        const yD = XC.YjuU(this.__wbg_ptr, DD.__wbg_ptr, CD, cD, ID, pD, iD, fD, bD, wD, SD, BD);
        if (yD[2]) throw MC(yD[1]);
        return yD[0]
      }
      Ny() {
        const DD = XC.gP0T(this.__wbg_ptr);
        var CD = sD(DD[0], DD[1]).slice();
        return XC.OFct(DD[0], 8 * DD[1], 8), CD
      }
      gy() {
        return XC.Cuwi(this.__wbg_ptr) >>> 0
      }
      Xy() {
        return XC.nMxL(this.__wbg_ptr) >>> 0
      }
      my() {
        return XC.TMcR(this.__wbg_ptr) >>> 0
      }
      constructor(DD, CD, cD, ID, pD, iD, fD, bD) {
        const QD = XC.rGfs(DD, CD, cD, ID, pD, iD, fD, bD);
        if (QD[2]) throw MC(QD[1]);
        return this.__wbg_ptr = QD[0], LD.register(this, this.__wbg_ptr, this), this
      }
      Py(DD) {
        WD(DD, pD);
        const CD = XC.Fjht(this.__wbg_ptr, DD.__wbg_ptr);
        if (CD[2]) throw MC(CD[1]);
        return CD[0] >>> 0
      }
      Hy(DD) {
        const CD = XC.AN5C(this.__wbg_ptr, DD);
        if (CD[1]) throw MC(CD[0])
      }
      Uy() {
        return XC.juJ1(this.__wbg_ptr) >>> 0
      }
      resume(DD, CD) {
        WD(DD, QD), WD(CD, pD);
        const cD = XC.xsx2(this.__wbg_ptr, DD.__wbg_ptr, CD.__wbg_ptr);
        if (cD[2]) throw MC(cD[1]);
        return cD[0] >>> 0
      }
      Vy(DD) {
        const CD = XC.m1KS(this.__wbg_ptr, DD);
        if (CD[1]) throw MC(CD[0])
      }
      ly(DD, CD) {
        WD(CD, pD);
        const cD = XC.TlAn(this.__wbg_ptr, DD, CD.__wbg_ptr);
        if (cD[1]) throw MC(cD[0])
      }
      Gy(DD) {
        const CD = BC(DD, XC.rJVW),
          cD = mC,
          ID = XC.pq7s(this.__wbg_ptr, CD, cD);
        if (ID[1]) throw MC(ID[0])
      }
      My(DD, CD, cD, ID, pD, iD) {
        const fD = XC.kEBG(this.__wbg_ptr, DD, CD, cD, ID, pD, iD);
        if (fD[1]) throw MC(fD[0])
      }
      ty(DD, CD, cD, ID) {
        const pD = wC(DD, XC.rJVW),
          iD = mC,
          fD = BC(CD, XC.rJVW),
          bD = mC,
          QD = BC(cD, XC.rJVW),
          wD = mC,
          SD = BC(ID, XC.rJVW),
          BD = mC,
          yD = XC.EhUY(this.__wbg_ptr, pD, iD, fD, bD, QD, wD, SD, BD);
        if (yD[1]) throw MC(yD[0])
      }
      ky(DD, CD) {
        WD(CD, pD);
        const cD = XC.KXq9(this.__wbg_ptr, DD, CD.__wbg_ptr);
        if (cD[1]) throw MC(cD[0])
      }
      Oy(DD, CD, cD) {
        const ID = XC.pUBQ(this.__wbg_ptr, DD, CD, cD);
        if (ID[1]) throw MC(ID[0])
      }
      Wy(DD, CD, cD, ID, pD, iD, fD, bD, wD, SD) {
        WD(DD, QD);
        return XC.gpDC(this.__wbg_ptr, DD.__wbg_ptr, CD, cD, ID, pD, iD, fD, bD, wD, SD)
      }
    }
    Symbol.dispose && (bD.prototype[Symbol.dispose] = bD.prototype.free);
    class QD {
      static __wrap(DD) {
        const CD = Object.create(QD.prototype);
        return CD.__wbg_ptr = DD, TD.register(CD, CD.__wbg_ptr, CD), CD
      }
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, TD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        XC.QRMO(DD, 0)
      }
      ey(DD) {
        const CD = XC.V8V1(this.__wbg_ptr, DD);
        if (CD[2]) throw MC(CD[1]);
        return CD[0] >>> 0
      }
      hy(DD, CD, cD) {
        return XC.XBZH(this.__wbg_ptr, DD, CD, cD)
      }
      Ay(DD, CD, cD) {
        return XC.YTpL(this.__wbg_ptr, DD, CD, cD) >>> 0
      }
      Fy(DD, CD, cD, ID) {
        return 0 !== XC.ZArT(this.__wbg_ptr, DD, CD, cD, ID)
      }
      DM() {
        XC.Smeg(this.__wbg_ptr)
      }
      cM(DD) {
        const CD = XC.j2MO(this.__wbg_ptr, DD);
        if (CD[3]) throw MC(CD[2]);
        var cD = eD(CD[0], CD[1]).slice();
        return XC.OFct(CD[0], 1 * CD[1], 1), cD
      }
      evict(DD, CD) {
        return XC.PJTH(this.__wbg_ptr, DD, CD) >>> 0
      }
      IM() {
        XC.EtvW(this.__wbg_ptr)
      }
      pM(DD, CD, cD) {
        XC.NW7h(this.__wbg_ptr, DD, CD, cD)
      }
      iM(DD) {
        const CD = XC.gLME(this.__wbg_ptr, DD);
        if (CD[1]) throw MC(CD[0])
      }
      fM() {
        return XC.A5n5(this.__wbg_ptr) >>> 0
      }
      bM() {
        return XC.Ln6a(this.__wbg_ptr) >>> 0
      }
      QM(DD, CD, cD) {
        XC.zlpK(this.__wbg_ptr, DD, CD, cD)
      }
      wM(DD, CD, cD) {
        XC.N0Uh(this.__wbg_ptr, DD, CD, cD)
      }
      SM() {
        return XC.P1Bm(this.__wbg_ptr) >>> 0
      }
      BM() {
        return XC.KyYw(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const DD = XC.coeX();
        return this.__wbg_ptr = DD, TD.register(this, this.__wbg_ptr, this), this
      }
      static yM() {
        const DD = XC.pAk4();
        return QD.__wrap(DD)
      }
      MM() {
        return XC.lVjj(this.__wbg_ptr) >>> 0
      }
      tM() {
        return XC.W4mJ(this.__wbg_ptr) >>> 0
      }
      ZM(DD, CD, cD, ID) {
        const pD = XC.hg5H(this.__wbg_ptr, DD, CD, cD, ID);
        if (pD[1]) throw MC(pD[0])
      }
      oM() {
        return XC.WP3m(this.__wbg_ptr) >>> 0
      }
      vM() {
        return XC.lQMx(this.__wbg_ptr) >>> 0
      }
      NM(DD, CD, cD, ID) {
        XC.hHcr(this.__wbg_ptr, DD, CD, cD, ID)
      }
      gM(DD) {
        XC.BzN2(this.__wbg_ptr, DD)
      }
      mM(DD, CD, cD, ID, pD) {
        const iD = SC(CD, XC.rJVW),
          fD = mC,
          bD = wC(cD, XC.rJVW),
          QD = mC,
          wD = BC(ID, XC.rJVW),
          SD = mC,
          BD = XC.lvHz(this.__wbg_ptr, DD, iD, fD, bD, QD, wD, SD, pD);
        if (BD[1]) throw MC(BD[0])
      }
      XM(DD, CD, cD, ID) {
        const pD = SC(DD, XC.rJVW),
          iD = mC,
          fD = wC(CD, XC.rJVW),
          bD = mC,
          QD = BC(cD, XC.rJVW),
          wD = mC,
          SD = SC(ID, XC.rJVW),
          BD = mC,
          yD = XC.AzbY(this.__wbg_ptr, pD, iD, fD, bD, QD, wD, SD, BD);
        if (yD[1]) throw MC(yD[0])
      }
      xM(DD) {
        const CD = SC(DD, XC.rJVW),
          cD = mC,
          ID = XC.URJd(this.__wbg_ptr, CD, cD);
        if (ID[1]) throw MC(ID[0])
      }
      qM() {
        return XC.Zaef(this.__wbg_ptr) >>> 0
      }
      JM(DD) {
        const CD = XC.xuTq(this.__wbg_ptr, DD);
        if (CD[2]) throw MC(CD[1]);
        return CD[0] >>> 0
      }
      steer() {
        return XC.pjA1(this.__wbg_ptr) >>> 0
      }
      KM() {
        const DD = XC.HZYu(this.__wbg_ptr);
        var CD = sD(DD[0], DD[1]).slice();
        return XC.OFct(DD[0], 8 * DD[1], 8), CD
      }
      aM() {
        return XC.vXEj(this.__wbg_ptr) >>> 0
      }
      qy() {
        const DD = XC.HoHr(this.__wbg_ptr);
        var CD, cD, ID = (CD = DD[0], cD = DD[1], CD >>>= 0, (null !== rD && 0 !== rD.byteLength || (rD = new Int32Array(XC.memory.buffer)), rD).subarray(CD / 4, CD / 4 + cD)).slice();
        return XC.OFct(DD[0], 4 * DD[1], 4), ID
      }
    }
    Symbol.dispose && (QD.prototype[Symbol.dispose] = QD.prototype.free);
    class wD {
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, GD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        XC.Z7tP(DD, 0)
      }
      VM(DD) {
        const CD = wC(DD, XC.rJVW),
          cD = mC,
          ID = XC.UJLF(this.__wbg_ptr, CD, cD);
        if (ID[1]) throw MC(ID[0])
      }
      zM() {
        return XC.vaq2(this.__wbg_ptr) >>> 0
      }
      jM() {
        return XC.BhNn(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const DD = XC.J9fo();
        return this.__wbg_ptr = DD, GD.register(this, this.__wbg_ptr, this), this
      }
      run(DD, CD) {
        WD(DD, QD);
        const cD = XC.a8ao(this.__wbg_ptr, DD.__wbg_ptr, CD);
        if (cD[2]) throw MC(cD[1]);
        return cD[0] >>> 0
      }
      lM(DD) {
        const CD = wC(DD, XC.rJVW),
          cD = mC;
        XC.ClaY(this.__wbg_ptr, CD, cD)
      }
      LM(DD) {
        const CD = wC(DD, XC.rJVW),
          cD = mC;
        XC.d0ZW(this.__wbg_ptr, CD, cD)
      }
    }
    Symbol.dispose && (wD.prototype[Symbol.dispose] = wD.prototype.free);
    class SD {
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, RD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        XC.Zqnt(DD, 0)
      }
      GM(DD, CD) {
        const cD = SC(DD, XC.rJVW),
          ID = mC;
        return XC.B16b(this.__wbg_ptr, cD, ID, CD) >>> 0
      }
      RM(DD, CD, cD) {
        WD(DD, QD);
        const ID = SC(cD, XC.rJVW),
          pD = mC,
          iD = XC.RDOs(this.__wbg_ptr, DD.__wbg_ptr, CD, ID, pD);
        if (iD[2]) throw MC(iD[1]);
        return iD[0] >>> 0
      }
      TM(DD) {
        return XC.bYfH(this.__wbg_ptr, DD) >>> 0
      }
      constructor() {
        const DD = XC.zjn8();
        return this.__wbg_ptr = DD, RD.register(this, this.__wbg_ptr, this), this
      }
      scan(DD, CD) {
        WD(DD, QD);
        const cD = XC.zbOu(this.__wbg_ptr, DD.__wbg_ptr, CD);
        if (cD[2]) throw MC(cD[1]);
        return cD[0] >>> 0
      }
      YM(DD) {
        const CD = SC(DD, XC.rJVW),
          cD = mC;
        XC.qCBb(this.__wbg_ptr, CD, cD)
      }
      dM() {
        return XC.CtH8(this.__wbg_ptr) >>> 0
      }
      kM() {
        return XC.VBtg(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (SD.prototype[Symbol.dispose] = SD.prototype.free);
    class BD {
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, kD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        XC.jwTH(DD, 0)
      }
      sM(DD) {
        const CD = XC.hwPS(this.__wbg_ptr, DD);
        if (CD[2]) throw MC(CD[1]);
        return CD[0] >>> 0
      }
      compute(DD, CD, cD, ID) {
        var pD = bC(ID) ? 0 : yC(ID, XC.rJVW, XC.mXav),
          iD = mC;
        const fD = XC.mo4I(this.__wbg_ptr, DD, bC(CD) ? Number.MAX_SAFE_INTEGER : CD | 0, cD, pD, iD);
        if (fD[2]) throw MC(fD[1]);
        return fD[0] >>> 0
      }
      eM(DD) {
        const CD = yC(DD, XC.rJVW, XC.mXav),
          cD = mC;
        XC.aP79(this.__wbg_ptr, CD, cD)
      }
      hM() {
        return XC.fheP(this.__wbg_ptr)
      }
      rM(DD) {
        return XC.a5By(this.__wbg_ptr, DD) >>> 0
      }
      AM() {
        return XC.oDtw(this.__wbg_ptr) >>> 0
      }
      FM() {
        return XC.EV2s(this.__wbg_ptr) >>> 0
      }
      Dt(DD, CD) {
        const cD = XC.Rvbm(this.__wbg_ptr, DD, CD);
        if (cD[1]) throw MC(cD[0])
      }
      Ct() {
        return XC.zt2Z(this.__wbg_ptr) >>> 0
      }
      ct() {
        return XC.nWmd(this.__wbg_ptr) >>> 0
      }
      ft() {
        return XC.reMH(this.__wbg_ptr) >>> 0
      }
      EM(DD, CD, cD) {
        const ID = wC(DD, XC.rJVW),
          pD = mC,
          iD = wC(CD, XC.rJVW),
          fD = mC,
          bD = XC.NydD(this.__wbg_ptr, ID, pD, iD, fD, cD);
        if (bD[1]) throw MC(bD[0])
      }
      St() {
        return XC.LQNC(this.__wbg_ptr) >>> 0
      }
      mesh(DD, CD, cD, ID, pD) {
        const iD = XC.DBRO(this.__wbg_ptr, DD, CD, cD, ID, pD);
        if (iD[2]) throw MC(iD[1]);
        return iD[0] >>> 0
      }
      constructor(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD, SD, BD, yD, MD, tD, ZD, oD, vD, ND, gD) {
        const XD = QC(DD, XC.rJVW),
          mD = mC,
          nD = BC(CD, XC.rJVW),
          OD = mC,
          PD = wC(cD, XC.rJVW),
          HD = mC,
          UD = SC(ID, XC.rJVW),
          xD = mC,
          qD = SC(pD, XC.rJVW),
          JD = mC,
          KD = wC(iD, XC.rJVW),
          aD = mC,
          VD = wC(fD, XC.rJVW),
          zD = mC,
          jD = BC(bD, XC.rJVW),
          lD = mC,
          LD = BC(QD, XC.rJVW),
          TD = mC,
          GD = SC(wD, XC.rJVW),
          RD = mC;
        var dD = bC(SD) ? 0 : QC(SD, XC.rJVW),
          YD = mC;
        const WD = wC(BD, XC.rJVW),
          sD = mC,
          ED = SC(yD, XC.rJVW),
          eD = mC;
        var uD = bC(MD) ? 0 : SC(MD, XC.rJVW),
          hD = mC;
        const rD = BC(tD, XC.rJVW),
          AD = mC,
          FD = XC.xbKs(XD, mD, nD, OD, PD, HD, UD, xD, qD, JD, KD, aD, VD, zD, jD, lD, LD, TD, GD, RD, dD, YD, WD, sD, ED, eD, uD, hD, rD, AD, ZD, oD, vD, ND, gD);
        if (FD[2]) throw MC(FD[1]);
        return this.__wbg_ptr = FD[0], kD.register(this, this.__wbg_ptr, this), this
      }
      Qt(DD, CD) {
        const cD = wC(DD, XC.rJVW),
          ID = mC,
          pD = XC.cPrR(this.__wbg_ptr, cD, ID, CD);
        if (pD[3]) throw MC(pD[2]);
        var iD = eD(pD[0], pD[1]).slice();
        return XC.OFct(pD[0], 1 * pD[1], 1), iD
      }
      Bt(DD) {
        XC.ftHJ(this.__wbg_ptr, bC(DD) ? 16777215 : DD)
      }
      yt(DD) {
        return XC.Xgrh(this.__wbg_ptr, DD) >>> 0
      }
      tt() {
        return XC.MOs7(this.__wbg_ptr) >>> 0
      }
      Mt() {
        const DD = XC.dSO9(this.__wbg_ptr);
        if (DD[2]) throw MC(DD[1]);
        return 0 !== DD[0]
      }
      Zt() {
        return XC.o1O4(this.__wbg_ptr) >>> 0
      }
      ot() {
        return XC.xFMj(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (BD.prototype[Symbol.dispose] = BD.prototype.free);
    class yD {
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, dD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        XC.nnPT(DD, 0)
      }
      compute(DD, CD, cD, ID) {
        var pD = bC(ID) ? 0 : yC(ID, XC.rJVW, XC.mXav),
          iD = mC;
        const fD = XC.laCp(this.__wbg_ptr, DD, bC(CD) ? Number.MAX_SAFE_INTEGER : CD | 0, cD, pD, iD);
        if (fD[2]) throw MC(fD[1]);
        return fD[0] >>> 0
      }
      eM(DD) {
        const CD = yC(DD, XC.rJVW, XC.mXav),
          cD = mC;
        XC.luWb(this.__wbg_ptr, CD, cD)
      }
      ct() {
        return XC.klrg(this.__wbg_ptr) >>> 0
      }
      ft() {
        return XC.qWCR(this.__wbg_ptr) >>> 0
      }
      vt(DD) {
        const CD = XC.EdAr(this.__wbg_ptr, DD);
        if (CD[2]) throw MC(CD[1]);
        return CD[0] >>> 0
      }
      constructor(DD, CD, cD, ID, pD, iD) {
        const fD = QC(DD, XC.rJVW),
          bD = mC,
          QD = BC(CD, XC.rJVW),
          wD = mC,
          SD = wC(cD, XC.rJVW),
          BD = mC,
          yD = SC(ID, XC.rJVW),
          MD = mC,
          tD = XC.r62t(fD, bD, QD, wD, SD, BD, yD, MD, pD, iD);
        if (tD[2]) throw MC(tD[1]);
        return this.__wbg_ptr = tD[0], dD.register(this, this.__wbg_ptr, this), this
      }
      tt() {
        return XC.wJpH(this.__wbg_ptr) >>> 0
      }
      Mt() {
        const DD = XC.tadY(this.__wbg_ptr);
        if (DD[2]) throw MC(DD[1]);
        return 0 !== DD[0]
      }
      Zt() {
        return XC.JcN9(this.__wbg_ptr) >>> 0
      }
    }

    function MD() {
      const DD = XC.i7jW();
      var CD = ED(DD[0], DD[1]).slice();
      return XC.OFct(DD[0], 4 * DD[1], 4), CD
    }

    function tD(DD, CD) {
      let cD, ID;
      try {
        const pD = QC(DD, XC.rJVW),
          iD = mC,
          fD = yC(CD, XC.rJVW, XC.mXav),
          bD = mC,
          QD = XC.PNnC(pD, iD, fD, bD);
        return cD = QD[0], ID = QD[1], AD(QD[0], QD[1])
      } finally {
        XC.OFct(cD, ID, 1)
      }
    }

    function ZD() {
      const DD = XC.x5fm();
      var CD = ED(DD[0], DD[1]).slice();
      return XC.OFct(DD[0], 4 * DD[1], 4), CD
    }

    function oD(DD) {
      return 0 !== XC.NGXJ(DD)
    }

    function vD(DD, CD) {
      const cD = yC(DD, XC.rJVW, XC.mXav),
        ID = mC,
        pD = XC.x6C1(cD, ID, CD);
      if (pD[1]) throw MC(pD[0])
    }

    function ND() {
      XC.bJVS()
    }

    function gD() {
      return XC.LtzH() >>> 0
    }

    function XD(DD) {
      return 0 !== XC.Yg3D(DD)
    }

    function mD(DD) {
      return 0 !== XC.zmOQ(DD)
    }

    function nD(DD) {
      XC.B1A6(DD)
    }

    function OD() {
      return XC.Tclk() >>> 0
    }

    function PD() {
      return XC.BcPJ() >>> 0
    }

    function HD() {
      return 0 !== XC.XN84()
    }

    function UD() {
      const DD = XC.XgRu();
      var CD = ED(DD[0], DD[1]).slice();
      return XC.OFct(DD[0], 4 * DD[1], 4), CD
    }

    function xD() {
      const DD = XC.KDHD();
      var CD = ED(DD[0], DD[1]).slice();
      return XC.OFct(DD[0], 4 * DD[1], 4), CD
    }

    function qD() {
      const DD = XC.ERRI();
      var CD = ED(DD[0], DD[1]).slice();
      return XC.OFct(DD[0], 4 * DD[1], 4), CD
    }

    function JD() {
      return XC.mRYx() >>> 0
    }

    function KD() {
      XC.bLH6()
    }

    function aD() {
      let DD, CD;
      try {
        const cD = XC.S7im();
        return DD = cD[0], CD = cD[1], AD(cD[0], cD[1])
      } finally {
        XC.OFct(DD, CD, 1)
      }
    }

    function VD(DD) {
      XC.ussz(YD(DD))
    }

    function zD() {
      return {
        __proto__: null,
        AEQe: {
          __proto__: null,
          fpYM: function(DD, CD) {
            return YD(Error(AD(DD, CD)))
          },
          funG: function(DD, CD) {
            throw new Error(AD(DD, CD))
          },
          w3Uc: function(DD) {
            pC(DD).call()
          },
          vVpw: function(DD, CD) {
            console.error(AD(DD, CD))
          },
          UE9t: function() {
            return performance.now()
          },
          T4wD: function(DD) {
            MC(DD)
          }
        }
      }
    }
    Symbol.dispose && (yD.prototype[Symbol.dispose] = yD.prototype.free);
    const jD = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((DD => XC.aJmr(DD, 1))),
      lD = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((DD => XC.ctmv(DD, 1))),
      LD = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((DD => XC.VxGt(DD, 1))),
      TD = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((DD => XC.QRMO(DD, 1))),
      GD = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((DD => XC.Z7tP(DD, 1))),
      RD = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((DD => XC.Zqnt(DD, 1))),
      kD = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((DD => XC.jwTH(DD, 1))),
      dD = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((DD => XC.nnPT(DD, 1)));

    function YD(DD) {
      fC === iC.length && iC.push(iC.length + 1);
      const CD = fC;
      return fC = iC[CD], iC[CD] = DD, CD
    }

    function WD(DD, CD) {
      if (!(DD instanceof CD)) throw new Error(`expected instance of ${CD.name}`)
    }

    function sD(DD, CD) {
      return DD >>>= 0, hD().subarray(DD / 8, DD / 8 + CD)
    }

    function ED(DD, CD) {
      return DD >>>= 0, CC().subarray(DD / 4, DD / 4 + CD)
    }

    function eD(DD, CD) {
      return DD >>>= 0, IC().subarray(DD / 1, DD / 1 + CD)
    }
    let uD = null;

    function hD() {
      return null !== uD && 0 !== uD.byteLength || (uD = new Float64Array(XC.memory.buffer)), uD
    }
    let rD = null;

    function AD(DD, CD) {
      return function(DD, CD) {
        oC += CD, oC >= ZC && (tC = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), tC.decode(), oC = CD);
        return tC.decode(IC().subarray(DD, DD + CD))
      }(DD >>> 0, CD)
    }
    let FD = null;
    let DC = null;

    function CC() {
      return null !== DC && 0 !== DC.byteLength || (DC = new Uint32Array(XC.memory.buffer)), DC
    }
    let cC = null;

    function IC() {
      return null !== cC && 0 !== cC.byteLength || (cC = new Uint8Array(XC.memory.buffer)), cC
    }

    function pC(DD) {
      return iC[DD]
    }
    let iC = new Array(1024).fill(void 0);
    iC.push(void 0, null, !0, !1);
    let fC = iC.length;

    function bC(DD) {
      return void 0 === DD || null === DD
    }

    function QC(DD, CD) {
      const cD = CD(2 * DD.length, 2) >>> 0;
      return (null !== FD && 0 !== FD.byteLength || (FD = new Uint16Array(XC.memory.buffer)), FD).set(DD, cD / 2), mC = DD.length, cD
    }

    function wC(DD, CD) {
      const cD = CD(4 * DD.length, 4) >>> 0;
      return CC().set(DD, cD / 4), mC = DD.length, cD
    }

    function SC(DD, CD) {
      const cD = CD(1 * DD.length, 1) >>> 0;
      return IC().set(DD, cD / 1), mC = DD.length, cD
    }

    function BC(DD, CD) {
      const cD = CD(8 * DD.length, 8) >>> 0;
      return hD().set(DD, cD / 8), mC = DD.length, cD
    }

    function yC(DD, CD, cD) {
      if (void 0 === cD) {
        const cD = vC.encode(DD),
          ID = CD(cD.length, 1) >>> 0;
        return IC().subarray(ID, ID + cD.length).set(cD), mC = cD.length, ID
      }
      let ID = DD.length,
        pD = CD(ID, 1) >>> 0;
      const iD = IC();
      let fD = 0;
      for (; fD < ID; fD++) {
        const CD = DD.charCodeAt(fD);
        if (CD > 127) break;
        iD[pD + fD] = CD
      }
      if (fD !== ID) {
        0 !== fD && (DD = DD.slice(fD)), pD = cD(pD, ID, ID = fD + 3 * DD.length, 1) >>> 0;
        const CD = IC().subarray(pD + fD, pD + ID);
        fD += vC.encodeInto(DD, CD).written, pD = cD(pD, ID, fD, 1) >>> 0
      }
      return mC = fD, pD
    }

    function MC(DD) {
      const CD = pC(DD);
      return function(DD) {
        DD < 1028 || (iC[DD] = fC, fC = DD)
      }(DD), CD
    }
    let tC = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    tC.decode();
    const ZC = 2146435072;
    let oC = 0;
    const vC = new TextEncoder;
    "encodeInto" in vC || (vC.encodeInto = function(DD, CD) {
      const cD = vC.encode(DD);
      return CD.set(cD), {
        read: DD.length,
        written: cD.length
      }
    });
    let NC, gC, XC, mC = 0;

    function nC(DD, CD) {
      return gC = DD, XC = DD.exports, NC = CD, uD = null, rD = null, FD = null, DC = null, cC = null, XC.irOQ(), XC
    }

    function OC(DD) {
      if (void 0 !== XC) return XC;
      void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
        module: DD
      } = DD) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const CD = zD();
      DD instanceof WebAssembly.Module || (DD = new WebAssembly.Module(DD));
      return nC(new WebAssembly.Instance(DD, CD), DD)
    }
    async function PC(DD) {
      if (void 0 !== XC) return XC;
      void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
        module_or_path: DD
      } = DD) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const CD = zD();
      ("string" === typeof DD || "function" === typeof Request && DD instanceof Request || "function" === typeof URL && DD instanceof URL) && (DD = fetch(DD));
      const {
        instance: cD,
        module: ID
      } = await async function(DD, CD) {
        if ("function" === typeof Response && DD instanceof Response) {
          if (!DD.ok) throw new Error(`failed to fetch Wasm: ${DD.status} ${DD.statusText} fetching '${DD.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(DD, CD)
          } catch (cD) {
            if (! function(DD) {
                switch (DD) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(DD.type) || "application/wasm" === DD.headers.get("Content-Type")) throw cD;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", cD)
          }
          const ID = await DD.arrayBuffer();
          return await WebAssembly.instantiate(ID, CD)
        } {
          const cD = await WebAssembly.instantiate(DD, CD);
          return cD instanceof WebAssembly.Instance ? {
            instance: cD,
            module: DD
          } : cD
        }
      }(await DD, CD);
      return nC(cD, ID)
    }
    var HC = cD(3525),
      UC = cD(35734);
    const xC = {
      name: HC.c,
      url: () => new cD.U(cD(35739)),
      init: PC,
      bindings: ID
    };

    function qC() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xC,
        CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xC,
        cD = arguments.length > 2 ? arguments[2] : void 0;
      return (0, UC.i)(DD, CD, cD)
    }

    function JC(DD) {
      return (0, HC.D)((() => DD), ID, xC)
    }
  },
  35719: (DD, CD, cD) => {
    function ID(DD, CD) {
      return new Error(`${DD}: ${CD instanceof Error?`${CD.name}: ${CD.message}`:String(CD)}`, {
        cause: CD
      })
    }
    cD.d(CD, {
      c: () => ID
    })
  },
  35717: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      d: () => QD
    });
    var ID = cD(3529),
      pD = cD(6372),
      iD = cD(35719);

    function fD() {
      return new URL(new cD.U(cD(35727)).href, globalThis.location?.href).href
    }
    let bD = null;

    function QD() {
      return bD ??= (async () => (0, ID.H)(new URL(fD()), (0, pD.e)("bloxd_wasm_textures")))().catch((DD => {
        throw (0, iD.c)((0, ID.L)(DD), DD)
      })), bD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);