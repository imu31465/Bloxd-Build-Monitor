export const id = 57;
export const ids = [57];
export const modules = {
  59727: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/bloxd_wasm_recorder_bg.0e836ff072c8337d8174.wasm"
  },
  59722: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      BloxdRecorderWasmError: () => HJ,
      RECORDER_MODULE_ID: () => gJ,
      loadRecorderModule: () => pJ,
      markRecorderTrapped: () => zJ,
      prefetchRecorderModule: () => dJ,
      recorderMemoryBytes: () => OJ,
      unloadRecorderModule: () => NJ
    });
    var FJ = {};
    ZJ.r(FJ), ZJ.d(FJ, {
      kUJ: () => UJ,
      yXJ: () => bJ,
      CY: () => eJ,
      default: () => MJ,
      initSync: () => IJ,
      uY: () => XJ,
      HUJ: () => AJ,
      yUJ: () => qJ
    });
    class UJ {
      __destroy_into_raw() {
        const JJ = this.__wbg_ptr;
        return this.__wbg_ptr = 0, YJ.unregister(this), JJ
      }
      free() {
        const JJ = this.__destroy_into_raw();
        KJ.oXmS(JJ, 0)
      }
      busy() {
        return 0 !== KJ.I7JD(this.__wbg_ptr)
      }
      command(JJ, cJ) {
        return 0 !== KJ.eyh0(this.__wbg_ptr, JJ, cJ)
      }
      SUJ(JJ) {
        return KJ.gz6I(this.__wbg_ptr, JJ) >>> 0
      }
      KUJ() {
        KJ.VgxB(this.__wbg_ptr)
      }
      VUJ() {
        return KJ.A1Eu(this.__wbg_ptr) >>> 0
      }
      EUJ() {
        return KJ.OMgb(this.__wbg_ptr)
      }
      wUJ() {
        return KJ.sSW0(this.__wbg_ptr) >>> 0
      }
      WUJ() {
        return KJ.AAAi(this.__wbg_ptr) >>> 0
      }
      feed(JJ) {
        return KJ.NW4R(this.__wbg_ptr, JJ) >>> 0
      }
      constructor() {
        const JJ = KJ.ylpU();
        return this.__wbg_ptr = JJ, YJ.register(this, this.__wbg_ptr, this), this
      }
      bUJ() {
        return KJ.fdDw(this.__wbg_ptr) >>> 0
      }
      SXJ() {
        return KJ.tzAd(this.__wbg_ptr) >>> 0
      }
      QUJ(JJ, cJ, ZJ) {
        return 0 !== KJ.hbF4(this.__wbg_ptr, JJ, cJ, ZJ)
      }
      stage(JJ) {
        return KJ.jAbu(this.__wbg_ptr, JJ) >>> 0
      }
      step() {
        return KJ.Nl7e(this.__wbg_ptr) >>> 0
      }
    }

    function eJ(JJ, cJ) {
      const ZJ = function(JJ, cJ, ZJ) {
          if (void 0 === ZJ) {
            const ZJ = QJ.encode(JJ),
              FJ = cJ(ZJ.length, 1) >>> 0;
            return nJ().subarray(FJ, FJ + ZJ.length).set(ZJ), yJ = ZJ.length, FJ
          }
          let FJ = JJ.length,
            UJ = cJ(FJ, 1) >>> 0;
          const eJ = nJ();
          let XJ = 0;
          for (; XJ < FJ; XJ++) {
            const cJ = JJ.charCodeAt(XJ);
            if (cJ > 127) break;
            eJ[UJ + XJ] = cJ
          }
          if (XJ !== FJ) {
            0 !== XJ && (JJ = JJ.slice(XJ)), UJ = ZJ(UJ, FJ, FJ = XJ + 3 * JJ.length, 1) >>> 0;
            const cJ = nJ().subarray(UJ + XJ, UJ + FJ);
            XJ += QJ.encodeInto(JJ, cJ).written, UJ = ZJ(UJ, FJ, XJ, 1) >>> 0
          }
          return yJ = XJ, UJ
        }(JJ, KJ.bmry, KJ.Y00j),
        FJ = yJ,
        UJ = KJ.HSZR(ZJ, FJ, cJ);
      if (UJ[1]) throw xJ(UJ[0])
    }

    function XJ() {
      KJ.iSOC()
    }

    function AJ() {
      return KJ.s2qZ() >>> 0
    }

    function qJ() {
      return xJ(KJ.Jcig())
    }

    function jJ() {
      return {
        __proto__: null,
        SZTe: {
          __proto__: null,
          YZ74: function(JJ, cJ) {
            return hJ(Error(DJ(JJ, cJ)))
          },
          ez4A: function() {
            return hJ(KJ.memory)
          },
          dXJT: function(JJ, cJ) {
            throw new Error(DJ(JJ, cJ))
          },
          DUwX: function(JJ, cJ) {
            console.error(DJ(JJ, cJ))
          },
          WSV4: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (UJ.prototype[Symbol.dispose] = UJ.prototype.free);
    const YJ = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((JJ => KJ?.__wbg_recordermodule_free(JJ, 1)));

    function hJ(JJ) {
      fJ === GJ.length && GJ.push(GJ.length + 1);
      const cJ = fJ;
      return fJ = GJ[cJ], GJ[cJ] = JJ, cJ
    }

    function DJ(JJ, cJ) {
      return function(JJ, cJ) {
        mJ += cJ, mJ >= vJ && (rJ = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), rJ.decode(), mJ = cJ);
        return rJ.decode(nJ().subarray(JJ, JJ + cJ))
      }(JJ >>> 0, cJ)
    }
    let sJ = null;

    function nJ() {
      return null !== sJ && 0 !== sJ.byteLength || (sJ = new Uint8Array(KJ.memory.buffer)), sJ
    }
    let GJ = new Array(1024).fill(void 0);
    GJ.push(void 0, null, !0, !1);
    let fJ = GJ.length;

    function xJ(JJ) {
      const cJ = function(JJ) {
        return GJ[JJ]
      }(JJ);
      return function(JJ) {
        JJ < 1028 || (GJ[JJ] = fJ, fJ = JJ)
      }(JJ), cJ
    }
    let rJ = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    rJ.decode();
    const vJ = 2146435072;
    let mJ = 0;
    const QJ = new TextEncoder;
    "encodeInto" in QJ || (QJ.encodeInto = function(JJ, cJ) {
      const ZJ = QJ.encode(JJ);
      return cJ.set(ZJ), {
        read: JJ.length,
        written: ZJ.length
      }
    });
    let EJ, VJ, KJ, yJ = 0;

    function SJ(JJ, cJ) {
      return VJ = JJ, KJ = JJ.exports, EJ = cJ, sJ = null, KJ.CrJE(), KJ
    }

    function IJ(JJ) {
      if (void 0 !== KJ) return KJ;
      void 0 !== JJ && (Object.getPrototypeOf(JJ) === Object.prototype ? ({
        module: JJ
      } = JJ) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const cJ = jJ();
      JJ instanceof WebAssembly.Module || (JJ = new WebAssembly.Module(JJ));
      return SJ(new WebAssembly.Instance(JJ, cJ), JJ)
    }
    async function MJ(JJ) {
      if (void 0 !== KJ) return KJ;
      void 0 !== JJ && (Object.getPrototypeOf(JJ) === Object.prototype ? ({
        module_or_path: JJ
      } = JJ) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const cJ = jJ();
      ("string" === typeof JJ || "function" === typeof Request && JJ instanceof Request || "function" === typeof URL && JJ instanceof URL) && (JJ = fetch(JJ));
      const {
        instance: ZJ,
        module: FJ
      } = await async function(JJ, cJ) {
        if ("function" === typeof Response && JJ instanceof Response) {
          if (!JJ.ok) throw new Error(`failed to fetch Wasm: ${JJ.status} ${JJ.statusText} fetching '${JJ.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(JJ, cJ)
          } catch (ZJ) {
            if (! function(JJ) {
                switch (JJ) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(JJ.type) || "application/wasm" === JJ.headers.get("Content-Type")) throw ZJ;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ZJ)
          }
          const FJ = await JJ.arrayBuffer();
          return await WebAssembly.instantiate(FJ, cJ)
        } {
          const ZJ = await WebAssembly.instantiate(JJ, cJ);
          return ZJ instanceof WebAssembly.Instance ? {
            instance: ZJ,
            module: JJ
          } : ZJ
        }
      }(await JJ, cJ);
      return SJ(ZJ, FJ)
    }

    function bJ() {
      KJ = void 0, VJ = void 0, sJ = null, GJ = new Array(1024).fill(void 0), GJ.push(void 0, null, !0, !1), fJ = GJ.length
    }
    var wJ = ZJ(3183),
      WJ = ZJ(5963);
    const gJ = 2;
    class HJ extends Error {
      stage;
      constructor(JJ, cJ) {
        super((0, wJ.F)(JJ, cJ), {
          cause: cJ
        }), this.name = "BloxdRecorderWasmError", this.stage = JJ
      }
    }
    let PJ = null;
    const kJ = function(JJ) {
      let cJ = null,
        ZJ = null,
        FJ = null,
        UJ = null;
      const eJ = async () => {
        let ZJ = null;
        try {
          return ZJ = cJ ??= (0, wJ.H)(JJ.url(), (0, WJ.e)(JJ.name)), await ZJ
        } catch (FJ) {
          throw cJ === ZJ && (cJ = null), JJ.error((0, wJ.O)(FJ), FJ)
        }
      };
      return {
        load: () => {
          if (UJ) return Promise.reject(UJ);
          if (ZJ) return ZJ;
          const cJ = (async () => {
            const cJ = await eJ();
            try {
              await JJ.init(cJ)
            } catch (ZJ) {
              throw JJ.error("instantiate", ZJ)
            }
            return JJ.Zn
          })();
          ZJ = cJ, FJ = cJ;
          const XJ = () => {
            FJ === cJ && (FJ = null)
          };
          return cJ.then(XJ, (() => {
            XJ(), ZJ === cJ && (ZJ = null)
          })), cJ
        },
        prefetch: async () => {
          UJ || ZJ || await eJ()
        },
        markTrapped: cJ => (UJ ??= JJ.error("call", cJ), UJ),
        unload: () => {
          UJ || !JJ.reset || FJ || (JJ.reset(), ZJ = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new ZJ.U(ZJ(59727)),
      init: async JJ => {
        await MJ({
          module_or_path: JJ
        }), PJ = qJ()
      },
      Zn: FJ,
      error: (JJ, cJ) => new HJ(JJ, cJ),
      reset: () => {
        bJ(), PJ = null
      }
    });

    function pJ() {
      return kJ.load()
    }

    function dJ() {
      return kJ.prefetch()
    }

    function zJ(JJ) {
      return kJ.markTrapped(JJ)
    }

    function NJ() {
      kJ.unload()
    }

    function OJ() {
      return PJ?.buffer.byteLength ?? 0
    }
  },
  5963: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ
    });
    var FJ = ZJ(3183);
    const UJ = {
      bloxd_wasm: () => "523d3e5949bf2a4753ef5ca2a73400ebb345835b7971369ead2f990b98be43ec",
      bloxd_wasm_client: () => "d4cb36df94a07de19e42eeffa0530f0524c7d89d6cd225e6e3040a8fe33cb61f",
      bloxd_wasm_workers: () => "b13b723c21ff4be0aa4bb62ce03a9989f6e3a955e9dbcbcab4ce4af24b202aca",
      bloxd_wasm_models: () => "f6812c5c938dcbac86f88041ffced930fe9d08400f719159d23aa9e3370f1e40",
      bloxd_wasm_webgpu: () => "e406b84c9505f7a02226339b21c94d9a9039f99b240ba6ea17b3503c03394d97",
      bloxd_wasm_webgl: () => "31e54300aadfdf39d9adf46e78a03ba62332faca6c028e444167fa4ad879a305",
      bloxd_wasm_webgl1: () => "eabb7ee7c8fbfb9be543faab1ff74311865cfd0aa56a6ee1f3f14d03e5ae7d24",
      bloxd_wasm_replay: () => "4f3a9b06c75077dd5f30c00cad61978d804090ee39979df7a1cfbfc9252724da",
      bloxd_wasm_recorder: () => "27d0a05e493ac60b3abbc822d35e07432c9fd8fda5fab082d13b04b57a84627e",
      bloxd_wasm_anim: () => "df3ee160579d661f445b2f411e354890d481e89dda8265b662e7e3f787cf6236",
      bloxd_wasm_textures: () => "1fc5f5b691e5b407d47f375467e6fd9d0f10cb030443922e1b8b25cd186e7173",
      bloxd_wasm_shader_pack: () => "749cb76383a9de0896958e82b823c3a4f9479f89c71e25be0da5c1167b8eeea1"
    };
    var eJ = ZJ(5971);

    function XJ(JJ) {
      const cJ = Object.prototype.hasOwnProperty.call(UJ, JJ) ? UJ[JJ]() : void 0;
      if (void 0 !== cJ) return {
        sha256: cJ,
        onMismatch: eJ.t
      };
      throw new FJ.j(`${JJ} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);