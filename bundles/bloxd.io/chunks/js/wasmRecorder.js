export const id = 61;
export const ids = [61];
export const modules = {
  60843: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/bloxd_wasm_recorder_bg.371359c55d6df3959e5b.wasm"
  },
  60837: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      BloxdRecorderWasmError: () => rU,
      RECORDER_MODULE_ID: () => VU,
      loadRecorderModule: () => dU,
      markRecorderTrapped: () => SU,
      prefetchRecorderModule: () => HU,
      recorderMemoryBytes: () => yU,
      unloadRecorderModule: () => sU
    });
    var tU = {};
    gU.r(tU), gU.d(tU, {
      IpU: () => pU,
      jPU: () => aU,
      Nc: () => EU,
      default: () => ZU,
      initSync: () => oU,
      lc: () => PU,
      xpU: () => TU,
      upU: () => qU
    });
    class pU {
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, cU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        wU.ASIS(UU, 0)
      }
      busy() {
        return 0 !== wU.yUua(this.__wbg_ptr)
      }
      command(UU, RU) {
        return 0 !== wU.fPaU(this.__wbg_ptr, UU, RU)
      }
      CpU(UU) {
        return wU.N7PB(this.__wbg_ptr, UU) >>> 0
      }
      jpU() {
        wU.Pr0x(this.__wbg_ptr)
      }
      GpU() {
        return wU.GeFs(this.__wbg_ptr) >>> 0
      }
      cpU() {
        return wU.Ktje(this.__wbg_ptr)
      }
      epU() {
        return wU.HR4R(this.__wbg_ptr) >>> 0
      }
      WpU() {
        return wU.DFGm(this.__wbg_ptr) >>> 0
      }
      feed(UU) {
        return wU.izSb(this.__wbg_ptr, UU) >>> 0
      }
      constructor() {
        const UU = wU.Avkk();
        return this.__wbg_ptr = UU, cU.register(this, this.__wbg_ptr, this), this
      }
      QpU() {
        return wU.jRb2(this.__wbg_ptr) >>> 0
      }
      uPU() {
        return wU.JK2k(this.__wbg_ptr) >>> 0
      }
      KpU(UU, RU, gU) {
        return 0 !== wU.eVUp(this.__wbg_ptr, UU, RU, gU)
      }
      stage(UU) {
        return wU.Xa9s(this.__wbg_ptr, UU) >>> 0
      }
      step() {
        return wU.RfuY(this.__wbg_ptr) >>> 0
      }
    }

    function EU(UU, RU) {
      const gU = function(UU, RU, gU) {
          if (void 0 === gU) {
            const gU = mU.encode(UU),
              tU = RU(gU.length, 1) >>> 0;
            return CU().subarray(tU, tU + gU.length).set(gU), nU = gU.length, tU
          }
          let tU = UU.length,
            pU = RU(tU, 1) >>> 0;
          const EU = CU();
          let PU = 0;
          for (; PU < tU; PU++) {
            const RU = UU.charCodeAt(PU);
            if (RU > 127) break;
            EU[pU + PU] = RU
          }
          if (PU !== tU) {
            0 !== PU && (UU = UU.slice(PU)), pU = gU(pU, tU, tU = PU + 3 * UU.length, 1) >>> 0;
            const RU = CU().subarray(pU + PU, pU + tU);
            PU += mU.encodeInto(UU, RU).written, pU = gU(pU, tU, PU, 1) >>> 0
          }
          return nU = PU, pU
        }(UU, wU.jZ67, wU.YuN6),
        tU = nU,
        pU = wU.V1Le(gU, tU, RU);
      if (pU[1]) throw eU(pU[0])
    }

    function PU() {
      wU.BlTX()
    }

    function TU() {
      return wU.PgFe() >>> 0
    }

    function qU() {
      return eU(wU.Qr3O())
    }

    function KU() {
      return {
        __proto__: null,
        Avw7: {
          __proto__: null,
          YmsJ: function(UU, RU) {
            return GU(Error(jU(UU, RU)))
          },
          POCW: function() {
            return GU(wU.memory)
          },
          AMpX: function(UU, RU) {
            throw new Error(jU(UU, RU))
          },
          R2Ez: function(UU, RU) {
            console.error(jU(UU, RU))
          },
          ZGO8: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (pU.prototype[Symbol.dispose] = pU.prototype.free);
    const cU = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((UU => wU?.__wbg_recordermodule_free(UU, 1)));

    function GU(UU) {
      QU === hU.length && hU.push(hU.length + 1);
      const RU = QU;
      return QU = hU[RU], hU[RU] = UU, RU
    }

    function jU(UU, RU) {
      return function(UU, RU) {
        xU += RU, xU >= fU && (WU = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), WU.decode(), xU = RU);
        return WU.decode(CU().subarray(UU, UU + RU))
      }(UU >>> 0, RU)
    }
    let uU = null;

    function CU() {
      return null !== uU && 0 !== uU.byteLength || (uU = new Uint8Array(wU.memory.buffer)), uU
    }
    let hU = new Array(1024).fill(void 0);
    hU.push(void 0, null, !0, !1);
    let QU = hU.length;

    function eU(UU) {
      const RU = function(UU) {
        return hU[UU]
      }(UU);
      return function(UU) {
        UU < 1028 || (hU[UU] = QU, QU = UU)
      }(UU), RU
    }
    let WU = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    WU.decode();
    const fU = 2146435072;
    let xU = 0;
    const mU = new TextEncoder;
    "encodeInto" in mU || (mU.encodeInto = function(UU, RU) {
      const gU = mU.encode(UU);
      return RU.set(gU), {
        read: UU.length,
        written: gU.length
      }
    });
    let IU, JU, wU, nU = 0;

    function bU(UU, RU) {
      return JU = UU, wU = UU.exports, IU = RU, uU = null, wU.lkoJ(), wU
    }

    function oU(UU) {
      if (void 0 !== wU) return wU;
      void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
        module: UU
      } = UU) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const RU = KU();
      UU instanceof WebAssembly.Module || (UU = new WebAssembly.Module(UU));
      return bU(new WebAssembly.Instance(UU, RU), UU)
    }
    async function ZU(UU) {
      if (void 0 !== wU) return wU;
      void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
        module_or_path: UU
      } = UU) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const RU = KU();
      ("string" === typeof UU || "function" === typeof Request && UU instanceof Request || "function" === typeof URL && UU instanceof URL) && (UU = fetch(UU));
      const {
        instance: gU,
        module: tU
      } = await async function(UU, RU) {
        if ("function" === typeof Response && UU instanceof Response) {
          if (!UU.ok) throw new Error(`failed to fetch Wasm: ${UU.status} ${UU.statusText} fetching '${UU.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(UU, RU)
          } catch (gU) {
            if (! function(UU) {
                switch (UU) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(UU.type) || "application/wasm" === UU.headers.get("Content-Type")) throw gU;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", gU)
          }
          const tU = await UU.arrayBuffer();
          return await WebAssembly.instantiate(tU, RU)
        } {
          const gU = await WebAssembly.instantiate(UU, RU);
          return gU instanceof WebAssembly.Instance ? {
            instance: gU,
            module: UU
          } : gU
        }
      }(await UU, RU);
      return bU(gU, tU)
    }

    function aU() {
      wU = void 0, JU = void 0, uU = null, hU = new Array(1024).fill(void 0), hU.push(void 0, null, !0, !1), QU = hU.length
    }
    var YU = gU(3377),
      BU = gU(6297);
    const VU = 2;
    class rU extends Error {
      stage;
      constructor(UU, RU) {
        super((0, YU.z)(UU, RU), {
          cause: RU
        }), this.name = "BloxdRecorderWasmError", this.stage = UU
      }
    }
    let XU = null;
    const vU = function(UU) {
      let RU = null,
        gU = null,
        tU = null,
        pU = null;
      const EU = async () => {
        let gU = null;
        try {
          return gU = RU ??= (0, YU.D)(UU.url(), (0, BU.b)(UU.name)), await gU
        } catch (tU) {
          throw RU === gU && (RU = null), UU.error((0, YU.K)(tU), tU)
        }
      };
      return {
        load: () => {
          if (pU) return Promise.reject(pU);
          if (gU) return gU;
          const RU = (async () => {
            const RU = await EU();
            try {
              await UU.init(RU)
            } catch (gU) {
              throw UU.error("instantiate", gU)
            }
            return UU.bindings
          })();
          gU = RU, tU = RU;
          const PU = () => {
            tU === RU && (tU = null)
          };
          return RU.then(PU, (() => {
            PU(), gU === RU && (gU = null)
          })), RU
        },
        prefetch: async () => {
          pU || gU || await EU()
        },
        markTrapped: RU => (pU ??= UU.error("call", RU), pU),
        unload: () => {
          pU || !UU.reset || tU || (UU.reset(), gU = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new gU.U(gU(60843)),
      init: async UU => {
        await ZU({
          module_or_path: UU
        }), XU = qU()
      },
      bindings: tU,
      error: (UU, RU) => new rU(UU, RU),
      reset: () => {
        aU(), XU = null
      }
    });

    function dU() {
      return vU.load()
    }

    function HU() {
      return vU.prefetch()
    }

    function SU(UU) {
      return vU.markTrapped(UU)
    }

    function sU() {
      vU.unload()
    }

    function yU() {
      return XU?.buffer.byteLength ?? 0
    }
  },
  6297: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU
    });
    var tU = gU(3377);
    const pU = {
      bloxd_wasm: () => "9aea991b9dfc231682f5590d3cc7b71fdc8d10d57b6fc256a691170448cb241e",
      bloxd_wasm_client: () => "802e9a6883f55b00b2e9f994d468ef47c157db779d67da12a28169a4064f9ba2",
      bloxd_wasm_workers: () => "6e68db7fd51b5ae0bb150a4c2fcdf448b467f8cbd8e24efcf974a9654674f1d6",
      bloxd_wasm_models: () => "f3c8f0349e4b7cd2fe62824f818b019cb1ff9fda7d99058af5539dbe1c36e2ff",
      bloxd_wasm_webgpu: () => "7b8aba519ce147883d63480e46db11f2a6dd62b2bdebd6ff07895ba08f395e69",
      bloxd_wasm_webgl: () => "a107c8272b9d653c63376eb1e9164df07a85032e3f7cbbd1d972097394cfca11",
      bloxd_wasm_webgl1: () => "2c5aabca21f20977da3990bb0cf77633b2f229a640ab72f5a52f39d28d9e0fd9",
      bloxd_wasm_replay: () => "803e2c90d202bb5830af931fbeaac2469dcc5032d591607636dd72eecf9c8910",
      bloxd_wasm_recorder: () => "edcf2c59dbceafb4c90033bd8006f0358827a3de806838c1aa9aa5da84f115b3",
      bloxd_wasm_anim: () => "7a1e82ad213a41556d7866bfc1df7fce0247390479775e811f0b8f916b979482",
      bloxd_wasm_textures: () => "bc7a7de98d207f079e8f358dc014dee940cff8bd63182b40ac7fd19938da92d8",
      bloxd_wasm_shader_pack: () => "1e25de668a456adfdd95befe66a4ef213a16bedd08af3aac14531a1b656da9d3"
    };
    var EU = gU(4352);

    function PU(UU) {
      const RU = Object.prototype.hasOwnProperty.call(pU, UU) ? pU[UU]() : void 0;
      if (void 0 !== RU) return {
        sha256: RU,
        onMismatch: EU.E
      };
      throw new tU.j(`${UU} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);