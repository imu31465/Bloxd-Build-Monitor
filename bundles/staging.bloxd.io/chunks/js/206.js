export const id = 206;
export const ids = [206, 207];
export const modules = {
  36163: (uu, Ru, yu) => {
    yu.d(Ru, {
      reportCappedWasmFailure: () => mu,
      reportWasmFailure: () => Qu
    });
    var Eu = yu(3032);
    const Ku = Eu.b - 4;

    function Qu(uu, Ru, yu) {
      (0, Eu.e)(uu, Ru, yu, !1)
    }

    function mu(uu, Ru, yu) {
      (0, Eu.e)(uu, Ru, yu, !1, Ku)
    }
  },
  36155: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Hu,
      f: () => Cu,
      j: () => ku,
      n: () => du
    });
    var Eu = yu(36179),
      Ku = yu(3510),
      Qu = yu(36195),
      mu = yu(3514),
      Ju = yu(36163),
      Nu = yu(2730),
      Xu = yu(3044),
      Vu = yu(3029),
      ru = yu(36170),
      Bu = yu(3032),
      xu = yu(36176);
    let Su = !1;
    const pu = 40;
    var Tu = yu(684);
    const Wu = "bloxdWasmFailureReported";

    function ju() {
      return "undefined" === typeof WebAssembly
    }

    function Hu() {
      return (0, Eu.h)()
    }

    function du() {
      if (ju()) return "this browser has no WebAssembly";
      const uu = (0, Ku.l)();
      return "compile" === uu || "instantiate" === uu ? `the core wasm didn't load here (${(0,Ku.g)()})` : null
    }
    async function bu(uu) {
      return await (0, Qu.g)(Qu.d, void 0, uu)
    }

    function Cu() {
      ju() || (0, Tu.c)((() => {
        bu()
      }))
    }

    function ku() {
      if (ju()) return async () => ((0, Nu.m)("unsupported", 0), eu("unsupported", "This browser has no WebAssembly"), !1);
      const uu = {
        reloadFailedDownload: !0
      };
      return bu(uu), async () => {
        var Ru;
        const yu = performance.now();
        await bu(uu);
        const Eu = (performance.now() - yu) / 1e3;
        if ((0, Ku.N)()) return (0, Nu.m)("ready", Eu), Su || (Su = !0, (0, Ku.S)((() => {
          if ("call" !== (0, Ku.l)()) return;
          const uu = (0, Ku.i)(),
            Ru = (0, ru.m)(uu, Ku.y, Ku.bb),
            yu = (0, Ku.r)().buffer.byteLength,
            Eu = (0, ru.g)(Ru.kind, Ru.refusedBytes) ? "alloc_failed" : Ru.kind,
            Qu = 2 ** Math.floor(Math.log2(Math.max(1, yu / 2 ** 20))),
            mu = new Error((0, xu.d)(uu, yu, Ru));
          if (uu instanceof Error && void 0 !== uu.stack) {
            const Ru = uu.stack.split("\n"),
              yu = Ru.length > pu ? [...Ru.slice(0, pu / 2), ...Ru.slice(-pu / 2)] : Ru;
            mu.stack = yu.join("\n")
          }(0, Bu.e)("wasm_load", mu, `wasm_call_${Eu}_m${Qu}`)
        }))), (0, mu.N)(Qu.d.url()) && (0, Ju.reportCappedWasmFailure)("wasm_load", Xu.e.message, Xu.e.code), !0;
        const Tu = Vu.b[null !== (Ru = (0, Ku.l)()) && void 0 !== Ru ? Ru : "call"];
        return (0, Nu.m)(Tu, Eu), eu(Tu, (0, Ku.g)()), !1
      }
    }

    function eu(uu, Ru) {
      (0, Vu.g)(Wu, `Bloxd wasm ${uu}, so the game can't start: ${Ru}`, Ru, uu)
    }
  },
  36203: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/bloxd_wasm_bg.145972e82eb6a19960e1.wasm"
  },
  36191: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/bloxd_wasm_textures_bg.21b0e25512db77233800.wasm"
  },
  36195: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => MR,
      g: () => IR,
      j: () => GR
    });
    var Eu = {};
    yu.r(Eu), yu.d(Eu, {
      sV: () => Ku,
      EnvelopeKind: () => Qu,
      tV: () => mu,
      PhysicsEngine: () => Ju,
      lV: () => Nu,
      gV: () => Xu,
      cV: () => Vu,
      LV: () => ru,
      zV: () => Bu,
      FV: () => xu,
      wV: () => Su,
      ZV: () => pu,
      hV: () => Tu,
      PV: () => Wu,
      default: () => eR,
      initSync: () => kR,
      iV: () => ju,
      YV: () => Hu,
      oV: () => du,
      qV: () => bu,
      OV: () => Cu,
      vV: () => ku,
      aV: () => eu,
      fV: () => Au,
      ur: () => Du,
      Rr: () => Mu,
      yr: () => Iu,
      Er: () => Gu,
      Kr: () => Uu,
      Qr: () => nu,
      mr: () => su
    });
    class Ku {
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, lu.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        dR.AvmF(uu, 0)
      }
      Jr() {
        const uu = dR.qHfj(this.__wbg_ptr);
        if (uu[2]) throw xR(uu[1]);
        return uu[0] >>> 0
      }
      Nr() {
        return dR.BFkP(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const uu = dR.QpBe();
        return this.__wbg_ptr = uu, lu.register(this, this.__wbg_ptr, this), this
      }
      Xr() {
        return dR.K8Gw(this.__wbg_ptr) >>> 0
      }
      Vr(uu) {
        const Ru = dR.tbTP(this.__wbg_ptr, uu);
        if (Ru[2]) throw xR(Ru[1]);
        return Ru[0] >>> 0
      }
      rr(uu) {
        const Ru = dR.eOi9(this.__wbg_ptr, uu);
        if (Ru[2]) throw xR(Ru[1]);
        return Ru[0] >>> 0
      }
    }
    Symbol.dispose && (Ku.prototype[Symbol.dispose] = Ku.prototype.free);
    const Qu = Object.freeze({
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
    class mu {
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, gu.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        dR.kZcp(uu, 0)
      }
      Tr(uu, Ru) {
        const yu = dR.FxhH(this.__wbg_ptr, uu, Ru);
        if (yu[2]) throw xR(yu[1]);
        return yu[0] >>> 0
      }
      Wr(uu) {
        const Ru = dR.tU6w(this.__wbg_ptr, uu);
        if (Ru[2]) throw xR(Ru[1]);
        return Ru[0] >>> 0
      }
      jr() {
        dR.lRt3(this.__wbg_ptr)
      }
      static Hr() {
        return dR.Pb0k() >>> 0
      }
      dr() {
        return dR.YeEX(this.__wbg_ptr) >>> 0
      }
      br() {
        const uu = dR.XDn6(this.__wbg_ptr);
        return 0 === uu[0] ? void 0 : uu[1]
      }
      Cr() {
        return dR.DIWS(this.__wbg_ptr) >>> 0
      }
      kr() {
        return dR.Eo0F(this.__wbg_ptr) >>> 0
      }
      static Sr() {
        return dR.JBn6() >>> 0
      }
      constructor() {
        const uu = dR.yYg2();
        return this.__wbg_ptr = uu, gu.register(this, this.__wbg_ptr, this), this
      }
      er() {
        return dR.qrbX(this.__wbg_ptr) >>> 0
      }
      Ar() {
        return dR.E0jV(this.__wbg_ptr) >>> 0
      }
      Dr() {
        return dR.L8bD(this.__wbg_ptr) >>> 0
      }
      Br(uu) {
        return dR.O9f0(this.__wbg_ptr, uu) >>> 0
      }
      reserve(uu, Ru) {
        const yu = dR.saV9(this.__wbg_ptr, uu, Ru);
        if (yu[1]) throw xR(yu[0])
      }
      Gr(uu, Ru) {
        const yu = XR(uu, dR.WKx3),
          Eu = bR;
        dR.hGGL(this.__wbg_ptr, yu, Eu, Ru)
      }
      text() {
        let uu, Ru;
        try {
          const yu = dR.XyIE(this.__wbg_ptr);
          return uu = yu[0], Ru = yu[1], au(yu[0], yu[1])
        } finally {
          dR.hSef(uu, Ru, 1)
        }
      }
    }
    Symbol.dispose && (mu.prototype[Symbol.dispose] = mu.prototype.free);
    class Ju {
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, cu.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        dR.my2U(uu, 0)
      }
      nr(uu, Ru) {
        Pu(Ru, Ku);
        const yu = dR.bb7u(this.__wbg_ptr, uu, Ru.__wbg_ptr);
        if (yu[2]) throw xR(yu[1]);
        return yu[0] >>> 0
      }
      tr() {
        const uu = dR.mahw(this.__wbg_ptr);
        if (uu[1]) throw xR(uu[0])
      }
      wr(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Xu, Vu, ru) {
        Pu(uu, Nu);
        const Bu = dR.vsyB(this.__wbg_ptr, uu.__wbg_ptr, Ru, yu, Eu, Ku, Qu, mu, Ju, Xu, Vu, ru);
        if (Bu[2]) throw xR(Bu[1]);
        return Bu[0]
      }
      Zr() {
        const uu = dR.HFKm(this.__wbg_ptr);
        var Ru = iu(uu[0], uu[1]).slice();
        return dR.hSef(uu[0], 8 * uu[1], 8), Ru
      }
      hr() {
        return dR.lUnO(this.__wbg_ptr) >>> 0
      }
      Pr() {
        return dR.jcqK(this.__wbg_ptr) >>> 0
      }
      ir() {
        return dR.oigy(this.__wbg_ptr) >>> 0
      }
      constructor(uu, Ru, yu, Eu, Ku, Qu, mu, Ju) {
        const Nu = dR.II1V(uu, Ru, yu, Eu, Ku, Qu, mu, Ju);
        if (Nu[2]) throw xR(Nu[1]);
        return this.__wbg_ptr = Nu[0], cu.register(this, this.__wbg_ptr, this), this
      }
      Or(uu) {
        Pu(uu, Ku);
        const Ru = dR.W4Rm(this.__wbg_ptr, uu.__wbg_ptr);
        if (Ru[2]) throw xR(Ru[1]);
        return Ru[0] >>> 0
      }
      vr(uu) {
        const Ru = dR.NeMO(this.__wbg_ptr, uu);
        if (Ru[1]) throw xR(Ru[0])
      }
      ar() {
        return dR.DxMu(this.__wbg_ptr) >>> 0
      }
      resume(uu, Ru) {
        Pu(uu, Nu), Pu(Ru, Ku);
        const yu = dR.DvZE(this.__wbg_ptr, uu.__wbg_ptr, Ru.__wbg_ptr);
        if (yu[2]) throw xR(yu[1]);
        return yu[0] >>> 0
      }
      QB(uu) {
        const Ru = dR.ThaM(this.__wbg_ptr, uu);
        if (Ru[1]) throw xR(Ru[0])
      }
      NB(uu, Ru) {
        Pu(Ru, Ku);
        const yu = dR.sIrC(this.__wbg_ptr, uu, Ru.__wbg_ptr);
        if (yu[1]) throw xR(yu[0])
      }
      rB(uu) {
        const Ru = rR(uu, dR.WKx3),
          yu = bR,
          Eu = dR.tAtk(this.__wbg_ptr, Ru, yu);
        if (Eu[1]) throw xR(Eu[0])
      }
      Lr(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = dR.iiXK(this.__wbg_ptr, uu, Ru, yu, Eu, Ku, Qu);
        if (mu[1]) throw xR(mu[0])
      }
      zr(uu, Ru, yu, Eu) {
        const Ku = XR(uu, dR.WKx3),
          Qu = bR,
          mu = rR(Ru, dR.WKx3),
          Ju = bR,
          Nu = rR(yu, dR.WKx3),
          Xu = bR,
          Vu = rR(Eu, dR.WKx3),
          ru = bR,
          Bu = dR.INcB(this.__wbg_ptr, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru);
        if (Bu[1]) throw xR(Bu[0])
      }
      xB(uu, Ru) {
        Pu(Ru, Ku);
        const yu = dR.Chgx(this.__wbg_ptr, uu, Ru.__wbg_ptr);
        if (yu[1]) throw xR(yu[0])
      }
      qr(uu, Ru, yu) {
        const Eu = dR.eBXC(this.__wbg_ptr, uu, Ru, yu);
        if (Eu[1]) throw xR(Eu[0])
      }
      pB(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Xu, Vu) {
        Pu(uu, Nu);
        return dR.vjjH(this.__wbg_ptr, uu.__wbg_ptr, Ru, yu, Eu, Ku, Qu, mu, Ju, Xu, Vu)
      }
    }
    Symbol.dispose && (Ju.prototype[Symbol.dispose] = Ju.prototype.free);
    class Nu {
      static __wrap(uu) {
        const Ru = Object.create(Nu.prototype);
        return Ru.__wbg_ptr = uu, Lu.register(Ru, Ru.__wbg_ptr, Ru), Ru
      }
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Lu.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        dR.J14P(uu, 0)
      }
      jB(uu) {
        const Ru = dR.rsZs(this.__wbg_ptr, uu);
        if (Ru[2]) throw xR(Ru[1]);
        return Ru[0] >>> 0
      }
      HB(uu, Ru, yu) {
        return dR.xWia(this.__wbg_ptr, uu, Ru, yu)
      }
      dB(uu, Ru, yu) {
        return dR.o1aI(this.__wbg_ptr, uu, Ru, yu) >>> 0
      }
      bB(uu, Ru, yu, Eu) {
        return 0 !== dR.aqiK(this.__wbg_ptr, uu, Ru, yu, Eu)
      }
      CB() {
        dR.dueu(this.__wbg_ptr)
      }
      eB(uu) {
        const Ru = dR.Hwhy(this.__wbg_ptr, uu);
        if (Ru[3]) throw xR(Ru[2]);
        var yu = ou(Ru[0], Ru[1]).slice();
        return dR.hSef(Ru[0], 1 * Ru[1], 1), yu
      }
      evict(uu, Ru) {
        return dR.HEea(this.__wbg_ptr, uu, Ru) >>> 0
      }
      AB() {
        dR.OYFu(this.__wbg_ptr)
      }
      DB(uu, Ru, yu) {
        dR.WqLA(this.__wbg_ptr, uu, Ru, yu)
      }
      IB(uu) {
        const Ru = dR.oIJy(this.__wbg_ptr, uu);
        if (Ru[1]) throw xR(Ru[0])
      }
      GB() {
        return dR.JYop(this.__wbg_ptr) >>> 0
      }
      UB() {
        return dR.ra0i(this.__wbg_ptr) >>> 0
      }
      nB(uu, Ru, yu) {
        dR.m3qO(this.__wbg_ptr, uu, Ru, yu)
      }
      sB(uu, Ru, yu) {
        dR.E1DE(this.__wbg_ptr, uu, Ru, yu)
      }
      tB() {
        return dR.SmK1(this.__wbg_ptr) >>> 0
      }
      lB() {
        return dR.eqCj(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const uu = dR.LXE4();
        return this.__wbg_ptr = uu, Lu.register(this, this.__wbg_ptr, this), this
      }
      static gB() {
        const uu = dR.X7K0();
        return Nu.__wrap(uu)
      }
      cB() {
        return dR.d0sj(this.__wbg_ptr) >>> 0
      }
      LB() {
        return dR.YuPb(this.__wbg_ptr) >>> 0
      }
      zB(uu, Ru, yu, Eu) {
        const Ku = dR.UTxE(this.__wbg_ptr, uu, Ru, yu, Eu);
        if (Ku[1]) throw xR(Ku[0])
      }
      FB() {
        return dR.Qp43(this.__wbg_ptr) >>> 0
      }
      wB() {
        return dR.A0Ip(this.__wbg_ptr) >>> 0
      }
      ZB(uu, Ru, yu, Eu) {
        dR.AvPq(this.__wbg_ptr, uu, Ru, yu, Eu)
      }
      hB(uu) {
        dR.WXTJ(this.__wbg_ptr, uu)
      }
      iB(uu, Ru, yu, Eu, Ku) {
        const Qu = VR(Ru, dR.WKx3),
          mu = bR,
          Ju = XR(yu, dR.WKx3),
          Nu = bR,
          Xu = rR(Eu, dR.WKx3),
          Vu = bR,
          ru = dR.TKPT(this.__wbg_ptr, uu, Qu, mu, Ju, Nu, Xu, Vu, Ku);
        if (ru[1]) throw xR(ru[0])
      }
      PB(uu, Ru, yu, Eu) {
        const Ku = VR(uu, dR.WKx3),
          Qu = bR,
          mu = XR(Ru, dR.WKx3),
          Ju = bR,
          Nu = rR(yu, dR.WKx3),
          Xu = bR,
          Vu = VR(Eu, dR.WKx3),
          ru = bR,
          Bu = dR.S74P(this.__wbg_ptr, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru);
        if (Bu[1]) throw xR(Bu[0])
      }
      aB(uu) {
        const Ru = VR(uu, dR.WKx3),
          yu = bR,
          Eu = dR.sR42(this.__wbg_ptr, Ru, yu);
        if (Eu[1]) throw xR(Eu[0])
      }
      fB() {
        return dR.iSRA(this.__wbg_ptr) >>> 0
      }
      Rx(uu) {
        const Ru = dR.fxPd(this.__wbg_ptr, uu);
        if (Ru[2]) throw xR(Ru[1]);
        return Ru[0] >>> 0
      }
      steer() {
        return dR.wohk(this.__wbg_ptr) >>> 0
      }
      yx() {
        const uu = dR.B1Zf(this.__wbg_ptr);
        var Ru = iu(uu[0], uu[1]).slice();
        return dR.hSef(uu[0], 8 * uu[1], 8), Ru
      }
      Ex() {
        return dR.rX5G(this.__wbg_ptr) >>> 0
      }
      RB() {
        const uu = dR.XmyW(this.__wbg_ptr);
        var Ru, yu, Eu = (Ru = uu[0], yu = uu[1], Ru >>>= 0, (null !== vu && 0 !== vu.byteLength || (vu = new Int32Array(dR.memory.buffer)), vu).subarray(Ru / 4, Ru / 4 + yu)).slice();
        return dR.hSef(uu[0], 4 * uu[1], 4), Eu
      }
    }
    Symbol.dispose && (Nu.prototype[Symbol.dispose] = Nu.prototype.free);
    class Xu {
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, zu.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        dR.PTRL(uu, 0)
      }
      Kx(uu) {
        const Ru = XR(uu, dR.WKx3),
          yu = bR,
          Eu = dR.yHJ9(this.__wbg_ptr, Ru, yu);
        if (Eu[1]) throw xR(Eu[0])
      }
      Qx() {
        return dR.mC9l(this.__wbg_ptr) >>> 0
      }
      mx() {
        return dR.cylo(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const uu = dR.N7IE();
        return this.__wbg_ptr = uu, zu.register(this, this.__wbg_ptr, this), this
      }
      run(uu, Ru) {
        Pu(uu, Nu);
        const yu = dR.ZDIA(this.__wbg_ptr, uu.__wbg_ptr, Ru);
        if (yu[2]) throw xR(yu[1]);
        return yu[0] >>> 0
      }
      Jx(uu) {
        const Ru = XR(uu, dR.WKx3),
          yu = bR;
        dR.MEPU(this.__wbg_ptr, Ru, yu)
      }
      Nx(uu) {
        const Ru = XR(uu, dR.WKx3),
          yu = bR;
        dR.Mtqp(this.__wbg_ptr, Ru, yu)
      }
    }
    Symbol.dispose && (Xu.prototype[Symbol.dispose] = Xu.prototype.free);
    class Vu {
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Fu.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        dR.G8Sg(uu, 0)
      }
      Vx(uu, Ru) {
        const yu = VR(uu, dR.WKx3),
          Eu = bR;
        return dR.zOUA(this.__wbg_ptr, yu, Eu, Ru) >>> 0
      }
      Bx(uu, Ru, yu) {
        Pu(uu, Nu);
        const Eu = VR(yu, dR.WKx3),
          Ku = bR,
          Qu = dR.OXvg(this.__wbg_ptr, uu.__wbg_ptr, Ru, Eu, Ku);
        if (Qu[2]) throw xR(Qu[1]);
        return Qu[0] >>> 0
      }
      Xx(uu) {
        return dR.F89B(this.__wbg_ptr, uu) >>> 0
      }
      constructor() {
        const uu = dR.Mpvt();
        return this.__wbg_ptr = uu, Fu.register(this, this.__wbg_ptr, this), this
      }
      scan(uu, Ru) {
        Pu(uu, Nu);
        const yu = dR.SBh1(this.__wbg_ptr, uu.__wbg_ptr, Ru);
        if (yu[2]) throw xR(yu[1]);
        return yu[0] >>> 0
      }
      Wx(uu) {
        const Ru = VR(uu, dR.WKx3),
          yu = bR;
        dR.Kj35(this.__wbg_ptr, Ru, yu)
      }
      Tx() {
        return dR.z8Al(this.__wbg_ptr) >>> 0
      }
      Sx() {
        return dR.gHOO(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Vu.prototype[Symbol.dispose] = Vu.prototype.free);
    class ru {
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, wu.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        dR.yPUt(uu, 0)
      }
      Hx(uu) {
        const Ru = dR.fA4y(this.__wbg_ptr, uu);
        if (Ru[2]) throw xR(Ru[1]);
        return Ru[0] >>> 0
      }
      compute(uu, Ru, yu, Eu) {
        var Ku = JR(Eu) ? 0 : BR(Eu, dR.WKx3, dR.WbgO),
          Qu = bR;
        const mu = dR.hZfv(this.__wbg_ptr, uu, JR(Ru) ? Number.MAX_SAFE_INTEGER : Ru | 0, yu, Ku, Qu);
        if (mu[2]) throw xR(mu[1]);
        return mu[0] >>> 0
      }
      Cx(uu) {
        const Ru = BR(uu, dR.WKx3, dR.WbgO),
          yu = bR;
        dR.psT0(this.__wbg_ptr, Ru, yu)
      }
      Ax() {
        return dR.GqzS(this.__wbg_ptr)
      }
      Dx(uu) {
        return dR.f4Gi(this.__wbg_ptr, uu) >>> 0
      }
      Mx() {
        return dR.Mppv(this.__wbg_ptr) >>> 0
      }
      Ix() {
        return dR.S36Y(this.__wbg_ptr) >>> 0
      }
      Gx(uu, Ru) {
        const yu = dR.pEEI(this.__wbg_ptr, uu, Ru);
        if (yu[1]) throw xR(yu[0])
      }
      Ux() {
        return dR.QtMM(this.__wbg_ptr) >>> 0
      }
      nx() {
        return dR.K2ck(this.__wbg_ptr) >>> 0
      }
      sx() {
        return dR.aZSq(this.__wbg_ptr) >>> 0
      }
      bx(uu, Ru, yu) {
        const Eu = XR(uu, dR.WKx3),
          Ku = bR,
          Qu = XR(Ru, dR.WKx3),
          mu = bR,
          Ju = dR.dnM5(this.__wbg_ptr, Eu, Ku, Qu, mu, yu);
        if (Ju[1]) throw xR(Ju[0])
      }
      lx() {
        return dR.i4WS(this.__wbg_ptr) >>> 0
      }
      mesh(uu, Ru, yu, Eu, Ku) {
        const Qu = dR.erh2(this.__wbg_ptr, uu, Ru, yu, Eu, Ku);
        if (Qu[2]) throw xR(Qu[1]);
        return Qu[0] >>> 0
      }
      constructor(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su, pu, Tu, Wu, ju, Hu) {
        const du = NR(uu, dR.WKx3),
          bu = bR,
          Cu = rR(Ru, dR.WKx3),
          ku = bR,
          eu = XR(yu, dR.WKx3),
          Au = bR,
          Du = VR(Eu, dR.WKx3),
          Mu = bR,
          Iu = VR(Ku, dR.WKx3),
          Gu = bR,
          Uu = XR(Qu, dR.WKx3),
          nu = bR,
          su = XR(mu, dR.WKx3),
          tu = bR,
          lu = rR(Ju, dR.WKx3),
          gu = bR,
          cu = rR(Nu, dR.WKx3),
          Lu = bR,
          zu = VR(Xu, dR.WKx3),
          Fu = bR;
        var Zu = JR(Vu) ? 0 : NR(Vu, dR.WKx3),
          hu = bR;
        const Pu = XR(ru, dR.WKx3),
          iu = bR,
          Yu = VR(Bu, dR.WKx3),
          ou = bR;
        var qu = JR(xu) ? 0 : VR(xu, dR.WKx3),
          Ou = bR;
        const vu = rR(Su, dR.WKx3),
          au = bR,
          fu = dR.nJIZ(du, bu, Cu, ku, eu, Au, Du, Mu, Iu, Gu, Uu, nu, su, tu, lu, gu, cu, Lu, zu, Fu, Zu, hu, Pu, iu, Yu, ou, qu, Ou, vu, au, pu, Tu, Wu, ju, Hu);
        if (fu[2]) throw xR(fu[1]);
        return this.__wbg_ptr = fu[0], wu.register(this, this.__wbg_ptr, this), this
      }
      tx(uu, Ru) {
        const yu = XR(uu, dR.WKx3),
          Eu = bR,
          Ku = dR.fg9x(this.__wbg_ptr, yu, Eu, Ru);
        if (Ku[3]) throw xR(Ku[2]);
        var Qu = ou(Ku[0], Ku[1]).slice();
        return dR.hSef(Ku[0], 1 * Ku[1], 1), Qu
      }
      gx(uu) {
        dR.OPuY(this.__wbg_ptr, JR(uu) ? 16777215 : uu)
      }
      Lx(uu) {
        return dR.iRnl(this.__wbg_ptr, uu) >>> 0
      }
      Fx() {
        return dR.mAiN(this.__wbg_ptr) >>> 0
      }
      zx() {
        const uu = dR.cslq(this.__wbg_ptr);
        if (uu[2]) throw xR(uu[1]);
        return 0 !== uu[0]
      }
      wx() {
        return dR.cRxf(this.__wbg_ptr) >>> 0
      }
      Zx() {
        return dR.VTXy(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (ru.prototype[Symbol.dispose] = ru.prototype.free);
    class Bu {
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Zu.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        dR.WgEQ(uu, 0)
      }
      compute(uu, Ru, yu, Eu) {
        var Ku = JR(Eu) ? 0 : BR(Eu, dR.WKx3, dR.WbgO),
          Qu = bR;
        const mu = dR.uqNP(this.__wbg_ptr, uu, JR(Ru) ? Number.MAX_SAFE_INTEGER : Ru | 0, yu, Ku, Qu);
        if (mu[2]) throw xR(mu[1]);
        return mu[0] >>> 0
      }
      Cx(uu) {
        const Ru = BR(uu, dR.WKx3, dR.WbgO),
          yu = bR;
        dR.AY4X(this.__wbg_ptr, Ru, yu)
      }
      nx() {
        return dR.djLy(this.__wbg_ptr) >>> 0
      }
      sx() {
        return dR.k1eV(this.__wbg_ptr) >>> 0
      }
      hx(uu) {
        const Ru = dR.lnkw(this.__wbg_ptr, uu);
        if (Ru[2]) throw xR(Ru[1]);
        return Ru[0] >>> 0
      }
      constructor(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = NR(uu, dR.WKx3),
          Ju = bR,
          Nu = rR(Ru, dR.WKx3),
          Xu = bR,
          Vu = XR(yu, dR.WKx3),
          ru = bR,
          Bu = VR(Eu, dR.WKx3),
          xu = bR,
          Su = dR.hejC(mu, Ju, Nu, Xu, Vu, ru, Bu, xu, Ku, Qu);
        if (Su[2]) throw xR(Su[1]);
        return this.__wbg_ptr = Su[0], Zu.register(this, this.__wbg_ptr, this), this
      }
      Fx() {
        return dR.vjtK(this.__wbg_ptr) >>> 0
      }
      zx() {
        const uu = dR.wuI6(this.__wbg_ptr);
        if (uu[2]) throw xR(uu[1]);
        return 0 !== uu[0]
      }
      wx() {
        return dR.muqx(this.__wbg_ptr) >>> 0
      }
    }

    function xu() {
      const uu = dR.wfoV();
      var Ru = Yu(uu[0], uu[1]).slice();
      return dR.hSef(uu[0], 4 * uu[1], 4), Ru
    }

    function Su(uu, Ru) {
      let yu, Eu;
      try {
        const Ku = NR(uu, dR.WKx3),
          Qu = bR,
          mu = BR(Ru, dR.WKx3, dR.WbgO),
          Ju = bR,
          Nu = dR.QZAM(Ku, Qu, mu, Ju);
        return yu = Nu[0], Eu = Nu[1], au(Nu[0], Nu[1])
      } finally {
        dR.hSef(yu, Eu, 1)
      }
    }

    function pu() {
      const uu = dR.WElh();
      var Ru = Yu(uu[0], uu[1]).slice();
      return dR.hSef(uu[0], 4 * uu[1], 4), Ru
    }

    function Tu(uu) {
      return 0 !== dR.zQIf(uu)
    }

    function Wu(uu, Ru) {
      const yu = BR(uu, dR.WKx3, dR.WbgO),
        Eu = bR,
        Ku = dR.m9Yj(yu, Eu, Ru);
      if (Ku[1]) throw xR(Ku[0])
    }

    function ju() {
      dR.RjOy()
    }

    function Hu() {
      return dR.D8e8() >>> 0
    }

    function du(uu) {
      return 0 !== dR.JQPX(uu)
    }

    function bu(uu) {
      return 0 !== dR.Yq6b(uu)
    }

    function Cu(uu) {
      dR.uENO(uu)
    }

    function ku() {
      return dR.O5MX() >>> 0
    }

    function eu() {
      return dR.P3rm() >>> 0
    }

    function Au() {
      return 0 !== dR.s5Cp()
    }

    function Du() {
      const uu = dR.zsiF();
      var Ru = Yu(uu[0], uu[1]).slice();
      return dR.hSef(uu[0], 4 * uu[1], 4), Ru
    }

    function Mu() {
      const uu = dR.yQbA();
      var Ru = Yu(uu[0], uu[1]).slice();
      return dR.hSef(uu[0], 4 * uu[1], 4), Ru
    }

    function Iu() {
      const uu = dR.u4MA();
      var Ru = Yu(uu[0], uu[1]).slice();
      return dR.hSef(uu[0], 4 * uu[1], 4), Ru
    }

    function Gu() {
      return dR.T7b8() >>> 0
    }

    function Uu() {
      dR.NWDY()
    }

    function nu() {
      let uu, Ru;
      try {
        const yu = dR.EJ1F();
        return uu = yu[0], Ru = yu[1], au(yu[0], yu[1])
      } finally {
        dR.hSef(uu, Ru, 1)
      }
    }

    function su(uu) {
      dR.a39v(hu(uu))
    }

    function tu() {
      return {
        __proto__: null,
        VFel: {
          __proto__: null,
          tM83: function(uu, Ru) {
            return hu(Error(au(uu, Ru)))
          },
          N4f7: function(uu, Ru) {
            throw new Error(au(uu, Ru))
          },
          abft: function(uu) {
            KR(uu).call()
          },
          MFYX: function(uu, Ru) {
            console.error(au(uu, Ru))
          },
          kTHe: function() {
            return performance.now()
          },
          VzhJ: function(uu) {
            xR(uu)
          }
        }
      }
    }
    Symbol.dispose && (Bu.prototype[Symbol.dispose] = Bu.prototype.free);
    const lu = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((uu => dR.AvmF(uu, 1))),
      gu = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((uu => dR.kZcp(uu, 1))),
      cu = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((uu => dR.my2U(uu, 1))),
      Lu = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((uu => dR.J14P(uu, 1))),
      zu = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((uu => dR.PTRL(uu, 1))),
      Fu = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((uu => dR.G8Sg(uu, 1))),
      wu = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((uu => dR.yPUt(uu, 1))),
      Zu = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((uu => dR.WgEQ(uu, 1)));

    function hu(uu) {
      mR === QR.length && QR.push(QR.length + 1);
      const Ru = mR;
      return mR = QR[Ru], QR[Ru] = uu, Ru
    }

    function Pu(uu, Ru) {
      if (!(uu instanceof Ru)) throw new Error(`expected instance of ${Ru.name}`)
    }

    function iu(uu, Ru) {
      return uu >>>= 0, Ou().subarray(uu / 8, uu / 8 + Ru)
    }

    function Yu(uu, Ru) {
      return uu >>>= 0, RR().subarray(uu / 4, uu / 4 + Ru)
    }

    function ou(uu, Ru) {
      return uu >>>= 0, ER().subarray(uu / 1, uu / 1 + Ru)
    }
    let qu = null;

    function Ou() {
      return null !== qu && 0 !== qu.byteLength || (qu = new Float64Array(dR.memory.buffer)), qu
    }
    let vu = null;

    function au(uu, Ru) {
      return function(uu, Ru) {
        TR += Ru, TR >= pR && (SR = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), SR.decode(), TR = Ru);
        return SR.decode(ER().subarray(uu, uu + Ru))
      }(uu >>> 0, Ru)
    }
    let fu = null;
    let uR = null;

    function RR() {
      return null !== uR && 0 !== uR.byteLength || (uR = new Uint32Array(dR.memory.buffer)), uR
    }
    let yR = null;

    function ER() {
      return null !== yR && 0 !== yR.byteLength || (yR = new Uint8Array(dR.memory.buffer)), yR
    }

    function KR(uu) {
      return QR[uu]
    }
    let QR = new Array(1024).fill(void 0);
    QR.push(void 0, null, !0, !1);
    let mR = QR.length;

    function JR(uu) {
      return void 0 === uu || null === uu
    }

    function NR(uu, Ru) {
      const yu = Ru(2 * uu.length, 2) >>> 0;
      return (null !== fu && 0 !== fu.byteLength || (fu = new Uint16Array(dR.memory.buffer)), fu).set(uu, yu / 2), bR = uu.length, yu
    }

    function XR(uu, Ru) {
      const yu = Ru(4 * uu.length, 4) >>> 0;
      return RR().set(uu, yu / 4), bR = uu.length, yu
    }

    function VR(uu, Ru) {
      const yu = Ru(1 * uu.length, 1) >>> 0;
      return ER().set(uu, yu / 1), bR = uu.length, yu
    }

    function rR(uu, Ru) {
      const yu = Ru(8 * uu.length, 8) >>> 0;
      return Ou().set(uu, yu / 8), bR = uu.length, yu
    }

    function BR(uu, Ru, yu) {
      if (void 0 === yu) {
        const yu = WR.encode(uu),
          Eu = Ru(yu.length, 1) >>> 0;
        return ER().subarray(Eu, Eu + yu.length).set(yu), bR = yu.length, Eu
      }
      let Eu = uu.length,
        Ku = Ru(Eu, 1) >>> 0;
      const Qu = ER();
      let mu = 0;
      for (; mu < Eu; mu++) {
        const Ru = uu.charCodeAt(mu);
        if (Ru > 127) break;
        Qu[Ku + mu] = Ru
      }
      if (mu !== Eu) {
        0 !== mu && (uu = uu.slice(mu)), Ku = yu(Ku, Eu, Eu = mu + 3 * uu.length, 1) >>> 0;
        const Ru = ER().subarray(Ku + mu, Ku + Eu);
        mu += WR.encodeInto(uu, Ru).written, Ku = yu(Ku, Eu, mu, 1) >>> 0
      }
      return bR = mu, Ku
    }

    function xR(uu) {
      const Ru = KR(uu);
      return function(uu) {
        uu < 1028 || (QR[uu] = mR, mR = uu)
      }(uu), Ru
    }
    let SR = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    SR.decode();
    const pR = 2146435072;
    let TR = 0;
    const WR = new TextEncoder;
    "encodeInto" in WR || (WR.encodeInto = function(uu, Ru) {
      const yu = WR.encode(uu);
      return Ru.set(yu), {
        read: uu.length,
        written: yu.length
      }
    });
    let jR, HR, dR, bR = 0;

    function CR(uu, Ru) {
      return HR = uu, dR = uu.exports, jR = Ru, qu = null, vu = null, fu = null, uR = null, yR = null, dR.mHBa(), dR
    }

    function kR(uu) {
      if (void 0 !== dR) return dR;
      void 0 !== uu && (Object.getPrototypeOf(uu) === Object.prototype ? ({
        module: uu
      } = uu) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Ru = tu();
      uu instanceof WebAssembly.Module || (uu = new WebAssembly.Module(uu));
      return CR(new WebAssembly.Instance(uu, Ru), uu)
    }
    async function eR(uu) {
      if (void 0 !== dR) return dR;
      void 0 !== uu && (Object.getPrototypeOf(uu) === Object.prototype ? ({
        module_or_path: uu
      } = uu) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Ru = tu();
      ("string" === typeof uu || "function" === typeof Request && uu instanceof Request || "function" === typeof URL && uu instanceof URL) && (uu = fetch(uu));
      const {
        instance: yu,
        module: Eu
      } = await async function(uu, Ru) {
        if ("function" === typeof Response && uu instanceof Response) {
          if (!uu.ok) throw new Error(`failed to fetch Wasm: ${uu.status} ${uu.statusText} fetching '${uu.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(uu, Ru)
          } catch (yu) {
            if (! function(uu) {
                switch (uu) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(uu.type) || "application/wasm" === uu.headers.get("Content-Type")) throw yu;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", yu)
          }
          const Eu = await uu.arrayBuffer();
          return await WebAssembly.instantiate(Eu, Ru)
        } {
          const yu = await WebAssembly.instantiate(uu, Ru);
          return yu instanceof WebAssembly.Instance ? {
            instance: yu,
            module: uu
          } : yu
        }
      }(await uu, Ru);
      return CR(yu, Eu)
    }
    var AR = yu(3510),
      DR = yu(36199);
    const MR = {
      name: AR.c,
      url: () => new yu.U(yu(36203)),
      init: eR,
      bindings: Eu
    };

    function IR() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : MR,
        Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MR,
        yu = arguments.length > 2 ? arguments[2] : void 0;
      return (0, DR.h)(uu, Ru, yu)
    }

    function GR(uu) {
      return (0, AR.G)((() => uu), Eu, MR)
    }
  },
  36187: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      return new Error(`${uu}: ${Ru instanceof Error?`${Ru.name}: ${Ru.message}`:String(Ru)}`, {
        cause: Ru
      })
    }
    yu.d(Ru, {
      d: () => Eu
    })
  },
  36179: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu,
      h: () => Nu
    });
    var Eu = yu(3514),
      Ku = yu(6401),
      Qu = yu(36187);

    function mu() {
      return new URL(new yu.U(yu(36191)).href, globalThis.location?.href).href
    }
    let Ju = null;

    function Nu() {
      return Ju ??= (async () => (0, Eu.D)(new URL(mu()), (0, Ku.d)("bloxd_wasm_textures")))().catch((uu => {
        throw (0, Qu.d)((0, Eu.I)(uu), uu)
      })), Ju
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);