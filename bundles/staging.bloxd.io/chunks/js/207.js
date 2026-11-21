export const id = 207;
export const ids = [207, 208];
export const modules = {
  36446: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      reportCappedWasmFailure: () => Zd,
      reportUncappedWasmFailure: () => Pd,
      reportWasmFailure: () => Wd
    });
    var pd = kd(2812);
    const Nd = pd.b - 4;

    function Wd(dd, Jd, kd) {
      (0, pd.f)(dd, Jd, kd, !1)
    }

    function Pd(dd, Jd, kd) {
      (0, pd.f)(dd, Jd, kd, !1, 1 / 0)
    }

    function Zd(dd, Jd, kd) {
      (0, pd.f)(dd, Jd, kd, !1, Nd)
    }
  },
  36441: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => xd,
      f: () => sd,
      g: () => ad,
      i: () => qd
    });
    var pd = kd(36461),
      Nd = kd(2761),
      Wd = kd(36473),
      Pd = kd(2770),
      Zd = kd(36446),
      gd = kd(2799),
      Cd = kd(3084),
      Kd = kd(3079),
      od = kd(36448),
      ld = kd(2812),
      Qd = kd(36453),
      Ld = kd(36458),
      Od = kd(3591);
    let ed = !1;
    const Rd = 40;
    var Id = kd(686);
    const Gd = "bloxdWasmFailureReported";

    function vd() {
      return "undefined" === typeof WebAssembly
    }

    function xd() {
      return (0, pd.f)()
    }

    function qd() {
      if (vd()) return "this browser has no WebAssembly";
      const dd = (0, Nd.l)();
      return "compile" === dd || "instantiate" === dd ? `the core wasm didn't load here (${(0,Nd.e)()})` : null
    }
    async function Bd(dd) {
      return await (0, Wd.h)(Wd.d, void 0, dd)
    }

    function sd() {
      vd() || (0, Id.c)((() => {
        Bd()
      }))
    }

    function ad() {
      if (vd()) return async () => ((0, gd.e)("unsupported", 0), Md("unsupported", "This browser has no WebAssembly"), !1);
      const dd = {
        reloadFailedDownload: !0
      };
      return Bd(dd), async () => {
        var Jd;
        const kd = performance.now();
        await Bd(dd);
        const pd = (performance.now() - kd) / 1e3;
        if ((0, Nd.M)()) return (0, gd.e)("ready", pd), ed || (ed = !0, (0, Nd.R)((() => {
          if ("call" !== (0, Nd.l)()) return;
          const dd = (0, Nd.i)(),
            Jd = (0, od.h)(dd, Nd.B, Nd.Y),
            kd = (0, Nd.o)().buffer.byteLength,
            pd = (0, od.f)(Jd.kind, Jd.refusedBytes),
            Wd = pd ? "alloc_failed" : Jd.kind,
            Pd = (0, Qd.j)(kd),
            Zd = pd ? `_r${Math.floor(Math.log2(Jd.refusedBytes))}` : "",
            gd = (0, Od.e)();
          null === gd && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const Cd = new Error((0, Ld.d)(dd, kd, Jd));
          if (dd instanceof Error && void 0 !== dd.stack) {
            const Jd = dd.stack.split("\n"),
              kd = Jd.length > Rd ? [...Jd.slice(0, Rd / 2), ...Jd.slice(-Rd / 2)] : Jd;
            Cd.stack = kd.join("\n")
          }(0, ld.f)("wasm_load", Cd, `wasm_call_${Wd}_${null!==gd&&void 0!==gd?gd:"unnamed"}_m${Pd}${Zd}`)
        }))), (0, Pd.O)(Wd.d.url()) && (0, Zd.reportCappedWasmFailure)("wasm_load", Cd.c.message, Cd.c.code), !0;
        const Id = Kd.c[null !== (Jd = (0, Nd.l)()) && void 0 !== Jd ? Jd : "call"];
        return (0, gd.e)(Id, pd), Md(Id, (0, Nd.e)()), !1
      }
    }

    function Md(dd, Jd) {
      (0, Kd.f)(Gd, `Bloxd wasm ${dd}, so the game can't start: ${Jd}`, Jd, dd)
    }
  },
  36485: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/bloxd_wasm_bg.f7b43996bfd62b9f7c61.wasm"
  },
  36467: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/bloxd_wasm_textures_bg.a14f3b72fa56d4ecadb7.wasm"
  },
  36473: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => FJ,
      h: () => YJ,
      l: () => mJ
    });
    var pd = {};
    kd.r(pd), kd.d(pd, {
      SK: () => Nd,
      EnvelopeKind: () => Wd,
      jK: () => Pd,
      PhysicsEngine: () => Zd,
      XK: () => gd,
      fK: () => Cd,
      nK: () => Kd,
      UK: () => od,
      yK: () => ld,
      DK: () => Qd,
      TK: () => Ld,
      EK: () => Od,
      cK: () => ed,
      hK: () => Rd,
      default: () => iJ,
      initSync: () => sJ,
      rK: () => Id,
      uK: () => Gd,
      tK: () => vd,
      VK: () => xd,
      zK: () => qd,
      HK: () => Bd,
      wK: () => sd,
      AK: () => ad,
      Jo: () => Md,
      ko: () => Fd,
      po: () => Yd,
      Wo: () => md,
      Po: () => bd,
      Zo: () => Sd,
      Co: () => jd
    });
    class Nd {
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, fd.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        xJ.OEHs(dd, 0)
      }
      Ko() {
        const dd = xJ.m5Ca(this.__wbg_ptr);
        if (dd[2]) throw LJ(dd[1]);
        return dd[0] >>> 0
      }
      oo() {
        return xJ.zSQt(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const dd = xJ.hRKu();
        return this.__wbg_ptr = dd, fd.register(this, this.__wbg_ptr, this), this
      }
      Qo() {
        return xJ.Ag7U(this.__wbg_ptr) >>> 0
      }
      Lo(dd) {
        const Jd = xJ.iX6m(this.__wbg_ptr, dd);
        if (Jd[2]) throw LJ(Jd[1]);
        return Jd[0] >>> 0
      }
      Oo(dd) {
        const Jd = xJ.LtE7(this.__wbg_ptr, dd);
        if (Jd[2]) throw LJ(Jd[1]);
        return Jd[0] >>> 0
      }
    }
    Symbol.dispose && (Nd.prototype[Symbol.dispose] = Nd.prototype.free);
    const Wd = Object.freeze({
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
    class Pd {
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, nd.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        xJ.MlM9(dd, 0)
      }
      Io(dd, Jd) {
        const kd = xJ.Tn00(this.__wbg_ptr, dd, Jd);
        if (kd[2]) throw LJ(kd[1]);
        return kd[0] >>> 0
      }
      Go(dd) {
        const Jd = xJ.gdmY(this.__wbg_ptr, dd);
        if (Jd[2]) throw LJ(Jd[1]);
        return Jd[0] >>> 0
      }
      vo() {
        xJ.jbTn(this.__wbg_ptr)
      }
      static xo() {
        return xJ.zxVp() >>> 0
      }
      qo() {
        return xJ.eS82(this.__wbg_ptr) >>> 0
      }
      Bo() {
        const dd = xJ.TCSr(this.__wbg_ptr);
        return 0 === dd[0] ? void 0 : dd[1]
      }
      ao() {
        return xJ.GIFN(this.__wbg_ptr) >>> 0
      }
      Mo() {
        return xJ.AJ9Q(this.__wbg_ptr) >>> 0
      }
      static Ro() {
        return xJ.Cmst() >>> 0
      }
      constructor() {
        const dd = xJ.MLjk();
        return this.__wbg_ptr = dd, nd.register(this, this.__wbg_ptr, this), this
      }
      Fo() {
        return xJ.batw(this.__wbg_ptr) >>> 0
      }
      Yo() {
        return xJ.SxIX(this.__wbg_ptr) >>> 0
      }
      bo() {
        return xJ.ld2u(this.__wbg_ptr) >>> 0
      }
      eo(dd) {
        return xJ.XPsJ(this.__wbg_ptr, dd) >>> 0
      }
      reserve(dd, Jd) {
        const kd = xJ.B3gz(this.__wbg_ptr, dd, Jd);
        if (kd[1]) throw LJ(kd[0])
      }
      fo(dd, Jd) {
        const kd = KJ(dd, xJ.tF34),
          pd = qJ;
        xJ.S3G9(this.__wbg_ptr, kd, pd, Jd)
      }
      text() {
        let dd, Jd;
        try {
          const kd = xJ.qox9(this.__wbg_ptr);
          return dd = kd[0], Jd = kd[1], Ad(kd[0], kd[1])
        } finally {
          xJ.UoAO(dd, Jd, 1)
        }
      }
    }
    Symbol.dispose && (Pd.prototype[Symbol.dispose] = Pd.prototype.free);
    class Zd {
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Ud.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        xJ.kyI6(dd, 0)
      }
      yo(dd, Jd) {
        rd(Jd, Nd);
        const kd = xJ.wSfZ(this.__wbg_ptr, dd, Jd.__wbg_ptr);
        if (kd[2]) throw LJ(kd[1]);
        return kd[0] >>> 0
      }
      Eo() {
        const dd = xJ.JrCt(this.__wbg_ptr);
        if (dd[1]) throw LJ(dd[0])
      }
      zo(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, Cd, Kd, od) {
        rd(dd, gd);
        const ld = xJ.hzpU(this.__wbg_ptr, dd.__wbg_ptr, Jd, kd, pd, Nd, Wd, Pd, Zd, Cd, Kd, od);
        if (ld[2]) throw LJ(ld[1]);
        return ld[0]
      }
      Ho() {
        const dd = xJ.nYqM(this.__wbg_ptr);
        var Jd = ud(dd[0], dd[1]).slice();
        return xJ.UoAO(dd[0], 8 * dd[1], 8), Jd
      }
      wo() {
        return xJ.FE6s(this.__wbg_ptr) >>> 0
      }
      Ao() {
        return xJ.LDpv(this.__wbg_ptr) >>> 0
      }
      dl() {
        return xJ.yUkb(this.__wbg_ptr) >>> 0
      }
      constructor(dd, Jd, kd, pd, Nd, Wd, Pd, Zd) {
        const gd = xJ.X4CI(dd, Jd, kd, pd, Nd, Wd, Pd, Zd);
        if (gd[2]) throw LJ(gd[1]);
        return this.__wbg_ptr = gd[0], Ud.register(this, this.__wbg_ptr, this), this
      }
      pl(dd) {
        rd(dd, Nd);
        const Jd = xJ.fWAY(this.__wbg_ptr, dd.__wbg_ptr);
        if (Jd[2]) throw LJ(Jd[1]);
        return Jd[0] >>> 0
      }
      Nl(dd) {
        const Jd = xJ.qoZk(this.__wbg_ptr, dd);
        if (Jd[1]) throw LJ(Jd[0])
      }
      Wl() {
        return xJ.C8QS(this.__wbg_ptr) >>> 0
      }
      resume(dd, Jd) {
        rd(dd, gd), rd(Jd, Nd);
        const kd = xJ.vgQy(this.__wbg_ptr, dd.__wbg_ptr, Jd.__wbg_ptr);
        if (kd[2]) throw LJ(kd[1]);
        return kd[0] >>> 0
      }
      Kl(dd) {
        const Jd = xJ.VLlz(this.__wbg_ptr, dd);
        if (Jd[1]) throw LJ(Jd[0])
      }
      Ql(dd, Jd) {
        rd(Jd, Nd);
        const kd = xJ.WyDb(this.__wbg_ptr, dd, Jd.__wbg_ptr);
        if (kd[1]) throw LJ(kd[0])
      }
      el(dd) {
        const Jd = lJ(dd, xJ.tF34),
          kd = qJ,
          pd = xJ.Hxek(this.__wbg_ptr, Jd, kd);
        if (pd[1]) throw LJ(pd[0])
      }
      ro(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = xJ.uumD(this.__wbg_ptr, dd, Jd, kd, pd, Nd, Wd);
        if (Pd[1]) throw LJ(Pd[0])
      }
      uo(dd, Jd, kd, pd) {
        const Nd = KJ(dd, xJ.tF34),
          Wd = qJ,
          Pd = lJ(Jd, xJ.tF34),
          Zd = qJ,
          gd = lJ(kd, xJ.tF34),
          Cd = qJ,
          Kd = lJ(pd, xJ.tF34),
          od = qJ,
          ld = xJ.mKeu(this.__wbg_ptr, Nd, Wd, Pd, Zd, gd, Cd, Kd, od);
        if (ld[1]) throw LJ(ld[0])
      }
      Il(dd, Jd) {
        rd(Jd, Nd);
        const kd = xJ.wKKs(this.__wbg_ptr, dd, Jd.__wbg_ptr);
        if (kd[1]) throw LJ(kd[0])
      }
      kl(dd, Jd, kd) {
        const pd = xJ.AaI6(this.__wbg_ptr, dd, Jd, kd);
        if (pd[1]) throw LJ(pd[0])
      }
      vl(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, Cd, Kd) {
        rd(dd, gd);
        return xJ.phb9(this.__wbg_ptr, dd.__wbg_ptr, Jd, kd, pd, Nd, Wd, Pd, Zd, Cd, Kd)
      }
    }
    Symbol.dispose && (Zd.prototype[Symbol.dispose] = Zd.prototype.free);
    class gd {
      static __wrap(dd) {
        const Jd = Object.create(gd.prototype);
        return Jd.__wbg_ptr = dd, yd.register(Jd, Jd.__wbg_ptr, Jd), Jd
      }
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, yd.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        xJ.PkiI(dd, 0)
      }
      Bl(dd) {
        const Jd = xJ.jgTp(this.__wbg_ptr, dd);
        if (Jd[2]) throw LJ(Jd[1]);
        return Jd[0] >>> 0
      }
      sl(dd, Jd, kd) {
        return xJ.NUp9(this.__wbg_ptr, dd, Jd, kd)
      }
      il(dd, Jd, kd) {
        return xJ.k12T(this.__wbg_ptr, dd, Jd, kd) >>> 0
      }
      al(dd, Jd, kd, pd) {
        return 0 !== xJ.rNc8(this.__wbg_ptr, dd, Jd, kd, pd)
      }
      Ml() {
        xJ.fCve(this.__wbg_ptr)
      }
      Yl(dd) {
        const Jd = xJ.wwNJ(this.__wbg_ptr, dd);
        if (Jd[3]) throw LJ(Jd[2]);
        var kd = Vd(Jd[0], Jd[1]).slice();
        return xJ.UoAO(Jd[0], 1 * Jd[1], 1), kd
      }
      evict(dd, Jd) {
        return xJ.p5WV(this.__wbg_ptr, dd, Jd) >>> 0
      }
      ml() {
        xJ.MQHJ(this.__wbg_ptr)
      }
      bl(dd, Jd, kd) {
        xJ.ZZOz(this.__wbg_ptr, dd, Jd, kd)
      }
      Sl(dd) {
        const Jd = xJ.prqO(this.__wbg_ptr, dd);
        if (Jd[1]) throw LJ(Jd[0])
      }
      jl() {
        return xJ.fC3T(this.__wbg_ptr) >>> 0
      }
      Xl() {
        return xJ.T485(this.__wbg_ptr) >>> 0
      }
      fl(dd, Jd, kd) {
        xJ.r2gF(this.__wbg_ptr, dd, Jd, kd)
      }
      nl(dd, Jd, kd) {
        xJ.FFN8(this.__wbg_ptr, dd, Jd, kd)
      }
      Ul() {
        return xJ.imic(this.__wbg_ptr) >>> 0
      }
      yl() {
        return xJ.Wmbe(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const dd = xJ.OSHr();
        return this.__wbg_ptr = dd, yd.register(this, this.__wbg_ptr, this), this
      }
      static Dl() {
        const dd = xJ.JzwD();
        return gd.__wrap(dd)
      }
      Tl() {
        return xJ.x6SN(this.__wbg_ptr) >>> 0
      }
      El() {
        return xJ.DQxQ(this.__wbg_ptr) >>> 0
      }
      cl(dd, Jd, kd, pd) {
        const Nd = xJ.PMm4(this.__wbg_ptr, dd, Jd, kd, pd);
        if (Nd[1]) throw LJ(Nd[0])
      }
      hl() {
        return xJ.vfL8(this.__wbg_ptr) >>> 0
      }
      rl() {
        return xJ.ttN9(this.__wbg_ptr) >>> 0
      }
      ul(dd, Jd, kd, pd) {
        xJ.FkRQ(this.__wbg_ptr, dd, Jd, kd, pd)
      }
      tl(dd) {
        xJ.rYZv(this.__wbg_ptr, dd)
      }
      zl(dd, Jd, kd, pd, Nd) {
        const Wd = oJ(Jd, xJ.tF34),
          Pd = qJ,
          Zd = KJ(kd, xJ.tF34),
          gd = qJ,
          Cd = lJ(pd, xJ.tF34),
          Kd = qJ,
          od = xJ.TF7X(this.__wbg_ptr, dd, Wd, Pd, Zd, gd, Cd, Kd, Nd);
        if (od[1]) throw LJ(od[0])
      }
      Vl(dd, Jd, kd, pd) {
        const Nd = oJ(dd, xJ.tF34),
          Wd = qJ,
          Pd = KJ(Jd, xJ.tF34),
          Zd = qJ,
          gd = lJ(kd, xJ.tF34),
          Cd = qJ,
          Kd = oJ(pd, xJ.tF34),
          od = qJ,
          ld = xJ.cGQp(this.__wbg_ptr, Nd, Wd, Pd, Zd, gd, Cd, Kd, od);
        if (ld[1]) throw LJ(ld[0])
      }
      kQ(dd) {
        const Jd = oJ(dd, xJ.tF34),
          kd = qJ,
          pd = xJ.gL6P(this.__wbg_ptr, Jd, kd);
        if (pd[1]) throw LJ(pd[0])
      }
      pQ() {
        return xJ.bkqa(this.__wbg_ptr) >>> 0
      }
      NQ(dd) {
        const Jd = xJ.vouo(this.__wbg_ptr, dd);
        if (Jd[2]) throw LJ(Jd[1]);
        return Jd[0] >>> 0
      }
      steer() {
        return xJ.C4lr(this.__wbg_ptr) >>> 0
      }
      WQ() {
        const dd = xJ.HNb4(this.__wbg_ptr);
        var Jd = ud(dd[0], dd[1]).slice();
        return xJ.UoAO(dd[0], 8 * dd[1], 8), Jd
      }
      PQ() {
        return xJ.yY5m(this.__wbg_ptr) >>> 0
      }
      Zl() {
        const dd = xJ.Y4Uz(this.__wbg_ptr);
        var Jd, kd, pd = (Jd = dd[0], kd = dd[1], Jd >>>= 0, (null !== wd && 0 !== wd.byteLength || (wd = new Int32Array(xJ.memory.buffer)), wd).subarray(Jd / 4, Jd / 4 + kd)).slice();
        return xJ.UoAO(dd[0], 4 * dd[1], 4), pd
      }
    }
    Symbol.dispose && (gd.prototype[Symbol.dispose] = gd.prototype.free);
    class Cd {
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Dd.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        xJ.rCrG(dd, 0)
      }
      ZQ(dd) {
        const Jd = KJ(dd, xJ.tF34),
          kd = qJ,
          pd = xJ.E3qB(this.__wbg_ptr, Jd, kd);
        if (pd[1]) throw LJ(pd[0])
      }
      gQ() {
        return xJ.VGP6(this.__wbg_ptr) >>> 0
      }
      CQ() {
        return xJ.ikB6(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const dd = xJ.Cuu0();
        return this.__wbg_ptr = dd, Dd.register(this, this.__wbg_ptr, this), this
      }
      run(dd, Jd) {
        rd(dd, gd);
        const kd = xJ.NW5T(this.__wbg_ptr, dd.__wbg_ptr, Jd);
        if (kd[2]) throw LJ(kd[1]);
        return kd[0] >>> 0
      }
      KQ(dd) {
        const Jd = KJ(dd, xJ.tF34),
          kd = qJ;
        xJ.JeP6(this.__wbg_ptr, Jd, kd)
      }
      oQ(dd) {
        const Jd = KJ(dd, xJ.tF34),
          kd = qJ;
        xJ.zUfW(this.__wbg_ptr, Jd, kd)
      }
    }
    Symbol.dispose && (Cd.prototype[Symbol.dispose] = Cd.prototype.free);
    class Kd {
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Td.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        xJ.xOvC(dd, 0)
      }
      QQ(dd, Jd) {
        const kd = oJ(dd, xJ.tF34),
          pd = qJ;
        return xJ.rGsU(this.__wbg_ptr, kd, pd, Jd) >>> 0
      }
      LQ(dd, Jd, kd) {
        rd(dd, gd);
        const pd = oJ(kd, xJ.tF34),
          Nd = qJ,
          Wd = xJ.wO2k(this.__wbg_ptr, dd.__wbg_ptr, Jd, pd, Nd);
        if (Wd[2]) throw LJ(Wd[1]);
        return Wd[0] >>> 0
      }
      lQ(dd) {
        return xJ.w88h(this.__wbg_ptr, dd) >>> 0
      }
      constructor() {
        const dd = xJ.zzXg();
        return this.__wbg_ptr = dd, Td.register(this, this.__wbg_ptr, this), this
      }
      scan(dd, Jd) {
        rd(dd, gd);
        const kd = xJ.P4aj(this.__wbg_ptr, dd.__wbg_ptr, Jd);
        if (kd[2]) throw LJ(kd[1]);
        return kd[0] >>> 0
      }
      RQ(dd) {
        const Jd = oJ(dd, xJ.tF34),
          kd = qJ;
        xJ.g37I(this.__wbg_ptr, Jd, kd)
      }
      eQ() {
        return xJ.sirR(this.__wbg_ptr) >>> 0
      }
      OQ() {
        return xJ.S0UW(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Kd.prototype[Symbol.dispose] = Kd.prototype.free);
    class od {
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Ed.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        xJ.zDKU(dd, 0)
      }
      GQ(dd) {
        const Jd = xJ.KTbN(this.__wbg_ptr, dd);
        if (Jd[2]) throw LJ(Jd[1]);
        return Jd[0] >>> 0
      }
      compute(dd, Jd, kd, pd) {
        var Nd = gJ(pd) ? 0 : QJ(pd, xJ.tF34, xJ.howl),
          Wd = qJ;
        const Pd = xJ.ghH4(this.__wbg_ptr, dd, gJ(Jd) ? Number.MAX_SAFE_INTEGER : Jd | 0, kd, Nd, Wd);
        if (Pd[2]) throw LJ(Pd[1]);
        return Pd[0] >>> 0
      }
      xQ(dd) {
        const Jd = QJ(dd, xJ.tF34, xJ.howl),
          kd = qJ;
        xJ.h1Ws(this.__wbg_ptr, Jd, kd)
      }
      BQ() {
        return xJ.x5BE(this.__wbg_ptr)
      }
      sQ(dd) {
        return xJ.kgaz(this.__wbg_ptr, dd) >>> 0
      }
      iQ() {
        return xJ.cUMu(this.__wbg_ptr) >>> 0
      }
      aQ() {
        return xJ.jReT(this.__wbg_ptr) >>> 0
      }
      MQ(dd, Jd) {
        const kd = xJ.chl5(this.__wbg_ptr, dd, Jd);
        if (kd[1]) throw LJ(kd[0])
      }
      FQ() {
        return xJ.pYpX(this.__wbg_ptr) >>> 0
      }
      YQ() {
        return xJ.Gzqr(this.__wbg_ptr) >>> 0
      }
      mQ() {
        return xJ.bkkC(this.__wbg_ptr) >>> 0
      }
      vQ(dd, Jd, kd) {
        const pd = KJ(dd, xJ.tF34),
          Nd = qJ,
          Wd = KJ(Jd, xJ.tF34),
          Pd = qJ,
          Zd = xJ.mrIU(this.__wbg_ptr, pd, Nd, Wd, Pd, kd);
        if (Zd[1]) throw LJ(Zd[0])
      }
      SQ() {
        return xJ.r8oe(this.__wbg_ptr) >>> 0
      }
      mesh(dd, Jd, kd, pd, Nd) {
        const Wd = xJ.GPFP(this.__wbg_ptr, dd, Jd, kd, pd, Nd);
        if (Wd[2]) throw LJ(Wd[1]);
        return Wd[0] >>> 0
      }
      constructor(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od, ld, Qd, Ld, Od, ed, Rd, Id, Gd) {
        const vd = CJ(dd, xJ.tF34),
          xd = qJ,
          qd = lJ(Jd, xJ.tF34),
          Bd = qJ,
          sd = KJ(kd, xJ.tF34),
          ad = qJ,
          Md = oJ(pd, xJ.tF34),
          Fd = qJ,
          Yd = oJ(Nd, xJ.tF34),
          md = qJ,
          bd = KJ(Wd, xJ.tF34),
          Sd = qJ,
          jd = KJ(Pd, xJ.tF34),
          Xd = qJ,
          fd = lJ(Zd, xJ.tF34),
          nd = qJ,
          Ud = lJ(gd, xJ.tF34),
          yd = qJ,
          Dd = oJ(Cd, xJ.tF34),
          Td = qJ;
        var cd = gJ(Kd) ? 0 : CJ(Kd, xJ.tF34),
          hd = qJ;
        const rd = KJ(od, xJ.tF34),
          ud = qJ,
          td = oJ(ld, xJ.tF34),
          Vd = qJ;
        var zd = gJ(Qd) ? 0 : oJ(Qd, xJ.tF34),
          Hd = qJ;
        const wd = lJ(Ld, xJ.tF34),
          Ad = qJ,
          dJ = xJ.Ioli(vd, xd, qd, Bd, sd, ad, Md, Fd, Yd, md, bd, Sd, jd, Xd, fd, nd, Ud, yd, Dd, Td, cd, hd, rd, ud, td, Vd, zd, Hd, wd, Ad, Od, ed, Rd, Id, Gd);
        if (dJ[2]) throw LJ(dJ[1]);
        return this.__wbg_ptr = dJ[0], Ed.register(this, this.__wbg_ptr, this), this
      }
      bQ(dd, Jd) {
        const kd = KJ(dd, xJ.tF34),
          pd = qJ,
          Nd = xJ.qPTM(this.__wbg_ptr, kd, pd, Jd);
        if (Nd[3]) throw LJ(Nd[2]);
        var Wd = Vd(Nd[0], Nd[1]).slice();
        return xJ.UoAO(Nd[0], 1 * Nd[1], 1), Wd
      }
      jQ(dd) {
        xJ.wsrL(this.__wbg_ptr, gJ(dd) ? 16777215 : dd)
      }
      XQ(dd) {
        return xJ.ZcOP(this.__wbg_ptr, dd) >>> 0
      }
      nQ() {
        return xJ.AdzG(this.__wbg_ptr) >>> 0
      }
      fQ() {
        const dd = xJ.BXFD(this.__wbg_ptr);
        if (dd[2]) throw LJ(dd[1]);
        return 0 !== dd[0]
      }
      UQ() {
        return xJ.gLat(this.__wbg_ptr) >>> 0
      }
      yQ() {
        return xJ.MjO6(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (od.prototype[Symbol.dispose] = od.prototype.free);
    class ld {
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, cd.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        xJ.Cvrq(dd, 0)
      }
      compute(dd, Jd, kd, pd) {
        var Nd = gJ(pd) ? 0 : QJ(pd, xJ.tF34, xJ.howl),
          Wd = qJ;
        const Pd = xJ.yQ8g(this.__wbg_ptr, dd, gJ(Jd) ? Number.MAX_SAFE_INTEGER : Jd | 0, kd, Nd, Wd);
        if (Pd[2]) throw LJ(Pd[1]);
        return Pd[0] >>> 0
      }
      xQ(dd) {
        const Jd = QJ(dd, xJ.tF34, xJ.howl),
          kd = qJ;
        xJ.tMM9(this.__wbg_ptr, Jd, kd)
      }
      YQ() {
        return xJ.V6Qc(this.__wbg_ptr) >>> 0
      }
      mQ() {
        return xJ.KAjm(this.__wbg_ptr) >>> 0
      }
      DQ(dd) {
        const Jd = xJ.Ngrl(this.__wbg_ptr, dd);
        if (Jd[2]) throw LJ(Jd[1]);
        return Jd[0] >>> 0
      }
      constructor(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = CJ(dd, xJ.tF34),
          Zd = qJ,
          gd = lJ(Jd, xJ.tF34),
          Cd = qJ,
          Kd = KJ(kd, xJ.tF34),
          od = qJ,
          ld = oJ(pd, xJ.tF34),
          Qd = qJ,
          Ld = xJ.fosw(Pd, Zd, gd, Cd, Kd, od, ld, Qd, Nd, Wd);
        if (Ld[2]) throw LJ(Ld[1]);
        return this.__wbg_ptr = Ld[0], cd.register(this, this.__wbg_ptr, this), this
      }
      nQ() {
        return xJ.xKbQ(this.__wbg_ptr) >>> 0
      }
      fQ() {
        const dd = xJ.SoZP(this.__wbg_ptr);
        if (dd[2]) throw LJ(dd[1]);
        return 0 !== dd[0]
      }
      UQ() {
        return xJ.maUg(this.__wbg_ptr) >>> 0
      }
    }

    function Qd() {
      const dd = xJ.i64x();
      var Jd = td(dd[0], dd[1]).slice();
      return xJ.UoAO(dd[0], 4 * dd[1], 4), Jd
    }

    function Ld(dd, Jd) {
      let kd, pd;
      try {
        const Nd = CJ(dd, xJ.tF34),
          Wd = qJ,
          Pd = QJ(Jd, xJ.tF34, xJ.howl),
          Zd = qJ,
          gd = xJ.wHPE(Nd, Wd, Pd, Zd);
        return kd = gd[0], pd = gd[1], Ad(gd[0], gd[1])
      } finally {
        xJ.UoAO(kd, pd, 1)
      }
    }

    function Od() {
      const dd = xJ.TqWF();
      var Jd = td(dd[0], dd[1]).slice();
      return xJ.UoAO(dd[0], 4 * dd[1], 4), Jd
    }

    function ed(dd) {
      return 0 !== xJ.qu8y(dd)
    }

    function Rd(dd, Jd) {
      const kd = QJ(dd, xJ.tF34, xJ.howl),
        pd = qJ,
        Nd = xJ.zgsC(kd, pd, Jd);
      if (Nd[1]) throw LJ(Nd[0])
    }

    function Id() {
      xJ.UiTx()
    }

    function Gd() {
      return xJ.ndZm() >>> 0
    }

    function vd(dd) {
      return 0 !== xJ.hMT7(dd)
    }

    function xd(dd) {
      return 0 !== xJ.SHSY(dd)
    }

    function qd(dd) {
      xJ.jKqc(dd)
    }

    function Bd() {
      return xJ.hfkD() >>> 0
    }

    function sd() {
      return xJ.jD7U() >>> 0
    }

    function ad() {
      return 0 !== xJ.Wnm9()
    }

    function Md() {
      const dd = xJ.Jeex();
      var Jd = td(dd[0], dd[1]).slice();
      return xJ.UoAO(dd[0], 4 * dd[1], 4), Jd
    }

    function Fd() {
      const dd = xJ.hOHs();
      var Jd = td(dd[0], dd[1]).slice();
      return xJ.UoAO(dd[0], 4 * dd[1], 4), Jd
    }

    function Yd() {
      const dd = xJ.saGE();
      var Jd = td(dd[0], dd[1]).slice();
      return xJ.UoAO(dd[0], 4 * dd[1], 4), Jd
    }

    function md() {
      return xJ.Xx84() >>> 0
    }

    function bd() {
      xJ.Fdm8()
    }

    function Sd() {
      let dd, Jd;
      try {
        const kd = xJ.y07e();
        return dd = kd[0], Jd = kd[1], Ad(kd[0], kd[1])
      } finally {
        xJ.UoAO(dd, Jd, 1)
      }
    }

    function jd(dd) {
      xJ.WZvL(hd(dd))
    }

    function Xd() {
      return {
        __proto__: null,
        KklY: {
          __proto__: null,
          OyeC: function(dd, Jd) {
            return hd(Error(Ad(dd, Jd)))
          },
          VNti: function(dd, Jd) {
            throw new Error(Ad(dd, Jd))
          },
          Dpor: function(dd) {
            WJ(dd).call()
          },
          WyoE: function(dd, Jd) {
            console.error(Ad(dd, Jd))
          },
          D8sZ: function() {
            return performance.now()
          },
          GCjz: function(dd) {
            LJ(dd)
          }
        }
      }
    }
    Symbol.dispose && (ld.prototype[Symbol.dispose] = ld.prototype.free);
    const fd = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((dd => xJ.OEHs(dd, 1))),
      nd = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((dd => xJ.MlM9(dd, 1))),
      Ud = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((dd => xJ.kyI6(dd, 1))),
      yd = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((dd => xJ.PkiI(dd, 1))),
      Dd = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((dd => xJ.rCrG(dd, 1))),
      Td = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((dd => xJ.xOvC(dd, 1))),
      Ed = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((dd => xJ.zDKU(dd, 1))),
      cd = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((dd => xJ.Cvrq(dd, 1)));

    function hd(dd) {
      ZJ === PJ.length && PJ.push(PJ.length + 1);
      const Jd = ZJ;
      return ZJ = PJ[Jd], PJ[Jd] = dd, Jd
    }

    function rd(dd, Jd) {
      if (!(dd instanceof Jd)) throw new Error(`expected instance of ${Jd.name}`)
    }

    function ud(dd, Jd) {
      return dd >>>= 0, Hd().subarray(dd / 8, dd / 8 + Jd)
    }

    function td(dd, Jd) {
      return dd >>>= 0, kJ().subarray(dd / 4, dd / 4 + Jd)
    }

    function Vd(dd, Jd) {
      return dd >>>= 0, NJ().subarray(dd / 1, dd / 1 + Jd)
    }
    let zd = null;

    function Hd() {
      return null !== zd && 0 !== zd.byteLength || (zd = new Float64Array(xJ.memory.buffer)), zd
    }
    let wd = null;

    function Ad(dd, Jd) {
      return function(dd, Jd) {
        RJ += Jd, RJ >= eJ && (OJ = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), OJ.decode(), RJ = Jd);
        return OJ.decode(NJ().subarray(dd, dd + Jd))
      }(dd >>> 0, Jd)
    }
    let dJ = null;
    let JJ = null;

    function kJ() {
      return null !== JJ && 0 !== JJ.byteLength || (JJ = new Uint32Array(xJ.memory.buffer)), JJ
    }
    let pJ = null;

    function NJ() {
      return null !== pJ && 0 !== pJ.byteLength || (pJ = new Uint8Array(xJ.memory.buffer)), pJ
    }

    function WJ(dd) {
      return PJ[dd]
    }
    let PJ = new Array(1024).fill(void 0);
    PJ.push(void 0, null, !0, !1);
    let ZJ = PJ.length;

    function gJ(dd) {
      return void 0 === dd || null === dd
    }

    function CJ(dd, Jd) {
      const kd = Jd(2 * dd.length, 2) >>> 0;
      return (null !== dJ && 0 !== dJ.byteLength || (dJ = new Uint16Array(xJ.memory.buffer)), dJ).set(dd, kd / 2), qJ = dd.length, kd
    }

    function KJ(dd, Jd) {
      const kd = Jd(4 * dd.length, 4) >>> 0;
      return kJ().set(dd, kd / 4), qJ = dd.length, kd
    }

    function oJ(dd, Jd) {
      const kd = Jd(1 * dd.length, 1) >>> 0;
      return NJ().set(dd, kd / 1), qJ = dd.length, kd
    }

    function lJ(dd, Jd) {
      const kd = Jd(8 * dd.length, 8) >>> 0;
      return Hd().set(dd, kd / 8), qJ = dd.length, kd
    }

    function QJ(dd, Jd, kd) {
      if (void 0 === kd) {
        const kd = IJ.encode(dd),
          pd = Jd(kd.length, 1) >>> 0;
        return NJ().subarray(pd, pd + kd.length).set(kd), qJ = kd.length, pd
      }
      let pd = dd.length,
        Nd = Jd(pd, 1) >>> 0;
      const Wd = NJ();
      let Pd = 0;
      for (; Pd < pd; Pd++) {
        const Jd = dd.charCodeAt(Pd);
        if (Jd > 127) break;
        Wd[Nd + Pd] = Jd
      }
      if (Pd !== pd) {
        0 !== Pd && (dd = dd.slice(Pd)), Nd = kd(Nd, pd, pd = Pd + 3 * dd.length, 1) >>> 0;
        const Jd = NJ().subarray(Nd + Pd, Nd + pd);
        Pd += IJ.encodeInto(dd, Jd).written, Nd = kd(Nd, pd, Pd, 1) >>> 0
      }
      return qJ = Pd, Nd
    }

    function LJ(dd) {
      const Jd = WJ(dd);
      return function(dd) {
        dd < 1028 || (PJ[dd] = ZJ, ZJ = dd)
      }(dd), Jd
    }
    let OJ = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    OJ.decode();
    const eJ = 2146435072;
    let RJ = 0;
    const IJ = new TextEncoder;
    "encodeInto" in IJ || (IJ.encodeInto = function(dd, Jd) {
      const kd = IJ.encode(dd);
      return Jd.set(kd), {
        read: dd.length,
        written: kd.length
      }
    });
    let GJ, vJ, xJ, qJ = 0;

    function BJ(dd, Jd) {
      return vJ = dd, xJ = dd.exports, GJ = Jd, zd = null, wd = null, dJ = null, JJ = null, pJ = null, xJ.L4os(), xJ
    }

    function sJ(dd) {
      if (void 0 !== xJ) return xJ;
      void 0 !== dd && (Object.getPrototypeOf(dd) === Object.prototype ? ({
        module: dd
      } = dd) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Jd = Xd();
      dd instanceof WebAssembly.Module || (dd = new WebAssembly.Module(dd));
      return BJ(new WebAssembly.Instance(dd, Jd), dd)
    }
    async function iJ(dd) {
      if (void 0 !== xJ) return xJ;
      void 0 !== dd && (Object.getPrototypeOf(dd) === Object.prototype ? ({
        module_or_path: dd
      } = dd) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Jd = Xd();
      ("string" === typeof dd || "function" === typeof Request && dd instanceof Request || "function" === typeof URL && dd instanceof URL) && (dd = fetch(dd));
      const {
        instance: kd,
        module: pd
      } = await async function(dd, Jd) {
        if ("function" === typeof Response && dd instanceof Response) {
          if (!dd.ok) throw new Error(`failed to fetch Wasm: ${dd.status} ${dd.statusText} fetching '${dd.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(dd, Jd)
          } catch (kd) {
            if (! function(dd) {
                switch (dd) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(dd.type) || "application/wasm" === dd.headers.get("Content-Type")) throw kd;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", kd)
          }
          const pd = await dd.arrayBuffer();
          return await WebAssembly.instantiate(pd, Jd)
        } {
          const kd = await WebAssembly.instantiate(dd, Jd);
          return kd instanceof WebAssembly.Instance ? {
            instance: kd,
            module: dd
          } : kd
        }
      }(await dd, Jd);
      return BJ(kd, pd)
    }
    var aJ = kd(2761),
      MJ = kd(36480);
    const FJ = {
      name: aJ.b,
      url: () => new kd.U(kd(36485)),
      init: iJ,
      bindings: pd
    };

    function YJ() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FJ,
        Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FJ,
        kd = arguments.length > 2 ? arguments[2] : void 0;
      return (0, MJ.h)(dd, Jd, kd)
    }

    function mJ(dd) {
      return (0, aJ.I)((() => dd), pd, FJ)
    }
  },
  36463: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      return new Error(`${dd}: ${Jd instanceof Error?`${Jd.name}: ${Jd.message}`:String(Jd)}`, {
        cause: Jd
      })
    }
    kd.d(Jd, {
      c: () => pd
    })
  },
  36461: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd,
      f: () => gd
    });
    var pd = kd(2770),
      Nd = kd(6483),
      Wd = kd(36463);

    function Pd() {
      return new URL(new kd.U(kd(36467)).href, globalThis.location?.href).href
    }
    let Zd = null;

    function gd() {
      return Zd ??= (async () => (0, pd.B)(new URL(Pd()), (0, Nd.e)("bloxd_wasm_textures")))().catch((dd => {
        throw (0, Wd.c)((0, pd.G)(dd), dd)
      })), Zd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);