export const id = 219;
export const ids = [218, 219];
export const modules = {
  35287: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      CAPPED_COUNTS_VISIT_CAP: () => ar,
      reportCappedWasmFailure: () => fr,
      reportUncappedWasmFailure: () => Ir,
      reportWasmCrash: () => Wr,
      reportWasmFailure: () => jr
    });
    var Zr = Qr(1912);

    function Wr(rr) {
      (0, Zr.reportClientError)("wasm_load", rr.message, rr.code)
    }
    const ar = Zr.MAX_ERRORS_PER_VISIT - 4;

    function jr(rr, Sr, Qr, Wr) {
      (0, Zr.reportClientError)(rr, Sr, Qr, !1, Zr.MAX_ERRORS_PER_VISIT, {
        context: Wr
      })
    }

    function Ir(rr, Sr, Qr, Wr) {
      (0, Zr.reportClientError)(rr, Sr, Qr, !1, 1 / 0, {
        context: Wr
      })
    }

    function fr(rr, Sr, Qr, Wr) {
      (0, Zr.reportClientError)(rr, Sr, Qr, !1, ar, {
        context: Wr
      })
    }
  },
  37508: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => yr,
      f: () => vr,
      j: () => Or,
      m: () => Br
    });
    var Zr = Qr(37533),
      Wr = Qr(2396),
      ar = Qr(37550),
      jr = Qr(2398),
      Ir = Qr(35287),
      fr = Qr(4026),
      Er = Qr(4434),
      pr = Qr(4425),
      xr = Qr(37514),
      mr = Qr(1912),
      Nr = Qr(37522),
      Ur = Qr(37529),
      tr = Qr(2393);
    let hr = !1;
    const zr = 40;
    var Yr = Qr(335),
      nr = Qr(4832);
    const er = "bloxdWasmFailureReported";

    function Kr() {
      return "undefined" === typeof WebAssembly
    }

    function yr() {
      return (0, Zr.i)()
    }

    function Br() {
      if (Kr()) return "this browser has no WebAssembly";
      const rr = (0, Wr.l)();
      return "compile" === rr || "instantiate" === rr ? `the core wasm didn't load here (${(0,Wr.g)()})` : null
    }
    async function Tr(rr) {
      return await (0, Yr.p)(), await (0, ar.g)(ar.d, void 0, rr)
    }

    function vr() {
      Kr() || (0, nr.g)((() => {
        Tr()
      }))
    }

    function Or() {
      if (Kr()) return async () => ((0, fr.j)("unsupported", 0), Lr("unsupported", "This browser has no WebAssembly"), !1);
      const rr = {
        reloadFailedDownload: !0
      };
      return Tr(rr), async () => {
        var Sr;
        const Qr = performance.now();
        await Tr(rr);
        const Zr = (performance.now() - Qr) / 1e3;
        if ((0, Wr.R)()) return (0, fr.j)("ready", Zr), hr || (hr = !0, (0, Wr.Y)((() => {
          if ("call" !== (0, Wr.l)()) return;
          const rr = (0, Wr.k)(),
            Sr = (0, xr.j)(rr, Wr.B, Wr.gb),
            Qr = (0, Wr.s)().buffer.byteLength,
            Zr = (0, xr.e)(Sr.kind, Sr.refusedBytes),
            ar = Zr ? "alloc_failed" : Sr.kind,
            jr = (0, Nr.i)(Qr),
            Ir = Zr ? `_r${Math.floor(Math.log2(Sr.refusedBytes))}` : "",
            fr = (0, tr.b)();
          null === fr && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const Er = new Error((0, Ur.e)(rr, Qr, Sr));
          if (rr instanceof Error && void 0 !== rr.stack) {
            const Sr = rr.stack.split("\n"),
              Qr = Sr.length > zr ? [...Sr.slice(0, zr / 2), ...Sr.slice(-zr / 2)] : Sr;
            Er.stack = Qr.join("\n")
          }(0, mr.reportClientError)("wasm_load", Er, `wasm_call_${ar}_${null!==fr&&void 0!==fr?fr:"unnamed"}_m${jr}${Ir}`)
        }))), (0, jr.O)(ar.d.url()) && (0, Ir.reportCappedWasmFailure)("wasm_load", Er.e.message, Er.e.code), !0;
        const Yr = pr.e[null !== (Sr = (0, Wr.l)()) && void 0 !== Sr ? Sr : "call"];
        return (0, fr.j)(Yr, Zr), Lr(Yr, (0, Wr.g)()), !1
      }
    }

    function Lr(rr, Sr) {
      (0, pr.k)(er, `Bloxd wasm ${rr}, so the game can't start: ${Sr}`, Sr, rr)
    }
  },
  37573: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/bloxd_wasm_bg.e6e79e6510291a686e28.wasm"
  },
  37542: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/bloxd_wasm_textures_bg.c3cd01fe42e917fde2ee.wasm"
  },
  37559: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      Or: () => Zr,
      EnvelopeKind: () => Wr,
      ES: () => ar,
      PhysicsEngine: () => jr,
      US: () => Ir,
      PS: () => fr,
      AS: () => Er,
      XQ: () => pr,
      PQ: () => xr,
      HQ: () => mr,
      Za: () => Nr,
      xf: () => Ur,
      BE: () => tr,
      HE: () => hr,
      default: () => BS,
      initSync: () => yS,
      ip: () => zr,
      tx: () => Yr,
      Rx: () => nr,
      gx: () => er,
      Cx: () => Kr,
      Mx: () => yr,
      Gx: () => Br,
      kx: () => Tr,
      Ax: () => vr,
      Vx: () => Or,
      ix: () => Lr,
      wx: () => lr,
      Fx: () => Xr,
      bx: () => Pr,
      Jx: () => Hr
    });
    class Zr {
      __destroy_into_raw() {
        const rr = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Rr.unregister(this), rr
      }
      free() {
        const rr = this.__destroy_into_raw();
        nS.orzO(rr, 0)
      }
      Dx() {
        const rr = nS.GWfh(this.__wbg_ptr);
        if (rr[2]) throw mS(rr[1]);
        return rr[0] >>> 0
      }
      sx() {
        return nS.CaPz(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const rr = nS.LOSB();
        return this.__wbg_ptr = rr, Rr.register(this, this.__wbg_ptr, this), this
      }
      rm() {
        return nS.QYrF(this.__wbg_ptr) >>> 0
      }
      Sm(rr) {
        const Sr = nS.VriV(this.__wbg_ptr, rr);
        if (Sr[2]) throw mS(Sr[1]);
        return Sr[0] >>> 0
      }
      Qm(rr) {
        const Sr = nS.CjPy(this.__wbg_ptr, rr);
        if (Sr[2]) throw mS(Sr[1]);
        return Sr[0] >>> 0
      }
    }
    Symbol.dispose && (Zr.prototype[Symbol.dispose] = Zr.prototype.free);
    const Wr = Object.freeze({
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
    class ar {
      __destroy_into_raw() {
        const rr = this.__wbg_ptr;
        return this.__wbg_ptr = 0, gr.unregister(this), rr
      }
      free() {
        const rr = this.__destroy_into_raw();
        nS.gnHJ(rr, 0)
      }
      am(rr, Sr) {
        const Qr = nS.T08K(this.__wbg_ptr, rr, Sr);
        if (Qr[2]) throw mS(Qr[1]);
        return Qr[0] >>> 0
      }
      jm(rr) {
        const Sr = nS.fwe4(this.__wbg_ptr, rr);
        if (Sr[2]) throw mS(Sr[1]);
        return Sr[0] >>> 0
      }
      Im() {
        nS.kxig(this.__wbg_ptr)
      }
      static fm() {
        return nS.u7is() >>> 0
      }
      Em() {
        return nS.DVZ4(this.__wbg_ptr) >>> 0
      }
      pm() {
        const rr = nS.JOU4(this.__wbg_ptr);
        return 0 === rr[0] ? void 0 : rr[1]
      }
      xm() {
        return nS.oS0i(this.__wbg_ptr) >>> 0
      }
      Nm() {
        return nS.vfyi(this.__wbg_ptr) >>> 0
      }
      static Wm() {
        return nS.LiPS() >>> 0
      }
      constructor() {
        const rr = nS.g4Si();
        return this.__wbg_ptr = rr, gr.register(this, this.__wbg_ptr, this), this
      }
      Um() {
        return nS.IfIl(this.__wbg_ptr) >>> 0
      }
      hm() {
        return nS.za7z(this.__wbg_ptr) >>> 0
      }
      zm() {
        return nS.fHZ5(this.__wbg_ptr) >>> 0
      }
      Zm(rr) {
        return nS.Bcmn(this.__wbg_ptr, rr) >>> 0
      }
      reserve(rr, Sr) {
        const Qr = nS.nDI8(this.__wbg_ptr, rr, Sr);
        if (Qr[1]) throw mS(Qr[0])
      }
      Km(rr, Sr) {
        const Qr = fS(rr, nS.M7if),
          Zr = eS;
        nS.SK35(this.__wbg_ptr, Qr, Zr, Sr)
      }
      text() {
        let rr, Sr;
        try {
          const Qr = nS.pSeJ(this.__wbg_ptr);
          return rr = Qr[0], Sr = Qr[1], dr(Qr[0], Qr[1])
        } finally {
          nS.WVqq(rr, Sr, 1)
        }
      }
    }
    Symbol.dispose && (ar.prototype[Symbol.dispose] = ar.prototype.free);
    class jr {
      __destroy_into_raw() {
        const rr = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Cr.unregister(this), rr
      }
      free() {
        const rr = this.__destroy_into_raw();
        nS.CBI0(rr, 0)
      }
      Bm(rr, Sr) {
        wr(Sr, Zr);
        const Qr = nS.QT7A(this.__wbg_ptr, rr, Sr.__wbg_ptr);
        if (Qr[2]) throw mS(Qr[1]);
        return Qr[0] >>> 0
      }
      Tm() {
        const rr = nS.qgvm(this.__wbg_ptr);
        if (rr[1]) throw mS(rr[0])
      }
      Xm(rr, Sr, Qr, Zr, Wr, ar, jr, fr, Er, pr, xr) {
        wr(rr, Ir);
        const mr = nS.q8II(this.__wbg_ptr, rr.__wbg_ptr, Sr, Qr, Zr, Wr, ar, jr, fr, Er, pr, xr);
        if (mr[2]) throw mS(mr[1]);
        return mr[0]
      }
      Pm() {
        const rr = nS.yjDJ(this.__wbg_ptr);
        var Sr = cr(rr[0], rr[1]).slice();
        return nS.WVqq(rr[0], 8 * rr[1], 8), Sr
      }
      Hm() {
        return nS.OHZF(this.__wbg_ptr) >>> 0
      }
      qm() {
        return nS.D4lz(this.__wbg_ptr) >>> 0
      }
      Rm() {
        return nS.Sb1j(this.__wbg_ptr) >>> 0
      }
      constructor(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
        const fr = nS.ernP(rr, Sr, Qr, Zr, Wr, ar, jr, Ir);
        if (fr[2]) throw mS(fr[1]);
        return this.__wbg_ptr = fr[0], Cr.register(this, this.__wbg_ptr, this), this
      }
      Mm(rr) {
        wr(rr, Zr);
        const Sr = nS.szMB(this.__wbg_ptr, rr.__wbg_ptr);
        if (Sr[2]) throw mS(Sr[1]);
        return Sr[0] >>> 0
      }
      Gm(rr) {
        const Sr = nS.npnV(this.__wbg_ptr, rr);
        if (Sr[1]) throw mS(Sr[0])
      }
      km() {
        return nS.nGex(this.__wbg_ptr) >>> 0
      }
      resume(rr, Sr) {
        wr(rr, Ir), wr(Sr, Zr);
        const Qr = nS.z0rK(this.__wbg_ptr, rr.__wbg_ptr, Sr.__wbg_ptr);
        if (Qr[2]) throw mS(Qr[1]);
        return Qr[0] >>> 0
      }
      Fm(rr) {
        const Sr = nS.iWSS(this.__wbg_ptr, rr);
        if (Sr[1]) throw mS(Sr[0])
      }
      Jm(rr, Sr) {
        wr(Sr, Zr);
        const Qr = nS.UNNg(this.__wbg_ptr, rr, Sr.__wbg_ptr);
        if (Qr[1]) throw mS(Qr[0])
      }
      sm(rr) {
        const Sr = pS(rr, nS.M7if),
          Qr = eS,
          Zr = nS.oI74(this.__wbg_ptr, Sr, Qr);
        if (Zr[1]) throw mS(Zr[0])
      }
      Lm(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = nS.OJP0(this.__wbg_ptr, rr, Sr, Qr, Zr, Wr, ar);
        if (jr[1]) throw mS(jr[0])
      }
      lm(rr, Sr, Qr, Zr) {
        const Wr = fS(rr, nS.M7if),
          ar = eS,
          jr = pS(Sr, nS.M7if),
          Ir = eS,
          fr = pS(Qr, nS.M7if),
          Er = eS,
          pr = pS(Zr, nS.M7if),
          xr = eS,
          mr = nS.zsE2(this.__wbg_ptr, Wr, ar, jr, Ir, fr, Er, pr, xr);
        if (mr[1]) throw mS(mr[0])
      }
      rN(rr, Sr) {
        wr(Sr, Zr);
        const Qr = nS.BZpb(this.__wbg_ptr, rr, Sr.__wbg_ptr);
        if (Qr[1]) throw mS(Qr[0])
      }
      Cm(rr, Sr, Qr) {
        const Zr = nS.ZP1b(this.__wbg_ptr, rr, Sr, Qr);
        if (Zr[1]) throw mS(Zr[0])
      }
      QN(rr, Sr, Qr, Zr, Wr, ar, jr, fr, Er, pr) {
        wr(rr, Ir);
        return nS.dui8(this.__wbg_ptr, rr.__wbg_ptr, Sr, Qr, Zr, Wr, ar, jr, fr, Er, pr)
      }
    }
    Symbol.dispose && (jr.prototype[Symbol.dispose] = jr.prototype.free);
    class Ir {
      static __wrap(rr) {
        const Sr = Object.create(Ir.prototype);
        return Sr.__wbg_ptr = rr, Mr.register(Sr, Sr.__wbg_ptr, Sr), Sr
      }
      __destroy_into_raw() {
        const rr = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Mr.unregister(this), rr
      }
      free() {
        const rr = this.__destroy_into_raw();
        nS.YvTV(rr, 0)
      }
      WN(rr) {
        const Sr = nS.k1K2(this.__wbg_ptr, rr);
        if (Sr[2]) throw mS(Sr[1]);
        return Sr[0] >>> 0
      }
      aN(rr, Sr, Qr) {
        return nS.tPme(this.__wbg_ptr, rr, Sr, Qr)
      }
      jN(rr, Sr, Qr) {
        return nS.K8f9(this.__wbg_ptr, rr, Sr, Qr) >>> 0
      }
      IN(rr, Sr, Qr, Zr) {
        return 0 !== nS.hKnY(this.__wbg_ptr, rr, Sr, Qr, Zr)
      }
      fN() {
        nS.eyGf(this.__wbg_ptr)
      }
      EN(rr) {
        const Sr = nS.nfUG(this.__wbg_ptr, rr);
        if (Sr[3]) throw mS(Sr[2]);
        var Qr = or(Sr[0], Sr[1]).slice();
        return nS.WVqq(Sr[0], 1 * Sr[1], 1), Qr
      }
      evict(rr, Sr) {
        return nS.m1jZ(this.__wbg_ptr, rr, Sr) >>> 0
      }
      pN() {
        nS.FY83(this.__wbg_ptr)
      }
      xN(rr, Sr, Qr) {
        nS.mRRx(this.__wbg_ptr, rr, Sr, Qr)
      }
      mN(rr) {
        const Sr = nS.Vx3o(this.__wbg_ptr, rr);
        if (Sr[1]) throw mS(Sr[0])
      }
      NN() {
        return nS.vPFv(this.__wbg_ptr) >>> 0
      }
      UN() {
        return nS.FbTw(this.__wbg_ptr) >>> 0
      }
      tN(rr, Sr, Qr) {
        nS.OhNH(this.__wbg_ptr, rr, Sr, Qr)
      }
      hN(rr, Sr, Qr) {
        nS.E0KE(this.__wbg_ptr, rr, Sr, Qr)
      }
      zN() {
        return nS.TInW(this.__wbg_ptr) >>> 0
      }
      YN() {
        return nS.Tgcv(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const rr = nS.v3pU();
        return this.__wbg_ptr = rr, Mr.register(this, this.__wbg_ptr, this), this
      }
      static nN() {
        const rr = nS.GBkK();
        return Ir.__wrap(rr)
      }
      eN() {
        return nS.oXlC(this.__wbg_ptr) >>> 0
      }
      KN() {
        return nS.Knot(this.__wbg_ptr) >>> 0
      }
      yN(rr, Sr, Qr, Zr) {
        const Wr = nS.nCe8(this.__wbg_ptr, rr, Sr, Qr, Zr);
        if (Wr[1]) throw mS(Wr[0])
      }
      BN() {
        return nS.eT9l(this.__wbg_ptr) >>> 0
      }
      TN() {
        return nS.uPqq(this.__wbg_ptr) >>> 0
      }
      vN(rr, Sr, Qr, Zr) {
        nS.nRxW(this.__wbg_ptr, rr, Sr, Qr, Zr)
      }
      ON(rr) {
        nS.GlAL(this.__wbg_ptr, rr)
      }
      lN(rr, Sr, Qr, Zr, Wr) {
        const ar = ES(Sr, nS.M7if),
          jr = eS,
          Ir = fS(Qr, nS.M7if),
          fr = eS,
          Er = pS(Zr, nS.M7if),
          pr = eS,
          xr = nS.Le0E(this.__wbg_ptr, rr, ar, jr, Ir, fr, Er, pr, Wr);
        if (xr[1]) throw mS(xr[0])
      }
      LN(rr, Sr, Qr, Zr) {
        const Wr = ES(rr, nS.M7if),
          ar = eS,
          jr = fS(Sr, nS.M7if),
          Ir = eS,
          fr = pS(Qr, nS.M7if),
          Er = eS,
          pr = ES(Zr, nS.M7if),
          xr = eS,
          mr = nS.z3B4(this.__wbg_ptr, Wr, ar, jr, Ir, fr, Er, pr, xr);
        if (mr[1]) throw mS(mr[0])
      }
      RN(rr) {
        const Sr = ES(rr, nS.M7if),
          Qr = eS,
          Zr = nS.lT9w(this.__wbg_ptr, Sr, Qr);
        if (Zr[1]) throw mS(Zr[0])
      }
      gN() {
        return nS.F1Bu(this.__wbg_ptr) >>> 0
      }
      CN(rr) {
        const Sr = nS.MQag(this.__wbg_ptr, rr);
        if (Sr[2]) throw mS(Sr[1]);
        return Sr[0] >>> 0
      }
      steer() {
        return nS.pdOS(this.__wbg_ptr) >>> 0
      }
      MN() {
        const rr = nS.HNK2(this.__wbg_ptr);
        var Sr = cr(rr[0], rr[1]).slice();
        return nS.WVqq(rr[0], 8 * rr[1], 8), Sr
      }
      GN() {
        return nS.lqMb(this.__wbg_ptr) >>> 0
      }
      Vm() {
        const rr = nS.Zf7V(this.__wbg_ptr);
        var Sr, Qr, Zr = (Sr = rr[0], Qr = rr[1], Sr >>>= 0, (null !== Dr && 0 !== Dr.byteLength || (Dr = new Int32Array(nS.memory.buffer)), Dr).subarray(Sr / 4, Sr / 4 + Qr)).slice();
        return nS.WVqq(rr[0], 4 * rr[1], 4), Zr
      }
    }
    Symbol.dispose && (Ir.prototype[Symbol.dispose] = Ir.prototype.free);
    class fr {
      __destroy_into_raw() {
        const rr = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Gr.unregister(this), rr
      }
      free() {
        const rr = this.__destroy_into_raw();
        nS.aa2v(rr, 0)
      }
      Yx(rr) {
        const Sr = fS(rr, nS.M7if),
          Qr = eS,
          Zr = nS.G7Pr(this.__wbg_ptr, Sr, Qr);
        if (Zr[1]) throw mS(Zr[0])
      }
      kN() {
        return nS.HV7a(this.__wbg_ptr) >>> 0
      }
      AN() {
        return nS.f0Tm(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const rr = nS.c2IW();
        return this.__wbg_ptr = rr, Gr.register(this, this.__wbg_ptr, this), this
      }
      run(rr, Sr) {
        wr(rr, Ir);
        const Qr = nS.NWZP(this.__wbg_ptr, rr.__wbg_ptr, Sr);
        if (Qr[2]) throw mS(Qr[1]);
        return Qr[0] >>> 0
      }
      VN(rr) {
        const Sr = fS(rr, nS.M7if),
          Qr = eS;
        nS.ghZn(this.__wbg_ptr, Sr, Qr)
      }
      iN(rr) {
        const Sr = fS(rr, nS.M7if),
          Qr = eS;
        nS.idLu(this.__wbg_ptr, Sr, Qr)
      }
    }
    Symbol.dispose && (fr.prototype[Symbol.dispose] = fr.prototype.free);
    class Er {
      __destroy_into_raw() {
        const rr = this.__wbg_ptr;
        return this.__wbg_ptr = 0, kr.unregister(this), rr
      }
      free() {
        const rr = this.__destroy_into_raw();
        nS.rkcx(rr, 0)
      }
      cN(rr, Sr) {
        const Qr = ES(rr, nS.M7if),
          Zr = eS;
        return nS.tYax(this.__wbg_ptr, Qr, Zr, Sr) >>> 0
      }
      FN(rr, Sr, Qr) {
        wr(rr, Ir);
        const Zr = ES(Qr, nS.M7if),
          Wr = eS,
          ar = nS.tX8u(this.__wbg_ptr, rr.__wbg_ptr, Sr, Zr, Wr);
        if (ar[2]) throw mS(ar[1]);
        return ar[0] >>> 0
      }
      wN(rr) {
        return nS.OQVY(this.__wbg_ptr, rr) >>> 0
      }
      constructor() {
        const rr = nS.haH6();
        return this.__wbg_ptr = rr, kr.register(this, this.__wbg_ptr, this), this
      }
      scan(rr, Sr) {
        wr(rr, Ir);
        const Qr = nS.bpeJ(this.__wbg_ptr, rr.__wbg_ptr, Sr);
        if (Qr[2]) throw mS(Qr[1]);
        return Qr[0] >>> 0
      }
      JN(rr) {
        const Sr = ES(rr, nS.M7if),
          Qr = eS;
        nS.Ytjk(this.__wbg_ptr, Sr, Qr)
      }
      bN() {
        return nS.y31y(this.__wbg_ptr) >>> 0
      }
      oN() {
        return nS.qcx7(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Er.prototype[Symbol.dispose] = Er.prototype.free);
    class pr {
      __destroy_into_raw() {
        const rr = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Ar.unregister(this), rr
      }
      free() {
        const rr = this.__destroy_into_raw();
        nS.vIov(rr, 0)
      }
      dN(rr) {
        const Sr = nS.dCM6(this.__wbg_ptr, rr);
        if (Sr[2]) throw mS(Sr[1]);
        return Sr[0] >>> 0
      }
      compute(rr, Sr, Qr, Zr) {
        var Wr = jS(Zr) ? 0 : xS(Zr, nS.M7if, nS.mB3G),
          ar = eS;
        const jr = nS.ZU7T(this.__wbg_ptr, rr, jS(Sr) ? Number.MAX_SAFE_INTEGER : Sr | 0, Qr, Wr, ar);
        if (jr[2]) throw mS(jr[1]);
        return jr[0] >>> 0
      }
      uN(rr) {
        const Sr = xS(rr, nS.M7if, nS.mB3G),
          Qr = eS;
        nS.EADY(this.__wbg_ptr, Sr, Qr)
      }
      rU() {
        return nS.RjjC(this.__wbg_ptr)
      }
      SU(rr) {
        return nS.AlSZ(this.__wbg_ptr, rr) >>> 0
      }
      QU() {
        return nS.skoq(this.__wbg_ptr) >>> 0
      }
      ZU() {
        return nS.jBgY(this.__wbg_ptr) >>> 0
      }
      WU(rr, Sr) {
        const Qr = nS.e2UY(this.__wbg_ptr, rr, Sr);
        if (Qr[1]) throw mS(Qr[0])
      }
      aU() {
        return nS.xAhl(this.__wbg_ptr) >>> 0
      }
      jU() {
        return nS.pARg(this.__wbg_ptr) >>> 0
      }
      IU() {
        return nS.HBa0(this.__wbg_ptr) >>> 0
      }
      sN(rr, Sr, Qr) {
        const Zr = fS(rr, nS.M7if),
          Wr = eS,
          ar = fS(Sr, nS.M7if),
          jr = eS,
          Ir = nS.A3pC(this.__wbg_ptr, Zr, Wr, ar, jr, Qr);
        if (Ir[1]) throw mS(Ir[0])
      }
      EU() {
        return nS.ia7V(this.__wbg_ptr) >>> 0
      }
      mesh(rr, Sr, Qr, Zr, Wr) {
        const ar = nS.sDig(this.__wbg_ptr, rr, Sr, Qr, Zr, Wr);
        if (ar[2]) throw mS(ar[1]);
        return ar[0] >>> 0
      }
      constructor(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr, zr, Yr, nr, er) {
        const Kr = IS(rr, nS.M7if),
          yr = eS,
          Br = pS(Sr, nS.M7if),
          Tr = eS,
          vr = fS(Qr, nS.M7if),
          Or = eS,
          Lr = ES(Zr, nS.M7if),
          lr = eS,
          Xr = ES(Wr, nS.M7if),
          Pr = eS,
          Hr = fS(ar, nS.M7if),
          qr = eS,
          Rr = fS(jr, nS.M7if),
          gr = eS,
          Cr = pS(Ir, nS.M7if),
          Mr = eS,
          Gr = pS(fr, nS.M7if),
          kr = eS,
          Vr = ES(Er, nS.M7if),
          ir = eS;
        var wr = jS(pr) ? 0 : IS(pr, nS.M7if),
          cr = eS;
        const Fr = fS(xr, nS.M7if),
          or = eS,
          br = ES(mr, nS.M7if),
          Jr = eS;
        var Dr = jS(Nr) ? 0 : ES(Nr, nS.M7if),
          dr = eS,
          sr = jS(Ur) ? 0 : ES(Ur, nS.M7if),
          ur = eS;
        const rS = pS(tr, nS.M7if),
          SS = eS,
          QS = nS.AdtB(Kr, yr, Br, Tr, vr, Or, Lr, lr, Xr, Pr, Hr, qr, Rr, gr, Cr, Mr, Gr, kr, Vr, ir, wr, cr, Fr, or, br, Jr, Dr, dr, sr, ur, rS, SS, hr, zr, Yr, nr, er);
        if (QS[2]) throw mS(QS[1]);
        return this.__wbg_ptr = QS[0], Ar.register(this, this.__wbg_ptr, this), this
      }
      fU(rr, Sr) {
        const Qr = fS(rr, nS.M7if),
          Zr = eS,
          Wr = nS.Jz1s(this.__wbg_ptr, Qr, Zr, Sr);
        if (Wr[3]) throw mS(Wr[2]);
        var ar = or(Wr[0], Wr[1]).slice();
        return nS.WVqq(Wr[0], 1 * Wr[1], 1), ar
      }
      pU(rr) {
        nS.lX4U(this.__wbg_ptr, jS(rr) ? 16777215 : rr)
      }
      xU(rr) {
        return nS.Ws7X(this.__wbg_ptr, rr) >>> 0
      }
      NU() {
        return nS.AyOn(this.__wbg_ptr) >>> 0
      }
      mU() {
        const rr = nS.XsXR(this.__wbg_ptr);
        if (rr[2]) throw mS(rr[1]);
        return 0 !== rr[0]
      }
      UU() {
        return nS.c3k3(this.__wbg_ptr) >>> 0
      }
      tU() {
        return nS.iCJD(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (pr.prototype[Symbol.dispose] = pr.prototype.free);
    class xr {
      __destroy_into_raw() {
        const rr = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Vr.unregister(this), rr
      }
      free() {
        const rr = this.__destroy_into_raw();
        nS.xhZI(rr, 0)
      }
      compute(rr, Sr, Qr, Zr) {
        var Wr = jS(Zr) ? 0 : xS(Zr, nS.M7if, nS.mB3G),
          ar = eS;
        const jr = nS.AiPr(this.__wbg_ptr, rr, jS(Sr) ? Number.MAX_SAFE_INTEGER : Sr | 0, Qr, Wr, ar);
        if (jr[2]) throw mS(jr[1]);
        return jr[0] >>> 0
      }
      uN(rr) {
        const Sr = xS(rr, nS.M7if, nS.mB3G),
          Qr = eS;
        nS.oXbj(this.__wbg_ptr, Sr, Qr)
      }
      jU() {
        return nS.SBgy(this.__wbg_ptr) >>> 0
      }
      IU() {
        return nS.KRmR(this.__wbg_ptr) >>> 0
      }
      hU(rr) {
        const Sr = nS.bEeJ(this.__wbg_ptr, rr);
        if (Sr[2]) throw mS(Sr[1]);
        return Sr[0] >>> 0
      }
      constructor(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = IS(rr, nS.M7if),
          Ir = eS,
          fr = pS(Sr, nS.M7if),
          Er = eS,
          pr = fS(Qr, nS.M7if),
          xr = eS,
          mr = ES(Zr, nS.M7if),
          Nr = eS,
          Ur = nS.I7X5(jr, Ir, fr, Er, pr, xr, mr, Nr, Wr, ar);
        if (Ur[2]) throw mS(Ur[1]);
        return this.__wbg_ptr = Ur[0], Vr.register(this, this.__wbg_ptr, this), this
      }
      NU() {
        return nS.bg63(this.__wbg_ptr) >>> 0
      }
      mU() {
        const rr = nS.JsEp(this.__wbg_ptr);
        if (rr[2]) throw mS(rr[1]);
        return 0 !== rr[0]
      }
      UU() {
        return nS.XLhE(this.__wbg_ptr) >>> 0
      }
    }

    function mr() {
      const rr = nS.z2Ta();
      var Sr = Fr(rr[0], rr[1]).slice();
      return nS.WVqq(rr[0], 4 * rr[1], 4), Sr
    }

    function Nr(rr, Sr) {
      let Qr, Zr;
      try {
        const Wr = IS(rr, nS.M7if),
          ar = eS,
          jr = xS(Sr, nS.M7if, nS.mB3G),
          Ir = eS,
          fr = nS.RTF5(Wr, ar, jr, Ir);
        return Qr = fr[0], Zr = fr[1], dr(fr[0], fr[1])
      } finally {
        nS.WVqq(Qr, Zr, 1)
      }
    }

    function Ur() {
      const rr = nS.A9Jt();
      var Sr = Fr(rr[0], rr[1]).slice();
      return nS.WVqq(rr[0], 4 * rr[1], 4), Sr
    }

    function tr(rr) {
      return 0 !== nS.JXwy(rr)
    }

    function hr(rr, Sr) {
      const Qr = xS(rr, nS.M7if, nS.mB3G),
        Zr = eS,
        Wr = nS.KxTk(Qr, Zr, Sr);
      if (Wr[1]) throw mS(Wr[0])
    }

    function zr() {
      nS.TKLp()
    }

    function Yr() {
      return nS.Yvlt() >>> 0
    }

    function nr(rr) {
      return 0 !== nS.XsrE(rr)
    }

    function er(rr) {
      return 0 !== nS.gRpk(rr)
    }

    function Kr(rr) {
      nS.loOl(rr)
    }

    function yr() {
      return nS.wbKv() >>> 0
    }

    function Br() {
      return nS.VANM() >>> 0
    }

    function Tr() {
      return 0 !== nS.md1N()
    }

    function vr() {
      const rr = nS.SHYS();
      var Sr = Fr(rr[0], rr[1]).slice();
      return nS.WVqq(rr[0], 4 * rr[1], 4), Sr
    }

    function Or() {
      const rr = nS.ocuN();
      var Sr = Fr(rr[0], rr[1]).slice();
      return nS.WVqq(rr[0], 4 * rr[1], 4), Sr
    }

    function Lr() {
      const rr = nS.R384();
      var Sr = Fr(rr[0], rr[1]).slice();
      return nS.WVqq(rr[0], 4 * rr[1], 4), Sr
    }

    function lr() {
      return nS.Q04Q() >>> 0
    }

    function Xr() {
      nS.PQ7x()
    }

    function Pr() {
      let rr, Sr;
      try {
        const Qr = nS.ThTJ();
        return rr = Qr[0], Sr = Qr[1], dr(Qr[0], Qr[1])
      } finally {
        nS.WVqq(rr, Sr, 1)
      }
    }

    function Hr(rr) {
      nS.uyv3(ir(rr))
    }

    function qr() {
      return {
        __proto__: null,
        h3R8: {
          __proto__: null,
          r1zI: function(rr, Sr) {
            return ir(Error(dr(rr, Sr)))
          },
          hz6m: function(rr, Sr) {
            throw new Error(dr(rr, Sr))
          },
          bQ5x: function(rr) {
            ZS(rr).call()
          },
          MKqA: function(rr, Sr) {
            console.error(dr(rr, Sr))
          },
          B5pB: function() {
            return performance.now()
          },
          TYh2: function(rr) {
            mS(rr)
          }
        }
      }
    }
    Symbol.dispose && (xr.prototype[Symbol.dispose] = xr.prototype.free);
    const Rr = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((rr => nS.orzO(rr, 1))),
      gr = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((rr => nS.gnHJ(rr, 1))),
      Cr = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((rr => nS.CBI0(rr, 1))),
      Mr = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((rr => nS.YvTV(rr, 1))),
      Gr = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((rr => nS.aa2v(rr, 1))),
      kr = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((rr => nS.rkcx(rr, 1))),
      Ar = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((rr => nS.vIov(rr, 1))),
      Vr = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((rr => nS.xhZI(rr, 1)));

    function ir(rr) {
      aS === WS.length && WS.push(WS.length + 1);
      const Sr = aS;
      return aS = WS[Sr], WS[Sr] = rr, Sr
    }

    function wr(rr, Sr) {
      if (!(rr instanceof Sr)) throw new Error(`expected instance of ${Sr.name}`)
    }

    function cr(rr, Sr) {
      return rr >>>= 0, Jr().subarray(rr / 8, rr / 8 + Sr)
    }

    function Fr(rr, Sr) {
      return rr >>>= 0, rS().subarray(rr / 4, rr / 4 + Sr)
    }

    function or(rr, Sr) {
      return rr >>>= 0, QS().subarray(rr / 1, rr / 1 + Sr)
    }
    let br = null;

    function Jr() {
      return null !== br && 0 !== br.byteLength || (br = new Float64Array(nS.memory.buffer)), br
    }
    let Dr = null;

    function dr(rr, Sr) {
      return function(rr, Sr) {
        tS += Sr, tS >= US && (NS = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), NS.decode(), tS = Sr);
        return NS.decode(QS().subarray(rr, rr + Sr))
      }(rr >>> 0, Sr)
    }
    let sr = null;
    let ur = null;

    function rS() {
      return null !== ur && 0 !== ur.byteLength || (ur = new Uint32Array(nS.memory.buffer)), ur
    }
    let SS = null;

    function QS() {
      return null !== SS && 0 !== SS.byteLength || (SS = new Uint8Array(nS.memory.buffer)), SS
    }

    function ZS(rr) {
      return WS[rr]
    }
    let WS = new Array(1024).fill(void 0);
    WS.push(void 0, null, !0, !1);
    let aS = WS.length;

    function jS(rr) {
      return void 0 === rr || null === rr
    }

    function IS(rr, Sr) {
      const Qr = Sr(2 * rr.length, 2) >>> 0;
      return (null !== sr && 0 !== sr.byteLength || (sr = new Uint16Array(nS.memory.buffer)), sr).set(rr, Qr / 2), eS = rr.length, Qr
    }

    function fS(rr, Sr) {
      const Qr = Sr(4 * rr.length, 4) >>> 0;
      return rS().set(rr, Qr / 4), eS = rr.length, Qr
    }

    function ES(rr, Sr) {
      const Qr = Sr(1 * rr.length, 1) >>> 0;
      return QS().set(rr, Qr / 1), eS = rr.length, Qr
    }

    function pS(rr, Sr) {
      const Qr = Sr(8 * rr.length, 8) >>> 0;
      return Jr().set(rr, Qr / 8), eS = rr.length, Qr
    }

    function xS(rr, Sr, Qr) {
      if (void 0 === Qr) {
        const Qr = hS.encode(rr),
          Zr = Sr(Qr.length, 1) >>> 0;
        return QS().subarray(Zr, Zr + Qr.length).set(Qr), eS = Qr.length, Zr
      }
      let Zr = rr.length,
        Wr = Sr(Zr, 1) >>> 0;
      const ar = QS();
      let jr = 0;
      for (; jr < Zr; jr++) {
        const Sr = rr.charCodeAt(jr);
        if (Sr > 127) break;
        ar[Wr + jr] = Sr
      }
      if (jr !== Zr) {
        0 !== jr && (rr = rr.slice(jr)), Wr = Qr(Wr, Zr, Zr = jr + 3 * rr.length, 1) >>> 0;
        const Sr = QS().subarray(Wr + jr, Wr + Zr);
        jr += hS.encodeInto(rr, Sr).written, Wr = Qr(Wr, Zr, jr, 1) >>> 0
      }
      return eS = jr, Wr
    }

    function mS(rr) {
      const Sr = ZS(rr);
      return function(rr) {
        rr < 1028 || (WS[rr] = aS, aS = rr)
      }(rr), Sr
    }
    let NS = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    NS.decode();
    const US = 2146435072;
    let tS = 0;
    const hS = new TextEncoder;
    "encodeInto" in hS || (hS.encodeInto = function(rr, Sr) {
      const Qr = hS.encode(rr);
      return Sr.set(Qr), {
        read: rr.length,
        written: Qr.length
      }
    });
    let zS, YS, nS, eS = 0;

    function KS(rr, Sr) {
      return YS = rr, nS = rr.exports, zS = Sr, br = null, Dr = null, sr = null, ur = null, SS = null, nS.Wndv(), nS
    }

    function yS(rr) {
      if (void 0 !== nS) return nS;
      void 0 !== rr && (Object.getPrototypeOf(rr) === Object.prototype ? ({
        module: rr
      } = rr) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Sr = qr();
      rr instanceof WebAssembly.Module || (rr = new WebAssembly.Module(rr));
      return KS(new WebAssembly.Instance(rr, Sr), rr)
    }
    async function BS(rr) {
      if (void 0 !== nS) return nS;
      void 0 !== rr && (Object.getPrototypeOf(rr) === Object.prototype ? ({
        module_or_path: rr
      } = rr) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Sr = qr();
      ("string" === typeof rr || "function" === typeof Request && rr instanceof Request || "function" === typeof URL && rr instanceof URL) && (rr = fetch(rr));
      const {
        instance: Qr,
        module: Zr
      } = await async function(rr, Sr) {
        if ("function" === typeof Response && rr instanceof Response) {
          if (!rr.ok) throw new Error(`failed to fetch Wasm: ${rr.status} ${rr.statusText} fetching '${rr.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(rr, Sr)
          } catch (Qr) {
            if (! function(rr) {
                switch (rr) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(rr.type) || "application/wasm" === rr.headers.get("Content-Type")) throw Qr;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Qr)
          }
          const Zr = await rr.arrayBuffer();
          return await WebAssembly.instantiate(Zr, Sr)
        } {
          const Qr = await WebAssembly.instantiate(rr, Sr);
          return Qr instanceof WebAssembly.Instance ? {
            instance: Qr,
            module: rr
          } : Qr
        }
      }(await rr, Sr);
      return KS(Qr, Zr)
    }
  },
  37550: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr,
      g: () => Ir,
      j: () => fr
    });
    var Zr = Qr(37559),
      Wr = Qr(2396),
      ar = Qr(37566);
    const jr = {
      name: Wr.e,
      url: () => new Qr.U(Qr(37573)),
      init: Zr.default,
      bindings: Zr
    };

    function Ir() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jr,
        Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jr,
        Qr = arguments.length > 2 ? arguments[2] : void 0;
      return (0, ar.n)(rr, Sr, Qr)
    }

    function fr(rr) {
      return (0, Wr.J)((() => rr), Zr, jr)
    }
  },
  37538: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      return new Error(`${rr}: ${Sr instanceof Error?`${Sr.name}: ${Sr.message}`:String(Sr)}`, {
        cause: Sr
      })
    }
    Qr.d(Sr, {
      b: () => Zr
    })
  },
  37533: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr,
      i: () => fr
    });
    var Zr = Qr(2398),
      Wr = Qr(7577),
      ar = Qr(37538);

    function jr() {
      return new URL(new Qr.U(Qr(37542)).href, globalThis.location?.href).href
    }
    let Ir = null;

    function fr() {
      return Ir ??= (async () => (0, Zr.I)(new URL(jr()), (0, Wr.c)("bloxd_wasm_textures")))().catch((rr => {
        throw (0, ar.b)((0, Zr.M)(rr), rr)
      })), Ir
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);