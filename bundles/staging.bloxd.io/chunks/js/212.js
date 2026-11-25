export const id = 212;
export const ids = [212, 213];
export const modules = {
  36586: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      CAPPED_COUNTS_VISIT_CAP: () => LG,
      reportCappedWasmFailure: () => UG,
      reportUncappedWasmFailure: () => kG,
      reportWasmCrash: () => SG,
      reportWasmFailure: () => yG
    });
    var wG = ZG(2920);

    function SG(GG) {
      (0, wG.reportClientError)("wasm_load", GG.message, GG.code)
    }
    const LG = wG.MAX_ERRORS_PER_VISIT - 4;

    function yG(GG, bG, ZG) {
      (0, wG.reportClientError)(GG, bG, ZG, !1)
    }

    function kG(GG, bG, ZG) {
      (0, wG.reportClientError)(GG, bG, ZG, !1, 1 / 0)
    }

    function UG(GG, bG, ZG) {
      (0, wG.reportClientError)(GG, bG, ZG, !1, LG)
    }
  },
  36581: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => oG,
      f: () => iG,
      i: () => CG,
      l: () => XG
    });
    var wG = ZG(36615),
      SG = ZG(2868),
      LG = ZG(36632),
      yG = ZG(2872),
      kG = ZG(36586),
      UG = ZG(2910),
      YG = ZG(3206),
      VG = ZG(3201),
      pG = ZG(36594),
      fG = ZG(2920),
      QG = ZG(36599),
      KG = ZG(36606),
      hG = ZG(3711);
    let dG = !1;
    const JG = 40;
    var rG = ZG(3559);
    const zG = "bloxdWasmFailureReported";

    function EG() {
      return "undefined" === typeof WebAssembly
    }

    function oG() {
      return (0, wG.d)()
    }

    function XG() {
      if (EG()) return "this browser has no WebAssembly";
      const GG = (0, SG.r)();
      return "compile" === GG || "instantiate" === GG ? `the core wasm didn't load here (${(0,SG.i)()})` : null
    }
    async function uG(GG) {
      return await (0, LG.g)(LG.d, void 0, GG)
    }

    function iG() {
      EG() || (0, rG.c)((() => {
        uG()
      }))
    }

    function CG() {
      if (EG()) return async () => ((0, UG.h)("unsupported", 0), WG("unsupported", "This browser has no WebAssembly"), !1);
      const GG = {
        reloadFailedDownload: !0
      };
      return uG(GG), async () => {
        var bG;
        const ZG = performance.now();
        await uG(GG);
        const wG = (performance.now() - ZG) / 1e3;
        if ((0, SG.S)()) return (0, UG.h)("ready", wG), dG || (dG = !0, (0, SG.X)((() => {
          if ("call" !== (0, SG.r)()) return;
          const GG = (0, SG.o)(),
            bG = (0, pG.i)(GG, SG.I, SG.eb),
            ZG = (0, SG.y)().buffer.byteLength,
            wG = (0, pG.e)(bG.kind, bG.refusedBytes),
            LG = wG ? "alloc_failed" : bG.kind,
            yG = (0, QG.i)(ZG),
            kG = wG ? `_r${Math.floor(Math.log2(bG.refusedBytes))}` : "",
            UG = (0, hG.e)();
          null === UG && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const YG = new Error((0, KG.b)(GG, ZG, bG));
          if (GG instanceof Error && void 0 !== GG.stack) {
            const bG = GG.stack.split("\n"),
              ZG = bG.length > JG ? [...bG.slice(0, JG / 2), ...bG.slice(-JG / 2)] : bG;
            YG.stack = ZG.join("\n")
          }(0, fG.reportClientError)("wasm_load", YG, `wasm_call_${LG}_${null!==UG&&void 0!==UG?UG:"unnamed"}_m${yG}${kG}`)
        }))), (0, yG.R)(LG.d.url()) && (0, kG.reportCappedWasmFailure)("wasm_load", YG.b.message, YG.b.code), !0;
        const rG = VG.b[null !== (bG = (0, SG.r)()) && void 0 !== bG ? bG : "call"];
        return (0, UG.h)(rG, wG), WG(rG, (0, SG.i)()), !1
      }
    }

    function WG(GG, bG) {
      (0, VG.g)(zG, `Bloxd wasm ${GG}, so the game can't start: ${bG}`, bG, GG)
    }
  },
  36606: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG,
      e: () => YG,
      g: () => yG,
      h: () => pG
    });
    var wG = ZG(36594),
      SG = ZG(5);
    const LG = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function yG(GG) {
      if (GG instanceof WebAssembly.RuntimeError) return !0;
      const bG = GG instanceof Error ? GG.stack : void 0;
      return "string" === typeof bG && LG.test(bG)
    }

    function kG(GG, bG, ZG) {
      var SG;
      const yG = GG instanceof Error ? GG.name : "thrown",
        kG = (GG instanceof Error && null !== (SG = GG.stack) && void 0 !== SG ? SG : "").split("\n").filter((GG => LG.test(GG))).slice(0, 8).map((GG => GG.trim())),
        UG = null === bG ? "wasm memory unknown" : `wasm memory ${Math.round(bG/2**20)} MB`,
        YG = null === ZG.panic ? "" : `, panic: ${(0,wG.h)(ZG.panic)}`,
        VG = `${yG}: ${GG instanceof Error?GG.message:String(GG)}`;
      return `${(0,wG.m)(ZG.kind,ZG.refusedBytes)} ${VG} (${UG})${YG}${kG.length>0?` | ${kG.join(" < ")}`:""}`
    }
    const UG = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function YG(GG) {
      var bG;
      let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(GG instanceof Error) || !UG.test(GG.message)) return {};
      if (!("detached" in ZG)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, SG.T)(null === (bG = (0, SG.K)(ZG, "detached")) || void 0 === bG ? void 0 : bG.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const VG = 500;

    function pG(GG) {
      let bG = "[object Object]";
      try {
        bG = String(GG)
      } catch {}
      if ("[object Object]" !== bG) return bG;
      try {
        var ZG, wG;
        return null !== (ZG = null === (wG = JSON.stringify(GG)) || void 0 === wG ? void 0 : wG.slice(0, VG)) && void 0 !== ZG ? ZG : bG
      } catch {
        return bG
      }
    }
  },
  36650: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/bloxd_wasm_bg.59e6d1d4e06311254dc6.wasm"
  },
  36630: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/bloxd_wasm_textures_bg.ba6f9ce20c46ec065ea2.wasm"
  },
  36636: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      nV: () => wG,
      EnvelopeKind: () => SG,
      gV: () => LG,
      PhysicsEngine: () => yG,
      eV: () => kG,
      RV: () => UG,
      TV: () => YG,
      HV: () => VG,
      tV: () => pG,
      DV: () => fG,
      NV: () => QG,
      OV: () => KG,
      xV: () => hG,
      BV: () => dG,
      default: () => ub,
      initSync: () => Xb,
      Gp: () => JG,
      bp: () => rG,
      Zp: () => zG,
      wp: () => EG,
      Sp: () => oG,
      Lp: () => XG,
      yp: () => uG,
      kp: () => iG,
      Up: () => CG,
      Yp: () => WG,
      Vp: () => mG,
      Qp: () => IG,
      Kp: () => FG,
      hp: () => vG,
      dp: () => aG
    });
    class wG {
      __destroy_into_raw() {
        const GG = this.__wbg_ptr;
        return this.__wbg_ptr = 0, lG.unregister(this), GG
      }
      free() {
        const GG = this.__destroy_into_raw();
        zb.bTOq(GG, 0)
      }
      Jp() {
        const GG = zb.yHrQ(this.__wbg_ptr);
        if (GG[2]) throw fb(GG[1]);
        return GG[0] >>> 0
      }
      rp() {
        return zb.khGv(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const GG = zb.d9Tw();
        return this.__wbg_ptr = GG, lG.register(this, this.__wbg_ptr, this), this
      }
      zp() {
        return zb.Pvbt(this.__wbg_ptr) >>> 0
      }
      Ep(GG) {
        const bG = zb.L0Er(this.__wbg_ptr, GG);
        if (bG[2]) throw fb(bG[1]);
        return bG[0] >>> 0
      }
      Xp(GG) {
        const bG = zb.mw05(this.__wbg_ptr, GG);
        if (bG[2]) throw fb(bG[1]);
        return bG[0] >>> 0
      }
    }
    Symbol.dispose && (wG.prototype[Symbol.dispose] = wG.prototype.free);
    const SG = Object.freeze({
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
    class LG {
      __destroy_into_raw() {
        const GG = this.__wbg_ptr;
        return this.__wbg_ptr = 0, jG.unregister(this), GG
      }
      free() {
        const GG = this.__destroy_into_raw();
        zb.csz6(GG, 0)
      }
      Wp(GG, bG) {
        const ZG = zb.tubg(this.__wbg_ptr, GG, bG);
        if (ZG[2]) throw fb(ZG[1]);
        return ZG[0] >>> 0
      }
      mp(GG) {
        const bG = zb.JbmC(this.__wbg_ptr, GG);
        if (bG[2]) throw fb(bG[1]);
        return bG[0] >>> 0
      }
      Ip() {
        zb.xfOC(this.__wbg_ptr)
      }
      static Fp() {
        return zb.arVt() >>> 0
      }
      vp() {
        return zb.j177(this.__wbg_ptr) >>> 0
      }
      ap() {
        const GG = zb.hrGu(this.__wbg_ptr);
        return 0 === GG[0] ? void 0 : GG[1]
      }
      cp() {
        return zb.E2zI(this.__wbg_ptr) >>> 0
      }
      lp() {
        return zb.CHsj(this.__wbg_ptr) >>> 0
      }
      static Cp() {
        return zb.FdTe() >>> 0
      }
      constructor() {
        const GG = zb.AZzt();
        return this.__wbg_ptr = GG, jG.register(this, this.__wbg_ptr, this), this
      }
      jp() {
        return zb.Lap5(this.__wbg_ptr) >>> 0
      }
      Pp() {
        return zb.A4md(this.__wbg_ptr) >>> 0
      }
      Mp() {
        return zb.Nndw(this.__wbg_ptr) >>> 0
      }
      ip(GG) {
        return zb.VUYu(this.__wbg_ptr, GG) >>> 0
      }
      reserve(GG, bG) {
        const ZG = zb.SeGe(this.__wbg_ptr, GG, bG);
        if (ZG[1]) throw fb(ZG[0])
      }
      qp(GG, bG) {
        const ZG = Ub(GG, zb.hsZ7),
          wG = Eb;
        zb.NC4O(this.__wbg_ptr, ZG, wG, bG)
      }
      text() {
        let GG, bG;
        try {
          const ZG = zb.b8Ij(this.__wbg_ptr);
          return GG = ZG[0], bG = ZG[1], OG(ZG[0], ZG[1])
        } finally {
          zb.jb8N(GG, bG, 1)
        }
      }
    }
    Symbol.dispose && (LG.prototype[Symbol.dispose] = LG.prototype.free);
    class yG {
      __destroy_into_raw() {
        const GG = this.__wbg_ptr;
        return this.__wbg_ptr = 0, PG.unregister(this), GG
      }
      free() {
        const GG = this.__destroy_into_raw();
        zb.btjj(GG, 0)
      }
      Rp(GG, bG) {
        eG(bG, wG);
        const ZG = zb.Z0UC(this.__wbg_ptr, GG, bG.__wbg_ptr);
        if (ZG[2]) throw fb(ZG[1]);
        return ZG[0] >>> 0
      }
      Hp() {
        const GG = zb.EF1n(this.__wbg_ptr);
        if (GG[1]) throw fb(GG[0])
      }
      xp(GG, bG, ZG, wG, SG, LG, yG, UG, YG, VG, pG) {
        eG(GG, kG);
        const fG = zb.KAoW(this.__wbg_ptr, GG.__wbg_ptr, bG, ZG, wG, SG, LG, yG, UG, YG, VG, pG);
        if (fG[2]) throw fb(fG[1]);
        return fG[0]
      }
      Bp() {
        const GG = zb.FbWJ(this.__wbg_ptr);
        var bG = RG(GG[0], GG[1]).slice();
        return zb.jb8N(GG[0], 8 * GG[1], 8), bG
      }
      Gf() {
        return zb.nUYl(this.__wbg_ptr) >>> 0
      }
      bf() {
        return zb.wyGg(this.__wbg_ptr) >>> 0
      }
      Zf() {
        return zb.CxfK(this.__wbg_ptr) >>> 0
      }
      constructor(GG, bG, ZG, wG, SG, LG, yG, kG) {
        const UG = zb.eyvx(GG, bG, ZG, wG, SG, LG, yG, kG);
        if (UG[2]) throw fb(UG[1]);
        return this.__wbg_ptr = UG[0], PG.register(this, this.__wbg_ptr, this), this
      }
      Lf(GG) {
        eG(GG, wG);
        const bG = zb.oFLn(this.__wbg_ptr, GG.__wbg_ptr);
        if (bG[2]) throw fb(bG[1]);
        return bG[0] >>> 0
      }
      yf(GG) {
        const bG = zb.qICa(this.__wbg_ptr, GG);
        if (bG[1]) throw fb(bG[0])
      }
      kf() {
        return zb.ErpA(this.__wbg_ptr) >>> 0
      }
      resume(GG, bG) {
        eG(GG, kG), eG(bG, wG);
        const ZG = zb.wb1W(this.__wbg_ptr, GG.__wbg_ptr, bG.__wbg_ptr);
        if (ZG[2]) throw fb(ZG[1]);
        return ZG[0] >>> 0
      }
      ff(GG) {
        const bG = zb.o5ug(this.__wbg_ptr, GG);
        if (bG[1]) throw fb(bG[0])
      }
      hf(GG, bG) {
        eG(bG, wG);
        const ZG = zb.H7yW(this.__wbg_ptr, GG, bG.__wbg_ptr);
        if (ZG[1]) throw fb(ZG[0])
      }
      rf(GG) {
        const bG = Vb(GG, zb.hsZ7),
          ZG = Eb,
          wG = zb.EAis(this.__wbg_ptr, bG, ZG);
        if (wG[1]) throw fb(wG[0])
      }
      Dp(GG, bG, ZG, wG, SG, LG) {
        const yG = zb.DMOe(this.__wbg_ptr, GG, bG, ZG, wG, SG, LG);
        if (yG[1]) throw fb(yG[0])
      }
      Np(GG, bG, ZG, wG) {
        const SG = Ub(GG, zb.hsZ7),
          LG = Eb,
          yG = Vb(bG, zb.hsZ7),
          kG = Eb,
          UG = Vb(ZG, zb.hsZ7),
          YG = Eb,
          VG = Vb(wG, zb.hsZ7),
          pG = Eb,
          fG = zb.PlCF(this.__wbg_ptr, SG, LG, yG, kG, UG, YG, VG, pG);
        if (fG[1]) throw fb(fG[0])
      }
      Ef(GG, bG) {
        eG(bG, wG);
        const ZG = zb.KAWh(this.__wbg_ptr, GG, bG.__wbg_ptr);
        if (ZG[1]) throw fb(ZG[0])
      }
      Sf(GG, bG, ZG) {
        const wG = zb.GLNn(this.__wbg_ptr, GG, bG, ZG);
        if (wG[1]) throw fb(wG[0])
      }
      uf(GG, bG, ZG, wG, SG, LG, yG, UG, YG, VG) {
        eG(GG, kG);
        return zb.vToB(this.__wbg_ptr, GG.__wbg_ptr, bG, ZG, wG, SG, LG, yG, UG, YG, VG)
      }
    }
    Symbol.dispose && (yG.prototype[Symbol.dispose] = yG.prototype.free);
    class kG {
      static __wrap(GG) {
        const bG = Object.create(kG.prototype);
        return bG.__wbg_ptr = GG, MG.register(bG, bG.__wbg_ptr, bG), bG
      }
      __destroy_into_raw() {
        const GG = this.__wbg_ptr;
        return this.__wbg_ptr = 0, MG.unregister(this), GG
      }
      free() {
        const GG = this.__destroy_into_raw();
        zb.sR00(GG, 0)
      }
      mf(GG) {
        const bG = zb.KJgH(this.__wbg_ptr, GG);
        if (bG[2]) throw fb(bG[1]);
        return bG[0] >>> 0
      }
      Ff(GG, bG, ZG) {
        return zb.pueR(this.__wbg_ptr, GG, bG, ZG)
      }
      vf(GG, bG, ZG) {
        return zb.Vldz(this.__wbg_ptr, GG, bG, ZG) >>> 0
      }
      af(GG, bG, ZG, wG) {
        return 0 !== zb.I2EL(this.__wbg_ptr, GG, bG, ZG, wG)
      }
      lf() {
        zb.zprT(this.__wbg_ptr)
      }
      Pf(GG) {
        const bG = zb.CSdZ(this.__wbg_ptr, GG);
        if (bG[3]) throw fb(bG[2]);
        var ZG = HG(bG[0], bG[1]).slice();
        return zb.jb8N(bG[0], 1 * bG[1], 1), ZG
      }
      evict(GG, bG) {
        return zb.ys3f(this.__wbg_ptr, GG, bG) >>> 0
      }
      Mf() {
        zb.whvu(this.__wbg_ptr)
      }
      Af(GG, bG, ZG) {
        zb.oGLz(this.__wbg_ptr, GG, bG, ZG)
      }
      sf(GG) {
        const bG = zb.l6qA(this.__wbg_ptr, GG);
        if (bG[1]) throw fb(bG[0])
      }
      qf() {
        return zb.FCkw(this.__wbg_ptr) >>> 0
      }
      gf() {
        return zb.tMwc(this.__wbg_ptr) >>> 0
      }
      ef(GG, bG, ZG) {
        zb.wTUU(this.__wbg_ptr, GG, bG, ZG)
      }
      Rf(GG, bG, ZG) {
        zb.SltZ(this.__wbg_ptr, GG, bG, ZG)
      }
      Tf() {
        return zb.AmJi(this.__wbg_ptr) >>> 0
      }
      Hf() {
        return zb.w9j0(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const GG = zb.zgeI();
        return this.__wbg_ptr = GG, MG.register(this, this.__wbg_ptr, this), this
      }
      static tf() {
        const GG = zb.DXmu();
        return kG.__wrap(GG)
      }
      Df() {
        return zb.VssL(this.__wbg_ptr) >>> 0
      }
      Nf() {
        return zb.hzbG(this.__wbg_ptr) >>> 0
      }
      xf(GG, bG, ZG, wG) {
        const SG = zb.egVK(this.__wbg_ptr, GG, bG, ZG, wG);
        if (SG[1]) throw fb(SG[0])
      }
      Bf() {
        return zb.xN9M(this.__wbg_ptr) >>> 0
      }
      GQ() {
        return zb.emAk(this.__wbg_ptr) >>> 0
      }
      bQ(GG, bG, ZG, wG) {
        zb.d57m(this.__wbg_ptr, GG, bG, ZG, wG)
      }
      ZQ(GG) {
        zb.bqGe(this.__wbg_ptr, GG)
      }
      SQ(GG, bG, ZG, wG, SG) {
        const LG = Yb(bG, zb.hsZ7),
          yG = Eb,
          kG = Ub(ZG, zb.hsZ7),
          UG = Eb,
          YG = Vb(wG, zb.hsZ7),
          VG = Eb,
          pG = zb.rgBK(this.__wbg_ptr, GG, LG, yG, kG, UG, YG, VG, SG);
        if (pG[1]) throw fb(pG[0])
      }
      wQ(GG, bG, ZG, wG) {
        const SG = Yb(GG, zb.hsZ7),
          LG = Eb,
          yG = Ub(bG, zb.hsZ7),
          kG = Eb,
          UG = Vb(ZG, zb.hsZ7),
          YG = Eb,
          VG = Yb(wG, zb.hsZ7),
          pG = Eb,
          fG = zb.ps8n(this.__wbg_ptr, SG, LG, yG, kG, UG, YG, VG, pG);
        if (fG[1]) throw fb(fG[0])
      }
      VQ(GG) {
        const bG = Yb(GG, zb.hsZ7),
          ZG = Eb,
          wG = zb.DxL9(this.__wbg_ptr, bG, ZG);
        if (wG[1]) throw fb(wG[0])
      }
      pQ() {
        return zb.oACY(this.__wbg_ptr) >>> 0
      }
      fQ(GG) {
        const bG = zb.pB9q(this.__wbg_ptr, GG);
        if (bG[2]) throw fb(bG[1]);
        return bG[0] >>> 0
      }
      steer() {
        return zb.LAlk(this.__wbg_ptr) >>> 0
      }
      QQ() {
        const GG = zb.sZo2(this.__wbg_ptr);
        var bG = RG(GG[0], GG[1]).slice();
        return zb.jb8N(GG[0], 8 * GG[1], 8), bG
      }
      KQ() {
        return zb.SszL(this.__wbg_ptr) >>> 0
      }
      Yf() {
        const GG = zb.dNiy(this.__wbg_ptr);
        var bG, ZG, wG = (bG = GG[0], ZG = GG[1], bG >>>= 0, (null !== NG && 0 !== NG.byteLength || (NG = new Int32Array(zb.memory.buffer)), NG).subarray(bG / 4, bG / 4 + ZG)).slice();
        return zb.jb8N(GG[0], 4 * GG[1], 4), wG
      }
    }
    Symbol.dispose && (kG.prototype[Symbol.dispose] = kG.prototype.free);
    class UG {
      __destroy_into_raw() {
        const GG = this.__wbg_ptr;
        return this.__wbg_ptr = 0, AG.unregister(this), GG
      }
      free() {
        const GG = this.__destroy_into_raw();
        zb.m4Rt(GG, 0)
      }
      hQ(GG) {
        const bG = Ub(GG, zb.hsZ7),
          ZG = Eb,
          wG = zb.wlNH(this.__wbg_ptr, bG, ZG);
        if (wG[1]) throw fb(wG[0])
      }
      dQ() {
        return zb.soC8(this.__wbg_ptr) >>> 0
      }
      JQ() {
        return zb.CjS6(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const GG = zb.XbTp();
        return this.__wbg_ptr = GG, AG.register(this, this.__wbg_ptr, this), this
      }
      run(GG, bG) {
        eG(GG, kG);
        const ZG = zb.wrnX(this.__wbg_ptr, GG.__wbg_ptr, bG);
        if (ZG[2]) throw fb(ZG[1]);
        return ZG[0] >>> 0
      }
      rQ(GG) {
        const bG = Ub(GG, zb.hsZ7),
          ZG = Eb;
        zb.vtzy(this.__wbg_ptr, bG, ZG)
      }
      zQ(GG) {
        const bG = Ub(GG, zb.hsZ7),
          ZG = Eb;
        zb.KVPx(this.__wbg_ptr, bG, ZG)
      }
    }
    Symbol.dispose && (UG.prototype[Symbol.dispose] = UG.prototype.free);
    class YG {
      __destroy_into_raw() {
        const GG = this.__wbg_ptr;
        return this.__wbg_ptr = 0, sG.unregister(this), GG
      }
      free() {
        const GG = this.__destroy_into_raw();
        zb.dJGV(GG, 0)
      }
      oQ(GG, bG) {
        const ZG = Yb(GG, zb.hsZ7),
          wG = Eb;
        return zb.FaMn(this.__wbg_ptr, ZG, wG, bG) >>> 0
      }
      XQ(GG, bG, ZG) {
        eG(GG, kG);
        const wG = Yb(ZG, zb.hsZ7),
          SG = Eb,
          LG = zb.Doc3(this.__wbg_ptr, GG.__wbg_ptr, bG, wG, SG);
        if (LG[2]) throw fb(LG[1]);
        return LG[0] >>> 0
      }
      EQ(GG) {
        return zb.zn8X(this.__wbg_ptr, GG) >>> 0
      }
      constructor() {
        const GG = zb.Djm1();
        return this.__wbg_ptr = GG, sG.register(this, this.__wbg_ptr, this), this
      }
      scan(GG, bG) {
        eG(GG, kG);
        const ZG = zb.WGhD(this.__wbg_ptr, GG.__wbg_ptr, bG);
        if (ZG[2]) throw fb(ZG[1]);
        return ZG[0] >>> 0
      }
      CQ(GG) {
        const bG = Yb(GG, zb.hsZ7),
          ZG = Eb;
        zb.Mbkf(this.__wbg_ptr, bG, ZG)
      }
      iQ() {
        return zb.Na46(this.__wbg_ptr) >>> 0
      }
      uQ() {
        return zb.h1ox(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (YG.prototype[Symbol.dispose] = YG.prototype.free);
    class VG {
      __destroy_into_raw() {
        const GG = this.__wbg_ptr;
        return this.__wbg_ptr = 0, qG.unregister(this), GG
      }
      free() {
        const GG = this.__destroy_into_raw();
        zb.mL81(GG, 0)
      }
      mQ(GG) {
        const bG = zb.OZHE(this.__wbg_ptr, GG);
        if (bG[2]) throw fb(bG[1]);
        return bG[0] >>> 0
      }
      compute(GG, bG, ZG, wG) {
        var SG = yb(wG) ? 0 : pb(wG, zb.hsZ7, zb.ZOic),
          LG = Eb;
        const yG = zb.dZo4(this.__wbg_ptr, GG, yb(bG) ? Number.MAX_SAFE_INTEGER : bG | 0, ZG, SG, LG);
        if (yG[2]) throw fb(yG[1]);
        return yG[0] >>> 0
      }
      FQ(GG) {
        const bG = pb(GG, zb.hsZ7, zb.ZOic),
          ZG = Eb;
        zb.kUX2(this.__wbg_ptr, bG, ZG)
      }
      aQ() {
        return zb.rBq4(this.__wbg_ptr)
      }
      cQ(GG) {
        return zb.sMzG(this.__wbg_ptr, GG) >>> 0
      }
      lQ() {
        return zb.h4ns(this.__wbg_ptr) >>> 0
      }
      jQ() {
        return zb.wbaT(this.__wbg_ptr) >>> 0
      }
      PQ(GG, bG) {
        const ZG = zb.oVBU(this.__wbg_ptr, GG, bG);
        if (ZG[1]) throw fb(ZG[0])
      }
      MQ() {
        return zb.Sq8N(this.__wbg_ptr) >>> 0
      }
      AQ() {
        return zb.os7I(this.__wbg_ptr) >>> 0
      }
      sQ() {
        return zb.jAHH(this.__wbg_ptr) >>> 0
      }
      IQ(GG, bG, ZG) {
        const wG = Ub(GG, zb.hsZ7),
          SG = Eb,
          LG = Ub(bG, zb.hsZ7),
          yG = Eb,
          kG = zb.kdMS(this.__wbg_ptr, wG, SG, LG, yG, ZG);
        if (kG[1]) throw fb(kG[0])
      }
      nQ() {
        return zb.tRIQ(this.__wbg_ptr) >>> 0
      }
      mesh(GG, bG, ZG, wG, SG) {
        const LG = zb.pGvx(this.__wbg_ptr, GG, bG, ZG, wG, SG);
        if (LG[2]) throw fb(LG[1]);
        return LG[0] >>> 0
      }
      constructor(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG, JG, rG, zG) {
        const EG = kb(GG, zb.hsZ7),
          oG = Eb,
          XG = Vb(bG, zb.hsZ7),
          uG = Eb,
          iG = Ub(ZG, zb.hsZ7),
          CG = Eb,
          WG = Yb(wG, zb.hsZ7),
          mG = Eb,
          IG = Yb(SG, zb.hsZ7),
          FG = Eb,
          vG = Ub(LG, zb.hsZ7),
          aG = Eb,
          cG = Ub(yG, zb.hsZ7),
          lG = Eb,
          jG = Vb(kG, zb.hsZ7),
          PG = Eb,
          MG = Vb(UG, zb.hsZ7),
          AG = Eb,
          sG = Yb(YG, zb.hsZ7),
          nG = Eb;
        var gG = yb(VG) ? 0 : kb(VG, zb.hsZ7),
          eG = Eb;
        const RG = Ub(pG, zb.hsZ7),
          TG = Eb,
          HG = Yb(fG, zb.hsZ7),
          tG = Eb;
        var DG = yb(QG) ? 0 : Yb(QG, zb.hsZ7),
          NG = Eb;
        const OG = Vb(KG, zb.hsZ7),
          xG = Eb,
          BG = zb.rbK8(EG, oG, XG, uG, iG, CG, WG, mG, IG, FG, vG, aG, cG, lG, jG, PG, MG, AG, sG, nG, gG, eG, RG, TG, HG, tG, DG, NG, OG, xG, hG, dG, JG, rG, zG);
        if (BG[2]) throw fb(BG[1]);
        return this.__wbg_ptr = BG[0], qG.register(this, this.__wbg_ptr, this), this
      }
      qQ(GG, bG) {
        const ZG = Ub(GG, zb.hsZ7),
          wG = Eb,
          SG = zb.MXjN(this.__wbg_ptr, ZG, wG, bG);
        if (SG[3]) throw fb(SG[2]);
        var LG = HG(SG[0], SG[1]).slice();
        return zb.jb8N(SG[0], 1 * SG[1], 1), LG
      }
      gQ(GG) {
        zb.c9ZJ(this.__wbg_ptr, yb(GG) ? 16777215 : GG)
      }
      eQ(GG) {
        return zb.GhZ6(this.__wbg_ptr, GG) >>> 0
      }
      TQ() {
        return zb.M66Q(this.__wbg_ptr) >>> 0
      }
      RQ() {
        const GG = zb.wkZD(this.__wbg_ptr);
        if (GG[2]) throw fb(GG[1]);
        return 0 !== GG[0]
      }
      HQ() {
        return zb.PEjV(this.__wbg_ptr) >>> 0
      }
      tQ() {
        return zb.ugyx(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (VG.prototype[Symbol.dispose] = VG.prototype.free);
    class pG {
      __destroy_into_raw() {
        const GG = this.__wbg_ptr;
        return this.__wbg_ptr = 0, nG.unregister(this), GG
      }
      free() {
        const GG = this.__destroy_into_raw();
        zb.nxrW(GG, 0)
      }
      compute(GG, bG, ZG, wG) {
        var SG = yb(wG) ? 0 : pb(wG, zb.hsZ7, zb.ZOic),
          LG = Eb;
        const yG = zb.hRFx(this.__wbg_ptr, GG, yb(bG) ? Number.MAX_SAFE_INTEGER : bG | 0, ZG, SG, LG);
        if (yG[2]) throw fb(yG[1]);
        return yG[0] >>> 0
      }
      FQ(GG) {
        const bG = pb(GG, zb.hsZ7, zb.ZOic),
          ZG = Eb;
        zb.e8Hi(this.__wbg_ptr, bG, ZG)
      }
      AQ() {
        return zb.mh9F(this.__wbg_ptr) >>> 0
      }
      sQ() {
        return zb.wE2O(this.__wbg_ptr) >>> 0
      }
      DQ(GG) {
        const bG = zb.ThDs(this.__wbg_ptr, GG);
        if (bG[2]) throw fb(bG[1]);
        return bG[0] >>> 0
      }
      constructor(GG, bG, ZG, wG, SG, LG) {
        const yG = kb(GG, zb.hsZ7),
          kG = Eb,
          UG = Vb(bG, zb.hsZ7),
          YG = Eb,
          VG = Ub(ZG, zb.hsZ7),
          pG = Eb,
          fG = Yb(wG, zb.hsZ7),
          QG = Eb,
          KG = zb.NqnE(yG, kG, UG, YG, VG, pG, fG, QG, SG, LG);
        if (KG[2]) throw fb(KG[1]);
        return this.__wbg_ptr = KG[0], nG.register(this, this.__wbg_ptr, this), this
      }
      TQ() {
        return zb.Ztcf(this.__wbg_ptr) >>> 0
      }
      RQ() {
        const GG = zb.UL7n(this.__wbg_ptr);
        if (GG[2]) throw fb(GG[1]);
        return 0 !== GG[0]
      }
      HQ() {
        return zb.y8qS(this.__wbg_ptr) >>> 0
      }
    }

    function fG() {
      const GG = zb.hyzB();
      var bG = TG(GG[0], GG[1]).slice();
      return zb.jb8N(GG[0], 4 * GG[1], 4), bG
    }

    function QG(GG, bG) {
      let ZG, wG;
      try {
        const SG = kb(GG, zb.hsZ7),
          LG = Eb,
          yG = pb(bG, zb.hsZ7, zb.ZOic),
          kG = Eb,
          UG = zb.YOT2(SG, LG, yG, kG);
        return ZG = UG[0], wG = UG[1], OG(UG[0], UG[1])
      } finally {
        zb.jb8N(ZG, wG, 1)
      }
    }

    function KG() {
      const GG = zb.zFYR();
      var bG = TG(GG[0], GG[1]).slice();
      return zb.jb8N(GG[0], 4 * GG[1], 4), bG
    }

    function hG(GG) {
      return 0 !== zb.pS52(GG)
    }

    function dG(GG, bG) {
      const ZG = pb(GG, zb.hsZ7, zb.ZOic),
        wG = Eb,
        SG = zb.xCiY(ZG, wG, bG);
      if (SG[1]) throw fb(SG[0])
    }

    function JG() {
      zb.JzEs()
    }

    function rG() {
      return zb.PnMq() >>> 0
    }

    function zG(GG) {
      return 0 !== zb.dGGA(GG)
    }

    function EG(GG) {
      return 0 !== zb.h7xx(GG)
    }

    function oG(GG) {
      zb.hhFn(GG)
    }

    function XG() {
      return zb.Ko4H() >>> 0
    }

    function uG() {
      return zb.wrT2() >>> 0
    }

    function iG() {
      return 0 !== zb.AQrU()
    }

    function CG() {
      const GG = zb.QPV0();
      var bG = TG(GG[0], GG[1]).slice();
      return zb.jb8N(GG[0], 4 * GG[1], 4), bG
    }

    function WG() {
      const GG = zb.EiuD();
      var bG = TG(GG[0], GG[1]).slice();
      return zb.jb8N(GG[0], 4 * GG[1], 4), bG
    }

    function mG() {
      const GG = zb.QsMk();
      var bG = TG(GG[0], GG[1]).slice();
      return zb.jb8N(GG[0], 4 * GG[1], 4), bG
    }

    function IG() {
      return zb.qTv1() >>> 0
    }

    function FG() {
      zb.Kwmt()
    }

    function vG() {
      let GG, bG;
      try {
        const ZG = zb.CrrR();
        return GG = ZG[0], bG = ZG[1], OG(ZG[0], ZG[1])
      } finally {
        zb.jb8N(GG, bG, 1)
      }
    }

    function aG(GG) {
      zb.bvCU(gG(GG))
    }

    function cG() {
      return {
        __proto__: null,
        r8kk: {
          __proto__: null,
          ZiCJ: function(GG, bG) {
            return gG(Error(OG(GG, bG)))
          },
          zdMV: function(GG, bG) {
            throw new Error(OG(GG, bG))
          },
          fo3y: function(GG) {
            wb(GG).call()
          },
          IEKj: function(GG, bG) {
            console.error(OG(GG, bG))
          },
          ihtU: function() {
            return performance.now()
          },
          EWnn: function(GG) {
            fb(GG)
          }
        }
      }
    }
    Symbol.dispose && (pG.prototype[Symbol.dispose] = pG.prototype.free);
    const lG = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((GG => zb.bTOq(GG, 1))),
      jG = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((GG => zb.csz6(GG, 1))),
      PG = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((GG => zb.btjj(GG, 1))),
      MG = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((GG => zb.sR00(GG, 1))),
      AG = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((GG => zb.m4Rt(GG, 1))),
      sG = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((GG => zb.dJGV(GG, 1))),
      qG = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((GG => zb.mL81(GG, 1))),
      nG = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((GG => zb.nxrW(GG, 1)));

    function gG(GG) {
      Lb === Sb.length && Sb.push(Sb.length + 1);
      const bG = Lb;
      return Lb = Sb[bG], Sb[bG] = GG, bG
    }

    function eG(GG, bG) {
      if (!(GG instanceof bG)) throw new Error(`expected instance of ${bG.name}`)
    }

    function RG(GG, bG) {
      return GG >>>= 0, DG().subarray(GG / 8, GG / 8 + bG)
    }

    function TG(GG, bG) {
      return GG >>>= 0, Gb().subarray(GG / 4, GG / 4 + bG)
    }

    function HG(GG, bG) {
      return GG >>>= 0, Zb().subarray(GG / 1, GG / 1 + bG)
    }
    let tG = null;

    function DG() {
      return null !== tG && 0 !== tG.byteLength || (tG = new Float64Array(zb.memory.buffer)), tG
    }
    let NG = null;

    function OG(GG, bG) {
      return function(GG, bG) {
        hb += bG, hb >= Kb && (Qb = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Qb.decode(), hb = bG);
        return Qb.decode(Zb().subarray(GG, GG + bG))
      }(GG >>> 0, bG)
    }
    let xG = null;
    let BG = null;

    function Gb() {
      return null !== BG && 0 !== BG.byteLength || (BG = new Uint32Array(zb.memory.buffer)), BG
    }
    let bb = null;

    function Zb() {
      return null !== bb && 0 !== bb.byteLength || (bb = new Uint8Array(zb.memory.buffer)), bb
    }

    function wb(GG) {
      return Sb[GG]
    }
    let Sb = new Array(1024).fill(void 0);
    Sb.push(void 0, null, !0, !1);
    let Lb = Sb.length;

    function yb(GG) {
      return void 0 === GG || null === GG
    }

    function kb(GG, bG) {
      const ZG = bG(2 * GG.length, 2) >>> 0;
      return (null !== xG && 0 !== xG.byteLength || (xG = new Uint16Array(zb.memory.buffer)), xG).set(GG, ZG / 2), Eb = GG.length, ZG
    }

    function Ub(GG, bG) {
      const ZG = bG(4 * GG.length, 4) >>> 0;
      return Gb().set(GG, ZG / 4), Eb = GG.length, ZG
    }

    function Yb(GG, bG) {
      const ZG = bG(1 * GG.length, 1) >>> 0;
      return Zb().set(GG, ZG / 1), Eb = GG.length, ZG
    }

    function Vb(GG, bG) {
      const ZG = bG(8 * GG.length, 8) >>> 0;
      return DG().set(GG, ZG / 8), Eb = GG.length, ZG
    }

    function pb(GG, bG, ZG) {
      if (void 0 === ZG) {
        const ZG = db.encode(GG),
          wG = bG(ZG.length, 1) >>> 0;
        return Zb().subarray(wG, wG + ZG.length).set(ZG), Eb = ZG.length, wG
      }
      let wG = GG.length,
        SG = bG(wG, 1) >>> 0;
      const LG = Zb();
      let yG = 0;
      for (; yG < wG; yG++) {
        const bG = GG.charCodeAt(yG);
        if (bG > 127) break;
        LG[SG + yG] = bG
      }
      if (yG !== wG) {
        0 !== yG && (GG = GG.slice(yG)), SG = ZG(SG, wG, wG = yG + 3 * GG.length, 1) >>> 0;
        const bG = Zb().subarray(SG + yG, SG + wG);
        yG += db.encodeInto(GG, bG).written, SG = ZG(SG, wG, yG, 1) >>> 0
      }
      return Eb = yG, SG
    }

    function fb(GG) {
      const bG = wb(GG);
      return function(GG) {
        GG < 1028 || (Sb[GG] = Lb, Lb = GG)
      }(GG), bG
    }
    let Qb = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Qb.decode();
    const Kb = 2146435072;
    let hb = 0;
    const db = new TextEncoder;
    "encodeInto" in db || (db.encodeInto = function(GG, bG) {
      const ZG = db.encode(GG);
      return bG.set(ZG), {
        read: GG.length,
        written: ZG.length
      }
    });
    let Jb, rb, zb, Eb = 0;

    function ob(GG, bG) {
      return rb = GG, zb = GG.exports, Jb = bG, tG = null, NG = null, xG = null, BG = null, bb = null, zb.EUzg(), zb
    }

    function Xb(GG) {
      if (void 0 !== zb) return zb;
      void 0 !== GG && (Object.getPrototypeOf(GG) === Object.prototype ? ({
        module: GG
      } = GG) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const bG = cG();
      GG instanceof WebAssembly.Module || (GG = new WebAssembly.Module(GG));
      return ob(new WebAssembly.Instance(GG, bG), GG)
    }
    async function ub(GG) {
      if (void 0 !== zb) return zb;
      void 0 !== GG && (Object.getPrototypeOf(GG) === Object.prototype ? ({
        module_or_path: GG
      } = GG) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const bG = cG();
      ("string" === typeof GG || "function" === typeof Request && GG instanceof Request || "function" === typeof URL && GG instanceof URL) && (GG = fetch(GG));
      const {
        instance: ZG,
        module: wG
      } = await async function(GG, bG) {
        if ("function" === typeof Response && GG instanceof Response) {
          if (!GG.ok) throw new Error(`failed to fetch Wasm: ${GG.status} ${GG.statusText} fetching '${GG.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(GG, bG)
          } catch (ZG) {
            if (! function(GG) {
                switch (GG) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(GG.type) || "application/wasm" === GG.headers.get("Content-Type")) throw ZG;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ZG)
          }
          const wG = await GG.arrayBuffer();
          return await WebAssembly.instantiate(wG, bG)
        } {
          const ZG = await WebAssembly.instantiate(GG, bG);
          return ZG instanceof WebAssembly.Instance ? {
            instance: ZG,
            module: GG
          } : ZG
        }
      }(await GG, bG);
      return ob(ZG, wG)
    }
  },
  36632: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      g: () => kG,
      h: () => UG
    });
    var wG = ZG(36636),
      SG = ZG(2868),
      LG = ZG(36643);
    const yG = {
      name: SG.d,
      url: () => new ZG.U(ZG(36650)),
      init: wG.default,
      bindings: wG
    };

    function kG() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG,
        bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yG,
        ZG = arguments.length > 2 ? arguments[2] : void 0;
      return (0, LG.l)(GG, bG, ZG)
    }

    function UG(GG) {
      return (0, SG.N)((() => GG), wG, yG)
    }
  },
  36624: (GG, bG, ZG) => {
    function wG(GG, bG) {
      return new Error(`${GG}: ${bG instanceof Error?`${bG.name}: ${bG.message}`:String(bG)}`, {
        cause: bG
      })
    }
    ZG.d(bG, {
      c: () => wG
    })
  },
  36615: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG,
      d: () => UG
    });
    var wG = ZG(2872),
      SG = ZG(6617),
      LG = ZG(36624);

    function yG() {
      return new URL(new ZG.U(ZG(36630)).href, globalThis.location?.href).href
    }
    let kG = null;

    function UG() {
      return kG ??= (async () => (0, wG.G)(new URL(yG()), (0, SG.e)("bloxd_wasm_textures")))().catch((GG => {
        throw (0, LG.c)((0, wG.L)(GG), GG)
      })), kG
    }
  },
  36594: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG,
      e: () => LG,
      h: () => UG,
      i: () => yG,
      m: () => SG
    });
    const wG = /^alloc_failed (\d+) bytes$/;

    function SG(GG, bG) {
      return LG(GG, bG) ? `trap=alloc_failed ${bG} bytes` : `trap=${GG}`
    }

    function LG(GG, bG) {
      return "unreachable" === GG && bG > 0
    }

    function yG(GG, bG, ZG) {
      const wG = function(GG) {
        return GG instanceof WebAssembly.RuntimeError ? /unreachable/i.test(GG.message) ? "unreachable" : /out of bounds/i.test(GG.message) ? "out_of_bounds" : "runtime_error" : (GG instanceof RangeError || GG instanceof Error && "InternalError" === GG.name) && /call stack|recursion/i.test(GG.message) ? "stack_overflow" : "js_error"
      }(GG);
      if ("unreachable" !== wG) return {
        kind: wG,
        panic: null,
        refusedBytes: 0
      };
      const SG = bG(),
        LG = ZG();
      return {
        kind: wG,
        panic: LG > 0 ? null : SG,
        refusedBytes: LG
      }
    }
    const kG = 300;

    function UG(GG) {
      return GG.replace(/\s*\n\s*/g, " / ").slice(0, kG)
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);