export const id = 61;
export const ids = [61];
export const modules = {
  60695: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/bloxd_wasm_recorder_bg.5464ed1801e3f4e9a1e5.wasm"
  },
  60693: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      BloxdRecorderWasmError: () => zD,
      RECORDER_MODULE_ID: () => VD,
      loadRecorderModule: () => LD,
      markRecorderTrapped: () => GD,
      prefetchRecorderModule: () => TD,
      recorderMemoryBytes: () => kD,
      unloadRecorderModule: () => RD
    });
    var ID = {};
    cD.r(ID), cD.d(ID, {
      NpD: () => pD,
      SfD: () => JD,
      NB: () => iD,
      default: () => qD,
      initSync: () => xD,
      gB: () => fD,
      opD: () => bD,
      QpD: () => QD
    });
    class pD {
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, SD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        PD.Nv87(DD, 0)
      }
      busy() {
        return 0 !== PD.lbrI(this.__wbg_ptr)
      }
      command(DD, CD) {
        return 0 !== PD.pFJx(this.__wbg_ptr, DD, CD)
      }
      wpD(DD) {
        return PD.ayFf(this.__wbg_ptr, DD) >>> 0
      }
      bpD() {
        PD.ONpa(this.__wbg_ptr)
      }
      fpD() {
        return PD.kmh8(this.__wbg_ptr) >>> 0
      }
      ipD() {
        return PD.Vmya(this.__wbg_ptr)
      }
      MpD() {
        return PD.fdHq(this.__wbg_ptr) >>> 0
      }
      tpD() {
        return PD.PYsu(this.__wbg_ptr) >>> 0
      }
      feed(DD) {
        return PD.iqMy(this.__wbg_ptr, DD) >>> 0
      }
      constructor() {
        const DD = PD.IMpa();
        return this.__wbg_ptr = DD, SD.register(this, this.__wbg_ptr, this), this
      }
      ypD() {
        return PD.Inwt(this.__wbg_ptr) >>> 0
      }
      BfD() {
        return PD.U3Yy(this.__wbg_ptr) >>> 0
      }
      ppD(DD, CD, cD) {
        return 0 !== PD.u6wX(this.__wbg_ptr, DD, CD, cD)
      }
      stage(DD) {
        return PD.iCAn(this.__wbg_ptr, DD) >>> 0
      }
      step() {
        return PD.gsGj(this.__wbg_ptr) >>> 0
      }
    }

    function iD(DD, CD) {
      const cD = function(DD, CD, cD) {
          if (void 0 === cD) {
            const cD = mD.encode(DD),
              ID = CD(cD.length, 1) >>> 0;
            return tD().subarray(ID, ID + cD.length).set(cD), HD = cD.length, ID
          }
          let ID = DD.length,
            pD = CD(ID, 1) >>> 0;
          const iD = tD();
          let fD = 0;
          for (; fD < ID; fD++) {
            const CD = DD.charCodeAt(fD);
            if (CD > 127) break;
            iD[pD + fD] = CD
          }
          if (fD !== ID) {
            0 !== fD && (DD = DD.slice(fD)), pD = cD(pD, ID, ID = fD + 3 * DD.length, 1) >>> 0;
            const CD = tD().subarray(pD + fD, pD + ID);
            fD += mD.encodeInto(DD, CD).written, pD = cD(pD, ID, fD, 1) >>> 0
          }
          return HD = fD, pD
        }(DD, PD.EJqN, PD.ardb),
        ID = HD,
        pD = PD.WlEb(cD, ID, CD);
      if (pD[1]) throw vD(pD[0])
    }

    function fD() {
      PD.dzTG()
    }

    function bD() {
      return PD.KWqw() >>> 0
    }

    function QD() {
      return vD(PD.cGtF())
    }

    function wD() {
      return {
        __proto__: null,
        UA7i: {
          __proto__: null,
          cLGn: function(DD, CD) {
            return BD(Error(yD(DD, CD)))
          },
          pmtx: function() {
            return BD(PD.memory)
          },
          DGuG: function(DD, CD) {
            throw new Error(yD(DD, CD))
          },
          dzop: function(DD, CD) {
            console.error(yD(DD, CD))
          },
          P756: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (pD.prototype[Symbol.dispose] = pD.prototype.free);
    const SD = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((DD => PD?.__wbg_recordermodule_free(DD, 1)));

    function BD(DD) {
      oD === ZD.length && ZD.push(ZD.length + 1);
      const CD = oD;
      return oD = ZD[CD], ZD[CD] = DD, CD
    }

    function yD(DD, CD) {
      return function(DD, CD) {
        XD += CD, XD >= gD && (ND = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), ND.decode(), XD = CD);
        return ND.decode(tD().subarray(DD, DD + CD))
      }(DD >>> 0, CD)
    }
    let MD = null;

    function tD() {
      return null !== MD && 0 !== MD.byteLength || (MD = new Uint8Array(PD.memory.buffer)), MD
    }
    let ZD = new Array(1024).fill(void 0);
    ZD.push(void 0, null, !0, !1);
    let oD = ZD.length;

    function vD(DD) {
      const CD = function(DD) {
        return ZD[DD]
      }(DD);
      return function(DD) {
        DD < 1028 || (ZD[DD] = oD, oD = DD)
      }(DD), CD
    }
    let ND = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    ND.decode();
    const gD = 2146435072;
    let XD = 0;
    const mD = new TextEncoder;
    "encodeInto" in mD || (mD.encodeInto = function(DD, CD) {
      const cD = mD.encode(DD);
      return CD.set(cD), {
        read: DD.length,
        written: cD.length
      }
    });
    let nD, OD, PD, HD = 0;

    function UD(DD, CD) {
      return OD = DD, PD = DD.exports, nD = CD, MD = null, PD.z79S(), PD
    }

    function xD(DD) {
      if (void 0 !== PD) return PD;
      void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
        module: DD
      } = DD) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const CD = wD();
      DD instanceof WebAssembly.Module || (DD = new WebAssembly.Module(DD));
      return UD(new WebAssembly.Instance(DD, CD), DD)
    }
    async function qD(DD) {
      if (void 0 !== PD) return PD;
      void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
        module_or_path: DD
      } = DD) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const CD = wD();
      ("string" === typeof DD || "function" === typeof Request && DD instanceof Request || "function" === typeof URL && DD instanceof URL) && (DD = fetch(DD));
      const {
        instance: cD,
        module: ID
      } = await async function(DD, CD) {
        if ("function" === typeof Response && DD instanceof Response) {
          if (!DD.ok) throw new Error(`failed to fetch Wasm: ${DD.status} ${DD.statusText} fetching '${DD.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(DD, CD)
          } catch (cD) {
            if (! function(DD) {
                switch (DD) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(DD.type) || "application/wasm" === DD.headers.get("Content-Type")) throw cD;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", cD)
          }
          const ID = await DD.arrayBuffer();
          return await WebAssembly.instantiate(ID, CD)
        } {
          const cD = await WebAssembly.instantiate(DD, CD);
          return cD instanceof WebAssembly.Instance ? {
            instance: cD,
            module: DD
          } : cD
        }
      }(await DD, CD);
      return UD(cD, ID)
    }

    function JD() {
      PD = void 0, OD = void 0, MD = null, ZD = new Array(1024).fill(void 0), ZD.push(void 0, null, !0, !1), oD = ZD.length
    }
    var KD = cD(3529),
      aD = cD(6372);
    const VD = 2;
    class zD extends Error {
      stage;
      constructor(DD, CD) {
        super((0, KD.D)(DD, CD), {
          cause: CD
        }), this.name = "BloxdRecorderWasmError", this.stage = DD
      }
    }
    let jD = null;
    const lD = function(DD) {
      let CD = null,
        cD = null,
        ID = null,
        pD = null;
      const iD = async () => {
        let cD = null;
        try {
          return cD = CD ??= (0, KD.H)(DD.url(), (0, aD.e)(DD.name)), await cD
        } catch (ID) {
          throw CD === cD && (CD = null), DD.error((0, KD.L)(ID), ID)
        }
      };
      return {
        load: () => {
          if (pD) return Promise.reject(pD);
          if (cD) return cD;
          const CD = (async () => {
            const CD = await iD();
            try {
              await DD.init(CD)
            } catch (cD) {
              throw DD.error("instantiate", cD)
            }
            return DD.bindings
          })();
          cD = CD, ID = CD;
          const fD = () => {
            ID === CD && (ID = null)
          };
          return CD.then(fD, (() => {
            fD(), cD === CD && (cD = null)
          })), CD
        },
        prefetch: async () => {
          pD || cD || await iD()
        },
        markTrapped: CD => (pD ??= DD.error("call", CD), pD),
        unload: () => {
          pD || !DD.reset || ID || (DD.reset(), cD = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new cD.U(cD(60695)),
      init: async DD => {
        await qD({
          module_or_path: DD
        }), jD = QD()
      },
      bindings: ID,
      error: (DD, CD) => new zD(DD, CD),
      reset: () => {
        JD(), jD = null
      }
    });

    function LD() {
      return lD.load()
    }

    function TD() {
      return lD.prefetch()
    }

    function GD(DD) {
      return lD.markTrapped(DD)
    }

    function RD() {
      lD.unload()
    }

    function kD() {
      return jD?.buffer.byteLength ?? 0
    }
  },
  6372: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD
    });
    var ID = cD(3529);
    const pD = {
      bloxd_wasm: () => "0d17f541f551a53f4dab724907dfd17c2f5e497131bb2f0746463cf7a85b45bd",
      bloxd_wasm_client: () => "d6e226c9d75d445b020168abe06f72e7048eeb030e81e1c51b07a85852e3609f",
      bloxd_wasm_workers: () => "a532339ee7770d546b5211eae4811431c5af4bef0f6bb1f1bd9d9cedfe642720",
      bloxd_wasm_models: () => "5831b416c1ed8d38d5851a3544f33f1dbf9ce134ab804da19046d201729a0e57",
      bloxd_wasm_webgpu: () => "f931d06e251abe5711fda5efd0c8f6b13c28366b4ac2d5d8847dd6de0a7c2502",
      bloxd_wasm_webgl: () => "76d7d6a654e5f0a7055ecf5f60b4be1c5fa941239d1fc25cad0eeb9117a9d50d",
      bloxd_wasm_webgl1: () => "bbb62056b165fcb2da03a0e26b34e721e5d1836ef01440ade5fd39a17ef2351f",
      bloxd_wasm_replay: () => "ab1e675b3f2654cebc6cb9fcc2eb625d7e3becf9545d6aaec6d35e28d2b68a56",
      bloxd_wasm_recorder: () => "191548def26c8771cc0d55137afcbedfc047ac41e34a07f34acfc4a9c88d9352",
      bloxd_wasm_anim: () => "8df2ff23aed1fe182321a7874775d9d81cd1a481ed48f89ab986aeb54b6aba72",
      bloxd_wasm_textures: () => "24200f89bea0ac9a6bb6d6c36427b0a05df327d7b83abe32fb2d1e0b136a1861",
      bloxd_wasm_shader_pack: () => "7e7c31d2eef819d6f78ae283bdf7f325715093016c9b3415b5500d163bb24552"
    };
    var iD = cD(4495);

    function fD(DD) {
      const CD = Object.prototype.hasOwnProperty.call(pD, DD) ? pD[DD]() : void 0;
      if (void 0 !== CD) return {
        sha256: CD,
        onMismatch: iD.y
      };
      throw new ID.h(`${DD} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);