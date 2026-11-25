export const id = 76;
export const ids = [76];
export const modules = {
  64113: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/bloxd_wasm_recorder_bg.aaf643ca2c3ba550e093.wasm"
  },
  64109: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      BloxdRecorderWasmError: () => DM,
      RECORDER_MODULE_ID: () => sM,
      loadRecorderModule: () => oM,
      markRecorderTrapped: () => YM,
      prefetchRecorderModule: () => fM,
      recorderMemoryBytes: () => AM,
      unloadRecorderModule: () => NM
    });
    var OM = {};
    iM.r(OM), iM.d(OM, {
      OjM: () => SM,
      KaM: () => RM,
      PQ: () => jM,
      default: () => uM,
      initSync: () => gM,
      HQ: () => aM,
      rjM: () => PM,
      ISM: () => nM
    });
    class SM {
      __destroy_into_raw() {
        const MM = this.__wbg_ptr;
        return this.__wbg_ptr = 0, zM.unregister(this), MM
      }
      free() {
        const MM = this.__destroy_into_raw();
        bM.wCgX(MM, 0)
      }
      busy() {
        return 0 !== bM.Mjk8(this.__wbg_ptr)
      }
      command(MM, rM) {
        return 0 !== bM.y1yb(this.__wbg_ptr, MM, rM)
      }
      KSM(MM) {
        return bM.bIvM(this.__wbg_ptr, MM) >>> 0
      }
      XSM() {
        bM.mJ8b(this.__wbg_ptr)
      }
      BSM() {
        return bM.VhoN(this.__wbg_ptr) >>> 0
      }
      FSM() {
        return bM.fOJ3(this.__wbg_ptr)
      }
      VSM() {
        return bM.b98t(this.__wbg_ptr) >>> 0
      }
      cSM() {
        return bM.icim(this.__wbg_ptr) >>> 0
      }
      feed(MM) {
        return bM.h2Sg(this.__wbg_ptr, MM) >>> 0
      }
      constructor() {
        const MM = bM.Rn1e();
        return this.__wbg_ptr = MM, zM.register(this, this.__wbg_ptr, this), this
      }
      TSM() {
        return bM.h9Gr(this.__wbg_ptr) >>> 0
      }
      qaM() {
        return bM.C1K1(this.__wbg_ptr) >>> 0
      }
      vSM(MM, rM, iM) {
        return 0 !== bM.rJOk(this.__wbg_ptr, MM, rM, iM)
      }
      stage(MM) {
        return bM.A3Y6(this.__wbg_ptr, MM) >>> 0
      }
      step() {
        return bM.Vzz0(this.__wbg_ptr) >>> 0
      }
    }

    function jM(MM, rM) {
      const iM = function(MM, rM, iM) {
          if (void 0 === iM) {
            const iM = GM.encode(MM),
              OM = rM(iM.length, 1) >>> 0;
            return hM().subarray(OM, OM + iM.length).set(iM), wM = iM.length, OM
          }
          let OM = MM.length,
            SM = rM(OM, 1) >>> 0;
          const jM = hM();
          let aM = 0;
          for (; aM < OM; aM++) {
            const rM = MM.charCodeAt(aM);
            if (rM > 127) break;
            jM[SM + aM] = rM
          }
          if (aM !== OM) {
            0 !== aM && (MM = MM.slice(aM)), SM = iM(SM, OM, OM = aM + 3 * MM.length, 1) >>> 0;
            const rM = hM().subarray(SM + aM, SM + OM);
            aM += GM.encodeInto(MM, rM).written, SM = iM(SM, OM, aM, 1) >>> 0
          }
          return wM = aM, SM
        }(MM, bM.a3yL, bM.hzhi),
        OM = wM,
        SM = bM.kink(iM, OM, rM);
      if (SM[1]) throw yM(SM[0])
    }

    function aM() {
      bM.UD0X()
    }

    function PM() {
      return bM.lX6L() >>> 0
    }

    function nM() {
      return yM(bM.PXrd())
    }

    function QM() {
      return {
        __proto__: null,
        d9L7: {
          __proto__: null,
          fLym: function(MM, rM) {
            return LM(Error(mM(MM, rM)))
          },
          gKZu: function() {
            return LM(bM.memory)
          },
          N09F: function(MM, rM) {
            throw new Error(mM(MM, rM))
          },
          g6GN: function(MM, rM) {
            console.error(mM(MM, rM))
          },
          MRMV: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (SM.prototype[Symbol.dispose] = SM.prototype.free);
    const zM = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((MM => bM?.__wbg_recordermodule_free(MM, 1)));

    function LM(MM) {
      dM === JM.length && JM.push(JM.length + 1);
      const rM = dM;
      return dM = JM[rM], JM[rM] = MM, rM
    }

    function mM(MM, rM) {
      return function(MM, rM) {
        UM += rM, UM >= EM && (lM = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), lM.decode(), UM = rM);
        return lM.decode(hM().subarray(MM, MM + rM))
      }(MM >>> 0, rM)
    }
    let HM = null;

    function hM() {
      return null !== HM && 0 !== HM.byteLength || (HM = new Uint8Array(bM.memory.buffer)), HM
    }
    let JM = new Array(1024).fill(void 0);
    JM.push(void 0, null, !0, !1);
    let dM = JM.length;

    function yM(MM) {
      const rM = function(MM) {
        return JM[MM]
      }(MM);
      return function(MM) {
        MM < 1028 || (JM[MM] = dM, dM = MM)
      }(MM), rM
    }
    let lM = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    lM.decode();
    const EM = 2146435072;
    let UM = 0;
    const GM = new TextEncoder;
    "encodeInto" in GM || (GM.encodeInto = function(MM, rM) {
      const iM = GM.encode(MM);
      return rM.set(iM), {
        read: MM.length,
        written: iM.length
      }
    });
    let CM, eM, bM, wM = 0;

    function tM(MM, rM) {
      return eM = MM, bM = MM.exports, CM = rM, HM = null, bM.d6To(), bM
    }

    function gM(MM) {
      if (void 0 !== bM) return bM;
      void 0 !== MM && (Object.getPrototypeOf(MM) === Object.prototype ? ({
        module: MM
      } = MM) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const rM = QM();
      MM instanceof WebAssembly.Module || (MM = new WebAssembly.Module(MM));
      return tM(new WebAssembly.Instance(MM, rM), MM)
    }
    async function uM(MM) {
      if (void 0 !== bM) return bM;
      void 0 !== MM && (Object.getPrototypeOf(MM) === Object.prototype ? ({
        module_or_path: MM
      } = MM) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const rM = QM();
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
      return tM(iM, OM)
    }

    function RM() {
      bM = void 0, eM = void 0, HM = null, JM = new Array(1024).fill(void 0), JM.push(void 0, null, !0, !1), dM = JM.length
    }
    var pM = iM(3188),
      WM = iM(7116);
    const sM = 2;
    class DM extends Error {
      stage;
      constructor(MM, rM) {
        super((0, pM.B)(MM, rM), {
          cause: rM
        }), this.name = "BloxdRecorderWasmError", this.stage = MM
      }
    }
    let kM = null;
    const ZM = function(MM) {
      let rM = null,
        iM = null,
        OM = null,
        SM = null;
      const jM = async () => {
        let iM = null;
        try {
          return iM = rM ??= (0, pM.E)(MM.url(), (0, WM.b)(MM.name)), await iM
        } catch (OM) {
          throw rM === iM && (rM = null), MM.error((0, pM.J)(OM), OM)
        }
      };
      return {
        load: () => {
          if (SM) return Promise.reject(SM);
          if (iM) return iM;
          const rM = (async () => {
            const rM = await jM();
            try {
              await MM.init(rM)
            } catch (iM) {
              throw MM.error("instantiate", iM)
            }
            return MM.bindings
          })();
          iM = rM, OM = rM;
          const aM = () => {
            OM === rM && (OM = null)
          };
          return rM.then(aM, (() => {
            aM(), iM === rM && (iM = null)
          })), rM
        },
        prefetch: async () => {
          SM || iM || await jM()
        },
        markTrapped: rM => (SM ??= MM.error("call", rM), SM),
        unload: () => {
          SM || !MM.reset || OM || (MM.reset(), iM = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new iM.U(iM(64113)),
      init: async MM => {
        await uM({
          module_or_path: MM
        }), kM = nM()
      },
      bindings: OM,
      error: (MM, rM) => new DM(MM, rM),
      reset: () => {
        RM(), kM = null
      }
    });

    function oM() {
      return ZM.load()
    }

    function fM() {
      return ZM.prefetch()
    }

    function YM(MM) {
      return ZM.markTrapped(MM)
    }

    function NM() {
      ZM.unload()
    }

    function AM() {
      return kM?.buffer.byteLength ?? 0
    }
  },
  7116: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM
    });
    var OM = iM(3188);
    const SM = {
      bloxd_wasm: () => "9c356b3ab0e1dec8279681c51821e86b0c769cac263f9e0f7f99f79b8758e8b4",
      bloxd_wasm_client: () => "80b728e2e1c07ea01ac0480b86847c41501509afdc4dddbfb5c028d2bf09dee0",
      bloxd_wasm_workers: () => "d70704eca78df456ad3913c0adf79f8b52dba4340cd12a1b6bf933cca972741b",
      bloxd_wasm_models: () => "3ad7e1eadb9490d2eafb88cd8a1e2fa3b217bc686d0f647a926d3b3e45f346b2",
      bloxd_wasm_webgpu: () => "b23ee9a016abf7c07a51e4dd79c87b95e00f54293086e61b89ff00c5c3054e76",
      bloxd_wasm_webgl: () => "c7e113e0705d9817aa1ea95296a04ca341e8508395d22c3a7f94a5cdffba84cd",
      bloxd_wasm_webgl1: () => "153c631ef0614b6599a45ffada7f02f5904513286e82e789064544612e2e6f87",
      bloxd_wasm_replay: () => "05e5306bf37c51cb76f69bd76cd489a1e480f7bb5d6f9b73f5c592d1fcaea336",
      bloxd_wasm_recorder: () => "ef71649d3e6f52a30e3021925f1ba0c1225f7afb503bf09554b23ac481798d94",
      bloxd_wasm_anim: () => "9b12a80af4e0001e472a77f851e64ef000ea347ea6f87cc37b924c310c6e0847",
      bloxd_wasm_textures: () => "6d67beffabd1d2d1a22a74a0da90a6f5a26efadd82c32dec4de58168d5b38069",
      bloxd_wasm_shader_pack: () => "48a1189cb064654273445fd97d029cf7474ee7e14007e5ca8ff8bb20718ac5cb"
    };
    var jM = iM(5069);

    function aM(MM) {
      const rM = Object.prototype.hasOwnProperty.call(SM, MM) ? SM[MM]() : void 0;
      if (void 0 !== rM) return {
        sha256: rM,
        onMismatch: jM.B
      };
      throw new OM.f(`${MM} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);