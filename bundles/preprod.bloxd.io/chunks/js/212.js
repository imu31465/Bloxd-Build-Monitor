export const id = 212;
export const ids = [212, 213];
export const modules = {
  36469: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      CAPPED_COUNTS_VISIT_CAP: () => Ip,
      reportCappedWasmFailure: () => Lp,
      reportUncappedWasmFailure: () => xp,
      reportWasmCrash: () => op,
      reportWasmFailure: () => Sp
    });
    var Op = cp(3025);

    function op(pp) {
      (0, Op.reportClientError)("wasm_load", pp.message, pp.code)
    }
    const Ip = Op.b - 4;

    function Sp(pp, ip, cp) {
      (0, Op.reportClientError)(pp, ip, cp, !1)
    }

    function xp(pp, ip, cp) {
      (0, Op.reportClientError)(pp, ip, cp, !1, 1 / 0)
    }

    function Lp(pp, ip, cp) {
      (0, Op.reportClientError)(pp, ip, cp, !1, Ip)
    }
  },
  36464: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => ep,
      e: () => mp,
      g: () => Rp,
      i: () => jp
    });
    var Op = cp(36486),
      op = cp(2963),
      Ip = cp(36506),
      Sp = cp(2970),
      xp = cp(36469),
      Lp = cp(3020),
      Yp = cp(3330),
      Dp = cp(3322),
      Ap = cp(36472),
      Pp = cp(3025),
      Wp = cp(36481),
      yp = cp(36484),
      Up = cp(3801);
    let wp = !1;
    const vp = 40;
    var tp = cp(3668);
    const Hp = "bloxdWasmFailureReported";

    function dp() {
      return "undefined" === typeof WebAssembly
    }

    function ep() {
      return (0, Op.g)()
    }

    function jp() {
      if (dp()) return "this browser has no WebAssembly";
      const pp = (0, op.r)();
      return "compile" === pp || "instantiate" === pp ? `the core wasm didn't load here (${(0,op.i)()})` : null
    }
    async function kp(pp) {
      return await (0, Ip.e)(Ip.d, void 0, pp)
    }

    function mp() {
      dp() || (0, tp.b)((() => {
        kp()
      }))
    }

    function Rp() {
      if (dp()) return async () => ((0, Lp.i)("unsupported", 0), qp("unsupported", "This browser has no WebAssembly"), !1);
      const pp = {
        reloadFailedDownload: !0
      };
      return kp(pp), async () => {
        var ip;
        const cp = performance.now();
        await kp(pp);
        const Op = (performance.now() - cp) / 1e3;
        if ((0, op.X)()) return (0, Lp.i)("ready", Op), wp || (wp = !0, (0, op._)((() => {
          if ("call" !== (0, op.r)()) return;
          const pp = (0, op.o)(),
            ip = (0, Ap.n)(pp, op.L, op.ib),
            cp = (0, op.z)().buffer.byteLength,
            Op = (0, Ap.h)(ip.kind, ip.refusedBytes),
            Ip = Op ? "alloc_failed" : ip.kind,
            Sp = (0, Wp.e)(cp),
            xp = Op ? `_r${Math.floor(Math.log2(ip.refusedBytes))}` : "",
            Lp = (0, Up.d)();
          null === Lp && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const Yp = new Error((0, yp.c)(pp, cp, ip));
          if (pp instanceof Error && void 0 !== pp.stack) {
            const ip = pp.stack.split("\n"),
              cp = ip.length > vp ? [...ip.slice(0, vp / 2), ...ip.slice(-vp / 2)] : ip;
            Yp.stack = cp.join("\n")
          }(0, Pp.reportClientError)("wasm_load", Yp, `wasm_call_${Ip}_${null!==Lp&&void 0!==Lp?Lp:"unnamed"}_m${Sp}${xp}`)
        }))), (0, Sp.O)(Ip.d.url()) && (0, xp.reportCappedWasmFailure)("wasm_load", Yp.b.message, Yp.b.code), !0;
        const tp = Dp.d[null !== (ip = (0, op.r)()) && void 0 !== ip ? ip : "call"];
        return (0, Lp.i)(tp, Op), qp(tp, (0, op.i)()), !1
      }
    }

    function qp(pp, ip) {
      (0, Dp.j)(Hp, `Bloxd wasm ${pp}, so the game can't start: ${ip}`, ip, pp)
    }
  },
  36484: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp,
      d: () => Yp,
      e: () => Sp,
      h: () => Ap
    });
    var Op = cp(36472),
      op = cp(10);
    const Ip = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Sp(pp) {
      if (pp instanceof WebAssembly.RuntimeError) return !0;
      const ip = pp instanceof Error ? pp.stack : void 0;
      return "string" === typeof ip && Ip.test(ip)
    }

    function xp(pp, ip, cp) {
      var op;
      const Sp = pp instanceof Error ? pp.name : "thrown",
        xp = (pp instanceof Error && null !== (op = pp.stack) && void 0 !== op ? op : "").split("\n").filter((pp => Ip.test(pp))).slice(0, 8).map((pp => pp.trim())),
        Lp = null === ip ? "wasm memory unknown" : `wasm memory ${Math.round(ip/2**20)} MB`,
        Yp = null === cp.panic ? "" : `, panic: ${(0,Op.j)(cp.panic)}`,
        Dp = `${Sp}: ${pp instanceof Error?pp.message:String(pp)}`;
      return `${(0,Op.q)(cp.kind,cp.refusedBytes)} ${Dp} (${Lp})${Yp}${xp.length>0?` | ${xp.join(" < ")}`:""}`
    }
    const Lp = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function Yp(pp) {
      var ip;
      let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(pp instanceof Error) || !Lp.test(pp.message)) return {};
      if (!("detached" in cp)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, op.V)(null === (ip = (0, op.N)(cp, "detached")) || void 0 === ip ? void 0 : ip.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const Dp = 500;

    function Ap(pp) {
      let ip = "[object Object]";
      try {
        ip = String(pp)
      } catch {}
      if ("[object Object]" !== ip) return ip;
      try {
        var cp, Op;
        return null !== (cp = null === (Op = JSON.stringify(pp)) || void 0 === Op ? void 0 : Op.slice(0, Dp)) && void 0 !== cp ? cp : ip
      } catch {
        return ip
      }
    }
  },
  36521: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/bloxd_wasm_bg.f1177b9ed1fe02dfded8.wasm"
  },
  36503: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/bloxd_wasm_textures_bg.d7d41d4f0bb8769a2dc8.wasm"
  },
  36514: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      YA: () => Op,
      EnvelopeKind: () => op,
      DA: () => Ip,
      PhysicsEngine: () => Sp,
      AA: () => xp,
      PA: () => Lp,
      WA: () => Yp,
      yA: () => Dp,
      UA: () => Ap,
      wA: () => Pp,
      vA: () => Wp,
      tA: () => yp,
      HA: () => Up,
      dA: () => wp,
      default: () => mi,
      initSync: () => ki,
      eA: () => vp,
      uA: () => tp,
      jA: () => Hp,
      kA: () => dp,
      mA: () => ep,
      RA: () => jp,
      qA: () => kp,
      MA: () => mp,
      CA: () => Rp,
      EA: () => qp,
      XA: () => Mp,
      lA: () => Cp,
      QA: () => Ep,
      JA: () => Xp,
      BA: () => lp
    });
    class Op {
      __destroy_into_raw() {
        const pp = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Jp.unregister(this), pp
      }
      free() {
        const pp = this.__destroy_into_raw();
        ei.IDrP(pp, 0)
      }
      NA() {
        const pp = ei.XmLx(this.__wbg_ptr);
        if (pp[2]) throw yi(pp[1]);
        return pp[0] >>> 0
      }
      TA() {
        return ei.Cmsp(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const pp = ei.c81B();
        return this.__wbg_ptr = pp, Jp.register(this, this.__wbg_ptr, this), this
      }
      fA() {
        return ei.gAJY(this.__wbg_ptr) >>> 0
      }
      bA(pp) {
        const ip = ei.lvay(this.__wbg_ptr, pp);
        if (ip[2]) throw yi(ip[1]);
        return ip[0] >>> 0
      }
      hA(pp) {
        const ip = ei.nxAT(this.__wbg_ptr, pp);
        if (ip[2]) throw yi(ip[1]);
        return ip[0] >>> 0
      }
    }
    Symbol.dispose && (Op.prototype[Symbol.dispose] = Op.prototype.free);
    const op = Object.freeze({
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
    class Ip {
      __destroy_into_raw() {
        const pp = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Bp.unregister(this), pp
      }
      free() {
        const pp = this.__destroy_into_raw();
        ei.sCD5(pp, 0)
      }
      FA(pp, ip) {
        const cp = ei.Hsfz(this.__wbg_ptr, pp, ip);
        if (cp[2]) throw yi(cp[1]);
        return cp[0] >>> 0
      }
      gA(pp) {
        const ip = ei.a4EF(this.__wbg_ptr, pp);
        if (ip[2]) throw yi(ip[1]);
        return ip[0] >>> 0
      }
      rA() {
        ei.TvHg(this.__wbg_ptr)
      }
      static ZA() {
        return ei.TwWo() >>> 0
      }
      zA() {
        return ei.SGX6(this.__wbg_ptr) >>> 0
      }
      sA() {
        const pp = ei.zS07(this.__wbg_ptr);
        return 0 === pp[0] ? void 0 : pp[1]
      }
      KA() {
        return ei.EPnH(this.__wbg_ptr) >>> 0
      }
      VA() {
        return ei.Bl6O(this.__wbg_ptr) >>> 0
      }
      static nA() {
        return ei.fQpl() >>> 0
      }
      constructor() {
        const pp = ei.EBXo();
        return this.__wbg_ptr = pp, Bp.register(this, this.__wbg_ptr, this), this
      }
      pP() {
        return ei.pOHX(this.__wbg_ptr) >>> 0
      }
      iP() {
        return ei.NZX5(this.__wbg_ptr) >>> 0
      }
      cP() {
        return ei.Eo8Q(this.__wbg_ptr) >>> 0
      }
      aA(pp) {
        return ei.sx92(this.__wbg_ptr, pp) >>> 0
      }
      reserve(pp, ip) {
        const cp = ei.w0NV(this.__wbg_ptr, pp, ip);
        if (cp[1]) throw yi(cp[0])
      }
      IP(pp, ip) {
        const cp = Di(pp, ei.OTfo),
          Op = ui;
        ei.KciM(this.__wbg_ptr, cp, Op, ip)
      }
      text() {
        let pp, ip;
        try {
          const cp = ei.Kfw9(this.__wbg_ptr);
          return pp = cp[0], ip = cp[1], Kp(cp[0], cp[1])
        } finally {
          ei.ie3R(pp, ip, 1)
        }
      }
    }
    Symbol.dispose && (Ip.prototype[Symbol.dispose] = Ip.prototype.free);
    class Sp {
      __destroy_into_raw() {
        const pp = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Np.unregister(this), pp
      }
      free() {
        const pp = this.__destroy_into_raw();
        ei.Xs0g(pp, 0)
      }
      xP(pp, ip) {
        Fp(ip, Op);
        const cp = ei.hsi7(this.__wbg_ptr, pp, ip.__wbg_ptr);
        if (cp[2]) throw yi(cp[1]);
        return cp[0] >>> 0
      }
      YP() {
        const pp = ei.aaLr(this.__wbg_ptr);
        if (pp[1]) throw yi(pp[0])
      }
      yP(pp, ip, cp, Op, op, Ip, Sp, Lp, Yp, Dp, Ap) {
        Fp(pp, xp);
        const Pp = ei.zg87(this.__wbg_ptr, pp.__wbg_ptr, ip, cp, Op, op, Ip, Sp, Lp, Yp, Dp, Ap);
        if (Pp[2]) throw yi(Pp[1]);
        return Pp[0]
      }
      UP() {
        const pp = ei.Fxbb(this.__wbg_ptr);
        var ip = gp(pp[0], pp[1]).slice();
        return ei.ie3R(pp[0], 8 * pp[1], 8), ip
      }
      wP() {
        return ei.vF3g(this.__wbg_ptr) >>> 0
      }
      vP() {
        return ei.JUpI(this.__wbg_ptr) >>> 0
      }
      tP() {
        return ei.H5Bb(this.__wbg_ptr) >>> 0
      }
      constructor(pp, ip, cp, Op, op, Ip, Sp, xp) {
        const Lp = ei.JNyl(pp, ip, cp, Op, op, Ip, Sp, xp);
        if (Lp[2]) throw yi(Lp[1]);
        return this.__wbg_ptr = Lp[0], Np.register(this, this.__wbg_ptr, this), this
      }
      eP(pp) {
        Fp(pp, Op);
        const ip = ei.c9Z2(this.__wbg_ptr, pp.__wbg_ptr);
        if (ip[2]) throw yi(ip[1]);
        return ip[0] >>> 0
      }
      uP(pp) {
        const ip = ei.afUv(this.__wbg_ptr, pp);
        if (ip[1]) throw yi(ip[0])
      }
      jP() {
        return ei.IVnx(this.__wbg_ptr) >>> 0
      }
      resume(pp, ip) {
        Fp(pp, xp), Fp(ip, Op);
        const cp = ei.eM96(this.__wbg_ptr, pp.__wbg_ptr, ip.__wbg_ptr);
        if (cp[2]) throw yi(cp[1]);
        return cp[0] >>> 0
      }
      MP(pp) {
        const ip = ei.yG3E(this.__wbg_ptr, pp);
        if (ip[1]) throw yi(ip[0])
      }
      XP(pp, ip) {
        Fp(ip, Op);
        const cp = ei.aHcd(this.__wbg_ptr, pp, ip.__wbg_ptr);
        if (cp[1]) throw yi(cp[0])
      }
      JP(pp) {
        const ip = Pi(pp, ei.OTfo),
          cp = ui,
          Op = ei.qV3B(this.__wbg_ptr, ip, cp);
        if (Op[1]) throw yi(Op[0])
      }
      AP(pp, ip, cp, Op, op, Ip) {
        const Sp = ei.Fl5g(this.__wbg_ptr, pp, ip, cp, Op, op, Ip);
        if (Sp[1]) throw yi(Sp[0])
      }
      PP(pp, ip, cp, Op) {
        const op = Di(pp, ei.OTfo),
          Ip = ui,
          Sp = Pi(ip, ei.OTfo),
          xp = ui,
          Lp = Pi(cp, ei.OTfo),
          Yp = ui,
          Dp = Pi(Op, ei.OTfo),
          Ap = ui,
          Pp = ei.psj4(this.__wbg_ptr, op, Ip, Sp, xp, Lp, Yp, Dp, Ap);
        if (Pp[1]) throw yi(Pp[0])
      }
      NP(pp, ip) {
        Fp(ip, Op);
        const cp = ei.xs4I(this.__wbg_ptr, pp, ip.__wbg_ptr);
        if (cp[1]) throw yi(cp[0])
      }
      dP(pp, ip, cp) {
        const Op = ei.L1Mw(this.__wbg_ptr, pp, ip, cp);
        if (Op[1]) throw yi(Op[0])
      }
      fP(pp, ip, cp, Op, op, Ip, Sp, Lp, Yp, Dp) {
        Fp(pp, xp);
        return ei.VXbG(this.__wbg_ptr, pp.__wbg_ptr, ip, cp, Op, op, Ip, Sp, Lp, Yp, Dp)
      }
    }
    Symbol.dispose && (Sp.prototype[Symbol.dispose] = Sp.prototype.free);
    class xp {
      static __wrap(pp) {
        const ip = Object.create(xp.prototype);
        return ip.__wbg_ptr = pp, Tp.register(ip, ip.__wbg_ptr, ip), ip
      }
      __destroy_into_raw() {
        const pp = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Tp.unregister(this), pp
      }
      free() {
        const pp = this.__destroy_into_raw();
        ei.Isb8(pp, 0)
      }
      aP(pp) {
        const ip = ei.kqns(this.__wbg_ptr, pp);
        if (ip[2]) throw yi(ip[1]);
        return ip[0] >>> 0
      }
      nP(pp, ip, cp) {
        return ei.KnWj(this.__wbg_ptr, pp, ip, cp)
      }
      FP(pp, ip, cp) {
        return ei.Rsg1(this.__wbg_ptr, pp, ip, cp) >>> 0
      }
      gP(pp, ip, cp, Op) {
        return 0 !== ei.z9La(this.__wbg_ptr, pp, ip, cp, Op)
      }
      GP() {
        ei.qslF(this.__wbg_ptr)
      }
      ZP(pp) {
        const ip = ei.JMeJ(this.__wbg_ptr, pp);
        if (ip[3]) throw yi(ip[2]);
        var cp = rp(ip[0], ip[1]).slice();
        return ei.ie3R(ip[0], 1 * ip[1], 1), cp
      }
      evict(pp, ip) {
        return ei.WFbt(this.__wbg_ptr, pp, ip) >>> 0
      }
      zP() {
        ei.kRF6(this.__wbg_ptr)
      }
      sP(pp, ip, cp) {
        ei.T0ZT(this.__wbg_ptr, pp, ip, cp)
      }
      KP(pp) {
        const ip = ei.gtA8(this.__wbg_ptr, pp);
        if (ip[1]) throw yi(ip[0])
      }
      VP() {
        return ei.OKTI(this.__wbg_ptr) >>> 0
      }
      pW() {
        return ei.ftcz(this.__wbg_ptr) >>> 0
      }
      iW(pp, ip, cp) {
        ei.RUSN(this.__wbg_ptr, pp, ip, cp)
      }
      cW(pp, ip, cp) {
        ei.O6La(this.__wbg_ptr, pp, ip, cp)
      }
      OW() {
        return ei.c5RI(this.__wbg_ptr) >>> 0
      }
      oW() {
        return ei.syYZ(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const pp = ei.Ncp6();
        return this.__wbg_ptr = pp, Tp.register(this, this.__wbg_ptr, this), this
      }
      static IW() {
        const pp = ei.FIPT();
        return xp.__wrap(pp)
      }
      SW() {
        return ei.WpCl(this.__wbg_ptr) >>> 0
      }
      xW() {
        return ei.jRiJ(this.__wbg_ptr) >>> 0
      }
      LW(pp, ip, cp, Op) {
        const op = ei.JOl8(this.__wbg_ptr, pp, ip, cp, Op);
        if (op[1]) throw yi(op[0])
      }
      YW() {
        return ei.bm75(this.__wbg_ptr) >>> 0
      }
      DW() {
        return ei.RpE9(this.__wbg_ptr) >>> 0
      }
      AW(pp, ip, cp, Op) {
        ei.dEmp(this.__wbg_ptr, pp, ip, cp, Op)
      }
      PW(pp) {
        ei.REDH(this.__wbg_ptr, pp)
      }
      yW(pp, ip, cp, Op, op) {
        const Ip = Ai(ip, ei.OTfo),
          Sp = ui,
          xp = Di(cp, ei.OTfo),
          Lp = ui,
          Yp = Pi(Op, ei.OTfo),
          Dp = ui,
          Ap = ei.AOZm(this.__wbg_ptr, pp, Ip, Sp, xp, Lp, Yp, Dp, op);
        if (Ap[1]) throw yi(Ap[0])
      }
      WW(pp, ip, cp, Op) {
        const op = Ai(pp, ei.OTfo),
          Ip = ui,
          Sp = Di(ip, ei.OTfo),
          xp = ui,
          Lp = Pi(cp, ei.OTfo),
          Yp = ui,
          Dp = Ai(Op, ei.OTfo),
          Ap = ui,
          Pp = ei.fvRJ(this.__wbg_ptr, op, Ip, Sp, xp, Lp, Yp, Dp, Ap);
        if (Pp[1]) throw yi(Pp[0])
      }
      dW(pp) {
        const ip = Ai(pp, ei.OTfo),
          cp = ui,
          Op = ei.Y6Fy(this.__wbg_ptr, ip, cp);
        if (Op[1]) throw yi(Op[0])
      }
      eW() {
        return ei.kgbt(this.__wbg_ptr) >>> 0
      }
      uW(pp) {
        const ip = ei.csWN(this.__wbg_ptr, pp);
        if (ip[2]) throw yi(ip[1]);
        return ip[0] >>> 0
      }
      steer() {
        return ei.jbwG(this.__wbg_ptr) >>> 0
      }
      jW() {
        const pp = ei.qGzc(this.__wbg_ptr);
        var ip = gp(pp[0], pp[1]).slice();
        return ei.ie3R(pp[0], 8 * pp[1], 8), ip
      }
      kW() {
        return ei.yXGG(this.__wbg_ptr) >>> 0
      }
      mP() {
        const pp = ei.ZIrb(this.__wbg_ptr);
        var ip, cp, Op = (ip = pp[0], cp = pp[1], ip >>>= 0, (null !== sp && 0 !== sp.byteLength || (sp = new Int32Array(ei.memory.buffer)), sp).subarray(ip / 4, ip / 4 + cp)).slice();
        return ei.ie3R(pp[0], 4 * pp[1], 4), Op
      }
    }
    Symbol.dispose && (xp.prototype[Symbol.dispose] = xp.prototype.free);
    class Lp {
      __destroy_into_raw() {
        const pp = this.__wbg_ptr;
        return this.__wbg_ptr = 0, fp.unregister(this), pp
      }
      free() {
        const pp = this.__destroy_into_raw();
        ei.v6vr(pp, 0)
      }
      mW(pp) {
        const ip = Di(pp, ei.OTfo),
          cp = ui,
          Op = ei.sRnv(this.__wbg_ptr, ip, cp);
        if (Op[1]) throw yi(Op[0])
      }
      RW() {
        return ei.Ow3L(this.__wbg_ptr) >>> 0
      }
      qW() {
        return ei.FHNl(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const pp = ei.ZMog();
        return this.__wbg_ptr = pp, fp.register(this, this.__wbg_ptr, this), this
      }
      run(pp, ip) {
        Fp(pp, xp);
        const cp = ei.WcW3(this.__wbg_ptr, pp.__wbg_ptr, ip);
        if (cp[2]) throw yi(cp[1]);
        return cp[0] >>> 0
      }
      MW(pp) {
        const ip = Di(pp, ei.OTfo),
          cp = ui;
        ei.llyj(this.__wbg_ptr, ip, cp)
      }
      EW(pp) {
        const ip = Di(pp, ei.OTfo),
          cp = ui;
        ei.Sj6X(this.__wbg_ptr, ip, cp)
      }
    }
    Symbol.dispose && (Lp.prototype[Symbol.dispose] = Lp.prototype.free);
    class Yp {
      __destroy_into_raw() {
        const pp = this.__wbg_ptr;
        return this.__wbg_ptr = 0, bp.unregister(this), pp
      }
      free() {
        const pp = this.__destroy_into_raw();
        ei.rAux(pp, 0)
      }
      lW(pp, ip) {
        const cp = Ai(pp, ei.OTfo),
          Op = ui;
        return ei.J4qd(this.__wbg_ptr, cp, Op, ip) >>> 0
      }
      QW(pp, ip, cp) {
        Fp(pp, xp);
        const Op = Ai(cp, ei.OTfo),
          op = ui,
          Ip = ei.bbJh(this.__wbg_ptr, pp.__wbg_ptr, ip, Op, op);
        if (Ip[2]) throw yi(Ip[1]);
        return Ip[0] >>> 0
      }
      XW(pp) {
        return ei.i5nI(this.__wbg_ptr, pp) >>> 0
      }
      constructor() {
        const pp = ei.oCrM();
        return this.__wbg_ptr = pp, bp.register(this, this.__wbg_ptr, this), this
      }
      scan(pp, ip) {
        Fp(pp, xp);
        const cp = ei.sr76(this.__wbg_ptr, pp.__wbg_ptr, ip);
        if (cp[2]) throw yi(cp[1]);
        return cp[0] >>> 0
      }
      NW(pp) {
        const ip = Ai(pp, ei.OTfo),
          cp = ui;
        ei.Eju2(this.__wbg_ptr, ip, cp)
      }
      BW() {
        return ei.oIe8(this.__wbg_ptr) >>> 0
      }
      JW() {
        return ei.GHlD(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Yp.prototype[Symbol.dispose] = Yp.prototype.free);
    class Dp {
      __destroy_into_raw() {
        const pp = this.__wbg_ptr;
        return this.__wbg_ptr = 0, hp.unregister(this), pp
      }
      free() {
        const pp = this.__destroy_into_raw();
        ei.qRwv(pp, 0)
      }
      fW(pp) {
        const ip = ei.dxpd(this.__wbg_ptr, pp);
        if (ip[2]) throw yi(ip[1]);
        return ip[0] >>> 0
      }
      compute(pp, ip, cp, Op) {
        var op = Li(Op) ? 0 : Wi(Op, ei.OTfo, ei.eB4D),
          Ip = ui;
        const Sp = ei.F0Vb(this.__wbg_ptr, pp, Li(ip) ? Number.MAX_SAFE_INTEGER : ip | 0, cp, op, Ip);
        if (Sp[2]) throw yi(Sp[1]);
        return Sp[0] >>> 0
      }
      hW(pp) {
        const ip = Wi(pp, ei.OTfo, ei.eB4D),
          cp = ui;
        ei.i7ky(this.__wbg_ptr, ip, cp)
      }
      nW() {
        return ei.TbU9(this.__wbg_ptr)
      }
      FW(pp) {
        return ei.Tq2N(this.__wbg_ptr, pp) >>> 0
      }
      gW() {
        return ei.cRYM(this.__wbg_ptr) >>> 0
      }
      GW() {
        return ei.BOn9(this.__wbg_ptr) >>> 0
      }
      rW(pp, ip) {
        const cp = ei.gmt6(this.__wbg_ptr, pp, ip);
        if (cp[1]) throw yi(cp[0])
      }
      ZW() {
        return ei.Z8HW(this.__wbg_ptr) >>> 0
      }
      zW() {
        return ei.Bw7z(this.__wbg_ptr) >>> 0
      }
      sW() {
        return ei.TRce(this.__wbg_ptr) >>> 0
      }
      bW(pp, ip, cp) {
        const Op = Di(pp, ei.OTfo),
          op = ui,
          Ip = Di(ip, ei.OTfo),
          Sp = ui,
          xp = ei.XPNK(this.__wbg_ptr, Op, op, Ip, Sp, cp);
        if (xp[1]) throw yi(xp[0])
      }
      VW() {
        return ei.F0Np(this.__wbg_ptr) >>> 0
      }
      mesh(pp, ip, cp, Op, op) {
        const Ip = ei.yVjJ(this.__wbg_ptr, pp, ip, cp, Op, op);
        if (Ip[2]) throw yi(Ip[1]);
        return Ip[0] >>> 0
      }
      constructor(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp, vp, tp, Hp) {
        const dp = Yi(pp, ei.OTfo),
          ep = ui,
          jp = Pi(ip, ei.OTfo),
          kp = ui,
          mp = Di(cp, ei.OTfo),
          Rp = ui,
          qp = Ai(Op, ei.OTfo),
          Mp = ui,
          Cp = Ai(op, ei.OTfo),
          Ep = ui,
          Xp = Di(Ip, ei.OTfo),
          lp = ui,
          Qp = Di(Sp, ei.OTfo),
          Jp = ui,
          Bp = Pi(xp, ei.OTfo),
          Np = ui,
          Tp = Pi(Lp, ei.OTfo),
          fp = ui,
          bp = Ai(Yp, ei.OTfo),
          ap = ui;
        var np = Li(Dp) ? 0 : Yi(Dp, ei.OTfo),
          Fp = ui;
        const gp = Di(Ap, ei.OTfo),
          Gp = ui,
          rp = Ai(Pp, ei.OTfo),
          Zp = ui;
        var zp = Li(Wp) ? 0 : Ai(Wp, ei.OTfo),
          sp = ui;
        const Kp = Pi(yp, ei.OTfo),
          Vp = ui,
          ii = ei.RU8g(dp, ep, jp, kp, mp, Rp, qp, Mp, Cp, Ep, Xp, lp, Qp, Jp, Bp, Np, Tp, fp, bp, ap, np, Fp, gp, Gp, rp, Zp, zp, sp, Kp, Vp, Up, wp, vp, tp, Hp);
        if (ii[2]) throw yi(ii[1]);
        return this.__wbg_ptr = ii[0], hp.register(this, this.__wbg_ptr, this), this
      }
      KW(pp, ip) {
        const cp = Di(pp, ei.OTfo),
          Op = ui,
          op = ei.SrtM(this.__wbg_ptr, cp, Op, ip);
        if (op[3]) throw yi(op[2]);
        var Ip = rp(op[0], op[1]).slice();
        return ei.ie3R(op[0], 1 * op[1], 1), Ip
      }
      py(pp) {
        ei.cNRp(this.__wbg_ptr, Li(pp) ? 16777215 : pp)
      }
      iy(pp) {
        return ei.gKJH(this.__wbg_ptr, pp) >>> 0
      }
      Iy() {
        return ei.k0vJ(this.__wbg_ptr) >>> 0
      }
      Oy() {
        const pp = ei.C4sF(this.__wbg_ptr);
        if (pp[2]) throw yi(pp[1]);
        return 0 !== pp[0]
      }
      Sy() {
        return ei.ot1f(this.__wbg_ptr) >>> 0
      }
      xy() {
        return ei.ZerV(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Dp.prototype[Symbol.dispose] = Dp.prototype.free);
    class Ap {
      __destroy_into_raw() {
        const pp = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ap.unregister(this), pp
      }
      free() {
        const pp = this.__destroy_into_raw();
        ei.Fsri(pp, 0)
      }
      compute(pp, ip, cp, Op) {
        var op = Li(Op) ? 0 : Wi(Op, ei.OTfo, ei.eB4D),
          Ip = ui;
        const Sp = ei.GP3T(this.__wbg_ptr, pp, Li(ip) ? Number.MAX_SAFE_INTEGER : ip | 0, cp, op, Ip);
        if (Sp[2]) throw yi(Sp[1]);
        return Sp[0] >>> 0
      }
      hW(pp) {
        const ip = Wi(pp, ei.OTfo, ei.eB4D),
          cp = ui;
        ei.ysnG(this.__wbg_ptr, ip, cp)
      }
      zW() {
        return ei.r1lI(this.__wbg_ptr) >>> 0
      }
      sW() {
        return ei.fkwr(this.__wbg_ptr) >>> 0
      }
      Ly(pp) {
        const ip = ei.Ue9s(this.__wbg_ptr, pp);
        if (ip[2]) throw yi(ip[1]);
        return ip[0] >>> 0
      }
      constructor(pp, ip, cp, Op, op, Ip) {
        const Sp = Yi(pp, ei.OTfo),
          xp = ui,
          Lp = Pi(ip, ei.OTfo),
          Yp = ui,
          Dp = Di(cp, ei.OTfo),
          Ap = ui,
          Pp = Ai(Op, ei.OTfo),
          Wp = ui,
          yp = ei.BL2M(Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, op, Ip);
        if (yp[2]) throw yi(yp[1]);
        return this.__wbg_ptr = yp[0], ap.register(this, this.__wbg_ptr, this), this
      }
      Iy() {
        return ei.IUXB(this.__wbg_ptr) >>> 0
      }
      Oy() {
        const pp = ei.joVL(this.__wbg_ptr);
        if (pp[2]) throw yi(pp[1]);
        return 0 !== pp[0]
      }
      Sy() {
        return ei.szOR(this.__wbg_ptr) >>> 0
      }
    }

    function Pp() {
      const pp = ei.CXEs();
      var ip = Gp(pp[0], pp[1]).slice();
      return ei.ie3R(pp[0], 4 * pp[1], 4), ip
    }

    function Wp(pp, ip) {
      let cp, Op;
      try {
        const op = Yi(pp, ei.OTfo),
          Ip = ui,
          Sp = Wi(ip, ei.OTfo, ei.eB4D),
          xp = ui,
          Lp = ei.wDxd(op, Ip, Sp, xp);
        return cp = Lp[0], Op = Lp[1], Kp(Lp[0], Lp[1])
      } finally {
        ei.ie3R(cp, Op, 1)
      }
    }

    function yp() {
      const pp = ei.aKO2();
      var ip = Gp(pp[0], pp[1]).slice();
      return ei.ie3R(pp[0], 4 * pp[1], 4), ip
    }

    function Up(pp) {
      return 0 !== ei.tywj(pp)
    }

    function wp(pp, ip) {
      const cp = Wi(pp, ei.OTfo, ei.eB4D),
        Op = ui,
        op = ei.yNNu(cp, Op, ip);
      if (op[1]) throw yi(op[0])
    }

    function vp() {
      ei.QQdP()
    }

    function tp() {
      return ei.YS8X() >>> 0
    }

    function Hp(pp) {
      return 0 !== ei.ICS5(pp)
    }

    function dp(pp) {
      return 0 !== ei.og2A(pp)
    }

    function ep(pp) {
      ei.HU7F(pp)
    }

    function jp() {
      return ei.QMSK() >>> 0
    }

    function kp() {
      return ei.FuNC() >>> 0
    }

    function mp() {
      return 0 !== ei.JY57()
    }

    function Rp() {
      const pp = ei.gDvG();
      var ip = Gp(pp[0], pp[1]).slice();
      return ei.ie3R(pp[0], 4 * pp[1], 4), ip
    }

    function qp() {
      const pp = ei.ffsu();
      var ip = Gp(pp[0], pp[1]).slice();
      return ei.ie3R(pp[0], 4 * pp[1], 4), ip
    }

    function Mp() {
      const pp = ei.vrbF();
      var ip = Gp(pp[0], pp[1]).slice();
      return ei.ie3R(pp[0], 4 * pp[1], 4), ip
    }

    function Cp() {
      return ei.hMwG() >>> 0
    }

    function Ep() {
      ei.B9aB()
    }

    function Xp() {
      let pp, ip;
      try {
        const cp = ei.w8XH();
        return pp = cp[0], ip = cp[1], Kp(cp[0], cp[1])
      } finally {
        ei.ie3R(pp, ip, 1)
      }
    }

    function lp(pp) {
      ei.fptS(np(pp))
    }

    function Qp() {
      return {
        __proto__: null,
        WViy: {
          __proto__: null,
          Ctp7: function(pp, ip) {
            return np(Error(Kp(pp, ip)))
          },
          VmwI: function(pp, ip) {
            throw new Error(Kp(pp, ip))
          },
          HFlW: function(pp) {
            Ii(pp).call()
          },
          ytYQ: function(pp, ip) {
            console.error(Kp(pp, ip))
          },
          Au4g: function() {
            return performance.now()
          },
          JqI8: function(pp) {
            yi(pp)
          }
        }
      }
    }
    Symbol.dispose && (Ap.prototype[Symbol.dispose] = Ap.prototype.free);
    const Jp = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((pp => ei.IDrP(pp, 1))),
      Bp = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((pp => ei.sCD5(pp, 1))),
      Np = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((pp => ei.Xs0g(pp, 1))),
      Tp = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((pp => ei.Isb8(pp, 1))),
      fp = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((pp => ei.v6vr(pp, 1))),
      bp = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((pp => ei.rAux(pp, 1))),
      hp = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((pp => ei.qRwv(pp, 1))),
      ap = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((pp => ei.Fsri(pp, 1)));

    function np(pp) {
      xi === Si.length && Si.push(Si.length + 1);
      const ip = xi;
      return xi = Si[ip], Si[ip] = pp, ip
    }

    function Fp(pp, ip) {
      if (!(pp instanceof ip)) throw new Error(`expected instance of ${ip.name}`)
    }

    function gp(pp, ip) {
      return pp >>>= 0, zp().subarray(pp / 8, pp / 8 + ip)
    }

    function Gp(pp, ip) {
      return pp >>>= 0, ci().subarray(pp / 4, pp / 4 + ip)
    }

    function rp(pp, ip) {
      return pp >>>= 0, oi().subarray(pp / 1, pp / 1 + ip)
    }
    let Zp = null;

    function zp() {
      return null !== Zp && 0 !== Zp.byteLength || (Zp = new Float64Array(ei.memory.buffer)), Zp
    }
    let sp = null;

    function Kp(pp, ip) {
      return function(pp, ip) {
        vi += ip, vi >= wi && (Ui = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Ui.decode(), vi = ip);
        return Ui.decode(oi().subarray(pp, pp + ip))
      }(pp >>> 0, ip)
    }
    let Vp = null;
    let ii = null;

    function ci() {
      return null !== ii && 0 !== ii.byteLength || (ii = new Uint32Array(ei.memory.buffer)), ii
    }
    let Oi = null;

    function oi() {
      return null !== Oi && 0 !== Oi.byteLength || (Oi = new Uint8Array(ei.memory.buffer)), Oi
    }

    function Ii(pp) {
      return Si[pp]
    }
    let Si = new Array(1024).fill(void 0);
    Si.push(void 0, null, !0, !1);
    let xi = Si.length;

    function Li(pp) {
      return void 0 === pp || null === pp
    }

    function Yi(pp, ip) {
      const cp = ip(2 * pp.length, 2) >>> 0;
      return (null !== Vp && 0 !== Vp.byteLength || (Vp = new Uint16Array(ei.memory.buffer)), Vp).set(pp, cp / 2), ui = pp.length, cp
    }

    function Di(pp, ip) {
      const cp = ip(4 * pp.length, 4) >>> 0;
      return ci().set(pp, cp / 4), ui = pp.length, cp
    }

    function Ai(pp, ip) {
      const cp = ip(1 * pp.length, 1) >>> 0;
      return oi().set(pp, cp / 1), ui = pp.length, cp
    }

    function Pi(pp, ip) {
      const cp = ip(8 * pp.length, 8) >>> 0;
      return zp().set(pp, cp / 8), ui = pp.length, cp
    }

    function Wi(pp, ip, cp) {
      if (void 0 === cp) {
        const cp = ti.encode(pp),
          Op = ip(cp.length, 1) >>> 0;
        return oi().subarray(Op, Op + cp.length).set(cp), ui = cp.length, Op
      }
      let Op = pp.length,
        op = ip(Op, 1) >>> 0;
      const Ip = oi();
      let Sp = 0;
      for (; Sp < Op; Sp++) {
        const ip = pp.charCodeAt(Sp);
        if (ip > 127) break;
        Ip[op + Sp] = ip
      }
      if (Sp !== Op) {
        0 !== Sp && (pp = pp.slice(Sp)), op = cp(op, Op, Op = Sp + 3 * pp.length, 1) >>> 0;
        const ip = oi().subarray(op + Sp, op + Op);
        Sp += ti.encodeInto(pp, ip).written, op = cp(op, Op, Sp, 1) >>> 0
      }
      return ui = Sp, op
    }

    function yi(pp) {
      const ip = Ii(pp);
      return function(pp) {
        pp < 1028 || (Si[pp] = xi, xi = pp)
      }(pp), ip
    }
    let Ui = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Ui.decode();
    const wi = 2146435072;
    let vi = 0;
    const ti = new TextEncoder;
    "encodeInto" in ti || (ti.encodeInto = function(pp, ip) {
      const cp = ti.encode(pp);
      return ip.set(cp), {
        read: pp.length,
        written: cp.length
      }
    });
    let Hi, di, ei, ui = 0;

    function ji(pp, ip) {
      return di = pp, ei = pp.exports, Hi = ip, Zp = null, sp = null, Vp = null, ii = null, Oi = null, ei.wOtu(), ei
    }

    function ki(pp) {
      if (void 0 !== ei) return ei;
      void 0 !== pp && (Object.getPrototypeOf(pp) === Object.prototype ? ({
        module: pp
      } = pp) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ip = Qp();
      pp instanceof WebAssembly.Module || (pp = new WebAssembly.Module(pp));
      return ji(new WebAssembly.Instance(pp, ip), pp)
    }
    async function mi(pp) {
      if (void 0 !== ei) return ei;
      void 0 !== pp && (Object.getPrototypeOf(pp) === Object.prototype ? ({
        module_or_path: pp
      } = pp) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ip = Qp();
      ("string" === typeof pp || "function" === typeof Request && pp instanceof Request || "function" === typeof URL && pp instanceof URL) && (pp = fetch(pp));
      const {
        instance: cp,
        module: Op
      } = await async function(pp, ip) {
        if ("function" === typeof Response && pp instanceof Response) {
          if (!pp.ok) throw new Error(`failed to fetch Wasm: ${pp.status} ${pp.statusText} fetching '${pp.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(pp, ip)
          } catch (cp) {
            if (! function(pp) {
                switch (pp) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(pp.type) || "application/wasm" === pp.headers.get("Content-Type")) throw cp;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", cp)
          }
          const Op = await pp.arrayBuffer();
          return await WebAssembly.instantiate(Op, ip)
        } {
          const cp = await WebAssembly.instantiate(pp, ip);
          return cp instanceof WebAssembly.Instance ? {
            instance: cp,
            module: pp
          } : cp
        }
      }(await pp, ip);
      return ji(cp, Op)
    }
  },
  36506: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Sp,
      e: () => xp,
      g: () => Lp
    });
    var Op = cp(36514),
      op = cp(2963),
      Ip = cp(36519);
    const Sp = {
      name: op.d,
      url: () => new cp.U(cp(36521)),
      init: Op.default,
      bindings: Op
    };

    function xp() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp,
        ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sp,
        cp = arguments.length > 2 ? arguments[2] : void 0;
      return (0, Ip.k)(pp, ip, cp)
    }

    function Lp(pp) {
      return (0, op.R)((() => pp), Op, Sp)
    }
  },
  36495: (pp, ip, cp) => {
    function Op(pp, ip) {
      return new Error(`${pp}: ${ip instanceof Error?`${ip.name}: ${ip.message}`:String(ip)}`, {
        cause: ip
      })
    }
    cp.d(ip, {
      c: () => Op
    })
  },
  36486: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Sp,
      g: () => Lp
    });
    var Op = cp(2970),
      op = cp(6762),
      Ip = cp(36495);

    function Sp() {
      return new URL(new cp.U(cp(36503)).href, globalThis.location?.href).href
    }
    let xp = null;

    function Lp() {
      return xp ??= (async () => (0, Op.C)(new URL(Sp()), (0, op.e)("bloxd_wasm_textures")))().catch((pp => {
        throw (0, Ip.c)((0, Op.J)(pp), pp)
      })), xp
    }
  },
  36472: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op,
      h: () => Ip,
      j: () => Lp,
      n: () => Sp,
      q: () => op
    });
    const Op = /^alloc_failed (\d+) bytes$/;

    function op(pp, ip) {
      return Ip(pp, ip) ? `trap=alloc_failed ${ip} bytes` : `trap=${pp}`
    }

    function Ip(pp, ip) {
      return "unreachable" === pp && ip > 0
    }

    function Sp(pp, ip, cp) {
      const Op = function(pp) {
        return pp instanceof WebAssembly.RuntimeError ? /unreachable/i.test(pp.message) ? "unreachable" : /out of bounds/i.test(pp.message) ? "out_of_bounds" : "runtime_error" : (pp instanceof RangeError || pp instanceof Error && "InternalError" === pp.name) && /call stack|recursion/i.test(pp.message) ? "stack_overflow" : "js_error"
      }(pp);
      if ("unreachable" !== Op) return {
        kind: Op,
        panic: null,
        refusedBytes: 0
      };
      const op = ip(),
        Ip = cp();
      return {
        kind: Op,
        panic: Ip > 0 ? null : op,
        refusedBytes: Ip
      }
    }
    const xp = 300;

    function Lp(pp) {
      return pp.replace(/\s*\n\s*/g, " / ").slice(0, xp)
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);