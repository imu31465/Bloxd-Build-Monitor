export const id = 66;
export const ids = [66];
export const modules = {
  62052: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/bloxd_wasm_replay_bg.3f5f3782e83544a26628.wasm"
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
  },
  62044: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      BloxdReplayWasmError: () => lG,
      loadReplayModule: () => nG,
      markReplayTrapped: () => RG,
      replayMemoryBytes: () => eG,
      unloadReplayModule: () => gG
    });
    var wG = {};
    ZG.r(wG), ZG.d(wG, {
      QLG: () => SG,
      wkG: () => vG,
      BV: () => LG,
      default: () => FG,
      initSync: () => IG,
      Gp: () => yG,
      YLG: () => kG,
      KLG: () => UG
    });
    class SG {
      __destroy_into_raw() {
        const GG = this.__wbg_ptr;
        return this.__wbg_ptr = 0, VG.unregister(this), GG
      }
      free() {
        const GG = this.__destroy_into_raw();
        CG.StJP(GG, 0)
      }
      rLG(GG, bG, ZG, wG, SG, LG) {
        CG.hr6P(this.__wbg_ptr, GG, bG, ZG, wG, SG, LG)
      }
      close() {
        CG.Rlm1(this.__wbg_ptr)
      }
      crop(GG, bG) {
        CG.F1n0(this.__wbg_ptr, GG, bG)
      }
      oLG(GG, bG) {
        CG.ltln(this.__wbg_ptr, GG, bG)
      }
      uLG() {
        return CG.RJ0H(this.__wbg_ptr) >>> 0
      }
      XLG() {
        return CG.CAf2(this.__wbg_ptr) >>> 0
      }
      iLG() {
        return CG.QtDq(this.__wbg_ptr) >>> 0
      }
      CLG() {
        return CG.Qm5d(this.__wbg_ptr) >>> 0
      }
      ELG(GG, bG) {
        CG.vREx(this.__wbg_ptr, GG, bG)
      }
      constructor() {
        const GG = CG.tcOv();
        return this.__wbg_ptr = GG, VG.register(this, this.__wbg_ptr, this), this
      }
      open() {
        CG.S7FT(this.__wbg_ptr)
      }
      LLG() {
        return CG.ottv(this.__wbg_ptr) >>> 0
      }
      pause() {
        CG.VCiV(this.__wbg_ptr)
      }
      play() {
        CG.GvNr(this.__wbg_ptr)
      }
      save() {
        return CG.deKW(this.__wbg_ptr) >>> 0
      }
      WLG() {
        CG.HpRr(this.__wbg_ptr)
      }
      seek(GG, bG) {
        CG.A7QX(this.__wbg_ptr, GG, bG)
      }
      ILG(GG) {
        CG.P4Lw(this.__wbg_ptr, GG)
      }
      zLG(GG, bG) {
        const ZG = function(GG, bG) {
            const ZG = bG(8 * GG.length, 8) >>> 0;
            return function() {
              null !== fG && 0 !== fG.byteLength || (fG = new Float64Array(CG.memory.buffer));
              return fG
            }().set(GG, ZG / 8), WG = GG.length, ZG
          }(bG, CG.Z7M2),
          wG = WG;
        CG.v9Bj(this.__wbg_ptr, GG, ZG, wG)
      }
      JLG(GG, bG) {
        CG.fQw1(this.__wbg_ptr, GG, bG)
      }
      mLG(GG) {
        CG.tiLc(this.__wbg_ptr, GG)
      }
      stage(GG) {
        return CG.mIQW(this.__wbg_ptr, GG) >>> 0
      }
      step(GG, bG) {
        return CG.nGyo(this.__wbg_ptr, GG, bG) >>> 0
      }
    }

    function LG(GG, bG) {
      const ZG = function(GG, bG, ZG) {
          if (void 0 === ZG) {
            const ZG = XG.encode(GG),
              wG = bG(ZG.length, 1) >>> 0;
            return hG().subarray(wG, wG + ZG.length).set(ZG), WG = ZG.length, wG
          }
          let wG = GG.length,
            SG = bG(wG, 1) >>> 0;
          const LG = hG();
          let yG = 0;
          for (; yG < wG; yG++) {
            const bG = GG.charCodeAt(yG);
            if (bG > 127) break;
            LG[SG + yG] = bG
          }
          if (yG !== wG) {
            0 !== yG && (GG = GG.slice(yG)), SG = ZG(SG, wG, wG = yG + 3 * GG.length, 1) >>> 0;
            const bG = hG().subarray(SG + yG, SG + wG);
            yG += XG.encodeInto(GG, bG).written, SG = ZG(SG, wG, yG, 1) >>> 0
          }
          return WG = yG, SG
        }(GG, CG.Z7M2, CG.l2eO),
        wG = WG,
        SG = CG.Mc9I(ZG, wG, bG);
      if (SG[1]) throw rG(SG[0])
    }

    function yG() {
      CG.wZWL()
    }

    function kG() {
      return CG.n4fV() >>> 0
    }

    function UG() {
      return rG(CG.rEtF())
    }

    function YG() {
      return {
        __proto__: null,
        osAz: {
          __proto__: null,
          iOeq: function(GG, bG) {
            return pG(Error(QG(GG, bG)))
          },
          hRg8: function() {
            return pG(CG.memory)
          },
          SucZ: function(GG, bG) {
            throw new Error(QG(GG, bG))
          },
          IiGB: function(GG, bG) {
            console.error(QG(GG, bG))
          },
          CBWY: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (SG.prototype[Symbol.dispose] = SG.prototype.free);
    const VG = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((GG => CG?.__wbg_replaymodule_free(GG, 1)));

    function pG(GG) {
      JG === dG.length && dG.push(dG.length + 1);
      const bG = JG;
      return JG = dG[bG], dG[bG] = GG, bG
    }
    let fG = null;

    function QG(GG, bG) {
      return function(GG, bG) {
        oG += bG, oG >= EG && (zG = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), zG.decode(), oG = bG);
        return zG.decode(hG().subarray(GG, GG + bG))
      }(GG >>> 0, bG)
    }
    let KG = null;

    function hG() {
      return null !== KG && 0 !== KG.byteLength || (KG = new Uint8Array(CG.memory.buffer)), KG
    }
    let dG = new Array(1024).fill(void 0);
    dG.push(void 0, null, !0, !1);
    let JG = dG.length;

    function rG(GG) {
      const bG = function(GG) {
        return dG[GG]
      }(GG);
      return function(GG) {
        GG < 1028 || (dG[GG] = JG, JG = GG)
      }(GG), bG
    }
    let zG = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    zG.decode();
    const EG = 2146435072;
    let oG = 0;
    const XG = new TextEncoder;
    "encodeInto" in XG || (XG.encodeInto = function(GG, bG) {
      const ZG = XG.encode(GG);
      return bG.set(ZG), {
        read: GG.length,
        written: ZG.length
      }
    });
    let uG, iG, CG, WG = 0;

    function mG(GG, bG) {
      return iG = GG, CG = GG.exports, uG = bG, fG = null, KG = null, CG.TVhq(), CG
    }

    function IG(GG) {
      if (void 0 !== CG) return CG;
      void 0 !== GG && (Object.getPrototypeOf(GG) === Object.prototype ? ({
        module: GG
      } = GG) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const bG = YG();
      GG instanceof WebAssembly.Module || (GG = new WebAssembly.Module(GG));
      return mG(new WebAssembly.Instance(GG, bG), GG)
    }
    async function FG(GG) {
      if (void 0 !== CG) return CG;
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
      return mG(ZG, wG)
    }

    function vG() {
      CG = void 0, iG = void 0, fG = null, KG = null, dG = new Array(1024).fill(void 0), dG.push(void 0, null, !0, !1), JG = dG.length
    }
    var aG = ZG(2872),
      cG = ZG(6617);
    class lG extends Error {
      stage;
      constructor(GG, bG) {
        super((0, aG.D)(GG, bG), {
          cause: bG
        }), this.name = "BloxdReplayWasmError", this.stage = GG
      }
    }
    let jG = null,
      PG = null,
      MG = Promise.resolve(),
      AG = 0,
      sG = null,
      qG = null;

    function nG() {
      if (qG) return Promise.reject(qG);
      if (PG) return PG;
      const GG = AG,
        bG = MG,
        SG = (async () => {
          let SG;
          await bG, jG ??= (0, aG.G)(new ZG.U(ZG(62052)), (0, cG.e)("bloxd_wasm_replay"));
          try {
            SG = await jG
          } catch (LG) {
            throw jG = null, new lG((0, aG.L)(LG), LG)
          }
          if (GG !== AG) throw new lG("instantiate", new Error("unloaded while loading"));
          try {
            await FG({
              module_or_path: SG
            })
          } catch (LG) {
            throw vG(), new lG("instantiate", LG)
          }
          if (GG !== AG) throw vG(), new lG("instantiate", new Error("unloaded while loading"));
          return sG = UG(), wG
        })();
      return PG = SG, MG = SG.catch((() => {})), SG.catch((() => {
        PG === SG && (PG = null)
      })), SG
    }

    function gG() {
      qG || TG()
    }

    function eG() {
      return sG?.buffer.byteLength ?? 0
    }

    function RG(GG) {
      return qG || (qG = new lG("call", GG), TG()), qG
    }

    function TG() {
      AG++, vG(), PG = null, sG = null
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);