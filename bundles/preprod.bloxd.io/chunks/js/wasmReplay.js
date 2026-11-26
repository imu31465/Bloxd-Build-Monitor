export const id = 77;
export const ids = [77];
export const modules = {
  64147: (UU, XU, zU) => {
    UU.exports = zU.p + "static/media/bloxd_wasm_replay_bg.76d3d95b7e7ec3c8aea8.wasm"
  },
  7213: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU
    });
    var cU = zU(3176);
    const yU = {
      bloxd_wasm: () => "7f53022eec2cb692d1cd79c2eeeb6f8a7607270973e0f6e0c72df23cc86c2b9f",
      bloxd_wasm_client: () => "57b44b4e08ce6b959c851fa76e413083d1b9237ff788a96d3931877841e31e3b",
      bloxd_wasm_workers: () => "e095c7f514df56db3ce2e1ace2484bbfab4bed79f4fe2840e3f351e25bef8126",
      bloxd_wasm_models: () => "d264f0be9eaf7df40aab32e155f7170e6a2029f73e36b3aa879f2b238d2f98c1",
      bloxd_wasm_webgpu: () => "45fb92410826d4556fb1610a55c96252dff22810c6b27376d120613e28fb722d",
      bloxd_wasm_webgl: () => "b3808b20b91fd2d43a5bb7c9219998b24db293acd36599f3cfc217aa2f03b9ee",
      bloxd_wasm_webgl1: () => "955dabc5322d1e4788a42fc358c9d0d686dca5eaafd1809064b6bbdc73e56b76",
      bloxd_wasm_replay: () => "13f05b235e8455220553f84808d39e41289fbb259c59a2477b25fa31ba963b54",
      bloxd_wasm_recorder: () => "a55faba2add92e1697c15223e522d87ba7631a7aaeb806e24cd4da91de455075",
      bloxd_wasm_anim: () => "9fd10823eecbab78e8d130701ec44bc31691f897e4963312a2cef80080a0b854",
      bloxd_wasm_textures: () => "659ffb2c9bc8159fee909f52c433ec6a1a8921210ad3488ef78dfd6ff1c90774",
      bloxd_wasm_shader_pack: () => "adccd38b5fea7520e10f50666ef79fc0704d8a73746e668ac8e591ff0037f1dc"
    };
    var QU = zU(5179);

    function AU(UU) {
      const XU = Object.prototype.hasOwnProperty.call(yU, UU) ? yU[UU]() : void 0;
      if (void 0 !== XU) return {
        sha256: XU,
        onMismatch: QU.v
      };
      throw new cU.i(`${UU} has no release digest, so this build refuses it`)
    }
  },
  64142: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      BloxdReplayWasmError: () => rU,
      loadReplayModule: () => VU,
      markReplayTrapped: () => mU,
      replayMemoryBytes: () => nU,
      unloadReplayModule: () => sU
    });
    var cU = {};
    zU.r(cU), zU.d(cU, {
      sQU: () => yU,
      rFU: () => qU,
      FD: () => QU,
      default: () => wU,
      initSync: () => CU,
      HD: () => AU,
      HQU: () => FU,
      nQU: () => oU
    });
    class yU {
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, EU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        dU.G5mQ(UU, 0)
      }
      JQU(UU, XU, zU, cU, yU, QU) {
        dU.F8Nk(this.__wbg_ptr, UU, XU, zU, cU, yU, QU)
      }
      close() {
        dU.y4UH(this.__wbg_ptr)
      }
      crop(UU, XU) {
        dU.N0GO(this.__wbg_ptr, UU, XU)
      }
      TQU(UU, XU) {
        dU.jfZt(this.__wbg_ptr, UU, XU)
      }
      UAU() {
        return dU.M78M(this.__wbg_ptr) >>> 0
      }
      hQU() {
        return dU.g36e(this.__wbg_ptr) >>> 0
      }
      zAU() {
        return dU.V84z(this.__wbg_ptr) >>> 0
      }
      cAU() {
        return dU.NB8P(this.__wbg_ptr) >>> 0
      }
      bQU(UU, XU) {
        dU.nl2c(this.__wbg_ptr, UU, XU)
      }
      constructor() {
        const UU = dU.rV1A();
        return this.__wbg_ptr = UU, EU.register(this, this.__wbg_ptr, this), this
      }
      open() {
        dU.vPQt(this.__wbg_ptr)
      }
      rQU() {
        return dU.f9Hp(this.__wbg_ptr) >>> 0
      }
      pause() {
        dU.CEcx(this.__wbg_ptr)
      }
      play() {
        dU.TnI9(this.__wbg_ptr)
      }
      save() {
        return dU.awvN(this.__wbg_ptr) >>> 0
      }
      yAU() {
        dU.AQFO(this.__wbg_ptr)
      }
      seek(UU, XU) {
        dU.RjmT(this.__wbg_ptr, UU, XU)
      }
      AAU(UU) {
        dU.iUzz(this.__wbg_ptr, UU)
      }
      KQU(UU, XU) {
        const zU = function(UU, XU) {
            const zU = XU(8 * UU.length, 8) >>> 0;
            return function() {
              null !== NU && 0 !== NU.byteLength || (NU = new Float64Array(dU.memory.buffer));
              return NU
            }().set(UU, zU / 8), LU = UU.length, zU
          }(XU, dU.fSPB),
          cU = LU;
        dU.j4em(this.__wbg_ptr, UU, zU, cU)
      }
      xQU(UU, XU) {
        dU.pLhu(this.__wbg_ptr, UU, XU)
      }
      QAU(UU) {
        dU.sLcd(this.__wbg_ptr, UU)
      }
      stage(UU) {
        return dU.GOLz(this.__wbg_ptr, UU) >>> 0
      }
      step(UU, XU) {
        return dU.PNZi(this.__wbg_ptr, UU, XU) >>> 0
      }
    }

    function QU(UU, XU) {
      const zU = function(UU, XU, zU) {
          if (void 0 === zU) {
            const zU = RU.encode(UU),
              cU = XU(zU.length, 1) >>> 0;
            return aU().subarray(cU, cU + zU.length).set(zU), LU = zU.length, cU
          }
          let cU = UU.length,
            yU = XU(cU, 1) >>> 0;
          const QU = aU();
          let AU = 0;
          for (; AU < cU; AU++) {
            const XU = UU.charCodeAt(AU);
            if (XU > 127) break;
            QU[yU + AU] = XU
          }
          if (AU !== cU) {
            0 !== AU && (UU = UU.slice(AU)), yU = zU(yU, cU, cU = AU + 3 * UU.length, 1) >>> 0;
            const XU = aU().subarray(yU + AU, yU + cU);
            AU += RU.encodeInto(UU, XU).written, yU = zU(yU, cU, AU, 1) >>> 0
          }
          return LU = AU, yU
        }(UU, dU.fSPB, dU.qaHX),
        cU = LU,
        yU = dU.WGbE(zU, cU, XU);
      if (yU[1]) throw kU(yU[0])
    }

    function AU() {
      dU.hzmK()
    }

    function FU() {
      return dU.gs5m() >>> 0
    }

    function oU() {
      return kU(dU.Jmf2())
    }

    function DU() {
      return {
        __proto__: null,
        QMAO: {
          __proto__: null,
          ZCtr: function(UU, XU) {
            return YU(Error(IU(UU, XU)))
          },
          cmF4: function() {
            return YU(dU.memory)
          },
          Qvgw: function(UU, XU) {
            throw new Error(IU(UU, XU))
          },
          pT0F: function(UU, XU) {
            console.error(IU(UU, XU))
          },
          uINP: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (yU.prototype[Symbol.dispose] = yU.prototype.free);
    const EU = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((UU => dU?.__wbg_replaymodule_free(UU, 1)));

    function YU(UU) {
      gU === tU.length && tU.push(tU.length + 1);
      const XU = gU;
      return gU = tU[XU], tU[XU] = UU, XU
    }
    let NU = null;

    function IU(UU, XU) {
      return function(UU, XU) {
        ZU += XU, ZU >= BU && (GU = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), GU.decode(), ZU = XU);
        return GU.decode(aU().subarray(UU, UU + XU))
      }(UU >>> 0, XU)
    }
    let pU = null;

    function aU() {
      return null !== pU && 0 !== pU.byteLength || (pU = new Uint8Array(dU.memory.buffer)), pU
    }
    let tU = new Array(1024).fill(void 0);
    tU.push(void 0, null, !0, !1);
    let gU = tU.length;

    function kU(UU) {
      const XU = function(UU) {
        return tU[UU]
      }(UU);
      return function(UU) {
        UU < 1028 || (tU[UU] = gU, gU = UU)
      }(UU), XU
    }
    let GU = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    GU.decode();
    const BU = 2146435072;
    let ZU = 0;
    const RU = new TextEncoder;
    "encodeInto" in RU || (RU.encodeInto = function(UU, XU) {
      const zU = RU.encode(UU);
      return XU.set(zU), {
        read: UU.length,
        written: zU.length
      }
    });
    let PU, WU, dU, LU = 0;

    function eU(UU, XU) {
      return WU = UU, dU = UU.exports, PU = XU, NU = null, pU = null, dU.PoxL(), dU
    }

    function CU(UU) {
      if (void 0 !== dU) return dU;
      void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
        module: UU
      } = UU) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const XU = DU();
      UU instanceof WebAssembly.Module || (UU = new WebAssembly.Module(UU));
      return eU(new WebAssembly.Instance(UU, XU), UU)
    }
    async function wU(UU) {
      if (void 0 !== dU) return dU;
      void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
        module_or_path: UU
      } = UU) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const XU = DU();
      ("string" === typeof UU || "function" === typeof Request && UU instanceof Request || "function" === typeof URL && UU instanceof URL) && (UU = fetch(UU));
      const {
        instance: zU,
        module: cU
      } = await async function(UU, XU) {
        if ("function" === typeof Response && UU instanceof Response) {
          if (!UU.ok) throw new Error(`failed to fetch Wasm: ${UU.status} ${UU.statusText} fetching '${UU.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(UU, XU)
          } catch (zU) {
            if (! function(UU) {
                switch (UU) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(UU.type) || "application/wasm" === UU.headers.get("Content-Type")) throw zU;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", zU)
          }
          const cU = await UU.arrayBuffer();
          return await WebAssembly.instantiate(cU, XU)
        } {
          const zU = await WebAssembly.instantiate(UU, XU);
          return zU instanceof WebAssembly.Instance ? {
            instance: zU,
            module: UU
          } : zU
        }
      }(await UU, XU);
      return eU(zU, cU)
    }

    function qU() {
      dU = void 0, WU = void 0, NU = null, pU = null, tU = new Array(1024).fill(void 0), tU.push(void 0, null, !0, !1), gU = tU.length
    }
    var OU = zU(3176),
      SU = zU(7213);
    class rU extends Error {
      stage;
      constructor(UU, XU) {
        super((0, OU.J)(UU, XU), {
          cause: XU
        }), this.name = "BloxdReplayWasmError", this.stage = UU
      }
    }
    let uU = null,
      fU = null,
      iU = Promise.resolve(),
      HU = 0,
      MU = null,
      vU = null;

    function VU() {
      if (vU) return Promise.reject(vU);
      if (fU) return fU;
      const UU = HU,
        XU = iU,
        yU = (async () => {
          let yU;
          await XU, uU ??= (0, OU.M)(new zU.U(zU(64147)), (0, SU.e)("bloxd_wasm_replay"));
          try {
            yU = await uU
          } catch (QU) {
            throw uU = null, new rU((0, OU.T)(QU), QU)
          }
          if (UU !== HU) throw new rU("instantiate", new Error("unloaded while loading"));
          try {
            await wU({
              module_or_path: yU
            })
          } catch (QU) {
            throw qU(), new rU("instantiate", QU)
          }
          if (UU !== HU) throw qU(), new rU("instantiate", new Error("unloaded while loading"));
          return MU = oU(), cU
        })();
      return fU = yU, iU = yU.catch((() => {})), yU.catch((() => {
        fU === yU && (fU = null)
      })), yU
    }

    function sU() {
      vU || lU()
    }

    function nU() {
      return MU?.buffer.byteLength ?? 0
    }

    function mU(UU) {
      return vU || (vU = new rU("call", UU), lU()), vU
    }

    function lU() {
      HU++, qU(), fU = null, MU = null
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);