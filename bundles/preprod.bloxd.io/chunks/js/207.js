export const id = 207;
export const ids = [207, 208];
export const modules = {
  36339: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => lq,
      reportCappedWasmFailure: () => xq,
      reportUncappedWasmFailure: () => mq,
      reportWasmFailure: () => Oq
    });
    var Yq = gq(2853);
    const lq = Yq.b - 4;

    function Oq(qq, Eq, gq) {
      (0, Yq.d)(qq, Eq, gq, !1)
    }

    function mq(qq, Eq, gq) {
      (0, Yq.d)(qq, Eq, gq, !1, 1 / 0)
    }

    function xq(qq, Eq, gq) {
      (0, Yq.d)(qq, Eq, gq, !1, lq)
    }
  },
  36331: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Qq,
      f: () => rq,
      h: () => vq,
      i: () => yq
    });
    var Yq = gq(36359),
      lq = gq(2797),
      Oq = gq(36372),
      mq = gq(2805),
      xq = gq(36339),
      Aq = gq(2841),
      cq = gq(3122),
      uq = gq(3120),
      Bq = gq(36345),
      Wq = gq(2853),
      Nq = gq(36350),
      aq = gq(36356),
      Vq = gq(3563);
    let dq = !1;
    const jq = 40;
    var Hq = gq(663);
    const oq = "bloxdWasmFailureReported";

    function Pq() {
      return "undefined" === typeof WebAssembly
    }

    function Qq() {
      return (0, Yq.g)()
    }

    function yq() {
      if (Pq()) return "this browser has no WebAssembly";
      const qq = (0, lq.s)();
      return "compile" === qq || "instantiate" === qq ? `the core wasm didn't load here (${(0,lq.m)()})` : null
    }
    async function tq(qq) {
      return await (0, Oq.f)(Oq.c, void 0, qq)
    }

    function rq() {
      Pq() || (0, Hq.c)((() => {
        tq()
      }))
    }

    function vq() {
      if (Pq()) return async () => ((0, Aq.l)("unsupported", 0), hq("unsupported", "This browser has no WebAssembly"), !1);
      const qq = {
        reloadFailedDownload: !0
      };
      return tq(qq), async () => {
        var Eq;
        const gq = performance.now();
        await tq(qq);
        const Yq = (performance.now() - gq) / 1e3;
        if ((0, lq.P)()) return (0, Aq.l)("ready", Yq), dq || (dq = !0, (0, lq.R)((() => {
          if ("call" !== (0, lq.s)()) return;
          const qq = (0, lq.p)(),
            Eq = (0, Bq.k)(qq, lq.G, lq._),
            gq = (0, lq.v)().buffer.byteLength,
            Yq = (0, Bq.g)(Eq.kind, Eq.refusedBytes),
            Oq = Yq ? "alloc_failed" : Eq.kind,
            mq = (0, Nq.j)(gq),
            xq = Yq ? `_r${Math.floor(Math.log2(Eq.refusedBytes))}` : "",
            Aq = (0, Vq.b)();
          null === Aq && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const cq = new Error((0, aq.b)(qq, gq, Eq));
          if (qq instanceof Error && void 0 !== qq.stack) {
            const Eq = qq.stack.split("\n"),
              gq = Eq.length > jq ? [...Eq.slice(0, jq / 2), ...Eq.slice(-jq / 2)] : Eq;
            cq.stack = gq.join("\n")
          }(0, Wq.d)("wasm_load", cq, `wasm_call_${Oq}_${null!==Aq&&void 0!==Aq?Aq:"unnamed"}_m${mq}${xq}`)
        }))), (0, mq.V)(Oq.c.url()) && (0, xq.reportCappedWasmFailure)("wasm_load", cq.d.message, cq.d.code), !0;
        const Hq = uq.c[null !== (Eq = (0, lq.s)()) && void 0 !== Eq ? Eq : "call"];
        return (0, Aq.l)(Hq, Yq), hq(Hq, (0, lq.m)()), !1
      }
    }

    function hq(qq, Eq) {
      (0, uq.e)(oq, `Bloxd wasm ${qq}, so the game can't start: ${Eq}`, Eq, qq)
    }
  },
  36384: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/bloxd_wasm_bg.567100f455f46cbfa6a7.wasm"
  },
  36370: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/bloxd_wasm_textures_bg.6d9847a3dd7a203a52fe.wasm"
  },
  36372: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => nE,
      f: () => bE,
      j: () => iE
    });
    var Yq = {};
    gq.r(Yq), gq.d(Yq, {
      Su: () => lq,
      EnvelopeKind: () => Oq,
      pu: () => mq,
      PhysicsEngine: () => xq,
      Gu: () => Aq,
      Lu: () => cq,
      Ju: () => uq,
      ku: () => Bq,
      Ru: () => Wq,
      Uu: () => Nq,
      Fu: () => aq,
      Xu: () => Vq,
      wu: () => dq,
      Ku: () => jq,
      default: () => rE,
      initSync: () => tE,
      Cu: () => Hq,
      Iu: () => oq,
      eu: () => Pq,
      Du: () => Qq,
      qB: () => yq,
      EB: () => tq,
      gB: () => rq,
      YB: () => vq,
      lB: () => hq,
      OB: () => nq,
      mB: () => bq,
      xB: () => iq,
      AB: () => Zq,
      cB: () => fq,
      uB: () => Mq
    });
    class lq {
      __destroy_into_raw() {
        const qq = this.__wbg_ptr;
        return this.__wbg_ptr = 0, zq.unregister(this), qq
      }
      free() {
        const qq = this.__destroy_into_raw();
        PE.sHTK(qq, 0)
      }
      BB() {
        const qq = PE.ymqN(this.__wbg_ptr);
        if (qq[2]) throw NE(qq[1]);
        return qq[0] >>> 0
      }
      WB() {
        return PE.TjPW(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const qq = PE.xCaK();
        return this.__wbg_ptr = qq, zq.register(this, this.__wbg_ptr, this), this
      }
      NB() {
        return PE.QFYd(this.__wbg_ptr) >>> 0
      }
      aB(qq) {
        const Eq = PE.JeyK(this.__wbg_ptr, qq);
        if (Eq[2]) throw NE(Eq[1]);
        return Eq[0] >>> 0
      }
      VB(qq) {
        const Eq = PE.IVVg(this.__wbg_ptr, qq);
        if (Eq[2]) throw NE(Eq[1]);
        return Eq[0] >>> 0
      }
    }
    Symbol.dispose && (lq.prototype[Symbol.dispose] = lq.prototype.free);
    const Oq = Object.freeze({
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
    class mq {
      __destroy_into_raw() {
        const qq = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Sq.unregister(this), qq
      }
      free() {
        const qq = this.__destroy_into_raw();
        PE.zTm2(qq, 0)
      }
      HB(qq, Eq) {
        const gq = PE.NH6p(this.__wbg_ptr, qq, Eq);
        if (gq[2]) throw NE(gq[1]);
        return gq[0] >>> 0
      }
      oB(qq) {
        const Eq = PE.Lwk7(this.__wbg_ptr, qq);
        if (Eq[2]) throw NE(Eq[1]);
        return Eq[0] >>> 0
      }
      PB() {
        PE.IXOv(this.__wbg_ptr)
      }
      static QB() {
        return PE.RDtE() >>> 0
      }
      yB() {
        return PE.XhnH(this.__wbg_ptr) >>> 0
      }
      tB() {
        const qq = PE.LBVc(this.__wbg_ptr);
        return 0 === qq[0] ? void 0 : qq[1]
      }
      rB() {
        return PE.A3or(this.__wbg_ptr) >>> 0
      }
      vB() {
        return PE.LKeE(this.__wbg_ptr) >>> 0
      }
      static jB() {
        return PE.nwpF() >>> 0
      }
      constructor() {
        const qq = PE.Chvp();
        return this.__wbg_ptr = qq, Sq.register(this, this.__wbg_ptr, this), this
      }
      hB() {
        return PE.myDF(this.__wbg_ptr) >>> 0
      }
      nB() {
        return PE.mFAi(this.__wbg_ptr) >>> 0
      }
      bB() {
        return PE.CNPL(this.__wbg_ptr) >>> 0
      }
      dB(qq) {
        return PE.KL6M(this.__wbg_ptr, qq) >>> 0
      }
      reserve(qq, Eq) {
        const gq = PE.ruNu(this.__wbg_ptr, qq, Eq);
        if (gq[1]) throw NE(gq[0])
      }
      fB(qq, Eq) {
        const gq = cE(qq, PE.dZkX),
          Yq = QE;
        PE.v1Xk(this.__wbg_ptr, gq, Yq, Eq)
      }
      text() {
        let qq, Eq;
        try {
          const gq = PE.ggDQ(this.__wbg_ptr);
          return qq = gq[0], Eq = gq[1], eq(gq[0], gq[1])
        } finally {
          PE.XRNG(qq, Eq, 1)
        }
      }
    }
    Symbol.dispose && (mq.prototype[Symbol.dispose] = mq.prototype.free);
    class xq {
      __destroy_into_raw() {
        const qq = this.__wbg_ptr;
        return this.__wbg_ptr = 0, pq.unregister(this), qq
      }
      free() {
        const qq = this.__destroy_into_raw();
        PE.oYSC(qq, 0)
      }
      zB(qq, Eq) {
        Fq(Eq, lq);
        const gq = PE.rWyp(this.__wbg_ptr, qq, Eq.__wbg_ptr);
        if (gq[2]) throw NE(gq[1]);
        return gq[0] >>> 0
      }
      pB() {
        const qq = PE.ErOg(this.__wbg_ptr);
        if (qq[1]) throw NE(qq[0])
      }
      RB(qq, Eq, gq, Yq, lq, Oq, mq, xq, cq, uq, Bq) {
        Fq(qq, Aq);
        const Wq = PE.o4s3(this.__wbg_ptr, qq.__wbg_ptr, Eq, gq, Yq, lq, Oq, mq, xq, cq, uq, Bq);
        if (Wq[2]) throw NE(Wq[1]);
        return Wq[0]
      }
      UB() {
        const qq = PE.rX9W(this.__wbg_ptr);
        var Eq = sq(qq[0], qq[1]).slice();
        return PE.XRNG(qq[0], 8 * qq[1], 8), Eq
      }
      FB() {
        return PE.Yuhw(this.__wbg_ptr) >>> 0
      }
      sB() {
        return PE.qNhz(this.__wbg_ptr) >>> 0
      }
      XB() {
        return PE.PaKf(this.__wbg_ptr) >>> 0
      }
      constructor(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
        const Aq = PE.qdRW(qq, Eq, gq, Yq, lq, Oq, mq, xq);
        if (Aq[2]) throw NE(Aq[1]);
        return this.__wbg_ptr = Aq[0], pq.register(this, this.__wbg_ptr, this), this
      }
      IB(qq) {
        Fq(qq, lq);
        const Eq = PE.y8Zm(this.__wbg_ptr, qq.__wbg_ptr);
        if (Eq[2]) throw NE(Eq[1]);
        return Eq[0] >>> 0
      }
      eB(qq) {
        const Eq = PE.NpWm(this.__wbg_ptr, qq);
        if (Eq[1]) throw NE(Eq[0])
      }
      DB() {
        return PE.l8m2(this.__wbg_ptr) >>> 0
      }
      resume(qq, Eq) {
        Fq(qq, Aq), Fq(Eq, lq);
        const gq = PE.yq2L(this.__wbg_ptr, qq.__wbg_ptr, Eq.__wbg_ptr);
        if (gq[2]) throw NE(gq[1]);
        return gq[0] >>> 0
      }
      lW(qq) {
        const Eq = PE.m1Hh(this.__wbg_ptr, qq);
        if (Eq[1]) throw NE(Eq[0])
      }
      xW(qq, Eq) {
        Fq(Eq, lq);
        const gq = PE.UoQq(this.__wbg_ptr, qq, Eq.__wbg_ptr);
        if (gq[1]) throw NE(gq[0])
      }
      uW(qq) {
        const Eq = BE(qq, PE.dZkX),
          gq = QE,
          Yq = PE.AGzu(this.__wbg_ptr, Eq, gq);
        if (Yq[1]) throw NE(Yq[0])
      }
      LB(qq, Eq, gq, Yq, lq, Oq) {
        const mq = PE.bdDX(this.__wbg_ptr, qq, Eq, gq, Yq, lq, Oq);
        if (mq[1]) throw NE(mq[0])
      }
      JB(qq, Eq, gq, Yq) {
        const lq = cE(qq, PE.dZkX),
          Oq = QE,
          mq = BE(Eq, PE.dZkX),
          xq = QE,
          Aq = BE(gq, PE.dZkX),
          cq = QE,
          uq = BE(Yq, PE.dZkX),
          Bq = QE,
          Wq = PE.DZmc(this.__wbg_ptr, lq, Oq, mq, xq, Aq, cq, uq, Bq);
        if (Wq[1]) throw NE(Wq[0])
      }
      WW(qq, Eq) {
        Fq(Eq, lq);
        const gq = PE.MtB9(this.__wbg_ptr, qq, Eq.__wbg_ptr);
        if (gq[1]) throw NE(gq[0])
      }
      CB(qq, Eq, gq) {
        const Yq = PE.OHSz(this.__wbg_ptr, qq, Eq, gq);
        if (Yq[1]) throw NE(Yq[0])
      }
      aW(qq, Eq, gq, Yq, lq, Oq, mq, xq, cq, uq) {
        Fq(qq, Aq);
        return PE.rrkx(this.__wbg_ptr, qq.__wbg_ptr, Eq, gq, Yq, lq, Oq, mq, xq, cq, uq)
      }
    }
    Symbol.dispose && (xq.prototype[Symbol.dispose] = xq.prototype.free);
    class Aq {
      static __wrap(qq) {
        const Eq = Object.create(Aq.prototype);
        return Eq.__wbg_ptr = qq, Gq.register(Eq, Eq.__wbg_ptr, Eq), Eq
      }
      __destroy_into_raw() {
        const qq = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Gq.unregister(this), qq
      }
      free() {
        const qq = this.__destroy_into_raw();
        PE.sO7F(qq, 0)
      }
      jW(qq) {
        const Eq = PE.toCr(this.__wbg_ptr, qq);
        if (Eq[2]) throw NE(Eq[1]);
        return Eq[0] >>> 0
      }
      HW(qq, Eq, gq) {
        return PE.tfCk(this.__wbg_ptr, qq, Eq, gq)
      }
      oW(qq, Eq, gq) {
        return PE.VqIK(this.__wbg_ptr, qq, Eq, gq) >>> 0
      }
      PW(qq, Eq, gq, Yq) {
        return 0 !== PE.nFKp(this.__wbg_ptr, qq, Eq, gq, Yq)
      }
      QW() {
        PE.ZDE7(this.__wbg_ptr)
      }
      tW(qq) {
        const Eq = PE.ZbOv(this.__wbg_ptr, qq);
        if (Eq[3]) throw NE(Eq[2]);
        var gq = wq(Eq[0], Eq[1]).slice();
        return PE.XRNG(Eq[0], 1 * Eq[1], 1), gq
      }
      evict(qq, Eq) {
        return PE.pXoa(this.__wbg_ptr, qq, Eq) >>> 0
      }
      rW() {
        PE.R6S9(this.__wbg_ptr)
      }
      vW(qq, Eq, gq) {
        PE.peUK(this.__wbg_ptr, qq, Eq, gq)
      }
      hW(qq) {
        const Eq = PE.yOOM(this.__wbg_ptr, qq);
        if (Eq[1]) throw NE(Eq[0])
      }
      nW() {
        return PE.u6nQ(this.__wbg_ptr) >>> 0
      }
      bW() {
        return PE.h46L(this.__wbg_ptr) >>> 0
      }
      iW(qq, Eq, gq) {
        PE.tvy0(this.__wbg_ptr, qq, Eq, gq)
      }
      ZW(qq, Eq, gq) {
        PE.Rd3g(this.__wbg_ptr, qq, Eq, gq)
      }
      fW() {
        return PE.oK9V(this.__wbg_ptr) >>> 0
      }
      MW() {
        return PE.yNoB(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const qq = PE.AkyM();
        return this.__wbg_ptr = qq, Gq.register(this, this.__wbg_ptr, this), this
      }
      static TW() {
        const qq = PE.rOyJ();
        return Aq.__wrap(qq)
      }
      zW() {
        return PE.VOgv(this.__wbg_ptr) >>> 0
      }
      SW() {
        return PE.zFge(this.__wbg_ptr) >>> 0
      }
      pW(qq, Eq, gq, Yq) {
        const lq = PE.lEJe(this.__wbg_ptr, qq, Eq, gq, Yq);
        if (lq[1]) throw NE(lq[0])
      }
      GW() {
        return PE.Zfgb(this.__wbg_ptr) >>> 0
      }
      LW() {
        return PE.puUn(this.__wbg_ptr) >>> 0
      }
      JW(qq, Eq, gq, Yq) {
        PE.Wb4j(this.__wbg_ptr, qq, Eq, gq, Yq)
      }
      kW(qq) {
        PE.YJOR(this.__wbg_ptr, qq)
      }
      UW(qq, Eq, gq, Yq, lq) {
        const Oq = uE(Eq, PE.dZkX),
          mq = QE,
          xq = cE(gq, PE.dZkX),
          Aq = QE,
          cq = BE(Yq, PE.dZkX),
          uq = QE,
          Bq = PE.du4p(this.__wbg_ptr, qq, Oq, mq, xq, Aq, cq, uq, lq);
        if (Bq[1]) throw NE(Bq[0])
      }
      RW(qq, Eq, gq, Yq) {
        const lq = uE(qq, PE.dZkX),
          Oq = QE,
          mq = cE(Eq, PE.dZkX),
          xq = QE,
          Aq = BE(gq, PE.dZkX),
          cq = QE,
          uq = uE(Yq, PE.dZkX),
          Bq = QE,
          Wq = PE.UTVC(this.__wbg_ptr, lq, Oq, mq, xq, Aq, cq, uq, Bq);
        if (Wq[1]) throw NE(Wq[0])
      }
      IW(qq) {
        const Eq = uE(qq, PE.dZkX),
          gq = QE,
          Yq = PE.mjpB(this.__wbg_ptr, Eq, gq);
        if (Yq[1]) throw NE(Yq[0])
      }
      eW() {
        return PE.NYPb(this.__wbg_ptr) >>> 0
      }
      DW(qq) {
        const Eq = PE.u860(this.__wbg_ptr, qq);
        if (Eq[2]) throw NE(Eq[1]);
        return Eq[0] >>> 0
      }
      steer() {
        return PE.Xfyy(this.__wbg_ptr) >>> 0
      }
      qN() {
        const qq = PE.b3tQ(this.__wbg_ptr);
        var Eq = sq(qq[0], qq[1]).slice();
        return PE.XRNG(qq[0], 8 * qq[1], 8), Eq
      }
      EN() {
        return PE.vv78(this.__wbg_ptr) >>> 0
      }
      EW() {
        const qq = PE.ebnG(this.__wbg_ptr);
        var Eq, gq, Yq = (Eq = qq[0], gq = qq[1], Eq >>>= 0, (null !== Iq && 0 !== Iq.byteLength || (Iq = new Int32Array(PE.memory.buffer)), Iq).subarray(Eq / 4, Eq / 4 + gq)).slice();
        return PE.XRNG(qq[0], 4 * qq[1], 4), Yq
      }
    }
    Symbol.dispose && (Aq.prototype[Symbol.dispose] = Aq.prototype.free);
    class cq {
      __destroy_into_raw() {
        const qq = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Lq.unregister(this), qq
      }
      free() {
        const qq = this.__destroy_into_raw();
        PE.q1L0(qq, 0)
      }
      gN(qq) {
        const Eq = cE(qq, PE.dZkX),
          gq = QE,
          Yq = PE.njz5(this.__wbg_ptr, Eq, gq);
        if (Yq[1]) throw NE(Yq[0])
      }
      YN() {
        return PE.omS0(this.__wbg_ptr) >>> 0
      }
      lN() {
        return PE.hAfn(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const qq = PE.zFdd();
        return this.__wbg_ptr = qq, Lq.register(this, this.__wbg_ptr, this), this
      }
      run(qq, Eq) {
        Fq(qq, Aq);
        const gq = PE.hP36(this.__wbg_ptr, qq.__wbg_ptr, Eq);
        if (gq[2]) throw NE(gq[1]);
        return gq[0] >>> 0
      }
      ON(qq) {
        const Eq = cE(qq, PE.dZkX),
          gq = QE;
        PE.GPOD(this.__wbg_ptr, Eq, gq)
      }
      mN(qq) {
        const Eq = cE(qq, PE.dZkX),
          gq = QE;
        PE.EvIH(this.__wbg_ptr, Eq, gq)
      }
    }
    Symbol.dispose && (cq.prototype[Symbol.dispose] = cq.prototype.free);
    class uq {
      __destroy_into_raw() {
        const qq = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Jq.unregister(this), qq
      }
      free() {
        const qq = this.__destroy_into_raw();
        PE.G1pz(qq, 0)
      }
      AN(qq, Eq) {
        const gq = uE(qq, PE.dZkX),
          Yq = QE;
        return PE.V7DX(this.__wbg_ptr, gq, Yq, Eq) >>> 0
      }
      cN(qq, Eq, gq) {
        Fq(qq, Aq);
        const Yq = uE(gq, PE.dZkX),
          lq = QE,
          Oq = PE.vD0W(this.__wbg_ptr, qq.__wbg_ptr, Eq, Yq, lq);
        if (Oq[2]) throw NE(Oq[1]);
        return Oq[0] >>> 0
      }
      xN(qq) {
        return PE.Xijx(this.__wbg_ptr, qq) >>> 0
      }
      constructor() {
        const qq = PE.sdaW();
        return this.__wbg_ptr = qq, Jq.register(this, this.__wbg_ptr, this), this
      }
      scan(qq, Eq) {
        Fq(qq, Aq);
        const gq = PE.Z7He(this.__wbg_ptr, qq.__wbg_ptr, Eq);
        if (gq[2]) throw NE(gq[1]);
        return gq[0] >>> 0
      }
      WN(qq) {
        const Eq = uE(qq, PE.dZkX),
          gq = QE;
        PE.xxVg(this.__wbg_ptr, Eq, gq)
      }
      BN() {
        return PE.j3GP(this.__wbg_ptr) >>> 0
      }
      uN() {
        return PE.eIEb(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (uq.prototype[Symbol.dispose] = uq.prototype.free);
    class Bq {
      __destroy_into_raw() {
        const qq = this.__wbg_ptr;
        return this.__wbg_ptr = 0, kq.unregister(this), qq
      }
      free() {
        const qq = this.__destroy_into_raw();
        PE.WOXo(qq, 0)
      }
      aN(qq) {
        const Eq = PE.r91p(this.__wbg_ptr, qq);
        if (Eq[2]) throw NE(Eq[1]);
        return Eq[0] >>> 0
      }
      compute(qq, Eq, gq, Yq) {
        var lq = xE(Yq) ? 0 : WE(Yq, PE.dZkX, PE.R5cm),
          Oq = QE;
        const mq = PE.SgIB(this.__wbg_ptr, qq, xE(Eq) ? Number.MAX_SAFE_INTEGER : Eq | 0, gq, lq, Oq);
        if (mq[2]) throw NE(mq[1]);
        return mq[0] >>> 0
      }
      dN(qq) {
        const Eq = WE(qq, PE.dZkX, PE.R5cm),
          gq = QE;
        PE.nCn8(this.__wbg_ptr, Eq, gq)
      }
      HN() {
        return PE.Dzhh(this.__wbg_ptr)
      }
      oN(qq) {
        return PE.RxBI(this.__wbg_ptr, qq) >>> 0
      }
      PN() {
        return PE.Vf4L(this.__wbg_ptr) >>> 0
      }
      QN() {
        return PE.kc4j(this.__wbg_ptr) >>> 0
      }
      yN(qq, Eq) {
        const gq = PE.cWS3(this.__wbg_ptr, qq, Eq);
        if (gq[1]) throw NE(gq[0])
      }
      tN() {
        return PE.OA4O(this.__wbg_ptr) >>> 0
      }
      rN() {
        return PE.Js0x(this.__wbg_ptr) >>> 0
      }
      vN() {
        return PE.CXDI(this.__wbg_ptr) >>> 0
      }
      VN(qq, Eq, gq) {
        const Yq = cE(qq, PE.dZkX),
          lq = QE,
          Oq = cE(Eq, PE.dZkX),
          mq = QE,
          xq = PE.Whlp(this.__wbg_ptr, Yq, lq, Oq, mq, gq);
        if (xq[1]) throw NE(xq[0])
      }
      nN() {
        return PE.z36U(this.__wbg_ptr) >>> 0
      }
      mesh(qq, Eq, gq, Yq, lq) {
        const Oq = PE.PVOU(this.__wbg_ptr, qq, Eq, gq, Yq, lq);
        if (Oq[2]) throw NE(Oq[1]);
        return Oq[0] >>> 0
      }
      constructor(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq, oq) {
        const Pq = AE(qq, PE.dZkX),
          Qq = QE,
          yq = BE(Eq, PE.dZkX),
          tq = QE,
          rq = cE(gq, PE.dZkX),
          vq = QE,
          hq = uE(Yq, PE.dZkX),
          nq = QE,
          bq = uE(lq, PE.dZkX),
          iq = QE,
          Zq = cE(Oq, PE.dZkX),
          fq = QE,
          Mq = cE(mq, PE.dZkX),
          Tq = QE,
          zq = BE(xq, PE.dZkX),
          Sq = QE,
          pq = BE(Aq, PE.dZkX),
          Gq = QE,
          Lq = uE(cq, PE.dZkX),
          Jq = QE;
        var Rq = xE(uq) ? 0 : AE(uq, PE.dZkX),
          Uq = QE;
        const Fq = cE(Bq, PE.dZkX),
          sq = QE,
          Xq = uE(Wq, PE.dZkX),
          wq = QE;
        var Kq = xE(Nq) ? 0 : uE(Nq, PE.dZkX),
          Cq = QE;
        const Iq = BE(aq, PE.dZkX),
          eq = QE,
          Dq = PE.hv5D(Pq, Qq, yq, tq, rq, vq, hq, nq, bq, iq, Zq, fq, Mq, Tq, zq, Sq, pq, Gq, Lq, Jq, Rq, Uq, Fq, sq, Xq, wq, Kq, Cq, Iq, eq, Vq, dq, jq, Hq, oq);
        if (Dq[2]) throw NE(Dq[1]);
        return this.__wbg_ptr = Dq[0], kq.register(this, this.__wbg_ptr, this), this
      }
      hN(qq, Eq) {
        const gq = cE(qq, PE.dZkX),
          Yq = QE,
          lq = PE.C0Nj(this.__wbg_ptr, gq, Yq, Eq);
        if (lq[3]) throw NE(lq[2]);
        var Oq = wq(lq[0], lq[1]).slice();
        return PE.XRNG(lq[0], 1 * lq[1], 1), Oq
      }
      bN(qq) {
        PE.Bo5V(this.__wbg_ptr, xE(qq) ? 16777215 : qq)
      }
      iN(qq) {
        return PE.Nepd(this.__wbg_ptr, qq) >>> 0
      }
      fN() {
        return PE.gu9X(this.__wbg_ptr) >>> 0
      }
      ZN() {
        const qq = PE.XlLV(this.__wbg_ptr);
        if (qq[2]) throw NE(qq[1]);
        return 0 !== qq[0]
      }
      MN() {
        return PE.h0IG(this.__wbg_ptr) >>> 0
      }
      TN() {
        return PE.n53G(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Bq.prototype[Symbol.dispose] = Bq.prototype.free);
    class Wq {
      __destroy_into_raw() {
        const qq = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Rq.unregister(this), qq
      }
      free() {
        const qq = this.__destroy_into_raw();
        PE.D4Fc(qq, 0)
      }
      compute(qq, Eq, gq, Yq) {
        var lq = xE(Yq) ? 0 : WE(Yq, PE.dZkX, PE.R5cm),
          Oq = QE;
        const mq = PE.dmLh(this.__wbg_ptr, qq, xE(Eq) ? Number.MAX_SAFE_INTEGER : Eq | 0, gq, lq, Oq);
        if (mq[2]) throw NE(mq[1]);
        return mq[0] >>> 0
      }
      dN(qq) {
        const Eq = WE(qq, PE.dZkX, PE.R5cm),
          gq = QE;
        PE.PAsS(this.__wbg_ptr, Eq, gq)
      }
      rN() {
        return PE.nXji(this.__wbg_ptr) >>> 0
      }
      vN() {
        return PE.kkg1(this.__wbg_ptr) >>> 0
      }
      zN(qq) {
        const Eq = PE.v887(this.__wbg_ptr, qq);
        if (Eq[2]) throw NE(Eq[1]);
        return Eq[0] >>> 0
      }
      constructor(qq, Eq, gq, Yq, lq, Oq) {
        const mq = AE(qq, PE.dZkX),
          xq = QE,
          Aq = BE(Eq, PE.dZkX),
          cq = QE,
          uq = cE(gq, PE.dZkX),
          Bq = QE,
          Wq = uE(Yq, PE.dZkX),
          Nq = QE,
          aq = PE.W4e3(mq, xq, Aq, cq, uq, Bq, Wq, Nq, lq, Oq);
        if (aq[2]) throw NE(aq[1]);
        return this.__wbg_ptr = aq[0], Rq.register(this, this.__wbg_ptr, this), this
      }
      fN() {
        return PE.AVNU(this.__wbg_ptr) >>> 0
      }
      ZN() {
        const qq = PE.T6bx(this.__wbg_ptr);
        if (qq[2]) throw NE(qq[1]);
        return 0 !== qq[0]
      }
      MN() {
        return PE.H0bP(this.__wbg_ptr) >>> 0
      }
    }

    function Nq() {
      const qq = PE.sQcU();
      var Eq = Xq(qq[0], qq[1]).slice();
      return PE.XRNG(qq[0], 4 * qq[1], 4), Eq
    }

    function aq(qq, Eq) {
      let gq, Yq;
      try {
        const lq = AE(qq, PE.dZkX),
          Oq = QE,
          mq = WE(Eq, PE.dZkX, PE.R5cm),
          xq = QE,
          Aq = PE.RccR(lq, Oq, mq, xq);
        return gq = Aq[0], Yq = Aq[1], eq(Aq[0], Aq[1])
      } finally {
        PE.XRNG(gq, Yq, 1)
      }
    }

    function Vq() {
      const qq = PE.HW90();
      var Eq = Xq(qq[0], qq[1]).slice();
      return PE.XRNG(qq[0], 4 * qq[1], 4), Eq
    }

    function dq(qq) {
      return 0 !== PE.zChA(qq)
    }

    function jq(qq, Eq) {
      const gq = WE(qq, PE.dZkX, PE.R5cm),
        Yq = QE,
        lq = PE.lL8E(gq, Yq, Eq);
      if (lq[1]) throw NE(lq[0])
    }

    function Hq() {
      PE.RtY0()
    }

    function oq() {
      return PE.hRe0() >>> 0
    }

    function Pq(qq) {
      return 0 !== PE.E6NY(qq)
    }

    function Qq(qq) {
      return 0 !== PE.dPky(qq)
    }

    function yq(qq) {
      PE.cn47(qq)
    }

    function tq() {
      return PE.gowu() >>> 0
    }

    function rq() {
      return PE.IEZY() >>> 0
    }

    function vq() {
      return 0 !== PE.N6tp()
    }

    function hq() {
      const qq = PE.iXdG();
      var Eq = Xq(qq[0], qq[1]).slice();
      return PE.XRNG(qq[0], 4 * qq[1], 4), Eq
    }

    function nq() {
      const qq = PE.dHuU();
      var Eq = Xq(qq[0], qq[1]).slice();
      return PE.XRNG(qq[0], 4 * qq[1], 4), Eq
    }

    function bq() {
      const qq = PE.QzSh();
      var Eq = Xq(qq[0], qq[1]).slice();
      return PE.XRNG(qq[0], 4 * qq[1], 4), Eq
    }

    function iq() {
      return PE.ZZoe() >>> 0
    }

    function Zq() {
      PE.fssZ()
    }

    function fq() {
      let qq, Eq;
      try {
        const gq = PE.mefQ();
        return qq = gq[0], Eq = gq[1], eq(gq[0], gq[1])
      } finally {
        PE.XRNG(qq, Eq, 1)
      }
    }

    function Mq(qq) {
      PE.dtog(Uq(qq))
    }

    function Tq() {
      return {
        __proto__: null,
        Wwb1: {
          __proto__: null,
          QK6w: function(qq, Eq) {
            return Uq(Error(eq(qq, Eq)))
          },
          HHVb: function(qq, Eq) {
            throw new Error(eq(qq, Eq))
          },
          ZW0J: function(qq) {
            lE(qq).call()
          },
          xCvH: function(qq, Eq) {
            console.error(eq(qq, Eq))
          },
          npmm: function() {
            return performance.now()
          },
          awpl: function(qq) {
            NE(qq)
          }
        }
      }
    }
    Symbol.dispose && (Wq.prototype[Symbol.dispose] = Wq.prototype.free);
    const zq = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((qq => PE.sHTK(qq, 1))),
      Sq = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((qq => PE.zTm2(qq, 1))),
      pq = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((qq => PE.oYSC(qq, 1))),
      Gq = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((qq => PE.sO7F(qq, 1))),
      Lq = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((qq => PE.q1L0(qq, 1))),
      Jq = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((qq => PE.G1pz(qq, 1))),
      kq = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((qq => PE.WOXo(qq, 1))),
      Rq = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((qq => PE.D4Fc(qq, 1)));

    function Uq(qq) {
      mE === OE.length && OE.push(OE.length + 1);
      const Eq = mE;
      return mE = OE[Eq], OE[Eq] = qq, Eq
    }

    function Fq(qq, Eq) {
      if (!(qq instanceof Eq)) throw new Error(`expected instance of ${Eq.name}`)
    }

    function sq(qq, Eq) {
      return qq >>>= 0, Cq().subarray(qq / 8, qq / 8 + Eq)
    }

    function Xq(qq, Eq) {
      return qq >>>= 0, EE().subarray(qq / 4, qq / 4 + Eq)
    }

    function wq(qq, Eq) {
      return qq >>>= 0, YE().subarray(qq / 1, qq / 1 + Eq)
    }
    let Kq = null;

    function Cq() {
      return null !== Kq && 0 !== Kq.byteLength || (Kq = new Float64Array(PE.memory.buffer)), Kq
    }
    let Iq = null;

    function eq(qq, Eq) {
      return function(qq, Eq) {
        dE += Eq, dE >= VE && (aE = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), aE.decode(), dE = Eq);
        return aE.decode(YE().subarray(qq, qq + Eq))
      }(qq >>> 0, Eq)
    }
    let Dq = null;
    let qE = null;

    function EE() {
      return null !== qE && 0 !== qE.byteLength || (qE = new Uint32Array(PE.memory.buffer)), qE
    }
    let gE = null;

    function YE() {
      return null !== gE && 0 !== gE.byteLength || (gE = new Uint8Array(PE.memory.buffer)), gE
    }

    function lE(qq) {
      return OE[qq]
    }
    let OE = new Array(1024).fill(void 0);
    OE.push(void 0, null, !0, !1);
    let mE = OE.length;

    function xE(qq) {
      return void 0 === qq || null === qq
    }

    function AE(qq, Eq) {
      const gq = Eq(2 * qq.length, 2) >>> 0;
      return (null !== Dq && 0 !== Dq.byteLength || (Dq = new Uint16Array(PE.memory.buffer)), Dq).set(qq, gq / 2), QE = qq.length, gq
    }

    function cE(qq, Eq) {
      const gq = Eq(4 * qq.length, 4) >>> 0;
      return EE().set(qq, gq / 4), QE = qq.length, gq
    }

    function uE(qq, Eq) {
      const gq = Eq(1 * qq.length, 1) >>> 0;
      return YE().set(qq, gq / 1), QE = qq.length, gq
    }

    function BE(qq, Eq) {
      const gq = Eq(8 * qq.length, 8) >>> 0;
      return Cq().set(qq, gq / 8), QE = qq.length, gq
    }

    function WE(qq, Eq, gq) {
      if (void 0 === gq) {
        const gq = jE.encode(qq),
          Yq = Eq(gq.length, 1) >>> 0;
        return YE().subarray(Yq, Yq + gq.length).set(gq), QE = gq.length, Yq
      }
      let Yq = qq.length,
        lq = Eq(Yq, 1) >>> 0;
      const Oq = YE();
      let mq = 0;
      for (; mq < Yq; mq++) {
        const Eq = qq.charCodeAt(mq);
        if (Eq > 127) break;
        Oq[lq + mq] = Eq
      }
      if (mq !== Yq) {
        0 !== mq && (qq = qq.slice(mq)), lq = gq(lq, Yq, Yq = mq + 3 * qq.length, 1) >>> 0;
        const Eq = YE().subarray(lq + mq, lq + Yq);
        mq += jE.encodeInto(qq, Eq).written, lq = gq(lq, Yq, mq, 1) >>> 0
      }
      return QE = mq, lq
    }

    function NE(qq) {
      const Eq = lE(qq);
      return function(qq) {
        qq < 1028 || (OE[qq] = mE, mE = qq)
      }(qq), Eq
    }
    let aE = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    aE.decode();
    const VE = 2146435072;
    let dE = 0;
    const jE = new TextEncoder;
    "encodeInto" in jE || (jE.encodeInto = function(qq, Eq) {
      const gq = jE.encode(qq);
      return Eq.set(gq), {
        read: qq.length,
        written: gq.length
      }
    });
    let HE, oE, PE, QE = 0;

    function yE(qq, Eq) {
      return oE = qq, PE = qq.exports, HE = Eq, Kq = null, Iq = null, Dq = null, qE = null, gE = null, PE.pFa9(), PE
    }

    function tE(qq) {
      if (void 0 !== PE) return PE;
      void 0 !== qq && (Object.getPrototypeOf(qq) === Object.prototype ? ({
        module: qq
      } = qq) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Eq = Tq();
      qq instanceof WebAssembly.Module || (qq = new WebAssembly.Module(qq));
      return yE(new WebAssembly.Instance(qq, Eq), qq)
    }
    async function rE(qq) {
      if (void 0 !== PE) return PE;
      void 0 !== qq && (Object.getPrototypeOf(qq) === Object.prototype ? ({
        module_or_path: qq
      } = qq) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Eq = Tq();
      ("string" === typeof qq || "function" === typeof Request && qq instanceof Request || "function" === typeof URL && qq instanceof URL) && (qq = fetch(qq));
      const {
        instance: gq,
        module: Yq
      } = await async function(qq, Eq) {
        if ("function" === typeof Response && qq instanceof Response) {
          if (!qq.ok) throw new Error(`failed to fetch Wasm: ${qq.status} ${qq.statusText} fetching '${qq.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(qq, Eq)
          } catch (gq) {
            if (! function(qq) {
                switch (qq) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(qq.type) || "application/wasm" === qq.headers.get("Content-Type")) throw gq;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", gq)
          }
          const Yq = await qq.arrayBuffer();
          return await WebAssembly.instantiate(Yq, Eq)
        } {
          const gq = await WebAssembly.instantiate(qq, Eq);
          return gq instanceof WebAssembly.Instance ? {
            instance: gq,
            module: qq
          } : gq
        }
      }(await qq, Eq);
      return yE(gq, Yq)
    }
    var vE = gq(2797),
      hE = gq(36380);
    const nE = {
      name: vE.e,
      url: () => new gq.U(gq(36384)),
      init: rE,
      bindings: Yq
    };

    function bE() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nE,
        Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nE,
        gq = arguments.length > 2 ? arguments[2] : void 0;
      return (0, hE.n)(qq, Eq, gq)
    }

    function iE(qq) {
      return (0, vE.J)((() => qq), Yq, nE)
    }
  },
  36361: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      return new Error(`${qq}: ${Eq instanceof Error?`${Eq.name}: ${Eq.message}`:String(Eq)}`, {
        cause: Eq
      })
    }
    gq.d(Eq, {
      e: () => Yq
    })
  },
  36359: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq,
      g: () => Aq
    });
    var Yq = gq(2805),
      lq = gq(6500),
      Oq = gq(36361);

    function mq() {
      return new URL(new gq.U(gq(36370)).href, globalThis.location?.href).href
    }
    let xq = null;

    function Aq() {
      return xq ??= (async () => (0, Yq.N)(new URL(mq()), (0, lq.d)("bloxd_wasm_textures")))().catch((qq => {
        throw (0, Oq.e)((0, Yq.R)(qq), qq)
      })), xq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);