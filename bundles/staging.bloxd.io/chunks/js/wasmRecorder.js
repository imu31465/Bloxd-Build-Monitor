export const id = 61;
export const ids = [61];
export const modules = {
  60346: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/bloxd_wasm_recorder_bg.ce0e483e8242470e23c3.wasm"
  },
  60337: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      BloxdRecorderWasmError: () => aT,
      RECORDER_MODULE_ID: () => UT,
      loadRecorderModule: () => OT,
      markRecorderTrapped: () => nT,
      prefetchRecorderModule: () => HT,
      recorderMemoryBytes: () => ZT,
      unloadRecorderModule: () => qT
    });
    var iT = {};
    IT.r(iT), IT.d(iT, {
      JzT: () => zT,
      RWT: () => CT,
      DD: () => kT,
      default: () => fT,
      initSync: () => ET,
      LD: () => WT,
      CzT: () => XT,
      wzT: () => BT
    });
    class zT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ST.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        RT.wWb3(TT, 0)
      }
      busy() {
        return 0 !== RT.tDic(this.__wbg_ptr)
      }
      command(TT, oT) {
        return 0 !== RT.LvQ9(this.__wbg_ptr, TT, oT)
      }
      ezT(TT) {
        return RT.vLuc(this.__wbg_ptr, TT) >>> 0
      }
      hzT() {
        RT.Zlva(this.__wbg_ptr)
      }
      gzT() {
        return RT.BksK(this.__wbg_ptr) >>> 0
      }
      AzT() {
        return RT.VhIO(this.__wbg_ptr)
      }
      vzT() {
        return RT.BDSj(this.__wbg_ptr) >>> 0
      }
      EzT() {
        return RT.mgia(this.__wbg_ptr) >>> 0
      }
      feed(TT) {
        return RT.pc9Z(this.__wbg_ptr, TT) >>> 0
      }
      constructor() {
        const TT = RT.TBqD();
        return this.__wbg_ptr = TT, ST.register(this, this.__wbg_ptr, this), this
      }
      uzT() {
        return RT.SHYY(this.__wbg_ptr) >>> 0
      }
      uWT() {
        return RT.HPb8(this.__wbg_ptr) >>> 0
      }
      rzT(TT, oT, IT) {
        return 0 !== RT.zdiO(this.__wbg_ptr, TT, oT, IT)
      }
      stage(TT) {
        return RT.VtyC(this.__wbg_ptr, TT) >>> 0
      }
      step() {
        return RT.IM9R(this.__wbg_ptr) >>> 0
      }
    }

    function kT(TT, oT) {
      const IT = function(TT, oT, IT) {
          if (void 0 === IT) {
            const IT = wT.encode(TT),
              iT = oT(IT.length, 1) >>> 0;
            return cT().subarray(iT, iT + IT.length).set(IT), uT = IT.length, iT
          }
          let iT = TT.length,
            zT = oT(iT, 1) >>> 0;
          const kT = cT();
          let WT = 0;
          for (; WT < iT; WT++) {
            const oT = TT.charCodeAt(WT);
            if (oT > 127) break;
            kT[zT + WT] = oT
          }
          if (WT !== iT) {
            0 !== WT && (TT = TT.slice(WT)), zT = IT(zT, iT, iT = WT + 3 * TT.length, 1) >>> 0;
            const oT = cT().subarray(zT + WT, zT + iT);
            WT += wT.encodeInto(TT, oT).written, zT = IT(zT, iT, WT, 1) >>> 0
          }
          return uT = WT, zT
        }(TT, RT.EbCH, RT.kC6r),
        iT = uT,
        zT = RT.nYKN(IT, iT, oT);
      if (zT[1]) throw rT(zT[0])
    }

    function WT() {
      RT.FED6()
    }

    function XT() {
      return RT.w1b0() >>> 0
    }

    function BT() {
      return rT(RT.xrXP())
    }

    function FT() {
      return {
        __proto__: null,
        t8I8: {
          __proto__: null,
          nUkl: function(TT, oT) {
            return DT(Error(LT(TT, oT)))
          },
          bJ9x: function() {
            return DT(RT.memory)
          },
          t54z: function(TT, oT) {
            throw new Error(LT(TT, oT))
          },
          F1Tw: function(TT, oT) {
            console.error(LT(TT, oT))
          },
          o3Vq: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (zT.prototype[Symbol.dispose] = zT.prototype.free);
    const ST = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((TT => RT?.__wbg_recordermodule_free(TT, 1)));

    function DT(TT) {
      MT === KT.length && KT.push(KT.length + 1);
      const oT = MT;
      return MT = KT[oT], KT[oT] = TT, oT
    }

    function LT(TT, oT) {
      return function(TT, oT) {
        hT += oT, hT >= gT && (AT = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), AT.decode(), hT = oT);
        return AT.decode(cT().subarray(TT, TT + oT))
      }(TT >>> 0, oT)
    }
    let xT = null;

    function cT() {
      return null !== xT && 0 !== xT.byteLength || (xT = new Uint8Array(RT.memory.buffer)), xT
    }
    let KT = new Array(1024).fill(void 0);
    KT.push(void 0, null, !0, !1);
    let MT = KT.length;

    function rT(TT) {
      const oT = function(TT) {
        return KT[TT]
      }(TT);
      return function(TT) {
        TT < 1028 || (KT[TT] = MT, MT = TT)
      }(TT), oT
    }
    let AT = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    AT.decode();
    const gT = 2146435072;
    let hT = 0;
    const wT = new TextEncoder;
    "encodeInto" in wT || (wT.encodeInto = function(TT, oT) {
      const IT = wT.encode(TT);
      return oT.set(IT), {
        read: TT.length,
        written: IT.length
      }
    });
    let mT, eT, RT, uT = 0;

    function vT(TT, oT) {
      return eT = TT, RT = TT.exports, mT = oT, xT = null, RT.GPWB(), RT
    }

    function ET(TT) {
      if (void 0 !== RT) return RT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module: TT
      } = TT) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const oT = FT();
      TT instanceof WebAssembly.Module || (TT = new WebAssembly.Module(TT));
      return vT(new WebAssembly.Instance(TT, oT), TT)
    }
    async function fT(TT) {
      if (void 0 !== RT) return RT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module_or_path: TT
      } = TT) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const oT = FT();
      ("string" === typeof TT || "function" === typeof Request && TT instanceof Request || "function" === typeof URL && TT instanceof URL) && (TT = fetch(TT));
      const {
        instance: IT,
        module: iT
      } = await async function(TT, oT) {
        if ("function" === typeof Response && TT instanceof Response) {
          if (!TT.ok) throw new Error(`failed to fetch Wasm: ${TT.status} ${TT.statusText} fetching '${TT.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(TT, oT)
          } catch (IT) {
            if (! function(TT) {
                switch (TT) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(TT.type) || "application/wasm" === TT.headers.get("Content-Type")) throw IT;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", IT)
          }
          const iT = await TT.arrayBuffer();
          return await WebAssembly.instantiate(iT, oT)
        } {
          const IT = await WebAssembly.instantiate(TT, oT);
          return IT instanceof WebAssembly.Instance ? {
            instance: IT,
            module: TT
          } : IT
        }
      }(await TT, oT);
      return vT(IT, iT)
    }

    function CT() {
      RT = void 0, eT = void 0, xT = null, KT = new Array(1024).fill(void 0), KT.push(void 0, null, !0, !1), MT = KT.length
    }
    var jT = IT(3280),
      JT = IT(6123);
    const UT = 2;
    class aT extends Error {
      stage;
      constructor(TT, oT) {
        super((0, jT.G)(TT, oT), {
          cause: oT
        }), this.name = "BloxdRecorderWasmError", this.stage = TT
      }
    }
    let YT = null;
    const QT = function(TT) {
      let oT = null,
        IT = null,
        iT = null,
        zT = null;
      const kT = async () => {
        let IT = null;
        try {
          return IT = oT ??= (0, jT.J)(TT.url(), (0, JT.c)(TT.name)), await IT
        } catch (iT) {
          throw oT === IT && (oT = null), TT.error((0, jT.N)(iT), iT)
        }
      };
      return {
        load: () => {
          if (zT) return Promise.reject(zT);
          if (IT) return IT;
          const oT = (async () => {
            const oT = await kT();
            try {
              await TT.init(oT)
            } catch (IT) {
              throw TT.error("instantiate", IT)
            }
            return TT.bindings
          })();
          IT = oT, iT = oT;
          const WT = () => {
            iT === oT && (iT = null)
          };
          return oT.then(WT, (() => {
            WT(), IT === oT && (IT = null)
          })), oT
        },
        prefetch: async () => {
          zT || IT || await kT()
        },
        markTrapped: oT => (zT ??= TT.error("call", oT), zT),
        unload: () => {
          zT || !TT.reset || iT || (TT.reset(), IT = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new IT.U(IT(60346)),
      init: async TT => {
        await fT({
          module_or_path: TT
        }), YT = BT()
      },
      bindings: iT,
      error: (TT, oT) => new aT(TT, oT),
      reset: () => {
        CT(), YT = null
      }
    });

    function OT() {
      return QT.load()
    }

    function HT() {
      return QT.prefetch()
    }

    function nT(TT) {
      return QT.markTrapped(TT)
    }

    function qT() {
      QT.unload()
    }

    function ZT() {
      return YT?.buffer.byteLength ?? 0
    }
  },
  6123: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT
    });
    var iT = IT(3280);
    const zT = {
      bloxd_wasm: () => "891b125e1fa53c747db8046ca1a7828990783e6318b475060b2689b2c62ec64b",
      bloxd_wasm_client: () => "afe376ddb7e074ef28dc003cae65be2019ba85870176102f5c99327651531a90",
      bloxd_wasm_workers: () => "bdacf110fdd54ff050ae9c3d3c9c40fa9932196a316574c38050f09f93d5d4d0",
      bloxd_wasm_models: () => "d431807fb8651e0a5be03886feec149ab2c5d8f7292513bb4f5f6f8198ccd3fa",
      bloxd_wasm_webgpu: () => "36744cc13e8d59f3d9a2cc30379d81ca4b0e563c1ccd9032a15b3d5d2fd1f9b1",
      bloxd_wasm_webgl: () => "d7f8f069066a9513edfd41a54bdc46943132c54fd47d41226907a9c5957c5a3e",
      bloxd_wasm_webgl1: () => "1f274f498c33507fd74ae865400b574dec316d2e2535b8bdd60f2679aec71305",
      bloxd_wasm_replay: () => "308a6b9500ce1acc37831e57249009d9c05a3a9b3821582ea4fe8330d515270a",
      bloxd_wasm_recorder: () => "c2dd3c772eaa41d9a4cfcd9261204dae143353c48db7c49556d0089946997bff",
      bloxd_wasm_anim: () => "92da9dc930879a101e815385ac8673ac818daddd3cc10a9e6f242c32dd68abe8",
      bloxd_wasm_textures: () => "de7050a0a81f4523efadc506fed6ff11ef5e5819f30494428008fcaceee90545",
      bloxd_wasm_shader_pack: () => "012d029967fec4420d84f73dad4d7e807ec1901518f66edd03a82520f373fb43"
    };
    var kT = IT(4191);

    function WT(TT) {
      const oT = Object.prototype.hasOwnProperty.call(zT, TT) ? zT[TT]() : void 0;
      if (void 0 !== oT) return {
        sha256: oT,
        onMismatch: kT.y
      };
      throw new iT.k(`${TT} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);