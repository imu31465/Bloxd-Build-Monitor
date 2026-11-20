export const id = 206;
export const ids = [206, 207];
export const modules = {
  35937: (bb, cb, sb) => {
    sb.d(cb, {
      reportCappedWasmFailure: () => Tb,
      reportWasmFailure: () => ab
    });
    var kb = sb(2984);
    const Wb = kb.c - 4;

    function ab(bb, cb, sb) {
      (0, kb.d)(bb, cb, sb, !1)
    }

    function Tb(bb, cb, sb) {
      (0, kb.d)(bb, cb, sb, !1, Wb)
    }
  },
  35928: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Vb,
      h: () => Yb,
      j: () => hb,
      m: () => Lb
    });
    var kb = sb(35949),
      Wb = sb(3500),
      ab = sb(35968),
      Tb = sb(3505),
      Ub = sb(35937),
      Ib = sb(2706),
      Hb = sb(3007),
      fb = sb(2982),
      Mb = sb(35941),
      Xb = sb(2984),
      nb = sb(35945),
      mb = sb(3495);
    let lb = !1;
    const Qb = 40;
    var eb = sb(706);
    const Cb = "bloxdWasmFailureReported";

    function Nb() {
      return "undefined" === typeof WebAssembly
    }

    function Vb() {
      return (0, kb.i)()
    }

    function Lb() {
      if (Nb()) return "this browser has no WebAssembly";
      const bb = (0, Wb.o)();
      return "compile" === bb || "instantiate" === bb ? `the core wasm didn't load here (${(0,Wb.i)()})` : null
    }
    async function ub(bb) {
      return await (0, ab.d)(ab.c, void 0, bb)
    }

    function Yb() {
      Nb() || (0, eb.d)((() => {
        ub()
      }))
    }

    function hb() {
      if (Nb()) return async () => ((0, Ib.h)("unsupported", 0), Jb("unsupported", "This browser has no WebAssembly"), !1);
      const bb = {
        reloadFailedDownload: !0
      };
      return ub(bb), async () => {
        var cb;
        const sb = performance.now();
        await ub(bb);
        const kb = (performance.now() - sb) / 1e3;
        if ((0, Wb.M)()) return (0, Ib.h)("ready", kb), lb || (lb = !0, (0, Wb.T)((() => {
          if ("call" !== (0, Wb.o)()) return;
          const bb = (0, Wb.n)(),
            cb = (0, Mb.m)(bb, Wb.I, Wb.Y),
            sb = (0, Wb.u)().buffer.byteLength,
            kb = (0, Mb.g)(cb.kind, cb.refusedBytes),
            ab = kb ? "alloc_failed" : cb.kind,
            Tb = 2 ** Math.floor(Math.log2(Math.max(1, sb / 2 ** 20))),
            Ub = kb ? `_r${Math.floor(Math.log2(cb.refusedBytes))}` : "",
            Ib = (0, mb.e)();
          null === Ib && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const Hb = new Error((0, nb.d)(bb, sb, cb));
          if (bb instanceof Error && void 0 !== bb.stack) {
            const cb = bb.stack.split("\n"),
              sb = cb.length > Qb ? [...cb.slice(0, Qb / 2), ...cb.slice(-Qb / 2)] : cb;
            Hb.stack = sb.join("\n")
          }(0, Xb.d)("wasm_load", Hb, `wasm_call_${ab}_${null!==Ib&&void 0!==Ib?Ib:"unnamed"}_m${Tb}${Ub}`)
        }))), (0, Tb.H)(ab.c.url()) && (0, Ub.reportCappedWasmFailure)("wasm_load", Hb.b.message, Hb.b.code), !0;
        const eb = fb.b[null !== (cb = (0, Wb.o)()) && void 0 !== cb ? cb : "call"];
        return (0, Ib.h)(eb, kb), Jb(eb, (0, Wb.i)()), !1
      }
    }

    function Jb(bb, cb) {
      (0, fb.f)(Cb, `Bloxd wasm ${bb}, so the game can't start: ${cb}`, cb, bb)
    }
  },
  35983: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/bloxd_wasm_bg.f6f5e167e268d76309e5.wasm"
  },
  35965: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/bloxd_wasm_textures_bg.f845705356ec0c39ff2a.wasm"
  },
  35968: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Bc,
      d: () => tc,
      f: () => yc
    });
    var kb = {};
    sb.r(kb), sb.d(kb, {
      UM: () => Wb,
      EnvelopeKind: () => ab,
      IM: () => Tb,
      PhysicsEngine: () => Ub,
      HM: () => Ib,
      fM: () => Hb,
      MM: () => fb,
      XM: () => Mb,
      nM: () => Xb,
      mM: () => nb,
      lM: () => mb,
      QM: () => lb,
      eM: () => Qb,
      CM: () => eb,
      default: () => hc,
      initSync: () => Yc,
      NM: () => Cb,
      VM: () => Nb,
      LM: () => Vb,
      uM: () => Lb,
      YM: () => ub,
      hM: () => Yb,
      JM: () => hb,
      gM: () => Jb,
      BM: () => gb,
      tM: () => Bb,
      yM: () => tb,
      PM: () => yb,
      DM: () => Pb,
      EM: () => Db,
      iM: () => Eb
    });
    class Wb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Ob.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        Vc.sspS(bb, 0)
      }
      OM() {
        const bb = Vc.uq0r(this.__wbg_ptr);
        if (bb[2]) throw nc(bb[1]);
        return bb[0] >>> 0
      }
      GM() {
        return Vc.IBYt(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const bb = Vc.U4KM();
        return this.__wbg_ptr = bb, Ob.register(this, this.__wbg_ptr, this), this
      }
      KM() {
        return Vc.jq4g(this.__wbg_ptr) >>> 0
      }
      ZM(bb) {
        const cb = Vc.xzo4(this.__wbg_ptr, bb);
        if (cb[2]) throw nc(cb[1]);
        return cb[0] >>> 0
      }
      zM(bb) {
        const cb = Vc.wFFU(this.__wbg_ptr, bb);
        if (cb[2]) throw nc(cb[1]);
        return cb[0] >>> 0
      }
    }
    Symbol.dispose && (Wb.prototype[Symbol.dispose] = Wb.prototype.free);
    const ab = Object.freeze({
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
    class Tb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Gb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        Vc.P7Yk(bb, 0)
      }
      AM(bb, cb) {
        const sb = Vc.Umns(this.__wbg_ptr, bb, cb);
        if (sb[2]) throw nc(sb[1]);
        return sb[0] >>> 0
      }
      wM(bb) {
        const cb = Vc.m4Ys(this.__wbg_ptr, bb);
        if (cb[2]) throw nc(cb[1]);
        return cb[0] >>> 0
      }
      rM() {
        Vc.Svzw(this.__wbg_ptr)
      }
      static oM() {
        return Vc.Zr2S() >>> 0
      }
      SM() {
        return Vc.usyC(this.__wbg_ptr) >>> 0
      }
      RM() {
        const bb = Vc.l9Av(this.__wbg_ptr);
        return 0 === bb[0] ? void 0 : bb[1]
      }
      vM() {
        return Vc.SQv5(this.__wbg_ptr) >>> 0
      }
      FM() {
        return Vc.llBi(this.__wbg_ptr) >>> 0
      }
      static dM() {
        return Vc.ZClw() >>> 0
      }
      constructor() {
        const bb = Vc.GNOF();
        return this.__wbg_ptr = bb, Gb.register(this, this.__wbg_ptr, this), this
      }
      xM() {
        return Vc.ELgC(this.__wbg_ptr) >>> 0
      }
      jM() {
        return Vc.uxgn(this.__wbg_ptr) >>> 0
      }
      pM() {
        return Vc.ne0P(this.__wbg_ptr) >>> 0
      }
      qM(bb) {
        return Vc.GEtC(this.__wbg_ptr, bb) >>> 0
      }
      reserve(bb, cb) {
        const sb = Vc.QBzM(this.__wbg_ptr, bb, cb);
        if (sb[1]) throw nc(sb[0])
      }
      sX(bb, cb) {
        const sb = Hc(bb, Vc.Ykbn),
          kb = Lc;
        Vc.XhNb(this.__wbg_ptr, sb, kb, cb)
      }
      text() {
        let bb, cb;
        try {
          const sb = Vc.dZAG(this.__wbg_ptr);
          return bb = sb[0], cb = sb[1], jb(sb[0], sb[1])
        } finally {
          Vc.qhzt(bb, cb, 1)
        }
      }
    }
    Symbol.dispose && (Tb.prototype[Symbol.dispose] = Tb.prototype.free);
    class Ub {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Kb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        Vc.Co87(bb, 0)
      }
      WX(bb, cb) {
        rb(cb, Wb);
        const sb = Vc.iLqO(this.__wbg_ptr, bb, cb.__wbg_ptr);
        if (sb[2]) throw nc(sb[1]);
        return sb[0] >>> 0
      }
      TX() {
        const bb = Vc.XV2z(this.__wbg_ptr);
        if (bb[1]) throw nc(bb[0])
      }
      MX(bb, cb, sb, kb, Wb, ab, Tb, Ub, Hb, fb, Mb) {
        rb(bb, Ib);
        const Xb = Vc.X3Gn(this.__wbg_ptr, bb.__wbg_ptr, cb, sb, kb, Wb, ab, Tb, Ub, Hb, fb, Mb);
        if (Xb[2]) throw nc(Xb[1]);
        return Xb[0]
      }
      XX() {
        const bb = Vc.i3re(this.__wbg_ptr);
        var cb = ob(bb[0], bb[1]).slice();
        return Vc.qhzt(bb[0], 8 * bb[1], 8), cb
      }
      mX() {
        return Vc.bhFy(this.__wbg_ptr) >>> 0
      }
      lX() {
        return Vc.Q1NP(this.__wbg_ptr) >>> 0
      }
      QX() {
        return Vc.RY53(this.__wbg_ptr) >>> 0
      }
      constructor(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
        const Ib = Vc.AIds(bb, cb, sb, kb, Wb, ab, Tb, Ub);
        if (Ib[2]) throw nc(Ib[1]);
        return this.__wbg_ptr = Ib[0], Kb.register(this, this.__wbg_ptr, this), this
      }
      NX(bb) {
        rb(bb, Wb);
        const cb = Vc.R6sv(this.__wbg_ptr, bb.__wbg_ptr);
        if (cb[2]) throw nc(cb[1]);
        return cb[0] >>> 0
      }
      VX(bb) {
        const cb = Vc.J6UG(this.__wbg_ptr, bb);
        if (cb[1]) throw nc(cb[0])
      }
      LX() {
        return Vc.ihMH(this.__wbg_ptr) >>> 0
      }
      resume(bb, cb) {
        rb(bb, Ib), rb(cb, Wb);
        const sb = Vc.NDoo(this.__wbg_ptr, bb.__wbg_ptr, cb.__wbg_ptr);
        if (sb[2]) throw nc(sb[1]);
        return sb[0] >>> 0
      }
      gX(bb) {
        const cb = Vc.Li1S(this.__wbg_ptr, bb);
        if (cb[1]) throw nc(cb[0])
      }
      yX(bb, cb) {
        rb(cb, Wb);
        const sb = Vc.SAZF(this.__wbg_ptr, bb, cb.__wbg_ptr);
        if (sb[1]) throw nc(sb[0])
      }
      EX(bb) {
        const cb = Mc(bb, Vc.Ykbn),
          sb = Lc,
          kb = Vc.XguR(this.__wbg_ptr, cb, sb);
        if (kb[1]) throw nc(kb[0])
      }
      IX(bb, cb, sb, kb, Wb, ab) {
        const Tb = Vc.aZcP(this.__wbg_ptr, bb, cb, sb, kb, Wb, ab);
        if (Tb[1]) throw nc(Tb[0])
      }
      HX(bb, cb, sb, kb) {
        const Wb = Hc(bb, Vc.Ykbn),
          ab = Lc,
          Tb = Mc(cb, Vc.Ykbn),
          Ub = Lc,
          Ib = Mc(sb, Vc.Ykbn),
          Hb = Lc,
          fb = Mc(kb, Vc.Ykbn),
          Mb = Lc,
          Xb = Vc.B8qm(this.__wbg_ptr, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb);
        if (Xb[1]) throw nc(Xb[0])
      }
      OX(bb, cb) {
        rb(cb, Wb);
        const sb = Vc.rwXo(this.__wbg_ptr, bb, cb.__wbg_ptr);
        if (sb[1]) throw nc(sb[0])
      }
      CX(bb, cb, sb) {
        const kb = Vc.vlD7(this.__wbg_ptr, bb, cb, sb);
        if (kb[1]) throw nc(kb[0])
      }
      KX(bb, cb, sb, kb, Wb, ab, Tb, Ub, Hb, fb) {
        rb(bb, Ib);
        return Vc.MpAJ(this.__wbg_ptr, bb.__wbg_ptr, cb, sb, kb, Wb, ab, Tb, Ub, Hb, fb)
      }
    }
    Symbol.dispose && (Ub.prototype[Symbol.dispose] = Ub.prototype.free);
    class Ib {
      static __wrap(bb) {
        const cb = Object.create(Ib.prototype);
        return cb.__wbg_ptr = bb, Zb.register(cb, cb.__wbg_ptr, cb), cb
      }
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Zb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        Vc.TxnZ(bb, 0)
      }
      qX(bb) {
        const cb = Vc.Ayzt(this.__wbg_ptr, bb);
        if (cb[2]) throw nc(cb[1]);
        return cb[0] >>> 0
      }
      dX(bb, cb, sb) {
        return Vc.fRY9(this.__wbg_ptr, bb, cb, sb)
      }
      AX(bb, cb, sb) {
        return Vc.QQuS(this.__wbg_ptr, bb, cb, sb) >>> 0
      }
      wX(bb, cb, sb, kb) {
        return 0 !== Vc.CQLw(this.__wbg_ptr, bb, cb, sb, kb)
      }
      rX() {
        Vc.kAMH(this.__wbg_ptr)
      }
      SX(bb) {
        const cb = Vc.U8Rq(this.__wbg_ptr, bb);
        if (cb[3]) throw nc(cb[2]);
        var sb = Rb(cb[0], cb[1]).slice();
        return Vc.qhzt(cb[0], 1 * cb[1], 1), sb
      }
      evict(bb, cb) {
        return Vc.rn0P(this.__wbg_ptr, bb, cb) >>> 0
      }
      RX() {
        Vc.Cr3l(this.__wbg_ptr)
      }
      vX(bb, cb, sb) {
        Vc.foAP(this.__wbg_ptr, bb, cb, sb)
      }
      FX(bb) {
        const cb = Vc.fPCv(this.__wbg_ptr, bb);
        if (cb[1]) throw nc(cb[0])
      }
      xX() {
        return Vc.rA7Y(this.__wbg_ptr) >>> 0
      }
      jX() {
        return Vc.Gfi6(this.__wbg_ptr) >>> 0
      }
      pX(bb, cb, sb) {
        Vc.Egd8(this.__wbg_ptr, bb, cb, sb)
      }
      bn(bb, cb, sb) {
        Vc.UUba(this.__wbg_ptr, bb, cb, sb)
      }
      cn() {
        return Vc.Epyc(this.__wbg_ptr) >>> 0
      }
      sn() {
        return Vc.kcVt(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const bb = Vc.sgOd();
        return this.__wbg_ptr = bb, Zb.register(this, this.__wbg_ptr, this), this
      }
      static kn() {
        const bb = Vc.K0Lt();
        return Ib.__wrap(bb)
      }
      Wn() {
        return Vc.aZv8(this.__wbg_ptr) >>> 0
      }
      Tn() {
        return Vc.hk1f(this.__wbg_ptr) >>> 0
      }
      Un(bb, cb, sb, kb) {
        const Wb = Vc.O2qo(this.__wbg_ptr, bb, cb, sb, kb);
        if (Wb[1]) throw nc(Wb[0])
      }
      Hn() {
        return Vc.Cm7R(this.__wbg_ptr) >>> 0
      }
      fn() {
        return Vc.iIlr(this.__wbg_ptr) >>> 0
      }
      Mn(bb, cb, sb, kb) {
        Vc.Tipv(this.__wbg_ptr, bb, cb, sb, kb)
      }
      Xn(bb) {
        Vc.EWV2(this.__wbg_ptr, bb)
      }
      mn(bb, cb, sb, kb, Wb) {
        const ab = fc(cb, Vc.Ykbn),
          Tb = Lc,
          Ub = Hc(sb, Vc.Ykbn),
          Ib = Lc,
          Hb = Mc(kb, Vc.Ykbn),
          fb = Lc,
          Mb = Vc.OjtU(this.__wbg_ptr, bb, ab, Tb, Ub, Ib, Hb, fb, Wb);
        if (Mb[1]) throw nc(Mb[0])
      }
      nn(bb, cb, sb, kb) {
        const Wb = fc(bb, Vc.Ykbn),
          ab = Lc,
          Tb = Hc(cb, Vc.Ykbn),
          Ub = Lc,
          Ib = Mc(sb, Vc.Ykbn),
          Hb = Lc,
          fb = fc(kb, Vc.Ykbn),
          Mb = Lc,
          Xb = Vc.YuLw(this.__wbg_ptr, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb);
        if (Xb[1]) throw nc(Xb[0])
      }
      Ln(bb) {
        const cb = fc(bb, Vc.Ykbn),
          sb = Lc,
          kb = Vc.neJN(this.__wbg_ptr, cb, sb);
        if (kb[1]) throw nc(kb[0])
      }
      Yn() {
        return Vc.G47w(this.__wbg_ptr) >>> 0
      }
      hn(bb) {
        const cb = Vc.HuY2(this.__wbg_ptr, bb);
        if (cb[2]) throw nc(cb[1]);
        return cb[0] >>> 0
      }
      steer() {
        return Vc.fWIH(this.__wbg_ptr) >>> 0
      }
      Jn() {
        const bb = Vc.E6fs(this.__wbg_ptr);
        var cb = ob(bb[0], bb[1]).slice();
        return Vc.qhzt(bb[0], 8 * bb[1], 8), cb
      }
      gn() {
        return Vc.MGKG(this.__wbg_ptr) >>> 0
      }
      YX() {
        const bb = Vc.ykI6(this.__wbg_ptr);
        var cb, sb, kb = (cb = bb[0], sb = bb[1], cb >>>= 0, (null !== xb && 0 !== xb.byteLength || (xb = new Int32Array(Vc.memory.buffer)), xb).subarray(cb / 4, cb / 4 + sb)).slice();
        return Vc.qhzt(bb[0], 4 * bb[1], 4), kb
      }
    }
    Symbol.dispose && (Ib.prototype[Symbol.dispose] = Ib.prototype.free);
    class Hb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, zb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        Vc.ymUm(bb, 0)
      }
      Bn(bb) {
        const cb = Hc(bb, Vc.Ykbn),
          sb = Lc,
          kb = Vc.cQlS(this.__wbg_ptr, cb, sb);
        if (kb[1]) throw nc(kb[0])
      }
      tn() {
        return Vc.NHIa(this.__wbg_ptr) >>> 0
      }
      yn() {
        return Vc.kitt(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const bb = Vc.JpNj();
        return this.__wbg_ptr = bb, zb.register(this, this.__wbg_ptr, this), this
      }
      run(bb, cb) {
        rb(bb, Ib);
        const sb = Vc.wqxN(this.__wbg_ptr, bb.__wbg_ptr, cb);
        if (sb[2]) throw nc(sb[1]);
        return sb[0] >>> 0
      }
      Pn(bb) {
        const cb = Hc(bb, Vc.Ykbn),
          sb = Lc;
        Vc.Caou(this.__wbg_ptr, cb, sb)
      }
      Dn(bb) {
        const cb = Hc(bb, Vc.Ykbn),
          sb = Lc;
        Vc.Chbw(this.__wbg_ptr, cb, sb)
      }
    }
    Symbol.dispose && (Hb.prototype[Symbol.dispose] = Hb.prototype.free);
    class fb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, qb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        Vc.WQGA(bb, 0)
      }
      Gn(bb, cb) {
        const sb = fc(bb, Vc.Ykbn),
          kb = Lc;
        return Vc.BDO4(this.__wbg_ptr, sb, kb, cb) >>> 0
      }
      Kn(bb, cb, sb) {
        rb(bb, Ib);
        const kb = fc(sb, Vc.Ykbn),
          Wb = Lc,
          ab = Vc.eECF(this.__wbg_ptr, bb.__wbg_ptr, cb, kb, Wb);
        if (ab[2]) throw nc(ab[1]);
        return ab[0] >>> 0
      }
      En(bb) {
        return Vc.jeAf(this.__wbg_ptr, bb) >>> 0
      }
      constructor() {
        const bb = Vc.aVXI();
        return this.__wbg_ptr = bb, qb.register(this, this.__wbg_ptr, this), this
      }
      scan(bb, cb) {
        rb(bb, Ib);
        const sb = Vc.tRje(this.__wbg_ptr, bb.__wbg_ptr, cb);
        if (sb[2]) throw nc(sb[1]);
        return sb[0] >>> 0
      }
      qn(bb) {
        const cb = fc(bb, Vc.Ykbn),
          sb = Lc;
        Vc.HEZI(this.__wbg_ptr, cb, sb)
      }
      zn() {
        return Vc.xGUe(this.__wbg_ptr) >>> 0
      }
      Zn() {
        return Vc.JCvV(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (fb.prototype[Symbol.dispose] = fb.prototype.free);
    class Mb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, db.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        Vc.aQnq(bb, 0)
      }
      rn(bb) {
        const cb = Vc.AQ4V(this.__wbg_ptr, bb);
        if (cb[2]) throw nc(cb[1]);
        return cb[0] >>> 0
      }
      compute(bb, cb, sb, kb) {
        var Wb = Uc(kb) ? 0 : Xc(kb, Vc.Ykbn, Vc.bF7S),
          ab = Lc;
        const Tb = Vc.iI7u(this.__wbg_ptr, bb, Uc(cb) ? Number.MAX_SAFE_INTEGER : cb | 0, sb, Wb, ab);
        if (Tb[2]) throw nc(Tb[1]);
        return Tb[0] >>> 0
      }
      Rn(bb) {
        const cb = Xc(bb, Vc.Ykbn, Vc.bF7S),
          sb = Lc;
        Vc.YgOz(this.__wbg_ptr, cb, sb)
      }
      Fn() {
        return Vc.nAec(this.__wbg_ptr)
      }
      xn(bb) {
        return Vc.lkyC(this.__wbg_ptr, bb) >>> 0
      }
      jn() {
        return Vc.Sdjt(this.__wbg_ptr) >>> 0
      }
      pn() {
        return Vc.mMuJ(this.__wbg_ptr) >>> 0
      }
      bm(bb, cb) {
        const sb = Vc.eF8A(this.__wbg_ptr, bb, cb);
        if (sb[1]) throw nc(sb[0])
      }
      sm() {
        return Vc.bbHw(this.__wbg_ptr) >>> 0
      }
      km() {
        return Vc.nXTh(this.__wbg_ptr) >>> 0
      }
      Wm() {
        return Vc.GEm5(this.__wbg_ptr) >>> 0
      }
      Sn(bb, cb, sb) {
        const kb = Hc(bb, Vc.Ykbn),
          Wb = Lc,
          ab = Hc(cb, Vc.Ykbn),
          Tb = Lc,
          Ub = Vc.onO4(this.__wbg_ptr, kb, Wb, ab, Tb, sb);
        if (Ub[1]) throw nc(Ub[0])
      }
      Tm() {
        return Vc.WQtk(this.__wbg_ptr) >>> 0
      }
      mesh(bb, cb, sb, kb, Wb) {
        const ab = Vc.QGN5(this.__wbg_ptr, bb, cb, sb, kb, Wb);
        if (ab[2]) throw nc(ab[1]);
        return ab[0] >>> 0
      }
      constructor(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb, Qb, eb, Cb, Nb) {
        const Vb = Ic(bb, Vc.Ykbn),
          Lb = Lc,
          ub = Mc(cb, Vc.Ykbn),
          Yb = Lc,
          hb = Hc(sb, Vc.Ykbn),
          Jb = Lc,
          gb = fc(kb, Vc.Ykbn),
          Bb = Lc,
          tb = fc(Wb, Vc.Ykbn),
          yb = Lc,
          Pb = Hc(ab, Vc.Ykbn),
          Db = Lc,
          Eb = Hc(Tb, Vc.Ykbn),
          ib = Lc,
          Ob = Mc(Ub, Vc.Ykbn),
          Gb = Lc,
          Kb = Mc(Ib, Vc.Ykbn),
          Zb = Lc,
          zb = fc(Hb, Vc.Ykbn),
          qb = Lc;
        var Ab = Uc(fb) ? 0 : Ic(fb, Vc.Ykbn),
          wb = Lc;
        const rb = Hc(Mb, Vc.Ykbn),
          ob = Lc,
          Sb = fc(Xb, Vc.Ykbn),
          Rb = Lc;
        var vb = Uc(nb) ? 0 : fc(nb, Vc.Ykbn),
          Fb = Lc;
        const xb = Mc(mb, Vc.Ykbn),
          jb = Lc,
          pb = Vc.O6sq(Vb, Lb, ub, Yb, hb, Jb, gb, Bb, tb, yb, Pb, Db, Eb, ib, Ob, Gb, Kb, Zb, zb, qb, Ab, wb, rb, ob, Sb, Rb, vb, Fb, xb, jb, lb, Qb, eb, Cb, Nb);
        if (pb[2]) throw nc(pb[1]);
        return this.__wbg_ptr = pb[0], db.register(this, this.__wbg_ptr, this), this
      }
      am(bb, cb) {
        const sb = Hc(bb, Vc.Ykbn),
          kb = Lc,
          Wb = Vc.o9Vy(this.__wbg_ptr, sb, kb, cb);
        if (Wb[3]) throw nc(Wb[2]);
        var ab = Rb(Wb[0], Wb[1]).slice();
        return Vc.qhzt(Wb[0], 1 * Wb[1], 1), ab
      }
      Um(bb) {
        Vc.MiVk(this.__wbg_ptr, Uc(bb) ? 16777215 : bb)
      }
      Im(bb) {
        return Vc.T9CV(this.__wbg_ptr, bb) >>> 0
      }
      fm() {
        return Vc.Yevf(this.__wbg_ptr) >>> 0
      }
      Hm() {
        const bb = Vc.DdwW(this.__wbg_ptr);
        if (bb[2]) throw nc(bb[1]);
        return 0 !== bb[0]
      }
      Mm() {
        return Vc.n9O7(this.__wbg_ptr) >>> 0
      }
      Xm() {
        return Vc.K2cC(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Mb.prototype[Symbol.dispose] = Mb.prototype.free);
    class Xb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Ab.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        Vc.QDVy(bb, 0)
      }
      compute(bb, cb, sb, kb) {
        var Wb = Uc(kb) ? 0 : Xc(kb, Vc.Ykbn, Vc.bF7S),
          ab = Lc;
        const Tb = Vc.JOTX(this.__wbg_ptr, bb, Uc(cb) ? Number.MAX_SAFE_INTEGER : cb | 0, sb, Wb, ab);
        if (Tb[2]) throw nc(Tb[1]);
        return Tb[0] >>> 0
      }
      Rn(bb) {
        const cb = Xc(bb, Vc.Ykbn, Vc.bF7S),
          sb = Lc;
        Vc.fYg4(this.__wbg_ptr, cb, sb)
      }
      km() {
        return Vc.l4U1(this.__wbg_ptr) >>> 0
      }
      Wm() {
        return Vc.jS0B(this.__wbg_ptr) >>> 0
      }
      nm(bb) {
        const cb = Vc.DNih(this.__wbg_ptr, bb);
        if (cb[2]) throw nc(cb[1]);
        return cb[0] >>> 0
      }
      constructor(bb, cb, sb, kb, Wb, ab) {
        const Tb = Ic(bb, Vc.Ykbn),
          Ub = Lc,
          Ib = Mc(cb, Vc.Ykbn),
          Hb = Lc,
          fb = Hc(sb, Vc.Ykbn),
          Mb = Lc,
          Xb = fc(kb, Vc.Ykbn),
          nb = Lc,
          mb = Vc.hl6Z(Tb, Ub, Ib, Hb, fb, Mb, Xb, nb, Wb, ab);
        if (mb[2]) throw nc(mb[1]);
        return this.__wbg_ptr = mb[0], Ab.register(this, this.__wbg_ptr, this), this
      }
      fm() {
        return Vc.I4Bm(this.__wbg_ptr) >>> 0
      }
      Hm() {
        const bb = Vc.Y38g(this.__wbg_ptr);
        if (bb[2]) throw nc(bb[1]);
        return 0 !== bb[0]
      }
      Mm() {
        return Vc.Emwl(this.__wbg_ptr) >>> 0
      }
    }

    function nb() {
      const bb = Vc.TPVv();
      var cb = Sb(bb[0], bb[1]).slice();
      return Vc.qhzt(bb[0], 4 * bb[1], 4), cb
    }

    function mb(bb, cb) {
      let sb, kb;
      try {
        const Wb = Ic(bb, Vc.Ykbn),
          ab = Lc,
          Tb = Xc(cb, Vc.Ykbn, Vc.bF7S),
          Ub = Lc,
          Ib = Vc.DPdL(Wb, ab, Tb, Ub);
        return sb = Ib[0], kb = Ib[1], jb(Ib[0], Ib[1])
      } finally {
        Vc.qhzt(sb, kb, 1)
      }
    }

    function lb() {
      const bb = Vc.ufL2();
      var cb = Sb(bb[0], bb[1]).slice();
      return Vc.qhzt(bb[0], 4 * bb[1], 4), cb
    }

    function Qb(bb) {
      return 0 !== Vc.vJAV(bb)
    }

    function eb(bb, cb) {
      const sb = Xc(bb, Vc.Ykbn, Vc.bF7S),
        kb = Lc,
        Wb = Vc.mWLH(sb, kb, cb);
      if (Wb[1]) throw nc(Wb[0])
    }

    function Cb() {
      Vc.OOrR()
    }

    function Nb() {
      return Vc.H70S() >>> 0
    }

    function Vb(bb) {
      return 0 !== Vc.UExC(bb)
    }

    function Lb(bb) {
      return 0 !== Vc.SdNz(bb)
    }

    function ub(bb) {
      Vc.iS2a(bb)
    }

    function Yb() {
      return Vc.MOHR() >>> 0
    }

    function hb() {
      return Vc.zNsl() >>> 0
    }

    function Jb() {
      return 0 !== Vc.mcjy()
    }

    function gb() {
      const bb = Vc.KHzt();
      var cb = Sb(bb[0], bb[1]).slice();
      return Vc.qhzt(bb[0], 4 * bb[1], 4), cb
    }

    function Bb() {
      const bb = Vc.nASE();
      var cb = Sb(bb[0], bb[1]).slice();
      return Vc.qhzt(bb[0], 4 * bb[1], 4), cb
    }

    function tb() {
      const bb = Vc.izVt();
      var cb = Sb(bb[0], bb[1]).slice();
      return Vc.qhzt(bb[0], 4 * bb[1], 4), cb
    }

    function yb() {
      return Vc.X8sQ() >>> 0
    }

    function Pb() {
      Vc.H2zJ()
    }

    function Db() {
      let bb, cb;
      try {
        const sb = Vc.CMoB();
        return bb = sb[0], cb = sb[1], jb(sb[0], sb[1])
      } finally {
        Vc.qhzt(bb, cb, 1)
      }
    }

    function Eb(bb) {
      Vc.bqCX(wb(bb))
    }

    function ib() {
      return {
        __proto__: null,
        oPIm: {
          __proto__: null,
          O9Ga: function(bb, cb) {
            return wb(Error(jb(bb, cb)))
          },
          uOSi: function(bb, cb) {
            throw new Error(jb(bb, cb))
          },
          wMax: function(bb) {
            Wc(bb).call()
          },
          pHvN: function(bb, cb) {
            console.error(jb(bb, cb))
          },
          aIGw: function() {
            return performance.now()
          },
          c98A: function(bb) {
            nc(bb)
          }
        }
      }
    }
    Symbol.dispose && (Xb.prototype[Symbol.dispose] = Xb.prototype.free);
    const Ob = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => Vc.sspS(bb, 1))),
      Gb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => Vc.P7Yk(bb, 1))),
      Kb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => Vc.Co87(bb, 1))),
      Zb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => Vc.TxnZ(bb, 1))),
      zb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => Vc.ymUm(bb, 1))),
      qb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => Vc.WQGA(bb, 1))),
      db = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => Vc.aQnq(bb, 1))),
      Ab = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => Vc.QDVy(bb, 1)));

    function wb(bb) {
      Tc === ac.length && ac.push(ac.length + 1);
      const cb = Tc;
      return Tc = ac[cb], ac[cb] = bb, cb
    }

    function rb(bb, cb) {
      if (!(bb instanceof cb)) throw new Error(`expected instance of ${cb.name}`)
    }

    function ob(bb, cb) {
      return bb >>>= 0, Fb().subarray(bb / 8, bb / 8 + cb)
    }

    function Sb(bb, cb) {
      return bb >>>= 0, cc().subarray(bb / 4, bb / 4 + cb)
    }

    function Rb(bb, cb) {
      return bb >>>= 0, kc().subarray(bb / 1, bb / 1 + cb)
    }
    let vb = null;

    function Fb() {
      return null !== vb && 0 !== vb.byteLength || (vb = new Float64Array(Vc.memory.buffer)), vb
    }
    let xb = null;

    function jb(bb, cb) {
      return function(bb, cb) {
        Qc += cb, Qc >= lc && (mc = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), mc.decode(), Qc = cb);
        return mc.decode(kc().subarray(bb, bb + cb))
      }(bb >>> 0, cb)
    }
    let pb = null;
    let bc = null;

    function cc() {
      return null !== bc && 0 !== bc.byteLength || (bc = new Uint32Array(Vc.memory.buffer)), bc
    }
    let sc = null;

    function kc() {
      return null !== sc && 0 !== sc.byteLength || (sc = new Uint8Array(Vc.memory.buffer)), sc
    }

    function Wc(bb) {
      return ac[bb]
    }
    let ac = new Array(1024).fill(void 0);
    ac.push(void 0, null, !0, !1);
    let Tc = ac.length;

    function Uc(bb) {
      return void 0 === bb || null === bb
    }

    function Ic(bb, cb) {
      const sb = cb(2 * bb.length, 2) >>> 0;
      return (null !== pb && 0 !== pb.byteLength || (pb = new Uint16Array(Vc.memory.buffer)), pb).set(bb, sb / 2), Lc = bb.length, sb
    }

    function Hc(bb, cb) {
      const sb = cb(4 * bb.length, 4) >>> 0;
      return cc().set(bb, sb / 4), Lc = bb.length, sb
    }

    function fc(bb, cb) {
      const sb = cb(1 * bb.length, 1) >>> 0;
      return kc().set(bb, sb / 1), Lc = bb.length, sb
    }

    function Mc(bb, cb) {
      const sb = cb(8 * bb.length, 8) >>> 0;
      return Fb().set(bb, sb / 8), Lc = bb.length, sb
    }

    function Xc(bb, cb, sb) {
      if (void 0 === sb) {
        const sb = ec.encode(bb),
          kb = cb(sb.length, 1) >>> 0;
        return kc().subarray(kb, kb + sb.length).set(sb), Lc = sb.length, kb
      }
      let kb = bb.length,
        Wb = cb(kb, 1) >>> 0;
      const ab = kc();
      let Tb = 0;
      for (; Tb < kb; Tb++) {
        const cb = bb.charCodeAt(Tb);
        if (cb > 127) break;
        ab[Wb + Tb] = cb
      }
      if (Tb !== kb) {
        0 !== Tb && (bb = bb.slice(Tb)), Wb = sb(Wb, kb, kb = Tb + 3 * bb.length, 1) >>> 0;
        const cb = kc().subarray(Wb + Tb, Wb + kb);
        Tb += ec.encodeInto(bb, cb).written, Wb = sb(Wb, kb, Tb, 1) >>> 0
      }
      return Lc = Tb, Wb
    }

    function nc(bb) {
      const cb = Wc(bb);
      return function(bb) {
        bb < 1028 || (ac[bb] = Tc, Tc = bb)
      }(bb), cb
    }
    let mc = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    mc.decode();
    const lc = 2146435072;
    let Qc = 0;
    const ec = new TextEncoder;
    "encodeInto" in ec || (ec.encodeInto = function(bb, cb) {
      const sb = ec.encode(bb);
      return cb.set(sb), {
        read: bb.length,
        written: sb.length
      }
    });
    let Cc, Nc, Vc, Lc = 0;

    function uc(bb, cb) {
      return Nc = bb, Vc = bb.exports, Cc = cb, vb = null, xb = null, pb = null, bc = null, sc = null, Vc.l35B(), Vc
    }

    function Yc(bb) {
      if (void 0 !== Vc) return Vc;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module: bb
      } = bb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const cb = ib();
      bb instanceof WebAssembly.Module || (bb = new WebAssembly.Module(bb));
      return uc(new WebAssembly.Instance(bb, cb), bb)
    }
    async function hc(bb) {
      if (void 0 !== Vc) return Vc;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module_or_path: bb
      } = bb) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const cb = ib();
      ("string" === typeof bb || "function" === typeof Request && bb instanceof Request || "function" === typeof URL && bb instanceof URL) && (bb = fetch(bb));
      const {
        instance: sb,
        module: kb
      } = await async function(bb, cb) {
        if ("function" === typeof Response && bb instanceof Response) {
          if (!bb.ok) throw new Error(`failed to fetch Wasm: ${bb.status} ${bb.statusText} fetching '${bb.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(bb, cb)
          } catch (sb) {
            if (! function(bb) {
                switch (bb) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(bb.type) || "application/wasm" === bb.headers.get("Content-Type")) throw sb;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", sb)
          }
          const kb = await bb.arrayBuffer();
          return await WebAssembly.instantiate(kb, cb)
        } {
          const sb = await WebAssembly.instantiate(bb, cb);
          return sb instanceof WebAssembly.Instance ? {
            instance: sb,
            module: bb
          } : sb
        }
      }(await bb, cb);
      return uc(sb, kb)
    }
    var Jc = sb(3500),
      gc = sb(35976);
    const Bc = {
      name: Jc.d,
      url: () => new sb.U(sb(35983)),
      init: hc,
      bindings: kb
    };

    function tc() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bc,
        cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bc,
        sb = arguments.length > 2 ? arguments[2] : void 0;
      return (0, gc.j)(bb, cb, sb)
    }

    function yc(bb) {
      return (0, Jc.K)((() => bb), kb, Bc)
    }
  },
  35957: (bb, cb, sb) => {
    function kb(bb, cb) {
      return new Error(`${bb}: ${cb instanceof Error?`${cb.name}: ${cb.message}`:String(cb)}`, {
        cause: cb
      })
    }
    sb.d(cb, {
      c: () => kb
    })
  },
  35949: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb,
      i: () => Ib
    });
    var kb = sb(3505),
      Wb = sb(6285),
      ab = sb(35957);

    function Tb() {
      return new URL(new sb.U(sb(35965)).href, globalThis.location?.href).href
    }
    let Ub = null;

    function Ib() {
      return Ub ??= (async () => (0, kb.A)(new URL(Tb()), (0, Wb.d)("bloxd_wasm_textures")))().catch((bb => {
        throw (0, ab.c)((0, kb.E)(bb), bb)
      })), Ub
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);