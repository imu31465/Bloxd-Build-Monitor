export const id = 149;
export const ids = [149];
export const modules = {
  7176: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      loadPageShaderPackCompiler: () => ve
    });
    var JV = {};
    xV.r(JV), xV.d(JV, {
      GUV: () => YV,
      GeV: () => UV,
      default: () => mV,
      WUV: () => yV,
      RUV: () => pV,
      initSync: () => fV,
      hZ: () => QV,
      BYV: () => nV,
      gUV: () => wV,
      DUV: () => ZV,
      mD: () => vV,
      iUV: () => rV,
      lD: () => kV,
      CUV: () => bV
    });
    class YV {
      static __wrap(VV) {
        const eV = Object.create(YV.prototype);
        return eV.__wbg_ptr = VV, BV.register(eV, eV.__wbg_ptr, eV), eV
      }
      __destroy_into_raw() {
        const VV = this.__wbg_ptr;
        return this.__wbg_ptr = 0, BV.unregister(this), VV
      }
      free() {
        const VV = this.__destroy_into_raw();
        hV.pz23(VV, 0)
      }
      get aUV() {
        let VV, eV;
        try {
          const xV = hV.QhE4(this.__wbg_ptr);
          return VV = xV[0], eV = xV[1], PV(xV[0], xV[1])
        } finally {
          hV.oD1k(VV, eV, 1)
        }
      }
      get features() {
        const VV = hV.senr(this.__wbg_ptr);
        var eV = qV(VV[0], VV[1]);
        return hV.oD1k(VV[0], 4 * VV[1], 4), eV
      }
      get hooks() {
        const VV = hV.m2pu(this.__wbg_ptr);
        var eV = tV(VV[0], VV[1]).slice();
        return hV.oD1k(VV[0], 1 * VV[1], 1), eV
      }
      mapValidationMessage(VV, eV, xV, JV, YV) {
        let UV, yV;
        try {
          const nV = hV.MreD(this.__wbg_ptr, VV, eV, xV, jV(JV), jV(YV));
          var pV = nV[0],
            QV = nV[1];
          if (nV[3]) throw pV = 0, QV = 0, gV(nV[2]);
          return UV = pV, yV = QV, PV(pV, QV)
        } finally {
          hV.oD1k(UV, yV, 1)
        }
      }
      get moduleCodes() {
        const VV = hV.rsGr(this.__wbg_ptr);
        var eV = qV(VV[0], VV[1]);
        return hV.oD1k(VV[0], 4 * VV[1], 4), eV
      }
      get oUV() {
        let VV, eV;
        try {
          const xV = hV.fbR6(this.__wbg_ptr);
          return VV = xV[0], eV = xV[1], PV(xV[0], xV[1])
        } finally {
          hV.oD1k(VV, eV, 1)
        }
      }
      get reads() {
        const VV = hV.ZJCS(this.__wbg_ptr);
        var eV = qV(VV[0], VV[1]);
        return hV.oD1k(VV[0], 4 * VV[1], 4), eV
      }
      get validationModuleCodes() {
        const VV = hV.Bfo3(this.__wbg_ptr);
        var eV = qV(VV[0], VV[1]);
        return hV.oD1k(VV[0], 4 * VV[1], 4), eV
      }
      get validationModuleKeys() {
        const VV = hV.AJob(this.__wbg_ptr);
        var eV = tV(VV[0], VV[1]).slice();
        return hV.oD1k(VV[0], 1 * VV[1], 1), eV
      }
      get variantFlags() {
        const VV = hV.GDgU(this.__wbg_ptr);
        var eV = tV(VV[0], VV[1]).slice();
        return hV.oD1k(VV[0], 1 * VV[1], 1), eV
      }
    }

    function UV(VV, eV, xV, JV, UV, yV, pV) {
      const QV = RV(VV, hV.GUnL),
        nV = lV,
        wV = RV(eV, hV.GUnL),
        ZV = lV,
        vV = RV(xV, hV.GUnL),
        rV = lV,
        kV = WV(JV, hV.GUnL),
        bV = lV,
        EV = RV(UV, hV.GUnL),
        BV = lV,
        jV = RV(yV, hV.GUnL),
        qV = lV,
        tV = RV(pV, hV.GUnL),
        FV = lV,
        TV = hV.lupQ(QV, nV, wV, ZV, vV, rV, kV, bV, EV, BV, jV, qV, tV, FV);
      if (TV[2]) throw gV(TV[1]);
      return YV.__wrap(TV[0])
    }

    function yV() {
      const VV = hV.MCAl();
      var eV = qV(VV[0], VV[1]);
      return hV.oD1k(VV[0], 4 * VV[1], 4), eV
    }

    function pV() {
      const VV = hV.BcxO();
      var eV = qV(VV[0], VV[1]);
      return hV.oD1k(VV[0], 4 * VV[1], 4), eV
    }

    function QV() {
      hV.ZtpQ()
    }

    function nV(VV, eV, xV, JV, YV) {
      let UV, yV;
      try {
        const nV = RV(VV, hV.GUnL),
          wV = lV,
          ZV = WV(eV, hV.GUnL),
          vV = lV,
          rV = RV(xV, hV.GUnL),
          kV = lV,
          bV = WV(JV, hV.GUnL),
          EV = lV,
          BV = function(VV, eV) {
            const xV = eV(1 * VV.length, 1) >>> 0;
            return XV().set(VV, xV / 1), lV = VV.length, xV
          }(YV, hV.GUnL),
          jV = lV,
          qV = hV.NIGT(nV, wV, ZV, vV, rV, kV, bV, EV, BV, jV);
        var pV = qV[0],
          QV = qV[1];
        if (qV[3]) throw pV = 0, QV = 0, gV(qV[2]);
        return UV = pV, yV = QV, PV(pV, QV)
      } finally {
        hV.oD1k(UV, yV, 1)
      }
    }

    function wV() {
      let VV, eV;
      try {
        const xV = hV.BiCI();
        return VV = xV[0], eV = xV[1], PV(xV[0], xV[1])
      } finally {
        hV.oD1k(VV, eV, 1)
      }
    }

    function ZV(VV) {
      let eV, xV;
      try {
        const UV = hV.TgTp(VV);
        var JV = UV[0],
          YV = UV[1];
        if (UV[3]) throw JV = 0, YV = 0, gV(UV[2]);
        return eV = JV, xV = YV, PV(JV, YV)
      } finally {
        hV.oD1k(eV, xV, 1)
      }
    }

    function vV() {
      return hV.gKaO() >>> 0
    }

    function rV() {
      let VV, eV;
      try {
        const xV = hV.hbXL();
        return VV = xV[0], eV = xV[1], PV(xV[0], xV[1])
      } finally {
        hV.oD1k(VV, eV, 1)
      }
    }

    function kV(VV, eV) {
      let xV, JV;
      try {
        const yV = RV(VV, hV.GUnL),
          pV = lV,
          QV = WV(eV, hV.GUnL),
          nV = lV,
          wV = hV.fazv(yV, pV, QV, nV);
        var YV = wV[0],
          UV = wV[1];
        if (wV[3]) throw YV = 0, UV = 0, gV(wV[2]);
        return xV = YV, JV = UV, PV(YV, UV)
      } finally {
        hV.oD1k(xV, JV, 1)
      }
    }

    function bV(VV) {
      let eV, xV;
      try {
        const UV = hV.Kj0H(jV(VV));
        var JV = UV[0],
          YV = UV[1];
        if (UV[3]) throw JV = 0, YV = 0, gV(UV[2]);
        return eV = JV, xV = YV, PV(JV, YV)
      } finally {
        hV.oD1k(eV, xV, 1)
      }
    }

    function EV() {
      return {
        __proto__: null,
        v0aF: {
          __proto__: null,
          YlUe: function(VV, eV) {
            return jV(Error(PV(VV, eV)))
          },
          f3eu: function(VV) {
            return null === MV(VV)
          },
          BhjG: function(VV) {
            return "string" === typeof MV(VV)
          },
          k6V6: function(VV, eV) {
            const xV = MV(eV),
              JV = "string" === typeof xV ? xV : void 0;
            var YV, UV = void 0 === (YV = JV) || null === YV ? 0 : function(VV, eV, xV) {
                if (void 0 === xV) {
                  const xV = aV.encode(VV),
                    JV = eV(xV.length, 1) >>> 0;
                  return XV().subarray(JV, JV + xV.length).set(xV), lV = xV.length, JV
                }
                let JV = VV.length,
                  YV = eV(JV, 1) >>> 0;
                const UV = XV();
                let yV = 0;
                for (; yV < JV; yV++) {
                  const eV = VV.charCodeAt(yV);
                  if (eV > 127) break;
                  UV[YV + yV] = eV
                }
                if (yV !== JV) {
                  0 !== yV && (VV = VV.slice(yV)), YV = xV(YV, JV, JV = yV + 3 * VV.length, 1) >>> 0;
                  const eV = XV().subarray(YV + yV, YV + JV);
                  yV += aV.encodeInto(VV, eV).written, YV = xV(YV, JV, yV, 1) >>> 0
                }
                return lV = yV, YV
              }(JV, hV.GUnL, hV.TRLc),
              yV = lV;
            TV().setInt32(VV + 4, yV, !0), TV().setInt32(VV + 0, UV, !0)
          },
          jbJp: function(VV, eV) {
            throw new Error(PV(VV, eV))
          },
          nZBP: function(VV, eV) {
            return MV(VV).charCodeAt(eV >>> 0)
          },
          SpkK: function(VV, eV) {
            console.error(PV(VV, eV))
          },
          uZoL: function(VV) {
            return MV(VV).length
          },
          Hjky: function(VV, eV) {
            return jV(PV(VV, eV))
          },
          xBUA: function(VV) {
            gV(VV)
          }
        }
      }
    }
    Symbol.dispose && (YV.prototype[Symbol.dispose] = YV.prototype.free);
    const BV = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((VV => hV.pz23(VV, 1)));

    function jV(VV) {
      GV === zV.length && zV.push(zV.length + 1);
      const eV = GV;
      return GV = zV[eV], zV[eV] = VV, eV
    }

    function qV(VV, eV) {
      VV >>>= 0;
      const xV = TV(),
        JV = [];
      for (let YV = VV; YV < VV + 4 * eV; YV += 4) JV.push(gV(xV.getUint32(YV, !0)));
      return JV
    }

    function tV(VV, eV) {
      return VV >>>= 0, XV().subarray(VV / 1, VV / 1 + eV)
    }
    let FV = null;

    function TV() {
      return null !== FV && FV.buffer === hV.memory.buffer || (FV = new DataView(hV.memory.buffer)), FV
    }

    function PV(VV, eV) {
      return function(VV, eV) {
        CV += eV, CV >= iV && (DV = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), DV.decode(), CV = eV);
        return DV.decode(XV().subarray(VV, VV + eV))
      }(VV >>> 0, eV)
    }
    let AV = null;
    let NV = null;

    function XV() {
      return null !== NV && 0 !== NV.byteLength || (NV = new Uint8Array(hV.memory.buffer)), NV
    }

    function MV(VV) {
      return zV[VV]
    }
    let zV = new Array(1024).fill(void 0);
    zV.push(void 0, null, !0, !1);
    let GV = zV.length;

    function WV(VV, eV) {
      const xV = eV(4 * VV.length, 4) >>> 0;
      return (null !== AV && 0 !== AV.byteLength || (AV = new Uint32Array(hV.memory.buffer)), AV).set(VV, xV / 4), lV = VV.length, xV
    }

    function RV(VV, eV) {
      const xV = eV(4 * VV.length, 4) >>> 0,
        JV = TV();
      for (let YV = 0; YV < VV.length; YV++) JV.setUint32(xV + 4 * YV, jV(VV[YV]), !0);
      return lV = VV.length, xV
    }

    function gV(VV) {
      const eV = MV(VV);
      return function(VV) {
        VV < 1028 || (zV[VV] = GV, GV = VV)
      }(VV), eV
    }
    let DV = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    DV.decode();
    const iV = 2146435072;
    let CV = 0;
    const aV = new TextEncoder;
    "encodeInto" in aV || (aV.encodeInto = function(VV, eV) {
      const xV = aV.encode(VV);
      return eV.set(xV), {
        read: VV.length,
        written: xV.length
      }
    });
    let oV, cV, hV, lV = 0;

    function LV(VV, eV) {
      return cV = VV, hV = VV.exports, oV = eV, FV = null, AV = null, NV = null, hV.hEKG(), hV
    }

    function fV(VV) {
      if (void 0 !== hV) return hV;
      void 0 !== VV && (Object.getPrototypeOf(VV) === Object.prototype ? ({
        module: VV
      } = VV) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const eV = EV();
      VV instanceof WebAssembly.Module || (VV = new WebAssembly.Module(VV));
      return LV(new WebAssembly.Instance(VV, eV), VV)
    }
    async function mV(VV) {
      if (void 0 !== hV) return hV;
      void 0 !== VV && (Object.getPrototypeOf(VV) === Object.prototype ? ({
        module_or_path: VV
      } = VV) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const eV = EV();
      ("string" === typeof VV || "function" === typeof Request && VV instanceof Request || "function" === typeof URL && VV instanceof URL) && (VV = fetch(VV));
      const {
        instance: xV,
        module: JV
      } = await async function(VV, eV) {
        if ("function" === typeof Response && VV instanceof Response) {
          if (!VV.ok) throw new Error(`failed to fetch Wasm: ${VV.status} ${VV.statusText} fetching '${VV.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(VV, eV)
          } catch (xV) {
            if (! function(VV) {
                switch (VV) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(VV.type) || "application/wasm" === VV.headers.get("Content-Type")) throw xV;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", xV)
          }
          const JV = await VV.arrayBuffer();
          return await WebAssembly.instantiate(JV, eV)
        } {
          const xV = await WebAssembly.instantiate(VV, eV);
          return xV instanceof WebAssembly.Instance ? {
            instance: xV,
            module: VV
          } : xV
        }
      }(await VV, eV);
      return LV(xV, JV)
    }
    var KV = xV(3196),
      HV = xV(7178);
    class uV extends Error {
      stage;
      constructor(VV, eV) {
        super((0, KV.D)(VV, eV), {
          cause: eV
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = VV
      }
    }
    let sV = null,
      SV = null;

    function IV() {
      return sV ? Promise.resolve(sV) : (SV || (SV = async function() {
        let VV;
        try {
          VV = await (0, KV.G)(new xV.U(xV(7182)), (0, HV.e)("bloxd_wasm_shader_pack"))
        } catch (eV) {
          throw new uV((0, KV.J)(eV), eV)
        }
        try {
          await mV({
            module_or_path: VV
          })
        } catch (eV) {
          throw new uV("instantiate", eV)
        }
        return sV = JV, sV
      }(), SV.then(void 0, (() => {
        SV = null
      }))), SV)
    }
    var dV = xV(7193);

    function OV(VV) {
      let [eV, xV, JV, YV] = VV;
      const UV = {
        file: eV,
        line: xV,
        message: JV
      };
      return YV && (UV.variants = YV.map(dV.j)), UV
    }

    function Ve(VV) {
      return JSON.parse(VV).map(OV)
    }

    function ee(VV, eV) {
      if (!Number.isInteger(VV) || VV < 0 || VV > 4294967295) throw new Error(`${eV} ${VV} is not a whole number from 0 to 4294967295`);
      return VV
    }

    function xe(VV) {
      return [VV.named.map((VV => VV.name)), Uint32Array.from(VV.named, (VV => ee(VV.id, "Texture ID")))]
    }
    const Je = new WeakMap;
    const Ye = new WeakMap,
      Ue = new WeakSet;

    function ye(VV, eV) {
      if (Ue.has(VV)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return eV()
      } catch (xV) {
        throw xV instanceof WebAssembly.RuntimeError && Ue.add(VV), xV
      }
    }

    function pe(VV) {
      let eV = Ye.get(VV);
      if (!eV) {
        let xV, JV;
        eV = {
          GeV: (eV, xV) => ye(VV, (() => function(VV, eV, xV) {
            const JV = VV.GeV(eV.map((VV => VV.path)), eV.map((VV => VV.source)), ...xe(xV), xV.aliases.map((VV => VV.name)), xV.aliases.map((VV => VV.texture)), xV.aliases.map((VV => VV.kind)));
            let YV = !1;
            try {
              const VV = JV.validationModuleCodes,
                eV = Array.from(JV.validationModuleKeys, ((eV, xV) => ({
                  key: (0, dV.j)(eV),
                  code: VV[xV]
                }))),
                xV = {
                  errors: Ve(JV.aUV),
                  offInStrict: Ve(JV.oUV),
                  variants: (0, dV.e)(JV),
                  validationModules: eV,
                  features: JV.features
                };
              return eV.forEach(((VV, eV) => {
                Je.set(VV, {
                  pack: JV,
                  index: eV
                })
              })), YV = eV.length > 0, xV
            } finally {
              YV || JV.free()
            }
          }(VV, eV, xV))),
          mapValidationMessage: (eV, xV) => {
            const JV = Je.get(eV);
            if (!JV) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return OV(JSON.parse(ye(VV, (() => JV.pack.mapValidationMessage(JV.index, xV.lineNum, xV.linePos, xV.message, xV.type)))))
          },
          BYV: eV => ye(VV, (() => function(VV, eV) {
            const xV = new Int32Array(eV.length),
              JV = [];
            return eV.forEach(((VV, eV) => {
              xV[eV] = VV.variants ? VV.variants.length : -1;
              for (const xV of VV.variants ?? []) JV.push((0, dV.g)(xV))
            })), Ve(VV.BYV(eV.map((VV => VV.file)), Uint32Array.from(eV, (VV => ee(VV.line, "Diagnostic line"))), eV.map((VV => VV.message)), xV, Uint8Array.from(JV)))
          }(VV, eV))),
          lD: eV => ye(VV, (() => VV.lD(...xe(eV)))),
          get SHADER_PACK_HEADER_VERSION() {
            return xV ??= ye(VV, (() => VV.iUV())), xV
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return JV ??= ye(VV, (() => {
              const eV = VV.RUV();
              return VV.WUV().map(((VV, xV) => ({
                path: VV,
                source: eV[xV]
              })))
            })), JV
          },
          CUV: eV => ye(VV, (() => VV.CUV(eV))),
          resolveHeader: eV => ye(VV, (() => VV.DUV((0, dV.g)(eV)))),
          gUV: () => ye(VV, (() => VV.gUV()))
        }, Ye.set(VV, eV)
      }
      return eV
    }
    var Qe = xV(3651),
      ne = xV(7191);
    const we = "bloxdShaderPackWasmFailureReported";
    let Ze = null;

    function ve() {
      return Ze ??= async function() {
        if ("undefined" === typeof WebAssembly) return re("unsupported", "This browser has no WebAssembly"), null;
        const VV = (0, ne.loadShaderPackTextures)().then((() => !0), (VV => (console.error("Could not load the shader pack textures, so shader packs can't run", VV), !1)));
        try {
          const eV = await async function() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IV;
            return pe(await VV())
          }();
          return await VV ? eV : null
        } catch (eV) {
          const VV = eV instanceof Error ? eV.message : String(eV);
          return re(Qe.c[eV instanceof uV ? eV.stage : "instantiate"], VV), null
        }
      }(), Ze
    }

    function re(VV, eV) {
      (0, Qe.h)(we, `Shader pack wasm ${VV}, so shader packs can't run: ${eV}`, eV, `shader_pack_${VV}`)
    }
  },
  7182: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/bloxd_wasm_shader_pack_bg.cec3730cc4ced61306cb.wasm"
  },
  7178: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV
    });
    var JV = xV(3196);
    const YV = {
      bloxd_wasm: () => "252eb0d4c25474c8ad4eedf49004824c66703891664dd105e8794514617b7f66",
      bloxd_wasm_client: () => "7d6fde0515183a27a75873490042de1a4ba89b2e110e23a73dd1b0a6c9643676",
      bloxd_wasm_workers: () => "d67514a22eb408f1aa31cbe700bb4786d51175017304bdd7b210068eb0444558",
      bloxd_wasm_models: () => "ef6a73a4745ccf7e34691c3afee6fa9f99e6383b8fa5cf54fb92602667233184",
      bloxd_wasm_webgpu: () => "521647906e693662a3fe235faa1fd10bc894b8262cf1aa2d92b9fd61655213ad",
      bloxd_wasm_webgl: () => "8949c301acb6ad07ffdca2e65da52eac203d542b3e4f2ecc1ec9728f497abcbd",
      bloxd_wasm_webgl1: () => "754597f08f30bb2090c1ad6eba2f662bc59ddd22c4dab79825c05b56182ca41a",
      bloxd_wasm_replay: () => "002aa8718ff84386b563189fea7dc48bc338240f8c60b0a1a8b237119fa415be",
      bloxd_wasm_recorder: () => "91cd6139184ce88ce1821f44e757e3a98b4345a6aa284548ac90d569468cc690",
      bloxd_wasm_anim: () => "5103a8e3223ec1405249b583a0c62ec033bf746a8c1e88c9772c98fe9fa16dcf",
      bloxd_wasm_textures: () => "dd0b3d60ccc8abf434697177c01310ef60bf4e3cdd6a8df8e70c5bd6a119e75c",
      bloxd_wasm_shader_pack: () => "7db3262527f10754728edb61693c584b0ace05ec24f1ee479bdc61cebd73439a"
    };
    var UV = xV(5180);

    function yV(VV) {
      const eV = Object.prototype.hasOwnProperty.call(YV, VV) ? YV[VV]() : void 0;
      if (void 0 !== eV) return {
        sha256: eV,
        onMismatch: UV.t
      };
      throw new JV.g(`${VV} has no release digest, so this build refuses it`)
    }
  },
  7193: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => tV,
      e: () => FV,
      g: () => jV,
      j: () => BV
    });
    var JV = xV(7201);
    const YV = 6,
      UV = 3,
      yV = 1,
      pV = 2,
      QV = 4,
      nV = 8,
      wV = 16,
      ZV = 32,
      vV = 64,
      rV = 128,
      kV = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function bV(VV) {
      if (!VV) return 0;
      const eV = kV.indexOf(VV);
      if (eV <= 0) throw new Error(`"${VV}" is not a shader pack hook function`);
      return eV
    }

    function EV(VV) {
      if (0 === VV) return null;
      const eV = kV[VV];
      if (void 0 === eV) throw new Error(`${VV} is not a shader pack hook function id`);
      return eV
    }

    function BV(VV) {
      const eV = JV.c.length;
      return {
        strict: VV >= eV,
        program: JV.c[VV % eV]
      }
    }

    function jV(VV) {
      return Number(VV.strict) * JV.c.length + JV.c.indexOf(VV.program)
    }

    function qV(VV) {
      return "" === VV ? [] : VV.split(" ")
    }

    function tV(VV) {
      const eV = {
        variantFlags: new Uint8Array(YV),
        hooks: new Uint8Array(YV * UV),
        moduleCodes: Array(YV).fill(""),
        reads: Array(2 * YV).fill("")
      };
      for (const xV of VV) {
        const VV = jV(xV.key),
          JV = (VV, eV) => null === xV.hooks.surface || xV.reads.fragment.includes(VV) ? 0 : eV;
        eV.variantFlags[VV] = (xV.sceneDepth ? yV : 0) | (xV.movesVertices ? pV : 0) | (xV.sunShadow ? QV : 0) | (xV.airShadow ? nV : 0) | (xV.discards ? wV : 0) | JV("localPosition", ZV) | JV("enchantSpeed", vV) | JV("enchantTier", rV), eV.hooks[VV * UV] = bV(xV.hooks.vertex), eV.hooks[VV * UV + 1] = bV(xV.hooks.surface), eV.hooks[VV * UV + 2] = bV(xV.hooks.light), eV.moduleCodes[VV] = xV.moduleCode, eV.reads[2 * VV] = xV.reads.vertex.join(" "), eV.reads[2 * VV + 1] = xV.reads.fragment.join(" ")
      }
      return eV
    }

    function FV(VV) {
      const {
        hooks: eV,
        moduleCodes: xV,
        reads: JV
      } = VV;
      return Array.from(VV.variantFlags, ((VV, YV) => {
        const ZV = YV * UV;
        return {
          key: BV(YV),
          hooks: {
            vertex: EV(eV[ZV]),
            surface: EV(eV[ZV + 1]),
            light: EV(eV[ZV + 2])
          },
          moduleCode: xV[YV],
          sceneDepth: 0 !== (VV & yV),
          sunShadow: 0 !== (VV & QV),
          airShadow: 0 !== (VV & nV),
          movesVertices: 0 !== (VV & pV),
          discards: 0 !== (VV & wV),
          reads: {
            vertex: qV(JV[2 * YV]),
            fragment: qV(JV[2 * YV + 1])
          }
        }
      }))
    }
  },
  7201: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV,
      g: () => yV,
      h: () => pV,
      l: () => YV,
      p: () => UV
    });
    const JV = ["terrain", "liquid", "model"];

    function YV() {
      const VV = [];
      for (const eV of [!1, !0])
        for (const xV of JV) VV.push({
          strict: eV,
          program: xV
        });
      return VV
    }

    function UV(VV) {
      return `${VV.strict?"strict":"allow"}.${VV.program}`
    }

    function yV(VV) {
      return !VV.hooks.vertex && !VV.hooks.surface && !VV.hooks.light
    }

    function pV(VV, eV) {
      return "off" !== eV && (null === VV || VV.some((VV => VV.key.strict === ("strict" === eV) && !yV(VV))))
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);