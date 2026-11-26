export const id = 213;
export const ids = [212, 213];
export const modules = {
  34626: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      CAPPED_COUNTS_VISIT_CAP: () => QB,
      reportCappedWasmFailure: () => yB,
      reportUncappedWasmFailure: () => jB,
      reportWasmCrash: () => DB,
      reportWasmFailure: () => oB
    });
    var YB = GB(1856);

    function DB(BB) {
      (0, YB.reportClientError)("wasm_load", BB.message, BB.code)
    }
    const QB = YB.MAX_ERRORS_PER_VISIT - 4;

    function oB(BB, OB, GB, DB) {
      (0, YB.reportClientError)(BB, OB, GB, !1, YB.MAX_ERRORS_PER_VISIT, {
        context: DB
      })
    }

    function jB(BB, OB, GB, DB) {
      (0, YB.reportClientError)(BB, OB, GB, !1, 1 / 0, {
        context: DB
      })
    }

    function yB(BB, OB, GB, DB) {
      (0, YB.reportClientError)(BB, OB, GB, !1, QB, {
        context: DB
      })
    }
  },
  36862: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => SB,
      e: () => fB,
      g: () => kB,
      h: () => nB
    });
    var YB = GB(36885),
      DB = GB(3206),
      QB = GB(36902),
      oB = GB(3210),
      jB = GB(34626),
      yB = GB(3274),
      JB = GB(3645),
      MB = GB(3641),
      PB = GB(36871),
      zB = GB(1856),
      lB = GB(36874),
      pB = GB(36876),
      qB = GB(4128);
    let ZB = !1;
    const NB = 40;
    var RB = GB(3656),
      WB = GB(4018);
    const AB = "bloxdWasmFailureReported";

    function VB() {
      return "undefined" === typeof WebAssembly
    }

    function SB() {
      return (0, YB.g)()
    }

    function nB() {
      if (VB()) return "this browser has no WebAssembly";
      const BB = (0, DB.n)();
      return "compile" === BB || "instantiate" === BB ? `the core wasm didn't load here (${(0,DB.g)()})` : null
    }
    async function UB(BB) {
      return await (0, RB.g)(), await (0, QB.i)(QB.e, void 0, BB)
    }

    function fB() {
      VB() || (0, WB.e)((() => {
        UB()
      }))
    }

    function kB() {
      if (VB()) return async () => ((0, yB.i)("unsupported", 0), dB("unsupported", "This browser has no WebAssembly"), !1);
      const BB = {
        reloadFailedDownload: !0
      };
      return UB(BB), async () => {
        var OB;
        const GB = performance.now();
        await UB(BB);
        const YB = (performance.now() - GB) / 1e3;
        if ((0, DB.S)()) return (0, yB.i)("ready", YB), ZB || (ZB = !0, (0, DB.U)((() => {
          if ("call" !== (0, DB.n)()) return;
          const BB = (0, DB.l)(),
            OB = (0, PB.k)(BB, DB.B, DB.bb),
            GB = (0, DB.u)().buffer.byteLength,
            YB = (0, PB.e)(OB.kind, OB.refusedBytes),
            QB = YB ? "alloc_failed" : OB.kind,
            oB = (0, lB.l)(GB),
            jB = YB ? `_r${Math.floor(Math.log2(OB.refusedBytes))}` : "",
            yB = (0, qB.d)();
          null === yB && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const JB = new Error((0, pB.b)(BB, GB, OB));
          if (BB instanceof Error && void 0 !== BB.stack) {
            const OB = BB.stack.split("\n"),
              GB = OB.length > NB ? [...OB.slice(0, NB / 2), ...OB.slice(-NB / 2)] : OB;
            JB.stack = GB.join("\n")
          }(0, zB.reportClientError)("wasm_load", JB, `wasm_call_${QB}_${null!==yB&&void 0!==yB?yB:"unnamed"}_m${oB}${jB}`)
        }))), (0, oB.S)(QB.e.url()) && (0, jB.reportCappedWasmFailure)("wasm_load", JB.b.message, JB.b.code), !0;
        const RB = MB.c[null !== (OB = (0, DB.n)()) && void 0 !== OB ? OB : "call"];
        return (0, yB.i)(RB, YB), dB(RB, (0, DB.g)()), !1
      }
    }

    function dB(BB, OB) {
      (0, MB.h)(AB, `Bloxd wasm ${BB}, so the game can't start: ${OB}`, OB, BB)
    }
  },
  36876: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => jB,
      d: () => JB,
      h: () => oB,
      l: () => PB
    });
    var YB = GB(36871),
      DB = GB(6);
    const QB = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function oB(BB) {
      if (BB instanceof WebAssembly.RuntimeError) return !0;
      const OB = BB instanceof Error ? BB.stack : void 0;
      return "string" === typeof OB && QB.test(OB)
    }

    function jB(BB, OB, GB) {
      var DB;
      const oB = BB instanceof Error ? BB.name : "thrown",
        jB = (BB instanceof Error && null !== (DB = BB.stack) && void 0 !== DB ? DB : "").split("\n").filter((BB => QB.test(BB))).slice(0, 8).map((BB => BB.trim())),
        yB = null === OB ? "wasm memory unknown" : `wasm memory ${Math.round(OB/2**20)} MB`,
        JB = null === GB.panic ? "" : `, panic: ${(0,YB.h)(GB.panic)}`,
        MB = `${oB}: ${BB instanceof Error?BB.message:String(BB)}`;
      return `${(0,YB.n)(GB.kind,GB.refusedBytes)} ${MB} (${yB})${JB}${jB.length>0?` | ${jB.join(" < ")}`:""}`
    }
    const yB = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function JB(BB) {
      var OB;
      let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(BB instanceof Error) || !yB.test(BB.message)) return {};
      if (!("detached" in GB)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, DB.T)(null === (OB = (0, DB.M)(GB, "detached")) || void 0 === OB ? void 0 : OB.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const MB = 500;

    function PB(BB) {
      let OB = "[object Object]";
      try {
        OB = String(BB)
      } catch {}
      if ("[object Object]" !== OB) return OB;
      try {
        var GB, YB;
        return null !== (GB = null === (YB = JSON.stringify(BB)) || void 0 === YB ? void 0 : YB.slice(0, MB)) && void 0 !== GB ? GB : OB
      } catch {
        return OB
      }
    }
  },
  36921: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bloxd_wasm_bg.2d869609fdbc6beb838a.wasm"
  },
  36893: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bloxd_wasm_textures_bg.a539253ec85e302f100c.wasm"
  },
  36907: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      NO: () => YB,
      EnvelopeKind: () => DB,
      TO: () => QB,
      PhysicsEngine: () => oB,
      BG: () => jB,
      EG: () => yB,
      FD: () => JB,
      HD: () => MB,
      PQ: () => PB,
      XQ: () => zB,
      HQ: () => lB,
      Do: () => pB,
      Lo: () => qB,
      sy: () => ZB,
      default: () => nO,
      initSync: () => SO,
      VP: () => NB,
      IP: () => RB,
      FP: () => WB,
      iP: () => AB,
      LP: () => VB,
      gP: () => SB,
      rP: () => nB,
      XP: () => UB,
      wP: () => fB,
      EP: () => kB,
      cP: () => dB,
      hP: () => KB,
      aP: () => uB,
      eP: () => mB,
      TP: () => IB
    });
    class YB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, iB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        WO.JI2k(BB, 0)
      }
      bP() {
        const BB = WO.heZ1(this.__wbg_ptr);
        if (BB[2]) throw zO(BB[1]);
        return BB[0] >>> 0
      }
      CP() {
        return WO.Zifk(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const BB = WO.HLFf();
        return this.__wbg_ptr = BB, iB.register(this, this.__wbg_ptr, this), this
      }
      HP() {
        return WO.I756(this.__wbg_ptr) >>> 0
      }
      vP(BB) {
        const OB = WO.uoXg(this.__wbg_ptr, BB);
        if (OB[2]) throw zO(OB[1]);
        return OB[0] >>> 0
      }
      sP(BB) {
        const OB = WO.foch(this.__wbg_ptr, BB);
        if (OB[2]) throw zO(OB[1]);
        return OB[0] >>> 0
      }
    }
    Symbol.dispose && (YB.prototype[Symbol.dispose] = YB.prototype.free);
    const DB = Object.freeze({
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
    class QB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, LB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        WO.TzT0(BB, 0)
      }
      Bz(BB, OB) {
        const GB = WO.aGPo(this.__wbg_ptr, BB, OB);
        if (GB[2]) throw zO(GB[1]);
        return GB[0] >>> 0
      }
      Oz(BB) {
        const OB = WO.rFRs(this.__wbg_ptr, BB);
        if (OB[2]) throw zO(OB[1]);
        return OB[0] >>> 0
      }
      Gz() {
        WO.rbWz(this.__wbg_ptr)
      }
      static Yz() {
        return WO.YvBm() >>> 0
      }
      Dz() {
        return WO.KlKB(this.__wbg_ptr) >>> 0
      }
      Qz() {
        const BB = WO.cbqz(this.__wbg_ptr);
        return 0 === BB[0] ? void 0 : BB[1]
      }
      jz() {
        return WO.Jdnx(this.__wbg_ptr) >>> 0
      }
      yz() {
        return WO.qjy8(this.__wbg_ptr) >>> 0
      }
      static tP() {
        return WO.ANKh() >>> 0
      }
      constructor() {
        const BB = WO.MKP6();
        return this.__wbg_ptr = BB, LB.register(this, this.__wbg_ptr, this), this
      }
      Jz() {
        return WO.DH3q(this.__wbg_ptr) >>> 0
      }
      Mz() {
        return WO.VUg4(this.__wbg_ptr) >>> 0
      }
      Pz() {
        return WO.LOVY(this.__wbg_ptr) >>> 0
      }
      xP(BB) {
        return WO.Tr1E(this.__wbg_ptr, BB) >>> 0
      }
      reserve(BB, OB) {
        const GB = WO.vvI4(this.__wbg_ptr, BB, OB);
        if (GB[1]) throw zO(GB[0])
      }
      pz(BB, OB) {
        const GB = yO(BB, WO.rkqt),
          YB = AO;
        WO.vYRR(this.__wbg_ptr, GB, YB, OB)
      }
      text() {
        let BB, OB;
        try {
          const GB = WO.vmST(this.__wbg_ptr);
          return BB = GB[0], OB = GB[1], sB(GB[0], GB[1])
        } finally {
          WO.nx4G(BB, OB, 1)
        }
      }
    }
    Symbol.dispose && (QB.prototype[Symbol.dispose] = QB.prototype.free);
    class oB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, gB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        WO.hibU(BB, 0)
      }
      Zz(BB, OB) {
        aB(OB, YB);
        const GB = WO.ijCN(this.__wbg_ptr, BB, OB.__wbg_ptr);
        if (GB[2]) throw zO(GB[1]);
        return GB[0] >>> 0
      }
      Nz() {
        const BB = WO.NgkQ(this.__wbg_ptr);
        if (BB[1]) throw zO(BB[0])
      }
      Vz(BB, OB, GB, YB, DB, QB, oB, yB, JB, MB, PB) {
        aB(BB, jB);
        const zB = WO.E1i1(this.__wbg_ptr, BB.__wbg_ptr, OB, GB, YB, DB, QB, oB, yB, JB, MB, PB);
        if (zB[2]) throw zO(zB[1]);
        return zB[0]
      }
      Sz() {
        const BB = WO.CLy3(this.__wbg_ptr);
        var OB = eB(BB[0], BB[1]).slice();
        return WO.nx4G(BB[0], 8 * BB[1], 8), OB
      }
      nz() {
        return WO.Fkoj(this.__wbg_ptr) >>> 0
      }
      Uz() {
        return WO.F2oI(this.__wbg_ptr) >>> 0
      }
      fz() {
        return WO.PR2w(this.__wbg_ptr) >>> 0
      }
      constructor(BB, OB, GB, YB, DB, QB, oB, jB) {
        const yB = WO.sH1H(BB, OB, GB, YB, DB, QB, oB, jB);
        if (yB[2]) throw zO(yB[1]);
        return this.__wbg_ptr = yB[0], gB.register(this, this.__wbg_ptr, this), this
      }
      Kz(BB) {
        aB(BB, YB);
        const OB = WO.klZt(this.__wbg_ptr, BB.__wbg_ptr);
        if (OB[2]) throw zO(OB[1]);
        return OB[0] >>> 0
      }
      mz(BB) {
        const OB = WO.PfZK(this.__wbg_ptr, BB);
        if (OB[1]) throw zO(OB[0])
      }
      Iz() {
        return WO.TEDh(this.__wbg_ptr) >>> 0
      }
      resume(BB, OB) {
        aB(BB, jB), aB(OB, YB);
        const GB = WO.ONh6(this.__wbg_ptr, BB.__wbg_ptr, OB.__wbg_ptr);
        if (GB[2]) throw zO(GB[1]);
        return GB[0] >>> 0
      }
      rz(BB) {
        const OB = WO.dlDz(this.__wbg_ptr, BB);
        if (OB[1]) throw zO(OB[0])
      }
      Ez(BB, OB) {
        aB(OB, YB);
        const GB = WO.wo15(this.__wbg_ptr, BB, OB.__wbg_ptr);
        if (GB[1]) throw zO(GB[0])
      }
      ez(BB) {
        const OB = MO(BB, WO.rkqt),
          GB = AO,
          YB = WO.oVJ7(this.__wbg_ptr, OB, GB);
        if (YB[1]) throw zO(YB[0])
      }
      Wz(BB, OB, GB, YB, DB, QB) {
        const oB = WO.Qjt1(this.__wbg_ptr, BB, OB, GB, YB, DB, QB);
        if (oB[1]) throw zO(oB[0])
      }
      Az(BB, OB, GB, YB) {
        const DB = yO(BB, WO.rkqt),
          QB = AO,
          oB = MO(OB, WO.rkqt),
          jB = AO,
          yB = MO(GB, WO.rkqt),
          JB = AO,
          MB = MO(YB, WO.rkqt),
          PB = AO,
          zB = WO.EJ7C(this.__wbg_ptr, DB, QB, oB, jB, yB, JB, MB, PB);
        if (zB[1]) throw zO(zB[0])
      }
      bz(BB, OB) {
        aB(OB, YB);
        const GB = WO.Ue50(this.__wbg_ptr, BB, OB.__wbg_ptr);
        if (GB[1]) throw zO(GB[0])
      }
      dz(BB, OB, GB) {
        const YB = WO.jM3o(this.__wbg_ptr, BB, OB, GB);
        if (YB[1]) throw zO(YB[0])
      }
      vz(BB, OB, GB, YB, DB, QB, oB, yB, JB, MB) {
        aB(BB, jB);
        return WO.clIZ(this.__wbg_ptr, BB.__wbg_ptr, OB, GB, YB, DB, QB, oB, yB, JB, MB)
      }
    }
    Symbol.dispose && (oB.prototype[Symbol.dispose] = oB.prototype.free);
    class jB {
      static __wrap(BB) {
        const OB = Object.create(jB.prototype);
        return OB.__wbg_ptr = BB, rB.register(OB, OB.__wbg_ptr, OB), OB
      }
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, rB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        WO.iBl3(BB, 0)
      }
      xz(BB) {
        const OB = WO.mhhS(this.__wbg_ptr, BB);
        if (OB[2]) throw zO(OB[1]);
        return OB[0] >>> 0
      }
      tz(BB, OB, GB) {
        return WO.AdoX(this.__wbg_ptr, BB, OB, GB)
      }
      Bl(BB, OB, GB) {
        return WO.N5jl(this.__wbg_ptr, BB, OB, GB) >>> 0
      }
      Ol(BB, OB, GB, YB) {
        return 0 !== WO.tCnu(this.__wbg_ptr, BB, OB, GB, YB)
      }
      Gl() {
        WO.GUHS(this.__wbg_ptr)
      }
      Yl(BB) {
        const OB = WO.BauY(this.__wbg_ptr, BB);
        if (OB[3]) throw zO(OB[2]);
        var GB = bB(OB[0], OB[1]).slice();
        return WO.nx4G(OB[0], 1 * OB[1], 1), GB
      }
      evict(BB, OB) {
        return WO.d7xf(this.__wbg_ptr, BB, OB) >>> 0
      }
      Dl() {
        WO.OWdJ(this.__wbg_ptr)
      }
      Ql(BB, OB, GB) {
        WO.QDNm(this.__wbg_ptr, BB, OB, GB)
      }
      ol(BB) {
        const OB = WO.uYmN(this.__wbg_ptr, BB);
        if (OB[1]) throw zO(OB[0])
      }
      jl() {
        return WO.tLC8(this.__wbg_ptr) >>> 0
      }
      yl() {
        return WO.TCZI(this.__wbg_ptr) >>> 0
      }
      Jl(BB, OB, GB) {
        WO.n9Xn(this.__wbg_ptr, BB, OB, GB)
      }
      Ml(BB, OB, GB) {
        WO.BzgY(this.__wbg_ptr, BB, OB, GB)
      }
      Pl() {
        return WO.IhsG(this.__wbg_ptr) >>> 0
      }
      zl() {
        return WO.XidX(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const BB = WO.YmNw();
        return this.__wbg_ptr = BB, rB.register(this, this.__wbg_ptr, this), this
      }
      static ll() {
        const BB = WO.LbVU();
        return jB.__wrap(BB)
      }
      pl() {
        return WO.NxGB(this.__wbg_ptr) >>> 0
      }
      ql() {
        return WO.ZFg6(this.__wbg_ptr) >>> 0
      }
      Zl(BB, OB, GB, YB) {
        const DB = WO.txsY(this.__wbg_ptr, BB, OB, GB, YB);
        if (DB[1]) throw zO(DB[0])
      }
      Nl() {
        return WO.sw3F(this.__wbg_ptr) >>> 0
      }
      Rl() {
        return WO.lJR9(this.__wbg_ptr) >>> 0
      }
      Wl(BB, OB, GB, YB) {
        WO.Dd6o(this.__wbg_ptr, BB, OB, GB, YB)
      }
      Al(BB) {
        WO.RogI(this.__wbg_ptr, BB)
      }
      Sl(BB, OB, GB, YB, DB) {
        const QB = JO(OB, WO.rkqt),
          oB = AO,
          jB = yO(GB, WO.rkqt),
          yB = AO,
          JB = MO(YB, WO.rkqt),
          MB = AO,
          PB = WO.JL5t(this.__wbg_ptr, BB, QB, oB, jB, yB, JB, MB, DB);
        if (PB[1]) throw zO(PB[0])
      }
      Vl(BB, OB, GB, YB) {
        const DB = JO(BB, WO.rkqt),
          QB = AO,
          oB = yO(OB, WO.rkqt),
          jB = AO,
          yB = MO(GB, WO.rkqt),
          JB = AO,
          MB = JO(YB, WO.rkqt),
          PB = AO,
          zB = WO.kmx6(this.__wbg_ptr, DB, QB, oB, jB, yB, JB, MB, PB);
        if (zB[1]) throw zO(zB[0])
      }
      dl(BB) {
        const OB = JO(BB, WO.rkqt),
          GB = AO,
          YB = WO.nTTS(this.__wbg_ptr, OB, GB);
        if (YB[1]) throw zO(YB[0])
      }
      Kl() {
        return WO.H7r5(this.__wbg_ptr) >>> 0
      }
      ul(BB) {
        const OB = WO.Pyva(this.__wbg_ptr, BB);
        if (OB[2]) throw zO(OB[1]);
        return OB[0] >>> 0
      }
      steer() {
        return WO.PU5T(this.__wbg_ptr) >>> 0
      }
      ml() {
        const BB = WO.VBR7(this.__wbg_ptr);
        var OB = eB(BB[0], BB[1]).slice();
        return WO.nx4G(BB[0], 8 * BB[1], 8), OB
      }
      Il() {
        return WO.lOVx(this.__wbg_ptr) >>> 0
      }
      iz() {
        const BB = WO.SEIU(this.__wbg_ptr);
        var OB, GB, YB = (OB = BB[0], GB = BB[1], OB >>>= 0, (null !== vB && 0 !== vB.byteLength || (vB = new Int32Array(WO.memory.buffer)), vB).subarray(OB / 4, OB / 4 + GB)).slice();
        return WO.nx4G(BB[0], 4 * BB[1], 4), YB
      }
    }
    Symbol.dispose && (jB.prototype[Symbol.dispose] = jB.prototype.free);
    class yB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, XB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        WO.bsrS(BB, 0)
      }
      ZP(BB) {
        const OB = yO(BB, WO.rkqt),
          GB = AO,
          YB = WO.oH7w(this.__wbg_ptr, OB, GB);
        if (YB[1]) throw zO(YB[0])
      }
      Fl() {
        return WO.i4xG(this.__wbg_ptr) >>> 0
      }
      il() {
        return WO.pw2k(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const BB = WO.qwec();
        return this.__wbg_ptr = BB, XB.register(this, this.__wbg_ptr, this), this
      }
      run(BB, OB) {
        aB(BB, jB);
        const GB = WO.AdrK(this.__wbg_ptr, BB.__wbg_ptr, OB);
        if (GB[2]) throw zO(GB[1]);
        return GB[0] >>> 0
      }
      Ll(BB) {
        const OB = yO(BB, WO.rkqt),
          GB = AO;
        WO.AtfZ(this.__wbg_ptr, OB, GB)
      }
      gl(BB) {
        const OB = yO(BB, WO.rkqt),
          GB = AO;
        WO.arTe(this.__wbg_ptr, OB, GB)
      }
    }
    Symbol.dispose && (yB.prototype[Symbol.dispose] = yB.prototype.free);
    class JB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, wB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        WO.EqiV(BB, 0)
      }
      Xl(BB, OB) {
        const GB = JO(BB, WO.rkqt),
          YB = AO;
        return WO.wo8R(this.__wbg_ptr, GB, YB, OB) >>> 0
      }
      wl(BB, OB, GB) {
        aB(BB, jB);
        const YB = JO(GB, WO.rkqt),
          DB = AO,
          QB = WO.FteC(this.__wbg_ptr, BB.__wbg_ptr, OB, YB, DB);
        if (QB[2]) throw zO(QB[1]);
        return QB[0] >>> 0
      }
      rl(BB) {
        return WO.UCPn(this.__wbg_ptr, BB) >>> 0
      }
      constructor() {
        const BB = WO.LNHR();
        return this.__wbg_ptr = BB, wB.register(this, this.__wbg_ptr, this), this
      }
      scan(BB, OB) {
        aB(BB, jB);
        const GB = WO.zwVm(this.__wbg_ptr, BB.__wbg_ptr, OB);
        if (GB[2]) throw zO(GB[1]);
        return GB[0] >>> 0
      }
      hl(BB) {
        const OB = JO(BB, WO.rkqt),
          GB = AO;
        WO.EnRy(this.__wbg_ptr, OB, GB)
      }
      cl() {
        return WO.FAKM(this.__wbg_ptr) >>> 0
      }
      El() {
        return WO.BmSO(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (JB.prototype[Symbol.dispose] = JB.prototype.free);
    class MB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, EB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        WO.k1XM(BB, 0)
      }
      el(BB) {
        const OB = WO.eHBH(this.__wbg_ptr, BB);
        if (OB[2]) throw zO(OB[1]);
        return OB[0] >>> 0
      }
      compute(BB, OB, GB, YB) {
        var DB = oO(YB) ? 0 : PO(YB, WO.rkqt, WO.fw20),
          QB = AO;
        const oB = WO.R2T5(this.__wbg_ptr, BB, oO(OB) ? Number.MAX_SAFE_INTEGER : OB | 0, GB, DB, QB);
        if (oB[2]) throw zO(oB[1]);
        return oB[0] >>> 0
      }
      bl(BB) {
        const OB = PO(BB, WO.rkqt, WO.fw20),
          GB = AO;
        WO.Yth8(this.__wbg_ptr, OB, GB)
      }
      Cl() {
        return WO.TYHd(this.__wbg_ptr)
      }
      Hl(BB) {
        return WO.g24p(this.__wbg_ptr, BB) >>> 0
      }
      vl() {
        return WO.kZ3K(this.__wbg_ptr) >>> 0
      }
      sl() {
        return WO.E1Ct(this.__wbg_ptr) >>> 0
      }
      xl(BB, OB) {
        const GB = WO.sX7f(this.__wbg_ptr, BB, OB);
        if (GB[1]) throw zO(GB[0])
      }
      tl() {
        return WO.sI4T(this.__wbg_ptr) >>> 0
      }
      Bp() {
        return WO.s3F1(this.__wbg_ptr) >>> 0
      }
      Op() {
        return WO.xmb2(this.__wbg_ptr) >>> 0
      }
      Tl(BB, OB, GB) {
        const YB = yO(BB, WO.rkqt),
          DB = AO,
          QB = yO(OB, WO.rkqt),
          oB = AO,
          jB = WO.rWLy(this.__wbg_ptr, YB, DB, QB, oB, GB);
        if (jB[1]) throw zO(jB[0])
      }
      Yp() {
        return WO.JCk4(this.__wbg_ptr) >>> 0
      }
      mesh(BB, OB, GB, YB, DB) {
        const QB = WO.jvaV(this.__wbg_ptr, BB, OB, GB, YB, DB);
        if (QB[2]) throw zO(QB[1]);
        return QB[0] >>> 0
      }
      constructor(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB, NB, RB, WB, AB) {
        const VB = jO(BB, WO.rkqt),
          SB = AO,
          nB = MO(OB, WO.rkqt),
          UB = AO,
          fB = yO(GB, WO.rkqt),
          kB = AO,
          dB = JO(YB, WO.rkqt),
          KB = AO,
          uB = JO(DB, WO.rkqt),
          mB = AO,
          IB = yO(QB, WO.rkqt),
          FB = AO,
          iB = yO(oB, WO.rkqt),
          LB = AO,
          gB = MO(jB, WO.rkqt),
          rB = AO,
          XB = MO(yB, WO.rkqt),
          wB = AO,
          cB = JO(JB, WO.rkqt),
          hB = AO;
        var aB = oO(MB) ? 0 : jO(MB, WO.rkqt),
          eB = AO;
        const TB = yO(PB, WO.rkqt),
          bB = AO,
          CB = JO(zB, WO.rkqt),
          HB = AO;
        var vB = oO(lB) ? 0 : JO(lB, WO.rkqt),
          sB = AO,
          xB = oO(pB) ? 0 : JO(pB, WO.rkqt),
          tB = AO;
        const BO = MO(qB, WO.rkqt),
          OO = AO,
          GO = WO.EUOf(VB, SB, nB, UB, fB, kB, dB, KB, uB, mB, IB, FB, iB, LB, gB, rB, XB, wB, cB, hB, aB, eB, TB, bB, CB, HB, vB, sB, xB, tB, BO, OO, ZB, NB, RB, WB, AB);
        if (GO[2]) throw zO(GO[1]);
        return this.__wbg_ptr = GO[0], EB.register(this, this.__wbg_ptr, this), this
      }
      Gp(BB, OB) {
        const GB = yO(BB, WO.rkqt),
          YB = AO,
          DB = WO.c2Pu(this.__wbg_ptr, GB, YB, OB);
        if (DB[3]) throw zO(DB[2]);
        var QB = bB(DB[0], DB[1]).slice();
        return WO.nx4G(DB[0], 1 * DB[1], 1), QB
      }
      Dp(BB) {
        WO.Ftn1(this.__wbg_ptr, oO(BB) ? 16777215 : BB)
      }
      Qp(BB) {
        return WO.YVtY(this.__wbg_ptr, BB) >>> 0
      }
      yp() {
        return WO.XweW(this.__wbg_ptr) >>> 0
      }
      jp() {
        const BB = WO.B20F(this.__wbg_ptr);
        if (BB[2]) throw zO(BB[1]);
        return 0 !== BB[0]
      }
      Jp() {
        return WO.D6ir(this.__wbg_ptr) >>> 0
      }
      Mp() {
        return WO.ovxF(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (MB.prototype[Symbol.dispose] = MB.prototype.free);
    class PB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, cB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        WO.DBOz(BB, 0)
      }
      compute(BB, OB, GB, YB) {
        var DB = oO(YB) ? 0 : PO(YB, WO.rkqt, WO.fw20),
          QB = AO;
        const oB = WO.eZX1(this.__wbg_ptr, BB, oO(OB) ? Number.MAX_SAFE_INTEGER : OB | 0, GB, DB, QB);
        if (oB[2]) throw zO(oB[1]);
        return oB[0] >>> 0
      }
      bl(BB) {
        const OB = PO(BB, WO.rkqt, WO.fw20),
          GB = AO;
        WO.zhjq(this.__wbg_ptr, OB, GB)
      }
      Bp() {
        return WO.TEVN(this.__wbg_ptr) >>> 0
      }
      Op() {
        return WO.YUgy(this.__wbg_ptr) >>> 0
      }
      Pp(BB) {
        const OB = WO.dHKm(this.__wbg_ptr, BB);
        if (OB[2]) throw zO(OB[1]);
        return OB[0] >>> 0
      }
      constructor(BB, OB, GB, YB, DB, QB) {
        const oB = jO(BB, WO.rkqt),
          jB = AO,
          yB = MO(OB, WO.rkqt),
          JB = AO,
          MB = yO(GB, WO.rkqt),
          PB = AO,
          zB = JO(YB, WO.rkqt),
          lB = AO,
          pB = WO.gKMX(oB, jB, yB, JB, MB, PB, zB, lB, DB, QB);
        if (pB[2]) throw zO(pB[1]);
        return this.__wbg_ptr = pB[0], cB.register(this, this.__wbg_ptr, this), this
      }
      yp() {
        return WO.MX4c(this.__wbg_ptr) >>> 0
      }
      jp() {
        const BB = WO.pIAe(this.__wbg_ptr);
        if (BB[2]) throw zO(BB[1]);
        return 0 !== BB[0]
      }
      Jp() {
        return WO.VhVB(this.__wbg_ptr) >>> 0
      }
    }

    function zB() {
      const BB = WO.Df62();
      var OB = TB(BB[0], BB[1]).slice();
      return WO.nx4G(BB[0], 4 * BB[1], 4), OB
    }

    function lB(BB, OB) {
      let GB, YB;
      try {
        const DB = jO(BB, WO.rkqt),
          QB = AO,
          oB = PO(OB, WO.rkqt, WO.fw20),
          jB = AO,
          yB = WO.wcaX(DB, QB, oB, jB);
        return GB = yB[0], YB = yB[1], sB(yB[0], yB[1])
      } finally {
        WO.nx4G(GB, YB, 1)
      }
    }

    function pB() {
      const BB = WO.XCjZ();
      var OB = TB(BB[0], BB[1]).slice();
      return WO.nx4G(BB[0], 4 * BB[1], 4), OB
    }

    function qB(BB) {
      return 0 !== WO.WwN1(BB)
    }

    function ZB(BB, OB) {
      const GB = PO(BB, WO.rkqt, WO.fw20),
        YB = AO,
        DB = WO.kiD3(GB, YB, OB);
      if (DB[1]) throw zO(DB[0])
    }

    function NB() {
      WO.RaL9()
    }

    function RB() {
      return WO.w5zy() >>> 0
    }

    function WB(BB) {
      return 0 !== WO.LS9g(BB)
    }

    function AB(BB) {
      return 0 !== WO.bd9c(BB)
    }

    function VB(BB) {
      WO.vgkj(BB)
    }

    function SB() {
      return WO.aKaF() >>> 0
    }

    function nB() {
      return WO.N9r4() >>> 0
    }

    function UB() {
      return 0 !== WO.D3Hb()
    }

    function fB() {
      const BB = WO.yRYQ();
      var OB = TB(BB[0], BB[1]).slice();
      return WO.nx4G(BB[0], 4 * BB[1], 4), OB
    }

    function kB() {
      const BB = WO.qrKM();
      var OB = TB(BB[0], BB[1]).slice();
      return WO.nx4G(BB[0], 4 * BB[1], 4), OB
    }

    function dB() {
      const BB = WO.gOSt();
      var OB = TB(BB[0], BB[1]).slice();
      return WO.nx4G(BB[0], 4 * BB[1], 4), OB
    }

    function KB() {
      return WO.mXa5() >>> 0
    }

    function uB() {
      WO.AVMk()
    }

    function mB() {
      let BB, OB;
      try {
        const GB = WO.hjyC();
        return BB = GB[0], OB = GB[1], sB(GB[0], GB[1])
      } finally {
        WO.nx4G(BB, OB, 1)
      }
    }

    function IB(BB) {
      WO.GwWJ(hB(BB))
    }

    function FB() {
      return {
        __proto__: null,
        TUf1: {
          __proto__: null,
          wR7S: function(BB, OB) {
            return hB(Error(sB(BB, OB)))
          },
          vTGt: function(BB, OB) {
            throw new Error(sB(BB, OB))
          },
          DVax: function(BB) {
            YO(BB).call()
          },
          CTsr: function(BB, OB) {
            console.error(sB(BB, OB))
          },
          TMOf: function() {
            return performance.now()
          },
          oAPd: function(BB) {
            zO(BB)
          }
        }
      }
    }
    Symbol.dispose && (PB.prototype[Symbol.dispose] = PB.prototype.free);
    const iB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => WO.JI2k(BB, 1))),
      LB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => WO.TzT0(BB, 1))),
      gB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => WO.hibU(BB, 1))),
      rB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => WO.iBl3(BB, 1))),
      XB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => WO.bsrS(BB, 1))),
      wB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => WO.EqiV(BB, 1))),
      EB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => WO.k1XM(BB, 1))),
      cB = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((BB => WO.DBOz(BB, 1)));

    function hB(BB) {
      QO === DO.length && DO.push(DO.length + 1);
      const OB = QO;
      return QO = DO[OB], DO[OB] = BB, OB
    }

    function aB(BB, OB) {
      if (!(BB instanceof OB)) throw new Error(`expected instance of ${OB.name}`)
    }

    function eB(BB, OB) {
      return BB >>>= 0, HB().subarray(BB / 8, BB / 8 + OB)
    }

    function TB(BB, OB) {
      return BB >>>= 0, BO().subarray(BB / 4, BB / 4 + OB)
    }

    function bB(BB, OB) {
      return BB >>>= 0, GO().subarray(BB / 1, BB / 1 + OB)
    }
    let CB = null;

    function HB() {
      return null !== CB && 0 !== CB.byteLength || (CB = new Float64Array(WO.memory.buffer)), CB
    }
    let vB = null;

    function sB(BB, OB) {
      return function(BB, OB) {
        qO += OB, qO >= pO && (lO = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), lO.decode(), qO = OB);
        return lO.decode(GO().subarray(BB, BB + OB))
      }(BB >>> 0, OB)
    }
    let xB = null;
    let tB = null;

    function BO() {
      return null !== tB && 0 !== tB.byteLength || (tB = new Uint32Array(WO.memory.buffer)), tB
    }
    let OO = null;

    function GO() {
      return null !== OO && 0 !== OO.byteLength || (OO = new Uint8Array(WO.memory.buffer)), OO
    }

    function YO(BB) {
      return DO[BB]
    }
    let DO = new Array(1024).fill(void 0);
    DO.push(void 0, null, !0, !1);
    let QO = DO.length;

    function oO(BB) {
      return void 0 === BB || null === BB
    }

    function jO(BB, OB) {
      const GB = OB(2 * BB.length, 2) >>> 0;
      return (null !== xB && 0 !== xB.byteLength || (xB = new Uint16Array(WO.memory.buffer)), xB).set(BB, GB / 2), AO = BB.length, GB
    }

    function yO(BB, OB) {
      const GB = OB(4 * BB.length, 4) >>> 0;
      return BO().set(BB, GB / 4), AO = BB.length, GB
    }

    function JO(BB, OB) {
      const GB = OB(1 * BB.length, 1) >>> 0;
      return GO().set(BB, GB / 1), AO = BB.length, GB
    }

    function MO(BB, OB) {
      const GB = OB(8 * BB.length, 8) >>> 0;
      return HB().set(BB, GB / 8), AO = BB.length, GB
    }

    function PO(BB, OB, GB) {
      if (void 0 === GB) {
        const GB = ZO.encode(BB),
          YB = OB(GB.length, 1) >>> 0;
        return GO().subarray(YB, YB + GB.length).set(GB), AO = GB.length, YB
      }
      let YB = BB.length,
        DB = OB(YB, 1) >>> 0;
      const QB = GO();
      let oB = 0;
      for (; oB < YB; oB++) {
        const OB = BB.charCodeAt(oB);
        if (OB > 127) break;
        QB[DB + oB] = OB
      }
      if (oB !== YB) {
        0 !== oB && (BB = BB.slice(oB)), DB = GB(DB, YB, YB = oB + 3 * BB.length, 1) >>> 0;
        const OB = GO().subarray(DB + oB, DB + YB);
        oB += ZO.encodeInto(BB, OB).written, DB = GB(DB, YB, oB, 1) >>> 0
      }
      return AO = oB, DB
    }

    function zO(BB) {
      const OB = YO(BB);
      return function(BB) {
        BB < 1028 || (DO[BB] = QO, QO = BB)
      }(BB), OB
    }
    let lO = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    lO.decode();
    const pO = 2146435072;
    let qO = 0;
    const ZO = new TextEncoder;
    "encodeInto" in ZO || (ZO.encodeInto = function(BB, OB) {
      const GB = ZO.encode(BB);
      return OB.set(GB), {
        read: BB.length,
        written: GB.length
      }
    });
    let NO, RO, WO, AO = 0;

    function VO(BB, OB) {
      return RO = BB, WO = BB.exports, NO = OB, CB = null, vB = null, xB = null, tB = null, OO = null, WO.F9Td(), WO
    }

    function SO(BB) {
      if (void 0 !== WO) return WO;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module: BB
      } = BB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const OB = FB();
      BB instanceof WebAssembly.Module || (BB = new WebAssembly.Module(BB));
      return VO(new WebAssembly.Instance(BB, OB), BB)
    }
    async function nO(BB) {
      if (void 0 !== WO) return WO;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module_or_path: BB
      } = BB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const OB = FB();
      ("string" === typeof BB || "function" === typeof Request && BB instanceof Request || "function" === typeof URL && BB instanceof URL) && (BB = fetch(BB));
      const {
        instance: GB,
        module: YB
      } = await async function(BB, OB) {
        if ("function" === typeof Response && BB instanceof Response) {
          if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(BB, OB)
          } catch (GB) {
            if (! function(BB) {
                switch (BB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(BB.type) || "application/wasm" === BB.headers.get("Content-Type")) throw GB;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", GB)
          }
          const YB = await BB.arrayBuffer();
          return await WebAssembly.instantiate(YB, OB)
        } {
          const GB = await WebAssembly.instantiate(BB, OB);
          return GB instanceof WebAssembly.Instance ? {
            instance: GB,
            module: BB
          } : GB
        }
      }(await BB, OB);
      return VO(GB, YB)
    }
  },
  36902: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB,
      i: () => jB,
      k: () => yB
    });
    var YB = GB(36907),
      DB = GB(3206),
      QB = GB(36912);
    const oB = {
      name: DB.d,
      url: () => new GB.U(GB(36921)),
      init: YB.default,
      bindings: YB
    };

    function jB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oB,
        OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oB,
        GB = arguments.length > 2 ? arguments[2] : void 0;
      return (0, QB.m)(BB, OB, GB)
    }

    function yB(BB) {
      return (0, DB.J)((() => BB), YB, oB)
    }
  },
  36888: (BB, OB, GB) => {
    function YB(BB, OB) {
      return new Error(`${BB}: ${OB instanceof Error?`${OB.name}: ${OB.message}`:String(OB)}`, {
        cause: OB
      })
    }
    GB.d(OB, {
      c: () => YB
    })
  },
  36885: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB,
      g: () => yB
    });
    var YB = GB(3210),
      DB = GB(7161),
      QB = GB(36888);

    function oB() {
      return new URL(new GB.U(GB(36893)).href, globalThis.location?.href).href
    }
    let jB = null;

    function yB() {
      return jB ??= (async () => (0, YB.G)(new URL(oB()), (0, DB.d)("bloxd_wasm_textures")))().catch((BB => {
        throw (0, QB.c)((0, YB.M)(BB), BB)
      })), jB
    }
  },
  36871: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB,
      e: () => QB,
      h: () => yB,
      k: () => oB,
      n: () => DB
    });
    const YB = /^alloc_failed (\d+) bytes$/;

    function DB(BB, OB) {
      return QB(BB, OB) ? `trap=alloc_failed ${OB} bytes` : `trap=${BB}`
    }

    function QB(BB, OB) {
      return "unreachable" === BB && OB > 0
    }

    function oB(BB, OB, GB) {
      const YB = function(BB) {
        return BB instanceof WebAssembly.RuntimeError ? /unreachable/i.test(BB.message) ? "unreachable" : /out of bounds/i.test(BB.message) ? "out_of_bounds" : "runtime_error" : (BB instanceof RangeError || BB instanceof Error && "InternalError" === BB.name) && /call stack|recursion/i.test(BB.message) ? "stack_overflow" : "js_error"
      }(BB);
      if ("unreachable" !== YB) return {
        kind: YB,
        panic: null,
        refusedBytes: 0
      };
      const DB = OB(),
        QB = GB();
      return {
        kind: YB,
        panic: QB > 0 ? null : DB,
        refusedBytes: QB
      }
    }
    const jB = 300;

    function yB(BB) {
      return BB.replace(/\s*\n\s*/g, " / ").slice(0, jB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);