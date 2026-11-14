export const id = 54;
export const ids = [54];
export const modules = {
  58893: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bloxd_wasm_replay_bg.af1cb88bd269066c9840.wasm"
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
  },
  58888: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      BloxdReplayWasmError: () => pW,
      loadReplayModule: () => vR,
      markReplayTrapped: () => OW,
      replayMemoryBytes: () => uW,
      unloadReplayModule: () => KW
    });
    var wW = {};
    MW.r(wW), MW.d(wW, {
      SeW: () => CW,
      VtW: () => aR,
      TW: () => zR,
      default: () => kR,
      initSync: () => jR,
      gR: () => AW,
      HeW: () => bR,
      WBW: () => yR
    });
    class CW {
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, eW.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        rR.N2j0(WW, 0)
      }
      CBW(WW, RW, MW, wW, CW, zR) {
        rR.wBeA(this.__wbg_ptr, WW, RW, MW, wW, CW, zR)
      }
      close() {
        rR.GR3X(this.__wbg_ptr)
      }
      crop(WW, RW) {
        rR.l9EK(this.__wbg_ptr, WW, RW)
      }
      btW(WW, RW) {
        rR.rPTD(this.__wbg_ptr, WW, RW)
      }
      NBW() {
        return rR.z9UH(this.__wbg_ptr) >>> 0
      }
      ytW() {
        return rR.pkz7(this.__wbg_ptr) >>> 0
      }
      eBW() {
        return rR.Cm6w(this.__wbg_ptr) >>> 0
      }
      BBW() {
        return rR.vitB(this.__wbg_ptr) >>> 0
      }
      ABW(WW, RW) {
        rR.xHZ5(this.__wbg_ptr, WW, RW)
      }
      constructor() {
        const WW = rR.Y7Bl();
        return this.__wbg_ptr = WW, eW.register(this, this.__wbg_ptr, this), this
      }
      open() {
        rR.Mxdm(this.__wbg_ptr)
      }
      OeW() {
        return rR.qc1o(this.__wbg_ptr) >>> 0
      }
      pause() {
        rR.QueD(this.__wbg_ptr)
      }
      play() {
        rR.Q44s(this.__wbg_ptr)
      }
      save() {
        return rR.vYGy(this.__wbg_ptr) >>> 0
      }
      ttW() {
        rR.kEHH(this.__wbg_ptr)
      }
      seek(WW, RW) {
        rR.HeVz(this.__wbg_ptr, WW, RW)
      }
      gtW(WW) {
        rR.gUZd(this.__wbg_ptr, WW)
      }
      ztW(WW, RW) {
        const MW = function(WW, RW) {
            const MW = RW(8 * WW.length, 8) >>> 0;
            return function() {
              null !== tR && 0 !== tR.byteLength || (tR = new Float64Array(rR.memory.buffer));
              return tR
            }().set(WW, MW / 8), cR = WW.length, MW
          }(RW, rR.F0S7),
          wW = cR;
        rR.V6Qb(this.__wbg_ptr, WW, MW, wW)
      }
      wBW(WW, RW) {
        rR.rj4J(this.__wbg_ptr, WW, RW)
      }
      TBW(WW) {
        rR.FQLX(this.__wbg_ptr, WW)
      }
      stage(WW) {
        return rR.sWHZ(this.__wbg_ptr, WW) >>> 0
      }
      step(WW, RW) {
        return rR.BBWB(this.__wbg_ptr, WW, RW) >>> 0
      }
    }

    function zR(WW, RW) {
      const MW = function(WW, RW, MW) {
          if (void 0 === MW) {
            const MW = FW.encode(WW),
              wW = RW(MW.length, 1) >>> 0;
            return iR().subarray(wW, wW + MW.length).set(MW), cR = MW.length, wW
          }
          let wW = WW.length,
            CW = RW(wW, 1) >>> 0;
          const zR = iR();
          let AW = 0;
          for (; AW < wW; AW++) {
            const RW = WW.charCodeAt(AW);
            if (RW > 127) break;
            zR[CW + AW] = RW
          }
          if (AW !== wW) {
            0 !== AW && (WW = WW.slice(AW)), CW = MW(CW, wW, wW = AW + 3 * WW.length, 1) >>> 0;
            const RW = iR().subarray(CW + AW, CW + wW);
            AW += FW.encodeInto(WW, RW).written, CW = MW(CW, wW, AW, 1) >>> 0
          }
          return cR = AW, CW
        }(WW, rR.F0S7, rR.fYGM),
        wW = cR,
        CW = rR.V0Zb(MW, wW, RW);
      if (CW[1]) throw PW(CW[0])
    }

    function AW() {
      rR.Nzr5()
    }

    function bR() {
      return rR.FCZn() >>> 0
    }

    function yR() {
      return PW(rR.Xo87())
    }

    function NW() {
      return {
        __proto__: null,
        wXc4: {
          __proto__: null,
          JVfT: function(WW, RW) {
            return BW(Error(TW(WW, RW)))
          },
          QzqS: function() {
            return BW(rR.memory)
          },
          IoVd: function(WW, RW) {
            throw new Error(TW(WW, RW))
          },
          OjoC: function(WW, RW) {
            console.error(TW(WW, RW))
          },
          c6SI: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (CW.prototype[Symbol.dispose] = CW.prototype.free);
    const eW = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((WW => rR?.__wbg_replaymodule_free(WW, 1)));

    function BW(WW) {
      JW === YW.length && YW.push(YW.length + 1);
      const RW = JW;
      return JW = YW[RW], YW[RW] = WW, RW
    }
    let tR = null;

    function TW(WW, RW) {
      return function(WW, RW) {
        lW += RW, lW >= oW && (IW = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), IW.decode(), lW = RW);
        return IW.decode(iR().subarray(WW, WW + RW))
      }(WW >>> 0, RW)
    }
    let gR = null;

    function iR() {
      return null !== gR && 0 !== gR.byteLength || (gR = new Uint8Array(rR.memory.buffer)), gR
    }
    let YW = new Array(1024).fill(void 0);
    YW.push(void 0, null, !0, !1);
    let JW = YW.length;

    function PW(WW) {
      const RW = function(WW) {
        return YW[WW]
      }(WW);
      return function(WW) {
        WW < 1028 || (YW[WW] = JW, JW = WW)
      }(WW), RW
    }
    let IW = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    IW.decode();
    const oW = 2146435072;
    let lW = 0;
    const FW = new TextEncoder;
    "encodeInto" in FW || (FW.encodeInto = function(WW, RW) {
      const MW = FW.encode(WW);
      return RW.set(MW), {
        read: WW.length,
        written: MW.length
      }
    });
    let fW, QW, rR, cR = 0;

    function XW(WW, RW) {
      return QW = WW, rR = WW.exports, fW = RW, tR = null, gR = null, rR.qEjq(), rR
    }

    function jR(WW) {
      if (void 0 !== rR) return rR;
      void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
        module: WW
      } = WW) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const RW = NW();
      WW instanceof WebAssembly.Module || (WW = new WebAssembly.Module(WW));
      return XW(new WebAssembly.Instance(WW, RW), WW)
    }
    async function kR(WW) {
      if (void 0 !== rR) return rR;
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
      return XW(MW, wW)
    }

    function aR() {
      rR = void 0, QW = void 0, tR = null, gR = null, YW = new Array(1024).fill(void 0), YW.push(void 0, null, !0, !1), JW = YW.length
    }
    var sW = MW(2801),
      dW = MW(5629);
    class pW extends Error {
      stage;
      constructor(WW, RW) {
        super((0, sW.l)(WW, RW), {
          cause: RW
        }), this.name = "BloxdReplayWasmError", this.stage = WW
      }
    }
    let hW = null,
      UW = null,
      EW = Promise.resolve(),
      VW = 0,
      mR = null,
      xR = null;

    function vR() {
      if (xR) return Promise.reject(xR);
      if (UW) return UW;
      const WW = VW,
        RW = EW,
        CW = (async () => {
          let CW;
          await RW, hW ??= (0, sW.p)(new MW.U(MW(58893)), (0, dW.e)("bloxd_wasm_replay"));
          try {
            CW = await hW
          } catch (zR) {
            throw hW = null, new pW((0, sW.s)(zR), zR)
          }
          if (WW !== VW) throw new pW("instantiate", new Error("unloaded while loading"));
          try {
            await kR({
              module_or_path: CW
            })
          } catch (zR) {
            throw aR(), new pW("instantiate", zR)
          }
          if (WW !== VW) throw aR(), new pW("instantiate", new Error("unloaded while loading"));
          return mR = yR(), wW
        })();
      return UW = CW, EW = CW.catch((() => {})), CW.catch((() => {
        UW === CW && (UW = null)
      })), CW
    }

    function KW() {
      xR || nW()
    }

    function uW() {
      return mR?.buffer.byteLength ?? 0
    }

    function OW(WW) {
      return xR || (xR = new pW("call", WW), nW()), xR
    }

    function nW() {
      VW++, aR(), UW = null, mR = null
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);