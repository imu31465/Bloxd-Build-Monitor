export const id = 219;
export const ids = [218, 219];
export const modules = {
  35375: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      CAPPED_COUNTS_VISIT_CAP: () => Rd,
      reportCappedWasmFailure: () => hd,
      reportUncappedWasmFailure: () => Kd,
      reportWasmCrash: () => Fd,
      reportWasmFailure: () => Xd
    });
    var Wd = md(1916);

    function Fd(dd) {
      (0, Wd.reportClientError)("wasm_load", dd.message, dd.code)
    }
    const Rd = Wd.MAX_ERRORS_PER_VISIT - 4;

    function Xd(dd, Od, md, Fd) {
      (0, Wd.reportClientError)(dd, Od, md, !1, Wd.MAX_ERRORS_PER_VISIT, {
        context: Fd
      })
    }

    function Kd(dd, Od, md, Fd) {
      (0, Wd.reportClientError)(dd, Od, md, !1, 1 / 0, {
        context: Fd
      })
    }

    function hd(dd, Od, md, Fd) {
      (0, Wd.reportClientError)(dd, Od, md, !1, Rd, {
        context: Fd
      })
    }
  },
  37641: (dd, Od, md) => {
    md.d(Od, {
      e: () => wd,
      h: () => Ud,
      j: () => xd,
      k: () => Ed
    });
    var Wd = md(37665),
      Fd = md(2421),
      Rd = md(37681),
      Xd = md(2425),
      Kd = md(35375),
      hd = md(3998),
      vd = md(4447),
      Qd = md(4440),
      td = md(37644),
      od = md(1916),
      Nd = md(37652),
      qd = md(37659),
      Hd = md(2414);
    let yd = !1;
    const bd = 40;
    var Td = md(364),
      pd = md(4820);
    const Yd = "bloxdWasmFailureReported";

    function gd() {
      return "undefined" === typeof WebAssembly
    }

    function wd() {
      return (0, Wd.g)()
    }

    function Ed() {
      if (gd()) return "this browser has no WebAssembly";
      const dd = (0, Fd.m)();
      return "compile" === dd || "instantiate" === dd ? `the core wasm didn't load here (${(0,Fd.g)()})` : null
    }
    async function Jd(dd) {
      return await (0, Td.p)(), await (0, Rd.i)(Rd.e, void 0, dd)
    }

    function Ud() {
      gd() || (0, pd.e)((() => {
        Jd()
      }))
    }

    function xd() {
      if (gd()) return async () => ((0, hd.h)("unsupported", 0), Bd("unsupported", "This browser has no WebAssembly"), !1);
      const dd = {
        reloadFailedDownload: !0
      };
      return Jd(dd), async () => {
        var Od;
        const md = performance.now();
        await Jd(dd);
        const Wd = (performance.now() - md) / 1e3;
        if ((0, Fd.P)()) return (0, hd.h)("ready", Wd), yd || (yd = !0, (0, Fd.W)((() => {
          if ("call" !== (0, Fd.m)()) return;
          const dd = (0, Fd.k)(),
            Od = (0, td.m)(dd, Fd.B, Fd.hb),
            md = (0, Fd.t)().buffer.byteLength,
            Wd = (0, td.h)(Od.kind, Od.refusedBytes),
            Rd = Wd ? "alloc_failed" : Od.kind,
            Xd = (0, Nd.i)(md),
            Kd = Wd ? `_r${Math.floor(Math.log2(Od.refusedBytes))}` : "",
            hd = (0, Hd.d)();
          null === hd && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const vd = new Error((0, qd.b)(dd, md, Od));
          if (dd instanceof Error && void 0 !== dd.stack) {
            const Od = dd.stack.split("\n"),
              md = Od.length > bd ? [...Od.slice(0, bd / 2), ...Od.slice(-bd / 2)] : Od;
            vd.stack = md.join("\n")
          }(0, od.reportClientError)("wasm_load", vd, `wasm_call_${Rd}_${null!==hd&&void 0!==hd?hd:"unnamed"}_m${Xd}${Kd}`)
        }))), (0, Xd.P)(Rd.e.url()) && (0, Kd.reportCappedWasmFailure)("wasm_load", vd.c.message, vd.c.code), !0;
        const Td = Qd.e[null !== (Od = (0, Fd.m)()) && void 0 !== Od ? Od : "call"];
        return (0, hd.h)(Td, Wd), Bd(Td, (0, Fd.g)()), !1
      }
    }

    function Bd(dd, Od) {
      (0, Qd.j)(Yd, `Bloxd wasm ${dd}, so the game can't start: ${Od}`, Od, dd)
    }
  },
  37691: (dd, Od, md) => {
    dd.exports = md.p + "static/media/bloxd_wasm_bg.2b6d62b8f0adbea37046.wasm"
  },
  37675: (dd, Od, md) => {
    dd.exports = md.p + "static/media/bloxd_wasm_textures_bg.772662d741c67e3339b4.wasm"
  },
  37683: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      td: () => Wd,
      EnvelopeKind: () => Fd,
      TO: () => Rd,
      PhysicsEngine: () => Xd,
      OF: () => Kd,
      TR: () => hd,
      SR: () => vd,
      oh: () => Qd,
      XQ: () => td,
      HQ: () => od,
      PQ: () => Nd,
      qt: () => qd,
      St: () => Hd,
      ut: () => yd,
      default: () => JO,
      initSync: () => EO,
      Vt: () => bd,
      rt: () => Td,
      Gt: () => pd,
      nt: () => Yd,
      Lt: () => gd,
      Pt: () => wd,
      zt: () => Ed,
      ct: () => Jd,
      jt: () => Ud,
      Dt: () => xd,
      et: () => Bd,
      lt: () => Sd,
      Ct: () => sd,
      Zt: () => ud,
      kt: () => Vd
    });
    class Wd {
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, rd.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        gO.pyV8(dd, 0)
      }
      ft() {
        const dd = gO.oX1v(this.__wbg_ptr);
        if (dd[2]) throw qO(dd[1]);
        return dd[0] >>> 0
      }
      Mt() {
        return gO.YzWy(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const dd = gO.s6T7();
        return this.__wbg_ptr = dd, rd.register(this, this.__wbg_ptr, this), this
      }
      Oo() {
        return gO.i3sQ(this.__wbg_ptr) >>> 0
      }
      Wo(dd) {
        const Od = gO.l4ZY(this.__wbg_ptr, dd);
        if (Od[2]) throw qO(Od[1]);
        return Od[0] >>> 0
      }
      Fo(dd) {
        const Od = gO.QQU3(this.__wbg_ptr, dd);
        if (Od[2]) throw qO(Od[1]);
        return Od[0] >>> 0
      }
    }
    Symbol.dispose && (Wd.prototype[Symbol.dispose] = Wd.prototype.free);
    const Fd = Object.freeze({
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
    class Rd {
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Gd.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        gO.tLsV(dd, 0)
      }
      Ko(dd, Od) {
        const md = gO.T8gX(this.__wbg_ptr, dd, Od);
        if (md[2]) throw qO(md[1]);
        return md[0] >>> 0
      }
      ho(dd) {
        const Od = gO.M2nq(this.__wbg_ptr, dd);
        if (Od[2]) throw qO(Od[1]);
        return Od[0] >>> 0
      }
      vo() {
        gO.y7DZ(this.__wbg_ptr)
      }
      static Qo() {
        return gO.qzhr() >>> 0
      }
      oo() {
        return gO.g9RR(this.__wbg_ptr) >>> 0
      }
      qo() {
        const dd = gO.Nfen(this.__wbg_ptr);
        return 0 === dd[0] ? void 0 : dd[1]
      }
      Ho() {
        return gO.rQOb(this.__wbg_ptr) >>> 0
      }
      yo() {
        return gO.S0EA(this.__wbg_ptr) >>> 0
      }
      static Xo() {
        return gO.BQcI() >>> 0
      }
      constructor() {
        const dd = gO.U0S2();
        return this.__wbg_ptr = dd, Gd.register(this, this.__wbg_ptr, this), this
      }
      bo() {
        return gO.jIFV(this.__wbg_ptr) >>> 0
      }
      po() {
        return gO.WU0F(this.__wbg_ptr) >>> 0
      }
      Yo() {
        return gO.m6UT(this.__wbg_ptr) >>> 0
      }
      Ro(dd) {
        return gO.H2FK(this.__wbg_ptr, dd) >>> 0
      }
      reserve(dd, Od) {
        const md = gO.u4t3(this.__wbg_ptr, dd, Od);
        if (md[1]) throw qO(md[0])
      }
      Eo(dd, Od) {
        const md = QO(dd, gO.BRWL),
          Wd = wO;
        gO.WxiR(this.__wbg_ptr, md, Wd, Od)
      }
      text() {
        let dd, Od;
        try {
          const md = gO.WNc3(this.__wbg_ptr);
          return dd = md[0], Od = md[1], Md(md[0], md[1])
        } finally {
          gO.MvYT(dd, Od, 1)
        }
      }
    }
    Symbol.dispose && (Rd.prototype[Symbol.dispose] = Rd.prototype.free);
    class Xd {
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, nd.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        gO.elbE(dd, 0)
      }
      Uo(dd, Od) {
        ed(Od, Wd);
        const md = gO.zUcf(this.__wbg_ptr, dd, Od.__wbg_ptr);
        if (md[2]) throw qO(md[1]);
        return md[0] >>> 0
      }
      xo() {
        const dd = gO.KUfq(this.__wbg_ptr);
        if (dd[1]) throw qO(dd[0])
      }
      Ao(dd, Od, md, Wd, Fd, Rd, Xd, hd, vd, Qd, td) {
        ed(dd, Kd);
        const od = gO.CY8X(this.__wbg_ptr, dd.__wbg_ptr, Od, md, Wd, Fd, Rd, Xd, hd, vd, Qd, td);
        if (od[2]) throw qO(od[1]);
        return od[0]
      }
      ro() {
        const dd = gO.lNaT(this.__wbg_ptr);
        var Od = Id(dd[0], dd[1]).slice();
        return gO.MvYT(dd[0], 8 * dd[1], 8), Od
      }
      Go() {
        return gO.MkTC(this.__wbg_ptr) >>> 0
      }
      Lo() {
        return gO.yV5U(this.__wbg_ptr) >>> 0
      }
      Po() {
        return gO.Nf3L(this.__wbg_ptr) >>> 0
      }
      constructor(dd, Od, md, Wd, Fd, Rd, Xd, Kd) {
        const hd = gO.lTAR(dd, Od, md, Wd, Fd, Rd, Xd, Kd);
        if (hd[2]) throw qO(hd[1]);
        return this.__wbg_ptr = hd[0], nd.register(this, this.__wbg_ptr, this), this
      }
      Do(dd) {
        ed(dd, Wd);
        const Od = gO.Nzgg(this.__wbg_ptr, dd.__wbg_ptr);
        if (Od[2]) throw qO(Od[1]);
        return Od[0] >>> 0
      }
      eo(dd) {
        const Od = gO.CYUV(this.__wbg_ptr, dd);
        if (Od[1]) throw qO(Od[0])
      }
      Io() {
        return gO.V9oU(this.__wbg_ptr) >>> 0
      }
      resume(dd, Od) {
        ed(dd, Kd), ed(Od, Wd);
        const md = gO.rBCy(this.__wbg_ptr, dd.__wbg_ptr, Od.__wbg_ptr);
        if (md[2]) throw qO(md[1]);
        return md[0] >>> 0
      }
      Mo(dd) {
        const Od = gO.DkZ8(this.__wbg_ptr, dd);
        if (Od[1]) throw qO(Od[0])
      }
      mN(dd, Od) {
        ed(Od, Wd);
        const md = gO.Re3x(this.__wbg_ptr, dd, Od.__wbg_ptr);
        if (md[1]) throw qO(md[0])
      }
      RN(dd) {
        const Od = oO(dd, gO.BRWL),
          md = wO,
          Wd = gO.Rz8p(this.__wbg_ptr, Od, md);
        if (Wd[1]) throw qO(Wd[0])
      }
      uo(dd, Od, md, Wd, Fd, Rd) {
        const Xd = gO.CFN7(this.__wbg_ptr, dd, Od, md, Wd, Fd, Rd);
        if (Xd[1]) throw qO(Xd[0])
      }
      Vo(dd, Od, md, Wd) {
        const Fd = QO(dd, gO.BRWL),
          Rd = wO,
          Xd = oO(Od, gO.BRWL),
          Kd = wO,
          hd = oO(md, gO.BRWL),
          vd = wO,
          Qd = oO(Wd, gO.BRWL),
          td = wO,
          od = gO.fC6V(this.__wbg_ptr, Fd, Rd, Xd, Kd, hd, vd, Qd, td);
        if (od[1]) throw qO(od[0])
      }
      KN(dd, Od) {
        ed(Od, Wd);
        const md = gO.RQdd(this.__wbg_ptr, dd, Od.__wbg_ptr);
        if (md[1]) throw qO(md[0])
      }
      jo(dd, Od, md) {
        const Wd = gO.KV15(this.__wbg_ptr, dd, Od, md);
        if (Wd[1]) throw qO(Wd[0])
      }
      vN(dd, Od, md, Wd, Fd, Rd, Xd, hd, vd, Qd) {
        ed(dd, Kd);
        return gO.W4HZ(this.__wbg_ptr, dd.__wbg_ptr, Od, md, Wd, Fd, Rd, Xd, hd, vd, Qd)
      }
    }
    Symbol.dispose && (Xd.prototype[Symbol.dispose] = Xd.prototype.free);
    class Kd {
      static __wrap(dd) {
        const Od = Object.create(Kd.prototype);
        return Od.__wbg_ptr = dd, Ld.register(Od, Od.__wbg_ptr, Od), Od
      }
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Ld.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        gO.mOLd(dd, 0)
      }
      tN(dd) {
        const Od = gO.eyiz(this.__wbg_ptr, dd);
        if (Od[2]) throw qO(Od[1]);
        return Od[0] >>> 0
      }
      oN(dd, Od, md) {
        return gO.r1Vw(this.__wbg_ptr, dd, Od, md)
      }
      NN(dd, Od, md) {
        return gO.WfTm(this.__wbg_ptr, dd, Od, md) >>> 0
      }
      qN(dd, Od, md, Wd) {
        return 0 !== gO.qefe(this.__wbg_ptr, dd, Od, md, Wd)
      }
      HN() {
        gO.c8in(this.__wbg_ptr)
      }
      yN(dd) {
        const Od = gO.KvMR(this.__wbg_ptr, dd);
        if (Od[3]) throw qO(Od[2]);
        var md = Cd(Od[0], Od[1]).slice();
        return gO.MvYT(Od[0], 1 * Od[1], 1), md
      }
      evict(dd, Od) {
        return gO.qbik(this.__wbg_ptr, dd, Od) >>> 0
      }
      bN() {
        gO.zS7K(this.__wbg_ptr)
      }
      TN(dd, Od, md) {
        gO.mv3c(this.__wbg_ptr, dd, Od, md)
      }
      pN(dd) {
        const Od = gO.qELS(this.__wbg_ptr, dd);
        if (Od[1]) throw qO(Od[0])
      }
      YN() {
        return gO.dTTo(this.__wbg_ptr) >>> 0
      }
      gN() {
        return gO.AQJQ(this.__wbg_ptr) >>> 0
      }
      wN(dd, Od, md) {
        gO.LF9H(this.__wbg_ptr, dd, Od, md)
      }
      aN(dd, Od, md) {
        gO.xH7a(this.__wbg_ptr, dd, Od, md)
      }
      EN() {
        return gO.DOpJ(this.__wbg_ptr) >>> 0
      }
      JN() {
        return gO.ZhB2(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const dd = gO.uT6z();
        return this.__wbg_ptr = dd, Ld.register(this, this.__wbg_ptr, this), this
      }
      static UN() {
        const dd = gO.thMH();
        return Kd.__wrap(dd)
      }
      xN() {
        return gO.BVNO(this.__wbg_ptr) >>> 0
      }
      BN() {
        return gO.kGrv(this.__wbg_ptr) >>> 0
      }
      SN(dd, Od, md, Wd) {
        const Fd = gO.ADeg(this.__wbg_ptr, dd, Od, md, Wd);
        if (Fd[1]) throw qO(Fd[0])
      }
      sN() {
        return gO.ojtz(this.__wbg_ptr) >>> 0
      }
      uN() {
        return gO.YgUd(this.__wbg_ptr) >>> 0
      }
      VN(dd, Od, md, Wd) {
        gO.uz9c(this.__wbg_ptr, dd, Od, md, Wd)
      }
      iN(dd) {
        gO.lQmP(this.__wbg_ptr, dd)
      }
      rN(dd, Od, md, Wd, Fd) {
        const Rd = tO(Od, gO.BRWL),
          Xd = wO,
          Kd = QO(md, gO.BRWL),
          hd = wO,
          vd = oO(Wd, gO.BRWL),
          Qd = wO,
          td = gO.zquz(this.__wbg_ptr, dd, Rd, Xd, Kd, hd, vd, Qd, Fd);
        if (td[1]) throw qO(td[0])
      }
      AN(dd, Od, md, Wd) {
        const Fd = tO(dd, gO.BRWL),
          Rd = wO,
          Xd = QO(Od, gO.BRWL),
          Kd = wO,
          hd = oO(md, gO.BRWL),
          vd = wO,
          Qd = tO(Wd, gO.BRWL),
          td = wO,
          od = gO.lBWG(this.__wbg_ptr, Fd, Rd, Xd, Kd, hd, vd, Qd, td);
        if (od[1]) throw qO(od[0])
      }
      zN(dd) {
        const Od = tO(dd, gO.BRWL),
          md = wO,
          Wd = gO.D2E2(this.__wbg_ptr, Od, md);
        if (Wd[1]) throw qO(Wd[0])
      }
      cN() {
        return gO.Nxb6(this.__wbg_ptr) >>> 0
      }
      jN(dd) {
        const Od = gO.BS8z(this.__wbg_ptr, dd);
        if (Od[2]) throw qO(Od[1]);
        return Od[0] >>> 0
      }
      steer() {
        return gO.LEjV(this.__wbg_ptr) >>> 0
      }
      DN() {
        const dd = gO.TGbl(this.__wbg_ptr);
        var Od = Id(dd[0], dd[1]).slice();
        return gO.MvYT(dd[0], 8 * dd[1], 8), Od
      }
      eN() {
        return gO.GS5y(this.__wbg_ptr) >>> 0
      }
      Zo() {
        const dd = gO.kUyl(this.__wbg_ptr);
        var Od, md, Wd = (Od = dd[0], md = dd[1], Od >>>= 0, (null !== fd && 0 !== fd.byteLength || (fd = new Int32Array(gO.memory.buffer)), fd).subarray(Od / 4, Od / 4 + md)).slice();
        return gO.MvYT(dd[0], 4 * dd[1], 4), Wd
      }
    }
    Symbol.dispose && (Kd.prototype[Symbol.dispose] = Kd.prototype.free);
    class hd {
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Pd.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        gO.cA0o(dd, 0)
      }
      ot(dd) {
        const Od = QO(dd, gO.BRWL),
          md = wO,
          Wd = gO.bhmM(this.__wbg_ptr, Od, md);
        if (Wd[1]) throw qO(Wd[0])
      }
      IN() {
        return gO.c5qc(this.__wbg_ptr) >>> 0
      }
      lN() {
        return gO.aS1e(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const dd = gO.Alm0();
        return this.__wbg_ptr = dd, Pd.register(this, this.__wbg_ptr, this), this
      }
      run(dd, Od) {
        ed(dd, Kd);
        const md = gO.TjfV(this.__wbg_ptr, dd.__wbg_ptr, Od);
        if (md[2]) throw qO(md[1]);
        return md[0] >>> 0
      }
      CN(dd) {
        const Od = QO(dd, gO.BRWL),
          md = wO;
        gO.QbNO(this.__wbg_ptr, Od, md)
      }
      ZN(dd) {
        const Od = QO(dd, gO.BRWL),
          md = wO;
        gO.ZEQM(this.__wbg_ptr, Od, md)
      }
    }
    Symbol.dispose && (hd.prototype[Symbol.dispose] = hd.prototype.free);
    class vd {
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, zd.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        gO.X2wf(dd, 0)
      }
      fN(dd, Od) {
        const md = tO(dd, gO.BRWL),
          Wd = wO;
        return gO.JjsY(this.__wbg_ptr, md, Wd, Od) >>> 0
      }
      MN(dd, Od, md) {
        ed(dd, Kd);
        const Wd = tO(md, gO.BRWL),
          Fd = wO,
          Rd = gO.G5o7(this.__wbg_ptr, dd.__wbg_ptr, Od, Wd, Fd);
        if (Rd[2]) throw qO(Rd[1]);
        return Rd[0] >>> 0
      }
      kN(dd) {
        return gO.yrVX(this.__wbg_ptr, dd) >>> 0
      }
      constructor() {
        const dd = gO.hNLO();
        return this.__wbg_ptr = dd, zd.register(this, this.__wbg_ptr, this), this
      }
      scan(dd, Od) {
        ed(dd, Kd);
        const md = gO.nPXz(this.__wbg_ptr, dd.__wbg_ptr, Od);
        if (md[2]) throw qO(md[1]);
        return md[0] >>> 0
      }
      mq(dd) {
        const Od = tO(dd, gO.BRWL),
          md = wO;
        gO.cUiA(this.__wbg_ptr, Od, md)
      }
      Oq() {
        return gO.Yknb(this.__wbg_ptr) >>> 0
      }
      dq() {
        return gO.xosn(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (vd.prototype[Symbol.dispose] = vd.prototype.free);
    class Qd {
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, cd.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        gO.gnVt(dd, 0)
      }
      Fq(dd) {
        const Od = gO.Oowq(this.__wbg_ptr, dd);
        if (Od[2]) throw qO(Od[1]);
        return Od[0] >>> 0
      }
      compute(dd, Od, md, Wd) {
        var Fd = hO(Wd) ? 0 : NO(Wd, gO.BRWL, gO.UFm9),
          Rd = wO;
        const Xd = gO.zxXW(this.__wbg_ptr, dd, hO(Od) ? Number.MAX_SAFE_INTEGER : Od | 0, md, Fd, Rd);
        if (Xd[2]) throw qO(Xd[1]);
        return Xd[0] >>> 0
      }
      Xq(dd) {
        const Od = NO(dd, gO.BRWL, gO.UFm9),
          md = wO;
        gO.fMG3(this.__wbg_ptr, Od, md)
      }
      Kq() {
        return gO.PvhX(this.__wbg_ptr)
      }
      hq(dd) {
        return gO.kcJ4(this.__wbg_ptr, dd) >>> 0
      }
      vq() {
        return gO.d5b5(this.__wbg_ptr) >>> 0
      }
      Qq() {
        return gO.IVQU(this.__wbg_ptr) >>> 0
      }
      tq(dd, Od) {
        const md = gO.Ln6Z(this.__wbg_ptr, dd, Od);
        if (md[1]) throw qO(md[0])
      }
      oq() {
        return gO.X7iQ(this.__wbg_ptr) >>> 0
      }
      Nq() {
        return gO.XcDC(this.__wbg_ptr) >>> 0
      }
      qq() {
        return gO.erdf(this.__wbg_ptr) >>> 0
      }
      Rq(dd, Od, md) {
        const Wd = QO(dd, gO.BRWL),
          Fd = wO,
          Rd = QO(Od, gO.BRWL),
          Xd = wO,
          Kd = gO.u6Rb(this.__wbg_ptr, Wd, Fd, Rd, Xd, md);
        if (Kd[1]) throw qO(Kd[0])
      }
      yq() {
        return gO.aM21(this.__wbg_ptr) >>> 0
      }
      mesh(dd, Od, md, Wd, Fd) {
        const Rd = gO.gH9q(this.__wbg_ptr, dd, Od, md, Wd, Fd);
        if (Rd[2]) throw qO(Rd[1]);
        return Rd[0] >>> 0
      }
      constructor(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td, od, Nd, qd, Hd, yd, bd, Td, pd, Yd) {
        const gd = vO(dd, gO.BRWL),
          wd = wO,
          Ed = oO(Od, gO.BRWL),
          Jd = wO,
          Ud = QO(md, gO.BRWL),
          xd = wO,
          Bd = tO(Wd, gO.BRWL),
          Sd = wO,
          sd = tO(Fd, gO.BRWL),
          ud = wO,
          Vd = QO(Rd, gO.BRWL),
          Ad = wO,
          rd = QO(Xd, gO.BRWL),
          Gd = wO,
          nd = oO(Kd, gO.BRWL),
          Ld = wO,
          Pd = oO(hd, gO.BRWL),
          zd = wO,
          jd = tO(vd, gO.BRWL),
          Dd = wO;
        var ed = hO(Qd) ? 0 : vO(Qd, gO.BRWL),
          Id = wO;
        const ld = QO(td, gO.BRWL),
          Cd = wO,
          Zd = tO(od, gO.BRWL),
          kd = wO;
        var fd = hO(Nd) ? 0 : tO(Nd, gO.BRWL),
          Md = wO,
          dO = hO(qd) ? 0 : tO(qd, gO.BRWL),
          OO = wO;
        const mO = oO(Hd, gO.BRWL),
          WO = wO,
          FO = gO.X4km(gd, wd, Ed, Jd, Ud, xd, Bd, Sd, sd, ud, Vd, Ad, rd, Gd, nd, Ld, Pd, zd, jd, Dd, ed, Id, ld, Cd, Zd, kd, fd, Md, dO, OO, mO, WO, yd, bd, Td, pd, Yd);
        if (FO[2]) throw qO(FO[1]);
        return this.__wbg_ptr = FO[0], cd.register(this, this.__wbg_ptr, this), this
      }
      Hq(dd, Od) {
        const md = QO(dd, gO.BRWL),
          Wd = wO,
          Fd = gO.m08D(this.__wbg_ptr, md, Wd, Od);
        if (Fd[3]) throw qO(Fd[2]);
        var Rd = Cd(Fd[0], Fd[1]).slice();
        return gO.MvYT(Fd[0], 1 * Fd[1], 1), Rd
      }
      bq(dd) {
        gO.kZbZ(this.__wbg_ptr, hO(dd) ? 16777215 : dd)
      }
      Tq(dd) {
        return gO.d4wM(this.__wbg_ptr, dd) >>> 0
      }
      Yq() {
        return gO.iZ2o(this.__wbg_ptr) >>> 0
      }
      pq() {
        const dd = gO.epZh(this.__wbg_ptr);
        if (dd[2]) throw qO(dd[1]);
        return 0 !== dd[0]
      }
      wq() {
        return gO.XclU(this.__wbg_ptr) >>> 0
      }
      aq() {
        return gO.YG5o(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Qd.prototype[Symbol.dispose] = Qd.prototype.free);
    class td {
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, jd.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        gO.BTrA(dd, 0)
      }
      compute(dd, Od, md, Wd) {
        var Fd = hO(Wd) ? 0 : NO(Wd, gO.BRWL, gO.UFm9),
          Rd = wO;
        const Xd = gO.C8h9(this.__wbg_ptr, dd, hO(Od) ? Number.MAX_SAFE_INTEGER : Od | 0, md, Fd, Rd);
        if (Xd[2]) throw qO(Xd[1]);
        return Xd[0] >>> 0
      }
      Xq(dd) {
        const Od = NO(dd, gO.BRWL, gO.UFm9),
          md = wO;
        gO.xEp0(this.__wbg_ptr, Od, md)
      }
      Nq() {
        return gO.NaCu(this.__wbg_ptr) >>> 0
      }
      qq() {
        return gO.SJpD(this.__wbg_ptr) >>> 0
      }
      Eq(dd) {
        const Od = gO.jmrw(this.__wbg_ptr, dd);
        if (Od[2]) throw qO(Od[1]);
        return Od[0] >>> 0
      }
      constructor(dd, Od, md, Wd, Fd, Rd) {
        const Xd = vO(dd, gO.BRWL),
          Kd = wO,
          hd = oO(Od, gO.BRWL),
          vd = wO,
          Qd = QO(md, gO.BRWL),
          td = wO,
          od = tO(Wd, gO.BRWL),
          Nd = wO,
          qd = gO.cAUt(Xd, Kd, hd, vd, Qd, td, od, Nd, Fd, Rd);
        if (qd[2]) throw qO(qd[1]);
        return this.__wbg_ptr = qd[0], jd.register(this, this.__wbg_ptr, this), this
      }
      Yq() {
        return gO.RVkb(this.__wbg_ptr) >>> 0
      }
      pq() {
        const dd = gO.PURX(this.__wbg_ptr);
        if (dd[2]) throw qO(dd[1]);
        return 0 !== dd[0]
      }
      wq() {
        return gO.SXLM(this.__wbg_ptr) >>> 0
      }
    }

    function od() {
      const dd = gO.WIEC();
      var Od = ld(dd[0], dd[1]).slice();
      return gO.MvYT(dd[0], 4 * dd[1], 4), Od
    }

    function Nd(dd, Od) {
      let md, Wd;
      try {
        const Fd = vO(dd, gO.BRWL),
          Rd = wO,
          Xd = NO(Od, gO.BRWL, gO.UFm9),
          Kd = wO,
          hd = gO.MmVA(Fd, Rd, Xd, Kd);
        return md = hd[0], Wd = hd[1], Md(hd[0], hd[1])
      } finally {
        gO.MvYT(md, Wd, 1)
      }
    }

    function qd() {
      const dd = gO.x3S9();
      var Od = ld(dd[0], dd[1]).slice();
      return gO.MvYT(dd[0], 4 * dd[1], 4), Od
    }

    function Hd(dd) {
      return 0 !== gO.NPoA(dd)
    }

    function yd(dd, Od) {
      const md = NO(dd, gO.BRWL, gO.UFm9),
        Wd = wO,
        Fd = gO.q9pM(md, Wd, Od);
      if (Fd[1]) throw qO(Fd[0])
    }

    function bd() {
      gO.bhgF()
    }

    function Td() {
      return gO.hJZP() >>> 0
    }

    function pd(dd) {
      return 0 !== gO.PmRF(dd)
    }

    function Yd(dd) {
      return 0 !== gO.c8U0(dd)
    }

    function gd(dd) {
      gO.cm8P(dd)
    }

    function wd() {
      return gO.SiwA() >>> 0
    }

    function Ed() {
      return gO.Bngs() >>> 0
    }

    function Jd() {
      return 0 !== gO.uhMM()
    }

    function Ud() {
      const dd = gO.ZSxy();
      var Od = ld(dd[0], dd[1]).slice();
      return gO.MvYT(dd[0], 4 * dd[1], 4), Od
    }

    function xd() {
      const dd = gO.uEyq();
      var Od = ld(dd[0], dd[1]).slice();
      return gO.MvYT(dd[0], 4 * dd[1], 4), Od
    }

    function Bd() {
      const dd = gO.Llg4();
      var Od = ld(dd[0], dd[1]).slice();
      return gO.MvYT(dd[0], 4 * dd[1], 4), Od
    }

    function Sd() {
      return gO.BLsW() >>> 0
    }

    function sd() {
      gO.rMeQ()
    }

    function ud() {
      let dd, Od;
      try {
        const md = gO.zC5Y();
        return dd = md[0], Od = md[1], Md(md[0], md[1])
      } finally {
        gO.MvYT(dd, Od, 1)
      }
    }

    function Vd(dd) {
      gO.YGvT(Dd(dd))
    }

    function Ad() {
      return {
        __proto__: null,
        N20G: {
          __proto__: null,
          MMyS: function(dd, Od) {
            return Dd(Error(Md(dd, Od)))
          },
          vCYo: function(dd, Od) {
            throw new Error(Md(dd, Od))
          },
          OQum: function(dd) {
            RO(dd).call()
          },
          mDmX: function(dd, Od) {
            console.error(Md(dd, Od))
          },
          moP6: function() {
            return performance.now()
          },
          pwOd: function(dd) {
            qO(dd)
          }
        }
      }
    }
    Symbol.dispose && (td.prototype[Symbol.dispose] = td.prototype.free);
    const rd = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((dd => gO.pyV8(dd, 1))),
      Gd = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((dd => gO.tLsV(dd, 1))),
      nd = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((dd => gO.elbE(dd, 1))),
      Ld = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((dd => gO.mOLd(dd, 1))),
      Pd = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((dd => gO.cA0o(dd, 1))),
      zd = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((dd => gO.X2wf(dd, 1))),
      cd = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((dd => gO.gnVt(dd, 1))),
      jd = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((dd => gO.BTrA(dd, 1)));

    function Dd(dd) {
      KO === XO.length && XO.push(XO.length + 1);
      const Od = KO;
      return KO = XO[Od], XO[Od] = dd, Od
    }

    function ed(dd, Od) {
      if (!(dd instanceof Od)) throw new Error(`expected instance of ${Od.name}`)
    }

    function Id(dd, Od) {
      return dd >>>= 0, kd().subarray(dd / 8, dd / 8 + Od)
    }

    function ld(dd, Od) {
      return dd >>>= 0, mO().subarray(dd / 4, dd / 4 + Od)
    }

    function Cd(dd, Od) {
      return dd >>>= 0, FO().subarray(dd / 1, dd / 1 + Od)
    }
    let Zd = null;

    function kd() {
      return null !== Zd && 0 !== Zd.byteLength || (Zd = new Float64Array(gO.memory.buffer)), Zd
    }
    let fd = null;

    function Md(dd, Od) {
      return function(dd, Od) {
        bO += Od, bO >= yO && (HO = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), HO.decode(), bO = Od);
        return HO.decode(FO().subarray(dd, dd + Od))
      }(dd >>> 0, Od)
    }
    let dO = null;
    let OO = null;

    function mO() {
      return null !== OO && 0 !== OO.byteLength || (OO = new Uint32Array(gO.memory.buffer)), OO
    }
    let WO = null;

    function FO() {
      return null !== WO && 0 !== WO.byteLength || (WO = new Uint8Array(gO.memory.buffer)), WO
    }

    function RO(dd) {
      return XO[dd]
    }
    let XO = new Array(1024).fill(void 0);
    XO.push(void 0, null, !0, !1);
    let KO = XO.length;

    function hO(dd) {
      return void 0 === dd || null === dd
    }

    function vO(dd, Od) {
      const md = Od(2 * dd.length, 2) >>> 0;
      return (null !== dO && 0 !== dO.byteLength || (dO = new Uint16Array(gO.memory.buffer)), dO).set(dd, md / 2), wO = dd.length, md
    }

    function QO(dd, Od) {
      const md = Od(4 * dd.length, 4) >>> 0;
      return mO().set(dd, md / 4), wO = dd.length, md
    }

    function tO(dd, Od) {
      const md = Od(1 * dd.length, 1) >>> 0;
      return FO().set(dd, md / 1), wO = dd.length, md
    }

    function oO(dd, Od) {
      const md = Od(8 * dd.length, 8) >>> 0;
      return kd().set(dd, md / 8), wO = dd.length, md
    }

    function NO(dd, Od, md) {
      if (void 0 === md) {
        const md = TO.encode(dd),
          Wd = Od(md.length, 1) >>> 0;
        return FO().subarray(Wd, Wd + md.length).set(md), wO = md.length, Wd
      }
      let Wd = dd.length,
        Fd = Od(Wd, 1) >>> 0;
      const Rd = FO();
      let Xd = 0;
      for (; Xd < Wd; Xd++) {
        const Od = dd.charCodeAt(Xd);
        if (Od > 127) break;
        Rd[Fd + Xd] = Od
      }
      if (Xd !== Wd) {
        0 !== Xd && (dd = dd.slice(Xd)), Fd = md(Fd, Wd, Wd = Xd + 3 * dd.length, 1) >>> 0;
        const Od = FO().subarray(Fd + Xd, Fd + Wd);
        Xd += TO.encodeInto(dd, Od).written, Fd = md(Fd, Wd, Xd, 1) >>> 0
      }
      return wO = Xd, Fd
    }

    function qO(dd) {
      const Od = RO(dd);
      return function(dd) {
        dd < 1028 || (XO[dd] = KO, KO = dd)
      }(dd), Od
    }
    let HO = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    HO.decode();
    const yO = 2146435072;
    let bO = 0;
    const TO = new TextEncoder;
    "encodeInto" in TO || (TO.encodeInto = function(dd, Od) {
      const md = TO.encode(dd);
      return Od.set(md), {
        read: dd.length,
        written: md.length
      }
    });
    let pO, YO, gO, wO = 0;

    function aO(dd, Od) {
      return YO = dd, gO = dd.exports, pO = Od, Zd = null, fd = null, dO = null, OO = null, WO = null, gO.rA9W(), gO
    }

    function EO(dd) {
      if (void 0 !== gO) return gO;
      void 0 !== dd && (Object.getPrototypeOf(dd) === Object.prototype ? ({
        module: dd
      } = dd) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Od = Ad();
      dd instanceof WebAssembly.Module || (dd = new WebAssembly.Module(dd));
      return aO(new WebAssembly.Instance(dd, Od), dd)
    }
    async function JO(dd) {
      if (void 0 !== gO) return gO;
      void 0 !== dd && (Object.getPrototypeOf(dd) === Object.prototype ? ({
        module_or_path: dd
      } = dd) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Od = Ad();
      ("string" === typeof dd || "function" === typeof Request && dd instanceof Request || "function" === typeof URL && dd instanceof URL) && (dd = fetch(dd));
      const {
        instance: md,
        module: Wd
      } = await async function(dd, Od) {
        if ("function" === typeof Response && dd instanceof Response) {
          if (!dd.ok) throw new Error(`failed to fetch Wasm: ${dd.status} ${dd.statusText} fetching '${dd.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(dd, Od)
          } catch (md) {
            if (! function(dd) {
                switch (dd) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(dd.type) || "application/wasm" === dd.headers.get("Content-Type")) throw md;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", md)
          }
          const Wd = await dd.arrayBuffer();
          return await WebAssembly.instantiate(Wd, Od)
        } {
          const md = await WebAssembly.instantiate(dd, Od);
          return md instanceof WebAssembly.Instance ? {
            instance: md,
            module: dd
          } : md
        }
      }(await dd, Od);
      return aO(md, Wd)
    }
  },
  37681: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd,
      i: () => Kd,
      l: () => hd
    });
    var Wd = md(37683),
      Fd = md(2421),
      Rd = md(37688);
    const Xd = {
      name: Fd.b,
      url: () => new md.U(md(37691)),
      init: Wd.default,
      bindings: Wd
    };

    function Kd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xd,
        Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xd,
        md = arguments.length > 2 ? arguments[2] : void 0;
      return (0, Rd.l)(dd, Od, md)
    }

    function hd(dd) {
      return (0, Fd.I)((() => dd), Wd, Xd)
    }
  },
  37669: (dd, Od, md) => {
    function Wd(dd, Od) {
      return new Error(`${dd}: ${Od instanceof Error?`${Od.name}: ${Od.message}`:String(Od)}`, {
        cause: Od
      })
    }
    md.d(Od, {
      c: () => Wd
    })
  },
  37665: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd,
      g: () => hd
    });
    var Wd = md(2425),
      Fd = md(7573),
      Rd = md(37669);

    function Xd() {
      return new URL(new md.U(md(37675)).href, globalThis.location?.href).href
    }
    let Kd = null;

    function hd() {
      return Kd ??= (async () => (0, Wd.F)(new URL(Xd()), (0, Fd.b)("bloxd_wasm_textures")))().catch((dd => {
        throw (0, Rd.c)((0, Wd.L)(dd), dd)
      })), Kd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);