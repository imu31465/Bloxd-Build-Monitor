export const id = 208;
export const ids = [208, 209];
export const modules = {
  36240: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      CAPPED_COUNTS_VISIT_CAP: () => KD,
      reportCappedWasmFailure: () => cD,
      reportUncappedWasmFailure: () => LD,
      reportWasmCrash: () => sD,
      reportWasmFailure: () => rD
    });
    var pD = wD(2925);

    function sD(DD) {
      (0, pD.reportClientError)("wasm_load", DD.message, DD.code)
    }
    const KD = pD.c - 4;

    function rD(DD, zD, wD) {
      (0, pD.reportClientError)(DD, zD, wD, !1)
    }

    function LD(DD, zD, wD) {
      (0, pD.reportClientError)(DD, zD, wD, !1, 1 / 0)
    }

    function cD(DD, zD, wD) {
      (0, pD.reportClientError)(DD, zD, wD, !1, KD)
    }
  },
  36237: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => JD,
      e: () => XD,
      g: () => VD,
      j: () => ED
    });
    var pD = wD(36257),
      sD = wD(2861),
      KD = wD(36280),
      rD = wD(2868),
      LD = wD(36240),
      cD = wD(2916),
      gD = wD(3214),
      RD = wD(3205),
      AD = wD(36244),
      UD = wD(2925),
      fD = wD(36248),
      ID = wD(36254),
      BD = wD(3716);
    let GD = !1;
    const hD = 40;
    var nD = wD(694);
    const MD = "bloxdWasmFailureReported";

    function OD() {
      return "undefined" === typeof WebAssembly
    }

    function JD() {
      return (0, pD.g)()
    }

    function ED() {
      if (OD()) return "this browser has no WebAssembly";
      const DD = (0, sD.m)();
      return "compile" === DD || "instantiate" === DD ? `the core wasm didn't load here (${(0,sD.h)()})` : null
    }
    async function QD(DD) {
      return await (0, KD.h)(KD.e, void 0, DD)
    }

    function XD() {
      OD() || (0, nD.c)((() => {
        QD()
      }))
    }

    function VD() {
      if (OD()) return async () => ((0, cD.i)("unsupported", 0), PD("unsupported", "This browser has no WebAssembly"), !1);
      const DD = {
        reloadFailedDownload: !0
      };
      return QD(DD), async () => {
        var zD;
        const wD = performance.now();
        await QD(DD);
        const pD = (performance.now() - wD) / 1e3;
        if ((0, sD.P)()) return (0, cD.i)("ready", pD), GD || (GD = !0, (0, sD.W)((() => {
          if ("call" !== (0, sD.m)()) return;
          const DD = (0, sD.k)(),
            zD = (0, AD.l)(DD, sD.B, sD.db),
            wD = (0, sD.r)().buffer.byteLength,
            pD = (0, AD.h)(zD.kind, zD.refusedBytes),
            KD = pD ? "alloc_failed" : zD.kind,
            rD = (0, fD.h)(wD),
            LD = pD ? `_r${Math.floor(Math.log2(zD.refusedBytes))}` : "",
            cD = (0, BD.c)();
          null === cD && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const gD = new Error((0, ID.d)(DD, wD, zD));
          if (DD instanceof Error && void 0 !== DD.stack) {
            const zD = DD.stack.split("\n"),
              wD = zD.length > hD ? [...zD.slice(0, hD / 2), ...zD.slice(-hD / 2)] : zD;
            gD.stack = wD.join("\n")
          }(0, UD.reportClientError)("wasm_load", gD, `wasm_call_${KD}_${null!==cD&&void 0!==cD?cD:"unnamed"}_m${rD}${LD}`)
        }))), (0, rD.K)(KD.e.url()) && (0, LD.reportCappedWasmFailure)("wasm_load", gD.d.message, gD.d.code), !0;
        const nD = RD.e[null !== (zD = (0, sD.m)()) && void 0 !== zD ? zD : "call"];
        return (0, cD.i)(nD, pD), PD(nD, (0, sD.h)()), !1
      }
    }

    function PD(DD, zD) {
      (0, RD.j)(MD, `Bloxd wasm ${DD}, so the game can't start: ${zD}`, zD, DD)
    }
  },
  36254: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD,
      h: () => gD,
      j: () => rD,
      m: () => AD
    });
    var pD = wD(36244),
      sD = wD(9);
    const KD = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function rD(DD) {
      if (DD instanceof WebAssembly.RuntimeError) return !0;
      const zD = DD instanceof Error ? DD.stack : void 0;
      return "string" === typeof zD && KD.test(zD)
    }

    function LD(DD, zD, wD) {
      var sD;
      const rD = DD instanceof Error ? DD.name : "thrown",
        LD = (DD instanceof Error && null !== (sD = DD.stack) && void 0 !== sD ? sD : "").split("\n").filter((DD => KD.test(DD))).slice(0, 8).map((DD => DD.trim())),
        cD = null === zD ? "wasm memory unknown" : `wasm memory ${Math.round(zD/2**20)} MB`,
        gD = null === wD.panic ? "" : `, panic: ${(0,pD.k)(wD.panic)}`,
        RD = `${rD}: ${DD instanceof Error?DD.message:String(DD)}`;
      return `${(0,pD.n)(wD.kind,wD.refusedBytes)} ${RD} (${cD})${gD}${LD.length>0?` | ${LD.join(" < ")}`:""}`
    }
    const cD = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function gD(DD) {
      var zD;
      let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(DD instanceof Error) || !cD.test(DD.message)) return {};
      if (!("detached" in wD)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, sD.W)(null === (zD = (0, sD.O)(wD, "detached")) || void 0 === zD ? void 0 : zD.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const RD = 500;

    function AD(DD) {
      let zD = "[object Object]";
      try {
        zD = String(DD)
      } catch {}
      if ("[object Object]" !== zD) return zD;
      try {
        var wD, pD;
        return null !== (wD = null === (pD = JSON.stringify(DD)) || void 0 === pD ? void 0 : pD.slice(0, RD)) && void 0 !== wD ? wD : zD
      } catch {
        return zD
      }
    }
  },
  36297: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/bloxd_wasm_bg.a1e1cea62f727684ff7c.wasm"
  },
  36273: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/bloxd_wasm_textures_bg.36acdd644992d9e64d77.wasm"
  },
  36285: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      zA: () => pD,
      EnvelopeKind: () => sD,
      wA: () => KD,
      PhysicsEngine: () => rD,
      pA: () => LD,
      sA: () => cD,
      KA: () => gD,
      rA: () => RD,
      LA: () => AD,
      cA: () => UD,
      gA: () => fD,
      RA: () => ID,
      AA: () => BD,
      UA: () => GD,
      default: () => Qz,
      initSync: () => Ez,
      fA: () => hD,
      IA: () => nD,
      BA: () => MD,
      hA: () => OD,
      nA: () => JD,
      MA: () => ED,
      OA: () => QD,
      JA: () => XD,
      EA: () => VD,
      QA: () => PD,
      XA: () => CD,
      VA: () => xD,
      PA: () => TD,
      CA: () => bD,
      xA: () => jD
    });
    class pD {
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, SD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        Mz.McbW(DD, 0)
      }
      TA() {
        const DD = Mz.WgwF(this.__wbg_ptr);
        if (DD[2]) throw Uz(DD[1]);
        return DD[0] >>> 0
      }
      bA() {
        return Mz.fKlz(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const DD = Mz.J06w();
        return this.__wbg_ptr = DD, SD.register(this, this.__wbg_ptr, this), this
      }
      jA() {
        return Mz.S2L8(this.__wbg_ptr) >>> 0
      }
      dA(DD) {
        const zD = Mz.AsVm(this.__wbg_ptr, DD);
        if (zD[2]) throw Uz(zD[1]);
        return zD[0] >>> 0
      }
      SA(DD) {
        const zD = Mz.fVE7(this.__wbg_ptr, DD);
        if (zD[2]) throw Uz(zD[1]);
        return zD[0] >>> 0
      }
    }
    Symbol.dispose && (pD.prototype[Symbol.dispose] = pD.prototype.free);
    const sD = Object.freeze({
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
    class KD {
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, iD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        Mz.Xtez(DD, 0)
      }
      WA(DD, zD) {
        const wD = Mz.DQI2(this.__wbg_ptr, DD, zD);
        if (wD[2]) throw Uz(wD[1]);
        return wD[0] >>> 0
      }
      NA(DD) {
        const zD = Mz.yTgA(this.__wbg_ptr, DD);
        if (zD[2]) throw Uz(zD[1]);
        return zD[0] >>> 0
      }
      ZA() {
        Mz.Znft(this.__wbg_ptr)
      }
      static yA() {
        return Mz.k4oM() >>> 0
      }
      kA() {
        return Mz.bqNH(this.__wbg_ptr) >>> 0
      }
      mA() {
        const DD = Mz.jqHl(this.__wbg_ptr);
        return 0 === DD[0] ? void 0 : DD[1]
      }
      eA() {
        return Mz.tDII(this.__wbg_ptr) >>> 0
      }
      oA() {
        return Mz.leSj(this.__wbg_ptr) >>> 0
      }
      static lA() {
        return Mz.uiBE() >>> 0
      }
      constructor() {
        const DD = Mz.nN1V();
        return this.__wbg_ptr = DD, iD.register(this, this.__wbg_ptr, this), this
      }
      aA() {
        return Mz.ktfo(this.__wbg_ptr) >>> 0
      }
      uA() {
        return Mz.MDO6(this.__wbg_ptr) >>> 0
      }
      vA() {
        return Mz.oomj(this.__wbg_ptr) >>> 0
      }
      iA(DD) {
        return Mz.sGrx(this.__wbg_ptr, DD) >>> 0
      }
      reserve(DD, zD) {
        const wD = Mz.Oijc(this.__wbg_ptr, DD, zD);
        if (wD[1]) throw Uz(wD[0])
      }
      YA(DD, zD) {
        const wD = cz(DD, Mz.WVOc),
          pD = Oz;
        Mz.HLv0(this.__wbg_ptr, wD, pD, zD)
      }
      text() {
        let DD, zD;
        try {
          const wD = Mz.mC3m(this.__wbg_ptr);
          return DD = wD[0], zD = wD[1], YD(wD[0], wD[1])
        } finally {
          Mz.gQde(DD, zD, 1)
        }
      }
    }
    Symbol.dispose && (KD.prototype[Symbol.dispose] = KD.prototype.free);
    class rD {
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, lD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        Mz.yF0o(DD, 0)
      }
      qA(DD, zD) {
        eD(zD, pD);
        const wD = Mz.ptYt(this.__wbg_ptr, DD, zD.__wbg_ptr);
        if (wD[2]) throw Uz(wD[1]);
        return wD[0] >>> 0
      }
      zU() {
        const DD = Mz.Qdkj(this.__wbg_ptr);
        if (DD[1]) throw Uz(DD[0])
      }
      rU(DD, zD, wD, pD, sD, KD, rD, cD, gD, RD, AD) {
        eD(DD, LD);
        const UD = Mz.tppD(this.__wbg_ptr, DD.__wbg_ptr, zD, wD, pD, sD, KD, rD, cD, gD, RD, AD);
        if (UD[2]) throw Uz(UD[1]);
        return UD[0]
      }
      LU() {
        const DD = Mz.WWVX(this.__wbg_ptr);
        var zD = oD(DD[0], DD[1]).slice();
        return Mz.gQde(DD[0], 8 * DD[1], 8), zD
      }
      cU() {
        return Mz.nxZE(this.__wbg_ptr) >>> 0
      }
      gU() {
        return Mz.eIMv(this.__wbg_ptr) >>> 0
      }
      RU() {
        return Mz.O4UP(this.__wbg_ptr) >>> 0
      }
      constructor(DD, zD, wD, pD, sD, KD, rD, LD) {
        const cD = Mz.ZHxJ(DD, zD, wD, pD, sD, KD, rD, LD);
        if (cD[2]) throw Uz(cD[1]);
        return this.__wbg_ptr = cD[0], lD.register(this, this.__wbg_ptr, this), this
      }
      fU(DD) {
        eD(DD, pD);
        const zD = Mz.PJ9I(this.__wbg_ptr, DD.__wbg_ptr);
        if (zD[2]) throw Uz(zD[1]);
        return zD[0] >>> 0
      }
      IU(DD) {
        const zD = Mz.Ffx9(this.__wbg_ptr, DD);
        if (zD[1]) throw Uz(zD[0])
      }
      BU() {
        return Mz.Ck3P(this.__wbg_ptr) >>> 0
      }
      resume(DD, zD) {
        eD(DD, LD), eD(zD, pD);
        const wD = Mz.GheG(this.__wbg_ptr, DD.__wbg_ptr, zD.__wbg_ptr);
        if (wD[2]) throw Uz(wD[1]);
        return wD[0] >>> 0
      }
      OU(DD) {
        const zD = Mz.f2oV(this.__wbg_ptr, DD);
        if (zD[1]) throw Uz(zD[0])
      }
      QU(DD, zD) {
        eD(zD, pD);
        const wD = Mz.h8Ir(this.__wbg_ptr, DD, zD.__wbg_ptr);
        if (wD[1]) throw Uz(wD[0])
      }
      PU(DD) {
        const zD = Rz(DD, Mz.WVOc),
          wD = Oz,
          pD = Mz.mzjh(this.__wbg_ptr, zD, wD);
        if (pD[1]) throw Uz(pD[0])
      }
      pU(DD, zD, wD, pD, sD, KD) {
        const rD = Mz.FYEh(this.__wbg_ptr, DD, zD, wD, pD, sD, KD);
        if (rD[1]) throw Uz(rD[0])
      }
      sU(DD, zD, wD, pD) {
        const sD = cz(DD, Mz.WVOc),
          KD = Oz,
          rD = Rz(zD, Mz.WVOc),
          LD = Oz,
          cD = Rz(wD, Mz.WVOc),
          gD = Oz,
          RD = Rz(pD, Mz.WVOc),
          AD = Oz,
          UD = Mz.t71l(this.__wbg_ptr, sD, KD, rD, LD, cD, gD, RD, AD);
        if (UD[1]) throw Uz(UD[0])
      }
      xU(DD, zD) {
        eD(zD, pD);
        const wD = Mz.Y3bd(this.__wbg_ptr, DD, zD.__wbg_ptr);
        if (wD[1]) throw Uz(wD[0])
      }
      UU(DD, zD, wD) {
        const pD = Mz.qfBN(this.__wbg_ptr, DD, zD, wD);
        if (pD[1]) throw Uz(pD[0])
      }
      bU(DD, zD, wD, pD, sD, KD, rD, cD, gD, RD) {
        eD(DD, LD);
        return Mz.Fxla(this.__wbg_ptr, DD.__wbg_ptr, zD, wD, pD, sD, KD, rD, cD, gD, RD)
      }
    }
    Symbol.dispose && (rD.prototype[Symbol.dispose] = rD.prototype.free);
    class LD {
      static __wrap(DD) {
        const zD = Object.create(LD.prototype);
        return zD.__wbg_ptr = DD, WD.register(zD, zD.__wbg_ptr, zD), zD
      }
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, WD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        Mz.vNlQ(DD, 0)
      }
      SU(DD) {
        const zD = Mz.MseA(this.__wbg_ptr, DD);
        if (zD[2]) throw Uz(zD[1]);
        return zD[0] >>> 0
      }
      iU(DD, zD, wD) {
        return Mz.HUgl(this.__wbg_ptr, DD, zD, wD)
      }
      lU(DD, zD, wD) {
        return Mz.e3i3(this.__wbg_ptr, DD, zD, wD) >>> 0
      }
      WU(DD, zD, wD, pD) {
        return 0 !== Mz.M1wO(this.__wbg_ptr, DD, zD, wD, pD)
      }
      NU() {
        Mz.RqJL(this.__wbg_ptr)
      }
      yU(DD) {
        const zD = Mz.SclY(this.__wbg_ptr, DD);
        if (zD[3]) throw Uz(zD[2]);
        var wD = uD(zD[0], zD[1]).slice();
        return Mz.gQde(zD[0], 1 * zD[1], 1), wD
      }
      evict(DD, zD) {
        return Mz.dCtS(this.__wbg_ptr, DD, zD) >>> 0
      }
      kU() {
        Mz.xk5s(this.__wbg_ptr)
      }
      mU(DD, zD, wD) {
        Mz.W5EA(this.__wbg_ptr, DD, zD, wD)
      }
      eU(DD) {
        const zD = Mz.CgMO(this.__wbg_ptr, DD);
        if (zD[1]) throw Uz(zD[0])
      }
      oU() {
        return Mz.M0AA(this.__wbg_ptr) >>> 0
      }
      aU() {
        return Mz.CUPo(this.__wbg_ptr) >>> 0
      }
      uU(DD, zD, wD) {
        Mz.tyBY(this.__wbg_ptr, DD, zD, wD)
      }
      vU(DD, zD, wD) {
        Mz.s8PQ(this.__wbg_ptr, DD, zD, wD)
      }
      tU() {
        return Mz.u2xe(this.__wbg_ptr) >>> 0
      }
      FU() {
        return Mz.aRlR(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const DD = Mz.f0xL();
        return this.__wbg_ptr = DD, WD.register(this, this.__wbg_ptr, this), this
      }
      static YU() {
        const DD = Mz.sAdo();
        return LD.__wrap(DD)
      }
      HU() {
        return Mz.ltA9(this.__wbg_ptr) >>> 0
      }
      qU() {
        return Mz.kS1t(this.__wbg_ptr) >>> 0
      }
      Df(DD, zD, wD, pD) {
        const sD = Mz.Oezk(this.__wbg_ptr, DD, zD, wD, pD);
        if (sD[1]) throw Uz(sD[0])
      }
      zf() {
        return Mz.pBoj(this.__wbg_ptr) >>> 0
      }
      wf() {
        return Mz.VAWS(this.__wbg_ptr) >>> 0
      }
      pf(DD, zD, wD, pD) {
        Mz.xF63(this.__wbg_ptr, DD, zD, wD, pD)
      }
      sf(DD) {
        Mz.rnZx(this.__wbg_ptr, DD)
      }
      rf(DD, zD, wD, pD, sD) {
        const KD = gz(zD, Mz.WVOc),
          rD = Oz,
          LD = cz(wD, Mz.WVOc),
          cD = Oz,
          gD = Rz(pD, Mz.WVOc),
          RD = Oz,
          AD = Mz.GWGf(this.__wbg_ptr, DD, KD, rD, LD, cD, gD, RD, sD);
        if (AD[1]) throw Uz(AD[0])
      }
      Kf(DD, zD, wD, pD) {
        const sD = gz(DD, Mz.WVOc),
          KD = Oz,
          rD = cz(zD, Mz.WVOc),
          LD = Oz,
          cD = Rz(wD, Mz.WVOc),
          gD = Oz,
          RD = gz(pD, Mz.WVOc),
          AD = Oz,
          UD = Mz.qBZC(this.__wbg_ptr, sD, KD, rD, LD, cD, gD, RD, AD);
        if (UD[1]) throw Uz(UD[0])
      }
      ff(DD) {
        const zD = gz(DD, Mz.WVOc),
          wD = Oz,
          pD = Mz.zRtv(this.__wbg_ptr, zD, wD);
        if (pD[1]) throw Uz(pD[0])
      }
      Bf() {
        return Mz.qBET(this.__wbg_ptr) >>> 0
      }
      Gf(DD) {
        const zD = Mz.juQp(this.__wbg_ptr, DD);
        if (zD[2]) throw Uz(zD[1]);
        return zD[0] >>> 0
      }
      steer() {
        return Mz.Qpl6(this.__wbg_ptr) >>> 0
      }
      hf() {
        const DD = Mz.bmo3(this.__wbg_ptr);
        var zD = oD(DD[0], DD[1]).slice();
        return Mz.gQde(DD[0], 8 * DD[1], 8), zD
      }
      Mf() {
        return Mz.z4wv(this.__wbg_ptr) >>> 0
      }
      hU() {
        const DD = Mz.j8d8(this.__wbg_ptr);
        var zD, wD, pD = (zD = DD[0], wD = DD[1], zD >>>= 0, (null !== FD && 0 !== FD.byteLength || (FD = new Int32Array(Mz.memory.buffer)), FD).subarray(zD / 4, zD / 4 + wD)).slice();
        return Mz.gQde(DD[0], 4 * DD[1], 4), pD
      }
    }
    Symbol.dispose && (LD.prototype[Symbol.dispose] = LD.prototype.free);
    class cD {
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ND.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        Mz.Z8kh(DD, 0)
      }
      Jf(DD) {
        const zD = cz(DD, Mz.WVOc),
          wD = Oz,
          pD = Mz.LkxY(this.__wbg_ptr, zD, wD);
        if (pD[1]) throw Uz(pD[0])
      }
      Ef() {
        return Mz.hmOL(this.__wbg_ptr) >>> 0
      }
      Qf() {
        return Mz.muvg(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const DD = Mz.MXQI();
        return this.__wbg_ptr = DD, ND.register(this, this.__wbg_ptr, this), this
      }
      run(DD, zD) {
        eD(DD, LD);
        const wD = Mz.GKQX(this.__wbg_ptr, DD.__wbg_ptr, zD);
        if (wD[2]) throw Uz(wD[1]);
        return wD[0] >>> 0
      }
      Xf(DD) {
        const zD = cz(DD, Mz.WVOc),
          wD = Oz;
        Mz.O87p(this.__wbg_ptr, zD, wD)
      }
      Vf(DD) {
        const zD = cz(DD, Mz.WVOc),
          wD = Oz;
        Mz.Zji1(this.__wbg_ptr, zD, wD)
      }
    }
    Symbol.dispose && (cD.prototype[Symbol.dispose] = cD.prototype.free);
    class gD {
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ZD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        Mz.STx2(DD, 0)
      }
      Cf(DD, zD) {
        const wD = gz(DD, Mz.WVOc),
          pD = Oz;
        return Mz.mPpV(this.__wbg_ptr, wD, pD, zD) >>> 0
      }
      xf(DD, zD, wD) {
        eD(DD, LD);
        const pD = gz(wD, Mz.WVOc),
          sD = Oz,
          KD = Mz.aAHY(this.__wbg_ptr, DD.__wbg_ptr, zD, pD, sD);
        if (KD[2]) throw Uz(KD[1]);
        return KD[0] >>> 0
      }
      Pf(DD) {
        return Mz.p0zj(this.__wbg_ptr, DD) >>> 0
      }
      constructor() {
        const DD = Mz.saih();
        return this.__wbg_ptr = DD, ZD.register(this, this.__wbg_ptr, this), this
      }
      scan(DD, zD) {
        eD(DD, LD);
        const wD = Mz.AVsQ(this.__wbg_ptr, DD.__wbg_ptr, zD);
        if (wD[2]) throw Uz(wD[1]);
        return wD[0] >>> 0
      }
      jf(DD) {
        const zD = gz(DD, Mz.WVOc),
          wD = Oz;
        Mz.XEr5(this.__wbg_ptr, zD, wD)
      }
      bf() {
        return Mz.o1GC(this.__wbg_ptr) >>> 0
      }
      Tf() {
        return Mz.hUi9(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (gD.prototype[Symbol.dispose] = gD.prototype.free);
    class RD {
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, yD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        Mz.FT1Q(DD, 0)
      }
      Sf(DD) {
        const zD = Mz.SWi3(this.__wbg_ptr, DD);
        if (zD[2]) throw Uz(zD[1]);
        return zD[0] >>> 0
      }
      compute(DD, zD, wD, pD) {
        var sD = rz(pD) ? 0 : Az(pD, Mz.WVOc, Mz.WlAG),
          KD = Oz;
        const rD = Mz.pnXP(this.__wbg_ptr, DD, rz(zD) ? Number.MAX_SAFE_INTEGER : zD | 0, wD, sD, KD);
        if (rD[2]) throw Uz(rD[1]);
        return rD[0] >>> 0
      }
      Wf(DD) {
        const zD = Az(DD, Mz.WVOc, Mz.WlAG),
          wD = Oz;
        Mz.sPSp(this.__wbg_ptr, zD, wD)
      }
      Zf() {
        return Mz.iVLa(this.__wbg_ptr)
      }
      yf(DD) {
        return Mz.LfDf(this.__wbg_ptr, DD) >>> 0
      }
      kf() {
        return Mz.RCKZ(this.__wbg_ptr) >>> 0
      }
      mf() {
        return Mz.GNLm(this.__wbg_ptr) >>> 0
      }
      ef(DD, zD) {
        const wD = Mz.RKgP(this.__wbg_ptr, DD, zD);
        if (wD[1]) throw Uz(wD[0])
      }
      af() {
        return Mz.Jz9E(this.__wbg_ptr) >>> 0
      }
      uf() {
        return Mz.QKIa(this.__wbg_ptr) >>> 0
      }
      vf() {
        return Mz.b1Ls(this.__wbg_ptr) >>> 0
      }
      lf(DD, zD, wD) {
        const pD = cz(DD, Mz.WVOc),
          sD = Oz,
          KD = cz(zD, Mz.WVOc),
          rD = Oz,
          LD = Mz.n4SZ(this.__wbg_ptr, pD, sD, KD, rD, wD);
        if (LD[1]) throw Uz(LD[0])
      }
      Ff() {
        return Mz.srhO(this.__wbg_ptr) >>> 0
      }
      mesh(DD, zD, wD, pD, sD) {
        const KD = Mz.kBgH(this.__wbg_ptr, DD, zD, wD, pD, sD);
        if (KD[2]) throw Uz(KD[1]);
        return KD[0] >>> 0
      }
      constructor(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD, hD, nD, MD) {
        const OD = Lz(DD, Mz.WVOc),
          JD = Oz,
          ED = Rz(zD, Mz.WVOc),
          QD = Oz,
          XD = cz(wD, Mz.WVOc),
          VD = Oz,
          PD = gz(pD, Mz.WVOc),
          CD = Oz,
          xD = gz(sD, Mz.WVOc),
          TD = Oz,
          bD = cz(KD, Mz.WVOc),
          jD = Oz,
          dD = cz(rD, Mz.WVOc),
          SD = Oz,
          iD = Rz(LD, Mz.WVOc),
          lD = Oz,
          WD = Rz(cD, Mz.WVOc),
          ND = Oz,
          ZD = gz(gD, Mz.WVOc),
          kD = Oz;
        var mD = rz(RD) ? 0 : Lz(RD, Mz.WVOc),
          eD = Oz;
        const oD = cz(AD, Mz.WVOc),
          aD = Oz,
          uD = gz(UD, Mz.WVOc),
          vD = Oz;
        var tD = rz(fD) ? 0 : gz(fD, Mz.WVOc),
          FD = Oz;
        const YD = Rz(ID, Mz.WVOc),
          HD = Oz,
          qD = Mz.XaAM(OD, JD, ED, QD, XD, VD, PD, CD, xD, TD, bD, jD, dD, SD, iD, lD, WD, ND, ZD, kD, mD, eD, oD, aD, uD, vD, tD, FD, YD, HD, BD, GD, hD, nD, MD);
        if (qD[2]) throw Uz(qD[1]);
        return this.__wbg_ptr = qD[0], yD.register(this, this.__wbg_ptr, this), this
      }
      tf(DD, zD) {
        const wD = cz(DD, Mz.WVOc),
          pD = Oz,
          sD = Mz.GtSn(this.__wbg_ptr, wD, pD, zD);
        if (sD[3]) throw Uz(sD[2]);
        var KD = uD(sD[0], sD[1]).slice();
        return Mz.gQde(sD[0], 1 * sD[1], 1), KD
      }
      Yf(DD) {
        Mz.LPAR(this.__wbg_ptr, rz(DD) ? 16777215 : DD)
      }
      Hf(DD) {
        return Mz.Q5Oz(this.__wbg_ptr, DD) >>> 0
      }
      DI() {
        return Mz.QCju(this.__wbg_ptr) >>> 0
      }
      qf() {
        const DD = Mz.SWqT(this.__wbg_ptr);
        if (DD[2]) throw Uz(DD[1]);
        return 0 !== DD[0]
      }
      zI() {
        return Mz.KXBh(this.__wbg_ptr) >>> 0
      }
      wI() {
        return Mz.v5VW(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (RD.prototype[Symbol.dispose] = RD.prototype.free);
    class AD {
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, kD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        Mz.ftx9(DD, 0)
      }
      compute(DD, zD, wD, pD) {
        var sD = rz(pD) ? 0 : Az(pD, Mz.WVOc, Mz.WlAG),
          KD = Oz;
        const rD = Mz.XFPB(this.__wbg_ptr, DD, rz(zD) ? Number.MAX_SAFE_INTEGER : zD | 0, wD, sD, KD);
        if (rD[2]) throw Uz(rD[1]);
        return rD[0] >>> 0
      }
      Wf(DD) {
        const zD = Az(DD, Mz.WVOc, Mz.WlAG),
          wD = Oz;
        Mz.FqjK(this.__wbg_ptr, zD, wD)
      }
      uf() {
        return Mz.ZkDe(this.__wbg_ptr) >>> 0
      }
      vf() {
        return Mz.T9NU(this.__wbg_ptr) >>> 0
      }
      pI(DD) {
        const zD = Mz.Sr6R(this.__wbg_ptr, DD);
        if (zD[2]) throw Uz(zD[1]);
        return zD[0] >>> 0
      }
      constructor(DD, zD, wD, pD, sD, KD) {
        const rD = Lz(DD, Mz.WVOc),
          LD = Oz,
          cD = Rz(zD, Mz.WVOc),
          gD = Oz,
          RD = cz(wD, Mz.WVOc),
          AD = Oz,
          UD = gz(pD, Mz.WVOc),
          fD = Oz,
          ID = Mz.M5kn(rD, LD, cD, gD, RD, AD, UD, fD, sD, KD);
        if (ID[2]) throw Uz(ID[1]);
        return this.__wbg_ptr = ID[0], kD.register(this, this.__wbg_ptr, this), this
      }
      DI() {
        return Mz.aVuZ(this.__wbg_ptr) >>> 0
      }
      qf() {
        const DD = Mz.wMUh(this.__wbg_ptr);
        if (DD[2]) throw Uz(DD[1]);
        return 0 !== DD[0]
      }
      zI() {
        return Mz.c2rm(this.__wbg_ptr) >>> 0
      }
    }

    function UD() {
      const DD = Mz.fX0l();
      var zD = aD(DD[0], DD[1]).slice();
      return Mz.gQde(DD[0], 4 * DD[1], 4), zD
    }

    function fD(DD, zD) {
      let wD, pD;
      try {
        const sD = Lz(DD, Mz.WVOc),
          KD = Oz,
          rD = Az(zD, Mz.WVOc, Mz.WlAG),
          LD = Oz,
          cD = Mz.Djt9(sD, KD, rD, LD);
        return wD = cD[0], pD = cD[1], YD(cD[0], cD[1])
      } finally {
        Mz.gQde(wD, pD, 1)
      }
    }

    function ID() {
      const DD = Mz.Uwo2();
      var zD = aD(DD[0], DD[1]).slice();
      return Mz.gQde(DD[0], 4 * DD[1], 4), zD
    }

    function BD(DD) {
      return 0 !== Mz.cbxe(DD)
    }

    function GD(DD, zD) {
      const wD = Az(DD, Mz.WVOc, Mz.WlAG),
        pD = Oz,
        sD = Mz.F2Gh(wD, pD, zD);
      if (sD[1]) throw Uz(sD[0])
    }

    function hD() {
      Mz.mTZR()
    }

    function nD() {
      return Mz.WrTh() >>> 0
    }

    function MD(DD) {
      return 0 !== Mz.pOxO(DD)
    }

    function OD(DD) {
      return 0 !== Mz.sROC(DD)
    }

    function JD(DD) {
      Mz.CO6A(DD)
    }

    function ED() {
      return Mz.KNyv() >>> 0
    }

    function QD() {
      return Mz.z70A() >>> 0
    }

    function XD() {
      return 0 !== Mz.rCme()
    }

    function VD() {
      const DD = Mz.HMLY();
      var zD = aD(DD[0], DD[1]).slice();
      return Mz.gQde(DD[0], 4 * DD[1], 4), zD
    }

    function PD() {
      const DD = Mz.bvku();
      var zD = aD(DD[0], DD[1]).slice();
      return Mz.gQde(DD[0], 4 * DD[1], 4), zD
    }

    function CD() {
      const DD = Mz.qK8W();
      var zD = aD(DD[0], DD[1]).slice();
      return Mz.gQde(DD[0], 4 * DD[1], 4), zD
    }

    function xD() {
      return Mz.VfEi() >>> 0
    }

    function TD() {
      Mz.GkPu()
    }

    function bD() {
      let DD, zD;
      try {
        const wD = Mz.Fhir();
        return DD = wD[0], zD = wD[1], YD(wD[0], wD[1])
      } finally {
        Mz.gQde(DD, zD, 1)
      }
    }

    function jD(DD) {
      Mz.amE4(mD(DD))
    }

    function dD() {
      return {
        __proto__: null,
        SDXV: {
          __proto__: null,
          C2qh: function(DD, zD) {
            return mD(Error(YD(DD, zD)))
          },
          FllA: function(DD, zD) {
            throw new Error(YD(DD, zD))
          },
          mw1u: function(DD) {
            pz(DD).call()
          },
          OZmb: function(DD, zD) {
            console.error(YD(DD, zD))
          },
          UgkJ: function() {
            return performance.now()
          },
          So7q: function(DD) {
            Uz(DD)
          }
        }
      }
    }
    Symbol.dispose && (AD.prototype[Symbol.dispose] = AD.prototype.free);
    const SD = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((DD => Mz.McbW(DD, 1))),
      iD = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((DD => Mz.Xtez(DD, 1))),
      lD = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((DD => Mz.yF0o(DD, 1))),
      WD = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((DD => Mz.vNlQ(DD, 1))),
      ND = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((DD => Mz.Z8kh(DD, 1))),
      ZD = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((DD => Mz.STx2(DD, 1))),
      yD = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((DD => Mz.FT1Q(DD, 1))),
      kD = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((DD => Mz.ftx9(DD, 1)));

    function mD(DD) {
      Kz === sz.length && sz.push(sz.length + 1);
      const zD = Kz;
      return Kz = sz[zD], sz[zD] = DD, zD
    }

    function eD(DD, zD) {
      if (!(DD instanceof zD)) throw new Error(`expected instance of ${zD.name}`)
    }

    function oD(DD, zD) {
      return DD >>>= 0, tD().subarray(DD / 8, DD / 8 + zD)
    }

    function aD(DD, zD) {
      return DD >>>= 0, Dz().subarray(DD / 4, DD / 4 + zD)
    }

    function uD(DD, zD) {
      return DD >>>= 0, wz().subarray(DD / 1, DD / 1 + zD)
    }
    let vD = null;

    function tD() {
      return null !== vD && 0 !== vD.byteLength || (vD = new Float64Array(Mz.memory.buffer)), vD
    }
    let FD = null;

    function YD(DD, zD) {
      return function(DD, zD) {
        Bz += zD, Bz >= Iz && (fz = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), fz.decode(), Bz = zD);
        return fz.decode(wz().subarray(DD, DD + zD))
      }(DD >>> 0, zD)
    }
    let HD = null;
    let qD = null;

    function Dz() {
      return null !== qD && 0 !== qD.byteLength || (qD = new Uint32Array(Mz.memory.buffer)), qD
    }
    let zz = null;

    function wz() {
      return null !== zz && 0 !== zz.byteLength || (zz = new Uint8Array(Mz.memory.buffer)), zz
    }

    function pz(DD) {
      return sz[DD]
    }
    let sz = new Array(1024).fill(void 0);
    sz.push(void 0, null, !0, !1);
    let Kz = sz.length;

    function rz(DD) {
      return void 0 === DD || null === DD
    }

    function Lz(DD, zD) {
      const wD = zD(2 * DD.length, 2) >>> 0;
      return (null !== HD && 0 !== HD.byteLength || (HD = new Uint16Array(Mz.memory.buffer)), HD).set(DD, wD / 2), Oz = DD.length, wD
    }

    function cz(DD, zD) {
      const wD = zD(4 * DD.length, 4) >>> 0;
      return Dz().set(DD, wD / 4), Oz = DD.length, wD
    }

    function gz(DD, zD) {
      const wD = zD(1 * DD.length, 1) >>> 0;
      return wz().set(DD, wD / 1), Oz = DD.length, wD
    }

    function Rz(DD, zD) {
      const wD = zD(8 * DD.length, 8) >>> 0;
      return tD().set(DD, wD / 8), Oz = DD.length, wD
    }

    function Az(DD, zD, wD) {
      if (void 0 === wD) {
        const wD = Gz.encode(DD),
          pD = zD(wD.length, 1) >>> 0;
        return wz().subarray(pD, pD + wD.length).set(wD), Oz = wD.length, pD
      }
      let pD = DD.length,
        sD = zD(pD, 1) >>> 0;
      const KD = wz();
      let rD = 0;
      for (; rD < pD; rD++) {
        const zD = DD.charCodeAt(rD);
        if (zD > 127) break;
        KD[sD + rD] = zD
      }
      if (rD !== pD) {
        0 !== rD && (DD = DD.slice(rD)), sD = wD(sD, pD, pD = rD + 3 * DD.length, 1) >>> 0;
        const zD = wz().subarray(sD + rD, sD + pD);
        rD += Gz.encodeInto(DD, zD).written, sD = wD(sD, pD, rD, 1) >>> 0
      }
      return Oz = rD, sD
    }

    function Uz(DD) {
      const zD = pz(DD);
      return function(DD) {
        DD < 1028 || (sz[DD] = Kz, Kz = DD)
      }(DD), zD
    }
    let fz = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    fz.decode();
    const Iz = 2146435072;
    let Bz = 0;
    const Gz = new TextEncoder;
    "encodeInto" in Gz || (Gz.encodeInto = function(DD, zD) {
      const wD = Gz.encode(DD);
      return zD.set(wD), {
        read: DD.length,
        written: wD.length
      }
    });
    let hz, nz, Mz, Oz = 0;

    function Jz(DD, zD) {
      return nz = DD, Mz = DD.exports, hz = zD, vD = null, FD = null, HD = null, qD = null, zz = null, Mz.GDUf(), Mz
    }

    function Ez(DD) {
      if (void 0 !== Mz) return Mz;
      void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
        module: DD
      } = DD) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const zD = dD();
      DD instanceof WebAssembly.Module || (DD = new WebAssembly.Module(DD));
      return Jz(new WebAssembly.Instance(DD, zD), DD)
    }
    async function Qz(DD) {
      if (void 0 !== Mz) return Mz;
      void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
        module_or_path: DD
      } = DD) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const zD = dD();
      ("string" === typeof DD || "function" === typeof Request && DD instanceof Request || "function" === typeof URL && DD instanceof URL) && (DD = fetch(DD));
      const {
        instance: wD,
        module: pD
      } = await async function(DD, zD) {
        if ("function" === typeof Response && DD instanceof Response) {
          if (!DD.ok) throw new Error(`failed to fetch Wasm: ${DD.status} ${DD.statusText} fetching '${DD.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(DD, zD)
          } catch (wD) {
            if (! function(DD) {
                switch (DD) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(DD.type) || "application/wasm" === DD.headers.get("Content-Type")) throw wD;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", wD)
          }
          const pD = await DD.arrayBuffer();
          return await WebAssembly.instantiate(pD, zD)
        } {
          const wD = await WebAssembly.instantiate(DD, zD);
          return wD instanceof WebAssembly.Instance ? {
            instance: wD,
            module: DD
          } : wD
        }
      }(await DD, zD);
      return Jz(wD, pD)
    }
  },
  36280: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD,
      h: () => LD,
      j: () => cD
    });
    var pD = wD(36285),
      sD = wD(2861),
      KD = wD(36290);
    const rD = {
      name: sD.e,
      url: () => new wD.U(wD(36297)),
      init: pD.default,
      bindings: pD
    };

    function LD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rD,
        zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rD,
        wD = arguments.length > 2 ? arguments[2] : void 0;
      return (0, KD.m)(DD, zD, wD)
    }

    function cD(DD) {
      return (0, sD.I)((() => DD), pD, rD)
    }
  },
  36264: (DD, zD, wD) => {
    function pD(DD, zD) {
      return new Error(`${DD}: ${zD instanceof Error?`${zD.name}: ${zD.message}`:String(zD)}`, {
        cause: zD
      })
    }
    wD.d(zD, {
      e: () => pD
    })
  },
  36257: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD,
      g: () => cD
    });
    var pD = wD(2868),
      sD = wD(6653),
      KD = wD(36264);

    function rD() {
      return new URL(new wD.U(wD(36273)).href, globalThis.location?.href).href
    }
    let LD = null;

    function cD() {
      return LD ??= (async () => (0, pD.B)(new URL(rD()), (0, sD.d)("bloxd_wasm_textures")))().catch((DD => {
        throw (0, KD.e)((0, pD.G)(DD), DD)
      })), LD
    }
  },
  36244: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD,
      h: () => KD,
      k: () => cD,
      l: () => rD,
      n: () => sD
    });
    const pD = /^alloc_failed (\d+) bytes$/;

    function sD(DD, zD) {
      return KD(DD, zD) ? `trap=alloc_failed ${zD} bytes` : `trap=${DD}`
    }

    function KD(DD, zD) {
      return "unreachable" === DD && zD > 0
    }

    function rD(DD, zD, wD) {
      const pD = function(DD) {
        return DD instanceof WebAssembly.RuntimeError ? /unreachable/i.test(DD.message) ? "unreachable" : /out of bounds/i.test(DD.message) ? "out_of_bounds" : "runtime_error" : (DD instanceof RangeError || DD instanceof Error && "InternalError" === DD.name) && /call stack|recursion/i.test(DD.message) ? "stack_overflow" : "js_error"
      }(DD);
      if ("unreachable" !== pD) return {
        kind: pD,
        panic: null,
        refusedBytes: 0
      };
      const sD = zD(),
        KD = wD();
      return {
        kind: pD,
        panic: KD > 0 ? null : sD,
        refusedBytes: KD
      }
    }
    const LD = 300;

    function cD(DD) {
      return DD.replace(/\s*\n\s*/g, " / ").slice(0, LD)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);