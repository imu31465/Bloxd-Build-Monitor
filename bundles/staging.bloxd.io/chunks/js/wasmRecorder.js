export const id = 61;
export const ids = [61];
export const modules = {
  60525: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/bloxd_wasm_recorder_bg.b31b32493e742f51f34b.wasm"
  },
  60519: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      BloxdRecorderWasmError: () => fY,
      RECORDER_MODULE_ID: () => CY,
      loadRecorderModule: () => dY,
      markRecorderTrapped: () => MY,
      prefetchRecorderModule: () => JY,
      recorderMemoryBytes: () => bY,
      unloadRecorderModule: () => wY
    });
    var FY = {};
    DY.r(FY), DY.d(FY, {
      YAY: () => AY,
      GIY: () => HY,
      qv: () => IY,
      default: () => KY,
      initSync: () => cY,
      kv: () => RY,
      LFY: () => OY,
      pFY: () => gY
    });
    class AY {
      __destroy_into_raw() {
        const YY = this.__wbg_ptr;
        return this.__wbg_ptr = 0, vY.unregister(this), YY
      }
      free() {
        const YY = this.__destroy_into_raw();
        eY.Uqsm(YY, 0)
      }
      busy() {
        return 0 !== eY.KQjs(this.__wbg_ptr)
      }
      command(YY, rY) {
        return 0 !== eY.pymb(this.__wbg_ptr, YY, rY)
      }
      kFY(YY) {
        return eY.cjoV(this.__wbg_ptr, YY) >>> 0
      }
      qFY() {
        eY.XmDU(this.__wbg_ptr)
      }
      XFY() {
        return eY.tA5X(this.__wbg_ptr) >>> 0
      }
      bFY() {
        return eY.bBvP(this.__wbg_ptr)
      }
      nFY() {
        return eY.lV3v(this.__wbg_ptr) >>> 0
      }
      PFY() {
        return eY.KQoP(this.__wbg_ptr) >>> 0
      }
      feed(YY) {
        return eY.xuHK(this.__wbg_ptr, YY) >>> 0
      }
      constructor() {
        const YY = eY.Ewz7();
        return this.__wbg_ptr = YY, vY.register(this, this.__wbg_ptr, this), this
      }
      xFY() {
        return eY.pLn5(this.__wbg_ptr) >>> 0
      }
      xIY() {
        return eY.wI0x(this.__wbg_ptr) >>> 0
      }
      wFY(YY, rY, DY) {
        return 0 !== eY.GJFf(this.__wbg_ptr, YY, rY, DY)
      }
      stage(YY) {
        return eY.WwCu(this.__wbg_ptr, YY) >>> 0
      }
      step() {
        return eY.Fcpk(this.__wbg_ptr) >>> 0
      }
    }

    function IY(YY, rY) {
      const DY = function(YY, rY, DY) {
          if (void 0 === DY) {
            const DY = SY.encode(YY),
              FY = rY(DY.length, 1) >>> 0;
            return yY().subarray(FY, FY + DY.length).set(DY), NY = DY.length, FY
          }
          let FY = YY.length,
            AY = rY(FY, 1) >>> 0;
          const IY = yY();
          let RY = 0;
          for (; RY < FY; RY++) {
            const rY = YY.charCodeAt(RY);
            if (rY > 127) break;
            IY[AY + RY] = rY
          }
          if (RY !== FY) {
            0 !== RY && (YY = YY.slice(RY)), AY = DY(AY, FY, FY = RY + 3 * YY.length, 1) >>> 0;
            const rY = yY().subarray(AY + RY, AY + FY);
            RY += SY.encodeInto(YY, rY).written, AY = DY(AY, FY, RY, 1) >>> 0
          }
          return NY = RY, AY
        }(YY, eY.CzqP, eY.vNe0),
        FY = NY,
        AY = eY.HRXj(DY, FY, rY);
      if (AY[1]) throw WY(AY[0])
    }

    function RY() {
      eY.OSXx()
    }

    function OY() {
      return eY.DZ5Z() >>> 0
    }

    function gY() {
      return WY(eY.EJlY())
    }

    function aY() {
      return {
        __proto__: null,
        gCYT: {
          __proto__: null,
          N8Yr: function(YY, rY) {
            return uY(Error(sY(YY, rY)))
          },
          pOB4: function() {
            return uY(eY.memory)
          },
          hzXn: function(YY, rY) {
            throw new Error(sY(YY, rY))
          },
          aWxJ: function(YY, rY) {
            console.error(sY(YY, rY))
          },
          EdDf: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (AY.prototype[Symbol.dispose] = AY.prototype.free);
    const vY = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((YY => eY?.__wbg_recordermodule_free(YY, 1)));

    function uY(YY) {
      oY === QY.length && QY.push(QY.length + 1);
      const rY = oY;
      return oY = QY[rY], QY[rY] = YY, rY
    }

    function sY(YY, rY) {
      return function(YY, rY) {
        VY += rY, VY >= mY && (EY = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), EY.decode(), VY = rY);
        return EY.decode(yY().subarray(YY, YY + rY))
      }(YY >>> 0, rY)
    }
    let iY = null;

    function yY() {
      return null !== iY && 0 !== iY.byteLength || (iY = new Uint8Array(eY.memory.buffer)), iY
    }
    let QY = new Array(1024).fill(void 0);
    QY.push(void 0, null, !0, !1);
    let oY = QY.length;

    function WY(YY) {
      const rY = function(YY) {
        return QY[YY]
      }(YY);
      return function(YY) {
        YY < 1028 || (QY[YY] = oY, oY = YY)
      }(YY), rY
    }
    let EY = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    EY.decode();
    const mY = 2146435072;
    let VY = 0;
    const SY = new TextEncoder;
    "encodeInto" in SY || (SY.encodeInto = function(YY, rY) {
      const DY = SY.encode(YY);
      return rY.set(DY), {
        read: YY.length,
        written: DY.length
      }
    });
    let lY, TY, eY, NY = 0;

    function BY(YY, rY) {
      return TY = YY, eY = YY.exports, lY = rY, iY = null, eY.OmYh(), eY
    }

    function cY(YY) {
      if (void 0 !== eY) return eY;
      void 0 !== YY && (Object.getPrototypeOf(YY) === Object.prototype ? ({
        module: YY
      } = YY) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const rY = aY();
      YY instanceof WebAssembly.Module || (YY = new WebAssembly.Module(YY));
      return BY(new WebAssembly.Instance(YY, rY), YY)
    }
    async function KY(YY) {
      if (void 0 !== eY) return eY;
      void 0 !== YY && (Object.getPrototypeOf(YY) === Object.prototype ? ({
        module_or_path: YY
      } = YY) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const rY = aY();
      ("string" === typeof YY || "function" === typeof Request && YY instanceof Request || "function" === typeof URL && YY instanceof URL) && (YY = fetch(YY));
      const {
        instance: DY,
        module: FY
      } = await async function(YY, rY) {
        if ("function" === typeof Response && YY instanceof Response) {
          if (!YY.ok) throw new Error(`failed to fetch Wasm: ${YY.status} ${YY.statusText} fetching '${YY.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(YY, rY)
          } catch (DY) {
            if (! function(YY) {
                switch (YY) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(YY.type) || "application/wasm" === YY.headers.get("Content-Type")) throw DY;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", DY)
          }
          const FY = await YY.arrayBuffer();
          return await WebAssembly.instantiate(FY, rY)
        } {
          const DY = await WebAssembly.instantiate(YY, rY);
          return DY instanceof WebAssembly.Instance ? {
            instance: DY,
            module: YY
          } : DY
        }
      }(await YY, rY);
      return BY(DY, FY)
    }

    function HY() {
      eY = void 0, TY = void 0, iY = null, QY = new Array(1024).fill(void 0), QY.push(void 0, null, !0, !1), oY = QY.length
    }
    var zY = DY(3316),
      ZY = DY(6185);
    const CY = 2;
    class fY extends Error {
      stage;
      constructor(YY, rY) {
        super((0, zY.z)(YY, rY), {
          cause: rY
        }), this.name = "BloxdRecorderWasmError", this.stage = YY
      }
    }
    let jY = null;
    const hY = function(YY) {
      let rY = null,
        DY = null,
        FY = null,
        AY = null;
      const IY = async () => {
        let DY = null;
        try {
          return DY = rY ??= (0, zY.C)(YY.url(), (0, ZY.d)(YY.name)), await DY
        } catch (FY) {
          throw rY === DY && (rY = null), YY.error((0, zY.E)(FY), FY)
        }
      };
      return {
        load: () => {
          if (AY) return Promise.reject(AY);
          if (DY) return DY;
          const rY = (async () => {
            const rY = await IY();
            try {
              await YY.init(rY)
            } catch (DY) {
              throw YY.error("instantiate", DY)
            }
            return YY.bindings
          })();
          DY = rY, FY = rY;
          const RY = () => {
            FY === rY && (FY = null)
          };
          return rY.then(RY, (() => {
            RY(), DY === rY && (DY = null)
          })), rY
        },
        prefetch: async () => {
          AY || DY || await IY()
        },
        markTrapped: rY => (AY ??= YY.error("call", rY), AY),
        unload: () => {
          AY || !YY.reset || FY || (YY.reset(), DY = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new DY.U(DY(60525)),
      init: async YY => {
        await KY({
          module_or_path: YY
        }), jY = gY()
      },
      bindings: FY,
      error: (YY, rY) => new fY(YY, rY),
      reset: () => {
        HY(), jY = null
      }
    });

    function dY() {
      return hY.load()
    }

    function JY() {
      return hY.prefetch()
    }

    function MY(YY) {
      return hY.markTrapped(YY)
    }

    function wY() {
      hY.unload()
    }

    function bY() {
      return jY?.buffer.byteLength ?? 0
    }
  },
  6185: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(3316);
    const AY = {
      bloxd_wasm: () => "903337e90214806242ef5ad341398181be3c87ea5226f5d308c1f706cca47468",
      bloxd_wasm_client: () => "d9f45f5c46370841da4c8574a141121ea34c64a996f4d1841ecd95c2e1c42524",
      bloxd_wasm_workers: () => "e832a210d1a00892314a96a90d4a810c538ccaba01655c65f515d94a02133b57",
      bloxd_wasm_models: () => "2f768b4533240fc126cb3ccd5bdd269ed4498ed1fa63eed4e2b125cc3c87dc9b",
      bloxd_wasm_webgpu: () => "13ae76830081d62490819e5586d96d611b16f3d36319392e7684b387dbb9a0ed",
      bloxd_wasm_webgl: () => "75d934553815430308e568d5596dcf3cbeac88e44101ca29221bb1053d751211",
      bloxd_wasm_webgl1: () => "b26fe3e2f92ba241e60c4d5654b9403c8c421137a13bbf9dcd393877458f3414",
      bloxd_wasm_replay: () => "48557d8c4d7642abff5e313d857ceb9ccf1d9842abaebd08aa0b5e4cbb90872b",
      bloxd_wasm_recorder: () => "68796f2c46f67a890c7e7a667a741a45748b338eb4307c043ddd50d779195794",
      bloxd_wasm_anim: () => "64d4b11d72243c88f5656437b1d8dfffaf2dae8a64597e8568942258a1cd2cc6",
      bloxd_wasm_textures: () => "129a63db7ae9f368dd82ca48a44da3bbf65d4eca5fdba1989a22ec841eb964c3",
      bloxd_wasm_shader_pack: () => "907c252f98c6434be7b5e8e7e6ecbbf37da692dc3544d16a95f87d273dc21da1"
    };
    var IY = DY(4269);

    function RY(YY) {
      const rY = Object.prototype.hasOwnProperty.call(AY, YY) ? AY[YY]() : void 0;
      if (void 0 !== rY) return {
        sha256: rY,
        onMismatch: IY.z
      };
      throw new FY.h(`${YY} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);