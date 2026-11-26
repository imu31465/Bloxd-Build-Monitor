export const id = 219;
export const ids = [218, 219];
export const modules = {
  35139: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      CAPPED_COUNTS_VISIT_CAP: () => UV,
      reportCappedWasmFailure: () => QV,
      reportUncappedWasmFailure: () => pV,
      reportWasmCrash: () => YV,
      reportWasmFailure: () => yV
    });
    var JV = xV(3268);

    function YV(VV) {
      (0, JV.reportClientError)("wasm_load", VV.message, VV.code)
    }
    const UV = JV.MAX_ERRORS_PER_VISIT - 4;

    function yV(VV, eV, xV, YV) {
      (0, JV.reportClientError)(VV, eV, xV, !1, JV.MAX_ERRORS_PER_VISIT, {
        context: YV
      })
    }

    function pV(VV, eV, xV, YV) {
      (0, JV.reportClientError)(VV, eV, xV, !1, 1 / 0, {
        context: YV
      })
    }

    function QV(VV, eV, xV, YV) {
      (0, JV.reportClientError)(VV, eV, xV, !1, UV, {
        context: YV
      })
    }
  },
  37418: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => FV,
      f: () => AV,
      g: () => NV,
      i: () => TV
    });
    var JV = xV(37442),
      YV = xV(3194),
      UV = xV(37458),
      yV = xV(3196),
      pV = xV(35139),
      QV = xV(3258),
      nV = xV(3658),
      wV = xV(3651),
      ZV = xV(37422),
      vV = xV(3268),
      rV = xV(37429),
      kV = xV(37437),
      bV = xV(4122);
    let EV = !1;
    const BV = 40;
    var jV = xV(2617);
    const qV = "bloxdWasmFailureReported";

    function tV() {
      return "undefined" === typeof WebAssembly
    }

    function FV() {
      return (0, JV.g)()
    }

    function TV() {
      if (tV()) return "this browser has no WebAssembly";
      const VV = (0, YV.r)();
      return "compile" === VV || "instantiate" === VV ? `the core wasm didn't load here (${(0,YV.j)()})` : null
    }
    async function PV(VV) {
      return await (0, UV.g)(UV.d, void 0, VV)
    }

    function AV() {
      tV() || (0, jV.d)((() => {
        PV()
      }))
    }

    function NV() {
      if (tV()) return async () => ((0, QV.k)("unsupported", 0), XV("unsupported", "This browser has no WebAssembly"), !1);
      const VV = {
        reloadFailedDownload: !0
      };
      return PV(VV), async () => {
        var eV;
        const xV = performance.now();
        await PV(VV);
        const JV = (performance.now() - xV) / 1e3;
        if ((0, YV.R)()) return (0, QV.k)("ready", JV), EV || (EV = !0, (0, YV.W)((() => {
          if ("call" !== (0, YV.r)()) return;
          const VV = (0, YV.p)(),
            eV = (0, ZV.j)(VV, YV.G, YV.ab),
            xV = (0, YV.x)().buffer.byteLength,
            JV = (0, ZV.e)(eV.kind, eV.refusedBytes),
            UV = JV ? "alloc_failed" : eV.kind,
            yV = (0, rV.i)(xV),
            pV = JV ? `_r${Math.floor(Math.log2(eV.refusedBytes))}` : "",
            QV = (0, bV.d)();
          null === QV && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const nV = new Error((0, kV.d)(VV, xV, eV));
          if (VV instanceof Error && void 0 !== VV.stack) {
            const eV = VV.stack.split("\n"),
              xV = eV.length > BV ? [...eV.slice(0, BV / 2), ...eV.slice(-BV / 2)] : eV;
            nV.stack = xV.join("\n")
          }(0, vV.reportClientError)("wasm_load", nV, `wasm_call_${UV}_${null!==QV&&void 0!==QV?QV:"unnamed"}_m${yV}${pV}`)
        }))), (0, yV.N)(UV.d.url()) && (0, pV.reportCappedWasmFailure)("wasm_load", nV.d.message, nV.d.code), !0;
        const jV = wV.c[null !== (eV = (0, YV.r)()) && void 0 !== eV ? eV : "call"];
        return (0, QV.k)(jV, JV), XV(jV, (0, YV.j)()), !1
      }
    }

    function XV(VV, eV) {
      (0, wV.h)(qV, `Bloxd wasm ${VV}, so the game can't start: ${eV}`, eV, VV)
    }
  },
  37437: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV,
      h: () => nV,
      j: () => yV,
      m: () => ZV
    });
    var JV = xV(37422),
      YV = xV(10);
    const UV = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function yV(VV) {
      if (VV instanceof WebAssembly.RuntimeError) return !0;
      const eV = VV instanceof Error ? VV.stack : void 0;
      return "string" === typeof eV && UV.test(eV)
    }

    function pV(VV, eV, xV) {
      var YV;
      const yV = VV instanceof Error ? VV.name : "thrown",
        pV = (VV instanceof Error && null !== (YV = VV.stack) && void 0 !== YV ? YV : "").split("\n").filter((VV => UV.test(VV))).slice(0, 8).map((VV => VV.trim())),
        QV = null === eV ? "wasm memory unknown" : `wasm memory ${Math.round(eV/2**20)} MB`,
        nV = null === xV.panic ? "" : `, panic: ${(0,JV.i)(xV.panic)}`,
        wV = `${yV}: ${VV instanceof Error?VV.message:String(VV)}`;
      return `${(0,JV.l)(xV.kind,xV.refusedBytes)} ${wV} (${QV})${nV}${pV.length>0?` | ${pV.join(" < ")}`:""}`
    }
    const QV = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function nV(VV) {
      var eV;
      let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(VV instanceof Error) || !QV.test(VV.message)) return {};
      if (!("detached" in xV)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, YV.R)(null === (eV = (0, YV.L)(xV, "detached")) || void 0 === eV ? void 0 : eV.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const wV = 500;

    function ZV(VV) {
      let eV = "[object Object]";
      try {
        eV = String(VV)
      } catch {}
      if ("[object Object]" !== eV) return eV;
      try {
        var xV, JV;
        return null !== (xV = null === (JV = JSON.stringify(VV)) || void 0 === JV ? void 0 : JV.slice(0, wV)) && void 0 !== xV ? xV : eV
      } catch {
        return eV
      }
    }
  },
  37475: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/bloxd_wasm_bg.de3bc866342b80b42882.wasm"
  },
  37450: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/bloxd_wasm_textures_bg.494527582f8a00d14dd8.wasm"
  },
  37467: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      UV: () => JV,
      EnvelopeKind: () => YV,
      ve: () => UV,
      PhysicsEngine: () => yV,
      le: () => pV,
      tx: () => QV,
      sx: () => nV,
      sy: () => wV,
      ip: () => ZV,
      PQ: () => vV,
      XQ: () => rV,
      HQ: () => kV,
      en: () => bV,
      sw: () => EV,
      default: () => Pe,
      initSync: () => Te,
      hZ: () => BV,
      lZ: () => jV,
      LZ: () => qV,
      fZ: () => tV,
      mZ: () => FV,
      KZ: () => TV,
      HZ: () => PV,
      uZ: () => AV,
      sZ: () => NV,
      SZ: () => XV,
      IZ: () => MV,
      dZ: () => zV,
      OZ: () => GV,
      Vv: () => WV,
      ev: () => RV
    });
    class JV {
      __destroy_into_raw() {
        const VV = this.__wbg_ptr;
        return this.__wbg_ptr = 0, DV.unregister(this), VV
      }
      free() {
        const VV = this.__destroy_into_raw();
        qe.zoRH(VV, 0)
      }
      xv() {
        const VV = qe.LVMF(this.__wbg_ptr);
        if (VV[2]) throw ve(VV[1]);
        return VV[0] >>> 0
      }
      Jv() {
        return qe.LG9t(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const VV = qe.n6vb();
        return this.__wbg_ptr = VV, DV.register(this, this.__wbg_ptr, this), this
      }
      Yv() {
        return qe.hmk0(this.__wbg_ptr) >>> 0
      }
      Uv(VV) {
        const eV = qe.to0N(this.__wbg_ptr, VV);
        if (eV[2]) throw ve(eV[1]);
        return eV[0] >>> 0
      }
      yv(VV) {
        const eV = qe.uO8t(this.__wbg_ptr, VV);
        if (eV[2]) throw ve(eV[1]);
        return eV[0] >>> 0
      }
    }
    Symbol.dispose && (JV.prototype[Symbol.dispose] = JV.prototype.free);
    const YV = Object.freeze({
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
    class UV {
      __destroy_into_raw() {
        const VV = this.__wbg_ptr;
        return this.__wbg_ptr = 0, iV.unregister(this), VV
      }
      free() {
        const VV = this.__destroy_into_raw();
        qe.hsUl(VV, 0)
      }
      nv(VV, eV) {
        const xV = qe.h4zc(this.__wbg_ptr, VV, eV);
        if (xV[2]) throw ve(xV[1]);
        return xV[0] >>> 0
      }
      wv(VV) {
        const eV = qe.oR3a(this.__wbg_ptr, VV);
        if (eV[2]) throw ve(eV[1]);
        return eV[0] >>> 0
      }
      Zv() {
        qe.oJit(this.__wbg_ptr)
      }
      static vv() {
        return qe.lmMw() >>> 0
      }
      rv() {
        return qe.ZsPY(this.__wbg_ptr) >>> 0
      }
      kv() {
        const VV = qe.JCqU(this.__wbg_ptr);
        return 0 === VV[0] ? void 0 : VV[1]
      }
      bv() {
        return qe.SbNV(this.__wbg_ptr) >>> 0
      }
      Ev() {
        return qe.ELDk(this.__wbg_ptr) >>> 0
      }
      static Qv() {
        return qe.eGzj() >>> 0
      }
      constructor() {
        const VV = qe.IBF6();
        return this.__wbg_ptr = VV, iV.register(this, this.__wbg_ptr, this), this
      }
      Bv() {
        return qe.y2OQ(this.__wbg_ptr) >>> 0
      }
      jv() {
        return qe.gGgV(this.__wbg_ptr) >>> 0
      }
      qv() {
        return qe.iPwt(this.__wbg_ptr) >>> 0
      }
      pv(VV) {
        return qe.tcE1(this.__wbg_ptr, VV) >>> 0
      }
      reserve(VV, eV) {
        const xV = qe.No3z(this.__wbg_ptr, VV, eV);
        if (xV[1]) throw ve(xV[0])
      }
      Tv(VV, eV) {
        const xV = Qe(VV, qe.ENta),
          JV = te;
        qe.idKL(this.__wbg_ptr, xV, JV, eV)
      }
      text() {
        let VV, eV;
        try {
          const xV = qe.siE6(this.__wbg_ptr);
          return VV = xV[0], eV = xV[1], IV(xV[0], xV[1])
        } finally {
          qe.lxMR(VV, eV, 1)
        }
      }
    }
    Symbol.dispose && (UV.prototype[Symbol.dispose] = UV.prototype.free);
    class yV {
      __destroy_into_raw() {
        const VV = this.__wbg_ptr;
        return this.__wbg_ptr = 0, CV.unregister(this), VV
      }
      free() {
        const VV = this.__destroy_into_raw();
        qe.mbL9(VV, 0)
      }
      Av(VV, eV) {
        fV(eV, JV);
        const xV = qe.Pftq(this.__wbg_ptr, VV, eV.__wbg_ptr);
        if (xV[2]) throw ve(xV[1]);
        return xV[0] >>> 0
      }
      Nv() {
        const VV = qe.FKhY(this.__wbg_ptr);
        if (VV[1]) throw ve(VV[0])
      }
      Gv(VV, eV, xV, JV, YV, UV, yV, QV, nV, wV, ZV) {
        fV(VV, pV);
        const vV = qe.HhZ3(this.__wbg_ptr, VV.__wbg_ptr, eV, xV, JV, YV, UV, yV, QV, nV, wV, ZV);
        if (vV[2]) throw ve(vV[1]);
        return vV[0]
      }
      Wv() {
        const VV = qe.Hvj9(this.__wbg_ptr);
        var eV = mV(VV[0], VV[1]).slice();
        return qe.lxMR(VV[0], 8 * VV[1], 8), eV
      }
      Rv() {
        return qe.JPXP(this.__wbg_ptr) >>> 0
      }
      gv() {
        return qe.WELG(this.__wbg_ptr) >>> 0
      }
      Dv() {
        return qe.i1JO(this.__wbg_ptr) >>> 0
      }
      constructor(VV, eV, xV, JV, YV, UV, yV, pV) {
        const QV = qe.zuI0(VV, eV, xV, JV, YV, UV, yV, pV);
        if (QV[2]) throw ve(QV[1]);
        return this.__wbg_ptr = QV[0], CV.register(this, this.__wbg_ptr, this), this
      }
      av(VV) {
        fV(VV, JV);
        const eV = qe.BCxW(this.__wbg_ptr, VV.__wbg_ptr);
        if (eV[2]) throw ve(eV[1]);
        return eV[0] >>> 0
      }
      ov(VV) {
        const eV = qe.zUPo(this.__wbg_ptr, VV);
        if (eV[1]) throw ve(eV[0])
      }
      cv() {
        return qe.OfgE(this.__wbg_ptr) >>> 0
      }
      resume(VV, eV) {
        fV(VV, pV), fV(eV, JV);
        const xV = qe.J7EH(this.__wbg_ptr, VV.__wbg_ptr, eV.__wbg_ptr);
        if (xV[2]) throw ve(xV[1]);
        return xV[0] >>> 0
      }
      mv(VV) {
        const eV = qe.WoQC(this.__wbg_ptr, VV);
        if (eV[1]) throw ve(eV[0])
      }
      sv(VV, eV) {
        fV(eV, JV);
        const xV = qe.MdI7(this.__wbg_ptr, VV, eV.__wbg_ptr);
        if (xV[1]) throw ve(xV[0])
      }
      Ov(VV) {
        const eV = we(VV, qe.ENta),
          xV = te,
          JV = qe.rPmz(this.__wbg_ptr, eV, xV);
        if (JV[1]) throw ve(JV[0])
      }
      Mv(VV, eV, xV, JV, YV, UV) {
        const yV = qe.QemM(this.__wbg_ptr, VV, eV, xV, JV, YV, UV);
        if (yV[1]) throw ve(yV[0])
      }
      zv(VV, eV, xV, JV) {
        const YV = Qe(VV, qe.ENta),
          UV = te,
          yV = we(eV, qe.ENta),
          pV = te,
          QV = we(xV, qe.ENta),
          nV = te,
          wV = we(JV, qe.ENta),
          ZV = te,
          vV = qe.aIcP(this.__wbg_ptr, YV, UV, yV, pV, QV, nV, wV, ZV);
        if (vV[1]) throw ve(vV[0])
      }
      er(VV, eV) {
        fV(eV, JV);
        const xV = qe.GyJM(this.__wbg_ptr, VV, eV.__wbg_ptr);
        if (xV[1]) throw ve(xV[0])
      }
      Cv(VV, eV, xV) {
        const JV = qe.Ve3z(this.__wbg_ptr, VV, eV, xV);
        if (JV[1]) throw ve(JV[0])
      }
      Yr(VV, eV, xV, JV, YV, UV, yV, QV, nV, wV) {
        fV(VV, pV);
        return qe.Utkf(this.__wbg_ptr, VV.__wbg_ptr, eV, xV, JV, YV, UV, yV, QV, nV, wV)
      }
    }
    Symbol.dispose && (yV.prototype[Symbol.dispose] = yV.prototype.free);
    class pV {
      static __wrap(VV) {
        const eV = Object.create(pV.prototype);
        return eV.__wbg_ptr = VV, aV.register(eV, eV.__wbg_ptr, eV), eV
      }
      __destroy_into_raw() {
        const VV = this.__wbg_ptr;
        return this.__wbg_ptr = 0, aV.unregister(this), VV
      }
      free() {
        const VV = this.__destroy_into_raw();
        qe.uJ7U(VV, 0)
      }
      yr(VV) {
        const eV = qe.WE9K(this.__wbg_ptr, VV);
        if (eV[2]) throw ve(eV[1]);
        return eV[0] >>> 0
      }
      Qr(VV, eV, xV) {
        return qe.XiWD(this.__wbg_ptr, VV, eV, xV)
      }
      nr(VV, eV, xV) {
        return qe.Gr2l(this.__wbg_ptr, VV, eV, xV) >>> 0
      }
      wr(VV, eV, xV, JV) {
        return 0 !== qe.cT36(this.__wbg_ptr, VV, eV, xV, JV)
      }
      Zr() {
        qe.q1Fi(this.__wbg_ptr)
      }
      vr(VV) {
        const eV = qe.QxaI(this.__wbg_ptr, VV);
        if (eV[3]) throw ve(eV[2]);
        var xV = HV(eV[0], eV[1]).slice();
        return qe.lxMR(eV[0], 1 * eV[1], 1), xV
      }
      evict(VV, eV) {
        return qe.p8CK(this.__wbg_ptr, VV, eV) >>> 0
      }
      rr() {
        qe.uGio(this.__wbg_ptr)
      }
      kr(VV, eV, xV) {
        qe.a8A6(this.__wbg_ptr, VV, eV, xV)
      }
      br(VV) {
        const eV = qe.yRPq(this.__wbg_ptr, VV);
        if (eV[1]) throw ve(eV[0])
      }
      Er() {
        return qe.nyld(this.__wbg_ptr) >>> 0
      }
      Br() {
        return qe.c04e(this.__wbg_ptr) >>> 0
      }
      jr(VV, eV, xV) {
        qe.rSET(this.__wbg_ptr, VV, eV, xV)
      }
      qr(VV, eV, xV) {
        qe.zjkt(this.__wbg_ptr, VV, eV, xV)
      }
      tr() {
        return qe.fETt(this.__wbg_ptr) >>> 0
      }
      Fr() {
        return qe.HDBy(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const VV = qe.wE8J();
        return this.__wbg_ptr = VV, aV.register(this, this.__wbg_ptr, this), this
      }
      static Tr() {
        const VV = qe.jZOf();
        return pV.__wrap(VV)
      }
      Pr() {
        return qe.ubkj(this.__wbg_ptr) >>> 0
      }
      Ar() {
        return qe.yAxm(this.__wbg_ptr) >>> 0
      }
      Nr(VV, eV, xV, JV) {
        const YV = qe.AWJF(this.__wbg_ptr, VV, eV, xV, JV);
        if (YV[1]) throw ve(YV[0])
      }
      Xr() {
        return qe.IDbG(this.__wbg_ptr) >>> 0
      }
      Mr() {
        return qe.o0l8(this.__wbg_ptr) >>> 0
      }
      zr(VV, eV, xV, JV) {
        qe.vw9z(this.__wbg_ptr, VV, eV, xV, JV)
      }
      Gr(VV) {
        qe.aIdI(this.__wbg_ptr, VV)
      }
      Rr(VV, eV, xV, JV, YV) {
        const UV = ne(eV, qe.ENta),
          yV = te,
          pV = Qe(xV, qe.ENta),
          QV = te,
          nV = we(JV, qe.ENta),
          wV = te,
          ZV = qe.k3If(this.__wbg_ptr, VV, UV, yV, pV, QV, nV, wV, YV);
        if (ZV[1]) throw ve(ZV[0])
      }
      Wr(VV, eV, xV, JV) {
        const YV = ne(VV, qe.ENta),
          UV = te,
          yV = Qe(eV, qe.ENta),
          pV = te,
          QV = we(xV, qe.ENta),
          nV = te,
          wV = ne(JV, qe.ENta),
          ZV = te,
          vV = qe.tD9D(this.__wbg_ptr, YV, UV, yV, pV, QV, nV, wV, ZV);
        if (vV[1]) throw ve(vV[0])
      }
      hr(VV) {
        const eV = ne(VV, qe.ENta),
          xV = te,
          JV = qe.lVaV(this.__wbg_ptr, eV, xV);
        if (JV[1]) throw ve(JV[0])
      }
      lr() {
        return qe.weVF(this.__wbg_ptr) >>> 0
      }
      Lr(VV) {
        const eV = qe.GTWz(this.__wbg_ptr, VV);
        if (eV[2]) throw ve(eV[1]);
        return eV[0] >>> 0
      }
      steer() {
        return qe.a8rz(this.__wbg_ptr) >>> 0
      }
      mr() {
        const VV = qe.WzxA(this.__wbg_ptr);
        var eV = mV(VV[0], VV[1]).slice();
        return qe.lxMR(VV[0], 8 * VV[1], 8), eV
      }
      Kr() {
        return qe.OMf4(this.__wbg_ptr) >>> 0
      }
      lv() {
        const VV = qe.CFcp(this.__wbg_ptr);
        var eV, xV, JV = (eV = VV[0], xV = VV[1], eV >>>= 0, (null !== SV && 0 !== SV.byteLength || (SV = new Int32Array(qe.memory.buffer)), SV).subarray(eV / 4, eV / 4 + xV)).slice();
        return qe.lxMR(VV[0], 4 * VV[1], 4), JV
      }
    }
    Symbol.dispose && (pV.prototype[Symbol.dispose] = pV.prototype.free);
    class QV {
      __destroy_into_raw() {
        const VV = this.__wbg_ptr;
        return this.__wbg_ptr = 0, oV.unregister(this), VV
      }
      free() {
        const VV = this.__destroy_into_raw();
        qe.xqnN(VV, 0)
      }
      NZ(VV) {
        const eV = Qe(VV, qe.ENta),
          xV = te,
          JV = qe.qVGw(this.__wbg_ptr, eV, xV);
        if (JV[1]) throw ve(JV[0])
      }
      Hr() {
        return qe.Cmjt(this.__wbg_ptr) >>> 0
      }
      ur() {
        return qe.b6oR(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const VV = qe.hQQv();
        return this.__wbg_ptr = VV, oV.register(this, this.__wbg_ptr, this), this
      }
      run(VV, eV) {
        fV(VV, pV);
        const xV = qe.X1Wt(this.__wbg_ptr, VV.__wbg_ptr, eV);
        if (xV[2]) throw ve(xV[1]);
        return xV[0] >>> 0
      }
      sr(VV) {
        const eV = Qe(VV, qe.ENta),
          xV = te;
        qe.cf7w(this.__wbg_ptr, eV, xV)
      }
      Sr(VV) {
        const eV = Qe(VV, qe.ENta),
          xV = te;
        qe.JRIW(this.__wbg_ptr, eV, xV)
      }
    }
    Symbol.dispose && (QV.prototype[Symbol.dispose] = QV.prototype.free);
    class nV {
      __destroy_into_raw() {
        const VV = this.__wbg_ptr;
        return this.__wbg_ptr = 0, cV.unregister(this), VV
      }
      free() {
        const VV = this.__destroy_into_raw();
        qe.jSlG(VV, 0)
      }
      dr(VV, eV) {
        const xV = ne(VV, qe.ENta),
          JV = te;
        return qe.QLCP(this.__wbg_ptr, xV, JV, eV) >>> 0
      }
      Or(VV, eV, xV) {
        fV(VV, pV);
        const JV = ne(xV, qe.ENta),
          YV = te,
          UV = qe.w3Ap(this.__wbg_ptr, VV.__wbg_ptr, eV, JV, YV);
        if (UV[2]) throw ve(UV[1]);
        return UV[0] >>> 0
      }
      Ir(VV) {
        return qe.sYmc(this.__wbg_ptr, VV) >>> 0
      }
      constructor() {
        const VV = qe.GD1X();
        return this.__wbg_ptr = VV, cV.register(this, this.__wbg_ptr, this), this
      }
      scan(VV, eV) {
        fV(VV, pV);
        const xV = qe.pih3(this.__wbg_ptr, VV.__wbg_ptr, eV);
        if (xV[2]) throw ve(xV[1]);
        return xV[0] >>> 0
      }
      Jk(VV) {
        const eV = ne(VV, qe.ENta),
          xV = te;
        qe.qaDl(this.__wbg_ptr, eV, xV)
      }
      xk() {
        return qe.rt7n(this.__wbg_ptr) >>> 0
      }
      Vk() {
        return qe.usMJ(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (nV.prototype[Symbol.dispose] = nV.prototype.free);
    class wV {
      __destroy_into_raw() {
        const VV = this.__wbg_ptr;
        return this.__wbg_ptr = 0, hV.unregister(this), VV
      }
      free() {
        const VV = this.__destroy_into_raw();
        qe.YBW9(VV, 0)
      }
      Uk(VV) {
        const eV = qe.F9HB(this.__wbg_ptr, VV);
        if (eV[2]) throw ve(eV[1]);
        return eV[0] >>> 0
      }
      compute(VV, eV, xV, JV) {
        var YV = ye(JV) ? 0 : Ze(JV, qe.ENta, qe.ysPp),
          UV = te;
        const yV = qe.kXjw(this.__wbg_ptr, VV, ye(eV) ? Number.MAX_SAFE_INTEGER : eV | 0, xV, YV, UV);
        if (yV[2]) throw ve(yV[1]);
        return yV[0] >>> 0
      }
      Qk(VV) {
        const eV = Ze(VV, qe.ENta, qe.ysPp),
          xV = te;
        qe.jATI(this.__wbg_ptr, eV, xV)
      }
      nk() {
        return qe.SFrn(this.__wbg_ptr)
      }
      wk(VV) {
        return qe.TguD(this.__wbg_ptr, VV) >>> 0
      }
      Zk() {
        return qe.iPgH(this.__wbg_ptr) >>> 0
      }
      vk() {
        return qe.ebAU(this.__wbg_ptr) >>> 0
      }
      rk(VV, eV) {
        const xV = qe.cVPI(this.__wbg_ptr, VV, eV);
        if (xV[1]) throw ve(xV[0])
      }
      kk() {
        return qe.N7zK(this.__wbg_ptr) >>> 0
      }
      bk() {
        return qe.mBoq(this.__wbg_ptr) >>> 0
      }
      Ek() {
        return qe.pmtn(this.__wbg_ptr) >>> 0
      }
      yk(VV, eV, xV) {
        const JV = Qe(VV, qe.ENta),
          YV = te,
          UV = Qe(eV, qe.ENta),
          yV = te,
          pV = qe.NkvX(this.__wbg_ptr, JV, YV, UV, yV, xV);
        if (pV[1]) throw ve(pV[0])
      }
      jk() {
        return qe.sQCx(this.__wbg_ptr) >>> 0
      }
      mesh(VV, eV, xV, JV, YV) {
        const UV = qe.mXVZ(this.__wbg_ptr, VV, eV, xV, JV, YV);
        if (UV[2]) throw ve(UV[1]);
        return UV[0] >>> 0
      }
      constructor(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV, BV, jV, qV) {
        const tV = pe(VV, qe.ENta),
          FV = te,
          TV = we(eV, qe.ENta),
          PV = te,
          AV = Qe(xV, qe.ENta),
          NV = te,
          XV = ne(JV, qe.ENta),
          MV = te,
          zV = ne(YV, qe.ENta),
          GV = te,
          WV = Qe(UV, qe.ENta),
          RV = te,
          gV = Qe(yV, qe.ENta),
          DV = te,
          iV = we(pV, qe.ENta),
          CV = te,
          aV = we(QV, qe.ENta),
          oV = te,
          cV = ne(nV, qe.ENta),
          lV = te;
        var LV = ye(wV) ? 0 : pe(wV, qe.ENta),
          fV = te;
        const mV = Qe(ZV, qe.ENta),
          KV = te,
          HV = ne(vV, qe.ENta),
          uV = te;
        var sV = ye(rV) ? 0 : ne(rV, qe.ENta),
          SV = te;
        const IV = we(kV, qe.ENta),
          dV = te,
          OV = qe.P1Ln(tV, FV, TV, PV, AV, NV, XV, MV, zV, GV, WV, RV, gV, DV, iV, CV, aV, oV, cV, lV, LV, fV, mV, KV, HV, uV, sV, SV, IV, dV, bV, EV, BV, jV, qV);
        if (OV[2]) throw ve(OV[1]);
        return this.__wbg_ptr = OV[0], hV.register(this, this.__wbg_ptr, this), this
      }
      Bk(VV, eV) {
        const xV = Qe(VV, qe.ENta),
          JV = te,
          YV = qe.uROo(this.__wbg_ptr, xV, JV, eV);
        if (YV[3]) throw ve(YV[2]);
        var UV = HV(YV[0], YV[1]).slice();
        return qe.lxMR(YV[0], 1 * YV[1], 1), UV
      }
      qk(VV) {
        qe.C5wM(this.__wbg_ptr, ye(VV) ? 16777215 : VV)
      }
      tk(VV) {
        return qe.djKU(this.__wbg_ptr, VV) >>> 0
      }
      Tk() {
        return qe.KysV(this.__wbg_ptr) >>> 0
      }
      Fk() {
        const VV = qe.yggE(this.__wbg_ptr);
        if (VV[2]) throw ve(VV[1]);
        return 0 !== VV[0]
      }
      Pk() {
        return qe.kr12(this.__wbg_ptr) >>> 0
      }
      Ak() {
        return qe.W8hx(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (wV.prototype[Symbol.dispose] = wV.prototype.free);
    class ZV {
      __destroy_into_raw() {
        const VV = this.__wbg_ptr;
        return this.__wbg_ptr = 0, lV.unregister(this), VV
      }
      free() {
        const VV = this.__destroy_into_raw();
        qe.CdeI(VV, 0)
      }
      compute(VV, eV, xV, JV) {
        var YV = ye(JV) ? 0 : Ze(JV, qe.ENta, qe.ysPp),
          UV = te;
        const yV = qe.Xh5r(this.__wbg_ptr, VV, ye(eV) ? Number.MAX_SAFE_INTEGER : eV | 0, xV, YV, UV);
        if (yV[2]) throw ve(yV[1]);
        return yV[0] >>> 0
      }
      Qk(VV) {
        const eV = Ze(VV, qe.ENta, qe.ysPp),
          xV = te;
        qe.YCuI(this.__wbg_ptr, eV, xV)
      }
      bk() {
        return qe.oLLB(this.__wbg_ptr) >>> 0
      }
      Ek() {
        return qe.fsJY(this.__wbg_ptr) >>> 0
      }
      Nk(VV) {
        const eV = qe.C6vo(this.__wbg_ptr, VV);
        if (eV[2]) throw ve(eV[1]);
        return eV[0] >>> 0
      }
      constructor(VV, eV, xV, JV, YV, UV) {
        const yV = pe(VV, qe.ENta),
          pV = te,
          QV = we(eV, qe.ENta),
          nV = te,
          wV = Qe(xV, qe.ENta),
          ZV = te,
          vV = ne(JV, qe.ENta),
          rV = te,
          kV = qe.Ruxt(yV, pV, QV, nV, wV, ZV, vV, rV, YV, UV);
        if (kV[2]) throw ve(kV[1]);
        return this.__wbg_ptr = kV[0], lV.register(this, this.__wbg_ptr, this), this
      }
      Tk() {
        return qe.kEM8(this.__wbg_ptr) >>> 0
      }
      Fk() {
        const VV = qe.h3YS(this.__wbg_ptr);
        if (VV[2]) throw ve(VV[1]);
        return 0 !== VV[0]
      }
      Pk() {
        return qe.zlIT(this.__wbg_ptr) >>> 0
      }
    }

    function vV() {
      const VV = qe.w1cB();
      var eV = KV(VV[0], VV[1]).slice();
      return qe.lxMR(VV[0], 4 * VV[1], 4), eV
    }

    function rV(VV, eV) {
      let xV, JV;
      try {
        const YV = pe(VV, qe.ENta),
          UV = te,
          yV = Ze(eV, qe.ENta, qe.ysPp),
          pV = te,
          QV = qe.Scao(YV, UV, yV, pV);
        return xV = QV[0], JV = QV[1], IV(QV[0], QV[1])
      } finally {
        qe.lxMR(xV, JV, 1)
      }
    }

    function kV() {
      const VV = qe.f4AX();
      var eV = KV(VV[0], VV[1]).slice();
      return qe.lxMR(VV[0], 4 * VV[1], 4), eV
    }

    function bV(VV) {
      return 0 !== qe.qT99(VV)
    }

    function EV(VV, eV) {
      const xV = Ze(VV, qe.ENta, qe.ysPp),
        JV = te,
        YV = qe.gfKC(xV, JV, eV);
      if (YV[1]) throw ve(YV[0])
    }

    function BV() {
      qe.Yjra()
    }

    function jV() {
      return qe.lg17() >>> 0
    }

    function qV(VV) {
      return 0 !== qe.NUTp(VV)
    }

    function tV(VV) {
      return 0 !== qe.BCFg(VV)
    }

    function FV(VV) {
      qe.btD5(VV)
    }

    function TV() {
      return qe.b0cD() >>> 0
    }

    function PV() {
      return qe.bdZZ() >>> 0
    }

    function AV() {
      return 0 !== qe.a1RV()
    }

    function NV() {
      const VV = qe.LHZQ();
      var eV = KV(VV[0], VV[1]).slice();
      return qe.lxMR(VV[0], 4 * VV[1], 4), eV
    }

    function XV() {
      const VV = qe.hXAS();
      var eV = KV(VV[0], VV[1]).slice();
      return qe.lxMR(VV[0], 4 * VV[1], 4), eV
    }

    function MV() {
      const VV = qe.ssh2();
      var eV = KV(VV[0], VV[1]).slice();
      return qe.lxMR(VV[0], 4 * VV[1], 4), eV
    }

    function zV() {
      return qe.tako() >>> 0
    }

    function GV() {
      qe.Y35V()
    }

    function WV() {
      let VV, eV;
      try {
        const xV = qe.UMtW();
        return VV = xV[0], eV = xV[1], IV(xV[0], xV[1])
      } finally {
        qe.lxMR(VV, eV, 1)
      }
    }

    function RV(VV) {
      qe.WHhU(LV(VV))
    }

    function gV() {
      return {
        __proto__: null,
        YE4x: {
          __proto__: null,
          mLQO: function(VV, eV) {
            return LV(Error(IV(VV, eV)))
          },
          nuNj: function(VV, eV) {
            throw new Error(IV(VV, eV))
          },
          tqsH: function(VV) {
            Je(VV).call()
          },
          bJ0J: function(VV, eV) {
            console.error(IV(VV, eV))
          },
          wXR8: function() {
            return performance.now()
          },
          TnBF: function(VV) {
            ve(VV)
          }
        }
      }
    }
    Symbol.dispose && (ZV.prototype[Symbol.dispose] = ZV.prototype.free);
    const DV = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((VV => qe.zoRH(VV, 1))),
      iV = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((VV => qe.hsUl(VV, 1))),
      CV = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((VV => qe.mbL9(VV, 1))),
      aV = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((VV => qe.uJ7U(VV, 1))),
      oV = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((VV => qe.xqnN(VV, 1))),
      cV = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((VV => qe.jSlG(VV, 1))),
      hV = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((VV => qe.YBW9(VV, 1))),
      lV = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((VV => qe.CdeI(VV, 1)));

    function LV(VV) {
      Ue === Ye.length && Ye.push(Ye.length + 1);
      const eV = Ue;
      return Ue = Ye[eV], Ye[eV] = VV, eV
    }

    function fV(VV, eV) {
      if (!(VV instanceof eV)) throw new Error(`expected instance of ${eV.name}`)
    }

    function mV(VV, eV) {
      return VV >>>= 0, sV().subarray(VV / 8, VV / 8 + eV)
    }

    function KV(VV, eV) {
      return VV >>>= 0, Ve().subarray(VV / 4, VV / 4 + eV)
    }

    function HV(VV, eV) {
      return VV >>>= 0, xe().subarray(VV / 1, VV / 1 + eV)
    }
    let uV = null;

    function sV() {
      return null !== uV && 0 !== uV.byteLength || (uV = new Float64Array(qe.memory.buffer)), uV
    }
    let SV = null;

    function IV(VV, eV) {
      return function(VV, eV) {
        be += eV, be >= ke && (re = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), re.decode(), be = eV);
        return re.decode(xe().subarray(VV, VV + eV))
      }(VV >>> 0, eV)
    }
    let dV = null;
    let OV = null;

    function Ve() {
      return null !== OV && 0 !== OV.byteLength || (OV = new Uint32Array(qe.memory.buffer)), OV
    }
    let ee = null;

    function xe() {
      return null !== ee && 0 !== ee.byteLength || (ee = new Uint8Array(qe.memory.buffer)), ee
    }

    function Je(VV) {
      return Ye[VV]
    }
    let Ye = new Array(1024).fill(void 0);
    Ye.push(void 0, null, !0, !1);
    let Ue = Ye.length;

    function ye(VV) {
      return void 0 === VV || null === VV
    }

    function pe(VV, eV) {
      const xV = eV(2 * VV.length, 2) >>> 0;
      return (null !== dV && 0 !== dV.byteLength || (dV = new Uint16Array(qe.memory.buffer)), dV).set(VV, xV / 2), te = VV.length, xV
    }

    function Qe(VV, eV) {
      const xV = eV(4 * VV.length, 4) >>> 0;
      return Ve().set(VV, xV / 4), te = VV.length, xV
    }

    function ne(VV, eV) {
      const xV = eV(1 * VV.length, 1) >>> 0;
      return xe().set(VV, xV / 1), te = VV.length, xV
    }

    function we(VV, eV) {
      const xV = eV(8 * VV.length, 8) >>> 0;
      return sV().set(VV, xV / 8), te = VV.length, xV
    }

    function Ze(VV, eV, xV) {
      if (void 0 === xV) {
        const xV = Ee.encode(VV),
          JV = eV(xV.length, 1) >>> 0;
        return xe().subarray(JV, JV + xV.length).set(xV), te = xV.length, JV
      }
      let JV = VV.length,
        YV = eV(JV, 1) >>> 0;
      const UV = xe();
      let yV = 0;
      for (; yV < JV; yV++) {
        const eV = VV.charCodeAt(yV);
        if (eV > 127) break;
        UV[YV + yV] = eV
      }
      if (yV !== JV) {
        0 !== yV && (VV = VV.slice(yV)), YV = xV(YV, JV, JV = yV + 3 * VV.length, 1) >>> 0;
        const eV = xe().subarray(YV + yV, YV + JV);
        yV += Ee.encodeInto(VV, eV).written, YV = xV(YV, JV, yV, 1) >>> 0
      }
      return te = yV, YV
    }

    function ve(VV) {
      const eV = Je(VV);
      return function(VV) {
        VV < 1028 || (Ye[VV] = Ue, Ue = VV)
      }(VV), eV
    }
    let re = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    re.decode();
    const ke = 2146435072;
    let be = 0;
    const Ee = new TextEncoder;
    "encodeInto" in Ee || (Ee.encodeInto = function(VV, eV) {
      const xV = Ee.encode(VV);
      return eV.set(xV), {
        read: VV.length,
        written: xV.length
      }
    });
    let Be, je, qe, te = 0;

    function Fe(VV, eV) {
      return je = VV, qe = VV.exports, Be = eV, uV = null, SV = null, dV = null, OV = null, ee = null, qe.GgrN(), qe
    }

    function Te(VV) {
      if (void 0 !== qe) return qe;
      void 0 !== VV && (Object.getPrototypeOf(VV) === Object.prototype ? ({
        module: VV
      } = VV) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const eV = gV();
      VV instanceof WebAssembly.Module || (VV = new WebAssembly.Module(VV));
      return Fe(new WebAssembly.Instance(VV, eV), VV)
    }
    async function Pe(VV) {
      if (void 0 !== qe) return qe;
      void 0 !== VV && (Object.getPrototypeOf(VV) === Object.prototype ? ({
        module_or_path: VV
      } = VV) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const eV = gV();
      ("string" === typeof VV || "function" === typeof Request && VV instanceof Request || "function" === typeof URL && VV instanceof URL) && (VV = fetch(VV));
      const {
        instance: xV,
        module: JV
      } = await async function(VV, eV) {
        if ("function" === typeof Response && VV instanceof Response) {
          if (!VV.ok) throw new Error(`failed to fetch Wasm: ${VV.status} ${VV.statusText} fetching '${VV.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(VV, eV)
          } catch (xV) {
            if (! function(VV) {
                switch (VV) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(VV.type) || "application/wasm" === VV.headers.get("Content-Type")) throw xV;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", xV)
          }
          const JV = await VV.arrayBuffer();
          return await WebAssembly.instantiate(JV, eV)
        } {
          const xV = await WebAssembly.instantiate(VV, eV);
          return xV instanceof WebAssembly.Instance ? {
            instance: xV,
            module: VV
          } : xV
        }
      }(await VV, eV);
      return Fe(xV, JV)
    }
  },
  37458: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => yV,
      g: () => pV,
      k: () => QV
    });
    var JV = xV(37467),
      YV = xV(3194),
      UV = xV(37469);
    const yV = {
      name: YV.e,
      url: () => new xV.U(xV(37475)),
      init: JV.default,
      bindings: JV
    };

    function pV() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yV,
        eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yV,
        xV = arguments.length > 2 ? arguments[2] : void 0;
      return (0, UV.h)(VV, eV, xV)
    }

    function QV(VV) {
      return (0, YV.L)((() => VV), JV, yV)
    }
  },
  37444: (VV, eV, xV) => {
    function JV(VV, eV) {
      return new Error(`${VV}: ${eV instanceof Error?`${eV.name}: ${eV.message}`:String(eV)}`, {
        cause: eV
      })
    }
    xV.d(eV, {
      d: () => JV
    })
  },
  37442: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => yV,
      g: () => QV
    });
    var JV = xV(3196),
      YV = xV(7178),
      UV = xV(37444);

    function yV() {
      return new URL(new xV.U(xV(37450)).href, globalThis.location?.href).href
    }
    let pV = null;

    function QV() {
      return pV ??= (async () => (0, JV.G)(new URL(yV()), (0, YV.e)("bloxd_wasm_textures")))().catch((VV => {
        throw (0, UV.d)((0, JV.J)(VV), VV)
      })), pV
    }
  },
  37422: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV,
      e: () => UV,
      i: () => QV,
      j: () => yV,
      l: () => YV
    });
    const JV = /^alloc_failed (\d+) bytes$/;

    function YV(VV, eV) {
      return UV(VV, eV) ? `trap=alloc_failed ${eV} bytes` : `trap=${VV}`
    }

    function UV(VV, eV) {
      return "unreachable" === VV && eV > 0
    }

    function yV(VV, eV, xV) {
      const JV = function(VV) {
        return VV instanceof WebAssembly.RuntimeError ? /unreachable/i.test(VV.message) ? "unreachable" : /out of bounds/i.test(VV.message) ? "out_of_bounds" : "runtime_error" : (VV instanceof RangeError || VV instanceof Error && "InternalError" === VV.name) && /call stack|recursion/i.test(VV.message) ? "stack_overflow" : "js_error"
      }(VV);
      if ("unreachable" !== JV) return {
        kind: JV,
        panic: null,
        refusedBytes: 0
      };
      const YV = eV(),
        UV = xV();
      return {
        kind: JV,
        panic: UV > 0 ? null : YV,
        refusedBytes: UV
      }
    }
    const pV = 300;

    function QV(VV) {
      return VV.replace(/\s*\n\s*/g, " / ").slice(0, pV)
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);