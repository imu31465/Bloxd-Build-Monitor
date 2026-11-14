export const id = 53;
export const ids = [53];
export const modules = {
  58884: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bloxd_wasm_recorder_bg.ff2afbd8795024cc7fec.wasm"
  },
  58881: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      BloxdRecorderWasmError: () => pW,
      RECORDER_MODULE_ID: () => dW,
      loadRecorderModule: () => EW,
      markRecorderTrapped: () => mR,
      prefetchRecorderModule: () => VW,
      recorderMemoryBytes: () => vR,
      unloadRecorderModule: () => xR
    });
    var wW = {};
    MW.r(wW), MW.d(wW, {
      qBW: () => CW,
      VtW: () => kR,
      TW: () => zR,
      default: () => jR,
      initSync: () => XW,
      gR: () => AW,
      HeW: () => bR,
      vBW: () => yR
    });
    class CW {
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, eW.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        QW.SSME(WW, 0)
      }
      busy() {
        return 0 !== QW.XHBT(this.__wbg_ptr)
      }
      command(WW, RW) {
        return 0 !== QW.zCnJ(this.__wbg_ptr, WW, RW)
      }
      KeW(WW) {
        return QW.UqAR(this.__wbg_ptr, WW) >>> 0
      }
      xBW() {
        QW.FXCl(this.__wbg_ptr)
      }
      mBW() {
        return QW.XroI(this.__wbg_ptr) >>> 0
      }
      VeW() {
        return QW.AFDy(this.__wbg_ptr)
      }
      neW() {
        return QW.Yisj(this.__wbg_ptr) >>> 0
      }
      GeW() {
        return QW.bpOo(this.__wbg_ptr) >>> 0
      }
      feed(WW) {
        return QW.ROgA(this.__wbg_ptr, WW) >>> 0
      }
      constructor() {
        const WW = QW.u7si();
        return this.__wbg_ptr = WW, eW.register(this, this.__wbg_ptr, this), this
      }
      OeW() {
        return QW.n38J(this.__wbg_ptr) >>> 0
      }
      mTW() {
        return QW.QciT(this.__wbg_ptr) >>> 0
      }
      EeW(WW, RW, MW) {
        return 0 !== QW.oQTG(this.__wbg_ptr, WW, RW, MW)
      }
      stage(WW) {
        return QW.XubR(this.__wbg_ptr, WW) >>> 0
      }
      step() {
        return QW.iwhJ(this.__wbg_ptr) >>> 0
      }
    }

    function zR(WW, RW) {
      const MW = function(WW, RW, MW) {
          if (void 0 === MW) {
            const MW = lW.encode(WW),
              wW = RW(MW.length, 1) >>> 0;
            return gR().subarray(wW, wW + MW.length).set(MW), rR = MW.length, wW
          }
          let wW = WW.length,
            CW = RW(wW, 1) >>> 0;
          const zR = gR();
          let AW = 0;
          for (; AW < wW; AW++) {
            const RW = WW.charCodeAt(AW);
            if (RW > 127) break;
            zR[CW + AW] = RW
          }
          if (AW !== wW) {
            0 !== AW && (WW = WW.slice(AW)), CW = MW(CW, wW, wW = AW + 3 * WW.length, 1) >>> 0;
            const RW = gR().subarray(CW + AW, CW + wW);
            AW += lW.encodeInto(WW, RW).written, CW = MW(CW, wW, AW, 1) >>> 0
          }
          return rR = AW, CW
        }(WW, QW.M1HZ, QW.kuEx),
        wW = rR,
        CW = QW.THus(MW, wW, RW);
      if (CW[1]) throw JW(CW[0])
    }

    function AW() {
      QW.tFzz()
    }

    function bR() {
      return QW.JiVO() >>> 0
    }

    function yR() {
      return JW(QW.SjSM())
    }

    function NW() {
      return {
        __proto__: null,
        ry1m: {
          __proto__: null,
          TzZ5: function(WW, RW) {
            return BW(Error(tR(WW, RW)))
          },
          wqjV: function() {
            return BW(QW.memory)
          },
          fW6P: function(WW, RW) {
            throw new Error(tR(WW, RW))
          },
          xedJ: function(WW, RW) {
            console.error(tR(WW, RW))
          },
          m4BV: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (CW.prototype[Symbol.dispose] = CW.prototype.free);
    const eW = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((WW => QW?.__wbg_recordermodule_free(WW, 1)));

    function BW(WW) {
      YW === iR.length && iR.push(iR.length + 1);
      const RW = YW;
      return YW = iR[RW], iR[RW] = WW, RW
    }

    function tR(WW, RW) {
      return function(WW, RW) {
        oW += RW, oW >= IW && (PW = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), PW.decode(), oW = RW);
        return PW.decode(gR().subarray(WW, WW + RW))
      }(WW >>> 0, RW)
    }
    let TW = null;

    function gR() {
      return null !== TW && 0 !== TW.byteLength || (TW = new Uint8Array(QW.memory.buffer)), TW
    }
    let iR = new Array(1024).fill(void 0);
    iR.push(void 0, null, !0, !1);
    let YW = iR.length;

    function JW(WW) {
      const RW = function(WW) {
        return iR[WW]
      }(WW);
      return function(WW) {
        WW < 1028 || (iR[WW] = YW, YW = WW)
      }(WW), RW
    }
    let PW = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    PW.decode();
    const IW = 2146435072;
    let oW = 0;
    const lW = new TextEncoder;
    "encodeInto" in lW || (lW.encodeInto = function(WW, RW) {
      const MW = lW.encode(WW);
      return RW.set(MW), {
        read: WW.length,
        written: MW.length
      }
    });
    let FW, fW, QW, rR = 0;

    function cR(WW, RW) {
      return fW = WW, QW = WW.exports, FW = RW, TW = null, QW.lFtq(), QW
    }

    function XW(WW) {
      if (void 0 !== QW) return QW;
      void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
        module: WW
      } = WW) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const RW = NW();
      WW instanceof WebAssembly.Module || (WW = new WebAssembly.Module(WW));
      return cR(new WebAssembly.Instance(WW, RW), WW)
    }
    async function jR(WW) {
      if (void 0 !== QW) return QW;
      void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
        module_or_path: WW
      } = WW) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const RW = NW();
      ("string" === typeof WW || "function" === typeof Request && WW instanceof Request || "function" === typeof URL && WW instanceof URL) && (WW = fetch(WW));
      const {
        instance: MW,
        module: wW
      } = await async function(WW, RW) {
        if ("function" === typeof Response && WW instanceof Response) {
          if (!WW.ok) throw new Error(`failed to fetch Wasm: ${WW.status} ${WW.statusText} fetching '${WW.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(WW, RW)
          } catch (MW) {
            if (! function(WW) {
                switch (WW) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(WW.type) || "application/wasm" === WW.headers.get("Content-Type")) throw MW;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", MW)
          }
          const wW = await WW.arrayBuffer();
          return await WebAssembly.instantiate(wW, RW)
        } {
          const MW = await WebAssembly.instantiate(WW, RW);
          return MW instanceof WebAssembly.Instance ? {
            instance: MW,
            module: WW
          } : MW
        }
      }(await WW, RW);
      return cR(MW, wW)
    }

    function kR() {
      QW = void 0, fW = void 0, TW = null, iR = new Array(1024).fill(void 0), iR.push(void 0, null, !0, !1), YW = iR.length
    }
    var aR = MW(2801),
      sW = MW(5629);
    const dW = 2;
    class pW extends Error {
      stage;
      constructor(WW, RW) {
        super((0, aR.l)(WW, RW), {
          cause: RW
        }), this.name = "BloxdRecorderWasmError", this.stage = WW
      }
    }
    let hW = null;
    const UW = function(WW) {
      let RW = null,
        MW = null,
        wW = null,
        CW = null;
      const zR = async () => {
        let MW = null;
        try {
          return MW = RW ??= (0, aR.p)(WW.url(), (0, sW.e)(WW.name)), await MW
        } catch (wW) {
          throw RW === MW && (RW = null), WW.error((0, aR.s)(wW), wW)
        }
      };
      return {
        load: () => {
          if (CW) return Promise.reject(CW);
          if (MW) return MW;
          const RW = (async () => {
            const RW = await zR();
            try {
              await WW.init(RW)
            } catch (MW) {
              throw WW.error("instantiate", MW)
            }
            return WW.zC
          })();
          MW = RW, wW = RW;
          const AW = () => {
            wW === RW && (wW = null)
          };
          return RW.then(AW, (() => {
            AW(), MW === RW && (MW = null)
          })), RW
        },
        prefetch: async () => {
          CW || MW || await zR()
        },
        markTrapped: RW => (CW ??= WW.error("call", RW), CW),
        unload: () => {
          CW || !WW.reset || wW || (WW.reset(), MW = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new MW.U(MW(58884)),
      init: async WW => {
        await jR({
          module_or_path: WW
        }), hW = yR()
      },
      zC: wW,
      error: (WW, RW) => new pW(WW, RW),
      reset: () => {
        kR(), hW = null
      }
    });

    function EW() {
      return UW.load()
    }

    function VW() {
      return UW.prefetch()
    }

    function mR(WW) {
      return UW.markTrapped(WW)
    }

    function xR() {
      UW.unload()
    }

    function vR() {
      return hW?.buffer.byteLength ?? 0
    }
  },
  5629: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW
    });
    var wW = MW(2801);
    const CW = {
      bloxd_wasm: () => "203c21aa685dc02d7135644abbcd3b43a006a971312aadf6b579e5c0912ba5f7",
      bloxd_wasm_client: () => "a77ff3d7010d2eb8b76b633277c458a02aa69d73a6b7b0f61b4b56c179565d82",
      bloxd_wasm_workers: () => "8f412dfdd4f30dbd2d7737bcfcbe48d8a44b2a8da10bfb2ae1b7e29d51125437",
      bloxd_wasm_models: () => "a2c24e83a17a8ea51d6d551a71c56cb26ce4162026e1cbbb094de7dc563c2466",
      bloxd_wasm_webgpu: () => "03136cbb4279f6e19dbdc7a6b27a89a1e9dbcfb41906d617400c1b8098a140cb",
      bloxd_wasm_webgl: () => "4b1a25494c2ed4cf220a7bb9a10b8c6844ff1f76c23929d2be00a88620743abd",
      bloxd_wasm_webgl1: () => "52bf789737e0035155091501532e60c5bb14c4059bdcbfb7216afa8b3715b02c",
      bloxd_wasm_replay: () => "1f5392d4ced29d91bff7aeba499f106661213b56c971b192288c4811b41cd07d",
      bloxd_wasm_recorder: () => "1fac86a86643ebd2010f3fe11c6a8cc2c6566f8162e97196ae75675bc3261673",
      bloxd_wasm_anim: () => "64cb5cc983adf707988a6c6507854d48955c50f80be9775c4150614da93910d2",
      bloxd_wasm_textures: () => "80b1e00de8cbc353671c67c9ae46a7c22ba4eb45364a0d4e33added505ec03be",
      bloxd_wasm_shader_pack: () => "13dad2e0aefbfe2a4f35d53d1b0b8cf2c467c8940e7540c4c139f66d272dac12"
    };
    var zR = MW(5631);

    function AW(WW) {
      const RW = Object.prototype.hasOwnProperty.call(CW, WW) ? CW[WW]() : void 0;
      if (void 0 !== RW) return {
        sha256: RW,
        onMismatch: zR.p
      };
      throw new wW.f(`${WW} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);