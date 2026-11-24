export const id = 212;
export const ids = [212, 213];
export const modules = {
  36283: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      CAPPED_COUNTS_VISIT_CAP: () => oB,
      reportCappedWasmFailure: () => kB,
      reportUncappedWasmFailure: () => vB,
      reportWasmCrash: () => JB,
      reportWasmFailure: () => GB
    });
    var TB = ZB(3101);

    function JB(BB) {
      (0, TB.reportClientError)("wasm_load", BB.message, BB.code)
    }
    const oB = TB.MAX_ERRORS_PER_VISIT - 4;

    function GB(BB, IB, ZB) {
      (0, TB.reportClientError)(BB, IB, ZB, !1)
    }

    function vB(BB, IB, ZB) {
      (0, TB.reportClientError)(BB, IB, ZB, !1, 1 / 0)
    }

    function kB(BB, IB, ZB) {
      (0, TB.reportClientError)(BB, IB, ZB, !1, oB)
    }
  },
  36276: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => CB,
      f: () => wB,
      g: () => OB,
      i: () => QB
    });
    var TB = ZB(36300),
      JB = ZB(3036),
      oB = ZB(36320),
      GB = ZB(3043),
      vB = ZB(36283),
      kB = ZB(3097),
      cB = ZB(3396),
      nB = ZB(3388),
      hB = ZB(36292),
      zB = ZB(3101),
      FB = ZB(36294),
      NB = ZB(36297),
      gB = ZB(3875);
    let qB = !1;
    const yB = 40;
    var UB = ZB(3733);
    const WB = "bloxdWasmFailureReported";

    function dB() {
      return "undefined" === typeof WebAssembly
    }

    function CB() {
      return (0, TB.f)()
    }

    function QB() {
      if (dB()) return "this browser has no WebAssembly";
      const BB = (0, JB.m)();
      return "compile" === BB || "instantiate" === BB ? `the core wasm didn't load here (${(0,JB.g)()})` : null
    }
    async function sB(BB) {
      return await (0, oB.h)(oB.e, void 0, BB)
    }

    function wB() {
      dB() || (0, UB.c)((() => {
        sB()
      }))
    }

    function OB() {
      if (dB()) return async () => ((0, kB.f)("unsupported", 0), YB("unsupported", "This browser has no WebAssembly"), !1);
      const BB = {
        reloadFailedDownload: !0
      };
      return sB(BB), async () => {
        var IB;
        const ZB = performance.now();
        await sB(BB);
        const TB = (performance.now() - ZB) / 1e3;
        if ((0, JB.M)()) return (0, kB.f)("ready", TB), qB || (qB = !0, (0, JB.S)((() => {
          if ("call" !== (0, JB.m)()) return;
          const BB = (0, JB.j)(),
            IB = (0, hB.l)(BB, JB.B, JB.Z),
            ZB = (0, JB.r)().buffer.byteLength,
            TB = (0, hB.h)(IB.kind, IB.refusedBytes),
            oB = TB ? "alloc_failed" : IB.kind,
            GB = (0, FB.e)(ZB),
            vB = TB ? `_r${Math.floor(Math.log2(IB.refusedBytes))}` : "",
            kB = (0, gB.e)();
          null === kB && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const cB = new Error((0, NB.c)(BB, ZB, IB));
          if (BB instanceof Error && void 0 !== BB.stack) {
            const IB = BB.stack.split("\n"),
              ZB = IB.length > yB ? [...IB.slice(0, yB / 2), ...IB.slice(-yB / 2)] : IB;
            cB.stack = ZB.join("\n")
          }(0, zB.reportClientError)("wasm_load", cB, `wasm_call_${oB}_${null!==kB&&void 0!==kB?kB:"unnamed"}_m${GB}${vB}`)
        }))), (0, GB.S)(oB.e.url()) && (0, vB.reportCappedWasmFailure)("wasm_load", cB.d.message, cB.d.code), !0;
        const UB = nB.e[null !== (IB = (0, JB.m)()) && void 0 !== IB ? IB : "call"];
        return (0, kB.f)(UB, TB), YB(UB, (0, JB.g)()), !1
      }
    }

    function YB(BB, IB) {
      (0, nB.j)(WB, `Bloxd wasm ${BB}, so the game can't start: ${IB}`, IB, BB)
    }
  },
  36297: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB,
      g: () => cB,
      h: () => GB,
      k: () => hB
    });
    var TB = ZB(36292),
      JB = ZB(11);
    const oB = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function GB(BB) {
      if (BB instanceof WebAssembly.RuntimeError) return !0;
      const IB = BB instanceof Error ? BB.stack : void 0;
      return "string" === typeof IB && oB.test(IB)
    }

    function vB(BB, IB, ZB) {
      var JB;
      const GB = BB instanceof Error ? BB.name : "thrown",
        vB = (BB instanceof Error && null !== (JB = BB.stack) && void 0 !== JB ? JB : "").split("\n").filter((BB => oB.test(BB))).slice(0, 8).map((BB => BB.trim())),
        kB = null === IB ? "wasm memory unknown" : `wasm memory ${Math.round(IB/2**20)} MB`,
        cB = null === ZB.panic ? "" : `, panic: ${(0,TB.j)(ZB.panic)}`,
        nB = `${GB}: ${BB instanceof Error?BB.message:String(BB)}`;
      return `${(0,TB.m)(ZB.kind,ZB.refusedBytes)} ${nB} (${kB})${cB}${vB.length>0?` | ${vB.join(" < ")}`:""}`
    }
    const kB = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function cB(BB) {
      var IB;
      let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(BB instanceof Error) || !kB.test(BB.message)) return {};
      if (!("detached" in ZB)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, JB.V)(null === (IB = (0, JB.M)(ZB, "detached")) || void 0 === IB ? void 0 : IB.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const nB = 500;

    function hB(BB) {
      let IB = "[object Object]";
      try {
        IB = String(BB)
      } catch {}
      if ("[object Object]" !== IB) return IB;
      try {
        var ZB, TB;
        return null !== (ZB = null === (TB = JSON.stringify(BB)) || void 0 === TB ? void 0 : TB.slice(0, nB)) && void 0 !== ZB ? ZB : IB
      } catch {
        return IB
      }
    }
  },
  36335: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/bloxd_wasm_bg.aa99019a959b1a22dab3.wasm"
  },
  36314: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/bloxd_wasm_textures_bg.c720ac65d1f7e522cb7e.wasm"
  },
  36326: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      Vn: () => TB,
      EnvelopeKind: () => JB,
      Sn: () => oB,
      PhysicsEngine: () => GB,
      Bh: () => vB,
      Ih: () => kB,
      Zh: () => cB,
      Th: () => nB,
      Jh: () => hB,
      oh: () => zB,
      Gh: () => FB,
      kh: () => NB,
      nh: () => gB,
      hh: () => qB,
      default: () => sI,
      initSync: () => QI,
      zh: () => yB,
      Fh: () => UB,
      Nh: () => WB,
      gh: () => dB,
      qh: () => CB,
      yh: () => QB,
      Uh: () => sB,
      Wh: () => wB,
      dh: () => OB,
      Ch: () => YB,
      Qh: () => iB,
      sh: () => pB,
      Oh: () => aB,
      Yh: () => HB,
      ih: () => MB
    });
    class TB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, PB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        WI.VvWi(BB, 0)
      }
      ph() {
        const BB = WI.IbXN(this.__wbg_ptr);
        if (BB[2]) throw zI(BB[1]);
        return BB[0] >>> 0
      }
      ah() {
        return WI.UviD(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const BB = WI.PfkX();
        return this.__wbg_ptr = BB, PB.register(this, this.__wbg_ptr, this), this
      }
      Hh() {
        return WI.C5GE(this.__wbg_ptr) >>> 0
      }
      Mh(BB) {
        const IB = WI.zxKP(this.__wbg_ptr, BB);
        if (IB[2]) throw zI(IB[1]);
        return IB[0] >>> 0
      }
      jh(BB) {
        const IB = WI.TmAP(this.__wbg_ptr, BB);
        if (IB[2]) throw zI(IB[1]);
        return IB[0] >>> 0
      }
    }
    Symbol.dispose && (TB.prototype[Symbol.dispose] = TB.prototype.free);
    const JB = Object.freeze({
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
    class oB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, RB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        WI.lOfU(BB, 0)
      }
      rh(BB, IB) {
        const ZB = WI.sgWq(this.__wbg_ptr, BB, IB);
        if (ZB[2]) throw zI(ZB[1]);
        return ZB[0] >>> 0
      }
      mh(BB) {
        const IB = WI.tKJj(this.__wbg_ptr, BB);
        if (IB[2]) throw zI(IB[1]);
        return IB[0] >>> 0
      }
      Xh() {
        WI.aJxf(this.__wbg_ptr)
      }
      static Lh() {
        return WI.pjX2() >>> 0
      }
      eh() {
        return WI.qAtq(this.__wbg_ptr) >>> 0
      }
      uh() {
        const BB = WI.Gjtt(this.__wbg_ptr);
        return 0 === BB[0] ? void 0 : BB[1]
      }
      fh() {
        return WI.wKLn(this.__wbg_ptr) >>> 0
      }
      Ah() {
        return WI.D7sp(this.__wbg_ptr) >>> 0
      }
      static Rh() {
        return WI.JVox() >>> 0
      }
      constructor() {
        const BB = WI.ovMl();
        return this.__wbg_ptr = BB, RB.register(this, this.__wbg_ptr, this), this
      }
      bh() {
        return WI.uW1U(this.__wbg_ptr) >>> 0
      }
      xh() {
        return WI.V8YV(this.__wbg_ptr) >>> 0
      }
      Eh() {
        return WI.Tb7g(this.__wbg_ptr) >>> 0
      }
      Ph(BB) {
        return WI.xdmR(this.__wbg_ptr, BB) >>> 0
      }
      reserve(BB, IB) {
        const ZB = WI.lgEt(this.__wbg_ptr, BB, IB);
        if (ZB[1]) throw zI(ZB[0])
      }
      Vh(BB, IB) {
        const ZB = kI(BB, WI.VwSS),
          TB = dI;
        WI.JqXD(this.__wbg_ptr, ZB, TB, IB)
      }
      text() {
        let BB, IB;
        try {
          const ZB = WI.HXtR(this.__wbg_ptr);
          return BB = ZB[0], IB = ZB[1], KB(ZB[0], ZB[1])
        } finally {
          WI.t267(BB, IB, 1)
        }
      }
    }
    Symbol.dispose && (oB.prototype[Symbol.dispose] = oB.prototype.free);
    class GB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, rB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        WI.cjls(BB, 0)
      }
      Bz(BB, IB) {
        lB(IB, TB);
        const ZB = WI.T3z0(this.__wbg_ptr, BB, IB.__wbg_ptr);
        if (ZB[2]) throw zI(ZB[1]);
        return ZB[0] >>> 0
      }
      Zz() {
        const BB = WI.RvN3(this.__wbg_ptr);
        if (BB[1]) throw zI(BB[0])
      }
      kz(BB, IB, ZB, TB, JB, oB, GB, kB, cB, nB, hB) {
        lB(BB, vB);
        const zB = WI.wTDN(this.__wbg_ptr, BB.__wbg_ptr, IB, ZB, TB, JB, oB, GB, kB, cB, nB, hB);
        if (zB[2]) throw zI(zB[1]);
        return zB[0]
      }
      nz() {
        const BB = WI.Qi8F(this.__wbg_ptr);
        var IB = AB(BB[0], BB[1]).slice();
        return WI.t267(BB[0], 8 * BB[1], 8), IB
      }
      hz() {
        return WI.vbtJ(this.__wbg_ptr) >>> 0
      }
      zz() {
        return WI.d6ma(this.__wbg_ptr) >>> 0
      }
      Fz() {
        return WI.mTKR(this.__wbg_ptr) >>> 0
      }
      constructor(BB, IB, ZB, TB, JB, oB, GB, vB) {
        const kB = WI.ETFC(BB, IB, ZB, TB, JB, oB, GB, vB);
        if (kB[2]) throw zI(kB[1]);
        return this.__wbg_ptr = kB[0], rB.register(this, this.__wbg_ptr, this), this
      }
      qz(BB) {
        lB(BB, TB);
        const IB = WI.qF7A(this.__wbg_ptr, BB.__wbg_ptr);
        if (IB[2]) throw zI(IB[1]);
        return IB[0] >>> 0
      }
      yz(BB) {
        const IB = WI.lYkF(this.__wbg_ptr, BB);
        if (IB[1]) throw zI(IB[0])
      }
      Uz() {
        return WI.IxBx(this.__wbg_ptr) >>> 0
      }
      resume(BB, IB) {
        lB(BB, vB), lB(IB, TB);
        const ZB = WI.WjjO(this.__wbg_ptr, BB.__wbg_ptr, IB.__wbg_ptr);
        if (ZB[2]) throw zI(ZB[1]);
        return ZB[0] >>> 0
      }
      sz(BB) {
        const IB = WI.DJbX(this.__wbg_ptr, BB);
        if (IB[1]) throw zI(IB[0])
      }
      Yz(BB, IB) {
        lB(IB, TB);
        const ZB = WI.TtY1(this.__wbg_ptr, BB, IB.__wbg_ptr);
        if (ZB[1]) throw zI(ZB[0])
      }
      az(BB) {
        const IB = nI(BB, WI.VwSS),
          ZB = dI,
          TB = WI.iv6M(this.__wbg_ptr, IB, ZB);
        if (TB[1]) throw zI(TB[0])
      }
      Jz(BB, IB, ZB, TB, JB, oB) {
        const GB = WI.wvVf(this.__wbg_ptr, BB, IB, ZB, TB, JB, oB);
        if (GB[1]) throw zI(GB[0])
      }
      Gz(BB, IB, ZB, TB) {
        const JB = kI(BB, WI.VwSS),
          oB = dI,
          GB = nI(IB, WI.VwSS),
          vB = dI,
          kB = nI(ZB, WI.VwSS),
          cB = dI,
          nB = nI(TB, WI.VwSS),
          hB = dI,
          zB = WI.Ordq(this.__wbg_ptr, JB, oB, GB, vB, kB, cB, nB, hB);
        if (zB[1]) throw zI(zB[0])
      }
      jz(BB, IB) {
        lB(IB, TB);
        const ZB = WI.nYXS(this.__wbg_ptr, BB, IB.__wbg_ptr);
        if (ZB[1]) throw zI(ZB[0])
      }
      gz(BB, IB, ZB) {
        const TB = WI.OTUN(this.__wbg_ptr, BB, IB, ZB);
        if (TB[1]) throw zI(TB[0])
      }
      Rz(BB, IB, ZB, TB, JB, oB, GB, kB, cB, nB) {
        lB(BB, vB);
        return WI.Rf2M(this.__wbg_ptr, BB.__wbg_ptr, IB, ZB, TB, JB, oB, GB, kB, cB, nB)
      }
    }
    Symbol.dispose && (GB.prototype[Symbol.dispose] = GB.prototype.free);
    class vB {
      static __wrap(BB) {
        const IB = Object.create(vB.prototype);
        return IB.__wbg_ptr = BB, mB.register(IB, IB.__wbg_ptr, IB), IB
      }
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, mB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        WI.qGxN(BB, 0)
      }
      Xz(BB) {
        const IB = WI.TDRm(this.__wbg_ptr, BB);
        if (IB[2]) throw zI(IB[1]);
        return IB[0] >>> 0
      }
      Lz(BB, IB, ZB) {
        return WI.FZXn(this.__wbg_ptr, BB, IB, ZB)
      }
      ez(BB, IB, ZB) {
        return WI.rTlR(this.__wbg_ptr, BB, IB, ZB) >>> 0
      }
      fz(BB, IB, ZB, TB) {
        return 0 !== WI.DPJq(this.__wbg_ptr, BB, IB, ZB, TB)
      }
      lz() {
        WI.MWSi(this.__wbg_ptr)
      }
      tz(BB) {
        const IB = WI.vW1m(this.__wbg_ptr, BB);
        if (IB[3]) throw zI(IB[2]);
        var ZB = bB(IB[0], IB[1]).slice();
        return WI.t267(IB[0], 1 * IB[1], 1), ZB
      }
      evict(BB, IB) {
        return WI.fqaP(this.__wbg_ptr, BB, IB) >>> 0
      }
      bz() {
        WI.cSzL(this.__wbg_ptr)
      }
      xz(BB, IB, ZB) {
        WI.NZVH(this.__wbg_ptr, BB, IB, ZB)
      }
      Ez(BB) {
        const IB = WI.fJDB(this.__wbg_ptr, BB);
        if (IB[1]) throw zI(IB[0])
      }
      Dz() {
        return WI.sjkM(this.__wbg_ptr) >>> 0
      }
      Kz() {
        return WI.iDmU(this.__wbg_ptr) >>> 0
      }
      Vz(BB, IB, ZB) {
        WI.VXXt(this.__wbg_ptr, BB, IB, ZB)
      }
      Sz(BB, IB, ZB) {
        WI.VzK9(this.__wbg_ptr, BB, IB, ZB)
      }
      BF() {
        return WI.n9yk(this.__wbg_ptr) >>> 0
      }
      IF() {
        return WI.ywfN(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const BB = WI.XR8H();
        return this.__wbg_ptr = BB, mB.register(this, this.__wbg_ptr, this), this
      }
      static ZF() {
        const BB = WI.Q4fD();
        return vB.__wrap(BB)
      }
      TF() {
        return WI.jyZE(this.__wbg_ptr) >>> 0
      }
      JF() {
        return WI.ci83(this.__wbg_ptr) >>> 0
      }
      oF(BB, IB, ZB, TB) {
        const JB = WI.Yd12(this.__wbg_ptr, BB, IB, ZB, TB);
        if (JB[1]) throw zI(JB[0])
      }
      GF() {
        return WI.GkVD(this.__wbg_ptr) >>> 0
      }
      vF() {
        return WI.LvNb(this.__wbg_ptr) >>> 0
      }
      kF(BB, IB, ZB, TB) {
        WI.hF7t(this.__wbg_ptr, BB, IB, ZB, TB)
      }
      cF(BB) {
        WI.ZGiQ(this.__wbg_ptr, BB)
      }
      hF(BB, IB, ZB, TB, JB) {
        const oB = cI(IB, WI.VwSS),
          GB = dI,
          vB = kI(ZB, WI.VwSS),
          kB = dI,
          cB = nI(TB, WI.VwSS),
          nB = dI,
          hB = WI.R7R5(this.__wbg_ptr, BB, oB, GB, vB, kB, cB, nB, JB);
        if (hB[1]) throw zI(hB[0])
      }
      nF(BB, IB, ZB, TB) {
        const JB = cI(BB, WI.VwSS),
          oB = dI,
          GB = kI(IB, WI.VwSS),
          vB = dI,
          kB = nI(ZB, WI.VwSS),
          cB = dI,
          nB = cI(TB, WI.VwSS),
          hB = dI,
          zB = WI.VvFs(this.__wbg_ptr, JB, oB, GB, vB, kB, cB, nB, hB);
        if (zB[1]) throw zI(zB[0])
      }
      yF(BB) {
        const IB = cI(BB, WI.VwSS),
          ZB = dI,
          TB = WI.yjnu(this.__wbg_ptr, IB, ZB);
        if (TB[1]) throw zI(TB[0])
      }
      UF() {
        return WI.oJwn(this.__wbg_ptr) >>> 0
      }
      WF(BB) {
        const IB = WI.C4U1(this.__wbg_ptr, BB);
        if (IB[2]) throw zI(IB[1]);
        return IB[0] >>> 0
      }
      steer() {
        return WI.P3LM(this.__wbg_ptr) >>> 0
      }
      dF() {
        const BB = WI.PEwY(this.__wbg_ptr);
        var IB = AB(BB[0], BB[1]).slice();
        return WI.t267(BB[0], 8 * BB[1], 8), IB
      }
      CF() {
        return WI.XBta(this.__wbg_ptr) >>> 0
      }
      dz() {
        const BB = WI.szu9(this.__wbg_ptr);
        var IB, ZB, TB = (IB = BB[0], ZB = BB[1], IB >>>= 0, (null !== DB && 0 !== DB.byteLength || (DB = new Int32Array(WI.memory.buffer)), DB).subarray(IB / 4, IB / 4 + ZB)).slice();
        return WI.t267(BB[0], 4 * BB[1], 4), TB
      }
    }
    Symbol.dispose && (vB.prototype[Symbol.dispose] = vB.prototype.free);
    class kB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, XB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        WI.vgcz(BB, 0)
      }
      QF(BB) {
        const IB = kI(BB, WI.VwSS),
          ZB = dI,
          TB = WI.dVJy(this.__wbg_ptr, IB, ZB);
        if (TB[1]) throw zI(TB[0])
      }
      sF() {
        return WI.xdWf(this.__wbg_ptr) >>> 0
      }
      wF() {
        return WI.F21B(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const BB = WI.W9cb();
        return this.__wbg_ptr = BB, XB.register(this, this.__wbg_ptr, this), this
      }
      run(BB, IB) {
        lB(BB, vB);
        const ZB = WI.aOer(this.__wbg_ptr, BB.__wbg_ptr, IB);
        if (ZB[2]) throw zI(ZB[1]);
        return ZB[0] >>> 0
      }
      OF(BB) {
        const IB = kI(BB, WI.VwSS),
          ZB = dI;
        WI.o9Lm(this.__wbg_ptr, IB, ZB)
      }
      YF(BB) {
        const IB = kI(BB, WI.VwSS),
          ZB = dI;
        WI.H2hI(this.__wbg_ptr, IB, ZB)
      }
    }
    Symbol.dispose && (kB.prototype[Symbol.dispose] = kB.prototype.free);
    class cB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, LB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        WI.wkxq(BB, 0)
      }
      pF(BB, IB) {
        const ZB = cI(BB, WI.VwSS),
          TB = dI;
        return WI.cPua(this.__wbg_ptr, ZB, TB, IB) >>> 0
      }
      aF(BB, IB, ZB) {
        lB(BB, vB);
        const TB = cI(ZB, WI.VwSS),
          JB = dI,
          oB = WI.uxxl(this.__wbg_ptr, BB.__wbg_ptr, IB, TB, JB);
        if (oB[2]) throw zI(oB[1]);
        return oB[0] >>> 0
      }
      iF(BB) {
        return WI.BVVF(this.__wbg_ptr, BB) >>> 0
      }
      constructor() {
        const BB = WI.qOAO();
        return this.__wbg_ptr = BB, LB.register(this, this.__wbg_ptr, this), this
      }
      scan(BB, IB) {
        lB(BB, vB);
        const ZB = WI.tyIm(this.__wbg_ptr, BB.__wbg_ptr, IB);
        if (ZB[2]) throw zI(ZB[1]);
        return ZB[0] >>> 0
      }
      jF(BB) {
        const IB = cI(BB, WI.VwSS),
          ZB = dI;
        WI.yUFG(this.__wbg_ptr, IB, ZB)
      }
      MF() {
        return WI.mdKw(this.__wbg_ptr) >>> 0
      }
      HF() {
        return WI.m4TE(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (cB.prototype[Symbol.dispose] = cB.prototype.free);
    class nB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, eB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        WI.fpCo(BB, 0)
      }
      RF(BB) {
        const IB = WI.Mkxj(this.__wbg_ptr, BB);
        if (IB[2]) throw zI(IB[1]);
        return IB[0] >>> 0
      }
      compute(BB, IB, ZB, TB) {
        var JB = GI(TB) ? 0 : hI(TB, WI.VwSS, WI.CvSx),
          oB = dI;
        const GB = WI.Y6Y1(this.__wbg_ptr, BB, GI(IB) ? Number.MAX_SAFE_INTEGER : IB | 0, ZB, JB, oB);
        if (GB[2]) throw zI(GB[1]);
        return GB[0] >>> 0
      }
      mF(BB) {
        const IB = hI(BB, WI.VwSS, WI.CvSx),
          ZB = dI;
        WI.SL90(this.__wbg_ptr, IB, ZB)
      }
      LF() {
        return WI.IQKV(this.__wbg_ptr)
      }
      eF(BB) {
        return WI.g3Ca(this.__wbg_ptr, BB) >>> 0
      }
      uF() {
        return WI.BbAj(this.__wbg_ptr) >>> 0
      }
      fF() {
        return WI.uciI(this.__wbg_ptr) >>> 0
      }
      lF(BB, IB) {
        const ZB = WI.cepJ(this.__wbg_ptr, BB, IB);
        if (ZB[1]) throw zI(ZB[0])
      }
      AF() {
        return WI.U7m2(this.__wbg_ptr) >>> 0
      }
      tF() {
        return WI.Oreh(this.__wbg_ptr) >>> 0
      }
      bF() {
        return WI.OK9t(this.__wbg_ptr) >>> 0
      }
      rF(BB, IB, ZB) {
        const TB = kI(BB, WI.VwSS),
          JB = dI,
          oB = kI(IB, WI.VwSS),
          GB = dI,
          vB = WI.pxJv(this.__wbg_ptr, TB, JB, oB, GB, ZB);
        if (vB[1]) throw zI(vB[0])
      }
      DF() {
        return WI.YzlR(this.__wbg_ptr) >>> 0
      }
      mesh(BB, IB, ZB, TB, JB) {
        const oB = WI.WJrp(this.__wbg_ptr, BB, IB, ZB, TB, JB);
        if (oB[2]) throw zI(oB[1]);
        return oB[0] >>> 0
      }
      constructor(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB, hB, zB, FB, NB, gB, qB, yB, UB, WB) {
        const dB = vI(BB, WI.VwSS),
          CB = dI,
          QB = nI(IB, WI.VwSS),
          sB = dI,
          wB = kI(ZB, WI.VwSS),
          OB = dI,
          YB = cI(TB, WI.VwSS),
          iB = dI,
          pB = cI(JB, WI.VwSS),
          aB = dI,
          HB = kI(oB, WI.VwSS),
          MB = dI,
          jB = kI(GB, WI.VwSS),
          PB = dI,
          RB = nI(vB, WI.VwSS),
          rB = dI,
          mB = nI(kB, WI.VwSS),
          XB = dI,
          LB = cI(cB, WI.VwSS),
          uB = dI;
        var fB = GI(nB) ? 0 : vI(nB, WI.VwSS),
          lB = dI;
        const AB = kI(hB, WI.VwSS),
          tB = dI,
          bB = cI(zB, WI.VwSS),
          xB = dI;
        var EB = GI(FB) ? 0 : cI(FB, WI.VwSS),
          DB = dI;
        const KB = nI(NB, WI.VwSS),
          VB = dI,
          SB = WI.F6ko(dB, CB, QB, sB, wB, OB, YB, iB, pB, aB, HB, MB, jB, PB, RB, rB, mB, XB, LB, uB, fB, lB, AB, tB, bB, xB, EB, DB, KB, VB, gB, qB, yB, UB, WB);
        if (SB[2]) throw zI(SB[1]);
        return this.__wbg_ptr = SB[0], eB.register(this, this.__wbg_ptr, this), this
      }
      EF(BB, IB) {
        const ZB = kI(BB, WI.VwSS),
          TB = dI,
          JB = WI.cJiD(this.__wbg_ptr, ZB, TB, IB);
        if (JB[3]) throw zI(JB[2]);
        var oB = bB(JB[0], JB[1]).slice();
        return WI.t267(JB[0], 1 * JB[1], 1), oB
      }
      KF(BB) {
        WI.C2OK(this.__wbg_ptr, GI(BB) ? 16777215 : BB)
      }
      VF(BB) {
        return WI.OIT9(this.__wbg_ptr, BB) >>> 0
      }
      BN() {
        return WI.pzJU(this.__wbg_ptr) >>> 0
      }
      SF() {
        const BB = WI.v9en(this.__wbg_ptr);
        if (BB[2]) throw zI(BB[1]);
        return 0 !== BB[0]
      }
      IN() {
        return WI.Jz5P(this.__wbg_ptr) >>> 0
      }
      ZN() {
        return WI.nQUm(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (nB.prototype[Symbol.dispose] = nB.prototype.free);
    class hB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, uB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        WI.LtpF(BB, 0)
      }
      compute(BB, IB, ZB, TB) {
        var JB = GI(TB) ? 0 : hI(TB, WI.VwSS, WI.CvSx),
          oB = dI;
        const GB = WI.GkEb(this.__wbg_ptr, BB, GI(IB) ? Number.MAX_SAFE_INTEGER : IB | 0, ZB, JB, oB);
        if (GB[2]) throw zI(GB[1]);
        return GB[0] >>> 0
      }
      mF(BB) {
        const IB = hI(BB, WI.VwSS, WI.CvSx),
          ZB = dI;
        WI.ZijC(this.__wbg_ptr, IB, ZB)
      }
      tF() {
        return WI.ZV3n(this.__wbg_ptr) >>> 0
      }
      bF() {
        return WI.jifB(this.__wbg_ptr) >>> 0
      }
      TN(BB) {
        const IB = WI.jgAU(this.__wbg_ptr, BB);
        if (IB[2]) throw zI(IB[1]);
        return IB[0] >>> 0
      }
      constructor(BB, IB, ZB, TB, JB, oB) {
        const GB = vI(BB, WI.VwSS),
          vB = dI,
          kB = nI(IB, WI.VwSS),
          cB = dI,
          nB = kI(ZB, WI.VwSS),
          hB = dI,
          zB = cI(TB, WI.VwSS),
          FB = dI,
          NB = WI.b20J(GB, vB, kB, cB, nB, hB, zB, FB, JB, oB);
        if (NB[2]) throw zI(NB[1]);
        return this.__wbg_ptr = NB[0], uB.register(this, this.__wbg_ptr, this), this
      }
      BN() {
        return WI.OnVh(this.__wbg_ptr) >>> 0
      }
      SF() {
        const BB = WI.ndUn(this.__wbg_ptr);
        if (BB[2]) throw zI(BB[1]);
        return 0 !== BB[0]
      }
      IN() {
        return WI.PHW9(this.__wbg_ptr) >>> 0
      }
    }

    function zB() {
      const BB = WI.Tj2H();
      var IB = tB(BB[0], BB[1]).slice();
      return WI.t267(BB[0], 4 * BB[1], 4), IB
    }

    function FB(BB, IB) {
      let ZB, TB;
      try {
        const JB = vI(BB, WI.VwSS),
          oB = dI,
          GB = hI(IB, WI.VwSS, WI.CvSx),
          vB = dI,
          kB = WI.N0Ib(JB, oB, GB, vB);
        return ZB = kB[0], TB = kB[1], KB(kB[0], kB[1])
      } finally {
        WI.t267(ZB, TB, 1)
      }
    }

    function NB() {
      const BB = WI.sgBZ();
      var IB = tB(BB[0], BB[1]).slice();
      return WI.t267(BB[0], 4 * BB[1], 4), IB
    }

    function gB(BB) {
      return 0 !== WI.i1ff(BB)
    }

    function qB(BB, IB) {
      const ZB = hI(BB, WI.VwSS, WI.CvSx),
        TB = dI,
        JB = WI.hABz(ZB, TB, IB);
      if (JB[1]) throw zI(JB[0])
    }

    function yB() {
      WI.LjJr()
    }

    function UB() {
      return WI.JoW6() >>> 0
    }

    function WB(BB) {
      return 0 !== WI.dX3Z(BB)
    }

    function dB(BB) {
      return 0 !== WI.AUmS(BB)
    }

    function CB(BB) {
      WI.kUCV(BB)
    }

    function QB() {
      return WI.REau() >>> 0
    }

    function sB() {
      return WI.NEUv() >>> 0
    }

    function wB() {
      return 0 !== WI.nMNw()
    }

    function OB() {
      const BB = WI.egm9();
      var IB = tB(BB[0], BB[1]).slice();
      return WI.t267(BB[0], 4 * BB[1], 4), IB
    }

    function YB() {
      const BB = WI.eg6B();
      var IB = tB(BB[0], BB[1]).slice();
      return WI.t267(BB[0], 4 * BB[1], 4), IB
    }

    function iB() {
      const BB = WI.H300();
      var IB = tB(BB[0], BB[1]).slice();
      return WI.t267(BB[0], 4 * BB[1], 4), IB
    }

    function pB() {
      return WI.k30Q() >>> 0
    }

    function aB() {
      WI.JUjR()
    }

    function HB() {
      let BB, IB;
      try {
        const ZB = WI.rO2K();
        return BB = ZB[0], IB = ZB[1], KB(ZB[0], ZB[1])
      } finally {
        WI.t267(BB, IB, 1)
      }
    }

    function MB(BB) {
      WI.fbFK(fB(BB))
    }

    function jB() {
      return {
        __proto__: null,
        HJYk: {
          __proto__: null,
          oonQ: function(BB, IB) {
            return fB(Error(KB(BB, IB)))
          },
          fLpa: function(BB, IB) {
            throw new Error(KB(BB, IB))
          },
          XMbS: function(BB) {
            TI(BB).call()
          },
          MfKI: function(BB, IB) {
            console.error(KB(BB, IB))
          },
          Xlbs: function() {
            return performance.now()
          },
          Zd7z: function(BB) {
            zI(BB)
          }
        }
      }
    }
    Symbol.dispose && (hB.prototype[Symbol.dispose] = hB.prototype.free);
    const PB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => WI.VvWi(BB, 1))),
      RB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => WI.lOfU(BB, 1))),
      rB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => WI.cjls(BB, 1))),
      mB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => WI.qGxN(BB, 1))),
      XB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => WI.vgcz(BB, 1))),
      LB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => WI.wkxq(BB, 1))),
      eB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => WI.fpCo(BB, 1))),
      uB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => WI.LtpF(BB, 1)));

    function fB(BB) {
      oI === JI.length && JI.push(JI.length + 1);
      const IB = oI;
      return oI = JI[IB], JI[IB] = BB, IB
    }

    function lB(BB, IB) {
      if (!(BB instanceof IB)) throw new Error(`expected instance of ${IB.name}`)
    }

    function AB(BB, IB) {
      return BB >>>= 0, EB().subarray(BB / 8, BB / 8 + IB)
    }

    function tB(BB, IB) {
      return BB >>>= 0, BI().subarray(BB / 4, BB / 4 + IB)
    }

    function bB(BB, IB) {
      return BB >>>= 0, ZI().subarray(BB / 1, BB / 1 + IB)
    }
    let xB = null;

    function EB() {
      return null !== xB && 0 !== xB.byteLength || (xB = new Float64Array(WI.memory.buffer)), xB
    }
    let DB = null;

    function KB(BB, IB) {
      return function(BB, IB) {
        gI += IB, gI >= NI && (FI = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), FI.decode(), gI = IB);
        return FI.decode(ZI().subarray(BB, BB + IB))
      }(BB >>> 0, IB)
    }
    let VB = null;
    let SB = null;

    function BI() {
      return null !== SB && 0 !== SB.byteLength || (SB = new Uint32Array(WI.memory.buffer)), SB
    }
    let II = null;

    function ZI() {
      return null !== II && 0 !== II.byteLength || (II = new Uint8Array(WI.memory.buffer)), II
    }

    function TI(BB) {
      return JI[BB]
    }
    let JI = new Array(1024).fill(void 0);
    JI.push(void 0, null, !0, !1);
    let oI = JI.length;

    function GI(BB) {
      return void 0 === BB || null === BB
    }

    function vI(BB, IB) {
      const ZB = IB(2 * BB.length, 2) >>> 0;
      return (null !== VB && 0 !== VB.byteLength || (VB = new Uint16Array(WI.memory.buffer)), VB).set(BB, ZB / 2), dI = BB.length, ZB
    }

    function kI(BB, IB) {
      const ZB = IB(4 * BB.length, 4) >>> 0;
      return BI().set(BB, ZB / 4), dI = BB.length, ZB
    }

    function cI(BB, IB) {
      const ZB = IB(1 * BB.length, 1) >>> 0;
      return ZI().set(BB, ZB / 1), dI = BB.length, ZB
    }

    function nI(BB, IB) {
      const ZB = IB(8 * BB.length, 8) >>> 0;
      return EB().set(BB, ZB / 8), dI = BB.length, ZB
    }

    function hI(BB, IB, ZB) {
      if (void 0 === ZB) {
        const ZB = qI.encode(BB),
          TB = IB(ZB.length, 1) >>> 0;
        return ZI().subarray(TB, TB + ZB.length).set(ZB), dI = ZB.length, TB
      }
      let TB = BB.length,
        JB = IB(TB, 1) >>> 0;
      const oB = ZI();
      let GB = 0;
      for (; GB < TB; GB++) {
        const IB = BB.charCodeAt(GB);
        if (IB > 127) break;
        oB[JB + GB] = IB
      }
      if (GB !== TB) {
        0 !== GB && (BB = BB.slice(GB)), JB = ZB(JB, TB, TB = GB + 3 * BB.length, 1) >>> 0;
        const IB = ZI().subarray(JB + GB, JB + TB);
        GB += qI.encodeInto(BB, IB).written, JB = ZB(JB, TB, GB, 1) >>> 0
      }
      return dI = GB, JB
    }

    function zI(BB) {
      const IB = TI(BB);
      return function(BB) {
        BB < 1028 || (JI[BB] = oI, oI = BB)
      }(BB), IB
    }
    let FI = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    FI.decode();
    const NI = 2146435072;
    let gI = 0;
    const qI = new TextEncoder;
    "encodeInto" in qI || (qI.encodeInto = function(BB, IB) {
      const ZB = qI.encode(BB);
      return IB.set(ZB), {
        read: BB.length,
        written: ZB.length
      }
    });
    let yI, UI, WI, dI = 0;

    function CI(BB, IB) {
      return UI = BB, WI = BB.exports, yI = IB, xB = null, DB = null, VB = null, SB = null, II = null, WI.Hu6y(), WI
    }

    function QI(BB) {
      if (void 0 !== WI) return WI;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module: BB
      } = BB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const IB = jB();
      BB instanceof WebAssembly.Module || (BB = new WebAssembly.Module(BB));
      return CI(new WebAssembly.Instance(BB, IB), BB)
    }
    async function sI(BB) {
      if (void 0 !== WI) return WI;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module_or_path: BB
      } = BB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const IB = jB();
      ("string" === typeof BB || "function" === typeof Request && BB instanceof Request || "function" === typeof URL && BB instanceof URL) && (BB = fetch(BB));
      const {
        instance: ZB,
        module: TB
      } = await async function(BB, IB) {
        if ("function" === typeof Response && BB instanceof Response) {
          if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(BB, IB)
          } catch (ZB) {
            if (! function(BB) {
                switch (BB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(BB.type) || "application/wasm" === BB.headers.get("Content-Type")) throw ZB;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ZB)
          }
          const TB = await BB.arrayBuffer();
          return await WebAssembly.instantiate(TB, IB)
        } {
          const ZB = await WebAssembly.instantiate(BB, IB);
          return ZB instanceof WebAssembly.Instance ? {
            instance: ZB,
            module: BB
          } : ZB
        }
      }(await BB, IB);
      return CI(ZB, TB)
    }
  },
  36320: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB,
      h: () => vB,
      i: () => kB
    });
    var TB = ZB(36326),
      JB = ZB(3036),
      oB = ZB(36330);
    const GB = {
      name: JB.c,
      url: () => new ZB.U(ZB(36335)),
      init: TB.default,
      bindings: TB
    };

    function vB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB,
        IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GB,
        ZB = arguments.length > 2 ? arguments[2] : void 0;
      return (0, oB.h)(BB, IB, ZB)
    }

    function kB(BB) {
      return (0, JB.J)((() => BB), TB, GB)
    }
  },
  36308: (BB, IB, ZB) => {
    function TB(BB, IB) {
      return new Error(`${BB}: ${IB instanceof Error?`${IB.name}: ${IB.message}`:String(IB)}`, {
        cause: IB
      })
    }
    ZB.d(IB, {
      d: () => TB
    })
  },
  36300: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB,
      f: () => kB
    });
    var TB = ZB(3043),
      JB = ZB(6771),
      oB = ZB(36308);

    function GB() {
      return new URL(new ZB.U(ZB(36314)).href, globalThis.location?.href).href
    }
    let vB = null;

    function kB() {
      return vB ??= (async () => (0, TB.J)(new URL(GB()), (0, JB.e)("bloxd_wasm_textures")))().catch((BB => {
        throw (0, oB.d)((0, TB.N)(BB), BB)
      })), vB
    }
  },
  36292: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB,
      h: () => oB,
      j: () => kB,
      l: () => GB,
      m: () => JB
    });
    const TB = /^alloc_failed (\d+) bytes$/;

    function JB(BB, IB) {
      return oB(BB, IB) ? `trap=alloc_failed ${IB} bytes` : `trap=${BB}`
    }

    function oB(BB, IB) {
      return "unreachable" === BB && IB > 0
    }

    function GB(BB, IB, ZB) {
      const TB = function(BB) {
        return BB instanceof WebAssembly.RuntimeError ? /unreachable/i.test(BB.message) ? "unreachable" : /out of bounds/i.test(BB.message) ? "out_of_bounds" : "runtime_error" : (BB instanceof RangeError || BB instanceof Error && "InternalError" === BB.name) && /call stack|recursion/i.test(BB.message) ? "stack_overflow" : "js_error"
      }(BB);
      if ("unreachable" !== TB) return {
        kind: TB,
        panic: null,
        refusedBytes: 0
      };
      const JB = IB(),
        oB = ZB();
      return {
        kind: TB,
        panic: oB > 0 ? null : JB,
        refusedBytes: oB
      }
    }
    const vB = 300;

    function kB(BB) {
      return BB.replace(/\s*\n\s*/g, " / ").slice(0, vB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);