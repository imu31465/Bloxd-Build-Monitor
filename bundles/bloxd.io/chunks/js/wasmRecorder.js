export const id = 64;
export const ids = [64];
export const modules = {
  61535: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/bloxd_wasm_recorder_bg.4315c68e1a3c83441b7f.wasm"
  },
  61532: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      BloxdRecorderWasmError: () => AS,
      RECORDER_MODULE_ID: () => YS,
      loadRecorderModule: () => iS,
      markRecorderTrapped: () => zS,
      prefetchRecorderModule: () => WS,
      recorderMemoryBytes: () => pS,
      unloadRecorderModule: () => US
    });
    var tS = {};
    gS.r(tS), gS.d(tS, {
      VbS: () => bS,
      JxS: () => vS,
      bf: () => XS,
      default: () => cS,
      initSync: () => dS,
      Xf: () => xS,
      AbS: () => NS,
      ObS: () => qS
    });
    class bS {
      __destroy_into_raw() {
        const SS = this.__wbg_ptr;
        return this.__wbg_ptr = 0, IS.unregister(this), SS
      }
      free() {
        const SS = this.__destroy_into_raw();
        ZS.WLS8(SS, 0)
      }
      busy() {
        return 0 !== ZS.Ph5s(this.__wbg_ptr)
      }
      command(SS, HS) {
        return 0 !== ZS.L8dN(this.__wbg_ptr, SS, HS)
      }
      dbS(SS) {
        return ZS.jK8p(this.__wbg_ptr, SS) >>> 0
      }
      JbS() {
        ZS.fcX5(this.__wbg_ptr)
      }
      ZbS() {
        return ZS.UeO3(this.__wbg_ptr) >>> 0
      }
      hbS() {
        return ZS.wusG(this.__wbg_ptr)
      }
      EbS() {
        return ZS.LSai(this.__wbg_ptr) >>> 0
      }
      LbS() {
        return ZS.DnDa(this.__wbg_ptr) >>> 0
      }
      feed(SS) {
        return ZS.G07e(this.__wbg_ptr, SS) >>> 0
      }
      constructor() {
        const SS = ZS.ZYpE();
        return this.__wbg_ptr = SS, IS.register(this, this.__wbg_ptr, this), this
      }
      vbS() {
        return ZS.NXyw(this.__wbg_ptr) >>> 0
      }
      OxS() {
        return ZS.pA9F(this.__wbg_ptr) >>> 0
      }
      wbS(SS, HS, gS) {
        return 0 !== ZS.Ub3Q(this.__wbg_ptr, SS, HS, gS)
      }
      stage(SS) {
        return ZS.AjQb(this.__wbg_ptr, SS) >>> 0
      }
      step() {
        return ZS.rWBP(this.__wbg_ptr) >>> 0
      }
    }

    function XS(SS, HS) {
      const gS = function(SS, HS, gS) {
          if (void 0 === gS) {
            const gS = DS.encode(SS),
              tS = HS(gS.length, 1) >>> 0;
            return KS().subarray(tS, tS + gS.length).set(gS), JS = gS.length, tS
          }
          let tS = SS.length,
            bS = HS(tS, 1) >>> 0;
          const XS = KS();
          let xS = 0;
          for (; xS < tS; xS++) {
            const HS = SS.charCodeAt(xS);
            if (HS > 127) break;
            XS[bS + xS] = HS
          }
          if (xS !== tS) {
            0 !== xS && (SS = SS.slice(xS)), bS = gS(bS, tS, tS = xS + 3 * SS.length, 1) >>> 0;
            const HS = KS().subarray(bS + xS, bS + tS);
            xS += DS.encodeInto(SS, HS).written, bS = gS(bS, tS, xS, 1) >>> 0
          }
          return JS = xS, bS
        }(SS, ZS.W93h, ZS.GpfK),
        tS = JS,
        bS = ZS.dukg(gS, tS, HS);
      if (bS[1]) throw CS(bS[0])
    }

    function xS() {
      ZS.hZ8b()
    }

    function NS() {
      return ZS.pCQD() >>> 0
    }

    function qS() {
      return CS(ZS.orjq())
    }

    function uS() {
      return {
        __proto__: null,
        LVXy: {
          __proto__: null,
          Qv9K: function(SS, HS) {
            return fS(Error(kS(SS, HS)))
          },
          rxNN: function() {
            return fS(ZS.memory)
          },
          bif2: function(SS, HS) {
            throw new Error(kS(SS, HS))
          },
          FmXG: function(SS, HS) {
            console.error(kS(SS, HS))
          },
          San1: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (bS.prototype[Symbol.dispose] = bS.prototype.free);
    const IS = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((SS => ZS?.__wbg_recordermodule_free(SS, 1)));

    function fS(SS) {
      GS === jS.length && jS.push(jS.length + 1);
      const HS = GS;
      return GS = jS[HS], jS[HS] = SS, HS
    }

    function kS(SS, HS) {
      return function(SS, HS) {
        QS += HS, QS >= PS && (nS = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), nS.decode(), QS = HS);
        return nS.decode(KS().subarray(SS, SS + HS))
      }(SS >>> 0, HS)
    }
    let aS = null;

    function KS() {
      return null !== aS && 0 !== aS.byteLength || (aS = new Uint8Array(ZS.memory.buffer)), aS
    }
    let jS = new Array(1024).fill(void 0);
    jS.push(void 0, null, !0, !1);
    let GS = jS.length;

    function CS(SS) {
      const HS = function(SS) {
        return jS[SS]
      }(SS);
      return function(SS) {
        SS < 1028 || (jS[SS] = GS, GS = SS)
      }(SS), HS
    }
    let nS = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    nS.decode();
    const PS = 2146435072;
    let QS = 0;
    const DS = new TextEncoder;
    "encodeInto" in DS || (DS.encodeInto = function(SS, HS) {
      const gS = DS.encode(SS);
      return HS.set(gS), {
        read: SS.length,
        written: gS.length
      }
    });
    let wS, hS, ZS, JS = 0;

    function OS(SS, HS) {
      return hS = SS, ZS = SS.exports, wS = HS, aS = null, ZS.cEHb(), ZS
    }

    function dS(SS) {
      if (void 0 !== ZS) return ZS;
      void 0 !== SS && (Object.getPrototypeOf(SS) === Object.prototype ? ({
        module: SS
      } = SS) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const HS = uS();
      SS instanceof WebAssembly.Module || (SS = new WebAssembly.Module(SS));
      return OS(new WebAssembly.Instance(SS, HS), SS)
    }
    async function cS(SS) {
      if (void 0 !== ZS) return ZS;
      void 0 !== SS && (Object.getPrototypeOf(SS) === Object.prototype ? ({
        module_or_path: SS
      } = SS) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const HS = uS();
      ("string" === typeof SS || "function" === typeof Request && SS instanceof Request || "function" === typeof URL && SS instanceof URL) && (SS = fetch(SS));
      const {
        instance: gS,
        module: tS
      } = await async function(SS, HS) {
        if ("function" === typeof Response && SS instanceof Response) {
          if (!SS.ok) throw new Error(`failed to fetch Wasm: ${SS.status} ${SS.statusText} fetching '${SS.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(SS, HS)
          } catch (gS) {
            if (! function(SS) {
                switch (SS) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(SS.type) || "application/wasm" === SS.headers.get("Content-Type")) throw gS;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", gS)
          }
          const tS = await SS.arrayBuffer();
          return await WebAssembly.instantiate(tS, HS)
        } {
          const gS = await WebAssembly.instantiate(SS, HS);
          return gS instanceof WebAssembly.Instance ? {
            instance: gS,
            module: SS
          } : gS
        }
      }(await SS, HS);
      return OS(gS, tS)
    }

    function vS() {
      ZS = void 0, hS = void 0, aS = null, jS = new Array(1024).fill(void 0), jS.push(void 0, null, !0, !1), GS = jS.length
    }
    var ES = gS(3030),
      LS = gS(6819);
    const YS = 2;
    class AS extends Error {
      stage;
      constructor(SS, HS) {
        super((0, ES.E)(SS, HS), {
          cause: HS
        }), this.name = "BloxdRecorderWasmError", this.stage = SS
      }
    }
    let yS = null;
    const VS = function(SS) {
      let HS = null,
        gS = null,
        tS = null,
        bS = null;
      const XS = async () => {
        let gS = null;
        try {
          return gS = HS ??= (0, ES.F)(SS.url(), (0, LS.c)(SS.name)), await gS
        } catch (tS) {
          throw HS === gS && (HS = null), SS.error((0, ES.L)(tS), tS)
        }
      };
      return {
        load: () => {
          if (bS) return Promise.reject(bS);
          if (gS) return gS;
          const HS = (async () => {
            const HS = await XS();
            try {
              await SS.init(HS)
            } catch (gS) {
              throw SS.error("instantiate", gS)
            }
            return SS.bindings
          })();
          gS = HS, tS = HS;
          const xS = () => {
            tS === HS && (tS = null)
          };
          return HS.then(xS, (() => {
            xS(), gS === HS && (gS = null)
          })), HS
        },
        prefetch: async () => {
          bS || gS || await XS()
        },
        markTrapped: HS => (bS ??= SS.error("call", HS), bS),
        unload: () => {
          bS || !SS.reset || tS || (SS.reset(), gS = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new gS.U(gS(61535)),
      init: async SS => {
        await cS({
          module_or_path: SS
        }), yS = qS()
      },
      bindings: tS,
      error: (SS, HS) => new AS(SS, HS),
      reset: () => {
        vS(), yS = null
      }
    });

    function iS() {
      return VS.load()
    }

    function WS() {
      return VS.prefetch()
    }

    function zS(SS) {
      return VS.markTrapped(SS)
    }

    function US() {
      VS.unload()
    }

    function pS() {
      return yS?.buffer.byteLength ?? 0
    }
  },
  6819: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS
    });
    var tS = gS(3030);
    const bS = {
      bloxd_wasm: () => "ca276a159dbc87fa5fb24bce01c600e017686becb2aec4d2d8c3ce9d9be10286",
      bloxd_wasm_client: () => "78d650a75a894f26dfff12d13178b3b18625b3ca51d6ff43ca76c7c6a545160e",
      bloxd_wasm_workers: () => "141545174c96a6a56bdd55b96874db592d9aa0421d29d01fc5f13e010772908e",
      bloxd_wasm_models: () => "f9978bc5a15af3d00b08cdd71f12902b1d7af465ab38552c337a8dbca894f2ad",
      bloxd_wasm_webgpu: () => "b036ba0a8b10236966685420835363e85775cab4add8bde3fee2aab6dab3eedc",
      bloxd_wasm_webgl: () => "f94a6bd176e034f73eb9d8633ef96f3a4c2ba3c58f8f946158bfc25489809a0e",
      bloxd_wasm_webgl1: () => "e1bef365f7d6b4c1345c3d7a59fb7d8e9059890b44c25962f6eefa2875a0d8ba",
      bloxd_wasm_replay: () => "1cd9ae019549ed07be1080a40e72119ca1530d917a5e7c4bff7919777b0d7cc7",
      bloxd_wasm_recorder: () => "9bf6273ff6c7cd97e192adea241330701cc74623c7e79a51cf18981bf754ac45",
      bloxd_wasm_anim: () => "e9f60e55d6a938bae2c0cab139b5bc6a9a4c4b1abe3489fe2eaff4a7709eea4a",
      bloxd_wasm_textures: () => "b1d909a0a1a9dae74a5159a0e981ac598963b92321ef4cc808ac39c91a481383",
      bloxd_wasm_shader_pack: () => "2cc8a962c1c16c3304b235a366c2decc6556fba05a1b6ce886e0064dd54faac6"
    };
    var XS = gS(4812);

    function xS(SS) {
      const HS = Object.prototype.hasOwnProperty.call(bS, SS) ? bS[SS]() : void 0;
      if (void 0 !== HS) return {
        sha256: HS,
        onMismatch: XS.D
      };
      throw new tS.h(`${SS} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);