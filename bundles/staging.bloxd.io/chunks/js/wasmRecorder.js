export const id = 76;
export const ids = [76];
export const modules = {
  64501: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/bloxd_wasm_recorder_bg.9c2ec8d3b88131800bee.wasm"
  },
  64492: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      BloxdRecorderWasmError: () => DV,
      RECORDER_MODULE_ID: () => gV,
      loadRecorderModule: () => aV,
      markRecorderTrapped: () => cV,
      prefetchRecorderModule: () => oV,
      recorderMemoryBytes: () => lV,
      unloadRecorderModule: () => hV
    });
    var JV = {};
    xV.r(JV), xV.d(JV, {
      FyV: () => YV,
      kQV: () => GV,
      sw: () => UV,
      default: () => zV,
      initSync: () => MV,
      hZ: () => yV,
      qyV: () => pV,
      vyV: () => QV
    });
    class YV {
      __destroy_into_raw() {
        const VV = this.__wbg_ptr;
        return this.__wbg_ptr = 0, wV.unregister(this), VV
      }
      free() {
        const VV = this.__destroy_into_raw();
        AV.VOMT(VV, 0)
      }
      busy() {
        return 0 !== AV.buSB(this.__wbg_ptr)
      }
      command(VV, eV) {
        return 0 !== AV.bRyE(this.__wbg_ptr, VV, eV)
      }
      ryV(VV) {
        return AV.Cbpx(this.__wbg_ptr, VV) >>> 0
      }
      ZyV() {
        AV.ktLZ(this.__wbg_ptr)
      }
      wyV() {
        return AV.PXmt(this.__wbg_ptr) >>> 0
      }
      nyV() {
        return AV.wRLh(this.__wbg_ptr)
      }
      EyV() {
        return AV.HN3f(this.__wbg_ptr) >>> 0
      }
      ByV() {
        return AV.ntoW(this.__wbg_ptr) >>> 0
      }
      feed(VV) {
        return AV.zsVJ(this.__wbg_ptr, VV) >>> 0
      }
      constructor() {
        const VV = AV.Mb1t();
        return this.__wbg_ptr = VV, wV.register(this, this.__wbg_ptr, this), this
      }
      byV() {
        return AV.TAVP(this.__wbg_ptr) >>> 0
      }
      bQV() {
        return AV.zp5n(this.__wbg_ptr) >>> 0
      }
      QyV(VV, eV, xV) {
        return 0 !== AV.G6uI(this.__wbg_ptr, VV, eV, xV)
      }
      stage(VV) {
        return AV.EGls(this.__wbg_ptr, VV) >>> 0
      }
      step() {
        return AV.fiWo(this.__wbg_ptr) >>> 0
      }
    }

    function UV(VV, eV) {
      const xV = function(VV, eV, xV) {
          if (void 0 === xV) {
            const xV = FV.encode(VV),
              JV = eV(xV.length, 1) >>> 0;
            return kV().subarray(JV, JV + xV.length).set(xV), NV = xV.length, JV
          }
          let JV = VV.length,
            YV = eV(JV, 1) >>> 0;
          const UV = kV();
          let yV = 0;
          for (; yV < JV; yV++) {
            const eV = VV.charCodeAt(yV);
            if (eV > 127) break;
            UV[YV + yV] = eV
          }
          if (yV !== JV) {
            0 !== yV && (VV = VV.slice(yV)), YV = xV(YV, JV, JV = yV + 3 * VV.length, 1) >>> 0;
            const eV = kV().subarray(YV + yV, YV + JV);
            yV += FV.encodeInto(VV, eV).written, YV = xV(YV, JV, yV, 1) >>> 0
          }
          return NV = yV, YV
        }(VV, AV.QB9m, AV.WvZt),
        JV = NV,
        YV = AV.i9u3(xV, JV, eV);
      if (YV[1]) throw BV(YV[0])
    }

    function yV() {
      AV.onGg()
    }

    function pV() {
      return AV.qRkZ() >>> 0
    }

    function QV() {
      return BV(AV.Tdt6())
    }

    function nV() {
      return {
        __proto__: null,
        kZNR: {
          __proto__: null,
          VDwG: function(VV, eV) {
            return ZV(Error(vV(VV, eV)))
          },
          urBW: function() {
            return ZV(AV.memory)
          },
          A1cf: function(VV, eV) {
            throw new Error(vV(VV, eV))
          },
          KG3y: function(VV, eV) {
            console.error(vV(VV, eV))
          },
          RQuP: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (YV.prototype[Symbol.dispose] = YV.prototype.free);
    const wV = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((VV => AV?.__wbg_recordermodule_free(VV, 1)));

    function ZV(VV) {
      EV === bV.length && bV.push(bV.length + 1);
      const eV = EV;
      return EV = bV[eV], bV[eV] = VV, eV
    }

    function vV(VV, eV) {
      return function(VV, eV) {
        tV += eV, tV >= qV && (jV = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), jV.decode(), tV = eV);
        return jV.decode(kV().subarray(VV, VV + eV))
      }(VV >>> 0, eV)
    }
    let rV = null;

    function kV() {
      return null !== rV && 0 !== rV.byteLength || (rV = new Uint8Array(AV.memory.buffer)), rV
    }
    let bV = new Array(1024).fill(void 0);
    bV.push(void 0, null, !0, !1);
    let EV = bV.length;

    function BV(VV) {
      const eV = function(VV) {
        return bV[VV]
      }(VV);
      return function(VV) {
        VV < 1028 || (bV[VV] = EV, EV = VV)
      }(VV), eV
    }
    let jV = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    jV.decode();
    const qV = 2146435072;
    let tV = 0;
    const FV = new TextEncoder;
    "encodeInto" in FV || (FV.encodeInto = function(VV, eV) {
      const xV = FV.encode(VV);
      return eV.set(xV), {
        read: VV.length,
        written: xV.length
      }
    });
    let TV, PV, AV, NV = 0;

    function XV(VV, eV) {
      return PV = VV, AV = VV.exports, TV = eV, rV = null, AV.xQJy(), AV
    }

    function MV(VV) {
      if (void 0 !== AV) return AV;
      void 0 !== VV && (Object.getPrototypeOf(VV) === Object.prototype ? ({
        module: VV
      } = VV) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const eV = nV();
      VV instanceof WebAssembly.Module || (VV = new WebAssembly.Module(VV));
      return XV(new WebAssembly.Instance(VV, eV), VV)
    }
    async function zV(VV) {
      if (void 0 !== AV) return AV;
      void 0 !== VV && (Object.getPrototypeOf(VV) === Object.prototype ? ({
        module_or_path: VV
      } = VV) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const eV = nV();
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
      return XV(xV, JV)
    }

    function GV() {
      AV = void 0, PV = void 0, rV = null, bV = new Array(1024).fill(void 0), bV.push(void 0, null, !0, !1), EV = bV.length
    }
    var WV = xV(3196),
      RV = xV(7178);
    const gV = 2;
    class DV extends Error {
      stage;
      constructor(VV, eV) {
        super((0, WV.D)(VV, eV), {
          cause: eV
        }), this.name = "BloxdRecorderWasmError", this.stage = VV
      }
    }
    let iV = null;
    const CV = function(VV) {
      let eV = null,
        xV = null,
        JV = null,
        YV = null;
      const UV = async () => {
        let xV = null;
        try {
          return xV = eV ??= (0, WV.G)(VV.url(), (0, RV.e)(VV.name)), await xV
        } catch (JV) {
          throw eV === xV && (eV = null), VV.error((0, WV.J)(JV), JV)
        }
      };
      return {
        load: () => {
          if (YV) return Promise.reject(YV);
          if (xV) return xV;
          const eV = (async () => {
            const eV = await UV();
            try {
              await VV.init(eV)
            } catch (xV) {
              throw VV.error("instantiate", xV)
            }
            return VV.bindings
          })();
          xV = eV, JV = eV;
          const yV = () => {
            JV === eV && (JV = null)
          };
          return eV.then(yV, (() => {
            yV(), xV === eV && (xV = null)
          })), eV
        },
        prefetch: async () => {
          YV || xV || await UV()
        },
        markTrapped: eV => (YV ??= VV.error("call", eV), YV),
        unload: () => {
          YV || !VV.reset || JV || (VV.reset(), xV = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new xV.U(xV(64501)),
      init: async VV => {
        await zV({
          module_or_path: VV
        }), iV = QV()
      },
      bindings: JV,
      error: (VV, eV) => new DV(VV, eV),
      reset: () => {
        GV(), iV = null
      }
    });

    function aV() {
      return CV.load()
    }

    function oV() {
      return CV.prefetch()
    }

    function cV(VV) {
      return CV.markTrapped(VV)
    }

    function hV() {
      CV.unload()
    }

    function lV() {
      return iV?.buffer.byteLength ?? 0
    }
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
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);