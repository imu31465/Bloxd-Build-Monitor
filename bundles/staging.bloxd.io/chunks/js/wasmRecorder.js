export const id = 65;
export const ids = [65];
export const modules = {
  61344: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/bloxd_wasm_recorder_bg.e96e82d846d8aabe3338.wasm"
  },
  61336: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      BloxdRecorderWasmError: () => IT,
      RECORDER_MODULE_ID: () => XT,
      loadRecorderModule: () => FT,
      markRecorderTrapped: () => VT,
      prefetchRecorderModule: () => PT,
      recorderMemoryBytes: () => CT,
      unloadRecorderModule: () => uT
    });
    var WT = {};
    mT.r(WT), mT.d(WT, {
      jMT: () => zT,
      mnT: () => tT,
      Ul: () => MT,
      default: () => wT,
      initSync: () => dT,
      ml: () => gT,
      HMT: () => nT,
      RzT: () => HT
    });
    class zT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, jT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        YT.P6Qd(TT, 0)
      }
      busy() {
        return 0 !== YT.FxIf(this.__wbg_ptr)
      }
      command(TT, UT) {
        return 0 !== YT.EyQZ(this.__wbg_ptr, TT, UT)
      }
      mMT(TT) {
        return YT.bVmJ(this.__wbg_ptr, TT) >>> 0
      }
      AzT() {
        YT.mWtv(this.__wbg_ptr)
      }
      ozT() {
        return YT.A87t(this.__wbg_ptr) >>> 0
      }
      DzT() {
        return YT.QElT(this.__wbg_ptr)
      }
      MMT() {
        return YT.tqOW(this.__wbg_ptr) >>> 0
      }
      gMT() {
        return YT.rabg(this.__wbg_ptr) >>> 0
      }
      feed(TT) {
        return YT.txe6(this.__wbg_ptr, TT) >>> 0
      }
      constructor() {
        const TT = YT.n0bW();
        return this.__wbg_ptr = TT, jT.register(this, this.__wbg_ptr, this), this
      }
      zMT() {
        return YT.qEIR(this.__wbg_ptr) >>> 0
      }
      WnT() {
        return YT.wssx(this.__wbg_ptr) >>> 0
      }
      hzT(TT, UT, mT) {
        return 0 !== YT.kFI9(this.__wbg_ptr, TT, UT, mT)
      }
      stage(TT) {
        return YT.MObI(this.__wbg_ptr, TT) >>> 0
      }
      step() {
        return YT.B8MZ(this.__wbg_ptr) >>> 0
      }
    }

    function MT(TT, UT) {
      const mT = function(TT, UT, mT) {
          if (void 0 === mT) {
            const mT = bT.encode(TT),
              WT = UT(mT.length, 1) >>> 0;
            return BT().subarray(WT, WT + mT.length).set(mT), JT = mT.length, WT
          }
          let WT = TT.length,
            zT = UT(WT, 1) >>> 0;
          const MT = BT();
          let gT = 0;
          for (; gT < WT; gT++) {
            const UT = TT.charCodeAt(gT);
            if (UT > 127) break;
            MT[zT + gT] = UT
          }
          if (gT !== WT) {
            0 !== gT && (TT = TT.slice(gT)), zT = mT(zT, WT, WT = gT + 3 * TT.length, 1) >>> 0;
            const UT = BT().subarray(zT + gT, zT + WT);
            gT += bT.encodeInto(TT, UT).written, zT = mT(zT, WT, gT, 1) >>> 0
          }
          return JT = gT, zT
        }(TT, YT.zk4t, YT.q7j5),
        WT = JT,
        zT = YT.eJ07(mT, WT, UT);
      if (zT[1]) throw vT(zT[0])
    }

    function gT() {
      YT.J3oO()
    }

    function nT() {
      return YT.BuY8() >>> 0
    }

    function HT() {
      return vT(YT.pcbh())
    }

    function kT() {
      return {
        __proto__: null,
        OIgK: {
          __proto__: null,
          YXaz: function(TT, UT) {
            return lT(Error(LT(TT, UT)))
          },
          sCsN: function() {
            return lT(YT.memory)
          },
          kGeO: function(TT, UT) {
            throw new Error(LT(TT, UT))
          },
          QRuL: function(TT, UT) {
            console.error(LT(TT, UT))
          },
          dNQ0: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (zT.prototype[Symbol.dispose] = zT.prototype.free);
    const jT = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((TT => YT?.__wbg_recordermodule_free(TT, 1)));

    function lT(TT) {
      cT === ZT.length && ZT.push(ZT.length + 1);
      const UT = cT;
      return cT = ZT[UT], ZT[UT] = TT, UT
    }

    function LT(TT, UT) {
      return function(TT, UT) {
        iT += UT, iT >= qT && (fT = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), fT.decode(), iT = UT);
        return fT.decode(BT().subarray(TT, TT + UT))
      }(TT >>> 0, UT)
    }
    let pT = null;

    function BT() {
      return null !== pT && 0 !== pT.byteLength || (pT = new Uint8Array(YT.memory.buffer)), pT
    }
    let ZT = new Array(1024).fill(void 0);
    ZT.push(void 0, null, !0, !1);
    let cT = ZT.length;

    function vT(TT) {
      const UT = function(TT) {
        return ZT[TT]
      }(TT);
      return function(TT) {
        TT < 1028 || (ZT[TT] = cT, cT = TT)
      }(TT), UT
    }
    let fT = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    fT.decode();
    const qT = 2146435072;
    let iT = 0;
    const bT = new TextEncoder;
    "encodeInto" in bT || (bT.encodeInto = function(TT, UT) {
      const mT = bT.encode(TT);
      return UT.set(mT), {
        read: TT.length,
        written: mT.length
      }
    });
    let OT, eT, YT, JT = 0;

    function xT(TT, UT) {
      return eT = TT, YT = TT.exports, OT = UT, pT = null, YT.MWsZ(), YT
    }

    function dT(TT) {
      if (void 0 !== YT) return YT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module: TT
      } = TT) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const UT = kT();
      TT instanceof WebAssembly.Module || (TT = new WebAssembly.Module(TT));
      return xT(new WebAssembly.Instance(TT, UT), TT)
    }
    async function wT(TT) {
      if (void 0 !== YT) return YT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module_or_path: TT
      } = TT) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const UT = kT();
      ("string" === typeof TT || "function" === typeof Request && TT instanceof Request || "function" === typeof URL && TT instanceof URL) && (TT = fetch(TT));
      const {
        instance: mT,
        module: WT
      } = await async function(TT, UT) {
        if ("function" === typeof Response && TT instanceof Response) {
          if (!TT.ok) throw new Error(`failed to fetch Wasm: ${TT.status} ${TT.statusText} fetching '${TT.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(TT, UT)
          } catch (mT) {
            if (! function(TT) {
                switch (TT) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(TT.type) || "application/wasm" === TT.headers.get("Content-Type")) throw mT;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", mT)
          }
          const WT = await TT.arrayBuffer();
          return await WebAssembly.instantiate(WT, UT)
        } {
          const mT = await WebAssembly.instantiate(TT, UT);
          return mT instanceof WebAssembly.Instance ? {
            instance: mT,
            module: TT
          } : mT
        }
      }(await TT, UT);
      return xT(mT, WT)
    }

    function tT() {
      YT = void 0, eT = void 0, pT = null, ZT = new Array(1024).fill(void 0), ZT.push(void 0, null, !0, !1), cT = ZT.length
    }
    var aT = mT(3001),
      yT = mT(6688);
    const XT = 2;
    class IT extends Error {
      stage;
      constructor(TT, UT) {
        super((0, aT.F)(TT, UT), {
          cause: UT
        }), this.name = "BloxdRecorderWasmError", this.stage = TT
      }
    }
    let QT = null;
    const sT = function(TT) {
      let UT = null,
        mT = null,
        WT = null,
        zT = null;
      const MT = async () => {
        let mT = null;
        try {
          return mT = UT ??= (0, aT.I)(TT.url(), (0, yT.b)(TT.name)), await mT
        } catch (WT) {
          throw UT === mT && (UT = null), TT.error((0, aT.P)(WT), WT)
        }
      };
      return {
        load: () => {
          if (zT) return Promise.reject(zT);
          if (mT) return mT;
          const UT = (async () => {
            const UT = await MT();
            try {
              await TT.init(UT)
            } catch (mT) {
              throw TT.error("instantiate", mT)
            }
            return TT.bindings
          })();
          mT = UT, WT = UT;
          const gT = () => {
            WT === UT && (WT = null)
          };
          return UT.then(gT, (() => {
            gT(), mT === UT && (mT = null)
          })), UT
        },
        prefetch: async () => {
          zT || mT || await MT()
        },
        markTrapped: UT => (zT ??= TT.error("call", UT), zT),
        unload: () => {
          zT || !TT.reset || WT || (TT.reset(), mT = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new mT.U(mT(61344)),
      init: async TT => {
        await wT({
          module_or_path: TT
        }), QT = HT()
      },
      bindings: WT,
      error: (TT, UT) => new IT(TT, UT),
      reset: () => {
        tT(), QT = null
      }
    });

    function FT() {
      return sT.load()
    }

    function PT() {
      return sT.prefetch()
    }

    function VT(TT) {
      return sT.markTrapped(TT)
    }

    function uT() {
      sT.unload()
    }

    function CT() {
      return QT?.buffer.byteLength ?? 0
    }
  },
  6688: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT
    });
    var WT = mT(3001);
    const zT = {
      bloxd_wasm: () => "f27f4f7ab88718881db9d78f55a901cbbb02cd6bf05768435c5f2febd84d596d",
      bloxd_wasm_client: () => "fe788e9625b49e5678303f11a8ccc6a8c723d74fb00195130bf800992df44145",
      bloxd_wasm_workers: () => "9fb7dbb4f3017c2cc6380a2c767b44a4b54fa9ed16a4abd92a7532b57861043e",
      bloxd_wasm_models: () => "c20178931ac19cee58b7771522bf0ba147ea1510835a2c987e0b1db7fea6ed31",
      bloxd_wasm_webgpu: () => "35eb5bbeecb540e751c7772a16e8c673eae334d8012cb03c16848cbcaead6ddb",
      bloxd_wasm_webgl: () => "cec6d5fa8c55e39d3e1d139626227ac277edded615c086119498fb33675206ab",
      bloxd_wasm_webgl1: () => "74b3f9f1c13416de2df904cf4e4ab62ffa42eac861f93b0a1bccb4d2143350c5",
      bloxd_wasm_replay: () => "f779c38a59848818069249dcb1a8196265b0837c473149c9b69b1b4da8202e06",
      bloxd_wasm_recorder: () => "51a9fb786a0c5f3456cd21a32d84b845b2ae56e9d50089027c682f1bd37ca3f5",
      bloxd_wasm_anim: () => "9afb84ad58982f160166f83214a1898ab627c7d097478d5712c0084c9f41f151",
      bloxd_wasm_textures: () => "4cb0448cd98b7a67e67215005f76b27fa8e465345a667579443082f00c6c20a6",
      bloxd_wasm_shader_pack: () => "b8b683214f5ac4a8b9de92714a869aeb3ab931c2e3e084bdd9355b16df02f922"
    };
    var MT = mT(4780);

    function gT(TT) {
      const UT = Object.prototype.hasOwnProperty.call(zT, TT) ? zT[TT]() : void 0;
      if (void 0 !== UT) return {
        sha256: UT,
        onMismatch: MT.z
      };
      throw new WT.i(`${TT} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);