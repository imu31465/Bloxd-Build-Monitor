export const id = 208;
export const ids = [208, 209];
export const modules = {
  36167: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      CAPPED_COUNTS_VISIT_CAP: () => bC,
      reportCappedWasmFailure: () => oC,
      reportUncappedWasmFailure: () => fC,
      reportWasmCrash: () => wC,
      reportWasmFailure: () => nC
    });
    var QC = ZC(2927);

    function wC(CC) {
      (0, QC.reportClientError)("wasm_load", CC.message, CC.code)
    }
    const bC = QC.d - 4;

    function nC(CC, zC, ZC) {
      (0, QC.reportClientError)(CC, zC, ZC, !1)
    }

    function fC(CC, zC, ZC) {
      (0, QC.reportClientError)(CC, zC, ZC, !1, 1 / 0)
    }

    function oC(CC, zC, ZC) {
      (0, QC.reportClientError)(CC, zC, ZC, !1, bC)
    }
  },
  36165: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => xC,
      h: () => iC,
      j: () => vC,
      m: () => JC
    });
    var QC = ZC(36184),
      wC = ZC(2848),
      bC = ZC(36196),
      nC = ZC(2856),
      fC = ZC(36167),
      oC = ZC(2916),
      qC = ZC(3217),
      FC = ZC(3208),
      WC = ZC(36172),
      NC = ZC(2927),
      MC = ZC(36175),
      gC = ZC(36180),
      SC = ZC(3633);
    let pC = !1;
    const PC = 40;
    var GC = ZC(666);
    const RC = "bloxdWasmFailureReported";

    function AC() {
      return "undefined" === typeof WebAssembly
    }

    function xC() {
      return (0, QC.d)()
    }

    function JC() {
      if (AC()) return "this browser has no WebAssembly";
      const CC = (0, wC.q)();
      return "compile" === CC || "instantiate" === CC ? `the core wasm didn't load here (${(0,wC.j)()})` : null
    }
    async function IC(CC) {
      return await (0, bC.e)(bC.b, void 0, CC)
    }

    function iC() {
      AC() || (0, GC.d)((() => {
        IC()
      }))
    }

    function vC() {
      if (AC()) return async () => ((0, oC.j)("unsupported", 0), eC("unsupported", "This browser has no WebAssembly"), !1);
      const CC = {
        reloadFailedDownload: !0
      };
      return IC(CC), async () => {
        var zC;
        const ZC = performance.now();
        await IC(CC);
        const QC = (performance.now() - ZC) / 1e3;
        if ((0, wC.P)()) return (0, oC.j)("ready", QC), pC || (pC = !0, (0, wC.U)((() => {
          if ("call" !== (0, wC.q)()) return;
          const CC = (0, wC.o)(),
            zC = (0, WC.n)(CC, wC.D, wC.Z),
            ZC = (0, wC.t)().buffer.byteLength,
            QC = (0, WC.i)(zC.kind, zC.refusedBytes),
            bC = QC ? "alloc_failed" : zC.kind,
            nC = (0, MC.g)(ZC),
            fC = QC ? `_r${Math.floor(Math.log2(zC.refusedBytes))}` : "",
            oC = (0, SC.e)();
          null === oC && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const qC = new Error((0, gC.d)(CC, ZC, zC));
          if (CC instanceof Error && void 0 !== CC.stack) {
            const zC = CC.stack.split("\n"),
              ZC = zC.length > PC ? [...zC.slice(0, PC / 2), ...zC.slice(-PC / 2)] : zC;
            qC.stack = ZC.join("\n")
          }(0, NC.reportClientError)("wasm_load", qC, `wasm_call_${bC}_${null!==oC&&void 0!==oC?oC:"unnamed"}_m${nC}${fC}`)
        }))), (0, nC.T)(bC.b.url()) && (0, fC.reportCappedWasmFailure)("wasm_load", qC.d.message, qC.d.code), !0;
        const GC = FC.b[null !== (zC = (0, wC.q)()) && void 0 !== zC ? zC : "call"];
        return (0, oC.j)(GC, QC), eC(GC, (0, wC.j)()), !1
      }
    }

    function eC(CC, zC) {
      (0, FC.g)(RC, `Bloxd wasm ${CC}, so the game can't start: ${zC}`, zC, CC)
    }
  },
  36180: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => fC,
      f: () => qC,
      j: () => nC,
      m: () => WC
    });
    var QC = ZC(36172),
      wC = ZC(10);
    const bC = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function nC(CC) {
      if (CC instanceof WebAssembly.RuntimeError) return !0;
      const zC = CC instanceof Error ? CC.stack : void 0;
      return "string" === typeof zC && bC.test(zC)
    }

    function fC(CC, zC, ZC) {
      var wC;
      const nC = CC instanceof Error ? CC.name : "thrown",
        fC = (CC instanceof Error && null !== (wC = CC.stack) && void 0 !== wC ? wC : "").split("\n").filter((CC => bC.test(CC))).slice(0, 8).map((CC => CC.trim())),
        oC = null === zC ? "wasm memory unknown" : `wasm memory ${Math.round(zC/2**20)} MB`,
        qC = null === ZC.panic ? "" : `, panic: ${(0,QC.m)(ZC.panic)}`,
        FC = `${nC}: ${CC instanceof Error?CC.message:String(CC)}`;
      return `${(0,QC.p)(ZC.kind,ZC.refusedBytes)} ${FC} (${oC})${qC}${fC.length>0?` | ${fC.join(" < ")}`:""}`
    }
    const oC = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function qC(CC) {
      var zC;
      let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(CC instanceof Error) || !oC.test(CC.message)) return {};
      if (!("detached" in ZC)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, wC.O)(null === (zC = (0, wC.K)(ZC, "detached")) || void 0 === zC ? void 0 : zC.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const FC = 500;

    function WC(CC) {
      let zC = "[object Object]";
      try {
        zC = String(CC)
      } catch {}
      if ("[object Object]" !== zC) return zC;
      try {
        var ZC, QC;
        return null !== (ZC = null === (QC = JSON.stringify(CC)) || void 0 === QC ? void 0 : QC.slice(0, FC)) && void 0 !== ZC ? ZC : zC
      } catch {
        return zC
      }
    }
  },
  36210: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/bloxd_wasm_bg.70f80f804c9e94c93b74.wasm"
  },
  36192: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/bloxd_wasm_textures_bg.c1374c5ae94b21c284ad.wasm"
  },
  36199: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      wW: () => QC,
      EnvelopeKind: () => wC,
      bW: () => bC,
      PhysicsEngine: () => nC,
      nW: () => fC,
      fW: () => oC,
      oW: () => qC,
      qW: () => FC,
      FW: () => WC,
      WW: () => NC,
      NW: () => MC,
      MW: () => gC,
      gW: () => SC,
      SW: () => pC,
      default: () => Iz,
      initSync: () => Jz,
      pW: () => PC,
      PW: () => GC,
      GW: () => RC,
      RW: () => AC,
      AW: () => xC,
      xW: () => JC,
      JW: () => IC,
      IW: () => iC,
      iW: () => vC,
      vW: () => eC,
      eW: () => hC,
      hW: () => KC,
      KW: () => YC,
      YW: () => dC,
      dW: () => mC
    });
    class QC {
      __destroy_into_raw() {
        const CC = this.__wbg_ptr;
        return this.__wbg_ptr = 0, EC.unregister(this), CC
      }
      free() {
        const CC = this.__destroy_into_raw();
        Rz.kI9T(CC, 0)
      }
      mW() {
        const CC = Rz.nemz(this.__wbg_ptr);
        if (CC[2]) throw Nz(CC[1]);
        return CC[0] >>> 0
      }
      HW() {
        return Rz.O8Wl(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const CC = Rz.pPBT();
        return this.__wbg_ptr = CC, EC.register(this, this.__wbg_ptr, this), this
      }
      EW() {
        return Rz.xFr0(this.__wbg_ptr) >>> 0
      }
      lW(CC) {
        const zC = Rz.fXye(this.__wbg_ptr, CC);
        if (zC[2]) throw Nz(zC[1]);
        return zC[0] >>> 0
      }
      XW(CC) {
        const zC = Rz.VqtZ(this.__wbg_ptr, CC);
        if (zC[2]) throw Nz(zC[1]);
        return zC[0] >>> 0
      }
    }
    Symbol.dispose && (QC.prototype[Symbol.dispose] = QC.prototype.free);
    const wC = Object.freeze({
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
    class bC {
      __destroy_into_raw() {
        const CC = this.__wbg_ptr;
        return this.__wbg_ptr = 0, lC.unregister(this), CC
      }
      free() {
        const CC = this.__destroy_into_raw();
        Rz.FpMs(CC, 0)
      }
      rW(CC, zC) {
        const ZC = Rz.YPaV(this.__wbg_ptr, CC, zC);
        if (ZC[2]) throw Nz(ZC[1]);
        return ZC[0] >>> 0
      }
      sW(CC) {
        const zC = Rz.bhE7(this.__wbg_ptr, CC);
        if (zC[2]) throw Nz(zC[1]);
        return zC[0] >>> 0
      }
      TW() {
        Rz.ihTZ(this.__wbg_ptr)
      }
      static aW() {
        return Rz.esD7() >>> 0
      }
      tW() {
        return Rz.xpjH(this.__wbg_ptr) >>> 0
      }
      DW() {
        const CC = Rz.sozh(this.__wbg_ptr);
        return 0 === CC[0] ? void 0 : CC[1]
      }
      jW() {
        return Rz.RDsB(this.__wbg_ptr) >>> 0
      }
      yW() {
        return Rz.KR3e(this.__wbg_ptr) >>> 0
      }
      static uW() {
        return Rz.j013() >>> 0
      }
      constructor() {
        const CC = Rz.O2HA();
        return this.__wbg_ptr = CC, lC.register(this, this.__wbg_ptr, this), this
      }
      LW() {
        return Rz.BrkE(this.__wbg_ptr) >>> 0
      }
      UW() {
        return Rz.NTGH(this.__wbg_ptr) >>> 0
      }
      BW() {
        return Rz.xank(this.__wbg_ptr) >>> 0
      }
      cW(CC) {
        return Rz.DJtR(this.__wbg_ptr, CC) >>> 0
      }
      reserve(CC, zC) {
        const ZC = Rz.U1zr(this.__wbg_ptr, CC, zC);
        if (ZC[1]) throw Nz(ZC[0])
      }
      VW(CC, zC) {
        const ZC = oz(CC, Rz.OUb0),
          QC = Az;
        Rz.gDyp(this.__wbg_ptr, ZC, QC, zC)
      }
      text() {
        let CC, zC;
        try {
          const ZC = Rz.XDXh(this.__wbg_ptr);
          return CC = ZC[0], zC = ZC[1], OC(ZC[0], ZC[1])
        } finally {
          Rz.B5Ib(CC, zC, 1)
        }
      }
    }
    Symbol.dispose && (bC.prototype[Symbol.dispose] = bC.prototype.free);
    class nC {
      __destroy_into_raw() {
        const CC = this.__wbg_ptr;
        return this.__wbg_ptr = 0, XC.unregister(this), CC
      }
      free() {
        const CC = this.__destroy_into_raw();
        Rz.z5MF(CC, 0)
      }
      zN(CC, zC) {
        tC(zC, QC);
        const ZC = Rz.XnxE(this.__wbg_ptr, CC, zC.__wbg_ptr);
        if (ZC[2]) throw Nz(ZC[1]);
        return ZC[0] >>> 0
      }
      QN() {
        const CC = Rz.vQPr(this.__wbg_ptr);
        if (CC[1]) throw Nz(CC[0])
      }
      oN(CC, zC, ZC, QC, wC, bC, nC, oC, qC, FC, WC) {
        tC(CC, fC);
        const NC = Rz.lIqf(this.__wbg_ptr, CC.__wbg_ptr, zC, ZC, QC, wC, bC, nC, oC, qC, FC, WC);
        if (NC[2]) throw Nz(NC[1]);
        return NC[0]
      }
      qN() {
        const CC = Rz.Pj14(this.__wbg_ptr);
        var zC = DC(CC[0], CC[1]).slice();
        return Rz.B5Ib(CC[0], 8 * CC[1], 8), zC
      }
      FN() {
        return Rz.CXiw(this.__wbg_ptr) >>> 0
      }
      WN() {
        return Rz.wkc8(this.__wbg_ptr) >>> 0
      }
      NN() {
        return Rz.X4Pz(this.__wbg_ptr) >>> 0
      }
      constructor(CC, zC, ZC, QC, wC, bC, nC, fC) {
        const oC = Rz.FP61(CC, zC, ZC, QC, wC, bC, nC, fC);
        if (oC[2]) throw Nz(oC[1]);
        return this.__wbg_ptr = oC[0], XC.register(this, this.__wbg_ptr, this), this
      }
      SN(CC) {
        tC(CC, QC);
        const zC = Rz.G0Bs(this.__wbg_ptr, CC.__wbg_ptr);
        if (zC[2]) throw Nz(zC[1]);
        return zC[0] >>> 0
      }
      pN(CC) {
        const zC = Rz.P6BZ(this.__wbg_ptr, CC);
        if (zC[1]) throw Nz(zC[0])
      }
      PN() {
        return Rz.iahz(this.__wbg_ptr) >>> 0
      }
      resume(CC, zC) {
        tC(CC, fC), tC(zC, QC);
        const ZC = Rz.uLnU(this.__wbg_ptr, CC.__wbg_ptr, zC.__wbg_ptr);
        if (ZC[2]) throw Nz(ZC[1]);
        return ZC[0] >>> 0
      }
      JN(CC) {
        const zC = Rz.wPEg(this.__wbg_ptr, CC);
        if (zC[1]) throw Nz(zC[0])
      }
      vN(CC, zC) {
        tC(zC, QC);
        const ZC = Rz.WA6p(this.__wbg_ptr, CC, zC.__wbg_ptr);
        if (ZC[1]) throw Nz(ZC[0])
      }
      KN(CC) {
        const zC = Fz(CC, Rz.OUb0),
          ZC = Az,
          QC = Rz.n4FT(this.__wbg_ptr, zC, ZC);
        if (QC[1]) throw Nz(QC[0])
      }
      bN(CC, zC, ZC, QC, wC, bC) {
        const nC = Rz.W7BV(this.__wbg_ptr, CC, zC, ZC, QC, wC, bC);
        if (nC[1]) throw Nz(nC[0])
      }
      nN(CC, zC, ZC, QC) {
        const wC = oz(CC, Rz.OUb0),
          bC = Az,
          nC = Fz(zC, Rz.OUb0),
          fC = Az,
          oC = Fz(ZC, Rz.OUb0),
          qC = Az,
          FC = Fz(QC, Rz.OUb0),
          WC = Az,
          NC = Rz.tjj7(this.__wbg_ptr, wC, bC, nC, fC, oC, qC, FC, WC);
        if (NC[1]) throw Nz(NC[0])
      }
      dN(CC, zC) {
        tC(zC, QC);
        const ZC = Rz.lUdo(this.__wbg_ptr, CC, zC.__wbg_ptr);
        if (ZC[1]) throw Nz(ZC[0])
      }
      gN(CC, zC, ZC) {
        const QC = Rz.uY5D(this.__wbg_ptr, CC, zC, ZC);
        if (QC[1]) throw Nz(QC[0])
      }
      HN(CC, zC, ZC, QC, wC, bC, nC, oC, qC, FC) {
        tC(CC, fC);
        return Rz.w69U(this.__wbg_ptr, CC.__wbg_ptr, zC, ZC, QC, wC, bC, nC, oC, qC, FC)
      }
    }
    Symbol.dispose && (nC.prototype[Symbol.dispose] = nC.prototype.free);
    class fC {
      static __wrap(CC) {
        const zC = Object.create(fC.prototype);
        return zC.__wbg_ptr = CC, cC.register(zC, zC.__wbg_ptr, zC), zC
      }
      __destroy_into_raw() {
        const CC = this.__wbg_ptr;
        return this.__wbg_ptr = 0, cC.unregister(this), CC
      }
      free() {
        const CC = this.__destroy_into_raw();
        Rz.UhoF(CC, 0)
      }
      XN(CC) {
        const zC = Rz.FhAZ(this.__wbg_ptr, CC);
        if (zC[2]) throw Nz(zC[1]);
        return zC[0] >>> 0
      }
      cN(CC, zC, ZC) {
        return Rz.SALm(this.__wbg_ptr, CC, zC, ZC)
      }
      uN(CC, zC, ZC) {
        return Rz.ZH51(this.__wbg_ptr, CC, zC, ZC) >>> 0
      }
      rN(CC, zC, ZC, QC) {
        return 0 !== Rz.yGT0(this.__wbg_ptr, CC, zC, ZC, QC)
      }
      sN() {
        Rz.dir0(this.__wbg_ptr)
      }
      aN(CC) {
        const zC = Rz.Jg91(this.__wbg_ptr, CC);
        if (zC[3]) throw Nz(zC[2]);
        var ZC = yC(zC[0], zC[1]).slice();
        return Rz.B5Ib(zC[0], 1 * zC[1], 1), ZC
      }
      evict(CC, zC) {
        return Rz.tuTz(this.__wbg_ptr, CC, zC) >>> 0
      }
      tN() {
        Rz.e49l(this.__wbg_ptr)
      }
      DN(CC, zC, ZC) {
        Rz.nxyw(this.__wbg_ptr, CC, zC, ZC)
      }
      jN(CC) {
        const zC = Rz.Wbzh(this.__wbg_ptr, CC);
        if (zC[1]) throw Nz(zC[0])
      }
      yN() {
        return Rz.E3tp(this.__wbg_ptr) >>> 0
      }
      LN() {
        return Rz.M31a(this.__wbg_ptr) >>> 0
      }
      UN(CC, zC, ZC) {
        Rz.AcZg(this.__wbg_ptr, CC, zC, ZC)
      }
      BN(CC, zC, ZC) {
        Rz.zKMu(this.__wbg_ptr, CC, zC, ZC)
      }
      ON() {
        return Rz.fOW3(this.__wbg_ptr) >>> 0
      }
      kN() {
        return Rz.gAKY(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const CC = Rz.bE7h();
        return this.__wbg_ptr = CC, cC.register(this, this.__wbg_ptr, this), this
      }
      static VN() {
        const CC = Rz.LFtJ();
        return fC.__wrap(CC)
      }
      CM() {
        return Rz.XWXf(this.__wbg_ptr) >>> 0
      }
      zM() {
        return Rz.YP8i(this.__wbg_ptr) >>> 0
      }
      ZM(CC, zC, ZC, QC) {
        const wC = Rz.sqPz(this.__wbg_ptr, CC, zC, ZC, QC);
        if (wC[1]) throw Nz(wC[0])
      }
      QM() {
        return Rz.XQVY(this.__wbg_ptr) >>> 0
      }
      wM() {
        return Rz.vWoj(this.__wbg_ptr) >>> 0
      }
      bM(CC, zC, ZC, QC) {
        Rz.iKtd(this.__wbg_ptr, CC, zC, ZC, QC)
      }
      nM(CC) {
        Rz.Aiui(this.__wbg_ptr, CC)
      }
      oM(CC, zC, ZC, QC, wC) {
        const bC = qz(zC, Rz.OUb0),
          nC = Az,
          fC = oz(ZC, Rz.OUb0),
          oC = Az,
          qC = Fz(QC, Rz.OUb0),
          FC = Az,
          WC = Rz.aiMN(this.__wbg_ptr, CC, bC, nC, fC, oC, qC, FC, wC);
        if (WC[1]) throw Nz(WC[0])
      }
      fM(CC, zC, ZC, QC) {
        const wC = qz(CC, Rz.OUb0),
          bC = Az,
          nC = oz(zC, Rz.OUb0),
          fC = Az,
          oC = Fz(ZC, Rz.OUb0),
          qC = Az,
          FC = qz(QC, Rz.OUb0),
          WC = Az,
          NC = Rz.aeYJ(this.__wbg_ptr, wC, bC, nC, fC, oC, qC, FC, WC);
        if (NC[1]) throw Nz(NC[0])
      }
      gM(CC) {
        const zC = qz(CC, Rz.OUb0),
          ZC = Az,
          QC = Rz.sK1A(this.__wbg_ptr, zC, ZC);
        if (QC[1]) throw Nz(QC[0])
      }
      SM() {
        return Rz.O6S0(this.__wbg_ptr) >>> 0
      }
      pM(CC) {
        const zC = Rz.zToe(this.__wbg_ptr, CC);
        if (zC[2]) throw Nz(zC[1]);
        return zC[0] >>> 0
      }
      steer() {
        return Rz.IfJk(this.__wbg_ptr) >>> 0
      }
      PM() {
        const CC = Rz.P269(this.__wbg_ptr);
        var zC = DC(CC[0], CC[1]).slice();
        return Rz.B5Ib(CC[0], 8 * CC[1], 8), zC
      }
      GM() {
        return Rz.iT7E(this.__wbg_ptr) >>> 0
      }
      RN() {
        const CC = Rz.EUAh(this.__wbg_ptr);
        var zC, ZC, QC = (zC = CC[0], ZC = CC[1], zC >>>= 0, (null !== BC && 0 !== BC.byteLength || (BC = new Int32Array(Rz.memory.buffer)), BC).subarray(zC / 4, zC / 4 + ZC)).slice();
        return Rz.B5Ib(CC[0], 4 * CC[1], 4), QC
      }
    }
    Symbol.dispose && (fC.prototype[Symbol.dispose] = fC.prototype.free);
    class oC {
      __destroy_into_raw() {
        const CC = this.__wbg_ptr;
        return this.__wbg_ptr = 0, uC.unregister(this), CC
      }
      free() {
        const CC = this.__destroy_into_raw();
        Rz.b09i(CC, 0)
      }
      RM(CC) {
        const zC = oz(CC, Rz.OUb0),
          ZC = Az,
          QC = Rz.FSaT(this.__wbg_ptr, zC, ZC);
        if (QC[1]) throw Nz(QC[0])
      }
      AM() {
        return Rz.dukk(this.__wbg_ptr) >>> 0
      }
      xM() {
        return Rz.hsLV(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const CC = Rz.mlBt();
        return this.__wbg_ptr = CC, uC.register(this, this.__wbg_ptr, this), this
      }
      run(CC, zC) {
        tC(CC, fC);
        const ZC = Rz.tV2X(this.__wbg_ptr, CC.__wbg_ptr, zC);
        if (ZC[2]) throw Nz(ZC[1]);
        return ZC[0] >>> 0
      }
      JM(CC) {
        const zC = oz(CC, Rz.OUb0),
          ZC = Az;
        Rz.nOyD(this.__wbg_ptr, zC, ZC)
      }
      IM(CC) {
        const zC = oz(CC, Rz.OUb0),
          ZC = Az;
        Rz.u5Zq(this.__wbg_ptr, zC, ZC)
      }
    }
    Symbol.dispose && (oC.prototype[Symbol.dispose] = oC.prototype.free);
    class qC {
      __destroy_into_raw() {
        const CC = this.__wbg_ptr;
        return this.__wbg_ptr = 0, rC.unregister(this), CC
      }
      free() {
        const CC = this.__destroy_into_raw();
        Rz.bFSq(CC, 0)
      }
      vM(CC, zC) {
        const ZC = qz(CC, Rz.OUb0),
          QC = Az;
        return Rz.S3RY(this.__wbg_ptr, ZC, QC, zC) >>> 0
      }
      eM(CC, zC, ZC) {
        tC(CC, fC);
        const QC = qz(ZC, Rz.OUb0),
          wC = Az,
          bC = Rz.zQZv(this.__wbg_ptr, CC.__wbg_ptr, zC, QC, wC);
        if (bC[2]) throw Nz(bC[1]);
        return bC[0] >>> 0
      }
      iM(CC) {
        return Rz.j3L5(this.__wbg_ptr, CC) >>> 0
      }
      constructor() {
        const CC = Rz.hpmA();
        return this.__wbg_ptr = CC, rC.register(this, this.__wbg_ptr, this), this
      }
      scan(CC, zC) {
        tC(CC, fC);
        const ZC = Rz.lY4B(this.__wbg_ptr, CC.__wbg_ptr, zC);
        if (ZC[2]) throw Nz(ZC[1]);
        return ZC[0] >>> 0
      }
      YM(CC) {
        const zC = qz(CC, Rz.OUb0),
          ZC = Az;
        Rz.l7uC(this.__wbg_ptr, zC, ZC)
      }
      KM() {
        return Rz.zejX(this.__wbg_ptr) >>> 0
      }
      hM() {
        return Rz.IWQD(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (qC.prototype[Symbol.dispose] = qC.prototype.free);
    class FC {
      __destroy_into_raw() {
        const CC = this.__wbg_ptr;
        return this.__wbg_ptr = 0, sC.unregister(this), CC
      }
      free() {
        const CC = this.__destroy_into_raw();
        Rz.bTPu(CC, 0)
      }
      mM(CC) {
        const zC = Rz.nsHT(this.__wbg_ptr, CC);
        if (zC[2]) throw Nz(zC[1]);
        return zC[0] >>> 0
      }
      compute(CC, zC, ZC, QC) {
        var wC = nz(QC) ? 0 : Wz(QC, Rz.OUb0, Rz.Ay9g),
          bC = Az;
        const nC = Rz.eKfY(this.__wbg_ptr, CC, nz(zC) ? Number.MAX_SAFE_INTEGER : zC | 0, ZC, wC, bC);
        if (nC[2]) throw Nz(nC[1]);
        return nC[0] >>> 0
      }
      EM(CC) {
        const zC = Wz(CC, Rz.OUb0, Rz.Ay9g),
          ZC = Az;
        Rz.Nnan(this.__wbg_ptr, zC, ZC)
      }
      XM() {
        return Rz.ysUY(this.__wbg_ptr)
      }
      cM(CC) {
        return Rz.xqWT(this.__wbg_ptr, CC) >>> 0
      }
      uM() {
        return Rz.tYvG(this.__wbg_ptr) >>> 0
      }
      rM() {
        return Rz.HALN(this.__wbg_ptr) >>> 0
      }
      sM(CC, zC) {
        const ZC = Rz.PNem(this.__wbg_ptr, CC, zC);
        if (ZC[1]) throw Nz(ZC[0])
      }
      TM() {
        return Rz.z0zl(this.__wbg_ptr) >>> 0
      }
      aM() {
        return Rz.R3xy(this.__wbg_ptr) >>> 0
      }
      tM() {
        return Rz.GIFa(this.__wbg_ptr) >>> 0
      }
      HM(CC, zC, ZC) {
        const QC = oz(CC, Rz.OUb0),
          wC = Az,
          bC = oz(zC, Rz.OUb0),
          nC = Az,
          fC = Rz.EsXx(this.__wbg_ptr, QC, wC, bC, nC, ZC);
        if (fC[1]) throw Nz(fC[0])
      }
      jM() {
        return Rz.KPcn(this.__wbg_ptr) >>> 0
      }
      mesh(CC, zC, ZC, QC, wC) {
        const bC = Rz.Uvyz(this.__wbg_ptr, CC, zC, ZC, QC, wC);
        if (bC[2]) throw Nz(bC[1]);
        return bC[0] >>> 0
      }
      constructor(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC, PC, GC, RC) {
        const AC = fz(CC, Rz.OUb0),
          xC = Az,
          JC = Fz(zC, Rz.OUb0),
          IC = Az,
          iC = oz(ZC, Rz.OUb0),
          vC = Az,
          eC = qz(QC, Rz.OUb0),
          hC = Az,
          KC = qz(wC, Rz.OUb0),
          YC = Az,
          dC = oz(bC, Rz.OUb0),
          mC = Az,
          HC = oz(nC, Rz.OUb0),
          EC = Az,
          lC = Fz(fC, Rz.OUb0),
          XC = Az,
          cC = Fz(oC, Rz.OUb0),
          uC = Az,
          rC = qz(qC, Rz.OUb0),
          TC = Az;
        var aC = nz(FC) ? 0 : fz(FC, Rz.OUb0),
          tC = Az;
        const DC = oz(WC, Rz.OUb0),
          jC = Az,
          yC = qz(NC, Rz.OUb0),
          LC = Az;
        var UC = nz(MC) ? 0 : qz(MC, Rz.OUb0),
          BC = Az;
        const OC = Fz(gC, Rz.OUb0),
          kC = Az,
          VC = Rz.OpZ4(AC, xC, JC, IC, iC, vC, eC, hC, KC, YC, dC, mC, HC, EC, lC, XC, cC, uC, rC, TC, aC, tC, DC, jC, yC, LC, UC, BC, OC, kC, SC, pC, PC, GC, RC);
        if (VC[2]) throw Nz(VC[1]);
        return this.__wbg_ptr = VC[0], sC.register(this, this.__wbg_ptr, this), this
      }
      DM(CC, zC) {
        const ZC = oz(CC, Rz.OUb0),
          QC = Az,
          wC = Rz.Uv4R(this.__wbg_ptr, ZC, QC, zC);
        if (wC[3]) throw Nz(wC[2]);
        var bC = yC(wC[0], wC[1]).slice();
        return Rz.B5Ib(wC[0], 1 * wC[1], 1), bC
      }
      yM(CC) {
        Rz.A6jB(this.__wbg_ptr, nz(CC) ? 16777215 : CC)
      }
      LM(CC) {
        return Rz.eAv3(this.__wbg_ptr, CC) >>> 0
      }
      BM() {
        return Rz.tVVT(this.__wbg_ptr) >>> 0
      }
      UM() {
        const CC = Rz.VyRG(this.__wbg_ptr);
        if (CC[2]) throw Nz(CC[1]);
        return 0 !== CC[0]
      }
      OM() {
        return Rz.MDsq(this.__wbg_ptr) >>> 0
      }
      kM() {
        return Rz.j4Wa(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (FC.prototype[Symbol.dispose] = FC.prototype.free);
    class WC {
      __destroy_into_raw() {
        const CC = this.__wbg_ptr;
        return this.__wbg_ptr = 0, TC.unregister(this), CC
      }
      free() {
        const CC = this.__destroy_into_raw();
        Rz.aAdW(CC, 0)
      }
      compute(CC, zC, ZC, QC) {
        var wC = nz(QC) ? 0 : Wz(QC, Rz.OUb0, Rz.Ay9g),
          bC = Az;
        const nC = Rz.Im9G(this.__wbg_ptr, CC, nz(zC) ? Number.MAX_SAFE_INTEGER : zC | 0, ZC, wC, bC);
        if (nC[2]) throw Nz(nC[1]);
        return nC[0] >>> 0
      }
      EM(CC) {
        const zC = Wz(CC, Rz.OUb0, Rz.Ay9g),
          ZC = Az;
        Rz.YIEU(this.__wbg_ptr, zC, ZC)
      }
      aM() {
        return Rz.kE5U(this.__wbg_ptr) >>> 0
      }
      tM() {
        return Rz.LeZK(this.__wbg_ptr) >>> 0
      }
      VM(CC) {
        const zC = Rz.JYeV(this.__wbg_ptr, CC);
        if (zC[2]) throw Nz(zC[1]);
        return zC[0] >>> 0
      }
      constructor(CC, zC, ZC, QC, wC, bC) {
        const nC = fz(CC, Rz.OUb0),
          fC = Az,
          oC = Fz(zC, Rz.OUb0),
          qC = Az,
          FC = oz(ZC, Rz.OUb0),
          WC = Az,
          NC = qz(QC, Rz.OUb0),
          MC = Az,
          gC = Rz.BJJI(nC, fC, oC, qC, FC, WC, NC, MC, wC, bC);
        if (gC[2]) throw Nz(gC[1]);
        return this.__wbg_ptr = gC[0], TC.register(this, this.__wbg_ptr, this), this
      }
      BM() {
        return Rz.z2Ge(this.__wbg_ptr) >>> 0
      }
      UM() {
        const CC = Rz.NL2l(this.__wbg_ptr);
        if (CC[2]) throw Nz(CC[1]);
        return 0 !== CC[0]
      }
      OM() {
        return Rz.pQXl(this.__wbg_ptr) >>> 0
      }
    }

    function NC() {
      const CC = Rz.eheN();
      var zC = jC(CC[0], CC[1]).slice();
      return Rz.B5Ib(CC[0], 4 * CC[1], 4), zC
    }

    function MC(CC, zC) {
      let ZC, QC;
      try {
        const wC = fz(CC, Rz.OUb0),
          bC = Az,
          nC = Wz(zC, Rz.OUb0, Rz.Ay9g),
          fC = Az,
          oC = Rz.FR24(wC, bC, nC, fC);
        return ZC = oC[0], QC = oC[1], OC(oC[0], oC[1])
      } finally {
        Rz.B5Ib(ZC, QC, 1)
      }
    }

    function gC() {
      const CC = Rz.ph5h();
      var zC = jC(CC[0], CC[1]).slice();
      return Rz.B5Ib(CC[0], 4 * CC[1], 4), zC
    }

    function SC(CC) {
      return 0 !== Rz.LwOD(CC)
    }

    function pC(CC, zC) {
      const ZC = Wz(CC, Rz.OUb0, Rz.Ay9g),
        QC = Az,
        wC = Rz.hNhe(ZC, QC, zC);
      if (wC[1]) throw Nz(wC[0])
    }

    function PC() {
      Rz.kDY9()
    }

    function GC() {
      return Rz.yLhe() >>> 0
    }

    function RC(CC) {
      return 0 !== Rz.s0HC(CC)
    }

    function AC(CC) {
      return 0 !== Rz.t2NX(CC)
    }

    function xC(CC) {
      Rz.YSSz(CC)
    }

    function JC() {
      return Rz.tScn() >>> 0
    }

    function IC() {
      return Rz.Yg2v() >>> 0
    }

    function iC() {
      return 0 !== Rz.smgW()
    }

    function vC() {
      const CC = Rz.d4Ls();
      var zC = jC(CC[0], CC[1]).slice();
      return Rz.B5Ib(CC[0], 4 * CC[1], 4), zC
    }

    function eC() {
      const CC = Rz.uNtm();
      var zC = jC(CC[0], CC[1]).slice();
      return Rz.B5Ib(CC[0], 4 * CC[1], 4), zC
    }

    function hC() {
      const CC = Rz.IgUo();
      var zC = jC(CC[0], CC[1]).slice();
      return Rz.B5Ib(CC[0], 4 * CC[1], 4), zC
    }

    function KC() {
      return Rz.Nusc() >>> 0
    }

    function YC() {
      Rz.b5RS()
    }

    function dC() {
      let CC, zC;
      try {
        const ZC = Rz.ODOG();
        return CC = ZC[0], zC = ZC[1], OC(ZC[0], ZC[1])
      } finally {
        Rz.B5Ib(CC, zC, 1)
      }
    }

    function mC(CC) {
      Rz.yWAM(aC(CC))
    }

    function HC() {
      return {
        __proto__: null,
        IWcg: {
          __proto__: null,
          nMeg: function(CC, zC) {
            return aC(Error(OC(CC, zC)))
          },
          Jst3: function(CC, zC) {
            throw new Error(OC(CC, zC))
          },
          rjs3: function(CC) {
            Qz(CC).call()
          },
          RNIv: function(CC, zC) {
            console.error(OC(CC, zC))
          },
          BUYp: function() {
            return performance.now()
          },
          EcG7: function(CC) {
            Nz(CC)
          }
        }
      }
    }
    Symbol.dispose && (WC.prototype[Symbol.dispose] = WC.prototype.free);
    const EC = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((CC => Rz.kI9T(CC, 1))),
      lC = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((CC => Rz.FpMs(CC, 1))),
      XC = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((CC => Rz.z5MF(CC, 1))),
      cC = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((CC => Rz.UhoF(CC, 1))),
      uC = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((CC => Rz.b09i(CC, 1))),
      rC = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((CC => Rz.bFSq(CC, 1))),
      sC = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((CC => Rz.bTPu(CC, 1))),
      TC = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((CC => Rz.aAdW(CC, 1)));

    function aC(CC) {
      bz === wz.length && wz.push(wz.length + 1);
      const zC = bz;
      return bz = wz[zC], wz[zC] = CC, zC
    }

    function tC(CC, zC) {
      if (!(CC instanceof zC)) throw new Error(`expected instance of ${zC.name}`)
    }

    function DC(CC, zC) {
      return CC >>>= 0, UC().subarray(CC / 8, CC / 8 + zC)
    }

    function jC(CC, zC) {
      return CC >>>= 0, Cz().subarray(CC / 4, CC / 4 + zC)
    }

    function yC(CC, zC) {
      return CC >>>= 0, Zz().subarray(CC / 1, CC / 1 + zC)
    }
    let LC = null;

    function UC() {
      return null !== LC && 0 !== LC.byteLength || (LC = new Float64Array(Rz.memory.buffer)), LC
    }
    let BC = null;

    function OC(CC, zC) {
      return function(CC, zC) {
        Sz += zC, Sz >= gz && (Mz = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Mz.decode(), Sz = zC);
        return Mz.decode(Zz().subarray(CC, CC + zC))
      }(CC >>> 0, zC)
    }
    let kC = null;
    let VC = null;

    function Cz() {
      return null !== VC && 0 !== VC.byteLength || (VC = new Uint32Array(Rz.memory.buffer)), VC
    }
    let zz = null;

    function Zz() {
      return null !== zz && 0 !== zz.byteLength || (zz = new Uint8Array(Rz.memory.buffer)), zz
    }

    function Qz(CC) {
      return wz[CC]
    }
    let wz = new Array(1024).fill(void 0);
    wz.push(void 0, null, !0, !1);
    let bz = wz.length;

    function nz(CC) {
      return void 0 === CC || null === CC
    }

    function fz(CC, zC) {
      const ZC = zC(2 * CC.length, 2) >>> 0;
      return (null !== kC && 0 !== kC.byteLength || (kC = new Uint16Array(Rz.memory.buffer)), kC).set(CC, ZC / 2), Az = CC.length, ZC
    }

    function oz(CC, zC) {
      const ZC = zC(4 * CC.length, 4) >>> 0;
      return Cz().set(CC, ZC / 4), Az = CC.length, ZC
    }

    function qz(CC, zC) {
      const ZC = zC(1 * CC.length, 1) >>> 0;
      return Zz().set(CC, ZC / 1), Az = CC.length, ZC
    }

    function Fz(CC, zC) {
      const ZC = zC(8 * CC.length, 8) >>> 0;
      return UC().set(CC, ZC / 8), Az = CC.length, ZC
    }

    function Wz(CC, zC, ZC) {
      if (void 0 === ZC) {
        const ZC = pz.encode(CC),
          QC = zC(ZC.length, 1) >>> 0;
        return Zz().subarray(QC, QC + ZC.length).set(ZC), Az = ZC.length, QC
      }
      let QC = CC.length,
        wC = zC(QC, 1) >>> 0;
      const bC = Zz();
      let nC = 0;
      for (; nC < QC; nC++) {
        const zC = CC.charCodeAt(nC);
        if (zC > 127) break;
        bC[wC + nC] = zC
      }
      if (nC !== QC) {
        0 !== nC && (CC = CC.slice(nC)), wC = ZC(wC, QC, QC = nC + 3 * CC.length, 1) >>> 0;
        const zC = Zz().subarray(wC + nC, wC + QC);
        nC += pz.encodeInto(CC, zC).written, wC = ZC(wC, QC, nC, 1) >>> 0
      }
      return Az = nC, wC
    }

    function Nz(CC) {
      const zC = Qz(CC);
      return function(CC) {
        CC < 1028 || (wz[CC] = bz, bz = CC)
      }(CC), zC
    }
    let Mz = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Mz.decode();
    const gz = 2146435072;
    let Sz = 0;
    const pz = new TextEncoder;
    "encodeInto" in pz || (pz.encodeInto = function(CC, zC) {
      const ZC = pz.encode(CC);
      return zC.set(ZC), {
        read: CC.length,
        written: ZC.length
      }
    });
    let Pz, Gz, Rz, Az = 0;

    function xz(CC, zC) {
      return Gz = CC, Rz = CC.exports, Pz = zC, LC = null, BC = null, kC = null, VC = null, zz = null, Rz.ZUVu(), Rz
    }

    function Jz(CC) {
      if (void 0 !== Rz) return Rz;
      void 0 !== CC && (Object.getPrototypeOf(CC) === Object.prototype ? ({
        module: CC
      } = CC) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const zC = HC();
      CC instanceof WebAssembly.Module || (CC = new WebAssembly.Module(CC));
      return xz(new WebAssembly.Instance(CC, zC), CC)
    }
    async function Iz(CC) {
      if (void 0 !== Rz) return Rz;
      void 0 !== CC && (Object.getPrototypeOf(CC) === Object.prototype ? ({
        module_or_path: CC
      } = CC) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const zC = HC();
      ("string" === typeof CC || "function" === typeof Request && CC instanceof Request || "function" === typeof URL && CC instanceof URL) && (CC = fetch(CC));
      const {
        instance: ZC,
        module: QC
      } = await async function(CC, zC) {
        if ("function" === typeof Response && CC instanceof Response) {
          if (!CC.ok) throw new Error(`failed to fetch Wasm: ${CC.status} ${CC.statusText} fetching '${CC.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(CC, zC)
          } catch (ZC) {
            if (! function(CC) {
                switch (CC) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(CC.type) || "application/wasm" === CC.headers.get("Content-Type")) throw ZC;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ZC)
          }
          const QC = await CC.arrayBuffer();
          return await WebAssembly.instantiate(QC, zC)
        } {
          const ZC = await WebAssembly.instantiate(CC, zC);
          return ZC instanceof WebAssembly.Instance ? {
            instance: ZC,
            module: CC
          } : ZC
        }
      }(await CC, zC);
      return xz(ZC, QC)
    }
  },
  36196: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC,
      e: () => fC,
      f: () => oC
    });
    var QC = ZC(36199),
      wC = ZC(2848),
      bC = ZC(36201);
    const nC = {
      name: wC.d,
      url: () => new ZC.U(ZC(36210)),
      init: QC.default,
      bindings: QC
    };

    function fC() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nC,
        zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nC,
        ZC = arguments.length > 2 ? arguments[2] : void 0;
      return (0, bC.h)(CC, zC, ZC)
    }

    function oC(CC) {
      return (0, wC.K)((() => CC), QC, nC)
    }
  },
  36189: (CC, zC, ZC) => {
    function QC(CC, zC) {
      return new Error(`${CC}: ${zC instanceof Error?`${zC.name}: ${zC.message}`:String(zC)}`, {
        cause: zC
      })
    }
    ZC.d(zC, {
      e: () => QC
    })
  },
  36184: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC,
      d: () => oC
    });
    var QC = ZC(2856),
      wC = ZC(6616),
      bC = ZC(36189);

    function nC() {
      return new URL(new ZC.U(ZC(36192)).href, globalThis.location?.href).href
    }
    let fC = null;

    function oC() {
      return fC ??= (async () => (0, QC.I)(new URL(nC()), (0, wC.e)("bloxd_wasm_textures")))().catch((CC => {
        throw (0, bC.e)((0, QC.P)(CC), CC)
      })), fC
    }
  },
  36172: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC,
      i: () => bC,
      m: () => oC,
      n: () => nC,
      p: () => wC
    });
    const QC = /^alloc_failed (\d+) bytes$/;

    function wC(CC, zC) {
      return bC(CC, zC) ? `trap=alloc_failed ${zC} bytes` : `trap=${CC}`
    }

    function bC(CC, zC) {
      return "unreachable" === CC && zC > 0
    }

    function nC(CC, zC, ZC) {
      const QC = function(CC) {
        return CC instanceof WebAssembly.RuntimeError ? /unreachable/i.test(CC.message) ? "unreachable" : /out of bounds/i.test(CC.message) ? "out_of_bounds" : "runtime_error" : (CC instanceof RangeError || CC instanceof Error && "InternalError" === CC.name) && /call stack|recursion/i.test(CC.message) ? "stack_overflow" : "js_error"
      }(CC);
      if ("unreachable" !== QC) return {
        kind: QC,
        panic: null,
        refusedBytes: 0
      };
      const wC = zC(),
        bC = ZC();
      return {
        kind: QC,
        panic: bC > 0 ? null : wC,
        refusedBytes: bC
      }
    }
    const fC = 300;

    function oC(CC) {
      return CC.replace(/\s*\n\s*/g, " / ").slice(0, fC)
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);