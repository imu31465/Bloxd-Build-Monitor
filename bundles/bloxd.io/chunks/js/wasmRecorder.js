export const id = 64;
export const ids = [64];
export const modules = {
  61122: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/bloxd_wasm_recorder_bg.9a5523a4c775af0b5e64.wasm"
  },
  61120: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      BloxdRecorderWasmError: () => EC,
      RECORDER_MODULE_ID: () => HC,
      loadRecorderModule: () => cC,
      markRecorderTrapped: () => rC,
      prefetchRecorderModule: () => uC,
      recorderMemoryBytes: () => TC,
      unloadRecorderModule: () => sC
    });
    var QC = {};
    ZC.r(QC), ZC.d(QC, {
      TwC: () => wC,
      mnC: () => YC,
      SW: () => bC,
      default: () => KC,
      initSync: () => hC,
      pW: () => nC,
      rwC: () => fC,
      mwC: () => oC
    });
    class wC {
      __destroy_into_raw() {
        const CC = this.__wbg_ptr;
        return this.__wbg_ptr = 0, FC.unregister(this), CC
      }
      free() {
        const CC = this.__destroy_into_raw();
        iC.nx5I(CC, 0)
      }
      busy() {
        return 0 !== iC.UP47(this.__wbg_ptr)
      }
      command(CC, zC) {
        return 0 !== iC.Wfa7(this.__wbg_ptr, CC, zC)
      }
      HwC(CC) {
        return iC.oipZ(this.__wbg_ptr, CC) >>> 0
      }
      dwC() {
        iC.AM3a(this.__wbg_ptr)
      }
      YwC() {
        return iC.GTAZ(this.__wbg_ptr) >>> 0
      }
      KwC() {
        return iC.Okmm(this.__wbg_ptr)
      }
      XwC() {
        return iC.EZtl(this.__wbg_ptr) >>> 0
      }
      cwC() {
        return iC.BQju(this.__wbg_ptr) >>> 0
      }
      feed(CC) {
        return iC.Vk4U(this.__wbg_ptr, CC) >>> 0
      }
      constructor() {
        const CC = iC.pJpd();
        return this.__wbg_ptr = CC, FC.register(this, this.__wbg_ptr, this), this
      }
      lwC() {
        return iC.tEZp(this.__wbg_ptr) >>> 0
      }
      HnC() {
        return iC.rpg8(this.__wbg_ptr) >>> 0
      }
      hwC(CC, zC, ZC) {
        return 0 !== iC.OFzR(this.__wbg_ptr, CC, zC, ZC)
      }
      stage(CC) {
        return iC.U3lX(this.__wbg_ptr, CC) >>> 0
      }
      step() {
        return iC.ylko(this.__wbg_ptr) >>> 0
      }
    }

    function bC(CC, zC) {
      const ZC = function(CC, zC, ZC) {
          if (void 0 === ZC) {
            const ZC = xC.encode(CC),
              QC = zC(ZC.length, 1) >>> 0;
            return gC().subarray(QC, QC + ZC.length).set(ZC), vC = ZC.length, QC
          }
          let QC = CC.length,
            wC = zC(QC, 1) >>> 0;
          const bC = gC();
          let nC = 0;
          for (; nC < QC; nC++) {
            const zC = CC.charCodeAt(nC);
            if (zC > 127) break;
            bC[wC + nC] = zC
          }
          if (nC !== QC) {
            0 !== nC && (CC = CC.slice(nC)), wC = ZC(wC, QC, QC = nC + 3 * CC.length, 1) >>> 0;
            const zC = gC().subarray(wC + nC, wC + QC);
            nC += xC.encodeInto(CC, zC).written, wC = ZC(wC, QC, nC, 1) >>> 0
          }
          return vC = nC, wC
        }(CC, iC.wQMc, iC.ffpy),
        QC = vC,
        wC = iC.vHQA(ZC, QC, zC);
      if (wC[1]) throw PC(wC[0])
    }

    function nC() {
      iC.hUYg()
    }

    function fC() {
      return iC.XsMT() >>> 0
    }

    function oC() {
      return PC(iC.jQyZ())
    }

    function qC() {
      return {
        __proto__: null,
        muIT: {
          __proto__: null,
          lwCA: function(CC, zC) {
            return WC(Error(NC(CC, zC)))
          },
          FBVr: function() {
            return WC(iC.memory)
          },
          KlUi: function(CC, zC) {
            throw new Error(NC(CC, zC))
          },
          cpmA: function(CC, zC) {
            console.error(NC(CC, zC))
          },
          LES8: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (wC.prototype[Symbol.dispose] = wC.prototype.free);
    const FC = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((CC => iC?.__wbg_recordermodule_free(CC, 1)));

    function WC(CC) {
      pC === SC.length && SC.push(SC.length + 1);
      const zC = pC;
      return pC = SC[zC], SC[zC] = CC, zC
    }

    function NC(CC, zC) {
      return function(CC, zC) {
        AC += zC, AC >= RC && (GC = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), GC.decode(), AC = zC);
        return GC.decode(gC().subarray(CC, CC + zC))
      }(CC >>> 0, zC)
    }
    let MC = null;

    function gC() {
      return null !== MC && 0 !== MC.byteLength || (MC = new Uint8Array(iC.memory.buffer)), MC
    }
    let SC = new Array(1024).fill(void 0);
    SC.push(void 0, null, !0, !1);
    let pC = SC.length;

    function PC(CC) {
      const zC = function(CC) {
        return SC[CC]
      }(CC);
      return function(CC) {
        CC < 1028 || (SC[CC] = pC, pC = CC)
      }(CC), zC
    }
    let GC = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    GC.decode();
    const RC = 2146435072;
    let AC = 0;
    const xC = new TextEncoder;
    "encodeInto" in xC || (xC.encodeInto = function(CC, zC) {
      const ZC = xC.encode(CC);
      return zC.set(ZC), {
        read: CC.length,
        written: ZC.length
      }
    });
    let JC, IC, iC, vC = 0;

    function eC(CC, zC) {
      return IC = CC, iC = CC.exports, JC = zC, MC = null, iC.vNtT(), iC
    }

    function hC(CC) {
      if (void 0 !== iC) return iC;
      void 0 !== CC && (Object.getPrototypeOf(CC) === Object.prototype ? ({
        module: CC
      } = CC) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const zC = qC();
      CC instanceof WebAssembly.Module || (CC = new WebAssembly.Module(CC));
      return eC(new WebAssembly.Instance(CC, zC), CC)
    }
    async function KC(CC) {
      if (void 0 !== iC) return iC;
      void 0 !== CC && (Object.getPrototypeOf(CC) === Object.prototype ? ({
        module_or_path: CC
      } = CC) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const zC = qC();
      ("string" === typeof CC || "function" === typeof Request && CC instanceof Request || "function" === typeof URL && CC instanceof URL) && (CC = fetch(CC));
      const {
        instance: ZC,
        module: QC
      } = await async function(CC, zC) {
        if ("function" === typeof Response && CC instanceof Response) {
          if (!CC.ok) throw new Error(`failed to fetch Wasm: ${CC.status} ${CC.statusText} fetching '${CC.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(CC, zC)
          } catch (ZC) {
            if (! function(CC) {
                switch (CC) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(CC.type) || "application/wasm" === CC.headers.get("Content-Type")) throw ZC;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ZC)
          }
          const QC = await CC.arrayBuffer();
          return await WebAssembly.instantiate(QC, zC)
        } {
          const ZC = await WebAssembly.instantiate(CC, zC);
          return ZC instanceof WebAssembly.Instance ? {
            instance: ZC,
            module: CC
          } : ZC
        }
      }(await CC, zC);
      return eC(ZC, QC)
    }

    function YC() {
      iC = void 0, IC = void 0, MC = null, SC = new Array(1024).fill(void 0), SC.push(void 0, null, !0, !1), pC = SC.length
    }
    var dC = ZC(2856),
      mC = ZC(6616);
    const HC = 2;
    class EC extends Error {
      stage;
      constructor(CC, zC) {
        super((0, dC.F)(CC, zC), {
          cause: zC
        }), this.name = "BloxdRecorderWasmError", this.stage = CC
      }
    }
    let lC = null;
    const XC = function(CC) {
      let zC = null,
        ZC = null,
        QC = null,
        wC = null;
      const bC = async () => {
        let ZC = null;
        try {
          return ZC = zC ??= (0, dC.I)(CC.url(), (0, mC.e)(CC.name)), await ZC
        } catch (QC) {
          throw zC === ZC && (zC = null), CC.error((0, dC.P)(QC), QC)
        }
      };
      return {
        load: () => {
          if (wC) return Promise.reject(wC);
          if (ZC) return ZC;
          const zC = (async () => {
            const zC = await bC();
            try {
              await CC.init(zC)
            } catch (ZC) {
              throw CC.error("instantiate", ZC)
            }
            return CC.bindings
          })();
          ZC = zC, QC = zC;
          const nC = () => {
            QC === zC && (QC = null)
          };
          return zC.then(nC, (() => {
            nC(), ZC === zC && (ZC = null)
          })), zC
        },
        prefetch: async () => {
          wC || ZC || await bC()
        },
        markTrapped: zC => (wC ??= CC.error("call", zC), wC),
        unload: () => {
          wC || !CC.reset || QC || (CC.reset(), ZC = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new ZC.U(ZC(61122)),
      init: async CC => {
        await KC({
          module_or_path: CC
        }), lC = oC()
      },
      bindings: QC,
      error: (CC, zC) => new EC(CC, zC),
      reset: () => {
        YC(), lC = null
      }
    });

    function cC() {
      return XC.load()
    }

    function uC() {
      return XC.prefetch()
    }

    function rC(CC) {
      return XC.markTrapped(CC)
    }

    function sC() {
      XC.unload()
    }

    function TC() {
      return lC?.buffer.byteLength ?? 0
    }
  },
  6616: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC
    });
    var QC = ZC(2856);
    const wC = {
      bloxd_wasm: () => "64213eca4658377ef00b2e8eca80917f662fb244ea5072aa932d693e87ee34a4",
      bloxd_wasm_client: () => "fc3cf04d5b7854fba80fd4d4a48c70cd5cfa75bed057ae2631f2eac809bb72d6",
      bloxd_wasm_workers: () => "6e4d4a97778a79d3d1539bba135e452823879ae247a4075c185762ab01e74bb8",
      bloxd_wasm_models: () => "a9e6377967b2efe08bc1c2c1ba7803c68faf84b1979c48237b60c2a5371ef6f0",
      bloxd_wasm_webgpu: () => "0c329bbf92b5e8dc40c9c50de71fa16d3214efd01ed90e0c806f70cc5dc4a678",
      bloxd_wasm_webgl: () => "1a61f36acda217637aa35c038c864802f4a597fe34b899397ecb8b3f7a6010d4",
      bloxd_wasm_webgl1: () => "fa07e900fdcc5ea52a844349243c3504ebaca1ebb1ff15c9d66db4fcc37f2404",
      bloxd_wasm_replay: () => "37f9a110c636f28820cc4bb4d1a11de7ceaafb9c9325a7fee4fe688876d19d67",
      bloxd_wasm_recorder: () => "2775bc33cdba5c03f27ade88929e4fdaf4b4c582cc3952198fb551b59541422e",
      bloxd_wasm_anim: () => "70063f4837211665774447f408deefe4678a8f5e792ddcf5187eb1ba64be142f",
      bloxd_wasm_textures: () => "6b2065e443e650047a940883eaf075d2749daed9964ef622b7e96432f1c0c8b1",
      bloxd_wasm_shader_pack: () => "90a9cbfbe256edc10cec287ff1dfdba1125031ab0d4dcf3f4270800ba2f9cb4a"
    };
    var bC = ZC(4635);

    function nC(CC) {
      const zC = Object.prototype.hasOwnProperty.call(wC, CC) ? wC[CC]() : void 0;
      if (void 0 !== zC) return {
        sha256: zC,
        onMismatch: bC.w
      };
      throw new QC.h(`${CC} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);