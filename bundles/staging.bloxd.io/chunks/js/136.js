export const id = 136;
export const ids = [136];
export const modules = {
  6763: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      loadPageShaderPackCompiler: () => zI
    });
    var TB = {};
    ZB.r(TB), ZB.d(TB, {
      iJB: () => JB,
      yBB: () => oB,
      default: () => AB,
      pJB: () => GB,
      aJB: () => vB,
      initSync: () => lB,
      zh: () => kB,
      qTB: () => cB,
      HJB: () => nB,
      MJB: () => hB,
      XM: () => zB,
      jJB: () => FB,
      rM: () => NB,
      PJB: () => gB
    });
    class JB {
      static __wrap(BB) {
        const IB = Object.create(JB.prototype);
        return IB.__wbg_ptr = BB, yB.register(IB, IB.__wbg_ptr, IB), IB
      }
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, yB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        eB.uWPm(BB, 0)
      }
      get RJB() {
        let BB, IB;
        try {
          const ZB = eB.Q2Ew(this.__wbg_ptr);
          return BB = ZB[0], IB = ZB[1], sB(ZB[0], ZB[1])
        } finally {
          eB.OnDV(BB, IB, 1)
        }
      }
      get features() {
        const BB = eB.APfk(this.__wbg_ptr);
        var IB = WB(BB[0], BB[1]);
        return eB.OnDV(BB[0], 4 * BB[1], 4), IB
      }
      get hooks() {
        const BB = eB.VS93(this.__wbg_ptr);
        var IB = dB(BB[0], BB[1]).slice();
        return eB.OnDV(BB[0], 1 * BB[1], 1), IB
      }
      mapValidationMessage(BB, IB, ZB, TB, JB) {
        let oB, GB;
        try {
          const cB = eB.Zncz(this.__wbg_ptr, BB, IB, ZB, UB(TB), UB(JB));
          var vB = cB[0],
            kB = cB[1];
          if (cB[3]) throw vB = 0, kB = 0, jB(cB[2]);
          return oB = vB, GB = kB, sB(vB, kB)
        } finally {
          eB.OnDV(oB, GB, 1)
        }
      }
      get moduleCodes() {
        const BB = eB.aBTK(this.__wbg_ptr);
        var IB = WB(BB[0], BB[1]);
        return eB.OnDV(BB[0], 4 * BB[1], 4), IB
      }
      get rJB() {
        let BB, IB;
        try {
          const ZB = eB.INYl(this.__wbg_ptr);
          return BB = ZB[0], IB = ZB[1], sB(ZB[0], ZB[1])
        } finally {
          eB.OnDV(BB, IB, 1)
        }
      }
      get reads() {
        const BB = eB.nvWZ(this.__wbg_ptr);
        var IB = WB(BB[0], BB[1]);
        return eB.OnDV(BB[0], 4 * BB[1], 4), IB
      }
      get validationModuleCodes() {
        const BB = eB.kn67(this.__wbg_ptr);
        var IB = WB(BB[0], BB[1]);
        return eB.OnDV(BB[0], 4 * BB[1], 4), IB
      }
      get validationModuleKeys() {
        const BB = eB.lAIK(this.__wbg_ptr);
        var IB = dB(BB[0], BB[1]).slice();
        return eB.OnDV(BB[0], 1 * BB[1], 1), IB
      }
      get variantFlags() {
        const BB = eB.Xr2T(this.__wbg_ptr);
        var IB = dB(BB[0], BB[1]).slice();
        return eB.OnDV(BB[0], 1 * BB[1], 1), IB
      }
    }

    function oB(BB, IB, ZB, TB, oB, GB, vB) {
      const kB = MB(BB, eB.MMLa),
        cB = uB,
        nB = MB(IB, eB.MMLa),
        hB = uB,
        zB = MB(ZB, eB.MMLa),
        FB = uB,
        NB = HB(TB, eB.MMLa),
        gB = uB,
        qB = MB(oB, eB.MMLa),
        yB = uB,
        UB = MB(GB, eB.MMLa),
        WB = uB,
        dB = MB(vB, eB.MMLa),
        CB = uB,
        QB = eB.ptke(kB, cB, nB, hB, zB, FB, NB, gB, qB, yB, UB, WB, dB, CB);
      if (QB[2]) throw jB(QB[1]);
      return JB.__wrap(QB[0])
    }

    function GB() {
      const BB = eB.Ifuy();
      var IB = WB(BB[0], BB[1]);
      return eB.OnDV(BB[0], 4 * BB[1], 4), IB
    }

    function vB() {
      const BB = eB.oxHz();
      var IB = WB(BB[0], BB[1]);
      return eB.OnDV(BB[0], 4 * BB[1], 4), IB
    }

    function kB() {
      eB.h7lx()
    }

    function cB(BB, IB, ZB, TB, JB) {
      let oB, GB;
      try {
        const cB = MB(BB, eB.MMLa),
          nB = uB,
          hB = HB(IB, eB.MMLa),
          zB = uB,
          FB = MB(ZB, eB.MMLa),
          NB = uB,
          gB = HB(TB, eB.MMLa),
          qB = uB,
          yB = function(BB, IB) {
            const ZB = IB(1 * BB.length, 1) >>> 0;
            return YB().set(BB, ZB / 1), uB = BB.length, ZB
          }(JB, eB.MMLa),
          UB = uB,
          WB = eB.r2Kz(cB, nB, hB, zB, FB, NB, gB, qB, yB, UB);
        var vB = WB[0],
          kB = WB[1];
        if (WB[3]) throw vB = 0, kB = 0, jB(WB[2]);
        return oB = vB, GB = kB, sB(vB, kB)
      } finally {
        eB.OnDV(oB, GB, 1)
      }
    }

    function nB() {
      let BB, IB;
      try {
        const ZB = eB.oDSS();
        return BB = ZB[0], IB = ZB[1], sB(ZB[0], ZB[1])
      } finally {
        eB.OnDV(BB, IB, 1)
      }
    }

    function hB(BB) {
      let IB, ZB;
      try {
        const oB = eB.xK3z(BB);
        var TB = oB[0],
          JB = oB[1];
        if (oB[3]) throw TB = 0, JB = 0, jB(oB[2]);
        return IB = TB, ZB = JB, sB(TB, JB)
      } finally {
        eB.OnDV(IB, ZB, 1)
      }
    }

    function zB() {
      return eB.RsbU() >>> 0
    }

    function FB() {
      let BB, IB;
      try {
        const ZB = eB.kw8o();
        return BB = ZB[0], IB = ZB[1], sB(ZB[0], ZB[1])
      } finally {
        eB.OnDV(BB, IB, 1)
      }
    }

    function NB(BB, IB) {
      let ZB, TB;
      try {
        const GB = MB(BB, eB.MMLa),
          vB = uB,
          kB = HB(IB, eB.MMLa),
          cB = uB,
          nB = eB.wrsI(GB, vB, kB, cB);
        var JB = nB[0],
          oB = nB[1];
        if (nB[3]) throw JB = 0, oB = 0, jB(nB[2]);
        return ZB = JB, TB = oB, sB(JB, oB)
      } finally {
        eB.OnDV(ZB, TB, 1)
      }
    }

    function gB(BB) {
      let IB, ZB;
      try {
        const oB = eB.SXsW(UB(BB));
        var TB = oB[0],
          JB = oB[1];
        if (oB[3]) throw TB = 0, JB = 0, jB(oB[2]);
        return IB = TB, ZB = JB, sB(TB, JB)
      } finally {
        eB.OnDV(IB, ZB, 1)
      }
    }

    function qB() {
      return {
        __proto__: null,
        p8Li: {
          __proto__: null,
          mK4P: function(BB, IB) {
            return UB(Error(sB(BB, IB)))
          },
          E4kP: function(BB) {
            return null === iB(BB)
          },
          IBC2: function(BB) {
            return "string" === typeof iB(BB)
          },
          qxve: function(BB, IB) {
            const ZB = iB(IB),
              TB = "string" === typeof ZB ? ZB : void 0;
            var JB, oB = void 0 === (JB = TB) || null === JB ? 0 : function(BB, IB, ZB) {
                if (void 0 === ZB) {
                  const ZB = mB.encode(BB),
                    TB = IB(ZB.length, 1) >>> 0;
                  return YB().subarray(TB, TB + ZB.length).set(ZB), uB = ZB.length, TB
                }
                let TB = BB.length,
                  JB = IB(TB, 1) >>> 0;
                const oB = YB();
                let GB = 0;
                for (; GB < TB; GB++) {
                  const IB = BB.charCodeAt(GB);
                  if (IB > 127) break;
                  oB[JB + GB] = IB
                }
                if (GB !== TB) {
                  0 !== GB && (BB = BB.slice(GB)), JB = ZB(JB, TB, TB = GB + 3 * BB.length, 1) >>> 0;
                  const IB = YB().subarray(JB + GB, JB + TB);
                  GB += mB.encodeInto(BB, IB).written, JB = ZB(JB, TB, GB, 1) >>> 0
                }
                return uB = GB, JB
              }(TB, eB.MMLa, eB.f3NN),
              GB = uB;
            QB().setInt32(BB + 4, GB, !0), QB().setInt32(BB + 0, oB, !0)
          },
          j96E: function(BB, IB) {
            throw new Error(sB(BB, IB))
          },
          Ad4t: function(BB, IB) {
            return iB(BB).charCodeAt(IB >>> 0)
          },
          OZuj: function(BB, IB) {
            console.error(sB(BB, IB))
          },
          r4aL: function(BB) {
            return iB(BB).length
          },
          xOWH: function(BB, IB) {
            return UB(sB(BB, IB))
          },
          EatJ: function(BB) {
            jB(BB)
          }
        }
      }
    }
    Symbol.dispose && (JB.prototype[Symbol.dispose] = JB.prototype.free);
    const yB = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((BB => eB.uWPm(BB, 1)));

    function UB(BB) {
      aB === pB.length && pB.push(pB.length + 1);
      const IB = aB;
      return aB = pB[IB], pB[IB] = BB, IB
    }

    function WB(BB, IB) {
      BB >>>= 0;
      const ZB = QB(),
        TB = [];
      for (let JB = BB; JB < BB + 4 * IB; JB += 4) TB.push(jB(ZB.getUint32(JB, !0)));
      return TB
    }

    function dB(BB, IB) {
      return BB >>>= 0, YB().subarray(BB / 1, BB / 1 + IB)
    }
    let CB = null;

    function QB() {
      return null !== CB && CB.buffer === eB.memory.buffer || (CB = new DataView(eB.memory.buffer)), CB
    }

    function sB(BB, IB) {
      return function(BB, IB) {
        rB += IB, rB >= RB && (PB = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), PB.decode(), rB = IB);
        return PB.decode(YB().subarray(BB, BB + IB))
      }(BB >>> 0, IB)
    }
    let wB = null;
    let OB = null;

    function YB() {
      return null !== OB && 0 !== OB.byteLength || (OB = new Uint8Array(eB.memory.buffer)), OB
    }

    function iB(BB) {
      return pB[BB]
    }
    let pB = new Array(1024).fill(void 0);
    pB.push(void 0, null, !0, !1);
    let aB = pB.length;

    function HB(BB, IB) {
      const ZB = IB(4 * BB.length, 4) >>> 0;
      return (null !== wB && 0 !== wB.byteLength || (wB = new Uint32Array(eB.memory.buffer)), wB).set(BB, ZB / 4), uB = BB.length, ZB
    }

    function MB(BB, IB) {
      const ZB = IB(4 * BB.length, 4) >>> 0,
        TB = QB();
      for (let JB = 0; JB < BB.length; JB++) TB.setUint32(ZB + 4 * JB, UB(BB[JB]), !0);
      return uB = BB.length, ZB
    }

    function jB(BB) {
      const IB = iB(BB);
      return function(BB) {
        BB < 1028 || (pB[BB] = aB, aB = BB)
      }(BB), IB
    }
    let PB = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    PB.decode();
    const RB = 2146435072;
    let rB = 0;
    const mB = new TextEncoder;
    "encodeInto" in mB || (mB.encodeInto = function(BB, IB) {
      const ZB = mB.encode(BB);
      return IB.set(ZB), {
        read: BB.length,
        written: ZB.length
      }
    });
    let XB, LB, eB, uB = 0;

    function fB(BB, IB) {
      return LB = BB, eB = BB.exports, XB = IB, CB = null, wB = null, OB = null, eB.GYkN(), eB
    }

    function lB(BB) {
      if (void 0 !== eB) return eB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module: BB
      } = BB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const IB = qB();
      BB instanceof WebAssembly.Module || (BB = new WebAssembly.Module(BB));
      return fB(new WebAssembly.Instance(BB, IB), BB)
    }
    async function AB(BB) {
      if (void 0 !== eB) return eB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module_or_path: BB
      } = BB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const IB = qB();
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
      return fB(ZB, TB)
    }
    var tB = ZB(3043),
      bB = ZB(6771);
    class xB extends Error {
      stage;
      constructor(BB, IB) {
        super((0, tB.G)(BB, IB), {
          cause: IB
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = BB
      }
    }
    let EB = null,
      DB = null;

    function KB() {
      return EB ? Promise.resolve(EB) : (DB || (DB = async function() {
        let BB;
        try {
          BB = await (0, tB.J)(new ZB.U(ZB(6775)), (0, bB.e)("bloxd_wasm_shader_pack"))
        } catch (IB) {
          throw new xB((0, tB.N)(IB), IB)
        }
        try {
          await AB({
            module_or_path: BB
          })
        } catch (IB) {
          throw new xB("instantiate", IB)
        }
        return EB = TB, EB
      }(), DB.then(void 0, (() => {
        DB = null
      }))), DB)
    }
    var VB = ZB(6780);

    function SB(BB) {
      let [IB, ZB, TB, JB] = BB;
      const oB = {
        file: IB,
        line: ZB,
        message: TB
      };
      return JB && (oB.variants = JB.map(VB.i)), oB
    }

    function BI(BB) {
      return JSON.parse(BB).map(SB)
    }

    function II(BB, IB) {
      if (!Number.isInteger(BB) || BB < 0 || BB > 4294967295) throw new Error(`${IB} ${BB} is not a whole number from 0 to 4294967295`);
      return BB
    }

    function ZI(BB) {
      return [BB.named.map((BB => BB.name)), Uint32Array.from(BB.named, (BB => II(BB.id, "Texture ID")))]
    }
    const TI = new WeakMap;
    const JI = new WeakMap,
      oI = new WeakSet;

    function GI(BB, IB) {
      if (oI.has(BB)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return IB()
      } catch (ZB) {
        throw ZB instanceof WebAssembly.RuntimeError && oI.add(BB), ZB
      }
    }

    function vI(BB) {
      let IB = JI.get(BB);
      if (!IB) {
        let ZB, TB;
        IB = {
          yBB: (IB, ZB) => GI(BB, (() => function(BB, IB, ZB) {
            const TB = BB.yBB(IB.map((BB => BB.path)), IB.map((BB => BB.source)), ...ZI(ZB), ZB.aliases.map((BB => BB.name)), ZB.aliases.map((BB => BB.texture)), ZB.aliases.map((BB => BB.kind)));
            let JB = !1;
            try {
              const BB = TB.validationModuleCodes,
                IB = Array.from(TB.validationModuleKeys, ((IB, ZB) => ({
                  key: (0, VB.i)(IB),
                  code: BB[ZB]
                }))),
                ZB = {
                  errors: BI(TB.RJB),
                  offInStrict: BI(TB.rJB),
                  variants: (0, VB.e)(TB),
                  validationModules: IB,
                  features: TB.features
                };
              return IB.forEach(((BB, IB) => {
                TI.set(BB, {
                  pack: TB,
                  index: IB
                })
              })), JB = IB.length > 0, ZB
            } finally {
              JB || TB.free()
            }
          }(BB, IB, ZB))),
          mapValidationMessage: (IB, ZB) => {
            const TB = TI.get(IB);
            if (!TB) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return SB(JSON.parse(GI(BB, (() => TB.pack.mapValidationMessage(TB.index, ZB.lineNum, ZB.linePos, ZB.message, ZB.type)))))
          },
          qTB: IB => GI(BB, (() => function(BB, IB) {
            const ZB = new Int32Array(IB.length),
              TB = [];
            return IB.forEach(((BB, IB) => {
              ZB[IB] = BB.variants ? BB.variants.length : -1;
              for (const ZB of BB.variants ?? []) TB.push((0, VB.h)(ZB))
            })), BI(BB.qTB(IB.map((BB => BB.file)), Uint32Array.from(IB, (BB => II(BB.line, "Diagnostic line"))), IB.map((BB => BB.message)), ZB, Uint8Array.from(TB)))
          }(BB, IB))),
          rM: IB => GI(BB, (() => BB.rM(...ZI(IB)))),
          get SHADER_PACK_HEADER_VERSION() {
            return ZB ??= GI(BB, (() => BB.jJB())), ZB
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return TB ??= GI(BB, (() => {
              const IB = BB.aJB();
              return BB.pJB().map(((BB, ZB) => ({
                path: BB,
                source: IB[ZB]
              })))
            })), TB
          },
          PJB: IB => GI(BB, (() => BB.PJB(IB))),
          resolveHeader: IB => GI(BB, (() => BB.MJB((0, VB.h)(IB)))),
          HJB: () => GI(BB, (() => BB.HJB()))
        }, JI.set(BB, IB)
      }
      return IB
    }
    var kI = ZB(3388),
      cI = ZB(6778);
    const nI = "bloxdShaderPackWasmFailureReported";
    let hI = null;

    function zI() {
      return hI ??= async function() {
        if ("undefined" === typeof WebAssembly) return FI("unsupported", "This browser has no WebAssembly"), null;
        const BB = (0, cI.loadShaderPackTextures)().then((() => !0), (BB => (console.error("Could not load the shader pack textures, so shader packs can't run", BB), !1)));
        try {
          const IB = await async function() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KB;
            return vI(await BB())
          }();
          return await BB ? IB : null
        } catch (IB) {
          const BB = IB instanceof Error ? IB.message : String(IB);
          return FI(kI.e[IB instanceof xB ? IB.stage : "instantiate"], BB), null
        }
      }(), hI
    }

    function FI(BB, IB) {
      (0, kI.j)(nI, `Shader pack wasm ${BB}, so shader packs can't run: ${IB}`, IB, `shader_pack_${BB}`)
    }
  },
  6775: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/bloxd_wasm_shader_pack_bg.ea5c31390e238c66b9de.wasm"
  },
  6771: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    var TB = ZB(3043);
    const JB = {
      bloxd_wasm: () => "3929318ab85efbe7fbf015b7202f97f9213e396225d80b3db1d6eea98607e192",
      bloxd_wasm_client: () => "de8797e7a2073a4b84142d0cdd231107132c281529510d44e15de2b324a3a30f",
      bloxd_wasm_workers: () => "e392be22de1540260052c3350081c85739d1c5bc24a5222edf6de5771f9d53cc",
      bloxd_wasm_models: () => "18f455c31b6430161028848ff988084c6b16d32d8fa12d4af984837abfc3144f",
      bloxd_wasm_webgpu: () => "5526ae404536156accd26af71c2bbbeb37703fbb83da322278378d23a1e1d759",
      bloxd_wasm_webgl: () => "cbc2e38eabd8d787bc137c7584b67ac7d90d219065d8b2cfc013c2b7b96e44bf",
      bloxd_wasm_webgl1: () => "729c4755d993e2a2b24848672562e1cfcebc5f2cf7acaf33d9fc9440993d6ec7",
      bloxd_wasm_replay: () => "42d3e76b4bdf858378fb0fb477290e11c66f2e51aa3947bbbd34ee4a53e1e6c0",
      bloxd_wasm_recorder: () => "d9158108e4a445accd8d7aa1bf531832e077768eae0055f5cadb78f130f5884f",
      bloxd_wasm_anim: () => "1aac61a86d6f89bb60de30b43c299b746d630e8811ba65a52be7c2f8e04ccd3d",
      bloxd_wasm_textures: () => "24c39accf0c81e5ab4e85e999b876eef419c50c2e0b92783b293de227d550aeb",
      bloxd_wasm_shader_pack: () => "6ef135dd10de9c09f7158eff62c3ec8671e1706d2e1ff29eeda717db01789bd3"
    };
    var oB = ZB(4874);

    function GB(BB) {
      const IB = Object.prototype.hasOwnProperty.call(JB, BB) ? JB[BB]() : void 0;
      if (void 0 !== IB) return {
        sha256: IB,
        onMismatch: oB.D
      };
      throw new TB.g(`${BB} has no release digest, so this build refuses it`)
    }
  },
  6780: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => dB,
      e: () => CB,
      h: () => UB,
      i: () => yB
    });
    var TB = ZB(6784);
    const JB = 6,
      oB = 3,
      GB = 1,
      vB = 2,
      kB = 4,
      cB = 8,
      nB = 16,
      hB = 32,
      zB = 64,
      FB = 128,
      NB = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function gB(BB) {
      if (!BB) return 0;
      const IB = NB.indexOf(BB);
      if (IB <= 0) throw new Error(`"${BB}" is not a shader pack hook function`);
      return IB
    }

    function qB(BB) {
      if (0 === BB) return null;
      const IB = NB[BB];
      if (void 0 === IB) throw new Error(`${BB} is not a shader pack hook function id`);
      return IB
    }

    function yB(BB) {
      const IB = TB.e.length;
      return {
        strict: BB >= IB,
        program: TB.e[BB % IB]
      }
    }

    function UB(BB) {
      return Number(BB.strict) * TB.e.length + TB.e.indexOf(BB.program)
    }

    function WB(BB) {
      return "" === BB ? [] : BB.split(" ")
    }

    function dB(BB) {
      const IB = {
        variantFlags: new Uint8Array(JB),
        hooks: new Uint8Array(JB * oB),
        moduleCodes: Array(JB).fill(""),
        reads: Array(2 * JB).fill("")
      };
      for (const ZB of BB) {
        const BB = UB(ZB.key),
          TB = (BB, IB) => null === ZB.hooks.surface || ZB.reads.fragment.includes(BB) ? 0 : IB;
        IB.variantFlags[BB] = (ZB.sceneDepth ? GB : 0) | (ZB.movesVertices ? vB : 0) | (ZB.sunShadow ? kB : 0) | (ZB.airShadow ? cB : 0) | (ZB.discards ? nB : 0) | TB("localPosition", hB) | TB("enchantSpeed", zB) | TB("enchantTier", FB), IB.hooks[BB * oB] = gB(ZB.hooks.vertex), IB.hooks[BB * oB + 1] = gB(ZB.hooks.surface), IB.hooks[BB * oB + 2] = gB(ZB.hooks.light), IB.moduleCodes[BB] = ZB.moduleCode, IB.reads[2 * BB] = ZB.reads.vertex.join(" "), IB.reads[2 * BB + 1] = ZB.reads.fragment.join(" ")
      }
      return IB
    }

    function CB(BB) {
      const {
        hooks: IB,
        moduleCodes: ZB,
        reads: TB
      } = BB;
      return Array.from(BB.variantFlags, ((BB, JB) => {
        const hB = JB * oB;
        return {
          key: yB(JB),
          hooks: {
            vertex: qB(IB[hB]),
            surface: qB(IB[hB + 1]),
            light: qB(IB[hB + 2])
          },
          moduleCode: ZB[JB],
          sceneDepth: 0 !== (BB & GB),
          sunShadow: 0 !== (BB & kB),
          airShadow: 0 !== (BB & cB),
          movesVertices: 0 !== (BB & vB),
          discards: 0 !== (BB & nB),
          reads: {
            vertex: WB(TB[2 * JB]),
            fragment: WB(TB[2 * JB + 1])
          }
        }
      }))
    }
  },
  6784: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB,
      i: () => GB,
      l: () => vB,
      o: () => JB,
      s: () => oB
    });
    const TB = ["terrain", "liquid", "model"];

    function JB() {
      const BB = [];
      for (const IB of [!1, !0])
        for (const ZB of TB) BB.push({
          strict: IB,
          program: ZB
        });
      return BB
    }

    function oB(BB) {
      return `${BB.strict?"strict":"allow"}.${BB.program}`
    }

    function GB(BB) {
      return !BB.hooks.vertex && !BB.hooks.surface && !BB.hooks.light
    }

    function vB(BB, IB) {
      return "off" !== IB && (null === BB || BB.some((BB => BB.key.strict === ("strict" === IB) && !GB(BB))))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);