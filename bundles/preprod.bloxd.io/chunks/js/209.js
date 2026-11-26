export const id = 209;
export const ids = [208, 209];
export const modules = {
  34708: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      CAPPED_COUNTS_VISIT_CAP: () => QU,
      reportCappedWasmFailure: () => oU,
      reportUncappedWasmFailure: () => FU,
      reportWasmCrash: () => yU,
      reportWasmFailure: () => AU
    });
    var cU = zU(1835);

    function yU(UU) {
      (0, cU.reportClientError)("wasm_load", UU.message, UU.code)
    }
    const QU = cU.MAX_ERRORS_PER_VISIT - 4;

    function AU(UU, XU, zU, yU) {
      (0, cU.reportClientError)(UU, XU, zU, !1, cU.MAX_ERRORS_PER_VISIT, {
        context: yU
      })
    }

    function FU(UU, XU, zU, yU) {
      (0, cU.reportClientError)(UU, XU, zU, !1, 1 / 0, {
        context: yU
      })
    }

    function oU(UU, XU, zU, yU) {
      (0, cU.reportClientError)(UU, XU, zU, !1, QU, {
        context: yU
      })
    }
  },
  36969: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => RU,
      f: () => dU,
      j: () => LU,
      l: () => PU
    });
    var cU = zU(36989),
      yU = zU(3169),
      QU = zU(37005),
      AU = zU(3176),
      FU = zU(34708),
      oU = zU(3239),
      DU = zU(3596),
      EU = zU(3592),
      YU = zU(36972),
      NU = zU(1835),
      IU = zU(36977),
      pU = zU(36981),
      aU = zU(4091);
    let tU = !1;
    const gU = 40;
    var kU = zU(3604),
      GU = zU(3964);
    const BU = "bloxdWasmFailureReported";

    function ZU() {
      return "undefined" === typeof WebAssembly
    }

    function RU() {
      return (0, cU.e)()
    }

    function PU() {
      if (ZU()) return "this browser has no WebAssembly";
      const UU = (0, yU.r)();
      return "compile" === UU || "instantiate" === UU ? `the core wasm didn't load here (${(0,yU.j)()})` : null
    }
    async function WU(UU) {
      return await (0, kU.j)(), await (0, QU.g)(QU.e, void 0, UU)
    }

    function dU() {
      ZU() || (0, GU.g)((() => {
        WU()
      }))
    }

    function LU() {
      if (ZU()) return async () => ((0, oU.g)("unsupported", 0), eU("unsupported", "This browser has no WebAssembly"), !1);
      const UU = {
        reloadFailedDownload: !0
      };
      return WU(UU), async () => {
        var XU;
        const zU = performance.now();
        await WU(UU);
        const cU = (performance.now() - zU) / 1e3;
        if ((0, yU.T)()) return (0, oU.g)("ready", cU), tU || (tU = !0, (0, yU._)((() => {
          if ("call" !== (0, yU.r)()) return;
          const UU = (0, yU.o)(),
            XU = (0, YU.i)(UU, yU.G, yU.jb),
            zU = (0, yU.x)().buffer.byteLength,
            cU = (0, YU.d)(XU.kind, XU.refusedBytes),
            QU = cU ? "alloc_failed" : XU.kind,
            AU = (0, IU.g)(zU),
            FU = cU ? `_r${Math.floor(Math.log2(XU.refusedBytes))}` : "",
            oU = (0, aU.d)();
          null === oU && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const DU = new Error((0, pU.d)(UU, zU, XU));
          if (UU instanceof Error && void 0 !== UU.stack) {
            const XU = UU.stack.split("\n"),
              zU = XU.length > gU ? [...XU.slice(0, gU / 2), ...XU.slice(-gU / 2)] : XU;
            DU.stack = zU.join("\n")
          }(0, NU.reportClientError)("wasm_load", DU, `wasm_call_${QU}_${null!==oU&&void 0!==oU?oU:"unnamed"}_m${AU}${FU}`)
        }))), (0, AU._)(QU.e.url()) && (0, FU.reportCappedWasmFailure)("wasm_load", DU.b.message, DU.b.code), !0;
        const kU = EU.d[null !== (XU = (0, yU.r)()) && void 0 !== XU ? XU : "call"];
        return (0, oU.g)(kU, cU), eU(kU, (0, yU.j)()), !1
      }
    }

    function eU(UU, XU) {
      (0, EU.g)(BU, `Bloxd wasm ${UU}, so the game can't start: ${XU}`, XU, UU)
    }
  },
  36981: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU,
      h: () => DU,
      j: () => AU,
      l: () => YU
    });
    var cU = zU(36972),
      yU = zU(13);
    const QU = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function AU(UU) {
      if (UU instanceof WebAssembly.RuntimeError) return !0;
      const XU = UU instanceof Error ? UU.stack : void 0;
      return "string" === typeof XU && QU.test(XU)
    }

    function FU(UU, XU, zU) {
      var yU;
      const AU = UU instanceof Error ? UU.name : "thrown",
        FU = (UU instanceof Error && null !== (yU = UU.stack) && void 0 !== yU ? yU : "").split("\n").filter((UU => QU.test(UU))).slice(0, 8).map((UU => UU.trim())),
        oU = null === XU ? "wasm memory unknown" : `wasm memory ${Math.round(XU/2**20)} MB`,
        DU = null === zU.panic ? "" : `, panic: ${(0,cU.e)(zU.panic)}`,
        EU = `${AU}: ${UU instanceof Error?UU.message:String(UU)}`;
      return `${(0,cU.l)(zU.kind,zU.refusedBytes)} ${EU} (${oU})${DU}${FU.length>0?` | ${FU.join(" < ")}`:""}`
    }
    const oU = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function DU(UU) {
      var XU;
      let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(UU instanceof Error) || !oU.test(UU.message)) return {};
      if (!("detached" in zU)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, yU.W)(null === (XU = (0, yU.P)(zU, "detached")) || void 0 === XU ? void 0 : XU.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const EU = 500;

    function YU(UU) {
      let XU = "[object Object]";
      try {
        XU = String(UU)
      } catch {}
      if ("[object Object]" !== XU) return XU;
      try {
        var zU, cU;
        return null !== (zU = null === (cU = JSON.stringify(UU)) || void 0 === cU ? void 0 : cU.slice(0, EU)) && void 0 !== zU ? zU : XU
      } catch {
        return XU
      }
    }
  },
  37022: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/bloxd_wasm_bg.0f9c10d0d401d306b045.wasm"
  },
  36997: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/bloxd_wasm_textures_bg.25fe60e88eb857bf3bdf.wasm"
  },
  37007: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      cc: () => cU,
      EnvelopeKind: () => yU,
      ac: () => QU,
      PhysicsEngine: () => AU,
      ec: () => FU,
      sy: () => oU,
      XQ: () => DU,
      PQ: () => EU,
      HQ: () => YU,
      fA: () => NU,
      OF: () => IU,
      Do: () => pU,
      Lo: () => aU,
      FD: () => tU,
      default: () => PX,
      initSync: () => RX,
      HD: () => gU,
      BE: () => kU,
      HE: () => GU,
      OY: () => BU,
      SY: () => ZU,
      rY: () => RU,
      uY: () => PU,
      fY: () => WU,
      iY: () => dU,
      HY: () => LU,
      MY: () => eU,
      vY: () => CU,
      VY: () => wU,
      sY: () => qU,
      mY: () => OU
    });
    class cU {
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, rU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        GX.bYhV(UU, 0)
      }
      lY() {
        const UU = GX.bTx2(this.__wbg_ptr);
        if (UU[2]) throw NX(UU[1]);
        return UU[0] >>> 0
      }
      xY() {
        return GX.OCx6(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const UU = GX.dWx2();
        return this.__wbg_ptr = UU, rU.register(this, this.__wbg_ptr, this), this
      }
      JY() {
        return GX.bLvG(this.__wbg_ptr) >>> 0
      }
      jY(UU) {
        const XU = GX.MIR7(this.__wbg_ptr, UU);
        if (XU[2]) throw NX(XU[1]);
        return XU[0] >>> 0
      }
      KY(UU) {
        const XU = GX.nLSi(this.__wbg_ptr, UU);
        if (XU[2]) throw NX(XU[1]);
        return XU[0] >>> 0
      }
    }
    Symbol.dispose && (cU.prototype[Symbol.dispose] = cU.prototype.free);
    const yU = Object.freeze({
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
    class QU {
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, uU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        GX.l0zl(UU, 0)
      }
      hY(UU, XU) {
        const zU = GX.id9o(this.__wbg_ptr, UU, XU);
        if (zU[2]) throw NX(zU[1]);
        return zU[0] >>> 0
      }
      UN(UU) {
        const XU = GX.XdY2(this.__wbg_ptr, UU);
        if (XU[2]) throw NX(XU[1]);
        return XU[0] >>> 0
      }
      XN() {
        GX.s9Z9(this.__wbg_ptr)
      }
      static zN() {
        return GX.XJro() >>> 0
      }
      cN() {
        return GX.aDBa(this.__wbg_ptr) >>> 0
      }
      yN() {
        const UU = GX.oTBF(this.__wbg_ptr);
        return 0 === UU[0] ? void 0 : UU[1]
      }
      QN() {
        return GX.VF0U(this.__wbg_ptr) >>> 0
      }
      AN() {
        return GX.iMUZ(this.__wbg_ptr) >>> 0
      }
      static TY() {
        return GX.syof() >>> 0
      }
      constructor() {
        const UU = GX.ahOc();
        return this.__wbg_ptr = UU, uU.register(this, this.__wbg_ptr, this), this
      }
      FN() {
        return GX.hef0(this.__wbg_ptr) >>> 0
      }
      oN() {
        return GX.px89(this.__wbg_ptr) >>> 0
      }
      DN() {
        return GX.s4XM(this.__wbg_ptr) >>> 0
      }
      bY(UU) {
        return GX.F372(this.__wbg_ptr, UU) >>> 0
      }
      reserve(UU, XU) {
        const zU = GX.xBzq(this.__wbg_ptr, UU, XU);
        if (zU[1]) throw NX(zU[0])
      }
      NN(UU, XU) {
        const zU = oX(UU, GX.qbti),
          cU = BX;
        GX.LmHb(this.__wbg_ptr, zU, cU, XU)
      }
      text() {
        let UU, XU;
        try {
          const zU = GX.fUtg(this.__wbg_ptr);
          return UU = zU[0], XU = zU[1], bU(zU[0], zU[1])
        } finally {
          GX.h5R4(UU, XU, 1)
        }
      }
    }
    Symbol.dispose && (QU.prototype[Symbol.dispose] = QU.prototype.free);
    class AU {
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, fU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        GX.TKNs(UU, 0)
      }
      pN(UU, XU) {
        nU(XU, cU);
        const zU = GX.vUHx(this.__wbg_ptr, UU, XU.__wbg_ptr);
        if (zU[2]) throw NX(zU[1]);
        return zU[0] >>> 0
      }
      aN() {
        const UU = GX.F5O8(this.__wbg_ptr);
        if (UU[1]) throw NX(UU[0])
      }
      GN(UU, XU, zU, cU, yU, QU, AU, oU, DU, EU, YU) {
        nU(UU, FU);
        const NU = GX.INp8(this.__wbg_ptr, UU.__wbg_ptr, XU, zU, cU, yU, QU, AU, oU, DU, EU, YU);
        if (NU[2]) throw NX(NU[1]);
        return NU[0]
      }
      BN() {
        const UU = GX.kx6L(this.__wbg_ptr);
        var XU = mU(UU[0], UU[1]).slice();
        return GX.h5R4(UU[0], 8 * UU[1], 8), XU
      }
      ZN() {
        return GX.BhIv(this.__wbg_ptr) >>> 0
      }
      RN() {
        return GX.Qd5b(this.__wbg_ptr) >>> 0
      }
      PN() {
        return GX.Ce8k(this.__wbg_ptr) >>> 0
      }
      constructor(UU, XU, zU, cU, yU, QU, AU, FU) {
        const oU = GX.oDcL(UU, XU, zU, cU, yU, QU, AU, FU);
        if (oU[2]) throw NX(oU[1]);
        return this.__wbg_ptr = oU[0], fU.register(this, this.__wbg_ptr, this), this
      }
      LN(UU) {
        nU(UU, cU);
        const XU = GX.Lwa6(this.__wbg_ptr, UU.__wbg_ptr);
        if (XU[2]) throw NX(XU[1]);
        return XU[0] >>> 0
      }
      eN(UU) {
        const XU = GX.hFgc(this.__wbg_ptr, UU);
        if (XU[1]) throw NX(XU[0])
      }
      CN() {
        return GX.Ql13(this.__wbg_ptr) >>> 0
      }
      resume(UU, XU) {
        nU(UU, FU), nU(XU, cU);
        const zU = GX.hW9T(this.__wbg_ptr, UU.__wbg_ptr, XU.__wbg_ptr);
        if (zU[2]) throw NX(zU[1]);
        return zU[0] >>> 0
      }
      rN(UU) {
        const XU = GX.VORW(this.__wbg_ptr, UU);
        if (XU[1]) throw NX(XU[0])
      }
      iN(UU, XU) {
        nU(XU, cU);
        const zU = GX.OsPq(this.__wbg_ptr, UU, XU.__wbg_ptr);
        if (zU[1]) throw NX(zU[0])
      }
      vN(UU) {
        const XU = EX(UU, GX.qbti),
          zU = BX,
          cU = GX.wKuG(this.__wbg_ptr, XU, zU);
        if (cU[1]) throw NX(cU[0])
      }
      gN(UU, XU, zU, cU, yU, QU) {
        const AU = GX.ie62(this.__wbg_ptr, UU, XU, zU, cU, yU, QU);
        if (AU[1]) throw NX(AU[0])
      }
      kN(UU, XU, zU, cU) {
        const yU = oX(UU, GX.qbti),
          QU = BX,
          AU = EX(XU, GX.qbti),
          FU = BX,
          oU = EX(zU, GX.qbti),
          DU = BX,
          EU = EX(cU, GX.qbti),
          YU = BX,
          NU = GX.Zyai(this.__wbg_ptr, yU, QU, AU, FU, oU, DU, EU, YU);
        if (NU[1]) throw NX(NU[0])
      }
      sN(UU, XU) {
        nU(XU, cU);
        const zU = GX.bWSO(this.__wbg_ptr, UU, XU.__wbg_ptr);
        if (zU[1]) throw NX(zU[0])
      }
      dN(UU, XU, zU) {
        const cU = GX.nvHd(this.__wbg_ptr, UU, XU, zU);
        if (cU[1]) throw NX(cU[0])
      }
      mN(UU, XU, zU, cU, yU, QU, AU, oU, DU, EU) {
        nU(UU, FU);
        return GX.jjOo(this.__wbg_ptr, UU.__wbg_ptr, XU, zU, cU, yU, QU, AU, oU, DU, EU)
      }
    }
    Symbol.dispose && (AU.prototype[Symbol.dispose] = AU.prototype.free);
    class FU {
      static __wrap(UU) {
        const XU = Object.create(FU.prototype);
        return XU.__wbg_ptr = UU, iU.register(XU, XU.__wbg_ptr, XU), XU
      }
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, iU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        GX.JfJb(UU, 0)
      }
      xN(UU) {
        const XU = GX.VglL(this.__wbg_ptr, UU);
        if (XU[2]) throw NX(XU[1]);
        return XU[0] >>> 0
      }
      JN(UU, XU, zU) {
        return GX.FAnm(this.__wbg_ptr, UU, XU, zU)
      }
      jN(UU, XU, zU) {
        return GX.xfMF(this.__wbg_ptr, UU, XU, zU) >>> 0
      }
      KN(UU, XU, zU, cU) {
        return 0 !== GX.Dllv(this.__wbg_ptr, UU, XU, zU, cU)
      }
      bN() {
        GX.ArwQ(this.__wbg_ptr)
      }
      TN(UU) {
        const XU = GX.CJw9(this.__wbg_ptr, UU);
        if (XU[3]) throw NX(XU[2]);
        var zU = xU(XU[0], XU[1]).slice();
        return GX.h5R4(XU[0], 1 * XU[1], 1), zU
      }
      evict(UU, XU) {
        return GX.XlIX(this.__wbg_ptr, UU, XU) >>> 0
      }
      hN() {
        GX.RUEV(this.__wbg_ptr)
      }
      UI(UU, XU, zU) {
        GX.hu2t(this.__wbg_ptr, UU, XU, zU)
      }
      XI(UU) {
        const XU = GX.vqcZ(this.__wbg_ptr, UU);
        if (XU[1]) throw NX(XU[0])
      }
      zI() {
        return GX.EF5q(this.__wbg_ptr) >>> 0
      }
      cI() {
        return GX.nSm5(this.__wbg_ptr) >>> 0
      }
      yI(UU, XU, zU) {
        GX.Sj0b(this.__wbg_ptr, UU, XU, zU)
      }
      QI(UU, XU, zU) {
        GX.gDc4(this.__wbg_ptr, UU, XU, zU)
      }
      AI() {
        return GX.JPl3(this.__wbg_ptr) >>> 0
      }
      FI() {
        return GX.W8f5(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const UU = GX.bhme();
        return this.__wbg_ptr = UU, iU.register(this, this.__wbg_ptr, this), this
      }
      static oI() {
        const UU = GX.ayoN();
        return FU.__wrap(UU)
      }
      DI() {
        return GX.stoh(this.__wbg_ptr) >>> 0
      }
      EI() {
        return GX.M5hJ(this.__wbg_ptr) >>> 0
      }
      YI(UU, XU, zU, cU) {
        const yU = GX.dK0u(this.__wbg_ptr, UU, XU, zU, cU);
        if (yU[1]) throw NX(yU[0])
      }
      NI() {
        return GX.Zikl(this.__wbg_ptr) >>> 0
      }
      II() {
        return GX.oiw1(this.__wbg_ptr) >>> 0
      }
      pI(UU, XU, zU, cU) {
        GX.C86D(this.__wbg_ptr, UU, XU, zU, cU)
      }
      aI(UU) {
        GX.EHvE(this.__wbg_ptr, UU)
      }
      gI(UU, XU, zU, cU, yU) {
        const QU = DX(XU, GX.qbti),
          AU = BX,
          FU = oX(zU, GX.qbti),
          oU = BX,
          DU = EX(cU, GX.qbti),
          EU = BX,
          YU = GX.GYA9(this.__wbg_ptr, UU, QU, AU, FU, oU, DU, EU, yU);
        if (YU[1]) throw NX(YU[0])
      }
      tI(UU, XU, zU, cU) {
        const yU = DX(UU, GX.qbti),
          QU = BX,
          AU = oX(XU, GX.qbti),
          FU = BX,
          oU = EX(zU, GX.qbti),
          DU = BX,
          EU = DX(cU, GX.qbti),
          YU = BX,
          NU = GX.RI7n(this.__wbg_ptr, yU, QU, AU, FU, oU, DU, EU, YU);
        if (NU[1]) throw NX(NU[0])
      }
      RI(UU) {
        const XU = DX(UU, GX.qbti),
          zU = BX,
          cU = GX.wWl1(this.__wbg_ptr, XU, zU);
        if (cU[1]) throw NX(cU[0])
      }
      WI() {
        return GX.Ic63(this.__wbg_ptr) >>> 0
      }
      dI(UU) {
        const XU = GX.HMWA(this.__wbg_ptr, UU);
        if (XU[2]) throw NX(XU[1]);
        return XU[0] >>> 0
      }
      steer() {
        return GX.gEv8(this.__wbg_ptr) >>> 0
      }
      LI() {
        const UU = GX.jMII(this.__wbg_ptr);
        var XU = mU(UU[0], UU[1]).slice();
        return GX.h5R4(UU[0], 8 * UU[1], 8), XU
      }
      eI() {
        return GX.bSUg(this.__wbg_ptr) >>> 0
      }
      qN() {
        const UU = GX.wlSo(this.__wbg_ptr);
        var XU, zU, cU = (XU = UU[0], zU = UU[1], XU >>>= 0, (null !== KU && 0 !== KU.byteLength || (KU = new Int32Array(GX.memory.buffer)), KU).subarray(XU / 4, XU / 4 + zU)).slice();
        return GX.h5R4(UU[0], 4 * UU[1], 4), cU
      }
    }
    Symbol.dispose && (FU.prototype[Symbol.dispose] = FU.prototype.free);
    class oU {
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, HU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        GX.xMch(UU, 0)
      }
      gY(UU) {
        const XU = oX(UU, GX.qbti),
          zU = BX,
          cU = GX.zzsh(this.__wbg_ptr, XU, zU);
        if (cU[1]) throw NX(cU[0])
      }
      CI() {
        return GX.H84x(this.__wbg_ptr) >>> 0
      }
      wI() {
        return GX.r8Gu(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const UU = GX.KaIt();
        return this.__wbg_ptr = UU, HU.register(this, this.__wbg_ptr, this), this
      }
      run(UU, XU) {
        nU(UU, FU);
        const zU = GX.kB7w(this.__wbg_ptr, UU.__wbg_ptr, XU);
        if (zU[2]) throw NX(zU[1]);
        return zU[0] >>> 0
      }
      qI(UU) {
        const XU = oX(UU, GX.qbti),
          zU = BX;
        GX.WeiW(this.__wbg_ptr, XU, zU)
      }
      OI(UU) {
        const XU = oX(UU, GX.qbti),
          zU = BX;
        GX.TIKu(this.__wbg_ptr, XU, zU)
      }
    }
    Symbol.dispose && (oU.prototype[Symbol.dispose] = oU.prototype.free);
    class DU {
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, MU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        GX.Rxtf(UU, 0)
      }
      rI(UU, XU) {
        const zU = DX(UU, GX.qbti),
          cU = BX;
        return GX.mcK7(this.__wbg_ptr, zU, cU, XU) >>> 0
      }
      uI(UU, XU, zU) {
        nU(UU, FU);
        const cU = DX(zU, GX.qbti),
          yU = BX,
          QU = GX.Mqtz(this.__wbg_ptr, UU.__wbg_ptr, XU, cU, yU);
        if (QU[2]) throw NX(QU[1]);
        return QU[0] >>> 0
      }
      SI(UU) {
        return GX.XDWi(this.__wbg_ptr, UU) >>> 0
      }
      constructor() {
        const UU = GX.teOa();
        return this.__wbg_ptr = UU, MU.register(this, this.__wbg_ptr, this), this
      }
      scan(UU, XU) {
        nU(UU, FU);
        const zU = GX.dcOp(this.__wbg_ptr, UU.__wbg_ptr, XU);
        if (zU[2]) throw NX(zU[1]);
        return zU[0] >>> 0
      }
      HI(UU) {
        const XU = DX(UU, GX.qbti),
          zU = BX;
        GX.NaOv(this.__wbg_ptr, XU, zU)
      }
      iI() {
        return GX.ig8i(this.__wbg_ptr) >>> 0
      }
      fI() {
        return GX.s3yJ(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (DU.prototype[Symbol.dispose] = DU.prototype.free);
    class EU {
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, vU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        GX.AFN6(UU, 0)
      }
      vI(UU) {
        const XU = GX.tBLS(this.__wbg_ptr, UU);
        if (XU[2]) throw NX(XU[1]);
        return XU[0] >>> 0
      }
      compute(UU, XU, zU, cU) {
        var yU = AX(cU) ? 0 : YX(cU, GX.qbti, GX.gY1v),
          QU = BX;
        const AU = GX.EPze(this.__wbg_ptr, UU, AX(XU) ? Number.MAX_SAFE_INTEGER : XU | 0, zU, yU, QU);
        if (AU[2]) throw NX(AU[1]);
        return AU[0] >>> 0
      }
      sI(UU) {
        const XU = YX(UU, GX.qbti, GX.gY1v),
          zU = BX;
        GX.jsLv(this.__wbg_ptr, XU, zU)
      }
      nI() {
        return GX.C00c(this.__wbg_ptr)
      }
      mI(UU) {
        return GX.HIsA(this.__wbg_ptr, UU) >>> 0
      }
      lI() {
        return GX.GINm(this.__wbg_ptr) >>> 0
      }
      xI() {
        return GX.tFPA(this.__wbg_ptr) >>> 0
      }
      JI(UU, XU) {
        const zU = GX.goJH(this.__wbg_ptr, UU, XU);
        if (zU[1]) throw NX(zU[0])
      }
      jI() {
        return GX.tMBd(this.__wbg_ptr) >>> 0
      }
      KI() {
        return GX.Fvss(this.__wbg_ptr) >>> 0
      }
      bI() {
        return GX.UcY7(this.__wbg_ptr) >>> 0
      }
      VI(UU, XU, zU) {
        const cU = oX(UU, GX.qbti),
          yU = BX,
          QU = oX(XU, GX.qbti),
          AU = BX,
          FU = GX.RrNb(this.__wbg_ptr, cU, yU, QU, AU, zU);
        if (FU[1]) throw NX(FU[0])
      }
      hI() {
        return GX.ii8T(this.__wbg_ptr) >>> 0
      }
      mesh(UU, XU, zU, cU, yU) {
        const QU = GX.nFV5(this.__wbg_ptr, UU, XU, zU, cU, yU);
        if (QU[2]) throw NX(QU[1]);
        return QU[0] >>> 0
      }
      constructor(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU, gU, kU, GU, BU) {
        const ZU = FX(UU, GX.qbti),
          RU = BX,
          PU = EX(XU, GX.qbti),
          WU = BX,
          dU = oX(zU, GX.qbti),
          LU = BX,
          eU = DX(cU, GX.qbti),
          CU = BX,
          wU = DX(yU, GX.qbti),
          qU = BX,
          OU = oX(QU, GX.qbti),
          SU = BX,
          rU = oX(AU, GX.qbti),
          uU = BX,
          fU = EX(FU, GX.qbti),
          iU = BX,
          HU = EX(oU, GX.qbti),
          MU = BX,
          VU = DX(DU, GX.qbti),
          sU = BX;
        var nU = AX(EU) ? 0 : FX(EU, GX.qbti),
          mU = BX;
        const lU = oX(YU, GX.qbti),
          xU = BX,
          JU = DX(NU, GX.qbti),
          jU = BX;
        var KU = AX(IU) ? 0 : DX(IU, GX.qbti),
          bU = BX,
          TU = AX(pU) ? 0 : DX(pU, GX.qbti),
          hU = BX;
        const UX = EX(aU, GX.qbti),
          XX = BX,
          zX = GX.Sj92(ZU, RU, PU, WU, dU, LU, eU, CU, wU, qU, OU, SU, rU, uU, fU, iU, HU, MU, VU, sU, nU, mU, lU, xU, JU, jU, KU, bU, TU, hU, UX, XX, tU, gU, kU, GU, BU);
        if (zX[2]) throw NX(zX[1]);
        return this.__wbg_ptr = zX[0], vU.register(this, this.__wbg_ptr, this), this
      }
      TI(UU, XU) {
        const zU = oX(UU, GX.qbti),
          cU = BX,
          yU = GX.DrJq(this.__wbg_ptr, zU, cU, XU);
        if (yU[3]) throw NX(yU[2]);
        var QU = xU(yU[0], yU[1]).slice();
        return GX.h5R4(yU[0], 1 * yU[1], 1), QU
      }
      Up(UU) {
        GX.sPdH(this.__wbg_ptr, AX(UU) ? 16777215 : UU)
      }
      Xp(UU) {
        return GX.zOLp(this.__wbg_ptr, UU) >>> 0
      }
      cp() {
        return GX.C1kT(this.__wbg_ptr) >>> 0
      }
      zp() {
        const UU = GX.BxyT(this.__wbg_ptr);
        if (UU[2]) throw NX(UU[1]);
        return 0 !== UU[0]
      }
      yp() {
        return GX.tudS(this.__wbg_ptr) >>> 0
      }
      Qp() {
        return GX.Btf3(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (EU.prototype[Symbol.dispose] = EU.prototype.free);
    class YU {
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, VU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        GX.GB6E(UU, 0)
      }
      compute(UU, XU, zU, cU) {
        var yU = AX(cU) ? 0 : YX(cU, GX.qbti, GX.gY1v),
          QU = BX;
        const AU = GX.y8gi(this.__wbg_ptr, UU, AX(XU) ? Number.MAX_SAFE_INTEGER : XU | 0, zU, yU, QU);
        if (AU[2]) throw NX(AU[1]);
        return AU[0] >>> 0
      }
      sI(UU) {
        const XU = YX(UU, GX.qbti, GX.gY1v),
          zU = BX;
        GX.N6AO(this.__wbg_ptr, XU, zU)
      }
      KI() {
        return GX.imHN(this.__wbg_ptr) >>> 0
      }
      bI() {
        return GX.CnDO(this.__wbg_ptr) >>> 0
      }
      Ap(UU) {
        const XU = GX.z2Ab(this.__wbg_ptr, UU);
        if (XU[2]) throw NX(XU[1]);
        return XU[0] >>> 0
      }
      constructor(UU, XU, zU, cU, yU, QU) {
        const AU = FX(UU, GX.qbti),
          FU = BX,
          oU = EX(XU, GX.qbti),
          DU = BX,
          EU = oX(zU, GX.qbti),
          YU = BX,
          NU = DX(cU, GX.qbti),
          IU = BX,
          pU = GX.rrHf(AU, FU, oU, DU, EU, YU, NU, IU, yU, QU);
        if (pU[2]) throw NX(pU[1]);
        return this.__wbg_ptr = pU[0], VU.register(this, this.__wbg_ptr, this), this
      }
      cp() {
        return GX.q19b(this.__wbg_ptr) >>> 0
      }
      zp() {
        const UU = GX.Nqr2(this.__wbg_ptr);
        if (UU[2]) throw NX(UU[1]);
        return 0 !== UU[0]
      }
      yp() {
        return GX.Blya(this.__wbg_ptr) >>> 0
      }
    }

    function NU() {
      const UU = GX.nf0v();
      var XU = lU(UU[0], UU[1]).slice();
      return GX.h5R4(UU[0], 4 * UU[1], 4), XU
    }

    function IU(UU, XU) {
      let zU, cU;
      try {
        const yU = FX(UU, GX.qbti),
          QU = BX,
          AU = YX(XU, GX.qbti, GX.gY1v),
          FU = BX,
          oU = GX.uQ7n(yU, QU, AU, FU);
        return zU = oU[0], cU = oU[1], bU(oU[0], oU[1])
      } finally {
        GX.h5R4(zU, cU, 1)
      }
    }

    function pU() {
      const UU = GX.n8yk();
      var XU = lU(UU[0], UU[1]).slice();
      return GX.h5R4(UU[0], 4 * UU[1], 4), XU
    }

    function aU(UU) {
      return 0 !== GX.T0Qy(UU)
    }

    function tU(UU, XU) {
      const zU = YX(UU, GX.qbti, GX.gY1v),
        cU = BX,
        yU = GX.y6Oe(zU, cU, XU);
      if (yU[1]) throw NX(yU[0])
    }

    function gU() {
      GX.R1YG()
    }

    function kU() {
      return GX.zD44() >>> 0
    }

    function GU(UU) {
      return 0 !== GX.pj97(UU)
    }

    function BU(UU) {
      return 0 !== GX.WJCY(UU)
    }

    function ZU(UU) {
      GX.dabL(UU)
    }

    function RU() {
      return GX.mLZg() >>> 0
    }

    function PU() {
      return GX.QaOK() >>> 0
    }

    function WU() {
      return 0 !== GX.ckjb()
    }

    function dU() {
      const UU = GX.mYQU();
      var XU = lU(UU[0], UU[1]).slice();
      return GX.h5R4(UU[0], 4 * UU[1], 4), XU
    }

    function LU() {
      const UU = GX.SJ2M();
      var XU = lU(UU[0], UU[1]).slice();
      return GX.h5R4(UU[0], 4 * UU[1], 4), XU
    }

    function eU() {
      const UU = GX.kWJ4();
      var XU = lU(UU[0], UU[1]).slice();
      return GX.h5R4(UU[0], 4 * UU[1], 4), XU
    }

    function CU() {
      return GX.odhg() >>> 0
    }

    function wU() {
      GX.BXeJ()
    }

    function qU() {
      let UU, XU;
      try {
        const zU = GX.HEhG();
        return UU = zU[0], XU = zU[1], bU(zU[0], zU[1])
      } finally {
        GX.h5R4(UU, XU, 1)
      }
    }

    function OU(UU) {
      GX.uU83(sU(UU))
    }

    function SU() {
      return {
        __proto__: null,
        vFZ1: {
          __proto__: null,
          Taz4: function(UU, XU) {
            return sU(Error(bU(UU, XU)))
          },
          OvYS: function(UU, XU) {
            throw new Error(bU(UU, XU))
          },
          kQsc: function(UU) {
            cX(UU).call()
          },
          zeRb: function(UU, XU) {
            console.error(bU(UU, XU))
          },
          JnNL: function() {
            return performance.now()
          },
          oPvq: function(UU) {
            NX(UU)
          }
        }
      }
    }
    Symbol.dispose && (YU.prototype[Symbol.dispose] = YU.prototype.free);
    const rU = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((UU => GX.bYhV(UU, 1))),
      uU = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((UU => GX.l0zl(UU, 1))),
      fU = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((UU => GX.TKNs(UU, 1))),
      iU = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((UU => GX.JfJb(UU, 1))),
      HU = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((UU => GX.xMch(UU, 1))),
      MU = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((UU => GX.Rxtf(UU, 1))),
      vU = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((UU => GX.AFN6(UU, 1))),
      VU = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((UU => GX.GB6E(UU, 1)));

    function sU(UU) {
      QX === yX.length && yX.push(yX.length + 1);
      const XU = QX;
      return QX = yX[XU], yX[XU] = UU, XU
    }

    function nU(UU, XU) {
      if (!(UU instanceof XU)) throw new Error(`expected instance of ${XU.name}`)
    }

    function mU(UU, XU) {
      return UU >>>= 0, jU().subarray(UU / 8, UU / 8 + XU)
    }

    function lU(UU, XU) {
      return UU >>>= 0, UX().subarray(UU / 4, UU / 4 + XU)
    }

    function xU(UU, XU) {
      return UU >>>= 0, zX().subarray(UU / 1, UU / 1 + XU)
    }
    let JU = null;

    function jU() {
      return null !== JU && 0 !== JU.byteLength || (JU = new Float64Array(GX.memory.buffer)), JU
    }
    let KU = null;

    function bU(UU, XU) {
      return function(UU, XU) {
        aX += XU, aX >= pX && (IX = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), IX.decode(), aX = XU);
        return IX.decode(zX().subarray(UU, UU + XU))
      }(UU >>> 0, XU)
    }
    let TU = null;
    let hU = null;

    function UX() {
      return null !== hU && 0 !== hU.byteLength || (hU = new Uint32Array(GX.memory.buffer)), hU
    }
    let XX = null;

    function zX() {
      return null !== XX && 0 !== XX.byteLength || (XX = new Uint8Array(GX.memory.buffer)), XX
    }

    function cX(UU) {
      return yX[UU]
    }
    let yX = new Array(1024).fill(void 0);
    yX.push(void 0, null, !0, !1);
    let QX = yX.length;

    function AX(UU) {
      return void 0 === UU || null === UU
    }

    function FX(UU, XU) {
      const zU = XU(2 * UU.length, 2) >>> 0;
      return (null !== TU && 0 !== TU.byteLength || (TU = new Uint16Array(GX.memory.buffer)), TU).set(UU, zU / 2), BX = UU.length, zU
    }

    function oX(UU, XU) {
      const zU = XU(4 * UU.length, 4) >>> 0;
      return UX().set(UU, zU / 4), BX = UU.length, zU
    }

    function DX(UU, XU) {
      const zU = XU(1 * UU.length, 1) >>> 0;
      return zX().set(UU, zU / 1), BX = UU.length, zU
    }

    function EX(UU, XU) {
      const zU = XU(8 * UU.length, 8) >>> 0;
      return jU().set(UU, zU / 8), BX = UU.length, zU
    }

    function YX(UU, XU, zU) {
      if (void 0 === zU) {
        const zU = tX.encode(UU),
          cU = XU(zU.length, 1) >>> 0;
        return zX().subarray(cU, cU + zU.length).set(zU), BX = zU.length, cU
      }
      let cU = UU.length,
        yU = XU(cU, 1) >>> 0;
      const QU = zX();
      let AU = 0;
      for (; AU < cU; AU++) {
        const XU = UU.charCodeAt(AU);
        if (XU > 127) break;
        QU[yU + AU] = XU
      }
      if (AU !== cU) {
        0 !== AU && (UU = UU.slice(AU)), yU = zU(yU, cU, cU = AU + 3 * UU.length, 1) >>> 0;
        const XU = zX().subarray(yU + AU, yU + cU);
        AU += tX.encodeInto(UU, XU).written, yU = zU(yU, cU, AU, 1) >>> 0
      }
      return BX = AU, yU
    }

    function NX(UU) {
      const XU = cX(UU);
      return function(UU) {
        UU < 1028 || (yX[UU] = QX, QX = UU)
      }(UU), XU
    }
    let IX = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    IX.decode();
    const pX = 2146435072;
    let aX = 0;
    const tX = new TextEncoder;
    "encodeInto" in tX || (tX.encodeInto = function(UU, XU) {
      const zU = tX.encode(UU);
      return XU.set(zU), {
        read: UU.length,
        written: zU.length
      }
    });
    let gX, kX, GX, BX = 0;

    function ZX(UU, XU) {
      return kX = UU, GX = UU.exports, gX = XU, JU = null, KU = null, TU = null, hU = null, XX = null, GX.DAik(), GX
    }

    function RX(UU) {
      if (void 0 !== GX) return GX;
      void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
        module: UU
      } = UU) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const XU = SU();
      UU instanceof WebAssembly.Module || (UU = new WebAssembly.Module(UU));
      return ZX(new WebAssembly.Instance(UU, XU), UU)
    }
    async function PX(UU) {
      if (void 0 !== GX) return GX;
      void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
        module_or_path: UU
      } = UU) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const XU = SU();
      ("string" === typeof UU || "function" === typeof Request && UU instanceof Request || "function" === typeof URL && UU instanceof URL) && (UU = fetch(UU));
      const {
        instance: zU,
        module: cU
      } = await async function(UU, XU) {
        if ("function" === typeof Response && UU instanceof Response) {
          if (!UU.ok) throw new Error(`failed to fetch Wasm: ${UU.status} ${UU.statusText} fetching '${UU.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(UU, XU)
          } catch (zU) {
            if (! function(UU) {
                switch (UU) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(UU.type) || "application/wasm" === UU.headers.get("Content-Type")) throw zU;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", zU)
          }
          const cU = await UU.arrayBuffer();
          return await WebAssembly.instantiate(cU, XU)
        } {
          const zU = await WebAssembly.instantiate(UU, XU);
          return zU instanceof WebAssembly.Instance ? {
            instance: zU,
            module: UU
          } : zU
        }
      }(await UU, XU);
      return ZX(zU, cU)
    }
  },
  37005: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU,
      g: () => FU,
      k: () => oU
    });
    var cU = zU(37007),
      yU = zU(3169),
      QU = zU(37014);
    const AU = {
      name: yU.c,
      url: () => new zU.U(zU(37022)),
      init: cU.default,
      bindings: cU
    };

    function FU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AU,
        XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AU,
        zU = arguments.length > 2 ? arguments[2] : void 0;
      return (0, QU.n)(UU, XU, zU)
    }

    function oU(UU) {
      return (0, yU.K)((() => UU), cU, AU)
    }
  },
  36993: (UU, XU, zU) => {
    function cU(UU, XU) {
      return new Error(`${UU}: ${XU instanceof Error?`${XU.name}: ${XU.message}`:String(XU)}`, {
        cause: XU
      })
    }
    zU.d(XU, {
      d: () => cU
    })
  },
  36989: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      e: () => oU
    });
    var cU = zU(3176),
      yU = zU(7213),
      QU = zU(36993);

    function AU() {
      return new URL(new zU.U(zU(36997)).href, globalThis.location?.href).href
    }
    let FU = null;

    function oU() {
      return FU ??= (async () => (0, cU.M)(new URL(AU()), (0, yU.e)("bloxd_wasm_textures")))().catch((UU => {
        throw (0, QU.d)((0, cU.T)(UU), UU)
      })), FU
    }
  },
  36972: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU,
      d: () => QU,
      e: () => oU,
      i: () => AU,
      l: () => yU
    });
    const cU = /^alloc_failed (\d+) bytes$/;

    function yU(UU, XU) {
      return QU(UU, XU) ? `trap=alloc_failed ${XU} bytes` : `trap=${UU}`
    }

    function QU(UU, XU) {
      return "unreachable" === UU && XU > 0
    }

    function AU(UU, XU, zU) {
      const cU = function(UU) {
        return UU instanceof WebAssembly.RuntimeError ? /unreachable/i.test(UU.message) ? "unreachable" : /out of bounds/i.test(UU.message) ? "out_of_bounds" : "runtime_error" : (UU instanceof RangeError || UU instanceof Error && "InternalError" === UU.name) && /call stack|recursion/i.test(UU.message) ? "stack_overflow" : "js_error"
      }(UU);
      if ("unreachable" !== cU) return {
        kind: cU,
        panic: null,
        refusedBytes: 0
      };
      const yU = XU(),
        QU = zU();
      return {
        kind: cU,
        panic: QU > 0 ? null : yU,
        refusedBytes: QU
      }
    }
    const FU = 300;

    function oU(UU) {
      return UU.replace(/\s*\n\s*/g, " / ").slice(0, FU)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);