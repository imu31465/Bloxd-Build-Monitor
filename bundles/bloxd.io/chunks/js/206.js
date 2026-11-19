export const id = 206;
export const ids = [206, 207];
export const modules = {
  35777: (zz, uz, bz) => {
    bz.d(uz, {
      reportCappedWasmFailure: () => lz,
      reportWasmFailure: () => iz
    });
    var Ez = bz(2982);
    const nz = Ez.b - 4;

    function iz(zz, uz, bz) {
      (0, Ez.f)(zz, uz, bz, !1)
    }

    function lz(zz, uz, bz) {
      (0, Ez.f)(zz, uz, bz, !1, nz)
    }
  },
  35773: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Zz,
      e: () => wz,
      i: () => Xz,
      m: () => Rz
    });
    var Ez = bz(35785),
      nz = bz(3468),
      iz = bz(35802),
      lz = bz(3475),
      Mz = bz(35777),
      tz = bz(2723),
      Hz = bz(3004),
      Oz = bz(2979),
      pz = bz(677);
    const dz = "bloxdWasmFailureReported";

    function Fz() {
      return "undefined" === typeof WebAssembly
    }

    function Zz() {
      return (0, Ez.g)()
    }

    function Rz() {
      if (Fz()) return "this browser has no WebAssembly";
      const zz = (0, nz.s)();
      return "compile" === zz || "instantiate" === zz ? `the core wasm didn't load here (${(0,nz.l)()})` : null
    }
    async function Kz(zz) {
      return await (0, iz.h)(iz.e, void 0, zz)
    }

    function wz() {
      Fz() || (0, pz.e)((() => {
        Kz()
      }))
    }

    function Xz() {
      if (Fz()) return async () => ((0, tz.e)("unsupported", 0), fz("unsupported", "This browser has no WebAssembly"), !1);
      const zz = {
        reloadFailedDownload: !0
      };
      return Kz(zz), async () => {
        var uz;
        const bz = performance.now();
        await Kz(zz);
        const Ez = (performance.now() - bz) / 1e3;
        if ((0, nz.R)()) return (0, tz.e)("ready", Ez), (0, lz.H)(iz.e.url()) && (0, Mz.reportCappedWasmFailure)("wasm_load", Hz.b.message, Hz.b.code), !0;
        const pz = Oz.c[null !== (uz = (0, nz.s)()) && void 0 !== uz ? uz : "call"];
        return (0, tz.e)(pz, Ez), fz(pz, (0, nz.l)()), !1
      }
    }

    function fz(zz, uz) {
      (0, Oz.f)(dz, `Bloxd wasm ${zz}, so the game can't start: ${uz}`, uz, zz)
    }
  },
  35815: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/bloxd_wasm_bg.7b2ccf15d47fe750ebaa.wasm"
  },
  35796: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/bloxd_wasm_textures_bg.1b960bdce49997a87938.wasm"
  },
  35802: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Au,
      h: () => Tu,
      k: () => Lu
    });
    var Ez = {};
    bz.r(Ez), bz.d(Ez, {
      Kp: () => nz,
      EnvelopeKind: () => iz,
      wp: () => lz,
      PhysicsEngine: () => Mz,
      Xp: () => tz,
      sp: () => Hz,
      rp: () => Oz,
      Np: () => pz,
      vp: () => dz,
      xp: () => Fz,
      Jp: () => Zz,
      Ap: () => Rz,
      Tp: () => Kz,
      Lp: () => wz,
      default: () => vu,
      initSync: () => Nu,
      Pp: () => Xz,
      Gp: () => fz,
      ap: () => sz,
      Vp: () => rz,
      mp: () => oz,
      qp: () => Nz,
      hp: () => vz,
      Up: () => xz,
      cp: () => Jz,
      Sp: () => Az,
      yp: () => Tz,
      Dp: () => Lz,
      Qp: () => Pz,
      Wp: () => Gz,
      jp: () => az
    });
    class nz {
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, mz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        su.mbKP(zz, 0)
      }
      Ip() {
        const zz = su.Ofqg(this.__wbg_ptr);
        if (zz[2]) throw Fu(zz[1]);
        return zz[0] >>> 0
      }
      Bp() {
        return su.aq63(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const zz = su.ZSR8();
        return this.__wbg_ptr = zz, mz.register(this, this.__wbg_ptr, this), this
      }
      Cp() {
        return su.ZGLh(this.__wbg_ptr) >>> 0
      }
      Yp(zz) {
        const uz = su.v9lr(this.__wbg_ptr, zz);
        if (uz[2]) throw Fu(uz[1]);
        return uz[0] >>> 0
      }
      kp(zz) {
        const uz = su.eE1Y(this.__wbg_ptr, zz);
        if (uz[2]) throw Fu(uz[1]);
        return uz[0] >>> 0
      }
    }
    Symbol.dispose && (nz.prototype[Symbol.dispose] = nz.prototype.free);
    const iz = Object.freeze({
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
    class lz {
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, qz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        su.LG4e(zz, 0)
      }
      bd(zz, uz) {
        const bz = su.s6iq(this.__wbg_ptr, zz, uz);
        if (bz[2]) throw Fu(bz[1]);
        return bz[0] >>> 0
      }
      Ed(zz) {
        const uz = su.H4Rv(this.__wbg_ptr, zz);
        if (uz[2]) throw Fu(uz[1]);
        return uz[0] >>> 0
      }
      ld() {
        su.NiHv(this.__wbg_ptr)
      }
      static Md() {
        return su.y73w() >>> 0
      }
      td() {
        return su.bEPp(this.__wbg_ptr) >>> 0
      }
      Hd() {
        const zz = su.PjQ2(this.__wbg_ptr);
        return 0 === zz[0] ? void 0 : zz[1]
      }
      Od() {
        return su.O1Td(this.__wbg_ptr) >>> 0
      }
      pd() {
        return su.A6pU(this.__wbg_ptr) >>> 0
      }
      static ud() {
        return su.P83q() >>> 0
      }
      constructor() {
        const zz = su.IxEU();
        return this.__wbg_ptr = zz, qz.register(this, this.__wbg_ptr, this), this
      }
      dd() {
        return su.UL91(this.__wbg_ptr) >>> 0
      }
      Fd() {
        return su.Thxg(this.__wbg_ptr) >>> 0
      }
      Zd() {
        return su.dfjW(this.__wbg_ptr) >>> 0
      }
      zd(zz) {
        return su.HY34(this.__wbg_ptr, zz) >>> 0
      }
      reserve(zz, uz) {
        const bz = su.Rsgv(this.__wbg_ptr, zz, uz);
        if (bz[1]) throw Fu(bz[0])
      }
      wd(zz, uz) {
        const bz = Hu(zz, su.rnAf),
          Ez = ru;
        su.VFDI(this.__wbg_ptr, bz, Ez, uz)
      }
      text() {
        let zz, uz;
        try {
          const bz = su.wqnH(this.__wbg_ptr);
          return zz = bz[0], uz = bz[1], Yz(bz[0], bz[1])
        } finally {
          su.oxRF(zz, uz, 1)
        }
      }
    }
    Symbol.dispose && (lz.prototype[Symbol.dispose] = lz.prototype.free);
    class Mz {
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, hz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        su.rmvB(zz, 0)
      }
      fd(zz, uz) {
        Qz(uz, nz);
        const bz = su.DLRt(this.__wbg_ptr, zz, uz.__wbg_ptr);
        if (bz[2]) throw Fu(bz[1]);
        return bz[0] >>> 0
      }
      rd() {
        const zz = su.fUYm(this.__wbg_ptr);
        if (zz[1]) throw Fu(zz[0])
      }
      Jd(zz, uz, bz, Ez, nz, iz, lz, Mz, Hz, Oz, pz) {
        Qz(zz, tz);
        const dz = su.gBGC(this.__wbg_ptr, zz.__wbg_ptr, uz, bz, Ez, nz, iz, lz, Mz, Hz, Oz, pz);
        if (dz[2]) throw Fu(dz[1]);
        return dz[0]
      }
      Ad() {
        const zz = su.f0LI(this.__wbg_ptr);
        var uz = Wz(zz[0], zz[1]).slice();
        return su.oxRF(zz[0], 8 * zz[1], 8), uz
      }
      Td() {
        return su.UWLH(this.__wbg_ptr) >>> 0
      }
      Ld() {
        return su.DSjX(this.__wbg_ptr) >>> 0
      }
      Pd() {
        return su.Xy2X(this.__wbg_ptr) >>> 0
      }
      constructor(zz, uz, bz, Ez, nz, iz, lz, Mz) {
        const tz = su.ORKn(zz, uz, bz, Ez, nz, iz, lz, Mz);
        if (tz[2]) throw Fu(tz[1]);
        return this.__wbg_ptr = tz[0], hz.register(this, this.__wbg_ptr, this), this
      }
      Vd(zz) {
        Qz(zz, nz);
        const uz = su.C27w(this.__wbg_ptr, zz.__wbg_ptr);
        if (uz[2]) throw Fu(uz[1]);
        return uz[0] >>> 0
      }
      qd(zz) {
        const uz = su.hPTb(this.__wbg_ptr, zz);
        if (uz[1]) throw Fu(uz[0])
      }
      hd() {
        return su.BHHr(this.__wbg_ptr) >>> 0
      }
      resume(zz, uz) {
        Qz(zz, tz), Qz(uz, nz);
        const bz = su.OwYd(this.__wbg_ptr, zz.__wbg_ptr, uz.__wbg_ptr);
        if (bz[2]) throw Fu(bz[1]);
        return bz[0] >>> 0
      }
      Qd(zz) {
        const uz = su.kdpg(this.__wbg_ptr, zz);
        if (uz[1]) throw Fu(uz[0])
      }
      Id(zz, uz) {
        Qz(uz, nz);
        const bz = su.XZ98(this.__wbg_ptr, zz, uz.__wbg_ptr);
        if (bz[1]) throw Fu(bz[0])
      }
      Yd(zz) {
        const uz = pu(zz, su.rnAf),
          bz = ru,
          Ez = su.OxpC(this.__wbg_ptr, uz, bz);
        if (Ez[1]) throw Fu(Ez[0])
      }
      Nd(zz, uz, bz, Ez, nz, iz) {
        const lz = su.K3aw(this.__wbg_ptr, zz, uz, bz, Ez, nz, iz);
        if (lz[1]) throw Fu(lz[0])
      }
      vd(zz, uz, bz, Ez) {
        const nz = Hu(zz, su.rnAf),
          iz = ru,
          lz = pu(uz, su.rnAf),
          Mz = ru,
          tz = pu(bz, su.rnAf),
          Hz = ru,
          Oz = pu(Ez, su.rnAf),
          pz = ru,
          dz = su.Khwu(this.__wbg_ptr, nz, iz, lz, Mz, tz, Hz, Oz, pz);
        if (dz[1]) throw Fu(dz[0])
      }
      zF(zz, uz) {
        Qz(uz, nz);
        const bz = su.pnkJ(this.__wbg_ptr, zz, uz.__wbg_ptr);
        if (bz[1]) throw Fu(bz[0])
      }
      ad(zz, uz, bz) {
        const Ez = su.Ol7j(this.__wbg_ptr, zz, uz, bz);
        if (Ez[1]) throw Fu(Ez[0])
      }
      bF(zz, uz, bz, Ez, nz, iz, lz, Mz, Hz, Oz) {
        Qz(zz, tz);
        return su.Flnb(this.__wbg_ptr, zz.__wbg_ptr, uz, bz, Ez, nz, iz, lz, Mz, Hz, Oz)
      }
    }
    Symbol.dispose && (Mz.prototype[Symbol.dispose] = Mz.prototype.free);
    class tz {
      static __wrap(zz) {
        const uz = Object.create(tz.prototype);
        return uz.__wbg_ptr = zz, Uz.register(uz, uz.__wbg_ptr, uz), uz
      }
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Uz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        su.uNqS(zz, 0)
      }
      iF(zz) {
        const uz = su.J3Gi(this.__wbg_ptr, zz);
        if (uz[2]) throw Fu(uz[1]);
        return uz[0] >>> 0
      }
      lF(zz, uz, bz) {
        return su.DTmS(this.__wbg_ptr, zz, uz, bz)
      }
      MF(zz, uz, bz) {
        return su.ibQc(this.__wbg_ptr, zz, uz, bz) >>> 0
      }
      tF(zz, uz, bz, Ez) {
        return 0 !== su.abIY(this.__wbg_ptr, zz, uz, bz, Ez)
      }
      HF() {
        su.AnGy(this.__wbg_ptr)
      }
      dF(zz) {
        const uz = su.a1Wm(this.__wbg_ptr, zz);
        if (uz[3]) throw Fu(uz[2]);
        var bz = jz(uz[0], uz[1]).slice();
        return su.oxRF(uz[0], 1 * uz[1], 1), bz
      }
      evict(zz, uz) {
        return su.kXQj(this.__wbg_ptr, zz, uz) >>> 0
      }
      FF() {
        su.zrJq(this.__wbg_ptr)
      }
      ZF(zz, uz, bz) {
        su.AGgw(this.__wbg_ptr, zz, uz, bz)
      }
      RF(zz) {
        const uz = su.hHi4(this.__wbg_ptr, zz);
        if (uz[1]) throw Fu(uz[0])
      }
      KF() {
        return su.CF7r(this.__wbg_ptr) >>> 0
      }
      wF() {
        return su.Zo35(this.__wbg_ptr) >>> 0
      }
      XF(zz, uz, bz) {
        su.gN8e(this.__wbg_ptr, zz, uz, bz)
      }
      fF(zz, uz, bz) {
        su.qvuA(this.__wbg_ptr, zz, uz, bz)
      }
      sF() {
        return su.M50V(this.__wbg_ptr) >>> 0
      }
      rF() {
        return su.oR9G(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const zz = su.W3ot();
        return this.__wbg_ptr = zz, Uz.register(this, this.__wbg_ptr, this), this
      }
      static oF() {
        const zz = su.WurJ();
        return tz.__wrap(zz)
      }
      NF() {
        return su.pkIt(this.__wbg_ptr) >>> 0
      }
      vF() {
        return su.MwvL(this.__wbg_ptr) >>> 0
      }
      JF(zz, uz, bz, Ez) {
        const nz = su.ar8E(this.__wbg_ptr, zz, uz, bz, Ez);
        if (nz[1]) throw Fu(nz[0])
      }
      AF() {
        return su.MxMH(this.__wbg_ptr) >>> 0
      }
      TF() {
        return su.VnXF(this.__wbg_ptr) >>> 0
      }
      LF(zz, uz, bz, Ez) {
        su.dJ2F(this.__wbg_ptr, zz, uz, bz, Ez)
      }
      PF(zz) {
        su.XzRG(this.__wbg_ptr, zz)
      }
      aF(zz, uz, bz, Ez, nz) {
        const iz = Ou(uz, su.rnAf),
          lz = ru,
          Mz = Hu(bz, su.rnAf),
          tz = ru,
          Hz = pu(Ez, su.rnAf),
          Oz = ru,
          pz = su.AZFX(this.__wbg_ptr, zz, iz, lz, Mz, tz, Hz, Oz, nz);
        if (pz[1]) throw Fu(pz[0])
      }
      GF(zz, uz, bz, Ez) {
        const nz = Ou(zz, su.rnAf),
          iz = ru,
          lz = Hu(uz, su.rnAf),
          Mz = ru,
          tz = pu(bz, su.rnAf),
          Hz = ru,
          Oz = Ou(Ez, su.rnAf),
          pz = ru,
          dz = su.gpgC(this.__wbg_ptr, nz, iz, lz, Mz, tz, Hz, Oz, pz);
        if (dz[1]) throw Fu(dz[0])
      }
      cF(zz) {
        const uz = Ou(zz, su.rnAf),
          bz = ru,
          Ez = su.IMqZ(this.__wbg_ptr, uz, bz);
        if (Ez[1]) throw Fu(Ez[0])
      }
      gF() {
        return su.vwoo(this.__wbg_ptr) >>> 0
      }
      SF(zz) {
        const uz = su.xQa3(this.__wbg_ptr, zz);
        if (uz[2]) throw Fu(uz[1]);
        return uz[0] >>> 0
      }
      steer() {
        return su.kAlk(this.__wbg_ptr) >>> 0
      }
      yF() {
        const zz = su.JiPP(this.__wbg_ptr);
        var uz = Wz(zz[0], zz[1]).slice();
        return su.oxRF(zz[0], 8 * zz[1], 8), uz
      }
      DF() {
        return su.p6XV(this.__wbg_ptr) >>> 0
      }
      Sd() {
        const zz = su.PK1V(this.__wbg_ptr);
        var uz, bz, Ez = (uz = zz[0], bz = zz[1], uz >>>= 0, (null !== Cz && 0 !== Cz.byteLength || (Cz = new Int32Array(su.memory.buffer)), Cz).subarray(uz / 4, uz / 4 + bz)).slice();
        return su.oxRF(zz[0], 4 * zz[1], 4), Ez
      }
    }
    Symbol.dispose && (tz.prototype[Symbol.dispose] = tz.prototype.free);
    class Hz {
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, cz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        su.BeHI(zz, 0)
      }
      QF(zz) {
        const uz = Hu(zz, su.rnAf),
          bz = ru,
          Ez = su.JB8n(this.__wbg_ptr, uz, bz);
        if (Ez[1]) throw Fu(Ez[0])
      }
      WF() {
        return su.KNiu(this.__wbg_ptr) >>> 0
      }
      eF() {
        return su.SioB(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const zz = su.tpp1();
        return this.__wbg_ptr = zz, cz.register(this, this.__wbg_ptr, this), this
      }
      run(zz, uz) {
        Qz(zz, tz);
        const bz = su.xK4D(this.__wbg_ptr, zz.__wbg_ptr, uz);
        if (bz[2]) throw Fu(bz[1]);
        return bz[0] >>> 0
      }
      jF(zz) {
        const uz = Hu(zz, su.rnAf),
          bz = ru;
        su.wak6(this.__wbg_ptr, uz, bz)
      }
      IF(zz) {
        const uz = Hu(zz, su.rnAf),
          bz = ru;
        su.hT8b(this.__wbg_ptr, uz, bz)
      }
    }
    Symbol.dispose && (Hz.prototype[Symbol.dispose] = Hz.prototype.free);
    class Oz {
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, gz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        su.Q532(zz, 0)
      }
      CF(zz, uz) {
        const bz = Ou(zz, su.rnAf),
          Ez = ru;
        return su.bCW0(this.__wbg_ptr, bz, Ez, uz) >>> 0
      }
      YF(zz, uz, bz) {
        Qz(zz, tz);
        const Ez = Ou(bz, su.rnAf),
          nz = ru,
          iz = su.lylc(this.__wbg_ptr, zz.__wbg_ptr, uz, Ez, nz);
        if (iz[2]) throw Fu(iz[1]);
        return iz[0] >>> 0
      }
      BF(zz) {
        return su.DeOZ(this.__wbg_ptr, zz) >>> 0
      }
      constructor() {
        const zz = su.XvQP();
        return this.__wbg_ptr = zz, gz.register(this, this.__wbg_ptr, this), this
      }
      scan(zz, uz) {
        Qz(zz, tz);
        const bz = su.GhiW(this.__wbg_ptr, zz.__wbg_ptr, uz);
        if (bz[2]) throw Fu(bz[1]);
        return bz[0] >>> 0
      }
      uZ(zz) {
        const uz = Ou(zz, su.rnAf),
          bz = ru;
        su.fkUZ(this.__wbg_ptr, uz, bz)
      }
      zZ() {
        return su.OG8T(this.__wbg_ptr) >>> 0
      }
      kF() {
        return su.IS17(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Oz.prototype[Symbol.dispose] = Oz.prototype.free);
    class pz {
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Sz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        su.SAzH(zz, 0)
      }
      EZ(zz) {
        const uz = su.WMNV(this.__wbg_ptr, zz);
        if (uz[2]) throw Fu(uz[1]);
        return uz[0] >>> 0
      }
      compute(zz, uz, bz, Ez) {
        var nz = Mu(Ez) ? 0 : du(Ez, su.rnAf, su.GlXW),
          iz = ru;
        const lz = su.zWHH(this.__wbg_ptr, zz, Mu(uz) ? Number.MAX_SAFE_INTEGER : uz | 0, bz, nz, iz);
        if (lz[2]) throw Fu(lz[1]);
        return lz[0] >>> 0
      }
      lZ(zz) {
        const uz = du(zz, su.rnAf, su.GlXW),
          bz = ru;
        su.hdtO(this.__wbg_ptr, uz, bz)
      }
      tZ() {
        return su.jvwy(this.__wbg_ptr)
      }
      HZ(zz) {
        return su.E6PB(this.__wbg_ptr, zz) >>> 0
      }
      OZ() {
        return su.tLoj(this.__wbg_ptr) >>> 0
      }
      pZ() {
        return su.v6Vt(this.__wbg_ptr) >>> 0
      }
      dZ(zz, uz) {
        const bz = su.JPX0(this.__wbg_ptr, zz, uz);
        if (bz[1]) throw Fu(bz[0])
      }
      FZ() {
        return su.IGsq(this.__wbg_ptr) >>> 0
      }
      ZZ() {
        return su.kLG0(this.__wbg_ptr) >>> 0
      }
      RZ() {
        return su.KutG(this.__wbg_ptr) >>> 0
      }
      iZ(zz, uz, bz) {
        const Ez = Hu(zz, su.rnAf),
          nz = ru,
          iz = Hu(uz, su.rnAf),
          lz = ru,
          Mz = su.dl4m(this.__wbg_ptr, Ez, nz, iz, lz, bz);
        if (Mz[1]) throw Fu(Mz[0])
      }
      wZ() {
        return su.W77T(this.__wbg_ptr) >>> 0
      }
      mesh(zz, uz, bz, Ez, nz) {
        const iz = su.M9Vw(this.__wbg_ptr, zz, uz, bz, Ez, nz);
        if (iz[2]) throw Fu(iz[1]);
        return iz[0] >>> 0
      }
      constructor(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz, Kz, wz, Xz, fz) {
        const sz = tu(zz, su.rnAf),
          rz = ru,
          oz = pu(uz, su.rnAf),
          Nz = ru,
          vz = Hu(bz, su.rnAf),
          xz = ru,
          Jz = Ou(Ez, su.rnAf),
          Az = ru,
          Tz = Ou(nz, su.rnAf),
          Lz = ru,
          Pz = Hu(iz, su.rnAf),
          Gz = ru,
          az = Hu(lz, su.rnAf),
          Vz = ru,
          mz = pu(Mz, su.rnAf),
          qz = ru,
          hz = pu(tz, su.rnAf),
          Uz = ru,
          cz = Ou(Hz, su.rnAf),
          gz = ru;
        var yz = Mu(Oz) ? 0 : tu(Oz, su.rnAf),
          Dz = ru;
        const Qz = Hu(pz, su.rnAf),
          Wz = ru,
          ez = Ou(dz, su.rnAf),
          jz = ru;
        var Iz = Mu(Fz) ? 0 : Ou(Fz, su.rnAf),
          Bz = ru;
        const Cz = pu(Zz, su.rnAf),
          Yz = ru,
          kz = su.DlDJ(sz, rz, oz, Nz, vz, xz, Jz, Az, Tz, Lz, Pz, Gz, az, Vz, mz, qz, hz, Uz, cz, gz, yz, Dz, Qz, Wz, ez, jz, Iz, Bz, Cz, Yz, Rz, Kz, wz, Xz, fz);
        if (kz[2]) throw Fu(kz[1]);
        return this.__wbg_ptr = kz[0], Sz.register(this, this.__wbg_ptr, this), this
      }
      KZ(zz, uz) {
        const bz = Hu(zz, su.rnAf),
          Ez = ru,
          nz = su.ln7l(this.__wbg_ptr, bz, Ez, uz);
        if (nz[3]) throw Fu(nz[2]);
        var iz = jz(nz[0], nz[1]).slice();
        return su.oxRF(nz[0], 1 * nz[1], 1), iz
      }
      XZ(zz) {
        su.oJBg(this.__wbg_ptr, Mu(zz) ? 16777215 : zz)
      }
      fZ(zz) {
        return su.IO9A(this.__wbg_ptr, zz) >>> 0
      }
      rZ() {
        return su.ijwU(this.__wbg_ptr) >>> 0
      }
      sZ() {
        const zz = su.iHFi(this.__wbg_ptr);
        if (zz[2]) throw Fu(zz[1]);
        return 0 !== zz[0]
      }
      oZ() {
        return su.ksv3(this.__wbg_ptr) >>> 0
      }
      NZ() {
        return su.gtNF(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (pz.prototype[Symbol.dispose] = pz.prototype.free);
    class dz {
      __destroy_into_raw() {
        const zz = this.__wbg_ptr;
        return this.__wbg_ptr = 0, yz.unregister(this), zz
      }
      free() {
        const zz = this.__destroy_into_raw();
        su.adxw(zz, 0)
      }
      compute(zz, uz, bz, Ez) {
        var nz = Mu(Ez) ? 0 : du(Ez, su.rnAf, su.GlXW),
          iz = ru;
        const lz = su.nlI0(this.__wbg_ptr, zz, Mu(uz) ? Number.MAX_SAFE_INTEGER : uz | 0, bz, nz, iz);
        if (lz[2]) throw Fu(lz[1]);
        return lz[0] >>> 0
      }
      lZ(zz) {
        const uz = du(zz, su.rnAf, su.GlXW),
          bz = ru;
        su.GHJq(this.__wbg_ptr, uz, bz)
      }
      ZZ() {
        return su.uVZ5(this.__wbg_ptr) >>> 0
      }
      RZ() {
        return su.oGSo(this.__wbg_ptr) >>> 0
      }
      vZ(zz) {
        const uz = su.mHnR(this.__wbg_ptr, zz);
        if (uz[2]) throw Fu(uz[1]);
        return uz[0] >>> 0
      }
      constructor(zz, uz, bz, Ez, nz, iz) {
        const lz = tu(zz, su.rnAf),
          Mz = ru,
          tz = pu(uz, su.rnAf),
          Hz = ru,
          Oz = Hu(bz, su.rnAf),
          pz = ru,
          dz = Ou(Ez, su.rnAf),
          Fz = ru,
          Zz = su.I32z(lz, Mz, tz, Hz, Oz, pz, dz, Fz, nz, iz);
        if (Zz[2]) throw Fu(Zz[1]);
        return this.__wbg_ptr = Zz[0], yz.register(this, this.__wbg_ptr, this), this
      }
      rZ() {
        return su.vW13(this.__wbg_ptr) >>> 0
      }
      sZ() {
        const zz = su.fWgY(this.__wbg_ptr);
        if (zz[2]) throw Fu(zz[1]);
        return 0 !== zz[0]
      }
      oZ() {
        return su.pduT(this.__wbg_ptr) >>> 0
      }
    }

    function Fz() {
      const zz = su.eRJK();
      var uz = ez(zz[0], zz[1]).slice();
      return su.oxRF(zz[0], 4 * zz[1], 4), uz
    }

    function Zz(zz, uz) {
      let bz, Ez;
      try {
        const nz = tu(zz, su.rnAf),
          iz = ru,
          lz = du(uz, su.rnAf, su.GlXW),
          Mz = ru,
          tz = su.nRiW(nz, iz, lz, Mz);
        return bz = tz[0], Ez = tz[1], Yz(tz[0], tz[1])
      } finally {
        su.oxRF(bz, Ez, 1)
      }
    }

    function Rz() {
      const zz = su.DNfc();
      var uz = ez(zz[0], zz[1]).slice();
      return su.oxRF(zz[0], 4 * zz[1], 4), uz
    }

    function Kz(zz) {
      return 0 !== su.bfiC(zz)
    }

    function wz(zz, uz) {
      const bz = du(zz, su.rnAf, su.GlXW),
        Ez = ru,
        nz = su.Hyni(bz, Ez, uz);
      if (nz[1]) throw Fu(nz[0])
    }

    function Xz() {
      su.p6lP()
    }

    function fz() {
      return su.T0YV() >>> 0
    }

    function sz(zz) {
      return 0 !== su.u84V(zz)
    }

    function rz(zz) {
      return 0 !== su.nyFT(zz)
    }

    function oz(zz) {
      su.lEa2(zz)
    }

    function Nz() {
      return su.QQdh() >>> 0
    }

    function vz() {
      return su.Ykgy() >>> 0
    }

    function xz() {
      return 0 !== su.wCQB()
    }

    function Jz() {
      const zz = su.CkEM();
      var uz = ez(zz[0], zz[1]).slice();
      return su.oxRF(zz[0], 4 * zz[1], 4), uz
    }

    function Az() {
      const zz = su.KdNS();
      var uz = ez(zz[0], zz[1]).slice();
      return su.oxRF(zz[0], 4 * zz[1], 4), uz
    }

    function Tz() {
      const zz = su.qW34();
      var uz = ez(zz[0], zz[1]).slice();
      return su.oxRF(zz[0], 4 * zz[1], 4), uz
    }

    function Lz() {
      return su.VV5d() >>> 0
    }

    function Pz() {
      su.vSnj()
    }

    function Gz() {
      let zz, uz;
      try {
        const bz = su.h4co();
        return zz = bz[0], uz = bz[1], Yz(bz[0], bz[1])
      } finally {
        su.oxRF(zz, uz, 1)
      }
    }

    function az(zz) {
      su.jrWW(Dz(zz))
    }

    function Vz() {
      return {
        __proto__: null,
        D5mQ: {
          __proto__: null,
          wR8Y: function(zz, uz) {
            return Dz(Error(Yz(zz, uz)))
          },
          neDe: function(zz, uz) {
            throw new Error(Yz(zz, uz))
          },
          eqRY: function(zz) {
            nu(zz).call()
          },
          Lcct: function(zz, uz) {
            console.error(Yz(zz, uz))
          },
          PWfm: function() {
            return performance.now()
          },
          UM9d: function(zz) {
            Fu(zz)
          }
        }
      }
    }
    Symbol.dispose && (dz.prototype[Symbol.dispose] = dz.prototype.free);
    const mz = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((zz => su.mbKP(zz, 1))),
      qz = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((zz => su.LG4e(zz, 1))),
      hz = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((zz => su.rmvB(zz, 1))),
      Uz = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((zz => su.uNqS(zz, 1))),
      cz = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((zz => su.BeHI(zz, 1))),
      gz = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((zz => su.Q532(zz, 1))),
      Sz = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((zz => su.SAzH(zz, 1))),
      yz = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((zz => su.adxw(zz, 1)));

    function Dz(zz) {
      lu === iu.length && iu.push(iu.length + 1);
      const uz = lu;
      return lu = iu[uz], iu[uz] = zz, uz
    }

    function Qz(zz, uz) {
      if (!(zz instanceof uz)) throw new Error(`expected instance of ${uz.name}`)
    }

    function Wz(zz, uz) {
      return zz >>>= 0, Bz().subarray(zz / 8, zz / 8 + uz)
    }

    function ez(zz, uz) {
      return zz >>>= 0, uu().subarray(zz / 4, zz / 4 + uz)
    }

    function jz(zz, uz) {
      return zz >>>= 0, Eu().subarray(zz / 1, zz / 1 + uz)
    }
    let Iz = null;

    function Bz() {
      return null !== Iz && 0 !== Iz.byteLength || (Iz = new Float64Array(su.memory.buffer)), Iz
    }
    let Cz = null;

    function Yz(zz, uz) {
      return function(zz, uz) {
        Ku += uz, Ku >= Ru && (Zu = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Zu.decode(), Ku = uz);
        return Zu.decode(Eu().subarray(zz, zz + uz))
      }(zz >>> 0, uz)
    }
    let kz = null;
    let zu = null;

    function uu() {
      return null !== zu && 0 !== zu.byteLength || (zu = new Uint32Array(su.memory.buffer)), zu
    }
    let bu = null;

    function Eu() {
      return null !== bu && 0 !== bu.byteLength || (bu = new Uint8Array(su.memory.buffer)), bu
    }

    function nu(zz) {
      return iu[zz]
    }
    let iu = new Array(1024).fill(void 0);
    iu.push(void 0, null, !0, !1);
    let lu = iu.length;

    function Mu(zz) {
      return void 0 === zz || null === zz
    }

    function tu(zz, uz) {
      const bz = uz(2 * zz.length, 2) >>> 0;
      return (null !== kz && 0 !== kz.byteLength || (kz = new Uint16Array(su.memory.buffer)), kz).set(zz, bz / 2), ru = zz.length, bz
    }

    function Hu(zz, uz) {
      const bz = uz(4 * zz.length, 4) >>> 0;
      return uu().set(zz, bz / 4), ru = zz.length, bz
    }

    function Ou(zz, uz) {
      const bz = uz(1 * zz.length, 1) >>> 0;
      return Eu().set(zz, bz / 1), ru = zz.length, bz
    }

    function pu(zz, uz) {
      const bz = uz(8 * zz.length, 8) >>> 0;
      return Bz().set(zz, bz / 8), ru = zz.length, bz
    }

    function du(zz, uz, bz) {
      if (void 0 === bz) {
        const bz = wu.encode(zz),
          Ez = uz(bz.length, 1) >>> 0;
        return Eu().subarray(Ez, Ez + bz.length).set(bz), ru = bz.length, Ez
      }
      let Ez = zz.length,
        nz = uz(Ez, 1) >>> 0;
      const iz = Eu();
      let lz = 0;
      for (; lz < Ez; lz++) {
        const uz = zz.charCodeAt(lz);
        if (uz > 127) break;
        iz[nz + lz] = uz
      }
      if (lz !== Ez) {
        0 !== lz && (zz = zz.slice(lz)), nz = bz(nz, Ez, Ez = lz + 3 * zz.length, 1) >>> 0;
        const uz = Eu().subarray(nz + lz, nz + Ez);
        lz += wu.encodeInto(zz, uz).written, nz = bz(nz, Ez, lz, 1) >>> 0
      }
      return ru = lz, nz
    }

    function Fu(zz) {
      const uz = nu(zz);
      return function(zz) {
        zz < 1028 || (iu[zz] = lu, lu = zz)
      }(zz), uz
    }
    let Zu = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Zu.decode();
    const Ru = 2146435072;
    let Ku = 0;
    const wu = new TextEncoder;
    "encodeInto" in wu || (wu.encodeInto = function(zz, uz) {
      const bz = wu.encode(zz);
      return uz.set(bz), {
        read: zz.length,
        written: bz.length
      }
    });
    let Xu, fu, su, ru = 0;

    function ou(zz, uz) {
      return fu = zz, su = zz.exports, Xu = uz, Iz = null, Cz = null, kz = null, zu = null, bu = null, su.KMNY(), su
    }

    function Nu(zz) {
      if (void 0 !== su) return su;
      void 0 !== zz && (Object.getPrototypeOf(zz) === Object.prototype ? ({
        module: zz
      } = zz) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const uz = Vz();
      zz instanceof WebAssembly.Module || (zz = new WebAssembly.Module(zz));
      return ou(new WebAssembly.Instance(zz, uz), zz)
    }
    async function vu(zz) {
      if (void 0 !== su) return su;
      void 0 !== zz && (Object.getPrototypeOf(zz) === Object.prototype ? ({
        module_or_path: zz
      } = zz) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const uz = Vz();
      ("string" === typeof zz || "function" === typeof Request && zz instanceof Request || "function" === typeof URL && zz instanceof URL) && (zz = fetch(zz));
      const {
        instance: bz,
        module: Ez
      } = await async function(zz, uz) {
        if ("function" === typeof Response && zz instanceof Response) {
          if (!zz.ok) throw new Error(`failed to fetch Wasm: ${zz.status} ${zz.statusText} fetching '${zz.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(zz, uz)
          } catch (bz) {
            if (! function(zz) {
                switch (zz) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(zz.type) || "application/wasm" === zz.headers.get("Content-Type")) throw bz;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", bz)
          }
          const Ez = await zz.arrayBuffer();
          return await WebAssembly.instantiate(Ez, uz)
        } {
          const bz = await WebAssembly.instantiate(zz, uz);
          return bz instanceof WebAssembly.Instance ? {
            instance: bz,
            module: zz
          } : bz
        }
      }(await zz, uz);
      return ou(bz, Ez)
    }
    var xu = bz(3468),
      Ju = bz(35811);
    const Au = {
      name: xu.e,
      url: () => new bz.U(bz(35815)),
      init: vu,
      bindings: Ez
    };

    function Tu() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Au,
        uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Au,
        bz = arguments.length > 2 ? arguments[2] : void 0;
      return (0, Ju.g)(zz, uz, bz)
    }

    function Lu(zz) {
      return (0, xu.N)((() => zz), Ez, Au)
    }
  },
  35791: (zz, uz, bz) => {
    function Ez(zz, uz) {
      return new Error(`${zz}: ${uz instanceof Error?`${uz.name}: ${uz.message}`:String(uz)}`, {
        cause: uz
      })
    }
    bz.d(uz, {
      d: () => Ez
    })
  },
  35785: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz,
      g: () => tz
    });
    var Ez = bz(3475),
      nz = bz(6346),
      iz = bz(35791);

    function lz() {
      return new URL(new bz.U(bz(35796)).href, globalThis.location?.href).href
    }
    let Mz = null;

    function tz() {
      return Mz ??= (async () => (0, Ez.x)(new URL(lz()), (0, nz.d)("bloxd_wasm_textures")))().catch((zz => {
        throw (0, iz.d)((0, Ez.C)(zz), zz)
      })), Mz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);