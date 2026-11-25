export const id = 200;
export const ids = [199, 200];
export const modules = {
  34339: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      CAPPED_COUNTS_VISIT_CAP: () => TQ,
      reportCappedWasmFailure: () => FQ,
      reportUncappedWasmFailure: () => sQ,
      reportWasmCrash: () => qQ,
      reportWasmFailure: () => zQ
    });
    var wQ = XQ(3176);

    function qQ(QQ) {
      (0, wQ.reportClientError)("wasm_load", QQ.message, QQ.code)
    }
    const TQ = wQ.MAX_ERRORS_PER_VISIT - 4;

    function zQ(QQ, WQ, XQ, qQ) {
      (0, wQ.reportClientError)(QQ, WQ, XQ, !1, wQ.MAX_ERRORS_PER_VISIT, {
        context: qQ
      })
    }

    function sQ(QQ, WQ, XQ, qQ) {
      (0, wQ.reportClientError)(QQ, WQ, XQ, !1, 1 / 0, {
        context: qQ
      })
    }

    function FQ(QQ, WQ, XQ, qQ) {
      (0, wQ.reportClientError)(QQ, WQ, XQ, !1, TQ, {
        context: qQ
      })
    }
  },
  36543: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => UQ,
      d: () => dQ,
      h: () => HQ,
      j: () => bQ
    });
    var wQ = XQ(36575),
      qQ = XQ(3107),
      TQ = XQ(36595),
      zQ = XQ(3110),
      sQ = XQ(34339),
      FQ = XQ(3167),
      PQ = XQ(3500),
      gQ = XQ(3497),
      JQ = XQ(36552),
      rQ = XQ(3176),
      IQ = XQ(36559),
      jQ = XQ(36568),
      BQ = XQ(3933);
    let yQ = !1;
    const VQ = 40;
    var DQ = XQ(3819);
    const pQ = "bloxdWasmFailureReported";

    function GQ() {
      return "undefined" === typeof WebAssembly
    }

    function UQ() {
      return (0, wQ.h)()
    }

    function bQ() {
      if (GQ()) return "this browser has no WebAssembly";
      const QQ = (0, qQ.r)();
      return "compile" === QQ || "instantiate" === QQ ? `the core wasm didn't load here (${(0,qQ.h)()})` : null
    }
    async function vQ(QQ) {
      return await (0, TQ.e)(TQ.d, void 0, QQ)
    }

    function dQ() {
      GQ() || (0, DQ.d)((() => {
        vQ()
      }))
    }

    function HQ() {
      if (GQ()) return async () => ((0, FQ.j)("unsupported", 0), aQ("unsupported", "This browser has no WebAssembly"), !1);
      const QQ = {
        reloadFailedDownload: !0
      };
      return vQ(QQ), async () => {
        var WQ;
        const XQ = performance.now();
        await vQ(QQ);
        const wQ = (performance.now() - XQ) / 1e3;
        if ((0, qQ.O)()) return (0, FQ.j)("ready", wQ), yQ || (yQ = !0, (0, qQ.U)((() => {
          if ("call" !== (0, qQ.r)()) return;
          const QQ = (0, qQ.n)(),
            WQ = (0, JQ.k)(QQ, qQ.C, qQ.Z),
            XQ = (0, qQ.w)().buffer.byteLength,
            wQ = (0, JQ.f)(WQ.kind, WQ.refusedBytes),
            TQ = wQ ? "alloc_failed" : WQ.kind,
            zQ = (0, IQ.j)(XQ),
            sQ = wQ ? `_r${Math.floor(Math.log2(WQ.refusedBytes))}` : "",
            FQ = (0, BQ.b)();
          null === FQ && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const PQ = new Error((0, jQ.b)(QQ, XQ, WQ));
          if (QQ instanceof Error && void 0 !== QQ.stack) {
            const WQ = QQ.stack.split("\n"),
              XQ = WQ.length > VQ ? [...WQ.slice(0, VQ / 2), ...WQ.slice(-VQ / 2)] : WQ;
            PQ.stack = XQ.join("\n")
          }(0, rQ.reportClientError)("wasm_load", PQ, `wasm_call_${TQ}_${null!==FQ&&void 0!==FQ?FQ:"unnamed"}_m${zQ}${sQ}`)
        }))), (0, zQ.R)(TQ.d.url()) && (0, sQ.reportCappedWasmFailure)("wasm_load", PQ.b.message, PQ.b.code), !0;
        const DQ = gQ.d[null !== (WQ = (0, qQ.r)()) && void 0 !== WQ ? WQ : "call"];
        return (0, FQ.j)(DQ, wQ), aQ(DQ, (0, qQ.h)()), !1
      }
    }

    function aQ(QQ, WQ) {
      (0, gQ.i)(pQ, `Bloxd wasm ${QQ}, so the game can't start: ${WQ}`, WQ, QQ)
    }
  },
  36568: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => sQ,
      f: () => PQ,
      g: () => zQ,
      j: () => JQ
    });
    var wQ = XQ(36552),
      qQ = XQ(12);
    const TQ = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function zQ(QQ) {
      if (QQ instanceof WebAssembly.RuntimeError) return !0;
      const WQ = QQ instanceof Error ? QQ.stack : void 0;
      return "string" === typeof WQ && TQ.test(WQ)
    }

    function sQ(QQ, WQ, XQ) {
      var qQ;
      const zQ = QQ instanceof Error ? QQ.name : "thrown",
        sQ = (QQ instanceof Error && null !== (qQ = QQ.stack) && void 0 !== qQ ? qQ : "").split("\n").filter((QQ => TQ.test(QQ))).slice(0, 8).map((QQ => QQ.trim())),
        FQ = null === WQ ? "wasm memory unknown" : `wasm memory ${Math.round(WQ/2**20)} MB`,
        PQ = null === XQ.panic ? "" : `, panic: ${(0,wQ.i)(XQ.panic)}`,
        gQ = `${zQ}: ${QQ instanceof Error?QQ.message:String(QQ)}`;
      return `${(0,wQ.l)(XQ.kind,XQ.refusedBytes)} ${gQ} (${FQ})${PQ}${sQ.length>0?` | ${sQ.join(" < ")}`:""}`
    }
    const FQ = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function PQ(QQ) {
      var WQ;
      let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(QQ instanceof Error) || !FQ.test(QQ.message)) return {};
      if (!("detached" in XQ)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, qQ.W)(null === (WQ = (0, qQ.O)(XQ, "detached")) || void 0 === WQ ? void 0 : WQ.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const gQ = 500;

    function JQ(QQ) {
      let WQ = "[object Object]";
      try {
        WQ = String(QQ)
      } catch {}
      if ("[object Object]" !== WQ) return WQ;
      try {
        var XQ, wQ;
        return null !== (XQ = null === (wQ = JSON.stringify(QQ)) || void 0 === wQ ? void 0 : wQ.slice(0, gQ)) && void 0 !== XQ ? XQ : WQ
      } catch {
        return WQ
      }
    }
  },
  36616: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/bloxd_wasm_bg.b7e23ad43b7e82dd6e75.wasm"
  },
  36588: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/bloxd_wasm_textures_bg.18bca44e8fe1e421dfd7.wasm"
  },
  36599: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      tg: () => wQ,
      EnvelopeKind: () => qQ,
      og: () => TQ,
      PhysicsEngine: () => zQ,
      eg: () => sQ,
      ng: () => FQ,
      xg: () => PQ,
      Yg: () => gQ,
      Ng: () => JQ,
      Zg: () => rQ,
      Og: () => IQ,
      Kg: () => jQ,
      mg: () => BQ,
      Mg: () => yQ,
      default: () => vW,
      initSync: () => bW,
      QJ: () => VQ,
      WJ: () => DQ,
      XJ: () => pQ,
      wJ: () => GQ,
      qJ: () => UQ,
      TJ: () => bQ,
      zJ: () => vQ,
      sJ: () => dQ,
      FJ: () => HQ,
      PJ: () => aQ,
      gJ: () => lQ,
      JJ: () => hQ,
      rJ: () => iQ,
      IJ: () => cQ,
      jJ: () => AQ
    });
    class wQ {
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, EQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        pW.ffm8(QQ, 0)
      }
      BJ() {
        const QQ = pW.cgGQ(this.__wbg_ptr);
        if (QQ[2]) throw rW(QQ[1]);
        return QQ[0] >>> 0
      }
      yJ() {
        return pW.gLYs(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const QQ = pW.KV1w();
        return this.__wbg_ptr = QQ, EQ.register(this, this.__wbg_ptr, this), this
      }
      VJ() {
        return pW.tN37(this.__wbg_ptr) >>> 0
      }
      DJ(QQ) {
        const WQ = pW.k2r8(this.__wbg_ptr, QQ);
        if (WQ[2]) throw rW(WQ[1]);
        return WQ[0] >>> 0
      }
      pJ(QQ) {
        const WQ = pW.dDUE(this.__wbg_ptr, QQ);
        if (WQ[2]) throw rW(WQ[1]);
        return WQ[0] >>> 0
      }
    }
    Symbol.dispose && (wQ.prototype[Symbol.dispose] = wQ.prototype.free);
    const qQ = Object.freeze({
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
    class TQ {
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, CQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        pW.AxFm(QQ, 0)
      }
      bJ(QQ, WQ) {
        const XQ = pW.HYB4(this.__wbg_ptr, QQ, WQ);
        if (XQ[2]) throw rW(XQ[1]);
        return XQ[0] >>> 0
      }
      vJ(QQ) {
        const WQ = pW.ICzt(this.__wbg_ptr, QQ);
        if (WQ[2]) throw rW(WQ[1]);
        return WQ[0] >>> 0
      }
      dJ() {
        pW.k17X(this.__wbg_ptr)
      }
      static HJ() {
        return pW.DosY() >>> 0
      }
      aJ() {
        return pW.zymv(this.__wbg_ptr) >>> 0
      }
      lJ() {
        const QQ = pW.kY8w(this.__wbg_ptr);
        return 0 === QQ[0] ? void 0 : QQ[1]
      }
      hJ() {
        return pW.GpcT(this.__wbg_ptr) >>> 0
      }
      iJ() {
        return pW.CCvo(this.__wbg_ptr) >>> 0
      }
      static UJ() {
        return pW.CEf1() >>> 0
      }
      constructor() {
        const QQ = pW.dDho();
        return this.__wbg_ptr = QQ, CQ.register(this, this.__wbg_ptr, this), this
      }
      cJ() {
        return pW.nPiX(this.__wbg_ptr) >>> 0
      }
      AJ() {
        return pW.ZZKO(this.__wbg_ptr) >>> 0
      }
      RJ() {
        return pW.MjEz(this.__wbg_ptr) >>> 0
      }
      GJ(QQ) {
        return pW.Bqd4(this.__wbg_ptr, QQ) >>> 0
      }
      reserve(QQ, WQ) {
        const XQ = pW.dCrA(this.__wbg_ptr, QQ, WQ);
        if (XQ[1]) throw rW(XQ[0])
      }
      uJ(QQ, WQ) {
        const XQ = FW(QQ, pW.U5qy),
          wQ = GW;
        pW.AbMU(this.__wbg_ptr, XQ, wQ, WQ)
      }
      text() {
        let QQ, WQ;
        try {
          const XQ = pW.tKiw(this.__wbg_ptr);
          return QQ = XQ[0], WQ = XQ[1], KQ(XQ[0], XQ[1])
        } finally {
          pW.dsle(QQ, WQ, 1)
        }
      }
    }
    Symbol.dispose && (TQ.prototype[Symbol.dispose] = TQ.prototype.free);
    class zQ {
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, uQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        pW.DryQ(QQ, 0)
      }
      kJ(QQ, WQ) {
        eQ(WQ, wQ);
        const XQ = pW.fOeo(this.__wbg_ptr, QQ, WQ.__wbg_ptr);
        if (XQ[2]) throw rW(XQ[1]);
        return XQ[0] >>> 0
      }
      SJ() {
        const QQ = pW.NMAY(this.__wbg_ptr);
        if (QQ[1]) throw rW(QQ[0])
      }
      xJ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, FQ, PQ, gQ, JQ) {
        eQ(QQ, sQ);
        const rQ = pW.cT9e(this.__wbg_ptr, QQ.__wbg_ptr, WQ, XQ, wQ, qQ, TQ, zQ, FQ, PQ, gQ, JQ);
        if (rQ[2]) throw rW(rQ[1]);
        return rQ[0]
      }
      YJ() {
        const QQ = pW.t8VV(this.__wbg_ptr);
        var WQ = nQ(QQ[0], QQ[1]).slice();
        return pW.dsle(QQ[0], 8 * QQ[1], 8), WQ
      }
      NJ() {
        return pW.zEdE(this.__wbg_ptr) >>> 0
      }
      ZJ() {
        return pW.LhEz(this.__wbg_ptr) >>> 0
      }
      OJ() {
        return pW.cS8L(this.__wbg_ptr) >>> 0
      }
      constructor(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
        const FQ = pW.i8yI(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ);
        if (FQ[2]) throw rW(FQ[1]);
        return this.__wbg_ptr = FQ[0], uQ.register(this, this.__wbg_ptr, this), this
      }
      MJ(QQ) {
        eQ(QQ, wQ);
        const WQ = pW.nK19(this.__wbg_ptr, QQ.__wbg_ptr);
        if (WQ[2]) throw rW(WQ[1]);
        return WQ[0] >>> 0
      }
      Qr(QQ) {
        const WQ = pW.lTXt(this.__wbg_ptr, QQ);
        if (WQ[1]) throw rW(WQ[0])
      }
      Wr() {
        return pW.aP1J(this.__wbg_ptr) >>> 0
      }
      resume(QQ, WQ) {
        eQ(QQ, sQ), eQ(WQ, wQ);
        const XQ = pW.ub61(this.__wbg_ptr, QQ.__wbg_ptr, WQ.__wbg_ptr);
        if (XQ[2]) throw rW(XQ[1]);
        return XQ[0] >>> 0
      }
      zr(QQ) {
        const WQ = pW.z1jD(this.__wbg_ptr, QQ);
        if (WQ[1]) throw rW(WQ[0])
      }
      Pr(QQ, WQ) {
        eQ(WQ, wQ);
        const XQ = pW.Wisg(this.__wbg_ptr, QQ, WQ.__wbg_ptr);
        if (XQ[1]) throw rW(XQ[0])
      }
      Ir(QQ) {
        const WQ = gW(QQ, pW.U5qy),
          XQ = GW,
          wQ = pW.mQDn(this.__wbg_ptr, WQ, XQ);
        if (wQ[1]) throw rW(wQ[0])
      }
      oJ(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = pW.qsO5(this.__wbg_ptr, QQ, WQ, XQ, wQ, qQ, TQ);
        if (zQ[1]) throw rW(zQ[0])
      }
      eJ(QQ, WQ, XQ, wQ) {
        const qQ = FW(QQ, pW.U5qy),
          TQ = GW,
          zQ = gW(WQ, pW.U5qy),
          sQ = GW,
          FQ = gW(XQ, pW.U5qy),
          PQ = GW,
          gQ = gW(wQ, pW.U5qy),
          JQ = GW,
          rQ = pW.AqjU(this.__wbg_ptr, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ);
        if (rQ[1]) throw rW(rQ[0])
      }
      Br(QQ, WQ) {
        eQ(WQ, wQ);
        const XQ = pW.n45o(this.__wbg_ptr, QQ, WQ.__wbg_ptr);
        if (XQ[1]) throw rW(XQ[0])
      }
      mJ(QQ, WQ, XQ) {
        const wQ = pW.IMae(this.__wbg_ptr, QQ, WQ, XQ);
        if (wQ[1]) throw rW(wQ[0])
      }
      Vr(QQ, WQ, XQ, wQ, qQ, TQ, zQ, FQ, PQ, gQ) {
        eQ(QQ, sQ);
        return pW.D6qD(this.__wbg_ptr, QQ.__wbg_ptr, WQ, XQ, wQ, qQ, TQ, zQ, FQ, PQ, gQ)
      }
    }
    Symbol.dispose && (zQ.prototype[Symbol.dispose] = zQ.prototype.free);
    class sQ {
      static __wrap(QQ) {
        const WQ = Object.create(sQ.prototype);
        return WQ.__wbg_ptr = QQ, LQ.register(WQ, WQ.__wbg_ptr, WQ), WQ
      }
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, LQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        pW.d0WX(QQ, 0)
      }
      Ur(QQ) {
        const WQ = pW.kTq6(this.__wbg_ptr, QQ);
        if (WQ[2]) throw rW(WQ[1]);
        return WQ[0] >>> 0
      }
      br(QQ, WQ, XQ) {
        return pW.JSaO(this.__wbg_ptr, QQ, WQ, XQ)
      }
      vr(QQ, WQ, XQ) {
        return pW.TdcI(this.__wbg_ptr, QQ, WQ, XQ) >>> 0
      }
      dr(QQ, WQ, XQ, wQ) {
        return 0 !== pW.NVAV(this.__wbg_ptr, QQ, WQ, XQ, wQ)
      }
      Hr() {
        pW.PZBe(this.__wbg_ptr)
      }
      lr(QQ) {
        const WQ = pW.capW(this.__wbg_ptr, QQ);
        if (WQ[3]) throw rW(WQ[2]);
        var XQ = YQ(WQ[0], WQ[1]).slice();
        return pW.dsle(WQ[0], 1 * WQ[1], 1), XQ
      }
      evict(QQ, WQ) {
        return pW.Bhkj(this.__wbg_ptr, QQ, WQ) >>> 0
      }
      hr() {
        pW.moP9(this.__wbg_ptr)
      }
      ir(QQ, WQ, XQ) {
        pW.d4IK(this.__wbg_ptr, QQ, WQ, XQ)
      }
      Ar(QQ) {
        const WQ = pW.szbH(this.__wbg_ptr, QQ);
        if (WQ[1]) throw rW(WQ[0])
      }
      Rr() {
        return pW.Upnj(this.__wbg_ptr) >>> 0
      }
      Er() {
        return pW.ZzoU(this.__wbg_ptr) >>> 0
      }
      Cr(QQ, WQ, XQ) {
        pW.W299(this.__wbg_ptr, QQ, WQ, XQ)
      }
      ur(QQ, WQ, XQ) {
        pW.MgVN(this.__wbg_ptr, QQ, WQ, XQ)
      }
      Lr() {
        return pW.I8mX(this.__wbg_ptr) >>> 0
      }
      kr() {
        return pW.U8Kh(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const QQ = pW.cXBo();
        return this.__wbg_ptr = QQ, LQ.register(this, this.__wbg_ptr, this), this
      }
      static Sr() {
        const QQ = pW.bGHs();
        return sQ.__wrap(QQ)
      }
      tr() {
        return pW.DU4r(this.__wbg_ptr) >>> 0
      }
      er() {
        return pW.P2dW(this.__wbg_ptr) >>> 0
      }
      nr(QQ, WQ, XQ, wQ) {
        const qQ = pW.codV(this.__wbg_ptr, QQ, WQ, XQ, wQ);
        if (qQ[1]) throw rW(qQ[0])
      }
      Yr() {
        return pW.TRiH(this.__wbg_ptr) >>> 0
      }
      Nr() {
        return pW.Tsa5(this.__wbg_ptr) >>> 0
      }
      Zr(QQ, WQ, XQ, wQ) {
        pW.LwHG(this.__wbg_ptr, QQ, WQ, XQ, wQ)
      }
      Or(QQ) {
        pW.SiVp(this.__wbg_ptr, QQ)
      }
      mr(QQ, WQ, XQ, wQ, qQ) {
        const TQ = PW(WQ, pW.U5qy),
          zQ = GW,
          sQ = FW(XQ, pW.U5qy),
          FQ = GW,
          PQ = gW(wQ, pW.U5qy),
          gQ = GW,
          JQ = pW.bEcT(this.__wbg_ptr, QQ, TQ, zQ, sQ, FQ, PQ, gQ, qQ);
        if (JQ[1]) throw rW(JQ[0])
      }
      Kr(QQ, WQ, XQ, wQ) {
        const qQ = PW(QQ, pW.U5qy),
          TQ = GW,
          zQ = FW(WQ, pW.U5qy),
          sQ = GW,
          FQ = gW(XQ, pW.U5qy),
          PQ = GW,
          gQ = PW(wQ, pW.U5qy),
          JQ = GW,
          rQ = pW.y1Fi(this.__wbg_ptr, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ);
        if (rQ[1]) throw rW(rQ[0])
      }
      qI(QQ) {
        const WQ = PW(QQ, pW.U5qy),
          XQ = GW,
          wQ = pW.QBa4(this.__wbg_ptr, WQ, XQ);
        if (wQ[1]) throw rW(wQ[0])
      }
      TI() {
        return pW.IxAD(this.__wbg_ptr) >>> 0
      }
      zI(QQ) {
        const WQ = pW.MjYm(this.__wbg_ptr, QQ);
        if (WQ[2]) throw rW(WQ[1]);
        return WQ[0] >>> 0
      }
      steer() {
        return pW.ZgdU(this.__wbg_ptr) >>> 0
      }
      sI() {
        const QQ = pW.KYTH(this.__wbg_ptr);
        var WQ = nQ(QQ[0], QQ[1]).slice();
        return pW.dsle(QQ[0], 8 * QQ[1], 8), WQ
      }
      FI() {
        return pW.Qk5B(this.__wbg_ptr) >>> 0
      }
      wr() {
        const QQ = pW.OHg3(this.__wbg_ptr);
        var WQ, XQ, wQ = (WQ = QQ[0], XQ = QQ[1], WQ >>>= 0, (null !== OQ && 0 !== OQ.byteLength || (OQ = new Int32Array(pW.memory.buffer)), OQ).subarray(WQ / 4, WQ / 4 + XQ)).slice();
        return pW.dsle(QQ[0], 4 * QQ[1], 4), wQ
      }
    }
    Symbol.dispose && (sQ.prototype[Symbol.dispose] = sQ.prototype.free);
    class FQ {
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, kQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        pW.s6JB(QQ, 0)
      }
      gI(QQ) {
        const WQ = FW(QQ, pW.U5qy),
          XQ = GW,
          wQ = pW.KJUV(this.__wbg_ptr, WQ, XQ);
        if (wQ[1]) throw rW(wQ[0])
      }
      JI() {
        return pW.hyvT(this.__wbg_ptr) >>> 0
      }
      rI() {
        return pW.cjrC(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const QQ = pW.nk2n();
        return this.__wbg_ptr = QQ, kQ.register(this, this.__wbg_ptr, this), this
      }
      run(QQ, WQ) {
        eQ(QQ, sQ);
        const XQ = pW.US2j(this.__wbg_ptr, QQ.__wbg_ptr, WQ);
        if (XQ[2]) throw rW(XQ[1]);
        return XQ[0] >>> 0
      }
      II(QQ) {
        const WQ = FW(QQ, pW.U5qy),
          XQ = GW;
        pW.iMHF(this.__wbg_ptr, WQ, XQ)
      }
      jI(QQ) {
        const WQ = FW(QQ, pW.U5qy),
          XQ = GW;
        pW.aMKO(this.__wbg_ptr, WQ, XQ)
      }
    }
    Symbol.dispose && (FQ.prototype[Symbol.dispose] = FQ.prototype.free);
    class PQ {
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, fQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        pW.DkiN(QQ, 0)
      }
      yI(QQ, WQ) {
        const XQ = PW(QQ, pW.U5qy),
          wQ = GW;
        return pW.h0Vh(this.__wbg_ptr, XQ, wQ, WQ) >>> 0
      }
      VI(QQ, WQ, XQ) {
        eQ(QQ, sQ);
        const wQ = PW(XQ, pW.U5qy),
          qQ = GW,
          TQ = pW.uvdV(this.__wbg_ptr, QQ.__wbg_ptr, WQ, wQ, qQ);
        if (TQ[2]) throw rW(TQ[1]);
        return TQ[0] >>> 0
      }
      BI(QQ) {
        return pW.wKhg(this.__wbg_ptr, QQ) >>> 0
      }
      constructor() {
        const QQ = pW.QGkG();
        return this.__wbg_ptr = QQ, fQ.register(this, this.__wbg_ptr, this), this
      }
      scan(QQ, WQ) {
        eQ(QQ, sQ);
        const XQ = pW.XXcH(this.__wbg_ptr, QQ.__wbg_ptr, WQ);
        if (XQ[2]) throw rW(XQ[1]);
        return XQ[0] >>> 0
      }
      GI(QQ) {
        const WQ = PW(QQ, pW.U5qy),
          XQ = GW;
        pW.QTUm(this.__wbg_ptr, WQ, XQ)
      }
      pI() {
        return pW.UrHw(this.__wbg_ptr) >>> 0
      }
      DI() {
        return pW.pCPK(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (PQ.prototype[Symbol.dispose] = PQ.prototype.free);
    class gQ {
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, SQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        pW.LkNY(QQ, 0)
      }
      bI(QQ) {
        const WQ = pW.faXP(this.__wbg_ptr, QQ);
        if (WQ[2]) throw rW(WQ[1]);
        return WQ[0] >>> 0
      }
      compute(QQ, WQ, XQ, wQ) {
        var qQ = zW(wQ) ? 0 : JW(wQ, pW.U5qy, pW.KJR0),
          TQ = GW;
        const zQ = pW.Wu1l(this.__wbg_ptr, QQ, zW(WQ) ? Number.MAX_SAFE_INTEGER : WQ | 0, XQ, qQ, TQ);
        if (zQ[2]) throw rW(zQ[1]);
        return zQ[0] >>> 0
      }
      dI(QQ) {
        const WQ = JW(QQ, pW.U5qy, pW.KJR0),
          XQ = GW;
        pW.K86C(this.__wbg_ptr, WQ, XQ)
      }
      aI() {
        return pW.GSVI(this.__wbg_ptr)
      }
      lI(QQ) {
        return pW.lMWq(this.__wbg_ptr, QQ) >>> 0
      }
      hI() {
        return pW.UIaH(this.__wbg_ptr) >>> 0
      }
      iI() {
        return pW.fSGS(this.__wbg_ptr) >>> 0
      }
      cI(QQ, WQ) {
        const XQ = pW.U6ac(this.__wbg_ptr, QQ, WQ);
        if (XQ[1]) throw rW(XQ[0])
      }
      AI() {
        return pW.SxU4(this.__wbg_ptr) >>> 0
      }
      RI() {
        return pW.qjf0(this.__wbg_ptr) >>> 0
      }
      EI() {
        return pW.HnXa(this.__wbg_ptr) >>> 0
      }
      vI(QQ, WQ, XQ) {
        const wQ = FW(QQ, pW.U5qy),
          qQ = GW,
          TQ = FW(WQ, pW.U5qy),
          zQ = GW,
          sQ = pW.CdVI(this.__wbg_ptr, wQ, qQ, TQ, zQ, XQ);
        if (sQ[1]) throw rW(sQ[0])
      }
      uI() {
        return pW.WLW4(this.__wbg_ptr) >>> 0
      }
      mesh(QQ, WQ, XQ, wQ, qQ) {
        const TQ = pW.lNSe(this.__wbg_ptr, QQ, WQ, XQ, wQ, qQ);
        if (TQ[2]) throw rW(TQ[1]);
        return TQ[0] >>> 0
      }
      constructor(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ) {
        const GQ = sW(QQ, pW.U5qy),
          UQ = GW,
          bQ = gW(WQ, pW.U5qy),
          vQ = GW,
          dQ = FW(XQ, pW.U5qy),
          HQ = GW,
          aQ = PW(wQ, pW.U5qy),
          lQ = GW,
          hQ = PW(qQ, pW.U5qy),
          iQ = GW,
          cQ = FW(TQ, pW.U5qy),
          AQ = GW,
          RQ = FW(zQ, pW.U5qy),
          EQ = GW,
          CQ = gW(sQ, pW.U5qy),
          uQ = GW,
          LQ = gW(FQ, pW.U5qy),
          kQ = GW,
          fQ = PW(PQ, pW.U5qy),
          tQ = GW;
        var oQ = zW(gQ) ? 0 : sW(gQ, pW.U5qy),
          eQ = GW;
        const nQ = FW(JQ, pW.U5qy),
          xQ = GW,
          YQ = PW(rQ, pW.U5qy),
          NQ = GW;
        var ZQ = zW(IQ) ? 0 : PW(IQ, pW.U5qy),
          OQ = GW;
        const KQ = gW(jQ, pW.U5qy),
          mQ = GW,
          MQ = pW.Rt7A(GQ, UQ, bQ, vQ, dQ, HQ, aQ, lQ, hQ, iQ, cQ, AQ, RQ, EQ, CQ, uQ, LQ, kQ, fQ, tQ, oQ, eQ, nQ, xQ, YQ, NQ, ZQ, OQ, KQ, mQ, BQ, yQ, VQ, DQ, pQ);
        if (MQ[2]) throw rW(MQ[1]);
        return this.__wbg_ptr = MQ[0], SQ.register(this, this.__wbg_ptr, this), this
      }
      CI(QQ, WQ) {
        const XQ = FW(QQ, pW.U5qy),
          wQ = GW,
          qQ = pW.XGTU(this.__wbg_ptr, XQ, wQ, WQ);
        if (qQ[3]) throw rW(qQ[2]);
        var TQ = YQ(qQ[0], qQ[1]).slice();
        return pW.dsle(qQ[0], 1 * qQ[1], 1), TQ
      }
      LI(QQ) {
        pW.PjkM(this.__wbg_ptr, zW(QQ) ? 16777215 : QQ)
      }
      kI(QQ) {
        return pW.t83C(this.__wbg_ptr, QQ) >>> 0
      }
      SI() {
        return pW.cgiN(this.__wbg_ptr) >>> 0
      }
      fI() {
        const QQ = pW.o3pr(this.__wbg_ptr);
        if (QQ[2]) throw rW(QQ[1]);
        return 0 !== QQ[0]
      }
      tI() {
        return pW.SmkW(this.__wbg_ptr) >>> 0
      }
      oI() {
        return pW.Xj2d(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (gQ.prototype[Symbol.dispose] = gQ.prototype.free);
    class JQ {
      __destroy_into_raw() {
        const QQ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, tQ.unregister(this), QQ
      }
      free() {
        const QQ = this.__destroy_into_raw();
        pW.twjn(QQ, 0)
      }
      compute(QQ, WQ, XQ, wQ) {
        var qQ = zW(wQ) ? 0 : JW(wQ, pW.U5qy, pW.KJR0),
          TQ = GW;
        const zQ = pW.jIyq(this.__wbg_ptr, QQ, zW(WQ) ? Number.MAX_SAFE_INTEGER : WQ | 0, XQ, qQ, TQ);
        if (zQ[2]) throw rW(zQ[1]);
        return zQ[0] >>> 0
      }
      dI(QQ) {
        const WQ = JW(QQ, pW.U5qy, pW.KJR0),
          XQ = GW;
        pW.ldpm(this.__wbg_ptr, WQ, XQ)
      }
      RI() {
        return pW.xeJf(this.__wbg_ptr) >>> 0
      }
      EI() {
        return pW.VzRC(this.__wbg_ptr) >>> 0
      }
      eI(QQ) {
        const WQ = pW.rf01(this.__wbg_ptr, QQ);
        if (WQ[2]) throw rW(WQ[1]);
        return WQ[0] >>> 0
      }
      constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = sW(QQ, pW.U5qy),
          sQ = GW,
          FQ = gW(WQ, pW.U5qy),
          PQ = GW,
          gQ = FW(XQ, pW.U5qy),
          JQ = GW,
          rQ = PW(wQ, pW.U5qy),
          IQ = GW,
          jQ = pW.S83x(zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, qQ, TQ);
        if (jQ[2]) throw rW(jQ[1]);
        return this.__wbg_ptr = jQ[0], tQ.register(this, this.__wbg_ptr, this), this
      }
      SI() {
        return pW.zqJM(this.__wbg_ptr) >>> 0
      }
      fI() {
        const QQ = pW.Ll3l(this.__wbg_ptr);
        if (QQ[2]) throw rW(QQ[1]);
        return 0 !== QQ[0]
      }
      tI() {
        return pW.Dy7g(this.__wbg_ptr) >>> 0
      }
    }

    function rQ() {
      const QQ = pW.TPwt();
      var WQ = xQ(QQ[0], QQ[1]).slice();
      return pW.dsle(QQ[0], 4 * QQ[1], 4), WQ
    }

    function IQ(QQ, WQ) {
      let XQ, wQ;
      try {
        const qQ = sW(QQ, pW.U5qy),
          TQ = GW,
          zQ = JW(WQ, pW.U5qy, pW.KJR0),
          sQ = GW,
          FQ = pW.MbaF(qQ, TQ, zQ, sQ);
        return XQ = FQ[0], wQ = FQ[1], KQ(FQ[0], FQ[1])
      } finally {
        pW.dsle(XQ, wQ, 1)
      }
    }

    function jQ() {
      const QQ = pW.LtWz();
      var WQ = xQ(QQ[0], QQ[1]).slice();
      return pW.dsle(QQ[0], 4 * QQ[1], 4), WQ
    }

    function BQ(QQ) {
      return 0 !== pW.emuE(QQ)
    }

    function yQ(QQ, WQ) {
      const XQ = JW(QQ, pW.U5qy, pW.KJR0),
        wQ = GW,
        qQ = pW.r3NR(XQ, wQ, WQ);
      if (qQ[1]) throw rW(qQ[0])
    }

    function VQ() {
      pW.Yjc1()
    }

    function DQ() {
      return pW.tk5d() >>> 0
    }

    function pQ(QQ) {
      return 0 !== pW.f7sP(QQ)
    }

    function GQ(QQ) {
      return 0 !== pW.DhE5(QQ)
    }

    function UQ(QQ) {
      pW.ucBJ(QQ)
    }

    function bQ() {
      return pW.jZR7() >>> 0
    }

    function vQ() {
      return pW.swmz() >>> 0
    }

    function dQ() {
      return 0 !== pW.eEmG()
    }

    function HQ() {
      const QQ = pW.vFPv();
      var WQ = xQ(QQ[0], QQ[1]).slice();
      return pW.dsle(QQ[0], 4 * QQ[1], 4), WQ
    }

    function aQ() {
      const QQ = pW.MLcU();
      var WQ = xQ(QQ[0], QQ[1]).slice();
      return pW.dsle(QQ[0], 4 * QQ[1], 4), WQ
    }

    function lQ() {
      const QQ = pW.VgnV();
      var WQ = xQ(QQ[0], QQ[1]).slice();
      return pW.dsle(QQ[0], 4 * QQ[1], 4), WQ
    }

    function hQ() {
      return pW.RI4y() >>> 0
    }

    function iQ() {
      pW.zdEy()
    }

    function cQ() {
      let QQ, WQ;
      try {
        const XQ = pW.eED2();
        return QQ = XQ[0], WQ = XQ[1], KQ(XQ[0], XQ[1])
      } finally {
        pW.dsle(QQ, WQ, 1)
      }
    }

    function AQ(QQ) {
      pW.qfo8(oQ(QQ))
    }

    function RQ() {
      return {
        __proto__: null,
        jcA9: {
          __proto__: null,
          xfOB: function(QQ, WQ) {
            return oQ(Error(KQ(QQ, WQ)))
          },
          YeI2: function(QQ, WQ) {
            throw new Error(KQ(QQ, WQ))
          },
          XWOa: function(QQ) {
            wW(QQ).call()
          },
          J7tI: function(QQ, WQ) {
            console.error(KQ(QQ, WQ))
          },
          iJTK: function() {
            return performance.now()
          },
          xjhO: function(QQ) {
            rW(QQ)
          }
        }
      }
    }
    Symbol.dispose && (JQ.prototype[Symbol.dispose] = JQ.prototype.free);
    const EQ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((QQ => pW.ffm8(QQ, 1))),
      CQ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((QQ => pW.AxFm(QQ, 1))),
      uQ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((QQ => pW.DryQ(QQ, 1))),
      LQ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((QQ => pW.d0WX(QQ, 1))),
      kQ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((QQ => pW.s6JB(QQ, 1))),
      fQ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((QQ => pW.DkiN(QQ, 1))),
      SQ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((QQ => pW.LkNY(QQ, 1))),
      tQ = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((QQ => pW.twjn(QQ, 1)));

    function oQ(QQ) {
      TW === qW.length && qW.push(qW.length + 1);
      const WQ = TW;
      return TW = qW[WQ], qW[WQ] = QQ, WQ
    }

    function eQ(QQ, WQ) {
      if (!(QQ instanceof WQ)) throw new Error(`expected instance of ${WQ.name}`)
    }

    function nQ(QQ, WQ) {
      return QQ >>>= 0, ZQ().subarray(QQ / 8, QQ / 8 + WQ)
    }

    function xQ(QQ, WQ) {
      return QQ >>>= 0, QW().subarray(QQ / 4, QQ / 4 + WQ)
    }

    function YQ(QQ, WQ) {
      return QQ >>>= 0, XW().subarray(QQ / 1, QQ / 1 + WQ)
    }
    let NQ = null;

    function ZQ() {
      return null !== NQ && 0 !== NQ.byteLength || (NQ = new Float64Array(pW.memory.buffer)), NQ
    }
    let OQ = null;

    function KQ(QQ, WQ) {
      return function(QQ, WQ) {
        BW += WQ, BW >= jW && (IW = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), IW.decode(), BW = WQ);
        return IW.decode(XW().subarray(QQ, QQ + WQ))
      }(QQ >>> 0, WQ)
    }
    let mQ = null;
    let MQ = null;

    function QW() {
      return null !== MQ && 0 !== MQ.byteLength || (MQ = new Uint32Array(pW.memory.buffer)), MQ
    }
    let WW = null;

    function XW() {
      return null !== WW && 0 !== WW.byteLength || (WW = new Uint8Array(pW.memory.buffer)), WW
    }

    function wW(QQ) {
      return qW[QQ]
    }
    let qW = new Array(1024).fill(void 0);
    qW.push(void 0, null, !0, !1);
    let TW = qW.length;

    function zW(QQ) {
      return void 0 === QQ || null === QQ
    }

    function sW(QQ, WQ) {
      const XQ = WQ(2 * QQ.length, 2) >>> 0;
      return (null !== mQ && 0 !== mQ.byteLength || (mQ = new Uint16Array(pW.memory.buffer)), mQ).set(QQ, XQ / 2), GW = QQ.length, XQ
    }

    function FW(QQ, WQ) {
      const XQ = WQ(4 * QQ.length, 4) >>> 0;
      return QW().set(QQ, XQ / 4), GW = QQ.length, XQ
    }

    function PW(QQ, WQ) {
      const XQ = WQ(1 * QQ.length, 1) >>> 0;
      return XW().set(QQ, XQ / 1), GW = QQ.length, XQ
    }

    function gW(QQ, WQ) {
      const XQ = WQ(8 * QQ.length, 8) >>> 0;
      return ZQ().set(QQ, XQ / 8), GW = QQ.length, XQ
    }

    function JW(QQ, WQ, XQ) {
      if (void 0 === XQ) {
        const XQ = yW.encode(QQ),
          wQ = WQ(XQ.length, 1) >>> 0;
        return XW().subarray(wQ, wQ + XQ.length).set(XQ), GW = XQ.length, wQ
      }
      let wQ = QQ.length,
        qQ = WQ(wQ, 1) >>> 0;
      const TQ = XW();
      let zQ = 0;
      for (; zQ < wQ; zQ++) {
        const WQ = QQ.charCodeAt(zQ);
        if (WQ > 127) break;
        TQ[qQ + zQ] = WQ
      }
      if (zQ !== wQ) {
        0 !== zQ && (QQ = QQ.slice(zQ)), qQ = XQ(qQ, wQ, wQ = zQ + 3 * QQ.length, 1) >>> 0;
        const WQ = XW().subarray(qQ + zQ, qQ + wQ);
        zQ += yW.encodeInto(QQ, WQ).written, qQ = XQ(qQ, wQ, zQ, 1) >>> 0
      }
      return GW = zQ, qQ
    }

    function rW(QQ) {
      const WQ = wW(QQ);
      return function(QQ) {
        QQ < 1028 || (qW[QQ] = TW, TW = QQ)
      }(QQ), WQ
    }
    let IW = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    IW.decode();
    const jW = 2146435072;
    let BW = 0;
    const yW = new TextEncoder;
    "encodeInto" in yW || (yW.encodeInto = function(QQ, WQ) {
      const XQ = yW.encode(QQ);
      return WQ.set(XQ), {
        read: QQ.length,
        written: XQ.length
      }
    });
    let VW, DW, pW, GW = 0;

    function UW(QQ, WQ) {
      return DW = QQ, pW = QQ.exports, VW = WQ, NQ = null, OQ = null, mQ = null, MQ = null, WW = null, pW.Y1it(), pW
    }

    function bW(QQ) {
      if (void 0 !== pW) return pW;
      void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
        module: QQ
      } = QQ) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const WQ = RQ();
      QQ instanceof WebAssembly.Module || (QQ = new WebAssembly.Module(QQ));
      return UW(new WebAssembly.Instance(QQ, WQ), QQ)
    }
    async function vW(QQ) {
      if (void 0 !== pW) return pW;
      void 0 !== QQ && (Object.getPrototypeOf(QQ) === Object.prototype ? ({
        module_or_path: QQ
      } = QQ) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const WQ = RQ();
      ("string" === typeof QQ || "function" === typeof Request && QQ instanceof Request || "function" === typeof URL && QQ instanceof URL) && (QQ = fetch(QQ));
      const {
        instance: XQ,
        module: wQ
      } = await async function(QQ, WQ) {
        if ("function" === typeof Response && QQ instanceof Response) {
          if (!QQ.ok) throw new Error(`failed to fetch Wasm: ${QQ.status} ${QQ.statusText} fetching '${QQ.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(QQ, WQ)
          } catch (XQ) {
            if (! function(QQ) {
                switch (QQ) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(QQ.type) || "application/wasm" === QQ.headers.get("Content-Type")) throw XQ;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", XQ)
          }
          const wQ = await QQ.arrayBuffer();
          return await WebAssembly.instantiate(wQ, WQ)
        } {
          const XQ = await WebAssembly.instantiate(QQ, WQ);
          return XQ instanceof WebAssembly.Instance ? {
            instance: XQ,
            module: QQ
          } : XQ
        }
      }(await QQ, WQ);
      return UW(XQ, wQ)
    }
  },
  36595: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ,
      e: () => sQ,
      h: () => FQ
    });
    var wQ = XQ(36599),
      qQ = XQ(3107),
      TQ = XQ(36608);
    const zQ = {
      name: qQ.d,
      url: () => new XQ.U(XQ(36616)),
      init: wQ.default,
      bindings: wQ
    };

    function sQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zQ,
        WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zQ,
        XQ = arguments.length > 2 ? arguments[2] : void 0;
      return (0, TQ.k)(QQ, WQ, XQ)
    }

    function FQ(QQ) {
      return (0, qQ.I)((() => QQ), wQ, zQ)
    }
  },
  36581: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      return new Error(`${QQ}: ${WQ instanceof Error?`${WQ.name}: ${WQ.message}`:String(WQ)}`, {
        cause: WQ
      })
    }
    XQ.d(WQ, {
      b: () => wQ
    })
  },
  36575: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ,
      h: () => FQ
    });
    var wQ = XQ(3110),
      qQ = XQ(6987),
      TQ = XQ(36581);

    function zQ() {
      return new URL(new XQ.U(XQ(36588)).href, globalThis.location?.href).href
    }
    let sQ = null;

    function FQ() {
      return sQ ??= (async () => (0, wQ.H)(new URL(zQ()), (0, qQ.b)("bloxd_wasm_textures")))().catch((QQ => {
        throw (0, TQ.b)((0, wQ.L)(QQ), QQ)
      })), sQ
    }
  },
  36552: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ,
      f: () => TQ,
      i: () => FQ,
      k: () => zQ,
      l: () => qQ
    });
    const wQ = /^alloc_failed (\d+) bytes$/;

    function qQ(QQ, WQ) {
      return TQ(QQ, WQ) ? `trap=alloc_failed ${WQ} bytes` : `trap=${QQ}`
    }

    function TQ(QQ, WQ) {
      return "unreachable" === QQ && WQ > 0
    }

    function zQ(QQ, WQ, XQ) {
      const wQ = function(QQ) {
        return QQ instanceof WebAssembly.RuntimeError ? /unreachable/i.test(QQ.message) ? "unreachable" : /out of bounds/i.test(QQ.message) ? "out_of_bounds" : "runtime_error" : (QQ instanceof RangeError || QQ instanceof Error && "InternalError" === QQ.name) && /call stack|recursion/i.test(QQ.message) ? "stack_overflow" : "js_error"
      }(QQ);
      if ("unreachable" !== wQ) return {
        kind: wQ,
        panic: null,
        refusedBytes: 0
      };
      const qQ = WQ(),
        TQ = XQ();
      return {
        kind: wQ,
        panic: TQ > 0 ? null : qQ,
        refusedBytes: TQ
      }
    }
    const sQ = 300;

    function FQ(QQ) {
      return QQ.replace(/\s*\n\s*/g, " / ").slice(0, sQ)
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);