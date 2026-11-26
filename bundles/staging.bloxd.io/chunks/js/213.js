export const id = 213;
export const ids = [212, 213];
export const modules = {
  34821: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      CAPPED_COUNTS_VISIT_CAP: () => SH,
      reportCappedWasmFailure: () => zH,
      reportUncappedWasmFailure: () => tH,
      reportWasmCrash: () => rH,
      reportWasmFailure: () => hH
    });
    var AH = LH(1826);

    function rH(HH) {
      (0, AH.reportClientError)("wasm_load", HH.message, HH.code)
    }
    const SH = AH.MAX_ERRORS_PER_VISIT - 4;

    function hH(HH, BH, LH, rH) {
      (0, AH.reportClientError)(HH, BH, LH, !1, AH.MAX_ERRORS_PER_VISIT, {
        context: rH
      })
    }

    function tH(HH, BH, LH, rH) {
      (0, AH.reportClientError)(HH, BH, LH, !1, 1 / 0, {
        context: rH
      })
    }

    function zH(HH, BH, LH, rH) {
      (0, AH.reportClientError)(HH, BH, LH, !1, SH, {
        context: rH
      })
    }
  },
  37018: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => UH,
      h: () => bH,
      i: () => kH,
      m: () => VH
    });
    var AH = LH(37044),
      rH = LH(3168),
      SH = LH(37069),
      hH = LH(3171),
      tH = LH(34821),
      zH = LH(3228),
      CH = LH(3585),
      EH = LH(3583),
      XH = LH(37023),
      GH = LH(1826),
      YH = LH(37030),
      uH = LH(37037),
      QH = LH(4074);
    let WH = !1;
    const MH = 40;
    var xH = LH(3595),
      vH = LH(3961);
    const PH = "bloxdWasmFailureReported";

    function TH() {
      return "undefined" === typeof WebAssembly
    }

    function UH() {
      return (0, AH.g)()
    }

    function VH() {
      if (TH()) return "this browser has no WebAssembly";
      const HH = (0, rH.q)();
      return "compile" === HH || "instantiate" === HH ? `the core wasm didn't load here (${(0,rH.k)()})` : null
    }
    async function OH(HH) {
      return await (0, xH.l)(), await (0, SH.e)(SH.d, void 0, HH)
    }

    function bH() {
      TH() || (0, vH.d)((() => {
        OH()
      }))
    }

    function kH() {
      if (TH()) return async () => ((0, zH.h)("unsupported", 0), mH("unsupported", "This browser has no WebAssembly"), !1);
      const HH = {
        reloadFailedDownload: !0
      };
      return OH(HH), async () => {
        var BH;
        const LH = performance.now();
        await OH(HH);
        const AH = (performance.now() - LH) / 1e3;
        if ((0, rH.U)()) return (0, zH.h)("ready", AH), WH || (WH = !0, (0, rH.Y)((() => {
          if ("call" !== (0, rH.q)()) return;
          const HH = (0, rH.p)(),
            BH = (0, XH.j)(HH, rH.G, rH.gb),
            LH = (0, rH.u)().buffer.byteLength,
            AH = (0, XH.f)(BH.kind, BH.refusedBytes),
            SH = AH ? "alloc_failed" : BH.kind,
            hH = (0, YH.j)(LH),
            tH = AH ? `_r${Math.floor(Math.log2(BH.refusedBytes))}` : "",
            zH = (0, QH.d)();
          null === zH && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const CH = new Error((0, uH.d)(HH, LH, BH));
          if (HH instanceof Error && void 0 !== HH.stack) {
            const BH = HH.stack.split("\n"),
              LH = BH.length > MH ? [...BH.slice(0, MH / 2), ...BH.slice(-MH / 2)] : BH;
            CH.stack = LH.join("\n")
          }(0, GH.reportClientError)("wasm_load", CH, `wasm_call_${SH}_${null!==zH&&void 0!==zH?zH:"unnamed"}_m${hH}${tH}`)
        }))), (0, hH.S)(SH.d.url()) && (0, tH.reportCappedWasmFailure)("wasm_load", CH.e.message, CH.e.code), !0;
        const xH = EH.e[null !== (BH = (0, rH.q)()) && void 0 !== BH ? BH : "call"];
        return (0, zH.h)(xH, AH), mH(xH, (0, rH.k)()), !1
      }
    }

    function mH(HH, BH) {
      (0, EH.l)(PH, `Bloxd wasm ${HH}, so the game can't start: ${BH}`, BH, HH)
    }
  },
  37037: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH,
      f: () => CH,
      g: () => hH,
      k: () => XH
    });
    var AH = LH(37023),
      rH = LH(10);
    const SH = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function hH(HH) {
      if (HH instanceof WebAssembly.RuntimeError) return !0;
      const BH = HH instanceof Error ? HH.stack : void 0;
      return "string" === typeof BH && SH.test(BH)
    }

    function tH(HH, BH, LH) {
      var rH;
      const hH = HH instanceof Error ? HH.name : "thrown",
        tH = (HH instanceof Error && null !== (rH = HH.stack) && void 0 !== rH ? rH : "").split("\n").filter((HH => SH.test(HH))).slice(0, 8).map((HH => HH.trim())),
        zH = null === BH ? "wasm memory unknown" : `wasm memory ${Math.round(BH/2**20)} MB`,
        CH = null === LH.panic ? "" : `, panic: ${(0,AH.i)(LH.panic)}`,
        EH = `${hH}: ${HH instanceof Error?HH.message:String(HH)}`;
      return `${(0,AH.m)(LH.kind,LH.refusedBytes)} ${EH} (${zH})${CH}${tH.length>0?` | ${tH.join(" < ")}`:""}`
    }
    const zH = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function CH(HH) {
      var BH;
      let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(HH instanceof Error) || !zH.test(HH.message)) return {};
      if (!("detached" in LH)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, rH.R)(null === (BH = (0, rH.J)(LH, "detached")) || void 0 === BH ? void 0 : BH.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const EH = 500;

    function XH(HH) {
      let BH = "[object Object]";
      try {
        BH = String(HH)
      } catch {}
      if ("[object Object]" !== BH) return BH;
      try {
        var LH, AH;
        return null !== (LH = null === (AH = JSON.stringify(HH)) || void 0 === AH ? void 0 : AH.slice(0, EH)) && void 0 !== LH ? LH : BH
      } catch {
        return BH
      }
    }
  },
  37087: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/bloxd_wasm_bg.d827f2f3b3de35f70008.wasm"
  },
  37061: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/bloxd_wasm_textures_bg.e2eb154503b56db9191d.wasm"
  },
  37078: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      LH: () => AH,
      EnvelopeKind: () => rH,
      MH: () => SH,
      PhysicsEngine: () => hH,
      SL: () => tH,
      fA: () => zH,
      Or: () => CH,
      AS: () => EH,
      ES: () => XH,
      PS: () => GH,
      US: () => YH,
      IS: () => uH,
      oh: () => QH,
      qt: () => WH,
      default: () => VB,
      initSync: () => UB,
      LC: () => MH,
      AC: () => xH,
      EC: () => vH,
      HE: () => PH,
      BE: () => TH,
      eX: () => UH,
      qX: () => VH,
      gX: () => OH,
      NX: () => bH,
      RX: () => kH,
      jX: () => mH,
      FX: () => oH,
      DX: () => IH,
      wX: () => fH,
      ZX: () => lH
    });
    class AH {
      __destroy_into_raw() {
        const HH = this.__wbg_ptr;
        return this.__wbg_ptr = 0, cH.unregister(this), HH
      }
      free() {
        const HH = this.__destroy_into_raw();
        vB.gSgE(HH, 0)
      }
      dX() {
        const HH = vB.lixC(this.__wbg_ptr);
        if (HH[2]) throw GB(HH[1]);
        return HH[0] >>> 0
      }
      aX() {
        return vB.CO4Y(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const HH = vB.Xx4y();
        return this.__wbg_ptr = HH, cH.register(this, this.__wbg_ptr, this), this
      }
      sX() {
        return vB.fXjt(this.__wbg_ptr) >>> 0
      }
      JX(HH) {
        const BH = vB.K2ur(this.__wbg_ptr, HH);
        if (BH[2]) throw GB(BH[1]);
        return BH[0] >>> 0
      }
      iX(HH) {
        const BH = vB.RliP(this.__wbg_ptr, HH);
        if (BH[2]) throw GB(BH[1]);
        return BH[0] >>> 0
      }
    }
    Symbol.dispose && (AH.prototype[Symbol.dispose] = AH.prototype.free);
    const rH = Object.freeze({
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
    class SH {
      __destroy_into_raw() {
        const HH = this.__wbg_ptr;
        return this.__wbg_ptr = 0, eH.unregister(this), HH
      }
      free() {
        const HH = this.__destroy_into_raw();
        vB.fyWy(HH, 0)
      }
      HG(HH, BH) {
        const LH = vB.Nl4W(this.__wbg_ptr, HH, BH);
        if (LH[2]) throw GB(LH[1]);
        return LH[0] >>> 0
      }
      BG(HH) {
        const BH = vB.wGeX(this.__wbg_ptr, HH);
        if (BH[2]) throw GB(BH[1]);
        return BH[0] >>> 0
      }
      LG() {
        vB.imwG(this.__wbg_ptr)
      }
      static AG() {
        return vB.oMME() >>> 0
      }
      rG() {
        return vB.NhWh(this.__wbg_ptr) >>> 0
      }
      SG() {
        const HH = vB.mVMH(this.__wbg_ptr);
        return 0 === HH[0] ? void 0 : HH[1]
      }
      hG() {
        return vB.gkZu(this.__wbg_ptr) >>> 0
      }
      tG() {
        return vB.Oy0J(this.__wbg_ptr) >>> 0
      }
      static yX() {
        return vB.lijX() >>> 0
      }
      constructor() {
        const HH = vB.HUk8();
        return this.__wbg_ptr = HH, eH.register(this, this.__wbg_ptr, this), this
      }
      zG() {
        return vB.w8WJ(this.__wbg_ptr) >>> 0
      }
      CG() {
        return vB.nv8U(this.__wbg_ptr) >>> 0
      }
      EG() {
        return vB.RVKy(this.__wbg_ptr) >>> 0
      }
      pX(HH) {
        return vB.zT9F(this.__wbg_ptr, HH) >>> 0
      }
      reserve(HH, BH) {
        const LH = vB.fKqO(this.__wbg_ptr, HH, BH);
        if (LH[1]) throw GB(LH[0])
      }
      YG(HH, BH) {
        const LH = zB(HH, vB.Srmp),
          AH = PB;
        vB.qns1(this.__wbg_ptr, LH, AH, BH)
      }
      text() {
        let HH, BH;
        try {
          const LH = vB.qEWo(this.__wbg_ptr);
          return HH = LH[0], BH = LH[1], iH(LH[0], LH[1])
        } finally {
          vB.PyZM(HH, BH, 1)
        }
      }
    }
    Symbol.dispose && (SH.prototype[Symbol.dispose] = SH.prototype.free);
    class hH {
      __destroy_into_raw() {
        const HH = this.__wbg_ptr;
        return this.__wbg_ptr = 0, qH.unregister(this), HH
      }
      free() {
        const HH = this.__destroy_into_raw();
        vB.WgTL(HH, 0)
      }
      QG(HH, BH) {
        DH(BH, AH);
        const LH = vB.loKF(this.__wbg_ptr, HH, BH.__wbg_ptr);
        if (LH[2]) throw GB(LH[1]);
        return LH[0] >>> 0
      }
      WG() {
        const HH = vB.Q6VJ(this.__wbg_ptr);
        if (HH[1]) throw GB(HH[0])
      }
      PG(HH, BH, LH, AH, rH, SH, hH, zH, CH, EH, XH) {
        DH(HH, tH);
        const GH = vB.rguR(this.__wbg_ptr, HH.__wbg_ptr, BH, LH, AH, rH, SH, hH, zH, CH, EH, XH);
        if (GH[2]) throw GB(GH[1]);
        return GH[0]
      }
      TG() {
        const HH = vB.WljO(this.__wbg_ptr);
        var BH = wH(HH[0], HH[1]).slice();
        return vB.PyZM(HH[0], 8 * HH[1], 8), BH
      }
      UG() {
        return vB.oqG8(this.__wbg_ptr) >>> 0
      }
      VG() {
        return vB.jwGi(this.__wbg_ptr) >>> 0
      }
      OG() {
        return vB.wUwp(this.__wbg_ptr) >>> 0
      }
      constructor(HH, BH, LH, AH, rH, SH, hH, tH) {
        const zH = vB.yXxE(HH, BH, LH, AH, rH, SH, hH, tH);
        if (zH[2]) throw GB(zH[1]);
        return this.__wbg_ptr = zH[0], qH.register(this, this.__wbg_ptr, this), this
      }
      mG(HH) {
        DH(HH, AH);
        const BH = vB.yYta(this.__wbg_ptr, HH.__wbg_ptr);
        if (BH[2]) throw GB(BH[1]);
        return BH[0] >>> 0
      }
      oG(HH) {
        const BH = vB.ehDk(this.__wbg_ptr, HH);
        if (BH[1]) throw GB(BH[0])
      }
      IG() {
        return vB.FWBQ(this.__wbg_ptr) >>> 0
      }
      resume(HH, BH) {
        DH(HH, tH), DH(BH, AH);
        const LH = vB.ofOY(this.__wbg_ptr, HH.__wbg_ptr, BH.__wbg_ptr);
        if (LH[2]) throw GB(LH[1]);
        return LH[0] >>> 0
      }
      eG(HH) {
        const BH = vB.Eqfx(this.__wbg_ptr, HH);
        if (BH[1]) throw GB(BH[0])
      }
      NG(HH, BH) {
        DH(BH, AH);
        const LH = vB.X0He(this.__wbg_ptr, HH, BH.__wbg_ptr);
        if (LH[1]) throw GB(LH[0])
      }
      FG(HH) {
        const BH = EB(HH, vB.Srmp),
          LH = PB,
          AH = vB.eRfP(this.__wbg_ptr, BH, LH);
        if (AH[1]) throw GB(AH[0])
      }
      xG(HH, BH, LH, AH, rH, SH) {
        const hH = vB.rdqU(this.__wbg_ptr, HH, BH, LH, AH, rH, SH);
        if (hH[1]) throw GB(hH[0])
      }
      vG(HH, BH, LH, AH) {
        const rH = zB(HH, vB.Srmp),
          SH = PB,
          hH = EB(BH, vB.Srmp),
          tH = PB,
          zH = EB(LH, vB.Srmp),
          CH = PB,
          EH = EB(AH, vB.Srmp),
          XH = PB,
          GH = vB.AoHY(this.__wbg_ptr, rH, SH, hH, tH, zH, CH, EH, XH);
        if (GH[1]) throw GB(GH[0])
      }
      wG(HH, BH) {
        DH(BH, AH);
        const LH = vB.DCQt(this.__wbg_ptr, HH, BH.__wbg_ptr);
        if (LH[1]) throw GB(LH[0])
      }
      kG(HH, BH, LH) {
        const AH = vB.f8Cl(this.__wbg_ptr, HH, BH, LH);
        if (AH[1]) throw GB(AH[0])
      }
      dG(HH, BH, LH, AH, rH, SH, hH, zH, CH, EH) {
        DH(HH, tH);
        return vB.RXJs(this.__wbg_ptr, HH.__wbg_ptr, BH, LH, AH, rH, SH, hH, zH, CH, EH)
      }
    }
    Symbol.dispose && (hH.prototype[Symbol.dispose] = hH.prototype.free);
    class tH {
      static __wrap(HH) {
        const BH = Object.create(tH.prototype);
        return BH.__wbg_ptr = HH, gH.register(BH, BH.__wbg_ptr, BH), BH
      }
      __destroy_into_raw() {
        const HH = this.__wbg_ptr;
        return this.__wbg_ptr = 0, gH.unregister(this), HH
      }
      free() {
        const HH = this.__destroy_into_raw();
        vB.GEk8(HH, 0)
      }
      sG(HH) {
        const BH = vB.gJQX(this.__wbg_ptr, HH);
        if (BH[2]) throw GB(BH[1]);
        return BH[0] >>> 0
      }
      JG(HH, BH, LH) {
        return vB.iGCq(this.__wbg_ptr, HH, BH, LH)
      }
      iG(HH, BH, LH) {
        return vB.pCU7(this.__wbg_ptr, HH, BH, LH) >>> 0
      }
      pG(HH, BH, LH, AH) {
        return 0 !== vB.efe5(this.__wbg_ptr, HH, BH, LH, AH)
      }
      yG() {
        vB.iUBX(this.__wbg_ptr)
      }
      HY(HH) {
        const BH = vB.S9pW(this.__wbg_ptr, HH);
        if (BH[3]) throw GB(BH[2]);
        var LH = dH(BH[0], BH[1]).slice();
        return vB.PyZM(BH[0], 1 * BH[1], 1), LH
      }
      evict(HH, BH) {
        return vB.qr4i(this.__wbg_ptr, HH, BH) >>> 0
      }
      BY() {
        vB.qjmh(this.__wbg_ptr)
      }
      LY(HH, BH, LH) {
        vB.rsvn(this.__wbg_ptr, HH, BH, LH)
      }
      AY(HH) {
        const BH = vB.GdzV(this.__wbg_ptr, HH);
        if (BH[1]) throw GB(BH[0])
      }
      rY() {
        return vB.Dg2A(this.__wbg_ptr) >>> 0
      }
      SY() {
        return vB.LA4B(this.__wbg_ptr) >>> 0
      }
      hY(HH, BH, LH) {
        vB.i83i(this.__wbg_ptr, HH, BH, LH)
      }
      tY(HH, BH, LH) {
        vB.K3ip(this.__wbg_ptr, HH, BH, LH)
      }
      zY() {
        return vB.FY6B(this.__wbg_ptr) >>> 0
      }
      CY() {
        return vB.UKkA(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const HH = vB.i8VP();
        return this.__wbg_ptr = HH, gH.register(this, this.__wbg_ptr, this), this
      }
      static EY() {
        const HH = vB.t6dB();
        return tH.__wrap(HH)
      }
      XY() {
        return vB.PFqX(this.__wbg_ptr) >>> 0
      }
      GY() {
        return vB.wGNq(this.__wbg_ptr) >>> 0
      }
      YY(HH, BH, LH, AH) {
        const rH = vB.nZxg(this.__wbg_ptr, HH, BH, LH, AH);
        if (rH[1]) throw GB(rH[0])
      }
      uY() {
        return vB.HaL3(this.__wbg_ptr) >>> 0
      }
      QY() {
        return vB.h0jM(this.__wbg_ptr) >>> 0
      }
      WY(HH, BH, LH, AH) {
        vB.lhh9(this.__wbg_ptr, HH, BH, LH, AH)
      }
      MY(HH) {
        vB.BD64(this.__wbg_ptr, HH)
      }
      vY(HH, BH, LH, AH, rH) {
        const SH = CB(BH, vB.Srmp),
          hH = PB,
          tH = zB(LH, vB.Srmp),
          zH = PB,
          CH = EB(AH, vB.Srmp),
          EH = PB,
          XH = vB.ktJc(this.__wbg_ptr, HH, SH, hH, tH, zH, CH, EH, rH);
        if (XH[1]) throw GB(XH[0])
      }
      xY(HH, BH, LH, AH) {
        const rH = CB(HH, vB.Srmp),
          SH = PB,
          hH = zB(BH, vB.Srmp),
          tH = PB,
          zH = EB(LH, vB.Srmp),
          CH = PB,
          EH = CB(AH, vB.Srmp),
          XH = PB,
          GH = vB.EDXW(this.__wbg_ptr, rH, SH, hH, tH, zH, CH, EH, XH);
        if (GH[1]) throw GB(GH[0])
      }
      OY(HH) {
        const BH = CB(HH, vB.Srmp),
          LH = PB,
          AH = vB.iF3M(this.__wbg_ptr, BH, LH);
        if (AH[1]) throw GB(AH[0])
      }
      bY() {
        return vB.QqF3(this.__wbg_ptr) >>> 0
      }
      kY(HH) {
        const BH = vB.KIjO(this.__wbg_ptr, HH);
        if (BH[2]) throw GB(BH[1]);
        return BH[0] >>> 0
      }
      steer() {
        return vB.wxbw(this.__wbg_ptr) >>> 0
      }
      mY() {
        const HH = vB.sSDT(this.__wbg_ptr);
        var BH = wH(HH[0], HH[1]).slice();
        return vB.PyZM(HH[0], 8 * HH[1], 8), BH
      }
      oY() {
        return vB.ZMDI(this.__wbg_ptr) >>> 0
      }
      lG() {
        const HH = vB.uvD5(this.__wbg_ptr);
        var BH, LH, AH = (BH = HH[0], LH = HH[1], BH >>>= 0, (null !== JH && 0 !== JH.byteLength || (JH = new Int32Array(vB.memory.buffer)), JH).subarray(BH / 4, BH / 4 + LH)).slice();
        return vB.PyZM(HH[0], 4 * HH[1], 4), AH
      }
    }
    Symbol.dispose && (tH.prototype[Symbol.dispose] = tH.prototype.free);
    class zH {
      __destroy_into_raw() {
        const HH = this.__wbg_ptr;
        return this.__wbg_ptr = 0, NH.unregister(this), HH
      }
      free() {
        const HH = this.__destroy_into_raw();
        vB.Sb8S(HH, 0)
      }
      PX(HH) {
        const BH = zB(HH, vB.Srmp),
          LH = PB,
          AH = vB.NwXO(this.__wbg_ptr, BH, LH);
        if (AH[1]) throw GB(AH[0])
      }
      IY() {
        return vB.dcn2(this.__wbg_ptr) >>> 0
      }
      fY() {
        return vB.ymxJ(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const HH = vB.AvST();
        return this.__wbg_ptr = HH, NH.register(this, this.__wbg_ptr, this), this
      }
      run(HH, BH) {
        DH(HH, tH);
        const LH = vB.FOVS(this.__wbg_ptr, HH.__wbg_ptr, BH);
        if (LH[2]) throw GB(LH[1]);
        return LH[0] >>> 0
      }
      lY(HH) {
        const BH = zB(HH, vB.Srmp),
          LH = PB;
        vB.PamF(this.__wbg_ptr, BH, LH)
      }
      KY(HH) {
        const BH = zB(HH, vB.Srmp),
          LH = PB;
        vB.kLp1(this.__wbg_ptr, BH, LH)
      }
    }
    Symbol.dispose && (zH.prototype[Symbol.dispose] = zH.prototype.free);
    class CH {
      __destroy_into_raw() {
        const HH = this.__wbg_ptr;
        return this.__wbg_ptr = 0, RH.unregister(this), HH
      }
      free() {
        const HH = this.__destroy_into_raw();
        vB.E9QO(HH, 0)
      }
      eY(HH, BH) {
        const LH = CB(HH, vB.Srmp),
          AH = PB;
        return vB.Jiwf(this.__wbg_ptr, LH, AH, BH) >>> 0
      }
      qY(HH, BH, LH) {
        DH(HH, tH);
        const AH = CB(LH, vB.Srmp),
          rH = PB,
          SH = vB.IIbI(this.__wbg_ptr, HH.__wbg_ptr, BH, AH, rH);
        if (SH[2]) throw GB(SH[1]);
        return SH[0] >>> 0
      }
      cY(HH) {
        return vB.sPSa(this.__wbg_ptr, HH) >>> 0
      }
      constructor() {
        const HH = vB.VLUJ();
        return this.__wbg_ptr = HH, RH.register(this, this.__wbg_ptr, this), this
      }
      scan(HH, BH) {
        DH(HH, tH);
        const LH = vB.KKkB(this.__wbg_ptr, HH.__wbg_ptr, BH);
        if (LH[2]) throw GB(LH[1]);
        return LH[0] >>> 0
      }
      RY(HH) {
        const BH = CB(HH, vB.Srmp),
          LH = PB;
        vB.IVe1(this.__wbg_ptr, BH, LH)
      }
      NY() {
        return vB.ggYM(this.__wbg_ptr) >>> 0
      }
      gY() {
        return vB.Uxt1(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (CH.prototype[Symbol.dispose] = CH.prototype.free);
    class EH {
      __destroy_into_raw() {
        const HH = this.__wbg_ptr;
        return this.__wbg_ptr = 0, jH.unregister(this), HH
      }
      free() {
        const HH = this.__destroy_into_raw();
        vB.KEEA(HH, 0)
      }
      FY(HH) {
        const BH = vB.BHEO(this.__wbg_ptr, HH);
        if (BH[2]) throw GB(BH[1]);
        return BH[0] >>> 0
      }
      compute(HH, BH, LH, AH) {
        var rH = hB(AH) ? 0 : XB(AH, vB.Srmp, vB.RJhM),
          SH = PB;
        const hH = vB.UDkm(this.__wbg_ptr, HH, hB(BH) ? Number.MAX_SAFE_INTEGER : BH | 0, LH, rH, SH);
        if (hH[2]) throw GB(hH[1]);
        return hH[0] >>> 0
      }
      wY(HH) {
        const BH = XB(HH, vB.Srmp, vB.RJhM),
          LH = PB;
        vB.WhER(this.__wbg_ptr, BH, LH)
      }
      ZY() {
        return vB.wZU6(this.__wbg_ptr)
      }
      dY(HH) {
        return vB.HNw1(this.__wbg_ptr, HH) >>> 0
      }
      aY() {
        return vB.I1Ny(this.__wbg_ptr) >>> 0
      }
      sY() {
        return vB.vk4T(this.__wbg_ptr) >>> 0
      }
      JY(HH, BH) {
        const LH = vB.oQFw(this.__wbg_ptr, HH, BH);
        if (LH[1]) throw GB(LH[0])
      }
      iY() {
        return vB.qZik(this.__wbg_ptr) >>> 0
      }
      pY() {
        return vB.p5PJ(this.__wbg_ptr) >>> 0
      }
      yY() {
        return vB.jkVF(this.__wbg_ptr) >>> 0
      }
      DY(HH, BH, LH) {
        const AH = zB(HH, vB.Srmp),
          rH = PB,
          SH = zB(BH, vB.Srmp),
          hH = PB,
          tH = vB.fL0J(this.__wbg_ptr, AH, rH, SH, hH, LH);
        if (tH[1]) throw GB(tH[0])
      }
      Bu() {
        return vB.sujb(this.__wbg_ptr) >>> 0
      }
      mesh(HH, BH, LH, AH, rH) {
        const SH = vB.dDH1(this.__wbg_ptr, HH, BH, LH, AH, rH);
        if (SH[2]) throw GB(SH[1]);
        return SH[0] >>> 0
      }
      constructor(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH, MH, xH, vH, PH) {
        const TH = tB(HH, vB.Srmp),
          UH = PB,
          VH = EB(BH, vB.Srmp),
          OH = PB,
          bH = zB(LH, vB.Srmp),
          kH = PB,
          mH = CB(AH, vB.Srmp),
          oH = PB,
          IH = CB(rH, vB.Srmp),
          fH = PB,
          lH = zB(SH, vB.Srmp),
          KH = PB,
          cH = zB(hH, vB.Srmp),
          eH = PB,
          qH = EB(tH, vB.Srmp),
          gH = PB,
          NH = EB(zH, vB.Srmp),
          RH = PB,
          nH = CB(CH, vB.Srmp),
          FH = PB;
        var DH = hB(EH) ? 0 : tB(EH, vB.Srmp),
          wH = PB;
        const ZH = zB(XH, vB.Srmp),
          dH = PB,
          aH = CB(GH, vB.Srmp),
          sH = PB;
        var JH = hB(YH) ? 0 : CB(YH, vB.Srmp),
          iH = PB,
          pH = hB(uH) ? 0 : CB(uH, vB.Srmp),
          yH = PB;
        const HB = EB(QH, vB.Srmp),
          BB = PB,
          LB = vB.fLoK(TH, UH, VH, OH, bH, kH, mH, oH, IH, fH, lH, KH, cH, eH, qH, gH, NH, RH, nH, FH, DH, wH, ZH, dH, aH, sH, JH, iH, pH, yH, HB, BB, WH, MH, xH, vH, PH);
        if (LB[2]) throw GB(LB[1]);
        return this.__wbg_ptr = LB[0], jH.register(this, this.__wbg_ptr, this), this
      }
      Hu(HH, BH) {
        const LH = zB(HH, vB.Srmp),
          AH = PB,
          rH = vB.Og82(this.__wbg_ptr, LH, AH, BH);
        if (rH[3]) throw GB(rH[2]);
        var SH = dH(rH[0], rH[1]).slice();
        return vB.PyZM(rH[0], 1 * rH[1], 1), SH
      }
      Lu(HH) {
        vB.loqH(this.__wbg_ptr, hB(HH) ? 16777215 : HH)
      }
      Au(HH) {
        return vB.sJ9h(this.__wbg_ptr, HH) >>> 0
      }
      Su() {
        return vB.t93E(this.__wbg_ptr) >>> 0
      }
      ru() {
        const HH = vB.Vevh(this.__wbg_ptr);
        if (HH[2]) throw GB(HH[1]);
        return 0 !== HH[0]
      }
      hu() {
        return vB.a4OX(this.__wbg_ptr) >>> 0
      }
      tu() {
        return vB.HwsI(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (EH.prototype[Symbol.dispose] = EH.prototype.free);
    class XH {
      __destroy_into_raw() {
        const HH = this.__wbg_ptr;
        return this.__wbg_ptr = 0, nH.unregister(this), HH
      }
      free() {
        const HH = this.__destroy_into_raw();
        vB.Wtfm(HH, 0)
      }
      compute(HH, BH, LH, AH) {
        var rH = hB(AH) ? 0 : XB(AH, vB.Srmp, vB.RJhM),
          SH = PB;
        const hH = vB.l8a8(this.__wbg_ptr, HH, hB(BH) ? Number.MAX_SAFE_INTEGER : BH | 0, LH, rH, SH);
        if (hH[2]) throw GB(hH[1]);
        return hH[0] >>> 0
      }
      wY(HH) {
        const BH = XB(HH, vB.Srmp, vB.RJhM),
          LH = PB;
        vB.NZkm(this.__wbg_ptr, BH, LH)
      }
      pY() {
        return vB.QWgO(this.__wbg_ptr) >>> 0
      }
      yY() {
        return vB.LthH(this.__wbg_ptr) >>> 0
      }
      zu(HH) {
        const BH = vB.B31E(this.__wbg_ptr, HH);
        if (BH[2]) throw GB(BH[1]);
        return BH[0] >>> 0
      }
      constructor(HH, BH, LH, AH, rH, SH) {
        const hH = tB(HH, vB.Srmp),
          tH = PB,
          zH = EB(BH, vB.Srmp),
          CH = PB,
          EH = zB(LH, vB.Srmp),
          XH = PB,
          GH = CB(AH, vB.Srmp),
          YH = PB,
          uH = vB.fYgC(hH, tH, zH, CH, EH, XH, GH, YH, rH, SH);
        if (uH[2]) throw GB(uH[1]);
        return this.__wbg_ptr = uH[0], nH.register(this, this.__wbg_ptr, this), this
      }
      Su() {
        return vB.pEzR(this.__wbg_ptr) >>> 0
      }
      ru() {
        const HH = vB.ADdN(this.__wbg_ptr);
        if (HH[2]) throw GB(HH[1]);
        return 0 !== HH[0]
      }
      hu() {
        return vB.unki(this.__wbg_ptr) >>> 0
      }
    }

    function GH() {
      const HH = vB.HE49();
      var BH = ZH(HH[0], HH[1]).slice();
      return vB.PyZM(HH[0], 4 * HH[1], 4), BH
    }

    function YH(HH, BH) {
      let LH, AH;
      try {
        const rH = tB(HH, vB.Srmp),
          SH = PB,
          hH = XB(BH, vB.Srmp, vB.RJhM),
          tH = PB,
          zH = vB.YGuD(rH, SH, hH, tH);
        return LH = zH[0], AH = zH[1], iH(zH[0], zH[1])
      } finally {
        vB.PyZM(LH, AH, 1)
      }
    }

    function uH() {
      const HH = vB.ElUx();
      var BH = ZH(HH[0], HH[1]).slice();
      return vB.PyZM(HH[0], 4 * HH[1], 4), BH
    }

    function QH(HH) {
      return 0 !== vB.ugIp(HH)
    }

    function WH(HH, BH) {
      const LH = XB(HH, vB.Srmp, vB.RJhM),
        AH = PB,
        rH = vB.ewiP(LH, AH, BH);
      if (rH[1]) throw GB(rH[0])
    }

    function MH() {
      vB.Vcru()
    }

    function xH() {
      return vB.QCfo() >>> 0
    }

    function vH(HH) {
      return 0 !== vB.yu7d(HH)
    }

    function PH(HH) {
      return 0 !== vB.ycPC(HH)
    }

    function TH(HH) {
      vB.RFQZ(HH)
    }

    function UH() {
      return vB.urjs() >>> 0
    }

    function VH() {
      return vB.eWqn() >>> 0
    }

    function OH() {
      return 0 !== vB.G7FQ()
    }

    function bH() {
      const HH = vB.mjue();
      var BH = ZH(HH[0], HH[1]).slice();
      return vB.PyZM(HH[0], 4 * HH[1], 4), BH
    }

    function kH() {
      const HH = vB.xw4Y();
      var BH = ZH(HH[0], HH[1]).slice();
      return vB.PyZM(HH[0], 4 * HH[1], 4), BH
    }

    function mH() {
      const HH = vB.ZnVX();
      var BH = ZH(HH[0], HH[1]).slice();
      return vB.PyZM(HH[0], 4 * HH[1], 4), BH
    }

    function oH() {
      return vB.GmTI() >>> 0
    }

    function IH() {
      vB.yQwp()
    }

    function fH() {
      let HH, BH;
      try {
        const LH = vB.gIzZ();
        return HH = LH[0], BH = LH[1], iH(LH[0], LH[1])
      } finally {
        vB.PyZM(HH, BH, 1)
      }
    }

    function lH(HH) {
      vB.yBxu(FH(HH))
    }

    function KH() {
      return {
        __proto__: null,
        ogdq: {
          __proto__: null,
          qxxj: function(HH, BH) {
            return FH(Error(iH(HH, BH)))
          },
          LLIv: function(HH, BH) {
            throw new Error(iH(HH, BH))
          },
          QSzS: function(HH) {
            AB(HH).call()
          },
          Mu23: function(HH, BH) {
            console.error(iH(HH, BH))
          },
          mkE2: function() {
            return performance.now()
          },
          N1tc: function(HH) {
            GB(HH)
          }
        }
      }
    }
    Symbol.dispose && (XH.prototype[Symbol.dispose] = XH.prototype.free);
    const cH = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((HH => vB.gSgE(HH, 1))),
      eH = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((HH => vB.fyWy(HH, 1))),
      qH = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((HH => vB.WgTL(HH, 1))),
      gH = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((HH => vB.GEk8(HH, 1))),
      NH = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((HH => vB.Sb8S(HH, 1))),
      RH = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((HH => vB.E9QO(HH, 1))),
      jH = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((HH => vB.KEEA(HH, 1))),
      nH = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((HH => vB.Wtfm(HH, 1)));

    function FH(HH) {
      SB === rB.length && rB.push(rB.length + 1);
      const BH = SB;
      return SB = rB[BH], rB[BH] = HH, BH
    }

    function DH(HH, BH) {
      if (!(HH instanceof BH)) throw new Error(`expected instance of ${BH.name}`)
    }

    function wH(HH, BH) {
      return HH >>>= 0, sH().subarray(HH / 8, HH / 8 + BH)
    }

    function ZH(HH, BH) {
      return HH >>>= 0, HB().subarray(HH / 4, HH / 4 + BH)
    }

    function dH(HH, BH) {
      return HH >>>= 0, LB().subarray(HH / 1, HH / 1 + BH)
    }
    let aH = null;

    function sH() {
      return null !== aH && 0 !== aH.byteLength || (aH = new Float64Array(vB.memory.buffer)), aH
    }
    let JH = null;

    function iH(HH, BH) {
      return function(HH, BH) {
        QB += BH, QB >= uB && (YB = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), YB.decode(), QB = BH);
        return YB.decode(LB().subarray(HH, HH + BH))
      }(HH >>> 0, BH)
    }
    let pH = null;
    let yH = null;

    function HB() {
      return null !== yH && 0 !== yH.byteLength || (yH = new Uint32Array(vB.memory.buffer)), yH
    }
    let BB = null;

    function LB() {
      return null !== BB && 0 !== BB.byteLength || (BB = new Uint8Array(vB.memory.buffer)), BB
    }

    function AB(HH) {
      return rB[HH]
    }
    let rB = new Array(1024).fill(void 0);
    rB.push(void 0, null, !0, !1);
    let SB = rB.length;

    function hB(HH) {
      return void 0 === HH || null === HH
    }

    function tB(HH, BH) {
      const LH = BH(2 * HH.length, 2) >>> 0;
      return (null !== pH && 0 !== pH.byteLength || (pH = new Uint16Array(vB.memory.buffer)), pH).set(HH, LH / 2), PB = HH.length, LH
    }

    function zB(HH, BH) {
      const LH = BH(4 * HH.length, 4) >>> 0;
      return HB().set(HH, LH / 4), PB = HH.length, LH
    }

    function CB(HH, BH) {
      const LH = BH(1 * HH.length, 1) >>> 0;
      return LB().set(HH, LH / 1), PB = HH.length, LH
    }

    function EB(HH, BH) {
      const LH = BH(8 * HH.length, 8) >>> 0;
      return sH().set(HH, LH / 8), PB = HH.length, LH
    }

    function XB(HH, BH, LH) {
      if (void 0 === LH) {
        const LH = WB.encode(HH),
          AH = BH(LH.length, 1) >>> 0;
        return LB().subarray(AH, AH + LH.length).set(LH), PB = LH.length, AH
      }
      let AH = HH.length,
        rH = BH(AH, 1) >>> 0;
      const SH = LB();
      let hH = 0;
      for (; hH < AH; hH++) {
        const BH = HH.charCodeAt(hH);
        if (BH > 127) break;
        SH[rH + hH] = BH
      }
      if (hH !== AH) {
        0 !== hH && (HH = HH.slice(hH)), rH = LH(rH, AH, AH = hH + 3 * HH.length, 1) >>> 0;
        const BH = LB().subarray(rH + hH, rH + AH);
        hH += WB.encodeInto(HH, BH).written, rH = LH(rH, AH, hH, 1) >>> 0
      }
      return PB = hH, rH
    }

    function GB(HH) {
      const BH = AB(HH);
      return function(HH) {
        HH < 1028 || (rB[HH] = SB, SB = HH)
      }(HH), BH
    }
    let YB = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    YB.decode();
    const uB = 2146435072;
    let QB = 0;
    const WB = new TextEncoder;
    "encodeInto" in WB || (WB.encodeInto = function(HH, BH) {
      const LH = WB.encode(HH);
      return BH.set(LH), {
        read: HH.length,
        written: LH.length
      }
    });
    let MB, xB, vB, PB = 0;

    function TB(HH, BH) {
      return xB = HH, vB = HH.exports, MB = BH, aH = null, JH = null, pH = null, yH = null, BB = null, vB.hACG(), vB
    }

    function UB(HH) {
      if (void 0 !== vB) return vB;
      void 0 !== HH && (Object.getPrototypeOf(HH) === Object.prototype ? ({
        module: HH
      } = HH) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const BH = KH();
      HH instanceof WebAssembly.Module || (HH = new WebAssembly.Module(HH));
      return TB(new WebAssembly.Instance(HH, BH), HH)
    }
    async function VB(HH) {
      if (void 0 !== vB) return vB;
      void 0 !== HH && (Object.getPrototypeOf(HH) === Object.prototype ? ({
        module_or_path: HH
      } = HH) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const BH = KH();
      ("string" === typeof HH || "function" === typeof Request && HH instanceof Request || "function" === typeof URL && HH instanceof URL) && (HH = fetch(HH));
      const {
        instance: LH,
        module: AH
      } = await async function(HH, BH) {
        if ("function" === typeof Response && HH instanceof Response) {
          if (!HH.ok) throw new Error(`failed to fetch Wasm: ${HH.status} ${HH.statusText} fetching '${HH.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(HH, BH)
          } catch (LH) {
            if (! function(HH) {
                switch (HH) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(HH.type) || "application/wasm" === HH.headers.get("Content-Type")) throw LH;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", LH)
          }
          const AH = await HH.arrayBuffer();
          return await WebAssembly.instantiate(AH, BH)
        } {
          const LH = await WebAssembly.instantiate(HH, BH);
          return LH instanceof WebAssembly.Instance ? {
            instance: LH,
            module: HH
          } : LH
        }
      }(await HH, BH);
      return TB(LH, AH)
    }
  },
  37069: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      e: () => tH,
      f: () => zH
    });
    var AH = LH(37078),
      rH = LH(3168),
      SH = LH(37083);
    const hH = {
      name: rH.e,
      url: () => new LH.U(LH(37087)),
      init: AH.default,
      bindings: AH
    };

    function tH() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH,
        BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hH,
        LH = arguments.length > 2 ? arguments[2] : void 0;
      return (0, SH.l)(HH, BH, LH)
    }

    function zH(HH) {
      return (0, rH.M)((() => HH), AH, hH)
    }
  },
  37053: (HH, BH, LH) => {
    function AH(HH, BH) {
      return new Error(`${HH}: ${BH instanceof Error?`${BH.name}: ${BH.message}`:String(BH)}`, {
        cause: BH
      })
    }
    LH.d(BH, {
      d: () => AH
    })
  },
  37044: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH,
      g: () => zH
    });
    var AH = LH(3171),
      rH = LH(7172),
      SH = LH(37053);

    function hH() {
      return new URL(new LH.U(LH(37061)).href, globalThis.location?.href).href
    }
    let tH = null;

    function zH() {
      return tH ??= (async () => (0, AH.J)(new URL(hH()), (0, rH.c)("bloxd_wasm_textures")))().catch((HH => {
        throw (0, SH.d)((0, AH.O)(HH), HH)
      })), tH
    }
  },
  37023: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH,
      f: () => SH,
      i: () => zH,
      j: () => hH,
      m: () => rH
    });
    const AH = /^alloc_failed (\d+) bytes$/;

    function rH(HH, BH) {
      return SH(HH, BH) ? `trap=alloc_failed ${BH} bytes` : `trap=${HH}`
    }

    function SH(HH, BH) {
      return "unreachable" === HH && BH > 0
    }

    function hH(HH, BH, LH) {
      const AH = function(HH) {
        return HH instanceof WebAssembly.RuntimeError ? /unreachable/i.test(HH.message) ? "unreachable" : /out of bounds/i.test(HH.message) ? "out_of_bounds" : "runtime_error" : (HH instanceof RangeError || HH instanceof Error && "InternalError" === HH.name) && /call stack|recursion/i.test(HH.message) ? "stack_overflow" : "js_error"
      }(HH);
      if ("unreachable" !== AH) return {
        kind: AH,
        panic: null,
        refusedBytes: 0
      };
      const rH = BH(),
        SH = LH();
      return {
        kind: AH,
        panic: SH > 0 ? null : rH,
        refusedBytes: SH
      }
    }
    const tH = 300;

    function zH(HH) {
      return HH.replace(/\s*\n\s*/g, " / ").slice(0, tH)
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);