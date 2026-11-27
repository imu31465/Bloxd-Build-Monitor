export const id = 219;
export const ids = [218, 219];
export const modules = {
  35078: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      CAPPED_COUNTS_VISIT_CAP: () => NW,
      reportCappedWasmFailure: () => cW,
      reportUncappedWasmFailure: () => LW,
      reportWasmCrash: () => EW,
      reportWasmFailure: () => PW
    });
    var mW = OW(1888);

    function EW(WW) {
      (0, mW.reportClientError)("wasm_load", WW.message, WW.code)
    }
    const NW = mW.MAX_ERRORS_PER_VISIT - 4;

    function PW(WW, iW, OW, EW) {
      (0, mW.reportClientError)(WW, iW, OW, !1, mW.MAX_ERRORS_PER_VISIT, {
        context: EW
      })
    }

    function LW(WW, iW, OW, EW) {
      (0, mW.reportClientError)(WW, iW, OW, !1, 1 / 0, {
        context: EW
      })
    }

    function cW(WW, iW, OW, EW) {
      (0, mW.reportClientError)(WW, iW, OW, !1, NW, {
        context: EW
      })
    }
  },
  37250: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => SW,
      g: () => TW,
      j: () => JW,
      l: () => YW
    });
    var mW = OW(37271),
      EW = OW(2381),
      NW = OW(37286),
      PW = OW(2388),
      LW = OW(35078),
      cW = OW(3974),
      wW = OW(4417),
      tW = OW(4409),
      ZW = OW(37257),
      xW = OW(1888),
      lW = OW(37260),
      AW = OW(37265),
      bW = OW(2372);
    let jW = !1;
    const UW = 40;
    var kW = OW(299),
      sW = OW(4816);
    const MW = "bloxdWasmFailureReported";

    function KW() {
      return "undefined" === typeof WebAssembly
    }

    function SW() {
      return (0, mW.f)()
    }

    function YW() {
      if (KW()) return "this browser has no WebAssembly";
      const WW = (0, EW.p)();
      return "compile" === WW || "instantiate" === WW ? `the core wasm didn't load here (${(0,EW.h)()})` : null
    }
    async function yW(WW) {
      return await (0, kW.p)(), await (0, NW.f)(NW.e, void 0, WW)
    }

    function TW() {
      KW() || (0, sW.e)((() => {
        yW()
      }))
    }

    function JW() {
      if (KW()) return async () => ((0, cW.d)("unsupported", 0), hW("unsupported", "This browser has no WebAssembly"), !1);
      const WW = {
        reloadFailedDownload: !0
      };
      return yW(WW), async () => {
        var iW;
        const OW = performance.now();
        await yW(WW);
        const mW = (performance.now() - OW) / 1e3;
        if ((0, EW.R)()) return (0, cW.d)("ready", mW), jW || (jW = !0, (0, EW.Y)((() => {
          if ("call" !== (0, EW.p)()) return;
          const WW = (0, EW.m)(),
            iW = (0, ZW.l)(WW, EW.H, EW.eb),
            OW = (0, EW.v)().buffer.byteLength,
            mW = (0, ZW.e)(iW.kind, iW.refusedBytes),
            NW = mW ? "alloc_failed" : iW.kind,
            PW = (0, lW.h)(OW),
            LW = mW ? `_r${Math.floor(Math.log2(iW.refusedBytes))}` : "",
            cW = (0, bW.e)();
          null === cW && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const wW = new Error((0, AW.b)(WW, OW, iW));
          if (WW instanceof Error && void 0 !== WW.stack) {
            const iW = WW.stack.split("\n"),
              OW = iW.length > UW ? [...iW.slice(0, UW / 2), ...iW.slice(-UW / 2)] : iW;
            wW.stack = OW.join("\n")
          }(0, xW.reportClientError)("wasm_load", wW, `wasm_call_${NW}_${null!==cW&&void 0!==cW?cW:"unnamed"}_m${PW}${LW}`)
        }))), (0, PW.J)(NW.e.url()) && (0, LW.reportCappedWasmFailure)("wasm_load", wW.e.message, wW.e.code), !0;
        const kW = tW.b[null !== (iW = (0, EW.p)()) && void 0 !== iW ? iW : "call"];
        return (0, cW.d)(kW, mW), hW(kW, (0, EW.h)()), !1
      }
    }

    function hW(WW, iW) {
      (0, tW.j)(MW, `Bloxd wasm ${WW}, so the game can't start: ${iW}`, iW, WW)
    }
  },
  37306: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bloxd_wasm_bg.c887ae513bec2c674549.wasm"
  },
  37283: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bloxd_wasm_textures_bg.5f6ebeba7b776ee2ab3c.wasm"
  },
  37295: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      NO: () => mW,
      EnvelopeKind: () => EW,
      TO: () => NW,
      PhysicsEngine: () => PW,
      HE: () => LW,
      BE: () => cW,
      AN: () => wW,
      IN: () => tW,
      VP: () => ZW,
      SL: () => xW,
      cc: () => lW,
      ec: () => AW,
      ac: () => bW,
      sw: () => jW,
      default: () => Yi,
      initSync: () => Si,
      qt: () => UW,
      dZ: () => kW,
      eZ: () => sW,
      vZ: () => MW,
      gZ: () => KW,
      DZ: () => SW,
      VZ: () => YW,
      pZ: () => yW,
      fZ: () => TW,
      CZ: () => JW,
      XZ: () => hW,
      BZ: () => HW,
      qZ: () => nW,
      RZ: () => uW,
      GZ: () => oW
    });
    class mW {
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, eW.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        si.hZNs(WW, 0)
      }
      IZ() {
        const WW = si.QvcQ(this.__wbg_ptr);
        if (WW[2]) throw xi(WW[1]);
        return WW[0] >>> 0
      }
      aZ() {
        return si.qwgF(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const WW = si.pt1D();
        return this.__wbg_ptr = WW, eW.register(this, this.__wbg_ptr, this), this
      }
      rZ() {
        return si.jY9D(this.__wbg_ptr) >>> 0
      }
      zZ(WW) {
        const iW = si.t9fM(this.__wbg_ptr, WW);
        if (iW[2]) throw xi(iW[1]);
        return iW[0] >>> 0
      }
      FZ(WW) {
        const iW = si.jcIu(this.__wbg_ptr, WW);
        if (iW[2]) throw xi(iW[1]);
        return iW[0] >>> 0
      }
    }
    Symbol.dispose && (mW.prototype[Symbol.dispose] = mW.prototype.free);
    const EW = Object.freeze({
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
    class NW {
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, vW.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        si.UAWg(WW, 0)
      }
      ix(WW, iW) {
        const OW = si.JuoC(this.__wbg_ptr, WW, iW);
        if (OW[2]) throw xi(OW[1]);
        return OW[0] >>> 0
      }
      Ox(WW) {
        const iW = si.xrS5(this.__wbg_ptr, WW);
        if (iW[2]) throw xi(iW[1]);
        return iW[0] >>> 0
      }
      mx() {
        si.JBxm(this.__wbg_ptr)
      }
      static Ex() {
        return si.gsbE() >>> 0
      }
      Nx() {
        return si.VDVM(this.__wbg_ptr) >>> 0
      }
      Px() {
        const WW = si.yNEw(this.__wbg_ptr);
        return 0 === WW[0] ? void 0 : WW[1]
      }
      Lx() {
        return si.kgof(this.__wbg_ptr) >>> 0
      }
      wx() {
        return si.kkpA(this.__wbg_ptr) >>> 0
      }
      static Wx() {
        return si.YrbY() >>> 0
      }
      constructor() {
        const WW = si.MaLa();
        return this.__wbg_ptr = WW, vW.register(this, this.__wbg_ptr, this), this
      }
      tx() {
        return si.g6A9(this.__wbg_ptr) >>> 0
      }
      Zx() {
        return si.aqpx(this.__wbg_ptr) >>> 0
      }
      lx() {
        return si.RVbi(this.__wbg_ptr) >>> 0
      }
      QZ(WW) {
        return si.lL0s(this.__wbg_ptr, WW) >>> 0
      }
      reserve(WW, iW) {
        const OW = si.mk5h(this.__wbg_ptr, WW, iW);
        if (OW[1]) throw xi(OW[0])
      }
      jx(WW, iW) {
        const OW = ci(WW, si.qZbx),
          mW = Mi;
        si.Ci2h(this.__wbg_ptr, OW, mW, iW)
      }
      text() {
        let WW, iW;
        try {
          const OW = si.Paiz(this.__wbg_ptr);
          return WW = OW[0], iW = OW[1], zW(OW[0], OW[1])
        } finally {
          si.NQBs(WW, iW, 1)
        }
      }
    }
    Symbol.dispose && (NW.prototype[Symbol.dispose] = NW.prototype.free);
    class PW {
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, gW.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        si.Joyz(WW, 0)
      }
      kx(WW, iW) {
        BW(iW, mW);
        const OW = si.Uc1K(this.__wbg_ptr, WW, iW.__wbg_ptr);
        if (OW[2]) throw xi(OW[1]);
        return OW[0] >>> 0
      }
      sx() {
        const WW = si.rs5P(this.__wbg_ptr);
        if (WW[1]) throw xi(WW[0])
      }
      Yx(WW, iW, OW, mW, EW, NW, PW, cW, wW, tW, ZW) {
        BW(WW, LW);
        const xW = si.fqRV(this.__wbg_ptr, WW.__wbg_ptr, iW, OW, mW, EW, NW, PW, cW, wW, tW, ZW);
        if (xW[2]) throw xi(xW[1]);
        return xW[0]
      }
      yx() {
        const WW = si.P264(this.__wbg_ptr);
        var iW = qW(WW[0], WW[1]).slice();
        return si.NQBs(WW[0], 8 * WW[1], 8), iW
      }
      Tx() {
        return si.ygKB(this.__wbg_ptr) >>> 0
      }
      Jx() {
        return si.FV6x(this.__wbg_ptr) >>> 0
      }
      hx() {
        return si.JkTG(this.__wbg_ptr) >>> 0
      }
      constructor(WW, iW, OW, mW, EW, NW, PW, LW) {
        const cW = si.Fv4r(WW, iW, OW, mW, EW, NW, PW, LW);
        if (cW[2]) throw xi(cW[1]);
        return this.__wbg_ptr = cW[0], gW.register(this, this.__wbg_ptr, this), this
      }
      vx(WW) {
        BW(WW, mW);
        const iW = si.kibH(this.__wbg_ptr, WW.__wbg_ptr);
        if (iW[2]) throw xi(iW[1]);
        return iW[0] >>> 0
      }
      gx(WW) {
        const iW = si.CRSh(this.__wbg_ptr, WW);
        if (iW[1]) throw xi(iW[0])
      }
      Dx() {
        return si.g3Zk(this.__wbg_ptr) >>> 0
      }
      resume(WW, iW) {
        BW(WW, LW), BW(iW, mW);
        const OW = si.WTcv(this.__wbg_ptr, WW.__wbg_ptr, iW.__wbg_ptr);
        if (OW[2]) throw xi(OW[1]);
        return OW[0] >>> 0
      }
      qx(WW) {
        const iW = si.uEig(this.__wbg_ptr, WW);
        if (iW[1]) throw xi(iW[0])
      }
      Ix(WW, iW) {
        BW(iW, mW);
        const OW = si.spWb(this.__wbg_ptr, WW, iW.__wbg_ptr);
        if (OW[1]) throw xi(OW[0])
      }
      Qx(WW) {
        const iW = ti(WW, si.qZbx),
          OW = Mi,
          mW = si.DDZq(this.__wbg_ptr, iW, OW);
        if (mW[1]) throw xi(mW[0])
      }
      Kx(WW, iW, OW, mW, EW, NW) {
        const PW = si.Vrdp(this.__wbg_ptr, WW, iW, OW, mW, EW, NW);
        if (PW[1]) throw xi(PW[0])
      }
      Sx(WW, iW, OW, mW) {
        const EW = ci(WW, si.qZbx),
          NW = Mi,
          PW = ti(iW, si.qZbx),
          LW = Mi,
          cW = ti(OW, si.qZbx),
          wW = Mi,
          tW = ti(mW, si.qZbx),
          ZW = Mi,
          xW = si.dXJO(this.__wbg_ptr, EW, NW, PW, LW, cW, wW, tW, ZW);
        if (xW[1]) throw xi(xW[0])
      }
      il(WW, iW) {
        BW(iW, mW);
        const OW = si.grTy(this.__wbg_ptr, WW, iW.__wbg_ptr);
        if (OW[1]) throw xi(OW[0])
      }
      nx(WW, iW, OW) {
        const mW = si.dhgp(this.__wbg_ptr, WW, iW, OW);
        if (mW[1]) throw xi(mW[0])
      }
      ml(WW, iW, OW, mW, EW, NW, PW, cW, wW, tW) {
        BW(WW, LW);
        return si.fwQk(this.__wbg_ptr, WW.__wbg_ptr, iW, OW, mW, EW, NW, PW, cW, wW, tW)
      }
    }
    Symbol.dispose && (PW.prototype[Symbol.dispose] = PW.prototype.free);
    class LW {
      static __wrap(WW) {
        const iW = Object.create(LW.prototype);
        return iW.__wbg_ptr = WW, DW.register(iW, iW.__wbg_ptr, iW), iW
      }
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, DW.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        si.cghE(WW, 0)
      }
      Nl(WW) {
        const iW = si.fH5X(this.__wbg_ptr, WW);
        if (iW[2]) throw xi(iW[1]);
        return iW[0] >>> 0
      }
      Pl(WW, iW, OW) {
        return si.ss4E(this.__wbg_ptr, WW, iW, OW)
      }
      Ll(WW, iW, OW) {
        return si.H4ae(this.__wbg_ptr, WW, iW, OW) >>> 0
      }
      cl(WW, iW, OW, mW) {
        return 0 !== si.hNrn(this.__wbg_ptr, WW, iW, OW, mW)
      }
      wl() {
        si.Iif8(this.__wbg_ptr)
      }
      tl(WW) {
        const iW = si.yQ2G(this.__wbg_ptr, WW);
        if (iW[3]) throw xi(iW[2]);
        var OW = GW(iW[0], iW[1]).slice();
        return si.NQBs(iW[0], 1 * iW[1], 1), OW
      }
      evict(WW, iW) {
        return si.QDB5(this.__wbg_ptr, WW, iW) >>> 0
      }
      Zl() {
        si.OWUS(this.__wbg_ptr)
      }
      xl(WW, iW, OW) {
        si.d9jo(this.__wbg_ptr, WW, iW, OW)
      }
      ll(WW) {
        const iW = si.PRuS(this.__wbg_ptr, WW);
        if (iW[1]) throw xi(iW[0])
      }
      Al() {
        return si.X7cP(this.__wbg_ptr) >>> 0
      }
      bl() {
        return si.R8XC(this.__wbg_ptr) >>> 0
      }
      jl(WW, iW, OW) {
        si.wzEc(this.__wbg_ptr, WW, iW, OW)
      }
      Ul(WW, iW, OW) {
        si.KaiG(this.__wbg_ptr, WW, iW, OW)
      }
      kl() {
        return si.qGEt(this.__wbg_ptr) >>> 0
      }
      sl() {
        return si.tl6N(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const WW = si.JsGL();
        return this.__wbg_ptr = WW, DW.register(this, this.__wbg_ptr, this), this
      }
      static Ml() {
        const WW = si.fQZO();
        return LW.__wrap(WW)
      }
      Kl() {
        return si.xw45(this.__wbg_ptr) >>> 0
      }
      Sl() {
        return si.kGj6(this.__wbg_ptr) >>> 0
      }
      Yl(WW, iW, OW, mW) {
        const EW = si.Y2zd(this.__wbg_ptr, WW, iW, OW, mW);
        if (EW[1]) throw xi(EW[0])
      }
      yl() {
        return si.n6HT(this.__wbg_ptr) >>> 0
      }
      Tl() {
        return si.GkgU(this.__wbg_ptr) >>> 0
      }
      Jl(WW, iW, OW, mW) {
        si.dYab(this.__wbg_ptr, WW, iW, OW, mW)
      }
      hl(WW) {
        si.Zkh1(this.__wbg_ptr, WW)
      }
      nl(WW, iW, OW, mW, EW) {
        const NW = wi(iW, si.qZbx),
          PW = Mi,
          LW = ci(OW, si.qZbx),
          cW = Mi,
          wW = ti(mW, si.qZbx),
          tW = Mi,
          ZW = si.Defp(this.__wbg_ptr, WW, NW, PW, LW, cW, wW, tW, EW);
        if (ZW[1]) throw xi(ZW[0])
      }
      Hl(WW, iW, OW, mW) {
        const EW = wi(WW, si.qZbx),
          NW = Mi,
          PW = ci(iW, si.qZbx),
          LW = Mi,
          cW = ti(OW, si.qZbx),
          wW = Mi,
          tW = wi(mW, si.qZbx),
          ZW = Mi,
          xW = si.NHEf(this.__wbg_ptr, EW, NW, PW, LW, cW, wW, tW, ZW);
        if (xW[1]) throw xi(xW[0])
      }
      vl(WW) {
        const iW = wi(WW, si.qZbx),
          OW = Mi,
          mW = si.ChHL(this.__wbg_ptr, iW, OW);
        if (mW[1]) throw xi(mW[0])
      }
      gl() {
        return si.zbsQ(this.__wbg_ptr) >>> 0
      }
      Dl(WW) {
        const iW = si.ZQ5D(this.__wbg_ptr, WW);
        if (iW[2]) throw xi(iW[1]);
        return iW[0] >>> 0
      }
      steer() {
        return si.MhTv(this.__wbg_ptr) >>> 0
      }
      Vl() {
        const WW = si.O4ju(this.__wbg_ptr);
        var iW = qW(WW[0], WW[1]).slice();
        return si.NQBs(WW[0], 8 * WW[1], 8), iW
      }
      pl() {
        return si.npnV(this.__wbg_ptr) >>> 0
      }
      Cx() {
        const WW = si.N0uq(this.__wbg_ptr);
        var iW, OW, mW = (iW = WW[0], OW = WW[1], iW >>>= 0, (null !== rW && 0 !== rW.byteLength || (rW = new Int32Array(si.memory.buffer)), rW).subarray(iW / 4, iW / 4 + OW)).slice();
        return si.NQBs(WW[0], 4 * WW[1], 4), mW
      }
    }
    Symbol.dispose && (LW.prototype[Symbol.dispose] = LW.prototype.free);
    class cW {
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, VW.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        si.G2BH(WW, 0)
      }
      kZ(WW) {
        const iW = ci(WW, si.qZbx),
          OW = Mi,
          mW = si.wAZb(this.__wbg_ptr, iW, OW);
        if (mW[1]) throw xi(mW[0])
      }
      fl() {
        return si.NFw0(this.__wbg_ptr) >>> 0
      }
      Cl() {
        return si.UpRJ(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const WW = si.F1Z9();
        return this.__wbg_ptr = WW, VW.register(this, this.__wbg_ptr, this), this
      }
      run(WW, iW) {
        BW(WW, LW);
        const OW = si.wVde(this.__wbg_ptr, WW.__wbg_ptr, iW);
        if (OW[2]) throw xi(OW[1]);
        return OW[0] >>> 0
      }
      Xl(WW) {
        const iW = ci(WW, si.qZbx),
          OW = Mi;
        si.WdzA(this.__wbg_ptr, iW, OW)
      }
      Bl(WW) {
        const iW = ci(WW, si.qZbx),
          OW = Mi;
        si.BXjk(this.__wbg_ptr, iW, OW)
      }
    }
    Symbol.dispose && (cW.prototype[Symbol.dispose] = cW.prototype.free);
    class wW {
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, pW.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        si.rT3f(WW, 0)
      }
      Rl(WW, iW) {
        const OW = wi(WW, si.qZbx),
          mW = Mi;
        return si.TxCb(this.__wbg_ptr, OW, mW, iW) >>> 0
      }
      Gl(WW, iW, OW) {
        BW(WW, LW);
        const mW = wi(OW, si.qZbx),
          EW = Mi,
          NW = si.JZq3(this.__wbg_ptr, WW.__wbg_ptr, iW, mW, EW);
        if (NW[2]) throw xi(NW[1]);
        return NW[0] >>> 0
      }
      ql(WW) {
        return si.rbs6(this.__wbg_ptr, WW) >>> 0
      }
      constructor() {
        const WW = si.RADm();
        return this.__wbg_ptr = WW, pW.register(this, this.__wbg_ptr, this), this
      }
      scan(WW, iW) {
        BW(WW, LW);
        const OW = si.vimU(this.__wbg_ptr, WW.__wbg_ptr, iW);
        if (OW[2]) throw xi(OW[1]);
        return OW[0] >>> 0
      }
      rl(WW) {
        const iW = wi(WW, si.qZbx),
          OW = Mi;
        si.afwX(this.__wbg_ptr, iW, OW)
      }
      al() {
        return si.Y9t2(this.__wbg_ptr) >>> 0
      }
      Il() {
        return si.RMUj(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (wW.prototype[Symbol.dispose] = wW.prototype.free);
    class tW {
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, fW.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        si.O3Qz(WW, 0)
      }
      Fl(WW) {
        const iW = si.CbPc(this.__wbg_ptr, WW);
        if (iW[2]) throw xi(iW[1]);
        return iW[0] >>> 0
      }
      compute(WW, iW, OW, mW) {
        var EW = Pi(mW) ? 0 : Zi(mW, si.qZbx, si.Ds7I),
          NW = Mi;
        const PW = si.kUq2(this.__wbg_ptr, WW, Pi(iW) ? Number.MAX_SAFE_INTEGER : iW | 0, OW, EW, NW);
        if (PW[2]) throw xi(PW[1]);
        return PW[0] >>> 0
      }
      WA(WW) {
        const iW = Zi(WW, si.qZbx, si.Ds7I),
          OW = Mi;
        si.jYP4(this.__wbg_ptr, iW, OW)
      }
      iA() {
        return si.d4ZJ(this.__wbg_ptr)
      }
      OA(WW) {
        return si.k3e5(this.__wbg_ptr, WW) >>> 0
      }
      mA() {
        return si.SewK(this.__wbg_ptr) >>> 0
      }
      EA() {
        return si.dsR4(this.__wbg_ptr) >>> 0
      }
      NA(WW, iW) {
        const OW = si.K1g5(this.__wbg_ptr, WW, iW);
        if (OW[1]) throw xi(OW[0])
      }
      PA() {
        return si.iluo(this.__wbg_ptr) >>> 0
      }
      LA() {
        return si.lC1h(this.__wbg_ptr) >>> 0
      }
      cA() {
        return si.f8aJ(this.__wbg_ptr) >>> 0
      }
      Ql(WW, iW, OW) {
        const mW = ci(WW, si.qZbx),
          EW = Mi,
          NW = ci(iW, si.qZbx),
          PW = Mi,
          LW = si.QGpP(this.__wbg_ptr, mW, EW, NW, PW, OW);
        if (LW[1]) throw xi(LW[0])
      }
      tA() {
        return si.WFyO(this.__wbg_ptr) >>> 0
      }
      mesh(WW, iW, OW, mW, EW) {
        const NW = si.oUxY(this.__wbg_ptr, WW, iW, OW, mW, EW);
        if (NW[2]) throw xi(NW[1]);
        return NW[0] >>> 0
      }
      constructor(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW, ZW, xW, lW, AW, bW, jW, UW, kW, sW, MW) {
        const KW = Li(WW, si.qZbx),
          SW = Mi,
          YW = ti(iW, si.qZbx),
          yW = Mi,
          TW = ci(OW, si.qZbx),
          JW = Mi,
          hW = wi(mW, si.qZbx),
          HW = Mi,
          nW = wi(EW, si.qZbx),
          uW = Mi,
          oW = ci(NW, si.qZbx),
          dW = Mi,
          eW = ci(PW, si.qZbx),
          vW = Mi,
          gW = ti(LW, si.qZbx),
          DW = Mi,
          VW = ti(cW, si.qZbx),
          pW = Mi,
          CW = wi(wW, si.qZbx),
          XW = Mi;
        var BW = Pi(tW) ? 0 : Li(tW, si.qZbx),
          qW = Mi;
        const RW = ci(ZW, si.qZbx),
          GW = Mi,
          IW = wi(xW, si.qZbx),
          aW = Mi;
        var rW = Pi(lW) ? 0 : wi(lW, si.qZbx),
          zW = Mi,
          FW = Pi(AW) ? 0 : wi(AW, si.qZbx),
          QW = Mi;
        const Wi = ti(bW, si.qZbx),
          ii = Mi,
          Oi = si.Ab1d(KW, SW, YW, yW, TW, JW, hW, HW, nW, uW, oW, dW, eW, vW, gW, DW, VW, pW, CW, XW, BW, qW, RW, GW, IW, aW, rW, zW, FW, QW, Wi, ii, jW, UW, kW, sW, MW);
        if (Oi[2]) throw xi(Oi[1]);
        return this.__wbg_ptr = Oi[0], fW.register(this, this.__wbg_ptr, this), this
      }
      wA(WW, iW) {
        const OW = ci(WW, si.qZbx),
          mW = Mi,
          EW = si.QMKW(this.__wbg_ptr, OW, mW, iW);
        if (EW[3]) throw xi(EW[2]);
        var NW = GW(EW[0], EW[1]).slice();
        return si.NQBs(EW[0], 1 * EW[1], 1), NW
      }
      ZA(WW) {
        si.u5Sr(this.__wbg_ptr, Pi(WW) ? 16777215 : WW)
      }
      xA(WW) {
        return si.anWd(this.__wbg_ptr, WW) >>> 0
      }
      AA() {
        return si.Fnv2(this.__wbg_ptr) >>> 0
      }
      lA() {
        const WW = si.V0gd(this.__wbg_ptr);
        if (WW[2]) throw xi(WW[1]);
        return 0 !== WW[0]
      }
      bA() {
        return si.NCqH(this.__wbg_ptr) >>> 0
      }
      jA() {
        return si.xPoe(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (tW.prototype[Symbol.dispose] = tW.prototype.free);
    class ZW {
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, CW.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        si.fy4U(WW, 0)
      }
      compute(WW, iW, OW, mW) {
        var EW = Pi(mW) ? 0 : Zi(mW, si.qZbx, si.Ds7I),
          NW = Mi;
        const PW = si.JJOf(this.__wbg_ptr, WW, Pi(iW) ? Number.MAX_SAFE_INTEGER : iW | 0, OW, EW, NW);
        if (PW[2]) throw xi(PW[1]);
        return PW[0] >>> 0
      }
      WA(WW) {
        const iW = Zi(WW, si.qZbx, si.Ds7I),
          OW = Mi;
        si.LSzm(this.__wbg_ptr, iW, OW)
      }
      LA() {
        return si.N9vO(this.__wbg_ptr) >>> 0
      }
      cA() {
        return si.FXK4(this.__wbg_ptr) >>> 0
      }
      UA(WW) {
        const iW = si.nZUu(this.__wbg_ptr, WW);
        if (iW[2]) throw xi(iW[1]);
        return iW[0] >>> 0
      }
      constructor(WW, iW, OW, mW, EW, NW) {
        const PW = Li(WW, si.qZbx),
          LW = Mi,
          cW = ti(iW, si.qZbx),
          wW = Mi,
          tW = ci(OW, si.qZbx),
          ZW = Mi,
          xW = wi(mW, si.qZbx),
          lW = Mi,
          AW = si.qMwJ(PW, LW, cW, wW, tW, ZW, xW, lW, EW, NW);
        if (AW[2]) throw xi(AW[1]);
        return this.__wbg_ptr = AW[0], CW.register(this, this.__wbg_ptr, this), this
      }
      AA() {
        return si.cMIe(this.__wbg_ptr) >>> 0
      }
      lA() {
        const WW = si.a8GJ(this.__wbg_ptr);
        if (WW[2]) throw xi(WW[1]);
        return 0 !== WW[0]
      }
      bA() {
        return si.e8wG(this.__wbg_ptr) >>> 0
      }
    }

    function xW() {
      const WW = si.E0hc();
      var iW = RW(WW[0], WW[1]).slice();
      return si.NQBs(WW[0], 4 * WW[1], 4), iW
    }

    function lW(WW, iW) {
      let OW, mW;
      try {
        const EW = Li(WW, si.qZbx),
          NW = Mi,
          PW = Zi(iW, si.qZbx, si.Ds7I),
          LW = Mi,
          cW = si.f7qI(EW, NW, PW, LW);
        return OW = cW[0], mW = cW[1], zW(cW[0], cW[1])
      } finally {
        si.NQBs(OW, mW, 1)
      }
    }

    function AW() {
      const WW = si.nQNx();
      var iW = RW(WW[0], WW[1]).slice();
      return si.NQBs(WW[0], 4 * WW[1], 4), iW
    }

    function bW(WW) {
      return 0 !== si.xE2f(WW)
    }

    function jW(WW, iW) {
      const OW = Zi(WW, si.qZbx, si.Ds7I),
        mW = Mi,
        EW = si.A35a(OW, mW, iW);
      if (EW[1]) throw xi(EW[0])
    }

    function UW() {
      si.V18R()
    }

    function kW() {
      return si.coZd() >>> 0
    }

    function sW(WW) {
      return 0 !== si.DJIf(WW)
    }

    function MW(WW) {
      return 0 !== si.N8h8(WW)
    }

    function KW(WW) {
      si.akbt(WW)
    }

    function SW() {
      return si.YhCq() >>> 0
    }

    function YW() {
      return si.FJi0() >>> 0
    }

    function yW() {
      return 0 !== si.YQn6()
    }

    function TW() {
      const WW = si.MYOh();
      var iW = RW(WW[0], WW[1]).slice();
      return si.NQBs(WW[0], 4 * WW[1], 4), iW
    }

    function JW() {
      const WW = si.x0CV();
      var iW = RW(WW[0], WW[1]).slice();
      return si.NQBs(WW[0], 4 * WW[1], 4), iW
    }

    function hW() {
      const WW = si.ID1h();
      var iW = RW(WW[0], WW[1]).slice();
      return si.NQBs(WW[0], 4 * WW[1], 4), iW
    }

    function HW() {
      return si.Pfxp() >>> 0
    }

    function nW() {
      si.hlbk()
    }

    function uW() {
      let WW, iW;
      try {
        const OW = si.waU3();
        return WW = OW[0], iW = OW[1], zW(OW[0], OW[1])
      } finally {
        si.NQBs(WW, iW, 1)
      }
    }

    function oW(WW) {
      si.WKG9(XW(WW))
    }

    function dW() {
      return {
        __proto__: null,
        YXom: {
          __proto__: null,
          SKwr: function(WW, iW) {
            return XW(Error(zW(WW, iW)))
          },
          xftO: function(WW, iW) {
            throw new Error(zW(WW, iW))
          },
          WKIv: function(WW) {
            mi(WW).call()
          },
          xsi2: function(WW, iW) {
            console.error(zW(WW, iW))
          },
          yxoH: function() {
            return performance.now()
          },
          lkn2: function(WW) {
            xi(WW)
          }
        }
      }
    }
    Symbol.dispose && (ZW.prototype[Symbol.dispose] = ZW.prototype.free);
    const eW = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((WW => si.hZNs(WW, 1))),
      vW = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((WW => si.UAWg(WW, 1))),
      gW = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((WW => si.Joyz(WW, 1))),
      DW = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((WW => si.cghE(WW, 1))),
      VW = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((WW => si.G2BH(WW, 1))),
      pW = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((WW => si.rT3f(WW, 1))),
      fW = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((WW => si.O3Qz(WW, 1))),
      CW = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((WW => si.fy4U(WW, 1)));

    function XW(WW) {
      Ni === Ei.length && Ei.push(Ei.length + 1);
      const iW = Ni;
      return Ni = Ei[iW], Ei[iW] = WW, iW
    }

    function BW(WW, iW) {
      if (!(WW instanceof iW)) throw new Error(`expected instance of ${iW.name}`)
    }

    function qW(WW, iW) {
      return WW >>>= 0, aW().subarray(WW / 8, WW / 8 + iW)
    }

    function RW(WW, iW) {
      return WW >>>= 0, Wi().subarray(WW / 4, WW / 4 + iW)
    }

    function GW(WW, iW) {
      return WW >>>= 0, Oi().subarray(WW / 1, WW / 1 + iW)
    }
    let IW = null;

    function aW() {
      return null !== IW && 0 !== IW.byteLength || (IW = new Float64Array(si.memory.buffer)), IW
    }
    let rW = null;

    function zW(WW, iW) {
      return function(WW, iW) {
        bi += iW, bi >= Ai && (li = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), li.decode(), bi = iW);
        return li.decode(Oi().subarray(WW, WW + iW))
      }(WW >>> 0, iW)
    }
    let FW = null;
    let QW = null;

    function Wi() {
      return null !== QW && 0 !== QW.byteLength || (QW = new Uint32Array(si.memory.buffer)), QW
    }
    let ii = null;

    function Oi() {
      return null !== ii && 0 !== ii.byteLength || (ii = new Uint8Array(si.memory.buffer)), ii
    }

    function mi(WW) {
      return Ei[WW]
    }
    let Ei = new Array(1024).fill(void 0);
    Ei.push(void 0, null, !0, !1);
    let Ni = Ei.length;

    function Pi(WW) {
      return void 0 === WW || null === WW
    }

    function Li(WW, iW) {
      const OW = iW(2 * WW.length, 2) >>> 0;
      return (null !== FW && 0 !== FW.byteLength || (FW = new Uint16Array(si.memory.buffer)), FW).set(WW, OW / 2), Mi = WW.length, OW
    }

    function ci(WW, iW) {
      const OW = iW(4 * WW.length, 4) >>> 0;
      return Wi().set(WW, OW / 4), Mi = WW.length, OW
    }

    function wi(WW, iW) {
      const OW = iW(1 * WW.length, 1) >>> 0;
      return Oi().set(WW, OW / 1), Mi = WW.length, OW
    }

    function ti(WW, iW) {
      const OW = iW(8 * WW.length, 8) >>> 0;
      return aW().set(WW, OW / 8), Mi = WW.length, OW
    }

    function Zi(WW, iW, OW) {
      if (void 0 === OW) {
        const OW = ji.encode(WW),
          mW = iW(OW.length, 1) >>> 0;
        return Oi().subarray(mW, mW + OW.length).set(OW), Mi = OW.length, mW
      }
      let mW = WW.length,
        EW = iW(mW, 1) >>> 0;
      const NW = Oi();
      let PW = 0;
      for (; PW < mW; PW++) {
        const iW = WW.charCodeAt(PW);
        if (iW > 127) break;
        NW[EW + PW] = iW
      }
      if (PW !== mW) {
        0 !== PW && (WW = WW.slice(PW)), EW = OW(EW, mW, mW = PW + 3 * WW.length, 1) >>> 0;
        const iW = Oi().subarray(EW + PW, EW + mW);
        PW += ji.encodeInto(WW, iW).written, EW = OW(EW, mW, PW, 1) >>> 0
      }
      return Mi = PW, EW
    }

    function xi(WW) {
      const iW = mi(WW);
      return function(WW) {
        WW < 1028 || (Ei[WW] = Ni, Ni = WW)
      }(WW), iW
    }
    let li = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    li.decode();
    const Ai = 2146435072;
    let bi = 0;
    const ji = new TextEncoder;
    "encodeInto" in ji || (ji.encodeInto = function(WW, iW) {
      const OW = ji.encode(WW);
      return iW.set(OW), {
        read: WW.length,
        written: OW.length
      }
    });
    let Ui, ki, si, Mi = 0;

    function Ki(WW, iW) {
      return ki = WW, si = WW.exports, Ui = iW, IW = null, rW = null, FW = null, QW = null, ii = null, si.ctR0(), si
    }

    function Si(WW) {
      if (void 0 !== si) return si;
      void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
        module: WW
      } = WW) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const iW = dW();
      WW instanceof WebAssembly.Module || (WW = new WebAssembly.Module(WW));
      return Ki(new WebAssembly.Instance(WW, iW), WW)
    }
    async function Yi(WW) {
      if (void 0 !== si) return si;
      void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
        module_or_path: WW
      } = WW) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const iW = dW();
      ("string" === typeof WW || "function" === typeof Request && WW instanceof Request || "function" === typeof URL && WW instanceof URL) && (WW = fetch(WW));
      const {
        instance: OW,
        module: mW
      } = await async function(WW, iW) {
        if ("function" === typeof Response && WW instanceof Response) {
          if (!WW.ok) throw new Error(`failed to fetch Wasm: ${WW.status} ${WW.statusText} fetching '${WW.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(WW, iW)
          } catch (OW) {
            if (! function(WW) {
                switch (WW) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(WW.type) || "application/wasm" === WW.headers.get("Content-Type")) throw OW;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", OW)
          }
          const mW = await WW.arrayBuffer();
          return await WebAssembly.instantiate(mW, iW)
        } {
          const OW = await WebAssembly.instantiate(WW, iW);
          return OW instanceof WebAssembly.Instance ? {
            instance: OW,
            module: WW
          } : OW
        }
      }(await WW, iW);
      return Ki(OW, mW)
    }
  },
  37286: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW,
      f: () => LW,
      i: () => cW
    });
    var mW = OW(37295),
      EW = OW(2381),
      NW = OW(37297);
    const PW = {
      name: EW.d,
      url: () => new OW.U(OW(37306)),
      init: mW.default,
      bindings: mW
    };

    function LW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW,
        iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PW,
        OW = arguments.length > 2 ? arguments[2] : void 0;
      return (0, NW.o)(WW, iW, OW)
    }

    function cW(WW) {
      return (0, EW.L)((() => WW), mW, PW)
    }
  },
  37279: (WW, iW, OW) => {
    function mW(WW, iW) {
      return new Error(`${WW}: ${iW instanceof Error?`${iW.name}: ${iW.message}`:String(iW)}`, {
        cause: iW
      })
    }
    OW.d(iW, {
      e: () => mW
    })
  },
  37271: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW,
      f: () => cW
    });
    var mW = OW(2388),
      EW = OW(7625),
      NW = OW(37279);

    function PW() {
      return new URL(new OW.U(OW(37283)).href, globalThis.location?.href).href
    }
    let LW = null;

    function cW() {
      return LW ??= (async () => (0, mW.B)(new URL(PW()), (0, EW.c)("bloxd_wasm_textures")))().catch((WW => {
        throw (0, NW.e)((0, mW.E)(WW), WW)
      })), LW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);