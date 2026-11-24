export const id = 208;
export const ids = [208, 209];
export const modules = {
  36275: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      CAPPED_COUNTS_VISIT_CAP: () => XS,
      reportCappedWasmFailure: () => qS,
      reportUncappedWasmFailure: () => NS,
      reportWasmCrash: () => bS,
      reportWasmFailure: () => xS
    });
    var tS = gS(3083);

    function bS(SS) {
      (0, tS.reportClientError)("wasm_load", SS.message, SS.code)
    }
    const XS = tS.b - 4;

    function xS(SS, HS, gS) {
      (0, tS.reportClientError)(SS, HS, gS, !1)
    }

    function NS(SS, HS, gS) {
      (0, tS.reportClientError)(SS, HS, gS, !1, 1 / 0)
    }

    function qS(SS, HS, gS) {
      (0, tS.reportClientError)(SS, HS, gS, !1, XS)
    }
  },
  36271: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => DS,
      c: () => ZS,
      d: () => JS,
      e: () => wS
    });
    var tS = gS(36294),
      bS = gS(3021),
      XS = gS(36307),
      xS = gS(3030),
      NS = gS(36275),
      qS = gS(3077),
      uS = gS(3388),
      IS = gS(3385),
      fS = gS(36277),
      kS = gS(3083),
      aS = gS(36282),
      KS = gS(36287),
      jS = gS(3829);
    let GS = !1;
    const CS = 40;
    var nS = gS(754);
    const PS = "bloxdWasmFailureReported";

    function QS() {
      return "undefined" === typeof WebAssembly
    }

    function DS() {
      return (0, tS.d)()
    }

    function wS() {
      if (QS()) return "this browser has no WebAssembly";
      const SS = (0, bS.t)();
      return "compile" === SS || "instantiate" === SS ? `the core wasm didn't load here (${(0,bS.l)()})` : null
    }
    async function hS(SS) {
      return await (0, XS.f)(XS.b, void 0, SS)
    }

    function ZS() {
      QS() || (0, nS.b)((() => {
        hS()
      }))
    }

    function JS() {
      if (QS()) return async () => ((0, qS.l)("unsupported", 0), OS("unsupported", "This browser has no WebAssembly"), !1);
      const SS = {
        reloadFailedDownload: !0
      };
      return hS(SS), async () => {
        var HS;
        const gS = performance.now();
        await hS(SS);
        const tS = (performance.now() - gS) / 1e3;
        if ((0, bS.U)()) return (0, qS.l)("ready", tS), GS || (GS = !0, (0, bS.Y)((() => {
          if ("call" !== (0, bS.t)()) return;
          const SS = (0, bS.r)(),
            HS = (0, fS.k)(SS, bS.J, bS.bb),
            gS = (0, bS.B)().buffer.byteLength,
            tS = (0, fS.g)(HS.kind, HS.refusedBytes),
            XS = tS ? "alloc_failed" : HS.kind,
            xS = (0, aS.h)(gS),
            NS = tS ? `_r${Math.floor(Math.log2(HS.refusedBytes))}` : "",
            qS = (0, jS.e)();
          null === qS && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const uS = new Error((0, KS.c)(SS, gS, HS));
          if (SS instanceof Error && void 0 !== SS.stack) {
            const HS = SS.stack.split("\n"),
              gS = HS.length > CS ? [...HS.slice(0, CS / 2), ...HS.slice(-CS / 2)] : HS;
            uS.stack = gS.join("\n")
          }(0, kS.reportClientError)("wasm_load", uS, `wasm_call_${XS}_${null!==qS&&void 0!==qS?qS:"unnamed"}_m${xS}${NS}`)
        }))), (0, xS.Q)(XS.b.url()) && (0, NS.reportCappedWasmFailure)("wasm_load", uS.d.message, uS.d.code), !0;
        const nS = IS.d[null !== (HS = (0, bS.t)()) && void 0 !== HS ? HS : "call"];
        return (0, qS.l)(nS, tS), OS(nS, (0, bS.l)()), !1
      }
    }

    function OS(SS, HS) {
      (0, IS.h)(PS, `Bloxd wasm ${SS}, so the game can't start: ${HS}`, HS, SS)
    }
  },
  36287: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => NS,
      e: () => uS,
      f: () => xS,
      g: () => fS
    });
    var tS = gS(36277),
      bS = gS(10);
    const XS = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function xS(SS) {
      if (SS instanceof WebAssembly.RuntimeError) return !0;
      const HS = SS instanceof Error ? SS.stack : void 0;
      return "string" === typeof HS && XS.test(HS)
    }

    function NS(SS, HS, gS) {
      var bS;
      const xS = SS instanceof Error ? SS.name : "thrown",
        NS = (SS instanceof Error && null !== (bS = SS.stack) && void 0 !== bS ? bS : "").split("\n").filter((SS => XS.test(SS))).slice(0, 8).map((SS => SS.trim())),
        qS = null === HS ? "wasm memory unknown" : `wasm memory ${Math.round(HS/2**20)} MB`,
        uS = null === gS.panic ? "" : `, panic: ${(0,tS.h)(gS.panic)}`,
        IS = `${xS}: ${SS instanceof Error?SS.message:String(SS)}`;
      return `${(0,tS.m)(gS.kind,gS.refusedBytes)} ${IS} (${qS})${uS}${NS.length>0?` | ${NS.join(" < ")}`:""}`
    }
    const qS = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function uS(SS) {
      var HS;
      let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(SS instanceof Error) || !qS.test(SS.message)) return {};
      if (!("detached" in gS)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, bS.T)(null === (HS = (0, bS.O)(gS, "detached")) || void 0 === HS ? void 0 : HS.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const IS = 500;

    function fS(SS) {
      let HS = "[object Object]";
      try {
        HS = String(SS)
      } catch {}
      if ("[object Object]" !== HS) return HS;
      try {
        var gS, tS;
        return null !== (gS = null === (tS = JSON.stringify(SS)) || void 0 === tS ? void 0 : tS.slice(0, IS)) && void 0 !== gS ? gS : HS
      } catch {
        return HS
      }
    }
  },
  36330: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/bloxd_wasm_bg.c1b74fc27db5bf6b33d7.wasm"
  },
  36304: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/bloxd_wasm_textures_bg.8c5e432543646c575903.wasm"
  },
  36315: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      RI: () => tS,
      EnvelopeKind: () => bS,
      TI: () => XS,
      PhysicsEngine: () => xS,
      oI: () => NS,
      lI: () => qS,
      mI: () => uS,
      eI: () => IS,
      rI: () => fS,
      Sf: () => kS,
      Hf: () => aS,
      gf: () => KS,
      tf: () => jS,
      bf: () => GS,
      default: () => hH,
      initSync: () => wH,
      Xf: () => CS,
      xf: () => nS,
      Nf: () => PS,
      qf: () => QS,
      uf: () => DS,
      ff: () => wS,
      kf: () => hS,
      af: () => ZS,
      Kf: () => JS,
      jf: () => OS,
      Gf: () => dS,
      Cf: () => cS,
      Pf: () => vS,
      Qf: () => ES,
      Df: () => LS
    });
    class tS {
      __destroy_into_raw() {
        const SS = this.__wbg_ptr;
        return this.__wbg_ptr = 0, AS.unregister(this), SS
      }
      free() {
        const SS = this.__destroy_into_raw();
        PH.ksur(SS, 0)
      }
      wf() {
        const SS = PH.wYQr(this.__wbg_ptr);
        if (SS[2]) throw kH(SS[1]);
        return SS[0] >>> 0
      }
      hf() {
        return PH.mjbO(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const SS = PH.k3ZN();
        return this.__wbg_ptr = SS, AS.register(this, this.__wbg_ptr, this), this
      }
      Zf() {
        return PH.SHCt(this.__wbg_ptr) >>> 0
      }
      Jf(SS) {
        const HS = PH.J6QL(this.__wbg_ptr, SS);
        if (HS[2]) throw kH(HS[1]);
        return HS[0] >>> 0
      }
      df(SS) {
        const HS = PH.eq8z(this.__wbg_ptr, SS);
        if (HS[2]) throw kH(HS[1]);
        return HS[0] >>> 0
      }
    }
    Symbol.dispose && (tS.prototype[Symbol.dispose] = tS.prototype.free);
    const bS = Object.freeze({
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
    class XS {
      __destroy_into_raw() {
        const SS = this.__wbg_ptr;
        return this.__wbg_ptr = 0, yS.unregister(this), SS
      }
      free() {
        const SS = this.__destroy_into_raw();
        PH.rQTa(SS, 0)
      }
      Lf(SS, HS) {
        const gS = PH.KYS3(this.__wbg_ptr, SS, HS);
        if (gS[2]) throw kH(gS[1]);
        return gS[0] >>> 0
      }
      Yf(SS) {
        const HS = PH.WjA6(this.__wbg_ptr, SS);
        if (HS[2]) throw kH(HS[1]);
        return HS[0] >>> 0
      }
      Af() {
        PH.nbDv(this.__wbg_ptr)
      }
      static yf() {
        return PH.Kxwz() >>> 0
      }
      Vf() {
        return PH.BOIf(this.__wbg_ptr) >>> 0
      }
      Wf() {
        const SS = PH.NfDW(this.__wbg_ptr);
        return 0 === SS[0] ? void 0 : SS[1]
      }
      zf() {
        return PH.AbPh(this.__wbg_ptr) >>> 0
      }
      Uf() {
        return PH.Ncs7(this.__wbg_ptr) >>> 0
      }
      static Ef() {
        return PH.lrlW() >>> 0
      }
      constructor() {
        const SS = PH.heYD();
        return this.__wbg_ptr = SS, yS.register(this, this.__wbg_ptr, this), this
      }
      pf() {
        return PH.Fhi7(this.__wbg_ptr) >>> 0
      }
      sf() {
        return PH.de2f(this.__wbg_ptr) >>> 0
      }
      Bf() {
        return PH.nBHm(this.__wbg_ptr) >>> 0
      }
      vf(SS) {
        return PH.WChv(this.__wbg_ptr, SS) >>> 0
      }
      reserve(SS, HS) {
        const gS = PH.qHxR(this.__wbg_ptr, SS, HS);
        if (gS[1]) throw kH(gS[0])
      }
      Rf(SS, HS) {
        const gS = qH(SS, PH.jNSy),
          tS = QH;
        PH.dpQT(this.__wbg_ptr, gS, tS, HS)
      }
      text() {
        let SS, HS;
        try {
          const gS = PH.wab3(this.__wbg_ptr);
          return SS = gS[0], HS = gS[1], mS(gS[0], gS[1])
        } finally {
          PH.fpNz(SS, HS, 1)
        }
      }
    }
    Symbol.dispose && (XS.prototype[Symbol.dispose] = XS.prototype.free);
    class xS {
      __destroy_into_raw() {
        const SS = this.__wbg_ptr;
        return this.__wbg_ptr = 0, VS.unregister(this), SS
      }
      free() {
        const SS = this.__destroy_into_raw();
        PH.OpTp(SS, 0)
      }
      lf(SS, HS) {
        BS(HS, tS);
        const gS = PH.sQtR(this.__wbg_ptr, SS, HS.__wbg_ptr);
        if (gS[2]) throw kH(gS[1]);
        return gS[0] >>> 0
      }
      ef() {
        const SS = PH.UUHs(this.__wbg_ptr);
        if (SS[1]) throw kH(SS[0])
      }
      tk(SS, HS, gS, tS, bS, XS, xS, qS, uS, IS, fS) {
        BS(SS, NS);
        const kS = PH.owk3(this.__wbg_ptr, SS.__wbg_ptr, HS, gS, tS, bS, XS, xS, qS, uS, IS, fS);
        if (kS[2]) throw kH(kS[1]);
        return kS[0]
      }
      bk() {
        const SS = PH.euSg(this.__wbg_ptr);
        var HS = MS(SS[0], SS[1]).slice();
        return PH.fpNz(SS[0], 8 * SS[1], 8), HS
      }
      Xk() {
        return PH.x7v9(this.__wbg_ptr) >>> 0
      }
      xk() {
        return PH.aX3e(this.__wbg_ptr) >>> 0
      }
      Nk() {
        return PH.L257(this.__wbg_ptr) >>> 0
      }
      constructor(SS, HS, gS, tS, bS, XS, xS, NS) {
        const qS = PH.r2kH(SS, HS, gS, tS, bS, XS, xS, NS);
        if (qS[2]) throw kH(qS[1]);
        return this.__wbg_ptr = qS[0], VS.register(this, this.__wbg_ptr, this), this
      }
      Ik(SS) {
        BS(SS, tS);
        const HS = PH.DKTK(this.__wbg_ptr, SS.__wbg_ptr);
        if (HS[2]) throw kH(HS[1]);
        return HS[0] >>> 0
      }
      fk(SS) {
        const HS = PH.W2lu(this.__wbg_ptr, SS);
        if (HS[1]) throw kH(HS[0])
      }
      kk() {
        return PH.fiJU(this.__wbg_ptr) >>> 0
      }
      resume(SS, HS) {
        BS(SS, NS), BS(HS, tS);
        const gS = PH.auZv(this.__wbg_ptr, SS.__wbg_ptr, HS.__wbg_ptr);
        if (gS[2]) throw kH(gS[1]);
        return gS[0] >>> 0
      }
      Ck(SS) {
        const HS = PH.v9qc(this.__wbg_ptr, SS);
        if (HS[1]) throw kH(HS[0])
      }
      Qk(SS, HS) {
        BS(HS, tS);
        const gS = PH.n4ik(this.__wbg_ptr, SS, HS.__wbg_ptr);
        if (gS[1]) throw kH(gS[0])
      }
      hk(SS) {
        const HS = IH(SS, PH.jNSy),
          gS = QH,
          tS = PH.CmAz(this.__wbg_ptr, HS, gS);
        if (tS[1]) throw kH(tS[0])
      }
      Sk(SS, HS, gS, tS, bS, XS) {
        const xS = PH.WQ6O(this.__wbg_ptr, SS, HS, gS, tS, bS, XS);
        if (xS[1]) throw kH(xS[0])
      }
      Hk(SS, HS, gS, tS) {
        const bS = qH(SS, PH.jNSy),
          XS = QH,
          xS = IH(HS, PH.jNSy),
          NS = QH,
          qS = IH(gS, PH.jNSy),
          uS = QH,
          IS = IH(tS, PH.jNSy),
          fS = QH,
          kS = PH.AtLO(this.__wbg_ptr, bS, XS, xS, NS, qS, uS, IS, fS);
        if (kS[1]) throw kH(kS[0])
      }
      Jk(SS, HS) {
        BS(HS, tS);
        const gS = PH.npGx(this.__wbg_ptr, SS, HS.__wbg_ptr);
        if (gS[1]) throw kH(gS[0])
      }
      uk(SS, HS, gS) {
        const tS = PH.Bu2t(this.__wbg_ptr, SS, HS, gS);
        if (tS[1]) throw kH(tS[0])
      }
      vk(SS, HS, gS, tS, bS, XS, xS, qS, uS, IS) {
        BS(SS, NS);
        return PH.kPFh(this.__wbg_ptr, SS.__wbg_ptr, HS, gS, tS, bS, XS, xS, qS, uS, IS)
      }
    }
    Symbol.dispose && (xS.prototype[Symbol.dispose] = xS.prototype.free);
    class NS {
      static __wrap(SS) {
        const HS = Object.create(NS.prototype);
        return HS.__wbg_ptr = SS, iS.register(HS, HS.__wbg_ptr, HS), HS
      }
      __destroy_into_raw() {
        const SS = this.__wbg_ptr;
        return this.__wbg_ptr = 0, iS.unregister(this), SS
      }
      free() {
        const SS = this.__destroy_into_raw();
        PH.oPyf(SS, 0)
      }
      Yk(SS) {
        const HS = PH.VlIz(this.__wbg_ptr, SS);
        if (HS[2]) throw kH(HS[1]);
        return HS[0] >>> 0
      }
      Ak(SS, HS, gS) {
        return PH.rgDY(this.__wbg_ptr, SS, HS, gS)
      }
      yk(SS, HS, gS) {
        return PH.JQ1T(this.__wbg_ptr, SS, HS, gS) >>> 0
      }
      Vk(SS, HS, gS, tS) {
        return 0 !== PH.ZEg8(this.__wbg_ptr, SS, HS, gS, tS)
      }
      ik() {
        PH.G9eI(this.__wbg_ptr)
      }
      zk(SS) {
        const HS = PH.nRJz(this.__wbg_ptr, SS);
        if (HS[3]) throw kH(HS[2]);
        var gS = RS(HS[0], HS[1]).slice();
        return PH.fpNz(HS[0], 1 * HS[1], 1), gS
      }
      evict(SS, HS) {
        return PH.TQu9(this.__wbg_ptr, SS, HS) >>> 0
      }
      Uk() {
        PH.bnDB(this.__wbg_ptr)
      }
      sk(SS, HS, gS) {
        PH.I2Vh(this.__wbg_ptr, SS, HS, gS)
      }
      Bk(SS) {
        const HS = PH.ZovN(this.__wbg_ptr, SS);
        if (HS[1]) throw kH(HS[0])
      }
      Mk() {
        return PH.TmaD(this.__wbg_ptr) >>> 0
      }
      Fk() {
        return PH.i3dk(this.__wbg_ptr) >>> 0
      }
      Rk(SS, HS, gS) {
        PH.l5zU(this.__wbg_ptr, SS, HS, gS)
      }
      Tk(SS, HS, gS) {
        PH.ogSD(this.__wbg_ptr, SS, HS, gS)
      }
      lk() {
        return PH.zpmE(this.__wbg_ptr) >>> 0
      }
      mk() {
        return PH.Oy6d(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const SS = PH.WrLj();
        return this.__wbg_ptr = SS, iS.register(this, this.__wbg_ptr, this), this
      }
      static rk() {
        const SS = PH.W6Sx();
        return NS.__wrap(SS)
      }
      Sa() {
        return PH.IXkc(this.__wbg_ptr) >>> 0
      }
      Ha() {
        return PH.Po8R(this.__wbg_ptr) >>> 0
      }
      ga(SS, HS, gS, tS) {
        const bS = PH.GK36(this.__wbg_ptr, SS, HS, gS, tS);
        if (bS[1]) throw kH(bS[0])
      }
      ba() {
        return PH.JniI(this.__wbg_ptr) >>> 0
      }
      Xa() {
        return PH.FRVc(this.__wbg_ptr) >>> 0
      }
      xa(SS, HS, gS, tS) {
        PH.qSua(this.__wbg_ptr, SS, HS, gS, tS)
      }
      Na(SS) {
        PH.scDm(this.__wbg_ptr, SS)
      }
      ua(SS, HS, gS, tS, bS) {
        const XS = uH(HS, PH.jNSy),
          xS = QH,
          NS = qH(gS, PH.jNSy),
          qS = QH,
          uS = IH(tS, PH.jNSy),
          IS = QH,
          fS = PH.Nh31(this.__wbg_ptr, SS, XS, xS, NS, qS, uS, IS, bS);
        if (fS[1]) throw kH(fS[0])
      }
      qa(SS, HS, gS, tS) {
        const bS = uH(SS, PH.jNSy),
          XS = QH,
          xS = qH(HS, PH.jNSy),
          NS = QH,
          qS = IH(gS, PH.jNSy),
          uS = QH,
          IS = uH(tS, PH.jNSy),
          fS = QH,
          kS = PH.q0Gg(this.__wbg_ptr, bS, XS, xS, NS, qS, uS, IS, fS);
        if (kS[1]) throw kH(kS[0])
      }
      ja(SS) {
        const HS = uH(SS, PH.jNSy),
          gS = QH,
          tS = PH.tjDR(this.__wbg_ptr, HS, gS);
        if (tS[1]) throw kH(tS[0])
      }
      Ga() {
        return PH.qdN3(this.__wbg_ptr) >>> 0
      }
      Ca(SS) {
        const HS = PH.M70E(this.__wbg_ptr, SS);
        if (HS[2]) throw kH(HS[1]);
        return HS[0] >>> 0
      }
      steer() {
        return PH.xjs0(this.__wbg_ptr) >>> 0
      }
      na() {
        const SS = PH.gMb1(this.__wbg_ptr);
        var HS = MS(SS[0], SS[1]).slice();
        return PH.fpNz(SS[0], 8 * SS[1], 8), HS
      }
      Pa() {
        return PH.abzj(this.__wbg_ptr) >>> 0
      }
      Kk() {
        const SS = PH.RT57(this.__wbg_ptr);
        var HS, gS, tS = (HS = SS[0], gS = SS[1], HS >>>= 0, (null !== lS && 0 !== lS.byteLength || (lS = new Int32Array(PH.memory.buffer)), lS).subarray(HS / 4, HS / 4 + gS)).slice();
        return PH.fpNz(SS[0], 4 * SS[1], 4), tS
      }
    }
    Symbol.dispose && (NS.prototype[Symbol.dispose] = NS.prototype.free);
    class qS {
      __destroy_into_raw() {
        const SS = this.__wbg_ptr;
        return this.__wbg_ptr = 0, WS.unregister(this), SS
      }
      free() {
        const SS = this.__destroy_into_raw();
        PH.N1K3(SS, 0)
      }
      Qa(SS) {
        const HS = qH(SS, PH.jNSy),
          gS = QH,
          tS = PH.rkdA(this.__wbg_ptr, HS, gS);
        if (tS[1]) throw kH(tS[0])
      }
      Da() {
        return PH.Oj4U(this.__wbg_ptr) >>> 0
      }
      ha() {
        return PH.Eg1A(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const SS = PH.vOrm();
        return this.__wbg_ptr = SS, WS.register(this, this.__wbg_ptr, this), this
      }
      run(SS, HS) {
        BS(SS, NS);
        const gS = PH.sWIZ(this.__wbg_ptr, SS.__wbg_ptr, HS);
        if (gS[2]) throw kH(gS[1]);
        return gS[0] >>> 0
      }
      Za(SS) {
        const HS = qH(SS, PH.jNSy),
          gS = QH;
        PH.r51f(this.__wbg_ptr, HS, gS)
      }
      Ja(SS) {
        const HS = qH(SS, PH.jNSy),
          gS = QH;
        PH.fjRB(this.__wbg_ptr, HS, gS)
      }
    }
    Symbol.dispose && (qS.prototype[Symbol.dispose] = qS.prototype.free);
    class uS {
      __destroy_into_raw() {
        const SS = this.__wbg_ptr;
        return this.__wbg_ptr = 0, zS.unregister(this), SS
      }
      free() {
        const SS = this.__destroy_into_raw();
        PH.QkVO(SS, 0)
      }
      da(SS, HS) {
        const gS = uH(SS, PH.jNSy),
          tS = QH;
        return PH.u25L(this.__wbg_ptr, gS, tS, HS) >>> 0
      }
      ca(SS, HS, gS) {
        BS(SS, NS);
        const tS = uH(gS, PH.jNSy),
          bS = QH,
          XS = PH.pvA8(this.__wbg_ptr, SS.__wbg_ptr, HS, tS, bS);
        if (XS[2]) throw kH(XS[1]);
        return XS[0] >>> 0
      }
      Oa(SS) {
        return PH.Od1J(this.__wbg_ptr, SS) >>> 0
      }
      constructor() {
        const SS = PH.RzCx();
        return this.__wbg_ptr = SS, zS.register(this, this.__wbg_ptr, this), this
      }
      scan(SS, HS) {
        BS(SS, NS);
        const gS = PH.VUP9(this.__wbg_ptr, SS.__wbg_ptr, HS);
        if (gS[2]) throw kH(gS[1]);
        return gS[0] >>> 0
      }
      La(SS) {
        const HS = uH(SS, PH.jNSy),
          gS = QH;
        PH.N8yS(this.__wbg_ptr, HS, gS)
      }
      Ea() {
        return PH.LJeS(this.__wbg_ptr) >>> 0
      }
      va() {
        return PH.GmPh(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (uS.prototype[Symbol.dispose] = uS.prototype.free);
    class IS {
      __destroy_into_raw() {
        const SS = this.__wbg_ptr;
        return this.__wbg_ptr = 0, US.unregister(this), SS
      }
      free() {
        const SS = this.__destroy_into_raw();
        PH.yGBT(SS, 0)
      }
      Aa(SS) {
        const HS = PH.gqpQ(this.__wbg_ptr, SS);
        if (HS[2]) throw kH(HS[1]);
        return HS[0] >>> 0
      }
      compute(SS, HS, gS, tS) {
        var bS = xH(tS) ? 0 : fH(tS, PH.jNSy, PH.ZiN3),
          XS = QH;
        const xS = PH.EOlJ(this.__wbg_ptr, SS, xH(HS) ? Number.MAX_SAFE_INTEGER : HS | 0, gS, bS, XS);
        if (xS[2]) throw kH(xS[1]);
        return xS[0] >>> 0
      }
      Va(SS) {
        const HS = fH(SS, PH.jNSy, PH.ZiN3),
          gS = QH;
        PH.vHw8(this.__wbg_ptr, HS, gS)
      }
      Wa() {
        return PH.b9Ht(this.__wbg_ptr)
      }
      za(SS) {
        return PH.EJsO(this.__wbg_ptr, SS) >>> 0
      }
      Ua() {
        return PH.IqJj(this.__wbg_ptr) >>> 0
      }
      sa() {
        return PH.UyUu(this.__wbg_ptr) >>> 0
      }
      Ba(SS, HS) {
        const gS = PH.Hq22(this.__wbg_ptr, SS, HS);
        if (gS[1]) throw kH(gS[0])
      }
      Ma() {
        return PH.BVij(this.__wbg_ptr) >>> 0
      }
      Fa() {
        return PH.i1nx(this.__wbg_ptr) >>> 0
      }
      Ra() {
        return PH.wFKF(this.__wbg_ptr) >>> 0
      }
      ya(SS, HS, gS) {
        const tS = qH(SS, PH.jNSy),
          bS = QH,
          XS = qH(HS, PH.jNSy),
          xS = QH,
          NS = PH.yaQ4(this.__wbg_ptr, tS, bS, XS, xS, gS);
        if (NS[1]) throw kH(NS[0])
      }
      oa() {
        return PH.J5BF(this.__wbg_ptr) >>> 0
      }
      mesh(SS, HS, gS, tS, bS) {
        const XS = PH.sLih(this.__wbg_ptr, SS, HS, gS, tS, bS);
        if (XS[2]) throw kH(XS[1]);
        return XS[0] >>> 0
      }
      constructor(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS, IS, fS, kS, aS, KS, jS, GS, CS, nS, PS) {
        const QS = NH(SS, PH.jNSy),
          DS = QH,
          wS = IH(HS, PH.jNSy),
          hS = QH,
          ZS = qH(gS, PH.jNSy),
          JS = QH,
          OS = uH(tS, PH.jNSy),
          dS = QH,
          cS = uH(bS, PH.jNSy),
          vS = QH,
          ES = qH(XS, PH.jNSy),
          LS = QH,
          YS = qH(xS, PH.jNSy),
          AS = QH,
          yS = IH(NS, PH.jNSy),
          VS = QH,
          iS = IH(qS, PH.jNSy),
          WS = QH,
          zS = uH(uS, PH.jNSy),
          pS = QH;
        var sS = xH(IS) ? 0 : NH(IS, PH.jNSy),
          BS = QH;
        const MS = qH(fS, PH.jNSy),
          FS = QH,
          RS = uH(kS, PH.jNSy),
          TS = QH;
        var oS = xH(aS) ? 0 : uH(aS, PH.jNSy),
          lS = QH;
        const mS = IH(KS, PH.jNSy),
          eS = QH,
          rS = PH.Sgvl(QS, DS, wS, hS, ZS, JS, OS, dS, cS, vS, ES, LS, YS, AS, yS, VS, iS, WS, zS, pS, sS, BS, MS, FS, RS, TS, oS, lS, mS, eS, jS, GS, CS, nS, PS);
        if (rS[2]) throw kH(rS[1]);
        return this.__wbg_ptr = rS[0], US.register(this, this.__wbg_ptr, this), this
      }
      Ta(SS, HS) {
        const gS = qH(SS, PH.jNSy),
          tS = QH,
          bS = PH.Qq1l(this.__wbg_ptr, gS, tS, HS);
        if (bS[3]) throw kH(bS[2]);
        var XS = RS(bS[0], bS[1]).slice();
        return PH.fpNz(bS[0], 1 * bS[1], 1), XS
      }
      la(SS) {
        PH.tP0n(this.__wbg_ptr, xH(SS) ? 16777215 : SS)
      }
      ma(SS) {
        return PH.jAVu(this.__wbg_ptr, SS) >>> 0
      }
      ra() {
        return PH.rhQ8(this.__wbg_ptr) >>> 0
      }
      ea() {
        const SS = PH.uX7x(this.__wbg_ptr);
        if (SS[2]) throw kH(SS[1]);
        return 0 !== SS[0]
      }
      SK() {
        return PH.BMAh(this.__wbg_ptr) >>> 0
      }
      HK() {
        return PH.gJXz(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (IS.prototype[Symbol.dispose] = IS.prototype.free);
    class fS {
      __destroy_into_raw() {
        const SS = this.__wbg_ptr;
        return this.__wbg_ptr = 0, pS.unregister(this), SS
      }
      free() {
        const SS = this.__destroy_into_raw();
        PH.hTNK(SS, 0)
      }
      compute(SS, HS, gS, tS) {
        var bS = xH(tS) ? 0 : fH(tS, PH.jNSy, PH.ZiN3),
          XS = QH;
        const xS = PH.bznS(this.__wbg_ptr, SS, xH(HS) ? Number.MAX_SAFE_INTEGER : HS | 0, gS, bS, XS);
        if (xS[2]) throw kH(xS[1]);
        return xS[0] >>> 0
      }
      Va(SS) {
        const HS = fH(SS, PH.jNSy, PH.ZiN3),
          gS = QH;
        PH.V2XZ(this.__wbg_ptr, HS, gS)
      }
      Fa() {
        return PH.IXEV(this.__wbg_ptr) >>> 0
      }
      Ra() {
        return PH.VKkk(this.__wbg_ptr) >>> 0
      }
      gK(SS) {
        const HS = PH.nv5k(this.__wbg_ptr, SS);
        if (HS[2]) throw kH(HS[1]);
        return HS[0] >>> 0
      }
      constructor(SS, HS, gS, tS, bS, XS) {
        const xS = NH(SS, PH.jNSy),
          NS = QH,
          qS = IH(HS, PH.jNSy),
          uS = QH,
          IS = qH(gS, PH.jNSy),
          fS = QH,
          kS = uH(tS, PH.jNSy),
          aS = QH,
          KS = PH.ocnY(xS, NS, qS, uS, IS, fS, kS, aS, bS, XS);
        if (KS[2]) throw kH(KS[1]);
        return this.__wbg_ptr = KS[0], pS.register(this, this.__wbg_ptr, this), this
      }
      ra() {
        return PH.O4QF(this.__wbg_ptr) >>> 0
      }
      ea() {
        const SS = PH.hJFg(this.__wbg_ptr);
        if (SS[2]) throw kH(SS[1]);
        return 0 !== SS[0]
      }
      SK() {
        return PH.RWgP(this.__wbg_ptr) >>> 0
      }
    }

    function kS() {
      const SS = PH.mVor();
      var HS = FS(SS[0], SS[1]).slice();
      return PH.fpNz(SS[0], 4 * SS[1], 4), HS
    }

    function aS(SS, HS) {
      let gS, tS;
      try {
        const bS = NH(SS, PH.jNSy),
          XS = QH,
          xS = fH(HS, PH.jNSy, PH.ZiN3),
          NS = QH,
          qS = PH.jFXv(bS, XS, xS, NS);
        return gS = qS[0], tS = qS[1], mS(qS[0], qS[1])
      } finally {
        PH.fpNz(gS, tS, 1)
      }
    }

    function KS() {
      const SS = PH.Tz7h();
      var HS = FS(SS[0], SS[1]).slice();
      return PH.fpNz(SS[0], 4 * SS[1], 4), HS
    }

    function jS(SS) {
      return 0 !== PH.SN5p(SS)
    }

    function GS(SS, HS) {
      const gS = fH(SS, PH.jNSy, PH.ZiN3),
        tS = QH,
        bS = PH.bB0Q(gS, tS, HS);
      if (bS[1]) throw kH(bS[0])
    }

    function CS() {
      PH.IMtH()
    }

    function nS() {
      return PH.OUgL() >>> 0
    }

    function PS(SS) {
      return 0 !== PH.IDzG(SS)
    }

    function QS(SS) {
      return 0 !== PH.ULee(SS)
    }

    function DS(SS) {
      PH.nYhM(SS)
    }

    function wS() {
      return PH.DGgi() >>> 0
    }

    function hS() {
      return PH.xuFu() >>> 0
    }

    function ZS() {
      return 0 !== PH.w0Vw()
    }

    function JS() {
      const SS = PH.dxQb();
      var HS = FS(SS[0], SS[1]).slice();
      return PH.fpNz(SS[0], 4 * SS[1], 4), HS
    }

    function OS() {
      const SS = PH.stAP();
      var HS = FS(SS[0], SS[1]).slice();
      return PH.fpNz(SS[0], 4 * SS[1], 4), HS
    }

    function dS() {
      const SS = PH.VwCp();
      var HS = FS(SS[0], SS[1]).slice();
      return PH.fpNz(SS[0], 4 * SS[1], 4), HS
    }

    function cS() {
      return PH.nsET() >>> 0
    }

    function vS() {
      PH.DVuQ()
    }

    function ES() {
      let SS, HS;
      try {
        const gS = PH.WgP9();
        return SS = gS[0], HS = gS[1], mS(gS[0], gS[1])
      } finally {
        PH.fpNz(SS, HS, 1)
      }
    }

    function LS(SS) {
      PH.j9u6(sS(SS))
    }

    function YS() {
      return {
        __proto__: null,
        upvS: {
          __proto__: null,
          wHcj: function(SS, HS) {
            return sS(Error(mS(SS, HS)))
          },
          WsRy: function(SS, HS) {
            throw new Error(mS(SS, HS))
          },
          bSej: function(SS) {
            tH(SS).call()
          },
          BDJO: function(SS, HS) {
            console.error(mS(SS, HS))
          },
          Mkf1: function() {
            return performance.now()
          },
          QjaG: function(SS) {
            kH(SS)
          }
        }
      }
    }
    Symbol.dispose && (fS.prototype[Symbol.dispose] = fS.prototype.free);
    const AS = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((SS => PH.ksur(SS, 1))),
      yS = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((SS => PH.rQTa(SS, 1))),
      VS = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((SS => PH.OpTp(SS, 1))),
      iS = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((SS => PH.oPyf(SS, 1))),
      WS = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((SS => PH.N1K3(SS, 1))),
      zS = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((SS => PH.QkVO(SS, 1))),
      US = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((SS => PH.yGBT(SS, 1))),
      pS = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((SS => PH.hTNK(SS, 1)));

    function sS(SS) {
      XH === bH.length && bH.push(bH.length + 1);
      const HS = XH;
      return XH = bH[HS], bH[HS] = SS, HS
    }

    function BS(SS, HS) {
      if (!(SS instanceof HS)) throw new Error(`expected instance of ${HS.name}`)
    }

    function MS(SS, HS) {
      return SS >>>= 0, oS().subarray(SS / 8, SS / 8 + HS)
    }

    function FS(SS, HS) {
      return SS >>>= 0, SH().subarray(SS / 4, SS / 4 + HS)
    }

    function RS(SS, HS) {
      return SS >>>= 0, gH().subarray(SS / 1, SS / 1 + HS)
    }
    let TS = null;

    function oS() {
      return null !== TS && 0 !== TS.byteLength || (TS = new Float64Array(PH.memory.buffer)), TS
    }
    let lS = null;

    function mS(SS, HS) {
      return function(SS, HS) {
        jH += HS, jH >= KH && (aH = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), aH.decode(), jH = HS);
        return aH.decode(gH().subarray(SS, SS + HS))
      }(SS >>> 0, HS)
    }
    let eS = null;
    let rS = null;

    function SH() {
      return null !== rS && 0 !== rS.byteLength || (rS = new Uint32Array(PH.memory.buffer)), rS
    }
    let HH = null;

    function gH() {
      return null !== HH && 0 !== HH.byteLength || (HH = new Uint8Array(PH.memory.buffer)), HH
    }

    function tH(SS) {
      return bH[SS]
    }
    let bH = new Array(1024).fill(void 0);
    bH.push(void 0, null, !0, !1);
    let XH = bH.length;

    function xH(SS) {
      return void 0 === SS || null === SS
    }

    function NH(SS, HS) {
      const gS = HS(2 * SS.length, 2) >>> 0;
      return (null !== eS && 0 !== eS.byteLength || (eS = new Uint16Array(PH.memory.buffer)), eS).set(SS, gS / 2), QH = SS.length, gS
    }

    function qH(SS, HS) {
      const gS = HS(4 * SS.length, 4) >>> 0;
      return SH().set(SS, gS / 4), QH = SS.length, gS
    }

    function uH(SS, HS) {
      const gS = HS(1 * SS.length, 1) >>> 0;
      return gH().set(SS, gS / 1), QH = SS.length, gS
    }

    function IH(SS, HS) {
      const gS = HS(8 * SS.length, 8) >>> 0;
      return oS().set(SS, gS / 8), QH = SS.length, gS
    }

    function fH(SS, HS, gS) {
      if (void 0 === gS) {
        const gS = GH.encode(SS),
          tS = HS(gS.length, 1) >>> 0;
        return gH().subarray(tS, tS + gS.length).set(gS), QH = gS.length, tS
      }
      let tS = SS.length,
        bS = HS(tS, 1) >>> 0;
      const XS = gH();
      let xS = 0;
      for (; xS < tS; xS++) {
        const HS = SS.charCodeAt(xS);
        if (HS > 127) break;
        XS[bS + xS] = HS
      }
      if (xS !== tS) {
        0 !== xS && (SS = SS.slice(xS)), bS = gS(bS, tS, tS = xS + 3 * SS.length, 1) >>> 0;
        const HS = gH().subarray(bS + xS, bS + tS);
        xS += GH.encodeInto(SS, HS).written, bS = gS(bS, tS, xS, 1) >>> 0
      }
      return QH = xS, bS
    }

    function kH(SS) {
      const HS = tH(SS);
      return function(SS) {
        SS < 1028 || (bH[SS] = XH, XH = SS)
      }(SS), HS
    }
    let aH = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    aH.decode();
    const KH = 2146435072;
    let jH = 0;
    const GH = new TextEncoder;
    "encodeInto" in GH || (GH.encodeInto = function(SS, HS) {
      const gS = GH.encode(SS);
      return HS.set(gS), {
        read: SS.length,
        written: gS.length
      }
    });
    let CH, nH, PH, QH = 0;

    function DH(SS, HS) {
      return nH = SS, PH = SS.exports, CH = HS, TS = null, lS = null, eS = null, rS = null, HH = null, PH.dWt6(), PH
    }

    function wH(SS) {
      if (void 0 !== PH) return PH;
      void 0 !== SS && (Object.getPrototypeOf(SS) === Object.prototype ? ({
        module: SS
      } = SS) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const HS = YS();
      SS instanceof WebAssembly.Module || (SS = new WebAssembly.Module(SS));
      return DH(new WebAssembly.Instance(SS, HS), SS)
    }
    async function hH(SS) {
      if (void 0 !== PH) return PH;
      void 0 !== SS && (Object.getPrototypeOf(SS) === Object.prototype ? ({
        module_or_path: SS
      } = SS) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const HS = YS();
      ("string" === typeof SS || "function" === typeof Request && SS instanceof Request || "function" === typeof URL && SS instanceof URL) && (SS = fetch(SS));
      const {
        instance: gS,
        module: tS
      } = await async function(SS, HS) {
        if ("function" === typeof Response && SS instanceof Response) {
          if (!SS.ok) throw new Error(`failed to fetch Wasm: ${SS.status} ${SS.statusText} fetching '${SS.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(SS, HS)
          } catch (gS) {
            if (! function(SS) {
                switch (SS) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(SS.type) || "application/wasm" === SS.headers.get("Content-Type")) throw gS;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", gS)
          }
          const tS = await SS.arrayBuffer();
          return await WebAssembly.instantiate(tS, HS)
        } {
          const gS = await WebAssembly.instantiate(SS, HS);
          return gS instanceof WebAssembly.Instance ? {
            instance: gS,
            module: SS
          } : gS
        }
      }(await SS, HS);
      return DH(gS, tS)
    }
  },
  36307: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS,
      f: () => NS,
      h: () => qS
    });
    var tS = gS(36315),
      bS = gS(3021),
      XS = gS(36322);
    const xS = {
      name: bS.d,
      url: () => new gS.U(gS(36330)),
      init: tS.default,
      bindings: tS
    };

    function NS() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xS,
        HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xS,
        gS = arguments.length > 2 ? arguments[2] : void 0;
      return (0, XS.i)(SS, HS, gS)
    }

    function qS(SS) {
      return (0, bS.N)((() => SS), tS, xS)
    }
  },
  36301: (SS, HS, gS) => {
    function tS(SS, HS) {
      return new Error(`${SS}: ${HS instanceof Error?`${HS.name}: ${HS.message}`:String(HS)}`, {
        cause: HS
      })
    }
    gS.d(HS, {
      e: () => tS
    })
  },
  36294: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS,
      d: () => qS
    });
    var tS = gS(3030),
      bS = gS(6819),
      XS = gS(36301);

    function xS() {
      return new URL(new gS.U(gS(36304)).href, globalThis.location?.href).href
    }
    let NS = null;

    function qS() {
      return NS ??= (async () => (0, tS.F)(new URL(xS()), (0, bS.c)("bloxd_wasm_textures")))().catch((SS => {
        throw (0, XS.e)((0, tS.L)(SS), SS)
      })), NS
    }
  },
  36277: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS,
      g: () => XS,
      h: () => qS,
      k: () => xS,
      m: () => bS
    });
    const tS = /^alloc_failed (\d+) bytes$/;

    function bS(SS, HS) {
      return XS(SS, HS) ? `trap=alloc_failed ${HS} bytes` : `trap=${SS}`
    }

    function XS(SS, HS) {
      return "unreachable" === SS && HS > 0
    }

    function xS(SS, HS, gS) {
      const tS = function(SS) {
        return SS instanceof WebAssembly.RuntimeError ? /unreachable/i.test(SS.message) ? "unreachable" : /out of bounds/i.test(SS.message) ? "out_of_bounds" : "runtime_error" : (SS instanceof RangeError || SS instanceof Error && "InternalError" === SS.name) && /call stack|recursion/i.test(SS.message) ? "stack_overflow" : "js_error"
      }(SS);
      if ("unreachable" !== tS) return {
        kind: tS,
        panic: null,
        refusedBytes: 0
      };
      const bS = HS(),
        XS = gS();
      return {
        kind: tS,
        panic: XS > 0 ? null : bS,
        refusedBytes: XS
      }
    }
    const NS = 300;

    function qS(SS) {
      return SS.replace(/\s*\n\s*/g, " / ").slice(0, NS)
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);