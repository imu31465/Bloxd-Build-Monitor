export const id = 77;
export const ids = [77];
export const modules = {
  64518: (VV, eV, xV) => {
    VV.exports = xV.p + "static/media/bloxd_wasm_replay_bg.5259a3b81f64285776b6.wasm"
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
  64509: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      BloxdReplayWasmError: () => DV,
      loadReplayModule: () => lV,
      markReplayTrapped: () => mV,
      replayMemoryBytes: () => fV,
      unloadReplayModule: () => LV
    });
    var JV = {};
    xV.r(JV), xV.d(JV, {
      PyV: () => YV,
      kQV: () => WV,
      sw: () => UV,
      default: () => GV,
      initSync: () => zV,
      hZ: () => yV,
      qyV: () => pV,
      AyV: () => QV
    });
    class YV {
      __destroy_into_raw() {
        const VV = this.__wbg_ptr;
        return this.__wbg_ptr = 0, wV.unregister(this), VV
      }
      free() {
        const VV = this.__destroy_into_raw();
        NV.viTM(VV, 0)
      }
      zyV(VV, eV, xV, JV, YV, UV) {
        NV.W7BM(this.__wbg_ptr, VV, eV, xV, JV, YV, UV)
      }
      close() {
        NV.Za6z(this.__wbg_ptr)
      }
      crop(VV, eV) {
        NV.e5t8(this.__wbg_ptr, VV, eV)
      }
      RyV(VV, eV) {
        NV.fMOo(this.__wbg_ptr, VV, eV)
      }
      DyV() {
        return NV.sOe6(this.__wbg_ptr) >>> 0
      }
      gyV() {
        return NV.nK1o(this.__wbg_ptr) >>> 0
      }
      iyV() {
        return NV.YPaU(this.__wbg_ptr) >>> 0
      }
      CyV() {
        return NV.Pa37(this.__wbg_ptr) >>> 0
      }
      WyV(VV, eV) {
        NV.lwwE(this.__wbg_ptr, VV, eV)
      }
      constructor() {
        const VV = NV.nrTc();
        return this.__wbg_ptr = VV, wV.register(this, this.__wbg_ptr, this), this
      }
      open() {
        NV.UsVJ(this.__wbg_ptr)
      }
      byV() {
        return NV.kwTu(this.__wbg_ptr) >>> 0
      }
      pause() {
        NV.s8XO(this.__wbg_ptr)
      }
      play() {
        NV.zWoe(this.__wbg_ptr)
      }
      save() {
        return NV.kZfv(this.__wbg_ptr) >>> 0
      }
      ayV() {
        NV.sgIR(this.__wbg_ptr)
      }
      seek(VV, eV) {
        NV.XMnS(this.__wbg_ptr, VV, eV)
      }
      cyV(VV) {
        NV.dTxF(this.__wbg_ptr, VV)
      }
      GyV(VV, eV) {
        const xV = function(VV, eV) {
            const xV = eV(8 * VV.length, 8) >>> 0;
            return function() {
              null !== vV && 0 !== vV.byteLength || (vV = new Float64Array(NV.memory.buffer));
              return vV
            }().set(VV, xV / 8), XV = VV.length, xV
          }(eV, NV.BwHP),
          JV = XV;
        NV.jsDV(this.__wbg_ptr, VV, xV, JV)
      }
      MyV(VV, eV) {
        NV.DkwZ(this.__wbg_ptr, VV, eV)
      }
      oyV(VV) {
        NV.ZkuT(this.__wbg_ptr, VV)
      }
      stage(VV) {
        return NV.xGIy(this.__wbg_ptr, VV) >>> 0
      }
      step(VV, eV) {
        return NV.ElIS(this.__wbg_ptr, VV, eV) >>> 0
      }
    }

    function UV(VV, eV) {
      const xV = function(VV, eV, xV) {
          if (void 0 === xV) {
            const xV = TV.encode(VV),
              JV = eV(xV.length, 1) >>> 0;
            return bV().subarray(JV, JV + xV.length).set(xV), XV = xV.length, JV
          }
          let JV = VV.length,
            YV = eV(JV, 1) >>> 0;
          const UV = bV();
          let yV = 0;
          for (; yV < JV; yV++) {
            const eV = VV.charCodeAt(yV);
            if (eV > 127) break;
            UV[YV + yV] = eV
          }
          if (yV !== JV) {
            0 !== yV && (VV = VV.slice(yV)), YV = xV(YV, JV, JV = yV + 3 * VV.length, 1) >>> 0;
            const eV = bV().subarray(YV + yV, YV + JV);
            yV += TV.encodeInto(VV, eV).written, YV = xV(YV, JV, yV, 1) >>> 0
          }
          return XV = yV, YV
        }(VV, NV.BwHP, NV.ZsZq),
        JV = XV,
        YV = NV.BqMN(xV, JV, eV);
      if (YV[1]) throw jV(YV[0])
    }

    function yV() {
      NV.N5FX()
    }

    function pV() {
      return NV.YNie() >>> 0
    }

    function QV() {
      return jV(NV.XjZy())
    }

    function nV() {
      return {
        __proto__: null,
        hgS3: {
          __proto__: null,
          ytUd: function(VV, eV) {
            return ZV(Error(rV(VV, eV)))
          },
          uOuk: function() {
            return ZV(NV.memory)
          },
          uLwN: function(VV, eV) {
            throw new Error(rV(VV, eV))
          },
          qQ8T: function(VV, eV) {
            console.error(rV(VV, eV))
          },
          jvle: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (YV.prototype[Symbol.dispose] = YV.prototype.free);
    const wV = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((VV => NV?.__wbg_replaymodule_free(VV, 1)));

    function ZV(VV) {
      BV === EV.length && EV.push(EV.length + 1);
      const eV = BV;
      return BV = EV[eV], EV[eV] = VV, eV
    }
    let vV = null;

    function rV(VV, eV) {
      return function(VV, eV) {
        FV += eV, FV >= tV && (qV = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), qV.decode(), FV = eV);
        return qV.decode(bV().subarray(VV, VV + eV))
      }(VV >>> 0, eV)
    }
    let kV = null;

    function bV() {
      return null !== kV && 0 !== kV.byteLength || (kV = new Uint8Array(NV.memory.buffer)), kV
    }
    let EV = new Array(1024).fill(void 0);
    EV.push(void 0, null, !0, !1);
    let BV = EV.length;

    function jV(VV) {
      const eV = function(VV) {
        return EV[VV]
      }(VV);
      return function(VV) {
        VV < 1028 || (EV[VV] = BV, BV = VV)
      }(VV), eV
    }
    let qV = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    qV.decode();
    const tV = 2146435072;
    let FV = 0;
    const TV = new TextEncoder;
    "encodeInto" in TV || (TV.encodeInto = function(VV, eV) {
      const xV = TV.encode(VV);
      return eV.set(xV), {
        read: VV.length,
        written: xV.length
      }
    });
    let PV, AV, NV, XV = 0;

    function MV(VV, eV) {
      return AV = VV, NV = VV.exports, PV = eV, vV = null, kV = null, NV.uGPZ(), NV
    }

    function zV(VV) {
      if (void 0 !== NV) return NV;
      void 0 !== VV && (Object.getPrototypeOf(VV) === Object.prototype ? ({
        module: VV
      } = VV) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const eV = nV();
      VV instanceof WebAssembly.Module || (VV = new WebAssembly.Module(VV));
      return MV(new WebAssembly.Instance(VV, eV), VV)
    }
    async function GV(VV) {
      if (void 0 !== NV) return NV;
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
      return MV(xV, JV)
    }

    function WV() {
      NV = void 0, AV = void 0, vV = null, kV = null, EV = new Array(1024).fill(void 0), EV.push(void 0, null, !0, !1), BV = EV.length
    }
    var RV = xV(3196),
      gV = xV(7178);
    class DV extends Error {
      stage;
      constructor(VV, eV) {
        super((0, RV.D)(VV, eV), {
          cause: eV
        }), this.name = "BloxdReplayWasmError", this.stage = VV
      }
    }
    let iV = null,
      CV = null,
      aV = Promise.resolve(),
      oV = 0,
      cV = null,
      hV = null;

    function lV() {
      if (hV) return Promise.reject(hV);
      if (CV) return CV;
      const VV = oV,
        eV = aV,
        YV = (async () => {
          let YV;
          await eV, iV ??= (0, RV.G)(new xV.U(xV(64518)), (0, gV.e)("bloxd_wasm_replay"));
          try {
            YV = await iV
          } catch (UV) {
            throw iV = null, new DV((0, RV.J)(UV), UV)
          }
          if (VV !== oV) throw new DV("instantiate", new Error("unloaded while loading"));
          try {
            await GV({
              module_or_path: YV
            })
          } catch (UV) {
            throw WV(), new DV("instantiate", UV)
          }
          if (VV !== oV) throw WV(), new DV("instantiate", new Error("unloaded while loading"));
          return cV = QV(), JV
        })();
      return CV = YV, aV = YV.catch((() => {})), YV.catch((() => {
        CV === YV && (CV = null)
      })), YV
    }

    function LV() {
      hV || KV()
    }

    function fV() {
      return cV?.buffer.byteLength ?? 0
    }

    function mV(VV) {
      return hV || (hV = new DV("call", VV), KV()), hV
    }

    function KV() {
      oV++, WV(), CV = null, cV = null
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);