export const id = 121;
export const ids = [121, 190];
export const modules = {
  35024: (cB, Bc, nc) => {
    nc.d(Bc, {
      reportCappedWasmFailure: () => uc,
      reportWasmFailure: () => rB
    });
    var Vc = nc(2399);
    const Ic = Vc.d - 4;

    function rB(cB, Bc, nc) {
      (0, Vc.h)(cB, Bc, nc, !1)
    }

    function uc(cB, Bc, nc) {
      (0, Vc.h)(cB, Bc, nc, !1, Ic)
    }
  },
  35015: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => mB,
      f: () => Sc,
      h: () => yB,
      k: () => ec
    });
    var Vc = nc(35027),
      Ic = nc(2870),
      rB = nc(35039),
      uc = nc(2876),
      sc = nc(35024),
      Mc = nc(2240),
      Pc = nc(2410),
      qB = nc(2397),
      Oc = nc(2754);
    const Tc = "bloxdWasmFailureReported";

    function fc() {
      return "undefined" === typeof WebAssembly
    }

    function mB() {
      return (0, Vc.f)()
    }

    function ec() {
      if (fc()) return "this browser has no WebAssembly";
      const cB = (0, Ic.t)();
      return "compile" === cB || "instantiate" === cB ? `the core wasm didn't load here (${(0,Ic.j)()})` : null
    }
    async function tB(cB) {
      return await (0, rB.g)(rB.e, void 0, cB)
    }

    function Sc() {
      fc() || (0, Oc.d)((() => {
        tB()
      }))
    }

    function yB() {
      if (fc()) return async () => ((0, Mc.h)("unsupported", 0), zB("unsupported", "This browser has no WebAssembly"), !1);
      const cB = {
        reloadFailedDownload: !0
      };
      return tB(cB), async () => {
        var Bc;
        const nc = performance.now();
        await tB(cB);
        const Vc = (performance.now() - nc) / 1e3;
        if ((0, Ic.P)()) return (0, Mc.h)("ready", Vc), (0, uc.C)(rB.e.url()) && (0, sc.reportCappedWasmFailure)("wasm_load", Pc.d.message, Pc.d.code), !0;
        const Oc = qB.b[null !== (Bc = (0, Ic.t)()) && void 0 !== Bc ? Bc : "call"];
        return (0, Mc.h)(Oc, Vc), zB(Oc, (0, Ic.j)()), !1
      }
    }

    function zB(cB, Bc) {
      (0, qB.f)(Tc, `Bloxd wasm ${cB}, so the game can't start: ${Bc}`, Bc, cB)
    }
  },
  35052: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/bloxd_wasm_bg.abc09660fe9bbd32cf0c.wasm"
  },
  35037: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/bloxd_wasm_textures_bg.954f3d895a16538142fe.wasm"
  },
  35045: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Tc,
      h: () => qB
    });
    var Vc = nc(2870),
      Ic = nc(2876),
      rB = nc(2878),
      uc = nc(5590),
      sc = nc(5599);
    let Mc = null,
      Pc = !1;

    function qB(cB, Bc, nc) {
      return null === Mc ? Mc = Oc(cB, Bc) : cB !== Mc.build ? console.warn(`Bloxd wasm: ${cB.name} was asked for after ${Mc.build.name} started loading, which this thread keeps`) : Bc.name !== Mc.workers.name && console.warn(`Bloxd wasm: ${Bc.name} was asked for workers after ${Mc.workers.name}, which this thread keeps`), nc?.reloadFailedDownload && !Pc && (0, Vc.Z)() && (Pc = !0, Mc = Oc(Mc.build, Mc.workers)), Mc.loaded
    }

    function Oc(cB, Bc) {
      const nc = (0, Vc.L)((async () => {
        (0, sc.z)();
        const nc = fc(cB),
          Vc = Bc.name === cB.name ? nc : fc(Bc);
        await (0, rB.d)([nc, Vc]);
        const Ic = await nc,
          uc = await Vc;
        return (0, sc.z)(), {
          module: Ic,
          workerModule: uc
        }
      }), cB);
      return {
        build: cB,
        workers: Bc,
        loaded: nc
      }
    }
    async function Tc(cB) {
      return fc(cB)
    }

    function fc(cB) {
      return (0, Ic.w)(cB.url(), (0, uc.c)(cB.name))
    }
  },
  35039: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => UB,
      g: () => bn,
      h: () => ZB
    });
    var Vc = {};
    nc.r(Vc), nc.d(Vc, {
      Bc: () => Ic,
      EnvelopeKind: () => rB,
      nc: () => uc,
      PhysicsEngine: () => sc,
      Vc: () => Mc,
      Ic: () => Pc,
      rB: () => qB,
      uc: () => Oc,
      sc: () => Tc,
      Mc: () => fc,
      Pc: () => mB,
      qB: () => ec,
      Oc: () => tB,
      Tc: () => Sc,
      default: () => YB,
      initSync: () => lB,
      fc: () => yB,
      mB: () => zB,
      ec: () => pc,
      tB: () => hc,
      Sc: () => aB,
      yB: () => lc,
      zB: () => Yc,
      hc: () => Lc,
      aB: () => gB,
      lc: () => Uc,
      Yc: () => bB,
      Lc: () => Zc,
      gB: () => Qc,
      Uc: () => Cc,
      bB: () => vB
    });
    class Ic {
      __destroy_into_raw() {
        const cB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Nc.unregister(this), cB
      }
      free() {
        const cB = this.__destroy_into_raw();
        pB.O4eu(cB, 0)
      }
      Zc() {
        const cB = pB.X1Vm(this.__wbg_ptr);
        if (cB[2]) throw fB(cB[1]);
        return cB[0] >>> 0
      }
      Qc() {
        return pB.qVPt(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const cB = pB.uv8Y();
        return this.__wbg_ptr = cB, Nc.register(this, this.__wbg_ptr, this), this
      }
      Cc() {
        return pB.jyqu(this.__wbg_ptr) >>> 0
      }
      vB(cB) {
        const Bc = pB.JgPK(this.__wbg_ptr, cB);
        if (Bc[2]) throw fB(Bc[1]);
        return Bc[0] >>> 0
      }
      Dc(cB) {
        const Bc = pB.Kmrj(this.__wbg_ptr, cB);
        if (Bc[2]) throw fB(Bc[1]);
        return Bc[0] >>> 0
      }
    }
    Symbol.dispose && (Ic.prototype[Symbol.dispose] = Ic.prototype.free);
    const rB = Object.freeze({
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
    class uc {
      __destroy_into_raw() {
        const cB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Ec.unregister(this), cB
      }
      free() {
        const cB = this.__destroy_into_raw();
        pB.iqbv(cB, 0)
      }
      oc(cB, Bc) {
        const nc = pB.b9kD(this.__wbg_ptr, cB, Bc);
        if (nc[2]) throw fB(nc[1]);
        return nc[0] >>> 0
      }
      Wc(cB) {
        const Bc = pB.u2O4(this.__wbg_ptr, cB);
        if (Bc[2]) throw fB(Bc[1]);
        return Bc[0] >>> 0
      }
      wc() {
        pB.whjI(this.__wbg_ptr)
      }
      static kB() {
        return pB.ROGm() >>> 0
      }
      Xc() {
        return pB.BrPG(this.__wbg_ptr) >>> 0
      }
      Hc() {
        const cB = pB.DF7w(this.__wbg_ptr);
        return 0 === cB[0] ? void 0 : cB[1]
      }
      Fc() {
        return pB.gOxx(this.__wbg_ptr) >>> 0
      }
      Jc() {
        return pB.mI9m(this.__wbg_ptr) >>> 0
      }
      static Ec() {
        return pB.FUXo() >>> 0
      }
      constructor() {
        const cB = pB.l7bq();
        return this.__wbg_ptr = cB, Ec.register(this, this.__wbg_ptr, this), this
      }
      jB() {
        return pB.arGj(this.__wbg_ptr) >>> 0
      }
      Rc() {
        return pB.pNgJ(this.__wbg_ptr) >>> 0
      }
      iB() {
        return pB.iQGA(this.__wbg_ptr) >>> 0
      }
      Nc(cB) {
        return pB.e5bG(this.__wbg_ptr, cB) >>> 0
      }
      reserve(cB, Bc) {
        const nc = pB.GTk4(this.__wbg_ptr, cB, Bc);
        if (nc[1]) throw fB(nc[0])
      }
      dc(cB, Bc) {
        const nc = PB(cB, pB.P7Br),
          Vc = hB;
        pB.S9pP(this.__wbg_ptr, nc, Vc, Bc)
      }
      text() {
        let cB, Bc;
        try {
          const nc = pB.laeq(this.__wbg_ptr);
          return cB = nc[0], Bc = nc[1], Ac(nc[0], nc[1])
        } finally {
          pB.cVOB(cB, Bc, 1)
        }
      }
    }
    Symbol.dispose && (uc.prototype[Symbol.dispose] = uc.prototype.free);
    class sc {
      __destroy_into_raw() {
        const cB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, oc.unregister(this), cB
      }
      free() {
        const cB = this.__destroy_into_raw();
        pB.BMAo(cB, 0)
      }
      Gc(cB, Bc) {
        Jc(Bc, Ic);
        const nc = pB.FRej(this.__wbg_ptr, cB, Bc.__wbg_ptr);
        if (nc[2]) throw fB(nc[1]);
        return nc[0] >>> 0
      }
      BB() {
        const cB = pB.MHDp(this.__wbg_ptr);
        if (cB[1]) throw fB(cB[0])
      }
      uB(cB, Bc, nc, Vc, Ic, rB, uc, sc, Pc, qB, Oc) {
        Jc(cB, Mc);
        const Tc = pB.MrOn(this.__wbg_ptr, cB.__wbg_ptr, Bc, nc, Vc, Ic, rB, uc, sc, Pc, qB, Oc);
        if (Tc[2]) throw fB(Tc[1]);
        return Tc[0]
      }
      sB() {
        const cB = pB.UAqG(this.__wbg_ptr);
        var Bc = jB(cB[0], cB[1]).slice();
        return pB.cVOB(cB[0], 8 * cB[1], 8), Bc
      }
      PB() {
        return pB.MJPC(this.__wbg_ptr) >>> 0
      }
      qn() {
        return pB.rPp5(this.__wbg_ptr) >>> 0
      }
      OB() {
        return pB.HwOz(this.__wbg_ptr) >>> 0
      }
      constructor(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
        const Mc = pB.JcIK(cB, Bc, nc, Vc, Ic, rB, uc, sc);
        if (Mc[2]) throw fB(Mc[1]);
        return this.__wbg_ptr = Mc[0], oc.register(this, this.__wbg_ptr, this), this
      }
      mn(cB) {
        Jc(cB, Ic);
        const Bc = pB.zRGw(this.__wbg_ptr, cB.__wbg_ptr);
        if (Bc[2]) throw fB(Bc[1]);
        return Bc[0] >>> 0
      }
      eB(cB) {
        const Bc = pB.aVTz(this.__wbg_ptr, cB);
        if (Bc[1]) throw fB(Bc[0])
      }
      tn() {
        return pB.C8gc(this.__wbg_ptr) >>> 0
      }
      resume(cB, Bc) {
        Jc(cB, Mc), Jc(Bc, Ic);
        const nc = pB.zMvz(this.__wbg_ptr, cB.__wbg_ptr, Bc.__wbg_ptr);
        if (nc[2]) throw fB(nc[1]);
        return nc[0] >>> 0
      }
      hB(cB) {
        const Bc = pB.ZmWF(this.__wbg_ptr, cB);
        if (Bc[1]) throw fB(Bc[0])
      }
      LB(cB, Bc) {
        Jc(Bc, Ic);
        const nc = pB.yR6h(this.__wbg_ptr, cB, Bc.__wbg_ptr);
        if (nc[1]) throw fB(nc[0])
      }
      bn(cB) {
        const Bc = OB(cB, pB.P7Br),
          nc = hB,
          Vc = pB.roYE(this.__wbg_ptr, Bc, nc);
        if (Vc[1]) throw fB(Vc[0])
      }
      VB(cB, Bc, nc, Vc, Ic, rB) {
        const uc = pB.KEVw(this.__wbg_ptr, cB, Bc, nc, Vc, Ic, rB);
        if (uc[1]) throw fB(uc[0])
      }
      IB(cB, Bc, nc, Vc) {
        const Ic = PB(cB, pB.P7Br),
          rB = hB,
          uc = OB(Bc, pB.P7Br),
          sc = hB,
          Mc = OB(nc, pB.P7Br),
          Pc = hB,
          qB = OB(Vc, pB.P7Br),
          Oc = hB,
          Tc = pB.o3M3(this.__wbg_ptr, Ic, rB, uc, sc, Mc, Pc, qB, Oc);
        if (Tc[1]) throw fB(Tc[0])
      }
      QB(cB, Bc) {
        Jc(Bc, Ic);
        const nc = pB.mDpy(this.__wbg_ptr, cB, Bc.__wbg_ptr);
        if (nc[1]) throw fB(nc[0])
      }
      fB(cB, Bc, nc) {
        const Vc = pB.tWiB(this.__wbg_ptr, cB, Bc, nc);
        if (Vc[1]) throw fB(Vc[0])
      }
      vn(cB, Bc, nc, Vc, Ic, rB, uc, sc, Pc, qB) {
        Jc(cB, Mc);
        return pB.pYEB(this.__wbg_ptr, cB.__wbg_ptr, Bc, nc, Vc, Ic, rB, uc, sc, Pc, qB)
      }
    }
    Symbol.dispose && (sc.prototype[Symbol.dispose] = sc.prototype.free);
    class Mc {
      static __wrap(cB) {
        const Bc = Object.create(Mc.prototype);
        return Bc.__wbg_ptr = cB, Wc.register(Bc, Bc.__wbg_ptr, Bc), Bc
      }
      __destroy_into_raw() {
        const cB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Wc.unregister(this), cB
      }
      free() {
        const cB = this.__destroy_into_raw();
        pB.E34l(cB, 0)
      }
      EB(cB) {
        const Bc = pB.t3cs(this.__wbg_ptr, cB);
        if (Bc[2]) throw fB(Bc[1]);
        return Bc[0] >>> 0
      }
      oB(cB, Bc, nc) {
        return pB.xSsb(this.__wbg_ptr, cB, Bc, nc)
      }
      WB(cB, Bc, nc) {
        return pB.E4gs(this.__wbg_ptr, cB, Bc, nc) >>> 0
      }
      wB(cB, Bc, nc, Vc) {
        return 0 !== pB.TP77(this.__wbg_ptr, cB, Bc, nc, Vc)
      }
      kn() {
        pB.LBxX(this.__wbg_ptr)
      }
      FB(cB) {
        const Bc = pB.wUCQ(this.__wbg_ptr, cB);
        if (Bc[3]) throw fB(Bc[2]);
        var nc = iB(Bc[0], Bc[1]).slice();
        return pB.cVOB(Bc[0], 1 * Bc[1], 1), nc
      }
      evict(cB, Bc) {
        return pB.XK0B(this.__wbg_ptr, cB, Bc) >>> 0
      }
      JB() {
        pB.FQ7d(this.__wbg_ptr)
      }
      jn(cB, Bc, nc) {
        pB.uYyR(this.__wbg_ptr, cB, Bc, nc)
      }
      RB(cB) {
        const Bc = pB.bWLJ(this.__wbg_ptr, cB);
        if (Bc[1]) throw fB(Bc[0])
      }
      xn() {
        return pB.xArq(this.__wbg_ptr) >>> 0
      }
      dB() {
        return pB.AsMc(this.__wbg_ptr) >>> 0
      }
      AB(cB, Bc, nc) {
        pB.uIoi(this.__wbg_ptr, cB, Bc, nc)
      }
      GB(cB, Bc, nc) {
        pB.Y4ci(this.__wbg_ptr, cB, Bc, nc)
      }
      cV() {
        return pB.G5Th(this.__wbg_ptr) >>> 0
      }
      Bn() {
        return pB.k4Vq(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const cB = pB.qJTQ();
        return this.__wbg_ptr = cB, Wc.register(this, this.__wbg_ptr, this), this
      }
      static nn() {
        const cB = pB.hVLP();
        return Mc.__wrap(cB)
      }
      Vn() {
        return pB.Oi6x(this.__wbg_ptr) >>> 0
      }
      rV() {
        return pB.UPd5(this.__wbg_ptr) >>> 0
      }
      sn(cB, Bc, nc, Vc) {
        const Ic = pB.GwhL(this.__wbg_ptr, cB, Bc, nc, Vc);
        if (Ic[1]) throw fB(Ic[0])
      }
      Mn() {
        return pB.xa21(this.__wbg_ptr) >>> 0
      }
      Pn() {
        return pB.z9ob(this.__wbg_ptr) >>> 0
      }
      qV(cB, Bc, nc, Vc) {
        pB.oPbZ(this.__wbg_ptr, cB, Bc, nc, Vc)
      }
      Tn(cB) {
        pB.w2wt(this.__wbg_ptr, cB)
      }
      mV(cB, Bc, nc, Vc, Ic) {
        const rB = qn(Bc, pB.P7Br),
          uc = hB,
          sc = PB(nc, pB.P7Br),
          Mc = hB,
          Pc = OB(Vc, pB.P7Br),
          qB = hB,
          Oc = pB.r8s3(this.__wbg_ptr, cB, rB, uc, sc, Mc, Pc, qB, Ic);
        if (Oc[1]) throw fB(Oc[0])
      }
      fn(cB, Bc, nc, Vc) {
        const Ic = qn(cB, pB.P7Br),
          rB = hB,
          uc = PB(Bc, pB.P7Br),
          sc = hB,
          Mc = OB(nc, pB.P7Br),
          Pc = hB,
          qB = qn(Vc, pB.P7Br),
          Oc = hB,
          Tc = pB.oclV(this.__wbg_ptr, Ic, rB, uc, sc, Mc, Pc, qB, Oc);
        if (Tc[1]) throw fB(Tc[0])
      }
      pn(cB) {
        const Bc = qn(cB, pB.P7Br),
          nc = hB,
          Vc = pB.zDUv(this.__wbg_ptr, Bc, nc);
        if (Vc[1]) throw fB(Vc[0])
      }
      hn() {
        return pB.lrSb(this.__wbg_ptr) >>> 0
      }
      aV(cB) {
        const Bc = pB.kDsN(this.__wbg_ptr, cB);
        if (Bc[2]) throw fB(Bc[1]);
        return Bc[0] >>> 0
      }
      steer() {
        return pB.ptdT(this.__wbg_ptr) >>> 0
      }
      lnc() {
        const cB = pB.Euv0(this.__wbg_ptr);
        var Bc = jB(cB[0], cB[1]).slice();
        return pB.cVOB(cB[0], 8 * cB[1], 8), Bc
      }
      Yn() {
        return pB.VS7x(this.__wbg_ptr) >>> 0
      }
      yn() {
        const cB = pB.ccQT(this.__wbg_ptr);
        var Bc, nc, Vc = (Bc = cB[0], nc = cB[1], Bc >>>= 0, (null !== dc && 0 !== dc.byteLength || (dc = new Int32Array(pB.memory.buffer)), dc).subarray(Bc / 4, Bc / 4 + nc)).slice();
        return pB.cVOB(cB[0], 4 * cB[1], 4), Vc
      }
    }
    Symbol.dispose && (Mc.prototype[Symbol.dispose] = Mc.prototype.free);
    class Pc {
      __destroy_into_raw() {
        const cB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, wc.unregister(this), cB
      }
      free() {
        const cB = this.__destroy_into_raw();
        pB.ckW8(cB, 0)
      }
      Ln(cB) {
        const Bc = PB(cB, pB.P7Br),
          nc = hB,
          Vc = pB.XCBi(this.__wbg_ptr, Bc, nc);
        if (Vc[1]) throw fB(Vc[0])
      }
      gV() {
        return pB.Frx8(this.__wbg_ptr) >>> 0
      }
      Un() {
        return pB.JeL8(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const cB = pB.NKNN();
        return this.__wbg_ptr = cB, wc.register(this, this.__wbg_ptr, this), this
      }
      run(cB, Bc) {
        Jc(cB, Mc);
        const nc = pB.XM1i(this.__wbg_ptr, cB.__wbg_ptr, Bc);
        if (nc[2]) throw fB(nc[1]);
        return nc[0] >>> 0
      }
      bV(cB) {
        const Bc = PB(cB, pB.P7Br),
          nc = hB;
        pB.NMXG(this.__wbg_ptr, Bc, nc)
      }
      Zn(cB) {
        const Bc = PB(cB, pB.P7Br),
          nc = hB;
        pB.cIVz(this.__wbg_ptr, Bc, nc)
      }
    }
    Symbol.dispose && (Pc.prototype[Symbol.dispose] = Pc.prototype.free);
    class qB {
      __destroy_into_raw() {
        const cB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, kB.unregister(this), cB
      }
      free() {
        const cB = this.__destroy_into_raw();
        pB.VvRG(cB, 0)
      }
      Cn(cB, Bc) {
        const nc = qn(cB, pB.P7Br),
          Vc = hB;
        return pB.lLCw(this.__wbg_ptr, nc, Vc, Bc) >>> 0
      }
      vV(cB, Bc, nc) {
        Jc(cB, Mc);
        const Vc = qn(nc, pB.P7Br),
          Ic = hB,
          rB = pB.nJHU(this.__wbg_ptr, cB.__wbg_ptr, Bc, Vc, Ic);
        if (rB[2]) throw fB(rB[1]);
        return rB[0] >>> 0
      }
      Qn(cB) {
        return pB.qHP7(this.__wbg_ptr, cB) >>> 0
      }
      constructor() {
        const cB = pB.beH1();
        return this.__wbg_ptr = cB, kB.register(this, this.__wbg_ptr, this), this
      }
      scan(cB, Bc) {
        Jc(cB, Mc);
        const nc = pB.iCn5(this.__wbg_ptr, cB.__wbg_ptr, Bc);
        if (nc[2]) throw fB(nc[1]);
        return nc[0] >>> 0
      }
      En(cB) {
        const Bc = qn(cB, pB.P7Br),
          nc = hB;
        pB.QAQt(this.__wbg_ptr, Bc, nc)
      }
      Nn() {
        return pB.P551(this.__wbg_ptr) >>> 0
      }
      Dn() {
        return pB.ihaY(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (qB.prototype[Symbol.dispose] = qB.prototype.free);
    class Oc {
      __destroy_into_raw() {
        const cB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Xc.unregister(this), cB
      }
      free() {
        const cB = this.__destroy_into_raw();
        pB.hyey(cB, 0)
      }
      Wn(cB) {
        const Bc = pB.mWq3(this.__wbg_ptr, cB);
        if (Bc[2]) throw fB(Bc[1]);
        return Bc[0] >>> 0
      }
      compute(cB, Bc, nc, Vc) {
        var Ic = sB(Vc) ? 0 : TB(Vc, pB.P7Br, pB.a8lB),
          rB = hB;
        const uc = pB.N7yQ(this.__wbg_ptr, cB, sB(Bc) ? Number.MAX_SAFE_INTEGER : Bc | 0, nc, Ic, rB);
        if (uc[2]) throw fB(uc[1]);
        return uc[0] >>> 0
      }
      Xn(cB) {
        const Bc = TB(cB, pB.P7Br, pB.a8lB),
          nc = hB;
        pB.cE9P(this.__wbg_ptr, Bc, nc)
      }
      Hn() {
        return pB.URjl(this.__wbg_ptr)
      }
      Fn(cB) {
        return pB.i68C(this.__wbg_ptr, cB) >>> 0
      }
      Jn() {
        return pB.vB2L(this.__wbg_ptr) >>> 0
      }
      jV() {
        return pB.KiHU(this.__wbg_ptr) >>> 0
      }
      Rn(cB, Bc) {
        const nc = pB.CqiM(this.__wbg_ptr, cB, Bc);
        if (nc[1]) throw fB(nc[0])
      }
      Kn() {
        return pB.f25W(this.__wbg_ptr) >>> 0
      }
      xV() {
        return pB.uUh0(this.__wbg_ptr) >>> 0
      }
      dn() {
        return pB.UyvH(this.__wbg_ptr) >>> 0
      }
      kV(cB, Bc, nc) {
        const Vc = PB(cB, pB.P7Br),
          Ic = hB,
          rB = PB(Bc, pB.P7Br),
          uc = hB,
          sc = pB.OSMU(this.__wbg_ptr, Vc, Ic, rB, uc, nc);
        if (sc[1]) throw fB(sc[0])
      }
      cI() {
        return pB.zT4b(this.__wbg_ptr) >>> 0
      }
      mesh(cB, Bc, nc, Vc, Ic) {
        const rB = pB.UwUx(this.__wbg_ptr, cB, Bc, nc, Vc, Ic);
        if (rB[2]) throw fB(rB[1]);
        return rB[0] >>> 0
      }
      constructor(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec, tB, Sc, yB, zB) {
        const pc = MB(cB, pB.P7Br),
          hc = hB,
          aB = OB(Bc, pB.P7Br),
          lc = hB,
          Yc = PB(nc, pB.P7Br),
          Lc = hB,
          gB = qn(Vc, pB.P7Br),
          Uc = hB,
          bB = qn(Ic, pB.P7Br),
          Zc = hB,
          Qc = PB(rB, pB.P7Br),
          Cc = hB,
          vB = PB(uc, pB.P7Br),
          Dc = hB,
          Nc = OB(sc, pB.P7Br),
          Ec = hB,
          oc = OB(Mc, pB.P7Br),
          Wc = hB,
          wc = qn(Pc, pB.P7Br),
          kB = hB;
        var Hc = sB(qB) ? 0 : MB(qB, pB.P7Br),
          Fc = hB;
        const Jc = PB(Oc, pB.P7Br),
          jB = hB,
          Rc = qn(Tc, pB.P7Br),
          iB = hB;
        var Kc = sB(fc) ? 0 : qn(fc, pB.P7Br),
          xB = hB;
        const dc = OB(mB, pB.P7Br),
          Ac = hB,
          Gc = pB.Ogx0(pc, hc, aB, lc, Yc, Lc, gB, Uc, bB, Zc, Qc, Cc, vB, Dc, Nc, Ec, oc, Wc, wc, kB, Hc, Fc, Jc, jB, Rc, iB, Kc, xB, dc, Ac, ec, tB, Sc, yB, zB);
        if (Gc[2]) throw fB(Gc[1]);
        return this.__wbg_ptr = Gc[0], Xc.register(this, this.__wbg_ptr, this), this
      }
      Gn(cB, Bc) {
        const nc = PB(cB, pB.P7Br),
          Vc = hB,
          Ic = pB.Ztrr(this.__wbg_ptr, nc, Vc, Bc);
        if (Ic[3]) throw fB(Ic[2]);
        var rB = iB(Ic[0], Ic[1]).slice();
        return pB.cVOB(Ic[0], 1 * Ic[1], 1), rB
      }
      BV(cB) {
        pB.Zghp(this.__wbg_ptr, sB(cB) ? 16777215 : cB)
      }
      nV(cB) {
        return pB.fWz1(this.__wbg_ptr, cB) >>> 0
      }
      IV() {
        return pB.iLsG(this.__wbg_ptr) >>> 0
      }
      VV() {
        const cB = pB.SkNE(this.__wbg_ptr);
        if (cB[2]) throw fB(cB[1]);
        return 0 !== cB[0]
      }
      rI() {
        return pB.ZYmU(this.__wbg_ptr) >>> 0
      }
      uV() {
        return pB.ckSA(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Oc.prototype[Symbol.dispose] = Oc.prototype.free);
    class Tc {
      __destroy_into_raw() {
        const cB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Hc.unregister(this), cB
      }
      free() {
        const cB = this.__destroy_into_raw();
        pB.FmBu(cB, 0)
      }
      compute(cB, Bc, nc, Vc) {
        var Ic = sB(Vc) ? 0 : TB(Vc, pB.P7Br, pB.a8lB),
          rB = hB;
        const uc = pB.QgCg(this.__wbg_ptr, cB, sB(Bc) ? Number.MAX_SAFE_INTEGER : Bc | 0, nc, Ic, rB);
        if (uc[2]) throw fB(uc[1]);
        return uc[0] >>> 0
      }
      Xn(cB) {
        const Bc = TB(cB, pB.P7Br, pB.a8lB),
          nc = hB;
        pB.st4b(this.__wbg_ptr, Bc, nc)
      }
      xV() {
        return pB.ScDn(this.__wbg_ptr) >>> 0
      }
      dn() {
        return pB.sDoT(this.__wbg_ptr) >>> 0
      }
      sV(cB) {
        const Bc = pB.YU1m(this.__wbg_ptr, cB);
        if (Bc[2]) throw fB(Bc[1]);
        return Bc[0] >>> 0
      }
      constructor(cB, Bc, nc, Vc, Ic, rB) {
        const uc = MB(cB, pB.P7Br),
          sc = hB,
          Mc = OB(Bc, pB.P7Br),
          Pc = hB,
          qB = PB(nc, pB.P7Br),
          Oc = hB,
          Tc = qn(Vc, pB.P7Br),
          fc = hB,
          mB = pB.ptTA(uc, sc, Mc, Pc, qB, Oc, Tc, fc, Ic, rB);
        if (mB[2]) throw fB(mB[1]);
        return this.__wbg_ptr = mB[0], Hc.register(this, this.__wbg_ptr, this), this
      }
      IV() {
        return pB.M3rT(this.__wbg_ptr) >>> 0
      }
      VV() {
        const cB = pB.TYzu(this.__wbg_ptr);
        if (cB[2]) throw fB(cB[1]);
        return 0 !== cB[0]
      }
      rI() {
        return pB.M2Oe(this.__wbg_ptr) >>> 0
      }
    }

    function fc() {
      const cB = pB.YUSY();
      var Bc = Rc(cB[0], cB[1]).slice();
      return pB.cVOB(cB[0], 4 * cB[1], 4), Bc
    }

    function mB(cB, Bc) {
      let nc, Vc;
      try {
        const Ic = MB(cB, pB.P7Br),
          rB = hB,
          uc = TB(Bc, pB.P7Br, pB.a8lB),
          sc = hB,
          Mc = pB.nQ1v(Ic, rB, uc, sc);
        return nc = Mc[0], Vc = Mc[1], Ac(Mc[0], Mc[1])
      } finally {
        pB.cVOB(nc, Vc, 1)
      }
    }

    function ec() {
      const cB = pB.Shzy();
      var Bc = Rc(cB[0], cB[1]).slice();
      return pB.cVOB(cB[0], 4 * cB[1], 4), Bc
    }

    function tB(cB) {
      return 0 !== pB.ZZYR(cB)
    }

    function Sc(cB, Bc) {
      const nc = TB(cB, pB.P7Br, pB.a8lB),
        Vc = hB,
        Ic = pB.CNCS(nc, Vc, Bc);
      if (Ic[1]) throw fB(Ic[0])
    }

    function yB() {
      pB.C1Y7()
    }

    function zB() {
      return pB.egud() >>> 0
    }

    function pc(cB) {
      return 0 !== pB.dgK4(cB)
    }

    function hc(cB) {
      return 0 !== pB.RCKI(cB)
    }

    function aB(cB) {
      pB.BSoT(cB)
    }

    function lc() {
      return pB.z6bY() >>> 0
    }

    function Yc() {
      return pB.kAsl() >>> 0
    }

    function Lc() {
      return 0 !== pB.A4Th()
    }

    function gB() {
      const cB = pB.Hxcw();
      var Bc = Rc(cB[0], cB[1]).slice();
      return pB.cVOB(cB[0], 4 * cB[1], 4), Bc
    }

    function Uc() {
      const cB = pB.vW7K();
      var Bc = Rc(cB[0], cB[1]).slice();
      return pB.cVOB(cB[0], 4 * cB[1], 4), Bc
    }

    function bB() {
      const cB = pB.bfLt();
      var Bc = Rc(cB[0], cB[1]).slice();
      return pB.cVOB(cB[0], 4 * cB[1], 4), Bc
    }

    function Zc() {
      return pB.FHjy() >>> 0
    }

    function Qc() {
      pB.IwHf()
    }

    function Cc() {
      let cB, Bc;
      try {
        const nc = pB.fNix();
        return cB = nc[0], Bc = nc[1], Ac(nc[0], nc[1])
      } finally {
        pB.cVOB(cB, Bc, 1)
      }
    }

    function vB(cB) {
      pB.YHVZ(Fc(cB))
    }

    function Dc() {
      return {
        __proto__: null,
        Grz5: {
          __proto__: null,
          xsPn: function(cB, Bc) {
            return Fc(Error(Ac(cB, Bc)))
          },
          l20d: function(cB, Bc) {
            throw new Error(Ac(cB, Bc))
          },
          LddU: function(cB) {
            IB(cB).call()
          },
          QxLg: function(cB, Bc) {
            console.error(Ac(cB, Bc))
          },
          y24G: function() {
            return performance.now()
          },
          ZZde: function(cB) {
            fB(cB)
          }
        }
      }
    }
    Symbol.dispose && (Tc.prototype[Symbol.dispose] = Tc.prototype.free);
    const Nc = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((cB => pB.O4eu(cB, 1))),
      Ec = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((cB => pB.iqbv(cB, 1))),
      oc = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((cB => pB.BMAo(cB, 1))),
      Wc = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((cB => pB.E34l(cB, 1))),
      wc = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((cB => pB.ckW8(cB, 1))),
      kB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((cB => pB.VvRG(cB, 1))),
      Xc = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((cB => pB.hyey(cB, 1))),
      Hc = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((cB => pB.FmBu(cB, 1)));

    function Fc(cB) {
      uB === rn.length && rn.push(rn.length + 1);
      const Bc = uB;
      return uB = rn[Bc], rn[Bc] = cB, Bc
    }

    function Jc(cB, Bc) {
      if (!(cB instanceof Bc)) throw new Error(`expected instance of ${Bc.name}`)
    }

    function jB(cB, Bc) {
      return cB >>>= 0, xB().subarray(cB / 8, cB / 8 + Bc)
    }

    function Rc(cB, Bc) {
      return cB >>>= 0, BB().subarray(cB / 4, cB / 4 + Bc)
    }

    function iB(cB, Bc) {
      return cB >>>= 0, VB().subarray(cB / 1, cB / 1 + Bc)
    }
    let Kc = null;

    function xB() {
      return null !== Kc && 0 !== Kc.byteLength || (Kc = new Float64Array(pB.memory.buffer)), Kc
    }
    let dc = null;

    function Ac(cB, Bc) {
      return function(cB, Bc) {
        tn += Bc, tn >= eB && (mn = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), mn.decode(), tn = Bc);
        return mn.decode(VB().subarray(cB, cB + Bc))
      }(cB >>> 0, Bc)
    }
    let Gc = null;
    let cn = null;

    function BB() {
      return null !== cn && 0 !== cn.byteLength || (cn = new Uint32Array(pB.memory.buffer)), cn
    }
    let nB = null;

    function VB() {
      return null !== nB && 0 !== nB.byteLength || (nB = new Uint8Array(pB.memory.buffer)), nB
    }

    function IB(cB) {
      return rn[cB]
    }
    let rn = new Array(1024).fill(void 0);
    rn.push(void 0, null, !0, !1);
    let uB = rn.length;

    function sB(cB) {
      return void 0 === cB || null === cB
    }

    function MB(cB, Bc) {
      const nc = Bc(2 * cB.length, 2) >>> 0;
      return (null !== Gc && 0 !== Gc.byteLength || (Gc = new Uint16Array(pB.memory.buffer)), Gc).set(cB, nc / 2), hB = cB.length, nc
    }

    function PB(cB, Bc) {
      const nc = Bc(4 * cB.length, 4) >>> 0;
      return BB().set(cB, nc / 4), hB = cB.length, nc
    }

    function qn(cB, Bc) {
      const nc = Bc(1 * cB.length, 1) >>> 0;
      return VB().set(cB, nc / 1), hB = cB.length, nc
    }

    function OB(cB, Bc) {
      const nc = Bc(8 * cB.length, 8) >>> 0;
      return xB().set(cB, nc / 8), hB = cB.length, nc
    }

    function TB(cB, Bc, nc) {
      if (void 0 === nc) {
        const nc = SB.encode(cB),
          Vc = Bc(nc.length, 1) >>> 0;
        return VB().subarray(Vc, Vc + nc.length).set(nc), hB = nc.length, Vc
      }
      let Vc = cB.length,
        Ic = Bc(Vc, 1) >>> 0;
      const rB = VB();
      let uc = 0;
      for (; uc < Vc; uc++) {
        const Bc = cB.charCodeAt(uc);
        if (Bc > 127) break;
        rB[Ic + uc] = Bc
      }
      if (uc !== Vc) {
        0 !== uc && (cB = cB.slice(uc)), Ic = nc(Ic, Vc, Vc = uc + 3 * cB.length, 1) >>> 0;
        const Bc = VB().subarray(Ic + uc, Ic + Vc);
        uc += SB.encodeInto(cB, Bc).written, Ic = nc(Ic, Vc, uc, 1) >>> 0
      }
      return hB = uc, Ic
    }

    function fB(cB) {
      const Bc = IB(cB);
      return function(cB) {
        cB < 1028 || (rn[cB] = uB, uB = cB)
      }(cB), Bc
    }
    let mn = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    mn.decode();
    const eB = 2146435072;
    let tn = 0;
    const SB = new TextEncoder;
    "encodeInto" in SB || (SB.encodeInto = function(cB, Bc) {
      const nc = SB.encode(cB);
      return Bc.set(nc), {
        read: cB.length,
        written: nc.length
      }
    });
    let yn, zn, pB, hB = 0;

    function an(cB, Bc) {
      return zn = cB, pB = cB.exports, yn = Bc, Kc = null, dc = null, Gc = null, cn = null, nB = null, pB.Z5BS(), pB
    }

    function lB(cB) {
      if (void 0 !== pB) return pB;
      void 0 !== cB && (Object.getPrototypeOf(cB) === Object.prototype ? ({
        module: cB
      } = cB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Bc = Dc();
      cB instanceof WebAssembly.Module || (cB = new WebAssembly.Module(cB));
      return an(new WebAssembly.Instance(cB, Bc), cB)
    }
    async function YB(cB) {
      if (void 0 !== pB) return pB;
      void 0 !== cB && (Object.getPrototypeOf(cB) === Object.prototype ? ({
        module_or_path: cB
      } = cB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Bc = Dc();
      ("string" === typeof cB || "function" === typeof Request && cB instanceof Request || "function" === typeof URL && cB instanceof URL) && (cB = fetch(cB));
      const {
        instance: nc,
        module: Vc
      } = await async function(cB, Bc) {
        if ("function" === typeof Response && cB instanceof Response) {
          if (!cB.ok) throw new Error(`failed to fetch Wasm: ${cB.status} ${cB.statusText} fetching '${cB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(cB, Bc)
          } catch (nc) {
            if (! function(cB) {
                switch (cB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(cB.type) || "application/wasm" === cB.headers.get("Content-Type")) throw nc;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", nc)
          }
          const Vc = await cB.arrayBuffer();
          return await WebAssembly.instantiate(Vc, Bc)
        } {
          const nc = await WebAssembly.instantiate(cB, Bc);
          return nc instanceof WebAssembly.Instance ? {
            instance: nc,
            module: cB
          } : nc
        }
      }(await cB, Bc);
      return an(nc, Vc)
    }
    var LB = nc(2870),
      gn = nc(35045);
    const UB = {
      name: LB.e,
      url: () => new nc.U(nc(35052)),
      init: YB,
      TV: Vc
    };

    function bn() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UB,
        Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UB,
        nc = arguments.length > 2 ? arguments[2] : void 0;
      return (0, gn.h)(cB, Bc, nc)
    }

    function ZB(cB) {
      return (0, LB.M)((() => cB), Vc, UB)
    }
  },
  5590: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc
    });
    var Vc = nc(2876);
    const Ic = {
      bloxd_wasm: () => "9830e55728d5b3a3e8e247acd9246d2afe9397afee3d7679c5186851b795279c",
      bloxd_wasm_client: () => "43b3dfe64b3f024b6ccadbc049b79c4bb01c3e906087eb702c13c76147ff6677",
      bloxd_wasm_workers: () => "f4667efb6edb11a5211786ebcbc8ff7ce445266c880aec3c3d635a4938e6ddee",
      bloxd_wasm_models: () => "e94dddee8db9a336b3072dca709432712894517261740ac0727858f4eb30123c",
      bloxd_wasm_webgpu: () => "dc3942e9838cce244b965d553196c7d403b31e947a3320d8fe5125346df312a4",
      bloxd_wasm_webgl: () => "a7d28f783db7c957405c1710e67df1a6dd352be69de5c1e6f77063bd8a448f21",
      bloxd_wasm_webgl1: () => "8c83eaeef0605129534a3d33690b45134286f4be4c6b67256ccbc82b15fb0a71",
      bloxd_wasm_replay: () => "26e1b96269b08aacc0c285eeee797aaac2ec51f6c54851fc1f5723fb98d27bc7",
      bloxd_wasm_recorder: () => "4fb59ecd47035f4cb6fb6b1e85d7546f4a01834acf32b594b6cd3fcac63a1867",
      bloxd_wasm_anim: () => "8ad9f4be7b931ce1b3f37c84ac34ed980350e5fc2f4b2d370736511ed2d289b4",
      bloxd_wasm_textures: () => "c51701085747355a7c41b99390b0bf4d2f6651a7c8972b29cc009568c50194b7",
      bloxd_wasm_shader_pack: () => "20f2099776f53d80b4976988e6dc4239208c30631bebb5d9cd48e9735424635d"
    };
    var rB = nc(5599);

    function uc(cB) {
      const Bc = Object.prototype.hasOwnProperty.call(Ic, cB) ? Ic[cB]() : void 0;
      if (void 0 !== Bc) return {
        sha256: Bc,
        onMismatch: rB.y
      };
      throw new Vc.j(`${cB} has no release digest, so this build refuses it`)
    }
  },
  35035: (cB, Bc, nc) => {
    function Vc(cB, Bc) {
      return new Error(`${cB}: ${Bc instanceof Error?`${Bc.name}: ${Bc.message}`:String(Bc)}`, {
        cause: Bc
      })
    }
    nc.d(Bc, {
      d: () => Vc
    })
  },
  35027: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc,
      f: () => Mc
    });
    var Vc = nc(2876),
      Ic = nc(5590),
      rB = nc(35035);

    function uc() {
      return new URL(new nc.U(nc(35037)).href, globalThis.location?.href).href
    }
    let sc = null;

    function Mc() {
      return sc ??= (async () => (0, Vc.w)(new URL(uc()), (0, Ic.c)("bloxd_wasm_textures")))().catch((cB => {
        throw (0, rB.d)((0, Vc.y)(cB), cB)
      })), sc
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);