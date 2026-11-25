export const id = 65;
export const ids = [65];
export const modules = {
  62036: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/bloxd_wasm_recorder_bg.168b744bcb3cb1239e29.wasm"
  },
  62034: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      BloxdRecorderWasmError: () => lG,
      RECORDER_MODULE_ID: () => cG,
      loadRecorderModule: () => MG,
      markRecorderTrapped: () => sG,
      prefetchRecorderModule: () => AG,
      recorderMemoryBytes: () => nG,
      unloadRecorderModule: () => qG
    });
    var wG = {};
    ZG.r(wG), ZG.d(wG, {
      pLG: () => SG,
      wkG: () => FG,
      BV: () => LG,
      default: () => IG,
      initSync: () => mG,
      Gp: () => yG,
      YLG: () => kG,
      ZLG: () => UG
    });
    class SG {
      __destroy_into_raw() {
        const GG = this.__wbg_ptr;
        return this.__wbg_ptr = 0, VG.unregister(this), GG
      }
      free() {
        const GG = this.__destroy_into_raw();
        iG.jvps(GG, 0)
      }
      busy() {
        return 0 !== iG.XYu7(this.__wbg_ptr)
      }
      command(GG, bG) {
        return 0 !== iG.YQYx(this.__wbg_ptr, GG, bG)
      }
      wLG(GG) {
        return iG.aXYv(this.__wbg_ptr, GG) >>> 0
      }
      bLG() {
        iG.sSlb(this.__wbg_ptr)
      }
      GLG() {
        return iG.IqBF(this.__wbg_ptr) >>> 0
      }
      BSG() {
        return iG.XqbC(this.__wbg_ptr)
      }
      yLG() {
        return iG.pMox(this.__wbg_ptr) >>> 0
      }
      kLG() {
        return iG.yPSE(this.__wbg_ptr) >>> 0
      }
      feed(GG) {
        return iG.L3vL(this.__wbg_ptr, GG) >>> 0
      }
      constructor() {
        const GG = iG.j0xs();
        return this.__wbg_ptr = GG, VG.register(this, this.__wbg_ptr, this), this
      }
      LLG() {
        return iG.TtDk(this.__wbg_ptr) >>> 0
      }
      SkG() {
        return iG.SkL3(this.__wbg_ptr) >>> 0
      }
      xSG(GG, bG, ZG) {
        return 0 !== iG.aZwi(this.__wbg_ptr, GG, bG, ZG)
      }
      stage(GG) {
        return iG.Nw1m(this.__wbg_ptr, GG) >>> 0
      }
      step() {
        return iG.iip7(this.__wbg_ptr) >>> 0
      }
    }

    function LG(GG, bG) {
      const ZG = function(GG, bG, ZG) {
          if (void 0 === ZG) {
            const ZG = oG.encode(GG),
              wG = bG(ZG.length, 1) >>> 0;
            return KG().subarray(wG, wG + ZG.length).set(ZG), CG = ZG.length, wG
          }
          let wG = GG.length,
            SG = bG(wG, 1) >>> 0;
          const LG = KG();
          let yG = 0;
          for (; yG < wG; yG++) {
            const bG = GG.charCodeAt(yG);
            if (bG > 127) break;
            LG[SG + yG] = bG
          }
          if (yG !== wG) {
            0 !== yG && (GG = GG.slice(yG)), SG = ZG(SG, wG, wG = yG + 3 * GG.length, 1) >>> 0;
            const bG = KG().subarray(SG + yG, SG + wG);
            yG += oG.encodeInto(GG, bG).written, SG = ZG(SG, wG, yG, 1) >>> 0
          }
          return CG = yG, SG
        }(GG, iG.zUPq, iG.Gugp),
        wG = CG,
        SG = iG.j0eL(ZG, wG, bG);
      if (SG[1]) throw JG(SG[0])
    }

    function yG() {
      iG.arFo()
    }

    function kG() {
      return iG.aR6h() >>> 0
    }

    function UG() {
      return JG(iG.Y0kV())
    }

    function YG() {
      return {
        __proto__: null,
        A9Ns: {
          __proto__: null,
          ybYN: function(GG, bG) {
            return pG(Error(fG(GG, bG)))
          },
          Muzk: function() {
            return pG(iG.memory)
          },
          sHtO: function(GG, bG) {
            throw new Error(fG(GG, bG))
          },
          uVX9: function(GG, bG) {
            console.error(fG(GG, bG))
          },
          gwSf: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (SG.prototype[Symbol.dispose] = SG.prototype.free);
    const VG = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((GG => iG?.__wbg_recordermodule_free(GG, 1)));

    function pG(GG) {
      dG === hG.length && hG.push(hG.length + 1);
      const bG = dG;
      return dG = hG[bG], hG[bG] = GG, bG
    }

    function fG(GG, bG) {
      return function(GG, bG) {
        EG += bG, EG >= zG && (rG = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), rG.decode(), EG = bG);
        return rG.decode(KG().subarray(GG, GG + bG))
      }(GG >>> 0, bG)
    }
    let QG = null;

    function KG() {
      return null !== QG && 0 !== QG.byteLength || (QG = new Uint8Array(iG.memory.buffer)), QG
    }
    let hG = new Array(1024).fill(void 0);
    hG.push(void 0, null, !0, !1);
    let dG = hG.length;

    function JG(GG) {
      const bG = function(GG) {
        return hG[GG]
      }(GG);
      return function(GG) {
        GG < 1028 || (hG[GG] = dG, dG = GG)
      }(GG), bG
    }
    let rG = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    rG.decode();
    const zG = 2146435072;
    let EG = 0;
    const oG = new TextEncoder;
    "encodeInto" in oG || (oG.encodeInto = function(GG, bG) {
      const ZG = oG.encode(GG);
      return bG.set(ZG), {
        read: GG.length,
        written: ZG.length
      }
    });
    let XG, uG, iG, CG = 0;

    function WG(GG, bG) {
      return uG = GG, iG = GG.exports, XG = bG, QG = null, iG.cYIN(), iG
    }

    function mG(GG) {
      if (void 0 !== iG) return iG;
      void 0 !== GG && (Object.getPrototypeOf(GG) === Object.prototype ? ({
        module: GG
      } = GG) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const bG = YG();
      GG instanceof WebAssembly.Module || (GG = new WebAssembly.Module(GG));
      return WG(new WebAssembly.Instance(GG, bG), GG)
    }
    async function IG(GG) {
      if (void 0 !== iG) return iG;
      void 0 !== GG && (Object.getPrototypeOf(GG) === Object.prototype ? ({
        module_or_path: GG
      } = GG) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const bG = YG();
      ("string" === typeof GG || "function" === typeof Request && GG instanceof Request || "function" === typeof URL && GG instanceof URL) && (GG = fetch(GG));
      const {
        instance: ZG,
        module: wG
      } = await async function(GG, bG) {
        if ("function" === typeof Response && GG instanceof Response) {
          if (!GG.ok) throw new Error(`failed to fetch Wasm: ${GG.status} ${GG.statusText} fetching '${GG.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(GG, bG)
          } catch (ZG) {
            if (! function(GG) {
                switch (GG) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(GG.type) || "application/wasm" === GG.headers.get("Content-Type")) throw ZG;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ZG)
          }
          const wG = await GG.arrayBuffer();
          return await WebAssembly.instantiate(wG, bG)
        } {
          const ZG = await WebAssembly.instantiate(GG, bG);
          return ZG instanceof WebAssembly.Instance ? {
            instance: ZG,
            module: GG
          } : ZG
        }
      }(await GG, bG);
      return WG(ZG, wG)
    }

    function FG() {
      iG = void 0, uG = void 0, QG = null, hG = new Array(1024).fill(void 0), hG.push(void 0, null, !0, !1), dG = hG.length
    }
    var vG = ZG(2872),
      aG = ZG(6617);
    const cG = 2;
    class lG extends Error {
      stage;
      constructor(GG, bG) {
        super((0, vG.D)(GG, bG), {
          cause: bG
        }), this.name = "BloxdRecorderWasmError", this.stage = GG
      }
    }
    let jG = null;
    const PG = function(GG) {
      let bG = null,
        ZG = null,
        wG = null,
        SG = null;
      const LG = async () => {
        let ZG = null;
        try {
          return ZG = bG ??= (0, vG.G)(GG.url(), (0, aG.e)(GG.name)), await ZG
        } catch (wG) {
          throw bG === ZG && (bG = null), GG.error((0, vG.L)(wG), wG)
        }
      };
      return {
        load: () => {
          if (SG) return Promise.reject(SG);
          if (ZG) return ZG;
          const bG = (async () => {
            const bG = await LG();
            try {
              await GG.init(bG)
            } catch (ZG) {
              throw GG.error("instantiate", ZG)
            }
            return GG.bindings
          })();
          ZG = bG, wG = bG;
          const yG = () => {
            wG === bG && (wG = null)
          };
          return bG.then(yG, (() => {
            yG(), ZG === bG && (ZG = null)
          })), bG
        },
        prefetch: async () => {
          SG || ZG || await LG()
        },
        markTrapped: bG => (SG ??= GG.error("call", bG), SG),
        unload: () => {
          SG || !GG.reset || wG || (GG.reset(), ZG = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new ZG.U(ZG(62036)),
      init: async GG => {
        await IG({
          module_or_path: GG
        }), jG = UG()
      },
      bindings: wG,
      error: (GG, bG) => new lG(GG, bG),
      reset: () => {
        FG(), jG = null
      }
    });

    function MG() {
      return PG.load()
    }

    function AG() {
      return PG.prefetch()
    }

    function sG(GG) {
      return PG.markTrapped(GG)
    }

    function qG() {
      PG.unload()
    }

    function nG() {
      return jG?.buffer.byteLength ?? 0
    }
  },
  6617: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG
    });
    var wG = ZG(2872);
    const SG = {
      bloxd_wasm: () => "227276669bc81789ae0877e56ad1fa5148b881f36403e765502d7e555a33087b",
      bloxd_wasm_client: () => "fde6efab397f5d28c36c7f7a90c3f8e1e62ec9f2af8488ddf98fdaa9b2cebcf1",
      bloxd_wasm_workers: () => "a8f5ca009ba569fbb81d001dc1c9c7b54b8e4226097b17169475b4bb5e1b6f99",
      bloxd_wasm_models: () => "097716d2f3ac493be1328cd23cfea825beae0b4d004cb4793fdff4648d25e301",
      bloxd_wasm_webgpu: () => "67fd54aabb1d4d6967e430405453b87c364949978d0f7829b088145aae1e9ce5",
      bloxd_wasm_webgl: () => "cdb0cf8160692e68dd70a2abf12e1128a08d64229d0469d4cc325cafd535e3d2",
      bloxd_wasm_webgl1: () => "e8028f55daf732b5703910fe0886408ee732d8fa1e0480d554692849ab6badfa",
      bloxd_wasm_replay: () => "218045edbe3647b06370037bf62e2cd5b77074e838aa33d42c210d12a23e3077",
      bloxd_wasm_recorder: () => "8c52d908a7d9cbdccb92ee77564b71599d585f3b620f197e3396dcac8eca4f39",
      bloxd_wasm_anim: () => "4aa0ad1549e0d5c6e1e816ef89f5c6c760fcacd619ca992ecbfbe1cf2f199e59",
      bloxd_wasm_textures: () => "e5d65888cff795e87fa902109722e0986a22a654053de444a1b316ec7c6a343f",
      bloxd_wasm_shader_pack: () => "1379c312c4022055abc387da5e4950082e1556f2bea4656a45cd7e8eb7e7ab66"
    };
    var LG = ZG(4708);

    function yG(GG) {
      const bG = Object.prototype.hasOwnProperty.call(SG, GG) ? SG[GG]() : void 0;
      if (void 0 !== bG) return {
        sha256: bG,
        onMismatch: LG.y
      };
      throw new wG.k(`${GG} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);