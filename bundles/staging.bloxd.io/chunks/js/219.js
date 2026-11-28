export const id = 219;
export const ids = [218, 219];
export const modules = {
  35167: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      CAPPED_COUNTS_VISIT_CAP: () => pb,
      reportCappedWasmFailure: () => lb,
      reportUncappedWasmFailure: () => gb,
      reportWasmCrash: () => Hb,
      reportWasmFailure: () => Vb
    });
    var eb = Mb(1987);

    function Hb(bb) {
      (0, eb.reportClientError)("wasm_load", bb.message, bb.code)
    }
    const pb = eb.MAX_ERRORS_PER_VISIT - 4;

    function Vb(bb, wb, Mb, Hb) {
      (0, eb.reportClientError)(bb, wb, Mb, !1, eb.MAX_ERRORS_PER_VISIT, {
        context: Hb
      })
    }

    function gb(bb, wb, Mb, Hb) {
      (0, eb.reportClientError)(bb, wb, Mb, !1, 1 / 0, {
        context: Hb
      })
    }

    function lb(bb, wb, Mb, Hb) {
      (0, eb.reportClientError)(bb, wb, Mb, !1, pb, {
        context: Hb
      })
    }
  },
  37396: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Xb,
      e: () => Kb,
      f: () => rb,
      g: () => xb
    });
    var eb = Mb(37411),
      Hb = Mb(2463),
      pb = Mb(37421),
      Vb = Mb(2471),
      gb = Mb(35167),
      lb = Mb(4175),
      Lb = Mb(4593),
      Ib = Mb(4589),
      Ob = Mb(37398),
      Ub = Mb(1987),
      tb = Mb(37402),
      Cb = Mb(37406),
      Eb = Mb(2461);
    let Fb = !1;
    const Bb = 40;
    var sb = Mb(352),
      mb = Mb(4967);
    const hb = "bloxdWasmFailureReported";

    function zb() {
      return "undefined" === typeof WebAssembly
    }

    function Xb() {
      return (0, eb.e)()
    }

    function xb() {
      if (zb()) return "this browser has no WebAssembly";
      const bb = (0, Hb.q)();
      return "compile" === bb || "instantiate" === bb ? `the core wasm didn't load here (${(0,Hb.h)()})` : null
    }
    async function jb(bb) {
      return await (0, sb.l)(), await (0, pb.f)(pb.b, void 0, bb)
    }

    function Kb() {
      zb() || (0, mb.e)((() => {
        jb()
      }))
    }

    function rb() {
      if (zb()) return async () => ((0, lb.e)("unsupported", 0), Rb("unsupported", "This browser has no WebAssembly"), !1);
      const bb = {
        reloadFailedDownload: !0
      };
      return jb(bb), async () => {
        var wb;
        const Mb = performance.now();
        await jb(bb);
        const eb = (performance.now() - Mb) / 1e3;
        if ((0, Hb.H)()) return (0, lb.e)("ready", eb), Fb || (Fb = !0, (0, Hb.M)((() => {
          if ("call" !== (0, Hb.q)()) return;
          const bb = (0, Hb.m)(),
            wb = (0, Ob.k)(bb, Hb.x, Hb.Z),
            Mb = (0, Hb.t)().buffer.byteLength,
            eb = (0, Ob.d)(wb.kind, wb.refusedBytes),
            pb = eb ? "alloc_failed" : wb.kind,
            Vb = (0, tb.d)(Mb),
            gb = eb ? `_r${Math.floor(Math.log2(wb.refusedBytes))}` : "",
            lb = (0, Eb.b)();
          null === lb && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const Lb = new Error((0, Cb.e)(bb, Mb, wb));
          if (bb instanceof Error && void 0 !== bb.stack) {
            const wb = bb.stack.split("\n"),
              Mb = wb.length > Bb ? [...wb.slice(0, Bb / 2), ...wb.slice(-Bb / 2)] : wb;
            Lb.stack = Mb.join("\n")
          }(0, Ub.reportClientError)("wasm_load", Lb, `wasm_call_${pb}_${null!==lb&&void 0!==lb?lb:"unnamed"}_m${Vb}${gb}`)
        }))), (0, Vb.I)(pb.b.url()) && (0, gb.reportCappedWasmFailure)("wasm_load", Lb.c.message, Lb.c.code), !0;
        const sb = Ib.c[null !== (wb = (0, Hb.q)()) && void 0 !== wb ? wb : "call"];
        return (0, lb.e)(sb, eb), Rb(sb, (0, Hb.h)()), !1
      }
    }

    function Rb(bb, wb) {
      (0, Ib.g)(hb, `Bloxd wasm ${bb}, so the game can't start: ${wb}`, wb, bb)
    }
  },
  37439: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/bloxd_wasm_bg.43db6ba6f123c28f67d5.wasm"
  },
  37416: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/bloxd_wasm_textures_bg.3972bba46c58ac322f8b.wasm"
  },
  37426: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      sw: () => eb,
      EnvelopeKind: () => Hb,
      le: () => pb,
      PhysicsEngine: () => Vb,
      ve: () => gb,
      MH: () => lb,
      LH: () => Lb,
      ip: () => Ib,
      UV: () => Ob,
      wg: () => Ub,
      eg: () => tb,
      ll: () => Cb,
      SL: () => Eb,
      xO: () => Fb,
      default: () => xw,
      initSync: () => Xw,
      jO: () => Bb,
      KO: () => sb,
      rO: () => mb,
      RO: () => hb,
      DO: () => zb,
      cO: () => Xb,
      YO: () => xb,
      ZO: () => jb,
      fO: () => Kb,
      WO: () => rb,
      JO: () => Rb,
      SO: () => Db,
      NO: () => cb,
      vO: () => Yb,
      QO: () => Zb
    });
    class eb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Ab.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        mw.dlSN(bb, 0)
      }
      GO() {
        const bb = mw.hk5z(this.__wbg_ptr);
        if (bb[2]) throw Uw(bb[1]);
        return bb[0] >>> 0
      }
      qO() {
        return mw.jxX0(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const bb = mw.ZFTC();
        return this.__wbg_ptr = bb, Ab.register(this, this.__wbg_ptr, this), this
      }
      aO() {
        return mw.RRAu(this.__wbg_ptr) >>> 0
      }
      iO(bb) {
        const wb = mw.VIvH(this.__wbg_ptr, bb);
        if (wb[2]) throw Uw(wb[1]);
        return wb[0] >>> 0
      }
      uO(bb) {
        const wb = mw.jxXs(this.__wbg_ptr, bb);
        if (wb[2]) throw Uw(wb[1]);
        return wb[0] >>> 0
      }
    }
    Symbol.dispose && (eb.prototype[Symbol.dispose] = eb.prototype.free);
    const Hb = Object.freeze({
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
    class pb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Wb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        mw.dKDU(bb, 0)
      }
      nO(bb, wb) {
        const Mb = mw.gonl(this.__wbg_ptr, bb, wb);
        if (Mb[2]) throw Uw(Mb[1]);
        return Mb[0] >>> 0
      }
      yO(bb) {
        const wb = mw.VRTS(this.__wbg_ptr, bb);
        if (wb[2]) throw Uw(wb[1]);
        return wb[0] >>> 0
      }
      oO() {
        mw.n1ow(this.__wbg_ptr)
      }
      static TO() {
        return mw.afUb() >>> 0
      }
      kO() {
        return mw.Kvkp(this.__wbg_ptr) >>> 0
      }
      bU() {
        const bb = mw.yUMQ(this.__wbg_ptr);
        return 0 === bb[0] ? void 0 : bb[1]
      }
      wU() {
        return mw.cWxx(this.__wbg_ptr) >>> 0
      }
      MU() {
        return mw.vP8S(this.__wbg_ptr) >>> 0
      }
      static PO() {
        return mw.hvKV() >>> 0
      }
      constructor() {
        const bb = mw.wgBl();
        return this.__wbg_ptr = bb, Wb.register(this, this.__wbg_ptr, this), this
      }
      eU() {
        return mw.FOG6(this.__wbg_ptr) >>> 0
      }
      HU() {
        return mw.SQuE(this.__wbg_ptr) >>> 0
      }
      pU() {
        return mw.JJKe(this.__wbg_ptr) >>> 0
      }
      dO(bb) {
        return mw.wX0B(this.__wbg_ptr, bb) >>> 0
      }
      reserve(bb, wb) {
        const Mb = mw.kcCC(this.__wbg_ptr, bb, wb);
        if (Mb[1]) throw Uw(Mb[0])
      }
      lU(bb, wb) {
        const Mb = lw(bb, mw.wpx8),
          eb = hw;
        mw.EfFS(this.__wbg_ptr, Mb, eb, wb)
      }
      text() {
        let bb, wb;
        try {
          const Mb = mw.QbSq(this.__wbg_ptr);
          return bb = Mb[0], wb = Mb[1], ob(Mb[0], Mb[1])
        } finally {
          mw.UA85(bb, wb, 1)
        }
      }
    }
    Symbol.dispose && (pb.prototype[Symbol.dispose] = pb.prototype.free);
    class Vb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Jb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        mw.ubWQ(bb, 0)
      }
      IU(bb, wb) {
        ab(wb, eb);
        const Mb = mw.zaiI(this.__wbg_ptr, bb, wb.__wbg_ptr);
        if (Mb[2]) throw Uw(Mb[1]);
        return Mb[0] >>> 0
      }
      OU() {
        const bb = mw.jvDK(this.__wbg_ptr);
        if (bb[1]) throw Uw(bb[0])
      }
      EU(bb, wb, Mb, eb, Hb, pb, Vb, lb, Lb, Ib, Ob) {
        ab(bb, gb);
        const Ub = mw.o4HK(this.__wbg_ptr, bb.__wbg_ptr, wb, Mb, eb, Hb, pb, Vb, lb, Lb, Ib, Ob);
        if (Ub[2]) throw Uw(Ub[1]);
        return Ub[0]
      }
      FU() {
        const bb = mw.H1AP(this.__wbg_ptr);
        var wb = ib(bb[0], bb[1]).slice();
        return mw.UA85(bb[0], 8 * bb[1], 8), wb
      }
      BU() {
        return mw.eDGC(this.__wbg_ptr) >>> 0
      }
      sU() {
        return mw.J6bU(this.__wbg_ptr) >>> 0
      }
      mU() {
        return mw.FBce(this.__wbg_ptr) >>> 0
      }
      constructor(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
        const lb = mw.YI0n(bb, wb, Mb, eb, Hb, pb, Vb, gb);
        if (lb[2]) throw Uw(lb[1]);
        return this.__wbg_ptr = lb[0], Jb.register(this, this.__wbg_ptr, this), this
      }
      XU(bb) {
        ab(bb, eb);
        const wb = mw.ZAzF(this.__wbg_ptr, bb.__wbg_ptr);
        if (wb[2]) throw Uw(wb[1]);
        return wb[0] >>> 0
      }
      xU(bb) {
        const wb = mw.RYyc(this.__wbg_ptr, bb);
        if (wb[1]) throw Uw(wb[0])
      }
      jU() {
        return mw.Ayg0(this.__wbg_ptr) >>> 0
      }
      resume(bb, wb) {
        ab(bb, gb), ab(wb, eb);
        const Mb = mw.HwfE(this.__wbg_ptr, bb.__wbg_ptr, wb.__wbg_ptr);
        if (Mb[2]) throw Uw(Mb[1]);
        return Mb[0] >>> 0
      }
      cU(bb) {
        const wb = mw.FYbj(this.__wbg_ptr, bb);
        if (wb[1]) throw Uw(wb[0])
      }
      fU(bb, wb) {
        ab(wb, eb);
        const Mb = mw.Rgp9(this.__wbg_ptr, bb, wb.__wbg_ptr);
        if (Mb[1]) throw Uw(Mb[0])
      }
      JU(bb) {
        const wb = Iw(bb, mw.wpx8),
          Mb = hw,
          eb = mw.YlqB(this.__wbg_ptr, wb, Mb);
        if (eb[1]) throw Uw(eb[0])
      }
      tU(bb, wb, Mb, eb, Hb, pb) {
        const Vb = mw.AMK5(this.__wbg_ptr, bb, wb, Mb, eb, Hb, pb);
        if (Vb[1]) throw Uw(Vb[0])
      }
      CU(bb, wb, Mb, eb) {
        const Hb = lw(bb, mw.wpx8),
          pb = hw,
          Vb = Iw(wb, mw.wpx8),
          gb = hw,
          lb = Iw(Mb, mw.wpx8),
          Lb = hw,
          Ib = Iw(eb, mw.wpx8),
          Ob = hw,
          Ub = mw.mhNy(this.__wbg_ptr, Hb, pb, Vb, gb, lb, Lb, Ib, Ob);
        if (Ub[1]) throw Uw(Ub[0])
      }
      NU(bb, wb) {
        ab(wb, eb);
        const Mb = mw.zz9y(this.__wbg_ptr, bb, wb.__wbg_ptr);
        if (Mb[1]) throw Uw(Mb[0])
      }
      zU(bb, wb, Mb) {
        const eb = mw.Cox7(this.__wbg_ptr, bb, wb, Mb);
        if (eb[1]) throw Uw(eb[0])
      }
      QU(bb, wb, Mb, eb, Hb, pb, Vb, lb, Lb, Ib) {
        ab(bb, gb);
        return mw.q3RP(this.__wbg_ptr, bb.__wbg_ptr, wb, Mb, eb, Hb, pb, Vb, lb, Lb, Ib)
      }
    }
    Symbol.dispose && (Vb.prototype[Symbol.dispose] = Vb.prototype.free);
    class gb {
      static __wrap(bb) {
        const wb = Object.create(gb.prototype);
        return wb.__wbg_ptr = bb, Sb.register(wb, wb.__wbg_ptr, wb), wb
      }
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Sb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        mw.nUe3(bb, 0)
      }
      qU(bb) {
        const wb = mw.EteI(this.__wbg_ptr, bb);
        if (wb[2]) throw Uw(wb[1]);
        return wb[0] >>> 0
      }
      aU(bb, wb, Mb) {
        return mw.oiJP(this.__wbg_ptr, bb, wb, Mb)
      }
      iU(bb, wb, Mb) {
        return mw.t7VF(this.__wbg_ptr, bb, wb, Mb) >>> 0
      }
      uU(bb, wb, Mb, eb) {
        return 0 !== mw.RvBu(this.__wbg_ptr, bb, wb, Mb, eb)
      }
      dU() {
        mw.lszy(this.__wbg_ptr)
      }
      PU(bb) {
        const wb = mw.AeKU(this.__wbg_ptr, bb);
        if (wb[3]) throw Uw(wb[2]);
        var Mb = db(wb[0], wb[1]).slice();
        return mw.UA85(wb[0], 1 * wb[1], 1), Mb
      }
      evict(bb, wb) {
        return mw.YWf6(this.__wbg_ptr, bb, wb) >>> 0
      }
      nU() {
        mw.Ql3N(this.__wbg_ptr)
      }
      yU(bb, wb, Mb) {
        mw.xLaP(this.__wbg_ptr, bb, wb, Mb)
      }
      oU(bb) {
        const wb = mw.IODt(this.__wbg_ptr, bb);
        if (wb[1]) throw Uw(wb[0])
      }
      TU() {
        return mw.JUYz(this.__wbg_ptr) >>> 0
      }
      kU() {
        return mw.VPIY(this.__wbg_ptr) >>> 0
      }
      bt(bb, wb, Mb) {
        mw.fVGl(this.__wbg_ptr, bb, wb, Mb)
      }
      wt(bb, wb, Mb) {
        mw.pUgv(this.__wbg_ptr, bb, wb, Mb)
      }
      Mt() {
        return mw.CqQk(this.__wbg_ptr) >>> 0
      }
      et() {
        return mw.zho8(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const bb = mw.X6rM();
        return this.__wbg_ptr = bb, Sb.register(this, this.__wbg_ptr, this), this
      }
      static Ht() {
        const bb = mw.Tyqw();
        return gb.__wrap(bb)
      }
      Vt() {
        return mw.DjJ4(this.__wbg_ptr) >>> 0
      }
      gt() {
        return mw.NpNn(this.__wbg_ptr) >>> 0
      }
      lt(bb, wb, Mb, eb) {
        const Hb = mw.bmhm(this.__wbg_ptr, bb, wb, Mb, eb);
        if (Hb[1]) throw Uw(Hb[0])
      }
      Lt() {
        return mw.IWI0(this.__wbg_ptr) >>> 0
      }
      Ot() {
        return mw.q3Ih(this.__wbg_ptr) >>> 0
      }
      Ut(bb, wb, Mb, eb) {
        mw.Eh0K(this.__wbg_ptr, bb, wb, Mb, eb)
      }
      tt(bb) {
        mw.pC6B(this.__wbg_ptr, bb)
      }
      Et(bb, wb, Mb, eb, Hb) {
        const pb = Lw(wb, mw.wpx8),
          Vb = hw,
          gb = lw(Mb, mw.wpx8),
          lb = hw,
          Lb = Iw(eb, mw.wpx8),
          Ib = hw,
          Ob = mw.PpCc(this.__wbg_ptr, bb, pb, Vb, gb, lb, Lb, Ib, Hb);
        if (Ob[1]) throw Uw(Ob[0])
      }
      Ct(bb, wb, Mb, eb) {
        const Hb = Lw(bb, mw.wpx8),
          pb = hw,
          Vb = lw(wb, mw.wpx8),
          gb = hw,
          lb = Iw(Mb, mw.wpx8),
          Lb = hw,
          Ib = Lw(eb, mw.wpx8),
          Ob = hw,
          Ub = mw.X6A3(this.__wbg_ptr, Hb, pb, Vb, gb, lb, Lb, Ib, Ob);
        if (Ub[1]) throw Uw(Ub[0])
      }
      Xt(bb) {
        const wb = Lw(bb, mw.wpx8),
          Mb = hw,
          eb = mw.e8tm(this.__wbg_ptr, wb, Mb);
        if (eb[1]) throw Uw(eb[0])
      }
      xt() {
        return mw.qTUU(this.__wbg_ptr) >>> 0
      }
      jt(bb) {
        const wb = mw.UAXT(this.__wbg_ptr, bb);
        if (wb[2]) throw Uw(wb[1]);
        return wb[0] >>> 0
      }
      steer() {
        return mw.aUcE(this.__wbg_ptr) >>> 0
      }
      Kt() {
        const bb = mw.FySV(this.__wbg_ptr);
        var wb = ib(bb[0], bb[1]).slice();
        return mw.UA85(bb[0], 8 * bb[1], 8), wb
      }
      rt() {
        return mw.HOQB(this.__wbg_ptr) >>> 0
      }
      rU() {
        const bb = mw.ac7k(this.__wbg_ptr);
        var wb, Mb, eb = (wb = bb[0], Mb = bb[1], wb >>>= 0, (null !== yb && 0 !== yb.byteLength || (yb = new Int32Array(mw.memory.buffer)), yb).subarray(wb / 4, wb / 4 + Mb)).slice();
        return mw.UA85(bb[0], 4 * bb[1], 4), eb
      }
    }
    Symbol.dispose && (gb.prototype[Symbol.dispose] = gb.prototype.free);
    class lb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Nb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        mw.ci95(bb, 0)
      }
      LO(bb) {
        const wb = lw(bb, mw.wpx8),
          Mb = hw,
          eb = mw.n4g3(this.__wbg_ptr, wb, Mb);
        if (eb[1]) throw Uw(eb[0])
      }
      Rt() {
        return mw.zFRf(this.__wbg_ptr) >>> 0
      }
      Dt() {
        return mw.MnEN(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const bb = mw.XVfM();
        return this.__wbg_ptr = bb, Nb.register(this, this.__wbg_ptr, this), this
      }
      run(bb, wb) {
        ab(bb, gb);
        const Mb = mw.ykIv(this.__wbg_ptr, bb.__wbg_ptr, wb);
        if (Mb[2]) throw Uw(Mb[1]);
        return Mb[0] >>> 0
      }
      ct(bb) {
        const wb = lw(bb, mw.wpx8),
          Mb = hw;
        mw.M2EO(this.__wbg_ptr, wb, Mb)
      }
      Yt(bb) {
        const wb = lw(bb, mw.wpx8),
          Mb = hw;
        mw.Bmwy(this.__wbg_ptr, wb, Mb)
      }
    }
    Symbol.dispose && (lb.prototype[Symbol.dispose] = lb.prototype.free);
    class Lb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, vb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        mw.aMtz(bb, 0)
      }
      ft(bb, wb) {
        const Mb = Lw(bb, mw.wpx8),
          eb = hw;
        return mw.n0C5(this.__wbg_ptr, Mb, eb, wb) >>> 0
      }
      Wt(bb, wb, Mb) {
        ab(bb, gb);
        const eb = Lw(Mb, mw.wpx8),
          Hb = hw,
          pb = mw.W3ts(this.__wbg_ptr, bb.__wbg_ptr, wb, eb, Hb);
        if (pb[2]) throw Uw(pb[1]);
        return pb[0] >>> 0
      }
      Zt(bb) {
        return mw.QJFa(this.__wbg_ptr, bb) >>> 0
      }
      constructor() {
        const bb = mw.yRl4();
        return this.__wbg_ptr = bb, vb.register(this, this.__wbg_ptr, this), this
      }
      scan(bb, wb) {
        ab(bb, gb);
        const Mb = mw.LdM0(this.__wbg_ptr, bb.__wbg_ptr, wb);
        if (Mb[2]) throw Uw(Mb[1]);
        return Mb[0] >>> 0
      }
      Nt(bb) {
        const wb = Lw(bb, mw.wpx8),
          Mb = hw;
        mw.Lv36(this.__wbg_ptr, wb, Mb)
      }
      St() {
        return mw.x1zV(this.__wbg_ptr) >>> 0
      }
      Jt() {
        return mw.Mgcx(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Lb.prototype[Symbol.dispose] = Lb.prototype.free);
    class Ib {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Qb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        mw.wX67(bb, 0)
      }
      Qt(bb) {
        const wb = mw.nWyf(this.__wbg_ptr, bb);
        if (wb[2]) throw Uw(wb[1]);
        return wb[0] >>> 0
      }
      compute(bb, wb, Mb, eb) {
        var Hb = Vw(eb) ? 0 : Ow(eb, mw.wpx8, mw.kts5),
          pb = hw;
        const Vb = mw.glV7(this.__wbg_ptr, bb, Vw(wb) ? Number.MAX_SAFE_INTEGER : wb | 0, Mb, Hb, pb);
        if (Vb[2]) throw Uw(Vb[1]);
        return Vb[0] >>> 0
      }
      qt(bb) {
        const wb = Ow(bb, mw.wpx8, mw.kts5),
          Mb = hw;
        mw.dDhQ(this.__wbg_ptr, wb, Mb)
      }
      ut() {
        return mw.t33H(this.__wbg_ptr)
      }
      dt(bb) {
        return mw.Ol3p(this.__wbg_ptr, bb) >>> 0
      }
      Pt() {
        return mw.CZrZ(this.__wbg_ptr) >>> 0
      }
      nt() {
        return mw.Ex5O(this.__wbg_ptr) >>> 0
      }
      yt(bb, wb) {
        const Mb = mw.p5mQ(this.__wbg_ptr, bb, wb);
        if (Mb[1]) throw Uw(Mb[0])
      }
      ot() {
        return mw.a1JC(this.__wbg_ptr) >>> 0
      }
      Tt() {
        return mw.vUm9(this.__wbg_ptr) >>> 0
      }
      kt() {
        return mw.ILd4(this.__wbg_ptr) >>> 0
      }
      Gt(bb, wb, Mb) {
        const eb = lw(bb, mw.wpx8),
          Hb = hw,
          pb = lw(wb, mw.wpx8),
          Vb = hw,
          gb = mw.dSyK(this.__wbg_ptr, eb, Hb, pb, Vb, Mb);
        if (gb[1]) throw Uw(gb[0])
      }
      wC() {
        return mw.aabi(this.__wbg_ptr) >>> 0
      }
      mesh(bb, wb, Mb, eb, Hb) {
        const pb = mw.eUfd(this.__wbg_ptr, bb, wb, Mb, eb, Hb);
        if (pb[2]) throw Uw(pb[1]);
        return pb[0] >>> 0
      }
      constructor(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb, Bb, sb, mb, hb) {
        const zb = gw(bb, mw.wpx8),
          Xb = hw,
          xb = Iw(wb, mw.wpx8),
          jb = hw,
          Kb = lw(Mb, mw.wpx8),
          rb = hw,
          Rb = Lw(eb, mw.wpx8),
          Db = hw,
          cb = Lw(Hb, mw.wpx8),
          Yb = hw,
          Zb = lw(pb, mw.wpx8),
          fb = hw,
          Ab = lw(Vb, mw.wpx8),
          Wb = hw,
          Jb = Iw(gb, mw.wpx8),
          Sb = hw,
          Nb = Iw(lb, mw.wpx8),
          vb = hw,
          Gb = Lw(Lb, mw.wpx8),
          qb = hw;
        var ab = Vw(Ib) ? 0 : gw(Ib, mw.wpx8),
          ib = hw;
        const ub = lw(Ob, mw.wpx8),
          db = hw,
          Pb = Lw(Ub, mw.wpx8),
          nb = hw;
        var yb = Vw(tb) ? 0 : Lw(tb, mw.wpx8),
          ob = hw,
          Tb = Vw(Cb) ? 0 : Lw(Cb, mw.wpx8),
          kb = hw;
        const bw = Iw(Eb, mw.wpx8),
          ww = hw,
          Mw = mw.H3hj(zb, Xb, xb, jb, Kb, rb, Rb, Db, cb, Yb, Zb, fb, Ab, Wb, Jb, Sb, Nb, vb, Gb, qb, ab, ib, ub, db, Pb, nb, yb, ob, Tb, kb, bw, ww, Fb, Bb, sb, mb, hb);
        if (Mw[2]) throw Uw(Mw[1]);
        return this.__wbg_ptr = Mw[0], Qb.register(this, this.__wbg_ptr, this), this
      }
      bC(bb, wb) {
        const Mb = lw(bb, mw.wpx8),
          eb = hw,
          Hb = mw.DXl0(this.__wbg_ptr, Mb, eb, wb);
        if (Hb[3]) throw Uw(Hb[2]);
        var pb = db(Hb[0], Hb[1]).slice();
        return mw.UA85(Hb[0], 1 * Hb[1], 1), pb
      }
      MC(bb) {
        mw.hjcn(this.__wbg_ptr, Vw(bb) ? 16777215 : bb)
      }
      eC(bb) {
        return mw.C1Bd(this.__wbg_ptr, bb) >>> 0
      }
      pC() {
        return mw.tS3K(this.__wbg_ptr) >>> 0
      }
      HC() {
        const bb = mw.r40h(this.__wbg_ptr);
        if (bb[2]) throw Uw(bb[1]);
        return 0 !== bb[0]
      }
      VC() {
        return mw.tqTH(this.__wbg_ptr) >>> 0
      }
      gC() {
        return mw.GlMf(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Ib.prototype[Symbol.dispose] = Ib.prototype.free);
    class Ob {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Gb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        mw.hN1Q(bb, 0)
      }
      compute(bb, wb, Mb, eb) {
        var Hb = Vw(eb) ? 0 : Ow(eb, mw.wpx8, mw.kts5),
          pb = hw;
        const Vb = mw.KqPp(this.__wbg_ptr, bb, Vw(wb) ? Number.MAX_SAFE_INTEGER : wb | 0, Mb, Hb, pb);
        if (Vb[2]) throw Uw(Vb[1]);
        return Vb[0] >>> 0
      }
      qt(bb) {
        const wb = Ow(bb, mw.wpx8, mw.kts5),
          Mb = hw;
        mw.m4Vl(this.__wbg_ptr, wb, Mb)
      }
      Tt() {
        return mw.mu7a(this.__wbg_ptr) >>> 0
      }
      kt() {
        return mw.NVVA(this.__wbg_ptr) >>> 0
      }
      lC(bb) {
        const wb = mw.JrMs(this.__wbg_ptr, bb);
        if (wb[2]) throw Uw(wb[1]);
        return wb[0] >>> 0
      }
      constructor(bb, wb, Mb, eb, Hb, pb) {
        const Vb = gw(bb, mw.wpx8),
          gb = hw,
          lb = Iw(wb, mw.wpx8),
          Lb = hw,
          Ib = lw(Mb, mw.wpx8),
          Ob = hw,
          Ub = Lw(eb, mw.wpx8),
          tb = hw,
          Cb = mw.ZX8J(Vb, gb, lb, Lb, Ib, Ob, Ub, tb, Hb, pb);
        if (Cb[2]) throw Uw(Cb[1]);
        return this.__wbg_ptr = Cb[0], Gb.register(this, this.__wbg_ptr, this), this
      }
      pC() {
        return mw.uavO(this.__wbg_ptr) >>> 0
      }
      HC() {
        const bb = mw.SnVY(this.__wbg_ptr);
        if (bb[2]) throw Uw(bb[1]);
        return 0 !== bb[0]
      }
      VC() {
        return mw.MGKt(this.__wbg_ptr) >>> 0
      }
    }

    function Ub() {
      const bb = mw.oPkU();
      var wb = ub(bb[0], bb[1]).slice();
      return mw.UA85(bb[0], 4 * bb[1], 4), wb
    }

    function tb(bb, wb) {
      let Mb, eb;
      try {
        const Hb = gw(bb, mw.wpx8),
          pb = hw,
          Vb = Ow(wb, mw.wpx8, mw.kts5),
          gb = hw,
          lb = mw.tpaC(Hb, pb, Vb, gb);
        return Mb = lb[0], eb = lb[1], ob(lb[0], lb[1])
      } finally {
        mw.UA85(Mb, eb, 1)
      }
    }

    function Cb() {
      const bb = mw.x3y5();
      var wb = ub(bb[0], bb[1]).slice();
      return mw.UA85(bb[0], 4 * bb[1], 4), wb
    }

    function Eb(bb) {
      return 0 !== mw.VGJf(bb)
    }

    function Fb(bb, wb) {
      const Mb = Ow(bb, mw.wpx8, mw.kts5),
        eb = hw,
        Hb = mw.J6w1(Mb, eb, wb);
      if (Hb[1]) throw Uw(Hb[0])
    }

    function Bb() {
      mw.CJpj()
    }

    function sb() {
      return mw.sv8k() >>> 0
    }

    function mb(bb) {
      return 0 !== mw.NuU1(bb)
    }

    function hb(bb) {
      return 0 !== mw.yH0s(bb)
    }

    function zb(bb) {
      mw.hPBP(bb)
    }

    function Xb() {
      return mw.U5uv() >>> 0
    }

    function xb() {
      return mw.rCpV() >>> 0
    }

    function jb() {
      return 0 !== mw.qyP7()
    }

    function Kb() {
      const bb = mw.Ktba();
      var wb = ub(bb[0], bb[1]).slice();
      return mw.UA85(bb[0], 4 * bb[1], 4), wb
    }

    function rb() {
      const bb = mw.flYK();
      var wb = ub(bb[0], bb[1]).slice();
      return mw.UA85(bb[0], 4 * bb[1], 4), wb
    }

    function Rb() {
      const bb = mw.yMKH();
      var wb = ub(bb[0], bb[1]).slice();
      return mw.UA85(bb[0], 4 * bb[1], 4), wb
    }

    function Db() {
      return mw.o63Y() >>> 0
    }

    function cb() {
      mw.SuVQ()
    }

    function Yb() {
      let bb, wb;
      try {
        const Mb = mw.U3Jd();
        return bb = Mb[0], wb = Mb[1], ob(Mb[0], Mb[1])
      } finally {
        mw.UA85(bb, wb, 1)
      }
    }

    function Zb(bb) {
      mw.FwuX(qb(bb))
    }

    function fb() {
      return {
        __proto__: null,
        NM3c: {
          __proto__: null,
          dT6O: function(bb, wb) {
            return qb(Error(ob(bb, wb)))
          },
          yrZU: function(bb, wb) {
            throw new Error(ob(bb, wb))
          },
          APR7: function(bb) {
            ew(bb).call()
          },
          vvU3: function(bb, wb) {
            console.error(ob(bb, wb))
          },
          cRSY: function() {
            return performance.now()
          },
          weTu: function(bb) {
            Uw(bb)
          }
        }
      }
    }
    Symbol.dispose && (Ob.prototype[Symbol.dispose] = Ob.prototype.free);
    const Ab = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => mw.dlSN(bb, 1))),
      Wb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => mw.dKDU(bb, 1))),
      Jb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => mw.ubWQ(bb, 1))),
      Sb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => mw.nUe3(bb, 1))),
      Nb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => mw.ci95(bb, 1))),
      vb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => mw.aMtz(bb, 1))),
      Qb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => mw.wX67(bb, 1))),
      Gb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => mw.hN1Q(bb, 1)));

    function qb(bb) {
      pw === Hw.length && Hw.push(Hw.length + 1);
      const wb = pw;
      return pw = Hw[wb], Hw[wb] = bb, wb
    }

    function ab(bb, wb) {
      if (!(bb instanceof wb)) throw new Error(`expected instance of ${wb.name}`)
    }

    function ib(bb, wb) {
      return bb >>>= 0, nb().subarray(bb / 8, bb / 8 + wb)
    }

    function ub(bb, wb) {
      return bb >>>= 0, bw().subarray(bb / 4, bb / 4 + wb)
    }

    function db(bb, wb) {
      return bb >>>= 0, Mw().subarray(bb / 1, bb / 1 + wb)
    }
    let Pb = null;

    function nb() {
      return null !== Pb && 0 !== Pb.byteLength || (Pb = new Float64Array(mw.memory.buffer)), Pb
    }
    let yb = null;

    function ob(bb, wb) {
      return function(bb, wb) {
        Ew += wb, Ew >= Cw && (tw = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), tw.decode(), Ew = wb);
        return tw.decode(Mw().subarray(bb, bb + wb))
      }(bb >>> 0, wb)
    }
    let Tb = null;
    let kb = null;

    function bw() {
      return null !== kb && 0 !== kb.byteLength || (kb = new Uint32Array(mw.memory.buffer)), kb
    }
    let ww = null;

    function Mw() {
      return null !== ww && 0 !== ww.byteLength || (ww = new Uint8Array(mw.memory.buffer)), ww
    }

    function ew(bb) {
      return Hw[bb]
    }
    let Hw = new Array(1024).fill(void 0);
    Hw.push(void 0, null, !0, !1);
    let pw = Hw.length;

    function Vw(bb) {
      return void 0 === bb || null === bb
    }

    function gw(bb, wb) {
      const Mb = wb(2 * bb.length, 2) >>> 0;
      return (null !== Tb && 0 !== Tb.byteLength || (Tb = new Uint16Array(mw.memory.buffer)), Tb).set(bb, Mb / 2), hw = bb.length, Mb
    }

    function lw(bb, wb) {
      const Mb = wb(4 * bb.length, 4) >>> 0;
      return bw().set(bb, Mb / 4), hw = bb.length, Mb
    }

    function Lw(bb, wb) {
      const Mb = wb(1 * bb.length, 1) >>> 0;
      return Mw().set(bb, Mb / 1), hw = bb.length, Mb
    }

    function Iw(bb, wb) {
      const Mb = wb(8 * bb.length, 8) >>> 0;
      return nb().set(bb, Mb / 8), hw = bb.length, Mb
    }

    function Ow(bb, wb, Mb) {
      if (void 0 === Mb) {
        const Mb = Fw.encode(bb),
          eb = wb(Mb.length, 1) >>> 0;
        return Mw().subarray(eb, eb + Mb.length).set(Mb), hw = Mb.length, eb
      }
      let eb = bb.length,
        Hb = wb(eb, 1) >>> 0;
      const pb = Mw();
      let Vb = 0;
      for (; Vb < eb; Vb++) {
        const wb = bb.charCodeAt(Vb);
        if (wb > 127) break;
        pb[Hb + Vb] = wb
      }
      if (Vb !== eb) {
        0 !== Vb && (bb = bb.slice(Vb)), Hb = Mb(Hb, eb, eb = Vb + 3 * bb.length, 1) >>> 0;
        const wb = Mw().subarray(Hb + Vb, Hb + eb);
        Vb += Fw.encodeInto(bb, wb).written, Hb = Mb(Hb, eb, Vb, 1) >>> 0
      }
      return hw = Vb, Hb
    }

    function Uw(bb) {
      const wb = ew(bb);
      return function(bb) {
        bb < 1028 || (Hw[bb] = pw, pw = bb)
      }(bb), wb
    }
    let tw = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    tw.decode();
    const Cw = 2146435072;
    let Ew = 0;
    const Fw = new TextEncoder;
    "encodeInto" in Fw || (Fw.encodeInto = function(bb, wb) {
      const Mb = Fw.encode(bb);
      return wb.set(Mb), {
        read: bb.length,
        written: Mb.length
      }
    });
    let Bw, sw, mw, hw = 0;

    function zw(bb, wb) {
      return sw = bb, mw = bb.exports, Bw = wb, Pb = null, yb = null, Tb = null, kb = null, ww = null, mw.sf1F(), mw
    }

    function Xw(bb) {
      if (void 0 !== mw) return mw;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module: bb
      } = bb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const wb = fb();
      bb instanceof WebAssembly.Module || (bb = new WebAssembly.Module(bb));
      return zw(new WebAssembly.Instance(bb, wb), bb)
    }
    async function xw(bb) {
      if (void 0 !== mw) return mw;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module_or_path: bb
      } = bb) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const wb = fb();
      ("string" === typeof bb || "function" === typeof Request && bb instanceof Request || "function" === typeof URL && bb instanceof URL) && (bb = fetch(bb));
      const {
        instance: Mb,
        module: eb
      } = await async function(bb, wb) {
        if ("function" === typeof Response && bb instanceof Response) {
          if (!bb.ok) throw new Error(`failed to fetch Wasm: ${bb.status} ${bb.statusText} fetching '${bb.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(bb, wb)
          } catch (Mb) {
            if (! function(bb) {
                switch (bb) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(bb.type) || "application/wasm" === bb.headers.get("Content-Type")) throw Mb;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Mb)
          }
          const eb = await bb.arrayBuffer();
          return await WebAssembly.instantiate(eb, wb)
        } {
          const Mb = await WebAssembly.instantiate(bb, wb);
          return Mb instanceof WebAssembly.Instance ? {
            instance: Mb,
            module: bb
          } : Mb
        }
      }(await bb, wb);
      return zw(Mb, eb)
    }
  },
  37421: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      f: () => gb,
      h: () => lb
    });
    var eb = Mb(37426),
      Hb = Mb(2463),
      pb = Mb(37435);
    const Vb = {
      name: Hb.b,
      url: () => new Mb.U(Mb(37439)),
      init: eb.default,
      bindings: eb
    };

    function gb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vb,
        wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vb,
        Mb = arguments.length > 2 ? arguments[2] : void 0;
      return (0, pb.o)(bb, wb, Mb)
    }

    function lb(bb) {
      return (0, Hb.A)((() => bb), eb, Vb)
    }
  },
  37414: (bb, wb, Mb) => {
    function eb(bb, wb) {
      return new Error(`${bb}: ${wb instanceof Error?`${wb.name}: ${wb.message}`:String(wb)}`, {
        cause: wb
      })
    }
    Mb.d(wb, {
      e: () => eb
    })
  },
  37411: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb,
      e: () => lb
    });
    var eb = Mb(2471),
      Hb = Mb(7804),
      pb = Mb(37414);

    function Vb() {
      return new URL(new Mb.U(Mb(37416)).href, globalThis.location?.href).href
    }
    let gb = null;

    function lb() {
      return gb ??= (async () => (0, eb.y)(new URL(Vb()), (0, Hb.e)("bloxd_wasm_textures")))().catch((bb => {
        throw (0, pb.e)((0, eb.E)(bb), bb)
      })), gb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);