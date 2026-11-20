export const id = 207;
export const ids = [207, 208];
export const modules = {
  35906: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob,
      reportCappedWasmFailure: () => Lb,
      reportUncappedWasmFailure: () => Ub,
      reportWasmFailure: () => Gb
    });
    var Bb = hb(2736);
    const Ob = Bb.e - 4;

    function Gb(bb, ub, hb) {
      (0, Bb.i)(bb, ub, hb, !1)
    }

    function Ub(bb, ub, hb) {
      (0, Bb.i)(bb, ub, hb, !1, 1 / 0)
    }

    function Lb(bb, ub, hb) {
      (0, Bb.i)(bb, ub, hb, !1, Ob)
    }
  },
  35902: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Cb,
      e: () => jb,
      g: () => nb,
      h: () => db
    });
    var Bb = hb(35927),
      Ob = hb(2683),
      Gb = hb(35942),
      Ub = hb(2688),
      Lb = hb(35906),
      Yb = hb(2725),
      Sb = hb(3028),
      ab = hb(3020),
      Hb = hb(35912),
      wb = hb(2736),
      Zb = hb(35920),
      Xb = hb(35925),
      pb = hb(3480);
    let ob = !1;
    const Ab = 40;
    var lb = hb(651);
    const Kb = "bloxdWasmFailureReported";

    function Wb() {
      return "undefined" === typeof WebAssembly
    }

    function Cb() {
      return (0, Bb.h)()
    }

    function db() {
      if (Wb()) return "this browser has no WebAssembly";
      const bb = (0, Ob.n)();
      return "compile" === bb || "instantiate" === bb ? `the core wasm didn't load here (${(0,Ob.h)()})` : null
    }
    async function rb(bb) {
      return await (0, Gb.h)(Gb.d, void 0, bb)
    }

    function jb() {
      Wb() || (0, lb.b)((() => {
        rb()
      }))
    }

    function nb() {
      if (Wb()) return async () => ((0, Yb.k)("unsupported", 0), Db("unsupported", "This browser has no WebAssembly"), !1);
      const bb = {
        reloadFailedDownload: !0
      };
      return rb(bb), async () => {
        var ub;
        const hb = performance.now();
        await rb(bb);
        const Bb = (performance.now() - hb) / 1e3;
        if ((0, Ob.M)()) return (0, Yb.k)("ready", Bb), ob || (ob = !0, (0, Ob.O)((() => {
          if ("call" !== (0, Ob.n)()) return;
          const bb = (0, Ob.l)(),
            ub = (0, Hb.j)(bb, Ob.D, Ob.T),
            hb = (0, Ob.t)().buffer.byteLength,
            Bb = (0, Hb.d)(ub.kind, ub.refusedBytes),
            Gb = Bb ? "alloc_failed" : ub.kind,
            Ub = (0, Zb.g)(hb),
            Lb = Bb ? `_r${Math.floor(Math.log2(ub.refusedBytes))}` : "",
            Yb = (0, pb.c)();
          null === Yb && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const Sb = new Error((0, Xb.b)(bb, hb, ub));
          if (bb instanceof Error && void 0 !== bb.stack) {
            const ub = bb.stack.split("\n"),
              hb = ub.length > Ab ? [...ub.slice(0, Ab / 2), ...ub.slice(-Ab / 2)] : ub;
            Sb.stack = hb.join("\n")
          }(0, wb.i)("wasm_load", Sb, `wasm_call_${Gb}_${null!==Yb&&void 0!==Yb?Yb:"unnamed"}_m${Ub}${Lb}`)
        }))), (0, Ub.Q)(Gb.d.url()) && (0, Lb.reportCappedWasmFailure)("wasm_load", Sb.d.message, Sb.d.code), !0;
        const lb = ab.d[null !== (ub = (0, Ob.n)()) && void 0 !== ub ? ub : "call"];
        return (0, Yb.k)(lb, Bb), Db(lb, (0, Ob.h)()), !1
      }
    }

    function Db(bb, ub) {
      (0, ab.l)(Kb, `Bloxd wasm ${bb}, so the game can't start: ${ub}`, ub, bb)
    }
  },
  35954: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/bloxd_wasm_bg.1086bcfafc6573f96b81.wasm"
  },
  35933: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/bloxd_wasm_textures_bg.5829ef2d5fb70538e689.wasm"
  },
  35942: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => xu,
      h: () => zu,
      i: () => gu
    });
    var Bb = {};
    hb.r(Bb), hb.d(Bb, {
      ia: () => Ob,
      EnvelopeKind: () => Gb,
      va: () => Ub,
      PhysicsEngine: () => Lb,
      Ja: () => Yb,
      ea: () => Sb,
      Na: () => ab,
      sa: () => Hb,
      Ma: () => wb,
      ma: () => Zb,
      Ia: () => Xb,
      Pa: () => pb,
      qa: () => ob,
      Ea: () => Ab,
      default: () => ju,
      initSync: () => ru,
      ya: () => lb,
      Va: () => Kb,
      Fa: () => Wb,
      fa: () => Cb,
      ka: () => db,
      Ta: () => rb,
      ca: () => jb,
      Qa: () => nb,
      Ra: () => Db,
      bH: () => xb,
      uH: () => zb,
      hH: () => gb,
      BH: () => ib,
      OH: () => vb,
      GH: () => tb
    });
    class Ob {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, eb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        Wu.Fr1x(bb, 0)
      }
      UH() {
        const bb = Wu.Ills(this.__wbg_ptr);
        if (bb[2]) throw Zu(bb[1]);
        return bb[0] >>> 0
      }
      LH() {
        return Wu.U4d9(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const bb = Wu.RAiw();
        return this.__wbg_ptr = bb, eb.register(this, this.__wbg_ptr, this), this
      }
      YH() {
        return Wu.j755(this.__wbg_ptr) >>> 0
      }
      SH(bb) {
        const ub = Wu.CFeK(this.__wbg_ptr, bb);
        if (ub[2]) throw Zu(ub[1]);
        return ub[0] >>> 0
      }
      aH(bb) {
        const ub = Wu.eP9h(this.__wbg_ptr, bb);
        if (ub[2]) throw Zu(ub[1]);
        return ub[0] >>> 0
      }
    }
    Symbol.dispose && (Ob.prototype[Symbol.dispose] = Ob.prototype.free);
    const Gb = Object.freeze({
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
    class Ub {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Nb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        Wu.E3yR(bb, 0)
      }
      ZH(bb, ub) {
        const hb = Wu.elra(this.__wbg_ptr, bb, ub);
        if (hb[2]) throw Zu(hb[1]);
        return hb[0] >>> 0
      }
      XH(bb) {
        const ub = Wu.xP7k(this.__wbg_ptr, bb);
        if (ub[2]) throw Zu(ub[1]);
        return ub[0] >>> 0
      }
      pH() {
        Wu.RUeO(this.__wbg_ptr)
      }
      static oH() {
        return Wu.COVj() >>> 0
      }
      AH() {
        return Wu.PtpA(this.__wbg_ptr) >>> 0
      }
      lH() {
        const bb = Wu.EouB(this.__wbg_ptr);
        return 0 === bb[0] ? void 0 : bb[1]
      }
      KH() {
        return Wu.Bwau(this.__wbg_ptr) >>> 0
      }
      WH() {
        return Wu.gdSD(this.__wbg_ptr) >>> 0
      }
      static wH() {
        return Wu.Jsoo() >>> 0
      }
      constructor() {
        const bb = Wu.ShJ2();
        return this.__wbg_ptr = bb, Nb.register(this, this.__wbg_ptr, this), this
      }
      CH() {
        return Wu.gD0U(this.__wbg_ptr) >>> 0
      }
      dH() {
        return Wu.WDIr(this.__wbg_ptr) >>> 0
      }
      rH() {
        return Wu.fIDX(this.__wbg_ptr) >>> 0
      }
      HH(bb) {
        return Wu.HXDZ(this.__wbg_ptr, bb) >>> 0
      }
      reserve(bb, ub) {
        const hb = Wu.CeLv(this.__wbg_ptr, bb, ub);
        if (hb[1]) throw Zu(hb[0])
      }
      DH(bb, ub) {
        const hb = Su(bb, Wu.kw55),
          Bb = Cu;
        Wu.Dhe6(this.__wbg_ptr, hb, Bb, ub)
      }
      text() {
        let bb, ub;
        try {
          const hb = Wu.A7g9(this.__wbg_ptr);
          return bb = hb[0], ub = hb[1], Qb(hb[0], hb[1])
        } finally {
          Wu.OOfm(bb, ub, 1)
        }
      }
    }
    Symbol.dispose && (Ub.prototype[Symbol.dispose] = Ub.prototype.free);
    class Lb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, sb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        Wu.BNR0(bb, 0)
      }
      zH(bb, ub) {
        yb(ub, Ob);
        const hb = Wu.Yh45(this.__wbg_ptr, bb, ub.__wbg_ptr);
        if (hb[2]) throw Zu(hb[1]);
        return hb[0] >>> 0
      }
      iH() {
        const bb = Wu.lwm9(this.__wbg_ptr);
        if (bb[1]) throw Zu(bb[0])
      }
      NH(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Sb, ab, Hb) {
        yb(bb, Yb);
        const wb = Wu.dtsu(this.__wbg_ptr, bb.__wbg_ptr, ub, hb, Bb, Ob, Gb, Ub, Lb, Sb, ab, Hb);
        if (wb[2]) throw Zu(wb[1]);
        return wb[0]
      }
      sH() {
        const bb = Wu.IknR(this.__wbg_ptr);
        var ub = Vb(bb[0], bb[1]).slice();
        return Wu.OOfm(bb[0], 8 * bb[1], 8), ub
      }
      MH() {
        return Wu.aPXJ(this.__wbg_ptr) >>> 0
      }
      mH() {
        return Wu.SabK(this.__wbg_ptr) >>> 0
      }
      IH() {
        return Wu.Ff2k(this.__wbg_ptr) >>> 0
      }
      constructor(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
        const Yb = Wu.nQpU(bb, ub, hb, Bb, Ob, Gb, Ub, Lb);
        if (Yb[2]) throw Zu(Yb[1]);
        return this.__wbg_ptr = Yb[0], sb.register(this, this.__wbg_ptr, this), this
      }
      EH(bb) {
        yb(bb, Ob);
        const ub = Wu.pQHZ(this.__wbg_ptr, bb.__wbg_ptr);
        if (ub[2]) throw Zu(ub[1]);
        return ub[0] >>> 0
      }
      yH(bb) {
        const ub = Wu.eBcV(this.__wbg_ptr, bb);
        if (ub[1]) throw Zu(ub[0])
      }
      VH() {
        return Wu.g5R9(this.__wbg_ptr) >>> 0
      }
      resume(bb, ub) {
        yb(bb, Yb), yb(ub, Ob);
        const hb = Wu.imjV(this.__wbg_ptr, bb.__wbg_ptr, ub.__wbg_ptr);
        if (hb[2]) throw Zu(hb[1]);
        return hb[0] >>> 0
      }
      cH(bb) {
        const ub = Wu.zaOT(this.__wbg_ptr, bb);
        if (ub[1]) throw Zu(ub[0])
      }
      bw(bb, ub) {
        yb(ub, Ob);
        const hb = Wu.FaON(this.__wbg_ptr, bb, ub.__wbg_ptr);
        if (hb[1]) throw Zu(hb[0])
      }
      Bw(bb) {
        const ub = Hu(bb, Wu.kw55),
          hb = Cu,
          Bb = Wu.mqdV(this.__wbg_ptr, ub, hb);
        if (Bb[1]) throw Zu(Bb[0])
      }
      tH(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = Wu.bsyF(this.__wbg_ptr, bb, ub, hb, Bb, Ob, Gb);
        if (Ub[1]) throw Zu(Ub[0])
      }
      JH(bb, ub, hb, Bb) {
        const Ob = Su(bb, Wu.kw55),
          Gb = Cu,
          Ub = Hu(ub, Wu.kw55),
          Lb = Cu,
          Yb = Hu(hb, Wu.kw55),
          Sb = Cu,
          ab = Hu(Bb, Wu.kw55),
          Hb = Cu,
          wb = Wu.KLyv(this.__wbg_ptr, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb);
        if (wb[1]) throw Zu(wb[0])
      }
      Gw(bb, ub) {
        yb(ub, Ob);
        const hb = Wu.RZj8(this.__wbg_ptr, bb, ub.__wbg_ptr);
        if (hb[1]) throw Zu(hb[0])
      }
      qH(bb, ub, hb) {
        const Bb = Wu.q6ZV(this.__wbg_ptr, bb, ub, hb);
        if (Bb[1]) throw Zu(Bb[0])
      }
      Lw(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Sb, ab) {
        yb(bb, Yb);
        return Wu.dUIB(this.__wbg_ptr, bb.__wbg_ptr, ub, hb, Bb, Ob, Gb, Ub, Lb, Sb, ab)
      }
    }
    Symbol.dispose && (Lb.prototype[Symbol.dispose] = Lb.prototype.free);
    class Yb {
      static __wrap(bb) {
        const ub = Object.create(Yb.prototype);
        return ub.__wbg_ptr = bb, Mb.register(ub, ub.__wbg_ptr, ub), ub
      }
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Mb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        Wu.UxmA(bb, 0)
      }
      aw(bb) {
        const ub = Wu.CWRp(this.__wbg_ptr, bb);
        if (ub[2]) throw Zu(ub[1]);
        return ub[0] >>> 0
      }
      Hw(bb, ub, hb) {
        return Wu.anxn(this.__wbg_ptr, bb, ub, hb)
      }
      ww(bb, ub, hb) {
        return Wu.oE8l(this.__wbg_ptr, bb, ub, hb) >>> 0
      }
      Zw(bb, ub, hb, Bb) {
        return 0 !== Wu.mD85(this.__wbg_ptr, bb, ub, hb, Bb)
      }
      Xw() {
        Wu.TGvK(this.__wbg_ptr)
      }
      ow(bb) {
        const ub = Wu.Iq23(this.__wbg_ptr, bb);
        if (ub[3]) throw Zu(ub[2]);
        var hb = fb(ub[0], ub[1]).slice();
        return Wu.OOfm(ub[0], 1 * ub[1], 1), hb
      }
      evict(bb, ub) {
        return Wu.N37Q(this.__wbg_ptr, bb, ub) >>> 0
      }
      Aw() {
        Wu.tqzy(this.__wbg_ptr)
      }
      lw(bb, ub, hb) {
        Wu.IMfA(this.__wbg_ptr, bb, ub, hb)
      }
      Kw(bb) {
        const ub = Wu.GR0U(this.__wbg_ptr, bb);
        if (ub[1]) throw Zu(ub[0])
      }
      Ww() {
        return Wu.RXp9(this.__wbg_ptr) >>> 0
      }
      Cw() {
        return Wu.xHQc(this.__wbg_ptr) >>> 0
      }
      dw(bb, ub, hb) {
        Wu.co3F(this.__wbg_ptr, bb, ub, hb)
      }
      rw(bb, ub, hb) {
        Wu.LufO(this.__wbg_ptr, bb, ub, hb)
      }
      jw() {
        return Wu.aKQX(this.__wbg_ptr) >>> 0
      }
      nw() {
        return Wu.gJNY(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const bb = Wu.hcN7();
        return this.__wbg_ptr = bb, Mb.register(this, this.__wbg_ptr, this), this
      }
      static Dw() {
        const bb = Wu.oUQy();
        return Yb.__wrap(bb)
      }
      xw() {
        return Wu.kkIX(this.__wbg_ptr) >>> 0
      }
      zw() {
        return Wu.cH6t(this.__wbg_ptr) >>> 0
      }
      gw(bb, ub, hb, Bb) {
        const Ob = Wu.xpZ3(this.__wbg_ptr, bb, ub, hb, Bb);
        if (Ob[1]) throw Zu(Ob[0])
      }
      iw() {
        return Wu.TR38(this.__wbg_ptr) >>> 0
      }
      tw() {
        return Wu.t28d(this.__wbg_ptr) >>> 0
      }
      Jw(bb, ub, hb, Bb) {
        Wu.G7UA(this.__wbg_ptr, bb, ub, hb, Bb)
      }
      ew(bb) {
        Wu.Q6RR(this.__wbg_ptr, bb)
      }
      sw(bb, ub, hb, Bb, Ob) {
        const Gb = au(ub, Wu.kw55),
          Ub = Cu,
          Lb = Su(hb, Wu.kw55),
          Yb = Cu,
          Sb = Hu(Bb, Wu.kw55),
          ab = Cu,
          Hb = Wu.m9ZT(this.__wbg_ptr, bb, Gb, Ub, Lb, Yb, Sb, ab, Ob);
        if (Hb[1]) throw Zu(Hb[0])
      }
      Nw(bb, ub, hb, Bb) {
        const Ob = au(bb, Wu.kw55),
          Gb = Cu,
          Ub = Su(ub, Wu.kw55),
          Lb = Cu,
          Yb = Hu(hb, Wu.kw55),
          Sb = Cu,
          ab = au(Bb, Wu.kw55),
          Hb = Cu,
          wb = Wu.KJLj(this.__wbg_ptr, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb);
        if (wb[1]) throw Zu(wb[0])
      }
      Ew(bb) {
        const ub = au(bb, Wu.kw55),
          hb = Cu,
          Bb = Wu.P3TN(this.__wbg_ptr, ub, hb);
        if (Bb[1]) throw Zu(Bb[0])
      }
      yw() {
        return Wu.DpgK(this.__wbg_ptr) >>> 0
      }
      Vw(bb) {
        const ub = Wu.gPPX(this.__wbg_ptr, bb);
        if (ub[2]) throw Zu(ub[1]);
        return ub[0] >>> 0
      }
      steer() {
        return Wu.SgIS(this.__wbg_ptr) >>> 0
      }
      Fw() {
        const bb = Wu.LGqE(this.__wbg_ptr);
        var ub = Vb(bb[0], bb[1]).slice();
        return Wu.OOfm(bb[0], 8 * bb[1], 8), ub
      }
      fw() {
        return Wu.KvdA(this.__wbg_ptr) >>> 0
      }
      fH() {
        const bb = Wu.ddDB(this.__wbg_ptr);
        var ub, hb, Bb = (ub = bb[0], hb = bb[1], ub >>>= 0, (null !== cb && 0 !== cb.byteLength || (cb = new Int32Array(Wu.memory.buffer)), cb).subarray(ub / 4, ub / 4 + hb)).slice();
        return Wu.OOfm(bb[0], 4 * bb[1], 4), Bb
      }
    }
    Symbol.dispose && (Yb.prototype[Symbol.dispose] = Yb.prototype.free);
    class Sb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, mb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        Wu.O5Dx(bb, 0)
      }
      kw(bb) {
        const ub = Su(bb, Wu.kw55),
          hb = Cu,
          Bb = Wu.cqqQ(this.__wbg_ptr, ub, hb);
        if (Bb[1]) throw Zu(Bb[0])
      }
      Tw() {
        return Wu.ihsF(this.__wbg_ptr) >>> 0
      }
      Qw() {
        return Wu.Fujg(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const bb = Wu.ey0R();
        return this.__wbg_ptr = bb, mb.register(this, this.__wbg_ptr, this), this
      }
      run(bb, ub) {
        yb(bb, Yb);
        const hb = Wu.tQ8L(this.__wbg_ptr, bb.__wbg_ptr, ub);
        if (hb[2]) throw Zu(hb[1]);
        return hb[0] >>> 0
      }
      Rw(bb) {
        const ub = Su(bb, Wu.kw55),
          hb = Cu;
        Wu.bT7f(this.__wbg_ptr, ub, hb)
      }
      bZ(bb) {
        const ub = Su(bb, Wu.kw55),
          hb = Cu;
        Wu.YwOq(this.__wbg_ptr, ub, hb)
      }
    }
    Symbol.dispose && (Sb.prototype[Symbol.dispose] = Sb.prototype.free);
    class ab {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Ib.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        Wu.TpfU(bb, 0)
      }
      hZ(bb, ub) {
        const hb = au(bb, Wu.kw55),
          Bb = Cu;
        return Wu.q2Wg(this.__wbg_ptr, hb, Bb, ub) >>> 0
      }
      BZ(bb, ub, hb) {
        yb(bb, Yb);
        const Bb = au(hb, Wu.kw55),
          Ob = Cu,
          Gb = Wu.IQkI(this.__wbg_ptr, bb.__wbg_ptr, ub, Bb, Ob);
        if (Gb[2]) throw Zu(Gb[1]);
        return Gb[0] >>> 0
      }
      uZ(bb) {
        return Wu.gKSK(this.__wbg_ptr, bb) >>> 0
      }
      constructor() {
        const bb = Wu.Wy1f();
        return this.__wbg_ptr = bb, Ib.register(this, this.__wbg_ptr, this), this
      }
      scan(bb, ub) {
        yb(bb, Yb);
        const hb = Wu.kGOg(this.__wbg_ptr, bb.__wbg_ptr, ub);
        if (hb[2]) throw Zu(hb[1]);
        return hb[0] >>> 0
      }
      UZ(bb) {
        const ub = au(bb, Wu.kw55),
          hb = Cu;
        Wu.BV4O(this.__wbg_ptr, ub, hb)
      }
      GZ() {
        return Wu.LDsc(this.__wbg_ptr) >>> 0
      }
      OZ() {
        return Wu.MeuA(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (ab.prototype[Symbol.dispose] = ab.prototype.free);
    class Hb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Pb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        Wu.kjBL(bb, 0)
      }
      YZ(bb) {
        const ub = Wu.Swgy(this.__wbg_ptr, bb);
        if (ub[2]) throw Zu(ub[1]);
        return ub[0] >>> 0
      }
      compute(bb, ub, hb, Bb) {
        var Ob = Lu(Bb) ? 0 : wu(Bb, Wu.kw55, Wu.Zm7I),
          Gb = Cu;
        const Ub = Wu.UVka(this.__wbg_ptr, bb, Lu(ub) ? Number.MAX_SAFE_INTEGER : ub | 0, hb, Ob, Gb);
        if (Ub[2]) throw Zu(Ub[1]);
        return Ub[0] >>> 0
      }
      aZ(bb) {
        const ub = wu(bb, Wu.kw55, Wu.Zm7I),
          hb = Cu;
        Wu.eN4c(this.__wbg_ptr, ub, hb)
      }
      wZ() {
        return Wu.thwj(this.__wbg_ptr)
      }
      ZZ(bb) {
        return Wu.g7Tu(this.__wbg_ptr, bb) >>> 0
      }
      XZ() {
        return Wu.jyyF(this.__wbg_ptr) >>> 0
      }
      pZ() {
        return Wu.LX6E(this.__wbg_ptr) >>> 0
      }
      oZ(bb, ub) {
        const hb = Wu.xNZI(this.__wbg_ptr, bb, ub);
        if (hb[1]) throw Zu(hb[0])
      }
      AZ() {
        return Wu.W6Rp(this.__wbg_ptr) >>> 0
      }
      lZ() {
        return Wu.sRvm(this.__wbg_ptr) >>> 0
      }
      KZ() {
        return Wu.k0Gh(this.__wbg_ptr) >>> 0
      }
      SZ(bb, ub, hb) {
        const Bb = Su(bb, Wu.kw55),
          Ob = Cu,
          Gb = Su(ub, Wu.kw55),
          Ub = Cu,
          Lb = Wu.SPMA(this.__wbg_ptr, Bb, Ob, Gb, Ub, hb);
        if (Lb[1]) throw Zu(Lb[0])
      }
      CZ() {
        return Wu.sYDn(this.__wbg_ptr) >>> 0
      }
      mesh(bb, ub, hb, Bb, Ob) {
        const Gb = Wu.h5lt(this.__wbg_ptr, bb, ub, hb, Bb, Ob);
        if (Gb[2]) throw Zu(Gb[1]);
        return Gb[0] >>> 0
      }
      constructor(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, pb, ob, Ab, lb, Kb) {
        const Wb = Yu(bb, Wu.kw55),
          Cb = Cu,
          db = Hu(ub, Wu.kw55),
          rb = Cu,
          jb = Su(hb, Wu.kw55),
          nb = Cu,
          Db = au(Bb, Wu.kw55),
          xb = Cu,
          zb = au(Ob, Wu.kw55),
          gb = Cu,
          ib = Su(Gb, Wu.kw55),
          vb = Cu,
          tb = Su(Ub, Wu.kw55),
          Jb = Cu,
          eb = Hu(Lb, Wu.kw55),
          Nb = Cu,
          sb = Hu(Yb, Wu.kw55),
          Mb = Cu,
          mb = au(Sb, Wu.kw55),
          Ib = Cu;
        var qb = Lu(ab) ? 0 : Yu(ab, Wu.kw55),
          Eb = Cu;
        const yb = Su(Hb, Wu.kw55),
          Vb = Cu,
          Fb = au(wb, Wu.kw55),
          fb = Cu;
        var kb = Lu(Zb) ? 0 : au(Zb, Wu.kw55),
          Tb = Cu;
        const cb = Hu(Xb, Wu.kw55),
          Qb = Cu,
          Rb = Wu.gU7i(Wb, Cb, db, rb, jb, nb, Db, xb, zb, gb, ib, vb, tb, Jb, eb, Nb, sb, Mb, mb, Ib, qb, Eb, yb, Vb, Fb, fb, kb, Tb, cb, Qb, pb, ob, Ab, lb, Kb);
        if (Rb[2]) throw Zu(Rb[1]);
        return this.__wbg_ptr = Rb[0], Pb.register(this, this.__wbg_ptr, this), this
      }
      WZ(bb, ub) {
        const hb = Su(bb, Wu.kw55),
          Bb = Cu,
          Ob = Wu.xiJ0(this.__wbg_ptr, hb, Bb, ub);
        if (Ob[3]) throw Zu(Ob[2]);
        var Gb = fb(Ob[0], Ob[1]).slice();
        return Wu.OOfm(Ob[0], 1 * Ob[1], 1), Gb
      }
      dZ(bb) {
        Wu.SCyb(this.__wbg_ptr, Lu(bb) ? 16777215 : bb)
      }
      rZ(bb) {
        return Wu.wXh7(this.__wbg_ptr, bb) >>> 0
      }
      DZ() {
        return Wu.axuX(this.__wbg_ptr) >>> 0
      }
      jZ() {
        const bb = Wu.Hsy6(this.__wbg_ptr);
        if (bb[2]) throw Zu(bb[1]);
        return 0 !== bb[0]
      }
      xZ() {
        return Wu.rmPH(this.__wbg_ptr) >>> 0
      }
      zZ() {
        return Wu.i7Yu(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Hb.prototype[Symbol.dispose] = Hb.prototype.free);
    class wb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, qb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        Wu.BWF6(bb, 0)
      }
      compute(bb, ub, hb, Bb) {
        var Ob = Lu(Bb) ? 0 : wu(Bb, Wu.kw55, Wu.Zm7I),
          Gb = Cu;
        const Ub = Wu.HW1X(this.__wbg_ptr, bb, Lu(ub) ? Number.MAX_SAFE_INTEGER : ub | 0, hb, Ob, Gb);
        if (Ub[2]) throw Zu(Ub[1]);
        return Ub[0] >>> 0
      }
      aZ(bb) {
        const ub = wu(bb, Wu.kw55, Wu.Zm7I),
          hb = Cu;
        Wu.oXQ1(this.__wbg_ptr, ub, hb)
      }
      lZ() {
        return Wu.MvHj(this.__wbg_ptr) >>> 0
      }
      KZ() {
        return Wu.smnB(this.__wbg_ptr) >>> 0
      }
      gZ(bb) {
        const ub = Wu.itoM(this.__wbg_ptr, bb);
        if (ub[2]) throw Zu(ub[1]);
        return ub[0] >>> 0
      }
      constructor(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = Yu(bb, Wu.kw55),
          Lb = Cu,
          Yb = Hu(ub, Wu.kw55),
          Sb = Cu,
          ab = Su(hb, Wu.kw55),
          Hb = Cu,
          wb = au(Bb, Wu.kw55),
          Zb = Cu,
          Xb = Wu.Yp1d(Ub, Lb, Yb, Sb, ab, Hb, wb, Zb, Ob, Gb);
        if (Xb[2]) throw Zu(Xb[1]);
        return this.__wbg_ptr = Xb[0], qb.register(this, this.__wbg_ptr, this), this
      }
      DZ() {
        return Wu.yzEA(this.__wbg_ptr) >>> 0
      }
      jZ() {
        const bb = Wu.AH0M(this.__wbg_ptr);
        if (bb[2]) throw Zu(bb[1]);
        return 0 !== bb[0]
      }
      xZ() {
        return Wu.inc8(this.__wbg_ptr) >>> 0
      }
    }

    function Zb() {
      const bb = Wu.XN5h();
      var ub = Fb(bb[0], bb[1]).slice();
      return Wu.OOfm(bb[0], 4 * bb[1], 4), ub
    }

    function Xb(bb, ub) {
      let hb, Bb;
      try {
        const Ob = Yu(bb, Wu.kw55),
          Gb = Cu,
          Ub = wu(ub, Wu.kw55, Wu.Zm7I),
          Lb = Cu,
          Yb = Wu.vESg(Ob, Gb, Ub, Lb);
        return hb = Yb[0], Bb = Yb[1], Qb(Yb[0], Yb[1])
      } finally {
        Wu.OOfm(hb, Bb, 1)
      }
    }

    function pb() {
      const bb = Wu.ADib();
      var ub = Fb(bb[0], bb[1]).slice();
      return Wu.OOfm(bb[0], 4 * bb[1], 4), ub
    }

    function ob(bb) {
      return 0 !== Wu.kSOE(bb)
    }

    function Ab(bb, ub) {
      const hb = wu(bb, Wu.kw55, Wu.Zm7I),
        Bb = Cu,
        Ob = Wu.VyTM(hb, Bb, ub);
      if (Ob[1]) throw Zu(Ob[0])
    }

    function lb() {
      Wu.NpwS()
    }

    function Kb() {
      return Wu.XT2N() >>> 0
    }

    function Wb(bb) {
      return 0 !== Wu.qrvh(bb)
    }

    function Cb(bb) {
      return 0 !== Wu.SMrm(bb)
    }

    function db(bb) {
      Wu.ycMq(bb)
    }

    function rb() {
      return Wu.xlV7() >>> 0
    }

    function jb() {
      return Wu.JQx7() >>> 0
    }

    function nb() {
      return 0 !== Wu.Z4uJ()
    }

    function Db() {
      const bb = Wu.IY0u();
      var ub = Fb(bb[0], bb[1]).slice();
      return Wu.OOfm(bb[0], 4 * bb[1], 4), ub
    }

    function xb() {
      const bb = Wu.YS4r();
      var ub = Fb(bb[0], bb[1]).slice();
      return Wu.OOfm(bb[0], 4 * bb[1], 4), ub
    }

    function zb() {
      const bb = Wu.V6tX();
      var ub = Fb(bb[0], bb[1]).slice();
      return Wu.OOfm(bb[0], 4 * bb[1], 4), ub
    }

    function gb() {
      return Wu.UtFZ() >>> 0
    }

    function ib() {
      Wu.df4J()
    }

    function vb() {
      let bb, ub;
      try {
        const hb = Wu.Sl1O();
        return bb = hb[0], ub = hb[1], Qb(hb[0], hb[1])
      } finally {
        Wu.OOfm(bb, ub, 1)
      }
    }

    function tb(bb) {
      Wu.eoJj(Eb(bb))
    }

    function Jb() {
      return {
        __proto__: null,
        Ehmd: {
          __proto__: null,
          DzFR: function(bb, ub) {
            return Eb(Error(Qb(bb, ub)))
          },
          wJC6: function(bb, ub) {
            throw new Error(Qb(bb, ub))
          },
          F2tp: function(bb) {
            Ou(bb).call()
          },
          cenW: function(bb, ub) {
            console.error(Qb(bb, ub))
          },
          zvAz: function() {
            return performance.now()
          },
          rlfw: function(bb) {
            Zu(bb)
          }
        }
      }
    }
    Symbol.dispose && (wb.prototype[Symbol.dispose] = wb.prototype.free);
    const eb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => Wu.Fr1x(bb, 1))),
      Nb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => Wu.E3yR(bb, 1))),
      sb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => Wu.BNR0(bb, 1))),
      Mb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => Wu.UxmA(bb, 1))),
      mb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => Wu.O5Dx(bb, 1))),
      Ib = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => Wu.TpfU(bb, 1))),
      Pb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => Wu.kjBL(bb, 1))),
      qb = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((bb => Wu.BWF6(bb, 1)));

    function Eb(bb) {
      Uu === Gu.length && Gu.push(Gu.length + 1);
      const ub = Uu;
      return Uu = Gu[ub], Gu[ub] = bb, ub
    }

    function yb(bb, ub) {
      if (!(bb instanceof ub)) throw new Error(`expected instance of ${ub.name}`)
    }

    function Vb(bb, ub) {
      return bb >>>= 0, Tb().subarray(bb / 8, bb / 8 + ub)
    }

    function Fb(bb, ub) {
      return bb >>>= 0, uu().subarray(bb / 4, bb / 4 + ub)
    }

    function fb(bb, ub) {
      return bb >>>= 0, Bu().subarray(bb / 1, bb / 1 + ub)
    }
    let kb = null;

    function Tb() {
      return null !== kb && 0 !== kb.byteLength || (kb = new Float64Array(Wu.memory.buffer)), kb
    }
    let cb = null;

    function Qb(bb, ub) {
      return function(bb, ub) {
        ou += ub, ou >= pu && (Xu = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Xu.decode(), ou = ub);
        return Xu.decode(Bu().subarray(bb, bb + ub))
      }(bb >>> 0, ub)
    }
    let Rb = null;
    let bu = null;

    function uu() {
      return null !== bu && 0 !== bu.byteLength || (bu = new Uint32Array(Wu.memory.buffer)), bu
    }
    let hu = null;

    function Bu() {
      return null !== hu && 0 !== hu.byteLength || (hu = new Uint8Array(Wu.memory.buffer)), hu
    }

    function Ou(bb) {
      return Gu[bb]
    }
    let Gu = new Array(1024).fill(void 0);
    Gu.push(void 0, null, !0, !1);
    let Uu = Gu.length;

    function Lu(bb) {
      return void 0 === bb || null === bb
    }

    function Yu(bb, ub) {
      const hb = ub(2 * bb.length, 2) >>> 0;
      return (null !== Rb && 0 !== Rb.byteLength || (Rb = new Uint16Array(Wu.memory.buffer)), Rb).set(bb, hb / 2), Cu = bb.length, hb
    }

    function Su(bb, ub) {
      const hb = ub(4 * bb.length, 4) >>> 0;
      return uu().set(bb, hb / 4), Cu = bb.length, hb
    }

    function au(bb, ub) {
      const hb = ub(1 * bb.length, 1) >>> 0;
      return Bu().set(bb, hb / 1), Cu = bb.length, hb
    }

    function Hu(bb, ub) {
      const hb = ub(8 * bb.length, 8) >>> 0;
      return Tb().set(bb, hb / 8), Cu = bb.length, hb
    }

    function wu(bb, ub, hb) {
      if (void 0 === hb) {
        const hb = Au.encode(bb),
          Bb = ub(hb.length, 1) >>> 0;
        return Bu().subarray(Bb, Bb + hb.length).set(hb), Cu = hb.length, Bb
      }
      let Bb = bb.length,
        Ob = ub(Bb, 1) >>> 0;
      const Gb = Bu();
      let Ub = 0;
      for (; Ub < Bb; Ub++) {
        const ub = bb.charCodeAt(Ub);
        if (ub > 127) break;
        Gb[Ob + Ub] = ub
      }
      if (Ub !== Bb) {
        0 !== Ub && (bb = bb.slice(Ub)), Ob = hb(Ob, Bb, Bb = Ub + 3 * bb.length, 1) >>> 0;
        const ub = Bu().subarray(Ob + Ub, Ob + Bb);
        Ub += Au.encodeInto(bb, ub).written, Ob = hb(Ob, Bb, Ub, 1) >>> 0
      }
      return Cu = Ub, Ob
    }

    function Zu(bb) {
      const ub = Ou(bb);
      return function(bb) {
        bb < 1028 || (Gu[bb] = Uu, Uu = bb)
      }(bb), ub
    }
    let Xu = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Xu.decode();
    const pu = 2146435072;
    let ou = 0;
    const Au = new TextEncoder;
    "encodeInto" in Au || (Au.encodeInto = function(bb, ub) {
      const hb = Au.encode(bb);
      return ub.set(hb), {
        read: bb.length,
        written: hb.length
      }
    });
    let lu, Ku, Wu, Cu = 0;

    function du(bb, ub) {
      return Ku = bb, Wu = bb.exports, lu = ub, kb = null, cb = null, Rb = null, bu = null, hu = null, Wu.qfAs(), Wu
    }

    function ru(bb) {
      if (void 0 !== Wu) return Wu;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module: bb
      } = bb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ub = Jb();
      bb instanceof WebAssembly.Module || (bb = new WebAssembly.Module(bb));
      return du(new WebAssembly.Instance(bb, ub), bb)
    }
    async function ju(bb) {
      if (void 0 !== Wu) return Wu;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module_or_path: bb
      } = bb) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ub = Jb();
      ("string" === typeof bb || "function" === typeof Request && bb instanceof Request || "function" === typeof URL && bb instanceof URL) && (bb = fetch(bb));
      const {
        instance: hb,
        module: Bb
      } = await async function(bb, ub) {
        if ("function" === typeof Response && bb instanceof Response) {
          if (!bb.ok) throw new Error(`failed to fetch Wasm: ${bb.status} ${bb.statusText} fetching '${bb.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(bb, ub)
          } catch (hb) {
            if (! function(bb) {
                switch (bb) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(bb.type) || "application/wasm" === bb.headers.get("Content-Type")) throw hb;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", hb)
          }
          const Bb = await bb.arrayBuffer();
          return await WebAssembly.instantiate(Bb, ub)
        } {
          const hb = await WebAssembly.instantiate(bb, ub);
          return hb instanceof WebAssembly.Instance ? {
            instance: hb,
            module: bb
          } : hb
        }
      }(await bb, ub);
      return du(hb, Bb)
    }
    var nu = hb(2683),
      Du = hb(35948);
    const xu = {
      name: nu.c,
      url: () => new hb.U(hb(35954)),
      init: ju,
      bindings: Bb
    };

    function zu() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xu,
        ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xu,
        hb = arguments.length > 2 ? arguments[2] : void 0;
      return (0, Du.k)(bb, ub, hb)
    }

    function gu(bb) {
      return (0, nu.G)((() => bb), Bb, xu)
    }
  },
  35931: (bb, ub, hb) => {
    function Bb(bb, ub) {
      return new Error(`${bb}: ${ub instanceof Error?`${ub.name}: ${ub.message}`:String(ub)}`, {
        cause: ub
      })
    }
    hb.d(ub, {
      c: () => Bb
    })
  },
  35927: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub,
      h: () => Yb
    });
    var Bb = hb(2688),
      Ob = hb(6358),
      Gb = hb(35931);

    function Ub() {
      return new URL(new hb.U(hb(35933)).href, globalThis.location?.href).href
    }
    let Lb = null;

    function Yb() {
      return Lb ??= (async () => (0, Bb.C)(new URL(Ub()), (0, Ob.d)("bloxd_wasm_textures")))().catch((bb => {
        throw (0, Gb.c)((0, Bb.K)(bb), bb)
      })), Lb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);