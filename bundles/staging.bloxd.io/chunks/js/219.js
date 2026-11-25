export const id = 219;
export const ids = [218, 219];
export const modules = {
  34877: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      CAPPED_COUNTS_VISIT_CAP: () => jM,
      reportCappedWasmFailure: () => nM,
      reportUncappedWasmFailure: () => PM,
      reportWasmCrash: () => SM,
      reportWasmFailure: () => aM
    });
    var OM = iM(3258);

    function SM(MM) {
      (0, OM.reportClientError)("wasm_load", MM.message, MM.code)
    }
    const jM = OM.MAX_ERRORS_PER_VISIT - 4;

    function aM(MM, rM, iM, SM) {
      (0, OM.reportClientError)(MM, rM, iM, !1, OM.MAX_ERRORS_PER_VISIT, {
        context: SM
      })
    }

    function PM(MM, rM, iM, SM) {
      (0, OM.reportClientError)(MM, rM, iM, !1, 1 / 0, {
        context: SM
      })
    }

    function nM(MM, rM, iM, SM) {
      (0, OM.reportClientError)(MM, rM, iM, !1, jM, {
        context: SM
      })
    }
  },
  37215: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => GM,
      e: () => bM,
      i: () => wM,
      j: () => CM
    });
    var OM = iM(37233),
      SM = iM(3185),
      jM = iM(37244),
      aM = iM(3188),
      PM = iM(34877),
      nM = iM(3248),
      QM = iM(3632),
      zM = iM(3629),
      LM = iM(37218),
      mM = iM(3258),
      HM = iM(37223),
      hM = iM(37229),
      JM = iM(4088);
    let dM = !1;
    const yM = 40;
    var lM = iM(2562);
    const EM = "bloxdWasmFailureReported";

    function UM() {
      return "undefined" === typeof WebAssembly
    }

    function GM() {
      return (0, OM.h)()
    }

    function CM() {
      if (UM()) return "this browser has no WebAssembly";
      const MM = (0, SM.t)();
      return "compile" === MM || "instantiate" === MM ? `the core wasm didn't load here (${(0,SM.j)()})` : null
    }
    async function eM(MM) {
      return await (0, jM.i)(jM.e, void 0, MM)
    }

    function bM() {
      UM() || (0, lM.f)((() => {
        eM()
      }))
    }

    function wM() {
      if (UM()) return async () => ((0, nM.l)("unsupported", 0), tM("unsupported", "This browser has no WebAssembly"), !1);
      const MM = {
        reloadFailedDownload: !0
      };
      return eM(MM), async () => {
        var rM;
        const iM = performance.now();
        await eM(MM);
        const OM = (performance.now() - iM) / 1e3;
        if ((0, SM.R)()) return (0, nM.l)("ready", OM), dM || (dM = !0, (0, SM.W)((() => {
          if ("call" !== (0, SM.t)()) return;
          const MM = (0, SM.p)(),
            rM = (0, LM.k)(MM, SM.I, SM.ab),
            iM = (0, SM.y)().buffer.byteLength,
            OM = (0, LM.f)(rM.kind, rM.refusedBytes),
            jM = OM ? "alloc_failed" : rM.kind,
            aM = (0, HM.h)(iM),
            PM = OM ? `_r${Math.floor(Math.log2(rM.refusedBytes))}` : "",
            nM = (0, JM.e)();
          null === nM && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const QM = new Error((0, hM.e)(MM, iM, rM));
          if (MM instanceof Error && void 0 !== MM.stack) {
            const rM = MM.stack.split("\n"),
              iM = rM.length > yM ? [...rM.slice(0, yM / 2), ...rM.slice(-yM / 2)] : rM;
            QM.stack = iM.join("\n")
          }(0, mM.reportClientError)("wasm_load", QM, `wasm_call_${jM}_${null!==nM&&void 0!==nM?nM:"unnamed"}_m${aM}${PM}`)
        }))), (0, aM.Q)(jM.e.url()) && (0, PM.reportCappedWasmFailure)("wasm_load", QM.d.message, QM.d.code), !0;
        const lM = zM.e[null !== (rM = (0, SM.t)()) && void 0 !== rM ? rM : "call"];
        return (0, nM.l)(lM, OM), tM(lM, (0, SM.j)()), !1
      }
    }

    function tM(MM, rM) {
      (0, zM.i)(EM, `Bloxd wasm ${MM}, so the game can't start: ${rM}`, rM, MM)
    }
  },
  37229: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => PM,
      f: () => QM,
      j: () => aM,
      k: () => LM
    });
    var OM = iM(37218),
      SM = iM(10);
    const jM = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function aM(MM) {
      if (MM instanceof WebAssembly.RuntimeError) return !0;
      const rM = MM instanceof Error ? MM.stack : void 0;
      return "string" === typeof rM && jM.test(rM)
    }

    function PM(MM, rM, iM) {
      var SM;
      const aM = MM instanceof Error ? MM.name : "thrown",
        PM = (MM instanceof Error && null !== (SM = MM.stack) && void 0 !== SM ? SM : "").split("\n").filter((MM => jM.test(MM))).slice(0, 8).map((MM => MM.trim())),
        nM = null === rM ? "wasm memory unknown" : `wasm memory ${Math.round(rM/2**20)} MB`,
        QM = null === iM.panic ? "" : `, panic: ${(0,OM.i)(iM.panic)}`,
        zM = `${aM}: ${MM instanceof Error?MM.message:String(MM)}`;
      return `${(0,OM.o)(iM.kind,iM.refusedBytes)} ${zM} (${nM})${QM}${PM.length>0?` | ${PM.join(" < ")}`:""}`
    }
    const nM = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function QM(MM) {
      var rM;
      let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(MM instanceof Error) || !nM.test(MM.message)) return {};
      if (!("detached" in iM)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, SM.V)(null === (rM = (0, SM.M)(iM, "detached")) || void 0 === rM ? void 0 : rM.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const zM = 500;

    function LM(MM) {
      let rM = "[object Object]";
      try {
        rM = String(MM)
      } catch {}
      if ("[object Object]" !== rM) return rM;
      try {
        var iM, OM;
        return null !== (iM = null === (OM = JSON.stringify(MM)) || void 0 === OM ? void 0 : OM.slice(0, zM)) && void 0 !== iM ? iM : rM
      } catch {
        return rM
      }
    }
  },
  37266: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/bloxd_wasm_bg.5656165110e66edd3713.wasm"
  },
  37242: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/bloxd_wasm_textures_bg.3e0bb5a054f9d6224a0d.wasm"
  },
  37253: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      Or: () => OM,
      EnvelopeKind: () => SM,
      NO: () => jM,
      PhysicsEngine: () => aM,
      TO: () => PM,
      PS: () => nM,
      ES: () => QM,
      US: () => zM,
      AS: () => LM,
      IS: () => mM,
      Za: () => HM,
      VP: () => hM,
      en: () => JM,
      PQ: () => dM,
      default: () => er,
      initSync: () => Cr,
      HQ: () => yM,
      XQ: () => lM,
      SL: () => EM,
      RL: () => UM,
      pL: () => GM,
      WL: () => CM,
      sL: () => eM,
      DL: () => bM,
      kL: () => wM,
      ZL: () => tM,
      oL: () => gM,
      fL: () => uM,
      YL: () => RM,
      NL: () => pM,
      AL: () => WM
    });
    class OM {
      __destroy_into_raw() {
        const MM = this.__wbg_ptr;
        return this.__wbg_ptr = 0, DM.unregister(this), MM
      }
      free() {
        const MM = this.__destroy_into_raw();
        Er.A1cn(MM, 0)
      }
      xL() {
        const MM = Er.kifZ(this.__wbg_ptr);
        if (MM[2]) throw mr(MM[1]);
        return MM[0] >>> 0
      }
      vL() {
        return Er.vSJ1(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const MM = Er.iNcw();
        return this.__wbg_ptr = MM, DM.register(this, this.__wbg_ptr, this), this
      }
      FL() {
        return Er.SOGr(this.__wbg_ptr) >>> 0
      }
      BL(MM) {
        const rM = Er.ACUx(this.__wbg_ptr, MM);
        if (rM[2]) throw mr(rM[1]);
        return rM[0] >>> 0
      }
      XL(MM) {
        const rM = Er.j3pd(this.__wbg_ptr, MM);
        if (rM[2]) throw mr(rM[1]);
        return rM[0] >>> 0
      }
    }
    Symbol.dispose && (OM.prototype[Symbol.dispose] = OM.prototype.free);
    const SM = Object.freeze({
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
    class jM {
      __destroy_into_raw() {
        const MM = this.__wbg_ptr;
        return this.__wbg_ptr = 0, kM.unregister(this), MM
      }
      free() {
        const MM = this.__destroy_into_raw();
        Er.Kc06(MM, 0)
      }
      qL(MM, rM) {
        const iM = Er.IzVN(this.__wbg_ptr, MM, rM);
        if (iM[2]) throw mr(iM[1]);
        return iM[0] >>> 0
      }
      TL(MM) {
        const rM = Er.qFXB(this.__wbg_ptr, MM);
        if (rM[2]) throw mr(rM[1]);
        return rM[0] >>> 0
      }
      VL() {
        Er.Iakf(this.__wbg_ptr)
      }
      static cL() {
        return Er.OiCh() >>> 0
      }
      Mm() {
        return Er.w8GT(this.__wbg_ptr) >>> 0
      }
      rm() {
        const MM = Er.fZho(this.__wbg_ptr);
        return 0 === MM[0] ? void 0 : MM[1]
      }
      im() {
        return Er.ccWa(this.__wbg_ptr) >>> 0
      }
      Om() {
        return Er.DMAE(this.__wbg_ptr) >>> 0
      }
      static KL() {
        return Er.OyQn() >>> 0
      }
      constructor() {
        const MM = Er.qiDZ();
        return this.__wbg_ptr = MM, kM.register(this, this.__wbg_ptr, this), this
      }
      Sm() {
        return Er.C29Q(this.__wbg_ptr) >>> 0
      }
      jm() {
        return Er.OOHq(this.__wbg_ptr) >>> 0
      }
      am() {
        return Er.Dq6j(this.__wbg_ptr) >>> 0
      }
      IL(MM) {
        return Er.xYZj(this.__wbg_ptr, MM) >>> 0
      }
      reserve(MM, rM) {
        const iM = Er.H6q9(this.__wbg_ptr, MM, rM);
        if (iM[1]) throw mr(iM[0])
      }
      Qm(MM, rM) {
        const iM = nr(MM, Er.GR8u),
          OM = Ur;
        Er.osw8(this.__wbg_ptr, iM, OM, rM)
      }
      text() {
        let MM, rM;
        try {
          const iM = Er.cdEF(this.__wbg_ptr);
          return MM = iM[0], rM = iM[1], TM(iM[0], iM[1])
        } finally {
          Er.SWNS(MM, rM, 1)
        }
      }
    }
    Symbol.dispose && (jM.prototype[Symbol.dispose] = jM.prototype.free);
    class aM {
      __destroy_into_raw() {
        const MM = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ZM.unregister(this), MM
      }
      free() {
        const MM = this.__destroy_into_raw();
        Er.gQek(MM, 0)
      }
      Lm(MM, rM) {
        vM(rM, OM);
        const iM = Er.RaGm(this.__wbg_ptr, MM, rM.__wbg_ptr);
        if (iM[2]) throw mr(iM[1]);
        return iM[0] >>> 0
      }
      Hm() {
        const MM = Er.inSK(this.__wbg_ptr);
        if (MM[1]) throw mr(MM[0])
      }
      ym(MM, rM, iM, OM, SM, jM, aM, nM, QM, zM, LM) {
        vM(MM, PM);
        const mM = Er.LrrD(this.__wbg_ptr, MM.__wbg_ptr, rM, iM, OM, SM, jM, aM, nM, QM, zM, LM);
        if (mM[2]) throw mr(mM[1]);
        return mM[0]
      }
      lm() {
        const MM = Er.VUXo(this.__wbg_ptr);
        var rM = FM(MM[0], MM[1]).slice();
        return Er.SWNS(MM[0], 8 * MM[1], 8), rM
      }
      Em() {
        return Er.j7si(this.__wbg_ptr) >>> 0
      }
      Um() {
        return Er.o5ZN(this.__wbg_ptr) >>> 0
      }
      Gm() {
        return Er.HN1N(this.__wbg_ptr) >>> 0
      }
      constructor(MM, rM, iM, OM, SM, jM, aM, PM) {
        const nM = Er.FxC3(MM, rM, iM, OM, SM, jM, aM, PM);
        if (nM[2]) throw mr(nM[1]);
        return this.__wbg_ptr = nM[0], ZM.register(this, this.__wbg_ptr, this), this
      }
      wm(MM) {
        vM(MM, OM);
        const rM = Er.Arqk(this.__wbg_ptr, MM.__wbg_ptr);
        if (rM[2]) throw mr(rM[1]);
        return rM[0] >>> 0
      }
      gm(MM) {
        const rM = Er.q8Ma(this.__wbg_ptr, MM);
        if (rM[1]) throw mr(rM[0])
      }
      um() {
        return Er.cHTK(this.__wbg_ptr) >>> 0
      }
      resume(MM, rM) {
        vM(MM, PM), vM(rM, OM);
        const iM = Er.UiQy(this.__wbg_ptr, MM.__wbg_ptr, rM.__wbg_ptr);
        if (iM[2]) throw mr(iM[1]);
        return iM[0] >>> 0
      }
      Dm(MM) {
        const rM = Er.Ftvx(this.__wbg_ptr, MM);
        if (rM[1]) throw mr(rM[0])
      }
      om(MM, rM) {
        vM(rM, OM);
        const iM = Er.cd9B(this.__wbg_ptr, MM, rM.__wbg_ptr);
        if (iM[1]) throw mr(iM[0])
      }
      Nm(MM) {
        const rM = zr(MM, Er.GR8u),
          iM = Ur,
          OM = Er.eSoQ(this.__wbg_ptr, rM, iM);
        if (OM[1]) throw mr(OM[0])
      }
      Jm(MM, rM, iM, OM, SM, jM) {
        const aM = Er.q62T(this.__wbg_ptr, MM, rM, iM, OM, SM, jM);
        if (aM[1]) throw mr(aM[0])
      }
      dm(MM, rM, iM, OM) {
        const SM = nr(MM, Er.GR8u),
          jM = Ur,
          aM = zr(rM, Er.GR8u),
          PM = Ur,
          nM = zr(iM, Er.GR8u),
          QM = Ur,
          zM = zr(OM, Er.GR8u),
          LM = Ur,
          mM = Er.tcHL(this.__wbg_ptr, SM, jM, aM, PM, nM, QM, zM, LM);
        if (mM[1]) throw mr(mM[0])
      }
      xm(MM, rM) {
        vM(rM, OM);
        const iM = Er.UP1Y(this.__wbg_ptr, MM, rM.__wbg_ptr);
        if (iM[1]) throw mr(iM[0])
      }
      bm(MM, rM, iM) {
        const OM = Er.c5lY(this.__wbg_ptr, MM, rM, iM);
        if (OM[1]) throw mr(OM[0])
      }
      Bm(MM, rM, iM, OM, SM, jM, aM, nM, QM, zM) {
        vM(MM, PM);
        return Er.fpYK(this.__wbg_ptr, MM.__wbg_ptr, rM, iM, OM, SM, jM, aM, nM, QM, zM)
      }
    }
    Symbol.dispose && (aM.prototype[Symbol.dispose] = aM.prototype.free);
    class PM {
      static __wrap(MM) {
        const rM = Object.create(PM.prototype);
        return rM.__wbg_ptr = MM, oM.register(rM, rM.__wbg_ptr, rM), rM
      }
      __destroy_into_raw() {
        const MM = this.__wbg_ptr;
        return this.__wbg_ptr = 0, oM.unregister(this), MM
      }
      free() {
        const MM = this.__destroy_into_raw();
        Er.qijW(MM, 0)
      }
      Im(MM) {
        const rM = Er.iCeU(this.__wbg_ptr, MM);
        if (rM[2]) throw mr(rM[1]);
        return rM[0] >>> 0
      }
      Km(MM, rM, iM) {
        return Er.CtTE(this.__wbg_ptr, MM, rM, iM)
      }
      qm(MM, rM, iM) {
        return Er.ppAH(this.__wbg_ptr, MM, rM, iM) >>> 0
      }
      Tm(MM, rM, iM, OM) {
        return 0 !== Er.uzVq(this.__wbg_ptr, MM, rM, iM, OM)
      }
      Vm() {
        Er.dilY(this.__wbg_ptr)
      }
      MH(MM) {
        const rM = Er.Jevj(this.__wbg_ptr, MM);
        if (rM[3]) throw mr(rM[2]);
        var iM = XM(rM[0], rM[1]).slice();
        return Er.SWNS(rM[0], 1 * rM[1], 1), iM
      }
      evict(MM, rM) {
        return Er.en5R(this.__wbg_ptr, MM, rM) >>> 0
      }
      rH() {
        Er.KreM(this.__wbg_ptr)
      }
      iH(MM, rM, iM) {
        Er.RR7v(this.__wbg_ptr, MM, rM, iM)
      }
      OH(MM) {
        const rM = Er.Z5I9(this.__wbg_ptr, MM);
        if (rM[1]) throw mr(rM[0])
      }
      SH() {
        return Er.i4zF(this.__wbg_ptr) >>> 0
      }
      jH() {
        return Er.r9X8(this.__wbg_ptr) >>> 0
      }
      aH(MM, rM, iM) {
        Er.uOWv(this.__wbg_ptr, MM, rM, iM)
      }
      PH(MM, rM, iM) {
        Er.D4VZ(this.__wbg_ptr, MM, rM, iM)
      }
      nH() {
        return Er.qXwL(this.__wbg_ptr) >>> 0
      }
      QH() {
        return Er.E4b8(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const MM = Er.k4S3();
        return this.__wbg_ptr = MM, oM.register(this, this.__wbg_ptr, this), this
      }
      static zH() {
        const MM = Er.nO3E();
        return PM.__wrap(MM)
      }
      LH() {
        return Er.V6YQ(this.__wbg_ptr) >>> 0
      }
      mH() {
        return Er.L9u3(this.__wbg_ptr) >>> 0
      }
      HH(MM, rM, iM, OM) {
        const SM = Er.Atfp(this.__wbg_ptr, MM, rM, iM, OM);
        if (SM[1]) throw mr(SM[0])
      }
      hH() {
        return Er.qpth(this.__wbg_ptr) >>> 0
      }
      JH() {
        return Er.UolJ(this.__wbg_ptr) >>> 0
      }
      dH(MM, rM, iM, OM) {
        Er.wyYy(this.__wbg_ptr, MM, rM, iM, OM)
      }
      yH(MM) {
        Er.OxV5(this.__wbg_ptr, MM)
      }
      EH(MM, rM, iM, OM, SM) {
        const jM = Qr(rM, Er.GR8u),
          aM = Ur,
          PM = nr(iM, Er.GR8u),
          nM = Ur,
          QM = zr(OM, Er.GR8u),
          zM = Ur,
          LM = Er.Cm8M(this.__wbg_ptr, MM, jM, aM, PM, nM, QM, zM, SM);
        if (LM[1]) throw mr(LM[0])
      }
      lH(MM, rM, iM, OM) {
        const SM = Qr(MM, Er.GR8u),
          jM = Ur,
          aM = nr(rM, Er.GR8u),
          PM = Ur,
          nM = zr(iM, Er.GR8u),
          QM = Ur,
          zM = Qr(OM, Er.GR8u),
          LM = Ur,
          mM = Er.fz9L(this.__wbg_ptr, SM, jM, aM, PM, nM, QM, zM, LM);
        if (mM[1]) throw mr(mM[0])
      }
      bH(MM) {
        const rM = Qr(MM, Er.GR8u),
          iM = Ur,
          OM = Er.Jdrq(this.__wbg_ptr, rM, iM);
        if (OM[1]) throw mr(OM[0])
      }
      wH() {
        return Er.xfN9(this.__wbg_ptr) >>> 0
      }
      tH(MM) {
        const rM = Er.kJpK(this.__wbg_ptr, MM);
        if (rM[2]) throw mr(rM[1]);
        return rM[0] >>> 0
      }
      steer() {
        return Er.ZaID(this.__wbg_ptr) >>> 0
      }
      gH() {
        const MM = Er.ee7d(this.__wbg_ptr);
        var rM = FM(MM[0], MM[1]).slice();
        return Er.SWNS(MM[0], 8 * MM[1], 8), rM
      }
      uH() {
        return Er.qOkc(this.__wbg_ptr) >>> 0
      }
      pm() {
        const MM = Er.oeR9(this.__wbg_ptr);
        var rM, iM, OM = (rM = MM[0], iM = MM[1], rM >>>= 0, (null !== qM && 0 !== qM.byteLength || (qM = new Int32Array(Er.memory.buffer)), qM).subarray(rM / 4, rM / 4 + iM)).slice();
        return Er.SWNS(MM[0], 4 * MM[1], 4), OM
      }
    }
    Symbol.dispose && (PM.prototype[Symbol.dispose] = PM.prototype.free);
    class nM {
      __destroy_into_raw() {
        const MM = this.__wbg_ptr;
        return this.__wbg_ptr = 0, fM.unregister(this), MM
      }
      free() {
        const MM = this.__destroy_into_raw();
        Er.nTwo(MM, 0)
      }
      JL(MM) {
        const rM = nr(MM, Er.GR8u),
          iM = Ur,
          OM = Er.o8jR(this.__wbg_ptr, rM, iM);
        if (OM[1]) throw mr(OM[0])
      }
      RH() {
        return Er.C4NB(this.__wbg_ptr) >>> 0
      }
      pH() {
        return Er.ajuN(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const MM = Er.q3Nd();
        return this.__wbg_ptr = MM, fM.register(this, this.__wbg_ptr, this), this
      }
      run(MM, rM) {
        vM(MM, PM);
        const iM = Er.PVbs(this.__wbg_ptr, MM.__wbg_ptr, rM);
        if (iM[2]) throw mr(iM[1]);
        return iM[0] >>> 0
      }
      WH(MM) {
        const rM = nr(MM, Er.GR8u),
          iM = Ur;
        Er.LpYp(this.__wbg_ptr, rM, iM)
      }
      sH(MM) {
        const rM = nr(MM, Er.GR8u),
          iM = Ur;
        Er.uhNL(this.__wbg_ptr, rM, iM)
      }
    }
    Symbol.dispose && (nM.prototype[Symbol.dispose] = nM.prototype.free);
    class QM {
      __destroy_into_raw() {
        const MM = this.__wbg_ptr;
        return this.__wbg_ptr = 0, YM.unregister(this), MM
      }
      free() {
        const MM = this.__destroy_into_raw();
        Er.IFNF(MM, 0)
      }
      kH(MM, rM) {
        const iM = Qr(MM, Er.GR8u),
          OM = Ur;
        return Er.Pb4y(this.__wbg_ptr, iM, OM, rM) >>> 0
      }
      ZH(MM, rM, iM) {
        vM(MM, PM);
        const OM = Qr(iM, Er.GR8u),
          SM = Ur,
          jM = Er.I5Yx(this.__wbg_ptr, MM.__wbg_ptr, rM, OM, SM);
        if (jM[2]) throw mr(jM[1]);
        return jM[0] >>> 0
      }
      DH(MM) {
        return Er.bZtZ(this.__wbg_ptr, MM) >>> 0
      }
      constructor() {
        const MM = Er.gbaE();
        return this.__wbg_ptr = MM, YM.register(this, this.__wbg_ptr, this), this
      }
      scan(MM, rM) {
        vM(MM, PM);
        const iM = Er.FEGW(this.__wbg_ptr, MM.__wbg_ptr, rM);
        if (iM[2]) throw mr(iM[1]);
        return iM[0] >>> 0
      }
      YH(MM) {
        const rM = Qr(MM, Er.GR8u),
          iM = Ur;
        Er.nxYx(this.__wbg_ptr, rM, iM)
      }
      fH() {
        return Er.q3RP(this.__wbg_ptr) >>> 0
      }
      oH() {
        return Er.X1dl(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (QM.prototype[Symbol.dispose] = QM.prototype.free);
    class zM {
      __destroy_into_raw() {
        const MM = this.__wbg_ptr;
        return this.__wbg_ptr = 0, NM.unregister(this), MM
      }
      free() {
        const MM = this.__destroy_into_raw();
        Er.jrCE(MM, 0)
      }
      AH(MM) {
        const rM = Er.PWpb(this.__wbg_ptr, MM);
        if (rM[2]) throw mr(rM[1]);
        return rM[0] >>> 0
      }
      compute(MM, rM, iM, OM) {
        var SM = ar(OM) ? 0 : Lr(OM, Er.GR8u, Er.idyS),
          jM = Ur;
        const aM = Er.DpDR(this.__wbg_ptr, MM, ar(rM) ? Number.MAX_SAFE_INTEGER : rM | 0, iM, SM, jM);
        if (aM[2]) throw mr(aM[1]);
        return aM[0] >>> 0
      }
      vH(MM) {
        const rM = Lr(MM, Er.GR8u, Er.idyS),
          iM = Ur;
        Er.G5Ej(this.__wbg_ptr, rM, iM)
      }
      FH() {
        return Er.lMxp(this.__wbg_ptr)
      }
      BH(MM) {
        return Er.Hqhm(this.__wbg_ptr, MM) >>> 0
      }
      XH() {
        return Er.fDOT(this.__wbg_ptr) >>> 0
      }
      IH() {
        return Er.HtbL(this.__wbg_ptr) >>> 0
      }
      KH(MM, rM) {
        const iM = Er.Qxsg(this.__wbg_ptr, MM, rM);
        if (iM[1]) throw mr(iM[0])
      }
      qH() {
        return Er.Y3k9(this.__wbg_ptr) >>> 0
      }
      TH() {
        return Er.nVoc(this.__wbg_ptr) >>> 0
      }
      VH() {
        return Er.SHBJ(this.__wbg_ptr) >>> 0
      }
      xH(MM, rM, iM) {
        const OM = nr(MM, Er.GR8u),
          SM = Ur,
          jM = nr(rM, Er.GR8u),
          aM = Ur,
          PM = Er.AROh(this.__wbg_ptr, OM, SM, jM, aM, iM);
        if (PM[1]) throw mr(PM[0])
      }
      Mh() {
        return Er.kYWj(this.__wbg_ptr) >>> 0
      }
      mesh(MM, rM, iM, OM, SM) {
        const jM = Er.nsoP(this.__wbg_ptr, MM, rM, iM, OM, SM);
        if (jM[2]) throw mr(jM[1]);
        return jM[0] >>> 0
      }
      constructor(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM, yM, lM, EM) {
        const UM = Pr(MM, Er.GR8u),
          GM = Ur,
          CM = zr(rM, Er.GR8u),
          eM = Ur,
          bM = nr(iM, Er.GR8u),
          wM = Ur,
          tM = Qr(OM, Er.GR8u),
          gM = Ur,
          uM = Qr(SM, Er.GR8u),
          RM = Ur,
          pM = nr(jM, Er.GR8u),
          WM = Ur,
          sM = nr(aM, Er.GR8u),
          DM = Ur,
          kM = zr(PM, Er.GR8u),
          ZM = Ur,
          oM = zr(nM, Er.GR8u),
          fM = Ur,
          YM = Qr(QM, Er.GR8u),
          AM = Ur;
        var xM = ar(zM) ? 0 : Pr(zM, Er.GR8u),
          vM = Ur;
        const FM = nr(LM, Er.GR8u),
          BM = Ur,
          XM = Qr(mM, Er.GR8u),
          IM = Ur;
        var KM = ar(HM) ? 0 : Qr(HM, Er.GR8u),
          qM = Ur;
        const TM = zr(hM, Er.GR8u),
          VM = Ur,
          cM = Er.E9qx(UM, GM, CM, eM, bM, wM, tM, gM, uM, RM, pM, WM, sM, DM, kM, ZM, oM, fM, YM, AM, xM, vM, FM, BM, XM, IM, KM, qM, TM, VM, JM, dM, yM, lM, EM);
        if (cM[2]) throw mr(cM[1]);
        return this.__wbg_ptr = cM[0], NM.register(this, this.__wbg_ptr, this), this
      }
      cH(MM, rM) {
        const iM = nr(MM, Er.GR8u),
          OM = Ur,
          SM = Er.Z1ud(this.__wbg_ptr, iM, OM, rM);
        if (SM[3]) throw mr(SM[2]);
        var jM = XM(SM[0], SM[1]).slice();
        return Er.SWNS(SM[0], 1 * SM[1], 1), jM
      }
      rh(MM) {
        Er.TWvQ(this.__wbg_ptr, ar(MM) ? 16777215 : MM)
      }
      ih(MM) {
        return Er.n4UF(this.__wbg_ptr, MM) >>> 0
      }
      Sh() {
        return Er.IQeB(this.__wbg_ptr) >>> 0
      }
      Oh() {
        const MM = Er.XrMU(this.__wbg_ptr);
        if (MM[2]) throw mr(MM[1]);
        return 0 !== MM[0]
      }
      jh() {
        return Er.Tw9n(this.__wbg_ptr) >>> 0
      }
      ah() {
        return Er.dFom(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (zM.prototype[Symbol.dispose] = zM.prototype.free);
    class LM {
      __destroy_into_raw() {
        const MM = this.__wbg_ptr;
        return this.__wbg_ptr = 0, AM.unregister(this), MM
      }
      free() {
        const MM = this.__destroy_into_raw();
        Er.mG84(MM, 0)
      }
      compute(MM, rM, iM, OM) {
        var SM = ar(OM) ? 0 : Lr(OM, Er.GR8u, Er.idyS),
          jM = Ur;
        const aM = Er.PRZ0(this.__wbg_ptr, MM, ar(rM) ? Number.MAX_SAFE_INTEGER : rM | 0, iM, SM, jM);
        if (aM[2]) throw mr(aM[1]);
        return aM[0] >>> 0
      }
      vH(MM) {
        const rM = Lr(MM, Er.GR8u, Er.idyS),
          iM = Ur;
        Er.rSTV(this.__wbg_ptr, rM, iM)
      }
      TH() {
        return Er.lbVF(this.__wbg_ptr) >>> 0
      }
      VH() {
        return Er.vdlM(this.__wbg_ptr) >>> 0
      }
      Ph(MM) {
        const rM = Er.m09q(this.__wbg_ptr, MM);
        if (rM[2]) throw mr(rM[1]);
        return rM[0] >>> 0
      }
      constructor(MM, rM, iM, OM, SM, jM) {
        const aM = Pr(MM, Er.GR8u),
          PM = Ur,
          nM = zr(rM, Er.GR8u),
          QM = Ur,
          zM = nr(iM, Er.GR8u),
          LM = Ur,
          mM = Qr(OM, Er.GR8u),
          HM = Ur,
          hM = Er.k4zN(aM, PM, nM, QM, zM, LM, mM, HM, SM, jM);
        if (hM[2]) throw mr(hM[1]);
        return this.__wbg_ptr = hM[0], AM.register(this, this.__wbg_ptr, this), this
      }
      Sh() {
        return Er.HlXQ(this.__wbg_ptr) >>> 0
      }
      Oh() {
        const MM = Er.FJ9P(this.__wbg_ptr);
        if (MM[2]) throw mr(MM[1]);
        return 0 !== MM[0]
      }
      jh() {
        return Er.we1W(this.__wbg_ptr) >>> 0
      }
    }

    function mM() {
      const MM = Er.XhAF();
      var rM = BM(MM[0], MM[1]).slice();
      return Er.SWNS(MM[0], 4 * MM[1], 4), rM
    }

    function HM(MM, rM) {
      let iM, OM;
      try {
        const SM = Pr(MM, Er.GR8u),
          jM = Ur,
          aM = Lr(rM, Er.GR8u, Er.idyS),
          PM = Ur,
          nM = Er.fWEg(SM, jM, aM, PM);
        return iM = nM[0], OM = nM[1], TM(nM[0], nM[1])
      } finally {
        Er.SWNS(iM, OM, 1)
      }
    }

    function hM() {
      const MM = Er.aq0i();
      var rM = BM(MM[0], MM[1]).slice();
      return Er.SWNS(MM[0], 4 * MM[1], 4), rM
    }

    function JM(MM) {
      return 0 !== Er.f1AT(MM)
    }

    function dM(MM, rM) {
      const iM = Lr(MM, Er.GR8u, Er.idyS),
        OM = Ur,
        SM = Er.ef2O(iM, OM, rM);
      if (SM[1]) throw mr(SM[0])
    }

    function yM() {
      Er.QOF5()
    }

    function lM() {
      return Er.agAh() >>> 0
    }

    function EM(MM) {
      return 0 !== Er.Q5FA(MM)
    }

    function UM(MM) {
      return 0 !== Er.Mpy6(MM)
    }

    function GM(MM) {
      Er.sNfK(MM)
    }

    function CM() {
      return Er.pOXN() >>> 0
    }

    function eM() {
      return Er.UBY5() >>> 0
    }

    function bM() {
      return 0 !== Er.zH1c()
    }

    function wM() {
      const MM = Er.OoQb();
      var rM = BM(MM[0], MM[1]).slice();
      return Er.SWNS(MM[0], 4 * MM[1], 4), rM
    }

    function tM() {
      const MM = Er.A8ZZ();
      var rM = BM(MM[0], MM[1]).slice();
      return Er.SWNS(MM[0], 4 * MM[1], 4), rM
    }

    function gM() {
      const MM = Er.GOao();
      var rM = BM(MM[0], MM[1]).slice();
      return Er.SWNS(MM[0], 4 * MM[1], 4), rM
    }

    function uM() {
      return Er.ez7e() >>> 0
    }

    function RM() {
      Er.jY6g()
    }

    function pM() {
      let MM, rM;
      try {
        const iM = Er.Hx3D();
        return MM = iM[0], rM = iM[1], TM(iM[0], iM[1])
      } finally {
        Er.SWNS(MM, rM, 1)
      }
    }

    function WM(MM) {
      Er.GJHO(xM(MM))
    }

    function sM() {
      return {
        __proto__: null,
        chc3: {
          __proto__: null,
          BOhm: function(MM, rM) {
            return xM(Error(TM(MM, rM)))
          },
          qvwV: function(MM, rM) {
            throw new Error(TM(MM, rM))
          },
          dWpt: function(MM) {
            Or(MM).call()
          },
          pC17: function(MM, rM) {
            console.error(TM(MM, rM))
          },
          dzOJ: function() {
            return performance.now()
          },
          J20d: function(MM) {
            mr(MM)
          }
        }
      }
    }
    Symbol.dispose && (LM.prototype[Symbol.dispose] = LM.prototype.free);
    const DM = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((MM => Er.A1cn(MM, 1))),
      kM = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((MM => Er.Kc06(MM, 1))),
      ZM = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((MM => Er.gQek(MM, 1))),
      oM = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((MM => Er.qijW(MM, 1))),
      fM = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((MM => Er.nTwo(MM, 1))),
      YM = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((MM => Er.IFNF(MM, 1))),
      NM = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((MM => Er.jrCE(MM, 1))),
      AM = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((MM => Er.mG84(MM, 1)));

    function xM(MM) {
      jr === Sr.length && Sr.push(Sr.length + 1);
      const rM = jr;
      return jr = Sr[rM], Sr[rM] = MM, rM
    }

    function vM(MM, rM) {
      if (!(MM instanceof rM)) throw new Error(`expected instance of ${rM.name}`)
    }

    function FM(MM, rM) {
      return MM >>>= 0, KM().subarray(MM / 8, MM / 8 + rM)
    }

    function BM(MM, rM) {
      return MM >>>= 0, Mr().subarray(MM / 4, MM / 4 + rM)
    }

    function XM(MM, rM) {
      return MM >>>= 0, ir().subarray(MM / 1, MM / 1 + rM)
    }
    let IM = null;

    function KM() {
      return null !== IM && 0 !== IM.byteLength || (IM = new Float64Array(Er.memory.buffer)), IM
    }
    let qM = null;

    function TM(MM, rM) {
      return function(MM, rM) {
        Jr += rM, Jr >= hr && (Hr = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Hr.decode(), Jr = rM);
        return Hr.decode(ir().subarray(MM, MM + rM))
      }(MM >>> 0, rM)
    }
    let VM = null;
    let cM = null;

    function Mr() {
      return null !== cM && 0 !== cM.byteLength || (cM = new Uint32Array(Er.memory.buffer)), cM
    }
    let rr = null;

    function ir() {
      return null !== rr && 0 !== rr.byteLength || (rr = new Uint8Array(Er.memory.buffer)), rr
    }

    function Or(MM) {
      return Sr[MM]
    }
    let Sr = new Array(1024).fill(void 0);
    Sr.push(void 0, null, !0, !1);
    let jr = Sr.length;

    function ar(MM) {
      return void 0 === MM || null === MM
    }

    function Pr(MM, rM) {
      const iM = rM(2 * MM.length, 2) >>> 0;
      return (null !== VM && 0 !== VM.byteLength || (VM = new Uint16Array(Er.memory.buffer)), VM).set(MM, iM / 2), Ur = MM.length, iM
    }

    function nr(MM, rM) {
      const iM = rM(4 * MM.length, 4) >>> 0;
      return Mr().set(MM, iM / 4), Ur = MM.length, iM
    }

    function Qr(MM, rM) {
      const iM = rM(1 * MM.length, 1) >>> 0;
      return ir().set(MM, iM / 1), Ur = MM.length, iM
    }

    function zr(MM, rM) {
      const iM = rM(8 * MM.length, 8) >>> 0;
      return KM().set(MM, iM / 8), Ur = MM.length, iM
    }

    function Lr(MM, rM, iM) {
      if (void 0 === iM) {
        const iM = dr.encode(MM),
          OM = rM(iM.length, 1) >>> 0;
        return ir().subarray(OM, OM + iM.length).set(iM), Ur = iM.length, OM
      }
      let OM = MM.length,
        SM = rM(OM, 1) >>> 0;
      const jM = ir();
      let aM = 0;
      for (; aM < OM; aM++) {
        const rM = MM.charCodeAt(aM);
        if (rM > 127) break;
        jM[SM + aM] = rM
      }
      if (aM !== OM) {
        0 !== aM && (MM = MM.slice(aM)), SM = iM(SM, OM, OM = aM + 3 * MM.length, 1) >>> 0;
        const rM = ir().subarray(SM + aM, SM + OM);
        aM += dr.encodeInto(MM, rM).written, SM = iM(SM, OM, aM, 1) >>> 0
      }
      return Ur = aM, SM
    }

    function mr(MM) {
      const rM = Or(MM);
      return function(MM) {
        MM < 1028 || (Sr[MM] = jr, jr = MM)
      }(MM), rM
    }
    let Hr = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Hr.decode();
    const hr = 2146435072;
    let Jr = 0;
    const dr = new TextEncoder;
    "encodeInto" in dr || (dr.encodeInto = function(MM, rM) {
      const iM = dr.encode(MM);
      return rM.set(iM), {
        read: MM.length,
        written: iM.length
      }
    });
    let yr, lr, Er, Ur = 0;

    function Gr(MM, rM) {
      return lr = MM, Er = MM.exports, yr = rM, IM = null, qM = null, VM = null, cM = null, rr = null, Er.crmU(), Er
    }

    function Cr(MM) {
      if (void 0 !== Er) return Er;
      void 0 !== MM && (Object.getPrototypeOf(MM) === Object.prototype ? ({
        module: MM
      } = MM) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const rM = sM();
      MM instanceof WebAssembly.Module || (MM = new WebAssembly.Module(MM));
      return Gr(new WebAssembly.Instance(MM, rM), MM)
    }
    async function er(MM) {
      if (void 0 !== Er) return Er;
      void 0 !== MM && (Object.getPrototypeOf(MM) === Object.prototype ? ({
        module_or_path: MM
      } = MM) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const rM = sM();
      ("string" === typeof MM || "function" === typeof Request && MM instanceof Request || "function" === typeof URL && MM instanceof URL) && (MM = fetch(MM));
      const {
        instance: iM,
        module: OM
      } = await async function(MM, rM) {
        if ("function" === typeof Response && MM instanceof Response) {
          if (!MM.ok) throw new Error(`failed to fetch Wasm: ${MM.status} ${MM.statusText} fetching '${MM.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(MM, rM)
          } catch (iM) {
            if (! function(MM) {
                switch (MM) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(MM.type) || "application/wasm" === MM.headers.get("Content-Type")) throw iM;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", iM)
          }
          const OM = await MM.arrayBuffer();
          return await WebAssembly.instantiate(OM, rM)
        } {
          const iM = await WebAssembly.instantiate(MM, rM);
          return iM instanceof WebAssembly.Instance ? {
            instance: iM,
            module: MM
          } : iM
        }
      }(await MM, rM);
      return Gr(iM, OM)
    }
  },
  37244: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM,
      i: () => PM,
      m: () => nM
    });
    var OM = iM(37253),
      SM = iM(3185),
      jM = iM(37257);
    const aM = {
      name: SM.e,
      url: () => new iM.U(iM(37266)),
      init: OM.default,
      bindings: OM
    };

    function PM() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM,
        rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aM,
        iM = arguments.length > 2 ? arguments[2] : void 0;
      return (0, jM.k)(MM, rM, iM)
    }

    function nM(MM) {
      return (0, SM.M)((() => MM), OM, aM)
    }
  },
  37238: (MM, rM, iM) => {
    function OM(MM, rM) {
      return new Error(`${MM}: ${rM instanceof Error?`${rM.name}: ${rM.message}`:String(rM)}`, {
        cause: rM
      })
    }
    iM.d(rM, {
      e: () => OM
    })
  },
  37233: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM,
      h: () => nM
    });
    var OM = iM(3188),
      SM = iM(7116),
      jM = iM(37238);

    function aM() {
      return new URL(new iM.U(iM(37242)).href, globalThis.location?.href).href
    }
    let PM = null;

    function nM() {
      return PM ??= (async () => (0, OM.E)(new URL(aM()), (0, SM.b)("bloxd_wasm_textures")))().catch((MM => {
        throw (0, jM.e)((0, OM.J)(MM), MM)
      })), PM
    }
  },
  37218: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM,
      f: () => jM,
      i: () => nM,
      k: () => aM,
      o: () => SM
    });
    const OM = /^alloc_failed (\d+) bytes$/;

    function SM(MM, rM) {
      return jM(MM, rM) ? `trap=alloc_failed ${rM} bytes` : `trap=${MM}`
    }

    function jM(MM, rM) {
      return "unreachable" === MM && rM > 0
    }

    function aM(MM, rM, iM) {
      const OM = function(MM) {
        return MM instanceof WebAssembly.RuntimeError ? /unreachable/i.test(MM.message) ? "unreachable" : /out of bounds/i.test(MM.message) ? "out_of_bounds" : "runtime_error" : (MM instanceof RangeError || MM instanceof Error && "InternalError" === MM.name) && /call stack|recursion/i.test(MM.message) ? "stack_overflow" : "js_error"
      }(MM);
      if ("unreachable" !== OM) return {
        kind: OM,
        panic: null,
        refusedBytes: 0
      };
      const SM = rM(),
        jM = iM();
      return {
        kind: OM,
        panic: jM > 0 ? null : SM,
        refusedBytes: jM
      }
    }
    const PM = 300;

    function nM(MM) {
      return MM.replace(/\s*\n\s*/g, " / ").slice(0, PM)
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);