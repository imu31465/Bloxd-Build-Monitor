export const id = 219;
export const ids = [218, 219];
export const modules = {
  34980: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      CAPPED_COUNTS_VISIT_CAP: () => uR,
      reportCappedWasmFailure: () => iR,
      reportUncappedWasmFailure: () => qR,
      reportWasmCrash: () => tR,
      reportWasmFailure: () => ZR
    });
    var yR = GR(1972);

    function tR(RR) {
      (0, yR.reportClientError)("wasm_load", RR.message, RR.code)
    }
    const uR = yR.MAX_ERRORS_PER_VISIT - 4;

    function ZR(RR, JR, GR, tR) {
      (0, yR.reportClientError)(RR, JR, GR, !1, yR.MAX_ERRORS_PER_VISIT, {
        context: tR
      })
    }

    function qR(RR, JR, GR, tR) {
      (0, yR.reportClientError)(RR, JR, GR, !1, 1 / 0, {
        context: tR
      })
    }

    function iR(RR, JR, GR, tR) {
      (0, yR.reportClientError)(RR, JR, GR, !1, uR, {
        context: tR
      })
    }
  },
  37162: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => XR,
      f: () => lR,
      g: () => pR,
      j: () => MR
    });
    var yR = GR(37187),
      tR = GR(2448),
      uR = GR(37205),
      ZR = GR(2457),
      qR = GR(34980),
      iR = GR(4066),
      fR = GR(4498),
      VR = GR(4491),
      KR = GR(37169),
      wR = GR(1972),
      rR = GR(37178),
      eR = GR(37183),
      aR = GR(2445);
    let LR = !1;
    const nR = 40;
    var UR = GR(327),
      WR = GR(4928);
    const AR = "bloxdWasmFailureReported";

    function CR() {
      return "undefined" === typeof WebAssembly
    }

    function XR() {
      return (0, yR.f)()
    }

    function MR() {
      if (CR()) return "this browser has no WebAssembly";
      const RR = (0, tR.i)();
      return "compile" === RR || "instantiate" === RR ? `the core wasm didn't load here (${(0,tR.e)()})` : null
    }
    async function BR(RR) {
      return await (0, UR.k)(), await (0, uR.f)(uR.b, void 0, RR)
    }

    function lR() {
      CR() || (0, WR.e)((() => {
        BR()
      }))
    }

    function pR() {
      if (CR()) return async () => ((0, iR.i)("unsupported", 0), gR("unsupported", "This browser has no WebAssembly"), !1);
      const RR = {
        reloadFailedDownload: !0
      };
      return BR(RR), async () => {
        var JR;
        const GR = performance.now();
        await BR(RR);
        const yR = (performance.now() - GR) / 1e3;
        if ((0, tR.F)()) return (0, iR.i)("ready", yR), LR || (LR = !0, (0, tR.M)((() => {
          if ("call" !== (0, tR.i)()) return;
          const RR = (0, tR.h)(),
            JR = (0, KR.h)(RR, tR.x, tR.Z),
            GR = (0, tR.m)().buffer.byteLength,
            yR = (0, KR.c)(JR.kind, JR.refusedBytes),
            uR = yR ? "alloc_failed" : JR.kind,
            ZR = (0, rR.g)(GR),
            qR = yR ? `_r${Math.floor(Math.log2(JR.refusedBytes))}` : "",
            iR = (0, aR.e)();
          null === iR && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const fR = new Error((0, eR.e)(RR, GR, JR));
          if (RR instanceof Error && void 0 !== RR.stack) {
            const JR = RR.stack.split("\n"),
              GR = JR.length > nR ? [...JR.slice(0, nR / 2), ...JR.slice(-nR / 2)] : JR;
            fR.stack = GR.join("\n")
          }(0, wR.reportClientError)("wasm_load", fR, `wasm_call_${uR}_${null!==iR&&void 0!==iR?iR:"unnamed"}_m${ZR}${qR}`)
        }))), (0, ZR.H)(uR.b.url()) && (0, qR.reportCappedWasmFailure)("wasm_load", fR.d.message, fR.d.code), !0;
        const UR = VR.d[null !== (JR = (0, tR.i)()) && void 0 !== JR ? JR : "call"];
        return (0, iR.i)(UR, yR), gR(UR, (0, tR.e)()), !1
      }
    }

    function gR(RR, JR) {
      (0, VR.j)(AR, `Bloxd wasm ${RR}, so the game can't start: ${JR}`, JR, RR)
    }
  },
  37219: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/bloxd_wasm_bg.039608235c8f47710330.wasm"
  },
  37199: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/bloxd_wasm_textures_bg.ceca9f4af5d2b6e59dc7.wasm"
  },
  37208: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      SR: () => yR,
      EnvelopeKind: () => tR,
      TR: () => uR,
      PhysicsEngine: () => ZR,
      BG: () => qR,
      EG: () => iR,
      sy: () => fR,
      qt: () => VR,
      Nu: () => KR,
      pq: () => wR,
      xf: () => rR,
      UV: () => eR,
      DK: () => aR,
      HK: () => LR,
      default: () => MJ,
      initSync: () => XJ,
      oK: () => nR,
      cK: () => UR,
      PK: () => WR,
      IK: () => AR,
      mK: () => CR,
      zK: () => XR,
      SK: () => MR,
      jK: () => BR,
      dK: () => lR,
      EK: () => pR,
      YK: () => gR,
      kK: () => bR,
      QK: () => vR,
      FK: () => OR,
      TK: () => xR
    });
    class yR {
      __destroy_into_raw() {
        const RR = this.__wbg_ptr;
        return this.__wbg_ptr = 0, DR.unregister(this), RR
      }
      free() {
        const RR = this.__destroy_into_raw();
        WJ.FaJF(RR, 0)
      }
      sK() {
        const RR = WJ.lizN(this.__wbg_ptr);
        if (RR[2]) throw wJ(RR[1]);
        return RR[0] >>> 0
      }
      hK() {
        return WJ.OR16(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const RR = WJ.rpbX();
        return this.__wbg_ptr = RR, DR.register(this, this.__wbg_ptr, this), this
      }
      Rw() {
        return WJ.riGb(this.__wbg_ptr) >>> 0
      }
      Jw(RR) {
        const JR = WJ.QKhi(this.__wbg_ptr, RR);
        if (JR[2]) throw wJ(JR[1]);
        return JR[0] >>> 0
      }
      Gw(RR) {
        const JR = WJ.g7xV(this.__wbg_ptr, RR);
        if (JR[2]) throw wJ(JR[1]);
        return JR[0] >>> 0
      }
    }
    Symbol.dispose && (yR.prototype[Symbol.dispose] = yR.prototype.free);
    const tR = Object.freeze({
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
    class uR {
      __destroy_into_raw() {
        const RR = this.__wbg_ptr;
        return this.__wbg_ptr = 0, HR.unregister(this), RR
      }
      free() {
        const RR = this.__destroy_into_raw();
        WJ.JJt1(RR, 0)
      }
      uw(RR, JR) {
        const GR = WJ.l7Pw(this.__wbg_ptr, RR, JR);
        if (GR[2]) throw wJ(GR[1]);
        return GR[0] >>> 0
      }
      Zw(RR) {
        const JR = WJ.SbDk(this.__wbg_ptr, RR);
        if (JR[2]) throw wJ(JR[1]);
        return JR[0] >>> 0
      }
      qw() {
        WJ.QVSe(this.__wbg_ptr)
      }
      static iw() {
        return WJ.lVg8() >>> 0
      }
      fw() {
        return WJ.LulB(this.__wbg_ptr) >>> 0
      }
      Vw() {
        const RR = WJ.OFSj(this.__wbg_ptr);
        return 0 === RR[0] ? void 0 : RR[1]
      }
      Kw() {
        return WJ.Tn2I(this.__wbg_ptr) >>> 0
      }
      ww() {
        return WJ.bOcY(this.__wbg_ptr) >>> 0
      }
      static tw() {
        return WJ.E5Gl() >>> 0
      }
      constructor() {
        const RR = WJ.MxMI();
        return this.__wbg_ptr = RR, HR.register(this, this.__wbg_ptr, this), this
      }
      rw() {
        return WJ.jBWG(this.__wbg_ptr) >>> 0
      }
      ew() {
        return WJ.QFHr(this.__wbg_ptr) >>> 0
      }
      aw() {
        return WJ.UxLr(this.__wbg_ptr) >>> 0
      }
      yw(RR) {
        return WJ.YapY(this.__wbg_ptr, RR) >>> 0
      }
      reserve(RR, JR) {
        const GR = WJ.uBmu(this.__wbg_ptr, RR, JR);
        if (GR[1]) throw wJ(GR[0])
      }
      Uw(RR, JR) {
        const GR = iJ(RR, WJ.OLc9),
          yR = AJ;
        WJ.iSy6(this.__wbg_ptr, GR, yR, JR)
      }
      text() {
        let RR, JR;
        try {
          const GR = WJ.E56J(this.__wbg_ptr);
          return RR = GR[0], JR = GR[1], TR(GR[0], GR[1])
        } finally {
          WJ.jJvb(RR, JR, 1)
        }
      }
    }
    Symbol.dispose && (uR.prototype[Symbol.dispose] = uR.prototype.free);
    class ZR {
      __destroy_into_raw() {
        const RR = this.__wbg_ptr;
        return this.__wbg_ptr = 0, oR.unregister(this), RR
      }
      free() {
        const RR = this.__destroy_into_raw();
        WJ.boWK(RR, 0)
      }
      Aw(RR, JR) {
        jR(JR, yR);
        const GR = WJ.OA5O(this.__wbg_ptr, RR, JR.__wbg_ptr);
        if (GR[2]) throw wJ(GR[1]);
        return GR[0] >>> 0
      }
      Cw() {
        const RR = WJ.BI46(this.__wbg_ptr);
        if (RR[1]) throw wJ(RR[0])
      }
      lw(RR, JR, GR, yR, tR, uR, ZR, iR, fR, VR, KR) {
        jR(RR, qR);
        const wR = WJ.URwu(this.__wbg_ptr, RR.__wbg_ptr, JR, GR, yR, tR, uR, ZR, iR, fR, VR, KR);
        if (wR[2]) throw wJ(wR[1]);
        return wR[0]
      }
      pw() {
        const RR = WJ.HxUM(this.__wbg_ptr);
        var JR = dR(RR[0], RR[1]).slice();
        return WJ.jJvb(RR[0], 8 * RR[1], 8), JR
      }
      gw() {
        return WJ.y0fX(this.__wbg_ptr) >>> 0
      }
      bw() {
        return WJ.WNjx(this.__wbg_ptr) >>> 0
      }
      Ow() {
        return WJ.FzhU(this.__wbg_ptr) >>> 0
      }
      constructor(RR, JR, GR, yR, tR, uR, ZR, qR) {
        const iR = WJ.LbIx(RR, JR, GR, yR, tR, uR, ZR, qR);
        if (iR[2]) throw wJ(iR[1]);
        return this.__wbg_ptr = iR[0], oR.register(this, this.__wbg_ptr, this), this
      }
      Dw(RR) {
        jR(RR, yR);
        const JR = WJ.jZOE(this.__wbg_ptr, RR.__wbg_ptr);
        if (JR[2]) throw wJ(JR[1]);
        return JR[0] >>> 0
      }
      Hw(RR) {
        const JR = WJ.WxPx(this.__wbg_ptr, RR);
        if (JR[1]) throw wJ(JR[0])
      }
      ow() {
        return WJ.y8Ot(this.__wbg_ptr) >>> 0
      }
      resume(RR, JR) {
        jR(RR, qR), jR(JR, yR);
        const GR = WJ.hbgu(this.__wbg_ptr, RR.__wbg_ptr, JR.__wbg_ptr);
        if (GR[2]) throw wJ(GR[1]);
        return GR[0] >>> 0
      }
      Sw(RR) {
        const JR = WJ.AvdW(this.__wbg_ptr, RR);
        if (JR[1]) throw wJ(JR[0])
      }
      Ew(RR, JR) {
        jR(JR, yR);
        const GR = WJ.hG5c(this.__wbg_ptr, RR, JR.__wbg_ptr);
        if (GR[1]) throw wJ(GR[0])
      }
      Qw(RR) {
        const JR = VJ(RR, WJ.OLc9),
          GR = AJ,
          yR = WJ.uBoc(this.__wbg_ptr, JR, GR);
        if (yR[1]) throw wJ(yR[0])
      }
      Mw(RR, JR, GR, yR, tR, uR) {
        const ZR = WJ.F1Y9(this.__wbg_ptr, RR, JR, GR, yR, tR, uR);
        if (ZR[1]) throw wJ(ZR[0])
      }
      Bw(RR, JR, GR, yR) {
        const tR = iJ(RR, WJ.OLc9),
          uR = AJ,
          ZR = VJ(JR, WJ.OLc9),
          qR = AJ,
          iR = VJ(GR, WJ.OLc9),
          fR = AJ,
          VR = VJ(yR, WJ.OLc9),
          KR = AJ,
          wR = WJ.APAc(this.__wbg_ptr, tR, uR, ZR, qR, iR, fR, VR, KR);
        if (wR[1]) throw wJ(wR[0])
      }
      Tw(RR, JR) {
        jR(JR, yR);
        const GR = WJ.AONj(this.__wbg_ptr, RR, JR.__wbg_ptr);
        if (GR[1]) throw wJ(GR[0])
      }
      Nw(RR, JR, GR) {
        const yR = WJ.Ml1r(this.__wbg_ptr, RR, JR, GR);
        if (yR[1]) throw wJ(yR[0])
      }
      hw(RR, JR, GR, yR, tR, uR, ZR, iR, fR, VR) {
        jR(RR, qR);
        return WJ.b16D(this.__wbg_ptr, RR.__wbg_ptr, JR, GR, yR, tR, uR, ZR, iR, fR, VR)
      }
    }
    Symbol.dispose && (ZR.prototype[Symbol.dispose] = ZR.prototype.free);
    class qR {
      static __wrap(RR) {
        const JR = Object.create(qR.prototype);
        return JR.__wbg_ptr = RR, cR.register(JR, JR.__wbg_ptr, JR), JR
      }
      __destroy_into_raw() {
        const RR = this.__wbg_ptr;
        return this.__wbg_ptr = 0, cR.unregister(this), RR
      }
      free() {
        const RR = this.__destroy_into_raw();
        WJ.icJg(RR, 0)
      }
      Jr(RR) {
        const JR = WJ.mt8F(this.__wbg_ptr, RR);
        if (JR[2]) throw wJ(JR[1]);
        return JR[0] >>> 0
      }
      Gr(RR, JR, GR) {
        return WJ.dk0I(this.__wbg_ptr, RR, JR, GR)
      }
      yr(RR, JR, GR) {
        return WJ.Ivoz(this.__wbg_ptr, RR, JR, GR) >>> 0
      }
      tr(RR, JR, GR, yR) {
        return 0 !== WJ.QJKx(this.__wbg_ptr, RR, JR, GR, yR)
      }
      ur() {
        WJ.tt8D(this.__wbg_ptr)
      }
      Zr(RR) {
        const JR = WJ.WXwY(this.__wbg_ptr, RR);
        if (JR[3]) throw wJ(JR[2]);
        var GR = YR(JR[0], JR[1]).slice();
        return WJ.jJvb(JR[0], 1 * JR[1], 1), GR
      }
      evict(RR, JR) {
        return WJ.MGCY(this.__wbg_ptr, RR, JR) >>> 0
      }
      qr() {
        WJ.VcX4(this.__wbg_ptr)
      }
      ir(RR, JR, GR) {
        WJ.fQBs(this.__wbg_ptr, RR, JR, GR)
      }
      Vr(RR) {
        const JR = WJ.TmUv(this.__wbg_ptr, RR);
        if (JR[1]) throw wJ(JR[0])
      }
      Kr() {
        return WJ.p7Cz(this.__wbg_ptr) >>> 0
      }
      wr() {
        return WJ.b4EA(this.__wbg_ptr) >>> 0
      }
      rr(RR, JR, GR) {
        WJ.U63x(this.__wbg_ptr, RR, JR, GR)
      }
      er(RR, JR, GR) {
        WJ.aaOS(this.__wbg_ptr, RR, JR, GR)
      }
      ar() {
        return WJ.aKZ4(this.__wbg_ptr) >>> 0
      }
      Lr() {
        return WJ.v9oO(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const RR = WJ.DKvX();
        return this.__wbg_ptr = RR, cR.register(this, this.__wbg_ptr, this), this
      }
      static nr() {
        const RR = WJ.Ure0();
        return qR.__wrap(RR)
      }
      Ur() {
        return WJ.LEaL(this.__wbg_ptr) >>> 0
      }
      Wr() {
        return WJ.GNho(this.__wbg_ptr) >>> 0
      }
      Ar(RR, JR, GR, yR) {
        const tR = WJ.VhXf(this.__wbg_ptr, RR, JR, GR, yR);
        if (tR[1]) throw wJ(tR[0])
      }
      Cr() {
        return WJ.quWX(this.__wbg_ptr) >>> 0
      }
      Xr() {
        return WJ.Z3xQ(this.__wbg_ptr) >>> 0
      }
      Mr(RR, JR, GR, yR) {
        WJ.JGe5(this.__wbg_ptr, RR, JR, GR, yR)
      }
      Br(RR) {
        WJ.F2lN(this.__wbg_ptr, RR)
      }
      br(RR, JR, GR, yR, tR) {
        const uR = fJ(JR, WJ.OLc9),
          ZR = AJ,
          qR = iJ(GR, WJ.OLc9),
          iR = AJ,
          fR = VJ(yR, WJ.OLc9),
          VR = AJ,
          KR = WJ.HGKK(this.__wbg_ptr, RR, uR, ZR, qR, iR, fR, VR, tR);
        if (KR[1]) throw wJ(KR[0])
      }
      lr(RR, JR, GR, yR) {
        const tR = fJ(RR, WJ.OLc9),
          uR = AJ,
          ZR = iJ(JR, WJ.OLc9),
          qR = AJ,
          iR = VJ(GR, WJ.OLc9),
          fR = AJ,
          VR = fJ(yR, WJ.OLc9),
          KR = AJ,
          wR = WJ.fHxS(this.__wbg_ptr, tR, uR, ZR, qR, iR, fR, VR, KR);
        if (wR[1]) throw wJ(wR[0])
      }
      Hr(RR) {
        const JR = fJ(RR, WJ.OLc9),
          GR = AJ,
          yR = WJ.tBm7(this.__wbg_ptr, JR, GR);
        if (yR[1]) throw wJ(yR[0])
      }
      Pr() {
        return WJ.k71z(this.__wbg_ptr) >>> 0
      }
      Ir(RR) {
        const JR = WJ.N524(this.__wbg_ptr, RR);
        if (JR[2]) throw wJ(JR[1]);
        return JR[0] >>> 0
      }
      steer() {
        return WJ.esTF(this.__wbg_ptr) >>> 0
      }
      mr() {
        const RR = WJ.V3iF(this.__wbg_ptr);
        var JR = dR(RR[0], RR[1]).slice();
        return WJ.jJvb(RR[0], 8 * RR[1], 8), JR
      }
      zr() {
        return WJ.UR6t(this.__wbg_ptr) >>> 0
      }
      Iw() {
        const RR = WJ.uW1d(this.__wbg_ptr);
        var JR, GR, yR = (JR = RR[0], GR = RR[1], JR >>>= 0, (null !== FR && 0 !== FR.byteLength || (FR = new Int32Array(WJ.memory.buffer)), FR).subarray(JR / 4, JR / 4 + GR)).slice();
        return WJ.jJvb(RR[0], 4 * RR[1], 4), yR
      }
    }
    Symbol.dispose && (qR.prototype[Symbol.dispose] = qR.prototype.free);
    class iR {
      __destroy_into_raw() {
        const RR = this.__wbg_ptr;
        return this.__wbg_ptr = 0, PR.unregister(this), RR
      }
      free() {
        const RR = this.__destroy_into_raw();
        WJ.rIoC(RR, 0)
      }
      UK(RR) {
        const JR = iJ(RR, WJ.OLc9),
          GR = AJ,
          yR = WJ.v4wE(this.__wbg_ptr, JR, GR);
        if (yR[1]) throw wJ(yR[0])
      }
      Sr() {
        return WJ.Tiyf(this.__wbg_ptr) >>> 0
      }
      jr() {
        return WJ.YlyL(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const RR = WJ.OhED();
        return this.__wbg_ptr = RR, PR.register(this, this.__wbg_ptr, this), this
      }
      run(RR, JR) {
        jR(RR, qR);
        const GR = WJ.Oig3(this.__wbg_ptr, RR.__wbg_ptr, JR);
        if (GR[2]) throw wJ(GR[1]);
        return GR[0] >>> 0
      }
      dr(RR) {
        const JR = iJ(RR, WJ.OLc9),
          GR = AJ;
        WJ.hQKz(this.__wbg_ptr, JR, GR)
      }
      Er(RR) {
        const JR = iJ(RR, WJ.OLc9),
          GR = AJ;
        WJ.u2TA(this.__wbg_ptr, JR, GR)
      }
    }
    Symbol.dispose && (iR.prototype[Symbol.dispose] = iR.prototype.free);
    class fR {
      __destroy_into_raw() {
        const RR = this.__wbg_ptr;
        return this.__wbg_ptr = 0, IR.unregister(this), RR
      }
      free() {
        const RR = this.__destroy_into_raw();
        WJ.LKRU(RR, 0)
      }
      kr(RR, JR) {
        const GR = fJ(RR, WJ.OLc9),
          yR = AJ;
        return WJ.spq3(this.__wbg_ptr, GR, yR, JR) >>> 0
      }
      Qr(RR, JR, GR) {
        jR(RR, qR);
        const yR = fJ(GR, WJ.OLc9),
          tR = AJ,
          uR = WJ.jngk(this.__wbg_ptr, RR.__wbg_ptr, JR, yR, tR);
        if (uR[2]) throw wJ(uR[1]);
        return uR[0] >>> 0
      }
      Yr(RR) {
        return WJ.yV8R(this.__wbg_ptr, RR) >>> 0
      }
      constructor() {
        const RR = WJ.edZI();
        return this.__wbg_ptr = RR, IR.register(this, this.__wbg_ptr, this), this
      }
      scan(RR, JR) {
        jR(RR, qR);
        const GR = WJ.m2vK(this.__wbg_ptr, RR.__wbg_ptr, JR);
        if (GR[2]) throw wJ(GR[1]);
        return GR[0] >>> 0
      }
      sr(RR) {
        const JR = fJ(RR, WJ.OLc9),
          GR = AJ;
        WJ.WsqU(this.__wbg_ptr, JR, GR)
      }
      Tr() {
        return WJ.LCIr(this.__wbg_ptr) >>> 0
      }
      Fr() {
        return WJ.Ja4r(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (fR.prototype[Symbol.dispose] = fR.prototype.free);
    class VR {
      __destroy_into_raw() {
        const RR = this.__wbg_ptr;
        return this.__wbg_ptr = 0, mR.unregister(this), RR
      }
      free() {
        const RR = this.__destroy_into_raw();
        WJ.lZhS(RR, 0)
      }
      Je(RR) {
        const JR = WJ.R4UO(this.__wbg_ptr, RR);
        if (JR[2]) throw wJ(JR[1]);
        return JR[0] >>> 0
      }
      compute(RR, JR, GR, yR) {
        var tR = ZJ(yR) ? 0 : KJ(yR, WJ.OLc9, WJ.l8g9),
          uR = AJ;
        const ZR = WJ.xgvz(this.__wbg_ptr, RR, ZJ(JR) ? Number.MAX_SAFE_INTEGER : JR | 0, GR, tR, uR);
        if (ZR[2]) throw wJ(ZR[1]);
        return ZR[0] >>> 0
      }
      ye(RR) {
        const JR = KJ(RR, WJ.OLc9, WJ.l8g9),
          GR = AJ;
        WJ.VSzr(this.__wbg_ptr, JR, GR)
      }
      te() {
        return WJ.ZEeo(this.__wbg_ptr)
      }
      ue(RR) {
        return WJ.Hxp7(this.__wbg_ptr, RR) >>> 0
      }
      Ze() {
        return WJ.tFBB(this.__wbg_ptr) >>> 0
      }
      qe() {
        return WJ.eZyM(this.__wbg_ptr) >>> 0
      }
      ie(RR, JR) {
        const GR = WJ.oPOO(this.__wbg_ptr, RR, JR);
        if (GR[1]) throw wJ(GR[0])
      }
      fe() {
        return WJ.A5lR(this.__wbg_ptr) >>> 0
      }
      Ve() {
        return WJ.Nz1j(this.__wbg_ptr) >>> 0
      }
      Ke() {
        return WJ.bRa7(this.__wbg_ptr) >>> 0
      }
      Ge(RR, JR, GR) {
        const yR = iJ(RR, WJ.OLc9),
          tR = AJ,
          uR = iJ(JR, WJ.OLc9),
          ZR = AJ,
          qR = WJ.g3Dd(this.__wbg_ptr, yR, tR, uR, ZR, GR);
        if (qR[1]) throw wJ(qR[0])
      }
      ae() {
        return WJ.tpnk(this.__wbg_ptr) >>> 0
      }
      mesh(RR, JR, GR, yR, tR) {
        const uR = WJ.iXxM(this.__wbg_ptr, RR, JR, GR, yR, tR);
        if (uR[2]) throw wJ(uR[1]);
        return uR[0] >>> 0
      }
      constructor(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR, wR, rR, eR, aR, LR, nR, UR, WR, AR) {
        const CR = qJ(RR, WJ.OLc9),
          XR = AJ,
          MR = VJ(JR, WJ.OLc9),
          BR = AJ,
          lR = iJ(GR, WJ.OLc9),
          pR = AJ,
          gR = fJ(yR, WJ.OLc9),
          bR = AJ,
          vR = fJ(tR, WJ.OLc9),
          OR = AJ,
          xR = iJ(uR, WJ.OLc9),
          NR = AJ,
          DR = iJ(ZR, WJ.OLc9),
          HR = AJ,
          oR = VJ(qR, WJ.OLc9),
          cR = AJ,
          PR = VJ(iR, WJ.OLc9),
          IR = AJ,
          zR = fJ(fR, WJ.OLc9),
          SR = AJ;
        var jR = ZJ(VR) ? 0 : qJ(VR, WJ.OLc9),
          dR = AJ;
        const ER = iJ(KR, WJ.OLc9),
          YR = AJ,
          kR = fJ(wR, WJ.OLc9),
          QR = AJ;
        var FR = ZJ(rR) ? 0 : fJ(rR, WJ.OLc9),
          TR = AJ,
          sR = ZJ(eR) ? 0 : fJ(eR, WJ.OLc9),
          hR = AJ;
        const RJ = VJ(aR, WJ.OLc9),
          JJ = AJ,
          GJ = WJ.DhA3(CR, XR, MR, BR, lR, pR, gR, bR, vR, OR, xR, NR, DR, HR, oR, cR, PR, IR, zR, SR, jR, dR, ER, YR, kR, QR, FR, TR, sR, hR, RJ, JJ, LR, nR, UR, WR, AR);
        if (GJ[2]) throw wJ(GJ[1]);
        return this.__wbg_ptr = GJ[0], mR.register(this, this.__wbg_ptr, this), this
      }
      ee(RR, JR) {
        const GR = iJ(RR, WJ.OLc9),
          yR = AJ,
          tR = WJ.Ezso(this.__wbg_ptr, GR, yR, JR);
        if (tR[3]) throw wJ(tR[2]);
        var uR = YR(tR[0], tR[1]).slice();
        return WJ.jJvb(tR[0], 1 * tR[1], 1), uR
      }
      Le(RR) {
        WJ.qNqd(this.__wbg_ptr, ZJ(RR) ? 16777215 : RR)
      }
      ne(RR) {
        return WJ.CeSp(this.__wbg_ptr, RR) >>> 0
      }
      Ae() {
        return WJ.nFiF(this.__wbg_ptr) >>> 0
      }
      Ue() {
        const RR = WJ.j3VZ(this.__wbg_ptr);
        if (RR[2]) throw wJ(RR[1]);
        return 0 !== RR[0]
      }
      Ce() {
        return WJ.TDBE(this.__wbg_ptr) >>> 0
      }
      Xe() {
        return WJ.csIY(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (VR.prototype[Symbol.dispose] = VR.prototype.free);
    class KR {
      __destroy_into_raw() {
        const RR = this.__wbg_ptr;
        return this.__wbg_ptr = 0, zR.unregister(this), RR
      }
      free() {
        const RR = this.__destroy_into_raw();
        WJ.LuBB(RR, 0)
      }
      compute(RR, JR, GR, yR) {
        var tR = ZJ(yR) ? 0 : KJ(yR, WJ.OLc9, WJ.l8g9),
          uR = AJ;
        const ZR = WJ.JSpZ(this.__wbg_ptr, RR, ZJ(JR) ? Number.MAX_SAFE_INTEGER : JR | 0, GR, tR, uR);
        if (ZR[2]) throw wJ(ZR[1]);
        return ZR[0] >>> 0
      }
      ye(RR) {
        const JR = KJ(RR, WJ.OLc9, WJ.l8g9),
          GR = AJ;
        WJ.GINb(this.__wbg_ptr, JR, GR)
      }
      Ve() {
        return WJ.lhi0(this.__wbg_ptr) >>> 0
      }
      Ke() {
        return WJ.PgnD(this.__wbg_ptr) >>> 0
      }
      Me(RR) {
        const JR = WJ.W8Zw(this.__wbg_ptr, RR);
        if (JR[2]) throw wJ(JR[1]);
        return JR[0] >>> 0
      }
      constructor(RR, JR, GR, yR, tR, uR) {
        const ZR = qJ(RR, WJ.OLc9),
          qR = AJ,
          iR = VJ(JR, WJ.OLc9),
          fR = AJ,
          VR = iJ(GR, WJ.OLc9),
          KR = AJ,
          wR = fJ(yR, WJ.OLc9),
          rR = AJ,
          eR = WJ.lKG9(ZR, qR, iR, fR, VR, KR, wR, rR, tR, uR);
        if (eR[2]) throw wJ(eR[1]);
        return this.__wbg_ptr = eR[0], zR.register(this, this.__wbg_ptr, this), this
      }
      Ae() {
        return WJ.Y2Ap(this.__wbg_ptr) >>> 0
      }
      Ue() {
        const RR = WJ.zOHU(this.__wbg_ptr);
        if (RR[2]) throw wJ(RR[1]);
        return 0 !== RR[0]
      }
      Ce() {
        return WJ.Q41m(this.__wbg_ptr) >>> 0
      }
    }

    function wR() {
      const RR = WJ.akBN();
      var JR = ER(RR[0], RR[1]).slice();
      return WJ.jJvb(RR[0], 4 * RR[1], 4), JR
    }

    function rR(RR, JR) {
      let GR, yR;
      try {
        const tR = qJ(RR, WJ.OLc9),
          uR = AJ,
          ZR = KJ(JR, WJ.OLc9, WJ.l8g9),
          qR = AJ,
          iR = WJ.oWkK(tR, uR, ZR, qR);
        return GR = iR[0], yR = iR[1], TR(iR[0], iR[1])
      } finally {
        WJ.jJvb(GR, yR, 1)
      }
    }

    function eR() {
      const RR = WJ.QiZX();
      var JR = ER(RR[0], RR[1]).slice();
      return WJ.jJvb(RR[0], 4 * RR[1], 4), JR
    }

    function aR(RR) {
      return 0 !== WJ.UZxx(RR)
    }

    function LR(RR, JR) {
      const GR = KJ(RR, WJ.OLc9, WJ.l8g9),
        yR = AJ,
        tR = WJ.mO87(GR, yR, JR);
      if (tR[1]) throw wJ(tR[0])
    }

    function nR() {
      WJ.mhIu()
    }

    function UR() {
      return WJ.SzCt() >>> 0
    }

    function WR(RR) {
      return 0 !== WJ.YMYX(RR)
    }

    function AR(RR) {
      return 0 !== WJ.fdHI(RR)
    }

    function CR(RR) {
      WJ.K53Q(RR)
    }

    function XR() {
      return WJ.FoxG() >>> 0
    }

    function MR() {
      return WJ.EfOj() >>> 0
    }

    function BR() {
      return 0 !== WJ.CNOj()
    }

    function lR() {
      const RR = WJ.puKY();
      var JR = ER(RR[0], RR[1]).slice();
      return WJ.jJvb(RR[0], 4 * RR[1], 4), JR
    }

    function pR() {
      const RR = WJ.UVkr();
      var JR = ER(RR[0], RR[1]).slice();
      return WJ.jJvb(RR[0], 4 * RR[1], 4), JR
    }

    function gR() {
      const RR = WJ.GQNL();
      var JR = ER(RR[0], RR[1]).slice();
      return WJ.jJvb(RR[0], 4 * RR[1], 4), JR
    }

    function bR() {
      return WJ.LIo0() >>> 0
    }

    function vR() {
      WJ.CqFC()
    }

    function OR() {
      let RR, JR;
      try {
        const GR = WJ.VZ6d();
        return RR = GR[0], JR = GR[1], TR(GR[0], GR[1])
      } finally {
        WJ.jJvb(RR, JR, 1)
      }
    }

    function xR(RR) {
      WJ.nIa7(SR(RR))
    }

    function NR() {
      return {
        __proto__: null,
        tG6Z: {
          __proto__: null,
          qG9I: function(RR, JR) {
            return SR(Error(TR(RR, JR)))
          },
          V34K: function(RR, JR) {
            throw new Error(TR(RR, JR))
          },
          R0bE: function(RR) {
            yJ(RR).call()
          },
          eU84: function(RR, JR) {
            console.error(TR(RR, JR))
          },
          tBZO: function() {
            return performance.now()
          },
          wjtm: function(RR) {
            wJ(RR)
          }
        }
      }
    }
    Symbol.dispose && (KR.prototype[Symbol.dispose] = KR.prototype.free);
    const DR = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((RR => WJ.FaJF(RR, 1))),
      HR = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((RR => WJ.JJt1(RR, 1))),
      oR = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((RR => WJ.boWK(RR, 1))),
      cR = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((RR => WJ.icJg(RR, 1))),
      PR = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((RR => WJ.rIoC(RR, 1))),
      IR = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((RR => WJ.LKRU(RR, 1))),
      mR = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((RR => WJ.lZhS(RR, 1))),
      zR = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((RR => WJ.LuBB(RR, 1)));

    function SR(RR) {
      uJ === tJ.length && tJ.push(tJ.length + 1);
      const JR = uJ;
      return uJ = tJ[JR], tJ[JR] = RR, JR
    }

    function jR(RR, JR) {
      if (!(RR instanceof JR)) throw new Error(`expected instance of ${JR.name}`)
    }

    function dR(RR, JR) {
      return RR >>>= 0, QR().subarray(RR / 8, RR / 8 + JR)
    }

    function ER(RR, JR) {
      return RR >>>= 0, RJ().subarray(RR / 4, RR / 4 + JR)
    }

    function YR(RR, JR) {
      return RR >>>= 0, GJ().subarray(RR / 1, RR / 1 + JR)
    }
    let kR = null;

    function QR() {
      return null !== kR && 0 !== kR.byteLength || (kR = new Float64Array(WJ.memory.buffer)), kR
    }
    let FR = null;

    function TR(RR, JR) {
      return function(RR, JR) {
        aJ += JR, aJ >= eJ && (rJ = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), rJ.decode(), aJ = JR);
        return rJ.decode(GJ().subarray(RR, RR + JR))
      }(RR >>> 0, JR)
    }
    let sR = null;
    let hR = null;

    function RJ() {
      return null !== hR && 0 !== hR.byteLength || (hR = new Uint32Array(WJ.memory.buffer)), hR
    }
    let JJ = null;

    function GJ() {
      return null !== JJ && 0 !== JJ.byteLength || (JJ = new Uint8Array(WJ.memory.buffer)), JJ
    }

    function yJ(RR) {
      return tJ[RR]
    }
    let tJ = new Array(1024).fill(void 0);
    tJ.push(void 0, null, !0, !1);
    let uJ = tJ.length;

    function ZJ(RR) {
      return void 0 === RR || null === RR
    }

    function qJ(RR, JR) {
      const GR = JR(2 * RR.length, 2) >>> 0;
      return (null !== sR && 0 !== sR.byteLength || (sR = new Uint16Array(WJ.memory.buffer)), sR).set(RR, GR / 2), AJ = RR.length, GR
    }

    function iJ(RR, JR) {
      const GR = JR(4 * RR.length, 4) >>> 0;
      return RJ().set(RR, GR / 4), AJ = RR.length, GR
    }

    function fJ(RR, JR) {
      const GR = JR(1 * RR.length, 1) >>> 0;
      return GJ().set(RR, GR / 1), AJ = RR.length, GR
    }

    function VJ(RR, JR) {
      const GR = JR(8 * RR.length, 8) >>> 0;
      return QR().set(RR, GR / 8), AJ = RR.length, GR
    }

    function KJ(RR, JR, GR) {
      if (void 0 === GR) {
        const GR = LJ.encode(RR),
          yR = JR(GR.length, 1) >>> 0;
        return GJ().subarray(yR, yR + GR.length).set(GR), AJ = GR.length, yR
      }
      let yR = RR.length,
        tR = JR(yR, 1) >>> 0;
      const uR = GJ();
      let ZR = 0;
      for (; ZR < yR; ZR++) {
        const JR = RR.charCodeAt(ZR);
        if (JR > 127) break;
        uR[tR + ZR] = JR
      }
      if (ZR !== yR) {
        0 !== ZR && (RR = RR.slice(ZR)), tR = GR(tR, yR, yR = ZR + 3 * RR.length, 1) >>> 0;
        const JR = GJ().subarray(tR + ZR, tR + yR);
        ZR += LJ.encodeInto(RR, JR).written, tR = GR(tR, yR, ZR, 1) >>> 0
      }
      return AJ = ZR, tR
    }

    function wJ(RR) {
      const JR = yJ(RR);
      return function(RR) {
        RR < 1028 || (tJ[RR] = uJ, uJ = RR)
      }(RR), JR
    }
    let rJ = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    rJ.decode();
    const eJ = 2146435072;
    let aJ = 0;
    const LJ = new TextEncoder;
    "encodeInto" in LJ || (LJ.encodeInto = function(RR, JR) {
      const GR = LJ.encode(RR);
      return JR.set(GR), {
        read: RR.length,
        written: GR.length
      }
    });
    let nJ, UJ, WJ, AJ = 0;

    function CJ(RR, JR) {
      return UJ = RR, WJ = RR.exports, nJ = JR, kR = null, FR = null, sR = null, hR = null, JJ = null, WJ.o4zk(), WJ
    }

    function XJ(RR) {
      if (void 0 !== WJ) return WJ;
      void 0 !== RR && (Object.getPrototypeOf(RR) === Object.prototype ? ({
        module: RR
      } = RR) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const JR = NR();
      RR instanceof WebAssembly.Module || (RR = new WebAssembly.Module(RR));
      return CJ(new WebAssembly.Instance(RR, JR), RR)
    }
    async function MJ(RR) {
      if (void 0 !== WJ) return WJ;
      void 0 !== RR && (Object.getPrototypeOf(RR) === Object.prototype ? ({
        module_or_path: RR
      } = RR) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const JR = NR();
      ("string" === typeof RR || "function" === typeof Request && RR instanceof Request || "function" === typeof URL && RR instanceof URL) && (RR = fetch(RR));
      const {
        instance: GR,
        module: yR
      } = await async function(RR, JR) {
        if ("function" === typeof Response && RR instanceof Response) {
          if (!RR.ok) throw new Error(`failed to fetch Wasm: ${RR.status} ${RR.statusText} fetching '${RR.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(RR, JR)
          } catch (GR) {
            if (! function(RR) {
                switch (RR) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(RR.type) || "application/wasm" === RR.headers.get("Content-Type")) throw GR;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", GR)
          }
          const yR = await RR.arrayBuffer();
          return await WebAssembly.instantiate(yR, JR)
        } {
          const GR = await WebAssembly.instantiate(RR, JR);
          return GR instanceof WebAssembly.Instance ? {
            instance: GR,
            module: RR
          } : GR
        }
      }(await RR, JR);
      return CJ(GR, yR)
    }
  },
  37205: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR,
      f: () => qR,
      g: () => iR
    });
    var yR = GR(37208),
      tR = GR(2448),
      uR = GR(37213);
    const ZR = {
      name: tR.c,
      url: () => new GR.U(GR(37219)),
      init: yR.default,
      bindings: yR
    };

    function qR() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZR,
        JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZR,
        GR = arguments.length > 2 ? arguments[2] : void 0;
      return (0, uR.r)(RR, JR, GR)
    }

    function iR(RR) {
      return (0, tR.z)((() => RR), yR, ZR)
    }
  },
  37191: (RR, JR, GR) => {
    function yR(RR, JR) {
      return new Error(`${RR}: ${JR instanceof Error?`${JR.name}: ${JR.message}`:String(JR)}`, {
        cause: JR
      })
    }
    GR.d(JR, {
      b: () => yR
    })
  },
  37187: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR,
      f: () => iR
    });
    var yR = GR(2457),
      tR = GR(7762),
      uR = GR(37191);

    function ZR() {
      return new URL(new GR.U(GR(37199)).href, globalThis.location?.href).href
    }
    let qR = null;

    function iR() {
      return qR ??= (async () => (0, yR.A)(new URL(ZR()), (0, tR.c)("bloxd_wasm_textures")))().catch((RR => {
        throw (0, uR.b)((0, yR.E)(RR), RR)
      })), qR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);