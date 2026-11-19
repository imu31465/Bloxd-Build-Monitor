export const id = 62;
export const ids = [62];
export const modules = {
  60535: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/bloxd_wasm_replay_bg.2482454926cd50f88503.wasm"
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
  },
  60527: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      BloxdReplayWasmError: () => fY,
      loadReplayModule: () => bY,
      markReplayTrapped: () => pY,
      replayMemoryBytes: () => qY,
      unloadReplayModule: () => XY
    });
    var FY = {};
    DY.r(FY), DY.d(FY, {
      FAY: () => AY,
      GIY: () => zY,
      qv: () => IY,
      default: () => HY,
      initSync: () => KY,
      kv: () => RY,
      LFY: () => OY,
      AAY: () => gY
    });
    class AY {
      __destroy_into_raw() {
        const YY = this.__wbg_ptr;
        return this.__wbg_ptr = 0, vY.unregister(this), YY
      }
      free() {
        const YY = this.__destroy_into_raw();
        NY.UVLz(YY, 0)
      }
      aAY(YY, rY, DY, FY, AY, IY) {
        NY.Yc5r(this.__wbg_ptr, YY, rY, DY, FY, AY, IY)
      }
      close() {
        NY.KRIM(this.__wbg_ptr)
      }
      crop(YY, rY) {
        NY.O6Hd(this.__wbg_ptr, YY, rY)
      }
      sAY(YY, rY) {
        NY.EWqP(this.__wbg_ptr, YY, rY)
      }
      yAY() {
        return NY.WLOo(this.__wbg_ptr) >>> 0
      }
      iAY() {
        return NY.qR6U(this.__wbg_ptr) >>> 0
      }
      QAY() {
        return NY.TQ7w(this.__wbg_ptr) >>> 0
      }
      oAY() {
        return NY.feAm(this.__wbg_ptr) >>> 0
      }
      uAY(YY, rY) {
        NY.kts5(this.__wbg_ptr, YY, rY)
      }
      constructor() {
        const YY = NY.VxZN();
        return this.__wbg_ptr = YY, vY.register(this, this.__wbg_ptr, this), this
      }
      open() {
        NY.bF6X(this.__wbg_ptr)
      }
      xFY() {
        return NY.WeYs(this.__wbg_ptr) >>> 0
      }
      pause() {
        NY.EVDd(this.__wbg_ptr)
      }
      play() {
        NY.bEt0(this.__wbg_ptr)
      }
      save() {
        return NY.rFYE(this.__wbg_ptr) >>> 0
      }
      EAY() {
        NY.uNMU(this.__wbg_ptr)
      }
      seek(YY, rY) {
        NY.I9z3(this.__wbg_ptr, YY, rY)
      }
      VAY(YY) {
        NY.h9FP(this.__wbg_ptr, YY)
      }
      vAY(YY, rY) {
        const DY = function(YY, rY) {
            const DY = rY(8 * YY.length, 8) >>> 0;
            return function() {
              null !== sY && 0 !== sY.byteLength || (sY = new Float64Array(NY.memory.buffer));
              return sY
            }().set(YY, DY / 8), BY = YY.length, DY
          }(rY, NY.XU1r),
          FY = BY;
        NY.H2OE(this.__wbg_ptr, YY, DY, FY)
      }
      gAY(YY, rY) {
        NY.Uz36(this.__wbg_ptr, YY, rY)
      }
      mAY(YY) {
        NY.kT9s(this.__wbg_ptr, YY)
      }
      stage(YY) {
        return NY.SIxg(this.__wbg_ptr, YY) >>> 0
      }
      step(YY, rY) {
        return NY.x6SS(this.__wbg_ptr, YY, rY) >>> 0
      }
    }

    function IY(YY, rY) {
      const DY = function(YY, rY, DY) {
          if (void 0 === DY) {
            const DY = lY.encode(YY),
              FY = rY(DY.length, 1) >>> 0;
            return QY().subarray(FY, FY + DY.length).set(DY), BY = DY.length, FY
          }
          let FY = YY.length,
            AY = rY(FY, 1) >>> 0;
          const IY = QY();
          let RY = 0;
          for (; RY < FY; RY++) {
            const rY = YY.charCodeAt(RY);
            if (rY > 127) break;
            IY[AY + RY] = rY
          }
          if (RY !== FY) {
            0 !== RY && (YY = YY.slice(RY)), AY = DY(AY, FY, FY = RY + 3 * YY.length, 1) >>> 0;
            const rY = QY().subarray(AY + RY, AY + FY);
            RY += lY.encodeInto(YY, rY).written, AY = DY(AY, FY, RY, 1) >>> 0
          }
          return BY = RY, AY
        }(YY, NY.XU1r, NY.q2AH),
        FY = BY,
        AY = NY.cC7w(DY, FY, rY);
      if (AY[1]) throw EY(AY[0])
    }

    function RY() {
      NY.RNX0()
    }

    function OY() {
      return NY.eOth() >>> 0
    }

    function gY() {
      return EY(NY.tYJ5())
    }

    function aY() {
      return {
        __proto__: null,
        klxV: {
          __proto__: null,
          wCRT: function(YY, rY) {
            return uY(Error(iY(YY, rY)))
          },
          kTmo: function() {
            return uY(NY.memory)
          },
          VCQA: function(YY, rY) {
            throw new Error(iY(YY, rY))
          },
          jHwn: function(YY, rY) {
            console.error(iY(YY, rY))
          },
          Gpar: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (AY.prototype[Symbol.dispose] = AY.prototype.free);
    const vY = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((YY => NY?.__wbg_replaymodule_free(YY, 1)));

    function uY(YY) {
      WY === oY.length && oY.push(oY.length + 1);
      const rY = WY;
      return WY = oY[rY], oY[rY] = YY, rY
    }
    let sY = null;

    function iY(YY, rY) {
      return function(YY, rY) {
        SY += rY, SY >= VY && (mY = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), mY.decode(), SY = rY);
        return mY.decode(QY().subarray(YY, YY + rY))
      }(YY >>> 0, rY)
    }
    let yY = null;

    function QY() {
      return null !== yY && 0 !== yY.byteLength || (yY = new Uint8Array(NY.memory.buffer)), yY
    }
    let oY = new Array(1024).fill(void 0);
    oY.push(void 0, null, !0, !1);
    let WY = oY.length;

    function EY(YY) {
      const rY = function(YY) {
        return oY[YY]
      }(YY);
      return function(YY) {
        YY < 1028 || (oY[YY] = WY, WY = YY)
      }(YY), rY
    }
    let mY = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    mY.decode();
    const VY = 2146435072;
    let SY = 0;
    const lY = new TextEncoder;
    "encodeInto" in lY || (lY.encodeInto = function(YY, rY) {
      const DY = lY.encode(YY);
      return rY.set(DY), {
        read: YY.length,
        written: DY.length
      }
    });
    let TY, eY, NY, BY = 0;

    function cY(YY, rY) {
      return eY = YY, NY = YY.exports, TY = rY, sY = null, yY = null, NY.CELZ(), NY
    }

    function KY(YY) {
      if (void 0 !== NY) return NY;
      void 0 !== YY && (Object.getPrototypeOf(YY) === Object.prototype ? ({
        module: YY
      } = YY) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const rY = aY();
      YY instanceof WebAssembly.Module || (YY = new WebAssembly.Module(YY));
      return cY(new WebAssembly.Instance(YY, rY), YY)
    }
    async function HY(YY) {
      if (void 0 !== NY) return NY;
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
      return cY(DY, FY)
    }

    function zY() {
      NY = void 0, eY = void 0, sY = null, yY = null, oY = new Array(1024).fill(void 0), oY.push(void 0, null, !0, !1), WY = oY.length
    }
    var ZY = DY(3316),
      CY = DY(6185);
    class fY extends Error {
      stage;
      constructor(YY, rY) {
        super((0, ZY.z)(YY, rY), {
          cause: rY
        }), this.name = "BloxdReplayWasmError", this.stage = YY
      }
    }
    let jY = null,
      hY = null,
      dY = Promise.resolve(),
      JY = 0,
      MY = null,
      wY = null;

    function bY() {
      if (wY) return Promise.reject(wY);
      if (hY) return hY;
      const YY = JY,
        rY = dY,
        AY = (async () => {
          let AY;
          await rY, jY ??= (0, ZY.C)(new DY.U(DY(60535)), (0, CY.d)("bloxd_wasm_replay"));
          try {
            AY = await jY
          } catch (IY) {
            throw jY = null, new fY((0, ZY.E)(IY), IY)
          }
          if (YY !== JY) throw new fY("instantiate", new Error("unloaded while loading"));
          try {
            await HY({
              module_or_path: AY
            })
          } catch (IY) {
            throw zY(), new fY("instantiate", IY)
          }
          if (YY !== JY) throw zY(), new fY("instantiate", new Error("unloaded while loading"));
          return MY = gY(), FY
        })();
      return hY = AY, dY = AY.catch((() => {})), AY.catch((() => {
        hY === AY && (hY = null)
      })), AY
    }

    function XY() {
      wY || kY()
    }

    function qY() {
      return MY?.buffer.byteLength ?? 0
    }

    function pY(YY) {
      return wY || (wY = new fY("call", YY), kY()), wY
    }

    function kY() {
      JY++, zY(), hY = null, MY = null
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);