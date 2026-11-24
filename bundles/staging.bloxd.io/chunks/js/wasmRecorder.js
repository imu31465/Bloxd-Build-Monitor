export const id = 64;
export const ids = [64];
export const modules = {
  61237: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/bloxd_wasm_recorder_bg.4bf4734a838cd40dc552.wasm"
  },
  61231: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      BloxdRecorderWasmError: () => SD,
      RECORDER_MODULE_ID: () => dD,
      loadRecorderModule: () => WD,
      markRecorderTrapped: () => ZD,
      prefetchRecorderModule: () => ND,
      recorderMemoryBytes: () => kD,
      unloadRecorderModule: () => yD
    });
    var pD = {};
    wD.r(pD), wD.d(pD, {
      UKD: () => sD,
      KLD: () => TD,
      UA: () => KD,
      default: () => xD,
      initSync: () => CD,
      fA: () => rD,
      gKD: () => LD,
      wKD: () => cD
    });
    class sD {
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, RD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        XD.ptsP(DD, 0)
      }
      busy() {
        return 0 !== XD.Hlnc(this.__wbg_ptr)
      }
      command(DD, zD) {
        return 0 !== XD.K4m9(this.__wbg_ptr, DD, zD)
      }
      pKD(DD) {
        return XD.UDZQ(this.__wbg_ptr, DD) >>> 0
      }
      zKD() {
        XD.rPF3(this.__wbg_ptr)
      }
      DKD() {
        return XD.BI1U(this.__wbg_ptr) >>> 0
      }
      qsD() {
        return XD.T5Nx(this.__wbg_ptr)
      }
      rKD() {
        return XD.LcIZ(this.__wbg_ptr) >>> 0
      }
      LKD() {
        return XD.Us6J(this.__wbg_ptr) >>> 0
      }
      feed(DD) {
        return XD.C0YT(this.__wbg_ptr, DD) >>> 0
      }
      constructor() {
        const DD = XD.ocwy();
        return this.__wbg_ptr = DD, RD.register(this, this.__wbg_ptr, this), this
      }
      KKD() {
        return XD.yCPj(this.__wbg_ptr) >>> 0
      }
      rLD() {
        return XD.Bvgw(this.__wbg_ptr) >>> 0
      }
      HsD(DD, zD, wD) {
        return 0 !== XD.WIPF(this.__wbg_ptr, DD, zD, wD)
      }
      stage(DD) {
        return XD.mvrN(this.__wbg_ptr, DD) >>> 0
      }
      step() {
        return XD.TmYe(this.__wbg_ptr) >>> 0
      }
    }

    function KD(DD, zD) {
      const wD = function(DD, zD, wD) {
          if (void 0 === wD) {
            const wD = JD.encode(DD),
              pD = zD(wD.length, 1) >>> 0;
            return ID().subarray(pD, pD + wD.length).set(wD), VD = wD.length, pD
          }
          let pD = DD.length,
            sD = zD(pD, 1) >>> 0;
          const KD = ID();
          let rD = 0;
          for (; rD < pD; rD++) {
            const zD = DD.charCodeAt(rD);
            if (zD > 127) break;
            KD[sD + rD] = zD
          }
          if (rD !== pD) {
            0 !== rD && (DD = DD.slice(rD)), sD = wD(sD, pD, pD = rD + 3 * DD.length, 1) >>> 0;
            const zD = ID().subarray(sD + rD, sD + pD);
            rD += JD.encodeInto(DD, zD).written, sD = wD(sD, pD, rD, 1) >>> 0
          }
          return VD = rD, sD
        }(DD, XD.H0Jp, XD.EUj3),
        pD = VD,
        sD = XD.Xp0E(wD, pD, zD);
      if (sD[1]) throw hD(sD[0])
    }

    function rD() {
      XD.xnRY()
    }

    function LD() {
      return XD.cIIF() >>> 0
    }

    function cD() {
      return hD(XD.B1NR())
    }

    function gD() {
      return {
        __proto__: null,
        fDmI: {
          __proto__: null,
          euV9: function(DD, zD) {
            return AD(Error(UD(DD, zD)))
          },
          eEN4: function() {
            return AD(XD.memory)
          },
          pU4f: function(DD, zD) {
            throw new Error(UD(DD, zD))
          },
          Ojhh: function(DD, zD) {
            console.error(UD(DD, zD))
          },
          DV3E: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (sD.prototype[Symbol.dispose] = sD.prototype.free);
    const RD = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((DD => XD?.__wbg_recordermodule_free(DD, 1)));

    function AD(DD) {
      GD === BD.length && BD.push(BD.length + 1);
      const zD = GD;
      return GD = BD[zD], BD[zD] = DD, zD
    }

    function UD(DD, zD) {
      return function(DD, zD) {
        OD += zD, OD >= MD && (nD = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), nD.decode(), OD = zD);
        return nD.decode(ID().subarray(DD, DD + zD))
      }(DD >>> 0, zD)
    }
    let fD = null;

    function ID() {
      return null !== fD && 0 !== fD.byteLength || (fD = new Uint8Array(XD.memory.buffer)), fD
    }
    let BD = new Array(1024).fill(void 0);
    BD.push(void 0, null, !0, !1);
    let GD = BD.length;

    function hD(DD) {
      const zD = function(DD) {
        return BD[DD]
      }(DD);
      return function(DD) {
        DD < 1028 || (BD[DD] = GD, GD = DD)
      }(DD), zD
    }
    let nD = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    nD.decode();
    const MD = 2146435072;
    let OD = 0;
    const JD = new TextEncoder;
    "encodeInto" in JD || (JD.encodeInto = function(DD, zD) {
      const wD = JD.encode(DD);
      return zD.set(wD), {
        read: DD.length,
        written: wD.length
      }
    });
    let ED, QD, XD, VD = 0;

    function PD(DD, zD) {
      return QD = DD, XD = DD.exports, ED = zD, fD = null, XD.ftse(), XD
    }

    function CD(DD) {
      if (void 0 !== XD) return XD;
      void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
        module: DD
      } = DD) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const zD = gD();
      DD instanceof WebAssembly.Module || (DD = new WebAssembly.Module(DD));
      return PD(new WebAssembly.Instance(DD, zD), DD)
    }
    async function xD(DD) {
      if (void 0 !== XD) return XD;
      void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
        module_or_path: DD
      } = DD) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const zD = gD();
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
      return PD(wD, pD)
    }

    function TD() {
      XD = void 0, QD = void 0, fD = null, BD = new Array(1024).fill(void 0), BD.push(void 0, null, !0, !1), GD = BD.length
    }
    var bD = wD(2868),
      jD = wD(6653);
    const dD = 2;
    class SD extends Error {
      stage;
      constructor(DD, zD) {
        super((0, bD.A)(DD, zD), {
          cause: zD
        }), this.name = "BloxdRecorderWasmError", this.stage = DD
      }
    }
    let iD = null;
    const lD = function(DD) {
      let zD = null,
        wD = null,
        pD = null,
        sD = null;
      const KD = async () => {
        let wD = null;
        try {
          return wD = zD ??= (0, bD.B)(DD.url(), (0, jD.d)(DD.name)), await wD
        } catch (pD) {
          throw zD === wD && (zD = null), DD.error((0, bD.G)(pD), pD)
        }
      };
      return {
        load: () => {
          if (sD) return Promise.reject(sD);
          if (wD) return wD;
          const zD = (async () => {
            const zD = await KD();
            try {
              await DD.init(zD)
            } catch (wD) {
              throw DD.error("instantiate", wD)
            }
            return DD.bindings
          })();
          wD = zD, pD = zD;
          const rD = () => {
            pD === zD && (pD = null)
          };
          return zD.then(rD, (() => {
            rD(), wD === zD && (wD = null)
          })), zD
        },
        prefetch: async () => {
          sD || wD || await KD()
        },
        markTrapped: zD => (sD ??= DD.error("call", zD), sD),
        unload: () => {
          sD || !DD.reset || pD || (DD.reset(), wD = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new wD.U(wD(61237)),
      init: async DD => {
        await xD({
          module_or_path: DD
        }), iD = cD()
      },
      bindings: pD,
      error: (DD, zD) => new SD(DD, zD),
      reset: () => {
        TD(), iD = null
      }
    });

    function WD() {
      return lD.load()
    }

    function ND() {
      return lD.prefetch()
    }

    function ZD(DD) {
      return lD.markTrapped(DD)
    }

    function yD() {
      lD.unload()
    }

    function kD() {
      return iD?.buffer.byteLength ?? 0
    }
  },
  6653: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD
    });
    var pD = wD(2868);
    const sD = {
      bloxd_wasm: () => "65e53edc5e3e962e1a92a587d8a28027f8eb8bbf9d122ae3c4664a5d1e3eeb52",
      bloxd_wasm_client: () => "8bc7382052570456e32df38bb06cf837a4cdcf0c6efeb71183c9d9d96efdecc2",
      bloxd_wasm_workers: () => "9d62ece3db9e2837185fc5cbad53d14e1aa611299a39cfe5dd4f80c692bc8153",
      bloxd_wasm_models: () => "d952d307f65587ac75621c390045d763a956e5786dbdece0affe80fd6c11a572",
      bloxd_wasm_webgpu: () => "aaf47b22bd97d7f9059c5cc77097acb8001c433a0191aa99b3b272ad0af40d0c",
      bloxd_wasm_webgl: () => "758269d3a7396a32bdaeee633b3c45cd4d1efb4fd30ca2bacc7ee762494718ff",
      bloxd_wasm_webgl1: () => "e473a9c2912b1b2ebd1af57ce23061b2484e5ad7c6b3bb8302c55025cbdc6150",
      bloxd_wasm_replay: () => "fb6a7b64a8768ff2eb5122b936925ed35cbdcfc5efaf1bf3b7d53b1f4d483eae",
      bloxd_wasm_recorder: () => "b5295674c11fb730f85cc5f9aef22b1971a45cc8f95ff014897be3749114a35e",
      bloxd_wasm_anim: () => "2108b3f685a0b7e36780befaa10a018b8b914c00b52465c4d8de81cd4aaad1b7",
      bloxd_wasm_textures: () => "441f3f36c1158de1a8f992401057b7b30a10760b00006c152617c9a76cf0dbfa",
      bloxd_wasm_shader_pack: () => "504138fb584a53bf18bce9d737fbad86034e70bedc89181a53adee1dec66ef20"
    };
    var KD = wD(4722);

    function rD(DD) {
      const zD = Object.prototype.hasOwnProperty.call(sD, DD) ? sD[DD]() : void 0;
      if (void 0 !== zD) return {
        sha256: zD,
        onMismatch: KD.B
      };
      throw new pD.l(`${DD} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);