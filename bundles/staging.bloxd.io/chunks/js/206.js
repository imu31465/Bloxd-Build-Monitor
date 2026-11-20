export const id = 206;
export const ids = [206, 207];
export const modules = {
  35732: (bb, ab, Ub) => {
    Ub.d(ab, {
      reportCappedWasmFailure: () => Eb,
      reportWasmFailure: () => Tb
    });
    var Ab = Ub(2653);
    const Mb = Ab.c - 4;

    function Tb(bb, ab, Ub) {
      (0, Ab.e)(bb, ab, Ub, !1)
    }

    function Eb(bb, ab, Ub) {
      (0, Ab.e)(bb, ab, Ub, !1, Mb)
    }
  },
  35728: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => zb,
      e: () => fb,
      h: () => mb,
      i: () => xb
    });
    var Ab = Ub(35748),
      Mb = Ub(3376),
      Tb = Ub(35768),
      Eb = Ub(3382),
      Yb = Ub(35732),
      Bb = Ub(2643),
      eb = Ub(2956),
      vb = Ub(2953),
      Lb = Ub(35739),
      Pb = Ub(2653),
      Xb = Ub(35745),
      jb = Ub(3368);
    let Rb = !1;
    const kb = 40;
    var yb = Ub(666);
    const Zb = "bloxdWasmFailureReported";

    function Db() {
      return "undefined" === typeof WebAssembly
    }

    function zb() {
      return (0, Ab.g)()
    }

    function xb() {
      if (Db()) return "this browser has no WebAssembly";
      const bb = (0, Mb.l)();
      return "compile" === bb || "instantiate" === bb ? `the core wasm didn't load here (${(0,Mb.e)()})` : null
    }
    async function ib(bb) {
      return await (0, Tb.e)(Tb.d, void 0, bb)
    }

    function fb() {
      Db() || (0, yb.e)((() => {
        ib()
      }))
    }

    function mb() {
      if (Db()) return async () => ((0, Bb.i)("unsupported", 0), pb("unsupported", "This browser has no WebAssembly"), !1);
      const bb = {
        reloadFailedDownload: !0
      };
      return ib(bb), async () => {
        var ab;
        const Ub = performance.now();
        await ib(bb);
        const Ab = (performance.now() - Ub) / 1e3;
        if ((0, Mb.H)()) return (0, Bb.i)("ready", Ab), Rb || (Rb = !0, (0, Mb.M)((() => {
          if ("call" !== (0, Mb.l)()) return;
          const bb = (0, Mb.k)(),
            ab = (0, Lb.h)(bb, Mb.A, Mb.T),
            Ub = (0, Mb.q)().buffer.byteLength,
            Ab = (0, Lb.e)(ab.kind, ab.refusedBytes),
            Tb = Ab ? "alloc_failed" : ab.kind,
            Eb = 2 ** Math.floor(Math.log2(Math.max(1, Ub / 2 ** 20))),
            Yb = Ab ? `_r${Math.floor(Math.log2(ab.refusedBytes))}` : "",
            Bb = (0, jb.c)();
          null === Bb && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const eb = new Error((0, Xb.c)(bb, Ub, ab));
          if (bb instanceof Error && void 0 !== bb.stack) {
            const ab = bb.stack.split("\n"),
              Ub = ab.length > kb ? [...ab.slice(0, kb / 2), ...ab.slice(-kb / 2)] : ab;
            eb.stack = Ub.join("\n")
          }(0, Pb.e)("wasm_load", eb, `wasm_call_${Tb}_${null!==Bb&&void 0!==Bb?Bb:"unnamed"}_m${Eb}${Yb}`)
        }))), (0, Eb.N)(Tb.d.url()) && (0, Yb.reportCappedWasmFailure)("wasm_load", eb.d.message, eb.d.code), !0;
        const yb = vb.e[null !== (ab = (0, Mb.l)()) && void 0 !== ab ? ab : "call"];
        return (0, Bb.i)(yb, Ab), pb(yb, (0, Mb.e)()), !1
      }
    }

    function pb(bb, ab) {
      (0, vb.l)(Zb, `Bloxd wasm ${bb}, so the game can't start: ${ab}`, ab, bb)
    }
  },
  35781: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/bloxd_wasm_bg.1f325dfe176299462ec6.wasm"
  },
  35761: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/bloxd_wasm_textures_bg.5314473f91d350a5c7b1.wasm"
  },
  35768: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Wa,
      e: () => Ha,
      g: () => Ia
    });
    var Ab = {};
    Ub.r(Ab), Ub.d(Ab, {
      qv: () => Mb,
      EnvelopeKind: () => Tb,
      rv: () => Eb,
      PhysicsEngine: () => Yb,
      Kv: () => Bb,
      ov: () => eb,
      lv: () => vb,
      tv: () => Lb,
      wv: () => Pb,
      sv: () => Xb,
      gv: () => jb,
      Cv: () => Rb,
      Vv: () => kb,
      Ov: () => yb,
      default: () => ma,
      initSync: () => fa,
      cv: () => Zb,
      Jv: () => Db,
      nv: () => zb,
      Sv: () => xb,
      bL: () => ib,
      aL: () => fb,
      UL: () => mb,
      AL: () => pb,
      ML: () => Nb,
      TL: () => Wb,
      EL: () => Hb,
      YL: () => Ib,
      BL: () => db,
      eL: () => Fb,
      vL: () => hb
    });
    class Mb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Qb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        za.FYUo(bb, 0)
      }
      LL() {
        const bb = za.EBLp(this.__wbg_ptr);
        if (bb[2]) throw Xa(bb[1]);
        return bb[0] >>> 0
      }
      PL() {
        return za.smPK(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const bb = za.QYcp();
        return this.__wbg_ptr = bb, Qb.register(this, this.__wbg_ptr, this), this
      }
      XL() {
        return za.NhiS(this.__wbg_ptr) >>> 0
      }
      jL(bb) {
        const ab = za.PdBy(this.__wbg_ptr, bb);
        if (ab[2]) throw Xa(ab[1]);
        return ab[0] >>> 0
      }
      RL(bb) {
        const ab = za.Zydm(this.__wbg_ptr, bb);
        if (ab[2]) throw Xa(ab[1]);
        return ab[0] >>> 0
      }
    }
    Symbol.dispose && (Mb.prototype[Symbol.dispose] = Mb.prototype.free);
    const Tb = Object.freeze({
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
    class Eb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, qb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        za.NU4R(bb, 0)
      }
      ZL(bb, ab) {
        const Ub = za.fkfd(this.__wbg_ptr, bb, ab);
        if (Ub[2]) throw Xa(Ub[1]);
        return Ub[0] >>> 0
      }
      DL(bb) {
        const ab = za.p5PN(this.__wbg_ptr, bb);
        if (ab[2]) throw Xa(ab[1]);
        return ab[0] >>> 0
      }
      zL() {
        za.q66E(this.__wbg_ptr)
      }
      static xL() {
        return za.BCoq() >>> 0
      }
      iL() {
        return za.G3iV(this.__wbg_ptr) >>> 0
      }
      fL() {
        const bb = za.ykZD(this.__wbg_ptr);
        return 0 === bb[0] ? void 0 : bb[1]
      }
      mL() {
        return za.BvUi(this.__wbg_ptr) >>> 0
      }
      pL() {
        return za.nCyD(this.__wbg_ptr) >>> 0
      }
      static yL() {
        return za.sKib() >>> 0
      }
      constructor() {
        const bb = za.tIs0();
        return this.__wbg_ptr = bb, qb.register(this, this.__wbg_ptr, this), this
      }
      NL() {
        return za.G1v9(this.__wbg_ptr) >>> 0
      }
      WL() {
        return za.jOM1(this.__wbg_ptr) >>> 0
      }
      HL() {
        return za.el9e(this.__wbg_ptr) >>> 0
      }
      kL(bb) {
        return za.AMpo(this.__wbg_ptr, bb) >>> 0
      }
      reserve(bb, ab) {
        const Ub = za.yJ2c(this.__wbg_ptr, bb, ab);
        if (Ub[1]) throw Xa(Ub[0])
      }
      FL(bb, ab) {
        const Ub = ea(bb, za.L66I),
          Ab = xa;
        za.o67V(this.__wbg_ptr, Ub, Ab, ab)
      }
      text() {
        let bb, ab;
        try {
          const Ub = za.u685(this.__wbg_ptr);
          return bb = Ub[0], ab = Ub[1], nb(Ub[0], Ub[1])
        } finally {
          za.feUU(bb, ab, 1)
        }
      }
    }
    Symbol.dispose && (Eb.prototype[Symbol.dispose] = Eb.prototype.free);
    class Yb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ub.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        za.byP4(bb, 0)
      }
      QL(bb, ab) {
        sb(ab, Mb);
        const Ub = za.K6SX(this.__wbg_ptr, bb, ab.__wbg_ptr);
        if (Ub[2]) throw Xa(Ub[1]);
        return Ub[0] >>> 0
      }
      uL() {
        const bb = za.H8xD(this.__wbg_ptr);
        if (bb[1]) throw Xa(bb[0])
      }
      tL(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, eb, vb, Lb) {
        sb(bb, Bb);
        const Pb = za.VMiy(this.__wbg_ptr, bb.__wbg_ptr, ab, Ub, Ab, Mb, Tb, Eb, Yb, eb, vb, Lb);
        if (Pb[2]) throw Xa(Pb[1]);
        return Pb[0]
      }
      wL() {
        const bb = za.orY7(this.__wbg_ptr);
        var ab = gb(bb[0], bb[1]).slice();
        return za.feUU(bb[0], 8 * bb[1], 8), ab
      }
      sL() {
        return za.OFlw(this.__wbg_ptr) >>> 0
      }
      gL() {
        return za.d3Qe(this.__wbg_ptr) >>> 0
      }
      CL() {
        return za.pS2K(this.__wbg_ptr) >>> 0
      }
      constructor(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
        const Bb = za.XImN(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb);
        if (Bb[2]) throw Xa(Bb[1]);
        return this.__wbg_ptr = Bb[0], ub.register(this, this.__wbg_ptr, this), this
      }
      cL(bb) {
        sb(bb, Mb);
        const ab = za.wO1J(this.__wbg_ptr, bb.__wbg_ptr);
        if (ab[2]) throw Xa(ab[1]);
        return ab[0] >>> 0
      }
      JL(bb) {
        const ab = za.JPaA(this.__wbg_ptr, bb);
        if (ab[1]) throw Xa(ab[0])
      }
      nL() {
        return za.IfjE(this.__wbg_ptr) >>> 0
      }
      resume(bb, ab) {
        sb(bb, Bb), sb(ab, Mb);
        const Ub = za.a7yE(this.__wbg_ptr, bb.__wbg_ptr, ab.__wbg_ptr);
        if (Ub[2]) throw Xa(Ub[1]);
        return Ub[0] >>> 0
      }
      AP(bb) {
        const ab = za.B2Z9(this.__wbg_ptr, bb);
        if (ab[1]) throw Xa(ab[0])
      }
      EP(bb, ab) {
        sb(ab, Mb);
        const Ub = za.i78U(this.__wbg_ptr, bb, ab.__wbg_ptr);
        if (Ub[1]) throw Xa(Ub[0])
      }
      eP(bb) {
        const ab = La(bb, za.L66I),
          Ub = xa,
          Ab = za.MLF6(this.__wbg_ptr, ab, Ub);
        if (Ab[1]) throw Xa(Ab[0])
      }
      KL(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = za.jfob(this.__wbg_ptr, bb, ab, Ub, Ab, Mb, Tb);
        if (Eb[1]) throw Xa(Eb[0])
      }
      oL(bb, ab, Ub, Ab) {
        const Mb = ea(bb, za.L66I),
          Tb = xa,
          Eb = La(ab, za.L66I),
          Yb = xa,
          Bb = La(Ub, za.L66I),
          eb = xa,
          vb = La(Ab, za.L66I),
          Lb = xa,
          Pb = za.UCMw(this.__wbg_ptr, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb);
        if (Pb[1]) throw Xa(Pb[0])
      }
      LP(bb, ab) {
        sb(ab, Mb);
        const Ub = za.gfPM(this.__wbg_ptr, bb, ab.__wbg_ptr);
        if (Ub[1]) throw Xa(Ub[0])
      }
      OL(bb, ab, Ub) {
        const Ab = za.FVJE(this.__wbg_ptr, bb, ab, Ub);
        if (Ab[1]) throw Xa(Ab[0])
      }
      XP(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, eb, vb) {
        sb(bb, Bb);
        return za.haD6(this.__wbg_ptr, bb.__wbg_ptr, ab, Ub, Ab, Mb, Tb, Eb, Yb, eb, vb)
      }
    }
    Symbol.dispose && (Yb.prototype[Symbol.dispose] = Yb.prototype.free);
    class Bb {
      static __wrap(bb) {
        const ab = Object.create(Bb.prototype);
        return ab.__wbg_ptr = bb, rb.register(ab, ab.__wbg_ptr, ab), ab
      }
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, rb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        za.UzgU(bb, 0)
      }
      kP(bb) {
        const ab = za.sjlC(this.__wbg_ptr, bb);
        if (ab[2]) throw Xa(ab[1]);
        return ab[0] >>> 0
      }
      yP(bb, ab, Ub) {
        return za.Rhm5(this.__wbg_ptr, bb, ab, Ub)
      }
      ZP(bb, ab, Ub) {
        return za.c54v(this.__wbg_ptr, bb, ab, Ub) >>> 0
      }
      DP(bb, ab, Ub, Ab) {
        return 0 !== za.XNRC(this.__wbg_ptr, bb, ab, Ub, Ab)
      }
      zP() {
        za.kNst(this.__wbg_ptr)
      }
      iP(bb) {
        const ab = za.yaGG(this.__wbg_ptr, bb);
        if (ab[3]) throw Xa(ab[2]);
        var Ub = Vb(ab[0], ab[1]).slice();
        return za.feUU(ab[0], 1 * ab[1], 1), Ub
      }
      evict(bb, ab) {
        return za.Qic5(this.__wbg_ptr, bb, ab) >>> 0
      }
      fP() {
        za.ix4S(this.__wbg_ptr)
      }
      mP(bb, ab, Ub) {
        za.YmeU(this.__wbg_ptr, bb, ab, Ub)
      }
      pP(bb) {
        const ab = za.qaOP(this.__wbg_ptr, bb);
        if (ab[1]) throw Xa(ab[0])
      }
      NP() {
        return za.Wrvz(this.__wbg_ptr) >>> 0
      }
      WP() {
        return za.TcCH(this.__wbg_ptr) >>> 0
      }
      HP(bb, ab, Ub) {
        za.jDm2(this.__wbg_ptr, bb, ab, Ub)
      }
      IP(bb, ab, Ub) {
        za.awDX(this.__wbg_ptr, bb, ab, Ub)
      }
      dP() {
        return za.ffFk(this.__wbg_ptr) >>> 0
      }
      FP() {
        return za.bRwO(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const bb = za.U1d5();
        return this.__wbg_ptr = bb, rb.register(this, this.__wbg_ptr, this), this
      }
      static hP() {
        const bb = za.SuJo();
        return Bb.__wrap(bb)
      }
      GP() {
        return za.B2vy(this.__wbg_ptr) >>> 0
      }
      QP() {
        return za.Zo3h(this.__wbg_ptr) >>> 0
      }
      qP(bb, ab, Ub, Ab) {
        const Mb = za.db9s(this.__wbg_ptr, bb, ab, Ub, Ab);
        if (Mb[1]) throw Xa(Mb[0])
      }
      uP() {
        return za.DKIb(this.__wbg_ptr) >>> 0
      }
      rP() {
        return za.Ojs3(this.__wbg_ptr) >>> 0
      }
      KP(bb, ab, Ub, Ab) {
        za.VVV8(this.__wbg_ptr, bb, ab, Ub, Ab)
      }
      oP(bb) {
        za.CoAK(this.__wbg_ptr, bb)
      }
      tP(bb, ab, Ub, Ab, Mb) {
        const Tb = va(ab, za.L66I),
          Eb = xa,
          Yb = ea(Ub, za.L66I),
          Bb = xa,
          eb = La(Ab, za.L66I),
          vb = xa,
          Lb = za.kX44(this.__wbg_ptr, bb, Tb, Eb, Yb, Bb, eb, vb, Mb);
        if (Lb[1]) throw Xa(Lb[0])
      }
      lP(bb, ab, Ub, Ab) {
        const Mb = va(bb, za.L66I),
          Tb = xa,
          Eb = ea(ab, za.L66I),
          Yb = xa,
          Bb = La(Ub, za.L66I),
          eb = xa,
          vb = va(Ab, za.L66I),
          Lb = xa,
          Pb = za.qwi4(this.__wbg_ptr, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb);
        if (Pb[1]) throw Xa(Pb[0])
      }
      OP(bb) {
        const ab = va(bb, za.L66I),
          Ub = xa,
          Ab = za.IhNi(this.__wbg_ptr, ab, Ub);
        if (Ab[1]) throw Xa(Ab[0])
      }
      cP() {
        return za.VqQK(this.__wbg_ptr) >>> 0
      }
      JP(bb) {
        const ab = za.nboo(this.__wbg_ptr, bb);
        if (ab[2]) throw Xa(ab[1]);
        return ab[0] >>> 0
      }
      steer() {
        return za.hBjh(this.__wbg_ptr) >>> 0
      }
      nP() {
        const bb = za.e37q(this.__wbg_ptr);
        var ab = gb(bb[0], bb[1]).slice();
        return za.feUU(bb[0], 8 * bb[1], 8), ab
      }
      SP() {
        return za.dAaM(this.__wbg_ptr) >>> 0
      }
      bP() {
        const bb = za.i7dE(this.__wbg_ptr);
        var ab, Ub, Ab = (ab = bb[0], Ub = bb[1], ab >>>= 0, (null !== Jb && 0 !== Jb.byteLength || (Jb = new Int32Array(za.memory.buffer)), Jb).subarray(ab / 4, ab / 4 + Ub)).slice();
        return za.feUU(bb[0], 4 * bb[1], 4), Ab
      }
    }
    Symbol.dispose && (Bb.prototype[Symbol.dispose] = Bb.prototype.free);
    class eb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Kb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        za.oI3r(bb, 0)
      }
      bX(bb) {
        const ab = ea(bb, za.L66I),
          Ub = xa,
          Ab = za.Ji9p(this.__wbg_ptr, ab, Ub);
        if (Ab[1]) throw Xa(Ab[0])
      }
      aX() {
        return za.gzZT(this.__wbg_ptr) >>> 0
      }
      UX() {
        return za.q35C(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const bb = za.Tn5p();
        return this.__wbg_ptr = bb, Kb.register(this, this.__wbg_ptr, this), this
      }
      run(bb, ab) {
        sb(bb, Bb);
        const Ub = za.zFm5(this.__wbg_ptr, bb.__wbg_ptr, ab);
        if (Ub[2]) throw Xa(Ub[1]);
        return Ub[0] >>> 0
      }
      AX(bb) {
        const ab = ea(bb, za.L66I),
          Ub = xa;
        za.xOp7(this.__wbg_ptr, ab, Ub)
      }
      MX(bb) {
        const ab = ea(bb, za.L66I),
          Ub = xa;
        za.xrR4(this.__wbg_ptr, ab, Ub)
      }
    }
    Symbol.dispose && (eb.prototype[Symbol.dispose] = eb.prototype.free);
    class vb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ob.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        za.rKkz(bb, 0)
      }
      EX(bb, ab) {
        const Ub = va(bb, za.L66I),
          Ab = xa;
        return za.azWE(this.__wbg_ptr, Ub, Ab, ab) >>> 0
      }
      YX(bb, ab, Ub) {
        sb(bb, Bb);
        const Ab = va(Ub, za.L66I),
          Mb = xa,
          Tb = za.VrrS(this.__wbg_ptr, bb.__wbg_ptr, ab, Ab, Mb);
        if (Tb[2]) throw Xa(Tb[1]);
        return Tb[0] >>> 0
      }
      TX(bb) {
        return za.BnFu(this.__wbg_ptr, bb) >>> 0
      }
      constructor() {
        const bb = za.nlLb();
        return this.__wbg_ptr = bb, ob.register(this, this.__wbg_ptr, this), this
      }
      scan(bb, ab) {
        sb(bb, Bb);
        const Ub = za.Xe73(this.__wbg_ptr, bb.__wbg_ptr, ab);
        if (Ub[2]) throw Xa(Ub[1]);
        return Ub[0] >>> 0
      }
      vX(bb) {
        const ab = va(bb, za.L66I),
          Ub = xa;
        za.kPMU(this.__wbg_ptr, ab, Ub)
      }
      eX() {
        return za.ehFH(this.__wbg_ptr) >>> 0
      }
      BX() {
        return za.KgxI(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (vb.prototype[Symbol.dispose] = vb.prototype.free);
    class Lb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, lb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        za.Wlfw(bb, 0)
      }
      PX(bb) {
        const ab = za.PyQT(this.__wbg_ptr, bb);
        if (ab[2]) throw Xa(ab[1]);
        return ab[0] >>> 0
      }
      compute(bb, ab, Ub, Ab) {
        var Mb = Ya(Ab) ? 0 : Pa(Ab, za.L66I, za.GWsM),
          Tb = xa;
        const Eb = za.YCx6(this.__wbg_ptr, bb, Ya(ab) ? Number.MAX_SAFE_INTEGER : ab | 0, Ub, Mb, Tb);
        if (Eb[2]) throw Xa(Eb[1]);
        return Eb[0] >>> 0
      }
      jX(bb) {
        const ab = Pa(bb, za.L66I, za.GWsM),
          Ub = xa;
        za.B5P0(this.__wbg_ptr, ab, Ub)
      }
      kX() {
        return za.pSTx(this.__wbg_ptr)
      }
      yX(bb) {
        return za.bKNy(this.__wbg_ptr, bb) >>> 0
      }
      ZX() {
        return za.XKaQ(this.__wbg_ptr) >>> 0
      }
      DX() {
        return za.jal2(this.__wbg_ptr) >>> 0
      }
      zX(bb, ab) {
        const Ub = za.cHnw(this.__wbg_ptr, bb, ab);
        if (Ub[1]) throw Xa(Ub[0])
      }
      xX() {
        return za.Sqyy(this.__wbg_ptr) >>> 0
      }
      iX() {
        return za.ZvVN(this.__wbg_ptr) >>> 0
      }
      fX() {
        return za.k104(this.__wbg_ptr) >>> 0
      }
      XX(bb, ab, Ub) {
        const Ab = ea(bb, za.L66I),
          Mb = xa,
          Tb = ea(ab, za.L66I),
          Eb = xa,
          Yb = za.KiJf(this.__wbg_ptr, Ab, Mb, Tb, Eb, Ub);
        if (Yb[1]) throw Xa(Yb[0])
      }
      pX() {
        return za.Lfnq(this.__wbg_ptr) >>> 0
      }
      mesh(bb, ab, Ub, Ab, Mb) {
        const Tb = za.hUvE(this.__wbg_ptr, bb, ab, Ub, Ab, Mb);
        if (Tb[2]) throw Xa(Tb[1]);
        return Tb[0] >>> 0
      }
      constructor(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb, Rb, kb, yb, Zb, Db) {
        const zb = Ba(bb, za.L66I),
          xb = xa,
          ib = La(ab, za.L66I),
          fb = xa,
          mb = ea(Ub, za.L66I),
          pb = xa,
          Nb = va(Ab, za.L66I),
          Wb = xa,
          Hb = va(Mb, za.L66I),
          Ib = xa,
          db = ea(Tb, za.L66I),
          Fb = xa,
          hb = ea(Eb, za.L66I),
          Gb = xa,
          Qb = La(Yb, za.L66I),
          qb = xa,
          ub = La(Bb, za.L66I),
          rb = xa,
          Kb = va(eb, za.L66I),
          ob = xa;
        var tb = Ya(vb) ? 0 : Ba(vb, za.L66I),
          wb = xa;
        const sb = ea(Lb, za.L66I),
          gb = xa,
          Cb = va(Pb, za.L66I),
          Vb = xa;
        var Ob = Ya(Xb) ? 0 : va(Xb, za.L66I),
          cb = xa;
        const Jb = La(jb, za.L66I),
          nb = xa,
          Sb = za.UBL9(zb, xb, ib, fb, mb, pb, Nb, Wb, Hb, Ib, db, Fb, hb, Gb, Qb, qb, ub, rb, Kb, ob, tb, wb, sb, gb, Cb, Vb, Ob, cb, Jb, nb, Rb, kb, yb, Zb, Db);
        if (Sb[2]) throw Xa(Sb[1]);
        return this.__wbg_ptr = Sb[0], lb.register(this, this.__wbg_ptr, this), this
      }
      mX(bb, ab) {
        const Ub = ea(bb, za.L66I),
          Ab = xa,
          Mb = za.MT9M(this.__wbg_ptr, Ub, Ab, ab);
        if (Mb[3]) throw Xa(Mb[2]);
        var Tb = Vb(Mb[0], Mb[1]).slice();
        return za.feUU(Mb[0], 1 * Mb[1], 1), Tb
      }
      NX(bb) {
        za.ItSL(this.__wbg_ptr, Ya(bb) ? 16777215 : bb)
      }
      WX(bb) {
        return za.JaY3(this.__wbg_ptr, bb) >>> 0
      }
      IX() {
        return za.EfI6(this.__wbg_ptr) >>> 0
      }
      HX() {
        const bb = za.ZIHk(this.__wbg_ptr);
        if (bb[2]) throw Xa(bb[1]);
        return 0 !== bb[0]
      }
      dX() {
        return za.aluH(this.__wbg_ptr) >>> 0
      }
      FX() {
        return za.gfUp(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Lb.prototype[Symbol.dispose] = Lb.prototype.free);
    class Pb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, tb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        za.XaR7(bb, 0)
      }
      compute(bb, ab, Ub, Ab) {
        var Mb = Ya(Ab) ? 0 : Pa(Ab, za.L66I, za.GWsM),
          Tb = xa;
        const Eb = za.sjoq(this.__wbg_ptr, bb, Ya(ab) ? Number.MAX_SAFE_INTEGER : ab | 0, Ub, Mb, Tb);
        if (Eb[2]) throw Xa(Eb[1]);
        return Eb[0] >>> 0
      }
      jX(bb) {
        const ab = Pa(bb, za.L66I, za.GWsM),
          Ub = xa;
        za.fLv7(this.__wbg_ptr, ab, Ub)
      }
      iX() {
        return za.EMe0(this.__wbg_ptr) >>> 0
      }
      fX() {
        return za.QA3I(this.__wbg_ptr) >>> 0
      }
      hX(bb) {
        const ab = za.uBkW(this.__wbg_ptr, bb);
        if (ab[2]) throw Xa(ab[1]);
        return ab[0] >>> 0
      }
      constructor(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = Ba(bb, za.L66I),
          Yb = xa,
          Bb = La(ab, za.L66I),
          eb = xa,
          vb = ea(Ub, za.L66I),
          Lb = xa,
          Pb = va(Ab, za.L66I),
          Xb = xa,
          jb = za.CVfy(Eb, Yb, Bb, eb, vb, Lb, Pb, Xb, Mb, Tb);
        if (jb[2]) throw Xa(jb[1]);
        return this.__wbg_ptr = jb[0], tb.register(this, this.__wbg_ptr, this), this
      }
      IX() {
        return za.q6Nq(this.__wbg_ptr) >>> 0
      }
      HX() {
        const bb = za.SWHu(this.__wbg_ptr);
        if (bb[2]) throw Xa(bb[1]);
        return 0 !== bb[0]
      }
      dX() {
        return za.zsZ4(this.__wbg_ptr) >>> 0
      }
    }

    function Xb() {
      const bb = za.IKLD();
      var ab = Cb(bb[0], bb[1]).slice();
      return za.feUU(bb[0], 4 * bb[1], 4), ab
    }

    function jb(bb, ab) {
      let Ub, Ab;
      try {
        const Mb = Ba(bb, za.L66I),
          Tb = xa,
          Eb = Pa(ab, za.L66I, za.GWsM),
          Yb = xa,
          Bb = za.iGFc(Mb, Tb, Eb, Yb);
        return Ub = Bb[0], Ab = Bb[1], nb(Bb[0], Bb[1])
      } finally {
        za.feUU(Ub, Ab, 1)
      }
    }

    function Rb() {
      const bb = za.qeGk();
      var ab = Cb(bb[0], bb[1]).slice();
      return za.feUU(bb[0], 4 * bb[1], 4), ab
    }

    function kb(bb) {
      return 0 !== za.PCqs(bb)
    }

    function yb(bb, ab) {
      const Ub = Pa(bb, za.L66I, za.GWsM),
        Ab = xa,
        Mb = za.Rbdk(Ub, Ab, ab);
      if (Mb[1]) throw Xa(Mb[0])
    }

    function Zb() {
      za.TRqn()
    }

    function Db() {
      return za.Adtx() >>> 0
    }

    function zb(bb) {
      return 0 !== za.u2s5(bb)
    }

    function xb(bb) {
      return 0 !== za.yOkb(bb)
    }

    function ib(bb) {
      za.tTFA(bb)
    }

    function fb() {
      return za.xXBd() >>> 0
    }

    function mb() {
      return za.Y5mY() >>> 0
    }

    function pb() {
      return 0 !== za.O79O()
    }

    function Nb() {
      const bb = za.Guu0();
      var ab = Cb(bb[0], bb[1]).slice();
      return za.feUU(bb[0], 4 * bb[1], 4), ab
    }

    function Wb() {
      const bb = za.Fz82();
      var ab = Cb(bb[0], bb[1]).slice();
      return za.feUU(bb[0], 4 * bb[1], 4), ab
    }

    function Hb() {
      const bb = za.iY9m();
      var ab = Cb(bb[0], bb[1]).slice();
      return za.feUU(bb[0], 4 * bb[1], 4), ab
    }

    function Ib() {
      return za.Y7Bh() >>> 0
    }

    function db() {
      za.jYyG()
    }

    function Fb() {
      let bb, ab;
      try {
        const Ub = za.kf1n();
        return bb = Ub[0], ab = Ub[1], nb(Ub[0], Ub[1])
      } finally {
        za.feUU(bb, ab, 1)
      }
    }

    function hb(bb) {
      za.vdQ9(wb(bb))
    }

    function Gb() {
      return {
        __proto__: null,
        I4xS: {
          __proto__: null,
          Z18U: function(bb, ab) {
            return wb(Error(nb(bb, ab)))
          },
          esmj: function(bb, ab) {
            throw new Error(nb(bb, ab))
          },
          ojls: function(bb) {
            Ma(bb).call()
          },
          Ba68: function(bb, ab) {
            console.error(nb(bb, ab))
          },
          HKcP: function() {
            return performance.now()
          },
          g9Vd: function(bb) {
            Xa(bb)
          }
        }
      }
    }
    Symbol.dispose && (Pb.prototype[Symbol.dispose] = Pb.prototype.free);
    const Qb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => za.FYUo(bb, 1))),
      qb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => za.NU4R(bb, 1))),
      ub = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => za.byP4(bb, 1))),
      rb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => za.UzgU(bb, 1))),
      Kb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => za.oI3r(bb, 1))),
      ob = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => za.rKkz(bb, 1))),
      lb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => za.Wlfw(bb, 1))),
      tb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => za.XaR7(bb, 1)));

    function wb(bb) {
      Ea === Ta.length && Ta.push(Ta.length + 1);
      const ab = Ea;
      return Ea = Ta[ab], Ta[ab] = bb, ab
    }

    function sb(bb, ab) {
      if (!(bb instanceof ab)) throw new Error(`expected instance of ${ab.name}`)
    }

    function gb(bb, ab) {
      return bb >>>= 0, cb().subarray(bb / 8, bb / 8 + ab)
    }

    function Cb(bb, ab) {
      return bb >>>= 0, aa().subarray(bb / 4, bb / 4 + ab)
    }

    function Vb(bb, ab) {
      return bb >>>= 0, Aa().subarray(bb / 1, bb / 1 + ab)
    }
    let Ob = null;

    function cb() {
      return null !== Ob && 0 !== Ob.byteLength || (Ob = new Float64Array(za.memory.buffer)), Ob
    }
    let Jb = null;

    function nb(bb, ab) {
      return function(bb, ab) {
        ka += ab, ka >= Ra && (ja = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), ja.decode(), ka = ab);
        return ja.decode(Aa().subarray(bb, bb + ab))
      }(bb >>> 0, ab)
    }
    let Sb = null;
    let ba = null;

    function aa() {
      return null !== ba && 0 !== ba.byteLength || (ba = new Uint32Array(za.memory.buffer)), ba
    }
    let Ua = null;

    function Aa() {
      return null !== Ua && 0 !== Ua.byteLength || (Ua = new Uint8Array(za.memory.buffer)), Ua
    }

    function Ma(bb) {
      return Ta[bb]
    }
    let Ta = new Array(1024).fill(void 0);
    Ta.push(void 0, null, !0, !1);
    let Ea = Ta.length;

    function Ya(bb) {
      return void 0 === bb || null === bb
    }

    function Ba(bb, ab) {
      const Ub = ab(2 * bb.length, 2) >>> 0;
      return (null !== Sb && 0 !== Sb.byteLength || (Sb = new Uint16Array(za.memory.buffer)), Sb).set(bb, Ub / 2), xa = bb.length, Ub
    }

    function ea(bb, ab) {
      const Ub = ab(4 * bb.length, 4) >>> 0;
      return aa().set(bb, Ub / 4), xa = bb.length, Ub
    }

    function va(bb, ab) {
      const Ub = ab(1 * bb.length, 1) >>> 0;
      return Aa().set(bb, Ub / 1), xa = bb.length, Ub
    }

    function La(bb, ab) {
      const Ub = ab(8 * bb.length, 8) >>> 0;
      return cb().set(bb, Ub / 8), xa = bb.length, Ub
    }

    function Pa(bb, ab, Ub) {
      if (void 0 === Ub) {
        const Ub = ya.encode(bb),
          Ab = ab(Ub.length, 1) >>> 0;
        return Aa().subarray(Ab, Ab + Ub.length).set(Ub), xa = Ub.length, Ab
      }
      let Ab = bb.length,
        Mb = ab(Ab, 1) >>> 0;
      const Tb = Aa();
      let Eb = 0;
      for (; Eb < Ab; Eb++) {
        const ab = bb.charCodeAt(Eb);
        if (ab > 127) break;
        Tb[Mb + Eb] = ab
      }
      if (Eb !== Ab) {
        0 !== Eb && (bb = bb.slice(Eb)), Mb = Ub(Mb, Ab, Ab = Eb + 3 * bb.length, 1) >>> 0;
        const ab = Aa().subarray(Mb + Eb, Mb + Ab);
        Eb += ya.encodeInto(bb, ab).written, Mb = Ub(Mb, Ab, Eb, 1) >>> 0
      }
      return xa = Eb, Mb
    }

    function Xa(bb) {
      const ab = Ma(bb);
      return function(bb) {
        bb < 1028 || (Ta[bb] = Ea, Ea = bb)
      }(bb), ab
    }
    let ja = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    ja.decode();
    const Ra = 2146435072;
    let ka = 0;
    const ya = new TextEncoder;
    "encodeInto" in ya || (ya.encodeInto = function(bb, ab) {
      const Ub = ya.encode(bb);
      return ab.set(Ub), {
        read: bb.length,
        written: Ub.length
      }
    });
    let Za, Da, za, xa = 0;

    function ia(bb, ab) {
      return Da = bb, za = bb.exports, Za = ab, Ob = null, Jb = null, Sb = null, ba = null, Ua = null, za.QfBV(), za
    }

    function fa(bb) {
      if (void 0 !== za) return za;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module: bb
      } = bb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ab = Gb();
      bb instanceof WebAssembly.Module || (bb = new WebAssembly.Module(bb));
      return ia(new WebAssembly.Instance(bb, ab), bb)
    }
    async function ma(bb) {
      if (void 0 !== za) return za;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module_or_path: bb
      } = bb) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ab = Gb();
      ("string" === typeof bb || "function" === typeof Request && bb instanceof Request || "function" === typeof URL && bb instanceof URL) && (bb = fetch(bb));
      const {
        instance: Ub,
        module: Ab
      } = await async function(bb, ab) {
        if ("function" === typeof Response && bb instanceof Response) {
          if (!bb.ok) throw new Error(`failed to fetch Wasm: ${bb.status} ${bb.statusText} fetching '${bb.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(bb, ab)
          } catch (Ub) {
            if (! function(bb) {
                switch (bb) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(bb.type) || "application/wasm" === bb.headers.get("Content-Type")) throw Ub;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Ub)
          }
          const Ab = await bb.arrayBuffer();
          return await WebAssembly.instantiate(Ab, ab)
        } {
          const Ub = await WebAssembly.instantiate(bb, ab);
          return Ub instanceof WebAssembly.Instance ? {
            instance: Ub,
            module: bb
          } : Ub
        }
      }(await bb, ab);
      return ia(Ub, Ab)
    }
    var pa = Ub(3376),
      Na = Ub(35776);
    const Wa = {
      name: pa.b,
      url: () => new Ub.U(Ub(35781)),
      init: ma,
      bindings: Ab
    };

    function Ha() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wa,
        ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wa,
        Ub = arguments.length > 2 ? arguments[2] : void 0;
      return (0, Na.k)(bb, ab, Ub)
    }

    function Ia(bb) {
      return (0, pa.F)((() => bb), Ab, Wa)
    }
  },
  35756: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      return new Error(`${bb}: ${ab instanceof Error?`${ab.name}: ${ab.message}`:String(ab)}`, {
        cause: ab
      })
    }
    Ub.d(ab, {
      c: () => Ab
    })
  },
  35748: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb,
      g: () => Bb
    });
    var Ab = Ub(3382),
      Mb = Ub(6251),
      Tb = Ub(35756);

    function Eb() {
      return new URL(new Ub.U(Ub(35761)).href, globalThis.location?.href).href
    }
    let Yb = null;

    function Bb() {
      return Yb ??= (async () => (0, Ab.A)(new URL(Eb()), (0, Mb.b)("bloxd_wasm_textures")))().catch((bb => {
        throw (0, Tb.c)((0, Ab.G)(bb), bb)
      })), Yb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);